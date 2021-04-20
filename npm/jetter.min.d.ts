/*
 * @Author: tackchen
 * @Date: 2021-04-20 12:04:42
 * @LastEditors: tackchen
 * @LastEditTime: 2021-04-20 12:49:45
 * @FilePath: \jetterjs\npm\jetter.min.d.ts
 * @Description: Coding something
 */

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
declare interface IJ {
    ready(e: Function): void;
    onload(e: Function): void;
    height(): number;
    width(): number;
    cls(a: any): any;
    id(a: any): any;
    tag(a: any): any;
    attr(a: any): any;
    name(a: any): any;
    select(a: any): any;
    body(): HTMLBodyElement;
    copy(b: any): boolean
    clone(b: any): boolean;
    // 太多了暂时没时间加
}

declare const J: IJ;

export default J;