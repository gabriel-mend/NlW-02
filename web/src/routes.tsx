import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Landing from './pages/Landing';
import TeacherList from './pages/TeacherList';
import TeacherForm from './pages/TeacherForm';

function Routes () {
    return (
        <BrowserRouter>
            <Route component={ Landing } path="/" exact/>
            <Route component={ TeacherList } path="/study" exact/>
            <Route component={ TeacherForm } path="/give-classes" exact/>
        </BrowserRouter>
    );
}

export default Routes;