import Goods from 'pages/Goods/Goods'
import Ratings from 'pages/Ratings/Ratings'
import Seller from 'pages/Seller/Seller'
export default [
  {
    path:"/goods",
    component:Goods
  },
  {
    path:"/ratings",
    component:Ratings
  },
  {
    path:"/seller",
    component:Seller
  },
  {path:"/",redirect:"/goods"}
]