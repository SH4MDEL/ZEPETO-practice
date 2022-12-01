// �̺�Ʈ
// ���� �ٸ� ������Ʈ ���� ���ڸ� �����ϰų�, 
// Ư�� ������ �Ϸ�Ǿ��� �� �޽����� �����ϱ� ���� �뵵�� ����.

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