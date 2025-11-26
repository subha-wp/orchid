# Netlify Deployment Guide

## ⚠️ Current Limitation

**SQLite (`better-sqlite3`) does NOT work on Netlify** for the same reasons as Vercel:
- Netlify Functions are serverless with ephemeral file systems
- Database files are lost after each function execution
- No persistent storage in serverless functions

## ✅ Solution: Netlify DB (Recommended)

Netlify provides **Netlify DB** - a serverless PostgreSQL database powered by Neon. This is the recommended solution for Netlify deployments.

### Steps to Use Netlify DB:

1. **Install Netlify CLI:**
   ```bash
   npm install -g netlify-cli
   ```

2. **Initialize Netlify DB:**
   ```bash
   npx netlify db init
   ```
   This will:
   - Create a PostgreSQL database
   - Set up environment variables automatically
   - Configure connection strings

3. **Install PostgreSQL client:**
   ```bash
   npm install @neondatabase/serverless
   # or
   npm install postgres
   ```

4. **Update your code** to use PostgreSQL instead of SQLite

5. **Deploy:**
   ```bash
   netlify deploy --prod
   ```

## 🔄 Migration Steps

### Step 1: Install Dependencies
```bash
npm install @neondatabase/serverless
# or use postgres package
npm install postgres
```

### Step 2: Update Database Connection

Replace `lib/db.ts` with PostgreSQL connection:

```typescript
import { neon } from '@neondatabase/serverless';
// or
import postgres from 'postgres';

// Get connection string from environment
const sql = neon(process.env.DATABASE_URL!);
```

### Step 3: Update SQL Queries

PostgreSQL syntax is mostly compatible, but you'll need to:
- Change `INTEGER PRIMARY KEY AUTOINCREMENT` → `SERIAL PRIMARY KEY`
- Change `TEXT` → `VARCHAR` or `TEXT` (both work)
- Change `DATETIME` → `TIMESTAMP`
- Update query syntax to use async/await

### Step 4: Update Environment Variables

Netlify DB automatically provides:
- `DATABASE_URL` - Connection string
- Other database credentials

## 📋 Alternative Solutions for Netlify

### Option 1: Netlify Blob Store
- For simple key-value storage
- Good for sessions, but not ideal for relational data
- Limited query capabilities

### Option 2: External Database Services
- **Supabase** (PostgreSQL) - Free tier available
- **PlanetScale** (MySQL) - Serverless MySQL
- **Turso** (SQLite-compatible) - Serverless SQLite alternative
- **Neon** (PostgreSQL) - Serverless Postgres

### Option 3: Hybrid Approach
- **Content data**: Keep in JSON file (works if read-only)
- **Auth data**: Use Netlify DB or external database
- **Sessions**: Use Netlify Blob or JWT cookies

## 🚀 Quick Migration Example

### Before (SQLite):
```typescript
const db = new Database('data/orchid.db');
const user = db.prepare('SELECT * FROM users WHERE email = ?').get(email);
```

### After (Netlify DB - PostgreSQL):
```typescript
import { neon } from '@neondatabase/serverless';
const sql = neon(process.env.DATABASE_URL!);
const user = await sql`SELECT * FROM users WHERE email = ${email}`;
```

## 📝 Migration Checklist

- [ ] Install Netlify CLI
- [ ] Run `npx netlify db init`
- [ ] Install PostgreSQL client library
- [ ] Update `lib/db.ts` to use PostgreSQL
- [ ] Update all SQL queries to async/await
- [ ] Change SQLite syntax to PostgreSQL syntax
- [ ] Test authentication flow
- [ ] Test content management
- [ ] Deploy to Netlify

## 🎯 Current Status

**This project currently uses SQLite and will NOT work on Netlify as-is.**

You need to migrate to Netlify DB (PostgreSQL) or another solution before deploying.

## 💡 Recommendation

**Use Netlify DB** - It's:
- ✅ Built-in to Netlify
- ✅ Free tier available
- ✅ Automatic setup
- ✅ Serverless and scalable
- ✅ PostgreSQL (industry standard)

