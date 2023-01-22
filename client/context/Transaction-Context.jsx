import React,{useEffect,useState} from "react";
import {ethers} from "ethers";

import { abiContract,addressContract } from "../src/utils/constants";


export const TransactionContext = React.createContext();

const { ethereum }= window;


const getEthContract = () =>{
    const provider = new ethers.providers.web3Provider(ethereum);
    const signer = provider.getSigner();
    const transactionContract = new ethers.Contract(addressContract,abiContract,signer);

    console.log(provider,signer,transactionContract)

}

export const TransactionProvider = ({children})=>{
    const [currentAccount,setCurrentAccount] = useState('');
    const [formData, setFormData] = useState({addressTo:'',amount:''})

    const handleChange = (e,name) =>{
        setFormData((prevState) => ({...prevState,[name]:e.target.value}))
    }

    const checkWalletConnection = async () =>{
        try {
            if(!ethereum){return alert("Please install metamask")}
            const accounts =  await ethereum.request({method:'eth_accounts'});

            console.log("method: "+accounts)
            if(accounts.length){
                setCurrentAccount(accounts[0]);
                //getAllTransaction();
            }
            else{console.log("no account")}
        } catch (error) {
            console.log(error)
            throw new Error("No eth object")
        }
        
        
    }


    const connectWallet =  async() =>{
        try{
            if(!ethereum){return alert("Please install metamask")}
            const accounts =  await ethereum.request({method:'eth_requestAccounts'});
            setCurrentAccount(accounts[0]);
        }
        catch(error){
            console.log(error)
            throw new Error("No eth object")
        }
    }

    const addTransaction = async()=>{try {
        if(!ethereum){return alert("Please install metamask")}

    } catch (error) {
        console.log(error)
        throw new Error("No eth object")
    }}


    useEffect(()=>{
        checkWalletConnection();
    },[])

    return ( 
        <TransactionContext.Provider value={{connectWallet, currentAccount}}>
            {children}
        </TransactionContext.Provider>
    );
}
