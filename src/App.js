
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import PostDescription from './components/cards/PostDescription';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from './components/Header';
import Home from './Home';
import EditPostForm from './components/forms/EditPostForm';
import Nav from './components/Nav';
import AddPostForm from './components/forms/AddPostForm';

function App() {
  return (
    <div className="App " style={{ backgroundColor: "#f0f5f5" }}>

      <BrowserRouter>
        <Header />
        <Nav />
        <ToastContainer position="bottom-center" />


        <Switch>
          <Route exact path="/" component={Home} />

          <Route path='/:id/edit' component={EditPostForm} />
          <Route exact path='/create' component={AddPostForm} />

          <Route exact path='/:id' component={PostDescription} />

        </Switch>


      </BrowserRouter>
    </div>
  );
}

export default App;
