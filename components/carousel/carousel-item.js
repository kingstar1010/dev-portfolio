import style from './style.js'

export default function Contact(props) {

    const { value } = { ...props }

    return (
        <div className="mySlides fade">
            {value.image}
            <div className="text">{value.title}</div>
        </div>
    )
}