import React from "react"
import './pagination.css'

const Pagination = ({ dataPerPage, totalData, paginate, currentPage }) => {
    const pageNumbers = []

    for (let i = 1; i <= Math.ceil(totalData / dataPerPage); i++) {
        pageNumbers.push(i)
    }

    return (
        <div className="center">
            <ul className="pagination">
                {
                    pageNumbers.map(num => (
                        currentPage === num
                            ?
                            <li key={num}>
                                <a
                                    className="active"
                                    href="!#"
                                    onClick={() => paginate(num)}
                                >
                                    {num}
                                </a>
                            </li>
                            :
                            <li key={num}>
                                <a
                                    href="!#"
                                    onClick={() => paginate(num)}
                                >
                                    {num}
                                </a>
                            </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default Pagination