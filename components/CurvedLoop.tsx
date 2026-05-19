'use client';

import { useRef, useEffect, useState, useMemo, useId } from 'react';
import './CurvedLoop.css';

interface CurvedLoopProps {
  marqueeText?: string;
  speed?: number;
  className?: string;
  curveAmount?: number;
  direction?: 'left' | 'right';
  interactive?: boolean;
}

export default function CurvedLoop({
  marqueeText = '',
  speed = 2,
  className,
  curveAmount = 400,
  direction = 'left',
  interactive = true
}: CurvedLoopProps) {
  const text = useMemo(() => {
    const hasTrailing = /\s|\u00A0$/.test(marqueeText);
    return (hasTrailing ? marqueeText.replace(/\s+$/, '') : marqueeText) + '\u00A0';
  }, [marqueeText]);

  const measureRef = useRef<SVGTextElement>(null);
  const textPathRef = useRef<SVGTextPathElement>(null);
  const [spacing, setSpacing] = useState(0);
  const [mounted, setMounted] = useState(false);
  const uid = useId();
  const pathId = `curve-${uid}`;
  const pathD = `M-100,60 Q500,${60 + curveAmount} 1540,60`;

  const dragRef = useRef(false);
  const lastXRef = useRef(0);
  const dirRef = useRef(direction);
  const velRef = useRef(0);
  const offsetRef = useRef(0);

  // Measure text length after mount (client-only)
  useEffect(() => {
    setMounted(true);
    if (measureRef.current) {
      const len = measureRef.current.getComputedTextLength();
      setSpacing(len);
      offsetRef.current = -len;
      if (textPathRef.current) {
        textPathRef.current.setAttribute('startOffset', offsetRef.current + 'px');
      }
    }
  }, [text, className]);

  // Animation loop
  useEffect(() => {
    if (!spacing || !mounted) return;
    let frame = 0;
    const step = () => {
      if (!dragRef.current && textPathRef.current) {
        const delta = dirRef.current === 'right' ? speed : -speed;
        let newOffset = offsetRef.current + delta;

        if (newOffset <= -spacing) newOffset += spacing;
        if (newOffset > 0) newOffset -= spacing;

        offsetRef.current = newOffset;
        textPathRef.current.setAttribute('startOffset', newOffset + 'px');
      }
      frame = requestAnimationFrame(step);
    };
    frame = requestAnimationFrame(step);
    return () => cancelAnimationFrame(frame);
  }, [spacing, speed, mounted]);

  const onPointerDown = (e: React.PointerEvent) => {
    if (!interactive) return;
    dragRef.current = true;
    lastXRef.current = e.clientX;
    velRef.current = 0;
    (e.target as Element).setPointerCapture?.(e.pointerId);
  };

  const onPointerMove = (e: React.PointerEvent) => {
    if (!interactive || !dragRef.current || !textPathRef.current) return;
    const dx = e.clientX - lastXRef.current;
    lastXRef.current = e.clientX;
    velRef.current = dx;

    let newOffset = offsetRef.current + dx;
    if (newOffset <= -spacing) newOffset += spacing;
    if (newOffset > 0) newOffset -= spacing;

    offsetRef.current = newOffset;
    textPathRef.current.setAttribute('startOffset', newOffset + 'px');
  };

  const endDrag = () => {
    if (!interactive) return;
    dragRef.current = false;
    dirRef.current = velRef.current > 0 ? 'right' : 'left';
  };

  const cursorStyle = interactive ? 'grab' : 'auto';

  // Pre-compute repeated text for SSR/client stability
  const repeatCount = Math.max(2, Math.ceil(2000 / Math.max(spacing, 100)));
  const totalText = Array(repeatCount).fill(text).join('');

  return (
    <div
      className="curved-loop-jacket"
      style={{ cursor: cursorStyle }}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={endDrag}
      onPointerLeave={endDrag}
    >
      <svg className="curved-loop-svg" viewBox="0 0 1440 140" preserveAspectRatio="xMidYMid meet" suppressHydrationWarning>
        {/* Measurement text — hidden, always rendered for stability */}
        <text ref={measureRef} className="curved-loop-measure" xmlSpace="preserve">
          {text}
        </text>
        <defs>
          <path id={pathId} d={pathD} fill="none" stroke="transparent" />
        </defs>
        {/* Main text path — always rendered so SSR and client match */}
        <text fontWeight="bold" xmlSpace="preserve" className={className}>
          <textPath
            ref={textPathRef}
            href={`#${pathId}`}
            startOffset="-1000px"
            xmlSpace="preserve"
          >
            {totalText}
          </textPath>
        </text>
      </svg>
    </div>
  );
}
