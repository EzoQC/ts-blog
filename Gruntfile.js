module.exports = function (grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        clean: {
            default: ['build']
        },
        ts: {
            default: {
                src: ['src/**/*.ts'],
                out: 'build/bundle.js'

            },
            options: {
                module: 'amd',
                fast: 'never',
                target: 'es5',
                declaration: false,
                sourceMap: false,
                removeComments: true,
                noImplicitAny: false
            }
        }
    });

    grunt.loadNpmTasks('grunt-ts');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-clean');

    grunt.registerTask('default', ['clean', 'ts']);
};