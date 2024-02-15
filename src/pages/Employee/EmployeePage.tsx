import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./EmployeeStyle.css";
import { Input } from "../../components/Input/Input";
import type { LeaveRequest } from "../../types/LeaveRequestType";

type EmployeePageProps = {
  updateRequests: React.Dispatch<React.SetStateAction<LeaveRequest[]>>;
};

export function EmployeePage({ updateRequests }: EmployeePageProps) {
  const navigate = useNavigate();
  const [formData, setFormData] = useState<LeaveRequest>({
    employeeName: "",
    startLeavePeriod: "",
    endLeavePeriod: "",
    comment: "",
    status: "pending",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    updateRequests((prev) => [...prev, formData]);
    navigate("/");
  };

  return (
    <main className="employee">
      <form onSubmit={handleSubmit}>
        <Input handleChange={handleChange} name="employeeName" required />
        <Input handleChange={handleChange} name="startLeavePeriod" required />
        <Input handleChange={handleChange} name="endLeavePeriod" required />
        <Input
          handleChange={handleChange}
          name="comment"
          inputType="textarea"
          required
        />
        <button className="button" type="submit">
          Submit
        </button>
      </form>
    </main>
  );
}
