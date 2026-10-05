'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { AuthProvider, useAuth } from '@/lib/auth';

function DashboardLayoutContent({ children }: { children: React.ReactNode }) {
  const { user, logout, isLoading } = useAuth();
  const pathname = usePathname();
  const router = useRouter();
  const [sidebarOpen, setSidebarOpen] = useState(true);

  useEffect(() => {
    if (!isLoading && !user) {
      router.push('/login');
    }
  }, [user, isLoading, router]);

  const handleLogout = () => {
    logout();
  };

  if (isLoading) {
    return (
      <div className="loading-spinner">
        <div>Loading...</div>
      </div>
    );
  }

  if (!user) {
    return null;
  }

  const navItems = [
    { href: '/dashboard', label: 'Dashboard', icon: 'fa-tachometer-alt' },
    { href: '/dashboard/users', label: 'Master User', icon: 'fa-users' },
    { href: '/dashboard/products/add', label: 'Add Product', icon: 'fa-box' },
  ];

  return (
    <div className={`wrapper ${sidebarOpen ? '' : 'sidebar-collapse'}`}>
      <aside className="main-sidebar sidebar-dark-primary elevation-4">
        <Link href="/dashboard" className="brand-link">
          <span className="brand-text font-weight-light" style={{ paddingLeft: '15px', fontSize: '20px' }}>
            Admin Rajatuna
          </span>
        </Link>
        <div className="sidebar">
          <div className="user-panel mt-3 pb-3 mb-3 d-flex">
            <div className="info">
              <a href="#" className="d-block">{user.name}</a>
            </div>
          </div>
          <nav className="mt-2">
            <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu">
              {navItems.map((item) => (
                <li className="nav-item" key={item.href}>
                  <Link 
                    href={item.href} 
                    className={`nav-link ${pathname === item.href ? 'active' : ''}`}
                  >
                    <i className={`nav-icon fas ${item.icon}`}></i>
                    <p>{item.label}</p>
                  </Link>
                </li>
              ))}
              <li className="nav-item">
                <button 
                  onClick={handleLogout}
                  className="nav-link"
                  style={{ background: 'none', border: 'none', cursor: 'pointer', width: '100%', textAlign: 'left' }}
                >
                  <i className="nav-icon fas fa-sign-out-alt"></i>
                  <p>Logout</p>
                </button>
              </li>
            </ul>
          </nav>
        </div>
      </aside>

      <div className="content-wrapper">
        <div className="content-header">
          <div className="container-fluid">
            <div className="row mb-2">
              <div className="col-sm-6">
                <h1 className="m-0">Admin Rajatuna</h1>
              </div>
              <div className="col-sm-6">
                <ol className="breadcrumb float-sm-right">
                  <li className="breadcrumb-item"><Link href="/dashboard">Home</Link></li>
                  <li className="breadcrumb-item active">Dashboard</li>
                </ol>
              </div>
            </div>
          </div>
        </div>

        <div className="content">
          <div className="container-fluid">
            {children}
          </div>
        </div>
      </div>

      <footer className="main-footer">
        <strong>Copyright © 2026 Admin Rajatuna.</strong>
      </footer>
    </div>
  );
}

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <AuthProvider>
      <DashboardLayoutContent>{children}</DashboardLayoutContent>
    </AuthProvider>
  );
}
