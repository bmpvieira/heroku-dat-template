Heroku-dat-template
===================

A simple Heroku app template for deploying [Dat](http://github.com/maxogden/dat)

### Permanent Tabular Data Storage
Data will get stored permanently and be available to clone as long as the app remains active.

[Heroku Postgres](https://addons.heroku.com/heroku-postgresql)
10,000 rows free.

[![Deploy](https://www.herokucdn.com/deploy/button.png)](https://heroku.com/deploy?template=https://github.com/bmpvieira/heroku-dat-template/tree/postgres)

### Temporary Data Storage

[Heroku Ephemeral Filesystem](https://devcenter.heroku.com/articles/dynos#ephemeral-filesystem). Data will be temporary. This is the best option for testing and playing around with dat, but not for stable use.

[![Deploy](https://www.herokucdn.com/deploy/button.png)](https://heroku.com/deploy?template=https://github.com/bmpvieira/heroku-dat-template.git)

### TODO
Only tabular data is stored in postgres/redis. Blobs will still be stored on the ephemeral filesystem (unless you fork this and put in your own blob backend)


Usage
-----
After hitting one of the purple buttons, and logging into herkou, you'll see this screen:

![landing](screens/landing.png)

You should enter a unique, memorable name for your dat. It will be available at *name*.herokuapp.com.

Then, scroll down.

You will see a place to enter some options.

![environment](screens/options.png)
* `DEBUG`
  - defaults to `false`
  - `*` enables debug mode.
  - view logs with ```heroku logs```

![environment](screens/password-enter.png)

Once you enter in your desired options, hit the "Deploy" button.

You might need to wait a couple of minutes while heroku starts.

![deployment](screens/deployment.png)

You can then click "view" and your dat will be available at *name*.herokuapp.com.

![empty-dat](screens/empty-dat.png)

Troubleshooting
---------------

Dat is still in beta. If you have any trouble, it's probably because we did something wrong! Please tell us by opening an issue here or going to #dat on IRC in freenode.


<!-- https://devcenter.heroku.com/articles/heroku-button -->
<!-- http://expeditedssl.com/heroku-button-maker -->

License
-------
[MIT](https://raw.github.com/bmpvieira/heroku-dat/master/LICENSE)
