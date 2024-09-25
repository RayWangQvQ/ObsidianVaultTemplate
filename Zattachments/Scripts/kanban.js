let togglApi;
let quickAddApi;
let projects;


const fs = require('fs');

//修改这里的路径
var todo = fs.readFileSync('/Users/caocao/Work/Amap/Todo List.md').toString().split("\n");

let menu = {};
for (let i = 0; i<todo.length; i++) {
	if (todo[i].startsWith("![[")) {
		todo[i] = todo[i].replace("!","");
		menu[todo[i]] = todo[i];
	};
	if (todo[i].startsWith("- [ ]")) {
		todo[i] = todo[i].replace("- [ ]","");
		menu[todo[i]] = todo[i];
	}
}

//把这里改成你自己的toggl track项目
const projectList = {
	"💥 CHIP-ADM": "💥 CHIP-ADM",
	"🔎 Data-driven Research": "🔎 Data-driven Research",
	"✨ Stellar Astro": "✨ Stellar Astro",
	"⌨️ UCB Code": "⌨️ UCB Code",
	"🤡 Workflow Building": "🤡 Workflow Building",
	"📝 Meetings": "📝 Meetings",
	"🔉 Talks": "🔉 Talks",
	"🧸 Others": "🧸 Others"
}
async function selectTODO(menu) {
	const { suggester } = quickAddApi;
	const options = Object.keys(menu);

	const choice = await suggester(options,options);
	if (!choice) return;

	const todo = menu[choice];
	selectProject(todo,projectList);
}

async function selectProject(todo,menu) {
	const { suggester } = quickAddApi;
	const options = Object.keys(menu);

	const choice = await suggester(options,options);
	if (!choice) return;


	const project = menu[choice];


	const projectID = projects.find(p => p.name === project).id;
	await togglApi._apiManager.startTimer({ description: todo, pid: projectID });
}


module.exports = async function togglManager(params) {
	togglApi = params.app.plugins.plugins["obsidian-toggl-integration"].toggl;
	quickAddApi = params.quickAddApi;
	projects = await togglApi._apiManager.getProjects();
	selectTODO(menu);
}