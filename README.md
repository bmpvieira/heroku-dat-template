Heroku-dat-template
===================
> A simple Heroku app template for deploying [Dat](http://github.com/maxogden/dat)

This version of heroku-dat-template runs on top of Heroku Postgres using [sqldown](https://github.com/calvinmetcalf/SQLdown) (see dat.json and package.json for details).

[![Deploy](https://www.herokucdn.com/deploy/button.png)](https://heroku.com/deploy?template=https://github.com/bmpvieira/heroku-dat-template/tree/postgres)

<!-- https://devcenter.heroku.com/articles/heroku-button -->
<!-- http://expeditedssl.com/heroku-button-maker -->

Usage
-----
Just click the purple button above.

Alternatively:
- Create an Heroku app;
- Clone this repo;
- Push it to Heroku.

Since Heroku has an [ephemeral filesystem](https://devcenter.heroku.com/articles/dynos#ephemeral-filesystem), it's probably not be the best host for Dat until we get the `dat-postgres` module up and running with this repo (work in progress).

If you still wish to use Heroku for more than testing Dat and want to avoid losing your data, you'll have to add your ```.dat``` folder to git before pushing (check the other branches for examples).

License
-------
[MIT](https://raw.github.com/bmpvieira/heroku-dat/master/LICENSE)
