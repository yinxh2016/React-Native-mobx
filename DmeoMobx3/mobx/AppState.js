import { action, observable, useStrict } from "mobx";

class AppState {
    @observable timer = 101;
    addTimers() { this.timer += 1 }
    resetTimer() { this.timer = 0; }
}
export default new AppState()


