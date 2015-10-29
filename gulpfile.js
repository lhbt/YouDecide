var gulp = require('gulp');
var scp = require('gulp-scp2');
var path = require('path');

gulp.task('default', ['deploy']);

gulp.task('deploy', function() {

  var homePath = (process.env.HOME || process.env.USERPROFILE);
  console.log("Your private ssh key needs to go here: " + homePath + "\.ssh");
  var pathToPrivateKey = path.join(homePath, '.ssh/awskey.pem');

  return gulp.src(['src/**/*', 'index.html'], { "base" : "." })
    .pipe(scp({
      host: "52.18.191.88",
      dest: "/usr/share/nginx/youdecide",
      username: 'ubuntu',
      privateKey: require('fs').readFileSync(pathToPrivateKey)
    }))
    .on('error', function(error) {
      console.log(error);
    });
});