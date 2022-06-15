import { useEffect, useState } from 'react'
import { getGPUTier } from 'detect-gpu'

export function use3D() {
	const [useThree, setUseThree] = useState(false)
	useEffect(() => {
		;(async () => {
			const gpuTier = await getGPUTier()
			if (gpuTier && gpuTier.tier && gpuTier.tier > 0) setUseThree(true)
		})()
	}, [])
	return useThree
}
