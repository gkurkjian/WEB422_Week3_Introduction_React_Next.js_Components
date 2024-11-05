import Hello from "./Components/SayHello"
import SayMessage from "./Components/SayMessage";


export default function Home() {
  return (
    <>
      <p>Hello</p>
      <Hello />
      <br />

      {/** Here we can pass by string too, for instance, passing the msg={} and the exclamation={} **/}
      <SayMessage msg={"Welcome WEB422"} exclamation="!" />
      <SayMessage msg={"Next.js is awesome"} exclamation="!!!" />
      <SayMessage />



    </>
  );
}
