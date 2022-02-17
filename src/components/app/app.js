import axios from 'axios'
import { useEffect, useState } from 'react'
import SearchPanel from '../search-panel/search-panel'
import UsersList from '../users-list/users-list'
import './app.css'


function App() {
    const url = `https://5ebbb8e5f2cfeb001697d05c.mockapi.io/users`

    const [users, setUsers] = useState([])
    const [loading, setLoading] = useState(false)

    const [search, setSearch] = useState('')

    useEffect(() => {
        const getUsers = async () => {
            setLoading(true)
            const res = await axios.get(url)
            setUsers(res.data)
            setLoading(false)
        }
        getUsers()
    }, [url])

    return (
        <div className="app">
            <h1>Список пользователей</h1>

            <div className='search-panel'>
                <SearchPanel
                    setSearch={setSearch}
                    search={search}
                    users={users}
                    setUsers={setUsers}
                />
            </div>

            <div className='users-list'>
                <UsersList
                    users={users}
                    setUsers={setUsers}
                    loading={loading}
                    search={search}
                />
            </div>
        </div>
    )
}

export default App;