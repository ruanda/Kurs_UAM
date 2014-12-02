UAM.FooterView = function(e) {
    UAM.EventEmitter.call(this);
    this.element = e;
};

UAM.utils.inherits(UAM.EventEmitter, UAM.FooterView);

UAM.FooterView.prototype.setCount = function(count) {
    this.element.querySelector('#todo_all').textContent = count;
};


UAM.FooterView.prototype.setActiveCount = function(count) {
    this.element.querySelector('#todo_active').textContent = count;
};
