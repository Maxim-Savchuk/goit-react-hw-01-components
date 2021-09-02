import user from 'user.json';
import statisticalData from 'statistical-data.json';
import friends from 'friends.json';
import transactions from 'transactions.json';

import { Profile } from 'components/Profile/Profile';
import { StatisticsList } from 'components/Statistics/StatisticsList';
import { FriendList } from 'components/FriendList/FriendList';
import { TransactionHistory } from 'components/TransactionHistory/TransactionHistory';

import s from './App.module.css';

export const App = () => {
  const { name, tag, location, avatar, stats } = user;
  return (
    <div className={s.container}>
      <Profile name={name} tag={tag} location={location} avatar={avatar} stats={stats} />
      <StatisticsList title="Upload stats" stats={statisticalData} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </div>
  );
};
