import DHomeScreen from "./components/screens/desktop/DHomeScreen";
import DCartCheckoutScreen from "./components/screens/desktop/DCartCheckoutScreen";

function App() {
  return <DCartCheckoutScreen />;
import { BrowserRouter } from "react-router-dom";
// ...
function App() {
  return (
    <BrowserRouter>
      <DHomeScreen />
    </BrowserRouter>
  );
}

export default App;
