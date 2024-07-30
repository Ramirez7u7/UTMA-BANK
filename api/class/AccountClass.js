//Obtener cuentas
//Obtener cuenta
//Editar balance 
//Crear una cuenta

import AccountModel from "../models/AccountModel.js";
class ManagerAccount{
    constructor(userdID, accountNumber, accountType, balance){
        this.userdID = userdID;
        this.accountNumber = accountType;
        this.accountType = accountType;
        this.balance = balance;
    }

    async getAccounts(){
        try {
            const accounts = await AccountModel.find();
            return accounts;
        } catch (error) {
            throw new Error(`Error al obtener Cuentas: ${error}`);
        }
    }

    async getAccount(id){
        try {
            const account = await AccountModel.findById(id)
            return account;
        } catch (error) {
            throw new Error(`Error al obtener Cuentas: ${error}`);
        }
    }

    async addBalance(id, amount){
        try {
            this.balance += amount;
            await AccountModel.findByIdAndUpdate(id,{
                $set:{
                    balance:this.balance
                }
            })
            return "Ok";
        } catch (error) {
            throw new Error(`Error al agregar plata pive: ${error}`);
        }
    }
    async restBalance(id, amount){
        try {
            this.balance += amount;
            await AccountModel.findByIdAndUpdate(id,{
                $set:{
                    balance:this.balance
                }
            })
            return "Ok";
        } catch (error) {
            throw new Error(`Error al retirar plata pive: ${error}`);
        }
    }

    async createAccount(){
        try {
            const account = await AccountModel.create({
                userdId:this.userdID,
                accountNumber:this.accountNumber,
                accountType:this.accountType,
                balance:this.balance
            });
            return account;
        } catch (error) {
            throw new Error(`No Aceptamos Peruanos: ${error}`);
        }
    }
}
export default ManagerAccount