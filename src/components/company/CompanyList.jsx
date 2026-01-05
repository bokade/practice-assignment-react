import { useEffect, useState } from "react";
import { getCompanies } from "../../api/companyApi";

export default function CompanyList({ onEdit, onDelete, reload }) {
  const [companies, setCompanies] = useState([]);

  const [companyName, setCompanyName] = useState("");
  const [registrationNumber, setRegistrationNumber] = useState("");

  const [page, setPage] = useState(0);
  const [size, setSize] = useState(10);
  const [total, setTotal] = useState(0);

  const controlStyle = {
    height: "32px",
    padding: "0 8px",
    fontSize: "14px"
  };

  // API call function
  const loadCompanies = async () => {
    const res = await getCompanies({
      pageIndex: page,
      itemsPerPage: size,
      companyName,
      registrationNumber
    });

    setCompanies(res.data.companies || []);
    setTotal(res.data.totalRecords || 0);
  };

  // Single source of API call
  useEffect(() => {
    loadCompanies();
  }, [reload, page, size, companyName, registrationNumber]);

  //  Search = only state change
  const handleSearch = () => {
    setPage(0);
  };

  //  Reset = only state change
  const handleReset = () => {
    setCompanyName("");
    setRegistrationNumber("");
    setPage(0);
  };

  const totalPages = Math.ceil(total / size);

  return (
    <>
      {/* 🔍 Search */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "8px",
          marginBottom: "10px"
        }}
      >
        <input
          placeholder="Company Name"
          value={companyName}
          onChange={(e) => setCompanyName(e.target.value)}
          style={controlStyle}
        />

        <input
          placeholder="Registration Number"
          value={registrationNumber}
          onChange={(e) => setRegistrationNumber(e.target.value)}
          style={controlStyle}
        />

        <button
          onClick={handleSearch}
          style={{ ...controlStyle, cursor: "pointer" }}
        >
          Search
        </button>

        <button
          onClick={handleReset}
          style={{ ...controlStyle, cursor: "pointer" }}
        >
          Reset
        </button>
      </div>

      {/*  Table */}
      <table border="1" width="100%">
        <thead>
          <tr>
            <th>Company Name</th>
            <th>Registration No</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Mobile</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {companies.length === 0 && (
            <tr>
              <td colSpan="7" align="center">
                No companies found
              </td>
            </tr>
          )}

          {companies.map((c) => (
            <tr key={c.id}>
              <td>{c.companyName}</td>
              <td>{c.registrationNumber}</td>
              <td>{c.primaryContactFirstName}</td>
              <td>{c.primaryContactLastName}</td>
              <td>{c.primaryContactEmail}</td>
              <td>{c.primaryContactMobile}</td>
              <td>
                <button
                  style={{
                    backgroundColor: "blue",
                    color: "white",
                    marginRight: "5px",
                    height: "28px"
                  }}
                  onClick={() => onEdit(c)}
                >
                  Edit
                </button>

                <button
                  style={{
                    backgroundColor: "red",
                    color: "white",
                    height: "28px"
                  }}
                  onClick={() => onDelete(c.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/*  Pagination */}
      {total > 0 && (
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginTop: "12px"
          }}
        >
          <div>
            <span>Items per page: </span>
            <select
              value={size}
              onChange={(e) => {
                setSize(Number(e.target.value));
                setPage(0);
              }}
            >
              <option value={5}>5</option>
              <option value={10}>10</option>
              <option value={15}>15</option>
              <option value={20}>20</option>
            </select>
          </div>
          {/* Prev / Next */}
          <div>
            <button
              disabled={page === 0}
              onClick={() => setPage(page - 1)}
            >
              Prev
            </button>

            <span style={{ margin: "0 10px" }}>
              Page {page + 1} of {totalPages}
            </span>

            <button
              disabled={page + 1 >= totalPages}
              onClick={() => setPage(page + 1)}
            >
              Next
            </button>
          </div>
        </div>
      )}
    </>
  );
}
