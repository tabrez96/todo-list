export const api = {
  /**
   * get todo list
   * @param {number} page
   * @returns {Promise}
   */
  getTodos: async (page) => {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/todos?_page=${page}&_limit=20&_delay=4000`
    );

    const result = await response.json();
    return result;
  },

  /**
   * search for specific todo with title
   * @param {string} searchTerm
   * @returns {Promise}
   */
  searchTodos: async (searchTerm) => {
    const delay = ((searchTerm?.length || 0) % 3) * 1000;

    const response = await fetch(
      `https://jsonplaceholder.typicode.com/todos?q=${searchTerm}&_delay=${delay}`
    );

    const result = await response.json();
    return result;
  },

  /**
   * get todo data
   * @param {number} todoId
   * @returns {Promise}
   */
  getTodoDetails: async (todoId) => {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/todos/${todoId}?_delay=4000`
    );

    const result = await response.json();
    return result;
  },

  /**
   * get other todos of user
   * @param {number} todoId
   * @returns {Promise}
   */
  getOtherTodos: async (todoId) => {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/todos?userId=${todoId}&_limit=5`
    );

    const result = await response.json();
    return result;
  },
};

export default api;
