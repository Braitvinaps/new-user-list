import BtnClear from '../btn-clear/btn-clear';
import './search-panel.css';

function SearchPanel({ search, setSearch }) {

    return (
        <div>
            <div className="search">
                <input
                    type="text"
                    className="search-input"
                    placeholder="🔍︎ Поиск по имени или e-mail"
                    value={search}
                    onChange={event => { setSearch(event.target.value) }} />
            </div>
            {search ?
                <BtnClear
                    setSearch={setSearch}
                /> :
                null}
        </div>

    )
}

export default SearchPanel;