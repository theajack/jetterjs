/*
 * @Author: tackchen
 * @Date: 2021-04-20 11:05:04
 * @LastEditors: tackchen
 * @LastEditTime: 2021-04-20 11:55:29
 * @FilePath: \jetterjs\src\dom.js
 * @Description: Coding something
 */
import J from './index';
import {
    _checkCssValue,
    _checkSelect,
    _copy,
    _checkFunction,
    _checkArg,
    _checkAnimateSpeed
} from './util';
import {
    _getContentForGet,
    _validateForm,
} from './form';

HTMLElement.prototype.css = function (d, a) {
    if (a == undefined) {
        if (J.type(d) == 'json') {
            for (const b in d) {
                if (d[b].has('!important')) {
                    this.style.setProperty(b, _checkCssValue(this, b, d[b].substring(0, d[b].indexOf('!important'))), 'important');
                } else {
                    this.style.setProperty(b, _checkCssValue(this, b, d[b]));
                }
            }
            return this;
        } else {
            return getComputedStyle(this)[d];
        }
    } else {
        if (a.has('!important')) {
            this.style.setProperty(d, _checkCssValue(this, d, a.substring(0, a.indexOf('!important'))), 'important');
        } else {
            this.style.setProperty(d, _checkCssValue(this, d, a));
        }
        return this;
    }
};
HTMLCollection.prototype.css = NodeList.prototype.css = function (d, c) {
    if (c == undefined && J.type(d) != 'json') {
        const a = [];
        this.each(function (b) {
            a.append(b.css(d));
        });
        return a;
    } else {
        this.each(function (a) {
            a.css(d, c);
        });
        return this;
    }
};
HTMLElement.prototype.hasData = function (d) {
    return (d in this.j_data);
};
HTMLElement.prototype.data = function (d, b) {
    if (arguments.length == 0) {
        if (this.j_data != undefined) {
            return this.j_data;
        } else {
            return null;
        }
    } else if (arguments.length == 1) {
        if (d == undefined) {
            this.j_data = undefined;
            return this;
        } else {
            if (J.type(d) == 'json') {
                if (this.j_data != undefined) {
                    for (const e in d) {
                        if (d[e] != undefined) {
                            this.j_data[e] = d[e];
                        } else {
                            delete this.j_data[e];
                        }
                    }
                } else {
                    this.j_data = d;
                }
                return this;
            } else {
                if (this.j_data != undefined) {
                    return this.j_data[d];
                } else {
                    return undefined;
                }
            }
        }
    } else {
        if (b == undefined) {
            if (this.j_data != undefined) {
                if (J.type(d) == 'array') {
                    d.each(function (a) {
                        delete this.j_data[a];
                    });
                } else {
                    delete this.j_data[d];
                }
            }
            return this;
        } else {
            if (this.j_data != undefined) {
                this.j_data[d] = b;
            } else {
                const c = {};
                c[d] = b;
                this.j_data = c;
            }
            return this;
        }
    }
};
HTMLCollection.prototype.data = NodeList.prototype.data = function (d, c) {
    if (c == undefined && J.type(d) != 'json' && d != undefined) {
        const a = [];
        this.each(function (b) {
            a.append(b.data(J.clone(d)));
        });
        return a;
    } else {
        if (c == undefined) {
            this.each(function (a) {
                a.data(J.clone(d));
            });
        } else {
            this.each(function (a) {
                a.data(J.clone(d), c);
            });
        };
        return this;
    }
};

