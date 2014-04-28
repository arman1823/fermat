"use strict";

var kit = global.kit;

kit.define('product', {
  model: {
    type: kit.types.STRING,
    required: true
  },
  description:{
    type:  kit.types.TEXT
  },
  parameters: {
    type:  kit.types.TEXT
  },
  type: {
    type: kit.types.STRING
  },
  picture: {
    type: kit.types.STRING
  }

});
