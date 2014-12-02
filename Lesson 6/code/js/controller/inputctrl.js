UAM.InputCtrl = function(view, store) {
    this.view = view;
    this.store = store;

    view.on('add', function(t) {
        store.add(t);
    });
    view.on('save', function() {
        store.save();
    });
};

