import React from 'react';
import avatar from "../../assets/man-with-beard-avatar-character-isolated-icon-free-vector.jpg";
import ayobaLogo from "../../assets/Ayoba_app_logo-removebg-preview.png";
import ChatBox from '../widgets/ChatBox';
import RecentChats from '../widgets/RecentChats';
import AuthButton from '../widgets/AuthButton';

function Home() {

  const handleLanguageChange =  (e) => {
    console.log(e.target.value)
    localStorage.setItem('language', e.target.value );
  };
  
  return (
    <>
      <div className="container-fluid">

        <div className="row chat-wrapper">
          <div className="col-1 menu-col">
            <br />
            <div style={{ borderBottom: "1px #3498db solid" }} className="row pb-3">
              <center>
                <img style={{ backgroundColor: "white" }} className='img-fluid' height={38} width={38} src={ayobaLogo} alt="" />
              </center>
            </div>


            <div className="row">
              <AuthButton />
            </div>
            <br />
            <div className="row">
              <center>
                <button onClick={() => { localStorage.removeItem("messageDatabase") }} className="refresh">
                  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="#fff" className="bi bi-arrow-clockwise" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M8 3a5 5 0 1 0 4.546 2.914.5.5 0 0 1 .908-.417A6 6 0 1 1 8 2z" />
                    <path d="M8 4.466V.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384L8.41 4.658A.25.25 0 0 1 8 4.466" />
                  </svg>
                </button>
              </center>
            </div>

          </div>
          <div style={{ boxShadow: "10px 0px 15px -5px rgba(0, 0, 0, 0.3)" }} className="col-3 contacts-col">
            <br />
            <div style={{ borderBottom: "1px #3498db solid" }} className="row pb-3">
              <input className='form-control' type="text" placeholder='Search Conversations' name="" id="" />
            </div>
            <br />
            <RecentChats />
          </div>

          <div className="col-8 chat-col" >
            <div className="container p-3">
              <div className="row" style={{ borderBottom: "1.5px #1a00dc53 solid", padding: '0.5rem 0 1rem 0' }} >
                <div className="d-flex justify-content-between align-items-center w-100">
                  <div className="d-flex">
                    <img className='avatar' height={55} width={55} src={avatar} alt="" />
                    <div style={{ marginLeft: "1rem", marginTop: "5px" }} >
                      <h6 style={{ color: '#645fec', fontWeight: '700', marginBottom: 0, fontSize: "1.2rem" }}> +27 984 4742 </h6>
                      <small style={{ margin: 0 }} className='text-secondary'> Customer</small>
                    </div>
                  </div>
                  <div>
                    <select onChange={handleLanguageChange} className="form-select" style={{ width: 'auto', padding: '0.375rem 1.75rem 0.375rem 0.75rem', fontSize: '1rem', lineHeight: '1.5', border: '1px solid #ced4da', borderRadius: '0.25rem' }}>
                      <option value="xh">Xhosa</option>
                      <option value="st">Sesotho</option>
                    </select>
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

export default Home;
