import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "../layout/Layout";
import Overview from "../pages/Overview";
import Shipment from "../pages/Shipment";
import Orders from "../pages/Orders";
import Message from "../pages/Message";
import Activity from "../pages/Activity";
import Report from "../pages/Report";
import Support from "../pages/Support";
import Account from "../pages/Account";
import Settings from "../pages/Settings";
import Logout from "../pages/Logout";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* parent route */}
        <Route path="/" element={<Layout />}>
          {/* Default page */}
          <Route index element={<Overview />} />
          {/* other pages */}
          <Route path="/shipment" element={<Shipment />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/message" element={<Message />} />
          <Route path="/activity" element={<Activity />} />
          <Route path="/report" element={<Report />} />
          <Route path="/support" element={<Support />} />
          <Route path="/account" element={<Account />} />
          <Route path="/setting" element={<Settings />} />
          <Route path="/logout" element={<Logout />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
