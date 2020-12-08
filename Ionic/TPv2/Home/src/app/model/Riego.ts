//logRiegoId
//apertura
//fecha
//electrovalvulaId

export class logRiego{
    private _logRiegoId: number;
    private _fecha: Date; 
    private _apertura: boolean;
    private _electrovalvulaId: number;

    constructor(logRiegoId,fecha,apertura, electrovalvulaId){
        this._logRiegoId=logRiegoId;
        this.fecha=fecha;
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
    public set fecha(value: Date) {
        this._fecha = value;
    }

    public get apertura(): boolean {
        return this._apertura;
    }
    public set apertura(state: boolean) {
        this._apertura = state;
    }
    
    public get electrovalvulaId(): number {
        return this._electrovalvulaId;
    }
    public set dispositivoId(value: number) {
        this._electrovalvulaId = value;
    }
}
