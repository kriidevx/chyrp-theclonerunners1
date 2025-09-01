import { supabase } from "@/lib/supabase";
import { NextRequest, NextResponse } from "next/server";

// Track active visitors
export async function POST(req: NextRequest) {
  const { user_id, page } = await req.json();
  const { data, error } = await supabase.from("presence").upsert({ user_id, page, last_seen: new Date() }).select();
  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  return NextResponse.json(data);
}

export async function GET() {
  const { data, error } = await supabase.from("presence").select("*");
  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  return NextResponse.json(data);
}
