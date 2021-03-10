import style from './style.js'
import IContent from './item-content'
// import Data from ''

export default function KItem(props) {

    const { category, i } = { ...props }
    const technologies = category.technologies;

    return (
        <div className='k-item '>
            {/* fade-in */}
            <style jsx global>
                {style}
            </style>
            <div className='card'>
                <div className='text' style={{ background: '#26c2ff' }}>
                    {category.title}
                </div>
                <div className='box'>
                    {technologies.map((technology, index) => (
                        <IContent technology={technology} i={index} key={index} />
                    ))}
                </div>
            </div>
        </div>
    )
}
