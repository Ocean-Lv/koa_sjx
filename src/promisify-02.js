
// 当异步操作使用回调而不是返回promise时，
// 你必须创建并返回一个新的Promise（new Promise((resolve，reject)=> {})）或使用util.promisify。
const axios = require('axios');
const {promisify} = require('util');
const promise_GetResponse = promisify(axios.get);


var test_url = 'http://60.28.158.166:7050/tbi-obt-staticinfo-api/api/v2/static/city/inCityAutoCompleter?query=s';

// promise_GetResponse(test_url).then(res=>{
//     console.log(res)
// }).catch(function (error) {
//     console.log(error);
// });


    async function hello () {
        var _res = await promise_GetResponse(test_url);
        return _res
    }
    hello().then(res=>{
        console.log(res)
    })
    // console.log(_res)


// function getResponse () {
//     axios.get('http://60.28.158.166:7050/tbi-obt-staticinfo-api/api/v2/static/city/inCityAutoCompleter?query=s')
//     .then(function (response) {
//       console.log("=======");
//       console.log(response);
//       console.log("*******");
//     })
//     .catch(function (error) {
//       console.log(error);
//     });
// }

// const {promisify} = require('util');
// const promise_GetResponse = promisify(getResponse);

// (

//     async() => {
//         // try {
//             // hh();
//             const _res = await httpGet(test_url);
//             console.log(_res)
//         // } catch (error) {
//         //     console.log('async', error)
//         // }

//     }

// )()