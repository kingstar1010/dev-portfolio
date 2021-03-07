import style from './style.js'
import InfoItem from './info-item'
import Data from '../../data/ContactInfoData'

export default function ContactInfo() {
    return (
        <div className='contact-info'>
            <style jsx global>
                {style}
            </style>
            {Data.map((item, index) => (
                <InfoItem value={item} key={index} />
            ))}
        </div>
    )
}