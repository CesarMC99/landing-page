import { Routes, Route } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import React, { useEffect, useState } from "react";
import "./prueba.css"

export const Prueba = () => {

    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
            {/* <div
                className={`cabecera ${isScrolled ? "scrolled" : ""}`}
            >
                Mi cabecera fija
            </div> */}
            <div className="contenido">
                <p>Lorem ipsum...</p>
                {/* Más contenido */}
                <div style={{ height: "200vh" }}>
                    <section style={{ marginTop: "100vh" }}>
                        Esta es la sección deseada.
                    </section>
                </div>
            </div>
        </>
    );
    {/* // return (
    //     <>
    //         <nav>
    //             <HashLink smooth to="#seccion-deseada">Ir a Sección</HashLink>
    //         </nav>
            
    //                 <div style={{ height: "200vh" }}>
    //                 <section id="seccion-deseada" style={{ marginTop: "100vh" }}>
    //                     Esta es la sección deseada.
    //                 </section>
    //                 </div>
                
                
            
    //     </>
    //   ); */}
}