HTMLElement.prototype.attr = function (c, b) {
    if (b == undefined) {
        if (J.type(c) == 'json') {
            for (const a in c) {
                this.setAttribute(a, c[a]);
            }
            return this;
        } else {
            return this.getAttribute(c);
        }
    } else {
        this.setAttribute(c, b);
        return this;
    }
};
HTMLCollection.prototype.attr = NodeList.prototype.attr = function (d, c) {
    if (c == undefined && J.type(d) != 'json') {
        const a = [];
        this.each(function (b) {
            a.append(b.attr(d));
        });
        return a;
    } else {
        this.each(function (a) {
            a.attr(d, c);
        });
        return this;
    }
};
HTMLElement.prototype.hasAttr = function (a) {
    return this.hasAttribute(a);
};
HTMLElement.prototype.removeAttr = function (b) {
    const c = b.split(' ');
    if (c.length > 1) {
        const d = this;
        c.each(function (a) {
            d.removeAttribute(a);
        });
    } else {
        this.removeAttribute(b);
    }
    return this;
};
HTMLCollection.prototype.removeAttr = NodeList.prototype.removeAttr = function (b) {
    this.each(function (a) {
        a.removeAttr(b);
    });
    return this;
};
HTMLElement.prototype.findClass = function (a) {
    return _checkSelect(this.getElementsByClassName(a));
};
HTMLCollection.prototype.findClass = NodeList.prototype.findClass =  Array.prototype.findClass = function (a) {
    const arr = [];
    this.each(function (item) {
        if (item.hasClass(a)) {
            arr.push(item);
        }
    });
    if (arr.length == 1)
        return arr[0];
    return arr;
};
HTMLElement.prototype.findId = function (a) {
    return J.id(a);
};
HTMLCollection.prototype.findId = NodeList.prototype.findId =  Array.prototype.findId = function (a) {
    const arr = [];
    this.each(function (item) {
        if (item.attr('id') == a) {
            arr.push(item);
        }
    });
    if (arr.length == 1)
        return arr[0];
    return arr;
};
HTMLElement.prototype.findTag = function (a) {
    return _checkSelect(this.getElementsByTagName(a));
};
HTMLCollection.prototype.findTag = NodeList.prototype.findTag =  Array.prototype.findTag = function (a) {
    const arr = [];
    this.each(function (item) {
        if (item.tagName.toLowerCase() == a) {
            arr.push(item);
        }
    });
    if (arr.length == 1)
        return arr[0];
    return arr;
};
HTMLElement.prototype.findAttr = function (a) {
    return _checkSelect(this.querySelectorAll('[' + a + ']'));
};
HTMLCollection.prototype.findAttr = NodeList.prototype.findAttr =  Array.prototype.findAttr = function (a) {
    const arr = [];
    a = a.split('=');
    if (a.length == 1) {
        this.each(function (item) {
            if (item.hasAttr(a[0])) {
                arr.push(item);
            }
        });
    } else {
        this.each(function (item) {
            if (item.attr(a[0]) == a[1]) {
                arr.push(item);
            }
        });
    }
    if (arr.length == 1)
        return arr[0];
    return arr;
};
HTMLElement.prototype.findName = function (a) {
    return _checkSelect(this.querySelectorAll('[name=' + a + ']'));
};
HTMLCollection.prototype.findName = NodeList.prototype.findName =  Array.prototype.findName = function (a) {
    const arr = [];
    this.each(function (item) {
        if (item.attr('name') == a) {
            arr.push(item);
        }
    });
    if (arr.length == 1)
        return arr[0];
    return arr;
};
HTMLElement.prototype.select = function (a) {
    return _checkSelect(this.querySelectorAll(a));
};
HTMLCollection.prototype.select = NodeList.prototype.select =  Array.prototype.select = function (a) {
    const arr = [];
    this.each(function (item) {
        const list = item.parent().select(a);
        for (let i = 0; i < list.length; i++) {
            if (list[i] == item) {
                arr.push(item);
                break;
            }
        }
    });
    if (arr.length == 1)
        return arr[0];
    return arr;
};
HTMLElement.prototype.addClass = function (a) {
    if (a.has(' ')) {
        const b = a.split(' ');
        const c = this;
        b.each(function (i) {
            c.addClass(i);
        });
    } else {
        if (J.html5()) {
            this.classList.add(a);
        } else {
            if (!this.hasClass(a)) {
                this.className += ' ' + a;
            }
        }
    }
    return this;
};
HTMLCollection.prototype.addClass = NodeList.prototype.addClass = function (a) {
    this.each(function (b) {
        b.addClass(a);
    });
    return this;
};
HTMLElement.prototype.replaceClass = function (a, b) {
    if (this.hasClass(a)) {
        this.addClass(b).removeClass(a);
    }
    return this;
};
HTMLCollection.prototype.replaceClass = NodeList.prototype.replaceClass = function (a, b) {
    this.each(function (c) {
        c.replaceClass(a, b);
    });
    return this;
};
HTMLElement.prototype.removeClass = function (a) {
    if (a == undefined) {
        this.className = '';
    } else {
        if (a.has(' ')) {
            const c = a.split(' ');
            const d = this;
            c.each(function (i) {
                d.removeClass(i);
            });
        } else {
            if (J.html5()) {
                this.classList.remove(a);
            } else {
                if (this.hasClass(a)) {
                    const b = new RegExp('(\\s|^)' + a + '(\\s|$)');
                    this.className = this.className.replace(b, ' ').trim();
                }
            }
        }
    }
    return this;
};
HTMLCollection.prototype.removeClass = NodeList.prototype.removeClass = function (a) {
    this.each(function (b) {
        b.removeClass(a);
    });
    return this;
};
HTMLElement.prototype.toggleClass = function (a) {
    const c = this;
    if (a.has(' ')) {
        const b = a.split(' ');
        b.each(function (i) {
            c.toggleClass(i);
        });
    } else {
        if (J.html5()) {
            this.classList.toggle(a);
        } else {
            if (c.hasClass(a)) {
                c.removeClass(a);
            } else {
                c.addClass(a);
            }
        }
    }
    return this;
};
HTMLCollection.prototype.toggleClass = NodeList.prototype.toggleClass = function (v) {
    this.each(function (b) {
        b.toggleClass(v);
    });
    return this;
};
HTMLCollection.prototype.indexOf = NodeList.prototype.indexOf = function (ele) {
    for (let i = 0; i < this.length; i++) {
        if (this[i] == ele) {
            return i;
        }
    }
    return -1;
};
HTMLElement.prototype.val = function (a) {
    if (a == undefined && arguments.length == 0) {
        return this.value;
    } else {
        if (this.tagName == 'INPUT' || this.tagName == 'TEXTAREA' || this.tagName == 'SELECT') {
            this.value = _checkArg(a, '');
        }
        return this;
    }
};
HTMLCollection.prototype.val = NodeList.prototype.val = function (v) {
    if (v == undefined) {
        const a = [];
        this.each(function (b) {
            a.append(b.val());
        });
        return a;
    } else {
        this.each(function (b) {
            b.val(v);
        });
        return this;
    }
};
HTMLElement.prototype.txt = function (a) {
    if (a == undefined && arguments.length == 0) {
        return this.innerText;
    } else {
        this.innerText = _checkArg(a, '');
        return this;
    }
};
HTMLCollection.prototype.txt = NodeList.prototype.txt = function (v) {
    if (v == undefined && arguments.length == 0) {
        const a = [];
        this.each(function (b) {
            a.append(b.txt());
        });
        return a;
    } else {
        this.each(function (b) {
            b.txt(v);
        });
        return this;
    }
};
HTMLElement.prototype.content = function (a) {
    if (this.tagName == 'INPUT' || this.tagName == 'TEXTAREA' || this.tagName == 'SELECT') {
        if (a == undefined && arguments.length == 0) {
            return this.value;
        } else {
            try {
                this.value = _checkArg(a, '');
            } catch (e) {
          
            }
        }
    } else {
        if (a == undefined && arguments.length == 0) {
            return this.innerText;
        } else {
            this.innerText = _checkArg(a, '');
        }
    }
    return this;
};
HTMLCollection.prototype.content = NodeList.prototype.content = function (v) {
    if (v == undefined) {
        const a = [];
        this.each(function (b) {
            a.append(b.content());
        });
        return a;
    } else {
        this.each(function (b) {
            b.content(v);
        });
        return this;
    }
};
HTMLElement.prototype.copy = function () {
    return _copy(this.content());
};

