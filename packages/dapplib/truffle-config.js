require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hunt produce border tell notice crime remain hole include entire front spring'; 
let testAccounts = [
"0xbbaaf1168eb12b067acbdf19a36455f7c7f4ba7c39e4f8c961fae82fa5a27b9d",
"0x9473c5867713edd786a5ea348f4e1e8d6c9c0ce084511766b9fcf0eb5de406fd",
"0x4f3ad1d1ae7223574a0e9a9a740cf3dcc9fd72bbb174bf39d82b4052919e2643",
"0xabe23295ee11b4eda3b0067f48ac708aed249c04fccdbdee2eb0f7cf00e5b625",
"0xfd7789358cc5e8c5e25bbbf877a5555244a5d5183ea2c377e11d81fdb2fd746d",
"0xcd4f78f59eecb093612f9e2e6982f6585db71fd8ddb9f7092adfde81f129d811",
"0xa56ad8bdc026bd8eaffcc0e83b94e404bc1508e11443272ae09e9d3203859210",
"0x3953c29161b7243a5f1ffc6b8d8d1b8573b56954cd040c3b4a2f8e9fc5c463e9",
"0xeed6ff49e92745a9139dce2463eb7f779c75767629cf45d0aa3d3d68d4e1c05c",
"0xdbff928a9540e9f92d6d75a8f3509a52b81cef7c0555210fc3b0ca8791b7492c"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

