import Head from "next/head";
import { PoemPage } from "../components/PoemPage";
//
export default Page;

function Page() {
  return (
    <PoemPage
      title={"Tao Te Ching (55)"}
      author={
        <>
          Lao Tzu
          <br />
          Translated by Gia-fu Feng & Jane English
        </>
      }
    >
      <p>
        He who is filled with Virtue is like a newborn child.
        <br />
        Wasps and serpents will not sting him;
        <br />
        Wild beasts will not pounce upon him;
        <br />
        He will not be attacked by birds of prey.
        <br />
        His bones are soft, his muscles weak,
        <br />
        But his grip is firm.
        <br />
        He has not experienced the union of man and woman, but is whole.
        <br />
        His manhood is strong.
        <br />
        He screams all day without becoming hoarse.
        <br />
        This is perfect harmony.
        <br />
      </p>
      <p>
        Knowing harmony is constancy.
        <br />
        Knowing constancy is enlightenment.
        <br />
      </p>
      <p>
        It is not wise to rush about.
        <br />
        Controlling the breath causes strain.
        <br />
        If too much energy is used, exhaustion follows.
        <br />
        This is not the way of Tao.
        <br />
        Whatever is contrary to Tao will not last long.
        <br />
      </p>
    </PoemPage>
  );
}
