import user from 'user.json';
import statisticalData from 'statistical-data.json';

import { Profile } from 'Profile/Profile';
import { StatisticsList } from 'Statistics/StatisticsList';

import s from './App.module.css';

export const App = () => {
  const { name, tag, location, avatar, stats } = user;
  return (
    <div className={s.container}>
      <Profile name={name} tag={tag} location={location} avatar={avatar} stats={stats} />
      <StatisticsList title="Upload stats" stats={statisticalData} />
    </div>
  );
};
