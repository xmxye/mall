import Mock from 'mockjs'


// const Random = Mock.Random
// Random.email()
// Random.image()
      
        let data =  {
                    "shopId|+1": 1,//生成商品id，自增1
                    "shopMsg": "@ctitle(10)", //生成商品信息，长度为10个汉字
                    "shopName": "@cname",//生成商品名 ， 都是中国人的名字
                    "shopTel": /^1(5|3|7|8)[0-9]{9}$/,//生成随机电话号
                    "shopAddress": "@county(true)", //随机生成地址
                    "shopStar|1-5": "★", //随机生成1-5个星星
                    "salesVolume|30-1000": 30, //随机生成商品价格 在30-1000之间
                    "pop": "@Image('375x300','#c33', '#ffffff','本周流行')", //生成随机图片，大小/背景色/字体颜色/文字信息
                    "banners|7": [ //每个商品中再随机生成七个food
                        {
                            "foodName": "@cname", //food的名字
                            "img": "@Image('375x200','#c33', '#ffffff','小可')",//生成随机图片，大小/背景色/字体颜色/文字信息
                        }
                    ],
                    "recommends|4": [ //每个商品中再随机生成七个food
                        {
                            "title": "@ctitle", //food的名字
                            "img": "@Image('150x150','#e66', '#ffffff','推荐')",//生成随机图片，大小/背景色/字体颜色/文字信息
                        }
                    ],
                }

Mock.mock('/home/mulData',data)

// console.log(data)

export default Mock