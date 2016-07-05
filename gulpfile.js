var gulp = require('gulp'),
	tsc = require('gulp-typescript'),
	tslint =  require('gulp-tslint'),
	config = require('./gulp.config')(),
	tsProject = tsc.createProject('tsConfig.json'),
	connect = require('gulp-connect')
	browserSync = require('browser-sync'),
	superstatic = require('superstatic');

var ENV = "";

gulp.task('compile-ts', function(){
	var sourceFiles = [ config.allTs ];
	var tsResult = gulp
					.src(sourceFiles)
					.pipe(tsc(tsProject));
	return tsResult.js
			.pipe( gulp.dest(config.tsOutputPath) );
});

gulp.task('serve', ['compile-ts'], function(){
	gulp.watch([config.allTs], ['compile-ts']);
	
	var outputPath;
	if(process.env.NODE_ENV ="DEV")	outputPath='dev/**/*.js'
	else							outputPath='prod/**/*.js'
		
	gulp.run
	browserSync({
		port: 3003,
		files: ['index.html',outputPath , 'templates/**/*.html'],
		injectChanges: true,
		logFileChanges: false,
		logLevel: 'silent',
		notify: true,
		reloadDelay: 0,
		//serves index.html, set with baseDir './'
		server:{
			baseDir: ['./'],
			middleware: superstatic( {debug: false} )
		}
	});
});

/*
// wait to have Jon's unit testing and incorporate his findings into this task
gulp.task('serve-test', ['compile-ts-unitTest'], function(){
	gulp.watch([config.unitTests], ['compile-ts-unitTest']);
	browserSync({
		port:3000,
		files: ["./tests/index.html", './tests/unit-tests/*.js', ],
		injectChanges: true, 
		logFileChanges: false,
		logLevel: 'silent',
		notify: true,
		reloadDelay: 0,
		server: {
			baseDir: ['./'],
			index: './tests/index.html',
			middleware: superstatic({debug: false})
		}
	});
});*/

gulp.task('default', [ 'serve']);


// gulp.task('unit-test', ['serve-test']);
