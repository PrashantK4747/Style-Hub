"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { useCart } from "./cart-provider"
import { toast } from "@/hooks/use-toast"
import { Heart, ShoppingBag, Star } from "lucide-react"
import { useState } from "react"

interface Product {
  id: string
  name: string
  price: number
  originalPrice?: number
  image: string
  category: string
  rating?: number
  isNew?: boolean
  gender?: string
}

interface ProductCardProps {
  product: Product
}

export function ProductCard({ product }: ProductCardProps) {
  const { dispatch } = useCart()
  const [isLiked, setIsLiked] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleAddToCart = async () => {
    setIsLoading(true)

    // Simulate loading
    await new Promise((resolve) => setTimeout(resolve, 500))

    dispatch({
      type: "ADD_ITEM",
      payload: {
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.image,
      },
    })

    toast({
      title: "Added to cart! 🛍️",
      description: `${product.name} has been added to your cart.`,
    })

    setIsLoading(false)
  }

  const discount = product.originalPrice
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0

  return (
    <Card className="group hover:shadow-2xl transition-all duration-300 border-0 shadow-lg overflow-hidden bg-white">
      <CardContent className="p-0">
        <div className="aspect-[3/4] relative overflow-hidden">
          {product.isNew && (
            <div className="absolute top-3 left-3 z-10 bg-gradient-to-r from-green-500 to-emerald-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
              NEW
            </div>
          )}
          {discount > 0 && (
            <div className="absolute top-3 right-3 z-10 bg-gradient-to-r from-red-500 to-pink-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
              -{discount}%
            </div>
          )}
          {product.gender && (
            <div className="absolute bottom-3 left-3 z-10 bg-black/70 text-white px-2 py-1 rounded text-xs font-medium capitalize">
              {product.gender}
            </div>
          )}

          <Image
            src={product.image || "/placeholder.svg"}
            alt={product.name}
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-500"
          />

          {/* Overlay with actions */}
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
            <div className="flex gap-2">
              <Button
                size="sm"
                variant="secondary"
                className="rounded-full w-10 h-10 p-0 bg-white/90 hover:bg-white shadow-lg"
                onClick={(e) => {
                  e.preventDefault()
                  setIsLiked(!isLiked)
                }}
              >
                <Heart className={`h-4 w-4 ${isLiked ? "fill-red-500 text-red-500" : "text-gray-600"}`} />
              </Button>
            </div>
          </div>
        </div>

        <div className="p-5">
          <div className="mb-2">
            <span className="text-xs font-medium text-purple-600 bg-purple-50 px-2 py-1 rounded-full">
              {product.category}
            </span>
          </div>

          <h3 className="font-semibold text-lg mb-2 line-clamp-2 text-gray-900 group-hover:text-purple-600 transition-colors">
            {product.name}
          </h3>

          {product.rating && (
            <div className="flex items-center mb-3">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`h-4 w-4 ${
                      i < Math.floor(product.rating!) ? "text-yellow-400 fill-current" : "text-gray-300"
                    }`}
                  />
                ))}
              </div>
              <span className="text-sm text-gray-500 ml-2">({product.rating})</span>
            </div>
          )}

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="text-2xl font-bold text-gray-900">${product.price}</span>
              {product.originalPrice && (
                <span className="text-lg text-gray-500 line-through">${product.originalPrice}</span>
              )}
            </div>
            <Button
              onClick={handleAddToCart}
              size="sm"
              disabled={isLoading}
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white border-0 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
            >
              {isLoading ? (
                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
              ) : (
                <>
                  <ShoppingBag className="h-4 w-4 mr-1" />
                  Add
                </>
              )}
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
