import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import api from "../services/api";

import LeadForm from "../components/LeadForm";
import LeadTable from "../components/LeadTable";
import SearchBar from "../components/SearchBar";
import StatusCards from "../components/StatusCards";
import StatusFilter from "../components/StatusFilter";

import "../styles/dashboard.css";

function Dashboard() {
  const [leads, setLeads] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const fetchLeads = async () => {
    try {
      setLoading(true);
      setError("");

      const res = await api.get("/leads");

      setLeads(res.data);
    } catch (err) {
      setError(
        err.response?.data?.message ||
          "Failed to load leads"
      );
    } finally {
      setLoading(false);
    }
  };

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  useEffect(() => {
    fetchLeads();
  }, []);

  if (loading) {
    return (
      <div className="dashboard">
        <div className="loading-state">
          Loading leads...
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="dashboard">
        <div className="error-state">
          {error}
        </div>
      </div>
    );
  }

  return (
    <div className="dashboard">

      <div className="dashboard-header">

        <h1 className="dashboard-title">
          Lead Management CRM
        </h1>

        <button
          className="logout-btn"
          onClick={logout}
        >
          Logout
        </button>

      </div>

      <StatusCards leads={leads} />

      <div className="toolbar">
        <SearchBar setLeads={setLeads} />
        <StatusFilter setLeads={setLeads} />
      </div>

      <LeadForm fetchLeads={fetchLeads} />

      {leads.length === 0 ? (
        <div className="empty-state">
          No leads found.
        </div>
      ) : (
        <LeadTable
          leads={leads}
          fetchLeads={fetchLeads}
        />
      )}

    </div>
  );
}

export default Dashboard;