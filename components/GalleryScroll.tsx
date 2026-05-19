'use client';

import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import BookDemoModal from './BookDemoModal';

gsap.registerPlugin(ScrollTrigger);

const galleryItems = [
  {
    category: 'Early Foundation',
    title: 'Nurture & Grow',
    location: 'Ages 3 – 4 · Foundational Stage',
    scale: 'Motor Skills · Language · Social',
    highlights: [
      'Play-based sensory exploration modules',
      'Phonemic awareness through rhythm & song',
      'Collaborative peer-learning circles',
    ],
    year: '2025',
    gradient: 'linear-gradient(135deg, #e0f7fa 0%, #b2ebf2 100%)',
    accent: '#0ea5a5',
    image: '/earlyfoundation.png',
    overlay: ['rgba(224,247,250,0.55)', 'rgba(178,235,242,0.45)'],
  },
  {
    category: 'Active Discovery',
    title: 'Explore & Build',
    location: 'Ages 4 – 5 · Preparatory Stage',
    scale: 'Cognitive · Creative · Physical',
    highlights: [
      'Hands-on STEM tinkering stations',
      'Story-driven problem solving quests',
      'Yoga & movement for body-mind balance',
    ],
    year: '2025',
    gradient: 'linear-gradient(135deg, #e8f5e9 0%, #c8e6c9 100%)',
    accent: '#059669',
    image: '/activediscovery.png',
    overlay: ['rgba(232,245,233,0.55)', 'rgba(200,230,201,0.45)'],
  },
  {
    category: 'School Ready',
    title: 'Lead & Shine',
    location: 'Ages 5 – 6 · Transition Stage',
    scale: 'Literacy · Numeracy · Confidence',
    highlights: [
      'Structured readiness book programme',
      'Real-world math & logic challenges',
      'Public speaking & presentation labs',
    ],
    year: '2025',
    gradient: 'linear-gradient(135deg, #fff3e0 0%, #ffe0b2 100%)',
    accent: '#d97706',
    image: '/schoolready.png',
    overlay: ['rgba(255,243,224,0.55)', 'rgba(255,224,178,0.45)'],
  },
  {
    category: 'Parent Bridge',
    title: 'Home & School',
    location: 'Family Engagement Programme',
    scale: 'Activities · Updates · Alignment',
    highlights: [
      'Weekly home-fun activity sheets',
      'Real-time progress dashboards',
      'Expert-led parent workshops',
    ],
    year: '2024',
    gradient: 'linear-gradient(135deg, #f3e5f5 0%, #e1bee7 100%)',
    accent: '#7c3aed',
    image: '/parentbridge.png',
    overlay: ['rgba(243,229,245,0.55)', 'rgba(225,190,231,0.45)'],
  },
  {
    category: 'Educator Support',
    title: 'Train & Empower',
    location: 'Teacher Development Network',
    scale: 'Resources · Videos · Community',
    highlights: [
      'Step-by-step lesson video library',
      'Assessment & tracking toolkit',
      'Peer educator mentorship circles',
    ],
    year: '2024',
    gradient: 'linear-gradient(135deg, #e3f2fd 0%, #bbdefb 100%)',
    accent: '#2563eb',
  },
];

