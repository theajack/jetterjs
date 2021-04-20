/*
 * @Author: tackchen
 * @Date: 2021-04-20 11:19:26
 * @LastEditors: tackchen
 * @LastEditTime: 2021-04-20 15:18:48
 * @FilePath: \jetterjs\src\form.js
 * @Description: Coding something
 */
import J from './index';
import {
    _checkFunction, _checkArg
} from './util';

// show confirm input 序列化 验证
let _t;
let _submitCall = null,
    _submitCancelCall = null,
    _onOnePass = null,
    _onOneFail = null;

export function _onOnePassCallback (c) {
    _onOnePass = _checkFunction(c);
}
export function _onOneFailCallback (c) {
    _onOneFail = _checkFunction(c);
}
  
export function _checkIsPw (a) {
    if (a.attr('jet-ispw') == 'true') {
        a.attr('type', 'password');
    }
};
  
export function _inputOk () {
    if (_submitCall != null) {
        J.id('jetInputContent').validate(function () {
            const a = _submitCall;
            _submitCall = null;
            a(J.id('jetInputContent').findClass('jet-input').val());
            _inputClose();
        });
    } else {
        J.id('jetInputContent').validate(function () {
            _inputClose();
        });
    }
};
  
export function _inputCancel () {
    if (_submitCancelCall != null) {
        const a = _submitCancelCall;
        _submitCancelCall = null;
        a();
    }
    _inputClose();
};

export function _input (c, d, e) {
    var f = J.id('jetInputContent');
    if (!f.exist()) {
        _addInputWrapper();
        f = J.id('jetInputContent');
    }
    f.empty();
    if (J.type(c) == 'string') {
        f.append(J.ct('div').txt(_checkArg(c, (this.language == 'CHINESE') ? '信息输入' : 'Input Information')));
        _appendOneInput((this.language == 'CHINESE') ? '请输入：' : 'Please input:', null, null, null);
    } else if (J.type(c) == 'array') {
        f.append(J.ct('div').txt(_checkArg(c[0], (this.language == 'CHINESE') ? '信息输入' : 'Input Information')));
        _appendOneInput(c[1], c[2], c[3], c[4]);
        if (c[3] != undefined) {
            this.initValid(f);
        }
    } else {
        f.append(J.ct('div').txt(_checkArg(c.title, (this.language == 'CHINESE') ? '信息输入' : 'Input Information')));
        var a = _checkArg(c.def, []);
        var b = _checkArg(c.valid, []);
        var p = _checkArg(c.placeholder, []);
        if (c.text == undefined || J.type(c.text) == 'string') {
            _appendOneInput(c.text, a, b, p);
        } else {
            for (var i = 0; i < c.text.length; i++) {
                _appendOneInput(_checkArg(c.text[i], (this.language == 'CHINESE') ? '请输入：' : 'Please input:'), a[i], b[i], p[i]);
            }
        }
        if (b.length > 0 || J.type(b) == 'string') {
            this.initValid(f);
        }
    }
    _submitCall = _checkFunction(d);
    _submitCancelCall = _checkFunction(e);
    setTimeout(function () {J.id('jetInputWrapper').css('top', '0');}, 0);
}
  
export function _inputClose () {
    if (J.id('jetInputWrapper').exist()) {
        J.id('jetInputWrapper').css('top', '-100%');
        setTimeout(function () {
            J.id('jetInputContent').empty();
        }, 300);
    }
};
  
