# most-followed-users

A React native application to show most followed users in github by using Apollo Client and GitHub's GraphQL API.


## Generate Access Token

* [add your own REACT_APP_GITHUB_PERSONAL_ACCESS_TOKEN in .config file](https://help.github.com/articles/creating-a-personal-access-token-for-the-command-line/)
  * scopes/permissions you need to check: admin:org, repo, user, notifications


## Installation

```sh
$ git clone git@github.com:muhzi4u/most-followed-users.git
$ cd most-followed-users
$ Copy config.example.js into a file called config.js, and replace accessToken with your token
$ yarn install
$ react-native run-android

```

## License

MIT