HTMLElement.prototype.copyHtml = function () {
    return _copy(this.html());
};
HTMLElement.prototype.html = function (a) {
    if (a == undefined) {
        return this.innerHTML;
    } else {
        this.innerHTML = a;
        return this;
    }
};
HTMLCollection.prototype.html = NodeList.prototype.html = function (v) {
    if (v == undefined) {
        const a = [];
        this.each(function (b) {
            a.append(b.html());
        });
        return a;
    } else {
        this.each(function (b) {
            b.html(v);
        });
        return this;
    }
};
HTMLElement.prototype.allHtml = function (a) {
    if (a == undefined) {
        return J.ct('div').append(this.clone()).html();
    } else {
        const index = this.index();
        const par = this.parent().append(a, index);
        this.remove();
        return par.child(index);
    }
};
HTMLCollection.prototype.allHtml = NodeList.prototype.allHtml = function (v) {
    const a = [];
    this.each(function (b) {
        a.append(b.allHtml(v));
    });
    return a;
};
HTMLElement.prototype.hasClass = function (a) {
    if (J.html5()) {
        return this.classList.contains(a);
    }
    return new RegExp('(\\s|^)' + a + '(\\s|$)').test(this.className);
};
HTMLElement.prototype.next = function (i) {
    if (i != undefined) {
        return this.parent().child(this.index() + i);
    } else {
        return this.parent().child(this.index() + 1);
    }
};
HTMLElement.prototype.prev = function (i) {
    if (i != undefined) {
        return this.parent().child(this.index() - i);
    } else {
        return this.parent().child(this.index() - 1);
    }
};
HTMLElement.prototype.offset = function () {
    return {
        left: this.offsetLeft,
        top: this.offsetTop,
        height: this.offsetHeight,
        width: this.offsetWidth
    };
};
HTMLElement.prototype.left = function () {
    return this.offsetLeft;
};
HTMLElement.prototype.top = function () {
    return this.offsetTop;
};
HTMLElement.prototype.scrollTo = function (a, b, c) {
    let n = 0;
    const e = this;
    c = _checkArg(c, 400);
    const f = _checkAnimateSpeed(c) / 10;
    const g = (a - e.scrollTop) / f;
    let d = e.scrollTop;
    const h = setInterval(function () {
        d += g;
        e.scrollTop = Math.round(d);
        n++;
        if (n == f) {
            e.scrollTop = a;
            _checkCallBack(b, e);
            clearTimeout(h);
        }
    }, 10);
    return this;
};
HTMLCollection.prototype.scrollTo = NodeList.prototype.scrollTo = function (i, b, c) {
    this.each(function (a) {
        a.scrollTo(i, b, c);
    });
    return this;
};
HTMLElement.prototype.scroll = function (i, a, b) {
    if (arguments.length == 0) {
        return this.scrollTop;
    } else {
        return this.scrollTo(this.scrollTop + i, a, b);
    }
};
HTMLCollection.prototype.scroll = NodeList.prototype.scroll = function (i, b, c) {
    this.each(function (a) {
        a.scroll(i, b, c);
    });
    return this;
};
HTMLElement.prototype.animate = function (a, b, c, d) {
    const e = JSON.stringify(a);
    if (e.has('left') || e.has('top')) {
        if (this.css('position') == 'static') {
            this.css({
                'position': 'relative',
                'left': '0',
                'top': '0'
            });
        } else {
            if (this.style.top == '') {
                this.style.top = this.css('top');
            }
            if (this.style.left == '') {
                this.style.left = this.css('left');
            }
        }
    }
    if (e.has('height') && this.style.height == '') {
        this.style.height = this.css('height');
    }
    if (e.has('width') && this.style.width == '') {
        this.style.width = this.css('width');
    }
    this.addClass('j-animation');
    c = _checkAnimatePara(this, c, d);
    const f = this;
    setTimeout(function () {
        f.css(a);
        setTimeout(function () {
            _checkCallBack(b, f);
            f.removeClass('j-animation');
        }, c);
    }, 50);
    return this;
};
HTMLCollection.prototype.animate = NodeList.prototype.animate = function (b, c, d, e) {
    this.each(function (a) {
        a.animate(b, c, d, e);
    });
    return this;
};
HTMLElement.prototype.rotate = function (a, b, c, d, e) {
    const f = this;
    f.addClass('j-animation');
    setTimeout(function () {
        c = _checkAnimatePara(f, c, e);
        _checkOrigin(f, d);
        f.css({
            'transform': 'rotate(' + a + 'deg)',
            '-ms-transform': 'rotate(' + a + 'deg)',
            '-webkit-transform': 'rotate(' + a + 'deg)',
            '-o-transform': 'rotate(' + a + 'deg)',
            '-moz-transform': 'rotate(' + a + 'deg)'
        });
        setTimeout(function () {
            _checkCallBack(b, f);
            _removeAnimation(f);
        }, c);
    }, 50);
    return this;
};
HTMLElement.prototype.scale = function (a, b, c, d) {
    return _scaleBase(this, a, a, b, c, d);
};
HTMLElement.prototype.scaleX = function (a, b, c, d) {
    return _scaleBase(this, a, 1, b, c, d);
};
HTMLElement.prototype.scaleY = function (a, b, c, d) {
    return _scaleBase(this, 1, a, b, c, d);
};

