import { ZepetoScriptBehaviour } from 'ZEPETO.Script'
import { Collider, Collider2D, Collision, Collision2D } from 'UnityEngine';

export default class Sample_MonoBehaviourLifeCycle extends ZepetoScriptBehaviour {

    // Scene이 로드될 때 각 오브젝트에 대해 호출
    Awake() {
        console.log('Awake.');
    }
    OnEnable() {
        console.log('OnEnable.');
    }
    // 첫 프레임이나 오브젝트의 물리 업데이트 전에 호출(모든 Awake보다 늦게 호출)
    Start() {
        console.log('Start.');
    }

    // 매 프레임 호출
    Update() {
        console.log('OnUpdate.');
    }
    FixedUpdate() {
        console.log('FixedUpdate.');
    }
    LateUpdate() {
        console.log('LateUpdate.');
    }

    OnDisable() {
        console.log('OnDisable.');
    }
    OnDestroy() {
        console.log('OnDestroy.');
    }

    // 트리거(오브젝트 간 충돌시 물리적으로 반응하지 않고 감지만 하는 콜라이더)
    OnTriggerEnter(coll: Collider) {
        console.log(`OnTriggerEnter ${coll.gameObject.name}.`);
    }
    OnTriggerExit(coll: Collider) {
        console.log(`OnTriggerExit ${coll.gameObject.name}.`);
    }
    OnTriggerStay(coll: Collider) {
        console.log(`OnTriggerStay ${coll.gameObject.name}.`);
    }

    OnTriggerEnter2D(coll: Collider2D) {
        console.log(`OnTriggerEnter2D ${coll.gameObject.name}.`);
    }
    OnTriggerExit2D(coll: Collider2D) {
        console.log(`OnTriggerExit2D ${coll.gameObject.name}.`);
    }
    OnTriggerStay2D(coll: Collider2D) {
        console.log(`OnTriggerStay2D ${coll.gameObject.name}.`);
    }

    // 충돌이 발생 또는 유지되거나 분리될 때 호출
    OnCollisionEnter(coll: Collision) {
        console.log(`OnCollisionEnter ${coll.gameObject.name}.`);
    }
    OnCollisionExit(coll: Collision) {
        console.log(`OnCollisionExit ${coll.gameObject.name}.`);
    }
    OnCollisionStay(coll: Collision) {
        console.log(`OnCollisionStay ${coll.gameObject.name}.`);
    }

    OnCollisionEnter2D(coll: Collision2D) {
        console.log(`OnCollisionEnter2D ${coll.gameObject.name}.`);
    }
    OnCollisionExit2D(coll: Collision2D) {
        console.log(`OnCollisionExit2D ${coll.gameObject.name}.`);
    }
    OnCollisionStay2D(coll: Collision2D) {
        console.log(`OnCollisionStay2D ${coll.gameObject.name}.`);
    }

    OnGUI() {
        console.log('OnGUI.');
    }
    OnMouseDown() {
        console.log('OnMouseDown.');
    }
    OnMouseDrag() {
        console.log('OnMouseDrag.');
    }
    OnMouseUp() {
        console.log('OnMouseUp.');
    }
    OnMouseEnter() {
        console.log('OnMouseEnter.');
    }
    OnMouseExit() {
        console.log('OnMouseExit.');
    }
    OnMouseOver() {
        console.log('OnMouseOver.');
    }
    OnMouseUpAsButton() {
        console.log('OnMouseUpAsButton.');
    }

    OnAnimatorIK(layerIndex: number) {
        console.log(`OnAnimatorIK ${layerIndex}.`);
    }

    OnApplicationFocus() {
        console.log('OnApplicationFocus.');
    }
    OnApplicationPause() {
        console.log('OnApplicationPause.');
    }
    OnApplicationQuit() {
        console.log('OnApplicationQuit.');
    }

}