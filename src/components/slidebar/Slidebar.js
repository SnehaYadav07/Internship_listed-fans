import React from "react";
import "./slidebar.css";
import dash from "../utils/dashboard-icon.svg";
import transaction from "../utils/transaction-icon.svg";
import schedule from "../utils/schedule-icon.svg";
import user from "../utils/user-icon.svg";
import settings from "../utils/setting-icon.svg";

const Sidebar = () => {
  return (
    <div className="board2">
      <div className="menu">
        <h1>Board.</h1>
        <p className="dash">
          <img src={dash} alt="dashboard" />
          Dashboard
        </p>
        <p className="transaction">
          <img src={transaction} alt="transaction" />
          Transactions
        </p>
        <p className="schedules">
          <img src={schedule} alt="schedules" />
          Scheducles
        </p>
        <p className="users">
          <img src={user} alt="users" />
          Users
        </p>
        <p className="settings">
          <img src={settings} alt="settings" />
          Settings
        </p>
      </div>
      <div className="bottom">
        <p className="help">Help</p>
        <p className="contact">Contact Us</p>
      </div>
    </div>
  );
};

export default Sidebar;