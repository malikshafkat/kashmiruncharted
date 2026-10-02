import { NextResponse } from 'next/server'
import { getDb } from '@/lib/db'

// GET /api/packages/[id] — fetch one package
export async function GET(request, { params }) {
  try {
    const sql = getDb()
    const [pkg] = await sql`SELECT * FROM packages WHERE id = ${params.id}`
    if (!pkg) {
      return NextResponse.json({ error: 'Package not found' }, { status: 404 })
    }
    return NextResponse.json(pkg)
  } catch (err) {
    console.error('GET /api/packages/[id] error:', err)
    return NextResponse.json({ error: err.message }, { status: 500 })
  }
}

// PUT /api/packages/[id] — update a package (admin)
export async function PUT(request, { params }) {
  try {
    const sql = getDb()
    const body = await request.json()

    const [pkg] = await sql`
      UPDATE packages SET
        title = ${body.title},
        duration_days = ${body.duration_days},
        destinations = ${body.destinations},
        price = ${body.price},
        summary = ${body.summary},
        includes = ${body.includes},
        image_url = ${body.image_url},
        is_featured = ${body.is_featured || false}
      WHERE id = ${params.id}
      RETURNING *
    `
    if (!pkg) {
      return NextResponse.json({ error: 'Package not found' }, { status: 404 })
    }
    return NextResponse.json(pkg)
  } catch (err) {
    console.error('PUT /api/packages/[id] error:', err)
    return NextResponse.json({ error: err.message }, { status: 500 })
  }
}

// DELETE /api/packages/[id] — delete a package (admin)
export async function DELETE(request, { params }) {
  try {
    const sql = getDb()
    await sql`DELETE FROM packages WHERE id = ${params.id}`
    return NextResponse.json({ success: true })
  } catch (err) {
    console.error('DELETE /api/packages/[id] error:', err)
    return NextResponse.json({ error: err.message }, { status: 500 })
  }
}