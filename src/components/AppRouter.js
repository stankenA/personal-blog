import React, { useContext } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthContext';

import { privateRoutes, publicRoutes } from '../routes/routes';

export default function AppRouter() {

  const { isAuth, isLoading } = useContext(AuthContext);

  // Проблема: перейдя на конкретный пост например с адресом /posts/1
  // и обновив страницу состояние isAuth по дефолту равно false,
  // из-за чего отрабатывает следующее:
  // 1. Отрабатывает второй кейс isAuth
  // 2. Идёт редирект на логин
  // 3. Потом состояние меняется на true
  // 4. Отрабатывает первый кейс isAuth
  // 5. Идёт редирект на главную страницу

  // Конструкция if (isLoading) решает эту проблему.
  // Т.е. роутер не работает, пока идёт загрузка данных о пользователе

  if (isLoading) {
    return <span className="posts__loader"></span>
  }

  return (
    <>
      {isAuth
        ? <Routes>
          {privateRoutes.map((route) =>
            <Route
              exact={route.exact}
              path={route.path}
              element={route.component}
              key={route.path}
            />
          )}
          <Route
            exact
            path="/login"
            element={<Navigate to="/" replace />}
          />
        </Routes>
        : <Routes>
          {publicRoutes.map((route) =>
            <Route
              exact={route.exact}
              path={route.path}
              element={route.component}
              key={route.path}
            />
          )}
          <Route
            exact
            path="*"
            element={<Navigate to="/login" replace />}
          />
        </Routes>}
    </>
  )
}
