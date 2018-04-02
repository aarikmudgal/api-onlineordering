var urls = {
  login: 'http://10.31.87.23:81/api/customers/login',
  articleList: 'http://10.31.87.23:82/api/articles',
  orders: 'http://10.31.87.23:83/api/orders',
  orderDetails: 'http://10.31.87.23:83/api/orders/[ORDER_ID]',
  articleAdd: 'http://10.31.87.23:83/api/orders/[ORDER_ID]/articles',
  articleDelete:'http://10.31.87.23:83/api/orders/[ORDER_ID]/articles/[ARTICLE_ID]'
}
module.exports = urls;