import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>Sandcastles</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1>Sandcastles</h1>
        <ul>
          <li>
            <a href="/nabokov-superman">The Man of To-morrow's Lament by Vladimir Nabokov</a>
          </li>
        </ul>
      </main>
    </>
  )
}
