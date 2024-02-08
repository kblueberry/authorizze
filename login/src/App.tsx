import { AuthorizationProvider } from "./AuthorizationContext";
import Login from "./Login";

function App() {
  return (
    <AuthorizationProvider>
      <Login />
    </AuthorizationProvider>
  );
}

export default App;
