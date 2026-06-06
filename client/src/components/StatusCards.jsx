// components/StatusCards.js

function StatusCards({ leads }) {
  const stats = {
    new: leads.filter((l) => l.status === "new").length,
    contacted: leads.filter((l) => l.status === "contacted").length,
    qualified: leads.filter((l) => l.status === "qualified").length,
    converted: leads.filter((l) => l.status === "converted").length,
    lost: leads.filter((l) => l.status === "lost").length,
  };

  return (
    <div className="status-legend-bar">
      <div className="legend-item new">
        <span className="dot"></span>
        <span className="label">New</span>
        <span className="value">{stats.new}</span>
      </div>
      <div className="legend-item contacted">
        <span className="dot"></span>
        <span className="label">Contacted</span>
        <span className="value">{stats.contacted}</span>
      </div>
      <div className="legend-item qualified">
        <span className="dot"></span>
        <span className="label">Qualified</span>
        <span className="value">{stats.qualified}</span>
      </div>
      <div className="legend-item converted">
        <span className="dot"></span>
        <span className="label">Converted</span>
        <span className="value">{stats.converted}</span>
      </div>
      <div className="legend-item lost">
        <span className="dot"></span>
        <span className="label">Lost</span>
        <span className="value">{stats.lost}</span>
      </div>
    </div>
  );
}

export default StatusCards;