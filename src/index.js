/* Jetter.js
  created by theajack
  2017/3/18
  https://www.theajack.com/jetterjs/
*/
import {
    _onload, _onready, _copy, _checkSelect, _clone, _each, _even,
    _toString, _type, _create, _scroll, _scrollTo, _ajax, _load,
    _jsonp, _cookie, _storage, _checkArg, _checkFunction, _jump,
    _getUrlParam, _sign, _getRandomNum, _isMobile,
} from './util';
import {
    _getElemsFormData, _checkJetForm, _getElemsObj, _setObjVal, _getValueText,
    _validateForm, validTextCn, validTextEn, _checkIsPw, _mesShow, _confirmShow,
    _mesShowWait, _mesClose, _confirmClose, _inputClose, _setNoteStyle, _validInput,
    _addValidValue, _onOnePassCallback, _onOneFailCallback, _confirmOk, _confirmCancel,
    _inputOk, _inputCancel, _input
} from './form';
import './array';
import './dom';
import './string';

const J = {
    ready: _onready,
    onload: _onload,
    height: function () {
        return document.documentElement.clientHeight;
        // return document.body.offsetHeight
    },
    width: function () {
        return document.documentElement.clientWidth;
        // return document.body.offsetWidth
    },
    cls: function (a) {
        return _checkSelect(document.getElementsByClassName(a));
    },
    id: function (a) {
        return _checkSelect(document.getElementById(a));
    },
    tag: function (a) {
        return _checkSelect(document.getElementsByTagName(a));
    },
    attr: function (a) {
        return _checkSelect(document.querySelectorAll('[' + a + ']'));
    },
    name: function (a) {
        return _checkSelect(document.getElementsByName(a));
    },
    select: function (a) {
        return _checkSelect(document.querySelectorAll(a));
    },
    body: function () {
        return document.body;
    },
    copy: _copy,
    clone: _clone,
    each: _each,
    even: _even,
    toString: _toString,
    type: _type,
    ct: _create,
    scroll: _scroll,
    scrollTo: _scrollTo,
    ajax: _ajax,
    load: _load,
    jsonp: _jsonp,
    cookie: _cookie,
    storage: _storage,
    initTip: function () {
        J.attr('jet-tip').each(function (item) {
            item.tip(item.attr('jet-tip'));
        });
    },
    html5: function () {
        if (window.applicationCache) {
            return true;
        }
        return false;
    },
    language: 'CHINESE',
    lang: function (l) {this.language = l.toUpperCase();},
    checkArg: _checkArg,
    toFunc: _checkFunction,
    jump: _jump,
    open: function (a) {window.open(a);},
    back: function () {window.history.back();},
    forward: function () {window.history.forward();},
    reload: function (force) {
        location.reload(force);
    },
    urlParam: _getUrlParam,
    sign: _sign,
    random: _getRandomNum,
    isMobile: _isMobile,
      
    delay: function (call, time) {
        return window.setTimeout(call, time);
    },
    clearDelay: function (t) {
        return window.clearTimeout(t);
    },
    repeat: function (call, time) {
        return window.setInterval(call, time);
    },
    clearRepeat: function (t) {
        return window.clearInterval(t);
    },
      
    jetForm: function (a) {
        return J.attr('jet-form=' + a);
    },
    jetName: function (a, b) {
        if (arguments.length == 2) {
            return J.attr('jet-form=' + a).findAttr('jet-name=' + b);
        } else {
            return J.attr('jet-name=' + a);
        }
    },
    useDefaultStyle: true,
    useShowForValid: true,
    showInPlaceHolder: false,
    noteStyleStr: 'color',
    get: function (a, b, c) {
        c = this.checkArg(c, 'jet-name');
        if (b != undefined && b != 'json') {
            return _getElemsFormData(_checkJetForm(a), c);
        } else {
            return _getElemsObj(_checkJetForm(a), c);
        }
    },
    set: function (a, b, c, d) {
        d = this.checkArg(d, 'jet-name');
        _setObjVal(_checkJetForm(a), d, b, c);
    },
    clear: function (a, b) {
        this.set(a, {}, null, b);
        a.select('select[jet-name]').each(function (item) {
            item.child(0).selected = true;
        });
    },
    addValid: function (a, b) {
        b = this.checkArg(b, 'notnull');
        _checkJetForm(a).addValid(b);
    },
    initValid: function (b) {
        var c;
        if (b == undefined) {
            c = J.attr('jet-valid');
        } else {
            c = _checkJetForm(b).select('[jet-valid]');
        }
        c.each(function (a) {
            a.on({
                'blur': 'J.validInput(this)',
                'focus': 'J.addValidValue(this)'
            }, true)._jet_v_event = true;
            if (J.showInPlaceHolder) {
                a.attr('placeholder', _getValueText(a.attr('jet-valid')));
            }
        });
    },
    clearValid: function (a) {
        _checkJetForm(a).clearValid();
    },
    resetValid: function (a) {
        _checkJetForm(a).resetValid();
    },
    validate: function (a, b, c) {
        if (c != undefined) {
            _validateForm(_checkJetForm(a), b, c);
        } else {
            _validateForm(_checkJetForm(a), b);
        }
    },
    validText: function (a, b) {
        if (J.type(a) == 'json' && b == undefined) {
            for (var c in a) {
                this.validText(c, a[c]);
            }
        } else {
            if (this.language == 'CHINESE') {
                validTextCn[a] = b;
            } else {
                validTextEn[a] = b;
            }
        }
    },
    banDefault: function () {
        this.useDefaultStyle = false;
        var b = J.cls('jet-unpass');
        b.each(function (a) {
            _checkIsPw(a);
            a.removeClass('jet-unpass').val(a.attr('jet-value')).removeAttr('jet-value');
        });
    },
    useDefault: function () {
        this.useDefaultStyle = true;
    },
    banValidShow: function () {
        this.useShowForValid = false;
    },
    useValidShow: function () {
        this.useShowForValid = true;
    },
    banPlaceHolder: function () {
        this.showInPlaceHolder = false;
        J.attr('jet-valid').each(function (a) {
            a.attr('placeholder', '');
        });
    },
    usePlaceHolder: function () {
        this.showInPlaceHolder = true;
        J.attr('jet-valid').each(function (a) {
            a.attr('placeholder', _getValueText(a.attr('jet-valid')));
        });
    },
    show: _mesShow,
    showWait: _mesShowWait,
    close: _mesClose,
    noteStyle: _setNoteStyle,
    validInput: _validInput,
    addValidValue: _addValidValue,
    onOnePass: _onOnePassCallback,
    onOneFail: _onOneFailCallback,
    confirm: _confirmShow,
    confirmClose: _confirmClose,
    confirmOk: _confirmOk,
    confirmCancel: _confirmCancel,
    input: _input,
    inputClose: _inputClose,
    inputOk: _inputOk,
    inputCancel: _inputCancel,
};
J.ready(function () {
    J.tag('head').append(J.ct('style').txt('#jCopyInput{height:0px;position:fixed;top:-100px;}.j-for-slide-height{opacity:0!important;position:absolute!important;display:block!important}.j-none{visibility:hidden!important;position:absolute!important;display:block!important}.j-animation{transition:all .5s linear!important;-moz-transition:all .5s linear!important;-webkit-transition:all .5s linear!important;-o-transition:all .5s linear!important}.j-slide{overflow:hidden!important;height:0!important;padding-top:0!important;padding-bottom:0!important}.j-fade{opacity:0!important}.j-display-none{display:none!important}@keyframes j-spin{from{transform:rotate(0)}to{transform:rotate(360deg)}}@-moz-keyframes j-spin{from{-moz-transform:rotate(0)}to{-moz-transform:rotate(360deg)}}@-webkit-keyframes j-spin{from{-webkit-transform:rotate(0)}to{-webkit-transform:rotate(360deg)}}@-o-keyframes j-spin{from{-o-transform:rotate(0)}to{-o-transform:rotate(360deg)}}@keyframes j-twinkle{0%{opacity:1}50%{opacity:.1}100%{opacity:1}}@-moz-keyframes j-twinkle{0%{opacity:1}50%{opacity:.1}100%{opacity:1}}@-webkit-keyframes j-twinkle{0%{opacity:1}50%{opacity:.1}100%{opacity:1}}@-o-keyframes j-twinkle{0%{opacity:1}50%{opacity:.1}100%{opacity:1}}.j-over-hidden{overflow:hidden!important}#jetTip{box-shadow:2px 2px 5px 0 #666;top:-100px;position:absolute;border:1px solid#222;background-color:rgba(255,255,255,.8);color:#222;font-size:10px;padding:3px;transition:opacity .2s;-moz-transition:opacity .2s linear;-webkit-transition:opacity .2s linear;-o-transition:opacity .2s linear;opacity:0;z-index:10000}#jetTip.j_active{opacity:1}'));
    J.initTip();
      
    J.initValid();
    J.tag('head').append(J.ct('style').txt('.jet-unpass{border-color:#f20!important;border-style:solid!important;background-color:rgba(255,0,0,.1)!important;color:red!important}.jet-icon-wrapper{width:100%;height:40px}.jet-icon-circle{display:block;width:40px;height:40px;margin:0 auto;border-radius:20px;border:5px solid #fff;position:relative}.jet-icon-circle span{background-color:#fff;display:block;position:absolute;border-radius:3px}.jet-icon-circle.jet-no-border{border-color:transparent;position:relative;top:-3px}.jet-icon-part-ok1{width:11px;height:7px;top:14px;left:5px}.jet-icon-part-ok2{width:7px;height:18px;top:7px;left:14px}.jet-icon-part-x{width:7px;height:20px;top:5px;left:11px}.jet-rotate-45{transform:rotate(45deg);-ms-transform:rotate(45deg);-webkit-transform:rotate(45deg);-o-transform:rotate(45deg);-moz-transform:rotate(45deg)}.jet-rotate-045{transform:rotate(-45deg);-ms-transform:rotate(-45deg);-webkit-transform:rotate(-45deg);-o-transform:rotate(-45deg);-moz-transform:rotate(-45deg)}.jet-icon-part-bar,.jet-icon-part-block{width:7px;left:11px}.jet-icon-part-block{height:7px}.jet-icon-part-bar{height:13px}.jet-icon-part-info1,.jet-icon-part-warn1{top:4px}.jet-icon-part-info2{top:13px}.jet-icon-part-warn2{top:19px}#jetConfirmWrapper,#jetConfirmWrapper *,#jetInputWrapper,#jetInputWrapper *,#jetNoteWrapper,#jetNoteWrapper *{-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box}#jetConfirmWrapper,#jetInputWrapper,#jetNoteWrapper{position:fixed;top:-100%;z-index:10000;transition:top .3s ease;-webkit-transition:top .3s ease;-moz-transition:top .3s ease;-o-transition:top .3s ease;min-height:65px;text-align:center;border:1px solid #666;border-radius:0 0 10px 10px;border-top:0;padding-top:10px;background-color:rgba(51,134,51,.9);left:50%;width:30%;margin-left:-15%;font-family:microsoft Yahei}#jetConfirmWrapper{z-index:10001}#jetNoteWrapper{z-index:10002;cursor:pointer}#jetConfirmWrapper,#jetInputWrapper{background-color:rgba(50,50,50,.9);border-color:#eee;padding-top:0}#jetInputWrapper{background-color:rgba(40,40,40,.9)}#jetConfirmContent,#jetInputContent{font-size:22px;padding:3% 10px 10px 10px;color:#fff;height:50%;white-space:normal;word-break:break-all}#jetConfirmBtnWrapper,#jetInputBtnWrapper{height:40px}#jetInputContent{padding:3% 10% 10px 10%}.jet-input{width:100%;color:#888;padding-left:5px;font-size:18px}.jet-input-text{text-align:left}#jetConfirmCancel,#jetConfirmOk,#jetInputCancel,#jetInputOk{width:50%;float:left;height:100%;border-top:2px solid rgba(255,255,255,.9);cursor:pointer}#jetNoteContent{color:#fff;font-size:20px;margin-bottom:5px;padding-top:5px;white-space:normal;word-break:break-all;text-align:center}#jetConfirmCancel,#jetInputCancel{border-radius:0 0 10px 0}#jetConfirmOk,#jetInputOk{border-radius:0 0 0 10px}#jetConfirmCancel:hover,#jetConfirmOk:hover,#jetInputCancel:hover,#jetInputOk:hover{background-color:rgba(80,80,80,.8)}#jetConfirmCancel:active,#jetConfirmOk:active,#jetInputCancel:active,#jetInputOk:active{background-color:rgba(120,120,120,.8)}#jetConfirmOk{border-right:1px solid rgba(255,255,255,.9)}#jetConfirmCancel,#jetInputCancel{border-left:1px solid rgba(255,255,255,.9)}#jetNoteWrapper[jet-style=gray].jet-success{background-color:rgba(210,210,210,.9);color:#444}#jetNoteWrapper[jet-style=gray].jet-info .jet-icon-circle,#jetNoteWrapper[jet-style=gray].jet-success .jet-icon-circle{border-color:#444}#jetNoteWrapper[jet-style=gray].jet-info .jet-icon-circle span,#jetNoteWrapper[jet-style=gray].jet-success .jet-icon-circle span{background-color:#444}#jetNoteWrapper[jet-style=gray].jet-info{background-color:rgba(170,170,170,.9);color:#444}#jetNoteWrapper[jet-style=gray].jet-warn{background-color:rgba(80,80,80,.9);color:#ccc}#jetNoteWrapper[jet-style=gray].jet-info #jetNoteContent,#jetNoteWrapper[jet-style=gray].jet-success #jetNoteContent{color:#222}#jetNoteWrapper[jet-style=gray].jet-error .jet-icon-circle,#jetNoteWrapper[jet-style=gray].jet-warn .jet-icon-circle{border-color:#ccc}#jetNoteWrapper[jet-style=gray].jet-error .jet-icon-circle span,#jetNoteWrapper[jet-style=gray].jet-warn .jet-icon-circle span{background-color:#ccc}#jetNoteWrapper[jet-style=gray].jet-error{background-color:rgba(40,40,40,.9);color:#ccc}#jetNoteWrapper[jet-style=color]{border-color:#ddd;color:#fff}#jetNoteWrapper[jet-style=color].jet-success,#jetNoteWrapper[jet-style=simple].jet-success{background-color:rgba(51,134,51,.9)}#jetNoteWrapper[jet-style=color].jet-info,#jetNoteWrapper[jet-style=simple].jet-info{background-color:rgba(55,78,237,.9)}#jetNoteWrapper[jet-style=color].jet-warn,#jetNoteWrapper[jet-style=simple].jet-warn{background-color:rgba(237,149,58,.9)}#jetNoteWrapper[jet-style=color].jet-error,#jetNoteWrapper[jet-style=simple].jet-error{background-color:rgba(212,73,73,.9)}#jetNoteWrapper[jet-style=color] .jet-icon-circle,#jetNoteWrapper[jet-style=gray] .jet-icon-circle{border-color:#fff}#jetNoteWrapper[jet-style=color] .jet-icon-circle span,#jetNoteWrapper[jet-style=gray] .jet-icon-circle span{background-color:#fff}#jetNoteWrapper[jet-style=simple]{color:#fff;opacity:0;top:-100%;transition:opacity .5s ease;-webkit-transition:opacity .5s ease;-moz-transition:opacity .5s ease;-o-transition:opacity .5s ease;font-size:20px;padding:15px;min-height:50px;line-height:20px;border-radius:0;border:1px solid #ccc;border-top:none}#jetNoteWrapper[jet-style=center]{width:140px;height:140px;position:fixed;left:50%;opacity:0!important;margin:-70px -70px;background-color:rgba(0,0,0,.5);border-radius:5px;box-shadow:#444 1px 1px 20px 1px;padding:35px 0;z-index:20;transition:none;-moz-transition:none;-webkit-transition:none;-o-transition:none}#jetNoteWrapper.jet-jumpout{opacity:1!important;animation:jet-jumpout .5s ease;-moz-animation:jet-jumpout .5s ease;-webkit-animation:jet-jumpout .5s ease;-o-animation:jet-jumpout .5s ease}#jetNoteWrapper.jet-jumpoff{transform:scale(0);-moz-transform:scale(0);-webkit-transform:scale(0);-o-transform:scale(0);animation:jet-jumpoff .5s ease;-moz-animation:jet-jumpoff .5s ease;-webkit-animation:jet-jumpoff .5s ease;-o-animation:jet-jumpoff .5s ease}@keyframes jet-jumpout{0%{transform:scale(0);top:20%}50%{transform:scale(1.2);top:50%}100%{transform:scale(1);top:50%}}@-moz-keyframes jet-jumpout{0%{-moz-transform:scale(0);top:20%}50%{-moz-transform:scale(1.2);top:50%}100%{-moz-transform:scale(1);top:50%}}@-webkit-keyframes jet-jumpout{0%{-webkit-transform:scale(0);top:20%}50%{-webkit-transform:scale(1.2);top:50%}100%{-webkit-transform:scale(1);top:50%}}@-o-keyframes jet-jumpout{0%{-o-transform:scale(0);top:20%}50%{-o-transform:scale(1.2);top:50%}100%{-o-transform:scale(1);top:50%}}@keyframes jet-jumpoff{0%{transform:scale(1)}50%{transform:scale(1.2)}100%{transform:scale(0)}}@-moz-keyframes jet-jumpoff{0%{-moz-transform:scale(1)}50%{-moz-transform:scale(1.2)}100%{-moz-transform:scale(0)}}@-webkit-keyframes jet-jumpoff{0%{-webkit-transform:scale(1)}50%{-webkit-transform:scale(1.2)}100%{-webkit-transform:scale(0)}}@-o-keyframes jet-jumpoff{0%{-o-transform:scale(1)}50%{-o-transform:scale(1.2)}100%{-o-transform:scale(0)}}@media screen and (min-width:500px) and (max-width:1200px){#jetConfirmWrapper,#jetInputWrapper,#jetNoteWrapper{width:50%;margin-left:-25%}#jetConfirmContent,#jetInputContent{font-size:19px}#jetNoteContent{font-size:17px}.jet-input{font-size:15px}#jetNoteWrapper[jet-style=simple]{min-height:40px;padding:10px;font-size:18px;width:60%;margin-left:-30%}}@media screen and (max-width:500px){#jetConfirmWrapper,#jetInputWrapper,#jetNoteWrapper{width:80%;margin-left:-40%}#jetConfirmContent,#jetInputContent{font-size:16px}#jetNoteContent{font-size:14px}.jet-input{font-size:12px}#jetNoteWrapper[jet-style=simple]{min-height:40px;padding:10px;font-size:16px;width:98%;margin-left:-49%}}'));
});
window.S = function (s) {
    if (s == undefined) {
        return J.body();
    } else {
        return J.select(s);
    }
};

export default J;