import "./App.css";
import { Private } from "./components/auth/Private";
import Profile from "./components/auth/Profile";
import { Button } from "./components/Button";
import { Counter } from "./components/class/Counter";
import { Container } from "./components/Container";
import { Box } from "./components/context/Box";
import { ThemeContextPropvider } from "./components/context/ThemeContext";
import { User } from "./components/context/User";
import { UserContextProvider } from "./components/context/UserContext";
import { List } from "./components/generics/List";
import { Greet } from "./components/Greet";
import { Heading } from "./components/Heading";
import { CustomButton } from "./components/html/Button";
import { Input } from "./components/Input";
import { Oscar } from "./components/Oscar";
import { Person } from "./components/Person";
import { PersonList } from "./components/PersonList";
import { Text } from "./components/polimorphic/Text";
import { Mutable } from "./components/ref/MutableRef";
import { RandomNumber } from "./components/restriction/RandomNumber";
// import { Counter } from "./components/state/Counter";
import { Status } from "./components/Status";
import { Toast } from "./components/templateliterals/Toast";

function App() {
    // const personName = {
    //     first: "Thanh",
    //     last: "Quy",
    // };
    // const nameList = [
    //     {
    //         first: "Nguyen",
    //         last: "A",
    //     },
    //     {
    //         first: "Nguyen",
    //         last: "B",
    //     },
    //     {
    //         first: "Nguyen",
    //         last: "C",
    //     },
    // ];

    return (
        <div className="App">
            <Status status="loading" />
            <Heading>PlaceHolder text</Heading>
            <Oscar>
                <Heading>Oscar goes to Thanh Quy</Heading>
            </Oscar>
            <Greet name="Quys" messageCount={10} isLoggedIn={true} />
            <Button
                handleClick={(event, id) => {
                    console.log("Button clicked", event, id);
                }}
            />
            <Input
                value=""
                handleChange={(event) => {
                    console.log(event);
                }}
            />
            <Container
                styles={{
                    border: "1px solid black",
                    padding: "5px",
                    margin: "1rem",
                }}
            />

            <ThemeContextPropvider>
                <Box />
            </ThemeContextPropvider>
            <UserContextProvider>
                <User></User>
            </UserContextProvider>
            <Counter message="thanh quy" />
            <Private isLoggedIn={false} component={Profile} />

            <RandomNumber value={10} isPositive />
            {/* <List
                items={["batman", "superman", "wonder woman"]}
                onClick={(item) => console.log(item)}
            />

            <List items={[1, 2, 3]} onClick={(item) => console.log(item)} /> */}

            <List
                items={[
                    {
                        id: 1,
                        first: "Nguyen",
                        last: "A",
                    },
                    {
                        id: 2,
                        first: "Nguyen",
                        last: "B",
                    },
                    {
                        id: 3,
                        first: "Nguyen",
                        last: "C",
                    },
                ]}
                onClick={(item) => console.log(item)}
            />

            <Toast position={"center"} />

            <CustomButton
                variant="primary"
                onClick={(event) => console.log(event)}
            >
                Primary Button
            </CustomButton>

            <Text as="h1" size="lg">
                Heading
            </Text>
            <Text as="p" size="md">
                Paragraph
            </Text>
            <Text as="label" htmlFor="someId" size="sm" color="secondary">
                Label
            </Text>
            {/* <Mutable /> */}
            {/*<Person name={personName} />
            <PersonList nameList={nameList} /> */}
        </div>
    );
}

export default App;
