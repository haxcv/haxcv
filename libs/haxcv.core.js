/**
 * Copyright 2018 Haxcv Foundation   (Sudan , Khartoum) Written by Manassa Joseph
 *  haxcv is free 
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *  http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * @Developer : Manassa Joseph
 *
 * Haxcv Version 1.0.1 (c) 2018 Under Apache License 
 * http://www.apache.org/licenses/LICENSE-2.0
 * http://haxcv.org/license
 * ( haxcv is Javascript Library it content alot of functions  )
 *
 *
 * @ this Library is Belong to (Manassa Joseph) Under Haxcv Foundation , Inc
 * @ Haxcv is  free 
 *
 *
**/
var This = window,
S = this;
This.Root = null;
This.init = null;
This.root = function (sel) {
  try {
    Haxcv.Fn.Self;
    if (this.This === Haxcv.Fn) {
      return new _(sel);
    }
    if (sel && typeof sel == 'string') {
      Haxcv.Fn.hash_json_parse = {
        sub: sel.charAt(0),
        main: sel,
        elm: sel.substring(1, sel.length),
        tag_elm: sel,
        id: '%',
        Class: '.',
        tag: '',
        body: 'body',
        input: 'input',
        form: 'form',
        img: 'img',
        Default: Haxcv.Fn,
        docs: document,
        DOM: function () {
          return document;
        },
      }
      var serify = {
        Id: hash_json_parse.sub === hash_json_parse.id || hash_json_parse.sub == '#',
        allid: hash_json_parse.sub === '@',
        ClaSS: hash_json_parse.sub === hash_json_parse.Class,
        TagName: hash_json_parse.sub === hash_json_parse.tag_elm,
        AjaxS: hash_json_parse.main === '$',
        Win: hash_json_parse.main === 'win',
        Doc: hash_json_parse.main === 'doc',
        body: hash_json_parse.body === 'body',
        body: hash_json_parse.canv === 'canvas',
        Default: hash_json_parse.main === hash_json_parse.Default
      }
      if (serify.AjaxS) {
        this.AJAX = 'AJAX';
        this.Default = sel;
      } 
      else if (serify.Id) {
        Self = sel;
        this.Id = 'id';
        this.Global = hash_json_parse.tag_elm;
        this.el = Jsn.ById(hash_json_parse.DOM(), hash_json_parse.elm);
      } else if (serify.allid) {
        this.allid = 'allid';
        this.Global = hash_json_parse.tag_elm;
        this.use = hash_json_parse.elm;
        this.el = document.all(hash_json_parse.elm);
      } 
      else if (serify.ClaSS) {
        Self = sel;
        this.Global = hash_json_parse.tag_elm;
        this.class = 'class';
        this.el = hash_json_parse.DOM().querySelectorAll(hash_json_parse.tag_elm);
        return this;
      } 
      else if (sel === hash_json_parse.tag_elm) {
        Self = sel;
        this.Global = hash_json_parse.tag_elm;
        try {
          this.el = Jsn.m(hash_json_parse.DOM(), sel);
        } catch (e) {
          alert(e);
        }
        this.Tg = 'tag';
        return this;
      }
    } else {
      if (sel.node == 'evt' && typeof sel.tar != 'string') {
        if (sel.tar.el != null && sel.tar.el) {
          if (sel.tar.Id) {
            this.Global = sel.tar.el;
            this.el = sel.tar.el;
            this.Id = 'id';
            return this;
          } else {
            this.Global = sel.tar.el;
            this.el = sel.tar.el;
            this.Tg = 'tag';
          }
        } else {
          this.Global = sel.tar;
          this.el = sel.tar;
          this.Id = 'id';
          return this;
        }
      } else {
        this.Global = sel;
        this.el = sel;
        this.Id = 'id';
        return this;
      }
    }
  } catch (er) {
  }
}
This.Root = function (arg, documents) {
  if (this.This === Haxcv.Fn) {
    return new $(arg, documents);
  }
  if (arg) {
    if ((typeof (documents) === 'function') && (arg === document || arg === Haxcv.Fn || arg === Object || arg === Doc || arg === Win)) {
      Haxcv.prototype.ready(documents);
    }
    if (arg === Object) {
      this.Object = Object;
      return this;
    } else {
      this.argument = arg;
      return this;
    }
  } else {
    if (typeof (documents) === 'function') {
      Haxcv.prototype.ready(documents);
    }
  }
},
This.Haxcv = {
  Fn: window,
  extend: {
    call: {
      loop: function (type, array, fun) {
        $$$.range(0, array.length - 1, 1, function (i) {
          fun(i);
        });
      }
    }
  },
  cookie: function (v) {
    return $_COOKIE(v);
  },
  script: function (elm, sel, dest) {
    elm = elm.split(':');
    var srt,
    sr = newElm(elm[0]);
    _(elm[1]).Append(sr);
    if (dest && dest) {
      if (sel == 'id') {
        sr.setAttribute('id', dest);
        sr = _('%' + dest);
      } else if (sel == 'class') {
        sr.setAttribute('class', dest);
        sr = _('.' + dest);
      } else {
        sr.setAttribute(sel, dest);
        sr = _(elm[0]);
      }
    } else {
      sr = _(sr.nodeName);
    }
    return sr;
    //return this;
  },
  __proto__: {
    $: {
      Ajax: function (object) {
        var hr = {
          Url: object.url,
          Method: object.method,
          Data: object.data,
        }
        _(Ajax).Request(object);
      }
    },
    _: {
      script: function (v) {
        if (v.substring(0, 7) == 'Inject:') {
          var st = v.split(':');
          if (st[0] == 'Inject') {
            var scr = newElm('script');
            scr.text = st[1];
            if (this.Id) {
              _(this.el).Append(scr);
            } else {
              _(this.el[this.el.length - 1]).Append(scr);
            }
          }
        } else {
          Haxcv.prototype.Obj.script(this.Global, v);
        }
        return this;
      },
      htmlToCanvas: function (ht) {
        if (this.el.node == 'evt' && this.el.tar) {
          var cwidth = self(this.Global).size(width),
          cheight = self(this.Global).size(height);
        } else {
          var cwidth = _(this.Global).size(width),
          cheight = _(this.Global).size(height);
        }
        var canvas = this.el;
        var elm = newElm('div');
        var elms = newElm('div');
        _(elms).attr('xmlns', 'http://www.w3.org/1999/xhtml');
        elms.appendChild(ht.el);
        elm.appendChild(elms);
        var ctx = canvas.getContext('2d');
        var data = '<svg xmlns="http://www.w3.org/2000/svg" width="' + cwidth + '" bgcolor="red" height="' + cheight + '"> ' +
        '<foreignObject width="100%" height="100%"  >' + elm.innerHTML +
        '</foreignObject>' +
        '</svg>';
        var DOMURL = window.URL || window.webkitURL || window;
        var img = Obj.createElm('img:body', 'id', 'new_img', true)
        img.width = cwidth;
        img.height = cheight;
        var svg = new Blob([data], {
          type: 'image/svg+xml;charset=utf-8'
        });
        var url = DOMURL.createObjectURL(svg);
        img.onload = function () {
          ctx.drawImage(img, 0, 0, cwidth, cheight);
          var a = DOMURL.revokeObjectURL(url);
        }
        img.src = url;
        return url;
      },
      style: function (k, v) {
        try {
          if (this.el != null) {
            if (this.all) {
              var st = [
              ];
              if (typeof (k) === 'object') {
                for (var i = 0; i < this.el.length; i++) {
                  for (var key in k) {
                    if (Isset(v)) {
                      document.all(this.use, i).style[key] = k[key];
                    } else {
                      st.push(getComputedStyle(document.all(this.use, i)) [key]);
                    }
                  }
                }
              } else {
                for (var i = 0; i < this.el.length; i++) {
                  for (var key in k) {
                    if (Isset(v)) {
                      document.all(this.use, i).style[k] = v;
                    } else {
                      st.push(getComputedStyle(document.all(this.use, i)) [key]);
                    }
                  }
                }
              }
              if (!Isset(v)) {
                return st;
              }
            } 
            else if (this.Id == 'id') {
              if (typeof (k) === 'object') {
                for (var key in k) {
                  this.el.style[key] = k[key];
                }
              } else {
                this.el.style[k] = v;
              }
            } else {
              if (typeof (k) === 'object') {
                for (var key in k) {
                  for (var i = 0; i < this.el.length; i++) {
                    this.el[i].style[key] = k[key];
                  }
                }
              } else {
                for (var i = 0; i < this.el.length; i++) {
                  this.el[i].style[k] = v;
                }
              }
            }
          }
        } catch (e) {
        }
        return this;
      },
      icon: function (color, to, opacity) {
        if (this.el != null) {
          var urls,
          url;
          var opacity = opacity || 0;
          var to = to || 255;
          if (this.Id == 'id' && this.el != null) {
            if (this.el.nodeName == 'IMG' || this.el.nodeName == 'CANVAS') {
              var cl_type;
              if (typeof v == 'string') {
                cl_type = 'array';
              } else {
                cl_type = 'object';
              }
              urls = toIco(this.el, color, to, opacity);
              this.el.src = urls;
              return urls;
            } else {
              alert('change Pixles just for Image');
            }
          } else {
            for (var i = 0; i < this.el.length; i++) {
              if (this.el[i].nodeName == 'IMG' || this.el[i] == 'CANVAS') {
                var cl_type;
                if (typeof v == 'string') {
                  cl_type = 'array';
                } else {
                  cl_type = 'object';
                }
                urls = toIco(this.el[i], color, to, opacity);
                this.el[i].src = urls;
                return url;
              } else {
                alert('change Pixles just for Image');
              }
            }
          }
        }
        return this;
      },
      blackAndwhite: function (color, opacity) {
        if (this.el != null) {
          var urls,
          url;
          var opacity = opacity || 255;
          if (this.Id == 'id' && this.el != null) {
            if (this.el.nodeName == 'IMG' || this.el.nodeName == 'CANVAS') {
              var cl_type;
              if (typeof v == 'string') {
                cl_type = 'array';
              } else {
                cl_type = 'object';
              }
              urls = blackAndwhite(this.el, color, opacity);
              this.el.src = urls;
              return urls;
            } else {
              alert('change Pixles just for Image');
            }
          } else {
            for (var i = 0; i < this.el.length; i++) {
              if (this.el[i].nodeName == 'IMG' || this.el[i] == 'CANVAS') {
                var cl_type;
                if (typeof v == 'string') {
                  cl_type = 'array';
                } else {
                  cl_type = 'object';
                }
                urls = blackAndwhite(this.el[i], color, opacity);
                this.el[i].src = urls;
                return url;
              } else {
                alert('change Pixles just for Image');
              }
            }
          }
        }
        return this;
      },
      changeColor: function (v, icon) {
        if (this.el != null) {
          if (this.Id == 'id' && this.el != null) {
            if (this.el.nodeName == 'IMG' || this.el.nodeName == 'CANVAS') {
              var cl_type;
              if (typeof v == 'string') {
                cl_type = 'array';
              } else {
                cl_type = 'object';
              }
              return Gallery(this.el, v, cl_type);
            } else {
              alert('change Pixles just for Image');
            }
          } else {
            for (var i = 0; i < this.el.length; i++) {
              if (this.el[i].nodeName == 'IMG' || this.el[i] == 'CANVAS') {
                var cl_type;
                if (typeof v == 'string') {
                  cl_type = 'array';
                } else {
                  cl_type = 'object';
                }
                return Gallery(this.el[i], v, cl_type);
              } else {
                alert('change Pixles just for Image');
              }
            }
          }
        }
        return this;
      },
      customColor: function (v, to) {
        if (this.el != null) {
          if (this.Id == 'id' && this.el != null) {
            return CustomColor(this.el, v, to);
          } else {
            for (var i = 0; i < this.el.length; i++) {
              return CustomColor(this.el[i], v, to);
            }
          }
        }
        return this;
      },
      getPixels: function (y, x, pw, ph)
      {
        if (pw && typeof pw == 'number') {
          pw = pw;
        } else {
          pw = 1;
        }
        if (ph && typeof ph == 'number') {
          ph = ph;
        } else {
          ph = 1;
        }
        if (this.el != null) {
          if (this.Id == 'id' && this.el != null) {
            this.el = this.el;
          } else {
            this.el = this.el[this.el.length - 1];
          }
          if (this.el.nodeName == 'IMG' || this.el.nodeName == 'CANVAS' || this.el.nodeName == 'VIDEO') {
            try {
              this.binary = [
              ];
              this.rgba = [
              ];
              this.ObjBinary = {
              };
              this.Obj = {
              };
              this.BinaryString;
              this.rgbColor;
              this.rgbaColor;
              var img = this.el;
              var ctx = document.createElement('canvas');
              ctx.width = this.el.width;
              ctx.height = this.el.height;
              ctx.getContext('2d').drawImage(img, 0, 0, img.width, img.height);
              if ((x && y) && (typeof x == 'number' && typeof y == 'number')) {
                originalPixels = ctx.getContext('2d').getImageData(x, y, pw, ph);
                this.rgb = originalPixels.data;
                this.binary[0] = toBinary(originalPixels.data[0]);
                this.binary[1] = toBinary(originalPixels.data[1]);
                this.binary[2] = toBinary(originalPixels.data[2]);
                this.binary[3] = toBinary(originalPixels.data[3]);
                this.ObjBinary['R'] = toBinary(originalPixels.data[0]);
                this.ObjBinary['G'] = toBinary(originalPixels.data[1]);
                this.ObjBinary['B'] = toBinary(originalPixels.data[2]);
                this.ObjBinary['A'] = toBinary(originalPixels.data[3]);
                this.rgba[0] = originalPixels.data[0];
                this.rgba[1] = originalPixels.data[1];
                this.rgba[2] = originalPixels.data[2];
                this.rgba[3] = originalPixels.data[3];
                this.Obj['R'] = originalPixels.data[0];
                this.Obj['G'] = originalPixels.data[1];
                this.Obj['B'] = originalPixels.data[2];
                this.Obj['A'] = originalPixels.data[3];
                this.BinaryString = toBinary(originalPixels.data[0]);
                this.BinaryString += ' ' + toBinary(originalPixels.data[1]);
                this.BinaryString += ' ' + toBinary(originalPixels.data[2]);
                this.BinaryString += ' ' + toBinary(originalPixels.data[3]);
                this.Data = originalPixels;
                this.width = originalPixels.width;
                this.height = originalPixels.height;
                var rgb = this.rgb;
                this.rgbaColor = 'rgba(' + rgb[0] + ',' + rgb[1] + ',' + rgb[2] + ',' + rgb[3] + ')';
                this.rgbColor = 'rgb(' + rgb[0] + ',' + rgb[1] + ',' + rgb[2] + ')';
                this.color = RGBtohex(rgb[0], rgb[1], rgb[2]);
              } else {
                originalPixels = ctx.getContext('2d').getImageData(0, 0, img.width, img.height);
                this.rgb = originalPixels.data;
                this.color = [
                ];
                for (var i = 0; i < originalPixels.data.length; i++) {
                  this.binary[i] = toBinary(originalPixels.data[i]);
                  this.rgba[i] = originalPixels.data[i];
                  this.ObjBinary[toBinary(originalPixels.data[i])] = toBinary(originalPixels.data[i]);
                  var rgb = this.rgb;
                  this.color[i] = 'rgba(' + rgb[i] + ',' + rgb[i + 1] + ',' + rgb[i + 2] + ',' + rgb[i + 3] + ')';
                }
                this.Data = originalPixels;
                this.width = originalPixels.width;
                this.height = originalPixels.height;
              }
              //  currentPixels = ctx.getImageData(0, 0, img.width, img.height);

              img.onload = null;
            } catch (e) {
              MessageBox(e + ' <br/>  img tag is missing src Attribute or Url not Found');
            }
          }
        }
        return this;
      },
      ScrollTo: function (x, y) {
        if (this.el != null) {
          if (this.Id == 'id' && this.el != null) {
            console.log($_SERVER('BROWSER'))
            if (($_SERVER('BROWSER') == 'Chrome') && !('scrollMaxY' in window)) {
              this.el.scrollTop = y;
              this.el.scrollLeft = x;
            } else {
              this.el.scrollTo(x, y);
            }
          } else {
            for (var i = 0; i < this.el.length; i++) {
              if (($_SERVER('BROWSER') == 'Chrome') && !('scrollMaxY' in window)) {
                this.el[i].scrollTop = y;
                this.el[i].scrollLeft = x;
              } else {
                this.el[i].scrollTo(x, y);
              }
            }
          }
        }
        return this;
      },
      ScrollBy: function (x, y) {
        if (this.el != null) {
          if (this.Id == 'id' && this.el != null) {
            if ('scrollMaxY' in window) {
              this.el.scrollTop = y;
              this.el.scrollLeft = y;
            } else {
              this.el.scrollBy(x, y);
            }
          } else {
            for (var i = 0; i < this.el.length; i++) {
              if ('scrollMaxY' in window) {
                this.el[i].scrollTop = y;
                this.el[i].scrollLeft = y;
              } else {
                this.el[i].scrollBy(x, y);
              }
            }
          }
        }
        return this;
      },
      Scroll: function (val) {
        if (in_array(['scrollY',
        'scrollX',
        'scrollMaxX',
        'scrollMaxY',
        'Height',
        'Width'], val)) {
          var type = '',
          webKit = !('scrollMaxY' in window);
          var def = {
            win: {
              scrollY: 'scrollY',
              scrollX: 'scrollX',
              scrollMaxY: webKit ? 'scrollY' : 'scrollMaxY',
              scrollMaxX: webKit ? 'scrollX' : 'scrollMaxX',
              Height: 'scrollX',
              Width: 'scrollY'
            },
            hash: {
              scrollY: 'scrollTop',
              scrollX: 'scrollLeft',
              scrollMaxY: webKit ? 'scrollHeight' : 'scrollTopMax',
              scrollMaxX: webKit ? 'scrollWidth' : 'scrollLeftMax',
              Height: 'scrollHeight',
              Width: 'scrollWidth'
            }
          }
          if (this.el != null) {
            if (this.Id == 'id' && this.el != null) {
              return this.el[this.el == window ? def.win[val] : def.hash[val]];
            } else {
              var ar = [
              ]
              for (var i = 0; i < this.el.length; i++) {
                type = this.el == window ? def.win[type] : def.hash[type];
                ar[i] = this.el[i][this.el[i] == window ? def.win[val] : def.hash[val]];
              }
              return ar;
            }
          }
        }
        //return this;

      },
      changePixels: function (obj) {
        if (this.el != null) {
          var cl = [
          ];
          if (this.Id == 'id' && this.el != null) {
            if (obj && typeof obj == 'object') {
              return draw(this.el, obj);
            }
          } else {
            for (var i = 0; i < this.el.length; i++) {
              if (obj && typeof obj == 'object') {
                cl[i] = draw(this.el[i], obj);
              }
            }
            return cl;
          }
        }
        return this;
      },
      replace: function (v, to) {
        if (this.el != null) {
          if (this.Id == 'id' && this.el != null) {
            var tx = this.el.innerHTML.replace(v, to);
            this.el.innerHTML = tx;
          } else {
            for (var i = 0; i < this.el.length; i++) {
              var tx = this.el[i].innerHTML.replace(v, to);
              this.el[i].innerHTML = tx;
            }
          }
        }
        return this;
      },
      string: function (v) {
        if (this.el != null) {
          var h = ' ';
          if (this.Id) {
            if (v) {
              this.el.innerText = v;
            } else {
              h = this.el.textContent;
            }
          } else {
            if (v) {
              for (var i = 0; i < this.el.length; i++) {
                this.el[i].textContent = v;
              }
            } else {
              for (var i = 0; i < this.el.length; i++) {
                h += this.el[i].textContent;
              }
            }
          }
        }
        return h;
      },
      slide: function (type, time) {
        var dest = type == 'Up' ? 'nDown' : 'nUp';
        _(this.Global).attr('dest', dest);
        _(this.Global).style('overflow', 'hidden');
        _(this.Global).style('transition', 'height ' + time + 'ms linear 0s');
        _(this.Global).style('height', (type == 'Up' ? '0px' : ''));
      },
      html: function (v) {
        if (this.el != null) {
          if (this.Id == 'id' && this.el != null) {
            if (v) {
              this.el.innerHTML = v;
            } else {
              return this.el.innerHTML;
            }
          } else {
            if (v) {
              for (var i = 0; i < this.el.length; i++) {
                this.el[i].innerHTML = v;
              }
            } else {
              var h = '';
              for (var i = 0; i < this.el.length; i++) {
                this.per = h += this.el[i].innerHTML;
              }
              return this.per;
            }
          }
        }
        return this;
      },
      cutImage: function (x, y, width, height) {
        if (this.el != null) {
          try {
            var cnv;
            if (this.Id) {
              cn = newElm('canvas');
              cnv = newElm('canvas');
              cnv.width = width;
              cnv.height = height;
              cn.width = this.el.offsetWidth;
              cn.height = this.el.offsetHeight;
              img = this.el;
              ct = cn.getContext('2d');
              ctx = cnv.getContext('2d');
              ct.drawImage(img, 0, 0, cn.width, cn.height);
              PixelsData = ct.getImageData(x - (width / 2), y - (height / 2), width + 20, height + 20);
              ctx.putImageData(PixelsData, 0, 0);
              this.src = cnv.toDataURL('image/png');
            } else {
              var ar = [
              ],
              pix = [
              ];
              for (var i = 0; i < this.el.length; i++) {
                cn = newElm('canvas');
                cnv = newElm('canvas');
                cnv.width = width;
                cnv.height = height;
                cn.width = this.el[i].offsetWidth;
                cn.height = this.el[i].offsetHeight;
                img = this.el[i];
                ct = cn.getContext('2d');
                ctx = cnv.getContext('2d');
                ct.drawImage(img, 0, 0, cn.width, cn.height);
                PixelsData = ct.getImageData(x, y, width, height);
                ctx.putImageData(PixelsData, 0, 0);
                ar[i] = cnv.toDataURL('image/png');
              }
              this.src = cnv.toDataURL('image/png');
            }
          } catch (e) {
          }
        }
        return this;
      },
      snapVideo: function (type) {
        if (this.el != null) {
          access_Url = [
            'image/png',
            'image/jpg',
            'image/gif',
            'image/jpeg',
            'image/svg',
            'image/ico'
          ];
          type = in_array(access_Url, type) ? type : 'image/png';
          //MessageBox(type)
          if ((this.Id == 'id' && this.el != null) && (this.el.nodeName == 'VIDEO' || this.el.nodeName == 'video' ||
          this.el.nodeName == 'CANVAS' || this.el.nodeName == 'canvas' ||
          this.el.nodeName == 'IFRAME' || this.el.nodeName == 'iframe')) {
            var cnv = Obj.createElm('canvas:body', 'id', 'snap', true),
            ctx = cnv.getContext('2d'),
            vidWidth = this.el.offsetWidth,
            vidHeight = this.el.offsetHeight;
            cnv.width = vidWidth;
            cnv.height = vidHeight;
            ctx.drawImage(this.el, 0, 0, vidWidth, vidHeight);
            var data = cnv.toDataURL(type);
            this.src = data;
            this.ImageData = ctx.getImageData(0, 0, vidWidth, vidHeight);
          } else {
            var data = [
            ],
            ImageData = [
            ];
            for (var i = 0; i < this.el.length; i++) {
              if (this.el[i].nodeName == 'VIDEO' || this.el[i].nodeName == 'video' || this.el.nodeName == 'IFRAME' || this.el.nodeName == 'iframe') {
                var cnv = Obj.createElm('canvas:body', 'id', 'snap', true),
                ctx = cnv.getContext('2d'),
                vidWidth = this.el[i].offsetWidth,
                vidHeight = this.el[i].offsetHeight;
                cnv.width = vidWidth;
                cnv.height = vidHeight;
                ctx.drawImage(this.el[i], 0, 0, vidWidth, vidHeight);
                data[i] = cnv.toDataURL(type);
                ImageData[i] = ctx.getImageData(0, 0, vidWidth, vidHeight);
              }
            }
            this.src = data;
            this.ImageData = ImageData;
          }
        }
        return this;
      },
      Toggle: function (obj, before, after) {
        try {
          if (this.el != null) {
            var proto = {
              type: 'fade',
              time: 1000,
              slide: [
                LT,
                RT
              ]
            }
            var self;
            if (this.usingof) {
              self = _({
                node: 'evt',
                tar: this.Global
              });
            } else {
              self = _(this.Global);
            }
            if ((obj && typeof obj == 'object') || obj == undefined) {
              if (obj == undefined) {
                obj = {
                };
              }
              if (!obj.type) {
                obj.type = 'slide';
                obj.slide = [
                  LT,
                  RT
                ];
              }
              if (!obj.time) {
                obj.time = 1000;
              }
              if (!obj.slide) {
                obj.slide = [
                  LT,
                  RT
                ];
              }
              if (!obj.display) {
                obj.display = 'none';
              }
              switch (obj.type) {
                case 'fade':
                  // Effect Code
                  if (self.Abute('data') != null) {
                    dt = self.Abute('data');
                  } else {
                    self.Abute('data', 'cl');
                    dt = self.Abute('data');
                  }
                  switch (dt)
                    {
                    case 'cl':
                      var el = self.Child(nextElm);
                      el = _(el);
                      el.style('display', 'block')
                      //el.Effect(fadeIn , obj.time ,"all");
                      self.Abute('data', 'op');
                      break;
                    case 'op':
                      var el = self.Child(nextElm);
                      el = _(el);
                      el.style('display', 'none')
                      // el.Effect(fadeOut , obj.time ,"all");
                      self.Abute('data', 'cl');
                      break;
                    default:
                      self.Effect(fadeIn, obj.time, 'all');
                      self.Abute('data', 'cl');
                      break;
                  }
                  //

                  break;
                case 'slide':
                  var rot,
                  rot1,
                  dt;
                  rot = obj.slide[0];
                  rot1 = obj.slide[1];
                  if (self.Abute('data') == null) {
                    if (obj.display == 'none') {
                      self.Abute('data', 'cl');
                    } else {
                      self.Abute('data', 'op');
                    }
                    dt = self.Abute('data');
                } else {
                  if (self.Abute('data') != null) {
                    dt = self.Abute('data');
                  } else {
                    self.Abute('data', 'cl');
                    dt = self.Abute('data');
                  }
              }
              switch (dt)
                {
                case 'cl':
                  // self.Effect(fadeIn , 400 ,"all");
                  var sd = 0,
                  deg = 90,
                  degs = 0;
                  var he = setInterval(function () {
                    sd++;
                    deg -= 5;
                    degs += 1;
                    if (self.Id) {
                      try {
                        var nexts = self.Child(nextElm);
                        nexts.style.transform = rot + '(' + deg + 'deg) ' + rot1 + '(' + degs + 'deg)';
                        if (deg == 0) {
                          clearInterval(he);
                          nexts.style.display = 'block';
                          self.attr('data', 'op');
                          nexts.style.transform = rot1 + '(0deg)';
                        }
                      } catch (er) {
                        clearInterval(he)
                      }
                    } else {
                      try {
                        elm = self.Child(nextElm);
                        for (var i = 0; i < elm.length; i++) {
                          elm[i].style.display = 'block';
                          elm[i].style.transform = rot + '(' + deg + 'deg) ' + rot1 + '(' + degs + 'deg)';
                          if (deg == 0) {
                            clearInterval(he);
                            self.attr('data', 'op');
                            elm[i].style.transform = rot1 + '(0deg)';
                          }
                        }
                      } catch (er) {
                        clearInterval(he)
                      }
                    }
                  }, obj.time / 100);
                  break;
                case 'op':
                  //self.Effect(fadeOut , 400 ,"all");
                  var sd = 0,
                  deg = 0,
                  degs = 0;
                  var he = setInterval(function () {
                    sd++;
                    deg += 5;
                    degs += 1;
                    if (self.Id) {
                      try {
                        elm = self.Child(nextElm);
                        elm.style.transform = rot + '(' + deg + 'deg) ' + rot1 + '(' + degs + 'deg)';
                        if (deg == 90) {
                          clearInterval(he);
                          self.attr('data', 'cl');
                          elm.style.display = 'none';
                          elm.style.transform = rot1 + '(0deg)';
                        }
                      } catch (er) {
                        clearInterval(he)
                      }
                    } else {
                      try {
                        elm = self.Child(nextElm);
                        for (var i = 0; i < elm.length; i++) {
                          elm[i].style.transform = rot + '(' + deg + 'deg) ' + rot1 + '(' + degs + 'deg)';
                          if (deg == 90) {
                            clearInterval(he);
                            elm[i].setAttribute('data', 'cl');
                            elm[i].style.display = 'none';
                            elm[i].style.transform = rot1 + '(0deg)';
                          }
                        }
                      } catch (er) {
                        clearInterval(he)
                      }
                    }
                  }, obj.time / 100);
                  break;
                default:
                  var sd = 0,
                  deg = 0,
                  degs = 0;
                  var he = setInterval(function () {
                    sd++;
                    deg += 5;
                    degs += 1;
                    if (self.Id) {
                      try {
                        elm = self.Child(nextElm);
                        elm.style.transform = rot + '(' + deg + 'deg) ' + rot1 + '(' + degs + 'deg)';
                        if (deg == 90) {
                          clearInterval(he);
                          self.attr('data', 'op');
                          elm.style.display = 'none';
                          elm.style.transform = rot1 + '(0deg)';
                        }
                      } catch (er) {
                        clearInterval(he)
                      }
                    } else {
                      try {
                        elm = self.Child(nextElm);
                        for (var i = 0; i < elm.length; i++) {
                          elm[i].style.transform = rot + '(' + deg + 'deg) ' + rot1 + '(' + degs + 'deg)';
                          if (deg == 90) {
                            clearInterval(he);
                            self.attr('data', 'op');
                            elm[i].style.display = 'none';
                            elm[i].style.transform = rot1 + '(0deg)';
                          }
                        }
                      } catch (er) {
                        clearInterval(he)
                      }
                    }
                  }, obj.time / 100);
                  break;
              }
              // slide Code

              break;
          }
        }
    }
    this.success = true;
    return this;
  } catch (e) {
  }
},
Parent: function (v) {
  if (this.el != null) {
    if (this.Id == 'id' && this.el != null) {
      if (v) {
        return this.el[v];
      }
    } else {
      if (v) {
        for (var i = 0; i < this.el.length; i++) {
          return this.el[i][v];
        }
      }
    }
  }
  return this;
},
Child: function (v) {
  if (this.el != null) {
    if (this.Id == 'id' && this.el != null) {
      if (v) {
        return this.el[v];
      }
    } else {
      if (v) {
        ar = [
        ];
        for (var i = 0; i < this.el.length; i++) {
          ar[i] = this.el[i][v];
        }
        return ar;
      }
    }
  }
  return this;
},
Chiled: function (v) {
  if (this.el != null) {
    if (this.Id == 'id' && this.el != null) {
      if (v) {
        return this.el[v];
      }
    } else {
      if (v) {
        for (var i = 0; i < this.el.length; i++) {
          return this.el[i][v];
        }
      }
    }
  }
  return this;
},
Dance: function (jsn) {
  var array = jsn.size,
  loop = jsn.loop,
  time = jsn.speed,
  height = jsn.height,
  width = jsn.width,
  move = jsn.move,
  px;
  if (this.el != null) {
    var elm = this.Global,
    s = 0,
    len = array.length;
    _(elm).style('transition', 'height ' + (time / 1000) / 2 + 's linear 0s');
    _(elm).style('transition', 'width ' + (time / 1000) / 2 + 's linear 0s');
    // _(elm).style("transition","height 1.0s linear 0s");
    var dance = setInterval(function () {
      try {
        s++;
        if (s > (len - 1)) {
          s = 0;
          if (loop == false) {
            clearInterval(dance);
          }
        }
        if (jsn.clearTime) {
          // clearInterval(dance, jsn.clearTime);
        }
        if (height == true) {
          _(elm).style('height', array[s] + 'px');
        }
        if (width == true) {
          _(elm).style('width', array[s] + 'px');
        }
        if (move == true) {
          _(elm).style('margin', jsn.position[s] + 'px ' + jsn.position[s] + 'px');
        }
      } catch (er) {
        clearInterval(dance)
      }
    }, time);
  }
  return this;
},
mark: function (v) {
  if (this.el != null) {
    if (this.Id == 'id') {
      if (v == true) {
        if (document.selection) {
          var range = document.body.createTextRange();
          range.moveToElementText(this.el);
          range.select();
        } else if (Haxcv.Fn.getSelection) {
          var range = document.createRange();
          range.selectNode(this.el);
          Haxcv.Fn.getSelection().addRange(range);
        }
      } else if (v == false) {
        // this.el.remove();
      }
    } else {
      for (var i = 0; i < this.el.length; i++) {
        if (v == true) {
          if (document.selection) {
            var range = document.body.createTextRange();
            range.moveToElementText(this.el[i]);
            range.select();
          } else if (Haxcv.Fn.getSelection) {
            var range = document.createRange();
            range.selectNode(this.el[i]);
            Haxcv.Fn.getSelection().addRange(range);
          }
        } else if (v == false) {
          //this.el[i].remove();
        }
      }
    }
  }
  return this;
},
Remove: function () {
  if (this.el != null) {
    if (this.Id == 'id') {
      this.el.remove();
    } else {
      for (var i = 0; i < this.el.length; i++) {
        this.el[i].remove();
      }
    }
  }
  return this;
},
ImageEditor: function (json) {
  if (this.el != null) {
    var dr = {
    },
    dg = {
    };
    if (this.Id == 'id') {
      if (this.el.nodeName == 'IMG') {
        if (json && typeof json == 'object') {
          ImageEditor(this.el, json);
        }
      }
    } else {
      for (var i = 0; i < this.el.length; i++) {
        if (this.el[i].nodeName == 'IMG') {
          if (json && typeof json == 'object') {
            ImageEditor(this.el[i], json);
          }
        }
      }
    }
  }
  return this;
},
plusHtml: function (v) {
  if (this.el != null) {
    if (this.Id == 'id') {
      this.per = this.el.innerHTML += v;
    } else {
      for (var i = 0; i < this.el.length; i++) {
        this.per = this.el[i].innerHTML += v;
      }
    }
  }
  return this;
},
AddHtml: function (v) {
  if (this.el != null) {
    if (this.Id == 'id') {
      var main_val = this.el.innerHTML;
      this.per = this.el.innerHTML += v;
      return this.per;
    } else {
      for (var i = 0; i < this.el.length; i++) {
        var main_val = this.el[i].innerHTML;
        this.per = this.el[i].innerHTML += v;
      }
      return this.per;
    }
  }
  return this;
},
append: function (v) {
  if (this.el != null) {
    if (this.Id == 'id') {
      var main_val = this.el.innerHTML;
      this.per = this.el.append(v);
      return this.per;
    } else {
      for (var i = 0; i < this.el.length; i++) {
        var main_val = this.el[i].innerHTML;
        this.per = this.el[i].append(v);
      }
      return this.per;
    }
  }
  return this;
},
Append: function (v) {
  if (this.el != null) {
    if (this.Id == 'id') {
      this.per = this.el.appendChild(v);
    } else if (this.el == 'head') {
      Jsn.tName(index.Default[1], 'head') [0].appendChild(v);
    } else {
      for (var i = 0; i < this.el.length; i++) {
        var main_val = this.el[i].appendChild(v);
      }
    }
  }
  return this;
},
value: function (v) {
  if (this.el != null) {
    if (this.Id == 'id' && this.el) {
      if (v) {
        this.el.value = v;
      } else {
        return this.el.value;
      }
      var par = '';
    } else {
      if (v) {
        for (var i = 0; i < this.el.length; i++) {
          this.per += this.el[i].value = v;
        }
        return this.per;
      } else {
        var h = '';
        for (var i = 0; i < this.el.length; i++) {
          this.per = h += this.el[i].value;
        }
        return this.per;
      }
    }
  }
  return this;
},
AddValue: function (v) {
  if (this.el != null) {
    if (this.Id == 'id' && this.el) {
      if (v) {
        this.el.value += v;
      } else {
        return this.el.value;
      }
      var par = '';
    } else {
      if (v) {
        for (var i = 0; i < this.el.length; i++) {
          this.per += this.el[i].value += v;
        }
        return this.per;
      } else {
        var h = '';
        for (var i = 0; i < this.el.length; i++) {
          this.per = h += this.el[i].value;
        }
        return this.per;
      }
    }
  }
  return this;
},
Ajax: function (object, s) {
  if (this.AJAX == 'AJAX') {
    $$.Request(object, s);
  }
  return this;
},
Request: function (json, info, dType) {
  if (this.AJAX == 'AJAX') {
    var data = {
      url: null,
      method: null,
      data: null,
      serializeArray: null,
      info: function (data) {
      }
    }
    var ndata = '';
    json.method = json.method.toLocaleUpperCase() || 'GET';
    if (!json.data) {
      json.data = null;
    }
    if (json.data == '[object FormData]') {
      //"Content-type","multipart/form-data; charset=utf-8; boundary=" + Math.random().toString().substr(2));
      ndata = json.data;
      console.log(ndata)
    } else {
      if (json.data && typeof json.data == 'object') {
        for (var key in json.data) {
          Haxcv.Fn.DTS = json.data;
          ndata += key + '=' + json.data[key] + '&';
        }
        ndata = ndata.substring(0, ndata.length - 1);
      } 
      else if (typeof json.data == 'string') {
        ndata = encodeURIComponent(json.data);
      }
    }
    var e,
    Method,
    Data,
    dataType,
    xhr,
    XmlStatus = 100011;
    if (Haxcv.Fn.ActiveXObject) {
      xhr = new ActiveXObject('Microsoft.XMLHTTP');
    } else {
      xhr = new XMLHttpRequest('Majin.HttpObject');
    }
    if (json.method == 'POST' || json.method == 'post') {
      e = {
        Decode: json.url || '',
        DataRoll: ndata,
        Method: 'POST'
      };
    } 
    else if (json.method == 'GET' || json.method == 'get') {
      e = {
        Decode: (json.url || '') + '?' + ndata,
        DataRoll: null,
        Method: 'GET'
      };
    } else {
      if (json.data) {
        e = {
          Decode: (json.url || '') + '?' + ndata,
          DataRoll: null,
          Method: (json.method || 'GET')
        };
      } else {
        e = {
          Decode: (json.url || ''),
          DataRoll: null,
          Method: 'GET'
        };
      }
    }
    var exec = true;
    if (json.withCredentials) {
      xhr.withCredentials = true;
    }
    if (json.header == '[object Object]' && typeof json.header == 'object') {
      for (var key in json.header) {
        xhr.setRequestHeader(key, json.header[key]);
      }
    } else {
    }
    if (dType) {
      dataType = dType;
    } else {
      dataType = 'application/form';
    }
    var abort = false;
    if (XMLHttp.abort) {
      abort = true;
    }
    if (XMLHttp.exception == e.Decode && XMLHttp.abort) {
      abort = false;
    }
    if (abort) {
      return;
    }
    xhr.open(e.Method, e.Decode, true);
    if (json.upload == true) {
    } else {
      xhr.setRequestHeader('Content-Type', json.data == '[object FormData]' ? 'multipart/form-data; charset=utf-8; boundary=' + Math.random().toString().substr(2)  : Parent.xParseData[0][2]([dataType,
      XmlStatus]));
    }
    xhr.setRequestHeader('X-REQUESTED-WITH', 'XMLHttpRequest');
    //alert(json.data);
    xhr[index.Event[3]] = function (e) {
      var Request_info = {
        response: e.target.response,
        responseText: e.target.responseText,
        responseType: e.target.responseType,
        responseURL: e.target.responseURL,
        responseXML: e.target.responseXML,
        responseXML: e.target.responseXML,
        status: e.target.status,
        statusText: e.target.statusText,
        timeout: e.target.timeout,
        readyState: e.target.readyState,
        Library: 'Haxcv V 1.0.1',
        responseHeaders: e.target.getAllResponseHeaders()
      };
      Request_info.responseHeader = xhr.getResponseHeader(xhr.responseURL);
      if (function_exists(json.RHeader)) {
        var r = Request_info;
        json.responseHeader([r.requestHeader,
        r.responseHeader,
        r.responseHeaders]);
      }
      if (in_array([200,
      101,
      302,
      301], xhr.status) && xhr.readyState == 4) {
        if (function_exists(info)) {
          info(xhr.responseText, Request_info);
        }
        if (function_exists(json.info)) {
          json.info(xhr.responseText, Request_info);
        }
      } 
      else if (xhr.status != 200 && xhr.readyState != 4) {
        if (function_exists(json.error)) {
          json.error(xhr.responseText, Request_info);
        }
      }
    }
    if (json.upload == true) {
      xhr.upload.onprogress = function (e) {
        if (e.lengthComputable) {
          if (function_exists(json.progress)) {
            var loaded = e.loaded,
            totlal = e.totlal,
            min = 0,
            max = e.total,
            percent = Math.floor((e.loaded / e.total) * 100) + '%';
            json.progress(Math.floor(loaded), Math.floor(max), percent);
          }
        }
      }
      xhr.upload.onloadstart = function (e) {
        if (function_exists(json.before)) {
          json.before();
        }
      }
      xhr.upload.onloadend = function (e) {
        if (function_exists(json.after)) {
          json.after();
        }
      }
    } else {
      xhr.onprogress = function (e) {
        if (function_exists(json.progress)) {
          var loaded = e.loaded < 1 ? 1 : e.loaded,
          total = e.total < 1 ? 1 : e.total,
          min = 0,
          max = total;
          percent = Math.floor((loaded / total) * 100) + '%';
          json.progress(Math.floor(loaded), Math.floor(max), percent);
        }
      }
      xhr.onloadstart = function (e) {
        if (function_exists(json.before)) {
          json.before();
        }
      }
    }
    xhr.addEventListener('load', function (evt) {
      XhrResult = 'finshed';
      if (function_exists(json.after)) {
        json.after();
      }
      e.DataRoll = '';
      json.data = '';
    }
    );
    xhr.send(json.data == '[object FormData]' ? json.data : e.DataRoll);
    e.DataRoll = '';
    json.data = '';
    return this;
  }
},
Include: function (v, value) {
  if (typeof value == 'object' && value == '[object FormData]') {
    Obj.callback.ajax({
      fst: this.el,
      snd: _(this.Global)
    }, v, value, 'POST');
  } else {
    Obj.callback.ajax({
      fst: this.el,
      snd: _(this.Global)
    }, v);
  }
  return this;
},
Require: function (v, value) {
  if (typeof value == 'object' && value == '[object FormData]') {
    Obj.callback.ajax({
      fst: this.el,
      snd: _(this.Global)
    }, v, value, 'POST');
  } else {
    Obj.callback.ajax({
      fst: this.el,
      snd: _(this.Global)
    }, v);
  }
  return this;
},
put: function (v, value) {
  if (typeof value == 'object' && value == '[object FormData]') {
    Obj.callback.ajax({
      fst: this.el,
      snd: _(this.Global)
    }, v, value, 'POST');
  } else {
    Obj.callback.ajax({
      fst: this.el,
      snd: _(this.Global)
    }, v);
  }
  return this;
},
Fullscreen: function (k) {
  if (this.el != null) {
    if (this.Id == 'id' && this.el) {
      var el = this.el,
      requestMethod = el.RequestFullScreen || el.webkitRequestFullScreen
      || el.mozRequestFullScreen || el.msRequestFullScreen;
      if (requestMethod) {
        requestMethod.call(el);
      } else if (typeof Haxcv.Fn.ActiveXObject !== undefined) {
        // Older IE.
        var wscript = new ActiveXObject('WScript.Shell');
        if (wscript !== null) {
          wscript.SendKeys('{F11}');
        }
      }
    } else {
      for (var i = 0; i < this.el.length; i++) {
        var requestMethod = this.el[i].requestFullScreen || this.el[i].webkitRequestFullScreen
        || this.el[i].mozRequestFullScreen || this.el[i].msRequestFullScreen;
        if (requestMethod) {
          requestMethod.call(this.el[i]);
        } else if (typeof Haxcv.Fn.ActiveXObject !== undefined) {
          // Older IE.
          var wscript = new ActiveXObject('WScript.Shell');
          if (wscript !== null) {
            wscript.SendKeys('{F11}');
          }
        }
      }
    }
  }
  return this;
},
canselFullscreen: function (k) {
  if (this.el != null) {
    if (this.Id == 'id' && this.el) {
      var el = this.el,
      requestMethod = el.canselFullScreen || el.webkitCanselFullScreen
      || el.mozCanselFullScreen || el.msCanselFullScreen;
      if (requestMethod) {
        requestMethod.call(el);
      } else if (typeof Haxcv.Fn.ActiveXObject !== undefined) {
        // Older IE.
        var wscript = new ActiveXObject('WScript.Shell');
        if (wscript !== null) {
          wscript.SendKeys('{F11}');
        }
      }
    } else {
      for (var i = 0; i < this.el.length; i++) {
        var requestMethod = this.el[i].CanselFullScreen || this.el[i].webkitCanselFullScreen
        || this.el[i].mozCanselFullScreen || this.el[i].msCanselFullScreen;
        if (requestMethod) {
          requestMethod.call(this.el[i]);
        } else if (typeof Haxcv.Fn.ActiveXObject !== 'undefined') {
          // Older IE.
          var wscript = new ActiveXObject('WScript.Shell');
          if (wscript !== null) {
            wscript.SendKeys('{Esc}');
          }
        }
      }
    }
  }
  return this;
},
attr: function (k, v) {
  if (this.el != null) {
    if (this.Id == 'id' && this.el) {
      if (arguments.length < 1) {
        try {
          return this.el.getAttributeNames();
        } catch (er) {
          return '';
        }
      } else {
        if (v) {
          try {
            this.el.setAttribute(k, v);
          } catch (er) {
          }
        } else {
          try {
            if (!in_array([null,
            undefined], this.el.getAttribute(k))) {
              return this.el.getAttribute(k);
            }
          } catch (er) {
            return '';
          }
        }
      }
    } else {
      var at = [
      ];
      if (arguments.length < 1) {
        try {
          for (var i = 0; i < this.el.length; i++) {
            at[i] = this.el[i].getAttributeNames();
          }
          return at;
        } catch (er) {
          return '';
        }
      } else {
        if (v) {
          for (var i = 0; i < this.el.length; i++) {
            try {
              if (!in_array([null,
              undefined], this.el[i].getAttribute(k))) {
                return this.el[i].getAttribute(k);
              }
            } catch (er) {
              return '';
            }
          }
        } else {
          try {
            for (var i = 0; i < this.el.length; i++) {
              if (!in_array([null,
              undefined], this.el[i].getAttribute(k))) {
                at[i] = this.el[i].getAttribute(k);
              }
            }
            return at;
          } catch (er) {
            return '';
          }
        }
      }
    }
  }
  return this;
},
Abute: function (k, v) {
  if (this.el != null) {
    if (this.Id == 'id' && this.el) {
      if (v) {
        this.el.setAttribute(k, v);
      } else {
        return this.el.getAttribute(k);
      }
    } else {
      var at = [
      ];
      if (v) {
        for (var i = 0; i < this.el.length; i++) {
          this.el[i].setAttribute(k, v);
        }
      } else {
        for (var i = 0; i < this.el.length; i++) {
          at[i] = this.el[i].getAttribute(k);
        }
        return at;
      }
    }
  }
  return this;
},
removeattr: function (k) {
  if (this.el != null) {
    if (this.Id == 'id' && this.el) {
      return this.el.removeAttribute(k);
    } else {
      for (var i = 0; i < this.el.length; i++) {
        this.el[i].removeAttribute(k);
      }
    }
  }
  return this;
},
removeElm: function () {
  if (this.el != null) {
    if (this.Id == 'id') {
      this.el.remove();
    } else {
      for (var i = 0; i < this.el.length; i++) {
        this.el[i].remove();
      }
    }
  }
  return this;
},
node: function (v) {
  if (this.el != null) {
    if (this.Id == 'id') {
      return this.el[v];
    } else {
      for (var i = 0; i < this.el.length; i++) {
        return this.el[i][v];
      }
    }
  }
  return this;
},
getElm: function (a, b, l) {
  if (this.el != null) {
    if (this.Id == 'id') {
      var html = '',
      elm = this.el.getElementsByTagName(a);
      if (b == 'AsHtml') {
        this.html = this.el.innerHTML;
        return this.html;
        // html = "";
      } else if (b == 'AsAttribute') {
        for (var i = 0; i < elm.length; i++) {
          html += elm[i].getAttribute(l);
        }
        return html;
        // html = "";
      }
    } else {
      for (var k = 0; k < this.el.length; k++) {
        var html = '',
        ht = [
        ],
        elm = this.el[k].getElementsByTagName(a);
        if (b == 'AsHtml') {
          for (var i = 0; i < elm.length; i++) {
            html += '<' + elm[i].nodeName + '  id="' + elm[i].id + '"  style="' + elm[i].style + '" d="' + elm[i].id + '" value="' + elm[i].value + '" name="' + elm[i].name + '" type="' + elm[i].type + '"/>';
          }
          html = '';
          ht[k] = html;
        } else if (b == 'AsAttribute') {
          for (var i = 0; i < elm.length; i++) {
            html += elm[i].getAttribute(l);
          }
          html = '';
          ht[k] = html;
        }
      }
      return ht;
    }
  }
  return this;
},
FormValue: function () {
  if (this.el != null) {
    j = this.Global;
    Haxcv.Fn.doc = {
      select: null,
      loop: null,
      Main: j.charAt(0),
      type: j.substring(1, j.length)
    };
    var XHR,
    sdf,
    all,
    data = '';
    if (j === 'form') {
      sdf = document.getElementsByTagName('form') [0];
    } 
    else if (doc.Main === '.') {
      sdf = document.getElementsByClassName(doc.type) [0];
    } else if (doc.Main === '%') {
      sdf = document.getElementById(doc.type);
    } else {
    }
    var t = '';
    all = Parent.tName(sdf, 'input');
    for (var key = 0; key < all.length; key++) {
      data += '&' + all[key].name + '=' + all[key].value;
      t += data.replace('=', ':');
    }
    all = Parent.tName(sdf, 'textarea');
    for (var key = 0; key < all.length; key++) {
      data += '&' + all[key].name + '=' + all[key].value;
      t += data.replace('=', ':');
    }
    all = Parent.tName(sdf, 'select');
    for (var key = 0; key < all.length; key++) {
      data += '&' + all[key].name + '=' + all[key].value;
      t += data.replace('=', ':');
    }
    dataRoll = data.substring(1, data.length);
    this.values = dataRoll;
  }
  return this;
},
Form: function (j, info, secure) {
  // gos
  if (j.el && j.el != null) {
    var mode = j;
    var dest = 'true',
    dest1 = 'true';
    var keep_Ajax = {
    },
    keep_going = false;
    if (typeof j == 'object' && typeof j.Global == 'string') {
      var J = j;
      j = j.Global;
      Haxcv.Fn.doc = {
        select: null,
        loop: null,
        Main: j.charAt(0),
        type: j.substring(1, j.length)
      };
      var XHR,
      sdf,
      all,
      data = '';
      function customFun(e, fun) {
        var ac = true;
        if (info.Exception) {
          switch (typeof info.Exception)
            {
            case 'function':
              if (info.Exception(e) != true) {
                ac = false;
                return false;
              }
              break;
            case 'object':
              for (var i = 0; i < info.Exception.length; i++) {
                if (info.Exception[i](e) != true) {
                  ac = false;
                  return false;
                }
                break;
              }
              break;
          }
        }
        if (ac) {
          fun();
        }
      }
      if (J.Id) {
        // console.log(J.el)
        sdf = J.el;
        J.el.onsubmit = function (e) {
          data = ' ';
          e.this = _(e.target);
          var t = '';
          var action = _(e.target).attr('action');
          action = typeof action == 'string' ? action : '';
          all = sdf.elements;
          var mthOd = in_array([null,
          undefined], sdf.method) ? 'GET' : sdf.method.toLocaleUpperCase();
          for (var key = 0; key < all.length; key++) {
            var types = all[key];
            if (types.name != undefined || types.value != undefined) {
              if (types.type == 'submit' && empty(types.value)) {
                MessageBox('your Submit button is empty please give it value ');
                types.value = 'login';
              }
              var val = all[key].value;
              if (secure && mthOd == 'POST') {
                if (secure[0] > 40) {
                  secure[0] = 40
                }
                if (secure[0] < 1) {
                  secure[0] = 1
                }
                for (var a = 0; a < secure[0]; a++) {
                  val = Base64.encode(val);
                }
                if (all[key].type != 'file') {
                  if (all[key].type == 'radio') {
                    if (all[key].checked) {
                      keep_Ajax[all[key].name] = Url.encode(val);
                      data += '&' + all[key].name + '=' + Url.encode(val);
                      t += data.replace('=', ':');
                    }
                  } else {
                    if (all[key].type != 'reset') {
                      keep_Ajax[all[key].name] = Url.encode(all[key].type == 'checkbox' ? (all[key].checked ? 'on' : 'off')  : val);
                      data += '&' + all[key].name + '=' + Url.encode(val);
                      t += data.replace('=', ':');
                    }
                  }
                }
              } else {
                if (all[key].type != 'file') {
                  if (all[key].type == 'radio') {
                    if (all[key].checked) {
                      keep_Ajax[all[key].name] = Url.encode(val);
                      data += '&' + all[key].name + '=' + Url.encode(val);
                      t += data.replace('=', ':');
                    }
                  } else {
                    if (all[key].type != 'reset') {
                      keep_Ajax[all[key].name] = Url.encode(all[key].type == 'checkbox' ? (all[key].checked ? 'on' : 'off')  : val);
                      data += '&' + all[key].name + '=' + Url.encode(val);
                      t += data.replace('=', ':');
                    }
                  }
                }
              }
            }
          }
          dataRoll = data.substring(1, data.length);
          var fAccess = e.this.attr('enctype') == 'mutlipart/form-data' ? true : false;
          var fData = fAccess == true ? new FormData()  : keep_Ajax;
          if (fAccess) {
            fData = new FormData();
            for (var i = 0; i < e.this.el.length; i++) {
              var elm = e.this.el[i];
              if (elm.type == 'file' && !in_array(['true',
              true,
              '1',
              1], _(elm).attr('data-skip'))) {
                fData.append(elm.name.toString(), elm.files[0], elm.name);
              }
            }
            for (var k in keep_Ajax) {
              fData.append(k, Url.decode(keep_Ajax[k]));
            }
          }
          console.log(fData)
          function Ajax_exec() {
            _(Ajax).Request({
              url: action || '',
              method: sdf.method == undefined ? 'GET' : sdf.method,
              data: fData,
              upload: fAccess,
              before: function () {
                if (function_exists(info.before)) {
                  info.before(e);
                }
              },
              error: function (er) {
                if (function_exists(info.error)) {
                  info.error(er);
                }
              },
              progress: function (a, b, c) {
                if (function_exists(info.progress)) {
                  info.progress(a, b, c);
                }
              },
              info: function (data) {
                if (function_exists(info.info)) {
                  info.info(data, e);
                }
                dataRoll = '';
                data = ' ';
                keep_Ajax = {
                };
              },
              after: function () {
                if (function_exists(info.after)) {
                  info.after(e);
                }
                dataRoll = '';
                data = ' ';
                keep_Ajax = {
                };
              }
            }, function (response, result) {
              if (info && typeof info == 'function') {
                var all = sdf.elements;
                info(response, _(e.target));
                dataRoll = ' ';
                data = ' ';
                keep_Ajax = {
                };
              }
              if (result == 100011) {
                data = ' ';
              }
            }
            );
            data = ' ';
          }
          if (info.RequiredField) {
            var inf = info.RequiredField;
            FormEmpty(keep_Ajax, function () {
              // body...
              customFun(e, Ajax_exec);
            }, function () {
              if (function_exists(info.error)) {
                var NAMES = '',
                N = [
                ];
                for (var key in keep_Ajax) {
                  if (empty(keep_Ajax[key])) {
                    NAMES += key + '   ';
                    N.push(key);
                  }
                }
                info.error({
                  names: N,
                  message: 'All Fields are Required ! [ ' + NAMES + ' ]'
                });
                keep_Ajax = {
                };
              }
            }, inf);
            dataRoll = ' ';
            data = ' ';
          } else {
            customFun(e, Ajax_exec);
          }
          return false;
        }
      } 
      else {
        for (var i = 0; i < J.el.length; i++) {
          J.el[i].onsubmit = function (e) {
            dataRoll = ' ';
            data = ' '
            e.this = _(e.target);
            sdf = e.target;
            var t = '';
            var action = _(e.target).attr('action');
            action = typeof action == 'string' ? action : '';
            all = sdf.elements;
            var mthOd = in_array([null,
            undefined], sdf.method) ? 'GET' : sdf.method.toLocaleUpperCase();
            var asdf = [
            ];
            for (var key = 0; key < all.length; key++) {
              var types = all[key];
              if (types.name != undefined && types.value != undefined) {
                var val = all[key].value;
                if (secure && mthOd == 'POST') {
                  if (secure[0] > 40) {
                    secure[0] = 40
                  }
                  if (secure[0] < 1) {
                    secure[0] = 1
                  }
                  for (var a = 0; a < secure[0]; a++) {
                    val = Base64.encode(val);
                  }
                  if (all[key].type == 'radio') {
                    if (all[key].checked) {
                      keep_Ajax[all[key].name] = Url.encode(val);
                      data += '&' + all[key].name + '=' + Url.encode(val);
                      t += data.replace('=', ':');
                    }
                  } else {
                    if (all[key].type != 'reset') {
                      keep_Ajax[all[key].name] = Url.encode(all[key].type == 'checkbox' ? (all[key].checked ? 'on' : 'off')  : val);
                      data += '&' + all[key].name + '=' + Url.encode(val);
                      t += data.replace('=', ':');
                    }
                  }
                } else {
                  if (all[key].type == 'radio') {
                    if (all[key].checked) {
                      keep_Ajax[all[key].name] = Url.encode(val);
                      data += '&' + all[key].name + '=' + Url.encode(val);
                      t += data.replace('=', ':');
                    }
                  } else {
                    if (all[key].type != 'reset') {
                      keep_Ajax[all[key].name] = Url.encode(all[key].type == 'checkbox' ? (all[key].checked ? 'on' : 'off')  : val);
                      data += '&' + all[key].name + '=' + Url.encode(val);
                      t += data.replace('=', ':');
                    }
                  }
                }
              }
            }
            dataRoll = data.substring(1, data.length);
            var fAccess = e.this.attr('enctype') == 'mutlipart/form-data' ? true : false;
            var fData = fAccess == true ? new FormData()  : keep_Ajax;
            if (fAccess) {
              for (var i = 0; i < e.this.el.length; i++) {
                var elm = e.this.el[i];
                if (elm.type == 'file' && !in_array(['true',
                true,
                '1',
                1], _(elm).attr('data-skip'))) {
                  fData.append(elm.name, elm.files[0]);
                }
              }
              for (var k in keep_Ajax) {
                fData.append(k, Url.decode(keep_Ajax[k]));
              }
            }
            function Ajax_exec() {
              _(Ajax).Request({
                url: action || '',
                method: mthOd || 'GET',
                data: fData,
                upload: fAccess,
                before: function () {
                  if (function_exists(info.before)) {
                    info.before(e);
                  }
                },
                error: function (er) {
                  if (function_exists(info.error)) {
                    info.error(er);
                  }
                },
                progress: function (a, b, c) {
                  if (function_exists(info.progress)) {
                    info.progress(a, b, c);
                  }
                },
                info: function (data) {
                  if (function_exists(info.info)) {
                    info.info(data, e);
                  }
                  dataRoll = '';
                  data = ' ';
                  keep_Ajax = {
                  };
                },
                after: function () {
                  if (function_exists(info.after)) {
                    info.after(e);
                  }
                  dataRoll = '';
                  data = ' ';
                  keep_Ajax = {
                  };
                }
              }, function (response, result) {
                if (info && typeof info == 'function') {
                  var all = sdf.elements;
                  info(response, _(e.target));
                  dataRoll = '';
                  data = '';
                  keep_Ajax = {
                  };
                }
                if (result == 100011) {
                  data = '';
                }
              }
              );
              data = '';
            }
            if (info.RequiredField) {
              var inf = info.RequiredField;
              FormEmpty(keep_Ajax, function () {
                // body...
                customFun(e, Ajax_exec);
                keep_Ajax = {
                };
              }, function (er) {
                if (function_exists(info.error)) {
                  info.error(er);
                  keep_Ajax = {
                  };
                }
              }, inf)
              dataRoll = ' ';
              data = ' ';
            } else {
              customFun(e, Ajax_exec);
            }
            return false;
          }
        }
      }
    }
  }
  return this;
},
Upload: function (j, url, object) {
  var state;
  j = j.Global;
  Haxcv.Fn.doc = {
    select: null,
    loop: null,
    Main: j.charAt(0),
    type: j.substring(1, j.length)
  };
  var XHR,
  sdf,
  all,
  uplaodSatus,
  Continue = 200,
  Abort = 403,
  data = '';
  if (doc.Main === '.') {
    this.tr = '^';
    sdf = _('.' + doc.type).el;
  } else if (doc.Main === '%') {
    sdf = _('%' + doc.type).el;
  } else {
    this.tr = '^';
    sdf = _('input').el;
  }
  var formdata = new FormData();
  if (this.tr == '^' && this.tr) {
    var array;
    for (var a = 0; a < sdf.length; a++) {
      if (sdf[a].type == 'file') {
        if (sdf.length == 1) {
          array = '';
        } else {
          array = '[]';
        }
        if (sdf[a].value != '') {
          if (sdf[a].id == '' && sdf[a].name == '') {
            formdata.append(sdf[a].getAttribute('class') + array, sdf[a].files[0]);
          } else {
            for (var aB = 0; aB < sdf[a].files.length; aB++) {
              formdata.append(sdf[a].name + array, sdf[a].files[aB]);
            }
          }
        }
        state = 200;
      } else {
        state = 403;
      }
    }
  } else {
    if (sdf.type == 'file') {
      var f;
      if (sdf.name == '') {
        f = sdf.id;
      } else if (sdf.id == '' && sdf.name == '') {
        f = sdf.getAttribute('class');
      } else {
        f = sdf.name;
      }
      for (var aB = 0; aB < sdf.files.length; aB++) {
        formdata.append(f, sdf.files[aB]);
      }
      state = 200;
    } else {
      state = 403;
    }
  }
  if (state == 200) {
    _(Ajax).Request({
      url: url,
      method: 'POST',
      data: formdata,
      upload: true,
      progress: function (per, loaded, total) {
        if (function_exists(object.progress)) {
          object.progress(per, loaded, total);
        }
      },
      before: function () {
        if (function_exists(object.before)) {
          object.before();
        }
      },
      after: function (info) {
        if (function_exists(object.after)) {
          object.after(xhr);
        }
      },
      error: function (info) {
        if (function_exists(object.error)) {
          object.error(xhr);
        }
      },
      info: function (info) {
        if (function_exists(object.info)) {
          object.info(info);
        }
      }
    }, function (response, result) {
      if (object.info && typeof object.before == 'function') {
        object.info(response, '<img src=' + sdf.value + ' />');
      }
      if (response) {
        if (this.tr == '^' && this.tr) {
          var array;
          for (var a = 0; a < sdf.length; a++) {
            sdf[a].setAttribute('data_transfer', sdf[a].value + ' has been processed ');
            console.log(' uploaded finshed');
          }
        } else {
          console.log(' uploaded finshed');
        }
      }
      if (result == 100011) {
        data = '';
      }
    }, 'multipart/form-data');
  }
  return this;
},
src: function (v) {
  if (this.el != null) {
    if (v) {
      if (this.el.node == 'evt' && this.el.tar) {
        slef(this.Global).Abute('src', v);
        return self(this.Global).Abute('src');
      } else {
        _(this.Global).Abute('src', v);
        return _(this.Global).Abute('src');
      }
    }
  }
  return this;
},
class: function (v) {
  if (this.el != null) {
    if (v) {
      if (this.el.node == 'evt' && this.el.tar) {
        slef(this.Global).Abute('class', v);
        return self(this.Global).Abute('class');
      } else {
        _(this.Global).Abute('class', v);
        return _(this.Global).Abute('class');
      }
    } else {
      if (this.el.node == 'evt' && this.el.tar) {
        return self(this.Global).Abute('class');
      } else {
        return _(this.Global).Abute('class');
      }
    }
  }
  return this;
},
id: function (v) {
  if (this.el != null) {
    if (v) {
      if (this.el.node == 'evt' && this.el.tar) {
        slef(this.Global).Abute('id', v);
        return self(this.Global).Abute('id');
      } else {
        _(this.Global).Abute('id', v);
        return _(this.Global).Abute('id');
      }
    } else {
      if (this.el.node == 'evt' && this.el.tar) {
        return self(this.Global).Abute('id');
      } else {
        return _(this.Global).Abute('id');
      }
    }
  }
  return this;
},
function : function (v) {
  v();
  return this;
},
toURL: function (v) {
  var text;
  if (this.el.node == 'evt' && this.el.tar) {
    text = self(this.Global).html();
    self(this.Global).html('<a href="' + v + '">' + text + '</a>');
  } else {
    text = _(this.Global).html();
    _(this.Global).html('<a href="' + v + '">' + text + '</a>');
  }
  return this;
},
size: function (v) {
  if (this.el != null) {
    if (this.el == window) {
      if (v == width) {
        return Haxcv.Fn.innerWidth;
      } else if (v == height) {
        return Haxcv.Fn.innerHeight;
      } else if (v == total) {
        return Haxcv.Fn.innerHeight + window.innerWidth;
      }
    } else {
      /* if(this.input == "input" || this.tag == true  || this.class){
    Haxcv.Fn.tag_size = {
    width:this.el[0].offsetWidth, height:this.el[0].offsetHeight,
total:this.el[0].offsetWidth+this.el[0].offsetHeight
}

   if(v == width){
     return tag_size.width;
}else if(v == height){
           return tag_size.height;
}
else if(v == total){
return tag_size.total;


}

//}else{*/
      if (this.Id) {
        Haxcv.Fn.tag_size = {
          width: this.el.offsetWidth,
          height: this.el.offsetHeight,
          total: this.el.offsetWidth + this.el.offsetHeight
        }
        if (v == width) {
          return tag_size.width;
        } else if (v == height) {
          return tag_size.height;
        } 
        else if (v == total) {
          return tag_size.total;
        }
      } else {
        var wi = [
        ];
        if (v == width) {
          for (var i = 0; i < this.el.length; i++) {
            wi[i] = this.el[i].offsetWidth;
          }
        } else if (v == height) {
          for (var i = 0; i < this.el.length; i++) {
            wi[i] = this.el[i].offsetHeight;
          }
        } 
        else if (v == total) {
          for (var i = 0; i < this.el.length; i++) {
            wi[i] = this.el[i].offsetWidth + this.el[i].offsetHeight;
          }
        }
        return wi;
      }
      //} //

    }
  }
  return this;
},
width: function () {
  if (this.el != null) {
    if (this.el.node == 'evt' && this.el.tar) {
      return self(this.Global).size(width);
    } else {
      return _(this.Global).size(width);
    }
  }
  return this;
},
info: function () {
  return this;
},
height: function () {
  if (this.el != null) {
    if (this.el.node == 'evt' && this.el.tar) {
      return _(this.Global).size(height);
    } else {
      return _(this.Global).size(height);
    }
  }
  return this;
},
AddEvents: function AddEvent(k, clickfunction) {
  if (this.el != null) {
    if (typeof k == 'object') {
      var s = this.Global;
      var on = 'on';
      if (this.win == 'win') {
        for (i = 0; i < k.length; i++) {
          window.addEventListener(k[i], function (e, r) {
            e['this'] = _({
              node: 'evt',
              tar: e.target
            });
            clickfunction(e, _({
              node: 'evt',
              tar: e.target
            }));
            ;
          });
        }
      } 
      else if (this.doc == 'doc') {
        for (i = 0; i < k.length; i++) {
          document.addEventListener(k[i], function (e, r) {
            e['this'] = _({
              node: 'evt',
              tar: e.target
            });
            clickfunction(e, _({
              node: 'evt',
              tar: e.target
            }));
            ;
          });
        }
      } else {
        if (this.el == true) {
          this.el = this.el;
        }
        if (this.Id == 'id') {
          for (i = 0; i < k.length; i++) {
            this.el.addEventListener(k[i], function (e, r) {
              e['this'] = _({
                node: 'evt',
                tar: e.target
              });
              clickfunction(e, _({
                node: 'evt',
                tar: e.target
              }));
              ;
            });
          }
        } else {
          for (var a = 0; a < this.el.length; a++) {
            for (i = 0; i < k.length; i++) {
              this.el[a].addEventListener(k[i], function (e, r) {
                e['this'] = _({
                  node: 'evt',
                  tar: e.target
                });
                clickfunction(e, _({
                  node: 'evt',
                  tar: e.target
                }));
                ;
              });
            }
          }
        }
      }
    } else {
      var s = this.Global;
      var on = 'on' + k;
      if (this.win == 'win') {
        window[on] = function (e, r) {
          e['this'] = _({
            node: 'evt',
            tar: e.target
          });
          clickfunction(e, _({
            node: 'evt',
            tar: e.target
          }));
          ;
        }
      } 
      else if (this.doc == 'doc') {
        document[on] = function (e, r) {
          e['this'] = _({
            node: 'evt',
            tar: e.target
          });
          clickfunction(e, _({
            node: 'evt',
            tar: e.target
          }));
          ;
        }
      } else {
        if (this.el == true) {
          this.el = this.el;
        }
        if (this.Id == 'id') {
          this.el[on] = function (e, r) {
            e['this'] = _({
              node: 'evt',
              tar: e.target
            });
            clickfunction(e, _({
              node: 'evt',
              tar: e.target
            }));
            ;
            return false;
          }
        } else {
          for (var i = 0; i < this.el.length; i++) {
            this.el[i][on] = function (e, r) {
              e['this'] = _({
                node: 'evt',
                tar: e.target
              });
              clickfunction(e, _({
                node: 'evt',
                tar: e.target
              }));
              ;
              return false;
            }
          }
        }
      }
    }
  }
  return this;
},
fileSize: function fileSize() {
  if (this.el != null) {
    if (this.Id == 'id') {
      return this.el.files[0].size;
    } else {
      for (var i = 0; i < this.el.length; i++) {
        return this.el[i].files[0].size;
      }
    }
  }
  return this;
},
fileType: function fileType() {
  if (this.el != null) {
    if (this.Id == 'id') {
      return this.el.files[0].type;
    } else {
      for (var i = 0; i < this.el.length; i++) {
        return this.el[i].files[0].type;
      }
    }
  }
  return this;
},
files: function files(a) {
  if (this.el != null) {
    if (this.Id == 'id') {
      return this.el.files[a];
    } else {
      for (var i = 0; i < this.el.length; i++) {
        return this.el[i].files[a];
      }
    }
  }
  return this;
},
Effect: function (type, time, where) {
  if (this.el != null) {
    if (where) {
      if (this.usingof) {
        switch (where) {
          case 'all':
            for (var i = 0; i < self(this.Global).Chiled(children).length; i++) {
              Haxcv.prototype.call(type, time, self({
                node: 'evt',
                tar: self(this.Global).Chiled(children) [i]
              }), this.el);
              if (type == slideUp && self(this.Global).Chiled(children) [i].getAttribute('dest') != 'slideUp') {
                self(this.Global).Chiled(children) [i].setAttribute('ht_for', self(this.Global).Chiled(children) [i].offsetHeight);
              }
            }
            break;
          case 'first':
            Haxcv.prototype.call(type, time, self({
              node: 'evt',
              tar: self(this.Global).Chiled(firstElm)
            }), this.el);
            if (type == slideUp && self(this.Global).Chiled(firstElm).getAttribute('dest') != 'slideUp') {
              self(this.Global).Chiled(firstElm).setAttribute('ht_for', self(this.Global).Chiled(children) [i].offsetHeight);
            }
            break;
          case 'last':
            if (type == slideUp && self(this.Global).Chiled(lastElm).getAttribute('dest') != 'slideUp') {
              self(this.Global).Chiled(lastElm).setAttribute('ht_for', self(this.Global).Chiled(children) [i].offsetHeight);
            }
            Haxcv.prototype.call(type, time, self({
              node: 'evt',
              tar: self(this.Global).Chiled(lastElm)
            }), this.el);
            break;
        }
      } else {
        switch (where) {
          case 'all':
            for (var i = 0; i < _(this.Global).Chiled(children).length; i++) {
              if (type == slideUp && _(this.Global).Chiled(children) [i].getAttribute('dest') != 'slideUp') {
                _(this.Global).Chiled(children) [i].setAttribute('ht_for', _(this.Global).Chiled(children) [i].offsetHeight);
              }
              Haxcv.prototype.call(type, time, _(_(this.Global).Chiled(children) [i]), this.el);
            }
            break;
          case 'first':
            if (type == slideUp && _(this.Global).Chiled(firstElm).getAttribute('dest') != 'slideUp') {
              _(this.Global).Chiled(firstElm).setAttribute('ht_for', _(this.Global).Chiled(firstElm).offsetHeight);
            }
            Haxcv.prototype.call(type, time, _(_(this.Global).Chiled(firstElm)), this.el);
            break;
          case 'last':
            if (type == slideUp && _(this.Global).Chiled(lastElm).getAttribute('dest') != 'slideUp') {
              _(this.Global).Chiled(lastElm).setAttribute('ht_for', _(this.Global).Chiled(lastElm).offsetHeight);
            }
            Haxcv.prototype.call(type, time, _(_(this.Global).Chiled(lastElm)), this.el);
            break;
        }
      }
    } else {
      if (this.usingof) {
        if (type == slideUp && self(this.Global).Abute('dest') != 'slideUp') {
          self(this.Global).Abute('ht_for', self(this.Global).size(height));
        }
        Haxcv.prototype.call(type, time, self(this.Global), this.el);
      } else {
        if (type == slideUp && this.Id && this.el.setAttribute('dest') != 'slideUp') {
          this.el.setAttribute('ht_for', this.el.offsetHeight);
        } else if (type == slideUp && !this.Id) {
          for (var i = 0; i < this.el.length; i++) {
            if (this.el[i].setAttribute('Abute') != 'slideUp') {
              this.el[i].setAttribute('ht_for', this.el[i].offsetHeight);
            }
          }
        }
        Haxcv.prototype.call(type, time, _(this.Global), this.el);
      }
    }
    return this;
  }
}
}
},
Browser: function (array) {
for (i in array) {
return navigator[array[i]];
}
},
__constrcut: function () {
if (this.Haxcv.Fun === Haxcv.Fun) {
return new __constrcut();
}
}
}
Haxcv.Fn.Ready = function (status) {
if (this.Object == Object) {
Haxcv.prototype.ready(status);
} else {
console.log('\'' + this.argument + '\' is not working with majin library  becuase it is a ' + typeof this.argument + ' use Object');
}
return this;
};
Haxcv.Fn.XhrResult = '';
Haxcv.Fn.XhrPercent = '';
Haxcv.Fn.$ = Root;
Haxcv.Fn.init = $;
Haxcv.Fn.readyObject = {
$: $.prototype,
}
// ready dom list of function to use 

