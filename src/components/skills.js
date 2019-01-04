import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import ScrollAnimation from 'react-animate-on-scroll';

class Skill extends Component {
   	render() {   	
      	return (
  			<section className="colorlib-skills" data-section="skill" id="skill">
				<div className="colorlib-narrow-content">
					<Row>
						<div className="col-md-6 col-md-offset-3 col-md-pull-3">
							<span className="heading-meta">My Specialty</span>
							<h2 className="colorlib-heading animate-box">My Skills</h2>
						</div>
					</Row>

					<Row>
						<ScrollAnimation animateIn="fadeInLeft">
							<Col md={6}>
								<div className="progress-wrap">
									<h3>Photoshop</h3>
									<div className="progress">
										<div className="progress-bar color-1" role="progressbar" aria-valuenow={65} aria-valuemin={0} aria-valuemax={100} style={{width: '65%'}}>
											<span>65%</span>
										</div>
									</div>
								</div>
							</Col>
						</ScrollAnimation>

						<ScrollAnimation animateIn="fadeInRight">
							<Col md={6}>
								<div className="progress-wrap">
									<h3>Illustrator</h3>
									<div className="progress">
										<div className="progress-bar color-2" role="progressbar" aria-valuenow={45} aria-valuemin={0} aria-valuemax={100} style={{width: '45%'}}>
											<span>45%</span>
										</div>
									</div>
								</div>
							</Col>
						</ScrollAnimation>

						<ScrollAnimation animateIn="fadeInLeft">
							<Col md={6}>
								<div className="progress-wrap">
									<h3>HTML5 Tag</h3>
									<div className="progress">
										<div className="progress-bar color-3" role="progressbar" aria-valuenow={80} aria-valuemin={0} aria-valuemax={100} style={{width: '80%'}}>
											<span>80%</span>
										</div>
									</div>
								</div>
							</Col>
						</ScrollAnimation>

						<ScrollAnimation animateIn="fadeInRight">
							<Col md={6}>
								<div className="progress-wrap">
									<h3>CSS3</h3>
									<div className="progress">
										<div className="progress-bar color-4" role="progressbar" aria-valuenow={80} aria-valuemin={0} aria-valuemax={100} style={{width: '80%'}}>
											<span>80%</span>
										</div>
									</div>
								</div>
							</Col>
						</ScrollAnimation>

						<ScrollAnimation animateIn="fadeInLeft">
							<Col md={6}>
								<div className="progress-wrap">
									<h3>jQuery</h3>
									<div className="progress">
										<div className="progress-bar color-5" role="progressbar" aria-valuenow={65} aria-valuemin={0} aria-valuemax={100} style={{width: '65%'}}>
											<span>65%</span>
										</div>
									</div>
								</div>
							</Col>
						</ScrollAnimation>

						<ScrollAnimation animateIn="fadeInRight">
							<Col md={6}>
								<div className="progress-wrap">
									<h3>WordPress</h3>
									<div className="progress">
										<div className="progress-bar color-6" role="progressbar" aria-valuenow={55} aria-valuemin={0} aria-valuemax={100} style={{width: '55%'}}>
											<span>55%</span>
										</div>
									</div>
								</div>
							</Col>
						</ScrollAnimation>

						<ScrollAnimation animateIn="fadeInLeft">
							<Col md={6}>
								<div className="progress-wrap">
									<h3>PHP</h3>
									<div className="progress">
										<div className="progress-bar color-7" role="progressbar" aria-valuenow={45} aria-valuemin={0} aria-valuemax={100} style={{width: '50%'}}>
											<span>45%</span>
										</div>
									</div>
								</div>
							</Col>
						</ScrollAnimation>

						<ScrollAnimation animateIn="fadeInRight">
							<Col md={6}>
								<div className="progress-wrap">
									<h3>SEO</h3>
									<div className="progress">
										<div className="progress-bar color-8" role="progressbar" aria-valuenow={60} aria-valuemin={0} aria-valuemax={100} style={{width: '60%'}}>
											<span>60%</span>
										</div>
									</div>
								</div>
							</Col>
						</ScrollAnimation>

						<ScrollAnimation animateIn="fadeInLeft">
							<Col md={6}>
								<div className="progress-wrap">
									<h3>React JS</h3>
									<div className="progress">
										<div className="progress-bar color-9" role="progressbar" aria-valuenow={40} aria-valuemin={0} aria-valuemax={100} style={{width: '40%'}}>
											<span>40%</span>
										</div>
									</div>
								</div>
							</Col>
						</ScrollAnimation>
					</Row>
				</div>
			</section>
  		);
   	}
}

export default Skill;
