import style from './style.js'
import hobies from '../../data/HobieData'
import Hobbie from './hobbie-item'

export default function Hobbies() {
    return (
        <div className='hobies'>
            <style jsx global>
                {style}
            </style>
            <h1 className='h-title'>Hobbies</h1>
            <div className='h-content'>
                {hobies.map((hobbie, index) => (
                    <Hobbie hobbie={hobbie} key={index} />
                ))}
            </div>
        </div>
    )
}