readyObject.$.Execcuted = Ready;
readyObject.$.ready = Ready;
readyObject.$.done = Ready;
readyObject.$.load = Ready;
Haxcv.Fn.Parent = {
ContentType: 'Content-Type',
xParseData: [
[
4,
200,
function (Ctype) {
var Connection = {
  Form: 'application/form',
  Uploud: 'maltipart/form-data',
  XmlStatus: 100011
};
if (Ctype[0] == Connection.Form && Ctype[1] == Connection.XmlStatus) {
  return 'application/x-www-form-urlencoded';
} else if (Ctype[0] == Connection.Uploud && Ctype[1] == Connection.XmlStatus) {
  return Connection.Uploud;
}
}
],
[
'multipart/form-data'
],
[
'application/octet-stream'
],
],
tName: function (a, elm) {
return a.getElementsByTagName(elm);
}
};
Haxcv.Fn.outOfDom = function (sel) {
if (window === this.window) {
return new outOfDom(sel);
}
if (sel == 'canvas') {
this.Id = 'Class';
this.get = sel;
this.Global = sel;
Self = sel;
this.el = document.getElementsByTagName('canvas') [0];
return this;
} 
else if (typeof sel == 'object' && sel.node == 'evt' && sel.tar) {
this.Global = sel.tar;
this.el = sel.tar;
this.usingof = true;
this.Id = 'id';
return this;
} else if (typeof sel == 'object') {
this.Global = sel;
this.el = sel;
this.Id = 'id';
return this;
} else {
var msg = 'this function is onely for Object use _(sel) for DOM selector ';
// cons ole.log(msg);
msg += '<br/>';
msg += '<span style=\'color:rgb(24, 132, 240);\'>outofDom(<span style=\'color:rgb(192, 145, 74);\'>\'' + sel + '\'</span>) </span>// just for Object selector will not work for Dom ';
msg += '<br/>';
msg += '/* use this code */ <span style=\'color:rgb(24, 132, 240);\'>_(<span style=\'color:rgb(192, 145, 74);\'>\'' + sel + '\'</span>)</span> // this function for selector And Onely one Object is Ajax';
MessageBox(msg);
}
};
Haxcv.Fn.self = outOfDom;
Haxcv.Fn._ = root;
Haxcv.Fn.newMethod = Object.create(_.prototype);
Haxcv.Fn.Elm = _;
Haxcv.Fn.selector = _;
_.prototype = Haxcv.__proto__._;
outOfDom.prototype = Haxcv.__proto__._;
_.prototype.CSS3 = Haxcv.__proto__._.style;
_.prototype.typing = function (text, time, loop) {
if (this.el != null) {
var s = 0,
end = text.length,
elm = this.Global;
var start = setInterval(function () {
s++;
_(elm).html(text.substring(0, s));
if (s > (end) - 1) {
  if (loop) {
    s = 0;
  } else {
    clearInterval(start);
  }
}
}, time);
}
return this;
}
Haxcv.each = {
insideElm: function (select, time) {
// console.log(select)
var Time = time / 1000;
Haxcv.Fn.fOut = {
'transition': 'opacity ' + Time + 's linear 0s',
'opacity': '0'
};
Haxcv.height = select.size(height);
Haxcv.Fn.style = 'style';
var elmt = select;
elmt[style](fOut);
var hide = setInterval(function () {
elmt[style]('display', 'none');
var count = elmt.Abute('style').split(';');
for (i in count) {
  if (count[i].match('none')) {
    //console.log(count[i]);
    clearInterval(hide, time);
    //elmt.Abute("style","display: none;");
  }
}
}, time);
//if()
},
fadeOut: function (select, time) {
if (select.el != null) {
var Time = time / 1000;
Haxcv.Fn.fOut = {
  'transition': 'opacity ' + Time + 's linear 0s',
  'opacity': '0'
};
Haxcv.height = select.size(height);
Haxcv.Fn.style = 'style';
var elmt = select;
elmt[style](fOut);
var hide = setInterval(function () {
  try {
    elmt[style]('display', 'none');
    var count = elmt.Abute('style').split(';');
    for (i in count) {
      if (count[i].match('none')) {
        //console.log(count[i]);
        clearInterval(hide, time);
        //elmt.Abute("style","display: none;");
      }
    }
  } catch (e) {
    clearInterval(hide);
  }
}, time);
//if()
}
},
fadeIn: function (select, time) {
var Time = time / 1000;
Haxcv.Fn.fIn = {
'transition': 'opacity ' + Time + 's linear 0s',
'opacity': '1',
};
//  Haxcv.height = select.size(height);
Haxcv.Fn.style = 'style';
var elmt = select;
elmt.style({
'display': 'block',
'opacity': '0'
});
var hide = setInterval(function () {
try {
  elmt[style](fIn);
  var count = elmt.attr('style').split(';');
  for (i in count) {
    if (count[i].match('block')) {
      clearInterval(hide, time);
      //elmt.Abute("style","display: block;");
    }
  }
} catch (e) {
  clearInterval(hide);
}
}, time / 100);
},
slideUp: function (select, time, el) {
var Time = time / 1000;
var ht = 0;
var elmt = select;
if (select.Tg || select.class) {
for (var i = 0; i < select.el.length; i++) {
  select.el[i]['style']['overflow'] = 'hidden';
  select.el[i]['style']['transition'] = 'height ' + Time + 's linear 0s';
  select.el[i]['style']['height'] = '0px';
}
}
if (select.Id) {
select.el['style']['overflow'] = 'hidden';
select.el['style']['transition'] = 'height ' + Time + 's linear 0s';
select.el['style']['height'] = '0px';
}
},
slideDown: function (select, time, ht) {
var Time = time / 1000;
var ht;
var elmt = select;
if (select.Tg) {
for (var i = 0; i < select.el.length; i++) {
  ht = select.el[i].getAttribute('ht_for');
  select.el[i]['style']['transition'] = 'height ' + Time + 's linear 0s';
  select.el[i]['style']['height'] = ht + 'px';
}
}
if (select.Id) {
ht = select.el[i].getAttribute('ht_for');
select.el['style']['overflow'] = 'hidden';
select.el['style']['transition'] = 'height ' + Time + 's linear 0s';
select.el['style']['height'] = ht + 'px';
}
},
}
Haxcv.Fn.$$ = _('$');
Haxcv.prototype = {
Hide: function (a, time) {
setInterval(function () {
a.style.display = 'none';
}, time + 1000);
},
Abute: function (a) {
Haxcv.Fn.dr = {
'display': 'block',
'overflow': 'hidden',
'marginTop': '0px',
'marginBottom': '0px',
'paddingTop': '0px',
'paddingBottom': '0px',
};
for (var key in dr) {
a.style[key] = dr[key];
}
//console.log(a)

},
win: 'win',
dom: 'doc',
createElm: function (elm, sel, dest) {
elm = elm.split(':');
var srt,
sr = document.createElement(elm[0]);
_(elm[1]).Append(sr);
if (dest && dest) {
if (sel == 'id') {
  sr.setAttribute('id', dest);
  sr = _('%' + dest);
} else if (sel == 'class') {
  sr.setAttribute('class', dest);
  sr = _('.' + dest);
} else {
  sr.setAttribute(sel, dest);
  sr = _(elm[0]);
}
} else {
sr = _(sr.nodeName);
}
return sr;
// return this;
},
Obj: {
script: function (elm, v) {
Haxcv.script('script:' + elm, 'src', v);
},
call: function (elm, fun, dest) {
if (dest == null) {
  $$.Form(elm, function (data) {
    fun(data);
  }
  );
} 
else {
  $$.Upload(elm, dest, function (data) {
    fun(data);
  }
  );
}
}
},
ready: function (fun) {
index.Default[0][index.Event[0]] = function (e) {
fun(e, Haxcv.Fn);
Haxcv.Fn.ajax = _(Ajax);
}
},
Events: function () {
func(e, s);
},
call: function (type, time, select, el, t) {
Haxcv.each[type](select, time, el);
}
}
Haxcv.Fn.Response = {
write: function (v) {
_('body').html(v);
},
delete : function () {
_('body').html(' ');
}
}
Haxcv.Fn.domHaxcvReady = true;
Haxcv.Fn.DomReady = true;
Haxcv.API = function (dom, appdom, fun) {
function returnDom() {
Haxcv.Fn.domHaxcvReady = true;
Haxcv.Fn.DomReady = true;
dom = true;
appdom = true;
}
win.AddEvents(['load'], returnDom);
this.Connect = function (obj) {
}
this.Response = function (fun) {
win.AddEvents(['load'], function () {
fun(v);
});
}
fun();
}
Haxcv.Fn.Default = 'preventDefault';
Haxcv.Fn.Obj = {
document: 123,
root: Haxcv.Fn,
function : function (v) {
v();
},
dom: document,
Case: function (con, true_fun, false_fun) {
if (con) {
true_fun();
} else {
if (false_fun) {
  false_fun();
}
}
},
ready: function (fun) {
//console.log(e.target.cookie);
//console.log(e.srcElement.all[6]);
//console.log(e);
},
Form: function (elm, fun) {
Haxcv.prototype.Obj.call(elm, fun, null);
},
Upload: function (elm, url, fun) {
Haxcv.prototype.Obj.call(elm, fun, url);
},
Ajax: function (object, s) {
var header = false;
var hr = {
Url: object.url,
Method: object.method,
Data: object.data,
}
if (object.header && typeof object.header == 'object') {
header = object.header;
}
$$.Request({
url: hr.Url,
header: header,
method: hr.Method,
data: hr.Data,
info: function (data, status) {
  if (object.info && typeof object.info == 'function') {
    object.info(data, status);
  }
},
progress: function (per, loaded, total) {
  if (object.progress && typeof object.progress == 'function') {
    object.progress(per, loaded, total);
  }
},
before: function () {
  if (object.before && typeof object.before == 'function') {
    object.before();
  }
},
after: function (info) {
  if (object.after && typeof object.after == 'function') {
    object.after(info);
  }
},
error: function (info) {
  if (object.error && typeof object.error == 'function') {
    object.error(info);
  }
},
}, s);
},
callback: {
ajax: function (el, v, value) {
var requestheader,
requestdata,
requestmethod,
requesturl;
if (el.fst != null) {
  if (typeof value == 'object' && value == '[object FormData]') {
    requestheader = true;
    requestdata = value;
    requestmethod = 'POST';
    requesturl = v;
  } else {
    requestheader = false;
    requestdata = v.split('?') [1];
    requestmethod = 'GET';
    requesturl = v.split('?') [0];
  }
  Obj.Ajax({
    url: requesturl,
    method: requestmethod,
    data: requestdata,
    upload: requestheader,
    info: function (data) {
      el.snd.html(data)
    }
  })
}
}
},
range: function range(s, e, ic, f) {
if (ic && typeof (e) == 'number' && typeof (s) == 'number' && typeof (ic) == 'number') {
ic = ic;
} else {
ic = 1;
}
if (s) {
s = s;
} else {
s = 0;
}
for (var i = s; i < e; i = i + ic) {
f(i);
}
//return this;

},
InArray: function (array, fun) {
this.func = function (a) {
fun(a);
}
Haxcv.extend.call.loop(loop, ARray, this.func);
},
InArrayloop: function (array, fun) {
this.func = function (a) {
fun(a);
}
Haxcv.extend.call.loop(loop, ARray, this.func);
//return this;
},
createElm: function (elm, sel, dest, status) {
var rd;
elm = elm.split(':');
var srt,
sr = document.createElement(elm[0]);
if (!status) {
_(elm[1]).Append(sr);
if (dest && dest) {
  if (sel == 'id') {
    sr.setAttribute('id', dest);
    sr = _('%' + dest);
  } else if (sel == 'class') {
    sr.setAttribute('class', dest);
    sr = _('.' + dest);
  } else {
    sr.setAttribute(sel, dest);
    sr = _(elm[0]);
  }
} else {
  sr = _(sr.nodeName);
}
rd = sr;
} else {
if (dest && dest) {
  if (sel == 'id') {
    sr.setAttribute('id', dest);
  } else if (sel == 'class') {
    sr.setAttribute('class', dest);
  } else {
    sr.setAttribute(sel, dest);
  }
} else {
}
rd = sr;
}
return rd;
// return this;
},
}
Haxcv.Fn.Ajax = '$';
Haxcv.Fn.loop = 'loop';
Haxcv.Fn.array = 'array';
Haxcv.Fn.ARray = 'Array';
var us = _('$');
Haxcv.Fn.isset = true;
Haxcv.Fn.direct_socket = {
cookie: 'cookie',
};
Haxcv.Fn.width = 'width';
Haxcv.Fn.height = 'height';
Haxcv.Fn.total = 'total';
Haxcv.Fn.AsHtml = 'AsHtml';
Haxcv.Fn.AsAttribute = 'AsAttribute';
Haxcv.Fn.slideDown = 'slideDown';
Haxcv.Fn.slideUp = 'slideUp';
Haxcv.Fn.fadeIn = 'fadeIn';
Haxcv.Fn.fadeOut = 'fadeOut';
Haxcv.Fn.show = 'show';
Haxcv.Fn.hide = 'hide';
Haxcv.Fn.index = {
Default: [
Haxcv.Fn,
document
],
Event: [
'onload',
'onunload',
'onabort',
'onreadystatechange',
'onprogress',
'onclick',
'onchange',
'dblclick',
'onmouseover',
'onmouseleave',
'onmouseup',
'onmousedown',
'onmouseenter',
'onmousemove',
'oncontextmenu'
],
};
Haxcv.Fn.Server = index.Default[1];
Haxcv.Fn.Win = index.Default[0];
Haxcv.Fn.Doc = index.Default[1];
Haxcv.Fn.code = {
el: {
m: 'querySelectorAll',
ById: 'getElementById',
}
};
Haxcv.Fn.et = Object.create(code);
Haxcv.Fn.Jsn = {
m: function (a, elm) {
return a[et.el['m']](elm);
},
ById: function (a, elm) {
return a[et.el['ById']](elm);
},
arguments: [
function (b) {
return typeof b;
}
]
};
Haxcv.Fn.App_start = {
check: function () {
// body...
},
login: function (auth, login) {
// body...
},
error: function (argument) {
// body...
}
};
Haxcv.Fn.Maps = true;
Haxcv.Fn.API = {
HaxcvLogin: function (a) {
},
Google: function (action, elm) {
if (action == true) {
var myCenter = new google.maps.LatLng(51.508742, - 0.12085);
function initialize()
{
  var mapProp = {
    center: myCenter,
    zoom: 5,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  };
  var map = new google.maps.Map(_(elm), mapProp);
  var marker = new google.maps.Marker({
    position: myCenter,
    title: 'Click to zoom'
  });
  marker.setMap(map);
  google.maps.event.addListener(marker, 'click', function () {
    map.setZoom(9);
    map.setCenter(marker.getPosition());
  }
  );
}
google.maps.event.addDomListener(Haxcv.Fn, 'load', initialize);
} else {
}
}
}
Haxcv.Fn.$GET = {
};
Haxcv.Fn.$COOKIE = {
};
Haxcv.Fn.$SERVER = {
};
Haxcv.Fn.$REQUEST = {
};
Haxcv.Fn.$Form = {
};
var request = document.cookie;
request = request.split('; ');
for (i in request) {
$COOKIE[request[i].split('=') [0]] = request[i].split('=') [1];
}
var get;
var request = Haxcv.Fn.location.search;
request = request.substring(1, request.length);
request = request.split('&');
for (i in request) {
$GET[request[i].split('=') [0]] = request[i].split('=') [1];
}
$REQUEST = $GET;
$Form = $GET;
Haxcv.Fn.Request = {
To: {
SSL: function () {
if ($_SERVER('PROTOCOL') == 'http:') {
  var url = Haxcv.Fn.location;
  s = new String(url);
  url.href = s.replace('http:', 'https:');
}
},
url: function (url) {
Haxcv.Fn.location.href = url;
}
},
Read: function (file, fun) {
if (fun) {
_(Ajax).Request({
  url: file,
  method: 'get',
  data: null,
  info: function (data) {
    fun(data);
  }
});
}
},
GET: function (a) {
return $_GET(a);
},
COOKIE: function (a) {
return $_GET(a);
},
}
Haxcv.Fn.$_GET = function (a, s) {
if (s == isset) {
var get;
var request = Haxcv.Fn.location.search;
request = request.substring(1, request.length);
request = request.split('&');
for (i in request) {
if (request[i].split('=') [0] == a) {
  return true;
}
}
} else if (s == 'hii') {
} else {
var get;
var request = Haxcv.Fn.location.search;
request = request.substring(1, request.length);
request = request.split('&');
for (i in request) {
if (request[i].split('=') [0] == a) {
  return request[i].split('=') [1];
}
}
}
}
Haxcv.Fn.Form = $_GET;
Haxcv.Fn.$_REQUEST = function (a, s) {
if (s == isset) {
return $_GET(a, isset);
} else {
return $_GET(a);
}
}
$_COOKIE = function (a, s) {
if (s == isset) {
var request = document.cookie;
request = request.split('; ');
for (i in request) {
if (request[i].split('=') [0] == a) {
  return true;
} else {
  return false;
}
}
} else {
var request = document.cookie;
request = request.split('; ');
for (i in request) {
if (request[i].split('=') [0] == a) {
  return request[i].split('=') [1];
}
}
}
}
;
setcookie = function (obj) {
obj.value = obj.value || ' ';
obj.name = obj.name || '[::]';
obj.expires = obj.expires || ' ';
obj.path = obj.path || '/';
Server[direct_socket.cookie] = obj.name + '=' + obj.value + '; expires=' + obj.expires + '; path=' + obj.path;
}
Haxcv.Fn.Es = {
reElm: function (re, target) {
target = document.getElementsByClassName(target);
for (var s = 0; s < target.length; s++) {
re.removeChild(target[s]);
}
},
reclss: function (re, target) {
target = document.getElementsByTagName(target);
for (var s = 0; s < target.length; s++) {
re.removeChild(target[s]);
}
},
}
Haxcv.Fn.win = _(Win);
Haxcv.Fn.dom = _(Doc);
Haxcv.Fn.$$$ = Obj;
Haxcv.Fn._$ = {
win: win,
Body: _('body'),
Input: _('input'),
Form: _('form'),
Img: _('img'),
Div: _('div'),
}
Haxcv.Fn.outer = true;
Haxcv.Fn.check = false;
Haxcv.Fn.cts = false;
Haxcv.Fn.server = [
'URL',
'BASE_URL',
'CHARSET',
'CHARACTER_SET',
'COMPAT_MODE',
'CONTENT_TYPE',
'DEFAULT_CHARSET',
'DESIGN_MODE',
'DOCUMENT_URI',
'DOMAIN',
'INPUT_ENCODING',
'LAST_MODIFIED',
'REQUEST',
'HTTP_URL',
];
Haxcv.Fn.SERVER = [
'URL',
'baseURI',
'charset',
'characterSet',
'compatMode',
'contentType',
'defaultCharset',
'designMode',
'documentURI',
'domain',
'inputEncoding',
'lastModified',
'search',
'location'
];
Haxcv.Fn.Br = Haxcv.Fn.location;
window.$_SERVER = function (a) {
if (a == 'HOST' || a == 'HOST_NAME') {
return Br['host'];
} else if (a == 'HREF') {
return Haxcv.Fn.location['href'];
} else if (a == 'URL') {
return Br['origin'];
} else if (a == 'HTTP_URL') {
return Br;
} else if (a == 'PATH_NAME' || a == 'JS_SELF' || a == 'SELF') {
return Br['pathname'];
} else if (a == 'PROTOCOL') {
return Br['protocol'];
} else if (a == 'REQUEST' || a == 'GET') {
return Br['search'];
} else if (a == 'USER_AGENT') {
return navigator['userAgent'];
} else if (a == 'NAVIGATOR') {
return navigator;
} else if (a == 'BROWSER') {
var br = navigator['userAgent'];
if (br.match('OPR')) {
return 'Opera';
} else if (br.match('YaBrowser')) {
return 'YaBrowser';
} else if (br.match('Firefox')) {
return 'Firefox';
} else if (br.match('Chrome')) {
return 'Chrome';
} else if (br.match('IE')) {
return 'Internet Explorer';
} else if (br.match('Safari')) {
return 'Safari';
} 
else if (br.match('.NET')) {
return 'Internet Explorer';
}
} else if (a == 'PLATFORM') {
return navigator['platform'];
} else if (a == 'OS') {
return navigator['oscpu'];
} else if (a == 'CHACHE') {
return Haxcv.Fn['caches'];
} else if (a == 'CHARSET' || 'CHARACTER_SET') {
return document['characterSet'];
} 
else {
alert(0)
/* for (i in SERVER) {
                        
                        if (a == server[i]) {
                            
                            return  Haxcv.Fn[SERVER[i]];
                        
                        
                        
                        }
                       
                    
                    }*/
}
}
if ($_SERVER('BROWSER') != 'Firfox') {
/*
                        var cache = e.currentTarget.ApplicationCache;
                       
          Haxcv.Fn.Chache = {
            
            Checking:cache.CHECKING,
            Downloading:cache.DOWNLOADING,
            Idle:cache.IDLE,
            Obsolete:cache.OBSOLETE,
            Uncached:cache.UNCACHED,
            UpdateReady:cache.UPDATEREADY,




          };
*/
}
Haxcv.Fn.click = 'click';
Haxcv.Fn.rightclick = 'rightClick';
Haxcv.Fn.dblclick = 'dblclick';
Haxcv.Fn.focus = 'focus';
Haxcv.Fn.moseover = 'mouseover';
Haxcv.Fn.mouseout = 'mouseout';
Haxcv.Fn.mousemove = 'mousemove';
Haxcv.Fn.mousedown = 'mousedown';
Haxcv.Fn.mouseup = 'mouseup';
Haxcv.Fn.keyup = 'keyup';
Haxcv.Fn.keydown = 'keydown';
Haxcv.Fn.keypress = 'keypress';
Haxcv.Fn.load = 'load';
Haxcv.Fn.html = 'html';
Haxcv.Fn.css = 'style';
Haxcv.Fn.style = 'style';
Haxcv.Fn.htmlChars = function (html) {
html = html.replace('>', '&gt;').replace('<', '&lt;').replace('</', '&lt;/');
return html;
};
/*

  * OOP Addetional function
  *games 
  *media
  *App
  *

  */
