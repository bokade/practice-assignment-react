import { useEffect, useState } from "react";
import { getDrivers, deleteDriver } from "../../api/driverApi";

export default function DriverList({ onEdit, reload }) {
  const [drivers, setDrivers] = useState([]);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [licenseNumber, setLicenseNumber] = useState("");

  const [page, setPage] = useState(0);
  const [size, setSize] = useState(10);
  const [total, setTotal] = useState(0);

  const controlStyle = { height: "32px", padding: "0 10px", fontSize: "14px", boxSizing: "border-box" };

 const loadDrivers = async () => {
    const res = await getDrivers({
      firstName,
      lastName,
      licenseNumber,
      pageIndex: page,
      itemsPerPage: size
    });
    setDrivers(res.data.drivers || []);
    setTotal(res.data.totalRecords || 0);
  };

  useEffect(() => {
    loadDrivers();
  }, [page, size, reload]);

 

  const handleSearch = () => {
    setPage(0);
    loadDrivers();
  };

  const handleReset = () => {
    setFirstName("");
    setLastName("");
    setLicenseNumber("");
    setPage(0);
    loadDrivers();
  };

  const handleDelete = async (id) => {
    await deleteDriver(id);
    setDrivers(prev => prev.filter(d => d.id !== id));
  };

  const totalPages = Math.ceil(total / size);

  return (
    <>
      {/* SEARCH BAR */}
      <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "10px" }}>
        <input placeholder="First Name" value={firstName} onChange={e => setFirstName(e.target.value)} style={controlStyle} />
        <input placeholder="Last Name" value={lastName} onChange={e => setLastName(e.target.value)} style={controlStyle} />
        <input placeholder="License Number" value={licenseNumber} onChange={e => setLicenseNumber(e.target.value)} style={controlStyle} />
        <button onClick={handleSearch} style={{ ...controlStyle, cursor: "pointer" }}>Search</button>
        <button onClick={handleReset} style={{ ...controlStyle, cursor: "pointer" }}>Reset</button>
      </div>

      {/* TABLE */}
      <table border="1" width="100%">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>License</th>
            <th>Experience</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {drivers.length === 0 && (
            <tr>
              <td colSpan="5" align="center">No drivers found</td>
            </tr>
          )}
          {drivers.map(d => (
            <tr key={d.id}>
              <td>{d.firstName} {d.lastName}</td>
              <td>{d.email}</td>
              <td>{d.licenseNumber}</td>
              <td>{d.experienceYears}</td>
              <td>
                <button onClick={() => onEdit(d)} style={{ height: "28px", background: "blue", color: "white", cursor: "pointer" }}>Edit</button>
                <button onClick={() => handleDelete(d.id)} style={{ height: "28px", background: "red", color: "white", marginLeft: "5px", cursor: "pointer" }}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* PAGINATION */}
      {total > 0 && (
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: "12px" }}>
          <select value={size} onChange={e => { setSize(+e.target.value); setPage(0); }} style={controlStyle}>
            <option value={5}>5</option>
            <option value={10}>10</option>
            <option value={15}>15</option>
            <option value={20}>20</option>
          </select>

          <div>
            <button disabled={page === 0} onClick={() => setPage(page - 1)}>Prev</button>
            <span style={{ margin: "0 10px" }}>Page {page + 1} of {totalPages}</span>
            <button disabled={page + 1 >= totalPages} onClick={() => setPage(page + 1)}>Next</button>
          </div>
        </div>
      )}
    </>
  );
}
