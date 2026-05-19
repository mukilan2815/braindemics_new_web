'use client';

import { useEffect, useState, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

gsap.registerPlugin(ScrollTrigger);

const whoWhatWhere = [
  {
    key: 'WHO',
    title: 'Who We Are',
    desc: 'We\'re a passionate team of educators, child development specialists, and early learning experts committed to shaping better beginnings for young children. At Braindemics, everything we do is guided by one goal — helping children grow with confidence, curiosity, and a love for learning.',
    color: '#38bcc4',
  },
  {
    key: 'WHAT',
    title: 'What We Do',
    desc: 'We deliver a structured early learning programme designed around how children actually learn — through play, exploration, and meaningful experiences. Our approach focuses on building strong foundations in thinking, communication, creativity, and social development, setting children up for long-term success.',
    color: '#28b06f',
  },
  {
    key: 'WHERE',
    title: 'Where It Fits',
    desc: 'Braindemics is designed to work seamlessly within early learning centres, preschools, and kindergarten environments. It supports educators by enhancing classroom experiences while aligning with modern early childhood learning frameworks.',
    color: '#fdcd08',
  },
  {
    key: 'WHEN',
    title: 'When It Matters Most',
    desc: 'The early years - especially between ages 3 to 6 - are critical for brain development. This is when children build the foundations for how they think, learn, communicate, and interact with the world. Braindemics focuses on making these years meaningful and impactful.',
    color: '#e73b4b',
  },
  {
    key: 'HOW',
    title: 'How It Works',
    desc: 'Our programme is developed with insights from child development experts, combining research-backed methods with practical classroom application. Through guided activities, structured lesson plans, and hands-on learning tools, we help educators deliver engaging and effective learning experiences every day.',
    color: '#9b59b6',
  },
  {
    key: 'WHY',
    title: 'Why Braindemics',
    desc: 'Because every child deserves more than just learning — they deserve understanding. We believe education should nurture individuality, build confidence, and create a lifelong love for learning. That\'s why Braindemics focuses on developing the whole child — not just academic skills.',
    color: '#38bcc4',
  },
];

const principles = [
  { title: 'Thematic Learning', desc: 'Children learn best when ideas are connected. Our curriculum is built around themes that help children understand the world in a more meaningful and integrated way.', color: '#38bcc4' },
  { title: 'Activity-Based Learning', desc: 'Learning happens through doing. Hands-on activities encourage children to explore, experiment, and actively engage with concepts rather than just memorising them.', color: '#28b06f' },
  { title: 'Story-Led Learning', desc: 'Stories make learning memorable. We use storytelling as a powerful tool to build imagination, language skills, and emotional understanding.', color: '#fdcd08' },
  { title: 'Play & Creative Expression', desc: 'Play is at the heart of early learning. Art, movement, and creative expression help children develop confidence, coordination, and self-expression.', color: '#e73b4b' },
];

export default function AboutPage() {
  const [isMounted, setIsMounted] = useState(false);
  const mainRef = useRef<HTMLElement>(null);

  useEffect(() => {
    setTimeout(() => setIsMounted(true), 150);
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>('.about-reveal').forEach((el) => {
        gsap.from(el, {
          opacity: 0, y: 50, duration: 0.9, ease: 'power3.out',
          scrollTrigger: { trigger: el, start: 'top 82%', toggleActions: 'play none none none' },
        });
      });
      gsap.utils.toArray<HTMLElement>('.about-stagger').forEach((container) => {
        const items = container.querySelectorAll('.about-stagger-item');
        gsap.from(items, {
          opacity: 0, y: 40, scale: 0.96, duration: 0.7, stagger: 0.1, ease: 'power3.out',
          scrollTrigger: { trigger: container, start: 'top 78%', toggleActions: 'play none none none' },
        });
      });
    }, mainRef);
    return () => ctx.revert();
  }, []);

  return (
    <main className="site-main" ref={mainRef}>
      <Header isMounted={isMounted} />

      {/* Hero Banner */}
      <section className="page-hero">
        <div className="page-hero__bg" />
        <div className="page-hero__content">
          <h1 className="page-hero__title">Making Learning Meaningful<br/><span>for Young Minds</span></h1>
          <p className="page-hero__body">
            Braindemics is designed to complement modern classrooms — not replace them.
            We move beyond passive learning by encouraging children to think, explore, and engage with the world around them.
          </p>
        </div>
      </section>

      {/* Intro Statement */}
      <section className="page-section">
        <div className="container about-reveal">
          <p className="page-lead">
            Through hands-on activities and guided discovery, learning becomes something children enjoy, understand, and remember.
            Because when children are curious, learning doesn&apos;t feel like a task — it becomes a natural part of who they are.
          </p>
        </div>
      </section>

      {/* WHO/WHAT/WHERE/WHEN/HOW/WHY Grid */}
      <section className="page-section page-section--dark">
        <div className="container">
          <h2 className="page-section-title about-reveal">The Braindemics Framework</h2>
          <div className="wwwh-grid about-stagger">
            {whoWhatWhere.map((item) => (
              <div key={item.key} className="wwwh-card about-stagger-item">
                <div className="wwwh-card__accent" style={{ background: item.color }} />
                <span className="wwwh-card__key" style={{ color: item.color }}>{item.key}</span>
                <h3 className="wwwh-card__title">{item.title}</h3>
                <p className="wwwh-card__desc">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Principles */}
      <section className="page-section">
        <div className="container">
          <h2 className="page-section-title about-reveal">Core Teaching Principles</h2>
          <p className="page-section-subtitle about-reveal">
            A thoughtfully designed early learning approach that supports every aspect of a child&apos;s development
          </p>
          <div className="principles-grid about-stagger">
            {principles.map((p, i) => (
              <div key={i} className="principle-card about-stagger-item">
                <div className="principle-card__bar" style={{ background: p.color }} />
                <h3 className="principle-card__title">{p.title}</h3>
                <p className="principle-card__desc">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="page-section page-section--dark">
        <div className="container">
          <div className="vision-grid about-reveal">
            <div className="vision-block">
              <h3 className="vision-block__label">Our Vision</h3>
              <p className="vision-block__text">
                To nurture confident, curious, and capable learners by creating meaningful early learning experiences that support lifelong growth.
                We envision classrooms where children feel safe to explore, ask questions, and develop a genuine love for learning.
              </p>
            </div>
            <div className="vision-block">
              <h3 className="vision-block__label">Our Mission</h3>
              <p className="vision-block__text">
                To support educators and parents with a well-structured, research-informed early learning programme that develops the whole child — cognitively, socially, emotionally, and physically.
                We aim to make early education engaging, practical, and aligned with how children naturally learn.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="page-cta about-reveal">
        <div className="container">
          <h2 className="page-cta__title">Let&apos;s Shape the Future of Early Learning Together</h2>
          <p className="page-cta__body">
            Partner with Braindemics to bring a modern, child-focused learning experience into your centre or school.
          </p>
          <button className="btn-primary page-cta__btn">
            <div className="btn-primary__shutter" />
            <span className="btn-primary__text">Book a Free Demo</span>
          </button>
        </div>
      </section>

      <Footer />
    </main>
  );
}
