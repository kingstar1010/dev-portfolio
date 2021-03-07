import style from './style.js'

export default function Hobie(props) {

    const { hobie } = { ...props }

    return (
        <div className='hobie'>
            <style jsx global>
                {style}
            </style>
            {hobie.icon}
            <h1 className=''>{hobie.title}</h1>
        </div>
    )
}
