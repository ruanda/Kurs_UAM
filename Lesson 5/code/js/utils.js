UAM.utils = {
	inherits: function (Parent, Child) {
		Child.prototype = Object.create(Parent.prototype);
		Child.prototype.constructor = Child;
	},
    closest: function (element, check) {
        while (element) {
            if (check(element)) {
                return element;
            }
            element = element.parentNode;
        }
    }
};

