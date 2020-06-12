import React, { lazy, Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Loading } from '../components'

const Home = lazy(() => import('../pages/HomePage'));
const User = lazy(() => import('../pages/UserPage'));
const UserDetail = lazy(() => import('../pages/UserDetailPage'));
const Photo = lazy(() => import('../pages/PhotoPage'));

function Routes() {
    return (
        <Switch>
            <Suspense fallback={<Loading open={true} />}>
                <Route exact
                    path="/"
                    component={Home} />
                <Route exact
                    path="/photos"
                    component={Photo} />
                <Route exact
                    path="/users"
                    component={User} />
                <Route exact
                    path="/users/:id"
                    component={UserDetail} />
            </Suspense>
        </Switch>);
}

export default Routes;