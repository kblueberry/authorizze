import "./App.css";
import User from "./User";
import { UserProvider } from "./UserContext";

function App() {
  return (
    <UserProvider>
      <User />
    </UserProvider>
  );
}

export default App;
