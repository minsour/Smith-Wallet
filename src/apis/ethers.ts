import { ethers, utils } from 'ethers';
import { erc20ABI } from '../abis/erc20'
export const etherscanProvider = new ethers.providers.EtherscanProvider('ropsten', 'H7WMYM6JIQQBXT3EQYIMSRZK4K2JVB92ZD')

const makePath = (index:number) => {
    return `m/44'/60'/${index}/0`
}

export const getNewWalletMnemonic = () => {
    return ethers.Wallet.createRandom().mnemonic
}

export const getAccountInfo = (mnemonic:string, index:number) => {
    let wallet:ethers.Wallet = ethers.Wallet.fromMnemonic(mnemonic, makePath(index));
    return {
        "address" : wallet.address,
        "privateKey" : wallet.privateKey
    }
}
export const getBalanceOfERC20Token = (privateKey:string, contractAddress:string) => {
    let wallet:ethers.Wallet = new ethers.Wallet(privateKey, etherscanProvider)
    let contract = new ethers.Contract(contractAddress, erc20ABI, wallet)

    // Send tokens
    return contract.balanceOf(wallet.address)
}

export const getBalanceOfEthereum = (privateKey: string) => {
    let wallet:ethers.Wallet = new ethers.Wallet(privateKey, etherscanProvider)
    let balancePromise = wallet.getBalance()

    return balancePromise
}

export const transferERC20Token = (privateKey:string, contractAddress:string, to:string, value:number) => {
    let wallet:ethers.Wallet = new ethers.Wallet(privateKey, etherscanProvider)
    let contract = new ethers.Contract(contractAddress, erc20ABI, wallet)

    var numberOfTokens = ethers.utils.parseUnits('1.0', value)

    // Send tokens
    return contract.transfer(to, numberOfTokens)
} 

export const transferEthereum = (privateKey:string, to:string, value:number) => {
    let wallet:ethers.Wallet = new ethers.Wallet(privateKey, etherscanProvider)

    let tx = {
        to: to,
        // gasLimit: utils.bigNumberify('21000')
        // gasPrice: utils.bigNumberify(),
        // We must pass in the amount as wei (1 ether = 1e18 wei), so we
        // use this convenience function to convert ether to wei.
        value: ethers.utils.parseEther(`${value}`)
    };
    
    return wallet.sendTransaction(tx)
}