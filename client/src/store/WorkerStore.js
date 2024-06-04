import {makeAutoObservable} from "mobx";

export default class WorkerStore{
    constructor() {
        this._work = []
        this._softwork=[]
        this._page = 1
        this._limit = 10
        this._totalCount = 0
        this._sof={}
        this._softsal={}
        this._softgen={}
        this._softgra={}
        this._softwor={}
        this._softtyp={}
        this._softstf={}
        this._sal={}
        this._gen={}
        this._gra={}
        this._wor={}
        this._typ={}
        this._stf={}
        makeAutoObservable(this)
    }

    setSoft(So){
        this._sof = So
    }

    setSoftSal(SSa){
        this._softsal = SSa
    }

    setSoftGen(SGe){
        this._softgen = SGe
    }

    setSoftGra(SSt){
        this._softgra = SSt
    }

    setSoftWor(SWe){
        this._softwor = SWe
    }

    setSoftTyp(STy){
        this._softtyp = STy
    }

    setSoftStf(SSf){
        this._softstf = SSf
    }

    setSal(Sa){
        this._sal = Sa
    }

    setGen(Ge){
        this._gen = Ge
    }

    setGra(St){
        this._gra = St
    }

    setWor(We){
        this._wor = We
    }

    setTyp(Ty){
        this._typ = Ty
    }

    setStf(Sf){
        this._stf = Sf
    }

    setPage(page) {
        this._page = page
    }
    setTotalCount(count) {
        this._totalCount = count
    }

    setWork(work){
        this._work = work
    }

    setSoftWork(swork){
        this._softwork = swork
    }

    get selectedSoft(){
        return this._sof
    }

    get selectedSoftSal(){
        return this._softsal
    }

    get selectedSoftGen(){
        return  this._softgen
    }

    get selectedSoftGra(){
        return  this._softgra
    }

    get selectedSoftWor(){
        return this._softwor
    }

    get selectedSoftTyp(){
        return this._softtyp
    }

    get selectedSoftStf(){
        return this._softstf
    }

    get selectedSal(){
        return this._sal
    }

    get selectedGen(){
        return  this._gen
    }

    get selectedGra(){
        return  this._gra
    }

    get selectedWor(){
        return this._wor
    }

    get selectedTyp(){
        return this._typ
    }

    get selectedStf(){
        return this._stf
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

    get Work(){
        return this._work
    }

    get softWork(){
        return this._softwork
    }
}