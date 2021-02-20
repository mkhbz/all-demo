console.log('提交了代码')
// fs模块读取当前的commit日志
// .git/COMMIT_EDITMSG
const msg = require('fs').readFileSync('.git/COMMIT_EDITMSG', 'utf-8').trim()
console.log('提交的日志是')
console.log(msg)
const start = [
    'feat :',
    'fix :',
    'docs :',
    'refactor :',
    'chore :',
    'style :',
    'revert :',
    '`Merge branch ',

]
function isBelong(arg1) {
    return msg.startsWith(arg1)
}
if (!start.filter(isBelong)) {
    console.log('找不到')
    //阻止进程
    process.exit(1)
}
console.log('提交成功了')