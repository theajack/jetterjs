/*
 * @Author: tackchen
 * @Date: 2021-04-20 11:04:54
 * @LastEditors: tackchen
 * @LastEditTime: 2021-04-20 11:59:50
 * @FilePath: \jetterjs\src\util.js
 * @Description: Coding something
 */
import J from './index';

export function _scrollTo (y, a, b) {
    document.body.scrollTo(y, null, b);
    document.documentElement.scrollTo(y, null, b);
    if (a != undefined) {
        b = _checkArg(b, 400);
        if (J.type(b) == 'number') {
            b = _checkAnimateSpeed(b);
        }
        setTimeout(_checkFunction(a), b);
    }
};
export function _scroll (a, b, c) {
    if (arguments.length != 0) {
        if (a != 0) {
            document.body.scroll(a, null, c);
            document.documentElement.scroll(a, null, c);
            if (b != undefined) {
                c = _checkArg(c, 400);
                if (J.type(c) == 'number') {
                    c = _checkAnimateSpeed(c);
                }
                setTimeout(_checkFunction(b), c);
            }
        }
    } else {
        if (document.body.scrollTop == 0) {
            return document.documentElement.scrollTop;
        } else {
            return document.body.scrollTop;
        }
    }
};
export function _ajax (a) {
    const b = {
        type: a.type || 'get',
        url: a.url || '',
        async: a.async || true,
        data: a.data || null,
        dataType: a.dataType || 'text',
        contentType: a.contentType || 'application/x-www-form-urlencoded',
        beforeSend: a.beforeSend || function () {},
        success: a.success || function () {},
        error: a.error || function () {},
        header: a.header || {}
    };
    b.beforeSend();
    let c;
    if (window.XMLHttpRequest) {
        c = new XMLHttpRequest();
    } else if (window.ActiveXObject) {
        c = window.ActiveXObject('Microsoft.XMLHTTP');
    }
    const _d = _convertData(b.data);
    const _t = b.type.toLowerCase();
    // ||_t=='delete'
    if ((_t == 'get') && _d !== '') {
        b.url = b.url + '?' + _d;
    }
    c.open(b.type, b.url, b.async);
    c.responseType = b.dataType;
    if (a.contentType !== null) {
        c.setRequestHeader('Content-Type', b.contentType);
    }
    for (const k in b.header) {
        c.setRequestHeader(k, b.header[k]);
    }
    if (b.type.toLowerCase() == 'get') {
        c.send();
    } else {
        c.send(_d);
    }
    c.onreadystatechange = function () {
        if (c.readyState == 4) {
            if (c.status == 200) {
                b.success(c.response || c.responseText);
            } else {
                b.error(c.response || c.responseText);// errInfo
            }
        }
    };
    return c;
};
export function _load (name, call, ecall) {
    J.ajax({
        url: name,
        async: true,
        success: function (result) {
            call(result);
        },
        error: function (err) {
            if (ecall != undefined)
                ecall(err);
            throw new Error('加载失败');
        },
    });
};
export function _jsonp (options) {
    if (!options.url) {
        throw new Error('Parameter error');
    } else {
        const callbackName = ('_jsonp' + Math.random()).replace('.', '').substring(0, 15);
        const head = J.tag('head');
        options.data[_checkArg(options.callback, 'callback')] = callbackName;
        const script = J.ct('script');
        head.append(script);
        window[callbackName] = function (a) {
            head.removeChild(script);
            clearTimeout(script.timer);
            window[callbackName] = null;
            if (J.type(a) == 'string') {
                a = JSON.parse(a);
            }
            options.success && options.success(a);
        };
        if (options.dataType != undefined && options.dataType.toUpperCase() == 'JSON') {
            script.attr('src', options.url + '?json=' + encodeURIComponent(JSON.stringify(options.data)));
        } else {
            script.attr('src', options.url + '?' + _formatParams(options.data));
        }
        options.time = _checkArg(options.time, 5000);
        script.timer = setTimeout(function () {
            window[callbackName] = null;
            head.removeChild(script);
            options.timeout && options.timeout({
                message: ( (!options.message) ? 'timeout' : options.message)
            });
        }, options.time);
    }
};
export function _storage (a, b) {
    if (typeof a === 'object' && a !== null) {
        for (const k in a) {
            _storage(k, a[k]);
        }
        return;
    }
    const store = localStorage;
    if (b === undefined) {
        if (a === undefined) {
            const obj = {};
            Object.keys(store).forEach(function (item) {
                obj[item] = store.getItem(item);
            });
            return obj;
        } else if (a === null) {
            Object.keys(store).forEach(function (item) {
                store.removeItem(item);
            });
        } else {
            const d = store.getItem(a);
            try {
                return JSON.parse(d);
            } catch (e) {
                if (d === parseFloat(d).toString()) {
                    return parseFloat(d);
                }
                return d;
            }
        }
    } else if (b === null) {
        store.removeItem(a);
    } else {
        if (typeof b === 'object') {
            store.setItem(a, JSON.stringify(b));
        } else {
            store.setItem(a, b);
        }
        return b;
    }
}
export function _cookie (a, b, d, e) {
    if (arguments.length == 1) {
        if (document.cookie.length > 0) {
            let f = document.cookie.indexOf(a + '=');
            if (f != -1) {
                f = f + a.length + 1;
                let g = document.cookie.indexOf(';', f);
                if (g == -1) g = document.cookie.length;
                return unescape(document.cookie.substring(f, g));
            }
        }
        return '';
    } else {
        if (b == null) {
            J.cookie(a, '', -1);
        } else {
            let c = a + '=' + escape(b);
            if (d != undefined) {
                const h = new Date();
                h.setDate(h.getDate() + d);
                c += ';expires=' + h.toGMTString();
            }
            if (e != undefined) {
                if (J.type(e) == 'boolean') {
                    if (e) {
                        c += (';path=/');
                    }
                } else {
                    c += (';path=' + e);
                }
            }
            document.cookie = c;
            return a + '=' + b;
        }
    }
};
export function _create (a) {
    if (a.has('#') || a.has('.') || a.has('[')) {
        let b = a.split('#');
        if (b.length > 1) {
            b = [b[0], a.substring(b[0].length + 1)];
        }
        let c;
        if (a.has('[')) {
            const l = b[b.length - 1];
            c = l.substring(0, l.indexOf('[')).split('.');
            c[c.length - 1] += l.substring(l.indexOf('['));
        } else {
            c = b[b.length - 1].split('.');
        }
        const d = c.length - 1;
        const f = c[d].split('[');
        for (let i = 0; i < f.length; i++) {
            c[d + i] = f[i];
        }
        const anum = f.length - 1;
        let cnum = c.length - anum - 1;
        let e;
        if (b.length == 1) {
            e = document.createElement(c[0]);
        } else {
            e = document.createElement(b[0]);
            e.attr('id', c[0]);
        }
        for (let i = 1; i < c.length; i++) {
            if (cnum > 0) {
                cnum--;
                e.addClass(c[i]);
            } else {
                const g = c[i].substring(0, c[i].length - 1);
                const index = g.indexOf('=');
                e.attr(g.substring(0, index), g.substring(index + 1));
            }
        }
        return e;
    } else {
        return document.createElement(a);
    }
};
export function _convertData (a) {
    if (a == undefined) {
        return '';
    }
    const t = J.type(a);
    if (t == 'json') {
        let b = '';
        for (const c in a) {
            if (typeof a[c] === 'object') {
                b += (c + '=' + encodeURIComponent(JSON.stringify(a[c])) + '&');
            } else {
                b += (c + '=' + encodeURIComponent(a[c]) + '&');
            }
        }
        b = b.substring(0, b.length - 1);
        return b;
    } else if (t == 'array') {
        return JSON.stringify(a);
    } else if (J.type(a) == 'formdata') {
        // if(a.entries!=undefined){
        //   let b = "";
        //   for (let i of a.entries()) {
        //     b += i[0] + "=" + i[1] + "&"
        //   }
        //   b = b.substring(0, b.length - 1);
        //   return b
        // }
        return a;
    } else {
        return a;
    }
}
export function _checkFunction (a) {
    if (a == undefined) {
        return function () {};
    } else {
        const b = J.type(a);
        if (b == 'function') {
            return a;
        } else if (b == 'string') {
            return new Function(a);
        } else {
            return function () {};
        }
    }
}
export function _formatParams (a) {
    const b = [];
    for (const c in a) {
        b.push(encodeURIComponent(c) + '=' + encodeURIComponent(a[c]));
    }
    return b.join('&');
}
export function _onload (a) {
    if (document.addEventListener) {
        document.addEventListener('DOMContentLoaded', function () {
            document.removeEventListener('DOMContentLoaded', arguments.callee, false);
            a();
        }, false);
    } else {
        if (document.attachEvent) {
            document.attachEvent('onreadystatechange', function () {
                if (document.readyState == 'complete') {
                    document.detachEvent('onreadystatechange', arguments.callee);
                    a();
                }
            });
        }
    }
}

