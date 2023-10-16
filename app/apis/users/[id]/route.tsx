import { NextRequest, NextResponse } from "next/server";
interface Props {
  params: { id: number };
}
export function GET(request: NextRequest, { params: { id } }: Props) {
  if (id > 10)
    return NextResponse.json({ error: "user not found" }, { status: 404 });
  else return NextResponse.json({ id: id, name: "Ali" });
}

export async function PUT (request: NextRequest, {params: {id}}: Props) {
    const body = await request.json()
    if (!body.name) return NextResponse.json({error:"name is required"}, {status: 400})
    if (id > 10 ) return NextResponse.json({error: "User Not Found"}, {status: 404})
    else return NextResponse.json({id: id, name:body.name})

}

export async function DELETE (request: NextRequest, {params: {id}}: Props) {
    if (id > 10 ) return NextResponse.json({error: "User Not Found"}, {status: 404})
    else return NextResponse.json({})

}