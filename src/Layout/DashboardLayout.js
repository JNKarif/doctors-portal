import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { AuthContext } from '../context/AuthProvider';
import useAdmin from '../hooks/useAdmin';
import Header from '../Pages/Shared/Header/Header';

const DashboardLayout = () => {

  const {user}= useContext(AuthContext);
  const [isAdmin]=useAdmin(user?.email)

  return (
        <div>
            <Header></Header>
           
            <div className="drawer drawer-mobile">
  <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content ">
  <Outlet></Outlet>
    <label htmlFor="dashboard-drawer" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
  
  </div> 
  <div className="drawer-side">
    <label htmlFor="dashboard-drawer" className="drawer-overlay"></label> 
    <ul className="menu p-4 w-80 bg-base-100 text-base-content">
    
      <Link to='/dashboard'>My Appointments</Link>

      {
        isAdmin && <>
        <Link to='/dashboard/allusers'>All Users</Link>
        <Link to='/dashboard/adddoctor'>Add A Doctor</Link>
        <Link to='/dashboard/managedoctors'>Manage Doctors</Link>
        </>
      }
    </ul>
  
  </div>
</div>
        </div>
    );
};

export default DashboardLayout;