'use client';

import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { FiBookOpen, FiHeart, FiStar, FiUsers, FiZap } from 'react-icons/fi';

interface TVItem {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
  channel: string;
}

const items: TVItem[] = [
  {
    id: 1,
    channel: 'CH-01',
    title: 'Play-Based Learning',
    description: 'Children learn best through play, exploration, and hands-on activities that spark curiosity and creativity.',
    icon: <FiZap />,
  },
  {
    id: 2,
    channel: 'CH-02',
    title: 'Expert Designed',
    description: 'Curriculum built by child development specialists, educators, and early learning experts.',
    icon: <FiBookOpen />,
  },
  {
    id: 3,
    channel: 'CH-03',
    title: 'Whole Child Focus',
    description: 'Nurturing cognitive, physical, social, emotional, and language development together.',
    icon: <FiHeart />,
  },
  {
    id: 4,
    channel: 'CH-04',
    title: 'Parent & School Ready',
    description: 'Structured for classrooms and homes alike — with assessments, reports, and engagement tools.',
    icon: <FiUsers />,
  },
  {
    id: 5,
    channel: 'CH-05',
    title: 'Proven Outcomes',
    description: 'Age-appropriate milestones backed by research-informed methods and real-world application.',
    icon: <FiStar />,
  },
];

export default function TVCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isSwitching, setIsSwitching] = useState(false);
  const [direction, setDirection] = useState(1);

  const goTo = useCallback((index: number, dir: number) => {
    if (isSwitching || index === activeIndex) return;
    setDirection(dir);
    setIsSwitching(true);
    setTimeout(() => {
      setActiveIndex(index);
      setTimeout(() => {
        setIsSwitching(false);
      }, 200);
    }, 250);
  }, [isSwitching, activeIndex]);

  const next = useCallback(() => {
    const nextIndex = (activeIndex + 1) % items.length;
    goTo(nextIndex, 1);
  }, [activeIndex, goTo]);

  const prev = useCallback(() => {
    const prevIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    goTo(prevIndex, -1);
  }, [activeIndex, goTo]);

  // Autoplay
  useEffect(() => {
    const timer = setInterval(() => {
      next();
    }, 5000);
    return () => clearInterval(timer);
  }, [next]);

  const item = items[activeIndex];

  return (
    <div className="tv-carousel">
      {/* TV Frame */}
      <div className="tv-frame">
        {/* Antenna */}
        <div className="tv-antenna">
          <div className="tv-antenna__base" />
          <div className="tv-antenna__rod tv-antenna__rod--left" />
          <div className="tv-antenna__rod tv-antenna__rod--right" />
          <div className="tv-antenna__ball tv-antenna__ball--left" />
          <div className="tv-antenna__ball tv-antenna__ball--right" />
        </div>

        {/* Screen bezel */}
        <div className="tv-screen">
          {/* Scanlines overlay */}
          <div className="tv-scanlines" />

          {/* Glitch effect during channel switch */}
          <AnimatePresence>
            {isSwitching && (
              <>
                <motion.div
                  className="tv-static"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.15 }}
                >
                  <div className="tv-static-lines" />
                </motion.div>
                <motion.div
                  className="tv-glitch tv-glitch--active"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                />
              </>
            )}
          </AnimatePresence>

          {/* Content */}
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={item.id}
              custom={direction}
              initial={{ opacity: 0, x: direction * 60, filter: 'blur(8px)' }}
              animate={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
              exit={{ opacity: 0, x: -direction * 60, filter: 'blur(8px)' }}
              transition={{ duration: 0.35, ease: 'easeOut' }}
              className="tv-content"
            >
              <div className="tv-content__icon">{item.icon}</div>
              <h3 className="tv-content__title">{item.title}</h3>
              <p className="tv-content__desc">{item.description}</p>
            </motion.div>
          </AnimatePresence>

          {/* Channel badge */}
          <motion.div
            className="tv-channel-badge"
            key={item.channel}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: 0.2 }}
          >
            {item.channel}
          </motion.div>

          {/* Corner dots */}
          <div className="tv-corner-dots">
            {items.map((_, i) => (
              <div
                key={i}
                className={`tv-corner-dot ${i === activeIndex ? 'tv-corner-dot--active' : ''}`}
              />
            ))}
          </div>
        </div>

        {/* TV Brand / bottom bezel detail */}
        <div className="tv-bezel-bottom">
          <div className="tv-bezel-line" />
          <span className="tv-brand">BRAIN-TV</span>
          <div className="tv-bezel-line" />
        </div>
      </div>

      {/* Remote Control */}
      <div className="tv-remote">
        <button onClick={prev} className="tv-remote__btn tv-remote__btn--prev">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path d="M15 18l-6-6 6-6" />
          </svg>
          <span>PREV</span>
        </button>

        <div className="tv-remote__channels">
          {items.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i, i > activeIndex ? 1 : -1)}
              className={`tv-remote__ch ${i === activeIndex ? 'tv-remote__ch--active' : ''}`}
            >
              {i + 1}
            </button>
          ))}
        </div>

        <button onClick={next} className="tv-remote__btn tv-remote__btn--next">
          <span>NEXT</span>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path d="M9 18l6-6-6-6" />
          </svg>
        </button>
      </div>
    </div>
  );
}
