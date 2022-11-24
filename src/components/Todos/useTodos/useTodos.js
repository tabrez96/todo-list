import { useState, useCallback } from 'react';

import { useNavigate } from 'react-router-dom';

import api from '../../../services/api';

import { LOADING_STATES } from '../constants';

const useTodo = () => {
  const navigate = useNavigate();

  const [page, setPage] = useState(1);
  const [todoList, setTodoList] = useState();
  const [todoDetails, setTodoDetails] = useState();
  const [loading, setLoading] = useState(LOADING_STATES.DEFAULT);
  const [otherTodos, setOtherTodos] = useState([]);

  const loadTodoList = useCallback(() => {
    setLoading(LOADING_STATES.TODO_LIST);
    api.getTodos(page).then((result) => {
      setTodoList(result);
      setLoading(LOADING_STATES.DEFAULT);
    });
  }, []);

  const loadTodoDetails = useCallback((todoId) => {
    setLoading(LOADING_STATES.TODO_DETAILS);
    api.getTodoDetails(todoId).then((result) => {
      setTodoDetails(result);

      api.getOtherTodos(todoDetails.userId).then((result) => {
        setOtherTodos(result);
      });
    });
  }, [todoDetails]);

  const handleClickTodo = (todo) => {
    navigate(`/todos/${todo.id}`);
  };

  const handleSearchTodo = (event) => {
    const { value } = event.target;
    setLoading(LOADING_STATES.TODO_LIST);

    api.searchTodos(value).then((result) => {
      setLoading(LOADING_STATES.DEFAULT);
      setTodoList(result);
    });
  };

  return {
    // states
    page,
    loading,
    todoList,
    todoDetails,
    otherTodos,

    // functions
    loadTodoList,
    loadTodoDetails,
    handleClickTodo,
    handleSearchTodo
  };
};

export default useTodo;
