import React, { Component } from 'react';
import { Col } from 'react-bootstrap';
import ScrollAnimation from 'react-animate-on-scroll';

class Itemskill extends Component {
	render() {
		const {data} = this.props;
		const index = this.props.index;

	    return (			
			<ScrollAnimation animateIn={data.animation} delay={index * 200}>
				<Col md={6}>
					<div className="progress-wrap">
						<h3>Photoshop</h3>
						<div className="progress">
							<div className={`progress-bar color-${index + 1}`} role="progressbar" aria-valuenow={65} aria-valuemin={0} aria-valuemax={100} style={{width: `${data.valuenow}%`}}>
								<span>{data.valuenow}%</span>
							</div>
						</div>
					</div>
				</Col>
			</ScrollAnimation>
    	);
  	}
}

export default Itemskill;
