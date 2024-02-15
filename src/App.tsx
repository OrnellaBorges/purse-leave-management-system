import { Route, Routes } from "react-router-dom";
import { Layout } from "./Layout";
import { HomePage } from "./pages/Home/HomePage";
import { EmployeePage } from "./pages/Employee/EmployeePage";
import { ManagerPage } from "./pages/Manager/ManagerPage";
import { DetailRequestPage } from "./pages/DetailRequest/DetailRequestPage";
import { useState } from "react";
import "./App.css";
import type { LeaveRequest } from "./types/LeaveRequestType";

export default function App() {
  const [requestId, setRequestId] = useState<number | null>(null);
  const [requests, setRequests] = useState<LeaveRequest[]>([]);

  return (
    <>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route
            path="/employee"
            element={<EmployeePage updateRequests={setRequests} />}
          />
          <Route
            path="/manager"
            element={
              <ManagerPage requests={requests} updateId={setRequestId} />
            }
          />
          <Route
            path="/detail-request"
            element={
              <DetailRequestPage
                requests={requests}
                id={requestId}
                updateRequest={setRequests}
              />
            }
          />
        </Routes>
      </Layout>
    </>
  );
}
