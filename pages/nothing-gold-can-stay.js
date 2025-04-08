import { PoemPage } from "../components/PoemPage";
//
export default Page;

function Page() {
  return (
    <PoemPage title={"Nothing Gold Can Stay"} author={"Robert Frost"}>
      <p>
        Nature's first green is gold,
        <br />
        Her hardest hue to hold.
        <br />
        Her early leaf's a flower;
        <br />
        But only so an hour.
        <br />
        Then leaf subsides to leaf.
        <br />
        So Eden sank to grief,
        <br />
        So dawn goes down to day.
        <br />
        Nothing gold can stay.
        <br />
      </p>
    </PoemPage>
  );
}