export function _appendOneInput (a, b, c, p) {
    if (arguments.length == 1) {
        b = a.def;
        c = a.valid;
        p = a.placeholder;
        a = J.checkArg(a.text, (J.language == 'CHINESE') ? '请输入：' : 'Please input:');
    } else {
        a = J.checkArg(a, (J.language == 'CHINESE') ? '请输入：' : 'Please input:');
    }
    J.id('jetInputContent').append(J.ct('div').addClass('jet-input-text').txt(a));
    const d = J.ct('input.jet-input[type=text]');
    if (b != undefined) {
        d.val(b);
    }
    if (c != undefined) {
        d.attr('jet-valid', c);
    }
    if (p != undefined) {
        d.attr('placeholder', p);
    }
    J.id('jetInputContent').append(d);
};
export function _checkJetForm (a) {
    if (J.type(a) == 'string') {
        return J.select('[jet-form=' + a + ']');
    }
    return a;
};
export function _getElemsObj (d, b) {
    const a = d.select('[' + b + ']');
    const c = {};
    a.each(function (e) {
        c[e.attr(b)] = _getGetValue(e);
    });
    return c;
};
export function _getElemsFormData (d, b) {
    const a = d.select('[' + b + ']');
    const c = new FormData();
    a.each(function (e) {
        c.append(e.attr(b), _getGetValue(e));
    });
    return c;
};
export function _getGetValue (e) {
    let value = '';
    let type = e.attr('jet-get');
    let name = '';
    if (type != undefined && type.has(':')) {
        name = type.split(':')[1];
        type = type.split(':')[0];
    }
    switch (type) {
        case 'allHtml':value = e.allHtml(); break;
        case 'html':value = e.html(); break;
        case 'class':value = e.attr('class'); break;
        case 'value':value = e.val(); break;
        case 'text':value = e.txt(); break;
        case 'attr':value = e.attr(name); break;
        case 'css':value = e.css(name); break;
        default:value = _getContentForGet(e); break;
    }
    return value;
};
export function _getContentForGet (b) {
    if (b.hasClass('jet-unpass')) {
        return b.attr('jet-value');
    } else {
        const a = b.content();
        return a;
    }
};
// text value html class addClass attr:name css:name
export function _setObjVal (c, a, b, f) {
    c.select('[' + a + ']').each(function (d) {
        const e = d.attr(a);
        let type = '';
        let name = '';
        if (d.hasAttr('jet-set')) {
            type = d.attr('jet-set');
            if (type.has(':')) {
                name = type.split(':')[1];
                type = type.split(':')[0];
            }
        }
        const data = _getObjOrFormData(b, e);
        _checkSetObjValFun(d, data, type, name);
        if (f != undefined) {
            f(d, data, e);
        }
    });
      
};
export function _getObjOrFormData (d, a) {
    if (J.type(d) == 'json' || J.type(d) == 'object') {
        return d[a];
    } else if (J.type(d) == 'formdata') {
        try {
            return d.get(a);
        } catch (e) {
            throw new Error('浏览器不支持formdata.get');
        }
    } else {
        throw new Error('该方法不支持Object和FormData以外的数据类型');
    }
};
export function _checkSetObjValFun (elem, val, type, name) {
    switch (type) {
        case 'text':elem.txt(val); break;
        case 'value':elem.val(val); break;
        case 'allHtml':elem.allHtml(val); break;
        case 'html':elem.html(val); break;
        case 'attr':elem.attr(name, val); break;
        case 'class':elem.className = val; break;
        case 'addClass':elem.addClass(val); break;
        case 'css':elem.css(name, val); break;
        default:elem.content(val); break;
    }
};
    
export function _validInput (b, a) {
    const v = b.attr('jet-valid');
    let c = '';
    if (v != null) {
        if (v.indexOf('lengthOfAny') != -1) {
            const e = v.substring(12, v.length - 1).split(',');
            const f = 'lengthOfAny';
            const d = b.content();
            if (d.length >= parseInt(e[0]) && d.length <= parseInt(e[1])) {
                c = 'true';
            } else {
                c = _getValidText(f, e);
            }
        } else {
            c = _checkValue(v, b.content());
        }
        if (c == 'true') {
            if (J.useDefaultStyle) {
                b.removeClass('jet-unpass').attr('jet-value', '');
                _checkIsPw(b);
            }
            if (_onOnePass != undefined) _onOnePass(b, c);
        } else {
            if (J.useDefaultStyle) {
                b.attr('jet-value', b.content()).content(c).addClass('jet-unpass');
                if (b.attr('type') == 'password') {
                    b.attr('jet-ispw', 'true').attr('type', 'text');
                }
            }
            if (_onOneFail != undefined) _onOneFail(b, c);
            if (J.useShowForValid && a != false) {
                J.show(c, 'error');
            }
        }
    }
    return c;
};
  
