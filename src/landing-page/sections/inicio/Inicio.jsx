import { BarTop } from "./bar-top/BarTop"
import { Navigation } from "./navigation/Navigation"
import "./inicio.css"

export const Inicio = () => {
  return (
    <header className="header">
        <section id="inicio">
            <div className="conteiner">
                <BarTop />
                <Navigation />
                <div className="slogan">
                  {/* <div className="slogan-container-text"> */}
                    <h3 className="slogan-1">Soluciones Integrales</h3>
                    <h2 className="slogan-2">QUE CONSTRUYEN TUS SUEÑOS Y TRANSFORMAN TU ESPACIO</h2>
                  {/* </div> */}
                </div>
            </div>
        </section>
    </header>
  )
}