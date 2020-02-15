import React, {PureComponent} from 'react';
import  styles from './index.less';

class App extends PureComponent {
	constructor (props) {
		super (props);
		this.state = {
			items: [
				{
					img: 'https://img.alicdn.com/tfs/TB1SbxarYj1gK0jSZFOXXc7GpXa-2546-848.png',
					width: '179px',
					link: 'https://www.aliyun.com/careers'
				},
				{
					img: 'https://img.alicdn.com/tfs/TB18tFCCH2pK1RjSZFsXXaNlXXa-240-34.svg',
					width: '260px',
					link: 'https://job.alibaba.com/zhaopin/informationPlatformBu.htm?'
				}
			]
		};
	}
	
	render () {
		const {items = []} = this.state;
		return (<div className={styles.wrap}>
			{(items || []).map ((i, index) => {
				const {img, width, link} = i;
				return (<a key={index} href={link} target="_blank">
					<img src={img} alt="" width={width||'100px'}/>
				</a>);
			})}
		</div>);
	}
}

export default App;
