import React from 'react'

export default function Table({ table }) {
   
    return (
        <div className='table-wrap'>{table.length === 0 ? null :
            <table className="table table-dark table-striped">
                <thead>
                    <tr className="table-dark">
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {table.map((tableRow) => {
                        return (
                            <tr>
                                <td>{tableRow.fname}</td>
                                <td>{tableRow.lname}</td>
                                <td>{tableRow.email}</td>
                            </tr>
                        )

                    })}


                </tbody>
            </table>}
        </div>
    )
}