function _checkCallBack (a, b) {
    if (a != undefined) {
        _checkFunction(a)(b);
    }
};
HTMLCollection.prototype.scale = NodeList.prototype.scale = function (b, c, d, e) {
    this.each(function (a) {
        a.scale(b, c, d, e);
    });
    return this;
};
HTMLCollection.prototype.scaleX = NodeList.prototype.scaleX = function (b, c, d, e) {
    this.each(function (a) {
        a.scaleX(b, c, d, e);
    });
    return this;
};
HTMLCollection.prototype.scaleY = NodeList.prototype.scaleY = function (b, c, d, e) {
    this.each(function (a) {
        a.scaleY(b, c, d, e);
    });
    return this;
};

function _scaleBase (a, x, y, b, c, d) {
    a.addClass('j-animation');
    setTimeout(function () {
        c = _checkAnimatePara(a, c, d);
        a.css({
            'transform': 'scale(' + x + ',' + y + ')',
            '-ms-transform': 'scale(' + x + ',' + y + ')',
            '-webkit-transform': 'scale(' + x + ',' + y + ')',
            '-o-transform': 'scale(' + x + ',' + y + ')',
            '-moz-transform': 'scale(' + x + ',' + y + ')'
        });
        setTimeout(function () {
            _checkCallBack(b, a);
            _removeAnimation(a);
        }, c);
    }, 50);
    return a;
};

function _checkOrigin (a, o) {
    if (o == undefined) {
        o = 'center';
    }
    a.css({
        'transform-origin': o,
        '-ms-transform-origin': o,
        'webkit-transform-origin': o,
        '-o-transform-origin': o,
        '-moz-transform-origin': o
    });
};
HTMLCollection.prototype.rotate = NodeList.prototype.rotate = function (b, c, d, e, f) {
    this.each(function (a) {
        a.rotate(b, c, d, e, f);
    });
    return this;
};
HTMLElement.prototype.spin = function (a, b, c, d, e) {
    e = _checkArg(e, 'linear');
    b = _checkArg(b, 'infinite');
    if (a != undefined) {
        a = _checkSpinSpeed(a);
    } else {
        a = 2;
    }
    _checkOrigin(this, c);
    if (J.type(b) == 'number') {
        this.stopSpin();
        const f = this;
        setTimeout(function () {
            _helpSpin(a, b, c, d, e, f);
        }, 20);
    } else {
        _helpSpin(a, b, c, d, e, this);
    }
    return this;
};
function _helpSpin (a, b, c, d, e, f) {
    f.css({
        'animation': 'j-spin ' + a + 's ' + e + ' 0s ' + b,
        '-moz-animation': 'j-spin ' + a + 's ' + e + ' 0s ' + b,
        '-webkit-animation': 'j-spin ' + a + 's ' + e + ' 0s ' + b,
        '-o-animation': 'j-spin ' + a + 's ' + e + ' 0s ' + b
    });
    if (J.type(b) == 'number') {
        if (d != undefined) {
            setTimeout(function () {
                _checkCallBack(d, f);
            }, a * b * 1000);
        }
    }
};

HTMLElement.prototype.twinkle = function (a, b, d, e) {// speed times call linear
    e = _checkArg(e, 'linear');
    b = _checkArg(b, 'infinite');
    if (a != undefined) {
        a = _checkSpinSpeed(a);
    } else {
        a = 2;
    }
    if (J.type(b) == 'number') {
        this.stopSpin();
        const f = this;
        setTimeout(function () {
            _helpTwinkle(a, b, d, e, f);
        }, 20);
    } else {
        _helpTwinkle(a, b, d, e, this);
    }
    return this;
};
function _helpTwinkle (a, b, d, e, f) {
    f.css({
        'animation': 'j-twinkle ' + a + 's ' + e + ' 0s ' + b,
        '-moz-animation': 'j-twinkle ' + a + 's ' + e + ' 0s ' + b,
        '-webkit-animation': 'j-twinkle ' + a + 's ' + e + ' 0s ' + b,
        '-o-animation': 'j-twinkle ' + a + 's ' + e + ' 0s ' + b
    });
    if (J.type(b) == 'number') {
        if (d != undefined) {
            setTimeout(function () {
                _checkCallBack(d, f);
            }, a * b * 1000);
        }
    }
};
HTMLCollection.prototype.twinkle = NodeList.prototype.twinkle = function (b, c, d, e) {
    this.each(function (a) {
        a.twinkle(b, c, d, e);
    });
    return this;
};
HTMLCollection.prototype.spin = NodeList.prototype.spin = function (b, c, d, e) {
    this.each(function (a) {
        a.spin(b, c, d, e);
    });
    return this;
};

