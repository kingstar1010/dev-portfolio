import Data from '../../data/PCardsData'
import PCard from '../project-card/project-card'
import { motion } from "framer-motion"

export default function Projects() {
    return (
        <div className='personal-projects'>

            {/* <motion.div
                animate={{ x: 50 }}
                transition={{ ease: "easeOut", duration: 2 }}
            > */}
            <h4 className='fade-in' >Personal projects</h4>
            {/* </motion.div> */}

            <div className='project-cards'>
                {Data.map((item, index) => (
                    <PCard value={item} i={index} key={index} />
                ))}
            </div>
        </div>
    )
}