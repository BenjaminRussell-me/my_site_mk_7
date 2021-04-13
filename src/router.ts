import { createWebHistory, createRouter } from 'vue-router';
import Home from './views/Home.vue';
import About from './views/About.vue';
import Projects from './views/Projects.vue';
import Project from './views/Project.vue'
import Content from './views/Content.vue';
import Resume from './views/Resume.vue';
const routes = [
	{
		path: '/',
		name: 'Home',
		component: Home,
	},
	{
		path: '/About',
		name: 'About',
		component: About,
	},
	{
		path: '/Projects',
		name: 'Projects',
		component: Projects,
	},
	{
		path: '/Projects/:id',
		name: 'Project',
		component: Project,
	},
	{
		path: '/Content',
		name: 'Content',
		component: Content,
	},
	{path: '/Resume',
	name: 'Resume',
	component: Resume
}

];

const router = createRouter({
	history: createWebHistory(),
	routes,
});

export default router;