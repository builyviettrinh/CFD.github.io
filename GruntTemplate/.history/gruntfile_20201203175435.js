// Gruntfile.js
module.exports = grunt => {
    // Load all grunt tasks matching the ['grunt-*', '@*/grunt-*'] patterns
    require('load-grunt-tasks')(grunt);
 
    grunt.initConfig({
        //config
        pkg: grunt.file.readJSON('package.json'),
        dirs: {
    		dest: 'dest',
            css:  "css",
            scss: "scss",
            js: "js"
        },
        cssmin: {
			options:{
				keepSpecialComments: 0
			},
			my_target: {
				files: [{
					'<%= dirs.dest %>/stylelibs.min.css' : ['<%= dirs.css %>/**/*.css']
				}]
			}
        },
        sass: {
		    dist: {
		    	options: {                       
		        	style: 'compressed',
		        	sourcemap: false,
		        	lineNumbers: true
		      	},
			    files: {
			       	'<%= dirs.dest %>/style.min.css': '<%= dirs.scss %>/style.scss'
			    }
            }
        },
    });
    
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.registerTask('default', ['cssmin','sass','watch']);
};