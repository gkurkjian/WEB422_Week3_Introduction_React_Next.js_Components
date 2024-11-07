// Stoped at 1:10:50

import Clock from "./Components/Clock"
import Hello from "./Components/SayHello"
import SayMessage from "./Components/SayMessage";
import ShowImg from "./Components/ShowImg"
import UseState from "./Components/UseState";


export default function Home() {
  return (
    <>
      <br />

      <h2>These are dealing and coming from Clock component</h2>
      {/** <Clock /> <br />  {/**This will display the Clock coming from Clock component defaultProps**/}
      <h4>This is display by defaultProps inside Clock.js component which is set to locale "fr-CA"</h4>
      <Clock />

      <h4>This is display from inside index.js and passing through props to set the locale to "ec-CA"</h4>
      <Clock locale="en-CA"/> <br />
      <h4>This is display from inside index.js and passing through props to set the locale to "ko-KO"</h4>
      <Clock locale="ko-KO"/>
      <br /> <br /> <br />
      
      I'm a just a paragraph in index.js
      <p>Hello</p>
      <h4>Here it's coming from Hello.js component</h4>
      <Hello />
      <br /> <br /> <br />

      {/** Here we can pass by string too, for instance, passing the msg={} and the exclamation={} **/}
      <h4>Here I'm coming form SayMessage.js component</h4>
      <SayMessage msg={"Welcome WEB422"} exclamation="!" />
      <SayMessage msg={"Next.js is awesome"} exclamation="!!!" />
      <SayMessage />

      <br /> <br /> <br />

      {/** Here I'm calling this img from ShowImg.js component**/}
      <h4>Here I'm coming from ShowImg.js component</h4>
      <ShowImg /> <br />

      <h1>Here it's coming from UseState component</h1><br />
      <UseState />

    </>
  );
}
