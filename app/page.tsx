'use client';

import { useEffect, useState, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Header from '../components/Header';
import Hero from '../components/Hero';
import ProgramStrip from '../components/ProgramStrip';
import IntroStatement from '../components/IntroStatement';
import SmartLearning from '../components/SmartLearning';
import DevelopmentAreas from '../components/DevelopmentAreas';
import Educators from '../components/Educators';
import LearningPillars from '../components/LearningPillars';
import CurvedLoop from '../components/CurvedLoop';
import Globe3DDemoSecond from '../components/3d-globe-demo-2';
import HorizontalScroll from '../components/HorizontalScroll';
import GalleryScroll from '../components/GalleryScroll';
import MobileNav from '../components/MobileNav';
import Footer from '../components/Footer';

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const [isMounted, setIsMounted] = useState(false);
  const mainRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => setIsMounted(true), 150);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Section reveals
      gsap.utils.toArray<HTMLElement>('.section-reveal').forEach((section) => {
        gsap.from(section, {
          opacity: 0,
          y: 60,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: section,
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
        });
      });

      // Staggered card reveals
      gsap.utils.toArray<HTMLElement>('.stagger-cards').forEach((container) => {
        const cards = container.querySelectorAll('.stagger-card');
        gsap.from(cards, {
          opacity: 0,
          y: 50,
          scale: 0.96,
          duration: 0.8,
          stagger: 0.12,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: container,
            start: 'top 75%',
            toggleActions: 'play none none none',
          },
        });
      });
    }, mainRef);

    return () => ctx.revert();
  }, []);

  return (
    <main className="site-main" ref={mainRef}>
      <Header isMounted={isMounted} />
      <Hero />
      <ProgramStrip />
      <LearningPillars />

      <CurvedLoop
        marqueeText="Observe ✦ Listen ✦ Explore ✦ Experiment ✦ Question ✦ Discover ✦"
        speed={1.2}
        curveAmount={60}
        direction="right"
      />

      <IntroStatement />
      <SmartLearning />
      <DevelopmentAreas />
      <Educators />
      <Globe3DDemoSecond />
      <HorizontalScroll />
      <GalleryScroll />
      <Footer />
      <MobileNav />
    </main>
  );
}

