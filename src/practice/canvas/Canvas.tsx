import Fireworks from './Fireworks/Fireworks';
import ParticleComponent from './Particle/ParticleComponent';

type Props = {
  type: 'particle' | 'fireworks';
};

function Canvas({ type }: Props) {
  if (type === 'particle') {
    return <ParticleComponent />;
  }
  if (type === 'fireworks') {
    return <Fireworks />;
  }
  return <div></div>;
}

export default Canvas;
