import { Route, Redirect } from 'react-router-dom'
import { useContext } from 'react'
import { AuthContext } from '../../contexts/AuthContext'
import Spinner from 'react-bootstrap/Spinner'
import NavbarMenu from '../layout/NavbarMenu'

const ProtectedRoute = ({ component: Component, ...rest }) => {


	const {
		authState: { authLoading, isAuthenticated }
	} = useContext(AuthContext)

	if (authLoading)
		return (
			<div className='spinner-container'>
				<Spinner animation='border' variant='info' />
			</div>
		)



	return (
		<Route

			render={() =>
				isAuthenticated ? (
					<>

						<NavbarMenu />
						<Component {...rest} />
					</>
				) : (
					<Redirect to='/login' />
				)
			}
		/>
	)
}

export default ProtectedRoute
