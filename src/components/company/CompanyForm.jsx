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

   const controlStyle = {
    height: "40px",
    padding: "0 10px",
    fontSize: "14px",
    boxSizing: "border-box",
    marginBottom: "8px",
    width: "100%"
  };

  const fieldWrapper = {
  display: "flex",
  flexDirection: "column",
  marginBottom: "10px"
};

const labelStyle = {
  fontSize: "14px",
  fontWeight: "700",
  marginBottom: "2px"
};

const buttonWrapper = {
  display: "flex",
  justifyContent: "center", // 🔥 RIGHT aligned
  marginTop: "20px"
};

const pageWrapper = {
  minHeight: "100vh",
  backgroundColor: "#f4f6f8", // light grey-blue
  display: "flex",
  justifyContent: "center",
  alignItems: "flex-start",
  paddingTop: "40px",
  border: "2px solid #340bebff"

};

const cardStyle = {
  backgroundColor: "#ffffff",
  width: "1000px",
  //padding: "5px 15px",
  borderRadius: "10px",
  boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
  border: "1px solid #df1414ff"
};

const headingStyle = {
  textAlign: "center",
  marginBottom: "25px",
  fontWeight: "600",
  color: "#333"
};

const formStyle = {
  backgroundColor: "#fafafa",
  padding: "20px",
  borderRadius: "8px"
};

const formGrid = {
  display: "grid",
  gridTemplateColumns: "repeat(2, 1fr)", // 2 fields per row
  gap: "16px 24px" // row-gap column-gap
};


  return (
     <div style={pageWrapper}>
         <div style={cardStyle}>

      {/* <h3 style={headingStyle}>
        {editData ? "Edit Company" : "Create Company"}
      </h3> */}

    <form onSubmit={handleSubmit} style={formStyle}>
      
      <h3 style={headingStyle}>{editData ? "Edit Company" : "Create Company"}</h3>

 {/* 🔥 GRID START */}
  <div style={formGrid}>

      <div style={fieldWrapper}>
      <label htmlFor="companyName" style={labelStyle}>Company Name</label>
      <input  id="companyName" name="companyName" value={formData.companyName} placeholder="Company Name" onChange={handleChange} style={controlStyle} />
      </div>

      <div style={fieldWrapper}>
        <label htmlFor="establishedOn" style={labelStyle}>Established On (yyyy-MM-dd)</label>
      <input id="establishedOn" name="establishedOn" value={formData.establishedOn} placeholder="Established On (yyyy-MM-dd)" onChange={handleChange} style={controlStyle} />
      </div>


      <div style={fieldWrapper}>
        <label htmlFor="registrationNumber" style={labelStyle}>Registration Number</label>
      <input id="registrationNumber" name="registrationNumber" value={formData.registrationNumber} placeholder="Registration Number" onChange={handleChange} style={controlStyle}/>
      </div>

      <div style={fieldWrapper}>
        <label htmlFor="website" style={labelStyle}>Website</label>
      <input id="website" name="website" value={formData.website} placeholder="Website" onChange={handleChange} style={controlStyle} />
      </div>


      <div style={{ ...fieldWrapper, gridColumn: "1 / -1" }}>
        <label htmlFor="address1" style={labelStyle}>Address 1</label>
      <input id="address1" name="address1" value={formData.address1} placeholder="Address 1" onChange={handleChange} style={controlStyle}/>
      </div>


      <div style={{ ...fieldWrapper, gridColumn: "1 / -1" }}>
        <label htmlFor="address2" style={labelStyle}>Address 2</label>
      <input id="address2" name="address2" value={formData.address2} placeholder="Address 2" onChange={handleChange} style={controlStyle}/>
      </div>


      <div style={fieldWrapper}>
        <label htmlFor="city" style={labelStyle}>City</label>
        <input id="city" name="city" value={formData.city} placeholder="City" onChange={handleChange} style={controlStyle}/>
      </div>

      <div style={fieldWrapper}>
        <label htmlFor="state" style={labelStyle}>State</label>
       {/* / <input name="state" value={formData.state} placeholder="State" onChange={handleChange} style={controlStyle}/> */}
         <select id="state" name="state" value={formData.state} placeholder="State" onChange={handleChange} style={controlStyle}>
            <option value="Madhya Pradesh">Madhya Pradesh</option>
            <option value="Karnataka">Karnataka</option>
            <option value="Uttar Pradesh">Uttar Pradesh</option>
            <option value="Telangana">Telangana</option>
          </select>
      </div>
      
      <div style={fieldWrapper}>
        <label htmlFor="zipCode" style={labelStyle}>Zip Code</label>
      <input id="zipCode" name="zipCode" value={formData.zipCode} placeholder="Zip Code" onChange={handleChange} style={controlStyle} />
      </div>

      {/* <h4>Primary Contact</h4> */}
      <div style={fieldWrapper}>
        <label htmlFor="primaryContactFirstName" style={labelStyle}>First Name</label>
      <input id="primaryContactFirstName" name="primaryContactFirstName" value={formData.primaryContactFirstName} placeholder="First Name" onChange={handleChange} style={controlStyle}/>
      </div>

      <div style={fieldWrapper}>
        <label htmlFor="primaryContactLastName" style={labelStyle}>Last Name</label>
      <input id="primaryContactLastName" name="primaryContactLastName" value={formData.primaryContactLastName} placeholder="Last Name" onChange={handleChange} style={controlStyle} />
      </div>

      <div style={fieldWrapper}>
        <label htmlFor="primaryContactEmail" style={labelStyle}>Email</label>
      <input id="primaryContactEmail" name="primaryContactEmail" value={formData.primaryContactEmail} placeholder="Email" onChange={handleChange}  style={controlStyle}/>
      </div>


      <div style={fieldWrapper}>
        <label htmlFor="primaryContactMobile" style={labelStyle}>Mobile</label>
      <input id="primaryContactMobile" name="primaryContactMobile" value={formData.primaryContactMobile} placeholder="Mobile" onChange={handleChange} style={controlStyle} />
      </div>

</div>
      <div style={buttonWrapper}>
      <button type="submit"style={{ backgroundColor: "green", color: "white", marginTop: "10px" , height: "40px", width: "150px", fontWeight: "800", cursor: "pointer" }}>
        {editData ? "Update" : "Submit"}
      </button>
      </div>
    </form>
    </div>
  </div>
  );
}
