import AdminSidebar from "./adminSidebar";
import AdminHeader from "./adminHeader";
import "./adminLayout.css";

export default function adminLayout({ children, onLogout }) {
  return (
    <div className="admin-layout">
      <AdminSidebar />

      <div className="admin-main">
        <AdminHeader onLogout={onLogout} />
        <div className="admin-content">
          {children}
        </div>
      </div>
    </div>
  );
}
