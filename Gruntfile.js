module.exports = function (grunt) {
    const THEME_FILES = [
        'blueprints/**',
        'dist/**',
        'images/**',
        'src/**',
        'templates/**',
        '.babelrc',
        'LICENSE',
        'package.json',
        '*.yaml',
        '*.md',
        '*.php',
        '*.js',
        '*.jpg',
    ];

    grunt.initConfig({
        copy: {
            theme: {
                expand: true,
                src: THEME_FILES,
                dest: '',
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-copy');
}
