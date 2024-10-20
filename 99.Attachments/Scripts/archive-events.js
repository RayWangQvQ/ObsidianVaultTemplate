const fs = require('fs');
const path = require('path');

const baseDir = app.vault.adapter.basePath;
const eventListPath = path.join(baseDir, '01.MOC/Event List.md');

function logMessage(message, error = null) {
    if (error) {
        console.error(message, error); // 控制台日志，开发者调试页查看
        new Notice(`${message}: ${error.message}`); // 在 Obsidian 通知中显示错误信息
    } else {
        console.log(message);
        new Notice(message);
    }
}

// 读取 "Event List" 文件内容
fs.readFile(eventListPath, 'utf8', (err, data) => {
    if (err) {
        logMessage('读取文件时出错：', err);
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
    fs.writeFile(eventListPath, newData, 'utf8', (err) => {
        if (err) {
            logMessage('写回原文件时出错：', err);
            return;
        }
        logMessage('未完成的任务行已写回"Event List"文件，并标记为代办状态！');
    });
});

module.exports = async (params) => {
    logMessage("代码执行完成！");
};
