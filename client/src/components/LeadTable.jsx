import api from "../services/api";
import { useState } from "react";

function LeadTable({ leads, fetchLeads }) {
  const [editingId, setEditingId] = useState(null);
  const [editForm, setEditForm] = useState({});

  // DELETE LEAD
  const deleteLead = async (id) => {
  const confirmed = window.confirm(
    "Are you sure you want to delete this lead?"
  );

  if (!confirmed) return;

  try {
    await api.delete(`/leads/${id}`);
    fetchLeads();
  } catch (err) {
    console.error(err);
    alert("Failed to delete lead");
  }
};

  // START EDIT
  const startEdit = (lead) => {
    setEditingId(lead._id);
    setEditForm({
      name: lead.name,
      email: lead.email,
      company: lead.company,
      status: lead.status,
    });
  };

  // SAVE EDIT
  const saveEdit = async (id) => {
    await api.put(`/leads/${id}`, editForm);
    setEditingId(null);
    fetchLeads();
  };

  return (
    <div className="overflow-x-auto mt-4">
      <table className="w-full border">
        <thead>
          <tr>
            <th className="border p-2">Name</th>
            <th className="border p-2">Email</th>
            <th className="border p-2">Company</th>
            <th className="border p-2">Status</th>
            <th className="border p-2">Actions</th>
          </tr>
        </thead>

        <tbody>
          {leads.map((lead) => (
            <tr key={lead._id} className="border">
              {/* NAME */}
              <td className="border p-2">
                {editingId === lead._id ? (
                  <input
                    className="border px-2 py-1"
                    value={editForm.name || ""}
                    onChange={(e) =>
                      setEditForm({
                        ...editForm,
                        name: e.target.value,
                      })
                    }
                  />
                ) : (
                  lead.name
                )}
              </td>

              {/* EMAIL */}
              <td className="border p-2">
                {editingId === lead._id ? (
                  <input
                    className="border px-2 py-1"
                    value={editForm.email || ""}
                    onChange={(e) =>
                      setEditForm({
                        ...editForm,
                        email: e.target.value,
                      })
                    }
                  />
                ) : (
                  lead.email
                )}
              </td>

              {/* COMPANY */}
              <td className="border p-2">
                {editingId === lead._id ? (
                  <input
                    className="border px-2 py-1"
                    value={editForm.company || ""}
                    onChange={(e) =>
                      setEditForm({
                        ...editForm,
                        company: e.target.value,
                      })
                    }
                  />
                ) : (
                  lead.company
                )}
              </td>

              {/* STATUS */}
              <td className="border p-2">
                {editingId === lead._id ? (
                  <select
                    className="border px-2 py-1"
                    value={editForm.status || "new"}
                    onChange={(e) =>
                      setEditForm({
                        ...editForm,
                        status: e.target.value,
                      })
                    }
                  >
                    <option value="new">new</option>
                    <option value="contacted">contacted</option>
                    <option value="qualified">qualified</option>
                    <option value="converted">converted</option>
                    <option value="lost">lost</option>
                  </select>
                ) : (
                  <span className={`status-badge badge-${lead.status}`}>
    {lead.status}
  </span>
                )}
              </td>

              {/* ACTIONS */}
              <td className="border p-2">
                {editingId === lead._id ? (
                  <>
                    <button
                      className="mr-2 px-2 py-1 border"
                      onClick={() => saveEdit(lead._id)}
                    >
                      Save
                    </button>

                    <button
                      className="px-2 py-1 border"
                      onClick={() => {
                        setEditingId(null);
                        setEditForm({});
                      }}
                    >
                      Cancel
                    </button>
                  </>
                ) : (
                  <>
                    <button
                      className="mr-2 px-2 py-1 border"
                      onClick={() => startEdit(lead)}
                    >
                      Edit
                    </button>

                    <button
                      className="px-2 py-1 border"
                      onClick={() => deleteLead(lead._id)}
                    >
                      Delete
                    </button>
                  </>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default LeadTable;