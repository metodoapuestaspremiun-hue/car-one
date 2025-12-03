"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

interface SlideData {
  title: string
  button: string
  src: string
}

interface CarouselProps {
  slides?: SlideData[]
  children?: React.ReactNode
}

export default function Carousel({ slides, children }: CarouselProps) {
  const [currentSlide, setCurrentSlide] = useState(0)
  const slideCount = slides ? slides.length : (Array.isArray(children) ? children.length : 0)

  useEffect(() => {
    if (!slideCount) return
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slideCount)
    }, 4000)
    return () => clearInterval(timer)
  }, [slideCount])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slideCount)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slideCount) % slideCount)
  }

  return (
    <div className="relative w-full h-full overflow-hidden rounded-lg">
      <div className="relative w-full h-full">
        {slides
          ? slides.map((slide, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-opacity duration-500 ${
                  index === currentSlide ? "opacity-100" : "opacity-0"
                }`}
              >
                <div className="w-full h-full bg-cover bg-center relative" style={{ backgroundImage: `url(${slide.src})` }}>
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                    <div className="text-center text-white">
                      <h3 className="text-2xl font-bold mb-4">{slide.title}</h3>
                      {slide.button === 'Consultar Precios' || slide.button === 'Ver Todos los Servicios' ? (
                        <a href="#contratar-servicios">
                          <button className="px-6 py-2 bg-[#00FF00] text-black rounded-lg hover:bg-[#00CC00] transition-colors">
                            {slide.button}
                          </button>
                        </a>
                      ) : (
                        <button className="px-6 py-2 bg-[#00FF00] text-black rounded-lg hover:bg-[#00CC00] transition-colors">
                          {slide.button}
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))
          : Array.isArray(children)
          ? children.map((child, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-opacity duration-500 ${
                  index === currentSlide ? "opacity-100" : "opacity-0"
                }`}
              >
                {child}
              </div>
            ))
          : null}
      </div>

      {/* Navigation buttons */}
      {slideCount > 1 && (
        <>
          <button
            onClick={prevSlide}
            className="z-50 absolute left-4 top-1/2 transform -translate-y-1/2 bg-[#00FF00] hover:bg-[#00CC00] rounded-full p-4 shadow-2xl border-4 border-black"
            style={{ boxShadow: '0 4px 24px 0 rgba(0,0,0,0.5)' }}
          >
            <ChevronLeft className="w-8 h-8 text-black" />
          </button>

          <button
            onClick={nextSlide}
            className="z-50 absolute right-4 top-1/2 transform -translate-y-1/2 bg-[#00FF00] hover:bg-[#00CC00] rounded-full p-4 shadow-2xl border-4 border-black"
            style={{ boxShadow: '0 4px 24px 0 rgba(0,0,0,0.5)' }}
          >
            <ChevronRight className="w-8 h-8 text-black" />
          </button>
        </>
      )}

      {/* Dots indicator */}
      {slideCount > 1 && (
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-50">
          {Array.from({ length: slideCount }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === currentSlide ? "bg-[#00FF00]" : "bg-white/50"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  )
}
