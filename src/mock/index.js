import Mock from 'mockjs'


/**
 * 首页接口一
 */
Mock.mock('/home/mulData',{   

            "pop": "@dataImage('375x300','#c33', '#ffffff','本周流行')", //生成随机图片，大小/背景色/字体颜色/文字信息
            "banners|7": [ //每个商品中再随机生成七个food
                {
                    "img": "@dataImage('375x200','#c33', '#ffffff','小可')",//生成随机图片，大小/背景色/字体颜色/文字信息
                }
            ],
            "recommends|4": [ //每个商品中再随机生成七个food
                {
                    "title": "@ctitle", //food的名字
                    "img": "@dataImage('150x150')",//生成随机图片，大小/背景色/字体颜色/文字信息
                }
            ]        
        })

// ------------------------

// let data_goods = {
//     "goods":{
//         "pop":{
//             "page":1,
//             "list|45":[
//                 {
//                     "img":"@dataImage('250x250','#e66', '#ffffff','商品')",
//                     "description":"@ctitle(20)",
//                     "price":"10",
//                     "collect":"100"
//                 }
//             ]
//         },
//         "new":{
//             "page":1,
//             "list|60":[
//                 {                                   
//                     "img":"@dataImage('250x250','#e66', '#ffffff','商品')",
//                     "description":"@ctitle(20)",
//                     "price":"20",
//                     "collect":"200" 
//                 }
//             ]
//         },
//         "sell":{
//             "page":1,
//             "list|40":[
//                 {                                   
//                     "img":"@dataImage('250x250','#e66', '#ffffff','商品')",
//                     "description":"@ctitle(20)",
//                     "price":"30",
//                     "collect":"300" 
//                 }
//             ]
//         }
//     }
// }

// Mock.mock('/home/goods',data_goods)


const dataList = [] // 用于接受生成数据的数组

for (let i = 0; i < 26; i++) { // 可自定义生成的个数

  const template = {
    'img': "@dataImage('200*200','#02adea', 'Hello')",
    'description':"@cword(20)",
    'price':"@integer(10, 100)",
    'collect':"@integer(100, 2000)"             
  }
  dataList.push(template)
}

// list 分页接口()

Mock.mock('/home/goods', 'post', (params) => { 

  var info = JSON.parse(params.body)

  var [index, size, total] = [info.pageIndex, info.pageSize, dataList.length]

  var len = total / size

  var totalPages = len - parseInt(len) > 0 ? parseInt(len) + 1 : len

  var newDataList = dataList.slice(index * size, (index + 1) * size)

  return Mock.mock({

    'code': '0',

    'message': 'success',

    'data': {

      'pageIndex': index,

      'pageSize': size,

      'rows': newDataList,

      'total': total,

      'totalPages': totalPages
    }

  })

})

export default Mock