import Head from "next/head";
import { PoemPage } from "../components/PoemPage";
//
export default Page;

function Page() {
  return (
    <PoemPage title={"Acquainted with the Night"} author={"Robert Frost"}>
      <p>
        I have been one acquainted with the night.
        <br />
        I have walked out in rain—and back in rain.
        <br />
        I have outwalked the furthest city light.
        <br />
      </p>
      <p>
        I have looked down the saddest city lane.
        <br />
        I have passed by the watchman on his beat
        <br />
        And dropped my eyes, unwilling to explain.
        <br />
      </p>
      <p>
        I have stood still and stopped the sound of feet
        <br />
        When far away an interrupted cry
        <br />
        Came over houses from another street,
        <br />
      </p>
      <p>
        But not to call me back or say good-bye;
        <br />
        And further still at an unearthly height,
        <br />
        One luminary clock against the sky
        <br />
      </p>
      <p>
        Proclaimed the time was neither wrong nor right. <br />
        I have been one acquainted with the night.
        <br />
      </p>
    </PoemPage>
  );
}
