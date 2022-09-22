import { ReactElement } from 'react'
import { FaMapMarkerAlt } from 'react-icons/fa'

interface CardProps {
  icon?: ReactElement
  title: string
  children: string
}

export function Card({ children, title, icon }: CardProps) {
  return (
    <div className="h-[539px] px-12 text-center flex flex-col items-center justify-center rounded bg-white">
      {icon}
      <h4 className="text-4xl font-medium mb-3 text-base-900 mt-12">{title}</h4>
      <p className="text-2xl">{children}</p>
    </div>
  )
}
