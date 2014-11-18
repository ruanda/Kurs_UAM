UAM.ListCtrl = function(view, store) {
    this.view = view;
    this.store = store;

    store.on('add', function(id, data) {
        view.add(id, data);
    });

    store.on('update', function(id, data, state) {
        view.update(id, data, state);
    });

    view.on('update', function(id, data) {
        store.update(id, data);
    });

};

