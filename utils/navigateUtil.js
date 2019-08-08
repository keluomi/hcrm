export default class navigateUtil{
	
	/**
	 * 
	 * 保留当前页面，跳转到应用内的某个页面
	 * @param {Object} url
	 * @param {Object} successCall
	 * @param {Object} completeCall
	 * @param {Object} failCall
	 */
	static navigateTo(url, successCall, completeCall, failCall){
		uni.navigateTo({
			animationType: 'pop-in',
			animationDuration: 200,
		    url: url,
			success: successCall,
			complete: completeCall,
			fail: failCall
		});
	}
	/**
	 * 
	 * 关闭当前页面，跳转到应用内的某个页面。
	 * @param {Object} url
	 * @param {Object} successCall
	 * @param {Object} completeCall
	 * @param {Object} failCall
	 */
	static redirectTo(url, successCall, completeCall, failCall){
		uni.redirectTo({
		    url: url,
			success: successCall,
			complete: completeCall,
			fail: failCall
		});
	}
	
	/**
	 * 
	 * 关闭所有页面，打开到应用内的某个页面。
	 * @param {Object} url
	 * @param {Object} successCall
	 * @param {Object} completeCall
	 * @param {Object} failCall
	 */
	static reLaunch(url, successCall, completeCall, failCall){
		uni.reLaunch({
		    url: url,
			success: successCall,
			complete: completeCall,
			fail: failCall
		});
	}
	
	/**
	 * 
	 * 跳转到 tabBar 页面，并关闭其他所有非 tabBar 页面
	 * @param {Object} url
	 * @param {Object} successCall
	 * @param {Object} completeCall
	 * @param {Object} failCall
	 */
	static switchTab(url, successCall, completeCall, failCall){
		uni.switchTab({
		    url: url,
			success: successCall,
			complete: completeCall,
			fail: failCall
		});
	}
	
	/**
	 * 关闭当前页面，返回上一页面或多级页面。可通过 getCurrentPages() 获取当前的页面栈
	 * @param {Object} delta 返回层级
	 */
	static navigateBack(delta){
		uni.navigateBack({
			animationType: 'pop-out',
			animationDuration: 200,
		    delta: delta
		});
	}
}