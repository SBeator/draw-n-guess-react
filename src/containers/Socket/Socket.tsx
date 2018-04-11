import * as React from 'react'
import { Component, ReactNode } from 'react'
import { connect, Dispatch } from 'react-redux'
import { bindActionCreators } from 'redux'

import { socket as socketAction } from '../../redux/actions'
import { IRootState } from '../../declarations'

class Socket extends Component<Props> {
  componentDidMount() {
    this.props.connect()
  }

  render() {
    return <div>{this.props.children}</div>
  }
}

export interface Props {
  children?: ReactNode
  socket: any
  connect: () => {
    type: string
  }
}

const mapStateToProps = (state: IRootState) => ({
  socket: state.socket,
})

const mapDispatchToProps = (dispatch: Dispatch<IRootState>) =>
  bindActionCreators(
    {
      connect: socketAction.connect,
    },
    dispatch
  )

export default connect(mapStateToProps, mapDispatchToProps)(Socket)
