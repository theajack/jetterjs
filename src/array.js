/*
 * @Author: tackchen
 * @Date: 2021-04-20 11:05:10
 * @LastEditors: tackchen
 * @LastEditTime: 2021-04-20 11:54:43
 * @FilePath: \jetterjs\src\array.js
 * @Description: Coding something
 */
import J from './index';
import {
    _compareValue, _even, _clone,
} from './util';

Array.prototype.each = function (b, d) {
    for (let a = 0; a < this.length; a++) {
        b(this[a], a, d);
    }
    return this;
};
Array.prototype.empty = function () {
    this.length = 0;
    return this;
};
  
Array.prototype.remove = function (b, order) {
    const index = this.indexOf(b);
    if (order == false) {
        this[index] = this[this.length--];
    } else {
        this.removeByIndex(index);
    }
    return this;
};
Array.prototype.removeByIndex = function (b) {
    this.splice(b, 1);
    return this;
};
Array.prototype.insert = function (b, i) {
    this.splice(i, 0, b);
    return this;
};
Array.prototype.insertArray = function (arr, i) {
    const index = i;
    const n = arr.length;
    for (let a = this.length - 1; a >= index; a--) {
        this[a + n] = this[a];
    }
    for (let j = 0; j < n; j++) {
        this[index + j] = arr[j];
    }
    return this;
};
Array.prototype.append = function () {
    Array.prototype.push.apply(this, arguments);
    return this;
};
Array.prototype.appendArray = function (arr) {
    Array.prototype.push.apply(this, arr);
    return this;
};
Array.prototype.prepend = function (b) {
    if (arguments.length == 1) {
        return this.insert(b, 0);
    } else {
        return this.insertArray(arguments, 0);
    }
};
Array.prototype.prependArray = function (b) {
    return this.insertArray(b, 0);
};
Array.prototype.sort = function (a) {
    const b = this.length;
    let c, current;
    for (let i = 1; i < b; i++) {
        c = i - 1;
        current = this[i];
        while (c >= 0 && this[c] > current) {
            this[c + 1] = this[c];
            c--;
        }
        this[c + 1] = current;
    }
    if (a == false) {
        this.reverse();
    }
    return this;
};
Array.prototype.sortByAttr = function (a, type, b) {
    const c = this.length;
    let d, current;
    for (let i = 1; i < c; i++) {
        d = i - 1;
        current = this[i];
        while (d >= 0 && _compareValue(this[d][a], current[a], type) ) {
            this[d + 1] = this[d];
            d--;
        }
        this[d + 1] = current;
    }
    if (type == false || b == false) {
        this.reverse();
    }
    return this;
};

Array.prototype.even = function (a) {
    return _even(this, a);
};
Array.prototype.clone = function () {
    const a = new Array();
    this.each(function (item) {
        a.append(_clone(item));
    });
    return a;
};
function _checkEmptyArray (arr, thr) {
    if (arr.length == 0) {
        if (thr != false) {
            throw new Error('空数组不支持该方法');
        }
        return false;
    } else {
        return true;
    }
};
Array.prototype.sum = function (a, b) {
    if (_checkEmptyArray(this)) {
        if (a != undefined) {
            return this.slice(a, b).sum();
        } else {
            const con = J.type(this[0]);
            if (con == 'number' || con == 'string' || con == 'array') {
                let sum;
                if (con == 'number' || (con == 'array' && J.type(this[0][0]) == 'number')) {
                    sum = 0;
                } else if (con == 'string' || (con == 'array' && J.type(this[0][0]) == 'string')) {
                    sum = '';
                } else {
                    throw new Error('sum方法不支持除Number,String,Array以外的类型');
                }
                this.each(function (a) {
                    if (J.type(a) == 'array') {
                        a.each(function (b) {
                            sum += b;
                        });
                    } else {
                        sum += a;
                    }
                });
                return sum;
            } else {
                throw new Error('sum方法不支持除Number,String,Array以外的类型');
            }
        }
    } else {
        return 0;
    }
};
Array.prototype.avg = function () {
    if (_checkEmptyArray(this)) {
        const con = J.type(this[0]);
        if (con == 'number' || con == 'string') {
            return this.sum() / this.length;
        } else {
            throw new Error('ave方法不支持除Number,String以外的类型');
        }
    }
};
Array.prototype.max = function (attr) {
    if (_checkEmptyArray(this)) {
        const type = J.type(this[0]);
        if (type == 'number') {
            return Math.max.apply(null, this);
        } else if (type == 'string' || type == 'array') {
            return J.clone(this).sortByAttr('length').last();
        } else if (type == 'date') {
            return J.clone(this).sort().last();
        } else if (type == 'json' || type == 'object') {
            if (attr == undefined) {
                throw new Error('Object类型数组参数不可为空');
            } else {
                return J.clone(this).sortByAttr(attr, type).last();
            }
        }
        throw new Error('不支持的类型');
    }
};
Array.prototype.min = function (attr) {
    if (_checkEmptyArray(this)) {
        const type = J.type(this[0]);
        if (type == 'number') {
            return Math.min.apply(null, this);
        } else if (type == 'string' || type == 'array') {
            return J.clone(this).sortByAttr('length').first();
        } else if (type == 'date') {
            return J.clone(this).sort().first();
        } else if (type == 'json' || type == 'object') {
            if (attr == undefined) {
                throw new Error('Object类型数组参数不可为空');
            } else {
                return J.clone(this).sortByAttr(attr, type).first();
            }
        }
        throw new Error('不支持的类型');
    }
};
Array.prototype.reverse = function () {
    let t;
    const n = Math.floor(this.length / 2);
    for (let i = 0; i < n; i++) {
        t = this[i];
        this[i] = this[this.length - 1 - i];
        this[this.length - 1 - i] = t;
    };
    return this;
};
Array.prototype.has = function (a) {
    if (_checkEmptyArray(this, false)) {
        const type = J.type(this[0]);
        if (type == 'number' || type == 'string') {
            return (this.indexOf(a) > -1);
        } else {
            for (let i = 0; i < this.length; i++) {
                if (a == this[i]) {
                    return true;
                }
                return false;
            }
        }
    } else {
        return false;
    }
};
Array.prototype.indexsOf = function (a) {
    const indexs = [];
    if (_checkEmptyArray(this, false)) {
        for (let i = 0; i < this.length; i++) {
            if (a == this[i]) {
                indexs.push(i);
            }
        }
    }
    return indexs;
};
Array.prototype.timeOf = function (a) {
    let sum = 0;
    this.each(function (item) {
        if (item == a) {
            sum++;
        }
    });
    return sum;
};
Array.prototype.group = function (n) {
    const a = [];
    const x = Math.ceil(this.length / n);
    for (let i = 0; i < x; i++) {
        const b = [];
        for (let j = 0; j < n; j++) {
            if (i * n + j == this.length) {
                break;
            } else {
                b.push(this[i * n + j]);
            }
        }
        a.push(b);
    }
    return a;
};