export const _onready = (function () {
    let b = [];
    let d = false;

    function c (g) {
        if (d) {
            return;
        }
        if (g.type === 'onreadystatechange' && document.readyState !== 'complete') {
            return;
        }
        for (let f = 0; f < b.length; f++) {
            b[f].call(document);
        }
        d = true;
        b = null;
    }
    if (document.addEventListener) {
        document.addEventListener('DOMContentLoaded', c, false);
        document.addEventListener('readystatechange', c, false);
        window.addEventListener('load', c, false);
    } else {
        if (document.attachEvent) {
            document.attachEvent('onreadystatechange', c);
            window.attachEvent('onload', c);
        }
    }
    return function a (e) {
        if (d) {
            e.call(document);
        } else {
            b.push(e);
        }
    };
})();

export function _copy (b) {
    let a = J.id('jCopyInput');
    if (!a.exist()) {
        a = J.ct('input').attr({
            'type': 'text',
            'id': 'jCopyInput'
        });
        J.body().append(a);
    }
    a.val(b).select();
    if (document.execCommand('Copy')) {
        return true;
    } else {
        alert('Copy is not supported in your browser');
        return false;
    }
};


export function _compareValue (a, b, type) {
    if (_getSortValue(a, type) > _getSortValue(b, type)) {
        return true;
    }
    return false;
};
export function _getSortValue (value, type) {
    if (type == undefined || J.type(type) == 'boolean') {
        return value;
    } else {
        let res = null;
        switch (type) {
            case 'date':
                if (J.type(value) == 'date') {
                    res = value;
                } else {
                    let arr;
                    if (value.has('-')) {
                        arr = value.split('-');
                    } else {
                        arr = value.split('/');
                    }
                    res = new Date(arr[0], arr[1], arr[2]);
                } break;
            case 'length':res = value.length; break;
            case 'headLetter':res = value.toLowerCase().charCodeAt(0); break;
            case 'number':res = value; break;
            default:res = value; break;
        }
        return res;
    }
};
export function _each (obj, fun, arg) {
    const type = J.type(obj);
    if (type == 'json' || type == 'object') {
        let k = 0;
        for (const a in obj) {
            if (J.type(obj[a]) != 'function') {
                fun(obj[a], a, k, obj);
            }
            k++;
        }
    } else if (type == 'number' || type == 'boolean' || type == 'string' || type == 'function') {
        fun(obj, 0, arg);
    } else {
        obj.each(fun, arg);
    }
    return obj;
};
export function _type (obj) {
    if (arguments.length == 0) {
        throw new Error('This function need a argument');
    } else {
        let type = typeof obj;
        if (type == 'object') {
            if (obj === null) {
                return 'null';
            } else {
                const con = obj.constructor;
                switch (con) {
                    case Object:type = 'json'; break;
                    case Array:type = 'array'; break;
                    case HTMLCollection:type = 'htmlcollection'; break;
                    case NodeList:type = 'nodelist'; break;
                    case FormData:type = 'formdata'; break;
                    case Error:type = 'error'; break;
                    case Date:type = 'date'; break;
                    default:if (obj.nodeType === 1 && typeof obj.nodeName === 'string') {
                        type = 'htmlelement';
                    } else {
                        type = 'object';
                    };break;
                }
            }
        }
        return type;
    }
};
export function _clone (obj) {
    if (obj == undefined) {
        return null;
    }
    const type = J.type(obj);
    if (type == 'htmlelement' || type == 'array') {
        return obj.clone();
    } else if (type == 'json' || type == 'object') {
        const a = new Object();
        for (const attr in obj) {
            if (obj[attr] == null || obj[attr] == undefined) {
                a[attr] = obj[attr];
            } else if (J.type(obj[attr]) == 'array') {
                a[attr] = obj[attr].clone();
            } else if (J.type(obj[attr]) == 'json' || J.type(obj[attr]) == 'object') {
                a[attr] = _clone(obj[attr]);
            } else {
                a[attr] = obj[attr];
            }
        }
        return a;
    } else if (type == 'number' || type == 'boolean' || type == 'string' || type == 'function') {
        return obj;
    } else {
        return obj;
    }
};
export function _even (a, b) {
    if (a == undefined || b == undefined) {
        return (a == b);
    } else {
        const atype = J.type(a);
        const btype = J.type(b);
        if (atype != btype) {
            return false;
        } else {
            if (atype == 'json' || atype == 'object') {
                return (JSON.stringify(a) == JSON.stringify(b));
            } else if (atype == 'array' || atype == 'function') {
                return (a.toString() == b.toString());
            } else if (atype == 'htmlelement' || atype == 'htmlcollection' || atype == 'nodelist') {
                const arr = a.allHtml();
                if (J.type(arr) == 'array') {
                    return _even(arr, b.allHtml());
                }
                return (arr == b.allHtml());
            } else {
                return (a == b);
            }
        }
    }
};
export function _toString (a) {
    if (a == undefined) {
        return 'undefined';
    } else {
        const type = J.type(a);
        if (type == 'json' || type == 'object') {
            return JSON.stringify(a);
        } else if (type == 'string') {
            return '"' + a + '"';
        } else if (type == 'array') {
            let s = '[';
            for (let i = 0; i < a.length; i++) {
                s += _toString(a[i]) + ',';
                if (i == a.length - 1) {
                    s = s.substring(0, s.length - 1);
                }
            }
            return s + ']';
        } else if (type == 'htmlelement' || type == 'htmlcollection' || type == 'nodelist') {
            const arr = a.allHtml();
            if (J.type(arr) == 'array') {
                return arr.toString();
            }
            return arr;
        } else {
            return a.toString();
        }
    }
};
  
    
export function _getUrlParam () {
    let search = '';
    if (location.search != '') {
        search = location.search.substring(1);
    } else if (location.hash.has('?')) {
        search = location.hash.substring(location.hash.indexOf('?') + 1);
    }
    if (search == '') {
        return null;
    } else {
        const d = decodeURI(search).split('&');
        const a = {};
        for (let c = 0; c < d.length; c++) {
            const b = d[c].split('=');
            a[b[0]] = b[1];
        }
        return a;
    }
};
  
