import { useState } from "react";
import CompanyForm from "../components/company/CompanyForm";
import CompanyList from "../components/company/CompanyList";
import {
  createCompany,
  updateCompany,
  deleteCompany
} from "../api/companyApi";

export default function CompanyPage() {
  const [activeTab, setActiveTab] = useState("FORM");
  const [editCompany, setEditCompany] = useState(null);

  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const [reload, setReload] = useState(false);

  const resetMessages = () => {
    setSuccess("");
    setError("");
  };

  const handleSubmit = async (formData) => {
    resetMessages();

    try {
      let res;
      if (editCompany) {
        res = await updateCompany(editCompany.id, formData);
        setSuccess(res.data.message || "Company updated successfully");
      } else {
        res = await createCompany(formData);
        setSuccess(res.data.message || "Company created successfully");
      }

      setEditCompany(null);
      setActiveTab("LIST");
      setReload(!reload);
    } catch (err) {
      setError(err.response?.data?.message || "Something went wrong");
    }
  };

  const handleEdit = (company) => {
    resetMessages();
    setEditCompany(company);
    setActiveTab("FORM");
  };

  const handleDelete = async (id) => {
    resetMessages();

    try {
      const res = await deleteCompany(id);
      setSuccess(res.data.message || "Company deleted successfully");
      setReload(!reload);
    } catch (err) {
      setError(err.response?.data?.message || "Delete failed");
    }
  };

  return (
    <div>
      {/* Tabs */}
      <div style={{ marginBottom: "12px" }}>
        <button onClick={() => setActiveTab("FORM")}>Company Form</button>
        <button onClick={() => setActiveTab("LIST")}>All Companies</button>
      </div>

      {/* Messages */}
      {success && <p style={{ color: "green" }}>{success}</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}

      {/* Content */}
      {activeTab === "FORM" && (
        <CompanyForm
          onSubmit={handleSubmit}
          editData={editCompany}
        />
      )}

      {activeTab === "LIST" && (
        <CompanyList
          onEdit={handleEdit}
          onDelete={handleDelete}
          reload={reload}
        />
      )}
    </div>
  );
}
