(function (global) {
	var EE;

	if (!global.UAM) {
		global.UAM = {};
	}

	EE = function () {
		//store the listeners somewhere
		this.listeners = {};
	};

	EE.prototype.on = function (eventName, listener, context) {
    if(!this.listeners[eventName]) {
      this.listeners[eventName] = [];
    }
    
    var newElement = {f: listener, c: context};
    this.listeners[eventName].push(newElement);

    var listeners = this.listeners[eventName];

    return function() {
      var i = listeners.indexOf(newElement);
      if(i != -1) {
        listeners.splice(i, 1);
      }
    }
	};

	EE.prototype.emit = function (eventName /*, other args...*/) {
    var args = Array.prototype.slice.call(arguments, 1, arguments.length);
    if(this.listeners[eventName]) {
      this.listeners[eventName].forEach(function(element) {
        element.f.apply(element.c, args);
      });
    }
	};

//	var ee = new EE();
//
//	var removeListener = ee.on('test', function (arg1, arg2) {
//		console.log(arg1, arg2, this.key);
//	}, { key: 'value' });
//
//	ee.emit('test', 1, 2); // 1, 2 value
//
//	removeListener(); //removes my listener from the event emitter;
//
//	ee.emit('test'); //nothing will execute

	global.UAM.EventEmitter = EE;

}(window));
