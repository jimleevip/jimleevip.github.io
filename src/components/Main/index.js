import React, {PureComponent} from 'react';
import  styles from './index.less';

class App extends PureComponent {
	constructor (props) {
		super (props);
		this.state = {
			value: '',
			hots: [
				{id: 1, label: 'JAVA',},
				{id: 2, label: 'IOS',},
				{id: 3, label: '数据',},
				{id: 4, label: '安全',},
				{id: 5, label: '搜索',},
				{id: 6, label: '算法',},
				{id: 7, label: '运营',},
			]
		};
	}
	
	onClickHot = i => {
		alert(JSON.stringify(i))
	};
	
	render () {
		const {value, hots = []} = this.state;
		return (<div className={styles.wrap}>
			<div className={styles.f54}>
				If not now, when?
			</div>
			<div className={styles.f54}>
				If not me, who?
			</div>
			<div className={styles.f38}>
				此时此刻，非我莫属！
			</div>
			<div className={styles.search}>
				<input type="text" maxLength="30" placeholder="请输入职位关键词" onChange={e => {
					this.setState ({value: e.target.value});
				}}/>
				<button onClick={e => {
					alert (value);
				}}>搜索
				</button>
			</div>
			<div className={styles.hotSearch}>
				热门搜索：
				<ul>
					{(hots || []).map (i => {
						return (<li key={i.id}><a href="javascript:void(0)" onClick={e => this.onClickHot (i)}>{i.label}</a></li>);
					})}
				</ul>
			</div>
		</div>);
	}
}

export default App;
