'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import BorderGlow from './BorderGlow';

gsap.registerPlugin(ScrollTrigger);

const features = [
  {
    title: 'Structured Curriculum Kit',
    desc: 'A complete early learning programme with lesson plans, activity guides, and assessment tools for ages 3 to 6.',
    bullets: ['Yearly planner included', 'Theme-based modules', 'Ready-to-use materials'],
    color: '#38bcc4',
    hsl: '183 56 50',
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#38bcc4" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20" />
      </svg>
    ),
  },
  {
    title: 'Hands-On Activity Sheets',
    desc: 'Engaging worksheets and home fun sheets that reinforce classroom learning through creative play.',
    bullets: ['Age-appropriate difficulty', 'Parent-friendly instructions', 'Printable & digital formats'],
    color: '#28b06f',
    hsl: '152 64 44',
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#28b06f" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
        <polyline points="14 2 14 8 20 8" />
      </svg>
    ),
  },
  {
    title: 'School Readiness Books',
    desc: 'Beautifully designed readiness books that build foundational skills for confident school entry.',
    bullets: ['Cognitive skill builders', 'Fine motor exercises', 'Language & literacy prep'],
    color: '#fdcd08',
    hsl: '48 97 52',
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#fdcd08" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
        <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
      </svg>
    ),
  },
  {
    title: 'Continuous Assessment System',
    desc: 'Track every child\'s growth with structured skill assessments across all development areas.',
    bullets: ['360-degree skill tracking', 'Progress reports for parents', 'Personalised recommendations'],
    color: '#e73b4b',
    hsl: '355 75 51',
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#e73b4b" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <line x1="18" y1="20" x2="18" y2="10" />
        <line x1="12" y1="20" x2="12" y2="4" />
        <line x1="6" y1="20" x2="6" y2="14" />
      </svg>
    ),
  },
  {
    title: 'Guided Learning Videos',
    desc: 'Step-by-step video resources for educators and parents to deliver effective learning experiences.',
    bullets: ['Expert-led tutorials', 'Classroom demos', 'Activity walkthroughs'],
    color: '#9b59b6',
    hsl: '274 48 56',
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#9b59b6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="5 3 19 12 5 21 5 3" />
      </svg>
    ),
  },
  {
    title: 'Parent Engagement Kit',
    desc: 'Bridge the gap between school and home with activities, updates, and progress insights for families.',
    bullets: ['Home fun sheets', 'Weekly progress updates', 'Parent-teacher alignment'],
    color: '#38bcc4',
    hsl: '183 56 50',
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#38bcc4" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
];

export default function HorizontalScroll() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const track = trackRef.current;
    if (!section || !track) return;

    const scrollWidth = track.scrollWidth - window.innerWidth;

    const ctx = gsap.context(() => {
      gsap.to(track, {
        x: -scrollWidth,
        ease: 'none',
        scrollTrigger: {
          trigger: section,
          start: 'top top',
          end: () => `+=${scrollWidth}`,
          scrub: 1,
          pin: true,
          anticipatePin: 1,
        },
      });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section className="horizontal-section" ref={sectionRef}>
      <div className="horizontal-section__header">
        <span className="horizontal-section__eyebrow">The Complete Kit</span>
        <h2 className="horizontal-section__title">
          With Braindemics, <span>Children Become Their Best</span>
        </h2>
        <p className="horizontal-section__subtitle">
          Everything educators and parents need to create meaningful early learning experiences
        </p>
      </div>
      <div className="horizontal-section__track" ref={trackRef}>
        {features.map((feat, i) => (
          <BorderGlow
            key={i}
            glowColor={feat.hsl}
            backgroundColor="#ffffff"
            borderRadius={20}
            glowRadius={30}
            glowIntensity={0.9}
            edgeSensitivity={28}
            colors={[feat.color, '#e0e0e0', feat.color]}
          >
            <div className="horizontal-card">
              <div className="horizontal-card__icon">{feat.icon}</div>
              <h3 className="horizontal-card__title" style={{ color: feat.color }}>{feat.title}</h3>
              <p className="horizontal-card__desc">{feat.desc}</p>
              <ul className="horizontal-card__bullets">
                {feat.bullets.map((b, j) => (
                  <li key={j} className="horizontal-card__bullet">
                    <span className="horizontal-card__bullet-dot" style={{ background: feat.color }} />
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          </BorderGlow>
        ))}
      </div>
    </section>
  );
}
