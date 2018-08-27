'use strict'

import React, { PropTypes} from 'react'

const UserInfo = ({ userinfo }) => (
  <div className='user-info'>
    <img src={userinfo.photo}/>
    <h1 className='username'>
      <a href={`https://api.github.com/users/${userinfo.link}`}>{userinfo.username}</a>
    </h1>

    <ul className='repos-info'>
      <li>Repositorios: {userinfo.repos}</li>
      <li>Seguidores: {userinfo.followers}</li>
      <li>Seguindo: {userinfo.following}</li>
    </ul>
  </div>
)

UserInfo.prototype = {
  userinfo: PropTypes.shape({
    username: PropTypes.string.isRequired,
    photo: '',
    login: '',
    repos: PropTypes.number.isRequired,
    followers: PropTypes.number.isRequired,
    following: PropTypes.number.isRequired
  })
}

export default UserInfo