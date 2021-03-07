import style from './style.js'
import PBar from '../../progress-bar/PBar'

export default function PLang(props) {

    const { value, i } = { ...props }

    return (
        <div className='p-lang'>
            <img src={value.path}></img>
            <p>{value.title}</p>
            <PBar value={value} key={i} />
        </div>
    )
}