function _checkSpinSpeed (a) {
    if (J.type(a) == 'string') {
        switch (a) {
            case 'slower':
                a = 3;
                break;
            case 'slow':
                a = 2.5;
                break;
            case 'normal':
                a = 2;
                break;
            case 'fast':
                a = 1.5;
                break;
            case 'faster':
                a = 1;
                break;
            default:
                a = 2;
        }
        return a;
    } else {
        return a / 1000;
    }
};
HTMLElement.prototype.stopTwinkle = function (bool) {
    const a = (bool == true) ? '1' : this.css('opacity');
    this.css({
        'animation': 'none',
        '-moz-animation': 'none',
        '-webkit-animation': 'none',
        '-o-animation': 'none',
        'opacity': a
    });
    return this;
};
HTMLElement.prototype.stopSpin = function (bool) {
    const a = (bool == true) ? 'rotate(0)' : this.css('transform');
    this.css({
        'animation': 'none',
        '-moz-animation': 'none',
        '-webkit-animation': 'none',
        '-o-animation': 'none',
        'transform': a,
        '-moz-transform': a,
        '-webkit-transform': a,
        '-o-transform': a
    });
    return this;
};
HTMLCollection.prototype.stopTwinkle = NodeList.prototype.stopTwinkle = function () {
    this.each(function (a) {
        a.stopTwinkle();
    });
    return this;
};
HTMLCollection.prototype.stopSpin = NodeList.prototype.stopSpin = function () {
    this.each(function (a) {
        a.stopSpin();
    });
    return this;
};

HTMLElement.prototype.tip = function (text) {
    if (!J.id('jetTip').exist()) {
        J.body().append(J.ct('span#jetTip').clk('this.removeClass("j_active").css("top","-100px")'));
    }
    if (J.type(text) == 'array') {
        text = text[0];
    }
    this.jetTip = text;
    this.on({
        mousemove: function (e) {
            J.id('jetTip').txt(this.jetTip).addClass('j_active').css({
                top: e.pageY + 5 + 'px',
                left: e.pageX + 8 + 'px'
            });
        },
        mouseleave: function () {
            J.id('jetTip').removeClass('j_active').css('top', '-100px');
        }
    }, true);
    return this;
};
HTMLCollection.prototype.tip = NodeList.prototype.tip = function (text) {
    if (J.type(text) == 'array') {
        this.each(function (a, i) {
            a.tip(text[i]);
        });
    } else {
        this.each(function (a) {
            a.tip(text);
        });
    }
    return this;
};
function _removeAnimation (a) {
    a.removeClass('j-animation').css({
        'transition-duration': '0s!important',
        '-ms-transition-duration': '0s!important',
        '-webkit-transition-duration': '0s!important',
        '-o-transition-duration': '0s!important',
        '-moz-transition-duration': '0s!important'
    });
};
function _checkDisplay (obj) {
    if (obj.css('display') == 'none') {
        return false;
    }
    return true;
};
HTMLElement.prototype.slideUp = function (a, b, c) {
    if (_checkDisplay(this)) {
        return _checkSlideHeight(this, a, b, c, false);
    }
    return this;
};
HTMLElement.prototype.slideDown = function (a, b, c) {
    if (!_checkDisplay(this)) {
        if (this.hasClass('j-fade')) {
            this.removeClass('j-fade').addClass('j-slide');
        };
        return _checkSlideHeight(this, a, b, c, true);
    }
    return this;
};
HTMLElement.prototype.slideToggle = function (a, b, c) {
    if (this.css('display') == 'none' && !this.hasClass('j-slide')) {// 第一次
        this.addClass('j-for-slide-height');
        this.css('height', this.hei() + 'px');
        this.removeClass('j-for-slide-height');
        // this.css("display","initial").addClass("j-slide").hide();
        this.css('display', 'block').addClass('j-slide').hide();
    }
    if (this.hasClass('j-fade')) {
        this.removeClass('j-fade').addClass('j-slide');
    }
    return _checkSlideHeight(this, a, b, c);
};
function _checkSlideHeight (obj, a, b, c, d) {
    if (obj.style.height == '' || obj.style.height == 'auto') {
        if (d && obj.css('display') == 'none') {
            obj.addClass('j-none');
        }
        obj.css('height', obj.css('height'));
        obj.removeClass('j-none');
        obj.attr('j-h-auto', 'true');
        setTimeout(function () {
            _animateBase(obj, 'j-slide', a, b, c, d);
        }, 50);
    } else {
        _animateBase(obj, 'j-slide', a, b, c, d);
    }
    return obj;
};
HTMLElement.prototype.fadeOut = function (a, b, c) {
    if (_checkDisplay(this)) {
        return _animateBase(this, 'j-fade', a, b, c, false);
    }
    return this;
};
HTMLElement.prototype.fadeIn = function (a, b, c) {
    if (!_checkDisplay(this)) {
        if (this.hasClass('j-slide')) {
            this.removeClass('j-slide').addClass('j-fade');
        }
        return _animateBase(this, 'j-fade', a, b, c, true);
    } else {
        return this;
    }
};
HTMLElement.prototype.fadeToggle = function (a, b, c) {
    if (this.css('display') == 'none' && !this.hasClass('j-fade')) {
        this.css('display', 'initial').addClass('j-fade').hide();
    }
    if (this.hasClass('j-slide')) {
        this.removeClass('j-slide').addClass('j-fade');
    }
    return _animateBase(this, 'j-fade', a, b, c);
};
HTMLElement.prototype.hide = function () {
    if (!this.hasAttr('j-display')) {
        this.attr('j-display', this.css('display'));
        return this.css('display', 'none!important');
    };
    return this;
};
HTMLElement.prototype.show = function (a) {
    if (this.css('display') == 'none') {
        this.css('display', 'block!important');/* for initial is not supported*/
        // this.css("display", "initial!important");
    }
    if (this.hasAttr('j-display')) {
        if (a == undefined) {
            this.removeClass('j-fade j-slide');
        }
        return this.css('display', this.attr('j-display') + '!important').removeAttr('j-display');
    };
    return this;
};
HTMLElement.prototype.showToggle = function () {
    if (this.hasAttr('j-display')) {
        this.show();
    } else {
        this.hide();
    }
};

