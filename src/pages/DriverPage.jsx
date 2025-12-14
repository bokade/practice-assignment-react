import { useState } from "react";
import DriverForm from "../components/driver/DriverForm";
import DriverList from "../components/driver/DriverList";
import { createDriver, updateDriver, deleteDriver } from "../api/driverApi";

export default function DriverPage() {
  const [activeTab, setActiveTab] = useState("FORM");
  const [editDriver, setEditDriver] = useState(null);
  const [reload, setReload] = useState(false);

  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const resetMsg = () => { setSuccess(""); setError(""); };

  const handleSubmit = async (data) => {
    resetMsg();
    try {
      const res = editDriver
        ? await updateDriver(editDriver.id, data)
        : await createDriver(data);

      setSuccess(res.data.message);
      setEditDriver(null);
      setActiveTab("LIST");
      setReload(!reload);
    } catch (e) {
      setError(e.response?.data?.message || "Operation failed");
    }
  };

  const handleDelete = async (id) => {
    resetMsg();
    try {
      const res = await deleteDriver(id);
      setSuccess(res.data.message);
      setReload(!reload);
    } catch (e) {
      setError(e.response?.data?.message || "Delete failed");
    }
  };

  return (
    <>
      <div>
        <button onClick={() => setActiveTab("FORM")}>Driver Form</button>
        <button onClick={() => setActiveTab("LIST")}>All Drivers</button>
      </div>

      {success && <p style={{ color: "green" }}>{success}</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}

      {activeTab === "FORM" && (
        <DriverForm onSubmit={handleSubmit} editData={editDriver} />
      )}

      {activeTab === "LIST" && (
        <DriverList
          onEdit={(d) => { setEditDriver(d); setActiveTab("FORM"); }}
          onDelete={handleDelete}
          reload={reload}
        />
      )}
    </>
  );
}
