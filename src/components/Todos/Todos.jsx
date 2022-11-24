import { useState } from 'react';

import { Route, Routes } from 'react-router-dom';

import Detail from './Detail';
import List from './List';

const Todo = () => {
  const [title, setTitle] = useState('Todo list');

  return (
    <>
      <div className="flex-box">
        {/* TODO: implement back functionality */}
        <button onClick={() => {}}>Back</button>
        <h1>{title}</h1>
      </div>
      <Routes>
        <Route index element={<List />} />
        <Route path=":todoId" element={<Detail setTitle={setTitle} />} />
      </Routes>
    </>
  );
};

export default Todo;
