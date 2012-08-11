var Tool = {};

// little loading tool
Tool.loading = function(opt) {
	var _resource = opt.resource, _resourceLength = _resource.length, _resObjList = [], _i = 0,
		loadingCallback = opt.loadingCallback, finishCallback = opt.finishCallback;

	for (var j = 0; j < _resourceLength; j++) {
		(function(item){
			var _resSrc = item, _resObj, ent;
			if (/jpg|png|gif$/.test(_resSrc)) {
				_resObj = new Image();
				ent = 'load';
			} else {
				_resObj = new Audio();
				ent = 'canplaythrougth';
			}
			_resObj.addEventListener(ent, function(e) {
				_i++;
				/*if() {
					_resObjList.push(_resObj);
				}*/
				//console.log(_i)
				if (loadingCallback) loadingCallback(_i);
				if (_i >= _resourceLength) {
					if (finishCallback) finishCallback();
				}
			});
			_resObj.src = _resSrc;
		})(_resource[j])
	}
};


// Simple JavaScript Templating
// John Resig - http://ejohn.org/ - MIT Licensed
(function(){
  var cache = {};
	
	this.tmpl = function tmpl(str, data){
		// Figure out if we're getting a template, or if we need to
		// load the template - and be sure to cache the result.
		var fn = !/\W/.test(str) ?
			cache[str] = cache[str] ||
				tmpl(document.getElementById(str).innerHTML) :
			
			// Generate a reusable function that will serve as a template
			// generator (and which will be cached).
			new Function("obj",
				"var p=[],print=function(){p.push.apply(p,arguments);};" +
				
				// Introduce the data as local variables using with(){}
				"with(obj){p.push('" +
				
				// Convert the template into pure JavaScript
				str
					.replace(/[\r\t\n]/g, " ")
					.split("<%").join("\t")
					.replace(/((^|%>)[^\t]*)'/g, "$1\r")
					.replace(/\t=(.*?)%>/g, "',$1,'")
					.split("\t").join("');")
					.split("%>").join("p.push('")
					.split("\r").join("\\'")
			+ "');}return p.join('');");
		
		// Provide some basic currying to the user
		return data ? fn( data ) : fn;
	};
})();