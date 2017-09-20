import Mock from 'mockjs';
Mock.setup({timeout:'1200-2600'});
Mock.mock('/data',{
    "data|199":[
        {
            "key|+1": 0,
            "name": '@cname',
            "age|20-40":0,
            "address":'@county(true)',
            "payTime":'@datetime()',
            "commodity|1":
                [
                    "铅笔","钢笔","毛笔","中性笔"
                ],
            "num|1":[
                    "1","2","3","4","5","6","7","8","9","10"
                ],
            "commodityNum":'@payTime',
            "tel":18301000000
        }
    ]
});
// {


//                     address: '香港-香港自治区中寰',


//                     tel: '18301111111',
//                     commodity: '毛笔',
//                     num: 2,
//                     price: 25.5,
//                     idType: 'user',
//                     orderState: 0,
//                     commodityNum: '2016923'
//                 }
