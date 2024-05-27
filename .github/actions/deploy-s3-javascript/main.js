//inside deploy-s3-javascript run this command
///Users/varjaisw/Desktop/MyPC/My_Study/GithubActions/gh-custom-actions/.github/actions/deploy-s3-javascript
//npm init -y
//above will unlock npm command 


//inside deploy-s3-javascript run this command
//npm install @actions/core @actions/github @actions/exec

const core = require('@actions/core');
//const github = require('@actions/github');
const exec = require('@actions/exec');

function run() {
  core.notice('Hello from my custom javascript action!');

  //1) get input values
  const bucket = core.getInput('bucket-name',{required: true});
  const bucketRegion = core.getInput('bucket-region',{required: true});
  const distFolder = core.getInput('dist-folder',{required: true});
  
  //2) Upload files to S3
  exec.exec(`aws s3 sync ${distFolder} s3://${bucket} --region ${bucketRegion}`);

  //3) Set output get website url
  const websiteUrl = `http://${bucket}.s3-website-${bucketRegion}.amazonaws.com`;
  //http://vj-gha-custom-action-hosting.s3-website.ap-south-1.amazonaws.com
  core.setOutput('website-url', websiteUrl);

}

run();

