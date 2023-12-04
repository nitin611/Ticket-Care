import React, { useEffect, useState } from 'react';
import { getAdminDashboard } from '../../../../services/operations/profileAPI';
import { useSelector, useDispatch } from 'react-redux';

const AdminDashboard = () => {
  // Corrected the usage of useState
  const [details, setDetails] = useState([]);

  const { token } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Get admin details
        const adminDetails = await getAdminDashboard(token, dispatch);
        
        console.log("details", adminDetails);

        // Set details in the state
        setDetails(adminDetails);
      } catch (error) {
        console.error('Error fetching admin details:', error);
      }
    };

    // Call the fetchData function
    fetchData();
  }, [token, dispatch]);

  return (
    <div>
      <p>Hi, this is the admin dashboard.</p>
      {/* Render your admin details using the 'details' state */}
      {/* For example: */}
      <p>{details.someProperty}</p>
    </div>
  );
};

export default AdminDashboard;
