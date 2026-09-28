import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';
import { TodayPage } from '@pages/today';
import { HistoryPage } from '@pages/history';
import styles from './App.module.css';

export function App() {
  return (
    <BrowserRouter>
      <nav className={styles.nav}>
        <NavLink
          to="/"
          end
          className={({ isActive }) =>
            isActive ? `${styles.link} ${styles.active}` : styles.link
          }
        >
          Сегодня
        </NavLink>
        <NavLink
          to="/history"
          className={({ isActive }) =>
            isActive ? `${styles.link} ${styles.active}` : styles.link
          }
        >
          История
        </NavLink>
      </nav>

      <Routes>
        <Route path="/" element={<TodayPage />} />
        <Route path="/history" element={<HistoryPage />} />
      </Routes>
    </BrowserRouter>
  );
}
