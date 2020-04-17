import React from 'react';
import './../styles/anchor.css';

const Anchor = () => {
  return(
    <>
			<h2>Odsyłacze</h2>
			<div>
				<ul>
					<li><a href="#anchor">Kotwice</a></li>
					<li><a href="#car">Auta</a>
						<ul>
							<li><a href="#db9">Aston Martin DB9</a></li>
							<li><a href="#vulcan">Aston Martin Vulcan</a></li>
						</ul>
					</li>
				</ul>
			</div>
			<br></br><hr></hr><br></br>
			<div id="car">
				<p><b>Aston Martin</b> - brytyjski producent samochodów sportowych, wyścigowych, luksusowych i SUV-ów działający od 1913 roku z siedzibą w Gaydon.</p>

				<div>
					<h3 id="db9">Aston Martin DB9</h3>
					<figure>
						<img className="cars"src={require("./../pics/anchor/db9.jpg")} alt="db9"></img>
						<figcaption>Samochód sportowy klasy wyższej produkowany przez brytyjską markę Aston Martin w latach 2003 – 2016.</figcaption>
					</figure>
				</div>
				<br></br><hr></hr><br></br>
				<div>
					<h3 id="vulcan">Aston Martin Vulcan</h3>
					<figure>
						<img className="cars" src={require("./../pics/anchor/vulcan.jpg")} alt="vulcan"></img>
						<figcaption>Samochód z roku 2015 z silnikiem spalinowym o mocy 810 koni mechanicznych.</figcaption>
					</figure>
				</div>
			</div>
			<br></br><hr></hr><br></br>
			<div id="anchor">
				<h3>Kotwice</h3>

				<div id="red">
					<p><a href="#gray">Link do kotwicy dolnej</a></p>
					<figure>
						<img className="anchors" src={require("./../pics/anchor/red.jpg")} alt="red"></img>
						<figcaption>Kotwica czerwona</figcaption>
					</figure>
				</div>
				<br></br><hr></hr><br></br>
				<div>
					<p>
						Zdefiniowanie kotwicy w konkretnym miejscu dokumentu HTML
						i wskazanie tej kotwicy w linku do tego dokumentu
						spowoduje po jego otwarciu, przewinięcie -
						tak aby wiersz zawierający kotwicę znajdował się jak najbliżej górnej krawędzi okna przeglądarki.
						Aby było co przewijać dodamy dwa rysunki kotwic oraz linie puste,
						a następnie, zdefiniujemy dwie kotwice.
					</p>
				</div>
				<br></br><hr></hr><br></br>
				<div id="gray">
					<p><a href="#red">Link do kotwicy górnej</a></p>
					<figure>
						<img className="anchors" src={require("./../pics/anchor/gray.jpg")} alt="gray"></img>
						<figcaption>Kotwica szara</figcaption>
					</figure>
				</div>
			</div>
    </>
    );
}

export default Anchor;