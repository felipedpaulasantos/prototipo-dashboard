export interface TabberItem {
   name: string;
   icon: string;
   state?: TabberItemState | string;
}

export enum TabberItemState {
   SUCCESS = "success",
   WARNING = "warning",
   ERROR = "error"
}
