// import {routerRedux} from 'dva/router'

export default {

  namespace: 'login',
  state: {
    loginUser: {},
    backPath: ''
  },
  effects: {
    * login({payload: value}, {call, put}) {
      yield put({type: 'loginSystem', payload: {name: '管理员-dva'}})
    },
  },
  reducers: {

    loginSystem(state, action) {
      return {...state, loginUser: action.payload};
    },
  },
  subscriptions: {
    setup({dispatch, history}) {
      history.listen(location => {
        console.log('location',location,'pathname : ',location.pathname);
        //routerRedux.push("/home/login",{backPath:location.pathname});
      })
    },
  },
}
