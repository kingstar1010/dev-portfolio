import css from 'styled-jsx/css'

export default css.global`

.contact-me {
    position: fixed;
    backdrop-filter: blur(15px);
    z-index: 15;
    bottom: 20px;
    left: 30px;
    height: 50px;
    width: 50px;
    background: black;
    border-radius: 50px;
    opacity: 0.2;
    transition: 0.3s;
    animation: In 2s;
}

@keyframes In {
    0%{
        opacity: 0;
        /* transform: translateY(20px); */
    }
    100% {
        opacity: 0.2;
        /* transform: translateY(0px); */
    }
}
.contact-me a {
    width: 100%;
    height: 100%;
    position: absolute;
    display: flex;
    align-items: center;
}

.cm-icon {
    position: absolute;
    top:0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: flex-satrt;
    align-items: center;
    border-radius: 50px;
    /* transition: 1s; */
}

.cm-icon svg {
    margin-left: 10px;
    fill: white;
    height: 25px;
    width: 30px;
}

.cm-text {
    display: none;
    color: white;
    margin-left: 50px;  
    font-size: 20px;
    background: transparent;
    /* transition: display 1s ease-out;
    transition-delay: 1s; */
}

.contact-me:hover {
   width: 180px;
   background: rgb(15, 15, 15);
   opacity: 1;
   /* transition: 0.5s; */
   white-space: nowrap;
}

.contact-me:hover .cm-text{
    display: flex;
}

`