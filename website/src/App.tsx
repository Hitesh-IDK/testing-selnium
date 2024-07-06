import React from "react";
import "./App.css";
import {
  Button,
  ChakraProvider,
  Input,
  Radio,
  RadioGroup,
  Spinner,
  Stack,
  Text,
  Textarea,
} from "@chakra-ui/react";

function App() {
  const [submitClicked, setSubmitClicked] = React.useState(false);
  const [showText, setShowText] = React.useState(false);

  return (
    <ChakraProvider>
      <div className="App">
        <div className="hello">Hello There</div>
        <div className={"inputs"}>
          {!submitClicked ? (
            <>
              <div className={"inputcells"}>
                <Text fontSize="2xl" mb="8px">
                  What is your name?
                </Text>
                <Input placeholder="Your name goes here" size="sm" id="name" />
              </div>

              <div className={"inputcells"}>
                <Text fontSize="2xl" mb="8px">
                  What are you here for?
                </Text>
                <Input
                  placeholder="Your purpose goes here"
                  size="sm"
                  id="purpose"
                />
              </div>

              <div className={"inputcells"}>
                <Text fontSize="2xl" mb="8px">
                  Are you a robot?
                </Text>
                <RadioGroup defaultValue="1">
                  <Stack spacing={5} direction="row">
                    <Radio colorScheme="red" value="1" id="robot">
                      Yes
                    </Radio>
                    <Radio colorScheme="green" value="2" id="human">
                      No
                    </Radio>
                  </Stack>
                </RadioGroup>
              </div>

              <div className={"inputcells"}>
                <Text fontSize="2xl" mb="8px">
                  Tell us something about yourself
                </Text>
                <Textarea placeholder="We are here for you" id="about" />
              </div>

              <Button
                colorScheme="purple"
                id="submit"
                onClick={() => {
                  setSubmitClicked(true);
                  setTimeout(() => {
                    setShowText(true);
                  }, 1000);
                }}
              >
                Submit
              </Button>
            </>
          ) : (
            <div className={"inputcells submit"}>
              {showText ? (
                <>
                  <Text fontSize="3xl" mb="2px" color={"purple.300"}>
                    Success!
                  </Text>
                  <Text fontSize="2xl" mb="2px">
                    Your submission has been recorded
                  </Text>
                </>
              ) : (
                <Spinner color="purple.500" thickness="6px" size={"xl"} />
              )}
            </div>
          )}
        </div>
      </div>
    </ChakraProvider>
  );
}

export default App;
