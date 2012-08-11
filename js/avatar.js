/*human*/
var Avatar = function(sex,id) {
	var _canvas = document.getElementById(id),
		_ctx = canvas.getContext('2d'),
		_width = _canvas.offsetWidth,
		_height = _canvas.offsetHeight,
		_sex = sex;
		_avatar;
	_avatar = new Person(_sex,_ctx,_width,_height)
	_avatar.normalFace();
	return _avatar;
	/*if (sex == 'girl') {
		human = new Girl('images/girl_eye_1.png', ctx, canvas.offsetWidth, canvas.offsetHeight, 
			faceCtx, faceCanvas.offsetWidth, faceCanvas.offsetHeight);
	} else if (sex == 'boy') {
		human = new Boy(ctx);
	}*/
	// setInterval(function(){
	// 	human.eyeAnimate();
	// }, 2000);
	// setTimeout(function(){
	// 	human.blacklineAnimate();
	// }, 1000)
};

var Person = function(sex,ctx,width,height) {
	var _sex = sex;
	var _ctx = ctx;
	var _width = width;
	var _height = height;
	var _res = NB.Model.resource;
	var _path = 'images/avatar/';
	var redFace = 
	if (_sex == 'girl') {
	} else {

	}
	//好感度
	var _ranking;
}
function flash(/*obj*/ctx, /*num*/height, /*num*/width, /*array*/imgList, /*num*/timeout) {
	var width = width;
	var height = height;
	var ctx = ctx;
	var leng = imgList.length;
	var count = 0;
	var timer = setInterval(function() {
		ctx.clearRect(0, 0, width, height);
		ctx.drawImage(imgList[count], 0, 0);
		count += 1;
		if (count >= leng) {
			clearInterval(timer);
		}
	}, timeout);
}

Person.prototype.normalFace = {

}
function oldPerson(face, ctx, width, height, faceCtx, fWidth, fHeight) {
	var ctx = ctx;
	var width = width;
	var height = height;
	var faceCtx = faceCtx;
	var fWidth = fWidth;
	var fHeight = fHeight;
	var normalImg = new Image();
	var normalImg.src = face || "images/girl_eye_1.png";//普通表情
	var eyeImgList;//眨眼表情
	var sadImgList;//脸红表情
	var happyImgList;//开心表情
	var angryImgList;//生气表情
	var redFaceImg;//红脸表情
	var sweatImg;//流汗表情
	var blacklineImg;
	var loadImg();
}
Persoon.prototype = (function(){
	var faceMapping = {
		"girl":{
			"sad":{
				x:0,
				y:0
			} 
		},
		"boy":{}
	};

	return {
		loadImg : function() {
		
		},
		normalFace : function() {
			ctx.clearRect(0, 0, var width, var height);
			ctx.drawImage(var normalImg, 0, 0);
		},
		showFace : function(faceType,humanType){
			var faceType = faceType || "normal",
				humanType = humanType || "girl";
			switch (faceType)
			{
				case "normal" :
					ctx.clearRect(0, 0, var width, var height);
					//ctx.drawImage(var normalImg, 0, 0);
					ctx.drawImage(normalImg,faceMapping[humanType].x,faceMapping[humanType].y );
					break;
				case "sad" :
					ctx.clearRect(0, 0, var width, var height);
					ctx.drawImage(var sadImgList[0], 0, 0);
					break;
				case "angry":
				//case ....

			}

		},
		cancleFace : function(){
			faceCtx.clearRect(0, 0, var fWidth, var fHeight);
		},
		talk : function(params) {
			var params = params || {},
				title = params.title || "",
				content = params.content || ""，
				talkBox = $("div.talk"),
				voiceName = params.voice;
				
			
			$("div.talk .talk_title").html(title);
			$("div.talk .talk_content").html(content);

			voiceName && this.speak({voice:voiceName});
			talkBox.fadeIn("fast")；


		},
		speak : function(params){
			var params = params || {};
				voice =params.voice;
			var mySound = new buzz.sound("resource/"+voiceMapping[voice||"music"]);
            mySound.play();
		},
		addTouchCallback : function(area,callback){

		},
		improveRanking : function(){

		},
		decreaseRanking :function(){

		}

	}

})();



