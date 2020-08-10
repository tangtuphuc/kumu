export interface StoreContext {
    commit: (type: string, payload?: any, options?: Object) => void;
    dispatch: (type: string, payload?: any, options?: Object) => void;
    state: any;
    getters: any;
}
