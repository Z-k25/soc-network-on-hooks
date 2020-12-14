import React from 'react'
import { ErrorBoundry } from '../components/common/error-boundry'

const withError = (Component) => (props) => {
    class HOC extends React.Component {
        render() {
            return <Component {...props}/>
        }

        componentDidCatch () {
            return  <ErrorBoundry />
        }
    }
    return HOC
}

export default  withError