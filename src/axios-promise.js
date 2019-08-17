const axios = require('axios');

var test_url = 'http://60.28.158.166:7050/tbi-obt-staticinfo-api/api/v2/static/city/inCityAutoCompleter?query=s';

function httpGet (url) {
    return new Promise((resolve, reject)=>{
        axios.get(url)
            .then(function (response) {
                resolve(response);
            })
            .catch(function (error) {
                console.log(error);
            });
    })
}

const server = {
    getCodes: async (url) => {
        return await httpGet(url);
    }
}

// await后面只能跟随promise
// async 函数总是返回一个 Promise 对象,所以你可以用then去处理结果
// 也可以在async函数中返回一个非promise 列如: return 'hello world';
server.getCodes(test_url).then(res=>{
    console.log(res)
})


//other 
// (
//     async()=>{
//         const res = await axios.get(url);
//         console.log(res.data)
//     }
// )()