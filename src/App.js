import "./App.css"
import Header from "./components/home/header/Header"
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import HomePages from "./components/pagesContent/HomePages"
import About from "./components/home/about/About"
import Services from "./components/home/services/Services"
import Work  from "./components/home/work/Work"
import Footer from "./components/home/Footer"

function App( ){
  return(
    <>
      <Router>
        <Header/>
        <Switch>
          <Route path ='/' exact component={HomePages} />
          <Route path='/about' exact component={About}></Route>
          <Route path='/portfolio' exact component={Services}></Route>
          <Route path='/work' exact component={Work}></Route>
          <Route path='/contact' exact component={Footer}></Route>
        </Switch>
      </Router>
    </>
  )
}

export default App