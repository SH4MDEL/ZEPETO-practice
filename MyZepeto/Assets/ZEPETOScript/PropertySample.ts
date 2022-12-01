import { ZepetoScriptBehaviour } from 'ZEPETO.Script'
import { Vector3, GameObject, Transform } from "UnityEngine"

export default class Properties extends ZepetoScriptBehaviour {

    public floatValue: float[];
    public gameOject: GameObject;
    public transformValue: Transform;

    // Inspector �� �����ϰ� ���� ���� Property
    public vectorValue: Vector3;

    // Serialize�� ���ʿ��� public Property
    @NonSerialized()
    public strValue: string;

    // Inspector �� �����ϰ� ���� ���� Property
    @HideInInspector()
    public strValue2: string;

    // Serialize�� �ʿ��� private Property
    @SerializeField()
    private strValue3: string;

    // Property ���� ��� �߰�
    @Header("Header Title")
    public stringProperty: string;

    // Property �� ���� �߰�
    @Space(10)
    public transformProperty: Transform;

    // Property�� ���콺�� ��ġ�ϴ� ��� ��Ÿ���� ���� �߰�
    @Tooltip("This is Tooltip")
    public numberProperty: number;

    Start() {
        console.log('log : Hello World');
        console.warn('warn : Hello World');
        console.error('error : Hello World');
    }

    Update() {
        console.log('floatValue : ${this.floatValue}');
        console.log('strValue : ${this.strValue}');

        // rotate cube a
        var transform = this.gameOject.GetComponent<Transform>();
        transform.Rotate(this.vectorValue);

        // rotate cube b
        this.transformValue.Rotate(this.vectorValue);
    }
}