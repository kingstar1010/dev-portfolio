import style from './style.js'
import SkSkills from './skills-section/sk-section'
import Knowledge from './knowledge/knowledge'

export default function Skills() {
    return (
        <div className='s-container'>
            <style jsx global>
                {style}
            </style>
            <h1>Skills</h1>
            {/* <div>
                <SkSkills />
                <Knowledge />
            </div> */}
            <SkSkills />
            <Knowledge />
        </div>
    )
}