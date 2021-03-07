import style from './style.js'
import hobies from '../../data/HobieData'
import Hobie from './hobie-item'

export default function Hobies() {
    return (
        <div className='hobies'>
            <style jsx global>
                {style}
            </style>
            <h1 className='h-title'>Hobies</h1>
            <div className='h-content'>
                {hobies.map((hobie, index) => (
                    <Hobie hobie={hobie} key={index} />
                ))}
            </div>
        </div>
    )
}
