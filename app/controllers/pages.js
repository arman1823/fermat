"use strict";

var kit = global.kit
  , S = require('string')
  , async = require('async')
  , _ = require('lodash')
  , moment = require('moment');

module.exports = {

    index: function(req, res) {
      res.render('index');
    },


    products: function(req, res) {
        kit.models.product.find( function(err, results) {
            res.render('products', { products: results, moment: moment, S: S });
        });
    },

    product: function(req, res) {
        var productId = parseInt(req.param('id'));

        if (isNaN(productId)) {
            res.redirect('/products');
            return;
        }

        kit.models.product.find({ where: { id: productId } }, function(err, results) {
            if (results.length == 0) {
                res.redirect('/products');
                return;
            }
            kit.models.image.find({where:{ entity: productId, type:"product" }, order: ['image.order ASC'] }, function(err, images){
                if (err) {
                    res.redirect('/products');
                    return;
                }

                kit.models.product.find( function(err, prodresult) {
                    res.render('product', {product: results[0], images: images, moment: moment, prods: prodresult, errors: req.flash('productError') || [], S: S });
                });

            });
        });
    },
    useds: function(req, res){
        kit.models.used.find( function(err, results) {
            res.render('useds', { useds: results, moment: moment, S: S });
        });
    },

    used: function(req, res){
        var usedId = parseInt(req.param('id'));

        if (isNaN(usedId)) {
            res.redirect('/useds');
            return;
        }

        kit.models.used.find({ where: { id: usedId } }, function(err, results) {
            if (results.length == 0) {
                res.redirect('/useds');
                return;
            }
            kit.models.image.find({where:{ entity: usedId, type:"used" }, order: ['image.order ASC'] }, function(err, images){
                if (err) {
                    res.redirect('/useds');
                    return;
                }

                kit.models.used.find( function(err, usresult) {
                    res.render('used', {used: results[0], images: images, moment: moment, usresults: usresult, errors: req.flash('productError') || [], S: S });
                });

            });
        });
    },

    history: function(req, res) {
        res.render('history');
    },

    equipment: function(req, res) {
        res.render('production-equipment');
    },

    facilities: function(req, res) {
        res.render('facilities');
    },

    customer: function(req, res) {
        res.render('customer-service');
    },

    group: function(req, res) {
        res.render('group');
    },

    pressl: function(req, res) {
        res.render('pressl');
    },

    hmb: function(req, res) {
        res.render('hmb');
    },

    tool: function(req, res) {
        res.render('tool');
    },

    lipnik: function(req, res) {
        res.render('lipnik');
    },

    stroje: function(req, res) {
        res.render('stroje');
    },

    contacts: function(req, res) {
        res.render('contacts');
    },

    customers: function(req, res) {
        res.render('customers');
    },

    contatsus: function(req, res) {
        res.render('contats-used');
    }

};
