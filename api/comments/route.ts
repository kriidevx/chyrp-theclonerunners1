import { supabase } from "@/lib/supabase";
import { NextRequest, NextResponse } from "next/server";

// GET comments for a post
export async function GET(req: NextRequest) {
  const postId = req.nextUrl.searchParams.get("post_id");
  if (!postId) return NextResponse.json({ error: "post_id required" }, { status: 400 });

  const { data, error } = await supabase.from("comments").select("*").eq("post_id", postId);
  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  return NextResponse.json(data);
}

// POST a comment
export async function POST(req: NextRequest) {
  const { post_id, user_id, text } = await req.json();
  const { data, error } = await supabase.from("comments").insert({ post_id, user_id, text }).select();
  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  return NextResponse.json(data);
}

// DELETE a comment
export async function DELETE(req: NextRequest) {
  const { id } = await req.json();
  const { data, error } = await supabase.from("comments").delete().eq("id", id).select();
  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  return NextResponse.json(data);
}
