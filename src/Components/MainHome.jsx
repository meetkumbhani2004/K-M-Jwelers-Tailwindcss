import MainHeader from "./Main-Header";
import Demos from "./Demos";
import Navbar from "./Navbar";
import Heding from "./Heding";
import Features from "./Feauture";
import Testimonials from "./Testimotionial";
import FaqSection from "./FAQs"
import FAQsAccordion from "./FAQsAccording";
import Footer from "./Footer";

function MainHome(){

    return(
        <div>
            < Navbar />
            < Heding />
            < MainHeader />
            < Demos />
            <Features />
            < Testimonials />
            < FaqSection />
            < FAQsAccordion />
           < Footer />
        


        </div>
    )
}

export default MainHome;