import React, { Component } from 'react';
import { Entity } from 'aframe-react';
import { connect } from 'react-redux';
import { setLocation, setSignPostR, setSignPostL } from '../../redux/actions/actions'

class Button extends Component {
	render() {

		this.handleLeftClick = (e) => {
			let { dispatch } = this.props;
			let { destination } = this.props.signpost.left;
			dispatch(setLocation(destination));
			dispatch(setSignPostR(destination));
			dispatch(setSignPostL(destination));
		}

		this.handleRightClick = (e) => {
			let { dispatch } = this.props;
			let { destination } = this.props.signpost.right;
			dispatch(setLocation(destination));
			dispatch(setSignPostR(destination));
			dispatch(setSignPostL(destination));
		}

		this.handleClick = (e) => {
			let {dispatch} = this.props;
			dispatch(setLocation('castle'));
			dispatch(setSignPostR('castle'));
			dispatch(setSignPostL('castle'));
		}

		this.renderSignPostRight = (e) => {
			if(this.props.signpost.right){
				let loco = this.props.location;
				let { isVisible, position, rotation, textvalue } = this.props.signpost.right;
				switch (loco) {
					case 'castle':
					case 'castle2':
						return (
							<Entity position={position} events={{click: this.handleRightClick}} visible={isVisible} rotation={rotation}>
								<Entity geometry={{primitive: 'plane', width: 1.5, height: .5 }}
									position={{x: 0, y: 1.25, z: 0}}
									material={{color: '#200f08', side:`double`, shader:`flat` }}
									text={{value: textvalue, align: `center`, wrapCount: 10 }}
									sound={{ on: 'click', src: '#click-sound'}}
									/>
								<Entity geometry={{primitive: 'cylinder', radius: 0.1, height: 4}}
									material={{color: '#200f08', shader:`flat`}}
									position={{x: 0, y: -1, z: 0}}
									/>
							</Entity>
						)
					default:
						return (
							<Entity position={position} events={{click: this.handleRightClick}} visible={isVisible} rotation={rotation}>
								<Entity geometry={{primitive: 'plane', width: 1.5, height: .5 }}
									position={{x: 0, y: 1.25, z: 0}}
									material={{color: '#200f08', side:`double`, shader:`flat` }}
									text={{value: textvalue, align: `center`, wrapCount: 10 }}
									sound={{ on: 'click', src: '#click-sound'}}
									/>
								<Entity geometry={{primitive: 'cylinder', radius: 0.1, height: 4}}
									material={{color: '#200f08', shader:`flat`}}
									position={{x: 0, y: -1, z: 0}}
									/>
							</Entity>
						)
				}
			}
		}

		this.renderSignPostLeft = (e) => {
			if(this.props.signpost.left){
				let loco = this.props.location;
				let { isVisible, position, rotation, textvalue } = this.props.signpost.left;

				switch (loco) {
					case 'castle':
					case 'castle2':
						return (
							<Entity position={position} events={{click: this.handleLeftClick}} visible={isVisible} rotation={rotation}>
								<Entity geometry={{primitive: 'plane', width: 1.5, height: .5}}
									position={{x: 0, y: 1.25, z: 0}}
									material={{color: '#200f08', side:`double`, shader:`flat` }}
									text={{value: textvalue, align: `center`, wrapCount: 10 }}
									sound={{ on: 'click', src: '#click-sound'}}
									/>
								<Entity geometry={{primitive: 'cylinder', radius: 0.1, height: 2.8}}
									material={{color: '#200f08', shader:`flat` }}
									position={{x: 0, y: -0.3, z: 0}}
									/>
							</Entity>
						)
					case 'darkwoods':
						return (
							<Entity position={position} events={{click: this.handleLeftClick}} visible={isVisible} rotation={rotation}>
								<Entity geometry={{primitive: 'plane', width: 1.5, height: .5 }}
									position={{x: 0, y: 1.25, z: 0}}
									material={{color: '#200f08', side:`double`, shader:`flat` }}
									text={{value: textvalue, align: `center`, wrapCount: 10 }}
									sound={{ on: 'click', src: '#click-sound'}}
									/>
								<Entity geometry={{primitive: 'cylinder', radius: 0.1, height: 4}}
									material={{color: '#200f08', shader:`flat`}}
									position={{x: 0, y: -1, z: 0}}
									/>
							</Entity>
						)
					default:
						return (
							<Entity position={position} events={{click: this.handleLeftClick}} visible={isVisible} rotation={rotation}>
								<Entity geometry={{primitive: 'plane', width: 1.5, height: .5}}
									position={{x: 0, y: 1.25, z: 0}}
									material={{color: '#200f08', side:`double`, shader:`flat` }}
									text={{value: textvalue, align: `center`, wrapCount: 10 }}
									sound={{ on: 'click', src: '#click-sound'}}
									/>
								<Entity geometry={{primitive: 'cylinder', radius: 0.1, height: 2.8}}
									material={{color: '#200f08', shader:`flat` }}
									position={{x: 0, y: -.4, z: 0}}
									/>
							</Entity>
						)
					}
			}
		}

		return(
			<Entity>
				<audio id="click-sound" alt="" crossOrigin="anonymous" src="https://cdn.aframe.io/360-image-gallery-boilerplate/audio/click.ogg"></audio>
				{ this.renderSignPostRight() }
				{ this.renderSignPostLeft() }
			</Entity>
		)
	}
}
export default connect(
  (state) => {
    return state;
  }
)(Button);
/*
// { this.renderSignPostLeft() }

event-set__1={{_event: 'mousedown', property: 'scale', to:'1 1 1' }}
event-set__2={{_event: 'mouseup', property: 'scale', to:'1.2 1.2 1' }}
event-set__3={{_event: 'mouseenter', property: 'scale', to:'1.2 1.2 1' }}
event-set__4={{_event: 'mouseleave', property: 'scale', to:'1 1 1' }}


<Entity primitive="a-cursor" animation__click={{property: 'scale', startEvents: 'click', from: '0.1 0.1 0.1', to: '1 1 1', dur: 150}}/>

<Entity class="link"
	geometry={{ primitive: 'plane', height: 1, width 1}}
	material={{ shader: flat, src: ${thumb}}}
	event-set__1={{_event: mousedown; scale: 1 1 1}}
	event-set__2="_event: mouseup; scale: 1.2 1.2 1"
	event-set__3="_event: mouseenter; scale: 1.2 1.2 1"
	event-set__4="_event: mouseleave; scale: 1 1 1"
	set-image="on: click; target: #image-360; src: ${src}"
	sound="on: click; src: #click-sound"/>

	<Entity
		geometry={{primitive: 'box', width: 1, height: 4, depth: 0.2 }}
		position={{x: 0, y: 0, z: -5}}
		material= {{color: '#01a124'}}
		events={{click: this.handleClick}}
		sound={{ on: 'click', src: '#click-sound'}}
		/>


<script src="raw.githubusercontent.com/gasolin/aframe-href-component‌​/…; <script type="text/javascript" src="webvr.js"></script> <script src="rawgit.com/ngokevin/aframe-text-component/master/dist/…‌​; </head> <body> <a-scene> <a-box width="1" height="0.4" position="0 0 0" depth="0.0" color="red"> <a-entity text="text: What's up" scale="0.2 0.2 0.2" color="blue" position="-0.3 0.01 0"> </a-entity> </a-box> </a-scene>

 */
