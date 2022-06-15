import { useInView } from 'react-intersection-observer'

export function useAnimateIn({
	threshold = 1, // Threshold to trigger event
	triggerOnce = true,
	delay = 0,
	animation = 'in', // class to add
	base = 'out' // starting class
} = {}) {
	const [ref] = useInView({
		threshold: threshold,
		triggerOnce: triggerOnce,
		delay: delay,
		// Will run on mount, will not play transition if initially inview
		onChange: (inView, entry) => {
			// Add base class
			entry.target.classList.add(base)
			// Add animation class if inView
			if (inView) {
				entry.target.classList.add(animation)
			}
		}
	})

	return ref
}
