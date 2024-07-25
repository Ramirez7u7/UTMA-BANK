//Crear una tarjeta
//Obtener una tarjeta
//Otener tarjetas

import { Card } from "react-bootstrap";
import CardModel from "../models/CardModel.js"

class ManagerCard{
    constructor( userdId, accountId, cardNumber, cardType, expirationDate, securityCode, status){
        this.userdId = userId;
        this.accountId = accountId;
        this.cardNumber = cardNumber;
        this.cardType = cardType;
        this.expirationDate = expirationDate,
        this.securityCode = securityCode;
        this.status = status;
    }
    async createCard(){
        try {
            await CardModel.create({
                userdId:this.userdId, 
                accountId:this.accountId, 
                cardNumber:this.cardNumber, 
                cardType:this.cardType, 
                expirationDate:this.expirationDate, 
                segurityCode:this.securityCode, 
                status:this.status
            })
            return "Ok";
        } catch (error) {
            throw new Error(`Error al obtener Cuentas: ${error}`);
        }  
    }
    async getCards(){
        try {
            const cards = await CardModel.find();
            return cards;
        } catch (error) {
            throw new Error(`Error al obtener tarjetas: ${error}`);
        }
    }

    async getCard(id){
        try {
            const card = await CardModel.findById(id)
            return card;
        } catch (error) {
            throw new Error(`Error al obtener tarjeta: ${error}`);
        }
    }
}

export default ManagerCard;