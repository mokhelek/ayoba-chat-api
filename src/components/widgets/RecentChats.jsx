import React from 'react'
import avatar1 from "../../assets/picture-profile-icon-male-icon-human-or-people-sign-and-symbol-free-vector.jpg"
import avatar2 from "../../assets/profilepicture-1-head-person.jpg"


function RecentChats() {
    return (
        <>
            <div className="container">


            <div className="row" style={{marginBottom:"8px"}} >
                    <div className="recent-chat-wrapper">
                        <div className="d-flex">
                            <span>
                            <img className='recent-avatar' src={avatar2} alt="" />

                            </span>
                            <div style={{ marginLeft: "1rem", marginTop: "5px" }} >
                                <h6 style={{ color: '#645fec', fontWeight: '600', marginBottom: 0, fontSize: "0.9rem" }}> +55 984 4732 </h6>
                                <small style={{ margin: 0, fontSize: "0.75rem" }} className='text-secondary'> Thank you very much ...</small>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="row" style={{marginBottom:"8px"}} >
                    <div className="recent-chat-wrapper">
                        <div className="d-flex">
                            <span>
                                <img className='recent-avatar' src={avatar1} alt="" />
                            </span>
                            <div style={{ marginLeft: "1rem", marginTop: "5px" }} >
                                <h6 style={{ color: '#645fec', fontWeight: '600', marginBottom: 0, fontSize: "0.9rem" }}> +27 984 4742 </h6>
                                <small style={{ margin: 0, fontSize: "0.75rem" }} className='text-secondary'> The documents have been sent</small>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row" style={{marginBottom:"8px"}}>
                    <div className="recent-chat-wrapper">
                        <div className="d-flex">
                            <span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="#706bff" className="bi bi-person-circle" viewBox="0 0 16 16">
                                    <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
                                    <path fillRule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1" />
                                </svg>
                            </span>
                            <div style={{ marginLeft: "1rem", marginTop: "5px" }} >
                                <h6 style={{ color: '#645fec', fontWeight: '600', marginBottom: 0, fontSize: "0.9rem" }}> +27 984 4742 </h6>
                                <small style={{ margin: 0, fontSize: "0.75rem" }} className='text-secondary'> Lorem ipsum impedit.</small>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default RecentChats