export function _validInputOfForm (b) {
    if (b.hasClass('jet-unpass')) {
        if (_onOneFail != undefined) {
            _onOneFail(b, b.val());
        }
        return b.val();
    } else {
        return _validInput(b, false);
    }
};
  
export function _addValidValue (a) {
    if (a.hasClass('jet-unpass')) {
        a.content(a.attr('jet-value'));
        _checkIsPw(a);
    }
};
  
export function _validateForm (g, f, c) {
    const e = [];
    let b = true;
    if (c == undefined) {
        b = false;
    }
    let d = true;
    const a = g.select('[jet-valid]');
    a.each(function (j) {
        const h = _validInputOfForm(j);
        if (h != 'true') {
            d = false;
            if (b) {
                e[e.length] = {
                    'obj': j,
                    'error': h
                };
            }
        }
    });
    if (!d) {
        if (b) {
            _checkFunction(c)(e, g);
        }
        const i = (J.language == 'CHINESE') ? '输入有误，请按提示改正。' : 'Values is not expected';
        if (J.useShowForValid) {
            J.show(i, 'error');
        } else {
            // alert(i)
        }
    } else {
        if (f != undefined) {
            _checkFunction(f)(g.get(), g);
        }
    }
};
  
export function _getElemsStrs (d, b) {
    const a = d.select('[' + b + ']');
    const c = [];
    a.each(function (e, i) {
        c[i] = [e.attr(b), _getContentForGet(e)];
    });
    return c;
};
export const validTextCn = {
    nul: '*可以为空',
    notnull: '*必填',
    date: '*格式为XXXX-XX-XX',
    email: '*格式为XXX@XX.com',
    number: '*须为纯数字',
    idcard: '*17位数字加一位数字或X',
    length: '*输入长度为',
    url: '*请输入正确的网址',
    decimal: '*请正确的小数',
    lengthOfAny: '*输入长度为',
    phone: '*须为11位纯数字',
    letterStart: '*字母开头且长度为',
    range: '*数字不在范围内',
    express: '*自定义错误',
};
export const validTextEn = {
    nul: '*null is allowed',
    notnull: '*Required',
    date: '*format:XXXX-XX-XX',
    email: '*format:XXX@XX.com',
    number: '*expect a number',
    idcard: '*17 numbers plus a number or X',
    length: '*length between',
    url: '*Expect an url name',
    decimal: '*Expect a float number',
    lengthOfAny: '*length between',
    phone: '*must be 11 digits',
    letterStart: '*letter start and length',
    range: '*not in range',
    express: '*wrong express',
};
  
export function _getValueText (b) {
    let c = 0;
    if (b.indexOf('range') != -1) {
        c = 6;
    } else {
        if (b.indexOf('letterStart') != -1) {
            c = 12;
        } else if (b.indexOf('length') != -1) {
            c = 7;
        } else if (b.has('number') && b != 'number') {
            c = 7;
        }
    }
    if (c != 0) {
        const a = b.substring(c, b.length - 1).split(',');
        if (a[1] == undefined) {
            a[1] = a[0];
        }
        return _getValidText(b.substring(0, c - 1), a);
    } else {
        return _getValidText(b);
    }
};
  
