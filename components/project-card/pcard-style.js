import css from 'styled-jsx/css'

export default css.global`

`

// @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,500;1,100;1,200&display=swap');

// .main-container {
//   height: 620px;
//   width: 100%;
// }

// .card {
//   height: 100%;
//   width: 100%;
// }

// .card> .front {
//   position: absolute;
//   width: 100%;
//   height: 100%;
//   backface-visibility: hidden;
//   transform: perspective(600px) rotateY(0deg);
//   transition: transform .5s linear 0s;

//   /* background: #090b11; */
//   background: linear-gradient(180deg, rgba(36,182,240,1) 0%, rgba(255,255,255,1) 80%, rgba(255,255,255,1) 100%);;
//   /* border-radius: 10px; */
//   display: flex;
//   flex-direction: column;
//   justify-content: flex-start;
//   align-items: center;
//   box-shadow: 6px 6px 10px -1px rgba(0,0,0,0.15), -1px -1px 20px 0px rgba(238, 238, 238, 0.9);
// }

// .card> .back {
//   position: absolute;
//   border-radius: 10px;
//   width: 100%;
//   height: 100%;
//   backface-visibility: hidden;
//   transform: perspective(600px) rotateY(180deg);
//   transition: transform .5s linear 0s;
  
//   background: rgba(0,0,0,0.85);;
//   /* border-radius: 10px; */
//   display: flex;
//   flex-direction: column;
//   justify-content: flex-start;
//   box-shadow: 6px 6px 10px -1px rgba(0,0,0,0.15), -1px -1px 20px 0px rgba(238, 238, 238, 0.9);
// }

// .c-img {
//   /* margin-top: 30px; */
//   width: 100%;
//   height: 210px;
//   margin-top: 15px;
// }

// .card-content {
//   display: flex;
//   flex-direction: column;
//   justify-content: flex-start;
//   align-items: flex-start;
//   height: 100%;
//   width: 100%;
//   padding: 40px;
//   color: white;
// }

// .card-content-w {
//   display: flex;
//   flex-direction: column;
//   justify-content: flex-start;
//   align-items: flex-start;
//   height: 100%;
//   width: 100%;
//   padding: 40px;
//   color: #0f0f0f;
// }

// .c-title {
//   font-family: 'Poppins', sans-serif;
//   font-weight: 700;
//   color: #fff;
//   font-size: 2.2em;
//   margin-top: 30px;
//   margin-bottom: 30px;
//   display: inline-block;

//   position: relative;
//   z-index: 1;
// }

// .c-title::after {
//   content: '';
//   position: absolute;
//   top: 0px;
//   left: -40px;
//   bottom: -10px;
//   right: -20px;
//   width: calc(100% + 55px);
//   background: #26c2ff;
//   z-index: -1;
  
//   transform: scaleX(0.02);
//   transform-origin: left;
//   transition: transform 0.25s ease-in;
// }

// .card-content:hover .c-title::after {
//   transform: scaleX(1);
// }

// .card-content-w:hover .c-title::after {
//   transform: scaleX(1);
// }

// .card-content-w:hover .c-title {
//   color: white;
//   transition: color 0.25s ease-in;
// }

// .c-body {
//   font-family: 'Poppins', sans-serif;
//   font-weight: 500;
//   font-size: 1.2em;
//   /* color: #090b11; */
//   color: rgba(255,255,255,0.75);
//   letter-spacing: normal;
//   margin: 0;


//   position: relative;
//   z-index: 1;

// }

// .c-body::after {
//   content: '';
//   position: absolute;
//   top: -20px;
//   bottom: -40px;
//   left: -15px;
//   right: -15px;
//   background: white;
//   opacity: 1;
  
//   z-index: -1;
//   transform: scaleY(0);
//   transform-origin: top;
//   transition: transform 0.25s ease-in 0.25s;
// } 

// .card-content:hover .c-body::after {
//   transform: scaleY(1);
// }

// .card-content:hover .c-body {
//   transition: 0.25s ease-in 0.25s;
//   color: black;
// }

// .card-content-w:hover .c-body::after {
//   transform: scaleY(1);
// }

// .card-content-w:hover .c-body {
//   transition: 0.25s ease-in 0.25s;
//   color: black;
// }

// .card-content-w h1{
//   font-family: 'Poppins', sans-serif;
//   font-weight: 700;
//   color: #0f0f0f;
//   font-size: 2.2em;
//   margin-top: 30px;
// }


// .card-content-w p {
//   font-family: 'Poppins', sans-serif;
//   font-weight: 500;
//   font-size: 1.2em;
//   /* color: #090b11; */
//   color: rgba(15,15,15,0.7);
//   /* opacity: 0.7; */
//   letter-spacing: normal;
// }

// .footer-text {
// color: transparent;

// width: 100%;
// margin-top: 30%;
// text-align: center;
// font-family: 'Poppins', sans-serif;
// font-weight: 600;
// text-transform: uppercase;
// font-size: 20px;
// letter-spacing: 4px;
// overflow:hidden;

// transition: color 1s ease-out;
// }

// .card-content:hover .footer-text {
// transition-delay: color 5s;
// width: 100%;
// margin-top: 30%;
// margin-bottom: 5px; 
// text-align: center;
// font-family: 'Poppins', sans-serif;
// font-weight: 600;
// /* color: #fff; */
// text-transform: uppercase;
// font-size: 20px;
// letter-spacing: 4px;
// overflow:hidden;
// background: linear-gradient(90deg,#090b11,#fff,#090b11);
// background-repeat: no-repeat;
// background-size: 80%;
// animation: animate 3s linear infinite;
// -webkit-background-clip:text;
// -webkit-text-fill-color: rgba(255,255,255,0);
// }

// .card-content-w :hover .footer-text {
// transition-delay: color 5s;
// width: 100%;
// margin-top: 30%;
// margin-bottom: 5px; 
// text-align: center;
// font-family: 'Poppins', sans-serif;
// font-weight: 600;
// /* color: #fff; */
// text-transform: uppercase;
// font-size: 20px;
// letter-spacing: 4px;
// overflow:hidden;
// background: linear-gradient(90deg,#e6e6e6,#fff,#e6e6e6);
// background-repeat: no-repeat;
// background-size: 80%;
// animation: animate 3s linear infinite;
// -webkit-background-clip:text;
// -webkit-text-fill-color: rgba(255,255,255,0); 
// }

// @keyframes animate
// {
// 0%
// {
//   background-position: -500%;
// }
// 100%
// {
//   background-position: 500%
// }
// }

// @media only screen and (min-width: 1020px) {
 
// }

// @media only screen and (max-width: 1020px) {

// }

// @media only screen and (max-width: 600px) {
// .main-container {
//   height: 500px;
//   width: 100%;
// }
// }