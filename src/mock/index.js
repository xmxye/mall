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
  "topImage|4": [ //每个商品中再随机生成七个food
    {
      "img": "@dataImage('375x200')",//生成随机图片，大小/背景色/字体颜色/文字信息
    }
  ],    
  "describe":'@cparagraph(1,3)',
  "presentPrice":'@int(100,200)',
  "oldPrice":'@int(150,300)',
  "csell":'@natural(50,300)', 
  "collect":'@natural(50,300)', 
  "deliverTime":'@int(10,30)',
  "list":[{
        'title':'退货补运费',
        'icon':'@dataImage(10x10)'   
      },
      { 'title':'全国包邮',
        'icon':'@dataImage(10x10)'
      },
        {'title':'7天无理由退换货',
        'icon':'@dataImage(10x10)'   
      }
    ],
  "info":{   
    'remark':[{
      'title':'描述相符',
      'score':'4.9',
      'isBetter':true,
      'level':'高'
    },
    {
      'title':'价格合理',
      'score':'5',
      'isBetter':true,
      'level':'高'
    },
    {
      'title':'质量满意',
      'score':'4.0',
      'isBetter':false,
      'level':'低'
    }]
  },
  'storeInfo':{
    'img':'@dataImage(50x50,H W)',
    "title":'@cword(3)',
    "totalSell":'@natural(50,300)',
    "allGoods":'@natural(50,300)',
  },
  "title":'@ctitle',
  "goodsImage|10":[{
    'image':'@dataImage(375x200,漂流记)'
  }],
  "tables":[
      ['尺码','M',"L","XL","XXL"],
      ['衣长','61.8','63','64.6','66'],
      ['胸围','98','104','110','116'],
      ['袖长','63','66','68.5','70.5']
    ],
  "set|16":[{
    "key":"@cword(2)",
    "value":'@ctitle(10,20)'
  }]
})


export default Mock