import React, { Component } from 'react';
import ScrollAnimation from 'react-animate-on-scroll';

class Itemcompany extends Component {
	render() {
		const {data} = this.props;
		const index = this.props.index;

	    return (
	    	<ScrollAnimation animateIn={data.animation} delay={index * 200}>
				<article className="timeline-entry">
					<div className="timeline-entry-inner">
						<div className={`timeline-icon color-${index + 1}`}>
							<i className="icon-pen2" />
						</div>
						<div className="timeline-label">
							<h2><a href={data.link} target="_blank" rel="noopener noreferrer">{data.name}</a> <span>{data.time}</span></h2>
							<p>Address: {data.address}</p>
							<p>Responsibility: {data.responsibility}</p>
						</div>
					</div>
				</article>
			</ScrollAnimation>
    	);
  	}
}

export default Itemcompany;
