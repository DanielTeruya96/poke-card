import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import App from '../src/App';

export default function Home() {
    return (
        <div>
            <Head>
                <link rel="icon"  sizes="32x32"  href="/images/pokemon_7025(big).ico" />
                <meta name="theme-color" content="#ffffff" />
                <title>Poke Card</title>
            </Head>

            <App/>
        </div>
    )
}
