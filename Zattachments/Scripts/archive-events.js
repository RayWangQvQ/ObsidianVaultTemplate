const fs = require('fs');

// 读取 "Event List" 文件内容
// 这里路径要修改！！
fs.readFile('/Users/caocao/Work/Amap/Event List.md', 'utf8', (err, data) => {
    if (err) {
        console.error('读取文件时出错：', err);
        return;
    }

    // 使用换行符分割文本，并筛选出各自的任务行
    const lines = data.split('\n');
    const newData = lines.map(line => {
        if (line.trim().startsWith('- [ ]')) {
            // 将待办任务标记为代办状态
            return line.replace('- [ ]', '- [<]');
        } else if (!line.trim().startsWith('- [x]')) {
            // 保留非已完成任务行
            return line;
        }
        return null; // 已完成任务行标记为 null，以便后续过滤掉
    }).filter(Boolean).join('\n\n'); // 过滤掉已完成任务行，并将任务行重新组合成文本

    // 将未完成的任务写回原文件
    // 这里路径要修改！！
    fs.writeFile('/Users/caocao/Work/Amap/Event List.md', newData, 'utf8', (err) => {
        if (err) {
            console.error('写回原文件时出错：', err);
            return;
        }
        console.log('未完成的任务行已写回"Event List"文件，并标记为代办状态！');
    });
});

module.exports = async (params) => {
    console.log("代码执行完成！");
};
