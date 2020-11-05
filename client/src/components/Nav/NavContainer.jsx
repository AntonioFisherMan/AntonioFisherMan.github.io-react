import React from 'react'
import { connect } from 'react-redux'
import { logout } from '../../redux/reducers/AuthReducer'
import { MyToolbar } from './Toolbar/MyToolbar'
import { MyDrawer } from './Drawer/MyDrawer'
import { Grid, Container } from '@material-ui/core'

class Nav extends React.Component {
  constructor(props) {
    super(props)
    this.state = { drawer: false, title: "Home" }
  }

  toggleDrawer = () => {
    this.setState({ drawer: !this.state.drawer })
  }
  setTitle = (title) => {
    this.setState({ title: title })
  }
  render() {
    return (
      <>
        <MyToolbar title={this.title}
          isAuth={this.props.isAuth}
          user={this.props.user}
          onMenuClick={this.toggleDrawer}
          totalSizeCard={this.props.totalSizeCard}
          logout={this.props.logout}
        />
        <MyDrawer open={this.state.drawer} onClose={this.toggleDrawer} setTitle={this.setTitle} />
      </>
    )
  }
}

let mapStateToProps = (state) => {
  return {
    isAuth: state.auth.isAuth,
    user: state.auth.user,
    totalSizeCard: state.card.items.length
  }
}
export default connect(mapStateToProps, { logout })(Nav)





