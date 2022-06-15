import { useEffect, useState } from 'react'
import { getGPUTier } from 'detect-gpu'

export function use3D() {
	const [useThree, setUseThree] = useState(false)
	useEffect(() => {
		;(async () => {
			const gpuTier = await getGPUTier()
			console.log(gpuTier)
			if (gpuTier.tier > 0) setUseThree(true)
		})()
	}, [])
	return useThree
}
