import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import ScrollAnimation from 'react-animate-on-scroll';

class About extends Component {
   	render() {
      	return (
			<section className="colorlib-about" data-section="home" id="home">
				<div className="colorlib-narrow-content">
					<Row>
						<Col md={12}>
							<ScrollAnimation animateIn="fadeInLeft">
								<Row className="row-bottom-padded-sm">
									<Col md={12}>
										<div className="about-desc">
											<span className="heading-meta">About Us</span>
											<h2 className="colorlib-heading">Who Am I?</h2>
											<div className="row-desc">
												<strong>Hi I&#39;m Vinh An.</strong>
												<p>I come from Tien Giang province. <br/>Now I living and working in Ho Chi Minh City, I have more 2 years experience front-end developer. <br/>This is my profile</p>
											</div>
											<div className="row-desc">
												<strong>My career goal:</strong>
												<ul className="list-goal">
													<li>Become the official staff of the company.</li>
													<li>Stable job.</li>
													<li>The opportunity for career advancement.</li>
													<li>Learn more experience on the job.</li>
												</ul>
											</div>
											<div className="row-desc">
												<strong>Foreign Languages:</strong>
												<p>Basic communicate English.</p>
											</div>
											<div className="row-desc">
												<strong>Personal Attributes:</strong>
												<ul className="list-goal">
													<li>Good communicate with everyone.</li>
													<li>Be able to suffer job’s pressure.</li>
													<li>Enthusiasm and responsibility with tasks.</li>
													<li>Good at teamwork.</li>
													<li>Being honest, hard-working, detail-oriented.</li>
												</ul>
											</div>
											<div className="row-desc">
												<strong>Interests:</strong>
												<ul className="list-goal">
													<li>Traveling.</li>
													<li>Researching and updating new technologies.</li>
													<li>watching films in free time.</li>
													<li>Sport: badminton, football, fitness.</li>
												</ul>
											</div>
										</div>
									</Col>
								</Row>
							</ScrollAnimation>	
						</Col>
					</Row>
				</div>
			</section>
      	);
   	}
}

export default About;
