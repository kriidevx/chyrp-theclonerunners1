import { notFound } from 'next/navigation'
import CommentForm from '../../components/CommentForm'
import { Calendar, User, Clock, Share2, BookmarkPlus, ArrowLeft } from 'lucide-react'
import Link from 'next/link'

// Dummy post data - replace with Supabase fetch later
const dummyPost = {
  id: '1',
  title: 'Getting Started with Modern Web Development',
  content: `
    <p>Modern web development has evolved tremendously over the past few years. With the introduction of powerful frameworks like Next.js and React, developers now have access to tools that make building scalable, performant applications easier than ever before.</p>
    
    <h2>The Evolution of Web Development</h2>
    <p>Gone are the days when web development meant simple HTML, CSS, and JavaScript. Today's web applications are complex, interactive experiences that rival native desktop applications. This evolution has been driven by several key factors:</p>
    
    <ul>
      <li><strong>Component-Based Architecture:</strong> Modern frameworks embrace reusable components that make development more efficient and maintainable.</li>
      <li><strong>Server-Side Rendering:</strong> Technologies like Next.js provide excellent SEO and performance benefits through server-side rendering.</li>
      <li><strong>Type Safety:</strong> TypeScript has become the standard for large-scale applications, providing better developer experience and fewer runtime errors.</li>
    </ul>
    
    <h2>Key Technologies to Master</h2>
    <p>If you're looking to get into modern web development, here are the essential technologies you should focus on:</p>
    
    <h3>1. React & Next.js</h3>
    <p>React continues to be the most popular frontend framework, and Next.js builds upon it to provide a full-stack solution with features like:</p>
    <ul>
      <li>File-based routing</li>
      <li>API routes</li>
      <li>Automatic code splitting</li>
      <li>Built-in optimization</li>
    </ul>
    
    <h3>2. Tailwind CSS</h3>
    <p>Tailwind CSS has revolutionized how we write CSS by providing utility-first classes that allow for rapid prototyping and consistent design systems.</p>
    
    <h3>3. Backend-as-a-Service (BaaS)</h3>
    <p>Services like Supabase and Firebase allow developers to focus on frontend development while providing robust backend capabilities including:</p>
    <ul>
      <li>Database management</li>
      <li>Authentication</li>
      <li>Real-time subscriptions</li>
      <li>File storage</li>
    </ul>
    
    <h2>Best Practices for Modern Development</h2>
    <p>As you embark on your modern web development journey, keep these best practices in mind:</p>
    
    <ol>
      <li><strong>Mobile-First Design:</strong> Always design for mobile devices first, then enhance for larger screens.</li>
      <li><strong>Performance Optimization:</strong> Use tools like Lighthouse to monitor and improve your application's performance.</li>
      <li><strong>Accessibility:</strong> Ensure your applications are accessible to all users by following WCAG guidelines.</li>
      <li><strong>Version Control:</strong> Use Git effectively and follow conventional commit messages.</li>
    </ol>
    
    <h2>Conclusion</h2>
    <p>Modern web development offers exciting opportunities to create amazing user experiences. By focusing on the right technologies and following best practices, you'll be well-equipped to build the next generation of web applications.</p>
    
    <p>Remember, the key to success in web development is continuous learning and staying updated with the latest trends and technologies. The ecosystem moves fast, but that's what makes it so exciting!</p>
  `,
  slug: 'getting-started-modern-web-development',
  author: 'Sarah Johnson',
  date: '2025-08-15',
  readTime: '8 min read',
  tags: ['React', 'Next.js', 'Web Development']
}

interface PostPageProps {
  params: {
    slug: string
  }
}

export default async function PostPage({ params }: PostPageProps) {
  // TODO: Fetch post from Supabase using params.slug
  // For now, using dummy data
  const post = dummyPost

  if (!post) {
    notFound()
  }

  return (
    <article className="min-h-screen py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <Link 
          href="/" 
          className="inline-flex items-center text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200 mb-8 group"
        >
          <ArrowLeft className="h-4 w-4 mr-2 group-hover:-translate-x-1 transition-transform duration-200" />
          Back to Home
        </Link>

        {/* Article Header */}
        <header className="mb-12">
          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-6">
            {post.tags.map((tag, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-primary-50 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 text-sm font-medium rounded-full"
              >
                #{tag}
              </span>
            ))}
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
            {post.title}
          </h1>

          {/* Meta Information */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
            <div className="flex items-center space-x-6 text-gray-600 dark:text-gray-400">
              <div className="flex items-center space-x-2">
                <User className="h-5 w-5" />
                <span className="font-medium">{post.author}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Calendar className="h-5 w-5" />
                <span>{new Date(post.date).toLocaleDateString('en-US', { 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="h-5 w-5" />
                <span>{post.readTime}</span>
              </div>
            </div>

            {/* Social Actions */}
            <div className="flex items-center space-x-4">
              <button className="flex items-center space-x-2 text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200">
                <Share2 className="h-5 w-5" />
                <span>Share</span>
              </button>
              <button className="flex items-center space-x-2 text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200">
                <BookmarkPlus className="h-5 w-5" />
                <span>Save</span>
              </button>
            </div>
          </div>
        </header>

        {/* Article Content */}
        <div className="card p-8 mb-12">
          <div 
            className="prose prose-lg dark:prose-invert max-w-none
              prose-headings:text-gray-900 dark:prose-headings:text-white
              prose-p:text-gray-700 dark:prose-p:text-gray-300
              prose-li:text-gray-700 dark:prose-li:text-gray-300
              prose-strong:text-gray-900 dark:prose-strong:text-white
              prose-a:text-primary-600 dark:prose-a:text-primary-400
              prose-code:text-primary-600 dark:prose-code:text-primary-400
              prose-pre:bg-gray-100 dark:prose-pre:bg-gray-800"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </div>

        {/* Author Bio */}
        <div className="card p-6 mb-12">
          <div className="flex items-start space-x-4">
            <div className="w-16 h-16 bg-gradient-to-br from-primary-400 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-xl">
              {post.author.charAt(0)}
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                {post.author}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                Sarah is a frontend developer with 5+ years of experience building modern web applications. 
                She's passionate about React, Next.js, and creating delightful user experiences.
              </p>
            </div>
          </div>
        </div>

        {/* Comments Section */}
        <section className="space-y-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
            Comments
          </h2>
          
          {/* Comment Form */}
          <CommentForm postId={post.id} />
          
          {/* Comments will be displayed here */}
          <div className="text-center py-12 text-gray-500 dark:text-gray-400">
            <p>No comments yet. Be the first to share your thoughts!</p>
          </div>
        </section>
      </div>
    </article>
  )
}

export async function generateMetadata({ params }: PostPageProps) {
  // TODO: Fetch post from Supabase
  const post = dummyPost
  
  if (!post) {
    return {
      title: 'Post Not Found',
    }
  }

  return {
    title: `${post.title} | ModernBlog`,
    description: post.content.replace(/<[^>]*>/g, '').substring(0, 160) + '...',
    keywords: post.tags,
    openGraph: {
      title: post.title,
      description: post.content.replace(/<[^>]*>/g, '').substring(0, 160) + '...',
      type: 'article',
      publishedTime: post.date,
      authors: [post.author],
    },
  }
}