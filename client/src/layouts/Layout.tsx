import Auth0ProviderWithNavigate from "@/auth/Auth0ProviderWithNavigate";
import Hero from "@/components/Hero";
import Footer from "@/components/common/Footer";
import Header from "@/components/common/Header";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <Auth0ProviderWithNavigate>
      <div className="flex flex-col min-h-screen">
        <Header />
        <Hero />
        <div className="container mx-auto flex-1 py-10">
          <Outlet />
        </div>
        <Footer />
      </div>
    </Auth0ProviderWithNavigate>
  );
};

export default Layout;
