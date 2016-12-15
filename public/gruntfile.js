// Gruntfile.js
// our wrapper function (required by grunt and its plugins)
// all configuration goes inside this function
module.exports = function(grunt) {

    // CONFIGURE GRUNT ===========================================================
    grunt.initConfig({

        // get the configuration info from package.json ----------------------------
        // this way we can use things like name and version (pkg.name)
        pkg: grunt.file.readJSON('package.json');

    // configure jshint to validate js files -----------------------------------
    jshint: {
        options: {
            reporter: require('jshint-stylish') // use jshint-stylish to make our errors look and read good
        },

        // when this task is run, lint the Gruntfile and all js files in src
        build: ['gruntfile.js', 'public']
    }
});

    // LOAD GRUNT PLUGINS ========================================================


    // we can only load these if they are in our package.json

    // Load jshint

    // register the jshint task when we run grunt
};