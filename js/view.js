NB.View = {};
NB.View.Welcome = function(resLength) {
	/*var _canvas = document.querySelector('#welcome'),
		_context = _canvas.getContext('2d');
		_resLength = resLength;*/
	//_context.fillStyle = '#ccc'
	var _loadingPage = document.querySelector('#welcome'),
		_loadingBar = document.querySelector('#welcome .loading_bar');

	this.finishLoading = function(callback) {
		console.log('finish loading');
		_loadingBar.innerHTML = 'finish loading';
		_loadingPage.className += ' opacity0'
		setTimeout(function(){
			_loadingPage.style['display'] = 'none';
			if(callback) callback();
		},3000);
	}
	
	this.updateLoading = function(i) {
		console.log(i);
		_loadingBar.style['width'] = i * 10 + 'px';
	}
}