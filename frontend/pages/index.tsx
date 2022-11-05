import Head from 'next/head'

export default function Home() {
  return (
    <div>
      <Head>
        <title>pointcheck.gg</title>
        {/* SEO stuff */}
        <meta name="description" content="Generated by create next app" />{' '}
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>
          Welcome to <span className="font-bold font-xl">pointcheck.gg!</span>
        </h1>
      </main>

      <footer></footer>
    </div>
  )
}