import css from 'styled-jsx/css'

export default css.global`

@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,500;1,100;1,200&display=swap');

    .st-container {
        height: 70vh;
        width: 100%;
        padding: 0px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        overflow: hidden;
    }

    .st-container span {
        font-family: 'Poppins', sans-serif;
        font-weight: 800;
        text-transform: uppercase;
    }

    .st-text {
        color: #000;
        font-size: 7em;
        letter-spacing: 8px;
        color: black;
        margin-bottom: -80px; 
        background: white;
        position: relative;
    }

    .st-text-2 {
        transition: 0.5s;
        font-size: 2.5em;
        color: #26c2ff;
    }

    .st-text.appear {
        color: #000
        display: flex;
        margin-bottom: 0px; 
        animation: text 3s 1
    }

    @keyframes text {
        0% {
            color: white;
            margin-bottom: -80px; 
        }
        30% {
            display: flex;
            letter-spacing: 25px;
            margin-bottom: -80px; 
        }
        100%
        {
            display: flex;
            letter-spacing: 8px;
            margin-bottom: 0px;
        }
    }

    @media only screen and (min-width: 1120px) {
    }

    @media only screen and (max-width: 1220px) {}

    @media only screen and (max-width: 600px) {
        .st-container {
            display: none;
        }
    }
`