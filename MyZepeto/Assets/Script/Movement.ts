import { Vector2 } from 'UnityEngine';
import { ZepetoScriptBehaviour } from 'ZEPETO.Script'
import { Time } from 'UnityEngine';

export default class Movement extends ZepetoScriptBehaviour {

    public movingTime : number = 1;
    public movingRange: Vector2;
    public delta: number = 0;
    private movingFlag: boolean = true;

    Update() {
        this.delta += Time.deltaTime;
        if (this.delta >= this.movingTime) {
            this.delta = 0;
            this.movingFlag = !this.movingFlag;
            
        }

        if (this.movingFlag) {
            this.transform.Translate(this.movingRange.x * Time.deltaTime, this.movingRange.y * Time.deltaTime, 0);
            console.log(this.movingFlag);
        }
        else {
            this.transform.Translate(-1 * this.movingRange.x * Time.deltaTime, -1 * this.movingRange.y * Time.deltaTime, 0);
            console.log(this.movingFlag);
        }

    }

}