import LinkdingTestimonial2 from "@/components/customComponents/coursesComponents/courseDetails/LinkedinTestimonial2";
import Analyst from "@/components/professoionalComponents/Analyst";
import { CareerTransformationProfessional} from "@/components/professoionalComponents/CareerTransformationProfessional";
import CourseCareerModule from "@/components/professoionalComponents/carrerSection/Carrer";
import CourseCarousel from "@/components/professoionalComponents/CourseCarousel";
import CourseCurriculumModule from "@/components/professoionalComponents/CourseModules/CourseModule";
import Hero from "@/components/professoionalComponents/Hero";
import { LeftRightAlumniCarousel } from "@/components/professoionalComponents/LeftRightAlumniCarousel";
import Navbar from "@/components/professoionalComponents/Navbar";
import ProgramCohorts from "@/components/professoionalComponents/ProgramDetails";
import ProgramHighlights from "@/components/professoionalComponents/ProgramHighlights";
import Projects from "@/components/professoionalComponents/Projects";
import { RecentPlacedStudents } from "@/components/recent-placed-students";
import RequiredSkills from "@/components/professoionalComponents/Requiredskills";
import ISASigningProcess from "@/components/professoionalComponents/SignISAAgreement";
import TestimonialsSection from "@/components/customComponents/coursesComponents/courseDetails/Testimonials"
import CareerGuarantee from "@/components/customComponents/coursesComponents/CareerGuarantee";
import SkillsAndTools from "@/components/professoionalComponents/skillsAndTools";
import CertificateDisplay from "@/components/customComponents/coursesComponents/courseDetails/CertificateDetails";
import Certification from "@/components/customComponents/Certification/Certification";
import Component from "@/components/customComponents/coursesComponents/courseDetails/CourseTestimonials";
import Faq from "@/components/professoionalComponents/Faq";
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
