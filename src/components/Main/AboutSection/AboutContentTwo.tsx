import { TiInputChecked } from 'react-icons/ti'

export function AboutContentTwo() {
  return (
    <div className="grid grid-cols-2 gap-28 place-items-center">
      <div>
        <img src="/service1.png" alt="" />
      </div>

      <div className="-order-1">
        <h3 className="text-5xl font-bold">Why you should choose us. </h3>
        <p className="mt-5 mb-5 text-2xl">
          Creating quality urban lifestyles, building stronger communities
        </p>

        <ul className="grid grid-cols-2 gap-y-4">
          <li className="flex gap-3 items-center leading-none text-2xl font-medium">
            <TiInputChecked size={24} className="text-brand-dark" />
            World class
          </li>

          <li className="flex gap-3 items-center leading-none text-2xl font-medium">
            <TiInputChecked size={24} className="text-brand-dark" />
            Affordable
          </li>

          <li className="flex gap-3 items-center leading-none text-2xl font-medium">
            <TiInputChecked size={24} className="text-brand-dark" />
            Trusted
          </li>
          <li className="flex gap-3 items-center leading-none text-2xl font-medium">
            <TiInputChecked size={24} className="text-brand-dark" />
            Amenities
          </li>
        </ul>
      </div>
    </div>
  )
}
