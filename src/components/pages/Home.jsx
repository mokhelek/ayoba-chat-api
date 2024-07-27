import React from 'react'
import avatar from "../../assets/man-with-beard-avatar-character-isolated-icon-free-vector.jpg"
import ayobaLogo from "../../assets/Ayoba_app_logo-removebg-preview.png"
import ChatBox from '../widgets/ChatBox';
import RecentChats from '../widgets/RecentChats';
import AuthButton from '../widgets/AuthButton';

function Home() {

  return (
    <>
      <div className="container-fluid">
        <div className="row chat-wrapper">
          <div className="col-1 menu-col">
            <br />
            <div className="row">
              <center>
                <img style={{ backgroundColor: "white" }} className='img-fluid' height={50} width={50} src={ayobaLogo} alt="" />
              </center>
            </div>
            <hr />

            <div className="row">
              <AuthButton />
            </div>
          </div>
          <div className="col-4 contacts-col">
            <br />
            <div style={{ borderBottom: "1px #5028ed solid", paddingBottom: "1.3rem" }} >
              <input className='form-control' type="text" placeholder='Search ...' name="" id="" />
            </div>
            <br />
            <RecentChats />
          </div>

          <div className="col-7 chat-col" >
            <div className="container p-3">
              <div className="row" style={{ borderBottom: "1.5px #1a00dc53 solid", padding: '0.5rem 0 1rem 0' }} >
                <div className="d-flex">
                  <img className='avatar' height={55} width={55} src={avatar} alt="" />
                  <div style={{ marginLeft: "1rem", marginTop: "5px" }} >
                    <h6 style={{ color: '#645fec', fontWeight: '700', marginBottom: 0, fontSize: "1.2rem" }}> +27 984 4742 </h6>
                    <small style={{ margin: 0 }} className='text-secondary'> Customer</small>
                  </div>
                </div>

              </div>
              <ChatBox />
            </div>
          </div>

        </div>
      </div>
    </>
  )
}

export default Home
