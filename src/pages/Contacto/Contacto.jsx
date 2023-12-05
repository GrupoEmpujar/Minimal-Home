import React, { useEffect } from 'react';
import Nosotros from '../../components/Nosotros/Nosotros';



const Contacto = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pagina-principal">
      <Nosotros
        imagen="/Contacto/image/usuarioo.png" // Puedes ajustar esto según tus necesidades
        nombre="Lucas Colque"
        Contacto="linkedin.com/in/lucas-colque"
      />
      <Nosotros
        imagen="/Contacto/image/usuarioo.png"
        nombre="Juan Celerier"
        Contacto="linkedin.com/in/juan-celerier-978836281"
      />
      <Nosotros
        imagen="/Contacto/image/usuarioo.png"
        nombre="Adrian Garcia"
        Contacto="linkedin.com/in/adrian-garcia10"
      />
      <Nosotros
        imagen="/Contacto/image/usuarioo.png"
        nombre="Vivian Figueredo"
        Contacto="linkedin.com/in/vivianfigueredo22"

      />
    </div>
  );
};

export default Contacto;
