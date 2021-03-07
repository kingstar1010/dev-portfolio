import Image from 'next/image'
import cstyle from './pcard-style.js'

export default function PCard(props) {

    const { value, i } = { ...props }

    const colors = ["#0f0f0f", "#21211e", "#e6e6e6", "rgba(15, 20, 30, .9)", "4e4c4c", "#878a8f"];

    return (
        <div className='main-container fade-in'>
            <style jsx global>
                {cstyle}
            </style>

            {/* <div className='card'>
                <div className='front'>
                    <img className='c-img' src={value.path} alt="img" width="325" height="200" />

                    <div className='card-content'>
                        <h3>{value.title}</h3>
                        <p>{value.content}</p>
                    </div>

                    <div style={{ background: '#26c2ff' }}>
                        <p className='footer-text' >hover me</p>
                    </div>
                </div>
                <div className='back'>
                    <h2>Back </h2>
                </div>
            </div> */}

            <div className="card" style={{ backgroundColor: colors[i] }}>
                <a href='/contacts'>
                    <div className={value.cName}>
                        <h1 className='c-title'>{value.title}</h1>
                        <p className='c-body'>
                            {value.content}
                        </p>

                        <h5 className='footer-text'>
                            Click for more
                        </h5>
                    </div>
                </a>
            </div>
        </div>
    )
}   
