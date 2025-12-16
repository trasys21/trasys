
import { NextResponse } from 'next/server';
import clientPromise from '@/lib/mongodb';

export async function GET() {
  try {
    const client = await clientPromise;
    const db = client.db(); // Use the default database specified in the connection string

    const collections = await db.listCollections().toArray();
    const collectionNames = collections.map(c => c.name);

    return NextResponse.json({ status: 'ok', collections: collectionNames });
  } catch (e) {
    console.error(e);
    return NextResponse.json({ status: 'error', error: 'Failed to connect to database' }, { status: 500 });
  }
}
