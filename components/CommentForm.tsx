'use client'

import { useState } from 'react'
import { Send, User } from 'lucide-react'

interface CommentFormProps {
  postId: string
  onSubmit?: (comment: { name: string; text: string }) => void
}

export default function CommentForm({ postId, onSubmit }: CommentFormProps) {
  const [name, setName] = useState('')
  const [text, setText] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!name.trim() || !text.trim()) return

    setIsSubmitting(true)
    
    try {
      // TODO: Implement Supabase integration
      const comment = { name: name.trim(), text: text.trim() }
      onSubmit?.(comment)
      
      // Reset form
      setName('')
      setText('')
      
      // Show success message (you can implement toast notifications later)
      console.log('Comment submitted:', comment)
    } catch (error) {
      console.error('Error submitting comment:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="card p-6">
      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
        <User className="h-5 w-5 mr-2 text-primary-600" />
        Leave a Comment
      </h3>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Name Input */}
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Your Name
          </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="input-field"
            placeholder="Enter your name"
            required
          />
        </div>

        {/* Comment Text */}
        <div>
          <label htmlFor="comment" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Your Comment
          </label>
          <textarea
            id="comment"
            value={text}
            onChange={(e) => setText(e.target.value)}
            rows={4}
            className="input-field resize-none"
            placeholder="Share your thoughts..."
            required
          />
        </div>

        {/* Submit Button */}
        <div className="flex justify-end">
          <button
            type="submit"
            disabled={isSubmitting || !name.trim() || !text.trim()}
            className="btn-primary disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center"
          >
            {isSubmitting ? (
              <>
                <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                Submitting...
              </>
            ) : (
              'Submit Comment'
            )}
          </button>
        </div>
      </form>
    </div>
  )
}