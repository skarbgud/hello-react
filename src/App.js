// import Counter from "./Counter";
// import Say from "./Say";
// import EventPractice from "./EventPractice";
// import ValidationSample from "./ValidationSample";
import { Component } from "react";
import ScrollBox from "./ScrollBox";

class App extends Component {
  // return <Counter />;
  // return <Say />;
  // return <EventPractice />
  // return <ValidationSample />
  render() {
    return (
      <div>
        <ScrollBox ref={(ref) => this.scrollBox=ref} />
        <button onClick={() => this.scrollBox.scrollToBottom()}>
          맨 밑으로
        </button>
      </div>
    );
  }
};

export default App;
