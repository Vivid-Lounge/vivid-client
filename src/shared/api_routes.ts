export const API_URI = import.meta.env.VITE_API_URI as string
export const SERVE_IMAGES_URI = import.meta.env.VITE_SERVE_IMAGES_URI as string
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
			method: 'GET',
			route: '/gallery'
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
	getGallery: { route: '/gallery', method: 'GET'},
	createEvent: { route: '/events', method: 'POST' },
	updateEvent: { route: '/events/:slug', method: 'PUT' },
	deleteEvent: { route: '/events/:slug', method: 'DELETE' },
}
