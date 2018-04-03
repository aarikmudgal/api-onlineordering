var urls = {
  login: '/api/customers/login',
  articleList: '/api/articles',
  orders: '/api/orders',
  orderDetails: '/api/orders/[ORDER_ID]',
  articleAdd: '/api/orders/[ORDER_ID]/articles',
  articleDelete:'/api/orders/[ORDER_ID]/articles/[ARTICLE_ID]'
}
module.exports = urls;
