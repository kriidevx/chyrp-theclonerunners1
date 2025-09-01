import Link from 'next/link'
import { PenTool, Heart, Github, Twitter, Linkedin } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-2">
              <div className="p-2 bg-primary-600 rounded-lg">
                <PenTool className="h-6 w-6 text-white" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-primary-600 to-purple-600 bg-clip-text text-transparent">
                ModernBlog
              </span>
            </Link>
            <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
              A modern blogging platform that brings your stories to life with beautiful design and powerful features.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-gray-900 dark:text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {[
                { href: '/', label: 'Home' },
                { href: '/about', label: 'About' },
                { href: '/contact', label: 'Contact' },
                { href: '/admin', label: 'Admin' },
              ].map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200 text-sm"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-semibold text-gray-900 dark:text-white mb-4">Resources</h3>
            <ul className="space-y-2">
              {[
                { href: '/docs', label: 'Documentation' },
                { href: '/api', label: 'API Reference' },
                { href: '/support', label: 'Support' },
                { href: '/privacy', label: 'Privacy Policy' },
              ].map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200 text-sm"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="font-semibold text-gray-900 dark:text-white mb-4">Connect</h3>
            <div className="flex space-x-3">
              {[
                { href: '#', icon: Github, label: 'GitHub' },
                { href: '#', icon: Twitter, label: 'Twitter' },
                { href: '#', icon: Linkedin, label: 'LinkedIn' },
              ].map(({ href, icon: Icon, label }) => (
                <a
                  key={label}
                  href={href}
                  className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-all duration-200 transform hover:scale-110"
                  aria-label={label}
                >
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
              <span>© {currentYear} ModernBlog. Made with</span>
              <Heart className="h-4 w-4 text-red-500 mx-1" />
              <span>using Next.js & Supabase</span>
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400">
              <Link href="/terms" className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200">
                Terms of Service
              </Link>
              <span className="mx-2">•</span>
              <Link href="/privacy" className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200">
                Privacy Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}