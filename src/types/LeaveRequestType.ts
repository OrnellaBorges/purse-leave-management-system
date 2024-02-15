export type LeaveRequest = {
  employeeName: string;
  startLeavePeriod: string;
  endLeavePeriod: string;
  comment: string;
  status: "pending" | "approved" | "rejected";
};
