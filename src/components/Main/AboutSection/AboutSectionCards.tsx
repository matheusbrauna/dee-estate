import { BsFillShieldLockFill } from 'react-icons/bs'
import { FaMapMarkerAlt } from 'react-icons/fa'
import { MdOutlinePayment } from 'react-icons/md'
import { Card } from '../../Card'

export function AboutSectionCards() {
  return (
    <div className="mt-20 grid grid-cols-3 place-items-center gap-12">
      <Card
        icon={<FaMapMarkerAlt size={64} className="text-brand-dark" />}
        title="Find Home"
      >
        Our properties are located at prime areas where by there won’t be
        problem with transportation
      </Card>

      <Card
        icon={<MdOutlinePayment size={64} className="text-brand-dark" />}
        title="Make payments"
      >
        Our estates comes with good network,portable water , 24hrs light and
        round the clock security.
      </Card>

      <Card
        icon={<BsFillShieldLockFill size={64} className="text-brand-dark" />}
        title="Make it Official"
      >
        We have been in business for over 32 years,for client outside the
        country you can trust us to deliver well.
      </Card>
    </div>
  )
}
