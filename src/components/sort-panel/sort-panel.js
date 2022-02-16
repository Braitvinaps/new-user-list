import './sort-panel.css'


const SortPanel = ({ onSort }) => {
    return (
        <div className="sort-panel">
            <label><b>Сортировка:</b></label>
            
            <a
                className="btn-srt"
                href="!#"
                onClick={() => onSort('registration_date')}
            >Дата регистрации
            </a>

            <a
                className="btn-srt"
                href="!#"
                onClick={() => onSort('rating')}
            >Рейтинг
            </a>
        </div>
    )
}

export default SortPanel