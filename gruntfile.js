module.exports = function(grunt) {
  grunt.initConfig ({
    bower: grunt.file.readJSON('public/javascrips/bower.json'),
    sass: {
      dist: {
        files: {
          'public/stylesheets/style.css' : 'sass/style.scss'
        }
      }
    }

  grunt.loadNpmTasks('grunt-sass');
  grunt.registerTask('default', ['sass']);
};