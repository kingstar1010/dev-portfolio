import style from './style.js'
import * as ImIcons from 'react-icons/im';

export default function WTText() {
    return (
        <div className='lwt-text'>
            <style jsx global>
                {style}
            </style>
            <h4>Need some help?</h4>
            <a className='lwt-link' href='/contacts' style={{ marginBottom: '65px' }}>
                Let’s work together <ImIcons.ImArrowRight2 />
            </a>
        </div>
    )
}