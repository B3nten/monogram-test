import { useAnimateIn } from '@src/common/hooks/useAnimateIn'
import Head from 'next/head'
import { API } from '@src/modules/index/API'
import { Hero } from '@src/modules/index/Hero'
import { Markup, BlockStack } from '@src/modules/index/Markup'
import { Audit } from '@src/modules/index/Audit'
import { JS } from '@src/modules/index/JS'

export default function Home() {
	return (
		<>
			<Head>
				<title>Monogram Test - Benton</title>
				<meta
					name="description"
					content="This is a test page built by Benton Boychuk-Chorney."
				></meta>
			</Head>
			{/* Hero section */}
			<Hero />
			{/* Javascript computer section */}
			<JS />
			{/* API section */}
			<API />
			{/* Markup section */}
			<Markup />
			<BlockStack />
			{/* Audit section */}
			<Audit />
		</>
	)
}
