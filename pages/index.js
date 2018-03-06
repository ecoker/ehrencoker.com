import React, { Component } from 'react'
import Head from 'next/head'

// Layout
import Storyteller from '../layouts/Storyteller'

// Components
import Footer from '../components/Footer'
import Header from '../components/Header'

import Intro from '../components/Intro'
import ChapterOne from '../components/ChapterOne'

class Index extends Component {
    render() {
		return (
			<div>
				<Head>
					<title>Ehren Coker</title>
					<meta name="viewport" content="initial-scale=1.0, width=device-width" />
				</Head>	
				<Storyteller>
					<Header />
					<Intro />
					<ChapterOne />
					<Footer />
					<style jsx global>{`
					`}</style>
				</Storyteller>
			</div>
		)
    }
}

export default Index
