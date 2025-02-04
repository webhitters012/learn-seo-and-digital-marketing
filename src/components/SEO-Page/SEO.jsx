import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./header";
import Footer from "./Footer";
import Banner from "./Banner"
import MyComponent from "./Training";
import OurAdvancedSEOCourses from "./who" 
import WhyChooseUs from "./USP"
import SEOCourseOverview from "./Video"
import SEOBenefits from "./Benefits"
import CareerAfterSEO from "./Careers"
import Tools from "./tools";
import JobAfterSEOTraining from "./jobs"

function SEO(){
    return(
    <div>
        {/*Header*/}
        <Header/>
        {/*Banner*/}
        <Banner/>;
        {/*Training*/}
        <MyComponent/>
        {/*Who*/}
        <OurAdvancedSEOCourses/>
        {/*USP*/}
        <WhyChooseUs/>
        {/*Video*/}
        <SEOCourseOverview/>
        {/*Benefits*/}
        <SEOBenefits/>
        {/*Carrers*/}
        <CareerAfterSEO/>
        {/*Tools*/}
        <Tools/>

        <JobAfterSEOTraining/>
        {/*Footer*/}
        <Footer/>
    </div>
    )
}
export default SEO;