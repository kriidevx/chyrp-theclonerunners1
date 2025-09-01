import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Database types
export interface User {
  id: string
  name: string
  role: 'admin' | 'user'
  created_at?: string
}

export interface Post {
  id: string
  title: string
  content: string
  slug: string
  excerpt?: string
  author_id: string
  created_at: string
  updated_at?: string
  published: boolean
}

export interface Comment {
  id: string
  post_id: string
  user_id: string
  text: string
  created_at: string
  user?: User
}