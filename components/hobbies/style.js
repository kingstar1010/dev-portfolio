import css from 'styled-jsx/css'

export default css.global`

@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,500;1,100;1,200&display=swap');

.hobies {
    width: 100%;
    padding: 20px 30px;
}

.h-title {
    margin-bottom: 30px;
    position: sticky;
    top: 80px;
}

.h-content {
    display: grid;
    grid-template-columns: 25% 25% 25%;
    grid-template-rows: auto;
    grid-gap: 90px;
    row-gap: 120px;
    justify-content: center;
}

.hobie {
    height: 300px;
    width: 300px;
    background: rgba(0, 0, 0, 0.03);
    backdrop-filter: blur(15px);
    border: 1px solid rgba(0, 0, 0, 0.03);
    border-radius: 5px;
    overflow: hidden;
    transition: 0.5s;
    box-shadow: 0px 15px 30px rgba(0, 0, 0, 0.2);
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.hobie svg {
    width: 150px;
    height: 150px;
}

@media only screen and (min-width: 1300px) {
     
}

@media only screen and (max-width: 600px) {
    .h-content {
        grid-template-columns: 45% 45%;
        grid-gap: 25px;
        row-gap: 50px;
    }

    .hobie {
        height: 130px;
        width: 130px;
    }
}

`