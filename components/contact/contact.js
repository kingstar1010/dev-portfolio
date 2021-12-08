import { motion } from 'framer-motion';
import Data from '../../data/ContactData'
import style from './style.js'
import Link from 'next/dist/client/link'

export default function Contact() {
    return (
        <div className='contact-icons'>
            <style jsx global>
                {style}
            </style>
            {Data.map((item, index) => (
                <motion.div
                    className={item.cName} key={index}
                    whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }}
                >
                    <Link className={item.title} href={item.path} target="_blank">
                        <div className={item.title}>
                            {item.icon}
                        </div>
                    </Link>
                </motion.div>
            ))}
        </div>
    )
}