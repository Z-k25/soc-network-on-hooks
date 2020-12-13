import { withRouter } from "react-router-dom"
import { useRange } from "../hooks/useRange"
import { getUsersStartPage } from "../utils/utils"

const Paginator = (props) => {
    const { totalPagesCount, onCurrentPageChange, currentPage, location } = props
    const stepValue = 7
    const startPage = getUsersStartPage(location.search, 'page', totalPagesCount)
    const [pages, changePages] = useRange(startPage, totalPagesCount, stepValue)

    return (
        <nav aria-label="...">
            <ul className="pagination">
                <li className={pages[0] === 1 ? "page-item disabled" : "page-item"}>
                    <button
                        className="page-link"
                        onClick={() => {
                            changePages(startPage - stepValue - 1)
                            onCurrentPageChange(startPage - stepValue - 1)
                        }}>
                        Previous
                    </button>
                </li>

                {pages.map(page => {
                    return (
                        <li
                            className={currentPage === page ? "page-item active" : "page-item"}
                            aria-current="page"
                            key={page}
                            onClick={() => onCurrentPageChange(page)}>
                            <span className="page-link">{page}</span>
                        </li>
                    )
                })}

                <li className={pages[pages.length - 1] === totalPagesCount ? "page-item disabled" : "page-item"}>
                    <button
                        className="page-link"
                        onClick={() => {
                            changePages(startPage + stepValue + 1)
                            onCurrentPageChange(startPage + stepValue + 1, stepValue)
                        }}>
                        Next
                    </button>
                </li>
            </ul>
        </nav>
    )
}

export default withRouter(Paginator)