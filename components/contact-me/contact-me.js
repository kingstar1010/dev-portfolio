import style from './style.js'
import * as FaIcons from 'react-icons/fa';
import Link from 'next/link'


export default function ContactMe() {
    return (
        <div className='contact-me'>
            <style jsx global>
                {style}
            </style>
            <Link href='/contacts' >
                <a>
                    <div className='cm-icon'>
                        <FaIcons.FaRegEnvelope />
                     </div>
                    <h1 className='cm-text'>Contact me</h1>
                </a>
            </Link>
        </div>
    )
}