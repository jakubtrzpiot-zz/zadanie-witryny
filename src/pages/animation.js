import React, {Component} from 'react';
import EventListener from 'react-event-listener';
import "./../styles/animation.scss";

class Animation extends Component {
	componentDidMount(){
		document.title = "Animacja"
	}
	moveCar = () => {
		let pos = 0;
		let car = document.getElementById("car");
		const interval = setInterval(function() {
			if (car.style.marginLeft === 100 + '%') clearInterval(interval);
			pos = pos + 0.1;
			car.style.marginLeft = pos + "%";
		}, 10);
	}
	render() {
		return(
			<>
				<EventListener target="btn" onClick={this.moveCar} />
				<h3>To Auto Jedzie</h3>
				<button id="btn">Odpal auto</button>
				<div><img id="car" src={require("./../pics/animation/car.jpg")} alt=""></img></div>
			</>
		);
	}
}

export default Animation;