import React, { useState } from 'react';

export default function Main() {
    const [userName, setName] = useState("");
    const [userEmail, setEmail] = useState("");
    const [userPassword, setPassword] = useState("");
    const [userContact, setContact]= useState("")
    

    function renderName(e) {
        setName(e?.target?.value);
    }

    function renderEmail(e) {
        setEmail(e?.target?.value);
    }

    function renderPassword(e) {
        if (e.target.value !== "") {
            setPassword(e.target.value);
        } else {
            alert("Please Enter your Password First");
        }
    }
    function renderContact(e){
        setContact(e?.target?.value)
    }

 

  

    return (
        <>
            <div className='container'>
                <div className="row d-flex justify-content-center">
                    <div className="col-md-10 col-sm-12  mt-5 pt-md-5 shadow-lg p-3 col-mx-3" style={{ borderRadius: '20px' }}>
                        <form>
                            <div className="mb-3">
                                <input
                                    type="text"
                                    onChange={(e) => renderName(e)}
                                    className="form-control p-3 fs-6"
                                    id="text"
                                    placeholder="Enter Your Name"
                                    aria-describedby="emailHelp"
                                />
                            </div>
                            <div className="mb-3">
                                <input
                                    type="email"
                                    className="form-control p-3 fs-6"
                                    onChange={(e) => renderEmail(e)}
                                    id="email"
                                    placeholder="Email address or phone number"
                                    aria-describedby="emailHelp"
                                />
                                <div id="emailHelp" className="form-text">
                                    We'll never share your email with anyone else.
                                </div>
                            </div>
                           
                            <div className="mb-3">
                                <input type="password" placeholder="Password" className="form-control p-3" id="password" onChange={(e) => renderPassword(e)} />
                            </div>

                            <div className="mb-3">
                                <input type="contact" placeholder="Contact" className="form-control p-3" id="password" onChange={(e) => renderContact(e)} />
                            </div>
                           
                            <button className="btn btn-primary w-100 p-1 fw-bold fs-4" id='login' >
                                Log in
                            </button>

                            <a href="https://www.example.com" className="nav-link text-center text-primary mt-2 ">
                                <p>Forgotten password?</p>
                            </a>
                            <hr />
                            <div className="container d-flex justify-content-center">
                                <button className="btn text-white p-2 fs-5 mt-2" style={{ backgroundColor: '#42B72A' }}>
                                    Create new account
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row d-flex justify-content-center mt-5">
                    <ul className="list-group col-md-8 list-group-flush fs-4">
                        <li className="list-group-item text-primary">Name: {userName}</li>
                        <li className="list-group-item text-primary">Email: {userEmail}</li>
                        <li className="list-group-item text-primary">Password: {userPassword}</li>
                        <li className="list-group-item text-primary">Contact NO:{userContact} </li>
                    </ul>
                </div>
            </div>
        </>
    )
}