function _animateBase (a, b, c, d, e, f) {
    if (f == undefined) {
        if (a.hasAttr('j-display')) {
            f = true;
        } else {
            f = false;
        }
    }
    a.addClass('j-animation');
    if (f) {
        if (a.css('display') == 'none') {
            a.addClass(b);
        }
        a.show(false);
    }
    if (f != false) {
        setTimeout(function () {
            _animateBasePart(a, b, c, d, e, f);
        }, 50);
    } else {
        _animateBasePart(a, b, c, d, e, f);
    }
    return a;
};

function _animateBasePart (a, b, c, d, e, f) {
    d = _checkAnimatePara(a, d, e);
    if (f) {
        if (b == 'j-slide') {
            a.addClass('j-over-hidden');
        }
        a.removeClass(b);
    } else {
        a.addClass(b);
    }
    setTimeout(function () {
        _checkCallBack(c, a);
        _removeAnimation(a);
        if (!f) {
            a.hide();
        } else {
            if (b == 'j-slide') {
                a.removeClass('j-over-hidden');
                if (a.attr('j-h-auto') == 'true') {
                    a.css('height', 'auto');
                }
            }
        }
    }, d);
};

function _checkAnimatePara (a, b, c) {
    if (b != undefined) {
        b = _checkAnimateSpeed(b) / 1000;
    } else {
        b = 0.5;
    }
    a.css({
        'transition-duration': b + 's!important',
        '-ms-transition-duration': b + 's!important',
        '-webkit-transition-duration': b + 's!important',
        '-o-transition-duration': b + 's!important',
        '-moz-transition-duration': b + 's!important'
    });
    c = _checkArg(c, 'linear');
    a.css({
        'transition-timing-function': c + '!important',
        '-ms-transition-timing-function': c + '!important',
        '-webkit-transition-timing-function': c + '!important',
        '-o-transition-timing-function': c + '!important',
        '-moz-transition-timing-function': c + '!important'
    });
    return b * 1000;
};
HTMLCollection.prototype.slideUp = NodeList.prototype.slideUp = function (b, c, d) {
    this.each(function (a) {
        a.slideUp(b, c, d);
    });
    return this;
};
HTMLCollection.prototype.slideDown = NodeList.prototype.slideDown = function (b, c, d) {
    this.each(function (a) {
        a.slideDown(b, c, d);
    });
    return this;
};
HTMLCollection.prototype.slideToggle = NodeList.prototype.slideToggle = function (b, c, d) {
    this.each(function (a) {
        a.slideToggle(b, c, d);
    });
    return this;
};
HTMLCollection.prototype.fadeIn = NodeList.prototype.fadeIn = function (b, c, d) {
    this.each(function (a) {
        a.fadeIn(b, c, d);
    });
    return this;
};
HTMLCollection.prototype.fadeOut = NodeList.prototype.fadeOut = function (b, c, d) {
    this.each(function (a) {
        a.fadeOut(b, c, d);
    });
    return this;
};
HTMLCollection.prototype.fadeToggle = NodeList.prototype.fadeToggle = function (b, c, d) {
    this.each(function (a) {
        a.fadeToggle(b, c, d);
    });
    return this;
};
HTMLCollection.prototype.hide = NodeList.prototype.hide = function () {
    this.each(function (a) {
        a.hide();
    });
    return this;
};
HTMLCollection.prototype.show = NodeList.prototype.show = function () {
    this.each(function (a) {
        a.show();
    });
    return this;
};
HTMLCollection.prototype.showToggle = NodeList.prototype.showToggle = function () {
    this.each(function (a) {
        a.showToggle();
    });
    return this;
};

