import style from './style.js'
import Data from '../../../data/PLangData'
import PLang from './p-lang'
import PBar from '../../progress-bar/PBar'

export default function SkSection() {

    return (
        <div className='sk-container'>
            <style jsx global>
                {style}
            </style>
            <h1 className='fade-in'>Programming Languages</h1>
            <div className='sk-content fade-in'>
                {Data.map((item, index) => (
                    // <PLang value={item} i={index} key={index} />
                    <PBar value={item} i={index} key={index} />
                ))}
            </div>
        </div>
    )
}