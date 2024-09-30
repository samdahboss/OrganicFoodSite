import PropTypes from 'prop-types';
import { useEffect, useRef, useState } from 'react';
import CountUp from 'react-countup';

export default function NumberCounter({ startNo, finalNo, title }) {
  const [inView, setInView] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <div ref={ref} className='w-full'>
      <div className='flex justify-center items-center'>
        {inView && (
          <CountUp
            start={parseInt(startNo, 10)}
            end={parseInt(finalNo, 10)}
            duration={2.5}
            className='text-[46px] font-semibold'
          />
        )}
        <p className='text-[36px]'>+</p>
      </div>
      <p className='text-[19px] text-center'>{title}</p>
    </div>
  );
}

NumberCounter.propTypes = {
  startNo: PropTypes.string.isRequired,
  finalNo: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};