HTMLElement.prototype.scrollXTo = function (a, b, c) {
    let n = 0;
    const e = this;
    c = _checkArg(c, 400);
    const f = _checkAnimateSpeed(c) / 10;
    const g = (a - e.scrollLeft) / f;
    let d = e.scrollLeft;
    const h = setInterval(function () {
        d += g;
        e.scrollLeft = Math.round(d);
        n++;
        if (n == f) {
            e.scrollLeft = a;
            _checkCallBack(b, e);
            clearTimeout(h);
        }
    }, 10);
    return this;
};
HTMLCollection.prototype.scrollXTo = NodeList.prototype.scrollXTo = function (i, b, c) {
    this.each(function (a) {
        a.scrollXTo(i, b, c);
    });
    return this;
};
HTMLElement.prototype.scrollX = function (i, a, b) {
    if (arguments.length == 0) {
        return this.scrollLeft;
    } else {
        return this.scrollXTo(this.scrollLeft + i, a, b);
    }
};
HTMLCollection.prototype.scrollX = NodeList.prototype.scrollX = function (i, b, c) {
    this.each(function (a) {
        a.scrollX(i, b, c);
    });
    return this;
};
HTMLElement.prototype.hei = function () {
    return this.offsetHeight;
};
HTMLElement.prototype.wid = function () {
    return this.offsetWidth;
};
HTMLElement.prototype.child = function (i) {
    if (i == undefined) {
        return this.children;
    } else {
        return this.children[i];
    }
};
HTMLElement.prototype.hasChild = function (a) {
    if (a == undefined) {
        return (this.children.length > 0) ? true : false;
    } else {
        return (this.select(a).length == 0) ? false : true;
    }
};
HTMLElement.prototype.clone = function () {
    return this.cloneNode().html(this.html());
};
HTMLElement.prototype.parent = function (i) {
    if (i == undefined) {
        return this.parentElement;
    } else {
        let p = this;
        for (let j = 0; j < i; j++) {
            p = p.parentElement;
        }
        return p;
    }
};
HTMLElement.prototype.bro = function (i) {
    if (i == undefined) {
        return this.parent().child();
    } else {
        return this.parent().child(i);
    }
};
HTMLElement.prototype.prepend = function (a) {
    const t = J.type(a);
    if (t == 'array' || t == 'htmlcollection' || t == 'nodelist') {
        const b = this;
        a.each(function (item) {
            b.insertBefore(_checkHtmle(item), b.children[0]);
        });
    } else if (t == 'string') {
        this.insertBefore(_checkHtmle(a), this.children[0]);
    } else {
        this.insertBefore(_checkHtmle(a), this.children[0]);
    }
    return this;
};
HTMLCollection.prototype.prepend = NodeList.prototype.prepend = function (a) {
    this.each(function (c) {
        c.prepend(a);
    });
    return this;
};
HTMLElement.prototype.append = function (b, a) {
    if (a == undefined) {
        const type = J.type(b);
        if (type == 'array' || type == 'htmlcollection' || type == 'nodelist') {
            for (let i = 0; i < b.length; i++) {
                this.append(b[i]);
            }
        } else if (type == 'string') {
            this.append(_checkHtmle(b));
        } else {
            this.appendChild(_checkHtmle(b));
        }
    } else {
        this.insertBefore(_checkHtmle(b), this.children[a]);
    }
    return this;
};
HTMLElement.prototype.toArray = function () {
    return [this];
};
HTMLCollection.prototype.toArray = NodeList.prototype.toArray = function () {
    const a = [];
    for (let i = 0; i < this.length; i++) {
        a.push(this[i]);
    }
    return a;
};
function _checkHtmle (a) {
    if (J.type(a) == 'string') {
        const e = J.ct('div').html(a);
        if (e.child().length == 1) {
            return e.child(0);
        } else {
            return e.child().toArray();
        }
    }
    return a;
};
HTMLElement.prototype.after = function (b) {
    const type = J.type(b);
    if (type == 'array' || type == 'htmlcollection' || type == 'nodelist') {
        const c = this;
        const d = c.next();
        b.each(function (a) {
            c.parent().insertBefore(_checkHtmle(a), d);
        });
    } else {
        this.parent().insertBefore(_checkHtmle(b), this.next());
    }
    return this;
};
HTMLCollection.prototype.after = NodeList.prototype.after = function (b) {
    this.each(function (c) {
        c.after(b);
    });
    return this;
};
HTMLElement.prototype.before = function (b) {
    const type = J.type(b);
    if (type == 'array' || type == 'htmlcollection' || type == 'nodelist') {
        const c = this;
        b.each(function (a) {
            c.parent().insertBefore(_checkHtmle(a), c);
        });
    } else {
        this.parent().insertBefore(_checkHtmle(b), this);
    }
    return this;
};
HTMLCollection.prototype.before = NodeList.prototype.before = function (b) {
    this.each(function (c) {
        c.before(b);
    });
    return this;
};
HTMLCollection.prototype.append = NodeList.prototype.append = function (b, a) {
    this.each(function (c) {
        c.append(b, a);
    });
    return this;
};
HTMLElement.prototype.index = function () {
    const a = this.parent().child();
    for (let i = 0; i < a.length; i++) {
        if (a[i] == this) {
            return i;
        }
    }
    return -1;
};
HTMLElement.prototype.on = function (a, b, d) {
    if (J.type(a) == 'string') {
        return this.event('on' + a, b, d);
    } else {
        for (const c in a) {
            a['on' + c] = a[c];
            delete a[c];
        }
        return this.event(a, b);
    }
};
HTMLCollection.prototype.on = NodeList.prototype.on = function (a, c, d) {
    this.each(function (b) {
        b.on(J.clone(a), c, d);
    });
    return this;
};
HTMLElement.prototype.clk = function (b, d) {
    return this.event('onclick', b, d);
};
HTMLCollection.prototype.clk = NodeList.prototype.clk = function (a, c) {
    this.each(function (b) {
        b.clk(a, c);
    });
    return this;
};
  
