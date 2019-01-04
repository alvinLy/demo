import React, { Component } from 'react';
import { Row } from 'react-bootstrap';
import Itemwork from './item-work';
import data from '../mocks/data-work';

class Work extends Component {
	constructor(props){
		super(props);

		this.state = {
			datas : data
		}
	}

	render() {
		const dataWork = this.state.datas;

		const elmCom = dataWork.map((item, index)=> {
			return (
				<Itemwork data={item} key={index} index={index} />			
			);
		})

	    return (
    		<section className="colorlib-work" data-section="work" id="work">
				<div className="colorlib-narrow-content">
					<Row>
						<div className="col-md-6 col-md-offset-3 col-md-pull-3">
							<span className="heading-meta">My Work</span>
							<h2 className="colorlib-heading animate-box">Recent Projects</h2>
						</div>
					</Row>

					<Row>
						{ elmCom }
					</Row>
				</div>
			</section>
    	);
  	}
}

export default Work;
