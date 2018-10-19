import HttpRequest from '@/utils/HttpRequest';

export default class ProductHttp {

  static productList() {

    return HttpRequest.getRequest('/user/list');
  }
}
