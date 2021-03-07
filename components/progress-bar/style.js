import css from 'styled-jsx/css'

export default css.global`

.pb-container {
    width: 100%;
    height: 500px;
    position: relative;
}

.pbar-card {
    position: absolute;
    z-index: 10;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.03);
    backdrop-filter: blur(15px);
    border: 1px solid rgba(0, 0, 0, 0.03);
    border-radius: 5px;
    overflow: hidden;
    transition: 0.5s;
    box-shadow: 0px 15px 30px rgba(0, 0, 0, 0.2);
    text-align: center;
}


/* .backgroung-line {
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 200px;
    height: 40px;
    padding: 20px 20px 40px;
    border-radius: 5px;
    top: -10px;
    left: 50%;
    transform: translateX(-50%);
    z-index: 1;
} */

.precent {
    position: relative;
    width: 200px;
    height: 200px;
    border-radius: 50%;
    box-shadow: inset 0 0 40px #555555;
    z-index: 10;
}

.precent .number {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
}

.precent .number h2 {
    color: #191919;
    font-size: 55px;
    font-weight: 700;
    transition: 0.25s;
}

.precent .number h2 .h2-s{
    font-size: 24px;
}

.precent svg {
    position: relative;
    width: 200px;
    height: 200px;
    z-index: 1000;
}

.precent svg circle {
    width: 100%;
    height: 100%;
    fill: none;
    stroke: #191919;
    stroke-width: 15;
    stroke-linecap: round;
    transform: translate(10px, 10px);
}

.precent svg circle:nth-child(2) {
    stroke-dasharray: 565;
    stroke-dashoffset: 565;
    transition: 0.5s;
}


.pb-title {
    margin-top: 20px;
    display: flex;
    align-items: center;
    padding: 15px 15px 0px 15px;
}


.pb-title img {
    height: 40px;
    width: 40px;
    margin-right: 10px;
}

.pb-title p {
    display: flex;
    align-items: center;
    margin: 0;
    margin-right: 10px;
    height: 40px;
    font-family: 'Poppins', sans-serif;
    font-weight: 600;
    font-size: 1.4em;
    color: #191919; 
    transition: 0.5s;
}

`