export function _getValidText (a, b) {
    if (J.language == 'CHINESE') {
        if (b == undefined) {
            return validTextCn[a];
        } else {
            let c = '';
            if (a.has('number')) {
                c = ' 且长度为';
            }
            return validTextCn[a] + c + '[' + b[0] + ',' + b[1] + ']';
        }
    } else {
        if (b == undefined) {
            return validTextEn[a];
        } else {
            let c = '';
            if (a.has('number')) {
                c = ' and length between';
            }
            return validTextEn[a] + c + '[' + b[0] + ',' + b[1] + ']';
        }
    }
};
  
export function _getRegExp (f) {
    let d = -1;
    let c = -1;
    if (f.indexOf('length') != -1) {
        const e = f.substring(7, f.length - 1).split(',');
        f = 'length';
        d = e[0];
        if (e[1] == undefined) {
            e[1] = e[0];
        }
        c = e[1];
    } else if (f.indexOf('letterStart') != -1) {
        const e = f.substring(12, f.length - 1).split(',');
        f = 'letterStart';
        d = e[0];
        if (e[1] == undefined) {
            e[1] = e[0];
        }
        c = e[1];
    } else if (f.has('number') && f != 'number') {
        const e = f.substring(7, f.length - 1).split(',');
        f = 'number';
        d = e[0];
        if (e[1] == undefined) {
            e[1] = e[0];
        }
        c = e[1];
    } else if (f.has('express')) {
        d = f.substring(8, f.length - 1);
        f = 'express';
    }
    switch (f) {
        case 'null':
            return /^\S{0}$/;
        case 'date':
            return /^(([12]\d{3}-((0[1-9])|(1[0-2]))-((0[1-9])|([1-2]\d)|3(0|1))))$/;
        case 'email':
            return /^((\w*@\w*.com))$/;
        case 'number':
            if (d >= 0) {
                return new RegExp('^-?(\\d{' + d + ',' + c + '})$');
            } else {
                return /^-?(\d+)$/;
            }
        case 'float':
            return /^-?[1-9]\d*.\d*|0.\d*[1-9]\d*$/;
        case 'idcard':
            return /^(\d{17}(X|\d))$/;
        case 'url':
            return /^((https|http|ftp|rtsp|mms)?:\/\/)[^\s]+$/;
        case 'phone':
            return /^([1]\d{10})$/;
        case 'letterStart':
            return new RegExp('^([a-zA-Z]([a-zA-Z\\d]){' + (parseInt(d) - 1) + ',' + (parseInt(c) - 1) + '})$');
        case 'length':
            return new RegExp('^(([a-zA-Z\\d]){' + d + ',' + c + '})$');
        case 'express':
            return new RegExp(d);
        default:
            return 'null';
    }
};
  
export function _checkValue (a, e) {
    if (a.indexOf('notnull') != -1) {
        if (e.length == 0) {
            return _getValueText('notnull');
        }
    } else if (a.indexOf('null') != -1) {
        const c = a.split(' ');
        const b = (c[0] == 'null') ? c[1] : c[0];
        if (b.indexOf('range') != -1) {
            const d = _testRange(a, e);
            if (d != 'true' && e != '') {
                return d;
            }
        }
        if (!_getRegExp(b).test(e) && e != '') {
            return _getValueText(b);
        }
    } else {
        if (a.indexOf('range') != -1) {
            const d = _testRange(a, e);
            if (d != 'true') {
                return d;
            }
        } else {
            if (!_getRegExp(a).test(e)) {
                return _getValueText(a);
            }
        }
    }
    return 'true';
};
  
