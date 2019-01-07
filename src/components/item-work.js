import React, { Component } from 'react';
import { Col } from 'react-bootstrap';
import ScrollAnimation from 'react-animate-on-scroll';

class Itemwork extends Component {
	render() {
		const {data} = this.props;
		const index = this.props.index;

	    return (			
			<ScrollAnimation animateIn={data.animation} scrollableParentSelector='#work' delay={index * 200}>
				<Col md={6}>
					<div className="project" style={{backgroundImage: `url(${data.url_img})` }}>
						<div className="desc">
							<div className="con">
								<h3><a href={data.link} target="_blank" rel="noopener noreferrer">{data.name}</a></h3>
								<span>Website</span>
								<p className="icon">
									<span><a href={data.link} target="_blank" rel="noopener noreferrer"><i className="icon-share3" /></a></span>
								</p>
							</div>
						</div>
					</div>
				</Col>
			</ScrollAnimation>
    	);
  	}
}

export default Itemwork;
