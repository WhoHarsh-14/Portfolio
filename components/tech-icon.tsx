import type { ReactNode } from "react"
import { Badge } from "@/components/ui/badge"


interface TechIconProps {
  name: string
  icon: ReactNode
  color: string
}

export function TechIcon({ name, icon, color }: TechIconProps) {
  return (
    <div className="flex flex-col items-center">
      <div
        className="mb-3 flex h-16 w-16 items-center justify-center rounded-lg p-3 drop-shadow-[0_0_10px_#ffffff]"
        style={{ backgroundColor: `${color}50` }}
      >
        <div style={{ color }}>{icon}</div>
      </div>
      <Badge className="mb-4 bg-green-200 px-3 py-1 text-black"><span className="text-center text-sm font-medium">{name}</span></Badge>
    </div>
  )
}

