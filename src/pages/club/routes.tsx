import React, { lazy } from 'react'
import { createBrowserRouter, RouteObject } from 'react-router-dom'

const MainPage = lazy(async() => await import('./pages/MainPage'))
const EventPage = lazy(async() => await import('./pages/Events'))
const AboutEventPage = lazy(async() => await import('./pages/Events/events/EventPage'))

type VividRouteObject = RouteObject & {
    path: string
    name: string
}

const routes: VividRouteObject[] = [
    {
        path: '/',
        name: 'VividClub',
        element: <MainPage />
    },
    {
        path: '/events',
        name: 'Events',
        element: <EventPage />
    },
    {
        path: '/events/:slug',
        name: 'EventDetail',
        element: <AboutEventPage />
    }
]

const router = createBrowserRouter(routes)

export {router}