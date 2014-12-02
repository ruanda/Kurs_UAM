UAM.Store = function () {
	UAM.EventEmitter.call(this);
	this.data  = [];
    this.dataState = [];
};

UAM.utils.inherits(UAM.EventEmitter, UAM.Store);

UAM.Store.prototype.add = function (data) {
    if (data === "" || data in this.dataState) {
        return false;
    }
    this.data.push(data);
    this.dataState[data] = 0;
    this.emit('add', this.data.length - 1, data);
    return true;
};

UAM.Store.prototype.update = function (id, data) {
    this.dataState[data] = (this.dataState[data] === 0) ? 1 : 0;
    this.emit('update', id, data, this.dataState[data]);
};

UAM.Store.prototype.getCount = function() {
    return this.data.length;
};

UAM.Store.prototype.getActiveCount = function() {
    var self = this;
    return Object.keys(this.dataState).filter(function(e) {
            return self.dataState[e];
    }).length;
};

UAM.Store.prototype.save = function() {
    var output = [];
    this.data.forEach(function(value, index) {
        output.push({ id: index, value: value});
    });
    var httpRequest = new XMLHttpRequest();
    httpRequest.onreadystatechange = function () {
        if (httpRequest.readyState !== 4) {
            return;
        }
        if (httpRequest.status !== 200) {
            alert('Request failed');
            return;
        }
        console.log(httpRequest.responseText);
    };
    httpRequest.open('POST', '/api/todos');
    httpRequest.setRequestHeader('Content-type','application/json; charset=utf-8');
    httpRequest.send(JSON.stringify(output));
};
