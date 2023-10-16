import { NextRequest, NextResponse } from "next/server";

export function GET(request: NextRequest) {
  return NextResponse.json([
    { id: 1, name: "Ali" },
    { id: 2, name: "Issa" },
  ]);
}

export async function POST(request: NextRequest) {
  const body = await request.json();
  if (!body.name) {
    return NextResponse.json(
      { error: "name field is required" },
      { status: 400 }
    );
  } else {
    return NextResponse.json({ id: 3, name: "Ali" }, { status: 201 });
  }
}

