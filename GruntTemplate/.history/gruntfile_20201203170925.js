// Gruntfile.js
module.exports = grunt => {
    // Load all grunt tasks matching the ['grunt-*', '@*/grunt-*'] patterns
    require('load-grunt-tasks')(grunt);
 
    grunt.initConfig({
        //config
    });
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.registerTask('default', []);
};