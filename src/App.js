import React from 'react';
import './App.css';
import Feed from './components/Feed';
import Header from "./components/Header"
import Login from './components/Login';
import Sidebar from './components/Sidebar';
import { selectUser } from './features/userSlice';
import { useSelector } from "react-redux"
function App() {
  const user = useSelector(selectUser);

  return (
    <div className="app">
      {/* Header Area */}


      {!user ? (
        <Login />
      ) : (
          <div>
            <Header />

            <div className="app__body">

              <Sidebar />

              <Feed />
            </div>

          </div>

        )
      }


    </div>
  );
}

export default App;