/*Person.prototype.sadFace = function() {
	var ctx.clearRect(0, 0, var width, var height);
	var ctx.drawImage(var sadImgList[0], 0, 0);	
}
Person.prototype.angryFace = function() {
	var ctx.clearRect(0, 0, var width, var height);
	var ctx.drawImage(var angryImgList[0], 0, 0);	
}
Person.prototype.redFace = function() {
	var faceCtx.clearRect(0, 0, var fWidth, var fHeight);
	var faceCtx.drawImage(var redFaceImg, 11, 61);
}
Person.prototype.sweatFace = function() {
	var faceCtx.clearRect(0, 0, var fWidth, var fHeight);
	var faceCtx.drawImage(var sweatImg, 63, 70);
}
Person.prototype.cancelRedFace = function() {
	var faceCtx.clearRect(0, 0, var fWidth, var fHeight);
}
Person.prototype.cancelSweatFace = function() {
	var faceCtx.clearRect(0, 0, var fWidth, var fHeight);
}
Person.prototype.blacklineFace = function() {
	var ctx.clearRect(0, 0, var width, var height);
	var ctx.drawImage(var blacklineImgList[0], 0, 0);	
}
Person.prototype.eyeAnimate = function() {
	flash(var ctx, var height, var width, var eyeImgList, 60);
}
Person.prototype.sadAnimate = function() {
	flash(var ctx, var height, var width, var sadImgList, 60);
}
Person.prototype.happyAnimate = function() {
	flash(var ctx, var height, var width, var happyImgList, 60);	
}
Person.prototype.blacklineAnimate = function() {
	flash(var ctx, var height, var width, var blacklineImgList, 60);	
}
Person.prototype.angryAnimate = function() {
	flash(var ctx, var height, var width, var angryImgList, 60);	
}

Person.prototype.talk = function(params) {
	var params = params || {},
		title = params.title || "",
		content = params.content || "";
	
	$("div.talk .talk_title").html(title);
	$("div.talk .talk_content").html(content);

}*/

function Girl(face, ctx, width, height, faceCtx, fWidth, fHeight) {
	Person.call(this, face, ctx, width, height, faceCtx, fWidth, fHeight);
}
Girl.prototype = new Person();

Girl.prototype.loadImg = function() {
	var eyeImgList = new Array();
	var sadImgList = new Array();
	var happyImgList = new Array();
	var blacklineImgList = new Array();
	var angryImgList = new Array();
	var redFaceImg = new Image();
	var redFaceImg.src = 'images/girl_red_face.png';
	var sweatImg = new Image();
	var sweatImg.src = 'images/girl_sweat.png';
	var eyeImgListPath = [
		'images/girl_eye_1.png',
		'images/girl_eye_2.png',
		'images/girl_eye_3.png',
		'images/girl_eye_2.png',
		'images/girl_eye_1.png'
	];
	for (var i = 0, leng = eyeImgListPath.length; i < leng; i++) {
		var eyeImgList[i] = new Image();
		var eyeImgList[i].src = eyeImgListPath[i];
	};
	var sadImgListPath = [
		'images/girl_sad_1.png',
		'images/girl_sad_2.png',
		'images/girl_sad_3.png',
		'images/girl_sad_2.png',
		'images/girl_sad_1.png'
	];
	for (var i = 0, leng = sadImgListPath.length; i < leng; i++) {
		var sadImgList[i] = new Image();
		var sadImgList[i].src = sadImgListPath[i];
	};
	var happyImgListPath = [
		'images/girl_happy_1.png',
		'images/girl_happy_2.png',
		'images/girl_happy_3.png',
		'images/girl_happy_2.png',
		'images/girl_happy_1.png'
	];
	for (var i = 0, leng = happyImgListPath.length; i < leng; i++) {
		var happyImgList[i] = new Image();
		var happyImgList[i].src = happyImgListPath[i];
	};
	var blacklineImgListPath = [
		'images/girl_blackline_1.png',
		'images/girl_blackline_2.png',
		'images/girl_blackline_3.png',
		'images/girl_blackline_2.png',
		'images/girl_blackline_1.png'
	];
	for (var i = 0, leng = blacklineImgListPath.length; i < leng; i++) {
		var blacklineImgList[i] = new Image();
		var blacklineImgList[i].src = blacklineImgListPath[i];
	};
	var angryImgListPath = [
		'images/girl_angry_1.png',
		'images/girl_angry_2.png',
		'images/girl_angry_3.png',
		'images/girl_angry_2.png',
		'images/girl_angry_1.png'
	];
	for (var i = 0, leng = angryImgListPath.length; i < leng; i++) {
		var angryImgList[i] = new Image();
		var angryImgList[i].src = angryImgListPath[i];
	};
}


