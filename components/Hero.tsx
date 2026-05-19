'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import BookDemoModal from './BookDemoModal';

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.hero__label', { opacity: 0, y: 30, duration: 1, delay: 0.3, ease: 'power3.out' });
      gsap.from('.hero__headline', { opacity: 0, y: 40, duration: 1, delay: 0.5, ease: 'power3.out' });
      gsap.from('.hero__body--primary', { opacity: 0, y: 30, duration: 1, delay: 0.7, ease: 'power3.out' });
      gsap.from('.hero__body--secondary', { opacity: 0, y: 30, duration: 1, delay: 0.85, ease: 'power3.out' });
      gsap.from('.hero__cta', { opacity: 0, y: 30, duration: 1, delay: 1, ease: 'power3.out' });
      gsap.from('.hero__scroll', { opacity: 0, duration: 1.5, delay: 1.8, ease: 'power2.out' });
    }, heroRef);
    return () => ctx.revert();
  }, []);

  return (
    <section className="hero" ref={heroRef}>
      {/* Background video + overlays */}
      <div className="hero__bg">
        <video autoPlay  loop playsInline className="hero__video">
          <source src="https://res.cloudinary.com/dhlmxzfnj/video/upload/v1779157141/herosection_ypvrsh.mp4" type="video/mp4" />
        </video>
        <div className="hero__overlay-radial" />
        <div className="hero__overlay-gradient" />
      </div>

      {/* Hero content */}
      <div className="hero__content">
        {/* Label */}
        <div className="hero__label">
          <div className="hero__label-line" />
          <p className="hero__label-text">New era of learning</p>
          <div className="hero__label-line" />
        </div>

        {/* Headline */}
        <h1 className="hero__headline">
          <span className="hero__title">Building Confident,</span>
          <span className="hero__title hero__title--gradient">Curious Young Minds</span>
        </h1>

        {/* Body copy */}
        <p className="hero__body hero__body--primary">
          Early learning isn&apos;t just about preparing for school &mdash; it&apos;s about shaping how children think, explore, and grow.
        </p>
        <p className="hero__body hero__body--secondary">
          Braindemics helps children build strong foundations through meaningful, engaging learning experiences.
        </p>

        {/* CTA */}
        <div className="hero__cta">
          <BookDemoModal />
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="hero__scroll">
        <div className="hero__scroll-mouse">
          <div className="hero__scroll-wheel" />
        </div>
        <span className="hero__scroll-text">Scroll to explore</span>
      </div>
    </section>
  );
}
