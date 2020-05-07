import React from 'react';

import Navbar from './components/Navbar';
import ToDoForm from './components/ToDoForm';

const addHandler = (title: string): void => {
  console.log('Add new todo: ', title)
}

const App: React.FC = () => (
  <>
    <Navbar />
    <div className="container">
      <ToDoForm onAdd={addHandler}></ToDoForm>
    </div>
  </>
)

export default App;
