import './btn-clear.css'

const BtnClear = ({setSearch}) => {
    return (
        <a 
        className='btn-clr'
        href="!#"
        onClick={() => setSearch('')}
    >Очистить фильтр
    </a>
    )
}

export default BtnClear