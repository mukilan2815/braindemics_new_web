'use client';

import { useEffect, useState, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Header from './Header';
import Footer from './Footer';

gsap.registerPlugin(ScrollTrigger);

interface Tab {
  title: string;
  points: string[];
}

interface Perk {
  title: string;
  desc: string;
}

interface WhyPoint {
  title: string;
  desc: string;
}

interface ProgramData {
  stage: string;
  ageRange: string;
  headline: string;
  subheadline: string;
  diffTitle: string;
  diffPoints: { title: string; desc: string }[];
  guidingTitle: string;
  guidingText: string;
  milestoneTitle: string;
  tabs: Tab[];
  perksTitle: string;
  perks: Perk[];
  whyTitle: string;
  whyText: string;
  whyPoints: WhyPoint[];
  uniqueTitle: string;
  uniquePoints: string[];
}

export default function ProgramPage({ data }: { data: ProgramData }) {
  const [isMounted, setIsMounted] = useState(false);
  const [activeTab, setActiveTab] = useState(0);
  const mainRef = useRef<HTMLElement>(null);

  useEffect(() => { setTimeout(() => setIsMounted(true), 150); }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>('.prog-reveal').forEach((el) => {
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
        <div className="page-hero__bg page-hero__bg--cyan" />
        <div className="page-hero__content">
          <span className="page-hero__stage">{data.stage}</span>
          <h1 className="page-hero__title">{data.headline}</h1>
          <p className="page-hero__body">{data.subheadline}</p>
          <div className="page-hero__ctas">
            <button className="btn-primary">
              <div className="btn-primary__shutter" />
              <span className="btn-primary__text">Book a Free Demo</span>
            </button>
            <button className="btn-ghost">
              <span className="btn-ghost__text">Talk to Our Team</span>
            </button>
          </div>
        </div>
      </section>

      {/* The Braindemics Difference */}
      <section className="page-section">
        <div className="container">
          <h2 className="page-section-title prog-reveal">{data.diffTitle}</h2>
          <div className="diff-grid prog-reveal">
            {data.diffPoints.map((p, i) => (
              <div key={i} className="diff-card">
                <div className="diff-card__number">0{i + 1}</div>
                <h3 className="diff-card__title">{p.title}</h3>
                <p className="diff-card__desc">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Guiding Section */}
      <section className="page-section page-section--dark">
        <div className="container prog-reveal">
          <h2 className="page-section-title">{data.guidingTitle}</h2>
          <p className="page-lead">{data.guidingText}</p>
        </div>
      </section>

      {/* Milestones with Tabs */}
      <section className="page-section">
        <div className="container">
          <h2 className="page-section-title prog-reveal">{data.milestoneTitle}</h2>
          <div className="prog-tabs prog-reveal">
            <div className="prog-tabs__nav">
              {data.tabs.map((tab, i) => (
                <button
                  key={i}
                  className={`prog-tabs__btn ${activeTab === i ? 'prog-tabs__btn--active' : ''}`}
                  onClick={() => setActiveTab(i)}
                >
                  {tab.title}
                </button>
              ))}
            </div>
            <div className="prog-tabs__panel">
              <ul className="prog-tabs__list">
                {data.tabs[activeTab].points.map((point, i) => (
                  <li key={i} className="prog-tabs__point">{point}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Perks */}
      <section className="page-section page-section--dark">
        <div className="container">
          <h2 className="page-section-title prog-reveal">{data.perksTitle}</h2>
          <div className="perks-grid prog-reveal">
            {data.perks.map((perk, i) => (
              <div key={i} className="perk-card">
                <div className="perk-card__number">{String(i + 1).padStart(2, '0')}</div>
                <h3 className="perk-card__title">{perk.title}</h3>
                <p className="perk-card__desc">{perk.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Braindemics */}
      <section className="page-section">
        <div className="container">
          <h2 className="page-section-title prog-reveal">{data.whyTitle}</h2>
          <p className="page-lead prog-reveal">{data.whyText}</p>
          <div className="why-grid prog-reveal">
            {data.whyPoints.map((w, i) => (
              <div key={i} className="why-card">
                <h4 className="why-card__title">{w.title}</h4>
                <p className="why-card__desc">{w.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What Makes Us Unique */}
      <section className="page-section page-section--dark">
        <div className="container prog-reveal">
          <h2 className="page-section-title">{data.uniqueTitle}</h2>
          <div className="unique-list">
            {data.uniquePoints.map((point, i) => (
              <div key={i} className="unique-item">
                <span className="unique-item__bullet">{i + 1}</span>
                <span className="unique-item__text">{point}</span>
              </div>
            ))}
          </div>
          <button className="btn-primary page-cta__btn" style={{ marginTop: 'var(--space-12)' }}>
            <div className="btn-primary__shutter" />
            <span className="btn-primary__text">Book a Free Demo</span>
          </button>
        </div>
      </section>

      <Footer />
    </main>
  );
}
