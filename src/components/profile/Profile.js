import React from 'react';
import PropTypes from 'prop-types';
import { Card, Avatar, Statistic } from 'antd';
import 'antd/dist/antd.css';

const Profile = ({ user }) => {
  const { name, avatar, location, tag, stats } = user;
  return (
    <>
      <Card
        style={{ width: 300, marginTop: 30 }}
        actions={[
          <Statistic
            title="Followers"
            value={stats.followers}
            valueStyle={{ fontSize: 14, fontWeight: 600 }}
          />,
          <Statistic
            title="Views"
            value={stats.views}
            valueStyle={{ fontSize: 14, fontWeight: 600 }}
          />,
          <Statistic
            title="Likes"
            value={stats.likes}
            valueStyle={{ fontSize: 14, fontWeight: 600 }}
          />
        ]}
      >
        <div style={{ textAlign: 'center' }}>
          <Avatar
            style={{ margin: '10px 0' }}
            size={130}
            src={avatar}
          />
          <h3>{name}</h3>
          <span>@{tag}</span>
          <p>{location}</p>
        </div>
      </Card>
    </>
  );
};

export default Profile;


Profile.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string,
    avatar: PropTypes.string,
    location: PropTypes.string,
    tag: PropTypes.string,
    stats: PropTypes.object
  })
};
