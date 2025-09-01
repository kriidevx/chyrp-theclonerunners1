import { supabase } from "@/lib/supabase";
import { NextRequest, NextResponse } from "next/server";

// GET all posts
export async function GET() {
  const { data, error } = await supabase
    .from("posts")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  return NextResponse.json(data);
}

// POST a new post
export async function POST(req: NextRequest) {
  const { title, slug, content, excerpt, author_id, published } = await req.json();

  const { data, error } = await supabase.from("posts").insert({
    title,
    slug,
    content,
    excerpt,
    author_id,
    published: published ?? false,
  }).select();

  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  return NextResponse.json(data);
}

// PUT update a post
export async function PUT(req: NextRequest) {
  const { id, title, content, excerpt, published } = await req.json();

  const { data, error } = await supabase
    .from("posts")
    .update({ title, content, excerpt, published })
    .eq("id", id)
    .select();

  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  return NextResponse.json(data);
}

// DELETE a post
export async function DELETE(req: NextRequest) {
  const { id } = await req.json();
  const { data, error } = await supabase.from("posts").delete().eq("id", id).select();
  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  return NextResponse.json(data);
}
