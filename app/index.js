'use strict';
var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');


var UickComponentGenerator = module.exports = function UickComponentGenerator(args, options, config) {
  yeoman.generators.Base.apply(this, arguments);

  this.on('end', function () {
    this.installDependencies({ skipInstall: options['skip-install'] });
  });

  this.pkg = JSON.parse(this.readFileAsString(path.join(__dirname, '../package.json')));
};

util.inherits(UickComponentGenerator, yeoman.generators.Base);

UickComponentGenerator.prototype.askFor = function askFor() {
  var cb = this.async();

  // have Yeoman greet the user.
  console.log(this.yeoman);

  var prompts = [{
    name: 'repo_user',
    message: 'What is your Github username?'
  },
  {
    name: 'component_name',
    message: 'How you want to call the component you are creating? (without `ui-`)'
  },
  {
    name: 'description',
    message: 'Description of the component?'
  }];

  this.prompt(prompts, function (props) {
    this.repo_user = props.repo_user.replace('-', '_').replace(' ', '_');
    this.component_name = props.component_name;
    this.description = props.description;

    cb();
  }.bind(this));
};

UickComponentGenerator.prototype.app = function app() {
  this.mkdir('templates');

  // tests
  this.mkdir('tests');
  this.mkdir('tests/spec');
  this.mkdir('tests/assets');
  this.mkdir('tests/assets/css');
  this.mkdir('tests/assets/js');
  this.template('tests/spec/ui-component.js', 'tests/spec/ui-' + this.component_name + '.js');
  this.template('tests/index.html', 'tests/index.html');
  this.copy('tests/assets/js/chai.js', 'tests/assets/js/chai.js');
  this.copy('tests/assets/js/mocha.js', 'tests/assets/js/mocha.js');
  this.copy('tests/assets/js/underscore.js', 'tests/assets/js/underscore.js');
  this.copy('tests/assets/css/mocha.css', 'tests/assets/css/mocha.css');

  //others
  this.template('index.js', 'index.js');
  this.template('index.scss', 'index.scss');
  this.template('_component.json', 'component.json');
  this.template('_package.json', 'package.json');
  this.template('_travis.yml', '.travis.yml');
  this.template('README.md', 'README.md');

  this.copy('Gruntfile.js', 'Gruntfile.js');
  this.copy('_gitignore', '.gitignore');

  this.mkdir('templates');
  this.template('templates/template.html', 'templates/template.html');


  this.copy('LICENSE', 'LICENSE');
};

UickComponentGenerator.prototype.projectfiles = function projectfiles() {
  // this.copy('editorconfig', '.editorconfig');
  // this.copy('jshintrc', '.jshintrc');
};
