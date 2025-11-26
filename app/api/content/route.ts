import { NextRequest, NextResponse } from 'next/server';
import { getContent, saveContent, ContentData } from '@/lib/data';
import { isAuthenticated } from '@/lib/auth';

export async function GET() {
  try {
    const content = await getContent();
    return NextResponse.json(content);
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to fetch content' },
      { status: 500 }
    );
  }
}

export async function PUT(request: NextRequest) {
  try {
    const authenticated = await isAuthenticated();
    if (!authenticated) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      );
    }

    const data: ContentData = await request.json();
    await saveContent(data);

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to save content' },
      { status: 500 }
    );
  }
}

