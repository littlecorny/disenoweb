// src/components/Banner.jsx
import './Banner.css';

function Banner() {
  return (
    <section className="banner">
        <img className="image-banner" src="/images/Logo.png" alt="Logo" />

      <video className="banner-video" autoPlay loop muted playsInline>
        <source src="/images/videofondo.mp4" type="video/mp4" />
        Tu navegador no soporta el video.
      </video>
      <div className="banner-overlay">
        <h1 className="banner-title">CARLA PAJUELO PANIAGUA</h1>
      </div>
    </section>
  );
}

export default Banner;
