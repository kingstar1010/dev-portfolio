import style from "./style.js";
import Data from "../../data/CarouselData";
import CarouItem from "./carousel-item";
import { useState, useEffect, useRef } from "react";

export default function Carousel() {
  var slideIndex = 1;

  // const [slideIndex, setSlideIndex] = useState(1)
  const showSlides_ref = useRef(null);
  const nextSlide_ref = useRef(null);
  const currentSlide_ref = useRef(null);

  useEffect(() => {
    showSlides(slideIndex);

    function nextSlide(n) {
      // showSlides(setSlideIndex(slideIndex += n));
      showSlides((slideIndex += n));
    }

    nextSlide_ref.current = nextSlide;

    function currentSlide(n) {
      // showSlides(setSlideIndex(n));
      showSlides((slideIndex = n));
    }

    currentSlide_ref.current = currentSlide;

    function showSlides(n) {
      console.log("aa");
      var i;
      var slides = document.getElementsByClassName("mySlides");
      var dots = document.getElementsByClassName("dot");
      if (n > slides.length) {
        slideIndex = 1;
      }
      if (n < 1) {
        slideIndex = slides.length;
      }
      for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
      }
      for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
      }
      slides[slideIndex - 1].style.display = "flex";
      dots[slideIndex - 1].className += " active";
    }
    showSlides_ref.current = showSlides;
  }, []);

  return (
    <div>
      <div className="slideshow-container">
        <style jsx global>
          {style}
        </style>

        {Data.map((value, index) => (
          <CarouItem value={value} key={index} />
        ))}

        <a onClick={() => previousSlide_ref.current(-1)} className="prev">
          &#10094;
        </a>
        <a onClick={() => nextSlide_ref.current(1)} className="next">
          &#10095;
        </a>
      </div>
      <br />

      <div
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <span
          className="dot"
          onClick={() => currentSlide_ref.current(1)}
        ></span>
        <span
          className="dot"
          onClick={() => currentSlide_ref.current(2)}
        ></span>
        <span
          className="dot"
          onClick={() => currentSlide_ref.current(3)}
        ></span>
      </div>
    </div>
  );
}
