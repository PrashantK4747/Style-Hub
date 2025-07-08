import { ProductCard } from "@/components/product-card"

const womenProducts = [
  {
    id: "w1",
    name: "Elegant Floral Maxi Dress",
    price: 89,
    originalPrice: 120,
    image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=400&h=500&fit=crop&crop=center",
    category: "Dresses",
    rating: 4.8,
    isNew: true,
  },
  {
    id: "w2",
    name: "Classic White Button Shirt",
    price: 68,
    image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=400&h=500&fit=crop&crop=center",
    category: "Blouses",
    rating: 4.6,
  },
  {
    id: "w3",
    name: "High-Waisted Blue Jeans",
    price: 95,
    originalPrice: 130,
    image: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=400&h=500&fit=crop&crop=center",
    category: "Jeans",
    rating: 4.7,
  },
  {
    id: "w4",
    name: "Black Leather Boots",
    price: 145,
    image: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=400&h=500&fit=crop&crop=center",
    category: "Shoes",
    rating: 4.9,
    isNew: true,
  },
  {
    id: "w5",
    name: "Cozy Knit Sweater",
    price: 180,
    originalPrice: 220,
    image: "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=400&h=500&fit=crop&crop=center",
    category: "Sweaters",
    rating: 4.8,
  },
  {
    id: "w6",
    name: "Flowy Summer Skirt",
    price: 65,
    image: "https://images.unsplash.com/photo-1583496661160-fb5886a13d27?w=400&h=500&fit=crop&crop=center",
    category: "Skirts",
    rating: 4.5,
  },
  {
    id: "w7",
    name: "Athletic Yoga Set",
    price: 48,
    originalPrice: 65,
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=500&fit=crop&crop=center",
    category: "Activewear",
    rating: 4.7,
    isNew: true,
  },
  {
    id: "w8",
    name: "Designer Handbag",
    price: 35,
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=500&fit=crop&crop=center",
    category: "Accessories",
    rating: 4.6,
  },
  {
    id: "w9",
    name: "Silk Wrap Blouse",
    price: 55,
    originalPrice: 75,
    image: "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=400&h=500&fit=crop&crop=center",
    category: "Tops",
    rating: 4.4,
  },
  {
    id: "w10",
    name: "Elegant Trench Coat",
    price: 220,
    image: "https://images.unsplash.com/photo-1544957992-20349e4a8b7a?w=400&h=500&fit=crop&crop=center",
    category: "Coats",
    rating: 4.9,
    isNew: true,
  },
  {
    id: "w11",
    name: "Vintage Denim Jacket",
    price: 95,
    originalPrice: 125,
    image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=400&h=500&fit=crop&crop=center",
    category: "Jackets",
    rating: 4.8,
  },
  {
    id: "w12",
    name: "Little Black Dress",
    price: 110,
    image: "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=400&h=500&fit=crop&crop=center",
    category: "Dresses",
    rating: 4.7,
  },
]

export default function WomenPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header Section */}
        <div className="text-center mb-12">
          <div className="inline-block px-4 py-2 bg-gradient-to-r from-purple-100 to-pink-100 rounded-full mb-4">
            <span className="text-sm font-medium text-purple-700">✨ Women's Collection</span>
          </div>
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            Elegant & Contemporary
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover our curated collection of premium women's fashion, designed for the modern woman who values style
            and quality.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-8 mb-12 max-w-md mx-auto">
          <div className="text-center">
            <div className="text-2xl font-bold text-purple-600">{womenProducts.length}</div>
            <div className="text-sm text-gray-600">Products</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-pink-600">4.7★</div>
            <div className="text-sm text-gray-600">Avg Rating</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-purple-600">{womenProducts.filter((p) => p.isNew).length}</div>
            <div className="text-sm text-gray-600">New Items</div>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {womenProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  )
}
