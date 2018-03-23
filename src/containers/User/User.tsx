import * as React from 'react'
import { Component } from 'react'
import { connect, Dispatch } from 'react-redux'
import { bindActionCreators } from 'redux'
import { LOGGING } from '../../redux/types/user'

import { user as userActions } from '../../redux/actions'
import { IRootState, IPayloadAction, IUserState } from '../../declarations'

class User extends Component<Props> {
  nameInput: HTMLInputElement
  state = {
    name: '',
  }

  constructor(props: Props) {
    super(props)

    this.handleLoign = this.handleLoign.bind(this)
    this.handleNameInputChange = this.handleNameInputChange.bind(this)
  }

  handleNameInputChange() {
    this.setState({
      name: this.nameInput && this.nameInput.value,
    })
  }

  handleLoign() {
    if (this.state.name) {
      this.props.logging(this.state.name)
    }
  }

  getElement() {
    const user = this.props.user
    let element
    if (user.name) {
      element = <p>{this.props.user.name}</p>
    } else if (user.status === LOGGING) {
      element = <p>Logging...</p>
    } else {
      element = (
        <div>
          <label>Please input your name:</label>
          <form onSubmit={this.handleLoign}>
            <input
              ref={input => {
                this.nameInput = input as HTMLInputElement
              }}
              onChange={this.handleNameInputChange}
            />
            <button disabled={this.state.name ? false : true}>Login</button>
          </form>
        </div>
      )
    }

    return element
  }

  render() {
    return <div>{this.getElement()}</div>
  }
}

export interface Props {
  user: IUserState
  logging: (name: string) => IPayloadAction
}

const mapStateToProps = (state: IRootState) => ({
  user: state.user,
})

const mapDispatchToProps = (dispatch: Dispatch<IRootState>) =>
  bindActionCreators(
    {
      logging: userActions.logging,
    },
    dispatch
  )

export default connect(mapStateToProps, mapDispatchToProps)(User)
