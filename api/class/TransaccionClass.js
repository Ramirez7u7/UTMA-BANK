//Movimiento de dinero(crear transaccion)
//Obtener trasacciones
//Obtener transacciones por ususario

import TrasactionModel from "../models/TransactionModel.js"

class ManagerTransaction{
    constructor(accountFromId, accountToId, type, amount, description){
        this.accountFromId = accountFromId;
        this.accountToId = accountFromId;
        this.type = type;
        this.amount = amount;
        this.description = description;

    }

    async createTransaction(){
        try {
            const transaction = TrasactionModel.create({
                accoutFromId: this.accountFromId,
                accountToId: this.accountToId,
                type: this.type,
                amount: this.amount,
                description: this.discription
        })
        return transaction;
        } catch (error) {
            throw new Error(`error al crear la transaccion pive ${error}`)
        }
    }

    async getTransaction(id){
        try {
            const transaction = await TrasactionModel.findById(id);
            return transaction;
        } catch (error) {
            throw new Error(`error al crear la transaccion pive ${error}`)
        }
    }

    async getUserTrasactions(id){
        try {
            const transactions = await TrasactionModel.find({accountFromId});
            return transactions;
        } catch (error) {
            throw new Error(`error al obtener trasacciones ${error}`)
        }
    }

    async getAccountTransaction(id){
        try {
            const transaction = await TrasactionModel.find({accountFromId});
            return transaction;
        } catch (error) {
            throw new Error(`error al obtener transacciones${error}`)
        }
    }



}