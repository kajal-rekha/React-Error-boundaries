import React from "react";
import ClickCounter from "./components/ClickCounter";
import Comp1 from "./components/Comp1";
import HoverCounter from "./components/HoverCounter";
import RenderProps from "./components/RenderProps";
import { UserProvider } from "./context/userContext";
//import ErrorBoundary from "./components/ErrorBoundary";
//import JersyMaker from "./components/JersyMaker";

const App = () => {
  const user = {
    name: "kajal",
    age: 25,
  };
  return (
    <div>
      {/* <ErrorBoundary>
        <JersyMaker name="Anowar" jerseyNum="10" />
      </ErrorBoundary>
      <ErrorBoundary>
        <JersyMaker name="Ahil" jerseyNum="12" />
      </ErrorBoundary>
      <ErrorBoundary>
        <JersyMaker name="Kajal" jerseyNum="15" />
      </ErrorBoundary>
      <ErrorBoundary>
        <JersyMaker jerseyNum="20" />
      </ErrorBoundary> */}
      {/* <ClickCounter /> */}
      {/* <HoverCounter /> */}
      {/* <RenderProps
        render={(isLoggedIn) => (isLoggedIn ? "kajal" : "visitor")}
      /> */}
      <UserProvider value={user}>
        <Comp1 />
      </UserProvider>
    </div>
  );
};

export default App;
