import React from 'react';
import PropTypes from 'prop-types';
import style from './Stat.module.css';
import { Statistic } from 'antd';

const Stat = ({ statistic }) => {
  return (
    <section className={style.wrapper}>
      <h3 className={style.title}>Upload stats</h3>
      <div
        style={{
          background: '#fafafa',
          width: 300,
          padding: '30px',
          display: 'flex',
          justifyContent: 'space-between',
          textAlign: 'center',
          borderTop: '1px solid #e8e8e8'
        }}
      >
        {statistic.map(({ id, label, percentage }) => (
          <Statistic
            key={id}
            title={label}
            value={percentage}
            valueStyle={{ fontSize: 14, fontWeight: 600 }}
          />
        ))}
      </div>
    </section>
  );
};

export default Stat;

Stat.propTypes = {
  statistic: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string,
    percentage: PropTypes.number,
  }))
};
