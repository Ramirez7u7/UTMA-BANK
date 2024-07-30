//Registrarse el usuario
//Iniciar sesion
//Cerrar sesion
//Obtener informacion del usuario
//Crear transsacciones
//Pedir prestamos
//Borrar cuenta
//Actualizar

import Usermodel from "../models/UserModel.js";
import ManagerAccount from "./AccountClass.js";
import ManagerCard from "./CardsClass.js";

class ManagerUser{
    constructor(phone, name, lastname, isInSession, isAdmin, password){
        this.email = email;
        this.phone = phone;
        this.name =  name;
        this.lastname = lastname;
        this.isInSession = isInSession;
        this.isAdmin = isAdmin;
        this.password = password;
    }

   async register(){
    try {
        const user = await Usermodel.create({
            email: this.email,
            phone: this.phone,
            name: this.name,
            lastname: this.lastname,
            isInSession: this.isInSession,
            isAdmin: this.isAdmin,
            password: this.password
        });
        const MA = new ManagerAccount(user._id,12345,"Ahorro",10000)
        const currentAccount = await MA.createAccount();
        const MC = new ManagerCard(user._id,currentAccount._id,"16digitos al azar","debito","de la fecha actual suma 3 años","generar codigo de 3 cifras","active");
        await MC.createCard();
        return user;
    } catch (error) {
        throw new Error(`Error al crearusuario pive: ${error}`);
        
    }
      
    }

    async Login(email, password){
        try {
            const user = await Usermodel.findOne({email: email})
            if(!user){
                throw new Error("usuario no registrado pive")
            }
            if(user.password !== password){
                throw new Error(`Constraseña Incorrecta`)
            }
            return "Succeeded"
        } catch (error) {
            throw new Error(`Error al iniciar sesion pive: ${error}`);
            
        }
    }
    
    async getUserInfo(id) {
        try {
            const user = await Usermodel.findById(id);
            return user;
        } catch (error) {
            throw new Error(`Error al obtener tus credenciales pive: ${error}`);
        }
    }
    
    async updateEmail(email){
        try {
            if (!email){
                throw new Error(`correo invalido`)
            }
            await Usermodel.findByIdAndUpdate(id,{
                $ser:{email:email}
            })
            return "ok"
        } catch (error) {
            throw new Error(`Error al obtener tus credenciales pive: ${error}`);
        }
    }

    async updatePhone(id,phone){
        try {
            if (!phone){
                throw new Error(`numero desconocido`)
            }
            await Usermodel.findByIdAndUpdate(id,{
                $ser:{phone:phone}
            })
            return "ok"
        } catch (error) {
            throw new Error(`Error al obtener tu numero pive: ${error}`);
        }
    }

    async updatePassword(id,password){
        try {
            if (!password){
                throw new Error(`contraseña invalida`)
            }
            await Usermodel.findByIdAndUpdate(id,{
                $ser:{password:password}
            })
            return "ok"
        } catch (error) {
            throw new Error(`Error al obtener tu contraseña pive: ${error}`);
        }
    }


}


export default ManagerUser;