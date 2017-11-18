"use strict";

/*
	descriptions of required packages
	* autoprefixer : add vendor prefixes
	* babel        : transpile ES6 to ES5 (requires "babel-core" and "babel-preset-env" modules)
	* browsersync  : synchronize view/scroll states in multiple browsers
	* gulp         : build tool and task runner
	* notify       : show errors/messages via tray notifications
	* plumber      : prevent gulp pipe from stopping on error
	* sass         : compile SCSS to CSS
	* sourcemaps   : create sourcemaps for source files
*/
const autoprefixer = require("gulp-autoprefixer"),
	  babel        = require("gulp-babel"),
	  browsersync  = require("browser-sync"),
	  gulp         = require("gulp"),
	  notify       = require("gulp-notify"),
	  plumber      = require("gulp-plumber"),
	  sass         = require("gulp-sass"),
	  sourcemaps   = require("gulp-sourcemaps");

const tasks = [
	"style",
	"script",
	"sync",
	"watch"
];
gulp.task("default", tasks, () => {
	return gulp
		.src("")
		.pipe(notify({message: "Default tasks completed."}));
});

gulp.task("style", () => {
	return gulp
		.src("sass/style.scss")
		.pipe(plumber({
			errorHandler: notify.onError("STYLE ERROR: <%= error.message %>")
		}))
		.pipe(sourcemaps.init())
		.pipe(sass({outputStyle: "compressed"}).on("error", sass.logError))
		.pipe(autoprefixer({
			browsers: ["last 5 versions"],
			cascade: false
		}))
		.pipe(sourcemaps.write("./"))
		.pipe(gulp.dest("./"))
		.pipe(browsersync.stream({match: "**/*.css"}));
});

gulp.task("script", () => {
	return gulp
		.src("es6/*.js")
		.pipe(plumber({
			errorHandler: notify.onError("SCRIPT ERROR: <%= error.message %>")
		}))
		.pipe(sourcemaps.init())
		.pipe(babel({
			presets: ["env"],
			compact: true,
			minified: true
		}))
		.pipe(sourcemaps.write("./"))
		.pipe(gulp.dest("js/"))
		.pipe(browsersync.reload({stream: true}));
});

gulp.task("sync", () => {
	browsersync.init({
		browser: ["chrome", "firefox", "iexplore"],
		// replace wp-underscores-fork with theme name
		proxy: "http://localhost/wp-underscores-fork"
	});
});

gulp.task("watch", () => {
	gulp.watch("**/*.php", browsersync.reload);
	gulp.watch("sass/**/*.scss", ["style"]);
	gulp.watch("es6/*.js", ["script"]);
});