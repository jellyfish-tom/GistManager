import React, { Component } from 'react'
import { action, observer, inject } from 'mobx-react'
import * as Filters from 'constants/Filters'
import InListGist from './InListGist'
import CircularProgress from 'material-ui/CircularProgress'

import ListHeader from './ListHeader'

import style from './style.scss'

export default @inject('authStore', 'gistsStore') @observer class GistsList extends Component {
  render() {
    return (
      <div className = { style.itemsContainer }>
        {
          this.props.gistsStore.gists.slice().map((gist) => {
            return <InListGist gist = { gist }/>
          })
        }
      </div>
      
    )
  }
}