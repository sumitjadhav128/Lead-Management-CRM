import api from "../services/api";

function SearchBar({ setLeads }) {

  const handleSearch = async (e) => {
    const value = e.target.value;

    const res = await api.get(`/leads?search=${value}`);

    setLeads(res.data);
  };

  return (
    <input
      type="text"
      placeholder="Search by name, email, company..."
      onChange={handleSearch}
      className="border p-2 w-full"
    />
  );
}

export default SearchBar;