import style from './style.js'
import { useState, useEffect, useRef } from 'react'
import Image from "next/image";

export default function Pbar(props) {

    // const hiddenRef = useRef();

    const { value, i } = { ...props }

    const mystyle = {
        // stroke: value.color,
        stroke: "#26c2ff",
        strokeDashoffset: (565 - (565 * value.progress) / 100)
    };

    const handleScroll = () => setOffsetY(window.pageYOffset - screen.height);

    useEffect(() => {
        const faders = document.querySelectorAll('.precent');
        // console.log(fader)

        window.addEventListener('scroll', () => {

            faders.forEach(entry => {
                var top = entry.getBoundingClientRect().top;

                if (top < window.innerHeight + 10) {
                    entry.classList.add('appear');
                }
            });
        });

        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <div className='pb-container'>
            <style jsx global>
                {style}
            </style>
            <div className='pbar-card'>
                <div className='precent'>
                    <svg>
                        <circle cx='90' cy='90' r='90'></circle>
                        <circle cx='90' cy='90' r='90'
                            style={mystyle}>
                        </circle>
                    </svg>
                    <div className='number'>
                        <h2>{value.progress}<span className='h2-s'>%</span></h2>
                    </div>
                </div>
                <div className='pb-title'>
                    <Image src={value.path} alt='progress-bar image'/>
                    <p>{value.title}</p>
                </div>
            </div>
            <div className='backgroung-line' style={{ background: value.color }}></div>
        </div>
    )
}