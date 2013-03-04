/*global module:false*/
module.exports = function(grunt) {

	// Project configuration.
	grunt.initConfig({
		// Metadata.
		pkg: grunt.file.readJSON('package.json'),
		banner: '/*\n* <%= pkg.title || pkg.name %> - v<%= pkg.version %>\n' +
			'* Date: <%= grunt.template.today("yyyy-mm-dd") %>\n' +
			'<%= pkg.homepage ? "* " + pkg.homepage + "\\n" : "" %>' +
			'* ————————————————————————————————' +
			'* Copyright (c) <%= grunt.template.today("yyyy") %> <%= pkg.author.name %>\n' +
			'* Email: <%= pkg.author.email %>\n' +
			'* Url: <%= pkg.author.url %>\n' +
			'*/\n',
		// Task configuration.
		concat: {
			options: {
				banner: '<%= banner %>',
				stripBanners: true
			},
			dist: {
				src: ['static/js/*.js'],
				dest: '../dev/static/js/script.js'
			}
		},
		uglify: {
			dist: {
				src: '<%= concat.dist.dest %>',
				dest: '../dev/static/js/script.min.js'
			}
		},
		jshint: {
			options: {
				curly: true,
				eqeqeq: true,
				immed: true,
				latedef: true,
				newcap: true,
				noarg: true,
				sub: true,
				undef: true,
				unused: true,
				boss: true,
				eqnull: true,
				browser: true,
				globals: {}
			}
		},
		copy: {
			main: {
				files: [
					{src: ['static/images/*'], dest: '../dev/'}
				]
			}
		},
		sass: {
			dev: {
				options: {
					noCache: true,
					debugInfo: true
				},
				files: {
					'../dev/static/css/style.dev.css': 'static/style/webdevchecklist/style.scss'
				}
			},
			deploy: {
				options: {
					noCache: true,
					debugInfo: false
				},
				files: {
					'../dev/static/css/style.css': 'static/style/webdevchecklist/style.scss'
				}
			}
		},
		csso: {
			dist: {
				src: '../dev/static/css/style.css',
				dest:'../dev/static/css/style.min.css'
			}
		},
		jade: {
			dev: {
				options: {
					pretty: true,
					data: {
						dev: true
					}
				},
				files: {
					'../dev/index.html': 'templates/index.jade'
				}
			},
			deploy: {
				options: {
					pretty: false,
					data: {
						dev: false
					}
				},
				files: {
					'../dev/index.html': 'templates/index.jade'
				}
			}
		},
		clean: {
			options: {
				force: true
			},
			build: ['../dev/static/css/style.dev.css']
		},
		watch: {
			concat: {
				files: 'static/js/*.js',
				tasks: 'concat'
			},
			uglify: {
				files: '../dev/static/js/script.js',
				tasks: 'uglify'
			},
			jade: {
				files: 'templates/index.jade',
				tasks: 'jade:dev'
			},
			copy: {
				files: 'static/images/*',
				tasks: 'copy'
			},
			sass: {
				files: 'static/style/**/*',
				tasks: 'sass:dev'
			}
		}
	});

	// These plugins provide necessary tasks.
	require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

	// Default task.
	grunt.registerTask('default', ['jshint', 'concat', 'uglify', 'jade:deploy', 'sass:deploy', 'copy', 'csso', 'clean']);

};
