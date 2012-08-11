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

	var 
		_init = function(){
			//load the old notebook

		},
		_save = function(){


		},
		_setReminder = function( endTime ,callback){


		};

	return {
		init : _init,
		save : _save,
		setReminder : _setReminder

	}

})();

//Touch Module