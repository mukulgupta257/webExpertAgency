import { makeAutoObservable } from "mobx";

class global {
  activePage = "Home";
  activeBar = true;
  constructor() {
    makeAutoObservable(this);
  }
  setActivePage = (data) => (this.activePage = data);
  setActiveBar = (data) => (this.activeBar = data);
}

export default new global();
