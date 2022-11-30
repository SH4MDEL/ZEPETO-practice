import { ZepetoScriptBehaviour } from 'ZEPETO.Script'
import { Vector3, GameObject, Transform } from "UnityEngine"

export default class Properties extends ZepetoScriptBehaviour {

    public floatValue: float[];
    public gameOject: GameObject;
    public transformValue: Transform;

    // Inspector 상에 노출하고 싶지 않은 Property
    public vectorValue: Vector3;

    // Serialize가 불필요한 public Property
    @NonSerialized()
    public strValue: string;

    // Inspector 상에 노출하고 싶지 않은 Property
    @HideInInspector()
    public strValue2: string;

    // Serialize가 필요한 private Property
    @SerializeField()
    private strValue3: string;

    // Property 위에 헤더 추가
    @Header("Header Title")
    public stringProperty: string;

    // Property 간 간격 추가
    @Space(10)
    public transformProperty: Transform;

    // Property에 마우스가 위치하는 경우 나타나는 툴팁 추가
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