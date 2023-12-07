import React, { useState } from 'react'

const Home = () => {
    const [user, setUser] = useState([
        {
            id: 1,
            name: "Sanjay Sokal",
            email: "sokalsanjay@gmail.com",
            designation: "Java Developer",
            phone: "8295673601",
            salary: "150000000000",
            date: "7-12-2023"
        }
    ])

    setUser([
        {
            id: 1,
            name: "Sanjay Sokal",
            email: "sokalsanjay@gmail.com",
            designation: "Java Developer",
            phone: "8295673601",
            salary: "150000000000",
            date: "7-12-2023"
        },
        {
            id: 2,
            name: "Sanjay Sokal 2",
            email: "sanjaysokal@gmail.com",
            designation: "Fullstack Developer",
            phone: "+91-8295673601",
            salary: "150000000000",
            date: "7-12-2023"
        }
    ])

    const [currentId, setCurrentId] = useState(0);

    const [view, setView] = useState({
        id: 0,
        name: "",
        email: "",
        designation: "",
        phone: "",
        salary: "",
        date: ""
    });

    const changeView = (id) => {
        setCurrentId(id);
        setView({
            id: id,
            name: "",
            email: "",
            designation: "",
            phone: "",
            salary: "",
            date: ""
        })
    }

    return (
        <>
            <section className='my-5'>
                <div className="container">
                    <div className="row">
                        {user.map((data, index) => {
                            return <div key={index} className="col-6">
                                <div className="card">
                                    <div className="card-body">
                                        <h5 className="card-title">{data.name}</h5>
                                        <p className="card-text">{data.designation}</p>
                                        <button className='btn btn-primary' onClick={data.id => changeView(data.id)} type="button" data-bs-toggle="modal" data-bs-target="#exampleModal">View Details</button>
                                    <button className='btn btn-warning ms-3' onClick={changeView(data.id)}>Edit Details</button>
                                    <button className='btn btn-danger ms-3' onClick={changeView(data.id)}>Changed or Regined</button>
                                </div>
                            </div>
                            </div>
                        })}
                </div>
            </div>
        </section >

            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">View Member details</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <table className="table table-striped table-hover border border-2">
                                <thead>
                                    <tr>
                                        <th scope="col">Name</th>
                                        <th scope="col">{view.name}</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th scope="row">Designation</th>
                                        <td>{view.designation}</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">Email</th>
                                        <td>{view.email}</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">Phone Number</th>
                                        <td>{view.phone}</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">Joining Date</th>
                                        <td>{view.date}</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">Salary</th>
                                        <td>{view.salary}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home