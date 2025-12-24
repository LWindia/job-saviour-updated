import LinkdingTestimonial2 from "@/components/customComponents/coursesComponents/courseDetails/LinkedinTestimonial2";
import Analyst from "@/components/sdeComponents/Analyst";
import { CareerTransformationProfessional} from "@/components/sdeComponents/CareerTransformationProfessional";
import CourseCareerModule from "@/components/sdeComponents/carrerSection/Carrer";
import CourseCarousel from "@/components/sdeComponents/CourseCarousel";
import CourseCurriculumModule from "@/components/sdeComponents/CourseModules/CourseModule";
import Hero from "@/components/sdeComponents/Hero";
import { LeftRightAlumniCarousel } from "@/components/sdeComponents/LeftRightAlumniCarousel";
import Navbar from "@/components/sdeComponents/Navbar";
import ProgramCohorts from "@/components/sdeComponents/ProgramDetails";
import ProgramHighlights from "@/components/sdeComponents/ProgramHighlights";
import Projects from "@/components/sdeComponents/Projects";
import { RecentPlacedStudents } from "@/components/recent-placed-students";
import RequiredSkills from "@/components/sdeComponents/Requiredskills";
import ISASigningProcess from "@/components/sdeComponents/SignISAAgreement";
import TestimonialsSection from "@/components/customComponents/coursesComponents/courseDetails/Testimonials";
import CareerGuarantee from "@/components/customComponents/coursesComponents/CareerGuarantee";
import SkillsAndTools from "@/components/sdeComponents/skillsAndTools";
import CertificateDisplay from "@/components/customComponents/coursesComponents/courseDetails/CertificateDetails";
import Certification from "@/components/customComponents/Certification/Certification";
import Component from "@/components/customComponents/coursesComponents/courseDetails/CourseTestimonials";
import Faq from "@/components/sdeComponents/Faq";
import QueryForm from "@/components/customComponents/coursesComponents/courseDetails/ContactAndSupport";
import Footer from "@/components/customComponents/Footer";
import LeadCapturePopup from "@/components/customComponents/LeadCapturePopup";




const CourseDetail = ()=>{
    

    return (
        <>
        <LeadCapturePopup />
        <Navbar />
        <Hero />
        <CareerTransformationProfessional/>
        <RecentPlacedStudents />
        <LeftRightAlumniCarousel />
        <RequiredSkills />
        <ProgramCohorts />
        <ProgramHighlights />
        <CourseCurriculumModule />
        <CourseCareerModule />
        <CourseCarousel />
        <ISASigningProcess />
        <Projects />
        <Analyst />
        <TestimonialsSection />
        <CareerGuarantee />
        <SkillsAndTools  />
        <Certification />
        <Component />
        <Faq />
        <QueryForm />
        <Footer />
        
     </>
    )
}

export default CourseDetail;
