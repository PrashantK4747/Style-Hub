import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight, Star, Truck, Shield, RefreshCw } from "lucide-react"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900" />
        <div className="absolute inset-0 bg-black/30" />

        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
          <div className="absolute top-40 left-40 w-80 h-80 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
        </div>

        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <div className="mb-6">
            <span className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium mb-4">
              ✨ New Collection Available
            </span>
          </div>
          <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-white via-purple-200 to-blue-200 bg-clip-text text-transparent">
            StyleHub
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto leading-relaxed">
            Discover premium fashion that defines your unique style. Curated collections for the modern wardrobe.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/women">
              <Button
                size="lg"
                className="w-full sm:w-auto text-lg px-8 py-6 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 transform hover:scale-105 transition-all duration-200 shadow-xl"
              >
                Shop Women's Collection
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="/men">
              <Button
                size="lg"
                variant="outline"
                className="w-full sm:w-auto text-lg px-8 py-6 bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20 transform hover:scale-105 transition-all duration-200"
              >
                Shop Men's Collection
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-200">
                <Truck className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Free Shipping</h3>
              <p className="text-gray-600">Free shipping on orders over $50</p>
            </div>
            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-200">
                <Shield className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Secure Payment</h3>
              <p className="text-gray-600">100% secure payment processing</p>
            </div>
            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-200">
                <RefreshCw className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Easy Returns</h3>
              <p className="text-gray-600">30-day hassle-free returns</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Categories */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
              Shop by Category
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Explore our carefully curated collections designed for every occasion
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Link href="/women" className="group relative overflow-hidden rounded-2xl shadow-2xl">
              <div className="aspect-[4/5] relative">
                <Image
                  src="https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=600&h=750&fit=crop&crop=faces"
                  alt="Women's Fashion"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-8 left-8 text-white">
                  <div className="flex items-center mb-2">
                    <Star className="h-5 w-5 text-yellow-400 fill-current" />
                    <span className="ml-2 text-sm">Premium Collection</span>
                  </div>
                  <h3 className="text-3xl font-bold mb-2">Women's Collection</h3>
                  <p className="text-lg mb-4">Elegant & Contemporary</p>
                  <Button className="bg-white text-black hover:bg-gray-100 transform hover:scale-105 transition-all duration-200">
                    Explore Now
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            </Link>

            <Link href="/men" className="group relative overflow-hidden rounded-2xl shadow-2xl">
              <div className="aspect-[4/5] relative">
                <Image
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=750&fit=crop&crop=faces"
                  alt="Men's Fashion"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-8 left-8 text-white">
                  <div className="flex items-center mb-2">
                    <Star className="h-5 w-5 text-yellow-400 fill-current" />
                    <span className="ml-2 text-sm">Premium Collection</span>
                  </div>
                  <h3 className="text-3xl font-bold mb-2">Men's Collection</h3>
                  <p className="text-lg mb-4">Bold & Sophisticated</p>
                  <Button className="bg-white text-black hover:bg-gray-100 transform hover:scale-105 transition-all duration-200">
                    Explore Now
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-pink-600">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-4xl font-bold text-white mb-4">Stay in Style</h2>
          <p className="text-xl text-purple-100 mb-8">
            Subscribe to get exclusive offers and be the first to know about new collections
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-6 py-4 rounded-full text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-4 focus:ring-white/30"
            />
            <Button className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-4 rounded-full font-semibold">
              Subscribe
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
