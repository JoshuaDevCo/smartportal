import { Routes, Route, Navigate } from "react-router-dom";

import RtlLayout from "./layouts/rtl";
import UserLayout from "./layouts/user";
import AuthLayout from "./layouts/auth";

const App = () => {
  return (
    <Routes>
      <Route path="auth/*" element={<AuthLayout />} />
      <Route path="user/*" element={<UserLayout />} />
      <Route path="rtl/*" element={<RtlLayout />} />
      <Route path="/" element={<Navigate to="/user" replace />} />
    </Routes>
  );
};

export default App;
