import style from './style.js'

export default function Tabout() {
    return (
        <div className='about-text'>
            <style jsx global>
                {style}
            </style>

            <h4>A FEW WORDS ABOUT ME</h4>
            <p>
                My name is Albert-Andrei Moldovanu, I was born and raised in a small,
                but very beautiful Eastern European country, Moldova. Currently,
                I{'\&#39'}m studying Software Engineering at VIA University College in Denmark.
                I specialize in responsive websites, web applications, and back-end.
            </p>
            <h5>
                Besides programming that I like, there are a variety of different hobbies I practice.
                Below, you will know more about all mentioned above.
            </h5>
        </div>
    )
}