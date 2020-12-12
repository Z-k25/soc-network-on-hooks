import { withRouter } from "react-router-dom"
import { useRange } from "../hooks/useRange"
import { urlParser } from "../utils/utils"

const Paginator = (props) => {
    const { totalPagesCount, setCurrentPage, currentPage, location } = props
    const stepValue = 7
    const startPage = urlParser(location.search, 'page')
    const [pages, changePages] = useRange(startPage, totalPagesCount, stepValue)

    return (
        <nav aria-label="...">
            <ul className="pagination">
                <li className={pages[0] === 1 ? "page-item disabled" : "page-item"}>
                    <button
                        className="page-link"
                        onClick={() => {
                            changePages(pages[0] - stepValue)
                            setCurrentPage(pages[0] - stepValue)
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
                            onClick={() => { setCurrentPage(page) }}>
                            <span className="page-link">{page}</span>
                        </li>
                    )
                })}

                <li className={pages[pages.length - 1] === totalPagesCount ? "page-item disabled" : "page-item"}>
                    <button
                        className="page-link"
                        onClick={() => {
                            changePages(pages[pages.length - 1])
                            setCurrentPage(pages[pages.length - 1])
                        }}>
                        Next
                    </button>
                </li>
            </ul>
        </nav>
    )
}

export default withRouter(Paginator)