export function _jump (a) {
    try {
        window.location.href = (encodeURI(a));
    } catch (e) {
        throw new Error('跳转地址错误');
    }
};
export function _getRandomNum (a, b) {
    return (a + Math.round(Math.random() * (b - a)));
};
  
export function _sign (n) {
    if (n >= 0) {
        return 1;
    }
    return -1;
};
  
export function _checkArg (a, b) {
    return (a == undefined) ? b : a;
};
export function _isMobile () {
    if ((/AppleWebKit.*Mobile/i).test(navigator.userAgent)) {
        return true;
    } else {
        return false;
    }
};


export function _checkSelect (b) {
    if (b == null || b == undefined) {
        return J.ct('div').findClass('a');
    } else if (b.length == 1) {
        return b[0];
    }
    return b;
};

  
export function _checkCssValue (a, c, d) {
    if (d.has('-=') || d.has('+=')) {
        const e = _getCssNumberValue(d.substring(d.indexOf('=') + 1));
        if (d.has('-=')) {
            e[0] = -e[0];
        }
        let b;
        if (d.has('%')) {
            b = _getCssNumberValue(a.style[c]);
        } else {
            b = _getCssNumberValue(getComputedStyle(a)[c]);
        }
        return (e[0] + b[0]) + e[1];
    }
    return d;
};
  
export function _getCssNumberValue (a, b) {
    if (a == '' || a == undefined) {
        a = '0%';
    }
    if (b == undefined) {
        if (a.has('px')) {
            b = 'px';
        } else if (a.has('%')) {
            b = '%';
        } else if (a.has('em')) {
            b = 'em';
        } else {
            return [parseFloat(a), 'px'];
        }
    }
    return [parseFloat(a.substring(0, a.indexOf(b))), b];
};
  
export function _checkStyleName (b) {
    const a = b.split('-');
    if (a.length <= 1) {
        return b;
    } else {
        let c = a[0];
        for (let i = 1; i < a.length; i++) {
            c += (a[i].charAt(0).toUpperCase() + a[i].substring(1));
        }
        return c;
    }
};
export function _checkAnimateSpeed (a) {
    if (J.type(a) == 'string') {
        switch (a) {
            case 'slower':
                a = 1500;
                break;
            case 'slow':
                a = 1000;
                break;
            case 'normal':
                a = 400;
                break;
            case 'fast':
                a = 250;
                break;
            case 'faster':
                a = 100;
                break;
            default:
                a = 400;
        }
    }
    return a;
};