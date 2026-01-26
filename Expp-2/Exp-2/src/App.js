import { Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Login from "./pages/Login";
import Logs from "./pages/logs";

import DashboardLayout from "./pages/DashboardLayout";
import DashboardSummary from "./pages/DashboardSummary";
import DashboardSettings from "./pages/DashboardSettings";
import DashboardAnalytics from "./pages/DashboardAnalytics";

import ProtectedRoute from "./routes/ProtectedRoute";

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/login" element={<Login />} />

        <Route
          path="/"
          element={
            <ProtectedRoute>
              <DashboardLayout />
            </ProtectedRoute>
          }
        >
          <Route index element={<DashboardSummary />} />
          <Route path="summary" element={<DashboardSummary />} />
          <Route path="settings" element={<DashboardSettings />} />
          <Route path="analytics" element={<DashboardAnalytics />} />
        </Route>

        <Route
          path="/logs"
          element={
            <ProtectedRoute>
              <Logs />
            </ProtectedRoute>
          }
        />
      </Routes>
    </>
  );
}

export default App;
