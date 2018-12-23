/**
 * Created by Administrator on 2018/12/22.
 */
import ajax from './ajax'

// const BASE = 'http://localhost:5000'
//[http://localhost:3000/position/40.10038,116.36867]
const BASE = '/api'; // 开发环境下需要使用代理帮我们转发请求

export const reqAddress = (longitude, latitude) => ajax(BASE + `/position/${latitude},${longitude}`);

//http://localhost:3000/index_category
export const reqCategorys = () => ajax(BASE + '/index_category');

//[http://localhost:3000/shops?latitude=40.10038&longitude=116.36867]
export const reqShops = (longitude, latitude) => ajax(BASE + '/shops', {longitude, latitude});
