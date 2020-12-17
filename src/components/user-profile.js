import React, { useContext, useEffect } from 'react'
import './styles/user-profile.css'
import defaultPhoto from '../images/default-user-ava.jpg'
import { useFetch } from '../hooks/useFetch'
import { UserContext } from '../context/userContext'
import { Link } from 'react-router-dom'

export const UserProfile = (props) => {
    const {
        aboutMe, contacts, fullName, lookingForAJob,
        lookingForAJobDescription, photos, userId } = props
    const { facebook, website, vk, twitter, instagram, youtube, github } = contacts

    const apiUrlStatus = `/profile/status/${userId}`
    const [authData] = useContext(UserContext)
    const [{ response }, doFetch] = useFetch(apiUrlStatus)

    useEffect(() => {
        doFetch()
    }, [doFetch])

    return (
        <div className="container emp-profile">
            <form method="post">
                <div className="row">
                    <div className="col-md-4">
                        <div className="profile-img">
                            <img src={photos.small || photos.large || defaultPhoto} alt="" />
                            <div className="file btn btn-lg btn-primary">
                                {authData.id === userId && "Change Photo"}
                                <input type="file" name="file" />
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="profile-head">
                            <h5>
                                {fullName}
                            </h5>
                            <h6>
                                {response.status}
                            </h6>
                            {aboutMe && (
                                <p className="proile-rating">About me : <span>{aboutMe}</span></p>
                            )}
                        </div>
                    </div>
                    <div className="col-md-2">
                        <input type="submit" className="profile-edit-btn" name="btnAddMore" value="Edit Profile" />
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-4">
                        <div className="profile-work">
                            <p>WORK LINK</p>
                            <Link to={`${website}`}>Website Link</Link><br />
                            <Link to={`${facebook}`}>Facebook Profile</Link><br />
                            <Link to={`${instagram}`}>Instagram Profile</Link><br />
                            <Link to={`${twitter}`}>Twitter Profile</Link><br />
                            <Link to={`${vk}`}>VK Profile</Link><br />
                            <Link to={`${youtube}`}>Youtube profile</Link><br />
                            <Link to={`${github}`}>Github profile</Link><br />
                        </div>
                    </div>
                    <div className="col-md-8">
                        <div className="tab-content profile-tab" id="myTabContent">
                            <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                                <div className="row">
                                    <div className="col-md-6">
                                        <label>User Id</label>
                                    </div>
                                    <div className="col-md-6">
                                        <p>{userId}</p>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6">
                                        <label>Name</label>
                                    </div>
                                    <div className="col-md-6">
                                        <p>{fullName}</p>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6">
                                        <label>Looking for a job</label>
                                    </div>
                                    <div className="col-md-6">
                                        <p>{lookingForAJob ? "Yes" : "No"}</p>
                                    </div>
                                </div>
                                {lookingForAJob && (
                                    <div className="row">
                                        <div className="col-md-6">
                                            <label>Description</label>
                                        </div>
                                        <div className="col-md-6">
                                            <p>{lookingForAJobDescription}</p>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
}