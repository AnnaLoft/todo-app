import React from 'react';
import { observer } from 'mobx-react-lite';
import styles from '../../style/filter.module.scss';

interface FilterProps {
  currentFilter: 'all' | 'completed' | 'active';
  onChange: (filter: 'all' | 'completed' | 'active') => void;
}

export const Filter: React.FC<FilterProps> = observer(({ 
  currentFilter,
  onChange}) => {

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value as 'all' | 'completed' | 'active';
    onChange(value);
  };

  return (
    <div className={`filter-container ${styles.container}`}>
      <label htmlFor="filter-select" className={`label ${styles.label}`}>Sort by:</label>
      <select
        id="filter-select"
        value={currentFilter}
        onChange={handleChange}
        className={`select ${styles.select}`}
      >
        <option value="all">All</option>
        <option value="active">Active</option>
        <option value="completed">Completed</option>
      </select>
    </div>
  );
});