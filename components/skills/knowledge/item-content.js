import style from './style.js'

export default function IContent(props) {

    const { technology, i } = { ...props }
    const svgColor = {
        color: technology.color
    };

    return (
        <div className='k-item-content'>
            {/* fade-in */}
            {/* <style jsx>{`
                svg {
                    fill: ${technology.color};
                }
            `}</style> */}
            <style jsx global>
                {style}
            </style>
            <div style={{ ...svgColor }}>
                {technology.icon}
            </div>
            <h2>{technology.title}</h2>
        </div>
    )
}
