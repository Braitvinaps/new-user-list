import { useState } from 'react'
import SortPanel from '../sort-panel/sort-panel'
import ListItem from '../list-item/list-item'
import Pagination from '../pagination/pagination'
import './users-list.css'
import Modal from '../modal/modal'

const UsersList = ({ users, setUsers, search, loading }) => {
    const [changeSort, setChangeSort] = useState(true)

    const [active, setActive] = useState(false)

    const [currentPage, setCurrentPage] = useState(1)
    const [dataPerPage] = useState(5)

    // поиск
    const filteredData = users.filter((name) => {
        if (search === '') {
            return name
        } else if (name.username.toLowerCase().includes(search.toLowerCase()) || name.email.toLowerCase().includes(search.toLowerCase())) {
            return name
        }
        return 0
    })

    // сортировка
    const onSort = (colum) => {
        if (changeSort) {
            setUsers(users.sort((a, b) => a[colum] < b[colum] ? 1 : -1))
        } else if (!changeSort) {
            setUsers(users.sort((a, b) => a[colum] > b[colum] ? 1 : -1))
        }
        return setChangeSort(!changeSort)
    }

    // удаление пользователя
    const deleteItem = (id, username) => {
        if (window.confirm(`Вы уверены, что хотите удалить пользователя ${username}?`)) {
            setUsers(users.filter(item => item.id !== id))
        }
    }

    // пагинация
    const lastDataIndex = currentPage * dataPerPage
    const firstDataIndex = lastDataIndex - dataPerPage
    const currentData = filteredData.slice(firstDataIndex, lastDataIndex)
    const paginate = pageNumber => setCurrentPage(pageNumber)

    return (
        <div className="users-list">

            <div className='sort-panel'>
                <SortPanel
                    onSort={onSort}
                />
            </div>

            <table className="list-title">
                <thead>
                    <tr>
                        <th>Имя пользователя</th>
                        <th>E-mail</th>
                        <th>Дата регистрации</th>
                        <th>Рейтинг</th>
                        <th className='btn-th'></th>
                    </tr>
                </thead>
            </table>

            <ListItem
                users={currentData}
                loading={loading}
                deleteItem={deleteItem}
                setUsers={setUsers}
            />

            <Modal
                active={active}
                setActive={setActive}
            >
                
                <p>Вы уверены, что хотите удалить пользователя?</p>

                <a
                    className="btn-srt"
                    href="!#"
                    // onClick={() => onModal(true)}
                >Да
                </a>

                <a
                    className="btn-srt"
                    href="!#"
                    onClick={() => setActive(false)}
                >Нет
                </a>
            </Modal>

            <Pagination
                currentPage={currentPage}
                dataPerPage={dataPerPage}
                totalData={filteredData.length}
                paginate={paginate}
            />
        </div>
    )
}

export default UsersList