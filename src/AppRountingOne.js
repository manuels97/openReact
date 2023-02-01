import { useEffect } from 'react';

import { BrowserRouter as Router, Routes, Link, Route } from 'react-router-dom';


import HomePage from './pages/home/HomePage';
import Statepage from './pages/home/StatePage';

import Notfoundpage from './pages/404/NotFoundPage';
import Aboutpage from './pages/about/AboutPage';
import Profilepage from './pages/profile/ProfilePage';
import Taskspage from './pages/tasks/TaskPage';
import Taskdetailpage from './pages/tasks/TaskDetailPage';
import Loginpage from './pages/auth/LoginPage';

function AppRoutingOne() {

  let logged = false;

  let taskList = [
    {
      id: 1,
      name: 'Task 1',
      description: 'My fist Task'
    },
    {
      id: 2,
      name: 'Task 2',
      description: 'My second Task'
    }
  ]

  useEffect(() => {
    logged = localStorage.getItem('credentials');
    console.log('User Logged?', logged)
  }, [])

  return (
    <Router>
      <div>
        <aside>
          <Link to='/'>|| HOME |</Link>
          <Link to='/about'>| ABOUT |</Link>
          <Link to='/faqs'>| FAQs |</Link>
          <Link to='/task/1'>| Task 1 |</Link>
          <Link to='/task/2'>| Task 2 |</Link>
          <Link to='/any404'>| Not Existing Route |</Link>
          <Link to='/login'>| Login ||</Link>
        </aside>

        <main>
          <Routes> 
            <Route exact path='/' component={ HomePage } />
            <Route exact path='/online-state' component={ Statepage } />
            <Route path='/login' component= { Loginpage }>
              {
                  logged ? 
                    () => {
                      alert('You are logged in. Routeing to home...')
                      return (<Route to='/'/>)
                    }
                  :
                  () => {
                    return (<Loginpage></Loginpage>)
                  }
              }
            </Route>
            <Route path='/(about|faqs)' component={ Aboutpage } />
            <Route path='/profile' component={ Profilepage }>
              {
                logged ? 
                <Profilepage />
                :
                () => {
                  alert('You must be logged in. Routeing to login...')
                  return (<Route to='/login'/>)
                }
              }
            </Route>
            <Route path='/tasks' component={ Taskspage } />
            <Route 
              exact
              path='/task/:id'
              render = {
                ({match}) => (<Taskdetailpage task={taskList[match.params.id-1]} />)
              }
              >

            </Route>
            {/* 404 - Page No Found */}
            <Route component={ Notfoundpage } />
          </Routes>
        </main>

      </div>

    </Router>
  );
}

export default AppRoutingOne;
