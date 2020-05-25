import {GETSELLER,GETGOODS,GETRATINGS} from 'store/mutation_types.js'
import axios from '@/api/axios'
const ok = 200
export default{
   async [GETSELLER]({commit}){
     //发请求获取数据  提交mutation
     const {code,data} = await axios.get("/api/seller")
     if(code === ok){
        commit(GETSELLER,data)
     }
   },
   async [GETGOODS]({commit}){
     //发请求获取数据 提交mutation
     const {code,data} = await axios.get("/api/goods")
     if(code === ok){
        commit(GETGOODS,data)
     }
   },
   async [GETRATINGS]({commit}){
     //发请求获取数据 提交mutation
     const {code,data} = await axios.get("/api/ratings")
     if(code === ok){
       commit(GETRATINGS,data)
     }
   }
}