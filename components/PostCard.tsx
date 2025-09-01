import Link from 'next/link'
import { Calendar, User, ArrowRight, Clock } from 'lucide-react'

interface PostCardProps {
  id: string
  title: string
  excerpt: string
  slug: string
  author: string
  date: string
  readTime?: string
  tags?: string[]
}

export default function PostCard({
  id,
  title,
  excerpt,
  slug,
  author,
  date,
  readTime = '5 min read',
  tags = []
}: PostCardProps) {
  return (
    <article className="card p-6 hover:transform hover:scale-105 transition-all duration-300 group">
      {/* Tags */}
      {tags.length > 0 && (
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.slice(0, 3).map((tag, index) => (
            <span
              key={index}
              className="px-2 py-1 bg-primary-50 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 text-xs font-medium rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
      )}

      {/* Title */}
      <Link href={`/post/${slug}`} className="block mb-3">
        <h2 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-200 line-clamp-2">
          {title}
        </h2>
      </Link>

      {/* Excerpt */}
      <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3 leading-relaxed">
        {excerpt}
      </p>

      {/* Meta Info */}
      <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400 mb-4">
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-1">
            <User className="h-4 w-4" />
            <span>{author}</span>
          </div>
          <div className="flex items-center space-x-1">
            <Calendar className="h-4 w-4" />
            <span>{new Date(date).toLocaleDateString()}</span>
          </div>
        </div>
        <div className="flex items-center space-x-1">
          <Clock className="h-4 w-4" />
          <span>{readTime}</span>
        </div>
      </div>

      {/* Read More Link */}
      <Link
        href={`/post/${slug}`}
        className="inline-flex items-center text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 font-medium group/link transition-colors duration-200"
      >
        <span>Read More</span>
        <ArrowRight className="h-4 w-4 ml-1 group-hover/link:translate-x-1 transition-transform duration-200" />
      </Link>
    </article>
  )
}