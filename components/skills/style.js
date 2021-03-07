import css from 'styled-jsx/css'

export default css.global`

@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,500;1,100;1,200&display=swap');

.s-container {
    /* width: 100%;
    height: 100vh;
    padding: 80px;
    background: white;
    color: black;
    display: flex;
    flex-direction: column;
    justify-content: space-around; */
    padding: 80px 30px 0px 30px;
}

.s-container > h1{
    position: sticky;
    top: 70px;
    z-index: 12;
    font-family: 'Poppins', sans-serif;
    font-weight: 600;
    font-size: 1.5em;
    margin-bottom: 30px;
    margin-top: 0px;
}

@media only screen and (max-width: 600px) {
    
}
@media only screen and (max-width: 600px) {
    .s-container > h1::before {
        content: '';
        position: absolute;
        left: -30px;
        top: 0;
        height: 100%;
        width: calc(100% + 60px);
        background-color: #fff;
        z-index: -1;
    }

    .s-container h1 {
        font-size: 35px;
    }
}

`