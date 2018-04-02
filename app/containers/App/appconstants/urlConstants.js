var urls = {
  login: 'http://35.200.145.203/api/customers/login',
  articleList: 'http://35.200.247.55/api/articles',
  orders: 'http://35.200.172.68/api/orders',
  orderDetails: 'http://35.200.172.68/api/orders/[ORDER_ID]',
  articleAdd: 'http://35.200.172.68/api/orders/[ORDER_ID]/articles',
  articleDelete:'http://35.200.172.68/api/orders/[ORDER_ID]/articles/[ARTICLE_ID]'
}
module.exports = urls;
