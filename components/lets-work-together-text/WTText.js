import style from './style.js'
import * as ImIcons from 'react-icons/im';
import Link from 'next/link'

export default function WTText() {
    return (
        <div className='lwt-text'>
            <style jsx global>
                {style}
            </style>
            <h4>Need some help?</h4>
            <Link href='/contacts'>
            <a className='lwt-link'  style={{ marginBottom: '65px' }}>
                Let’s work together <ImIcons.ImArrowRight2 />
            </a>
            </Link>
        </div>
    )
}