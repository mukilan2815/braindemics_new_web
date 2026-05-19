'use client';

import BorderGlow from './BorderGlow';

export default function IntroStatement() {
  return (
    <section className="intro-section">
      <div className="intro-section__orb intro-section__orb--yellow orb-float-3" />
      <div className="container section-reveal">
        <div className="intro-section__grid">
          {/* Left - Brand Statement */}
          <div className="intro-section__left">
            <div className="intro-section__accent-line" />
            <h2 className="intro-section__headline">
              Braindemics is built on a simple idea
            </h2>
            <p className="intro-section__big">
              Children learn best when they are <span>curious</span>, <span>engaged</span>, and <span>supported</span>.
            </p>
            <p className="intro-section__text">
              Our approach focuses on developing strong foundational skills while encouraging children to explore, ask questions, and think independently. Through a balance of structured learning and real-world interaction, we help children turn curiosity into confidence.
            </p>
            <div className="intro-section__divider" />
            <p className="intro-section__highlight">
              Because when a child enjoys learning, growth happens naturally.
            </p>
          </div>

          {/* Right - Feature Card */}
          <div className="intro-section__right">
            <BorderGlow
              glowColor="48 97 52"
              backgroundColor="#ffffff"
              borderRadius={20}
              glowRadius={35}
              glowIntensity={1.0}
              edgeSensitivity={28}
              colors={['#fdcd08', '#f472b6', '#38bdf8']}
            >
              <div className="intro-section__card-content">
                <div className="intro-section__card-icon">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#fdcd08" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 2L2 7l10 5 10-5-10-5z" />
                    <path d="M2 17l10 5 10-5" />
                    <path d="M2 12l10 5 10-5" />
                  </svg>
                </div>
                <p className="intro-section__card-text">
                  Braindemics supports early childhood development through a thoughtfully designed curriculum that nurtures cognitive, physical, language, social, and emotional growth.
                </p>
                <div className="intro-section__card-sep" />
                <p className="intro-section__card-text intro-section__card-text--muted">
                  Created for children aged 3 to 6, the program blends structured learning with engaging activities that help children develop essential skills with confidence.
                </p>
              </div>
            </BorderGlow>
          </div>
        </div>
      </div>
    </section>
  );
}
