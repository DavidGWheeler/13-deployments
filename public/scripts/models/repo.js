'use strict';

(function(module) {
  const repos = {};

  repos.all = [];

  repos.requestRepos = function(callback) {
    // DONE: Refactor your ajax call to use the $.get method, and make a request to our new proxy route.
    $.get('github/user/repos')
    .then(callback)
    .catch(error => console.log(error));
  }
  repos.with = attr => repos.all.filter(repo => repo[attr]);

  module.repos = repos;
})(window);
