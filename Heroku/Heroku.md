# Install Heroku CLI

From `https://devcenter.heroku.com/articles/heroku-cli`, Normal Installer nbd.

## Login

`Heroku login` to login
`Heroku login -i` to login in terminal

## heroku create `<ServerName>`

Name must start with a letter, end with a letter or digit and can only contain lowercase letters, digits, and dashes.

Typed: `heroku create dummy-server12`
Result: `https://dummy-server12.herokuapp.com/ | https://git.heroku.com/dummy-server12.git`

[ "website" || "git repo" ]

## Install dependancies tp create yarn.lock, create deployment branch then Push code to git

yarn install
git branch deployment
git init
git add -A
git commit -m "initcal commit"
git remote -v
git remote add heroku [`repo from above`]
git push heroku master

## Package.json

"engines": {
    "node": "12.6.0",
    "yarn": "1.16.0"
},

## Open Project

`heroku open`

## See logs

`heroku logs`
