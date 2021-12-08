import style from './style.js'
import PBar from '../../progress-bar/PBar'
import Image from "next/image";

export default function PLang(props) {

    const { value, i } = { ...props }

    return (
        <div className='p-lang'>
            <Image src={value.path} alt='image'/>
            <p>{value.title}</p>
            <PBar value={value} key={i} />
        </div>
    )
}