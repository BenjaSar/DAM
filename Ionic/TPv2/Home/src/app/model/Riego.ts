//logRiegoId
//apertura
//fecha
//electrovalvulaId

export class logRiego{
    private _logRiegoId: number;
    private _fecha: Date; 
    private _apertura: number;
    private _electrovalvulaId: number;

    constructor(logRiegoId,fecha,apertura, electrovalvulaId){
        this._logRiegoId=logRiegoId;
        this._fecha=fecha;
        this._apertura=apertura;
        this._electrovalvulaId=electrovalvulaId;
    }

    public get logRiegoId(): number {
        return this._logRiegoId;
    }
    public set logRiegoId(value: number) {
        this._logRiegoId = value;
    }

    public get fecha(): Date {
        return this._fecha;
    }
    public set fecha(fecha: Date) {
        this._fecha = fecha;
    }

    public get apertura(): number {
        return this._apertura;
    }
    public set apertura(state: number) {
        this._apertura = state;
    }
    
    public get electrovalvulaId(): number {
        return this._electrovalvulaId;
    }
    public set electrovalvulaId(value: number) {
        this._electrovalvulaId = value;
    }
}
