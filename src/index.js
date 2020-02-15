import React, {PureComponent} from 'react';
import ReactDOM from 'react-dom';
import './base.css';
import  styles from './index.less';

import Nav from './components/Nav';
import Main from './components/Main';
import Slider from './components/Slider';
import Right from './components/Right';

class App extends PureComponent {
	constructor (props) {
		super (props);
		this.state = {
			jobs: [],
		};
	}
	
	componentWillMount () {
		const jobs = [];
		for (let i = 0; i < 10;i++) {
			jobs.push ({
				txt: 'job------------' + i,
				id: i,
				link: '#',
				address: '杭州' + i,
				pushTime: (i+1)+'小时前'
			});
		}
		this.setState ({
			jobs
		});
		
	}
	
	
	render () {
		const {jobs = [], } = this.state;
		const ScrollProps = {
			jobs,
			showCount:7,
		};
		return (<div className={styles.wrap}>
			<div className={styles.top}>
				<div className={styles.inner}>
					<Nav />
				</div>
			</div>
			<div className={styles.banner}>
				<div className={styles.bg}>
					<div className={styles.mask}/>
				</div>
				<div className={styles.inner}>
					<Main/>
				</div>
			</div>
			<div className={styles.body}>
				<div className={styles.left}>
					<Slider {...ScrollProps}/>
				</div>
				<div className={styles.right}>
					<Right/>
				</div>
			</div>
		
		
		</div>);
	}
}

function Render () {
	const Interval = setInterval (() => {
		let body = document.querySelector ('body');
		if (body) {
			clearInterval (Interval);
			let container = document.createElement ('div');
			body.appendChild (container);
			ReactDOM.render (<App  />, container);
		}
	}, 100);
}

Render ();
