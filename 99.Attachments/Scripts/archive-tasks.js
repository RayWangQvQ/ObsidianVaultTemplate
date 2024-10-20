const fs = require('fs');
const path = require('path');

const baseDir = app.vault.adapter.basePath;
const todoListPath = path.join(baseDir, '01.MOC/☑︎Todo List.md');
const inboxPath = path.join(baseDir, '01.MOC/☑︎Todo Archive.md');

function logMessage(message, error = null) {
    if (error) {
        console.error(message, error); // 控制台日志，开发者调试页查看
        new Notice(`${message}: ${error.message}`); // 在 Obsidian 通知中显示错误信息
    } else {
        console.log(message);
        new Notice(message);
    }
}

// 读取 "Todo List" 文件内容
fs.readFile(todoListPath, 'utf8', (err, data) => {
    if (err) {
        logMessage('Error reading file:', err);
        return;
    }

    // 使用换行符分割文本，并筛选出各自的任务行
    const doneTasks = data
        .split('\n')
        .filter(line => line.trim().startsWith('- [x]'));
    const notTaskLine = data
        .split('\n')
        .filter(line => !line.trim().startsWith('- [x]'));

    // 将已完成的任务写入 "☑︎Todo Archive" 文件
    const completedTasksContent = "\n" + doneTasks.join('\n');
    fs.appendFile(inboxPath, completedTasksContent, 'utf8', (err) => {
        if (err) {
            logMessage('Error writing file:', err);
            return;
        }
        logMessage('Completed tasks moved to "☑︎Todo Archive" successfully!');
    });

    // 将未完成的任务写回原文件
    const newData = notTaskLine.join('\n');
    fs.writeFile(todoListPath, newData, 'utf8', (err) => {
        if (err) {
            console.error('Error writing file:', err);
            return;
        }
        logMessage('Uncompleted tasks written back to "Todo List" successfully!');
    });
});

module.exports = async (params) => {
    logMessage("Archive Tasks: All Success!")
}