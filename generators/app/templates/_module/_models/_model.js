var mongoose = require('mongoose');
var mongooseUtils = require('../../utils/mongoose-utils');

var Schema = mongoose.Schema;

var <%= moduleName %>Schema = new Schema({
   createdAt: Number,
   createdBy: String,
   updatedAt: Number,
   updatedBy: String 
});

<%= moduleName %>Schema.pre('save', mongooseUtils.addDefaultCCUU);



// var connection = datastore.getConnection();
var Module = mongoose.model('<%= moduleName %>', <%= moduleName %>Schema, '<%= moduleName %>s');

module.exports = Module;