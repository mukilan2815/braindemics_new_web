'use client';

import BorderGlow from './BorderGlow';

export default function ProgramStrip() {
  const programs = [
    { age: '3–4 years', level: 'Beginner', title: 'A Gentle Start to Learning', color: '#38bcc4', hsl: '183 56 50' },
    { age: '4–5 years', level: 'Explorer', title: 'Curiosity Begins Here', color: '#28b06f', hsl: '152 64 44' },
    { age: '5–6 years', level: 'Master', title: 'Ready for the Next Step', color: '#fdcd08', hsl: '48 97 52' }
  ];

  return (
    <section className="program-strip">
      <div className="program-strip__orb program-strip__orb--cyan orb-float-1" />
      <div className="program-strip__orb program-strip__orb--green orb-float-2" />
      <div className="program-strip__inner">
        <div className="program-strip__grid stagger-cards">
          {programs.map((prog, i) => (
            <BorderGlow
              key={i}
              className="stagger-card"
              glowColor={prog.hsl}
              backgroundColor="#ffffff"
              borderRadius={16}
              glowRadius={30}
              glowIntensity={1.2}
              edgeSensitivity={25}
              colors={[prog.color, '#ffffff', prog.color]}
            >
              <div
                className="program-card group"
                style={{ '--pc-color': prog.color } as React.CSSProperties}
              >
                <div
                  className="program-card__shutter"
                  style={{ backgroundColor: `${prog.color}18` }}
                />
                <div
                  className="program-card__accent-line"
                  style={{ backgroundColor: prog.color }}
                />
                <div className="program-card__content">
                  <div className="program-card__header">
                    <div className="badge program-card__badge">
                      <span style={{ color: prog.color }}>{prog.age}</span>
                    </div>
                    <h4 className="program-card__level">{prog.level}</h4>
                    <h3 className="program-card__title">{prog.title}</h3>
                  </div>
                  <div className="program-card__cta">
                    <button style={{ color: prog.color }} className="program-card__btn">
                      <div className="program-card__btn-shutter" style={{ backgroundColor: `${prog.color}25` }} />
                      <span className="program-card__btn-text">Learn More</span>
                      <span className="program-card__btn-arrow">&rarr;</span>
                    </button>
                  </div>
                </div>
              </div>
            </BorderGlow>
          ))}
        </div>
      </div>
    </section>
  );
}
