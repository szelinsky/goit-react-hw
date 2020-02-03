import React from 'react';
import { Row, Col } from 'antd';
import user from '../user.json';
import Profile from './profile/Profile';
import statistic from '../statistical-data.json';
import Stat from './statistic/Stat';
import friends from '../friends.json'
import FriendList from './friend-list/FriendList'
import transactions from '../transactions.json';
import TransactionHistory from './transaction-history/TransactionHistory'

const App = () => {
  return (
    <>
      <Row type="flex" justify="center">
        <Col>
          <Profile user={user} />
					<Stat statistic={statistic} />
					<FriendList friends={friends} />
        </Col>
				<Col>  
          <TransactionHistory transactions={transactions} />
        </Col>
      </Row>
     
    </>
  );
};

export default App;
