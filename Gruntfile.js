module.exports = function(grunt) {

    grunt.initConfig({
        jshint: {
            all: ['Gruntfile', 'hello.js']
        }
    });

    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.registerTask('default', 'jshint');
    
};