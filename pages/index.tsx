import React from 'react'

import { useUser, login, logout } from "../lib/auth";
import { NextPage } from 'next';
import Head from 'next/head';

const Home: NextPage = () => {
  const user = useUser();

  const handleLogin = (): void => {
    login().catch((error) => console.error(error));
  };

  const handleLogout = (): void => {
    logout().catch((error) => console.error(error));
  };

  return (
    <div >
      <Head>
        <title>Auth Example</title>
      </Head>

      <div>
        <h1>Auth Example</h1>
        {user !== null ? (
          <h2>ログインしている</h2>
        ) : (
          <h2>ログインしていない</h2>
        )}
        <button onClick={handleLogin}>ログイン</button>
        <button onClick={handleLogout}>ログアウト</button>
      </div>
    </div>
  );
};
export default Home;
