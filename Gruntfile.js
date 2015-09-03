module.exports = function(grunt) {
    grunt.initConfig({
        copy: {
            skeleton: {
                files: [
                	{expand: true, cwd: 'bower_components/skeleton-css/css/', src: '*.css', dest: 'css/'}
                ]
            },
            jquery: {
                files: [
                    {expand: true, cwd: 'bower_components/jquery/dist', src: '**', dest: 'js/'}
                ]
            }   
        }
    });

    grunt.loadNpmTasks('grunt-contrib-copy');


	grunt.registerTask('default', [ 'copy' ]);
};
