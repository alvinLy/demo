import React, { Component } from 'react';
import { Row } from 'react-bootstrap';
import Itemskill from './item-skill';
import data from '../mocks/data-skill';

class Skill extends Component {
	constructor(props){
		super(props);

		this.state = {
			datas : data
		}
	}
   	render() {   	
		const dataSkill = this.state.datas;

		const elmSkill = dataSkill.map((item, index)=> {
			return (
				<Itemskill key={index} data={item} index={index} />				
			);
		})

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
						{elmSkill}
					</Row>
				</div>
			</section>
  		);
   	}
}

export default Skill;
