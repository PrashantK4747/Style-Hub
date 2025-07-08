import { ProductCard } from "@/components/product-card"

const menProducts = [
  {
    id: "m1",
    name: "Classic Denim Jacket",
    price: 95,
    originalPrice: 120,
    image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=400&h=500&fit=crop&crop=center",
    category: "Jackets",
    rating: 4.6,
    isNew: true,
  },
  {
    id: "m2",
    name: "Premium White T-Shirt",
    price: 35,
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=500&fit=crop&crop=center",
    category: "T-Shirts",
    rating: 4.5,
  },
  {
    id: "m3",
    name: "Slim Fit Chinos",
    price: 75,
    originalPrice: 95,
    image: "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=400&h=500&fit=crop&crop=center",
    category: "Pants",
    rating: 4.7,
  },
  {
    id: "m4",
    name: "Brown Leather Shoes",
    price: 150,
    image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400&h=500&fit=crop&crop=center",
    category: "Shoes",
    rating: 4.8,
    isNew: true,
  },
  {
    id: "m5",
    name: "Wool Pullover Sweater",
    price: 85,
    originalPrice: 110,
    image: "https://images.unsplash.com/photo-1576995853123-5a10305d93c0?w=400&h=500&fit=crop&crop=center",
    category: "Sweaters",
    rating: 4.9,
  },
  {
    id: "m6",
    name: "Casual Button-Down",
    price: 55,
    image: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=400&h=500&fit=crop&crop=center",
    category: "Shirts",
    rating: 4.4,
  },
  {
    id: "m7",
    name: "Athletic Joggers",
    price: 48,
    originalPrice: 65,
    image: "https://images.unsplash.com/photo-1544966503-7cc5ac882d5f?w=400&h=500&fit=crop&crop=center",
    category: "Activewear",
    rating: 4.6,
    isNew: true,
  },
  {
    id: "m8",
    name: "White Canvas Sneakers",
    price: 70,
    image: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=400&h=500&fit=crop&crop=center",
    category: "Shoes",
    rating: 4.5,
  },
  {
    id: "m9",
    name: "Gray Hooded Sweatshirt",
    price: 65,
    originalPrice: 85,
    image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=400&h=500&fit=crop&crop=center",
    category: "Hoodies",
    rating: 4.7,
  },
  {
    id: "m10",
    name: "Dark Blue Jeans",
    price: 90,
    image: "https://images.unsplash.com/photo-1542272604-787c3835535d?w=400&h=500&fit=crop&crop=center",
    category: "Jeans",
    rating: 4.8,
    isNew: true,
  },
  {
    id: "m11",
    name: "Navy Polo Shirt",
    price: 42,
    originalPrice: 55,
    image: "https://images.unsplash.com/photo-1586790170083-2f9ceadc732d?w=400&h=500&fit=crop&crop=center",
    category: "Polo",
    rating: 4.3,
  },
  {
    id: "m12",
    name: "Black Winter Coat",
    price: 180,
    image: "https://images.unsplash.com/photo-1544966503-7cc5ac882d5f?w=400&h=500&fit=crop&crop=center",
    category: "Coats",
    rating: 4.9,
  },
]

export default function MenPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header Section */}
        <div className="text-center mb-12">
          <div className="inline-block px-4 py-2 bg-gradient-to-r from-blue-100 to-indigo-100 rounded-full mb-4">
            <span className="text-sm font-medium text-blue-700">🔥 Men's Collection</span>
          </div>
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
            Bold & Sophisticated
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Explore our premium men's fashion collection, crafted for the modern gentleman who appreciates quality and
            style.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-8 mb-12 max-w-md mx-auto">
          <div className="text-center">
            <div className="text-2xl font-bold text-blue-600">{menProducts.length}</div>
            <div className="text-sm text-gray-600">Products</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-indigo-600">4.6★</div>
            <div className="text-sm text-gray-600">Avg Rating</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-blue-600">{menProducts.filter((p) => p.isNew).length}</div>
            <div className="text-sm text-gray-600">New Items</div>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {menProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  )
}
