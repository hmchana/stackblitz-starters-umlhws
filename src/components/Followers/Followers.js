import React from 'react';
import FollowersList from '../FollowersList/FollowersList.js';
import Header from '../Header/Header.js';
import './Followers.css';

export default function Followers() {
  return (
    <div className="followers">
      <Header title="Followers" />
      <FollowersList />
    </div>
  );
}
