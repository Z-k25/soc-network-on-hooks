import { useEffect } from "react"
import { useRange } from "../hooks/useRange"

const Paginator = (props) => {
    const { totalPagesCount, onCurrentPageChange, currentPage, rangeLength } = props
    const [pages, changePages] = useRange(currentPage, totalPagesCount, rangeLength)

    useEffect(() => {
        if (!pages.includes(currentPage)) {
            onCurrentPageChange(pages[0])
        }
    }, [currentPage, onCurrentPageChange, pages])

    return (
        <nav aria-label="...">
            <ul className="pagination">
                <li className={pages[0] === 1 ? "page-item disabled" : "page-item"}>
                    <button
                        className="page-link"
                        onClick={() => {
                            changePages(pages[0] - rangeLength - 1)
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
                            changePages(pages[pages.length - 1] + 1)
                        }}>
                        Next
                    </button>
                </li>
            </ul>
        </nav>
    )
}

export default Paginator