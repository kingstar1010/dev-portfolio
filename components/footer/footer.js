import style from './style.js'
import Contact from '../contact/contact'

export default function Footer() {
    return (
        <footer className='footer'>
            <style jsx global>
                {style}
            </style>
            <hr />
            <div className='footer-content'>
                <div className='footer-cme'>
                    <h1>Contact information</h1>
                    <p style={{ marginBottom: '10px' }}>Feel free to reach out to me any time.</p>
                    <p>E:<span>moldovanualiberta@gmail.com</span></p>
                    <p>P:<span>+45-7152-6218</span></p>
                </div>
                <div className='footer-av'>
                    <h1>Curent availability</h1>
                    <p>I am a student and currently, I{'\&#39'}m looking for an internship but I’ll be happy to discuss new opportunities. Let’s get in touch!</p>
                </div>
                <div className='footer-fm'>
                    <h1 style={{ marginBottom: '5px', marginLeft: '15px' }}>Follow me on</h1>
                    <Contact />
                </div>
            </div>
        </footer>
    )
}