import React from "react";
import { ServiceSection, HeroSection, EventsSection, AboutUsSection, GallerySection, TestimonialSection, VisitSection} from "./sections";

const MainPage: React.FC = () => {

    return (
        <>
            <HeroSection />
            <EventsSection />
            <ServiceSection />
            <AboutUsSection />
            <GallerySection />
            <TestimonialSection />
            <VisitSection />
        </>
    )
}

export default MainPage