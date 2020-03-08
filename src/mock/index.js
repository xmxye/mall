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


/**
 * 首页接口二
 */

const dataList = [] 
for (let i = 0; i < 26; i++) {
  const template = {
    'id': "@int(1,50)",
    'img': "@dataImage('200x200','#02adea', 'Hello')",
    'description':"@cword(20)",
    'price':"@integer(10, 100)",
    'collect':"@integer(100, 2000)"             
  }
  dataList.push(template)
}

// list 分页接口()
Mock.mock('/home/goods', 'post', (params) => { 
  
  var info = JSON.parse(params.body)
  var [type,page, size] = [info.type,info.page, 10]

  var newDataList = dataList.slice((page - 1) * size, (page) * size);
  var newDataList1 = dataList.slice(0,23).slice((page - 1) * size, (page) * size);
  var newDataList2 = dataList.slice(0,15).slice((page - 1) * size, (page) * size);


  return Mock.mock({
    'code': '0',
    'message': 'success',
    'data': {
      'pop':{
        'page':page,
        'list':newDataList
      },
      'new':{
        'page':page,
        'list':[]
      },
      'sell':{
        'page':page,
        'list':[]
      }
    }
  })
})

/**
 * 详情页接口一
 */

Mock.mock('/detail',"get",{   
  "img": "@dataImage('375x300','#c33', '#ffffff','详情页banner图')", //生成随机图片，大小/背景色/字体颜色/文字信息
  "descripe":'@paragraph(1)',
  "presentPrice":'@int(100,200)',
  "oldPrice":'@int(150,300)'       
})


export default Mock