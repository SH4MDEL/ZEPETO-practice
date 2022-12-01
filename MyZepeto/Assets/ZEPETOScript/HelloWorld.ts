import { ZepetoScriptBehaviour } from 'ZEPETO.Script'

export default class HelloWorld extends ZepetoScriptBehaviour {

    Start() {    
        console.log('log : Hello World');
        console.warn('warn : Hello World');
        console.error('error : Hello World');
    }

    Update() {
        this.transform.Rotate(3, 0, 0);
    }

}