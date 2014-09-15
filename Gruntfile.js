module.exports = function (grunt) {

    grunt.initConfig({

        less: {
            development: {
                options: {
                    paths: ["src"]
                },
                files: {
                    "src/css/style.css": "src/less/style.less"
                }
            }
        },

        watch: {
            css: {
                files: 'src/less/*.less',
                tasks: ['less'],
                options: {
                    livereload: true
                }
            }
        },

        concat: {
            option: {

            },
            css: {
                src: ['src/css/style.css', 'src/css/normalize.css'],
                dest: 'dist/style.css'
            }
        },

        uglify: {
            options: {
                mangle: {
                    except: ['jQuery', 'Backbone']
                }
            },
            my_target: {
                files: {
                    'dest/output.min.js': ['src/input.js']
                }
            }
        },

        cssmin: {
            mincss: {
                options: {
                    banner: '/* My minified css file */'
                },
                files: {
                    'dist/style.min.css': ['src/css/*.css']
                }
            }
        },

        bowercopy: {

            options: {
                clean: true
            },

            libs: {
                options: {
                    destPrefix: 'src/js/libs'
                },
                files: {
                    'jquery.js': 'jquery/dist/jquery.js'
                }
            },

            css: {
                options: {
                    destPrefix: 'src/css'
                },
                files: {
                    'normalize.css': 'normalize-css/normalize.css'
                }
            }

        }

    });

    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-bowercopy');

    grunt.registerTask('default', function(){

    });

};
