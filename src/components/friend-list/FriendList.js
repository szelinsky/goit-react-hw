import React from 'react';
import PropTypes from 'prop-types';
import { Card, Avatar, Badge } from 'antd';
import style from './Friends.module.css';

const FriendList = ({ friends }) => {

  return (
    <section className={style.wrapper}>
      <h3 className={style.title}>Friend List</h3>
      {friends.map(({ avatar, name, isOnline, id }) => (
        <Card key={id} style={{ margin: 15 }}>
          <div className={style.block}>
            <span className={style.dot}>
              {isOnline ? <Badge status="success" /> : <Badge status="error" />}
            </span>
            <span className={style.avatar}>
              {<Avatar shape="square" size={50} src={avatar} />}
            </span>
            <span>{name}</span>
          </div>
        </Card>
      ))}
    </section>
  );
};

export default FriendList;

FriendList.propTypes = {
  friends: PropTypes.arrayOf(PropTypes.shape({
    avatar: PropTypes.string,
    name: PropTypes.string,
    isOnline: PropTypes.bool,
  }))
};
