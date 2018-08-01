var gulp = require('gulp'),
	gutil = require('gulp-util'),
	sass = require('gulp-sass'),
	browserSync = require('browser-sync'),
	concat = require('gulp-concat'),
	uglify = require('gulp-uglify'),
	cleancss = require('gulp-clean-css'),
	rename = require('gulp-rename'),
	autoprefixer = require('gulp-autoprefixer'),
	notify = require("gulp-notify"),
	imagemin = require('gulp-imagemin'),
	imageminJpegRecompress = require('imagemin-jpeg-recompress'),
	pngquant = require('imagemin-pngquant'),
	cache = require('gulp-cache'),
	rsync = require('gulp-rsync');

gulp.task('browser-sync', function () {
	browserSync({
		server: {
			baseDir: 'app'
		},
		notify: false,
		// open: false,
		// online: false, // Work Offline Without Internet Connection
		// tunnel: true, tunnel: "projectname", // Demonstration page: http://projectname.localtunnel.me
	})
});

gulp.task('styles', function () {
	return gulp.src('app/scss/**/*.scss')
		.pipe(sass({
			outputStyle: 'expanded'
		}).on("error", notify.onError()))
		.pipe(rename({
			suffix: '.min',
			prefix: ''
		}))
		//.pipe(autoprefixer(['last 15 versions']))
		.pipe(cleancss({
			level: {
				1: {
					specialComments: 0
				}
			}
		})) // Opt., comment out when debugging
		.pipe(gulp.dest('app/css'))
		.pipe(browserSync.stream())
});

gulp.task('js', function () {
	return gulp.src([
		'app/js/jquery-2.2.0.js',
		'app/js/rotate_plugin.js',
		'app/js/rotate.js',
		'app/js/scroll_to.js',
		'app/js/jquery.mosaicflow.min.js',
		'app/js/jquery.fancybox.js',
		'app/js/jquery.fancybox-thumbs.js',
		'app/js/jquery.fancybox-media.js',
		'app/js/jquery.mousewheel-3.0.6.pack.js',
		'app/js/responsiveslides.min.js',
		'app/js/plugins-scroll.js',
		'app/js/only_for_ie.js',
		'app/js/stick.js',
		'app/js/common.js'
		])
		.pipe(concat('scripts.min.js'))
		.pipe(uglify())
		.pipe(gulp.dest('app/js'))
		.pipe(browserSync.reload({
			stream: true
		}))
});

gulp.task('imgmin', function () {
	return gulp.src("app/img-not-optim/**")
		.pipe(cache(imagemin([
      imagemin.gifsicle({
				interlaced: true
			}),
      imagemin.jpegtran({
				progressive: true
			}),
      imageminJpegRecompress({
				quality: 'veryhigh'
			}),
      imagemin.svgo(),
      imagemin.optipng({
				optimizationLevel: 0
			}),
      pngquant({
				quality: '100',
				speed: 5
			})
    ], {
			verbose: true
		})))
		.pipe(gulp.dest("app/img"));
});

gulp.task('clear', function (done) {
	return cache.clearAll(done);
});

gulp.task('rsync', function () {
	return gulp.src('app/**')
		.pipe(rsync({
			root: 'app/',
			hostname: 'username@yousite.com',
			destination: 'yousite/public_html/',
			// include: ['*.htaccess'], // Includes files to deploy
			exclude: ['**/Thumbs.db', '**/*.DS_Store'], // Excludes files from deploy
			recursive: true,
			archive: true,
			silent: false,
			compress: true
		}))
});

gulp.task('watch', ['styles', 'js', 'browser-sync'], function () {
	gulp.watch('app/scss/**/*.scss', ['styles']);
	gulp.watch('app/*.html', browserSync.reload)
});

gulp.task('default', ['watch']);
