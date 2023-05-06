/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";

export default function Home() {
  return (
    <div class={tw`p-4 mx-auto max-w-screen-md`}>
      <img
        src="/favicon.png"
        height="100px"
        width="100px"
        alt="2AM Devs"
      />
      <p class={tw`my-6`}>
        <pre>
          Hey! Thanks for coming.
          <br/>
          This site is `WIP` 🚧
        </pre>
        <a href="https://github.com/2AMDevs">GitHub</a>
      </p>
    </div>
  );
}
