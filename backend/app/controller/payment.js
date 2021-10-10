// TEST-8142298858844655-051900-b5b8cde142b8c0d6a501700ce6c820f3-656627952

// const paymentCtrl = {};

// var mp = require('mercadopago');

// paymentCtrl.pay = async (req, res) =>{
//     mp.configurations.setAccessToken('TEST-8142298858844655-051900-b5b8cde142b8c0d6a501700ce6c820f3-656627952');

//     var preference = {
//         items: [
//           {
//             title: 'Test',
//             quantity: 1,
//             currency_id: 'ARS',
//             unit_price: 10.5
//           }
//         ]
//       };
      
//     mp.preferences.create(preference).then((data) => {
//         console.log(data);
//       }).catch(error => {
//         console.log(error);
//     });
// }

// module.exports = paymentCtrl;