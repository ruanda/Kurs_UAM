UAM.InputView = function(element) {
    UAM.EventEmitter.call(this);
    this.element = element;

    var self = this;
    var inputElem = element.querySelector('#todo_input');
    element.querySelector('#todo_addbutton').addEventListener('click', function(event) {
        self.emit('add', inputElem.value);   
    });
};

UAM.utils.inherits(UAM.EventEmitter, UAM.InputView);
