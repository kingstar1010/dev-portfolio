import css from 'styled-jsx/css'

export default css.global`

@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,500;1,100;1,200&display=swap');

.sk-container {
    width: 100%;
    /* height: 100vh; */
    padding: 60px 0px;
    background: white;
    color: #000;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    margin-bottom: 60px;
}

.sk-container h1 {
    margin: 0;
    margin-bottom: 100px;
    font-size: 60px;
    text-align: center;
    font-weight: 700;
    letter-spacing: 2px;
}

.sk-content {
    display: grid;
    grid-template-columns: 25% 25% 25%;
    grid-template-rows: auto;
    grid-gap: 90px;
    justify-content: center;
}

.p-lang {
    display: flex;
    align-items: center;
    padding: 15px 15px 0px 15px;
}

.p-lang img {
    height: 40px;
    width: 40px;
    margin-right: 10px;
}

.p-lang p {
    display: flex;
    align-items: center;
    margin: 0;
    margin-right: 10px;
    height: 40px;
    width: 200px;
    font-family: 'Poppins', sans-serif;
    font-weight: 600;
    font-size: 1.4em;
    color: gray; 
}


@media only screen and (min-width: 1300px) {
    .sk-container h1 {
        position: sticky;
         top: 150px;
    }    
}

@media only screen and (max-width: 600px) {
    .sk-container h1 {
        display: flex;
        align-items: center;
        font-size: 40px;
    }    
    
    .sk-content {
        grid-template-columns: 90%;   
    }
}
`