import React, {PureComponent} from 'react';
import  styles from './index.less';
import Carousel from 'antd/es/carousel';
import 'antd/es/carousel/style/css';

class App extends PureComponent {
	constructor (props) {
		super (props);
		this.state = {};
	}
	
	componentDidMount () {
	
	}
	
	render () {
		const {jobs = [], showCount = 1} = this.props;
		const carouselProps = {
			dotPosition: 'right',
			autoplay: true,
			speed:1000,
			slidesToShow:showCount||1,
			slidesToScroll:1,
			dots:false,
		};
		
		return (<div className={styles.wrap}>
			<div className={styles.top}>
				最新职位
				{jobs.length > showCount
					?
					(<a href="#">更多</a>)
					: null}
			
			</div>
			
			
			<div className={styles.body}>
				<ul >
					<Carousel {...carouselProps}>
						{(jobs || []).map ((i, index) => {
							const {txt = '', link, address = '', pushTime = Date.now ()} = i;
							return (
								<li key={index}>
									<div className={styles.left}>
										<a href="#">{txt || ''}</a>
									</div>
									<div className={styles.center}>
										{address || ''}
									</div>
									<div className={styles.right}>
										{pushTime}
									</div>
								</li>
							);
						})}
					</Carousel>
				</ul>
			</div>
		</div>);
	}
	
	
}

export default App;
