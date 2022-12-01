// 이벤트
// 서로 다른 오브젝트 간의 인자를 전달하거나, 
// 특정 조건이 완료되었을 때 메시지를 전달하기 위한 용도로 사용됨.

import { ZepetoScriptBehaviour } from 'ZEPETO.Script'
import { UnityEvent$1 } from "UnityEngine.Events";
import { Input } from "UnityEngine";

export default class Event extends ZepetoScriptBehaviour {
    private mEventInt: UnityEvent$1<int>;
    private countNum: number;

    Start() {
        this.mEventInt = new UnityEvent$1<int>();
        this.mEventInt.AddListener((num) => this.Count(num));
        this.countNum = 0;
    }

    Update() {
        if (Input.anyKeyDown && this.mEventInt != null) {
            this.mEventInt.Invoke(this.countNum);

            ++this.countNum;
            if (this.countNum > 100)
                this.countNum = 0;
        }
    }

    Count(num) {
        console.log(`Count : ${num}`);
    }
}