module.exports = function(grunt) {

  grunt.loadNpmTasks('grunt-recursive-compass');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // Project configuration.
  grunt.initConfig({
    pkg: '<json:package.json>',
    meta: {
      banner: '/*! <%= pkg.name %> - v<%= pkg.version %> - ' +
        '<%= grunt.template.today("yyyy-mm-dd") %>\n' +
        '<%= pkg.homepage ? "* " + pkg.homepage + "\n" : "" %>' +
        '* Copyright (c) <%= grunt.template.today("yyyy") %> <%= pkg.author.name %>;' +
        ' Licensed <%= _.pluck(pkg.licenses, "type").join(", ") %> */'
    },
    concat: {
      dist: {
        src: ['<banner:meta.banner>', 'lib/*.js'],
        dest: 'dist/script.js'
      }
    },
    min: {
      dist: {
        src: ['<banner:meta.banner>', '<config:concat.dist.dest>'],
        dest: '../dev/static/js/script.min.js'
      }
    },
    'recursive-compass': {
      dev: {
        files: 'style/webdevchecklist/*.{scss,sass}',
        options: {
          outputStyle: 'expanded',
          sassDir: 'style/webdevchecklist',
          cssDir: 'style/webdevchecklist'
        }
      },
      build: {
        files: 'style/webdevchecklist/*.{scss,sass}',
        options: {
          outputStyle: 'compressed',
          sassDir: 'style/webdevchecklist',
          cssDir: 'style/webdevchecklist'
        }
      }
    },
    test: {
      files: ['test/**/*.js']
    },
    // lint: {
    //   files: ['grunt.js', 'lib/**/*.js', 'test/**/*.js']
    // },
    // watch: {
    //   files: 'lib/*.js',
    //   tasks: ['concat min']
    // },
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
        boss: true,
        eqnull: true
      },
      globals: {
        exports: true,
        module: false
      }
    },
    uglify: {}
  });

  // Default task.
  grunt.registerTask('default', 'concat min recursive-compass:dev');

};
