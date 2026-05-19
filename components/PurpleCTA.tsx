export default function PurpleCTA() {
  return (
    <section className="purple-cta">
      <div className="purple-cta__bg-radial" />
      <div className="purple-cta__glow-tr" />
      <div className="purple-cta__glow-bl" />

      <div className="purple-cta__inner">
        <h2 className="purple-cta__title">
          A Brain-Based Early Learning Programme
        </h2>
        <h3 className="purple-cta__subtitle">
          Designed to support how young children naturally learn
        </h3>
        <p className="purple-cta__body">
          Braindemics blends structured learning with play, exploration, and real-world interaction.
        </p>
        <p className="purple-cta__body purple-cta__body--muted">
          Our approach helps children build strong foundations in thinking, communication, creativity, and confidence — setting them up for school and beyond.
        </p>
        <button className="btn-purple">
          <span className="btn-purple__text">
            Book a Free Demo <span className="btn-purple__arrow">&rarr;</span>
          </span>
          <div className="btn-purple__shutter" />
        </button>
      </div>
    </section>
  );
}
