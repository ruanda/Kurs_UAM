UAM.FooterCtrl = function(view, store) {
    this.view = view;
    this.store = store;

    store.on('add', function(id, data) {
            view.setCount(store.getCount());
    });

    store.on('update', function(id, data, state) {
            view.setActiveCount(store.getActiveCount());
    });
};

