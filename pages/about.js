import NavBar from "../components/navbar/Navbar";
import Footer from "../components/footer/footer";
import ContactMe from "../components/contact-me/contact-me";
import WTText from "../components/lets-work-together-text/WTText";
import Tabout from "../components/about-text/Tabout";
import Carousel from "../components/carousel/carousel";
import Hobbies from "../components/hobbies/hobbies";

export default function About() {
    return (
        <div id='about'>
            <NavBar />
            <ContactMe />
            <Tabout />
            <Carousel />
            <Hobbies />
            <WTText />
            <Footer />
        </div>
    );
}
