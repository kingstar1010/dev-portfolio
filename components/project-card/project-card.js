import Link from 'next/dist/client/link'
import cstyle from './pcard-style.js'

export default function PCard(props) {

    const { value, i } = { ...props }

    const colors = ["#0f0f0f", "#21211e", "#e6e6e6", "rgba(15, 20, 30, .9)", "4e4c4c", "#878a8f"];

    return (
        <div className='main-container fade-in'>
            <style jsx global>
                {cstyle}
            </style>

            <div className="card" style={{ backgroundColor: colors[i] }}>
                <Link href={value.path} target="_blank">
                    <div className={value.cName}>
                        <h1 className='c-title'>{value.title}</h1>
                        <p className='c-body'>
                            {value.content}
                        </p>

                        <h5 className='footer-text'>
                            Click for more
                        </h5>
                    </div>
                </Link>
            </div>
        </div>
    )
}
