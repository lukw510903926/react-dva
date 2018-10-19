export default {

  namespace: 'login',
  state: {
    loginUser:{}
  },
  effects: {
    * login({payload: value}, {call, put}) {
      console.log('--------------');
      yield put({type: 'loginSystem', payload: {name: '管理员-dva'}})
    },
  },
  reducers: {

    loginSystem(state, action) {
      return {...state, loginUser: action.payload};
    },
  },
  subscriptions: {
    setup({dispatch,history}) {
      history.listen(location => {
        console.log(location)
      })
    },
  },
}
