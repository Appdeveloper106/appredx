// src/components/UserProfile.tsx
import React from 'react';
import { View, Button, Text } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store/reducers';
import { User } from '../types';
import { logout, setUser } from '../store/reducers/userReducer';
// import { setUser, logout } from '../reducers/userReducer';
// import { RootState } from '../reducers';
// import { User } from '../types'; // Import the User type

const UserProfile = () => {
  const dispatch = useDispatch();
  const user = useSelector((state: RootState) => state.user.user);

  const handleLogin = () => {
    const userData: User = { id: 1, name: 'John Doe' }; // Example user data
    dispatch(setUser(userData));
  };

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <View>
      {user ? (
        <>
          <Text>Welcome, {user.name}!</Text>
          <Button title="Logout" onPress={handleLogout} />
        </>
      ) : (
        <Button title="Login" onPress={handleLogin} />
      )}
    </View>
  );
};

export default UserProfile;