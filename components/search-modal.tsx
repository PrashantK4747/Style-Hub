"use client"

import { useState, useEffect } from "react"
import { Search, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { ProductCard } from "./product-card"

// Combined products from both men's and women's collections
const allProducts = [
  // Women's Products
  {
    id: "w1",
    name: "Elegant Floral Maxi Dress",
    price: 89,
    originalPrice: 120,
    image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=400&h=500&fit=crop&crop=center",
    category: "Dresses",
    rating: 4.8,
    isNew: true,
    gender: "women",
  },
  {
    id: "w2",
    name: "Classic White Button Shirt",
    price: 68,
    image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=400&h=500&fit=crop&crop=center",
    category: "Blouses",
    rating: 4.6,
    gender: "women",
  },
  {
    id: "w3",
    name: "High-Waisted Blue Jeans",
    price: 95,
    originalPrice: 130,
    image: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=400&h=500&fit=crop&crop=center",
    category: "Jeans",
    rating: 4.7,
    gender: "women",
  },
  {
    id: "w4",
    name: "Black Leather Boots",
    price: 145,
    image: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=400&h=500&fit=crop&crop=center",
    category: "Shoes",
    rating: 4.9,
    isNew: true,
    gender: "women",
  },
  {
    id: "w5",
    name: "Cozy Knit Sweater",
    price: 180,
    originalPrice: 220,
    image: "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=400&h=500&fit=crop&crop=center",
    category: "Sweaters",
    rating: 4.8,
    gender: "women",
  },
  {
    id: "w6",
    name: "Flowy Summer Skirt",
    price: 65,
    image: "https://images.unsplash.com/photo-1583496661160-fb5886a13d27?w=400&h=500&fit=crop&crop=center",
    category: "Skirts",
    rating: 4.5,
    gender: "women",
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
    gender: "women",
  },
  {
    id: "w8",
    name: "Designer Handbag",
    price: 35,
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=500&fit=crop&crop=center",
    category: "Accessories",
    rating: 4.6,
    gender: "women",
  },
  {
    id: "w9",
    name: "Silk Wrap Blouse",
    price: 55,
    originalPrice: 75,
    image: "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=400&h=500&fit=crop&crop=center",
    category: "Tops",
    rating: 4.4,
    gender: "women",
  },
  {
    id: "w10",
    name: "Elegant Trench Coat",
    price: 220,
    image: "https://images.unsplash.com/photo-1544957992-20349e4a8b7a?w=400&h=500&fit=crop&crop=center",
    category: "Coats",
    rating: 4.9,
    isNew: true,
    gender: "women",
  },
  {
    id: "w11",
    name: "Vintage Denim Jacket",
    price: 95,
    originalPrice: 125,
    image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=400&h=500&fit=crop&crop=center",
    category: "Jackets",
    rating: 4.8,
    gender: "women",
  },
  {
    id: "w12",
    name: "Little Black Dress",
    price: 110,
    image: "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=400&h=500&fit=crop&crop=center",
    category: "Dresses",
    rating: 4.7,
    gender: "women",
  },
  // Men's Products
  {
    id: "m1",
    name: "Classic Denim Jacket",
    price: 95,
    originalPrice: 120,
    image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=400&h=500&fit=crop&crop=center",
    category: "Jackets",
    rating: 4.6,
    isNew: true,
    gender: "men",
  },
  {
    id: "m2",
    name: "Premium White T-Shirt",
    price: 35,
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=500&fit=crop&crop=center",
    category: "T-Shirts",
    rating: 4.5,
    gender: "men",
  },
  {
    id: "m3",
    name: "Slim Fit Chinos",
    price: 75,
    originalPrice: 95,
    image: "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=400&h=500&fit=crop&crop=center",
    category: "Pants",
    rating: 4.7,
    gender: "men",
  },
  {
    id: "m4",
    name: "Brown Leather Shoes",
    price: 150,
    image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400&h=500&fit=crop&crop=center",
    category: "Shoes",
    rating: 4.8,
    isNew: true,
    gender: "men",
  },
  {
    id: "m5",
    name: "Wool Pullover Sweater",
    price: 85,
    originalPrice: 110,
    image: "https://images.unsplash.com/photo-1576995853123-5a10305d93c0?w=400&h=500&fit=crop&crop=center",
    category: "Sweaters",
    rating: 4.9,
    gender: "men",
  },
  {
    id: "m6",
    name: "Casual Button-Down",
    price: 55,
    image: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=400&h=500&fit=crop&crop=center",
    category: "Shirts",
    rating: 4.4,
    gender: "men",
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
    gender: "men",
  },
  {
    id: "m8",
    name: "White Canvas Sneakers",
    price: 70,
    image: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=400&h=500&fit=crop&crop=center",
    category: "Shoes",
    rating: 4.5,
    gender: "men",
  },
  {
    id: "m9",
    name: "Gray Hooded Sweatshirt",
    price: 65,
    originalPrice: 85,
    image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=400&h=500&fit=crop&crop=center",
    category: "Hoodies",
    rating: 4.7,
    gender: "men",
  },
  {
    id: "m10",
    name: "Dark Blue Jeans",
    price: 90,
    image: "https://images.unsplash.com/photo-1542272604-787c3835535d?w=400&h=500&fit=crop&crop=center",
    category: "Jeans",
    rating: 4.8,
    isNew: true,
    gender: "men",
  },
  {
    id: "m11",
    name: "Navy Polo Shirt",
    price: 42,
    originalPrice: 55,
    image: "https://images.unsplash.com/photo-1586790170083-2f9ceadc732d?w=400&h=500&fit=crop&crop=center",
    category: "Polo",
    rating: 4.3,
    gender: "men",
  },
  {
    id: "m12",
    name: "Black Winter Coat",
    price: 180,
    image: "https://images.unsplash.com/photo-1544966503-7cc5ac882d5f?w=400&h=500&fit=crop&crop=center",
    category: "Coats",
    rating: 4.9,
    gender: "men",
  },
]

export function SearchModal() {
  const [isOpen, setIsOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")
  const [filteredProducts, setFilteredProducts] = useState(allProducts)
  const [selectedFilter, setSelectedFilter] = useState("all")

  useEffect(() => {
    const filtered = allProducts.filter((product) => {
      const matchesSearch =
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.gender.toLowerCase().includes(searchQuery.toLowerCase())

      const matchesFilter =
        selectedFilter === "all" ||
        product.gender === selectedFilter ||
        product.category.toLowerCase() === selectedFilter.toLowerCase()

      return matchesSearch && matchesFilter
    })

    setFilteredProducts(filtered)
  }, [searchQuery, selectedFilter])

  const categories = ["all", "men", "women", "jackets", "shirts", "jeans", "shoes", "dresses"]

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button variant="ghost" size="sm" className="text-gray-600 hover:text-gray-900">
          <Search className="h-5 w-5" />
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-6xl max-h-[90vh] overflow-hidden p-0">
        <DialogHeader className="p-6 pb-4 border-b">
          <DialogTitle className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            Search Products
          </DialogTitle>
        </DialogHeader>

        <div className="p-6 space-y-6">
          {/* Search Input */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <Input
              placeholder="Search for products, categories, or brands..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 pr-4 py-3 text-lg border-2 border-purple-200 focus:border-purple-500 rounded-xl"
            />
            {searchQuery && (
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setSearchQuery("")}
                className="absolute right-2 top-1/2 transform -translate-y-1/2 h-8 w-8 p-0"
              >
                <X className="h-4 w-4" />
              </Button>
            )}
          </div>

          {/* Filter Buttons */}
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedFilter === category ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedFilter(category)}
                className={`capitalize ${
                  selectedFilter === category
                    ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white"
                    : "border-purple-200 text-purple-600 hover:bg-purple-50"
                }`}
              >
                {category}
              </Button>
            ))}
          </div>

          {/* Search Results */}
          <div className="max-h-[60vh] overflow-y-auto">
            {filteredProducts.length === 0 ? (
              <div className="text-center py-12">
                <Search className="h-16 w-16 text-gray-300 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-600 mb-2">No products found</h3>
                <p className="text-gray-500">
                  Try adjusting your search terms or filters to find what you're looking for.
                </p>
              </div>
            ) : (
              <>
                <div className="flex justify-between items-center mb-4">
                  <p className="text-gray-600">
                    Found <span className="font-semibold text-purple-600">{filteredProducts.length}</span> products
                  </p>
                  {searchQuery && <p className="text-sm text-gray-500">Searching for "{searchQuery}"</p>}
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                  {filteredProducts.map((product) => (
                    <div key={product.id} onClick={() => setIsOpen(false)}>
                      <ProductCard product={product} />
                    </div>
                  ))}
                </div>
              </>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
