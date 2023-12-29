import { useState } from "react";
import { Button, ButtonGroup } from "@chakra-ui/react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Button>Click Me!</Button>
    </>
  );
}

export default App;
