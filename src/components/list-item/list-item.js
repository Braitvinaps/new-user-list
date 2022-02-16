import React from 'react'
import './list-item.css'

const ListItem = ({ users, loading, deleteItem }) => {

    if (loading) {
        return <p>Loading...</p>
    }

    return (
        users.map((user) => {
            const { id, username, email, registration_date, rating } = user

            return (
                <table key={id} className="list-title">
                    <tbody>
                        <tr>
                            <td style={{ color: "royalblue" }}>{username}</td>
                            {
                                email.length < 20 ?
                                    <td>{email}</td> :
                                    <td dat-toggle="tooltip" title={email}>
                                        {email.slice(0, 20) + '...'}
                                    </td>
                            }
                            <td>{registration_date.slice(0, 10).split('-').reverse().join('.')}</td>
                            <td>{rating}
                            <a 
                                    className='btn-del'
                                    href="!#"
                                    onClick={() => deleteItem(id, username)}
                                >✖
                                </a>
                            </td>
                        </ tr>
                    </tbody>
                </table>
            )
        })
    )
}

export default ListItem