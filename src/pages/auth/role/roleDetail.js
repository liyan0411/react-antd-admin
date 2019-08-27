import React, { Component, Fragment } from 'react'
import { sSetObject, sGetObject } from '@/utils/index.js'

class RoleDetail extends Component {
  state = {
    id: ''
  }

  componentDidMount() {
    // console.log(this.props)
    this.setQuery()
  }
  componentWillUnmount() {
  }
  setQuery = () => {
    let querys = this.props.location.query
    if (!querys) {
      querys = sGetObject('detailQuery')
    } else {
      sSetObject('detailQuery', querys)
    }
    this.setState({
      id: querys.id
    })
  }
  render() {
    const { id } = this.state
    return (
      <Fragment>
        <div className="view-bg">
          <h1>我是角色管理 详情页----------{id}</h1>
          <p />
        </div>
      </Fragment>
    )
  }
}

export default RoleDetail;
