const ghpages = require("gh-pages");

ghpages.publish(
  "__sapper__/export",
  {
    branch: "master",
    repo: "https://github.com/ZuperZee/zuperzee.github.io.git",
    user: {
      name: "ZuperZee",
      email: "zuperpenguin@gmail.com",
    },
  },
  () => {
    console.log("Deploy Complete!");
  }
);
