'use client';

import { useEffect, useState, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

gsap.registerPlugin(ScrollTrigger);

const features = [
  { title: 'Structured early learning curriculum', desc: '3–6 years', color: '#38bcc4' },
  { title: 'Teacher-friendly implementation system', desc: 'Ready-to-use tools', color: '#28b06f' },
  { title: 'Continuous student assessment & tracking', desc: 'Real-time insights', color: '#fdcd08' },
  { title: 'Parent engagement and reporting tools', desc: 'Transparent progress', color: '#e73b4b' },
  { title: 'End-to-end academic support', desc: 'Dedicated team', color: '#9b59b6' },
];

const rightFeatures = [
  'Real-Time Student Progress Monitoring',
  'Easy Digital Assessment & Reporting',
  'Complete Teacher & Student Performance Tracking',
  'Automated Achievement Reports',
  'Certification for Student Progress',
  'Dedicated Academic Support Team',
];

const blocks = [
  { title: 'Paediatric Inputs', desc: 'Expert-Designed Learning Framework', color: '#38bcc4' },
  { title: 'Home Fun Sheets', desc: 'Parent Engagement Activities', color: '#28b06f' },
  { title: 'Readiness Book', desc: 'School Readiness Development Kit', color: '#fdcd08' },
  { title: 'Assessment Sheet', desc: 'Continuous Skill Assessment System', color: '#e73b4b' },
  { title: 'Yearly Planner', desc: 'Structured Academic Planning Tool', color: '#9b59b6' },
  { title: 'Video Links', desc: 'Guided Learning Support Videos', color: '#38bcc4' },
];

const themes = [
  {
    title: 'Myself',
    focus: 'Self-awareness & communication foundation',
    points: ['Letter sounds & early phonics', 'Word formation & simple sentence building', 'Number concepts & pattern recognition', 'Real-world exposure (professions & safety)'],
    desc: 'The "Myself" theme focuses on helping children begin their journey of self-discovery while building strong communication and thinking skills. Children explore letter sounds and word formation, which gradually helps them construct simple sentences and express themselves with confidence.',
  },
  {
    title: 'Shapes',
    focus: 'Visual intelligence & spatial awareness',
    points: ['Identifying shapes & patterns', 'Foundation for Math & Geometry', 'Improves memory & observation skills'],
    desc: 'The "Shapes" theme helps children develop strong visual understanding and spatial awareness by exploring different shapes and how they exist in the world around them.',
  },
  {
    title: 'Animal Kingdom',
    focus: 'Living world & empathy',
    points: ['Recognise different animals & habitats', 'Build observation & classification skills', 'Develop empathy & compassion'],
    desc: 'The "Animal Kingdom" theme introduces children to a wide variety of living beings, helping them recognise and understand different animals, birds, insects, and aquatic life.',
  },
  {
    title: 'Plants, Trees & Flowers',
    focus: 'Nature & environmental awareness',
    points: ['Explore plant growth & life cycles', 'Hands-on gardening activities', 'Develop observation & responsibility'],
    desc: 'The "Plant, Trees and Flowers" theme introduces children to the natural world, helping them understand different types of plants and their importance in everyday life.',
  },
];

export default function SchoolPage() {
  const [isMounted, setIsMounted] = useState(false);
  const [activeTab, setActiveTab] = useState(0);
  const mainRef = useRef<HTMLElement>(null);

  useEffect(() => { setTimeout(() => setIsMounted(true), 150); }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>('.school-reveal').forEach((el) => {
        gsap.from(el, { opacity: 0, y: 50, duration: 0.9, ease: 'power3.out',
          scrollTrigger: { trigger: el, start: 'top 82%', toggleActions: 'play none none none' },
        });
      });
    }, mainRef);
    return () => ctx.revert();
  }, []);

  return (
    <main className="site-main" ref={mainRef}>
      <Header isMounted={isMounted} />

      {/* Hero */}
      <section className="page-hero">
        <div className="page-hero__bg page-hero__bg--green" />
        <div className="page-hero__content">
          <h1 className="page-hero__title">Transform Your School<br/><span>Into a Future-Ready Learning Environment</span></h1>
          <p className="page-hero__body">
            A complete early learning solution designed to improve student outcomes, teacher efficiency, and parent satisfaction.
          </p>
        </div>
      </section>

      {/* Green Section - Features */}
      <section className="page-section page-section--green">
        <div className="container">
          <h2 className="page-section-title school-reveal">What Schools Get with Braindemics</h2>
          <div className="school-features-grid school-reveal">
            {features.map((f, i) => (
              <div key={i} className="school-feature" style={{ '--sf-accent': f.color } as React.CSSProperties}>
                <div className="school-feature__dot" style={{ background: f.color }} />
                <div>
                  <h3 className="school-feature__title">{f.title}</h3>
                  <p className="school-feature__desc">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Left/Right Split */}
      <section className="page-section">
        <div className="container">
          <div className="school-split school-reveal">
            <div className="school-split__left">
              <h2 className="school-split__title">A Complete Classroom System —<br/>Not Just a Curriculum</h2>
              <ul className="school-split__list">
                {rightFeatures.map((item, i) => (
                  <li key={i} className="school-split__item">
                    <span className="school-split__check">&#10003;</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="school-split__right">
              <div className="school-blocks">
                {blocks.map((b, i) => (
                  <div key={i} className="school-block" style={{ '--sb-accent': b.color } as React.CSSProperties}>
                    <div className="school-block__accent" style={{ background: b.color }} />
                    <h4 className="school-block__title">{b.title}</h4>
                    <p className="school-block__desc">{b.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Themes Tabs */}
      <section className="page-section page-section--dark">
        <div className="container">
          <h2 className="page-section-title school-reveal">Learning Themes</h2>
          <div className="themes-tabs school-reveal">
            <div className="themes-tabs__nav">
              {themes.map((t, i) => (
                <button
                  key={i}
                  className={`themes-tabs__btn ${activeTab === i ? 'themes-tabs__btn--active' : ''}`}
                  onClick={() => setActiveTab(i)}
                >
                  {t.title}
                </button>
              ))}
            </div>
            <div className="themes-tabs__content">
              <h3 className="themes-tabs__focus">{themes[activeTab].focus}</h3>
              <ul className="themes-tabs__points">
                {themes[activeTab].points.map((p, i) => (
                  <li key={i} className="themes-tabs__point">{p}</li>
                ))}
              </ul>
              <p className="themes-tabs__desc">{themes[activeTab].desc}</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="page-cta school-reveal">
        <div className="container">
          <h2 className="page-cta__title">Ready to Transform Your Classroom?</h2>
          <button className="btn-primary page-cta__btn">
            <div className="btn-primary__shutter" />
            <span className="btn-primary__text">Book a Free Demo</span>
          </button>
        </div>
      </section>

      <Footer />
    </main>
  );
}
