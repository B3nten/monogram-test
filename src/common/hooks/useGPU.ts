import { useEffect, useState } from 'react'
import { getGPUTier } from 'detect-gpu'
import type { TierResult } from 'detect-gpu'

export function useGPU() {
	const [gpu, setGPU] = useState<TierResult>({ tier: 0, type: 'BENCHMARK' })
	useEffect(() => {
		;(async () => {
			const stats = await getGPUTier()
			console.log(stats)
			setGPU(stats)
		})()
	}, [])
	return gpu
}
