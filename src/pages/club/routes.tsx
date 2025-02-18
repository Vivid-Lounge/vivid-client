// import React, { lazy } from 'react'
import { createBrowserRouter, RouteObject } from 'react-router-dom'
import MainLayout from './layout/MainLayout'
import { Gallery, Events, MainPage, About } from './pages'
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
		path: '/gallery',
		name: 'Gallery',
		element: (
			<MainLayout>
				<Gallery />
			</MainLayout>
		),
	},
	{
		path: '/about',
		name: 'About',
		element: (
			<MainLayout>
				<About />
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
