"use client"

import { useState } from "react"
import { Plus, Minus, ShoppingCart, Trash2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { useCart } from "./cart-provider"
import Image from "next/image"

export function CartSidebar() {
  const { state, dispatch } = useCart()
  const [isOpen, setIsOpen] = useState(false)

  const updateQuantity = (id: string, quantity: number) => {
    dispatch({ type: "UPDATE_QUANTITY", payload: { id, quantity } })
  }

  const removeItem = (id: string) => {
    dispatch({ type: "REMOVE_ITEM", payload: id })
  }

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="sm" className="relative hover:bg-purple-50 transition-colors duration-200">
          <ShoppingCart className="h-5 w-5" />
          {state.itemCount > 0 && (
            <span className="absolute -top-2 -right-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center font-semibold animate-pulse">
              {state.itemCount}
            </span>
          )}
        </Button>
      </SheetTrigger>
      <SheetContent className="w-full sm:max-w-lg bg-white">
        <SheetHeader className="border-b pb-4">
          <SheetTitle className="text-xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            Shopping Cart ({state.itemCount} items)
          </SheetTitle>
        </SheetHeader>

        <div className="flex flex-col h-full">
          <div className="flex-1 overflow-y-auto py-6">
            {state.items.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full text-gray-500">
                <div className="w-24 h-24 bg-gradient-to-r from-purple-100 to-pink-100 rounded-full flex items-center justify-center mb-4">
                  <ShoppingCart className="h-12 w-12 text-purple-400" />
                </div>
                <p className="text-lg font-medium">Your cart is empty</p>
                <p className="text-sm text-gray-400 mt-1">Add some items to get started</p>
              </div>
            ) : (
              <div className="space-y-4">
                {state.items.map((item) => (
                  <div
                    key={item.id}
                    className="flex items-center space-x-4 bg-gradient-to-r from-gray-50 to-purple-50 p-4 rounded-xl border border-purple-100"
                  >
                    <div className="relative w-16 h-16 flex-shrink-0 rounded-lg overflow-hidden">
                      <Image src={item.image || "/placeholder.svg"} alt={item.name} fill className="object-cover" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="text-sm font-semibold text-gray-900 truncate">{item.name}</h4>
                      <p className="text-lg font-bold text-purple-600">${item.price}</p>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="h-8 w-8 p-0 border-purple-200 hover:bg-purple-50"
                      >
                        <Minus className="h-3 w-3" />
                      </Button>
                      <span className="text-sm font-semibold w-8 text-center bg-white px-2 py-1 rounded border">
                        {item.quantity}
                      </span>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="h-8 w-8 p-0 border-purple-200 hover:bg-purple-50"
                      >
                        <Plus className="h-3 w-3" />
                      </Button>
                    </div>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => removeItem(item.id)}
                      className="h-8 w-8 p-0 text-red-500 hover:text-red-700 hover:bg-red-50"
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                ))}
              </div>
            )}
          </div>

          {state.items.length > 0 && (
            <div className="border-t pt-6 space-y-4 bg-gradient-to-r from-purple-50 to-pink-50 p-4 rounded-t-xl">
              <div className="flex justify-between text-xl font-bold">
                <span>Total:</span>
                <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                  ${state.total.toFixed(2)}
                </span>
              </div>
              <Button
                className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold py-3 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
                size="lg"
              >
                Proceed to Checkout 🛍️
              </Button>
              <Button
                variant="outline"
                className="w-full border-purple-200 text-purple-600 hover:bg-purple-50"
                onClick={() => dispatch({ type: "CLEAR_CART" })}
              >
                Clear Cart
              </Button>
            </div>
          )}
        </div>
      </SheetContent>
    </Sheet>
  )
}
