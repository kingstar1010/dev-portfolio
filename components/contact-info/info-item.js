import style from './style.js'

export default function InfoItem(props) {

    const { value } = { ...props }

    return (
        <div>
            <style jsx global>
                {style}
            </style>
            <div className='ci-icon' style={{ margin: 0 }}>
                {value.icon}
            </div>
            <p>{value.title}</p>
        </div>
    )
}