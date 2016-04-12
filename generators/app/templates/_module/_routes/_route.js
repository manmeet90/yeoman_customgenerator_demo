/**
 * @module <%= moduleName %>Router
 */
module.exports = function() {

  var module = {};

  var express = require('express');  
  var router = express.Router();
  var constants = require('../../utils/constants');
  var messages = require('../../utils/messages');
  var <%= moduleName %>Controller = require('../controllers/<%= moduleName %>');
  var _ = require('underscore');
  var <%= moduleName %> = require('../models/<%= moduleName %>');
  
 
  router.get('/', function(req, res) {
    try{
        
    }catch(ex){
        console.log("ERROR: %s", ex.message);
        res.status(constants.STATUS_CODE_SERVER_ERROR);
        res.json({'message' : req.t('ERR_GENERIC')});
    }  
  });

  
  router.post('/', function(req, res) {
    try{
        
    }catch(ex){
        console.log("ERROR: %s", ex.message);
        res.status(constants.STATUS_CODE_SERVER_ERROR);
        res.json({'message' : req.t('ERR_GENERIC')});
    }
    
  });

  router.delete('/', function(req, res) {
    try{
        
    }catch(ex){
        console.log("ERROR: %s", ex.message);
        res.status(constants.STATUS_CODE_SERVER_ERROR);
        res.json({'message' : req.t('ERR_GENERIC')});
    }
    
  });
  
  module.router = router;
  return module;
};