import Head from "next/head";
//
export default Page;

function Page() {
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
            <a href="/nabokov-superman">
              The Man of To-morrow's Lament by Vladimir Nabokov
            </a>
          </li>
          <li>
            <a href="/tao-te-ching-55">Tao Te Ching (55) by Lao Tzu</a>
          </li>
          <li>
            <a href="/the-road-not-taken">The Road Not Taken by Robert Frost</a>
          </li>
          <li>
            <a href="/acquainted-with-the-night">
              Acquainted with the Night by Robert Frost
            </a>
          </li>
          <li>
            <a href="/stopping-by-woods-on-a-snow-evening">
              Stopping by Woods on a Snowy Evening by Robert Frost
            </a>
          </li>
          <li>
            <a href="/to-his-heart-bidding-it-have-no-fear">
              To His Heart, Bidding It Have No Fear by William Butler Yeats
            </a>
          </li>
        </ul>
      </main>
    </>
  );
}
