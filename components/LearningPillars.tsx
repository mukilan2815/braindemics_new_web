'use client';

import TVCarousel from './TVCarousel';

export default function LearningPillars() {
  return (
    <section className="learning-pillars">
      <div className="learning-pillars__orb learning-pillars__orb--cyan orb-float-1" />
      <div className="learning-pillars__orb learning-pillars__orb--purple orb-float-2" />
      <div className="container section-reveal">
        <div className="learning-pillars__header">
          <div className="learning-pillars__label">
            <div className="learning-pillars__label-line" />
            <span>What Drives Us</span>
          </div>
          <h2 className="learning-pillars__title">
            Built on <span>Five Core Pillars</span>
          </h2>
          <p className="learning-pillars__body">
            Every part of Braindemics is designed around what children actually need to thrive.
          </p>
        </div>
        <div className="learning-pillars__carousel">
          <TVCarousel />
        </div>
      </div>
    </section>
  );
}