export function _testRange (b, c) {
    const a = b.substring(6, b.length - 1).split(',');
    b = 'number';
    if (_getRegExp(b).test(c)) {
        if (parseInt(c) < parseInt(a[0]) || parseInt(c) > parseInt(a[1])) {
            return _getValidText('range', a);
        }
    } else {
        return _getValidText('number');
    }
    return 'true';
};
  
  
export function _mesShow (a, b, c, d, e) {// text type time call needClose
    clearTimeout(_t);
    let f = J.id('jetNoteWrapper');
    if (!f.exist()) {
        _addNoteWrapper();
        f = J.id('jetNoteWrapper');
    }
    const style = J.noteStyleStr;
    if (style != 'simple') {
        const g = f.findClass('jet-icon-circle').child();
        if (!b) {
            g[0].className = 'jet-icon-part-ok1 jet-rotate-45';
            g[1].className = 'jet-icon-part-ok2 jet-rotate-45';
            b = 'success';
        } else {
            switch (b) {
                case 'success':
                    g[0].className = 'jet-icon-part-ok1 jet-rotate-45';
                    g[1].className = 'jet-icon-part-ok2 jet-rotate-45';
                    break;
                case 'warn':
                    g[0].className = 'jet-icon-part-bar jet-icon-part-warn1';
                    g[1].className = 'jet-icon-part-block jet-icon-part-warn2';
                    break;
                case 'error':
                    g[0].className = 'jet-icon-part-x jet-rotate-45';
                    g[1].className = 'jet-icon-part-x jet-rotate-045';
                    break;
                case 'info':
                    g[0].className = 'jet-icon-part-block jet-icon-part-info1';
                    g[1].className = 'jet-icon-part-bar jet-icon-part-info2';
                    break;
                default:
                    g[0].className = 'jet-icon-part-ok1 jet-rotate-45';
                    g[1].className = 'jet-icon-part-ok2 jet-rotate-45';
                    break;
            }
        }
        J.id('jetNoteContent').txt(a);
    } else {
        J.id('jetNoteWrapper').txt(a);
    }
    f.className = 'jet-' + b;
    setTimeout(function () {
        if (style == 'simple') {
            f.css('top', '0');
            setTimeout(function () {f.css('opacity', '1');}, 10);
        } else if (style == 'center') {
            f.css('top', '50%');
            setTimeout(function () {f.addClass('jet-jumpout');}, 10);
        } else {
            if (f.css('opacity') == '0') {
                f.css('opacity', '1');
            }
            f.css('top', '0');
        }
    }, 0);
    c = J.checkArg(c, 1500);
    if (J.type(c) == 'string') {
        switch (c) {
            case 'slower':
                c = 2500;
                break;
            case 'slow':
                c = 2000;
                break;
            case 'normal':
                c = 1500;
                break;
            case 'fast':
                c = 1000;
                break;
            case 'faster':
                c = 500;
                break;
            default:
                c = 1500;
        }
    }
    _t = setTimeout(function () {
        if (e != false) {
            _t = setTimeout(function () {
                _mesClose();
                if (d != undefined) {
                    d();
                }
            }, c);
        }
    }, 300);
};
    
export function _mesShowWait (a, b) {
    b = J.checkArg(b, 'info');
    _mesShow(a, b, 0, function () {}, false);
};
  
export function _mesClose () {
    if (J.id('jetNoteWrapper').exist()) {
        if (J.noteStyleStr == 'simple') {
            J.id('jetNoteWrapper').css('opacity', '0');
            setTimeout(function () {J.id('jetNoteWrapper').css('top', '-100%');}, 550);
        } else if (J.noteStyleStr == 'center') {
            J.id('jetNoteWrapper').addClass('jet-jumpoff');
        } else {
            J.id('jetNoteWrapper').css('top', '-100%');
        }
    }
};
    
let _okCall = null;
let _cancelCall = null;
  
export function _confirmShow (a, b, c) {
    let d = J.id('jetConfirmContent');
    if (!d.exist()) {
        _addConfirmWrapper();
        d = J.id('jetConfirmContent');
    }
    d.txt(a);
    setTimeout(function () {J.id('jetConfirmWrapper').css('top', '0');}, 0);
    _okCall = _checkFunction(b);
    _cancelCall = _checkFunction(c);
};
  
  
export function _confirmOk () {
    if (_okCall != null) {
        const a = _okCall;
        _okCall = null;
        a();
    }
    _confirmClose();
};
  
