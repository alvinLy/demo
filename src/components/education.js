import React, { Component } from 'react';
import { Row, Col, Panel, PanelGroup } from 'react-bootstrap';
import ScrollAnimation from 'react-animate-on-scroll';

class Education extends Component {
	constructor(props, context) {
		super(props, context);

			this.handleSelect = this.handleSelect.bind(this);

			this.state = {
			activeKey: '1'
		};
	}

	handleSelect(activeKey) {
		this.setState({ activeKey });
	}

	render() {
	    return (
    		<section className="colorlib-education" data-section="education" id="education">
				<div className="colorlib-narrow-content">
					<Row>
						<Col md={6} mdOffset={3} mdPull={3}>
							<span className="heading-meta">Education</span>
							<h2 className="colorlib-heading animate-box">Education</h2>
						</Col>
					</Row>

					<Row>
						<ScrollAnimation animateIn="fadeInLeft">
							<Col md={12}>
								<div className="fancy-collapse-panel">
									<PanelGroup accordion id="accordion" activeKey={this.state.activeKey} onSelect={this.handleSelect}>
										<Panel eventKey="1">
											<Panel.Heading>
												<Panel.Title toggle>Computer Science Engineer</Panel.Title>
											</Panel.Heading>

											<div className="panel-collapse">
												<Panel.Body collapsible>
													<div className="row">
														<div className="col-md-6">
															<p>Duration: 2011~2014</p>
														</div>
														<div className="col-md-6">
															<p>University / School: Ho Chi Minh City University Of Foreign Languages – Information Technology</p>
														</div>
													</div>
												</Panel.Body>
											</div>
										</Panel>
									</PanelGroup>
								</div>
							</Col>
						</ScrollAnimation>
					</Row>
				</div>
			</section>
    	);
  	}
}

export default Education;