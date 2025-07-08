"use client"

import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useCart } from "./cart-provider"
import { useState } from "react"
import { CartSidebar } from "./cart-sidebar"
import { SearchModal } from "./search-modal"

export function Navigation() {
  const { state } = useCart()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="bg-white/95 backdrop-blur-md shadow-lg border-b sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link
            href="/"
            className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent"
          >
            StyleHub
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-700 hover:text-purple-600 font-medium transition-colors duration-200">
              Home
            </Link>
            <Link href="/men" className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200">
              Men
            </Link>
            <Link
              href="/women"
              className="text-gray-700 hover:text-pink-600 font-medium transition-colors duration-200"
            >
              Women
            </Link>
            <SearchModal />
            <CartSidebar />
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-2">
            <SearchModal />
            <CartSidebar />
            <Button variant="ghost" size="sm" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t py-4 bg-white/95 backdrop-blur-md">
            <div className="flex flex-col space-y-4">
              <Link
                href="/"
                className="text-gray-700 hover:text-purple-600 font-medium transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/men"
                className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                Men
              </Link>
              <Link
                href="/women"
                className="text-gray-700 hover:text-pink-600 font-medium transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                Women
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
