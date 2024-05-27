//inside deploy-s3-javascript run this command
///Users/varjaisw/Desktop/MyPC/My_Study/GithubActions/gh-custom-actions/.github/actions/deploy-s3-javascript
//npm init -y
//above will unlock npm command 


//inside deploy-s3-javascript run this command
//npm install @actions/core @actions/github @actions/exec

const core = require('@actions/core');
const github = require('@actions/github');
const exec = require('@actions/exec');

function run() {
  core.notice('Hello from my custom javascript action!');
}

run();

