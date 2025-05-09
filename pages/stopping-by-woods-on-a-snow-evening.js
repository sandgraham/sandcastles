import { PoemPage } from "../components/PoemPage";
//
export default Page;

function Page() {
  return (
    <PoemPage
      title={"Stopping by Woods on a Snow Evening"}
      author={"Robert Frost"}
    >
      <p>
        Whose woods these are I think I know.
        <br />
        His house is in the village though;
        <br />
        He will not see me stopping here
        <br />
        To watch his woods fill up with snow.
        <br />
      </p>
      <p>
        My little horse must think it queer
        <br />
        To stop without a farmhouse near
        <br />
        Between the woods and frozen lake
        <br />
        The darkest evening of the year.
        <br />
      </p>
      <p>
        He gives his harness bells a shake
        <br />
        To ask if there is some mistake.
        <br />
        The only other sound’s the sweep
        <br />
        Of easy wind and downy flake.
        <br />
      </p>
      <p>
        The woods are lovely, dark and deep, <br />
        But I have promises to keep, <br />
        And miles to go before I sleep, <br />
        And miles to go before I sleep.
        <br />
      </p>
    </PoemPage>
  );
}
