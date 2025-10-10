import Header from "../components/Header";
import Footer from "../components/Footer";
import "./Home.css";

function Home() {
  return (
    <div>
      <Header />

      <main className="home-main">
        {/* Banner con video de fondo */}
        <section className="banner">
          <video className="banner-video" autoPlay loop muted playsInline>
            <source src="/public/images/videofondo.mp4" type="video/mp4" />
            Tu navegador no soporta el video.
          </video>
          <div className="banner-overlay">
            <h1 className="banner-title">Carla Pajuelo Paniagua</h1>
          </div>
        </section>

        {/* Contenido principal */}
        <section className="home-content">
          <h2 className="home-title">Sobre Nosotros</h2>
          <p className="home-text">
            Somos una empresa comprometida con la innovación y la calidad.
          </p>

          <div className="home-card">
            <h3>Nuestros Valores</h3>
            <ul className="home-list">
              <li>Compromiso</li>
              <li>Calidad</li>
              <li>Innovación</li>
            </ul>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default Home;
