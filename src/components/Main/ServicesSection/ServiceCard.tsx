import { ReactElement } from 'react'
import { FaMapMarkerAlt } from 'react-icons/fa'

interface CardProps {
  icon?: ReactElement
  title: string
  children: string
}

export function ServiceCard({ children, title, icon }: CardProps) {
  return (
    <div className="mt-5 lg:mt-0 flex-1 h-[539px] px-12 gap-5 text-center flex flex-col items-center justify-center rounded bg-white">
      {icon}
      <h4 className="text-4xl font-medium text-base-900">{title}</h4>
      <p className="text-2xl">{children}</p>
    </div>
  )
}
