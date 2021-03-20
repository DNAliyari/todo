import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import TodoStore from './Store/TodoStore';
import TodoEntry from './Components/TodoEntry';
import TOdoItems from './Components/TodoItems';
import Footer from './Components/Footer';
import { observer } from 'mobx-react';
import '../CSS/App.css';

var currentPath = ""
@observer
class App extends Component {


  componentDidUpdate(prevProps, prevState) {

    if (currentPath !== this.props.history.location.pathname) {

      switch (this.props.history.location.pathname) {
        case '/active':
          TodoStore.todoFilter = 'active'
          break;
        case '/completed':
          TodoStore.todoFilter = 'completed'
          break;
        default:
          TodoStore.todoFilter = 'all'
      }
    }
  }
  render() {
    return (
      <div className='todoapp'>
        <TodoEntry />
        <TOdoItems />
        <Footer />
      </div>
    );
  }
}
export default withRouter(App);



