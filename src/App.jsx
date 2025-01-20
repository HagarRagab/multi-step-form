import { ConfirmProvider } from "./contexts/ConfirmationContext";
import { InfoProvider } from "./contexts/InfoContext";
import Sidebar from "./components/Sidebar";
import Main from "./components/Main";
import Summary from "./components/Summary";
import Info from "./components/Info";
import Plans from "./components/Plans";
import AddOns from "./components/AddOns";

const steps = [
    { stepTitle: "your info", element: <Info /> },
    { stepTitle: "select plan", element: <Plans /> },
    { stepTitle: "add-ons", element: <AddOns /> },
    { stepTitle: "summary", element: <Summary /> },
];

function App() {
    return (
        <div className="container">
            <InfoProvider>
                <ConfirmProvider>
                    <Sidebar steps={steps} />
                    <Main steps={steps} />
                </ConfirmProvider>
            </InfoProvider>
        </div>
    );
}

export default App;
