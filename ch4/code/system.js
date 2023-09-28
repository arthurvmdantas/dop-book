import { Library } from "./library.js";
import { libraryData } from "../data.js";

export class System {
  static addMember(member) {
    const previousState = SystemState.getInstance().get();
    const nextState = Library.addMember(member, previousState);
    SystemState.getInstance().commit(previousState, nextState);
  }
}

export class SystemState {
  static instance;

  static getInstance() {
    if (!SystemState.instance) {
      SystemState.instance = new SystemState();
    }
    return SystemState.instance;
  }

  constructor() {
    this.systemState = libraryData;
    this.previousSystemState = libraryData;
  }
  get() {
    return this.systemState;
  }

  commit(previousState, nextState) {
    const systemStateBeforeUpdate = this.systemState;

    // validation
    // if(!Consistency.validate(previousState, nextState)) {
    //   throw new Error("Invalid system state");
    // }

    this.systemState = nextState;
    this.previousSystemState = systemStateBeforeUpdate;
  }

  undo() {
    this.systemState = this.previousSystemState;
  }
}
