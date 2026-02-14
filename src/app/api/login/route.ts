import { NextRequest, NextResponse } from 'next/server';
import { generateAccessToken, generateRefreshToken } from '@/lib/auth/jwt';

export async function POST(request: NextRequest){
  try {
    const { username, password } = await request.json();

  }
}