import { ReactNode } from "react"
import { ServiceCard } from "@/components/ui/service-card"
import { LucideIcon } from "lucide-react"

export interface ServiceItem {
  icon: ReactNode
  title: string
  description: string
}

export function renderServiceGrid(services: ServiceItem[]) {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
      {services.map((service, index) => (
        <ServiceCard
          key={index}
          icon={service.icon}
          title={service.title}
          description={service.description}
        />
      ))}
    </div>
  )
}

export function renderCenteredServiceGrid(services: ServiceItem[]) {
  return (
    <div className="flex justify-center">
      <div className="grid md:grid-cols-2 gap-6 max-w-2xl w-full">
        {services.map((service, index) => (
          <ServiceCard
            key={index}
            icon={service.icon}
            title={service.title}
            description={service.description}
          />
        ))}
      </div>
    </div>
  )
}
