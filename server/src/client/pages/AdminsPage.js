import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchAdmins} from "../actions";
import requireAuth from '../components/hocs/requireAuth';

class AdminsPage extends Component {
  componentDidMount() {
    this.props.fetchAdmins();
  }

  renderAdmins() {
    return this.props.admins.map(admin => {
      return <li key={admin.id}>{admin.name}</li>
    })
  }

  render() {
    return (
        <div>
          <h3>Protected Admins</h3>
          <ul>{this.renderAdmins()}</ul>
        </div>
    )
  }
}

function mapStateToProps({admins}) {
  return {admins}
}

export default {
  component: connect(mapStateToProps, {fetchAdmins})(requireAuth(AdminsPage)),
  loadData: ({dispatch}) => dispatch(fetchAdmins())
}