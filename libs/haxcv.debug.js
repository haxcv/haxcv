/**
MIT License
Copyright (c) 2018 haxcv
Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:
The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

https://haxcv.org

*/


(function(){ 

  var o = arguments[0]();

     if(o.status)
     {
       // check if everything  is ok 
           window.obj = new o.services();
            obj.__domReady();
            window.haxcv = obj;
            window.Vum = obj;
            window.Router = obj;     
     }else{
      // disbale repeating for best performance 
      console.warn('haxcv is already running '); 
     }
  


})(function(){


    function App() {
    this.type = {};
    this.Event = {};
    this.Evt = [];
    this.Events = [];
    this.scM = [];
    this.scH = [];
    this.cache = [];
    this.loc = location.href;
    this.temp = [];
    this.tempURL = [];
    this.refrence = [];
    
    }

    App.prototype = {
    device: function () {
      var t,
      e = win.width();
      win.height();
      device = t = e > 1000 ? 'PC' : e > 800 ? 'TAB' : e > 600 ? 'TAB' : e > 400 ? 'MOB' : 'MIN';
      return device;
    },
    require: function (e) {
      try {
        return this.compile(_(e).html() || '');
      } catch (er)
      {
        return er;
      }
    },
    parseDef: function ()
    {
      function stop() {
        df = '';
      }
      var o = this;
      var jsH = {
        refrence: [],
        print: function () {
          df += arguments[0];
        },
        require: function (e) {
          return o.compile(_(e).html() || '');
        },
        createComponent: function (jsn) {
          var com = newElm(jsn.name);
          var i = 1;
          if (jsn.attr)
          {
            for (var k in jsn.attr)
            {
              com.setAttribute(k, jsn.attr[k]);
            }
          }
          var js = {
          };
          var ran = Math.random().toString().split('.') [1];
          var ref = (parseInt(ran) / 100000000).toString();
          js[jsn.name] = jsn.name;
          js.ref = ref.substring(ref.length - 5, ref.length);
          com.setAttribute('refrence', js.ref);
          com.innerHTML = jsn.html || '';
          this.parent = com.innerHTML;
          js.el = com;
          this.refrence.push(js);
          o.refrence.push(js);
          return com.outerHTML;
        }
      }
      var t,
      e,
      a,
      nd,
      reg;
      var DefData = (arguments[0] ? arguments[0] : '');
      DefData = DefData.replace(/\n/g, '/*f909*/');
      var defPattern = this.explode('def', DefData);
      if (defPattern == null) return DefData;
      for (var i = 0; i < defPattern.length; i++) {
        var df = '';
        t = defPattern[i];
        e = t.substring(2, t.length - 2);
        e = e.replace(/"/g, '"');
        e = e.replace(/'/g, '"');
        e = e.replace(/{{/g, 'df+=\'');
        e = e.replace(/}}/g, '\';;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;');
        e = e.replace(/&lt;/g, '<');
        e = e.replace(/&gt;/g, '>');
        a;
        nd = '';
        try {
          a = eval(e);
        } catch (er) {
          var len = e.split('/*f909*/');
          var line = er.lineNumber;
          var lineN = Math.floor(Math.abs(er.columnNumber / len.length));
          lineN = lineN < 1 ? 1 : lineN;
          a = ' ' + er.message + ' on line ' + lineN;
        } finally {
        }
        a = a.replace(/;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;/g, '');
        DefData = DefData.replace(t, a == undefined ? '' : a);
      }
      return DefData.replace(/df\+=/g, '');
    },
    parseObj: function ()
    {
      var t,
      e,
      a,
      nd,
      reg;
      var ObjData = arguments[0] ? arguments[0] : '';
      var strPattern = this.explode('str', ObjData);
      if (strPattern == null) return ObjData;
      var item = 0;
      for (var i = 0; i < strPattern.length; i++) {
        t = strPattern[i];
        e = t.substring(2, t.length - 2);
        a;
        nd = '';
        try {
          a = eval(e);
          var reg = new RegExp(t, 'ig');
          ObjData = ObjData.replace(t, a);
        } catch (er) {
          a = '';
          reg = new RegExp(t, 'ig');
          ObjData = ObjData.replace(reg, a);
        } finally {
        }
      }
      item = 0;
      return ObjData;
    },
    compile: function ()
    {
      var d1 = this.parseObj(arguments[0] ? arguments[0] : '').replace(/%}/g, ' {{}}; %}'),
      d2 = this.parseDef(d1);
      return d2.replace(/\/\*f909\*\//g, '\n');
    },
    explode: function ()
    {
      var Reg = {
        str: /{@(.*?)@}/g,
        def: /{%(.*?)%}/g,
        vim: /{{(.*?)}}/g,
      }
      try {
        return arguments[1].match(Reg[arguments[0]]);
      } catch (e) {
      } finally {
      }
    },
    __Void: function ()
    {
      return '';
    },
    module: function ()
    {
      var em,
      sc,
      cs,
      $scp;
      var ctrl = arguments[0] || '__Void',
      fun = arguments[1] || '__Void';
      if (!eval('typeof ' + ctrl + ' == "object"')) {
        eval('window["' + ctrl + '"] = {}');
      } else {
      }
      em = this.__ctrl(ctrl);
      if (em.length == 0) return;
      $scp = eval(ctrl);
      sc = em[0].querySelectorAll('*[v-scope]');
      for (var i = 0; i < sc.length; i++) {
        cs = this.isAttr(sc[i], 'v-scope');
        if (cs && !empty(cs))
        {
          $scp[cs] = '';
          //sc[i].setAttribute("v-scope" , (cs).replace(/ /g , '') )
        }
      }
      var scr = ctrl;
      var http = {
        source: ctrl,
        render: function (arg) {
          var el = document.querySelector(arg.source);
          var source = el.innerHTML;
          _('*[fn-module=' + this.source + ']').html(obj.compile(source));
          console.log($scp)
        },
        parse: function (url, inial, fun) {
          var data = '';
          Obj.Ajax({
            url: url,
            data: '',
            source: this.source,
            method: 'GET',
            info: function (data) {
              var scp = eval(ctrl + ' =  ' + arguments[0]);
              var el = document.querySelector(inial || 'fdskopl');
              var source = el.innerHTML;
              obj.__Entry('fn-module=' + this.source, source);
              if (function_exists(fun)) {
                fun(scp);
              }
            }
          });
          return this;
        }
      };
      fun(http);
      return this;
    },
    __Entry__: function (sel, data)
    {
      var elm = newElm('div');
      elm.innerHTML = data;
      this.__fnApp(elm.querySelectorAll('*[fn-init]'));
      setTimeout(function () {
        _(sel).html(elm.innerHTML);
      }, 1);
    },
    __Entry: function ()
    {
      var el = newElm('script');
      var bn = newElm('button');
      el.type = 'application/babel';
      el.innerHTML = arguments[1];
      el.setAttribute('fn-f9', '');
      bn.setAttribute('fn-copy', 'fn-f9');
      if (arguments[2] == 'append') {
        bn.setAttribute('fn-append', 'fn-f9');
      }
      bn.setAttribute('fn-click', arguments[0] || '');
      setTimeout(function () {
        document.body.appendChild(el);
        document.body.appendChild(bn);
        bn.click();
        document.body.removeChild(bn);
        document.body.removeChild(el);
      }, 30);
    },
    __ctrl: function ()
    {
      return _('*[fn-module=' + (arguments[0] || '0xf9') + ']').el;
    },
    __getVal: function (e) {
      var target = e.target.nodeType == 3 ? e.target.parentElement : e.target;
      var sc = (this.isAttr(target, 'fn-script'));
      var vl = (this.isAttr(target, 'fn-value'));
      var ht = (this.isAttr(target, 'fn-call'));
      var cp = (this.isAttr(target, 'fn-copy'));
      var em = target;
      var me = em;
      var before = em.previousElementSibling;
      var after = em.nextElementSibling;
      var par = em.parentElement;
      var vls = '';
      try {
        switch (typeof sc) {
          case 'string':
            if (!empty(sc)) {
              vls = _('script[' + sc + ']').html();
            }
            break;
          default:
            vls = e.type == 'selectstart' ? e.target.nodeValue : e.this[e.this.el.value != undefined ? 'value' : 'html']();
            if (ht) {
              try
              {
                vls = eval(ht);
              } catch (error) {
                vls = vls;
              }
            } else {
              vls = e.type == 'selectstart' ? e.target.nodeValue : e.this[e.this.el.value != undefined ? 'value' : 'html']();
            }
        }
        if (cp) {
          if (!empty(cp)) {
            var el = _('*[' + cp + ']').el;
            var d = '';
            for (var i = 0; i < el.length; i++) {
              var vem = el[i].value != undefined && el[i].nodeName != 'BUTTON' ? 'value' : 'innerHTML';
              d += el[i][vem];
            }
            vls = d;
          }
      }
    } catch (er) {
    } finally {
    }
    return vls;
    },
    __spa: function (e)
    {
    var url = e.target.href || '';
    var ta = e.target.getAttribute('href');
    var mn = tar;
    var an = document.activeElement;
    if (!an.href) return;
    var tar = an.getAttribute('fn-spa') || 'fs43fgf';
    try {
      history.pushState({
        href: an.href
      }, '', an.href);
    } catch (er) {
    }
    this.loc = an.href;
    var p = this;
    Obj.Ajax({
      url: document.activeElement.href,
      data: {
        spa: 'enabled'
      },
      method: 'GET',
      before: function () {
        var be = p.isAttr(_('*[' + tar + ']').el[0], 'fn-before');
        if (be) {
          var s = be + '()';
          eval(s);
        }
      },
      progress: function (a, b, c) {
        try {
          var fun = p.isAttr(_('*[' + tar + ']').el[0], 'fn-progress');
          if (fun) {
            var s = fun + '(' + a + ', ' + b + ' , "' + c + '")';
            eval(s);
          }
        } catch (er) {
        } finally {
        }
      },
      info: function (data) {
        var el = newElm('div');
        el.innerHTML = data;
        p.__fnApp(el.querySelectorAll('*[fn-init]'));
        _('*[' + tar + ']').html(el.innerHTML);
        var af = p.isAttr(_('*[' + tar + ']').el[0], 'fn-after');
        if (af) {
          var s = af + '()';
          eval(s);
        }
        p.__setEvents();
        p.__setSPA();
      }
    })
    },
    __EventHandler: function () {
    var em,
    ems,
    t,
    d2,
    d,
    type,
    evt;
    evt = this.Event[arguments[1] ? arguments[1] : ''];
    type = this.type[arguments[0] ? arguments[0] : ''];
    type = type ? type : '';
    if (evt == undefined) return;
    if (type == undefined) return;
    var s = 0;
    var p = this;
    document.querySelector('*').addEventListener(arguments[1], function (e) {
      var target = e.target.nodeType == 3 ? e.target.parentElement : e.target;
      var me = target;
      var before = target.previousElementSibling;
      var after = target.nextElementSibling;
      var par = target.parentElement;
      e.this = _(target);
      t = _(target).attr(type);
      t = typeof t == 'object' ? _(target).attr(type.substring(2, type.length - 1))  : t;
      if (typeof t != 'string') {
        return
      };
      d = p.__getVal(e);
      if (empty(t)) {
        p.__render(e, e.this, d2, d);
      } else {
        em = _('*[' + t + ']').el;
        if (em.length == 0) {
          p.__render(e, newElm('sc'), d2, d);
        }
        for (var ip = 0; ip < em.length; ip++) {
          p.__render(e, em[ip], d2, d);
        }
      }      

    });
    },
    __render: function (e, em, d2, d) {
    var ems,
    t,
    type,
    evt,
    me;
    var target = e.target.nodeType == 3 ? e.target.parentElement : e.target;
    ems = target.value ? 'value' : 'innerHTML';
    var vem = em.value ? 'value' : 'innerHTML';
    var vm = em[vem];
    if (ems == 'value') {
      d2 = target.hasAttribute('fn-jsh') ? this.compile(d)  : d;
    } else {
      d2 = target.hasAttribute('jsh-disabled') ? d : this.compile(d);
    }
    if (target.hasAttribute('fn-append'))
    {
      var spn = newElm('span');
      spn.innerHTML = d2;
      em['appendChild'](spn);
      em['value'] += d2;
    } else {
      em['value'] = d2;
      em['innerHTML'] = d2;
    }
    // me = em;

    var me = em;
    var before = em.previousElementSibling;
    var after = em.nextElementSibling;
    var par = em.parentElement;
    var store = this.isAttr(target, 'fn-store');
    var exec = this.isAttr(target, 'fn-exec');
    this.__Define([_(target).el]);
    try {
      var acp = this.isAttr(em, 'e-accept');
      if (acp) {
        eval(acp);
      }
      var acp = this.isAttr(em, 'e-newData');
      if (acp && d2 != vm) {
        eval(acp);
      }
    } catch (er) {
    }
    if (exec) {
      try {
        var me = target;
        var before = target.previousElementSibling;
        var after = target.nextElementSibling;
        var par = target.parentElement;
        eval(exec);
      } catch (er) {
      }
    }
    if (store)
    {
      try {
        define(store, d2);
        var tr = eval(store + ' = "' + d2 + '"');
      } catch (er) {
      } finally {
      }
    }
    this.__formAjax();
    },
    isAttr: function ()
    {
    var e;
    try {
      e = arguments[0].getAttribute(arguments[1]) || false;
    } catch (er) {
      e = false;
    }
    return e;
    },
    __formAjax: function () {
    _(Ajax).Form(_('form[fn-ajax]'), {
      before: function (e) {
        var bf = e.target.getElementsByTagName('ajax::before') [0];
        try {
          eval(_(bf).attr('fn-js')) (e);
        } catch (er) {
        }
      },
      after: function (e) {
        var bf = e.target.getElementsByTagName('ajax::after') [0];
        try {
          eval(_(bf).attr('fn-js')) (e);
        } catch (er) {
        }
      },
      Exception: function (e) {
        var bf = e.target.getElementsByTagName('ajax::Exception') [0];
        try {
          return eval(_(bf).attr('fn-js')) (e);
        } catch (er) {
          return true;
        }
      },
      info: function (data, e) {
        var bf = e.target.getElementsByTagName('ajax::success') [0];
        try {
          eval(_(bf).attr('fn-js')) (data, e);
        } catch (er) {
        }
      }
    });
    },
    __setEvents: function () {
    var el = _('*').el;
    var attr,
    t,
    p = [
    ],
    ev = {
    };
    for (var i = 0; i < el.length; i++) {
      attr = el[i].attributes;
      for (var I = 0; I < attr.length; I++) {
        t = attr[I].name;
        if (in_array(this.Events, t))
        {
          ev[t.split('-') [1]] = t;
        }
      }
    }
    for (var k in ev)
    {
      if (!in_array(this.Evt, k)) {
        this.__EventHandler(k, k);
        this.Evt.push(k);
      }
    }
    },
    __setSPA: function () {
    var p = this;
    document.body.addEventListener('click', function (e) {
      if (document.activeElement.nodeName == 'A') {
        if (p.isAttr(document.activeElement, 'fn-spa')) {
          e.preventDefault();
          p.__spa(e);
        }
      }
    });
    },
    __proccess: function () {
    for (var k in window)
    {
      var n = k.substring(0, 2) == 'on' ? true : false;
      if (n) {
        var ns = k.substring(2, k.length);
        this.type[ns] = 'fn-' + ns;
        this.Event[ns] = ns;
        this.Events.push('fn-' + ns);
      }
    }
    this.__setEvents();
    this.__formAjax();
    },
    __setRegister: function ()
    {
    var sc = _('script').el;
    for (var iI = 0; iI < sc.length; iI++) {
      if (sc[iI].src == '') {
        this.cache.push(sc[iI]);
        this.cache.push(sc[iI].innerHTML);
      }
    }
    },
    __router: function ()
    {
    var el = _('a[fn-spa]').el;
    var p = this;
    window.addEventListener('popstate', function (e) {
      var data = e.state;
      for (var i = 0; i < el.length; i++) {
        var hr = p.isAttr(el[i], 'fn-spa');
        if (hr && el[i].href == location.href) {
          Obj.Ajax({
            url: location.href,
            data: {
              spa: 'enabled'
            },
            method: 'GET',
            info: function (ds) {
              var el = newElm('div');
              el.innerHTML = ds;
              p.__fnApp(el.querySelectorAll('*[fn-init]'));
              _('*[' + hr + ']').html(el.innerHTML);
              p.__setSPA();
            }
          });
          e.preventDefault();
          break;
        }
      }
    });
    },
    __initScript: function ()
    {
    this.__setRegister();
    },
    __syncScript: function ()
    {
    for (var iIa = 0; iIa < this.cache.length; iIa += 2) {
      if (true) {
        this.cache[iIa].innerHTML = this.cache[iIa + 1] || '';
      }
    }
    },
    __moduleInit: function ()
    {
    this.modules(arguments[0] || '98h', function ($scope) {
    });
    },
    __fnApp: function ()
    {
    var fn_init = arguments[0] ? arguments[0] : [
    ];
    for (var iI = 0; iI < fn_init.length; iI++) {
      var data = fn_init[iI].innerHTML;
      fn_init[iI].innerHTML = '';
      var d2 = this.compile(data);
      fn_init[iI].innerHTML = d2;
    }
    _('*[fn-init]').removeattr('hidden');
    },
    __fnFetch: function ()
    {
    var fn_init = arguments[0] ? arguments[0] : [
    ];
    for (var iI = 0; iI < fn_init.length; iI++) {
      var target = this.isAttr(e.target, 'v-boot');
      if (target) {
        var data = _('*[' + target + ']').html();
        var d2 = this.compile(data);
        fn_init[iI].innerHTML = d2;
        fn_init[iI].removeAttribute('hidden');
      }
    }
    },
    __storageRender: function ()
    {
    var iIs = true;
    var p = this;
    setInterval(function () {
      p.__storage('v-render');
      p.__storage('v-scope');
    }, 100);
    this.__router();
    },
    __storage: function (arg)
    {
    var e,
    el,
    ren,
    once,
    action,
    scope;
    e = _('*[' + arg + ']').el;
    for (var inc = 0; inc < e.length; inc++) {
      el = _(e[inc]);
      ren = this.isAttr(e[inc], 'v-render');
      scope = this.isAttr(e[inc], 'v-scope');
      once = this.isAttr(e[inc], 'v-auto');
      action = el.el.value != undefined ? 'value' : 'html';
      var me = el.el;
      var before = el.el.previousElementSibling;
      var after = el.el.nextElementSibling;
      var par = el.el.parentElement;
      if (ren)
      {
        try {
          if (eval(ren) != el[action]()) {
            var acp = this.isAttr(el.el, 'e-newData');
            if (acp) {
              eval(acp);
            }
            el['html'](eval(ren) == '' ? ' ' : eval(ren));
            el['value'](eval(ren) == '' ? ' ' : eval(ren));
          } else {
          }
        } catch (error)
        {
        }
      }
      if (scope)
      {
        try {
          if (eval(scope) != el[action]()) {
            var acp = this.isAttr(el.el, 'e-newData');
            if (acp) {
              eval(acp);
            }
            el['html'](eval(scope) == '' ? ' ' : eval(scope));
            el['value'](eval(scope) == '' ? ' ' : eval(scope));
          } else {
          }
        } catch (error)
        {
        }
      }
    }
    },
    __Define: function ()
    {
    var e,
    el,
    rn,
    sc,
    sm;
    try {
      e = arguments[0];
      for (var inc = 0; inc < e.length; inc++) {
        el = _(e[inc]);
        rn = this.isAttr(el.el, 'v-define');
        var me = el.el;
        var before = el.el.previousElementSibling;
        var after = el.el.nextElementSibling;
        var par = el.el.parentElement;
        if (rn && !empty(rn)) {
          rn = rn.replace(/\n/g, '');
          sc = rn.split(';');
          for (var i = 0; i < sc.length; i++) {
            var t = sc[i].split('=');
            if (t.length == 2) {
              var d = t[1].substring(0, 5);
              var exe = t[1].substring(5, t[1].length);
              window[t[0].match(/\w(.*)/gi, '') [0]] = d == 'js://' ? eval(exe)  : t[1];
            } else if (t.length == 1 && !empty(t[0])) {
              window[t[0].replace(/ /g, '')] = '';
              console.log(t)
            }
          }
        }
      }
    } catch (er)
    {
    }
    },
    __storageDefine: function ()
    {
    var e,
    el,
    rn,
    sc,
    sm;
    e = _('*[fn-store]').el;
    for (var inc = 0; inc < e.length; inc++) {
      el = _(e[inc]);
      rn = this.isAttr(el.el, 'fn-store');
      if (rn) {
        sc = rn.split('.');
        sm = rn.split('[');
        if (sc.length > 1) {
          window[sc[0]] = {
          };
        } else if (sm.length > 1) {
          window[sc[0]] = {
          };
        } else {
          window[rn] = '';
        }
      }
    }
    },
    execframework: function () {
    this.__initScript();
    this.__Define(_('*[v-define]').el);
    this.__storageDefine();
    this.__storageRender();
    this.__fnApp(_('*[fn-init]').el);
    var p = this;
    setTimeout(function () {
      p.__syncScript();
      p.__proccess();
      p.__setSPA();
    }, 1);
    },
    __domReady: function ()
    {
    var p = this;
    window.addEventListener('DOMContentLoaded', function () {
      p.execframework();
    });
    },
    createApp: function (jsn)
    {
    if (jsn.vectorName) {
      window[jsn.vectorName] = jsn;
    }
    var p = this;
    setTimeout(function () {
      p.__Entry(jsn.vector(), typeof jsn.source() == 'string' ? '' : jsn.source().innerHTML, jsn.action || false);
    }, 50)
    },
    rel: function () {
    var p = this;
    window.addEventListener('hashchange', function (e) {
      var hs = location.hash;
      var hr = p.isAttr(el[i], 'fn-target');
      if (hr && el[i].href == location.href) {
        Obj.Ajax({
          url: location.href,
          data: {
            spa: 'enabled'
          },
          method: 'GET',
          info: function (ds) {
            var el = newElm('div');
            var bns = newElm('div');
            el.innerHTML = ds;
            bns.appendChild(el);
            p.__fnApp(bns.querySelectorAll('*[fn-init]'));
            _('*[' + hr || 'fs09' + ']').html(bns.querySelector('div').innerHTML);
          }
        });
        e.preventDefault();
      }
    });
    },
    View: function (pg) {
    this.page = pg;
    return this;
    },
    createSPA: function (jsn)
    {
    var p = this;
    window.addEventListener('hashchange', function (e) {
      var hs = location.hash;
      for (var k in jsn) {
        var title = jsn[k].title;
        var when = jsn[k].when;
        var url = jsn[k].url;
        var comp = jsn[k].getComponent;
        if (when)
        {
          if (when == hs.replace(/#/g, '')) {
            if (url) {
              Obj.Ajax({
                url: url,
                data: {
                  spa: 'enabled'
                },
                method: 'GET',
                info: function (ds) {
                  var el = newElm('div');
                  var bns = newElm('div');
                  el.innerHTML = ds;
                  bns.appendChild(el);
                  p.__fnApp(bns.querySelectorAll('*[fn-init]'));
                  _('*[' + p.page || 'fs09' + ']').html(bns.querySelector('div').innerHTML);
                  //this.__Entry(this.page , ds);
                }
              });
            } else if (comp) {
              this.__Entry(this.page, _('*[' + comp + ']').el[0].innerHTML);
            }
            if (title) {
              _('title').html(title);
            }
          }
        }
      }
      return false;
    });
    },
    modules: function ()
    {
    return this.module(arguments[0], arguments[1]);
    },
    }

   
   // library 

   /*
      DOM , BOM 
   */
  
  var libs = false;
  
   try{
        libs =  !isset(haxcv) ? true : false;
      }catch(error){        
        libs =  true;      
     }
  

 

  return {
    services:App,
    status:libs,
    state:"ok"
  };


});
