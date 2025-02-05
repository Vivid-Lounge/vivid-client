import AndorGabriel from './../../../../../shared/images/img-test-event.png'
import LunaShadow from './../../../../../shared/images/about-us-photo2.png'

export const events = [
    {
      artist: "Andor Gabriel",
      date: "Saturday, December 14th",
      dj: "KATTIA | DUSKE",
      slug: "andor_gabriel",
      description: "A captivating performance by Andor Gabriel with special guests Kattia and Duske.",
      image: AndorGabriel,
      type: "party",
      schedule: "schedule_text_andor"
    },
    {
      artist: "Luna Shadow",
      date: "Friday, January 20th",
      dj: "SHADOW ARENA",
      slug: "luna_shadow",
      description: "Experience the ethereal sounds of Luna Shadow live at Shadow Arena.",
      image: LunaShadow,
      type: "party",
      schedule: "schedule_text_luna_shadow"
    },
]

// export interface Event {
// 	title: string
// 	posterImage: string
// 	coverImage: string
// 	date: Date | null
// 	ticketsLink: string
// 	phone: string
// 	slug?: string
// 	description: string
// 	_id: string
// }
