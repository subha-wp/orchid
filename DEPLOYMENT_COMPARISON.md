# Deployment Platform Comparison

## SQLite Compatibility

| Platform | SQLite Support | Recommended Solution |
|----------|---------------|---------------------|
| **Vercel** | ❌ No | Vercel Postgres |
| **Netlify** | ❌ No | Netlify DB (PostgreSQL) |
| **Railway** | ✅ Yes | Native SQLite support |
| **Render** | ✅ Yes | Native SQLite support |
| **Fly.io** | ✅ Yes | Native SQLite support |
| **DigitalOcean App Platform** | ✅ Yes | Native SQLite support |
| **Self-hosted (VPS)** | ✅ Yes | Full control |

## Why SQLite Doesn't Work on Serverless

Both Vercel and Netlify use **serverless functions** which:
- Have ephemeral (temporary) file systems
- Lose all files after function execution
- Cannot persist database files
- Recreate the database on every request

## Platform-Specific Solutions

### Vercel
- **Vercel Postgres** (Recommended)
- External databases (PlanetScale, Supabase, etc.)

### Netlify
- **Netlify DB** (PostgreSQL powered by Neon) (Recommended)
- External databases (Supabase, PlanetScale, etc.)

### Platforms That Support SQLite
- **Railway** - Full SQLite support, persistent storage
- **Render** - Supports SQLite with persistent disks
- **Fly.io** - Supports SQLite with volumes
- **DigitalOcean** - Supports SQLite with persistent storage
- **Self-hosted** - Full control, any database

## Recommendation

### If you want to keep SQLite:
Deploy to **Railway**, **Render**, or **Fly.io** - these platforms support persistent file storage.

### If you want to use Vercel/Netlify:
Migrate to their built-in database solutions:
- **Vercel** → Vercel Postgres
- **Netlify** → Netlify DB (PostgreSQL)

Both are free tier available and easy to set up!

