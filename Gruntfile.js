module.exports = function(grunt) {
  grunt.initConfig({
    concat: {
      js: {
        src: 'src/js/*.js',
        dest: 'build/assets/application.js'
      },
      css: {
        src: 'build/assets/stylesheets/*.css',
        dest: 'build/assets/stylesheets/application.css'
      }
    },
    jade: {
      compile: {
        options: {
          pretty: true
        },
        src: 'src/index.jade',
        dest: 'build/index.html'
      }
    },
    sass: {
      dev:{
        files: [{
          expand: true,
          cwd: 'src/stylesheets',
          src: ['*.scss'],
          dest: 'build/assets/stylesheets',
          ext: '.css'
        }]

      }
    },
    watch: {
      sass: {
        files: 'src/stylesheets/*.scss',
        tasks: ['sass']
      },
      jade: {
        files: ['src/*.jade'],
        tasks: ['jade']
      },
      // 'concat:css':{
      //   files: ['src/stylesheets/*.css'],
      //   tasks: ['concat']
      // },
      'concat:js': {
        files: ['src/js/*.js'],
        tasks: ['concat']
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-jade');
  grunt.registerTask('default', ['sass', 'jade', 'watch', 'concat']);
};
