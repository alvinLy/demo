import React, { Component } from 'react';
import { Row, Col, Button } from 'react-bootstrap';
import ScrollAnimation from 'react-animate-on-scroll';

class Contact extends Component {
	render() {
	    return (
    		<section className="colorlib-contact" data-section="contact" id="contact">
				<div className="colorlib-narrow-content">
					<Row>
						<Col md={6} mdOffset={3} mdPull={3}>
							<span className="heading-meta">Get in Touch</span>
							<h2 className="colorlib-heading">Contact</h2>
						</Col>
					</Row>

					<Row>
						<Col md={5}>
							<ScrollAnimation animateIn="fadeInLeft">
								<div className="colorlib-feature colorlib-feature-sm">
									<div className="colorlib-icon">
										<i className="icon-globe-outline" />
									</div>
									<div className="colorlib-text">
										<p><a href="mailto:anlvin.huflit@gmail.com">anlvin.huflit@gmail.com</a></p>
									</div>
								</div>
							</ScrollAnimation>

							<ScrollAnimation animateIn="fadeInLeft">
								<div className="colorlib-feature colorlib-feature-sm">
									<div className="colorlib-icon">
										<i className="icon-map" />
									</div>
									<div className="colorlib-text">
										<p>80/10  Ho Thi Ky Street, Ward 1, District 10, HCM city.</p>
									</div>
								</div>
							</ScrollAnimation>

							<ScrollAnimation animateIn="fadeInLeft">
								<div className="colorlib-feature colorlib-feature-sm">
									<div className="colorlib-icon">
										<i className="icon-phone" />
									</div>
									<div className="colorlib-text">
										<p><a href="tel:+843741705656" className="phone-mobile">+84 374 170 565</a></p>
									</div>
								</div>
							</ScrollAnimation>
						</Col>

						<Col md={7} mdPush={1}>
							<Row>
								<ScrollAnimation animateIn="fadeInRight">
									<Col md={10} mdOffset={1} mdPull={1}>
										<form id="formContact">
											<div className="form-group">
												<input type="text" id="contact-name" className="form-control" placeholder="Name *" />
											</div>
											<div className="form-group">
												<input type="text" id="contact-email" className="form-control" placeholder="Email *" />
											</div>
											<div className="form-group">
												<input type="text" id="contact-phone" className="form-control" placeholder="Phone" />
											</div>
											<div className="form-group">
												<textarea id="message" cols={30} rows={7} className="form-control" placeholder="Message" />
											</div>
											<div className="form-group">
												<Button bsStyle="primary" type="submit" className="btn-send-message">Send Message</Button>
											</div>
										</form>
									</Col>
								</ScrollAnimation>
							</Row>
						</Col>
					</Row>
				</div>
			</section>
    	);
  	}
}

export default Contact;
