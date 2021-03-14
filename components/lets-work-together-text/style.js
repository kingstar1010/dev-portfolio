import css from 'styled-jsx/css'

export default css.global`
@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,500;1,100;1,200&display=swap');

.lwt-text {
    width: 100%;
    height: 70vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;
}

.lwt-text h4 {
    font-weight: 300;
    font-family: 'Poppins', sans-serif;
    margin: 0;
    color: #878a8f;
    letter-spacing: 3px;
    text-transform: uppercase;
}

.lwt-text a {
    position: relative;
    margin: 0;
    font-size: 75px;
    font-weight: 900;
    font-family: 'Poppins', sans-serif;
    color: #000;
    letter-spacing: 1px;
    display: flex;
    align-items: center;
}

.lwt-text a svg {
    margin-left: 20px;
    width: 65px;
    height: 65px;
}

.lwt-text a::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 5px;
    background: #010101; 

    transform: scaleX(0);
    transform-origin: right;
    transition: transform 0.25s ease-in;
}

.lwt-link:hover {
    cursor: pointer;
}

.lwt-link:hover::after{
   transform: scaleX(1);
   transform-origin: left;
}

@media only screen and (min-width: 1120px) {
    .lwt-text {
        width: 100%;
        height: calc(100vh - 260px);
    }
}

@media only screen and (max-width: 1220px) {}

    @media only screen and (max-width: 600px) {

        .lwt-text {
            height: 40vh;
            justify-content: center;
        }

        .lwt-text a {
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 25px;
        }

        .lwt-text a svg {
            margin-left: 10px;
            width: 25px;
            height: 25px;
        }
    }
`