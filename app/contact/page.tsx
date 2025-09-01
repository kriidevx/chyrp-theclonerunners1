'use client'

import { useState } from 'react'
import { Mail, Phone, MapPin, Send, MessageCircle, Clock, Globe } from 'lucide-react'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // TODO: Implement form submission logic
    await new Promise(resolve => setTimeout(resolve, 2000)) // Simulate API call
    
    console.log('Form submitted:', formData)
    setFormData({ name: '', email: '', subject: '', message: '' })
    setIsSubmitting(false)
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  return (
    <div className="min-h-screen py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <section className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Get in <span className="bg-gradient-to-r from-primary-600 to-purple-600 bg-clip-text text-transparent">Touch</span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed max-w-3xl mx-auto">
            Have a question, suggestion, or just want to say hello? We'd love to hear from you. 
            Reach out and we'll get back to you as soon as possible.
          </p>
        </section>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="card p-8">
            <div className="flex items-center mb-6">
              <MessageCircle className="h-6 w-6 text-primary-600 mr-3" />
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Send us a Message</h2>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="input-field"
                    placeholder="John Doe"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="input-field"
                    placeholder="john@example.com"
                    required
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  className="input-field"
                  placeholder="How can we help you?"
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={6}
                  className="input-field resize-none"
                  placeholder="Tell us more about your inquiry..."
                  required
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="h-4 w-4 mr-2" />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Contact Cards */}
            <div className="space-y-4">
              <div className="card p-6">
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-primary-100 dark:bg-primary-900/30 rounded-lg">
                    <Mail className="h-6 w-6 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Email Us</h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm mb-2">
                      Send us an email anytime
                    </p>
                    <a 
                      href="mailto:hello@modernblog.com" 
                      className="text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 font-medium"
                    >
                      hello@modernblog.com
                    </a>
                  </div>
                </div>
              </div>

              <div className="card p-6">
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-primary-100 dark:bg-primary-900/30 rounded-lg">
                    <Phone className="h-6 w-6 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Call Us</h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm mb-2">
                      Mon-Fri from 8am to 5pm
                    </p>
                    <a 
                      href="tel:+1234567890" 
                      className="text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 font-medium"
                    >
                      +1 (234) 567-890
                    </a>
                  </div>
                </div>
              </div>

              <div className="card p-6">
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-primary-100 dark:bg-primary-900/30 rounded-lg">
                    <MapPin className="h-6 w-6 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Visit Us</h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">
                      123 Innovation Street<br />
                      Tech District<br />
                      San Francisco, CA 94105
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Additional Info */}
            <div className="card p-6">
              <h3 className="font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
                <Clock className="h-5 w-5 mr-2 text-primary-600" />
                Office Hours
              </h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">Monday - Friday</span>
                  <span className="text-gray-900 dark:text-white">8:00 AM - 5:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">Saturday</span>
                  <span className="text-gray-900 dark:text-white">9:00 AM - 2:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">Sunday</span>
                  <span className="text-gray-900 dark:text-white">Closed</span>
                </div>
              </div>
            </div>

            {/* FAQ Link */}
            <div className="card p-6 bg-gradient-to-br from-primary-50 to-purple-50 dark:from-primary-900/20 dark:to-purple-900/20">
              <div className="flex items-start space-x-4">
                <Globe className="h-6 w-6 text-primary-600 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                    Looking for Quick Answers?
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                    Check out our FAQ section for answers to common questions about our platform.
                  </p>
                  <a 
                    href="/faq" 
                    className="inline-flex items-center text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 font-medium text-sm"
                  >
                    Visit FAQ
                    <Send className="h-4 w-4 ml-1" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export const metadata = {
  title: 'Contact Us | ModernBlog',
  description: 'Get in touch with the ModernBlog team. We\'d love to hear from you!',
}