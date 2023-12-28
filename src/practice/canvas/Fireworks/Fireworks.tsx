import { useEffect, useMemo, useRef } from 'react';
import Canvas from '../object/canvas';
import FPS from '@src/practice/canvas/object/fps';
import Tail from './Tail';
import Particle from './particle';
import { hypotenuse, randomNumber } from '@src/practice/utils/utils';

function Fireworks() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const canvasObj = useMemo(() => new Canvas(), []);
  const fps = useMemo(() => new FPS(), []);

  useEffect(() => {
    const run = () => {
      if (!canvasRef.current) return;
      const canvas = canvasRef.current;
      const ctx = canvas.getContext('2d');
      const canvasWidth = window.innerWidth;
      const canvasHeight = window.innerHeight;

      const particles: Array<Particle> = [];
      const tails: Array<Tail> = [];
      const TOTAL = 500;

      const createTail = () => {
        const x = randomNumber(canvasWidth * 0.2, canvasWidth);
        const vy = canvasHeight * randomNumber(0.01, 0.015) * -1;
        const color = 'white';
        const tail = new Tail();
        tail.initTail({ x, y: canvasHeight, vy, color, canvasElement: canvas });
        tails.push(tail);
      };

      const createParticles = (x: number, y: number) => {
        // const x = randomNumber(0, canvasWidth);
        // const y = randomNumber(0, canvasHeight);
        for (let i = 0; i < TOTAL; i++) {
          const particle = new Particle();
          const r =
            randomNumber(2, 100) *
            hypotenuse(canvasWidth, canvasHeight) *
            0.0001;
          const angle = (Math.PI / 180) * randomNumber(0, 360);

          const vx = r * Math.cos(angle);
          const vy = r * Math.sin(angle);
          const opacity = randomNumber(0.6, 1);
          particle.initParticle({
            canvasElement: canvas,
            x,
            y,
            vx,
            vy,
            opacity,
          });
          particle.initCanvasSize(canvasWidth, canvasHeight);
          particle.init2DContext();
          particles.push(particle);
        }
      };

      function animate() {
        if (!ctx) return;
        const bgColor = `#000000`;

        ctx.fillStyle = `${bgColor}20`;
        ctx.fillRect(0, 0, canvasWidth, canvasHeight);

        createTail();

        tails.forEach((tail, index) => {
          tail.update();
          tail.draw();

          if (tail.state.vy > -1) {
            tails.splice(index, 1);
            createParticles(tail.state.x, tail.state.y);
          }
        });

        particles.forEach((particle, idx) => {
          particle.update();
          particle.draw();

          if (particle.state.opacity < 0) particles.splice(idx, 1);
        });
      }
      fps.init({});
      fps.execute(animate);
    };

    // run();

    window.addEventListener('resize', run);

    return () => {
      window.removeEventListener('resize', run);
    };
  }, [canvasObj, fps]);

  return <canvas ref={canvasRef}></canvas>;
}

export default Fireworks;
