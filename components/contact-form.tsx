"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, AlertCircle, Send } from "lucide-react"

const services = [
  "Frenos",
  "Suspensión", 
  "Lubricantes",
  "Enderezada y Pintura",
  "Venta de Neumáticos",
  "Venta de Baterías",
  "Otro"
]

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });

    if (response.ok) {
      alert('¡Mensaje enviado correctamente!');
      e.currentTarget.reset();
    } else {
      alert('Error al enviar el mensaje');
    }
    setIsSubmitting(false);
  };

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-center text-gray-900">
          Contáctanos
        </CardTitle>
        <p className="text-center text-gray-600">
          Completa el formulario y te responderemos lo antes posible
        </p>
      </CardHeader>
      <CardContent>
        <form className="space-y-6" onSubmit={handleSubmit}>
          {/* Nombre */}
          <div>
            <Label htmlFor="name" className="text-sm font-medium text-gray-700">
              Nombre completo *
            </Label>
            <Input
              id="name"
              name="name"
              type="text"
              required
              className="mt-1"
              placeholder="Tu nombre completo"
            />
          </div>
          {/* Email */}
          <div>
            <Label htmlFor="email" className="text-sm font-medium text-gray-700">
              Email *
            </Label>
            <Input
              id="email"
              name="email"
              type="email"
              required
              className="mt-1"
              placeholder="tu@email.com"
            />
          </div>
          {/* Teléfono */}
          <div>
            <Label htmlFor="phone" className="text-sm font-medium text-gray-700">
              Teléfono *
            </Label>
            <Input
              id="phone"
              name="phone"
              type="tel"
              required
              className="mt-1"
              placeholder="+593 98 123 4567"
            />
          </div>
          {/* Servicio */}
          <div>
            <Label htmlFor="service" className="text-sm font-medium text-gray-700">
              Servicio de interés *
            </Label>
            <select
              id="service"
              name="service"
              required
              className="mt-1 block w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm focus:border-[#00FF00] focus:outline-none focus:ring-1 focus:ring-[#00FF00]"
            >
              <option value="">Selecciona un servicio</option>
              {services.map((service) => (
                <option key={service} value={service}>
                  {service}
                </option>
              ))}
            </select>
          </div>
          {/* Mensaje */}
          <div>
            <Label htmlFor="message" className="text-sm font-medium text-gray-700">
              Mensaje *
            </Label>
            <Textarea
              id="message"
              name="message"
              required
              minLength={10}
              className="mt-1"
              placeholder="Cuéntanos sobre tu consulta o servicio que necesitas..."
              rows={4}
            />
          </div>
          <Button type="submit" className="w-full flex items-center justify-center gap-2" disabled={isSubmitting}>
            <Send className="w-4 h-4" />
            {isSubmitting ? 'Enviando...' : 'Enviar mensaje'}
          </Button>
        </form>
      </CardContent>
    </Card>
  )
} 