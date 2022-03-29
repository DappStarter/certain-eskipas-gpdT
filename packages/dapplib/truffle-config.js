require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom clog other security notice birth noise hope harvest loan fresh ghost'; 
let testAccounts = [
"0xc7dccecfe6b4ca693f7a0bb30535a6ea9fdaee295162f1b3869b33550e7d9352",
"0x2055e48927eb6e609cd81fe67d224e68eafd595d4101c9eca9ce39fff4e5aafd",
"0xf638cb56e8115569abeee59e7e70835e8d5f71f136f9bcfc05289607e8fc98a2",
"0xda88f3a2d925fc9ef35f0878f040faeca114a10bd54a7ec41dfe2ec0ef43457d",
"0xc4ede14cb62ca3115032cd19275a1c022c4508dcfed4f29adc30d40d1b8e84f4",
"0xca6d111dd3361cb685f618ed082239afa279e8ba027b496477a63e4d8a17a4b4",
"0x46347bf783446e807a50925a22bfedb559f253c60f2c284dfe32482f9c213ba6",
"0xac952d644cad6e05f9a4a32cd6d6ca3335b6d0aa5003100e2c96820482238550",
"0x6b8b352be75acdce8da37b3b2a34eb48b0e0f2984ef605cdced8f863d01f641e",
"0x17c01d07d25c22954980ce6db1c52ce4912d5ca5805ff359c39f80824d90ba6b"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

