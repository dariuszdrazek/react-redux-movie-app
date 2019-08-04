import React from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom'

const App = () => {
     return (
          <Router>
               <Header />

               <Switch>
                    
                    <Route exact path='/' component={LandingPage} />
                    <Route path='/search/:query?' component={Search} />
                    <Route path='/details/:id' component={Details} />
                    <Route path='/watched' component={Watched} />
                    <Route path='/to-watch' component={ToWatch} />

               </Switch>
          
               <Footer />
          </Router>
     );          
};

export default App;
