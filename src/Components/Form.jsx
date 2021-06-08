import React, { useState } from 'react'

export default function Form({ addToTable }) {

    const [fname, setFname] = useState('')
    const [lname, setLname] = useState('')
    const [email, setEmail] = useState('')


    const submit = (e) => {
        e.preventDefault();
        if (!fname || !lname || !email) {
            alert("All the fields are neccessary")
        }
        else {
            addToTable(fname, lname, email)
            setFname('')
            setLname('')
            setEmail('')

        }
    }

    return (
        <div>
            <div className="container">


                <form onSubmit={submit}>
                    <div className="mb-3">
                        <label htmlFor="fname" className="form-label">First Name</label>
                        <input type="text" value={fname} onChange={e => setFname(e.target.value)} className="form-control" id="fname" aria-describedby="emailHelp" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="lname" className="form-label">Last Name</label>
                        <input type="text" value={lname} onChange={e => setLname(e.target.value)} className="form-control" id="lname" aria-describedby="emailHelp" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email</label>
                        <input type="email" value={email} onChange={e => setEmail(e.target.value)} className="form-control" id="email" aria-describedby="emailHelp" />
                    </div>


                    <button type="submit" className="btn  btn-success">Submit</button>
                </form>

            </div>
        </div>
    )
}
