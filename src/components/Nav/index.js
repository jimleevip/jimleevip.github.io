import React, {PureComponent} from 'react';
import  styles from './index.less';

class App extends PureComponent {
	
	
	render () {
		const navs = [
			{isActived: true, link: window.location.href, txt: '首  页'},
			{link: 'https://job.alibaba.com/zhaopin/positionList.htm', txt: '社会招聘'},
			{link: 'https://campus.alibaba.com', txt: '校园招聘'},
			{link: 'https://job.alibaba.com/zhaopin/apply.htm', txt: '个人中心'},
		];
		
		
		return (<div className={styles.wrap}>
			<div className={styles.left}>
				<a className={styles.icon} target="_blank" href={window.location.href}/>
				<div className={styles.d}/>
				<div className={styles.txt}>社招官网</div>
				<div className={styles.navs}>
					{navs.map ((i, index) => <a
						className={i.isActived ? styles.nav1 : styles.nav}
						key={index}
						href={i.link}
						target={i.isActived ? '_self' : '_blank'}
					>{i.txt}</a>)}
				</div>
			</div>
			<div className={styles.right}>
				<div>欢迎来到阿里巴巴集团招聘！</div>
				<a href="" target="_blank">登录</a>
				&nbsp;|&nbsp;
				<a href="" target="_blank">注册</a>
			</div>
		</div>);
	}
}

export default App;
