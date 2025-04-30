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
            Navegue por nuestra colección exclusiva de bebidas premium. Cada botella cuenta una historia de calidad y
            tradición.
          </p>
        </div>

        {/* Second page */}
        <div id="second-section" className="page page--headband page--hidden">
          <span className="message--sub font-outfit tracking-[0.3em] text-neutral-400 mb-4">EDICIÓN CLÁSICA</span>
          <h2 className="message font-syncopate">Zero Sugar</h2>
          <p className="message--sub font-outfit max-w-md">
            Refinamiento sin compromiso. Una experiencia perfectamente equilibrada para el paladar moderno.
          </p>
        </div>

        {/* Third page */}
        <div id="third-section" className="page page--sounds page--hidden">
          <span className="message--sub font-outfit tracking-[0.3em] text-neutral-400 mb-4">EDICIÓN ESPECIAL</span>
          <h2 className="message font-syncopate">Cherry Edition</h2>
          <p className="message--sub font-outfit max-w-md">
            Una fusión sofisticada que desafía lo convencional. Descubre una nueva dimensión de sabor.
          </p>
        </div>

        {/* Fourth page */}
        <div id="four-section" className="page page--battery page--hidden">
          <h2 className="message font-syncopate">Tu Elección Premium</h2>
          <button className="comprar font-outfit">EXPLORAR COLECCIÓN</button>
        </div>

        {/* Fifth page */}
        <div id="five-section" className="page page--construction page--hidden">
          <h2 className="message--sub font-outfit tracking-[0.2em] mb-8">CONÉCTATE CON NOSOTROS</h2>
          <div className="social-links font-outfit">
            <a href="#" className="message--sub">
              INSTAGRAM
            </a>
            <a href="#" className="message--sub">
              FACEBOOK
            </a>
            <a href="#" className="message--sub">
              TWITTER
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
