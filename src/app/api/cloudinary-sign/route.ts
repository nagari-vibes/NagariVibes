import { NextResponse } from 'next/server';
import crypto from 'crypto';

export async function POST() {
  try {
    const timestamp = Math.round(new Date().getTime() / 1000);
    const apiSecret = process.env.CLOUDINARY_API_SECRET;
    
    if (!apiSecret) {
      return NextResponse.json({ error: 'Cloudinary API secret is missing on the server' }, { status: 500 });
    }

    const signature = crypto.createHash('sha1').update(`timestamp=${timestamp}${apiSecret}`).digest('hex');

    return NextResponse.json({ timestamp, signature });
  } catch (error) {
    return NextResponse.json({ error: 'Signature generation failed' }, { status: 500 });
  }
}
