Heroku-dat-template
===================
> A simple Heroku app template for deploying [Dat](http://github.com/maxogden/dat)

Deploy a dat on the Heroku [Ephemeral Filesystem](https://devcenter.heroku.com/articles/dynos#ephemeral-filesystem) (data will be temporary):

[![Deploy](https://www.herokucdn.com/deploy/button.png)](https://heroku.com/deploy?template=https://github.com/bmpvieira/heroku-dat-template.git)

Deploy a dat on top of Heroku Postgres (data will get stored permanently). Uses the `postgres` branch of this repo:

[![Deploy](https://www.herokucdn.com/deploy/button.png)](https://heroku.com/deploy?template=https://github.com/bmpvieira/heroku-dat-template/tree/postgres)

**note** only tabular data is stored in postgres. blobs will still be stored on the ephemeral filesystem (unless you fork this and put in your own blob backend)

Environment Variables
-----
During deploy you will be asked to provide values for 3 environment variables.

* `DEBUG` - enter `*` to enable debug logging info to show up in `heroku logs`
* `DAT_ADMIN_USER` and `DAT_ADMIN_PASS` - these make dat read-only for anonymous users

Usage
-----
Just click the purple button above.

Alternatively:
- Create an Heroku app;
- Clone this repo;
- Push it to Heroku.

<!-- https://devcenter.heroku.com/articles/heroku-button -->
<!-- http://expeditedssl.com/heroku-button-maker -->

License
-------
[MIT](https://raw.github.com/bmpvieira/heroku-dat/master/LICENSE)
