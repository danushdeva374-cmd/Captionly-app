import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  const formData = await req.formData();
  const file = formData.get('file');

  if (!file) {
    return NextResponse.json({ error: 'No file uploaded' }, { status: 400 });
  }
  const captions = [
    "Capturing moments that matter ✨",
    "Good vibes and better photos 📸",
    "Living my best life right now 🌟"
  ];

  const hashtags = "#instagood #photooftheday #vibes #aicaptions #contentcreator";

  return NextResponse.json({ captions, hashtags });
}
