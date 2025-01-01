import React, { useContext } from 'react'
import {Route, Routes} from 'react-router-dom'
import About from '../pages/About'
import Error from '../pages/Error'
import Posts from '../pages/Posts'
import PostIdPage from '../pages/PostIdPage'
import { privateRoutes, publicRoutes } from '../router/router'
import { AuthContext } from '../context'
import Loader from './UI/loader/Loader'


const AppRouter = () => {
  const {isAuth, isLoading} = useContext(AuthContext)

  if (isLoading) {
    return <Loader/>
  }
  return (
    isAuth
      ? <Routes>        
          {privateRoutes.map(route => 
            <Route
              key={route.path}
              exact={route.exact}
              path={route.path}
              element={route.element}
            />
          )}
        </Routes>
      : <Routes>
          {publicRoutes.map(route => 
            <Route
              key={route.path}
              exact={route.exact}
              path={route.path}
              element={route.element}
            />
          )}
        </Routes>
  )
}

export default AppRouter