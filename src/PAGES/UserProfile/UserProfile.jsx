import React from 'react';
import { useParams } from 'react-router-dom';
import UserSidebar from '../../COMPONENTS/UserProfile/UserSidebar.jsx';
import AccountSettings from '../../COMPONENTS/UserProfile/AccountSettings.jsx';
import ChangePassword from '../../COMPONENTS/UserProfile/ChangePassword.jsx';
import './UserProfile.css';

const UserProfile = () => {
  const { activepage } = useParams();

  return (
    <div className='userprofile'>
      <div className='userprofilein'>
        <div className='left'>
          <UserSidebar activepage={activepage} />
        </div>
        <div className='right'>
          {activepage === 'accountsettings' && <AccountSettings />}
          {activepage === 'changepassword' && <ChangePassword />}
        </div>
      </div>
    </div>
  );
}

export default UserProfile;