HTMLElement.prototype.event = function (a, b, d) {
    if (J.type(a) == 'string') {
        if (d == true) {
            _attachEvent(this, a, b);
        } else {
            this[a] = _checkFunction(b);
        }
    } else {
        for (const c in a) {
            if (a[c] != undefined) {
                if (b == true) {
                    _attachEvent(this, c, a[c]);
                } else {
                    this[c] = _checkFunction(a[c]);
                }
            }
        }
    }
    return this;
};
function _attachEvent (obj, event, fun) {
    if (document.addEventListener) {
        obj.addEventListener(event.substring(2), _checkFunction(fun), false);
    } else if (document.attachEvent) {
        obj.attachEvent(event,  _checkFunction(fun));
    }
};
HTMLCollection.prototype.event = NodeList.prototype.event = function (a, c, d) {
    this.each(function (b) {
        b.event(a, c, d);
    });
    return this;
};
HTMLElement.prototype.empty = function () {
    return this.html('');
};
HTMLCollection.prototype.empty = NodeList.prototype.empty = function () {
    this.each(function (a) {
        a.empty();
    });
    return this;
};
HTMLElement.prototype.remove = function () {
    if (this.parentNode === null) return;
    this.parentNode.removeChild(this);
};
HTMLCollection.prototype.remove = NodeList.prototype.remove = function (a) {
    if (a == undefined) {
        for (let i = 0; i < this.length;) {
            this[i].remove();
        }
    } else {
        if (J.type(a) == 'number') {
            for (let i = 0; i < this.length; i++) {
                if (i == a) {
                    this[i].remove();
                    return this;
                }
            }
        } else {
            for (let i = 0; i < this.length; i++) {
                if (this[i] == a) {
                    this[i].remove();
                    return this;
                }
            }
        }
    }
};
HTMLElement.prototype.each = function (b, d) {
    b(this, 0, d);
    return this;
};
HTMLCollection.prototype.each = NodeList.prototype.each = function (b, d) {
    const arr = this.toArray();// removeClass 情况下
    for (let a = 0; a < arr.length; a++) {
        b(arr[a], a, d);
    }
    return this;
};
HTMLElement.prototype.last = function () {
    return this.child().last();
};
HTMLElement.prototype.first = function () {
    return this.child().first();
};
HTMLCollection.prototype.last = NodeList.prototype.last = Array.prototype.last = function () {
    return this[this.length - 1];
};
HTMLCollection.prototype.first = NodeList.prototype.first = Array.prototype.first = function () {
    return this[0];
};

HTMLElement.prototype.exist = function (call) {
    if (call != undefined) {
        _checkFunction(call)(this);
    }
    return true;
};
HTMLCollection.prototype.exist = NodeList.prototype.exist = function (call, callf) {
    if (this.length > 0) {
        if (this.length == 1) {
            _checkFunction(call)(this[0]);
        } else {
            _checkFunction(call)(this);
        }
        return true;
    }
    _checkFunction(callf)();
    return false;
};

HTMLElement.prototype.addValid = function (a) {
    if (this.hasAttr('jet-form')) {
        if (J.type(a) == 'json' || J.type(a) == 'object') {
            for (const b in a) {
                this.findAttr('jet-name=' + b).addValid(a[b]);
            }
        } else {
            this.findAttr('jet-name').addValid(a);
        }
    } else {
        this.attr({
            'jet-valid': a
        });
        if (this._jet_v_event != true) {
            this.on({
                'blur': 'J.validInput(this)',
                'focus': 'J.addValidValue(this)'
            }, true)._jet_v_event = true;
        }
    }
    return this;
};
HTMLCollection.prototype.addValid = NodeList.prototype.addValid = function (b) {
    if (J.type(b) == 'array') {
        this.each(function (a, i) {
            a.addValid(b[i]);
        });
    } else {
        this.each(function (a) {
            a.addValid(b);
        });
    }
    return this;
};
HTMLElement.prototype.clearValid = function () {
    if (this.hasAttr('jet-form')) {
        this.findAttr('jet-name').clearValid();
    } else {
        if (this.hasClass('jet-unpass')) {
            this.removeClass('jet-unpass').val(this.attr('jet-value'));
        }
        this.removeAttr('jet-valid jet-value');
    }
    return this;
};
HTMLCollection.prototype.clearValid = NodeList.prototype.clearValid = function () {
    this.each(function (a) {
        a.clearValid();
    });
    return this;
};
HTMLElement.prototype.resetValid = function () {
    if (this.hasAttr('jet-form')) {
        this.findAttr('jet-name').resetValid();
    } else {
        if (this.hasClass('jet-unpass')) {
            this.removeClass('jet-unpass').val(this.attr('jet-value'));
        }
    }
    return this;
};
HTMLCollection.prototype.resetValid = NodeList.prototype.resetValid = function () {
    this.each(function (a) {
        a.resetValid();
    });
    return this;
};
HTMLElement.prototype.getContent = function () {
    return _getContentForGet(this);
};
HTMLElement.prototype.get = function (a, b) {
    return J.get(this, a, b);
};
HTMLElement.prototype.initValid = function () {
    J.initValid(this);
    return this;
};
HTMLCollection.prototype.initValid = NodeList.prototype.initValid = function () {
    this.each(function (a) {
        a.initValid();
    });
    return this;
};
HTMLElement.prototype.set = function (a, b, c) {
    J.set(this, a, b, c);
    return this;
};
HTMLElement.prototype.clear = function (a) {
    J.clear(this, a);
    return this;
};
HTMLElement.prototype.validate = function (s, f) {
    _validateForm(this, s, f);
};
  