const fs = require('fs');

// 读取 "Todo List" 文件内容
// 这里路径要修改！！
fs.readFile('/Users/caocao/Work/Amap/Todo List.md', 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading file:', err);
        return;
    }

    // 使用换行符分割文本，并筛选出各自的任务行
    const lines = data.split('\n').filter(line => line.trim().startsWith('- [x]'));
    const notlines = data.split('\n').filter(line => !(line.trim().startsWith('- [x]') || line.trim().startsWith('!')));

    // 将已完成的任务写入 "Inbox" 文件
    // 这里路径要修改！！
    const completedTasksContent = "\n"+lines.join('\n');
    fs.appendFile('/Users/caocao/Work/Amap/Inbox.md', completedTasksContent, 'utf8', (err) => {
        if (err) {
            console.error('Error writing file:', err);
            return;
        }
        console.log('Completed tasks moved to "Inbox" successfully!');
    });

    // 将未完成的任务写回原文件
    // 这里路径要修改！！
    const newData = notlines.join('\n');
    fs.writeFile('/Users/caocao/Work/Amap/Todo List.md', newData, 'utf8', (err) => {
        if (err) {
            console.error('Error writing file:', err);
            return;
        }
        console.log('Uncompleted tasks written back to "Todo List" successfully!');
    });
});

module.exports = async (params) => {
    console.log("finished running")
    }