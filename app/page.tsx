type Role = "SuperAdmin" | "Admin" | "User";

/**
 * TEMP: Change role here to preview UI
 * Later this will come from auth/session
 */
const CURRENT_ROLE: Role = "SuperAdmin";

export default function DashboardPage() {
  return (
    <main style={styles.page}>
      <Header role={CURRENT_ROLE} />
      <KPIs role={CURRENT_ROLE} />
      <QuickActions role={CURRENT_ROLE} />
      <DashboardPanels role={CURRENT_ROLE} />
    </main>
  );
}

/* ================= HEADER ================= */

function Header({ role }: { role: Role }) {
  return (
    <div style={styles.header}>
      <div>
        <h2>Leads Management System</h2>
        <span style={styles.subtext}>Role: {role}</span>
      </div>
      <div style={styles.userBadge}>John Doe</div>
    </div>
  );
}

/* ================= KPI CARDS ================= */

function KPIs({ role }: { role: Role }) {
  const cards =
    role === "SuperAdmin"
      ? [
        "Total Companies",
        "Total Admins",
        "Total Users",
        "Total Leads",
        "Active Leads",
        "Deleted (30 Days)",
      ]
      : role === "Admin"
        ? [
          "Total Leads",
          "My Leads",
          "My Work",
          "Total Users",
          "Total Admins",
        ]
        : ["My Leads", "My Work", "Company Leads"];

  return (
    <section style={styles.kpiGrid}>
      {cards.map((title) => (
        <div key={title} style={styles.card}>
          <h3>{title}</h3>
          <strong>—</strong>
        </div>
      ))}
    </section>
  );
}

/* ================= QUICK ACTIONS ================= */

function QuickActions({ role }: { role: Role }) {
  if (role === "User") {
    return (
      <ActionSection>
        <ActionButton label="Create Lead" />
      </ActionSection>
    );
  }

  if (role === "Admin") {
    return (
      <ActionSection>
        <ActionButton label="Create Lead" />
        <ActionButton label="Create User" />
      </ActionSection>
    );
  }

  return (
    <ActionSection>
      <ActionButton label="Create Company" />
      <ActionButton label="Create Admin" />
      <ActionButton label="Create User" />
    </ActionSection>
  );
}

function ActionSection({ children }: { children: React.ReactNode }) {
  return <section style={styles.actions}>{children}</section>;
}

function ActionButton({ label }: { label: string }) {
  return <button style={styles.actionBtn}>{label}</button>;
}

/* ================= DASHBOARD PANELS ================= */

function DashboardPanels({ role }: { role: Role }) {
  return (
    <section style={styles.panelGrid}>
      {(role === "Admin" || role === "User") && (
        <Panel title="My Work (Assigned Leads)" />
      )}

      {role !== "SuperAdmin" && <Panel title="My Leads" />}

      {role === "SuperAdmin" && (
        <>
          <Panel title="Recent Companies" />
          <Panel title="Recent Leads" />
          <Panel title="System Alerts">
            <p style={styles.alert}>
              ⚠ Records scheduled for permanent deletion in 7 days
            </p>
          </Panel>
        </>
      )}
    </section>
  );
}

function Panel({
  title,
  children,
}: {
  title: string;
  children?: React.ReactNode;
}) {
  return (
    <div style={styles.panel}>
      <h3>{title}</h3>
      {children ?? <p style={styles.placeholder}>No data yet</p>}
    </div>
  );
}

/* ================= STYLES ================= */

const styles = {
  page: {
    minHeight: "100vh",
    background: "#f8fafc",
    padding: "24px",
    fontFamily: "system-ui, sans-serif",
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "24px",
  },
  subtext: {
    fontSize: "14px",
    color: "#64748b",
  },
  userBadge: {
    background: "#1e293b",
    color: "#fff",
    padding: "8px 12px",
    borderRadius: "6px",
    fontSize: "14px",
  },
  kpiGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
    gap: "16px",
    marginBottom: "24px",
  },
  card: {
    background: "#fff",
    padding: "16px",
    borderRadius: "8px",
    boxShadow: "0 1px 4px rgba(0,0,0,0.05)",
  },
  actions: {
    display: "flex",
    gap: "12px",
    marginBottom: "32px",
  },
  actionBtn: {
    padding: "10px 16px",
    borderRadius: "6px",
    border: "none",
    background: "#2563eb",
    color: "#fff",
    cursor: "pointer",
  },
  panelGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
    gap: "16px",
  },
  panel: {
    background: "#fff",
    padding: "16px",
    borderRadius: "8px",
    boxShadow: "0 1px 4px rgba(0,0,0,0.05)",
  },
  placeholder: {
    color: "#94a3b8",
    fontSize: "14px",
  },
  alert: {
    color: "#b91c1c",
    fontWeight: "600",
  },
};
