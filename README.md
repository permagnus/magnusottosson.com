# magnusottosson.com

# Deploy Instructions
To deploy the site to github pages perform the following commands
```
rm -rf build/
bundle exec middleman build
bundle exec middleman deploy
```
Note: You need to remove the build folder before deploy becuase if there is a previous deploy left then the git repo is fucked up. See https://github.com/middleman-contrib/middleman-deploy/issues/114
