import {makeAutoObservable} from "mobx";

export default class CpageStore{
    constructor() {
        this._comp = []
        this._ccid = []
        this._page = 1
        this._limit = 4
        this._totalCount = 0
        this._sal={}
        this._stu={}
        this._gra={}
        this._wor={}
        this._typ={}
        makeAutoObservable(this)
    }

    setCcid(c){
        this._ccid.push(c)
    }

    setSal(Sa){
        this._sal = Sa
    }

    setStu(St){
        this._stu = St
    }

    setGra(Gr){
        this._gra = Gr
    }

    setWor(We){
        this._wor = We
    }

    setTyp(Ty){
        this._typ = Ty
    }

    setPage(page) {
        this._page = page
    }
    setTotalCount(count) {
        this._totalCount = count
    }

    setComp(comp){
        this._comp = comp
    }

    get selectedSal(){
        return this._sal
    }

    get selectedStu(){
        return this._stu
    }

    get selectedGra(){
        return this._gra
    }

    get selectedWor(){
        return this._wor
    }

    get selectedTyp(){
        return this._typ
    }

    get page() {
        return this._page
    }

    get totalCount() {
        return this._totalCount
    }

    get limit() {
        return this._limit
    }

    get Comp(){
        return this._comp
    }

    get Ccid(){
        return this._ccid
    }
}
