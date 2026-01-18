import { NextResponse } from 'next/server';
import { connectDB } from '@/lib/mongodb';
import Product from '@/models/Product';
import products from '@/data/products';

export async function POST() {
  await connectDB();

  let inserted = 0;

  for (const p of products) {
    const exists = await Product.findOne({ id: String(p.id) });
    if (exists) continue;

    await Product.create({
      id: String(p.id),
      name: p.name,
      price: p.price,
      category: p.category || '',
      description: p.description || '',
      images: p.images || [],
      colors: p.colors || [],
      sizes: p.sizes || [],
    });

    inserted++;
  }

  return NextResponse.json({
    ok: true,
    inserted,
    total: products.length,
  });
}