import css from 'styled-jsx/css'

export default css.global`

.contact-icons {
    display: flex;
    width: 100%
    height: 100%;
}
.c-icon {
    display: flex;
    justify-content: center;
    align-items: center;
    background: white;
    width: 40px;
    height: 40px;
    margin: 5px 5px;
    border-radius:  15px;
    /* box-shadow: 6px 6px 10px -1px rgba(0,0,0,0.15), -1px -1px 20px 0px rgba(238, 238, 238, 0.9) ; */
}

#info .c-icon {
    background: transparent;
}

.c-icon:hover {
    /* box-shadow: inset 4px 4px 6px -1px rgba(0, 0, 0, 0.2),
                inset -4px -4px 6px -1px rgba(255, 255, 255, 0.7),
                -0.5px -0.5px 0px rgba(255, 255, 255, 1),
                0.5px 0.5px 0px rgba(0, 0, 0, 0.15),
                0px 12px 10px -10px rgba(0, 0, 0, 0.05); */
                display: block;
}

.c-icon a {
    display: flex;
    justify-content: center;
    align-items: center;
    background: white;
    width: 40px;
    height: 40px;
    border-radius: 8px;
    transition: 0.5s;
}

#info .c-icon a{
    background: transparent;
}

.c-icon div {
    display: flex;
    align-items: center;
    justify-content: center;
}

.c-icon svg {
    width: 13px;
    height: 13px;
}

.c-icon a:hover .facebook {
    transition: 0.3s;
    color: #3b5998;
    transform: scale(2);
}

.c-icon a:hover .whatsapp {
    transition: 0.3s;
    color: #4fce5d;
    transform: scale(2);
}

.c-icon a:hover .instagram {
    transition: 0.3s;
    color: #f14843;
    transform: scale(2);
}

.c-icon a:hover .linked-in {
    transition: 0.3s;
    color: #0077b5;
    transform: scale(2);
}

.c-icon a:hover .mail {
    transition: 0.3s;
    color: #f00;
    transform: scale(2);
}

#info .c-icon a:hover .facebook {
    transition: 0.3s;
    color: #3b5998;
    transform: scale(2);
}

#info .c-icon a:hover .whatsapp {
    transition: 0.3s;
    color: #4fce5d;
    transform: scale(2);
}

#info .c-icon a:hover .instagram {
    transition: 0.3s;
    color: #f14843;
    transform: scale(2);
}

#info .c-icon a:hover .linked-in {
    transition: 0.3s;
    color: #0077b5;
    transform: scale(2);
}

#info .c-icon a:hover .mail {
    transition: 0.3s;
    color: #f00;
    transform: scale(2);
}

.c-icon a .facebook {
    transition: 0.3s;
    transform: scale(2);
}

.c-icon a .whatsapp {
    transition: 0.3s;
    transform: scale(2);
}

.c-icon a .instagram {
    transition: 0.3s;
    transform: scale(2);
}

.c-icon a .linked-in {
    transition: 0.3s;
    transform: scale(2);
}

.c-icon a .mail {
    transition: 0.3s;
    transform: scale(2);
}

#info .c-icon a .facebook {
    color: #fff;
}

#info .c-icon a .whatsapp {
    color: #fff;
}

#info .c-icon a .instagram {
    color: #fff;
}

#info .c-icon a .linked-in {
    color: #fff;
}

#info .c-icon a .mail {
    color: #fff;
}


@media only screen and (min-width: 1020px) {
   .contact-icons {
        display: flex;
    }
}

@media only screen and (max-width: 1020px) { 
   
}

@media only screen and (max-width: 600px) {
    
}

`