import style from './style.js'
import Data from '../../data/CarouselData'
import CarouItem from './carousel-item'
import { useState, useEffect } from 'react'



export default function Carousel() {
    var slideIndex = 1;

    // const [slideIndex, setSlideIndex] = useState(1)
    showSlides(slideIndex);

    function nextSlide(n) {
        // showSlides(setSlideIndex(slideIndex += n));
        showSlides(slideIndex += n);
    }

    function currentSlide(n) {
        // showSlides(setSlideIndex(n));
        showSlides(slideIndex = n);
    }

    function showSlides(n) {
        useEffect(() => {
            var i;
            var slides = document.getElementsByClassName("mySlides");
            var dots = document.getElementsByClassName("dot");
            if (n > slides.length) { slideIndex = 1 }
            if (n < 1) { slideIndex = slides.length }
            for (i = 0; i < slides.length; i++) {
                slides[i].style.display = "none";
            }
            for (i = 0; i < dots.length; i++) {
                dots[i].className = dots[i].className.replace(" active", "");
            }
            slides[slideIndex - 1].style.display = "flex";
            dots[slideIndex - 1].className += " active";
        }, [])
    }

    return (
        <div>
            <div className="slideshow-container">

                <style jsx global>
                    {style}
                </style>

                {Data.map((value, index) => (
                    <CarouItem value={value} key={index} />
                ))}

                <a onClick={() => previousSlide(-1)} className="prev" >&#10094;</a>
                <a onClick={() => nextSlide(1)} className="next" >&#10095;</a>
            </div>
            <br />

            <div style={{
                display: 'flex',
                justifyContent: 'center'
            }}>
                <span className="dot" onClick={currentSlide(1)} ></span>
                <span className="dot" onClick={currentSlide(2)} ></span>
                <span className="dot" onClick={currentSlide(3)} ></span>
            </div>
        </div>
    )
}