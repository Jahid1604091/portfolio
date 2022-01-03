import { HashRouter, Route, Switch } from 'react-router-dom'
import { Redirect } from 'react-router'
import styled from "styled-components";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import About from './components/About';
import Resume from './components/Resume';
import Projects from './components/Projects';


function App() {
  return (
    <HashRouter>
      <Wrapper>
        <div className="container">
          <div className="row">
            <div className="col-lg-3">
              <Sidebar />
            </div>
            <div className="col-lg-9">
              <div className="main">
                <Navbar />
                <Switch>
                  <Route path='/' exact>
                    <About />
                  </Route>
                  <Route exact path='/resume' component={Resume} />
                  <Route exact path='/projects' component={Projects} />
                  <Route>
                    <Redirect to='/' />
                  </Route>
                </Switch>
              </div>
            </div>

            {/* <Footer /> */}
          </div>
        </div>

      </Wrapper >
    </HashRouter>
  );
}

const Wrapper = styled.section`
  background-image: linear-gradient(to right bottom,var(--clr-primary-1), var(--clr-primary-6), var(--clr-primary-5));
  text-transform: capitalize;
  min-height: 100vh;
  background-attachment: fixed;
  .main{
        min-height: 90vh;
        margin: 20px 0;
        padding: 20px;
        border: 1px #fff;
        border-radius: 10px;
        /* box-shadow: var(--lb-shadow); */
    }
  
  
`

export default App;
