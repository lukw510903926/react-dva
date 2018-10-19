import HttpRequest from './utils/HttpRequest';

export default class ProductHttp {

  static productList() {
    return HttpRequest.getRequest('/product/list')
      .then(data => data)
      .catch(error => console.log(error));
  }
}
