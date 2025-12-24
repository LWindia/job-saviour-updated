
"use client";
import Hero from "@/components/fullStackComponents/Hero";

import Navbar from "@/components/professoionalComponents/Navbar";

import {CareerTransformationFullStack} from "@/components/fullStackComponents/CareerTransformationFullStack";

import {RecentPlacedStudents} from "@/components/fullStackComponents/recent-placed-students"

import {LeftRightAlumniCarousel} from "@/components/fullStackComponents/LeftRightAlumniCarousel";

import RequiredSkills from "@/components/fullStackComponents/Requiredskills";

import ProgramCohorts from "@/components/fullStackComponents/ProgramDetails";

import ProgramHighlights from "@/components/fullStackComponents/ProgramHighlights";
import CourseCurriculumModule from "@/components/fullStackComponents/CourseModules/CourseModule";
import CourseCareerModule from "@/components/fullStackComponents/carrerSection/Carrer";

import CourseCarousel from "@/components/fullStackComponents/CourseCarousel";

import ISASigningProcess from "@/components/fullStackComponents/SignISAAgreement";

import Projects from "@/components/fullStackComponents/Projects";


import Analyst from "@/components/fullStackComponents/Analyst";

import TestimonialsSection from "@/components/customComponents/coursesComponents/courseDetails/Testimonials"
import CareerGuarantee from "@/components/customComponents/coursesComponents/CareerGuarantee";
import Faq from "@/components/fullStackComponents/Faq";

import SkillsAndTools from "@/components/fullStackComponents/skillsAndTools"

import Certification from "@/components/customComponents/Certification/Certification";

import Component from "@/components/customComponents/coursesComponents/courseDetails/CourseTestimonials";

import QueryForm from "@/components/customComponents/coursesComponents/courseDetails/ContactAndSupport";

import Footer from "@/components/customComponents/Footer";
import TopCareerOptions from "@/components/fullStackComponents/Topcareerotpions";
import LeadCapturePopup from "@/components/customComponents/LeadCapturePopup";
const CourseDetail = ()=>{

    return (
        <>
        <LeadCapturePopup />
        <Navbar />
        <Hero />
        {/* <CareerTransformationFullStack /> */}
        <RecentPlacedStudents></RecentPlacedStudents>
        <LeftRightAlumniCarousel/>
        <RequiredSkills/>

        <ProgramCohorts />

        <ProgramHighlights/>
        <CourseCurriculumModule/>
        <CourseCareerModule/>

        <CourseCarousel></CourseCarousel>

        <ISASigningProcess/>

        {/* <Projects/> */}

        <Analyst></Analyst>

        <TestimonialsSection/>
        <CareerGuarantee/>
        <SkillsAndTools/>
        <Certification/>
        <Component/>
        <Faq/>

        <QueryForm/>
        <TopCareerOptions></TopCareerOptions>

        <Footer/>

     </>
    )
}

export default CourseDetail;
