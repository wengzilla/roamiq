module.exports = function(grunt) {
  grunt.initConfig ({
    bower: grunt.file.readJSON('bower.json'),
    wiredep: {
      task: {
        // Point to the files that should be updated when
        // you run `grunt wiredep`
        src: [
          'views/*.hbs',   // .html support...
        ]
      }
    },
    sass: {
      dist: {
        files: {
          'public/stylesheets/style.css' : 'sass/style.scss'
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-wiredep');
  grunt.loadNpmTasks('grunt-sass');
  grunt.registerTask('default', ['sass']);
};