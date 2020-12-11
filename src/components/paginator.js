import { Link } from "react-router-dom"
import { range } from "../utils/utils"

const Paginator = ({ totalPagesCount, setCurrentPage, currentPage }) => {
    const pages = range(1, totalPagesCount)

    return (
        <nav aria-label="...">
            <ul className="pagination">
                <li className="page-item disabled">
                    <span className="page-link">Previous</span>
                </li>

                {pages.map(page => {
                    return (
                        <li
                            className={currentPage === page ? "page-item active" : "page-item"}
                            aria-current="page"
                            key={page}
                            onClick={() => { setCurrentPage(page) }}>
                            <span className="page-link">{page}</span>
                        </li>
                    )
                })}

                <li className="page-item">
                    <Link className="page-link" to="#">Next</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Paginator