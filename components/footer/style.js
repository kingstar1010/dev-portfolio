import css from 'styled-jsx/css'

export default css.global`
@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,500;1,100;1,200&display=swap');

.footer {
    width: 100%;
    padding: 20px 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
}

.footer hr {
    margin-bottom: 20px;
    height: 1px;
    width: 100%;
    background: #e3e3e3;
    border: 0px;
    border-radius: 50%;
}

.footer-content {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: space-aroud;
    justify-content: flex-start;
}

.footer-cme {
    width: 100%;
    height: 100%;
}

.footer-av {
    width: 100%;
    height: 100%;
}

.footer-content h1 {
    margin: 0;
    margin-bottom: 15px;
    margin-top: 10px;
    font-size: 20px;
    font-family: 'Poppins', sans-serif;
    font-weight: 800;
    color: #000;
    letter-spacing: 0px;
}

.footer-content p {
    margin: 0;
    font-family: 'Poppins', sans-serif;
    font-size: 15px;
    color: #878a8f;
    letter-spacing: 0px;
}

.footer-content span {
    margin: 0;
    margin-left: 5px;
    font-family: 'Poppins', sans-serif;
    font-size: 15px;
    color: #000;
    letter-spacing: 0px;
}

.footer-fm {
    width: 80%;
    height: 80%;
    margin-left: 60px 
}

.footer-fm .mail{
    display: none;
}

.footer-fm .whatsapp{
    display: none;
}

@media only screen and (min-width: 1120px) {
   .footer {
       height: 40vh;
   }
}

@media only screen and (max-width: 1220px) {
    .footer {
        height: 40vh;
    }
}

@media only screen and (max-width: 600px) {
    .footer {
        width: 100%;
    }

    .footer-content {
        flex-direction: column;
    }
}
`