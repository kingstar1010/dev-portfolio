import css from 'styled-jsx/css'

export default css.global`

@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,500;1,100;1,200&display=swap');

.k-container {
    width: 100%;
    /* height: 100vh; */
    padding: 40px 0px;
    background: white;
    color: black;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    margin-top: 40px;
}

.k-content {
    display: grid;
    grid-template-columns: 25% 25% 25%;
    grid-template-rows: auto;
    grid-gap: 90px;
    row-gap: 120px;
    justify-content: center;
}

.k-item {
    display: flex;
    justify-content: space-around;
}

.k-item .card {
    position: relative;
    height: 500px;
    width: 100%;
    text-align: center;
    z-idex: 10;
    border-radius: 5px;
}

.k-item .card .box {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    background: rgba(0, 0, 0, 0.03);
    box-shadow: 0px 15px 30px rgba(0, 0, 0, 0.2);
    backdrop-filter: blur(15px);
    border: 1px solid rgba(0, 0, 0, 0.03);
    z-index: 10;
    border-radius: 5px;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    padding: 35% 20px 20px; 
}

.text {
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 180px;
    height: 50px;
    padding: 20px 20px 40px;
    border-radius: 5px;
    top: -40px;
    left: 50%;
    transform: translateX(-50%);
    z-index: 1;
    color: #fff;
    font-weight: 700;
    font-size: 15px;
    letter-spacing: 2px;
    text-transform: uppercase;
    box-shadow: 0px 10px 30px rgba(0, 0, 0, 0.2);
    cursor: pointer;
    pointer-events: none;
    transition: top 0.5s, z-index 0s, transform 0.5s, padding 0.5s;
    transition-delay: 0.5s, 0.5s, 0s, 0.5s;
}

.card:hover .text {
    transition-delay: 0s, 0.5s, 0.5s, 0s;
    top: -60px;
    z-index: 11;
    transform: translateX(-50%) translateY(60%);
    padding: 10px 20px 10px;
}

.k-container h1 {
    color: #000;
    margin: 0;
    margin-top: 50px;
    margin-bottom: 150px;
    font-size: 60px;
    text-align: center;
    font-weight: 700;
    letter-spacing: 2px;
}

.k-item-content {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
}

.k-item-content svg {
    margin-left: 30px;
    width: 25px;
    height: 25px;
}

.k-item-content img {
    margin-left: 30px;
    width: 25px;
    height: 25px;
}

.k-item-content h2 {
    /* margin: 0;
    margin-top: 10px; */
    margin-top: 17px;
    margin-left: 10px;
}

@media only screen and (min-width: 1300px) {
    .k-container h1 {
        position: sticky;
         top: 150px;
    }    
}

@media only screen and (max-width: 600px) {
    .k-container h1 {
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 40px;
    }    
    
    .k-content {
        grid-template-columns: 90%;   
    }
}

`