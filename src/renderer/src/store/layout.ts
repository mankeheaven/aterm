
import { makeAutoObservable, observable } from "mobx";
import { createContext, useContext } from "react";
import { DockviewApi } from "dockview-react";
import { ActivityType } from "@renderer/components/icons/activity-icon";

const initSiderbarWidth = 200;

export class Layout {
  dockviewApiRef: DockviewApi | null = null;
  activity: ActivityType = "device";
  siderbarWidth: number = initSiderbarWidth;
  sftpTreeDirWidth = 200;
  constructor() {
    makeAutoObservable(this, {
      dockviewApiRef: observable.ref,
    });
  }

  setDockviewApiRef(rtmRef: DockviewApi | null) {
    this.dockviewApiRef = rtmRef;
  }

  get regionsWidth() {
    return `calc(100vw - 58px - ${this.siderbarWidth}px)`;
  }

  changeActivity(data: ActivityType) {
    this.activity = data;
  }

  changeSiderbarResize(data: number) {
    this.siderbarWidth = data;
  }
  changeSftpTreeDirWidth(data: number) {
    this.sftpTreeDirWidth = data;
  }
  initSiderbarSize() {
    this.siderbarWidth = initSiderbarWidth;
  }
}

export const ActivityContext = createContext(new Layout());

export const useLayoutStore = () => {
  const layoutStore = useContext(ActivityContext);
  return {
    layoutStore,
  };
};
