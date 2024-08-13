import Head from "next/head";
//
export { PoemPage };

/**
 * A page for displaying a poem.
 *
 * @param {object} props
 * @param {string} props.title The title of the poem.
 * @param {string} props.author The author of the poem.
 * @param {React.ReactNode} props.children The poem content.
 *
 * @example
 * <PoemPage title={"The Road Not Taken"} author={"Robert Frost"}>
 *  <p>Two roads diverged in a yellow wood,<br />...</p>
 * </PoemPage>
 */
function PoemPage(props) {
  const { title, author, children } = props;
  return (
    <>
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1>
          <a href="/">Sandcastles</a>
          {" ⎸ "}
          {title}
        </h1>
        <h2>{author}</h2>
        {children}
      </main>
      <footer>
        <a href="/">Home</a>
      </footer>
    </>
  );
}
