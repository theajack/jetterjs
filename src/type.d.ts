/*
 * @Author: tackchen
 * @Date: 2021-04-20 15:07:08
 * @LastEditors: tackchen
 * @LastEditTime: 2021-04-20 15:43:08
 * @FilePath: \jetterjs\src\type.d.ts
 * @Description: Coding something
 */

export interface IJson<T=any> {
    [prop: string]: T;
}


declare module global {
    // 太多了暂时没时间加
    interface Window {

    }
    interface Array {

    }
    interface String {

    }
    interface HTMLCollection {

    }
    interface NodeList {

    }
    interface HTMLElement {

    }
}

declare type TJDom = HTMLElement | NodeList | HTMLCollection;

declare type IJFunc = Function | string;

declare interface IJ {
    ready(e: Function): void;
    onload(e: Function): void;
    height(): number;
    width(): number;
    cls(name: string): TJDom;
    id(name: string): TJDom;
    tag(name: string): TJDom;
    attr(name: string): TJDom;
    name(name: string): TJDom;
    select(name: string): TJDom;
    body(): HTMLBodyElement;
    copy(str: string | number): boolean;
    clone(target: any): any;
    each(
        target: any, 
        func: (item: any, index: number, arg?: any) => void, 
        arg?: any
    ): any;
    even(a: any, b: any): boolean;
    toString(a: any): string;
    type(target: any): 
        "string" | "number" | "boolean" | "function" |
        "null" | "json" | "array" | "htmlcollection" |
        "nodelist" | "formdata" | "error" |  "date" |
        "formdata" |  "htmlelement" | "object";
    ct(a: string): HTMLElement;
    scroll(offset: number, callback?: IJFunc, interval?: number): number;
    scrollTo(offset: number, callback?: IJFunc, interval?: number): void;
    ajax(a: any): any;
    load(a: any): any;
    jsonp(options: any): void;
    cookie(a: any, b: any, d: any, e: any, ...args: any[]): string;
    storage(a: any, b: any): any;
    initTip(): void;
    html5(): boolean;
    language: string,
    lang(l: string): void;
    checkArg(a: any, b: any): any;
    toFunc(a: any): any;
    jump(a: any): void;
    open(a: any): void;
    back(): void;
    forward(): void;
    reload(force?: boolean): void;
    urlParam(): IJson;
    sign(n: any): 1 | -1;
    random(a: any, b: any): any;
    isMobile(): boolean;
      
    delay(call: any, time: any): number;
    clearDelay(timer: number): number;
    repeat(call: any, time: any): number;
    clearRepeat(timer: number): number;
      
    jetForm(a: any): any;
    jetName(a: any, b: any): any;
    useDefaultStyle: boolean;
    useShowForValid: boolean;
    showInPlaceHolder: boolean;
    noteStyleStr: 'color' | 'simple' | 'center';
    get(a: any, b: any, c: any): IJson;
    set(a: any, b: any, c: any, d: any): void;
    clear(a: any, b: any): void
    addValid(a: any, b: any): void;
    initValid(b: any): void;
    clearValid(a: any): void;
    resetValid(a: any): void;
    validate(a: any, b: any, c: any): void;
    validText(a: any, b: any): void;
    banDefault(): void;
    useDefault(): void;
    banValidShow(): void;
    useValidShow(): void;
    banPlaceHolder(): void;
    usePlaceHolder(): void;
    show(a: any, b: any, c: any, d: any, e: any): void;
    showWait(a: any, b: any): void;
    close(): void;
    noteStyle(a: any): void;
    validInput(b: any, a: any): string;
    addValidValue(a: any): void;
    onOnePass(a: any): void;
    onOneFail(a: any): void;
    confirm(a: any, b: any, c: any): void;
    confirmClose(): void;
    confirmOk(): void;
    confirmCancel(): void;
    input(c: any, d: any, e: any): void;
    inputClose(): void;
    inputOk(): void;
    inputCancel(): void;
    
}