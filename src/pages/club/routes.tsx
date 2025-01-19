import React, { lazy } from 'react'
import { createBrowserRouter, RouteObject } from 'react-router-dom'
import MainLayout from './layout/MainLayout'
import { Events, MainPage } from './pages'
import EventPage from './pages/Events/events/EventPage'

type VividRouteObject = RouteObject & {
	path: string
	name: string
}

const routes: VividRouteObject[] = [
	{
		path: '/',
		name: 'VividClub',
		element: (
			<MainLayout>
				<MainPage />
			</MainLayout>
		),
	},
	{
		path: '/events',
		name: 'Events',
		element: (
			<MainLayout>
				<Events />
			</MainLayout>
		),
	},
	{
		path: '/events/:slug',
		name: 'EventDetail',
		element: (
			<MainLayout>
				<EventPage />
			</MainLayout>
		),
	},
]

const router = createBrowserRouter(routes)

export { router }
