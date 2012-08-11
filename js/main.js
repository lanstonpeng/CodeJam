/*notebook obj*/
NB.Ctrl = {};

NB.Ctrl.init = function() {
	/*laoad resource*/
	var welcome = new NB.View.Welcome(NB.Model.resource.length);
	var resourceList = Tool.loading({
		resource: NB.Model.resource,
		loadingCallback: welcome.updateLoading,
		finishCallback: function(){
			welcome.finishLoading(NB.Ctrl.start);
		}
	});
}
NB.Ctrl.start = function() {
	console.log('start game');
	
}
NB.Ctrl.init();

//NoteBook Module
var Notebook = (function(){
	//save 
	//load
	//remainder

//database stucture
/*
{
	gender:[{
		title:"title",
		content:"content",
		endTime:""
	}]
}
*/
	var 
		_defaultReminderCallback = function(gender){
			
			someObj[gender].talk();
		},
		_gender,
		_init = function( gender){
			//load the old notebook
			//see if there's a reminder 
			var gender = _gender = gender || "girl",
				Data = store.get("notebook"),
				notebooks = Data[gender],
				now = (new Date()).getTime();

			if(notebooks){
				for(var i in notebooks){
					i.endTime < now && this._setReminder(i.endTime);
				}
			}

			//set some listener
			
		},
		_save = function(params){
			var params = params || {},
				title = params.title,
				content =params.content,
				endTime = params.endTime,
				gender = params.gender || "girl",
				Data = store.get("notebook") || {};

			Data[gender].push({
				title : title
				content: content,
				endTime : endTime
			});

		},
		_setReminder = function( endTime,callback ){
			var endTime =parseInt(endTime || (new Date()).getTime(),10),
				callback = callback || _defaultReminderCallback;

			setInterval(function(){
				if((new Date()).getTime() >= endTime){
					_defaultReminderCallback(_gender);
				}
			},1000);

		};

	return {
		init : _init,
		save : _save,
		setReminder : _setReminder
	}

})();

//Touch Module