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


Tool.Speller = function(){
    
    var CModel = {},
        alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
    
    function uniq(arr){
        return arr.filter(function(item,idx){
            return idx === arr.indexOf(item);
        });
    }
    function fetchDictWithWoker(){
        var worker = new Worker("worker.js");
        worker.postMessage({cmd:"fetchDict"});
        worker.onmessage = function(data){
        
        }
    }
    function fetchDict(){
        var xhr = new XMLHttpRequest();
        xhr.open("GET","big.txt");
        xhr.onload = function(data){
            generateDict(xhr.response);
        }
        xhr.send();
    }

    function generateDict(text){
        
        var re = /[a-z]+/g,
            text = text || tempDict,
            text = text.toLowerCase(),
            word;

        while(word = re.exec(text)){
            CModel[word] = CModel[word] ? CModel[word]+1 : 1;
            }
        console.log("finish generating");
    }

    function generateEdit1(word){
        var i=0,
            len = word.length,
            results = [];
        //delete    
        for(;i<len;i++){
            results.push(word.slice(0, i) + word.slice(i+1));
        }
        //transpose
        for(i=0;i<len-1;i++){
            results.push(word.slice(0, i) + word.slice(i+1, i+2) + word.slice(i, i+1) + word.slice(i+2));
        }
        //replace
        for(i=0;i<len;i++){
            alphabet.forEach(function(letter){
                results.push(word.slice(0,i) + letter + word.slice(i+1));
            }); 
        }
        //insert
        for(i=0;i<len+1;i++){
            alphabet.forEach(function(letter){
                results.push(word.slice(0,i) + letter + word.slice(i) );
            });     
        }
        return uniq(results);
    }

    function generateEdit2(word){
        var results = generateEdit1(word),
            Arr = [],
            tempArr;
        results.forEach(function(letter,idx){
            tempArr = getKnownWords( generateEdit1(letter) );
            tempArr && Arr.concat(tempArr);
        });
        return Arr;
    }

    function getKnownWords(wordArr){
        return wordArr.filter(function(word,idx){
                return !!CModel[word];  
            });
    }
    
    function correct(word){
        var results = [],
            max = 0,
            maxIdx = -1;

        function _HighestRanking(wordArr){
            wordArr.forEach(function(word,idx){
                if( CModel[word] > max){
                    max = CModel[word];
                    maxIdx = idx
                }
            });
            return wordArr[maxIdx];
        }
        
        if(CModel[word]){
            return word;    
        }

        else if( (results = getKnownWords( generateEdit1(word))) && (results.length > 0) ){
            return _HighestRanking(results);
        }
        else if( (results = generateEdit2(word)) && (results.length > 0) ){
            return _HighestRanking(results); 
        }
        else{
           return word;
        }
    }

    //init
    /*
		(function(){
			
		})
    */
    return {
        correct : correct,
        fetchDict : fetchDict,
        CModel : CModel
    }
}();

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


