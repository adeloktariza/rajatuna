'use client';

import { useAuth } from '@/lib/auth';

export default function DashboardPage() {
  const { user } = useAuth();

  const stats = [
    { label: 'Total Users', value: '150', icon: 'blue', iconClass: 'fa-users' },
    { label: 'Total Products', value: '89', icon: 'green', iconClass: 'fa-box' },
    { label: 'Active Orders', value: '23', icon: 'orange', iconClass: 'fa-shopping-cart' },
    { label: 'Revenue', value: '$12,500', icon: 'red', iconClass: 'fa-dollar-sign' },
  ];

  return (
    <div>
      <div className="welcome-section" style={{ marginBottom: '30px' }}>
        <h2 style={{ fontSize: '24px', fontWeight: '600', color: '#333' }}>
          Welcome back, {user?.name}!
        </h2>
        <p style={{ color: '#666', marginTop: '5px' }}>
          Here&apos;s what&apos;s happening with your store today.
        </p>
      </div>

      <div className="dashboard-cards">
        {stats.map((stat, index) => (
          <div className="dashboard-card" key={index}>
            <div className={`dashboard-card-icon ${stat.icon}`}>
              <i className={`fas ${stat.iconClass}`}></i>
            </div>
            <div className="dashboard-card-content">
              <h4>{stat.label}</h4>
              <p>{stat.value}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="card">
        <div className="card-header">
          <h3>Quick Actions</h3>
        </div>
        <div className="card-body">
          <div style={{ display: 'flex', gap: '15px', flexWrap: 'wrap' }}>
            <a href="/dashboard/users" className="btn btn-success">
              <i className="fas fa-users" style={{ marginRight: '8px' }}></i>
              Manage Users
            </a>
            <a href="/dashboard/products/add" className="btn btn-info">
              <i className="fas fa-plus" style={{ marginRight: '8px' }}></i>
              Add Product
            </a>
          </div>
        </div>
      </div>

      <div className="card">
        <div className="card-header">
          <h3>Recent Activity</h3>
        </div>
        <div className="card-body">
          <table className="table">
            <thead>
              <tr>
                <th>Activity</th>
                <th>User</th>
                <th>Date</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>New user registered</td>
                <td>Jane Smith</td>
                <td>Oct 5, 2026</td>
                <td><span className="badge-success">Completed</span></td>
              </tr>
              <tr>
                <td>Product added</td>
                <td>Admin Rajatuna</td>
                <td>Oct 4, 2026</td>
                <td><span className="badge-success">Completed</span></td>
              </tr>
              <tr>
                <td>Order placed</td>
                <td>John Doe</td>
                <td>Oct 3, 2026</td>
                <td><span className="badge-success">Completed</span></td>
              </tr>
              <tr>
                <td>User updated</td>
                <td>Admin Rajatuna</td>
                <td>Oct 2, 2026</td>
                <td><span className="badge-success">Completed</span></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
