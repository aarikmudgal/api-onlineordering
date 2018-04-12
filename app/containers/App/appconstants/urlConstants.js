var urls = {
  signin: '/api/customers',
  login: '/api/customers/login',
  articleList: '/api/articles',
  articleImage: '/api/articles/[IMAGE_URL]',
  orders: '/api/orders',
  orderDetails: '/api/orders/[ORDER_ID]',
  orderSubmit: '/api/orders/[ORDER_ID]/status/3', // 3- submitted
  articleAdd: '/api/orders/[ORDER_ID]/articles',
  articleDelete: '/api/orders/[ORDER_ID]/articles/[ARTICLE_ID]',
  articleListHealth: '/api/articles/health',
  ordersHealth: '/api/orders/health',
  customersHealth: '/api/customers/health',
}
module.exports = urls;
