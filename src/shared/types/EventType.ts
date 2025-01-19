export interface Event {
	title: string
	posterImage: string
	coverImage: string
	date: Date | null
	ticketsLink: string
	phone: string
	slug?: string
	description: string
	_id: string
}
