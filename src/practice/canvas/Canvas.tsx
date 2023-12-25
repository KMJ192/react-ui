import { useEffect, useMemo, useRef } from 'react';
import Particle from './particle';
import FPS from '../utils/FPS';
import { randomNumber } from '../utils/utils';

import classNames from 'classnames/bind';
import style from './style.module.scss';
const cx = classNames.bind(style);

function Canvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const fps = useMemo(() => new FPS(), []);

  useEffect(() => {
    const run = () => {
      if (!canvasRef.current) return;
      const canvas = canvasRef.current;
      const ctx = canvas.getContext('2d');
      if (!ctx) return;
      const canvasWidth = window.innerWidth;
      const canvasHeight = window.innerHeight;

      canvas.width = canvasWidth;
      canvas.height = canvasHeight;
      canvas.style.width = `${canvasWidth}px`;
      canvas.style.height = `${canvasHeight}px`;
      ctx.fillStyle = 'orange';

      const TOTAL = 30;

      const particles: Array<Particle> = [];

      for (let i = 0; i < TOTAL; i++) {
        const x = randomNumber(0, canvasWidth - 200);
        const vy = randomNumber(1, 5);
        const radius = randomNumber(20, 40);
        const particle = new Particle();
        particle.init({ ctx, x, y: -radius, radius, vy, acc: 1.02 });
        particles.push(particle);
        particle.draw();
      }

      function animate() {
        if (!ctx) return;
        ctx.clearRect(0, 0, canvasWidth, canvasHeight);
        particles.forEach((particle) => {
          particle.update();
          particle.draw();
        });
      }

      fps.init({ fps: 60 });
      fps.execute(animate);
    };

    run();

    window.addEventListener('resize', run);

    return () => {
      window.removeEventListener('resize', run);
    };
  }, [fps]);

  return (
    <>
      <canvas ref={canvasRef} className={cx('canvas')}></canvas>
      <svg>
        <defs>
          <filter id='gooey'>
            <feGaussianBlur
              stdDeviation='30'
              in='SourceGraphic'
              result='blur1'
            />
            <feColorMatrix
              in='blur1'
              mode='matrix'
              values='1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 100 -23'
            />
          </filter>
        </defs>
      </svg>
    </>
  );
}

export default Canvas;
