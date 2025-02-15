import { TestimonialType } from '../../../../../shared/types'
import Test1 from './../../../../../shared/images/about-us-photo.png'
import Test2 from './../../../../../shared/images/about-us-photo2.png'
import Test3 from './../../../../../shared/images/img-test-event.png'
import Dony from './../../../../../shared/images/dony.jpg'
import Reman from './../../../../../shared/images/reman.jpg'
import andor from './../../../../../shared//images/andor.png'
const Testimonials: TestimonialType[] = [
	{
		artist: 'Andor Gabriel',
		testimonialText:
			'Pentru mine, muzica nu înseamnă doar sunete, ci emoție pură și conexiune autentică. Când lucrez cu o echipă care înțelege asta, procesul devine natural și inspirația curge liber. Aici am găsit exact acel vibe – oameni dedicați, cu care creezi nu doar piese, ci experiențe memorabile. Super energie, super colaborare!',
		artistImage: andor,
		aboutArtist: '(DJ & Music Producer, based in Dubai):',
	},
	{
		artist: 'Reman',
		testimonialText:
			'"Atunci când creezi muzică, ai nevoie de oameni care îți simt vibe-ul și îl duc mai departe. Exact asta am găsit aici – o echipă cu pasiune reală, care înțelege artistul și știe să transforme ideile în piese de impact. Lucrăm pe aceeași frecvență și asta face toată diferența. Respect maxim pentru ce fac!"',
		artistImage: Reman,
		aboutArtist: 'DJ & Music Producer, based in Romania',
	},
	{
		artist: 'Dony',
		testimonialText:
			'Industria muzicală nu înseamnă doar talent, ci și să ai în jur oameni care îți înțeleg viziunea și te ajută să o duci la nivelul următor. Aici am găsit exact asta – o echipă fresh, profesionistă și dedicată. Procesul de creație este fluid, iar energia din studio e mereu la cote maxime. Tot ce ai nevoie pentru a face muzică bună!',
		artistImage: Dony,
		aboutArtist: 'Singer, Composer & Music Producer',
	},
]

export default Testimonials
