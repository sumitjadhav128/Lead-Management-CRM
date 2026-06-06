import api from "../services/api";

function StatusFilter({ setLeads }) {

  const handleFilter = async (e) => {
    const status = e.target.value;

    const url =
      status === "all"
        ? "/leads"
        : `/leads?status=${status}`;

    const res = await api.get(url);

    setLeads(res.data);
  };

  return (
    <select
      onChange={handleFilter}
      className="border p-2"
    >
      <option value="all">All Leads</option>
      <option value="new">New</option>
      <option value="contacted">Contacted</option>
      <option value="qualified">Qualified</option>
      <option value="converted">Converted</option>
      <option value="lost">Lost</option>
    </select>
  );
}

export default StatusFilter;