function substr(str, a, b) {
return str.substring(a, b);
}
function Char(str, a) {
return str.charAt(a);
}
function __BinSys() {
}
__BinSys.prototype = {
bin: function (num, type) {
if (typeof num == 'string') {
var PADDING = '';
var string = num;
var resultArray = [
];
for (var i = 0; i < string.length; i++) {
  var compact = string.charCodeAt(i).toString(2);
  if (compact.length == 7) {
    PADDING += ' 0' + compact;
  } else if (compact.length == 6) {
    PADDING += ' 00' + compact;
  } else if (compact.length == 5) {
    PADDING += ' 000' + compact;
  } else if (compact.length == 4) {
    PADDING += ' 0000' + compact;
  } else if (compact.length == 3) {
    PADDING += ' 00000' + compact;
  } else if (compact.length == 2) {
    PADDING += ' 000000' + compact;
  } else if (compact.length == 1) {
    PADDING += ' 0000000' + compact;
  }
}
var bin = PADDING;
} else if (typeof num == 'number') {
var bin = num.toString(2);
var len = 8,
sin = '0';
if (bin.charAt(0) == '-') {
  sin = '1';
  bin = substr(bin, 1, bin.length);
} else {
  sin = '0';
}
if ((type && typeof type == 'number') && (type == 8 || type == 16 || type == 32)) {
  len = type;
}
for (var i = 0; i < len; i++) {
  if (bin.length == i) {
    bin = '0' + bin;
  }
}
bin = sin + bin.substring(1, bin.length);
}
return bin;
},
bintostr: function (str) {
var binString = '';
str.split(' ').map(function (bin) {
binString += String.fromCharCode(parseInt(bin, 2));
});
return binString;
},
hex: function (str, type) {
var bin = '0x';
bin += parseInt(str, 10).toString(16);
return bin;
},
hextobin: function (str, type) {
var bin = '0x';
bin = parseInt(str, 16).toString(2);
return bin;
},
hextoint: function (str, type) {
var bin = '0x';
if (typeof str == 'number') {
str = str.toString(16);
}
bin = parseInt(str, 16).toString(10);
bin = parseInt(bin, 10)
return bin;
},
inttohex: function (str, type) {
var d = '0x'
d += parseInt(str, 10).toString(16);
return d;
},
inttobin: function (str, type) {
var bin = '0x';
if (typeof str == 'number') {
} else {
bin += parseInt(str, 10).toString(2);
}
return bin;
},
bintohex: function (str, type) {
var bin = '0x',
chm,
cds = [
0,
1,
2,
3,
4,
5,
6,
7,
8,
9,
'a',
'b',
'c',
'd',
'e',
'f'
];
if (typeof str == 'number') {
} else {
bin = parseInt(str, 2).toString(16);
chm = parseInt(parseInt(str, 2).toString(16), 10);
if (chm > 9 && chm < 16) {
  bin = cds[chm];
} else {
  bin = bin;
}
}
return bin;
},
}
Haxcv.Fn.Base64 = {
encode: function (s) {
try {
var r;
r = btoa(s);
return r;
} catch (er) {
er = er.toLocaleString();
er = er.replace(' ', '<br/>');
return er;
}
},
decode: function (s) {
try {
var r;
r = atob(s);
//throw "Inavlid Base64 Syntax";
return r;
} catch (er) {
er = er.toLocaleString();
er = er.replace(' ', '<br/>');
return er;
}
}
}
Haxcv.Fn.arg = 'arguments';
Haxcv.Fn.Url = {
encode: function (s) {
var r;
r = encodeURIComponent(s);
return r;
},
decode: function (s) {
var r;
r = decodeURIComponent(s);
return r;
},
isValid: function (url) {
function RegEx() {
return /^(ftp|https|http|tcp|ws|wss?):\/\/+(www\.)?[a-z0-9\-\.]{3,}\.[a-z]{3}$/.test(RegEx[arg][0]);
}
return RegEx(url)
}
}
Haxcv.Fn.shellCommander = new __BinSys();
Haxcv.Fn.toBinary = function (num, type) {
var Bin = shellCommander.bin(num, type);
return Bin;
}
Haxcv.Fn.HexToBinary = function (num, type) {
var Bin = shellCommander.hextobin(num, type);
return Bin;
}
Haxcv.Fn.HexToInt = function (num, type) {
var Bin = shellCommander.hextoint(num, type);
return Bin;
}
Haxcv.Fn.BinaryToString = function (str) {
var Str = shellCommander.bintostr(str);
return Str;
}
Haxcv.Fn.BinaryToHex = function (str) {
var Str = shellCommander.bintohex(str);
return Str;
}
Haxcv.Fn.IntToHex = function (str) {
var Hex = shellCommander.inttohex(str);
return Hex;
}
Haxcv.Fn.draw = function (elm, obj) {
var cnv = newElm('canvas'),
ctx = cnv.getContext('2d');
cnv.width = elm.naturalWidth;
cnv.height = elm.naturalHeight;
ctx.drawImage(elm, 0, 0, cnv.width, cnv.height);
var X = 1,
Y = 1,
pxl = 1,
color = '#000000';
if (obj.x && typeof obj.x == 'number') {
X = obj.x;
}
if (obj.y && typeof obj.y == 'number') {
Y = obj.y;
}
if (obj.Pixels && typeof obj.Pixels == 'number') {
pxl = obj.Pixels;
}
if (obj.color && typeof obj.color == 'string') {
color = obj.color;
}
ctx.fillStyle = color;
ctx.fillRect(X - (pxl / 2), Y - (pxl / 2), pxl, pxl);
var img = cnv.toDataURL('image/png');
elm.src = img;
}
Haxcv.Fn.CustomColor = function (elm, color, to) {
var where = to;
var mug = elm,
ncl = [
];
var canvas = newElm('canvas');
canvas.width = elm.width;
canvas.height = elm.height;
var ctx = canvas.getContext('2d');
ctx.drawImage(mug, 0, 0, elm.width, elm.height);
var originalPixels = ctx.getImageData(0, 0, elm.width, elm.height);
var currentPixels = ctx.getImageData(0, 0, elm.width, elm.height);
var newcl,
newcl2;
if (typeof color == 'object') {
var cls = {
};
cls['R'] = color[0];
cls['G'] = color[1];
cls['B'] = color[2];
if (color.length == 4) {
cls['A'] = color[3];
}
} else {
var cls = hexToRGB(color);
}
if (typeof where == 'object') {
var new_color = {
};
new_color['R'] = where[0];
new_color['G'] = where[1];
new_color['B'] = where[2];
ncl[0] = where[0]
ncl[1] = where[1]
ncl[2] = where[2]
if (where.length == 4) {
new_color['A'] = where[3]
ncl[3] = where[3]
}
} else {
var new_color = hexToRGB(where);
}
ncl = new_color;
try {
if (!originalPixels) return; // Check if image has loaded
var newColor = color;
for (var I = 0, L = originalPixels.data.length; I < L; I += 4)
{
if (currentPixels.data[I + 3] > 0) // If it's not a transparent pixel
{
  // 124, 83, 89, 255 44, 50, 66, 255
  if (ncl.length == 4) {
    if ((currentPixels.data[I] == ncl[0] && currentPixels.data[I + 1] == ncl[1] && currentPixels.data[I + 2] == ncl[2] && currentPixels.data[I + 3] == ncl[3])
    ) {
      //  currentPixels.data[I + 3] = 10.5;
      if (color.length == 4) {
        currentPixels.data[I] = originalPixels.data[I] / 255 * newColor.R;
        currentPixels.data[I + 1] = originalPixels.data[I + 1] / 255 * newColor.G;
        currentPixels.data[I + 2] = originalPixels.data[I + 2] / 255 * newColor.B;
        currentPixels.data[I + 3] = originalPixels.data[I + 3] / 255 * newColor.A;
      } else if (color.length == 3) {
        currentPixels.data[I] = originalPixels.data[I] / 255 * newColor.R;
        currentPixels.data[I + 1] = originalPixels.data[I + 1] / 255 * newColor.G;
        currentPixels.data[I + 2] = originalPixels.data[I + 2] / 255 * newColor.B;
      }
    }
  } else if (ncl.length == 3) {
    if ((currentPixels.data[I] == ncl[0] && currentPixels.data[I + 1] == ncl[1] && currentPixels.data[I + 2] == ncl[2])
    ) {
      //  currentPixels.data[I + 3] = 10.5;
      if (color.length == 4) {
        currentPixels.data[I] = originalPixels.data[I] / 255 * newColor.R;
        currentPixels.data[I + 1] = originalPixels.data[I + 1] / 255 * newColor.G;
        currentPixels.data[I + 2] = originalPixels.data[I + 2] / 255 * newColor.B;
        currentPixels.data[I + 3] = originalPixels.data[I + 3] / 255 * newColor.A;
      } else if (color.length == 3) {
        currentPixels.data[I] = originalPixels.data[I] / 255 * newColor.R;
        currentPixels.data[I + 1] = originalPixels.data[I + 1] / 255 * newColor.G;
        currentPixels.data[I + 2] = originalPixels.data[I + 2] / 255 * newColor.B;
      }
    }
  }
  // currentPixels.data[I + 3] = 55.5;

}
//  console.log(currentPixels)

}
ctx.putImageData(currentPixels, 0, 0);
var url = canvas.toDataURL('image/png');
mug.src = url;
return url;
} catch (e) {
MessageBox(e)
}
function getPixels(img)
{
try {
canvas.width = img.width;
canvas.height = img.height;
/*  ctx.drawImage(img, 0, 0, img.naturalWidth, img.naturalHeight);
    originalPixels = ctx.getImageData( 0, 0, img.naturalWidth, img.naturalHeight);
    currentPixels = ctx.getImageData(0, 0, img.naturalWidth, img.naturalHeight);
*/
ctx.drawImage(img, 0, 0, img.width, img.height);
originalPixels = ctx.getImageData(0, 0, img.width, img.height);
currentPixels = ctx.getImageData(0, 0, img.width, img.height);
img.onload = null;
} catch (e) {
MessageBox(e)
}
}
function hexToRGB(hex)
{
var long = parseInt(hex.replace(/^#/, ''), 16);
return {
R: (long >>> 16) & 255,
G: (long >>> 8) & 255,
B: long & 255
};
}
function changeColor(es, color, ncl, mug)
{
try {
if (!originalPixels) return; // Check if image has loaded
var newColor = color;
for (var I = 0, L = originalPixels.data.length; I < L; I += 4)
{
  if (currentPixels.data[I + 3] > 0) // If it's not a transparent pixel
  {
    // 124, 83, 89, 255 44, 50, 66, 255
    if (ncl.length == 4) {
      if ((currentPixels.data[I] == ncl[0] && currentPixels.data[I + 1] == ncl[1] && currentPixels.data[I + 2] == ncl[2] && currentPixels.data[I + 3] == ncl[3])
      ) {
        //  currentPixels.data[I + 3] = 10.5;
        if (color.length == 4) {
          currentPixels.data[I] = originalPixels.data[I] / 255 * newColor.R;
          currentPixels.data[I + 1] = originalPixels.data[I + 1] / 255 * newColor.G;
          currentPixels.data[I + 2] = originalPixels.data[I + 2] / 255 * newColor.B;
          currentPixels.data[I + 3] = originalPixels.data[I + 3] / 255 * newColor.A;
        } else if (color.length == 3) {
          currentPixels.data[I] = originalPixels.data[I] / 255 * newColor.R;
          currentPixels.data[I + 1] = originalPixels.data[I + 1] / 255 * newColor.G;
          currentPixels.data[I + 2] = originalPixels.data[I + 2] / 255 * newColor.B;
        }
      }
    } else if (ncl.length == 3) {
      if ((currentPixels.data[I] == ncl[0] && currentPixels.data[I + 1] == ncl[1] && currentPixels.data[I + 2] == ncl[2])
      ) {
        //  currentPixels.data[I + 3] = 10.5;
        if (color.length == 4) {
          currentPixels.data[I] = originalPixels.data[I] / 255 * newColor.R;
          currentPixels.data[I + 1] = originalPixels.data[I + 1] / 255 * newColor.G;
          currentPixels.data[I + 2] = originalPixels.data[I + 2] / 255 * newColor.B;
          currentPixels.data[I + 3] = originalPixels.data[I + 3] / 255 * newColor.A;
        } else if (color.length == 3) {
          currentPixels.data[I] = originalPixels.data[I] / 255 * newColor.R;
          currentPixels.data[I + 1] = originalPixels.data[I + 1] / 255 * newColor.G;
          currentPixels.data[I + 2] = originalPixels.data[I + 2] / 255 * newColor.B;
        }
      }
    }
    // currentPixels.data[I + 3] = 55.5;

  }
  //  console.log(currentPixels)

}
ctx.putImageData(currentPixels, 0, 0);
var url = canvas.toDataURL('image/png');
mug.src = url;
return url;
} catch (e) {
MessageBox(e)
}
}
}
Haxcv.Fn.blackAndwhite = function (el, color, opacity) {
try {
if (color != undefined) {
if (typeof color == 'string' && color.length == 7) {
  color = hexToRGB(color);
} else if (typeof color == 'object') {
  color = {
    R: color[0],
    G: color[1],
    B: color[2]
  };
}
var newColor = color;
} else {
color = false;
}
var mug = el;
var canvas = newElm('canvas');
canvas.width = el.width;
canvas.height = el.height;
var ctx = canvas.getContext('2d');
ctx.drawImage(mug, 1, 1, canvas.width, canvas.height);
var originalPixels,
currentPixels;
originalPixels = ctx.getImageData(0, 0, canvas.width, canvas.height);
currentPixels = ctx.getImageData(0, 0, canvas.width, canvas.height);
if (!originalPixels) return; // Check if image has loaded
for (var I = 0, L = originalPixels.data.length; I < L; I += 4)
{
if (currentPixels.data[I + 3] > 0) // If it's not a transparent pixel
{
  // 124, 83, 89, 255 44, 50, 66, 255
  //  if(currentPixels.data[I] < 255 && currentPixels.data[I + 1] > 156 && currentPixels.data[I + 2] < 200)
  var clsd = (originalPixels.data[I] + originalPixels.data[I + 1] + originalPixels.data[I + 2]) / 3;
  if (color == false) {
    currentPixels.data[I] = clsd;
    currentPixels.data[I + 1] = clsd;
    currentPixels.data[I + 2] = clsd;
  } else {
    currentPixels.data[I] = clsd / 255 * newColor.R;
    currentPixels.data[I + 1] = clsd / 255 * newColor.G;
    currentPixels.data[I + 2] = clsd / 255 * newColor.B;
    // currentPixels.data[I + 3] = 55.5;
  }
  if (opacity) {
    currentPixels.data[I + 3] = opacity;
  }
  /* if(color != false){
                               currentPixels.data[I] = originalPixels.data[I]  / 255  * newColor.R;
                currentPixels.data[I + 1] = originalPixels.data[I + 1] / 255  * newColor.G;
                currentPixels.data[I + 2] = originalPixels.data[I + 2] / 255 * newColor.B;
                 
                 }*/

}
//  console.log(currentPixels)

}
ctx.putImageData(currentPixels, 0, 0);
var url = canvas.toDataURL('image/png');
return url;
} catch (e) {
}
}
Haxcv.Fn.toIco = function (el, color, to, opacity) {
try {
if (color != undefined) {
if (typeof color == 'string' && color.length == 7) {
  color = hexToRGB(color);
} else if (typeof color == 'object') {
  color = {
    R: color[0],
    G: color[1],
    B: color[2]
  };
}
if (typeof to == 'string' && to.length == 7) {
  to = hexToRGB(to);
} else if (typeof color == 'object') {
  to = {
    R: color[0],
    G: color[1],
    B: color[2]
  };
}
var newColor = color;
var newColor1 = to;
} else {
color = false;
}
var mug = el;
var canvas = newElm('canvas');
canvas.width = el.width;
canvas.height = el.height;
var ctx = canvas.getContext('2d');
ctx.drawImage(mug, 1, 1, canvas.width, canvas.height);
var originalPixels,
currentPixels;
originalPixels = ctx.getImageData(0, 0, canvas.width, canvas.height);
currentPixels = ctx.getImageData(0, 0, canvas.width, canvas.height);
if (!originalPixels) return; // Check if image has loaded
for (var I = 0, L = originalPixels.data.length; I < L; I += 4)
{
if (currentPixels.data[I + 3] > 0) // If it's not a transparent pixel
{
  // 124, 83, 89, 255 44, 50, 66, 255
  if (currentPixels.data[I] == newColor.R && currentPixels.data[I + 1] == newColor.G && currentPixels.data[I + 2] == newColor.B) {
    currentPixels.data[I] = originalPixels.data[I] / 255 * newColor1.R;
    currentPixels.data[I + 1] = originalPixels.data[I + 1] / 255 * newColor1.G;
    currentPixels.data[I + 2] = originalPixels.data[I + 2] / 255 * newColor1.B;
    // currentPixels.data[I + 3] = 55.5;
    currentPixels.data[I + 3] = opacity;
  }
  /* if(color != false){
                               currentPixels.data[I] = originalPixels.data[I]  / 255  * newColor.R;
                currentPixels.data[I + 1] = originalPixels.data[I + 1] / 255  * newColor.G;
                currentPixels.data[I + 2] = originalPixels.data[I + 2] / 255 * newColor.B;
                 
                 }*/

}
//  console.log(currentPixels)

}
ctx.putImageData(currentPixels, 0, 0);
var url = canvas.toDataURL('image/png');
return url;
} catch (e) {
}
}
Haxcv.Fn.Gallery = function (elm, color, type) {
var mug = elm;
var canvas = document.createElement('canvas');
var ctx = canvas.getContext('2d');
//document.body.appendChild(canvas);
var originalPixels = null;
var currentPixels = null;
getPixels(mug);
if (type == 'object') {
var cls = {
};
color['R'] = color[0];
color['G'] = color[1];
color['B'] = color[2];
return changeColor(2, color);
} else {
switch (color.length) {
case 5:
  color = color + color.charAt(1) + color.charAt(1);
  break;
case 4:
  color = color + color.charAt(1) + color.charAt(1) + color.charAt(1);
  break;
case 3:
  color = color + color.charAt(1) + color.charAt(1) + color.charAt(1) + color.charAt(1);
  break;
case 2:
  color = color + color.charAt(1) + color.charAt(1) + color.charAt(1) + color.charAt(1) + color.charAt(1);
  break;
case 1:
  color = color + color.charAt(1) + color.charAt(1) + color.charAt(1) + color.charAt(1) + color.charAt(1) + color.charAt(1);
  break;
}
return changeColor(2, hexToRGB(color));
}
function getPixels(img)
{
try {
canvas.width = img.width;
canvas.height = img.height;
/*  ctx.drawImage(img, 0, 0, img.naturalWidth, img.naturalHeight);
    originalPixels = ctx.getImageData( 0, 0, img.naturalWidth, img.naturalHeight);
    currentPixels = ctx.getImageData(0, 0, img.naturalWidth, img.naturalHeight);
*/
ctx.drawImage(img, 0, 0, img.width, img.height);
originalPixels = ctx.getImageData(0, 0, img.width, img.height);
currentPixels = ctx.getImageData(0, 0, img.width, img.height);
img.onload = null;
} catch (e) {
MessageBox(e)
}
}
function hexToRGB(hex)
{
var long = parseInt(hex.replace(/^#/, ''), 16);
return {
R: (long >>> 16) & 255,
G: (long >>> 8) & 255,
B: long & 255
};
}
function changeColor(es, color)
{
try {
if (!originalPixels) return; // Check if image has loaded
var newColor = color;
for (var I = 0, L = originalPixels.data.length; I < L; I += 4)
{
  if (currentPixels.data[I + 3] > 0) // If it's not a transparent pixel
  {
    // 124, 83, 89, 255 44, 50, 66, 255
    if ((currentPixels.data[I] == color[0] && currentPixels.data[I + 1] == color[1] && currentPixels.data[I + 2] == 89)
    ) {
      //  currentPixels.data[I + 3] = 10.5;
    }
    currentPixels.data[I] = originalPixels.data[I] / 255 * newColor.R;
    currentPixels.data[I + 1] = originalPixels.data[I + 1] / 255 * newColor.G;
    currentPixels.data[I + 2] = originalPixels.data[I + 2] / 255 * newColor.B;
    // currentPixels.data[I + 3] = 55.5;
  }
  //  console.log(currentPixels)

}
ctx.putImageData(currentPixels, 0, 0);
var url = canvas.toDataURL('image/png');
mug.src = url;
return url;
} catch (e) {
MessageBox(e)
}
}
}
Haxcv.Fn.define = function (name, value) {
Haxcv.Fn['$' + name] = value;
Haxcv.Fn[name] = value;
}
Haxcv.Fn.preg_match = function (pattern, subject) {
if (subject.match(pattern)) {
return true;
} else {
return false;
}
}
Haxcv.Fn.preg_match_all = function (pattern, subject) {
/*var str = subject , arr = [];
 var regex = /(?:^|\s){(.*?)}(?:\s|$)/;
     regex.exec(subject);   //=> [" format_abc", "abc"]
     str = preg_replace(/ / , )
    for (var i = 0; i < str.length; i++) {
    str =  str.match(pattern);
    arr.push(str[0]);
    str =  str.replace(pattern , replacement);
}
return arr;*/
}
Haxcv.Fn.preg_replace = function (pattern, replacement, subject) {
var str = subject;
for (var i = 0; i < subject.length; i++) {
str = str.replace(pattern, replacement);
}
return str;
}
Haxcv.Fn.MessageBox = function (msg) {
_('@msgBox').Remove();
Obj.createElm('div:body', 'id', 'msgBox');
win.resize(use);
function use() {
var st = {
'width': win.size(width) / 2 + 'px',
'z-index': '999999999999999',
'position': 'fixed',
'top': win.size(height) / 8 + 'px',
'left': win.size(width) / 5 + 'px',
'display': 'none',
'border': 'solid 20px rgba(176, 35, 35,0.5)',
'background': 'rgba(255, 255, 255,0.9)',
'text-align': 'center',
'padding': '20px',
'line-height': '50px',
'color': 'rgb(176, 35, 35)',
'border-radius': '16px',
'font-size': '14px',
'font-family': 'tahoma',
};
_('%msgBox').html(msg);
_('%msgBox').style(st);
_('%msgBox').Effect(fadeIn, 1000);
}
use();
_('%msgBox').click(function (e) {
if (e.offsetY < 0) {
_('%msgBox').Effect(fadeOut, 1000);
}
});
}
function RGBtohex(r, g, b)
{
var R = IntToHex(r).replace('0x', ''),
G = IntToHex(g).replace('0x', ''),
B = IntToHex(b).replace('0x', '');
if (R.length == 1) {
R = R + R;
}
if (G.length == 1) {
G = G + G;
}
if (B.length == 1) {
B = B + B;
}
return '#' + R + G + B;
}
function hexToRGB(hex)
{
var long = parseInt(hex.replace(/^#/, ''), 16);
return {
R: (long >>> 16) & 255,
G: (long >>> 8) & 255,
B: long & 255
};
}
Haxcv.Fn.Size = function (url) {
/*define("img" , new Image());
    $img.src = url;
 
    _("body").Append($img);
    define("cnv" , Obj.createElm("canvas:body","id","here",true));
    define("ctx" , $cnv.getContext("2d"));
    _("body").Append($cnv);

       $ctx.drawImage($img,0,0,$img.naturalWidth,$img.naturalHeight);

       define("pixles",$ctx.getImageData(0,0,$img.naturalWidth,$img.naturalHeight).data);
*/
var blob = new Blob([url], {
type: 'image/png'
});
return blob.size;
}
function newElm(elm) {
return index.Default[1][createElm](elm);
}
Haxcv.Fn.ImageSrc = {
Match: function (img, img2) {
try {
if (typeof img == 'string' && typeof img2 == 'string' && img && img2) {
  var cur_img = new Image(),
  new_img = new Image();
  cur_img.src = img;
  new_img.src = img2;
  var cnv = document.createElement('canvas');
  var cnv1 = document.createElement('canvas');
  cnv.id = 'cur_this';
  cnv1.id = 'new_this';
  /*     _("body").Append(cnv)
                _("body").Append(cnv1)*/
  /*        _("%cur_img").style({width:"50px",height:"50px"});
             _("%new_img").style({width:"50px",height:"50px"});*/
  var ctx = cnv.getContext('2d'),
  ctx1 = cnv1.getContext('2d');
  cnv.width = new_img.width > 500 ? 200 : new_img.width;
  cnv1.width = cur_img.width > 500 ? 200 : cur_img.width;
  cnv.height = new_img.height > 500 ? 200 : new_img.height;
  cnv1.height = cur_img.height > 500 ? 200 : cur_img.height;
  ctx.drawImage(cur_img, 0, 0, cnv.width, cnv.height);
  ctx1.drawImage(new_img, 0, 0, cnv1.width, cnv1.height);
  cur_img = ctx.getImageData(0, 0, cnv.width, cnv.height);
  new_img = ctx1.getImageData(0, 0, cnv1.width, cnv1.height);
  var er,
  cur_is_zero,
  new_is_zero;
  for (var i = 0; i < new_img.data.length; i++) {
    if (new_img.data[i] == cur_img.data[i] && new_img.data[i + 1] == cur_img.data[i + 1] &&
    new_img.data[i + 2] == cur_img.data[i + 2] && new_img.data[i + 3] == cur_img.data[i + 3]) {
    } else {
      er = true;
    }
    if (new_img.data[i] == 0 && new_img.data[i + 1] == 0 &&
    new_img.data[i + 2] == 0 && new_img.data[i + 3] == 0) {
      new_is_zero = true;
    }
    if (cur_img.data[i] == 0 && cur_img.data[i + 1] == 0 &&
    cur_img.data[i + 2] == 0 && cur_img.data[i + 3] == 0) {
      cur_is_zero = true;
    }
  }
  if (er == true) {
    return false;
  } else {
    return true;
  }
} else {
  var error = 'Error Missing Image  , Match function Except two par <br/>1 for one Image 2 for two Image To check if matches';
  MessageBox(error);
  return error.replace('<br/>', ' ');
}
} catch (e) {
MessageBox(e)
}
}
}
Haxcv.Fn.parentNode = 'parentNode';
Haxcv.Fn.createElm = 'createElement';
Haxcv.Fn.parentElm = 'parentElement';
Haxcv.Fn.firstElm = 'firstElementChild';
Haxcv.Fn.lastElm = 'lastElementChild';
Haxcv.Fn.nextElm = 'nextElementSibling';
Haxcv.Fn.next = 'nextSibling';
Haxcv.Fn.first = 'firstChild';
Haxcv.Fn.last = 'lastChild';
Haxcv.Fn.count = 'childElementCount';
Haxcv.Fn.nodes = 'chiledNodes';
Haxcv.Fn.children = 'children';
// node 
Haxcv.Fn.name = 'nodeName';
Haxcv.Fn.value = 'nodeValue';
Haxcv.Fn.type = 'nodeType';
Haxcv.Fn.LT = 'rotateX';
Haxcv.Fn.RT = 'rotateY';
Haxcv.secure = [
1
];
Haxcv.Fn.DataURL = 'readAsDataURL';
Haxcv.Fn.TextData = 'readAsText';
function File_Reader(files, type, fun) {
var reader = new FileReader(),
nf = 'readAsDataURL',
tGET;
if (type) {
nf = type;
}
_(reader).AddEvents(['load'], function (evt) {
if (fun && typeof fun == 'function') {
fun(evt.target.result);
}
})
reader[nf](files);
}
Haxcv.Fn['Email'] = {
isValid: function (email) {
var RegEx = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
return RegEx.test(email);
}
}
Haxcv.Fn['in_array'] = function (array, str, fun) {
var res = false;
for (var i = 0; i < array.length; i++) {
if (array[i] == str) {
res = true;
}
}
if (res) {
if (fun && typeof fun == 'function') {
fun(str);
}
}
return res;
}
Haxcv.Fn['ObjSelectors'] = function (sel) {
}
Haxcv.Fn.ImageEditor = function (elm, json)
{
try {
var mug = elm;
var canvas = newElm('canvas');
var ctx = canvas.getContext('2d');
canvas.width = mug.width;
canvas.height = mug.height;
ctx.drawImage(mug, 0, 0, mug.width, mug.height);
// ctx.putImageData(currentPixels, 0, 0);
if (json.drawImage) {
var cnv = canvas;
var width = mug.width / 4;
height = mug.height / 4;
if (typeof json.drawImage.src == 'object') {
  var as = 0;
  for (var i = 0; i < json.drawImage.src.length; i++) {
    as++;
    var nmg = newElm('img');
    nmg.src = json.drawImage.src[as];
    nmg.width = json.drawImage.width;
    nmg.height = json.drawImage.height;
    if (json.drawImage.width < cnv.width) {
      width = json.drawImage.width;
    }
    if (json.drawImage.height < cnv.height) {
      height = json.drawImage.height;
    }
    if (typeof json.drawImage.x == 'object' && typeof json.drawImage.x == 'object') {
      for (var a = 0; a < json.drawImage.x.length; a++) {
        ctx.drawImage(nmg, json.drawImage.x[a], json.drawImage.y[a], width, height);
      }
    } else {
      ctx.drawImage(nmg, json.drawImage.x, json.drawImage.y, width, height);
    }
  }
} else {
  var nmg = newElm('img');
  nmg.src = json.drawImage.src;
  nmg.width = json.drawImage.width;
  nmg.height = json.drawImage.height;
  if (json.drawImage.width < cnv.width) {
    width = json.drawImage.width;
  }
  if (json.drawImage.height < cnv.height) {
    height = json.drawImage.height;
  }
  ctx.drawImage(nmg, json.drawImage.x, json.drawImage.y, width, height);
}
}
if (json.dragImage) {
var width1 = mug.width / 4;
height1 = mug.height / 4;
if (json.dragImage.width < canvas.width) {
  width1 = json.dragImage.width;
}
if (json.dragImage.height < canvas.height) {
  height1 = json.dragImage.height;
}
_(mug).AddEvents(['dragover',
'drop',
'dragstart'], function (e) {
  var imgh = newElm('img');
  e.preventDefault();
  if (e.type == 'dragstart') {
    var ed = e.dataTransfer;
    ed.setData('image/png', e.target.id);
  }
  if (e.type == 'drop') {
    var file = e.dataTransfer;
    var X = e.offsetX;
    var Y = e.offsetY;
    if (nmg) {
      if (file.files[0]) {
        File_Reader(file.files[0], DataURL, function (data) {
          //console.log(data)
          imgh.src = data;
          ctx.drawImage(imgh, X - width1, Y - height1, width1, height1);
          var url = canvas.toDataURL('image/png');
          mug.src = url;
        });
      } else {
        var data = file.getData('text');
        new_src = data;
        imgh.src = data;
        ctx.drawImage(imgh, X - width1 / 2, Y - height1 / 2, width1, height1);
        var url = canvas.toDataURL('image/png');
        mug.src = url;
      }
    }
  }
})
}
if (json.style) {
var st = json.style;
if (st.border) {
  var color_border = '#208BA8';
  if (st.borderColor) {
    if (typeof st.borderColor == 'string') {
      color_border = st.borderColor;
    }
    if (typeof st.borderColor == 'object') {
      color_border = RGBtohex(st.borderColor[0], st.borderColor[1], st.borderColor[2]);
    }
  }
  ctx.fillStyle = color_border;
  if (st.borders) {
    if (st.borders.top) {
      ctx.fillRect(0, 0, canvas.width, 30);
    }
    if (st.borders.bottom) {
      ctx.fillRect(0, canvas.height - 20, canvas.width, 20);
    }
    if (st.borders.left) {
      ctx.fillRect(0, 0, 20, canvas.height);
    }
    if (st.borders.right) {
      ctx.fillRect(canvas.height - 10, 1, 20, canvas.height);
    }
  }
}
if (st.font) {
  st.font = '15px arial';
}
ctx.fillStyle = st.color;
ctx.font = st.font;
if (st.text) {
  ctx.fillText(st.text, st.xt, st.yt);
}
if (st.date) {
  var date = Date();
  date = date.substring(0, date.length - 24);
  if (st.datefont) {
    ctx.font = st.datefont;
  }
  ctx.fillText(date, 15, canvas.height - 5);
}
if (st.Extract) {
  var currentPixels = ctx.getImageData(1, 1, canvas.width, canvas.height);
  var originalPixels = ctx.getImageData(1, 1, canvas.width, canvas.height);
  var padding = 10;
  if (st.padding && typeof st.padding == 'number') {
    padding = st.padding;
  }
  switch (st.padding) {
    case 'half':
      padding: canvas.width;
      break;
    case 'full':
      padding = 100;
      break;
    case 'stars':
      padding = 150;
      break;
  }
  for (var I = 0, L = originalPixels.data.length; I < L; I += padding)
  {
    currentPixels.data[I + 1] = 255;
    /* currentPixels.data[I + 1] = 255;
          currentPixels.data[I + 2] = 255;*/
}
ctx.putImageData(currentPixels, 0, 0);
}
}
var url = canvas.toDataURL('image/png');
mug.src = url;
return url;
} catch (e) {
MessageBox(e)
}
}
function empty(str) {
if (new RegExp(/^\s*$/).test(str)) {
return true;
} else {
return false;
}
}
function Geo(fun) {
var sdf;
Obj.Ajax({
url: 'https://haxcv.org/API/Geo/',
method: 'GET',
info: function (data) {
var data = JSON.parse(data);
data.About = 'Haxcv Geo Location Services Team';
data.longtude = data.lon;
data.latitude = data.lat;
data.ip = data.query;
var latlon = data.lat + ',' + data.lon;
//img1.src = "http://maps.googleapis.com/maps/api/staticmap?center="+latlon+"&zoom=14&size=400x300&sensor=false";
data.img = 'http://maps.googleapis.com/maps/api/staticmap?center=' + latlon + '&zoom=13&size=400x300&maptype=roadmap&markers=' + latlon + '&sensor=false';
fun(data);
}
});
}
/*   
 (function(version){Obj.Ajax({
    url:"https://account.haxcv.org/sv.php",
    method:"POST",
    data:{
        ver:version
    }
 });
})("1.0.1");*/

function Isset(val) {
if (!in_array([undefined,
null,
false], val)) {
return true;
} else {
return false;
}
}
function function_exists(val) {
if (!in_array([undefined,
null], val) && typeof val == 'function') {
return true;
} else {
return false;
}
}
function FormEmpty(str, fun, error, Required) {
var NAMES = '',
N = [
];
var last = true;
if (Required == true) {
for (var key in str) {
// if(Required[keys] == key){
if (empty(str[key])) {
NAMES += key + ' ';
N.push(key)
last = false;
}
}
} else if (typeof Required == 'object' && Required) {
for (var keys in Required) {
for (var key in str) {
if (Required[keys] == key) {
  if (empty(str[key])) {
    NAMES += key + ' ';
    N.push(key)
    last = false;
  }
}
}
}
}
if (function_exists(fun)) {
if (last) {
fun();
} else {
if (function_exists(error)) {
var msg = N.length > 1 ? '  Fields are Required !' : 'Field is Required !';
error({
  fields: N,
  message: NAMES + msg
});
}
}
}
}
Haxcv.Fn.XMLHttp = {
abort: false,
exception: null
};
Haxcv.Fn.DATA = 'dataTransfer';
Haxcv.Fn.CSS = 'getComputedStyle';
function include(src) {
_('body').script(src);
}
