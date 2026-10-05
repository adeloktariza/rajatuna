# Admin Rajatuna - Specification Document

## 1. Project Overview

- **Project Name**: Admin Rajatuna
- **Type**: Admin Dashboard Web Application
- **Core Functionality**: A comprehensive admin panel with user management, product management, and authentication
- **Target Users**: System administrators and managers
- **Tech Stack**: Next.js 14 (App Router), AdminLTE 3.x, React, TypeScript

## 2. UI/UX Specification

### Layout Structure
- **Login Page**: Centered card layout with company branding
- **Dashboard Layout**: Fixed sidebar navigation + top header + main content area
- **Responsive Breakpoints**:
  - Mobile: < 768px (collapsible sidebar)
  - Tablet: 768px - 1024px
  - Desktop: > 1024px

### Visual Design
- **Color Palette**:
  - Primary: #1a1a2e (Deep Navy)
  - Secondary: #16213e (Dark Blue)
  - Accent: #e94560 (Coral Red)
  - Success: #28a745
  - Warning: #ffc107
  - Danger: #dc3545
  - Background: #f4f6f9
  - Sidebar Dark: #1a1a2e
  - Text Light: #ffffff
  - Text Dark: #333333

- **Typography**:
  - Font Family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif
  - Headings: 24px (h1), 20px (h2), 18px (h3)
  - Body: 14px
  - Small: 12px

- **Spacing System**: 8px base unit (8, 16, 24, 32, 48px)

### Components

#### Login Page
- Company logo/name header
- Email input field
- Password input field
- Remember me checkbox
- Login button (accent color)
- Error message display

#### Dashboard Layout
- **Sidebar**: Dark theme with navigation menu
  - Brand logo "Admin Rajatuna"
  - Menu items: Dashboard, Master User, Products, Logout
  - Active state highlight
- **Header**: 
  - Toggle sidebar button
  - User dropdown (profile, logout)
- **Content Area**: White background cards with content

#### Master User Page
- Data table with columns: ID, Name, Email, Role, Status, Actions
- Search functionality
- Add User button
- Edit/Delete action buttons per row
- Pagination

#### Add Product Page
- Form fields: Product Name, Description, Price, Category, Stock, Image Upload
- Save and Cancel buttons
- Form validation

## 3. Functionality Specification

### Authentication
- Login with email/password
- Session management with localStorage
- Protected routes (redirect to login if not authenticated)
- Logout functionality

### Master User
- List all users in table format
- Add new user (name, email, role, status)
- Edit existing user
- Delete user with confirmation
- Search/filter users

### Product Management
- Add new product with form
- Product fields: name, description, price, category, stock quantity
- Form validation

### Dashboard
- Display welcome message
- Show summary cards (Total Users, Total Products, etc.)
- Quick action buttons

## 4. Page Structure

```
/login          - Login page
/dashboard      - Main dashboard
/users          - Master User page
/products/add   - Add Product page
```

## 5. Acceptance Criteria

- [ ] Login page displays correctly with form validation
- [ ] Successful login redirects to dashboard
- [ ] Dashboard shows with sidebar navigation
- [ ] Master User page displays user table with mock data
- [ ] Add User modal/form works
- [ ] Add Product page displays form with validation
- [ ] Responsive design works on mobile/tablet
- [ ] Logout returns to login page
- [ ] Protected routes redirect unauthenticated users
