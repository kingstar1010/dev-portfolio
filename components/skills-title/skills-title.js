import style from './style.js'
import { useState, useEffect, useRef } from 'react'

export default function SkillsT() {

    const hiddenRef = useRef();

    const [offsetY, setOffsetY] = useState(0)
    const handleScroll = () => setOffsetY(window.pageYOffset - screen.height);

    useEffect(() => {
        const fader = document.querySelectorAll('.st-text')[0];
        // console.log(fader)

        window.addEventListener('scroll', () => {
            // var top = fader.getBoundingClientRect().top;
            // console.log(hiddenRef.current.offsetTop)
            // if (hiddenRef.current = ! null) {
            if (window.pageYOffset + window.innerHeight >= hiddenRef.current.offsetTop) {
                // console.log("true")
                fader.classList.add('appear');
            }
            // }
        });

        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <div className='st-container'>
            <style jsx global>
                {style}
            </style>
            <span className='st-text' ref={hiddenRef}>Welcome to</span>
            <span className='st-text-2'>Skills Section</span>
        </div>
    )
}