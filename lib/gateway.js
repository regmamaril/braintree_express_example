'use strict';

var braintree = require('braintree');
var environment, gateway;

require('dotenv').load();
environment = process.env.BT_ENVIRONMENT.charAt(0).toUpperCase() + process.env.BT_ENVIRONMENT.slice(1);

if(environment == 'live') {
gateway = braintree.connect({
    accessToken: "access_token$production$mtr8h658t7fcmhcy$3c07626202f3c18271b95845f1e83299"    
});
} else {
gateway = braintree.connect({
    accessToken: "access_token$sandbox$h5wsw6pb4pssm55s$c81c22806ab47f1631ae3667dff84775"    
//   environment: braintree.Environment[environment],
//   merchantId: process.env.BT_MERCHANT_ID,
//   publicKey: process.env.BT_PUBLIC_KEY,
//   privateKey: process.env.BT_PRIVATE_KEY
});
}


module.exports = gateway;
