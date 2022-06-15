import React, { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { Environment } from '@react-three/drei'
import { Model } from './Model'

export default function Three() {
	// calc scrollbar width
	const scrollbarWidth = window.innerWidth - document.body.clientWidth

	return (
		// set width to screen minus scrollbar, bypassing section max-width
		<div
			className={`mx-auto aspect-square max-w-[914px]`}
			style={{ width: `calc(100vw - ${scrollbarWidth}px` }}
		>
			<Canvas>
				<Suspense fallback={null}>
					<Model />
				</Suspense>
				<Environment preset="dawn" />
			</Canvas>
		</div>
	)
}
