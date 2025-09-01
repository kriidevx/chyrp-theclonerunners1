import { supabase } from "@/lib/supabase";
import { NextRequest, NextResponse } from "next/server";

// GET all tags
export async function GET() {
  const { data, error } = await supabase.from("tags").select("*").order("name");
  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  return NextResponse.json(data);
}

// POST a tag
export async function POST(req: NextRequest) {
  const { name } = await req.json();
  const { data, error } = await supabase.from("tags").insert({ name }).select();
  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  return NextResponse.json(data);
}