export default function GalleryScroll() {
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const container = containerRef.current;
    const track = trackRef.current;
    if (!container || !track) return;

    const totalScroll = Math.max(0, track.scrollWidth - window.innerWidth);
    if (totalScroll <= 0) return;

    const ctx = gsap.context(() => {
      const tl = gsap.to(track, {
        x: () => -totalScroll,
        ease: 'none',
        scrollTrigger: {
          trigger: container,
          pin: true,
          scrub: 1,
          end: () => `+=${totalScroll}`,
          invalidateOnRefresh: true,
          onUpdate: (self) => {
            setProgress(self.progress);
          },
        },
      });

      const panels = track.querySelectorAll<HTMLElement>('.gallery-panel');
      panels.forEach((panel) => {
        const info = panel.querySelector('.panel-info');
        if (info) {
          gsap.fromTo(
            info,
            { y: 40, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              scrollTrigger: {
                trigger: panel,
                containerAnimation: tl,
                start: 'left 80%',
                end: 'left 40%',
                scrub: true,
              },
            }
          );
        }
      });
    }, container);

    return () => ctx.revert();
  }, []);

  return (
    <section id="gallery" ref={containerRef} className="gallery-section">
      {/* Left intro overlay */}
      <div className="gallery-intro">
        <div className="gallery-intro__gradient" />
        <div className="gallery-intro__content">
          <div className="gallery-intro__eyebrow">
            <span className="gallery-intro__line" />
            <span>Our Programmes</span>
          </div>
          <h2 className="gallery-intro__title">
            Learning journeys{' '}
            <span>we&apos;ve crafted</span>
          </h2>
          <p className="gallery-intro__body">
            Scroll to explore how Braindemics transforms early education into meaningful, joyful experiences for every child.
          </p>

          {/* Progress bar */}
          <div className="gallery-progress">
            <div className="gallery-progress__track">
              <div
                className="gallery-progress__bar"
                style={{ width: `${progress * 100}%` }}
              />
            </div>
            <div className="gallery-progress__labels">
              <span>
                {String(Math.round(progress * (galleryItems.length - 1)) + 1).padStart(2, '0')}
              </span>
              <span>{String(galleryItems.length).padStart(2, '0')}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Horizontal track */}
      <div ref={trackRef} className="gallery-track">
        {galleryItems.map((item, i) => (
          <GalleryPanel key={item.title} item={item} index={i} />
        ))}
        {/* End spacer with CTA */}
        <div className="gallery-panel gallery-panel--cta">
          <div className="gallery-panel__bg" style={{ background: 'radial-gradient(ellipse at center, rgba(14,165,165,0.08) 0%, transparent 60%)' }} />
          <div className="gallery-panel__cta-content">
            <div className="gallery-panel__cta-label">Your Child&apos;s Journey Starts Here</div>
            <h3 className="gallery-panel__cta-title">
              Ready to <span>begin</span>?
            </h3>
            <BookDemoModal />
          </div>
        </div>
      </div>
    </section>
  );
}

function GalleryPanel({
  item,
  index,
}: {
  item: (typeof galleryItems)[0];
  index: number;
}) {
  const panelStyle = item.image && item.overlay
    ? {
        backgroundImage: `linear-gradient(135deg, ${item.overlay[0]} 0%, ${item.overlay[1]} 100%), url(${item.image})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }
    : { background: item.gradient };

  return (
    <div className="gallery-panel" style={panelStyle}>
      {/* Top-right accent line */}
      <div className="gallery-panel__accent" style={{ background: item.accent }} />

      {/* Panel number */}
      <div className="gallery-panel__number">
        <span style={{ color: item.accent }}>{String(index + 1).padStart(2, '0')}</span>
      </div>

      {/* Content */}
      <div className="panel-info">
        {/* Category badge */}
        <div className="panel-info__badge">
          <span className="panel-info__badge-line" style={{ background: item.accent }} />
          <span className="panel-info__badge-text" style={{ color: item.accent }}>
            {item.category}
          </span>
        </div>

        <h3 className="panel-info__title">{item.title}</h3>
        <div className="panel-info__location">{item.location}</div>
        <div className="panel-info__scale">{item.scale} · {item.year}</div>

        {/* Highlights */}
        <ul className="panel-info__highlights">
          {item.highlights.map((h, i) => (
            <li key={i} className="panel-info__highlight">
              <span style={{ color: item.accent }}>✦</span>
              {h}
            </li>
          ))}
        </ul>

        {/* Divider */}
        <div className="panel-info__divider" style={{ background: `linear-gradient(to right, ${item.accent}80, transparent)` }} />
      </div>
    </div>
  );
}

