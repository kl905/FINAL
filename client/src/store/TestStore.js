import {makeAutoObservable} from "mobx";

export default class TestStore{
    constructor() {
        this._ans_id_store=[]
        this._ans_store=[]
        this._qe_store=[]
        this._test_n={}
        this._qe={}
        this._qe_ans_r={}
        this._qe_ans1={}
        this._qe_ans2={}
        this._qe_ans3={}
        this._qe_totalCount = 0

        makeAutoObservable(this)
    }

    setClearTestStore(){
        this._ans_id_store=[]
        this._ans_store=[]
    }

    setAnsIdStore(Aist){
        this._ans_id_store.push(Aist)
    }

    setAnsStore(Ast){
        this._ans_store.push(Ast)
    }

    setQeStore(Qst){
        this._qe_store=Qst
    }

    setTest_n(Tn){
        this._test_n = Tn
    }

    setQe(Q){
        this._qe = Q
    }

    setQer(Qr){
        this._qe_ans_r = Qr
    }

    setQef(Qf){
        this._qe_ans1 = Qf
    }

    setQes(Qs){
        this._qe_ans2 = Qs
    }

    setQet(Qt) {
        this._qe_ans3 = Qt
    }
    setQeTotalCount(count) {
        this._qe_totalCount = count
    }

    get QeStore(){
        return this._qe_store
    }

    get Test_n(){
        return this._test_n
    }

    get Qe(){
        return this._qe
    }

    get Qer(){
        return this._qe_ans_r
    }

    get Qef(){
        return this._qe_ans1
    }

    get Qes(){
        return this._qe_ans2
    }

    get Qet() {
        return this._qe_ans3
    }

    get QetotalCount() {
        return this._qe_totalCount
    }

    get AnsStore(){
        return this._ans_store
    }

    get AnsIdStore(){
        return this._ans_id_store
    }


}