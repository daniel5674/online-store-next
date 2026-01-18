// import { NextResponse } from "next/server";
// import products from "@/data/products";

// export async function GET() {
//   return NextResponse.json(products);
// }

import { NextResponse } from 'next/server';
import { connectDB } from '@/lib/mongodb';
import Product from '@/models/Product';

export async function GET(request) {
  await connectDB();

  const { searchParams } = new URL(request.url);
  const category = searchParams.get('category');

  const filter = category ? { category } : {};

  const products = await Product.find(filter).lean();
  return NextResponse.json(products);
}