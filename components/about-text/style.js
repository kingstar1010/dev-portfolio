import css from 'styled-jsx/css'

export default css.global`
@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,500;1,100;1,200&display=swap');

.about-text {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;
    height: 100vh;
    width: 100%;
    padding: 0px 80px;
}

.about-text h4{
    font-weight: 300;
    font-family: 'Poppins',sans-serif;
    margin: 0;
    margin-bottom: 10px;
    color: #878a8f;
    letter-spacing: 3px;
    text-transform: uppercase;
}

.about-text p{
    width: 1100px;
    font-weight: 800;
    font-family: 'Poppins',sans-serif;
    margin: 0;
    margin-bottom: 20px;
    color: #000;
    font-size: 40px;
    text-align: center;
    line-height: 120%;
}

.about-text h5{
    font-weight: 500;
    font-family: 'Poppins',sans-serif;
    margin: 0;
    margin-bottom: 70px;
    color: #878a8f;
    font-size: 20px;
    text-align: center;
    width: 850px;
}

@media only screen and (min-width: 1200px) {
    
}

@media only screen and (max-width: 1200px) { 
    .about-text p {
        width: 100%;
        font-size: 30px;
   }
   
   .about-text h5 {
       width: 100%;
       font-size: 15px;
       margin-bottom: 120px;
    }
}

@media only screen and (max-width: 600px) {
    .about-text {
        padding: 10px;
    }
    
    .about-text p {
        width: 100%;
        font-size: 25px;
        padding: 0px 10px;
    }
    .about-text h5 {
        margin-bottom: 90px;
    }
}

`