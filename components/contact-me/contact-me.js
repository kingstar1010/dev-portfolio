import style from './style.js'
import * as FaIcons from 'react-icons/fa';

export default function ContactMe() {
    return (
        <div className='contact-me'>
            <style jsx global>
                {style}
            </style>
            <a href='http://localhost:3000/contacts'>
                <div className='cm-icon'>
                    <FaIcons.FaRegEnvelope />
                </div>
                <h1 className='cm-text'>Contact me</h1>
            </a>
        </div>
    )
}