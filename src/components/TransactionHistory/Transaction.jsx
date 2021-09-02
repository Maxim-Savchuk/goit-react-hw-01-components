import PropTypes from 'prop-types';
import s from './TransactionHistory.module.css';

export const Transaction = ({ type, amount, currency }) => {
  return (
    <tr>
      <td className={s.td}>{type}</td>
      <td className={s.td}>{amount}</td>
      <td className={s.td}>{currency}</td>
    </tr>
  );
};

Transaction.propTypes = {
  type: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
};
