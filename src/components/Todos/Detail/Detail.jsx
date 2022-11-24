import { useEffect } from 'react';

import { useParams } from 'react-router';

import useTodos from '../useTodos';

import { LOADING_STATES } from '../constants';

const Detail = ({ setTitle }) => {
  const { todoId } = useParams();
  const { loadTodoDetails, todoDetails, otherTodos, loading, handleClickTodo } =
    useTodos();

  useEffect(() => {
    loadTodoDetails(todoId);
  }, []);

  useEffect(() => {
    setTitle(todoDetails.title);
  }, [setTitle, todoDetails]);

  return (
    <>
      <div style={{ height: '300px'}}>
        {loading === LOADING_STATES.TODO_DETAILS ? (
          <div class="loader">Loading...</div>
        ) : (
          <div
            className="flex-box"
            style={{
              marginTop: '16px',
            }}
          >
            <img height="150" src="https://picsum.photos/100" />
            <div>
              <h2>Title: {todoDetails.title}</h2>
              <p>User id: {todoDetails.userId}</p>
              <p>State: {todoDetails.completed ? 'Completed' : 'In-complete'}</p>
            </div>
          </div>
        )}
      </div>
      <div>
        <h4>Other todos:</h4>
        <div style={{ gap: '16px' }} className="flex-box">
          {otherTodos.map((todo) => (
            <div
              style={{ cursor: 'pointer' }}
              onClick={() => handleClickTodo(todo)}
            >
              <img src="https://picsum.photos/50" />
              <h5>{todo.title}</h5>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Detail;
