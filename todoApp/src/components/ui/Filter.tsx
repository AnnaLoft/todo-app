import React from 'react';
import { observer } from 'mobx-react-lite';
import styles from '../../style/filter.module.scss';

interface FilterProps {
  currentFilter: 'all' | 'completed' | 'active';
  onChange: (filter: 'all' | 'completed' | 'active') => void;
}

export const Filter = observer(({ currentFilter, onChange }: FilterProps) => {
  console.log('Filter');

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value as 'all' | 'completed' | 'active';
    onChange(value);
  };

  return (
    <div className={styles.container}>
      <label htmlFor="filter-select" className={styles.label}>
        Filter:
      </label>
      <select
        id="filter-select"
        value={currentFilter}
        onChange={handleChange}
        className={`select ${styles.select}`}>
        <option value="all">All</option>
        <option value="active">Active</option>
        <option value="completed">Completed</option>
      </select>
    </div>
  );
});