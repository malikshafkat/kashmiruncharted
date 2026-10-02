import { NextResponse } from 'next/server'
import { getDb } from '@/lib/db'

// GET /api/packages — list all packages
export async function GET() {
  try {
    const sql = getDb()
    const packages = await sql`SELECT * FROM packages ORDER BY created_at DESC`
    return NextResponse.json(packages)
  } catch (err) {
    console.error('GET /api/packages error:', err)
    return NextResponse.json({ error: err.message }, { status: 500 })
  }
}

// POST /api/packages — create a new package (admin)
export async function POST(request) {
  try {
    const sql = getDb()
    const body = await request.json()

    const [pkg] = await sql`
      INSERT INTO packages (
        title, duration_days, destinations, price,
        summary, includes, image_url, is_featured
      )
      VALUES (
        ${body.title},
        ${body.duration_days},
        ${body.destinations},
        ${body.price},
        ${body.summary},
        ${body.includes},
        ${body.image_url},
        ${body.is_featured || false}
      )
      RETURNING *
    `
    return NextResponse.json(pkg, { status: 201 })
  } catch (err) {
    console.error('POST /api/packages error:', err)
    return NextResponse.json({ error: err.message }, { status: 500 })
  }
}