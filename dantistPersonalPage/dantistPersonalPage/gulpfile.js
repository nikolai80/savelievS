var gulp = require('gulp'),
    sass = require('gulp-sass'),
    browserSync=require('browser-sync'); //Подключаем Sass пакет


gulp.task('sass', function () { // Создаем таск "sass"
    return gulp.src('Content/sass/*.scss') // Берем источник
        .pipe(sass()) // Преобразуем Sass в CSS посредством gulp-sass
        .pipe(gulp.dest('content/css'))
        .pipe(browserSync.reload({stream:true})); 
});


gulp.task('browser-sync', function () {
    browserSync({
        proxy: 'http://localhost:37375/',
        files: ['Scripts/**/*.js',
            'Content/**/*.css',
            'Views/**/*.cshtml'],
        notify:false
    });
});

gulp.task('watch-sass', gulp.series('browser-sync', 'sass', function () {
    gulp.watch('Content/sass/*.scss', gulp.parallel('sass'));
}));


gulp.task('default', gulp.parallel('sass',  'watch-sass'));