export default function Tigu() {
  return (
    <section className="tigu">
      <div className="container tigu__grid">
        <div className="tigu__graphic">
          <div className="tigu__circle">
            <div className="tigu__circle-glow" />
            <div className="tigu__ring tigu__ring--outer" />
            <div className="tigu__ring tigu__ring--inner" />
            <span className="tigu__name">TIGU</span>
          </div>
        </div>
        
        <div className="tigu__content">
          <div className="tigu__label">
            <div className="tigu__label-line" />
            <h4 className="tigu__label-text">Meet Tigu</h4>
          </div>
          <h2 className="tigu__title">
            A curious little learner, <br/><strong>just like every child we support</strong>
          </h2>
          <div className="tigu__body">
            <p>Tigu isn&apos;t just a mascot he represents every child&apos;s natural curiosity.</p>
            <p>Just like no two tigers have the same stripes, no two children learn in the same way. Each child has their own pace, personality, and potential.</p>
            <p className="tigu__body-highlight">At Braindemics, we celebrate these differences.</p>
            <p>We help parents and educators nurture every child&apos;s strengths - not change who they are, but help them grow into who they can become.</p>
          </div>
          <button className="btn-text">
            <span className="btn-text__label">Explore the Programme</span>
            <span className="btn-text__arrow">&rarr;</span>
          </button>
        </div>
      </div>
    </section>
  );
}
