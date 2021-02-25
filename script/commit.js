// 提交代码日志的规范
console.log('提交了代码');
// fs模块读取当前的commit日志
// .git/COMMIT_EDITMSG
const msg = require('fs').readFileSync('.git/COMMIT_EDITMSG', 'utf-8').trim();
console.log('提交的日志是');
console.log(msg);
const start = [
  'feat: ',
  'fix: ',
  'docs: ',
  'refactor: ',
  'chore: ',
  'style: ',
  'revert: ',
  'Merge: ',
];
function isBelong(arg1) {
  return msg.startsWith(arg1);
}
if (!start.find(isBelong)) {
  console.log('\033[40;31m 提交日志不规范,请按照下面格式 \033[0m\n');
  console.log(
    '\033[40;31m chore : // Other changes that don not modify src or test files.改变构建流程、或者增加依赖库、工具等 \033[0m\n'
  );
  console.log(
    '\033[40;31m docs : // 仅仅修改了文档，比如README, CHANGELOG, CONTRIBUTE等等 \033[0m\n'
  );
  console.log(
    '\033[40;31m feat : // Adds a new feature. 新增feature \033[0m\n'
  );
  console.log('\033[40;31m fix : // Solves a bug. 修复bug \033[0m\n');
  console.log(
    '\033[40;31m perf : // Improves performance. 优化相关，比如提升性能、体验 \033[0m\n'
  );
  console.log(
    '\033[40;31m refactor : // Rewrites code without feature, performance or bug changes. 代码重构，没有加新功能或者修复bug \033[0m\n'
  );
  console.log(
    '\033[40;31m revert : // Reverts a previous commit. 回滚到上一个版本 \033[0m\n'
  );
  console.log(
    '\033[40;31m style : // Improves formatting, white-space. 仅仅修改了空格、格式缩进、逗号等等，不改变代码逻辑 \033[0m\n'
  );
  console.log(
    '\033[40;31m test : // Adds or modifies tests. 测试用例，包括单元测试、集成测试等 \033[0m\n'
  );
  //阻止进程
  process.exit(1);
}
console.log('提交ok');
