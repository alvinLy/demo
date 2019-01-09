import React, { Component } from 'react';
import { Col } from 'react-bootstrap';
import ScrollAnimation from 'react-animate-on-scroll';

class Itemskill extends Component {
   	constructor(props){
      	super(props);

		this.state = {
			percentage: ''
		};
   	}

   	changeWidth(){
   		let width = this.props.data.valuenow;
   		this.setState({
	      	percentage: width
	    });
   	}

   	componentDidMount(){
   		this.timerID = setInterval( () =>
   			this.changeWidth(), 2500
   		);
   	}

	componentWillUnmount() {
		clearInterval(this.timerID);
	}

	render() {
		const {data} = this.props;
		const index = this.props.index;

	    return (			
			<ScrollAnimation animateIn={data.animation} delay={index * 200}>
				<Col md={6}>
					<div className="progress-wrap">
						<h3>{data.name}</h3>
						<div className="progress">
							<div className={`progress-bar color-${index + 1}`} 
								role="progressbar" 
								aria-valuenow={data.valuenow} 
								aria-valuemin={data.valuemin} 
								aria-valuemax={data.valuemax} 
								style={{width: `${this.state.percentage}%`}}>
								<span>{this.state.percentage}%</span>
							</div>
						</div>
					</div>
				</Col>
			</ScrollAnimation>
    	);
  	}
}

export default Itemskill;
