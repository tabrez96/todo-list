import { useEffect } from 'react';

import useTodo from '../useTodos';

import { LOADING_STATES } from '../constants';

const List = () => {
  const { loadTodoList, todoList, loading, handleClickTodo, handleSearchTodo } =
    useTodo();

  useEffect(() => {
    loadTodoList();
  }, [loadTodoList]);

  return (
    <div>
      <input placeholder="Search todos" onChange={handleSearchTodo} />
      {loading === LOADING_STATES.TODO_LIST ? (
        <div class="loader">Loading...</div>
      ) : (
        <>
          {todoList.map((todo) => (
            <div
              key={todo.name}
              onClick={() => handleClickTodo(todo)}
              className="todo-list-item"
            >
              <h2>Title: {todo.title}</h2>
              <p>State: {todo.completed ? 'Completed' : 'In-complete'}</p>
              <p>User Id: {todo.userId}</p>
            </div>
          ))}
          <div className="todo-load-more">
            {/* TODO: implement load more functionality */}
            <button onClick={() => {}}>Load more</button>
          </div>
        </>
      )}
    </div>
  );
};

export default List;
