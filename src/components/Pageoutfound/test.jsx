import './Test.css';
import { useEffect } from 'react';

function Test() {
  useEffect(() => {
    const anims = ['float', 'floatReverse', 'float2', 'floatReverse2'];

    const particles = document.querySelectorAll('.particle');
    particles.forEach((particle) => {
      const size = Math.floor(Math.random() * 20) + 10;
      const blur = particle.dataset.index * 0.02;
      const speed = Math.floor(Math.random() * 20) + 20;
      const delay = Math.floor(Math.random() * 10) * 0.1;
      const anim = anims[Math.floor(Math.random() * anims.length)];

      particle.style.top = `${Math.random() / (100 / (100 + size / 8)) * 100}%`;
      particle.style.left = `${Math.random() / (100 / (100 + size / 10)) * 100}%`;
      particle.style.fontSize = `${size}px`;
      particle.style.filter = `blur(${blur}px)`;
      particle.style.animation = `${speed}s ${anim} infinite`;
      particle.style.animationDelay = `${delay}s`;
    });

    const content = document.querySelector('.content');
    content.style.opacity = 1;
    content.style.animation = 'apparition 0.8s 1.2s cubic-bezier(0.39, 0.575, 0.28, 0.995) forwards';
  }, []);

  return (
    <div className="container">
      {[...Array(40)].map((_, i) => (
        <span key={`particle${i}`} className="particle" data-index={i}></span>
      ))}
      {[...Array(40)].map((_, i) => (
        <span key={`particle${i + 40}`} className="particle" data-index={i}></span>
      ))}
      <article className="content">
        <p>Damnit stranger,</p>
        <p>You got lost in the <strong>404</strong> galaxy.</p>
        <button>Go back to earth.</button>
      </article>
    </div>
  );
}

export default Test;
