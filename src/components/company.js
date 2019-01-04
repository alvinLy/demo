import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import ScrollAnimation from 'react-animate-on-scroll';
import Itemcompany from './item-company';
import data from '../mocks/data-company';

class Company extends Component {
	constructor(props){
		super(props);

		this.state = {
			datas : data
		}
	}

	render() {
		const dataCom = this.state.datas;

		const elmCom = dataCom.map((item, index)=> {
			return (
				<Itemcompany key={index} data={item} index={index} />				
			);
		})

	    return (
    		<section className="colorlib-experience" data-section="experience" id="experience">
				<div className="colorlib-narrow-content">
					<Row>
						<Col md={6} mdOffset={3} mdPull={3}>
							<span className="heading-meta">Company History</span>
							<h2 className="colorlib-heading">Company History</h2>
						</Col>
					</Row>

					<Row>
						<Col md={12}>
							<div className="timeline-centered">
								{elmCom}

								<ScrollAnimation animateIn="fadeInUp">
									<article className="timeline-entry begin">
										<div className="timeline-entry-inner">
											<div className="timeline-icon color-none"></div>
										</div>
									</article>
								</ScrollAnimation>
							</div>
						</Col>
					</Row>
				</div>
			</section>
    	);
  	}
}

export default Company;
