module.exports = function(grunt) {

    grunt.initConfig({
        jshint: {
            all: ['Gruntfile.js', 'hello.js']
        },
        karma: {
            unit: {
                configFile: 'config/karma.conf.js',
                background: true
            },
            // Add a new travis ci karma configuration
            // configs here override those in our existing karma.conf.js
            travis: {
                configFile: 'config/karma.conf.js',
                singleRun: true,
                browsers: ['PhantomJS']
            }
        },
        watch: {
            karma: {
                files: ['src/**/*.js', 'test/unit/**/*.js'],
                task: ['karma:unit:run']
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-karma');

    grunt.registerTask('devmode', ['karma:unit', 'watch']);
    grunt.registerTask('default', 'jshint');
    
    // Add a new task for travis
    grunt.registerTask('test', ['karma:travis']);

};