/*
 * @Author: tackchen
 * @Date: 2021-04-20 11:05:14
 * @LastEditors: tackchen
 * @LastEditTime: 2021-04-20 11:57:09
 * @FilePath: \jetterjs\src\string.js
 * @Description: Coding something
 */
import J from './index';

String.prototype.reverse = function () {
    let s = '';
    for (let i = this.length - 1; i >= 0; i--) {
        s += this[i];
    }
    return s;
};
String.prototype.has = function (s) {
    if (J.type(s) == 'string') {
        if (this.includes == undefined) {
            return (this.indexOf(s) != -1);
        } else {
            return this.includes(s);
        }
    } else {
        if (this.match(s) == null) {
            return false;
        } else {
            return true;
        }
    }
};
String.prototype.timeOf = function (s) {
    if (J.type(s) == 'string') {
        return this.split(s).length - 1;
    } else {
        const a = this.match(s);
        if (a == null) {
            return 0;
        } else {
            return a.length;
        }
    }
};
String.prototype.replaceAll = function (a, b) {
    if (J.type(b) == 'array') {
        if (J.type(a) == 'string') {
            const s = this.split(a);
            let d = s[0];
            s.each(function (a, i) {
                if (i > 0) {
                    d += (b[i - 1] + a);
                }
            });
            return d;
        } else {
            let e = '';
            let f = this;
            const g = this.match(a);
            if (g != null) {
                g.each(function (a, i) {
                    e += (f.substring(0, f.indexOf(a)) + b[i]);
                    f = f.substring(f.indexOf(a) + a.length);
                });
                e += f;
                return e;
            }
            return this;
        }
    } else {
        if (J.type(a) == 'string') {
            return this.replace(new RegExp(a, 'g'), b);
        } else {
            return this.replace(a, b);
        }
    }
};
String.prototype.indexsOf = function (a, i) {
    const b = this.split(a);
    let c = null;
    if (J.type(a) != 'string') {
        c = this.match(a);
    }
    if (b.length <= 2) {
        if (this.indexOf(a) == -1) {
            return [];
        } else {
            return [this.indexOf(a)];
        }
    } else {
        const d = [];
        let f = 0;
        b.each(function (s, n) {
            if (n > 0) {
                d[d.length] = f;
                if (c != null) {
                    f += c[n - 1].length;
                } else {
                    f += a.length;
                }
            }
            f += s.length;
        });
        if (i == undefined) {
            return d;
        } else {
            if (i > d.length - 1) return d[d.length - 1];
            return d[i];
        }
    }
};
String.prototype.insert = function (a, i) {
    return this.substring(0, i) + a + this.substring(i);
};
  