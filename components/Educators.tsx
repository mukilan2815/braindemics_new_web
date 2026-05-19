export default function Educators() {
  const items = [
    {
      number: '01',
      title: 'Curriculum Design',
      color: '#38bcc4',
      colorClass: 'educators__item-number--cyan',
      lineClass: 'educators__item-line--cyan',
      desc: [
        'Our program is developed by a team of experienced educators, child development specialists, and early learning experts.',
        'It is carefully structured to support how young children naturally learn — through exploration, interaction, and guided discovery.'
      ]
    },
    {
      number: '02',
      title: 'Guided Teaching Approach',
      color: '#28b06f',
      colorClass: 'educators__item-number--green',
      lineClass: 'educators__item-line--green',
      desc: [
        'We equip educators with practical tools, structured lesson plans, and ongoing training support.',
        'This ensures consistency in teaching while giving teachers the flexibility to create engaging and meaningful classroom experiences.'
      ]
    },
    {
      number: '03',
      title: 'Personalised Learning',
      color: '#fdcd08',
      colorClass: 'educators__item-number--yellow',
      lineClass: '',
      desc: [
        'Every child learns differently — and that\'s exactly what we support.',
        'Braindemics uses a structured approach to help children think deeper, solve problems, and apply what they learn in real-life situations. This helps develop strong thinking skills from an early age, not just surface-level learning.'
      ]
    }
  ];

  return (
    <section className="educators">
      <div className="educators__orb educators__orb--cyan orb-float-1" />
      <div className="educators__orb educators__orb--yellow orb-float-3" />
      <div className="container">
        <div className="educators__header section-reveal">
          <h2 className="educators__title">
            How Braindemics Supports Educators in Delivering <span className="educators__title-accent">Meaningful Learning</span>
          </h2>
        </div>
        
        <div className="educators__list">
          {items.map((item, i) => (
            <div key={i} className="educators__item group section-reveal">
              <div className="educators__item-number-wrap">
                <div className={`educators__item-number ${item.colorClass}`}>
                  <span>{item.number}</span>
                </div>
                {item.lineClass && (
                  <div className={`educators__item-line ${item.lineClass}`} />
                )}
              </div>
              <div className="educators__item-title">
                <span className="educators__item-title-number" style={{ color: item.color }}>{item.number}.</span>
                {item.title}
              </div>
              <div className="educators__item-desc">
                {item.desc.map((p, j) => (
                  <p key={j}>{p}</p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
