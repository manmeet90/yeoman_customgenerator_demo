'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');

module.exports = yeoman.Base.extend({

  prompting: function () {
    var done = this.async();

    // Have Yeoman greet the user.
    this.log(yosay(
      'Welcome to the bedazzling ' + chalk.red('generator-napifirst') + ' generator!'
    ));

    var prompts = [{
      type: 'input',
      name: 'moduleName',
      message: 'Please enter the module name: ',
      default: 'testModule'
    }];

    this.prompt(prompts, function (props) {
      this.props = props;
      // To access props later use this.props.someAnswer;

      done();
    }.bind(this));
  },

  writing: function () {
    this.fs.copyTpl(
      this.templatePath('_module/_routes/_route.js'),
      this.destinationPath(this.props.moduleName+'/routes/'+this.props.moduleName+'.js'),
      {
        moduleName : this.props.moduleName
      }
    );

    this.fs.copyTpl(
      this.templatePath('_module/_models/_model.js'),
      this.destinationPath(this.props.moduleName+'/models/'+this.props.moduleName+'.js'),
      {
        moduleName : this.props.moduleName
      }
    );

    this.fs.copyTpl(
      this.templatePath('_module/_controllers/_controller.js'),
      this.destinationPath(this.props.moduleName+'/controllers/'+this.props.moduleName+'.js'),
      {
        moduleName : this.props.moduleName
      }
    );

  },

  install: function () {
    this.installDependencies();
  }
});
