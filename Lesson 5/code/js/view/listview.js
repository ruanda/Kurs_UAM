UAM.ListView = function(element) {
    UAM.EventEmitter.call(this);
    this.element = element;
    this.elements = [];

    var self = this;
    var listElement = element.querySelector('#todo_list');
    listElement.addEventListener('click', function(event) {
        var liElement = UAM.utils.closest(event.target, function(el) {
            return el.tagName.toLowerCase() === 'li';
        });
        var index = Array.prototype.indexOf.call(listElement.children, liElement);
        var data = liElement.textContent;
        self.emit('update', index, data);
    });
};

UAM.utils.inherits(UAM.EventEmitter, UAM.ListView);

UAM.ListView.prototype.add = function(id, data) {
    var todoElement = document.createElement('li');
    todoElement.textContent = data;
    this.elements.push(todoElement);
    this.element.querySelector('#todo_list').appendChild(todoElement);
};

UAM.ListView.prototype.update = function(id, data, state) {
    if (state) {
        this.element.querySelector('#todo_list').children[id].classList.add("active");
    } else {
        this.element.querySelector('#todo_list').children[id].classList.remove("active");
    }
};
