module.exports = function(grunt) {
    grunt.initConfig({
        copy: {
            bootstrap: {
                files: [
                	{expand: true, cwd: 'bower_components/bootstrap/dist/', src: 'bootstrap.scss', dest: '_sass/'}
                ]
            }            
        }
    });

    grunt.loadNpmTasks('grunt-contrib-copy');


	grunt.registerTask('default', [ 'copy' ]);
};
