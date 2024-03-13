const childProcess = require("node:child_process");
const path = require("path");

// 启动所有项目

const filePath = {
  vue2: path.join(__dirname, "../vue2"),
  vue3: path.join(__dirname, "../vue3"),
  react18: path.join(__dirname, "../react18"),
  service: path.join(__dirname, "../service"),
};
console.log(filePath);
// cd 子应用的目录 npm start 启动项目
function runChild() {
  Object.values(filePath).forEach((item) => {
    console.log(item);
    childProcess.spawn(`cd ${item} && npm run dev`, {
      stdio: "inherit",
      shell: true,
    });
  });
}
runChild();
