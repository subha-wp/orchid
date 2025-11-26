import { cookies } from 'next/headers';
import { getDb } from './db';
import bcrypt from 'bcryptjs';

export interface User {
  id: number;
  email: string;
  password_hash: string;
}

export async function verifyUser(email: string, password: string): Promise<User | null> {
  const db = getDb();
  const user = db.prepare('SELECT * FROM users WHERE email = ?').get(email) as User | undefined;
  
  if (!user) {
    return null;
  }
  
  const isValid = await bcrypt.compare(password, user.password_hash);
  return isValid ? user : null;
}

export async function createSession(userId: number): Promise<string> {
  const db = getDb();
  const sessionId = Buffer.from(`${Date.now()}-${Math.random()}-${userId}`).toString('base64');
  
  // Session expires in 7 days
  const expiresAt = new Date();
  expiresAt.setDate(expiresAt.getDate() + 7);
  
  db.prepare(`
    INSERT INTO sessions (id, user_id, expires_at)
    VALUES (?, ?, ?)
  `).run(sessionId, userId, expiresAt.toISOString());
  
  return sessionId;
}

export async function getSession(): Promise<string | null> {
  const cookieStore = await cookies();
  return cookieStore.get('admin_session')?.value || null;
}

export async function setSession(sessionId: string) {
  const cookieStore = await cookies();
  cookieStore.set('admin_session', sessionId, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    maxAge: 60 * 60 * 24 * 7 // 7 days
  });
}

export async function deleteSession() {
  const cookieStore = await cookies();
  const sessionId = cookieStore.get('admin_session')?.value;
  
  if (sessionId) {
    const db = getDb();
    db.prepare('DELETE FROM sessions WHERE id = ?').run(sessionId);
  }
  
  cookieStore.delete('admin_session');
}

export async function isAuthenticated(): Promise<boolean> {
  const sessionId = await getSession();
  if (!sessionId) {
    return false;
  }
  
  const db = getDb();
  const session = db.prepare(`
    SELECT * FROM sessions 
    WHERE id = ? AND expires_at > datetime('now')
  `).get(sessionId);
  
  return !!session;
}

export async function getCurrentUser(): Promise<User | null> {
  const sessionId = await getSession();
  if (!sessionId) {
    return null;
  }
  
  const db = getDb();
  const session = db.prepare(`
    SELECT user_id FROM sessions 
    WHERE id = ? AND expires_at > datetime('now')
  `).get(sessionId) as { user_id: number } | undefined;
  
  if (!session) {
    return null;
  }
  
  const user = db.prepare('SELECT * FROM users WHERE id = ?').get(session.user_id) as User | undefined;
  return user || null;
}

