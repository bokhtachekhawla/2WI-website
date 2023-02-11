import styles from '@/styles/Home.module.css'
import Head from 'next/head'
import {AboutUs,AboutEvent, Agenda,Footer,Hero,OurPartners,OurSpeakers,TheyTrusedUs} from '../components'



export default function Home() {
  return (
    <>
    <div className="">
      <Head>
        <title>WTM Algiers 2WI</title>
        <link rel="shortcut icon" href="/logo_black.png" src="/logo_black.png" />
      </Head>
      <Hero />
      <div className='font-IBM-Plex'>
      <AboutEvent />
        <AboutUs />
        <OurPartners />
        <OurSpeakers/>
        <TheyTrusedUs/>
        <Agenda />
      </div>
      <Footer />
      </div>

    </>
  )
}
