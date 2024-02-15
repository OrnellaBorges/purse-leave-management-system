import { Link, Navigate, useNavigate } from "react-router-dom";
import "./DetailRequestStyle.css";
import { LeaveRequest } from "../../types/LeaveRequestType";

type DetailRequestPageProps = {
  requests: LeaveRequest[];
  id: number | null;
  updateRequest: React.Dispatch<React.SetStateAction<LeaveRequest[]>>;
};

export function DetailRequestPage({
  requests,
  id,
  updateRequest,
}: DetailRequestPageProps) {
  const navigate = useNavigate();
  const foundIndex = requests.findIndex(
    (request) => requests.indexOf(request) === id
  );
  const foundRequest = requests[foundIndex];

  const handleClickApprove = () => {
    const approvedRequest: LeaveRequest = {
      ...foundRequest,
      status: "approved",
    };
    const updatedRequests = [...requests];
    updatedRequests[foundIndex] = approvedRequest;
    updateRequest(updatedRequests);
    navigate("/manager");
  };

  const handleClickReject = () => {
    const rejectedRequest: LeaveRequest = {
      ...foundRequest,
      status: "rejected",
    };
    const updatedRequests = [...requests];
    updatedRequests[foundIndex] = rejectedRequest;
    updateRequest(updatedRequests);
    navigate("/manager");
  };

  if (!foundRequest) return <Navigate to="/" />;

  return (
    <>
      <Link className="back-button" to="/manager">
        ← Back
      </Link>
      <main className="detail-request">
        <h2 className="title-level2">Details of leave request</h2>
        <p className="text-resume">
          <strong>Employee:</strong> {foundRequest.employeeName}
        </p>
        <p className="text-resume">
          <strong>Start Period:</strong> {foundRequest.startLeavePeriod}
        </p>
        <p className="text-resume">
          <strong>End Period:</strong> {foundRequest.endLeavePeriod}
        </p>
        <p className="text-resume">
          <strong>Comments:</strong> {foundRequest.comment}
        </p>
        <div className="button-container">
          <button className="button" onClick={() => handleClickApprove()}>
            Approve
          </button>
          <button className="button" onClick={() => handleClickReject()}>
            Reject
          </button>
        </div>
      </main>
    </>
  );
}
