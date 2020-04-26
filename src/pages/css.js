import React from 'react';
import './../styles/css.scss';
import { Helmet } from 'react-helmet';

const Css = () => {
  const style = {
    border: '5px solid green',
    color: 'red',
    margin: '5px'
  }
  return (
    <>
    <Helmet>
      <title>CSS</title>
    </Helmet>
      <div style={style}>
        <p>Tekst umieszczony w akapicie</p>
        <p>Tekst umieszczony w akapicie</p>
      </div>
      <p>Tekst umieszczony poza akapitem</p> <hr></hr>
      <div className="div small">
        <p>Ten tekst powinien być napisany zgodnie ze stylem zdefiniowanym dla akapitu, a więc czcionką Verdana, jeżeli nie ma jej w
          komputerze, to czcionką Arial, jeżeli i tej czcionki nie ma, to inną czcionką bezszeryfową. Kolor czcionki powinien być zielony, rozmiar
          - 12 pikseli. Akapit powinien posiadać obramowanie narysowane linią ciągłą o grubości 2 piksele, koloru żółtego.</p>
      </div>
      <div className="div medium">
        <p>Ten tekst powinien być napisany zgodnie ze stylem zdefiniowanym dla akapitu, a więc czcionką Verdana, jeżeli nie ma jej
          w komputerze, to czcionką Arial, jeżeli i tej czcionki nie ma, to inną czcionką bezszeryfową. Kolor czcionki powinien być czerowny, rozmiar
          - 14 pikseli. Akapit powinien posiadać obramowanie narysowane linią ciągłą o grubości 3 piksele, koloru pomarańczowego.</p>
      </div>
      <div className="div large">
        <p>Ten tekst powinien być napisany zgodnie ze stylem zdefiniowanym dla akapitu, a więc czcionką Verdana, jeżeli nie ma jej
          w komputerze, to czcionką Arial, jeżeli i tej czcionki nie ma, to inną czcionką bezszeryfową. Kolor czcionki powinien być niebieski, rozmiar
          - 16 pikseli. Akapit powinien posiadać obramowanie narysowane linią ciągłą o grubości 4 piksele, koloru jasnoniebieskieigo.</p>
      </div>
    </>
  );
}

export default Css;