export function _confirmCancel () {
    if (_cancelCall != null) {
        const a = _cancelCall;
        _cancelCall = null;
        a();
    }
    _confirmClose();
};
  
export function _confirmClose () {
    if (J.id('jetConfirmWrapper').exist()) {
        J.id('jetConfirmWrapper').css('top', '-100%');
    }
};
  
export function _setNoteStyle (a) {
    if (a == undefined) {
        a = 'gray';
    }
    const w = J.id('jetNoteWrapper');
    const old = J.noteStyleStr;
    J.noteStyleStr = a;
    if (w != undefined) {
        if ((old != 'simple') && a == 'simple') {
            w.empty();
        } else if ((a != 'simple') && old == 'simple') {
            w.empty();
            w.append(_geneNoteContent());
        }
        w.attr('jet-style', a);
    }
    _mesClose();
};
export function _addNoteWrapper () {
    const d = J.ct('div').attr({
        'id': 'jetNoteWrapper',
        'jet-style': J.noteStyleStr,
        'onclick': 'J.close()'
    });
    if (J.noteStyleStr != 'simple') {
        d.append(_geneNoteContent());
    }
    J.body().append(d);
};
export function _geneNoteContent () {
    const a = J.ct('span').addClass('jet-icon-circle').append([J.ct('span'), J.ct('span')]);
    const b = J.ct('div').attr('id', 'jetNoteIcon').addClass('jet-icon-wrapper').append(a);
    const c = J.ct('div').attr('id', 'jetNoteContent');
    return [b, c];
}
export function _addConfirmWrapper () {
    const a = J.ct('span').addClass('jet-icon-circle jet-no-border').append([J.ct('span').addClass('jet-icon-part-ok1 jet-rotate-45'), J.ct('span').addClass('jet-icon-part-ok2 jet-rotate-45')]);
    const b = J.ct('span').addClass('jet-icon-circle jet-no-border').append([J.ct('span').addClass('jet-icon-part-x jet-rotate-45'), J.ct('span').addClass('jet-icon-part-x jet-rotate-045')]);
    const c = J.ct('div').attr({
        'id': 'jetConfirmOk',
        'onclick': 'J.confirmOk()'
    }).append(a);
    const d = J.ct('div').attr({
        'id': 'jetConfirmCancel',
        'onclick': 'J.confirmCancel()'
    }).append(b);
    const e = J.ct('div').attr('id', 'jetConfirmBtnWrapper').append([c, d]);
    const f = J.ct('div').attr('id', 'jetConfirmContent');
    const g = J.ct('div').attr('id', 'jetConfirmWrapper').append([f, e]);
    J.body().append(g);
};
  
export function _addInputWrapper () {
    const a = J.ct('span').addClass('jet-icon-circle jet-no-border').append([J.ct('span').addClass('jet-icon-part-ok1 jet-rotate-45'), J.ct('span').addClass('jet-icon-part-ok2 jet-rotate-45')]);
    const b = J.ct('span').addClass('jet-icon-circle jet-no-border').append([J.ct('span').addClass('jet-icon-part-x jet-rotate-45'), J.ct('span').addClass('jet-icon-part-x jet-rotate-045')]);
    const c = J.ct('div').attr({
        'id': 'jetInputOk',
        'onclick': 'J.inputOk()'
    }).append(a);
    const d = J.ct('div').attr({
        'id': 'jetInputCancel',
        'onclick': 'J.inputCancel()'
    }).append(b);
    const e = J.ct('div').attr('id', 'jetInputBtnWrapper').append([c, d]);
    const f = J.ct('div').attr('id', 'jetInputContent');
    const g = J.ct('div').attr('id', 'jetInputWrapper').append([f, e]);
    J.body().append(g);
};