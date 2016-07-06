var gulp = require('gulp'),
	tsc = require('gulp-typescript'),
	tslint =  require('gulp-tslint'),
	config = require('./gulp.config')(),
	tsProject = tsc.createProject('tsConfig.json'),
	connect = require('gulp-connect')
	browserSync = require('browser-sync'),
	superstatic = require('superstatic')
	sass = require('gulp-sass');

var ENV = "";

gulp.task('compile-ts', function(){
	var sourceFiles = [ config.allTs ];
	var tsResult = gulp
					.src(sourceFiles)
					.pipe(tsc(tsProject));
	return tsResult.js
			.pipe( gulp.dest(config.tsOutputPath) );
});

gulp.task('compile-sass', function(){
	gulp.src('./assets/styles/sass/*.scss')
	.pipe(sass().on('error', sass.logError) )
	.pipe(gulp.dest('./assets/styles/css/'));
});

gulp.task('serve', ['compile-ts', 'compile-sass'], function(){
	gulp.watch([config.allTs], ['compile-ts']);
	gulp.watch([config.allStyles], ['compile-sass']);

	// gulp.watch([config.allAssets]);
	
	var outputPath;
	if(process.env.NODE_ENV ="DEV")	outputPath='dev/**/*.js'
	else							outputPath='prod/**/*.js'
		
	gulp.run
	browserSync({
		port: 3003,
		files: [ 'index.html',outputPath , 'assets/templates/**/*.html', 'assets/styles/sass/*.scss' ],
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
