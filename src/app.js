'use strict'

import React, { Component } from 'react'
import AppContent from './components/app-content'
import ajax from '@fdaciuk/ajax'

class App extends Component {
  constructor() {
    super()
    this.state = {
      userinfo: null,
      repos: [],
      starred: [],
      isFetching: false
    }
    this.handleSearch = this.handleSearch.bind(this)
  }

  getGitHubApiUrl(username, type) {
    const internalUser = username ? `/${username}` : ''
    const internalType = type ? `/${type}` : ''
    return `https://api.github.com/users${internalUser}${internalType}`
  }

  handleSearch(e) {
    const value = e.target.value
    const keyCode = e.which || e.keyCode
    const ENTER = 13

    if (keyCode === ENTER) {
      this.setState({isFetching: true})
      ajax().get(this.getGitHubApiUrl(value))
        .then((res) => {
          this.setState({
            userinfo: {
              username: res.name,
              photo: res.avatar_url,
              login: res.login,
              repos: res.public_repos,
              followers: res.followers,
              following: res.following
            },
            repos: [],
            starred: []
          })
        }).always(() => { this.setState({isFetching: false})})
    }
  }

  getRepos(type) {
    return (e) => {
      const username = this.state.userinfo.login
      ajax().get(this.getGitHubApiUrl(username, type))
        .then((res) => {
          console.log('***CHEGOU**')
          this.setState({
            [type]: res.map((repo) => ({
              key: repo.id,
              name: repo.name,
              link: repo.html_url
            })
            )
          })
        })
    }
  }

  render() {
    return <AppContent
      userinfo={this.state.userinfo}
      repos={this.state.repos}
      starred={this.state.starred}
      isFetching={this.state.isFetching}
      handleSearch={this.handleSearch}npm 
      getRepos={this.getRepos('repos')}
      getStarred={this.getRepos('starred')}
     
    />
  }
}

export default App
