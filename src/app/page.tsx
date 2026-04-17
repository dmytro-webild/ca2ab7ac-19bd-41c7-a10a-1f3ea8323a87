"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactCTA from '@/components/sections/contact/ContactCTA';
import FeatureCardTen from '@/components/sections/feature/FeatureCardTen';
import FooterCard from '@/components/sections/footer/FooterCard';
import HeroBillboardRotatedCarousel from '@/components/sections/hero/HeroBillboardRotatedCarousel';
import MetricCardFourteen from '@/components/sections/metrics/MetricCardFourteen';
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import ProductCardOne from '@/components/sections/product/ProductCardOne';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
import TestimonialCardFifteen from '@/components/sections/testimonial/TestimonialCardFifteen';
import { Award, Briefcase, Clock, MonitorPlay } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="icon-arrow"
        defaultTextAnimation="entrance-slide"
        borderRadius="pill"
        contentWidth="mediumLarge"
        sizing="largeSmallSizeMediumTitles"
        background="grid"
        cardStyle="layered-gradient"
        primaryButtonStyle="gradient"
        secondaryButtonStyle="radial-glow"
        headingFontWeight="bold"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarLayoutFloatingInline
      navItems={[
        { name: "Home", id: "hero" },
        { name: "Courses", id: "courses" },
        { name: "Reviews", id: "testimonials" },
        { name: "Contact", id: "cta" },
      ]}
      brandName="Hitek Trainings"
      button={{ text: "Get Started", href: "#cta" }}
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroBillboardRotatedCarousel
      background={{
        variant: "rotated-rays-animated"}}
      title="Learn High Income Digital Skills"
      description="Start freelancing & earn online with expert training provided by industry professionals."
      buttons={[
        {
          text: "Enroll Now",          href: "#cta"},
        {
          text: "Free Demo",          href: "#"},
      ]}
      carouselItems={[
        { id: "1", imageSrc: "http://img.b2bpic.net/free-photo/office-workers-using-finance-graphs_23-2150408711.jpg", imageAlt: "diverse students laptop training" },
        { id: "2", imageSrc: "http://img.b2bpic.net/free-photo/focused-adult-male-student-doing-research-public-library_74855-1876.jpg", imageAlt: "diverse students laptop training" },
        { id: "3", imageSrc: "http://img.b2bpic.net/free-photo/colleagues-doing-team-work-project_23-2149361567.jpg", imageAlt: "diverse students laptop training" },
        { id: "4", imageSrc: "http://img.b2bpic.net/free-photo/manager-instructing-her-creative-team_74855-10255.jpg", imageAlt: "diverse students laptop training" },
        { id: "5", imageSrc: "http://img.b2bpic.net/free-photo/pupils-attend-video-conference-class-lesson-library-medical-science_482257-118236.jpg", imageAlt: "diverse students laptop training" },
        { id: "6", imageSrc: "http://img.b2bpic.net/free-photo/brainstorm-concept-multiethnic-group-working-cafeteria-developing-business-strategy-using-laptop-computer-looking-concentrated_273609-5526.jpg", imageAlt: "diverse students laptop training" },
      ]}
    />
  </div>

  <div id="metrics" data-section="metrics">
      <MetricCardFourteen
      useInvertedBackground={false}
      title="Our Impact"
      tag="Success Statistics"
      metrics={[
        { id: "m1", value: "10,000+", description: "Students Trained" },
        { id: "m2", value: "95%", description: "Success Rate" },
        { id: "m3", value: "20+", description: "Professional Courses" },
        { id: "m4", value: "24/7", description: "Dedicated Support" },
      ]}
      metricsAnimation="slide-up"
    />
  </div>

  <div id="why" data-section="why">
      <FeatureCardTen
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      features={[
        {
          title: "Live Classes",          description: "Interactive sessions with real-time feedback.",          items: [
            { icon: MonitorPlay, text: "Live interactive training" },
          ],
          reverse: false,
          media: {
            imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3CUkbBnkHT6U2KL4QCcEonRlsIQ/uploaded-1776451140481-35490axa.png",            imageAlt: "diverse students laptop training"},
        },
        {
          title: "Lifetime Access",          description: "Learn at your own pace whenever you need.",          items: [
            { icon: Clock, text: "Recorded lecture access" },
          ],
          reverse: true,
          media: {
            imageSrc: "http://img.b2bpic.net/free-photo/office-workers-using-finance-graphs_23-2150408711.jpg",            imageAlt: "diverse students laptop training"},
        },
        {
          title: "Real Projects",          description: "Gain hands-on experience on live industry projects.",          items: [
            { icon: Briefcase, text: "Practical training" },
          ],
          reverse: false,
          media: {
            imageSrc: "http://img.b2bpic.net/free-photo/close-up-smiley-woman-library_23-2149204737.jpg",            imageAlt: "diverse students laptop training"},
        },
        {
          title: "Job Support",          description: "We help you connect with top global opportunities.",          items: [
            { icon: Award, text: "Job placement assistance" },
          ],
          reverse: true,
          media: {
            imageSrc: "http://img.b2bpic.net/free-photo/young-hispanic-man-student-smiling-confident-standing-library-university_839833-29769.jpg",            imageAlt: "diverse students laptop training"},
        },
      ]}
      title="Why Choose Hitek Trainings?"
      description="We bridge the gap between education and high-income career opportunities."
    />
  </div>

  <div id="courses" data-section="courses">
      <ProductCardOne
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="three-columns-all-equal-width"
      useInvertedBackground={false}
      products={[
        { id: "c1", name: "Digital Marketing", price: "PKR 25,000", imageSrc: "http://img.b2bpic.net/free-photo/college-students-different-ethnicities-cramming_23-2149891341.jpg" },
        { id: "c2", name: "Web Development", price: "PKR 40,000", imageSrc: "http://img.b2bpic.net/free-photo/close-up-african-businesswoman-checking-statistics-graph-tablet-pc_482257-2022.jpg" },
        { id: "c3", name: "Graphic Design", price: "PKR 20,000", imageSrc: "http://img.b2bpic.net/free-photo/businesswoman-holding-digital-tablet-her-hand-giving-presentation-colleagues-office_23-2147955153.jpg" },
        { id: "c4", name: "Freelancing Skills", price: "PKR 15,000", imageSrc: "http://img.b2bpic.net/free-photo/young-adults-meeting-up-study_23-2149064525.jpg" },
        { id: "c5", name: "Shopify Mastery", price: "PKR 30,000", imageSrc: "http://img.b2bpic.net/free-photo/stylish-office-worker-woman-glasses-with-phone-hands-against-surface-working-colleagues_78826-2377.jpg" },
        { id: "c6", name: "Artificial Intelligence", price: "PKR 35,000", imageSrc: "http://img.b2bpic.net/free-photo/portrait-relaxed-freelance-worker-listening-music-headphones-working-with-laptop-portrait-young-specialists-international-corporation-spending-time-light-cozy-office_197531-3785.jpg" },
      ]}
      title="Our Professional Courses"
      description="Comprehensive programs designed for the modern digital economy."
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardFifteen
      useInvertedBackground={false}
      testimonial="The hands-on project approach at Hitek Trainings helped me secure my first freelance project within 2 months of training. Exceptional guidance!"
      rating={5}
      author="Sarah Ahmed"
      avatars={[
        { src: "http://img.b2bpic.net/free-photo/close-up-smiley-woman-library_23-2149204737.jpg", alt: "young professional portrait smiling" },
        { src: "http://img.b2bpic.net/free-photo/young-hispanic-man-student-smiling-confident-standing-library-university_839833-29769.jpg", alt: "confident young woman portrait" },
        { src: "http://img.b2bpic.net/free-photo/smiling-businessman-face-portrait-wearing-suit_53876-148135.jpg", alt: "smiling male professional portrait" },
        { src: "http://img.b2bpic.net/free-photo/portrait-middle-aged-hispanic-cheerful-female-with-curly-hair_181624-53321.jpg", alt: "professional headshot diverse background" },
        { src: "http://img.b2bpic.net/free-photo/young-lady-showing-thumb-up-t-shirt-jacket-looking-confident-front-view_176474-85562.jpg", alt: "Young lady showing thumb up in t-shirt, jacket and looking confident. front view." },
      ]}
      ratingAnimation="slide-up"
      avatarsAnimation="slide-up"
    />
  </div>

  <div id="partners" data-section="partners">
      <SocialProofOne
      textboxLayout="default"
      useInvertedBackground={false}
      names={[
        "Partner 1",        "Partner 2",        "Partner 3",        "Partner 4",        "Partner 5",        "Partner 6",        "Partner 7"]}
      title="Our Registered Partners"
      description="Trusted by leading institutions and organizations worldwide."
    />
  </div>

  <div id="cta" data-section="cta">
      <ContactCTA
      useInvertedBackground={false}
      background={{
        variant: "radial-gradient"}}
      tag="Limited Time Offer"
      title="Join Now & Start Earning Online"
      description="Limited seats available for our next batch. Enroll now to secure your spot."
      buttons={[
        {
          text: "Enroll Now",          href: "#"},
      ]}
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterCard
      logoText="Hitek Trainings"
      copyrightText="© 2025 Hitek Trainings. All rights reserved."
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
