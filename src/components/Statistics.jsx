import { useEffect, useRef, useState } from 'react';

const stats = [
  { count: 231, label: 'Happy Users' },
  { count: 385, label: 'Issues Solved' },
  { count: 159, label: 'Good Reviews' },
  { count: 127, label: 'Case Studies' },
  { count: 211, label: 'Orders Received' },
];

function useCountUp(target, duration = 2000, start = false) {
  const [value, setValue] = useState(1);

  useEffect(() => {
    if (!start) return;
    let startTime = null;
    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setValue(Math.floor(progress * target));
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };
    requestAnimationFrame(animate);
  }, [target, duration, start]);

  return value;
}

function StatCell({ count, label }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  const value = useCountUp(count, 2000, visible);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className="inline-block w-[124px] mx-6 xl:mx-[2.875rem] mb-12 align-top text-center"
    >
      <div className="text-[#333] font-bold text-[3.25rem] xl:text-[3.75rem] leading-[3.75rem] xl:leading-[4.25rem]">
        {value}
      </div>
      <p className="text-[#6b747b] text-[0.875rem] mb-0">{label}</p>
    </div>
  );
}

export default function Statistics() {
  return (
    <section aria-label="Company statistics" className="pt-8 lg:pt-16 pb-[4.5rem] text-center">
      <div className="max-w-[1140px] mx-auto px-4">
        <div className="mb-3">
          {stats.map((stat) => (
            <StatCell key={stat.label} count={stat.count} label={stat.label} />
          ))}
        </div>
      </div>
    </section>
  );
}
