# ModernBlog - A Beautiful Blogging Platform

A modern, responsive blogging platform built with Next.js, Tailwind CSS, and Supabase. This project modernizes the classic Chyrp blogging experience with cutting-edge web technologies and a stunning user interface.

## ✨ Features

- **Modern Design**: Beautiful, responsive UI with dark/light mode support
- **Fast Performance**: Built with Next.js 14 and optimized for speed
- **Real-time Comments**: Interactive commenting system
- **SEO Optimized**: Built-in SEO features and meta tag management
- **Mobile-First**: Fully responsive design that works on all devices
- **Theme Toggle**: Elegant dark/light mode switcher
- **Rich Text Editor**: Advanced content creation tools
- **Tag System**: Organize content with tags and categories
- **User Management**: Authentication and user profiles
- **Admin Dashboard**: Easy content management

## 🚀 Tech Stack

- **Frontend**: Next.js 14, React 18, TypeScript
- **Styling**: Tailwind CSS with custom design system
- **Database**: Supabase (PostgreSQL)
- **Authentication**: Supabase Auth
- **Icons**: Lucide React
- **Deployment**: Vercel (recommended)

## 📋 Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (v18 or higher)
- npm or yarn
- A Supabase account

## 🛠️ Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/modern-blog-platform.git
   cd modern-blog-platform
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.local.example .env.local
   ```
   
   Fill in your environment variables in `.env.local`:
   ```env
   NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
   SUPABASE_SERVICE_ROLE_KEY=your_supabase_service_role_key
   NEXT_PUBLIC_SITE_NAME="Modern Blog Platform"
   NEXT_PUBLIC_SITE_URL=http://localhost:3000
   ADMIN_EMAIL=admin@yourdomain.com
   ```

4. **Set up Supabase database**
   - Create a new project in [Supabase](https://supabase.com)
   - Copy the contents of `supabase/schema.sql`
   - Run the SQL in your Supabase SQL editor
   - This will create all necessary tables, indexes, and sample data

5. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

6. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000) to see your blog!

## 📁 Project Structure

```
modern-blog-platform/
├── app/                    # Next.js app directory
│   ├── about/             # About page
│   ├── contact/           # Contact page
│   ├── post/[slug]/       # Dynamic post pages
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/            # Reusable components
│   ├── CommentForm.tsx    # Comment form component
│   ├── Footer.tsx         # Site footer
│   ├── Navbar.tsx         # Navigation bar
│   ├── PostCard.tsx       # Post card component
│   └── ThemeToggle.tsx    # Theme switcher
├── contexts/              # React contexts
│   └── ThemeContext.tsx   # Theme management
├── lib/                   # Utilities and configurations
│   └── supabase.ts        # Supabase client
├── styles/                # Additional styles
│   └── globals.css        # Tailwind and custom styles
├── supabase/              # Database schema
│   └── schema.sql         # Database setup
├── tailwind.config.js     # Tailwind configuration
├── package.json           # Dependencies and scripts
└── README.md             # Project documentation
```

## 🎨 Customization

### Theme Colors
Edit `tailwind.config.js` to customize the color palette:
```javascript
colors: {
  primary: {
    50: '#f0f9ff',
    // ... your custom colors
  }
}
```

### Site Configuration
Update site settings in `.env.local`:
- `NEXT_PUBLIC_SITE_NAME`: Your site name
- `NEXT_PUBLIC_SITE_DESCRIPTION`: Site description
- `NEXT_PUBLIC_SITE_URL`: Your domain

### Styling
- Global styles: `styles/globals.css`
- Component-specific styles: Use Tailwind classes
- Custom components: Add utility classes in `globals.css`

## 📝 Content Management

### Creating Posts
1. Posts are stored in the `posts` table in Supabase
2. Use the admin interface (to be built) or directly insert into the database
3. Posts support Markdown and HTML content

### Managing Users
- Users are automatically created through Supabase Auth
- Assign admin roles through the database
- User profiles can be updated through the UI

## 🚀 Deployment

### Deploy to Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Add your environment variables in Vercel dashboard
4. Deploy automatically on every push

### Other Platforms
- **Netlify**: Works with static export
- **Railway**: Good for full-stack applications
- **DigitalOcean App Platform**: Alternative hosting

## 🔧 Development

### Available Scripts
- `npm run dev`: Start development server
- `npm run build`: Build for production
- `npm run start`: Start production server
- `npm run lint`: Run ESLint

### Database Management
- Use Supabase dashboard for database management
- Run migrations through the SQL editor
- Monitor real-time database changes

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) - The React framework
- [Tailwind CSS](https://tailwindcss.com/) - For styling
- [Supabase](https://supabase.com/) - Backend as a service
- [Lucide](https://lucide.dev/) - Beautiful icons
- [Vercel](https://vercel.com/) - Deployment platform

## 📞 Support

If you have any questions or need help, please:
- Check the [documentation](https://nextjs.org/docs)
- Open an issue on GitHub
- Contact us through the contact form

---

Made with ❤️ by the CloneRunners