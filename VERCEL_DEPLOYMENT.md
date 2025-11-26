# Vercel Deployment Guide

## ⚠️ Current Limitation

**SQLite (`better-sqlite3`) does NOT work on Vercel** because:
- Vercel uses serverless functions with ephemeral file systems
- Database files are lost after each function execution
- Native bindings may not compile in serverless environment

## ✅ Solutions for Vercel Deployment

### Option 1: Vercel Postgres (Recommended)

Vercel Postgres is the recommended database solution for Vercel deployments.

#### Steps:
1. **Install Vercel Postgres:**
   ```bash
   npm install @vercel/postgres
   ```

2. **Create Postgres database in Vercel Dashboard:**
   - Go to your project → Storage → Create Database → Postgres
   - This automatically sets up environment variables

3. **Update `lib/db.ts` to use Postgres instead of SQLite**

4. **Update authentication to use Postgres queries**

### Option 2: External Database Services

Use managed database services that work well with serverless:

- **PlanetScale** (MySQL-compatible, serverless)
- **Supabase** (PostgreSQL with built-in auth)
- **Neon** (Serverless Postgres)
- **Turso** (SQLite-compatible, serverless)

### Option 3: Vercel KV (Redis) - For Simple Use Cases

For simple key-value storage (users, sessions):
- Use Vercel KV (Redis)
- Good for session management
- Not ideal for complex queries

### Option 4: Hybrid Approach

- **Content data**: Keep in JSON file (works on Vercel if read-only)
- **Auth data**: Use Vercel Postgres or external database
- **Sessions**: Use Vercel KV or cookies with JWT

## 📝 Migration Checklist

To make this project work on Vercel:

- [ ] Replace SQLite with Vercel Postgres or external database
- [ ] Update `lib/db.ts` with new database connection
- [ ] Update all database queries to use new database
- [ ] Test authentication flow
- [ ] Test content management
- [ ] Update environment variables
- [ ] Deploy to Vercel

## 🚀 Quick Start with Vercel Postgres

1. Install: `npm install @vercel/postgres`
2. Create database in Vercel dashboard
3. Update database queries to use SQL instead of SQLite syntax
4. Deploy!

## 📌 Current Status

**This project currently uses SQLite and will NOT work on Vercel as-is.**

You need to migrate to one of the solutions above before deploying to Vercel.

