import { useEffect, useState } from "react";

export default function DriverForm({ onSubmit, editData }) {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    mobile: "",
    dateOfBirth: "",
    licenseNumber: "",
    experienceYears: "",
    address1: "",
    address2: "",
    city: "",
    state: "",
    zipCode: ""
  });

  useEffect(() => {
    if (editData) {
      setFormData(editData);
    }
  }, [editData]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  const controlStyle = {
    height: "32px",
    padding: "0 10px",
    fontSize: "14px",
    boxSizing: "border-box",
    marginBottom: "8px",
    width: "40%"
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>{editData ? "Edit Driver" : "Create Driver"}</h3>

      <input name="firstName" placeholder="First Name" value={formData.firstName} onChange={handleChange} style={controlStyle} />
      <input name="lastName" placeholder="Last Name" value={formData.lastName} onChange={handleChange} style={controlStyle} />
      <input name="email" placeholder="Email" value={formData.email} onChange={handleChange} style={controlStyle} />
      <input name="mobile" placeholder="Mobile" value={formData.mobile} onChange={handleChange} style={controlStyle} />

      {/* DOB with label */}
      <div style={{ display: "flex", flexDirection: "column", marginBottom: "8px" }}>
        <label style={{ fontSize: "13px", marginBottom: "4px", fontWeight: "500" }}>Date of Birth</label>
        <input
          type="date"
          name="dateOfBirth"
          value={formData.dateOfBirth}
          onChange={handleChange}
          style={controlStyle}
        />
      </div>

      <input name="licenseNumber" placeholder="License Number" value={formData.licenseNumber} onChange={handleChange} style={controlStyle} />
      <input name="experienceYears" placeholder="Experience Years" value={formData.experienceYears} onChange={handleChange} style={controlStyle} />

      <input name="address1" placeholder="Address 1" value={formData.address1} onChange={handleChange} style={controlStyle} />
      <input name="address2" placeholder="Address 2" value={formData.address2} onChange={handleChange} style={controlStyle} />
      <input name="city" placeholder="City" value={formData.city} onChange={handleChange} style={controlStyle} />
      <input name="state" placeholder="State" value={formData.state} onChange={handleChange} style={controlStyle} />
      <input name="zipCode" placeholder="Zip Code" value={formData.zipCode} onChange={handleChange} style={controlStyle} />

      <button type="submit" style={{ backgroundColor: "green", color: "white", height: "32px", cursor: "pointer" }}>
        {editData ? "Update" : "Submit"}
      </button>
    </form>
  );
}
