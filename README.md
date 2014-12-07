Heroku-dat-template
===================

## A simple Heroku app template for deploying [Dat](http://github.com/maxogden/dat)

This repo allows you to easily deploy dat on heroku. More information about each of the three deployment methods can be found below:

### Temporary Data Storage 
Deploy a dat on the Heroku [Ephemeral Filesystem](https://devcenter.heroku.com/articles/dynos#ephemeral-filesystem). Data will be temporary. This is the best option for testing and playing around with dat.

[![Deploy](https://www.herokucdn.com/deploy/button.png)](https://heroku.com/deploy?template=https://github.com/bmpvieira/heroku-dat-template.git)

### Permanent Data Storage 
Data will get stored permanently and be available to clone as long as the app remains active.

**Option 1.** [Heroku Postgres](https://addons.heroku.com/heroku-postgresql) 
stores a maximum of 10,000 rows for free. `postgres` branch

[![Deploy](https://www.herokucdn.com/deploy/button.png)](https://heroku.com/deploy?template=https://github.com/bmpvieira/heroku-dat-template/tree/postgres)

**Option 2.** [Redis Cloud](https://addons.heroku.com/rediscloud) 
stores a maximum of 25MB for free. This is a high-performance service with no database connection limit. `redis` branch

[![Deploy](https://www.herokucdn.com/deploy/button.png)](https://heroku.com/deploy?template=https://github.com/bmpvieira/heroku-dat-template/tree/redis)


_Note: Only tabular data is stored in postgres/redis. Blobs will still be stored on the ephemeral filesystem (unless you fork this and put in your own blob backend)_

Environment Variables
-----
During deploy you will be asked to provide values for the following environment variables.

* `DEBUG` - enter `*` to enable debug logging info to show up in `heroku logs`
* `DAT_ADMIN_USER` and `DAT_ADMIN_PASS` - these make dat read-only for anonymous users
* `HEROKU_URL` set this to your heroku app url, so it can self ping itself to not be spinned down

Usage
-----
Just click one of the purple buttons above.

Alternatively, you can:
- Create an Heroku app
- Clone this repo
- Push it to Heroku

<!-- https://devcenter.heroku.com/articles/heroku-button -->
<!-- http://expeditedssl.com/heroku-button-maker -->

License
-------
[MIT](https://raw.github.com/bmpvieira/heroku-dat/master/LICENSE)
