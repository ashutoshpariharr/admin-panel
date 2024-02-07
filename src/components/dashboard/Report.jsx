import { useState } from "react";

const Report = () => {
  const [reportData, setReportData] = useState({
    name: "",
    email: "",
    report: "",
  });

  const handleInputChange = (e) => {
    setReportData({ ...reportData, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    // Handle submission logic here
    setReportData({ name: "", email: "", report: "" }); // Reset the form
  };

  return (
    <div className="report-container">
      <h1>Report</h1>
      <label htmlFor="name">Name:</label>
      <input
        type="text"
        id="name"
        name="name"
        placeholder="Enter your name"
        value={reportData.name}
        onChange={handleInputChange}
      />

      <label htmlFor="email">Email:</label>
      <input
        type="email"
        id="email"
        name="email"
        placeholder="Enter your email"
        value={reportData.email}
        onChange={handleInputChange}
      />

      <label htmlFor="report">Report:</label>
      <textarea
        id="report"
        name="report"
        placeholder="Enter your report"
        value={reportData.report}
        onChange={handleInputChange}
      />

      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default Report;
