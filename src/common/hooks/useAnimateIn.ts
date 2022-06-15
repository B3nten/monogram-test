import { useInView } from 'react-intersection-observer'

export function useAnimateIn({
	threshold = 1,
	triggerOnce = true,
	delay = 0,
	animation = 'in',
	base = 'out'
} = {}) {
	const [ref] = useInView({
		threshold: threshold,
		triggerOnce: triggerOnce,
		delay: delay,
		onChange: (inView, entry) => {
			entry.target.classList.add(base)
			if (inView) {
				entry.target.classList.add(animation)
			}
		}
	})

	return ref
}
