import PostCard from '../components/PostCard'
import { Search, TrendingUp, Star, ArrowRight } from 'lucide-react'

// Dummy data - replace with Supabase data later
const dummyPosts = [
	{
		id: '1',
		title: 'Getting Started with Modern Web Development',
		excerpt: 'Explore the latest trends and technologies in modern web development, including Next.js, React, and cutting-edge design patterns.',
		slug: 'getting-started-modern-web-development',
		author: 'Sarah Johnson',
		date: '2025-08-15',
		readTime: '8 min read',
		tags: ['React', 'Next.js', 'Web Development'],
	},
	{
		id: '2',
		title: 'The Future of AI in Content Creation',
		excerpt: 'Discover how artificial intelligence is revolutionizing content creation and what it means for writers and creators.',
		slug: 'future-ai-content-creation',
		author: 'Michael Chen',
		date: '2025-08-10',
		readTime: '12 min read',
		tags: ['AI', 'Content', 'Technology'],
	},
	{
		id: '3',
		title: 'Mastering CSS Grid and Flexbox',
		excerpt: 'A comprehensive guide to modern CSS layout techniques that will help you create responsive and beautiful designs.',
		slug: 'mastering-css-grid-flexbox',
		author: 'Emily Rodriguez',
		date: '2025-08-05',
		readTime: '15 min read',
		tags: ['CSS', 'Design', 'Frontend'],
	},
	{
		id: '4',
		title: 'Building Scalable Applications with Supabase',
		excerpt: 'Learn how to build and scale modern applications using Supabase as your backend-as-a-service platform.',
		slug: 'building-scalable-apps-supabase',
		author: 'David Kim',
		date: '2025-07-30',
		readTime: '10 min read',
		tags: ['Supabase', 'Backend', 'Database'],
	},
	{
		id: '5',
		title: 'Design Systems for Modern Applications',
		excerpt: 'Creating consistent and maintainable design systems that scale across teams and products.',
		slug: 'design-systems-modern-applications',
		author: 'Alex Thompson',
		date: '2025-07-25',
		readTime: '7 min read',
		tags: ['Design System', 'UI/UX', 'Frontend'],
	},
	{
		id: '6',
		title: 'The Art of Technical Writing',
		excerpt: 'Tips and techniques for writing clear, engaging technical documentation that developers actually want to read.',
		slug: 'art-of-technical-writing',
		author: 'Rachel Green',
		date: '2025-07-20',
		readTime: '6 min read',
		tags: ['Writing', 'Documentation', 'Communication'],
	},
];

const featuredTags = ['React', 'Next.js', 'AI', 'CSS', 'Supabase', 'Design', 'JavaScript', 'TypeScript'];

export default function HomePage() {
	return (
		<>
			<div className="min-h-screen">
				{/* Hero Section */}
				<section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
					<div className="absolute inset-0 bg-gradient-to-br from-primary-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-purple-900/20"></div>
					<div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23e0f2fe%22%20fill-opacity%3D%220.4%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] dark:opacity-10"></div>

					<div className="relative max-w-7xl mx-auto text-center">
						<div className="animate-fade-in">
							<h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
								Welcome to{' '}
								<span className="bg-gradient-to-r from-primary-600 to-purple-600 bg-clip-text text-transparent">
									ModernBlog
								</span>
							</h1>
							<p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8 leading-relaxed">
								Discover amazing stories, insights, and ideas from our community of writers.
								Join us on a journey through technology, design, and innovation.
							</p>
							<div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
								<button className="btn-primary group">
									<span>Start Reading</span>
									<ArrowRight className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
								</button>
								<button className="btn-secondary">
									<Search className="h-5 w-5 mr-2" />
									Explore Topics
								</button>
							</div>
						</div>
					</div>
				</section>

				{/* Featured Tags */}
				<section className="py-16 px-4 sm:px-6 lg:px-8">
					<div className="max-w-7xl mx-auto">
						<div className="text-center mb-12">
							<h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4 flex items-center justify-center">
								<TrendingUp className="h-8 w-8 mr-3 text-primary-600" />
								Popular Topics
							</h2>
							<p className="text-gray-600 dark:text-gray-300">Discover content by your favorite topics</p>
						</div>
						<div className="flex flex-wrap justify-center gap-3">
							{featuredTags.map((tag, index) => (
								<button
									key={tag}
									className="px-4 py-2 bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm hover:bg-primary-50 dark:hover:bg-primary-900/30 text-gray-700 dark:text-gray-300 hover:text-primary-700 dark:hover:text-primary-300 rounded-full border border-gray-200 dark:border-gray-600 hover:border-primary-300 dark:hover:border-primary-700 transition-all duration-200 transform hover:scale-105 animate-slide-up"
									style={{ animationDelay: `${index * 0.1}s` }}
								>
									#{tag}
								</button>
							))}
						</div>
					</div>
				</section>

				{/* Latest Posts */}
				<section className="py-16 px-4 sm:px-6 lg:px-8">
					<div className="max-w-7xl mx-auto">
						<div className="text-center mb-12">
							<h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4 flex items-center justify-center">
								<Star className="h-8 w-8 mr-3 text-primary-600" />
								Latest Posts
							</h2>
							<p className="text-gray-600 dark:text-gray-300">Fresh content from our amazing writers</p>
						</div>

						<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
							{dummyPosts.map((post, index) => (
								<div
									key={post.id}
									className="animate-slide-up"
									style={{ animationDelay: `${index * 0.1}s` }}
								>
									<PostCard {...post} />
								</div>
							))}
						</div>

						<div className="text-center mt-12">
							<button className="btn-primary">
								View All Posts
								<ArrowRight className="h-5 w-5 ml-2" />
							</button>
						</div>
					</div>
				</section>

				{/* Newsletter Section */}
				<section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-primary-600 to-purple-600">
					<div className="max-w-4xl mx-auto text-center">
						<h2 className="text-3xl font-bold text-white mb-4">Stay Updated</h2>
						<p className="text-primary-100 mb-8 text-lg">
							Get the latest posts and updates delivered straight to your inbox
						</p>
						<div className="flex flex-col sm:flex-row max-w-md mx-auto gap-4">
							<input
								type="email"
								placeholder="Enter your email"
								className="flex-1 px-4 py-3 rounded-lg border-0 focus:ring-2 focus:ring-white text-gray-900"
							/>
							<button className="bg-white text-primary-600 hover:bg-gray-100 px-6 py-3 rounded-lg font-medium transition-all duration-200 transform hover:scale-105">
								Subscribe
							</button>
						</div>
					</div>
				</section>
			</div>
		</>
	);
}