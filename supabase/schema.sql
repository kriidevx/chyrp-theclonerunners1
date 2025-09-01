-- Enable necessary extensions
create extension if not exists "uuid-ossp";

-- Create users table
create table if not exists users (
  id uuid default uuid_generate_v4() primary key,
  name text not null,
  email text unique not null,
  role text check (role in ('admin', 'user')) default 'user',
  avatar_url text,
  bio text,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  updated_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Create posts table
create table if not exists posts (
  id uuid default uuid_generate_v4() primary key,
  title text not null,
  content text not null,
  excerpt text,
  slug text unique not null,
  author_id uuid references users(id) on delete cascade not null,
  published boolean default false,
  featured_image_url text,
  read_time integer default 5,
  tags text[] default '{}',
  views integer default 0,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  updated_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Create comments table
create table if not exists comments (
  id uuid default uuid_generate_v4() primary key,
  post_id uuid references posts(id) on delete cascade not null,
  user_id uuid references users(id) on delete cascade not null,
  text text not null,
  parent_id uuid references comments(id) on delete cascade,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  updated_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Create categories table
create table if not exists categories (
  id uuid default uuid_generate_v4() primary key,
  name text unique not null,
  slug text unique not null,
  description text,
  color text default '#0ea5e9',
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Create post_categories junction table
create table if not exists post_categories (
  post_id uuid references posts(id) on delete cascade,
  category_id uuid references categories(id) on delete cascade,
  primary key (post_id, category_id)
);

-- Create likes table for posts
create table if not exists post_likes (
  id uuid default uuid_generate_v4() primary key,
  post_id uuid references posts(id) on delete cascade not null,
  user_id uuid references users(id) on delete cascade not null,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  unique(post_id, user_id)
);

-- Create bookmarks table
create table if not exists bookmarks (
  id uuid default uuid_generate_v4() primary key,
  post_id uuid references posts(id) on delete cascade not null,
  user_id uuid references users(id) on delete cascade not null,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  unique(post_id, user_id)
);

-- Create indexes for better performance
create index if not exists posts_author_id_idx on posts(author_id);
create index if not exists posts_slug_idx on posts(slug);
create index if not exists posts_published_idx on posts(published);
create index if not exists posts_created_at_idx on posts(created_at desc);
create index if not exists comments_post_id_idx on comments(post_id);
create index if not exists comments_user_id_idx on comments(user_id);
create index if not exists comments_parent_id_idx on comments(parent_id);

-- Create function to update updated_at timestamp
create or replace function update_updated_at_column()
returns trigger as $$
begin
  new.updated_at = timezone('utc'::text, now());
  return new;
end;
$$ language plpgsql;

-- Create triggers to automatically update updated_at
create trigger update_users_updated_at
  before update on users
  for each row
  execute function update_updated_at_column();

create trigger update_posts_updated_at
  before update on posts
  for each row
  execute function update_updated_at_column();

create trigger update_comments_updated_at
  before update on comments
  for each row
  execute function update_updated_at_column();

-- Insert some sample data
insert into users (name, email, role, bio) values 
  ('Sarah Johnson', 'sarah@modernblog.com', 'admin', 'Frontend developer passionate about React and Next.js'),
  ('Michael Chen', 'michael@modernblog.com', 'admin', 'Full-stack developer and AI enthusiast'),
  ('Emily Rodriguez', 'emily@modernblog.com', 'user', 'UI/UX designer with a love for modern web design'),
  ('David Kim', 'david@modernblog.com', 'user', 'Backend developer specializing in scalable applications'),
  ('Alex Thompson', 'alex@modernblog.com', 'user', 'Product manager and design systems advocate'),
  ('Rachel Green', 'rachel@modernblog.com', 'user', 'Technical writer and documentation expert');

insert into categories (name, slug, description, color) values
  ('Web Development', 'web-development', 'Articles about modern web development techniques and frameworks', '#0ea5e9'),
  ('Design', 'design', 'UI/UX design, visual design, and design systems', '#8b5cf6'),
  ('Technology', 'technology', 'Latest trends and innovations in technology', '#10b981'),
  ('AI & Machine Learning', 'ai-ml', 'Artificial intelligence and machine learning topics', '#f59e0b'),
  ('Career', 'career', 'Career advice and professional development', '#ef4444'),
  ('Tutorials', 'tutorials', 'Step-by-step guides and tutorials', '#06b6d4');

-- Sample posts (you can expand this)
insert into posts (title, content, excerpt, slug, author_id, published, tags, read_time) values
  (
    'Getting Started with Modern Web Development',
    '<p>Modern web development has evolved tremendously over the past few years...</p>',
    'Explore the latest trends and technologies in modern web development, including Next.js, React, and cutting-edge design patterns.',
    'getting-started-modern-web-development',
    (select id from users where email = 'sarah@modernblog.com'),
    true,
    '{"React", "Next.js", "Web Development"}',
    8
  ),
  (
    'The Future of AI in Content Creation',
    '<p>Artificial intelligence is revolutionizing content creation...</p>',
    'Discover how artificial intelligence is revolutionizing content creation and what it means for writers and creators.',
    'future-ai-content-creation',
    (select id from users where email = 'michael@modernblog.com'),
    true,
    '{"AI", "Content", "Technology"}',
    12
  );

-- Enable Row Level Security (RLS)
alter table users enable row level security;
alter table posts enable row level security;
alter table comments enable row level security;
alter table categories enable row level security;
alter table post_categories enable row level security;
alter table post_likes enable row level security;
alter table bookmarks enable row level security;

-- Create policies for users table
create policy "Users can view all profiles" on users for select using (true);
create policy "Users can update own profile" on users for update using (auth.uid() = id);

-- Create policies for posts table
create policy "Anyone can view published posts" on posts for select using (published = true);
create policy "Authors can view own posts" on posts for select using (auth.uid() = author_id);
create policy "Authors can insert posts" on posts for insert with check (auth.uid() = author_id);
create policy "Authors can update own posts" on posts for update using (auth.uid() = author_id);
create policy "Authors can delete own posts" on posts for delete using (auth.uid() = author_id);

-- Create policies for comments table
create policy "Anyone can view comments" on comments for select using (true);
create policy "Authenticated users can insert comments" on comments for insert with check (auth.uid() = user_id);
create policy "Users can update own comments" on comments for update using (auth.uid() = user_id);
create policy "Users can delete own comments" on comments for delete using (auth.uid() = user_id);

-- Create policies for categories table
create policy "Anyone can view categories" on categories for select using (true);

-- Create policies for post_categories table
create policy "Anyone can view post categories" on post_categories for select using (true);

-- Create policies for post_likes table
create policy "Anyone can view post likes" on post_likes for select using (true);
create policy "Authenticated users can manage their likes" on post_likes for all using (auth.uid() = user_id);

-- Create policies for bookmarks table
create policy "Users can view own bookmarks" on bookmarks for select using (auth.uid() = user_id);
create policy "Users can manage own bookmarks" on bookmarks for all using (auth.uid() = user_id);