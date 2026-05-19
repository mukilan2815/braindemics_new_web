'use client';

import BorderGlow from './BorderGlow';

const hslMap: Record<string, string> = {
  '#38bcc4': '183 56 50',
  '#28b06f': '152 64 44',
  '#fdcd08': '48 97 52',
  '#e73b4b': '355 75 51',
};

export default function DevelopmentAreas() {
  const devIcons = [
    { title: 'Cognitive Development', desc: 'Builds thinking, problem-solving, and decision-making skills.', color: '#38bcc4' },
    { title: 'Physical Development', desc: 'Improves coordination, motor skills, and active movement.', color: '#28b06f' },
    { title: 'Language Development', desc: 'Strengthens communication, vocabulary, and expression.', color: '#fdcd08' },
    { title: 'Social & Emotional', desc: 'Helps children understand emotions, build relationships, and develop confidence.', color: '#e73b4b' },
    { title: 'Life Skills & Values', desc: 'Encourages independence, responsibility, and positive habits for everyday life.', color: '#38bcc4' }
  ];

  return (
    <section className="dev-areas">
      <div className="dev-areas__orb dev-areas__orb--red orb-float-2" />
      <div className="dev-areas__orb dev-areas__orb--purple orb-float-1" />
      <div className="container">
        <div className="dev-areas__header">
          <h2 className="dev-areas__title">Areas of <strong>Development</strong></h2>
        </div>
        
        <div className="dev-areas__grid stagger-cards">
          {devIcons.map((dev, i) => (
            <BorderGlow
              key={i}
              className="stagger-card"
              glowColor={hslMap[dev.color] || '183 56 50'}
              backgroundColor="#ffffff"
              borderRadius={16}
              glowRadius={28}
              glowIntensity={1.0}
              edgeSensitivity={28}
              colors={[dev.color, '#ffffff', dev.color]}
            >
              <div className="dev-card group">
                <div 
                  className="dev-card__gradient"
                  style={{ background: `radial-gradient(circle at 100% 0%, ${dev.color}10 0%, transparent 50%)` }}
                />
                
                <div className="dev-card__icon" style={{ color: dev.color }}>
                  <span className="dev-card__number">{i + 1}</span>
                </div>
                
                <h3 className="dev-card__title">{dev.title}</h3>
                <p className="dev-card__desc">{dev.desc}</p>
                
                <div 
                  className="dev-card__line"
                  style={{ backgroundColor: dev.color }}
                />
              </div>
            </BorderGlow>
          ))}
        </div>
      </div>
    </section>
  );
}
