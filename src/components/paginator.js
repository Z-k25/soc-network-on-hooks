import { useEffect } from "react"
import { useRange } from "../hooks/useRange"

const Paginator = (props) => {
    const stepValue = 7
    const { totalPagesCount, onCurrentPageChange, currentPage, startPage } = props
    const [pages, changePages] = useRange(startPage, totalPagesCount, stepValue)

    useEffect(() => {
        if (!pages.includes(startPage)) {
            changePages(startPage)
        }
    }, [changePages, pages, startPage])

    return (
        <nav aria-label="...">
            <ul className="pagination">
                <li className={pages[0] === 1 ? "page-item disabled" : "page-item"}>
                    <button
                        className="page-link"
                        onClick={() => {
                            changePages(pages[0] -  1)
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
                            onCurrentPageChange(pages[pages.length - 1] + 1)
                        }}>
                        Next
                    </button>
                </li>
            </ul>
        </nav>
    )
}

export default Paginator