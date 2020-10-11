import React from 'react';
import './Overview.styles.css';
import 'react-toastify/dist/ReactToastify.css';
import UserList from '../../containers/UserList/UserList';
import LastChannelsMessageList from '../../containers/LastMessagesList/index';
import Search from '../Search/Search';
import RoomListOverview from '../RoomListOverview/RoomListOverview';
import { UserContext } from '../../context/userContext';
import { ToastContainer } from 'react-toastify';
import FooterChatProfile from '../footerChatProfile/FooterChatProfile';

function Overview() {
  const user = React.useContext(UserContext);
  return (
    <>
      <div className="overview">
        <h3 className="chat-title">Chats</h3>
        <div className="search">
          <Search />
        </div>
        <div className="room-list-overview">
          <RoomListOverview roomList={[]} />
        </div>
        <LastChannelsMessageList user={user} />
        <div className="users-list">
          <UserList />
        </div>
        <FooterChatProfile />
      </div>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        limit={1}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </>
  );
}

export default Overview;
