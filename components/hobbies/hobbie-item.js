import style from './style.js'

export default function Hobbie(props) {

    const { hobbie } = { ...props }

    return (
        <div className='hobie'>
            <style jsx global>
                {style}
            </style>
            {hobbie.icon}
            <h1 className=''>{hobbie.title}</h1>
        </div>
    )
}
