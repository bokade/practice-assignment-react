import { useEffect, useState } from "react";

export default function CompanyForm({ onSubmit, editData }) {
  const [formData, setFormData] = useState({
    companyName: "",
    establishedOn: "",
    registrationNumber: "",
    website: "",
    address1: "",
    address2: "",
    city: "",
    state: "",
    zipCode: "",
    primaryContactFirstName: "",
    primaryContactLastName: "",
    primaryContactEmail: "",
    primaryContactMobile: ""
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

  return (
    <form onSubmit={handleSubmit}>
      <h3>{editData ? "Edit Company" : "Create Company"}</h3>

      <input name="companyName" value={formData.companyName} placeholder="Company Name" onChange={handleChange} />
      <input name="establishedOn" value={formData.establishedOn} placeholder="Established On (yyyy-MM-dd)" onChange={handleChange} />
      <input name="registrationNumber" value={formData.registrationNumber} placeholder="Registration Number" onChange={handleChange} />
      <input name="website" value={formData.website} placeholder="Website" onChange={handleChange} />
      <input name="address1" value={formData.address1} placeholder="Address 1" onChange={handleChange} />
      <input name="address2" value={formData.address2} placeholder="Address 2" onChange={handleChange} />
      <input name="city" value={formData.city} placeholder="City" onChange={handleChange} />
      <input name="state" value={formData.state} placeholder="State" onChange={handleChange} />
      <input name="zipCode" value={formData.zipCode} placeholder="Zip Code" onChange={handleChange} />

      <h4>Primary Contact</h4>
      <input name="primaryContactFirstName" value={formData.primaryContactFirstName} placeholder="First Name" onChange={handleChange} />
      <input name="primaryContactLastName" value={formData.primaryContactLastName} placeholder="Last Name" onChange={handleChange} />
      <input name="primaryContactEmail" value={formData.primaryContactEmail} placeholder="Email" onChange={handleChange} />
      <input name="primaryContactMobile" value={formData.primaryContactMobile} placeholder="Mobile" onChange={handleChange} />

      <button
        type="submit"
        style={{ backgroundColor: "green", color: "white", marginTop: "10px" }}
      >
        {editData ? "Update" : "Submit"}
      </button>
    </form>
  );
}
