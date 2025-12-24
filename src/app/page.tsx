"use client"

import Analyst from "@/components/customComponents/coursesComponents/courseDetails/Analyst";
import Faq from "@/components/customComponents/coursesComponents/Faq";
import Projects from "@/components/customComponents/coursesComponents/courseDetails/Projects";
import ProgramHighlights from "@/components/customComponents/coursesComponents/courseDetails/ProgramHighlights";
import CourseTestimonials from "@/components/customComponents/coursesComponents/courseDetails/CourseTestimonials";
import Navbar from "@/components/customComponents/Navbar";
import Footer from "@/components/customComponents/Footer";
import CareerTransformation from "@/components/customComponents/coursesComponents/courseDetails/CareerTransformation";
import CourseCurriculumModule from "@/components/customComponents/coursesComponents/CourseModules/CourseModule";
import CompaniesCarousel from "@/components/customComponents/coursesComponents/courseDetails/CompaniesCarousel";
import CourseCarrrerModule from "@/components/customComponents/coursesComponents/courseDetails/carrerSection/Carrer";
import TestimonialsSection from "@/components/customComponents/coursesComponents/courseDetails/Testimonials";
import ProgramCohorts from "@/components/customComponents/coursesComponents/ProgramDetails";
import CourseCarousel from "@/components/customComponents/coursesComponents/courseDetails/CourseCarousel";
import QueryForm from "@/components/customComponents/coursesComponents/courseDetails/ContactAndSupport";
import PlacedStudents from "@/components/customComponents/coursesComponents/courseDetails/PlacedStudents";
import BeginnerToPro from "@/components/customComponents/guaranteedPlacement/BeginnerToPro";
import BecomePlacement from "@/components/customComponents/guaranteedPlacement/BecomePlacement";
import SkillsAndTools from "@/components/customComponents/coursesComponents/skillsAndTools/skillsAndTools";
import Certificates from "@/components/customComponents/Certification/Certification";
import Hero from "@/components/customComponents/coursesComponents/courseDetails/Hero";
import TopCareerOptions from "@/components/TopCareerOptions/TopCareerOptions";
import CareerGuarantee from "@/components/customComponents/coursesComponents/CareerGuarantee";
import SignISAAgreement from "@/components/customComponents/coursesComponents/courseDetails/SignISAAgreement";
import { RecentPlacedStudents } from "@/components/recent-placed-students";
import { RegisteredStudentCarousel } from "@/components/customComponents/coursesComponents/RegisteredStudentCarousel";
import LeadCapturePopup from "@/components/customComponents/LeadCapturePopup";





const CourseDetail = ()=>{
    

    return (
        <>
        <LeadCapturePopup />
        <Navbar />
        <Hero />
        <RecentPlacedStudents />
        <RegisteredStudentCarousel />
        <CompaniesCarousel />
        <CareerTransformation />
        <ProgramCohorts />
        <ProgramHighlights />
        <CourseCurriculumModule />
        <CourseCarrrerModule />
        <CourseCarousel />
        <SignISAAgreement />
        <Projects />
        <Analyst />
        <TestimonialsSection />
        <CareerGuarantee />
        <PlacedStudents />
        <BeginnerToPro />
        <BecomePlacement />
        <SkillsAndTools />
        <Certificates />
        <CourseTestimonials />
        <Faq />
        <QueryForm />
        <TopCareerOptions />
        <Footer />
     </>
    )
}

export default CourseDetail;