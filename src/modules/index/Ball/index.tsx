import dynamic from 'next/dynamic'

const Three = dynamic(() => import('./Canvas'), {
	ssr: false,
	loading: () => <img src="/assets/ball.webp" alt="" />
})

export function Ball() {
	return <Three />
}
