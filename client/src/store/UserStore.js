import {makeAutoObservable} from "mobx";

export default class UserStore{
    constructor() {
        this._isAuth = false
        this._user = {}
        this._userid= {}
        makeAutoObservable(this)
    }

    setIsAuth(bool){
        this._isAuth = bool
    }
    setUser(user){
        this._user = user
    }

    setUserid(u){
        this._userid = u
    }

    get isAuth(){
        return this._isAuth
    }
    get user(){
        return this._user
    }
    get userid(){
        return this._userid
    }
}