import React, { useContext } from "react";
import { observer } from "mobx-react-lite";
import styles from "../../style/filter.module.scss";
import { TodoContext } from "../../utils/TodoStore";

export const Filter = observer(() => {
  const todoStore = useContext(TodoContext);

  const filterResults = (newFilter: "all" | "completed" | "active") =>
    todoStore.setFilter(newFilter);

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value as "all" | "completed" | "active";
    filterResults(value);
  };

  return (
    <div className={styles.container}>
      <label htmlFor="filter-select" className={styles.label}>
        Filter:
      </label>
      <select
        id="filter-select"
        value={todoStore.filter}
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
