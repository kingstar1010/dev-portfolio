import style from './style.js'
import Categories from '../../../data/KnowledgeData'
import KItem from './k-item'

export default function Knowledge() {
    return (
        <div className='k-container'>
            <style jsx global>
                {style}
            </style>
            <h1 className='fade-in'>Familiar With</h1>
            <div className='k-content fade-in'>
                {Categories.map((category, index) => (
                    // <PLang value={item} i={index} key={index} />
                    <KItem category={category} i={index} key={index} />
                ))}
            </div>
        </div>
    )
}
