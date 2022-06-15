import { useEffect, useState } from 'react'
import { getGPUTier } from 'detect-gpu'

export function use3D() {
	const [gpu, setGPU] = useState(false)
	useEffect(() => {
		;(async () => {
			const gpuTier = await getGPUTier()
			console.log(gpuTier)
			if (gpuTier && gpuTier.tier && gpuTier.tier > 0) setGPU(true)
		})()
	}, [])
	return gpu
}
