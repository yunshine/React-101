// setting up a gruntile to tell Grunt to compile TypeScript...

// grunt gets passed in to this function when it runs...
module.exports = function(grunt) {
    grunt.loadNpmTasks('grunt-ts');

    // define an initial configuration for Grunt...
    // each property of this object corresponds to a task that Grunt can run...
    grunt.initConfig({
        ts: {
            main: {
                // this src will be an array of TypeScript files that it's going to take and turn into JavaScript...
                src: [],
                // dest is the folder where we will send our TypeScript files after they've been turned into JavaScript files...
                dest: 'javascript/'
            }
        }
    });
}