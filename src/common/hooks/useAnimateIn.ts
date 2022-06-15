import { useInView } from 'react-intersection-observer'

export function useAnimateIn(delay = 5, triggerOnce = true) {
	const [ref] = useInView({
		threshold: 1,
		triggerOnce: triggerOnce,
		delay: delay,
		onChange: (inView, entry) => {
			entry.target.classList.add('out')
			if (inView) {
				entry.target.classList.add('in')
			}
		}
	})

	return ref
}
