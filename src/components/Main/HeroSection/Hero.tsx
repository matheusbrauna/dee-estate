import { FaPlayCircle } from 'react-icons/fa'
import { Button } from '../../Button'

export function Hero() {
  return (
    <div className="container grid grid-cols-2 gap-12">
      <div className="py-6">
        <h1 className="text-7xl font-medium">
          Helping you find the property of your dreams.
        </h1>

        <p className="text-3xl mt-4 mb-12">
          Creating quality urban lifestyles, building stronger communities
        </p>

        <div className="flex items-center gap-14">
          <Button>Learn More</Button>
          <FaPlayCircle size={50} className="text-brand-mid" />
        </div>
      </div>

      <div>
        <img src="/hero-img.png" alt="" />
      </div>
    </div>
  )
}
