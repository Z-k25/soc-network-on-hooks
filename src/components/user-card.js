import './styles/user-cart.css'
import defaultAvatar from '../images/default-user-ava.jpg'
import { useContext } from 'react'
import { UserContext } from '../context/userContext'
import { Loader } from './common/Loader/Loader'
const { Link } = require("react-router-dom")

const UsersCards = ({ items, isLoading }) => {
    if (isLoading) {
        return <Loader />
    }

    return (
        <div className="container">
            <div className="row userMain">
                {items.map((item) => {
                    return <UserCard item={item} key={item.id} />
                })}
            </div>
        </div>
    )
}

const UserCard = ({ item }) => {
    const { name, followed, id, photos, status } = item
    const [{ isLogedOn }] = useContext(UserContext)

    return (
        <div className="col-md-3 col-sm-4">
            <div className="userBlock">
                <div className="backgrounImg">
                    <img src="https://preview.ibb.co/miQjb7/photography4.jpg" alt="" />
                </div>
                <div className="userImg">
                    <Link to={`/profile/${id}`}>
                        <img src={photos.large || photos.small || defaultAvatar} alt="" />
                    </Link>
                </div>
                <div className="userDescription">
                    <Link to={`/profile/${id}`}>
                        <h5>{name}</h5>
                    </Link>
                    <p>{status}</p>
                    {/* <div className="followrs">
                            <span className="number">137</span>
                            <span>Followers</span>
                        </div> */}
                    {isLogedOn && (
                        <Link to="">
                            <button className="btn">{followed ? "Unfollow" : "Follow"}</button>
                        </Link>)}
                </div>
            </div>
        </div>
    )
}

export default UsersCards