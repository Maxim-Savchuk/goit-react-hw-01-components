import s from './Statistics.module.css';

export const Statistics = ({ label, percentage }) => {
  function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }
  const color = getRandomHexColor();
  return (
    <li className={s.item} style={{ backgroundColor: color }}>
      <span className={s.label}>{label}</span>
      <span className={s.percentage}>{percentage}%</span>
    </li>
  );
};
