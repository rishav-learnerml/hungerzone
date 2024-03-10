import { RouterProvider } from "react-router-dom";
import AppRouter from "./router/AppRouter";
import Auth0ProviderWithNavigate from "./auth/Auth0ProviderWithNavigate";

function App() {
  return (
    <Auth0ProviderWithNavigate>
      <RouterProvider router={AppRouter} />
    </Auth0ProviderWithNavigate>
  );
}

export default App;
