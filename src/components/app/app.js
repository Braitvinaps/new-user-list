import { useState } from 'react'
import SearchPanel from '../search-panel/search-panel'
import UsersList from '../users-list/users-list'
import './app.css'


function App() {
    const [search, setSearch] = useState('')

    return (
        <div className="app">
            <h1>Список пользователей</h1>

            <div className='search-panel'>
                <SearchPanel
                    setSearch={setSearch}
                    search={search}
                />
            </div>

            <div className='users-list'>
                <UsersList
                    search={search}
                />
            </div>
        </div>
    )
}

export default App;