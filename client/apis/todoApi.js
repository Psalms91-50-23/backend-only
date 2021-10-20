import request from 'superagent'

const baseUrl = '/api/v1/todos'

export const getTodos = () => {
    return request
      .get(baseUrl)
      .then(res => res.body)
  }
