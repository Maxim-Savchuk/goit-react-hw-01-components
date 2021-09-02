import { Transaction } from './Transaction';
import s from './TransactionHistory.module.css';

export const TransactionHistory = ({ items }) => {
  return (
    <table className={s.transactionHistory}>
      <thead>
        <tr>
          <th className={s.th}>Type</th>
          <th className={s.th}>Amount</th>
          <th className={s.th}>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map(({ id, type, amount, currency }) => (
          <Transaction key={id} type={type} amount={amount} currency={currency} />
        ))}
      </tbody>
    </table>
  );
};
