import React from 'react';
import PropTypes from 'prop-types';
import { Table } from 'antd';
import style from './Transaction.module.css'

const TransactionHistory = ({ transactions }) => {
  //console.log(transactions);

  const columns = [
    {
      title: 'Type',
      dataIndex: 'type',
      key: 'type'
    },
    {
      title: 'Amount',
      dataIndex: 'amount',
      key: 'amount'
    },
    {
      title: 'Currency',
      dataIndex: 'currency',
      key: 'currency'
    }
  ];
  return (
    <section className={style.wrapper}>
      <Table
        pagination={false}
        dataSource={transactions}
        columns={columns}
        rowKey={transactions => transactions.id}
        style={{ width: 600 }}
      />
    </section>
  );
};

export default TransactionHistory;

TransactionHistory.propTypes = {
  transactions: PropTypes.arrayOf(PropTypes.shape({
    type: PropTypes.string,
    amount: PropTypes.string,
    currency: PropTypes.string,
    id: PropTypes.string,
 
  }))
};