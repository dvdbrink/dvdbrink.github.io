module.exports = function(grunt) {
    grunt.initConfig({
        copy: {
            skeleton: {
                files: [
                	{expand: true, cwd: 'bower_components/skeleton-css/css/', src: '*.css', dest: 'css/'}
                ]
            }            
        }
    });

    grunt.loadNpmTasks('grunt-contrib-copy');


	grunt.registerTask('default', [ 'copy' ]);
};
