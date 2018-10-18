export default {

  namespace: 'productList',
  state: {
    list: [{name: "产品名称", code: "code", price: "20"}]
  },
  effects: {//redux 中的action
    * addProduct({payload: value}, {call, put}) {
      console.log('value :', value);
      yield put({type: 'add', payload: value})
    },
    * init({payload}, {call, put}) {
      yield put({type: 'initState', payload})
    },
  },
  reducers: {

    initState(state, action) {
      console.log('action: ', action);
      state.list.push(action.payload);
      return {...state};
    },
    add(state, action) {
      console.log('action: ', action);
      state.list.push(action.payload);
      return {...state}
    }
  },
  subscriptions: {
    setup({dispatch,history}) {
      console.log('history :',history);
      dispatch({type: 'init', payload: {name: Date.now(), code: Date.now()}});//启动时执行
    },
  },
}