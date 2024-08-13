import Head from "next/head";
import { PoemPage } from "../components/PoemPage";
//
export default Page;

function Page() {
  return (
    <PoemPage
      title={"To His Heart, Bidding It Have No Fear"}
      author={"William Butler Yeats"}
    >
      <p>
        Be you still, be you still, trembling heart;
        <br />
        Remember the wisdom out of the old days:
        <br />
        Him who trembles before the flame and the flood,
        <br />
        And the winds that blow through the starry ways,
        <br />
        Let the starry winds and the flame and the flood
        <br />
        Cover over and hide, for he has no part
        <br />
        With the lonely, majestical multitude.
        <br />
      </p>
    </PoemPage>
  );
}
