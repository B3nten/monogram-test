import styles from './DisplayGrid.module.css'

export function DisplayGrid({ className }: { className?: string }) {
	return (
		<div
			className={`absolute inset-0 mx-auto grid max-w-[1350px] grid-cols-2 px-4 opacity-20 sm:grid-cols-3 sm:px-10 lg:grid-cols-4 ${className}`}
		>
			<div className={styles.dashes}></div>
			<div className={styles.dashes + ' ' + 'hidden lg:block'}></div>
			<div className={styles.dashes + ' ' + 'hidden sm:block'}></div>
			<div className={styles.dashes + ' ' + styles.end + ' ' + ''}></div>
		</div>
	)
}
