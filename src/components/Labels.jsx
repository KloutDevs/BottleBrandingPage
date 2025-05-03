import GithubButton from './GithubButton';

export default function Labels() {
  return (
    <div className="pages">
      <div className="pages_wrapper">
        {/* Welcome page */}
        <div id="welcome-section" className="page page--welcome">
          <span className="message--sub text-xl font-outfit tracking-[0.3em] text-neutral-400 mb-6">
            DISTRIBUIDORA PREMIUM
          </span>
          <h1 className="message font-syncopate">
            Descubre el Arte
            <br />
            de la Bebida
          </h1>
          <p className="message--sub font-outfit max-w-xl">
            Navegue por la colección de bebidas que contamos en nuestra distribuidora. Cada marca cuenta una historia de
            calidad y tradición ofreciendo una experiencia diferente.
          </p>
        </div>

        {/* Second page */}
        <div id="second-section" className="page page--coca page--hidden">
          <span className="message--sub font-outfit tracking-[0.3em] text-neutral-400 mb-4">EDICIÓN CLÁSICA</span>
          <h2 className="message font-great-vibes cocaCola">Coca Cola</h2>
          <p className="message--sub font-outfit max-w-md">
            Coca Cola es más que una bebida; es una tradición que ha unido a generaciones. Con su sabor inconfundible y
            efervescencia característica, ofrece una experiencia refrescante e inolvidable. Perfecta para compartir en
            cualquier ocasión, representa el espíritu de unión y felicidad que define a Argentina.
          </p>
        </div>

        {/* Third page */}
        <div id="third-section" className="page page--fanta page--hidden">
          <span className="message--sub font-outfit tracking-[0.3em] text-neutral-400 mb-4">EDICIÓN CLÁSICA</span>
          <h2 className="message font-syncopate">Fanta</h2>
          <p className="message--sub font-outfit max-w-md">
            Fanta, con su vibrante sabor a naranja y burbujeante personalidad, es el compañero ideal para los momentos
            de diversión. Cada sorbo es una explosión de alegría y color, perfecta para alegrar tus días. Fanta celebra
            la creatividad y el espíritu juvenil de Argentina con cada burbuja.
          </p>
        </div>

        {/* Fourth page */}
        <div id="fourth-section" className="page page--sprite page--hidden">
          <span className="message--sub font-outfit tracking-[0.3em] text-neutral-400 mb-4">EDICIÓN CLÁSICA</span>
          <h2 className="message font-syncopate">Sprite</h2>
          <p className="message--sub font-outfit max-w-md">
            Sprite es la elección perfecta para aquellos que prefieren la frescura sencilla y auténtica. Con su mezcla
            de limón y lima, ofrece una claridad refrescante que enciende tus sentidos. Ideal para cualquier momento del
            día, Sprite captura la esencia de frescura y transparencia que tanto valoramos los argentinos.
          </p>
        </div>

        {/* Fifth page */}
        <div id="five-section" className="page page--end page--hidden justify-center items-center">
          <h2 className="message--sub font-outfit tracking-[0.2em] mb-8">CONÉCTATE CON NOSOTROS</h2>
          <div className="social-links font-outfit mb-8">
            <a href="https://www.instagram.com/s_nahuuu/" className="message--sub hover:text-white transition-colors clickable">
              INSTAGRAM
            </a>
            <a href="https://www.linkedin.com/in/nahuel-schmidt-720b57263/" className="message--sub hover:text-white transition-colors clickable">
              LINKEDIN
            </a>
            <a href="https://www.threads.net/@s_nahuuu" className="message--sub hover:text-white transition-colors clickable">
              THREADS
            </a>
          </div>
          <div className="w-full max-w-xs clickable">
            <GithubButton />
          </div>
        </div>
      </div>
    </div>
  );
}
