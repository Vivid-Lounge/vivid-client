export const API_URI = 'http://192.168.54.101:3000/api'
export const apiRoutes = {
	events: [
		{
			method: 'GET',
			route: '/events',
		},
		{
			method: 'GET',
			route: '/events/:slug',
		},
		{
			method: 'POST',
			route: '/events',
		},
		{
			method: 'PUT',
			route: '/events/:slug',
		},
		{
			method: 'DELETE',
			route: '/events/:slug',
		},
	],
}

export const api = {
	getEvents: { route: '/events', method: 'GET' },
	getEvent: { route: '/events/', method: 'GET' },
	createEvent: { route: '/events', method: 'POST' },
	updateEvent: { route: '/events/:slug', method: 'PUT' },
	deleteEvent: { route: '/events/:slug', method: 'DELETE' },
}
