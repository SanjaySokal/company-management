import React, { useEffect, useState } from 'react'

const Home = () => {
    const [change, setChange] = useState(0);
    const [user, setUser] = useState([
        {
            id: 1,
            name: "Sanjay Sokal",
            email: "sokalsanjay@gmail.com",
            destination: "Java Developer",
            phone: "8295673601",
            salary: "150000000000",
            date: "7-12-2023"
        }
    ])

    useEffect(() => {
        fetch("http://localhost:8080/get").then(res => res.json()).then(data => setUser(data))
    }, [change])

    const [view, setView] = useState({
        id: 0,
        name: "",
        email: "",
        destination: "",
        phone: "",
        salary: "",
        date: ""
    });

    const addChange = (e) => {
        setView({ ...view, [e.target.name]: e.target.value })
    }

    const changeView = (id) => {
        fetch(`http://localhost:8080/get/${id}`).then(res => res.json()).then(data => setView(data))
    }

    const addMember = (e) => {
        e.preventDefault();
        fetch("http://localhost:8080/add", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ name: view.name, email: view.email, phone: view.phone, destination: view.destination, salary: view.salary, date: view.date }),
        }).then(res => res.json()).then(data => {
            setView({
                id: 0,
                name: "",
                email: "",
                destination: "",
                phone: "",
                salary: "",
                date: ""
            });
            setChange(change + 1);
            alert("Member updated!");
        })
    }

    const updateMember = (e) => {
        e.preventDefault();
        fetch("http://localhost:8080/add", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(view),
        }).then(res => res.json()).then(data => {
            setView({
                id: 0,
                name: "",
                email: "",
                destination: "",
                phone: "",
                salary: "",
                date: ""
            });
            setChange(change + 1);
            alert("New company member added!");
        })
    }

    const deleteMember = (id) => {
        const check = window.confirm("Are you sure to remove this mwmber from the list!")
        if (check) {
            fetch(`http://localhost:8080/delete/${id}`).then(res => res.json()).then(data => { alert("User removed from list!"); setChange(change + 1); })
        }
    }

    return (
        <>
            <section className='my-5'>
                <div className="container">
                    <div className="row justify-content-center mb-5">
                        <div className="col-md-3">
                            <button className='btn btn-lg btn-primary w-100' onClick={e => {
                                setView({
                                    id: 0,
                                    name: "",
                                    email: "",
                                    destination: "",
                                    phone: "",
                                    salary: "",
                                    date: ""
                                });
                            }} type="button" data-bs-toggle="modal" data-bs-target="#add">Add New</button>
                        </div>
                    </div>
                    <div className="row">
                        {user.map((data, index) => {
                            return <div key={index} className="col-lg-6 col-md-12 mb-3">
                                <div className="card">
                                    <div className="card-body">
                                        <h5 className="card-title">{data.name}</h5>
                                        <p className="card-text">{data.destination}</p>
                                        <button className='btn btn-primary' onClick={(e) => changeView(data.id)} type="button" data-bs-toggle="modal" data-bs-target="#exampleModal">View Details</button>
                                        <button className='btn btn-warning ms-3' onClick={(e) => changeView(data.id)} type="button" data-bs-toggle="modal" data-bs-target="#edit">Edit Details</button>
                                        <button className='btn btn-danger ms-3' onClick={(e) => deleteMember(data.id)}>Changed or Regined</button>
                                    </div>
                                </div>
                            </div>
                        })}
                    </div>
                </div>
            </section>

            <div className="modal fade" id="edit" tabIndex="-1" aria-labelledby="edit" aria-hidden="true">
                <div className="modal-dialog">
                    <form onSubmit={updateMember} className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="edit">Update Member</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <input type="text" name="name" value={view.name} onChange={e => addChange(e)} className='form-control mb-3' placeholder='Name' />
                            <input type="email" name="email" value={view.email} onChange={e => addChange(e)} className='form-control mb-3' placeholder='Email' />
                            <input type="tel" name="phone" value={view.phone} onChange={e => addChange(e)} className='form-control mb-3' placeholder='Phone' />
                            <input type="text" name="destination" value={view.destination} onChange={e => addChange(e)} className='form-control mb-3' placeholder='destination' />
                            <input type="date" name="date" value={view.date} onChange={e => addChange(e)} className='form-control mb-3' placeholder='Joining Date' />
                            <input type="number" name="Salary" value={view.salary} onChange={e => addChange(e)} className='form-control mb-3' placeholder='Salary' />
                        </div>
                        <div className="modal-footer">
                            <button type="submit" className="btn btn-primary" data-bs-dismiss="modal">Update</button>
                        </div>
                    </form>
                </div>
            </div>

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
                                        <th scope="row">destination</th>
                                        <td>{view.destination}</td>
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

            <div className="modal fade" id="add" tabIndex="-1" aria-labelledby="add" aria-hidden="true">
                <div className="modal-dialog">
                    <form onSubmit={addMember} className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="add">Add New Member</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <input type="text" name="name" value={view.name} onChange={e => addChange(e)} className='form-control mb-3' placeholder='Name' />
                            <input type="email" name="email" value={view.email} onChange={e => addChange(e)} className='form-control mb-3' placeholder='Email' />
                            <input type="tel" name="phone" value={view.phone} onChange={e => addChange(e)} className='form-control mb-3' placeholder='Phone' />
                            <input type="text" name="destination" value={view.destination} onChange={e => addChange(e)} className='form-control mb-3' placeholder='destination' />
                            <input type="date" name="date" value={view.date} onChange={e => addChange(e)} className='form-control mb-3' placeholder='Joining Date' />
                            <input type="number" name="Salary" value={view.salary} onChange={e => addChange(e)} className='form-control mb-3' placeholder='Salary' />
                        </div>
                        <div className="modal-footer">
                            <button type="submit" className="btn btn-primary" data-bs-dismiss="modal">Add New</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Home