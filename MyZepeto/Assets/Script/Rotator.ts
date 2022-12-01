import { Vector3 } from 'UnityEngine';
import { ZepetoScriptBehaviour } from 'ZEPETO.Script'

export default class Rotator extends ZepetoScriptBehaviour {

    public rotator: Vector3;

    Start() {    
        //console.log("Hello ZEPETO Script");
    }

    Update() {
        this.transform.Rotate(this.rotator.x, this.rotator.y, this.rotator.z);
    }

}