"use strict";

var Nav = require(global.config.get('path').helpers + '/nav')
  , nav = new Nav();

module.exports.bind = function(routes, controllers) {

  routes.add({
    uri: '/',
    func: controllers.pages.index
  });

    routes.add({
        uri: '/products',
        func: controllers.pages.products
    });

    routes.add({
        uri: '/product/:id',
        func: controllers.pages.product
    });

    routes.add({
        uri: '/useds',
        func: controllers.pages.useds
    });

    routes.add({
        uri: '/used/:id',
        func: controllers.pages.used
    });


    routes.add({
        uri: '/history',
        func: controllers.pages.history
    });
    routes.add({
        uri: '/production-equipment',
        func: controllers.pages.equipment
    });
    routes.add({
        uri: '/facilities',
        func: controllers.pages.facilities
    });
    routes.add({
        uri: '/customer-service',
        func: controllers.pages.customer
    });

    routes.add({
        uri: '/fermat-cz-fermat-group',
        func: controllers.pages.group
    });
    routes.add({
        uri: '/pressl',
        func: controllers.pages.pressl
    });
    routes.add({
        uri: '/hmb',
        func: controllers.pages.hmb
    });
    routes.add({
        uri: '/fermat-machine-tool',
        func: controllers.pages.tool
    });
    routes.add({
        uri: '/strojtos-lipnik',
        func: controllers.pages.lipnik
    });
    routes.add({
        uri: '/fermat-j-f-stroje-s-r-o',
        func: controllers.pages.stroje
    });
    routes.add({
        uri: '/contacts',
        func: controllers.pages.contacts
    });

    routes.add({
        uri: '/reference-customers',
        func: controllers.pages.customers
    });

    routes.add({
        uri: '/contats-used-machines',
        func: controllers.pages.contatsus
    });



};
