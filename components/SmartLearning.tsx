'use client';

import BorderGlow from './BorderGlow';

export default function SmartLearning() {
  const traits = ['Observe', 'Listen', 'Explore', 'Experiment', 'Question'];

  return (
    <section className="smart-learning">
      <div className="smart-learning__watermark">02</div>
      <div className="smart-learning__orb smart-learning__orb--green orb-float-1" />
      <div className="smart-learning__orb smart-learning__orb--cyan orb-float-2" />

      <div className="container section-reveal">
        <div className="smart-learning__grid">
          {/* Left — Big Statement */}
          <div className="smart-learning__left">
            <div className="smart-learning__label">
              <div className="smart-learning__label-line" />
              <span>Our Philosophy</span>
            </div>
            <h2 className="smart-learning__title">
              Now That&apos;s<br />
              <span className="smart-learning__title-gradient">Smart Learning</span>
            </h2>
            <p className="smart-learning__lead">
              Children don&apos;t learn by memorising — they learn by doing.
            </p>
          </div>

          {/* Right — Card Detail */}
          <div className="smart-learning__right">
            <BorderGlow
              glowColor="152 64 44"
              backgroundColor="#ffffff"
              borderRadius={20}
              glowRadius={35}
              glowIntensity={1.1}
              edgeSensitivity={28}
              colors={['#28b06f', '#38bcc4', '#fdcd08']}
            >
              <div className="smart-learning__card-inner">
                <p className="smart-learning__card-text">
                  They observe, listen, explore, experiment, and ask questions. That&apos;s how real understanding begins. At Braindemics, we build on this natural curiosity to help every child grow with confidence, creativity, and clarity.
                </p>
                <div className="smart-learning__traits">
                  {traits.map((t, i) => (
                    <span key={i} className="smart-learning__trait">{t}</span>
                  ))}
                </div>
                <button className="btn-ghost btn-ghost--green smart-learning__btn">
                  <span className="btn-ghost__text">
                    Get in Touch <span>&rarr;</span>
                  </span>
                </button>
              </div>
            </BorderGlow>
          </div>
        </div>
      </div>
    </section>
  );
}
