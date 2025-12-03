/**
 * WhatsApp utility functions for Car One
 */

export const WHATSAPP_NUMBERS = {
  primary: "593979606963",
  secondary: "593986223966"
}

export const WELCOME_MESSAGE = "Bienvenido a Car One, disfrute nuestro servicio"

// Ruta de la imagen destacada
export const FEATURED_IMAGE_PATH = "/imagen destacada.jpg"

/**
 * Opens WhatsApp with the welcome message and featured image
 * @param phoneNumber - WhatsApp phone number (optional, defaults to primary)
 * @param customMessage - Custom message (optional, defaults to welcome message)
 * @param includeFeaturedImage - Whether to include the featured image (default: true)
 */
export const openWhatsApp = (phoneNumber?: string, customMessage?: string, includeFeaturedImage: boolean = true) => {
  const number = phoneNumber || WHATSAPP_NUMBERS.primary
  const message = customMessage || WELCOME_MESSAGE
  
  if (includeFeaturedImage) {
    // Para enviar imagen con mensaje, usamos el formato de WhatsApp Business API
    const imageUrl = window.location.origin + FEATURED_IMAGE_PATH
    const fullMessage = `${message}\n\n🖼️ Imagen: ${imageUrl}`
    const url = `https://wa.me/${number}?text=${encodeURIComponent(fullMessage)}`
    window.open(url, "_blank")
  } else {
    const url = `https://wa.me/${number}?text=${encodeURIComponent(message)}`
    window.open(url, "_blank")
  }
}

/**
 * Creates a click handler for WhatsApp buttons
 * @param phoneNumber - WhatsApp phone number (optional, defaults to primary)
 * @param customMessage - Custom message (optional, defaults to welcome message)
 * @param includeFeaturedImage - Whether to include the featured image (default: true)
 */
export const createWhatsAppHandler = (phoneNumber?: string, customMessage?: string, includeFeaturedImage: boolean = true) => {
  return () => openWhatsApp(phoneNumber, customMessage, includeFeaturedImage)
}

/**
 * Gets WhatsApp URL with message and optional featured image
 * @param phoneNumber - WhatsApp phone number (optional, defaults to secondary)
 * @param customMessage - Custom message (optional, defaults to welcome message)
 * @param includeFeaturedImage - Whether to include the featured image (default: true)
 */
export const getWhatsAppUrl = (phoneNumber?: string, customMessage?: string, includeFeaturedImage: boolean = true) => {
  const number = phoneNumber || WHATSAPP_NUMBERS.secondary
  const message = customMessage || WELCOME_MESSAGE
  
  if (includeFeaturedImage && typeof window !== 'undefined') {
    const imageUrl = window.location.origin + FEATURED_IMAGE_PATH
    const fullMessage = `${message}\n\n🖼️ Imagen: ${imageUrl}`
    return `https://wa.me/${number}?text=${encodeURIComponent(fullMessage)}`
  }
  
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`
}

/**
 * Sends WhatsApp message with featured image
 * This function specifically sends the welcome message with the featured image
 */
export const sendWhatsAppWithFeaturedImage = (phoneNumber?: string) => {
  openWhatsApp(phoneNumber, WELCOME_MESSAGE, true)
}

/**
 * Gets the featured image URL
 */
export const getFeaturedImageUrl = () => {
  if (typeof window !== 'undefined') {
    return window.location.origin + FEATURED_IMAGE_PATH
  }
  return FEATURED_IMAGE_PATH
}
