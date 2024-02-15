import type { LeaveRequest } from "../../types/LeaveRequestType";
import "./ManagerStyle.css";
import { Link } from "react-router-dom";

type ManagerPageProps = {
  requests: LeaveRequest[];
  updateId: React.Dispatch<React.SetStateAction<number | null>>;
};

export function ManagerPage({ requests, updateId }: ManagerPageProps) {
  return (
    <main className="manager">
      <div className="table-data">
        <div className="order">
          <div className="head">
            <h3 className="title-level3">Leaves Orders</h3>
          </div>
          <table>
            <thead>
              <tr>
                <th>Employee</th>
                <th>Start Leave</th>
                <th>End Leave</th>
                <th>Status</th>
                <th>Details</th>
              </tr>
            </thead>
            <tbody>
              {requests.length ? (
                requests.map((request, index) => (
                  <tr key={`${request.employeeName}-${index}`}>
                    <td>{request.employeeName}</td>
                    <td>{request.startLeavePeriod}</td>
                    <td>{request.endLeavePeriod}</td>
                    <td>
                      <span
                        className={`status ${request.status.toLowerCase()}`}
                      >
                        {request.status}
                      </span>
                    </td>
                    <td>
                      <Link
                        onClick={() => updateId(index)}
                        to="/detail-request"
                        className="button"
                      >
                        Details
                      </Link>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td className="no-request-message" colSpan={5}>
                    No requests yet
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </main>
  );
}
