webpackHotUpdate_N_E("pages/_app",{

/***/ "./node_modules/prism-react-renderer/dist/index.js":
/*!*********************************************************!*\
  !*** ./node_modules/prism-react-renderer/dist/index.js ***!
  \*********************************************************/
/*! exports provided: Prism, default, defaultProps */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultProps", function() { return defaultProps; });
/* harmony import */ var _prism_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../prism/index.js */ "./node_modules/prism-react-renderer/prism/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Prism", function() { return _prism_index_js__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _themes_duotoneDark__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../themes/duotoneDark */ "./node_modules/prism-react-renderer/themes/duotoneDark/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);





var defaultProps = {
  // $FlowFixMe
  Prism: _prism_index_js__WEBPACK_IMPORTED_MODULE_0__["default"],
  theme: _themes_duotoneDark__WEBPACK_IMPORTED_MODULE_1__["default"]
};

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

var newlineRe = /\r\n|\r|\n/; // Empty lines need to contain a single empty token, denoted with { empty: true }

var normalizeEmptyLines = function (line) {
  if (line.length === 0) {
    line.push({
      types: ["plain"],
      content: "\n",
      empty: true
    });
  } else if (line.length === 1 && line[0].content === "") {
    line[0].content = "\n";
    line[0].empty = true;
  }
};

var appendTypes = function (types, add) {
  var typesSize = types.length;

  if (typesSize > 0 && types[typesSize - 1] === add) {
    return types;
  }

  return types.concat(add);
}; // Takes an array of Prism's tokens and groups them by line, turning plain
// strings into tokens as well. Tokens can become recursive in some cases,
// which means that their types are concatenated. Plain-string tokens however
// are always of type "plain".
// This is not recursive to avoid exceeding the call-stack limit, since it's unclear
// how nested Prism's tokens can become


var normalizeTokens = function (tokens) {
  var typeArrStack = [[]];
  var tokenArrStack = [tokens];
  var tokenArrIndexStack = [0];
  var tokenArrSizeStack = [tokens.length];
  var i = 0;
  var stackIndex = 0;
  var currentLine = [];
  var acc = [currentLine];

  while (stackIndex > -1) {
    while ((i = tokenArrIndexStack[stackIndex]++) < tokenArrSizeStack[stackIndex]) {
      var content = void 0;
      var types = typeArrStack[stackIndex];
      var tokenArr = tokenArrStack[stackIndex];
      var token = tokenArr[i]; // Determine content and append type to types if necessary

      if (typeof token === "string") {
        types = stackIndex > 0 ? types : ["plain"];
        content = token;
      } else {
        types = appendTypes(types, token.type);

        if (token.alias) {
          types = appendTypes(types, token.alias);
        }

        content = token.content;
      } // If token.content is an array, increase the stack depth and repeat this while-loop


      if (typeof content !== "string") {
        stackIndex++;
        typeArrStack.push(types);
        tokenArrStack.push(content);
        tokenArrIndexStack.push(0);
        tokenArrSizeStack.push(content.length);
        continue;
      } // Split by newlines


      var splitByNewlines = content.split(newlineRe);
      var newlineCount = splitByNewlines.length;
      currentLine.push({
        types: types,
        content: splitByNewlines[0]
      }); // Create a new line for each string on a new line

      for (var i$1 = 1; i$1 < newlineCount; i$1++) {
        normalizeEmptyLines(currentLine);
        acc.push(currentLine = []);
        currentLine.push({
          types: types,
          content: splitByNewlines[i$1]
        });
      }
    } // Decreate the stack depth


    stackIndex--;
    typeArrStack.pop();
    tokenArrStack.pop();
    tokenArrIndexStack.pop();
    tokenArrSizeStack.pop();
  }

  normalizeEmptyLines(currentLine);
  return acc;
};

var themeToDict = function (theme, language) {
  var plain = theme.plain; // $FlowFixMe

  var base = Object.create(null);
  var themeDict = theme.styles.reduce(function (acc, themeEntry) {
    var languages = themeEntry.languages;
    var style = themeEntry.style;

    if (languages && !languages.includes(language)) {
      return acc;
    }

    themeEntry.types.forEach(function (type) {
      // $FlowFixMe
      var accStyle = _extends({}, acc[type], style);

      acc[type] = accStyle;
    });
    return acc;
  }, base); // $FlowFixMe

  themeDict.root = plain; // $FlowFixMe

  themeDict.plain = _extends({}, plain, {
    backgroundColor: null
  });
  return themeDict;
};

function objectWithoutProperties(obj, exclude) {
  var target = {};

  for (var k in obj) if (Object.prototype.hasOwnProperty.call(obj, k) && exclude.indexOf(k) === -1) target[k] = obj[k];

  return target;
}

var Highlight = /*@__PURE__*/function (Component) {
  function Highlight() {
    var this$1 = this;
    var args = [],
        len = arguments.length;

    while (len--) args[len] = arguments[len];

    Component.apply(this, args);

    _defineProperty(this, "getThemeDict", function (props) {
      if (this$1.themeDict !== undefined && props.theme === this$1.prevTheme && props.language === this$1.prevLanguage) {
        return this$1.themeDict;
      }

      this$1.prevTheme = props.theme;
      this$1.prevLanguage = props.language;
      var themeDict = props.theme ? themeToDict(props.theme, props.language) : undefined;
      return this$1.themeDict = themeDict;
    });

    _defineProperty(this, "getLineProps", function (ref) {
      var key = ref.key;
      var className = ref.className;
      var style = ref.style;
      var rest$1 = objectWithoutProperties(ref, ["key", "className", "style", "line"]);
      var rest = rest$1;

      var output = _extends({}, rest, {
        className: "token-line",
        style: undefined,
        key: undefined
      });

      var themeDict = this$1.getThemeDict(this$1.props);

      if (themeDict !== undefined) {
        output.style = themeDict.plain;
      }

      if (style !== undefined) {
        output.style = output.style !== undefined ? _extends({}, output.style, style) : style;
      }

      if (key !== undefined) {
        output.key = key;
      }

      if (className) {
        output.className += " " + className;
      }

      return output;
    });

    _defineProperty(this, "getStyleForToken", function (ref) {
      var types = ref.types;
      var empty = ref.empty;
      var typesSize = types.length;
      var themeDict = this$1.getThemeDict(this$1.props);

      if (themeDict === undefined) {
        return undefined;
      } else if (typesSize === 1 && types[0] === "plain") {
        return empty ? {
          display: "inline-block"
        } : undefined;
      } else if (typesSize === 1 && !empty) {
        return themeDict[types[0]];
      }

      var baseStyle = empty ? {
        display: "inline-block"
      } : {}; // $FlowFixMe

      var typeStyles = types.map(function (type) {
        return themeDict[type];
      });
      return Object.assign.apply(Object, [baseStyle].concat(typeStyles));
    });

    _defineProperty(this, "getTokenProps", function (ref) {
      var key = ref.key;
      var className = ref.className;
      var style = ref.style;
      var token = ref.token;
      var rest$1 = objectWithoutProperties(ref, ["key", "className", "style", "token"]);
      var rest = rest$1;

      var output = _extends({}, rest, {
        className: "token " + token.types.join(" "),
        children: token.content,
        style: this$1.getStyleForToken(token),
        key: undefined
      });

      if (style !== undefined) {
        output.style = output.style !== undefined ? _extends({}, output.style, style) : style;
      }

      if (key !== undefined) {
        output.key = key;
      }

      if (className) {
        output.className += " " + className;
      }

      return output;
    });

    _defineProperty(this, "tokenize", function (Prism, code, grammar, language) {
      var env = {
        code: code,
        grammar: grammar,
        language: language,
        tokens: []
      };
      Prism.hooks.run("before-tokenize", env);
      var tokens = env.tokens = Prism.tokenize(env.code, env.grammar, env.language);
      Prism.hooks.run("after-tokenize", env);
      return tokens;
    });
  }

  if (Component) Highlight.__proto__ = Component;
  Highlight.prototype = Object.create(Component && Component.prototype);
  Highlight.prototype.constructor = Highlight;

  Highlight.prototype.render = function render() {
    var ref = this.props;
    var Prism = ref.Prism;
    var language = ref.language;
    var code = ref.code;
    var children = ref.children;
    var themeDict = this.getThemeDict(this.props);
    var grammar = Prism.languages[language];
    var mixedTokens = grammar !== undefined ? this.tokenize(Prism, code, grammar, language) : [code];
    var tokens = normalizeTokens(mixedTokens);
    return children({
      tokens: tokens,
      className: "prism-code language-" + language,
      style: themeDict !== undefined ? themeDict.root : {},
      getLineProps: this.getLineProps,
      getTokenProps: this.getTokenProps
    });
  };

  return Highlight;
}(react__WEBPACK_IMPORTED_MODULE_2__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Highlight);



/***/ }),

/***/ "./node_modules/prism-react-renderer/prism/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/prism-react-renderer/prism/index.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * Prism: Lightweight, robust, elegant syntax highlighting
 * MIT license http://www.opensource.org/licenses/mit-license.php/
 * @author Lea Verou http://lea.verou.me
 */

/**
 * prism-react-renderer:
 * This file has been modified to remove:
 * - globals and window dependency
 * - worker support
 * - highlightAll and other element dependent methods
 * - _.hooks helpers
 * - UMD/node-specific hacks
 * It has also been run through prettier
 */
var Prism = function () {
  var uniqueId = 0;
  var _ = {
    util: {
      encode: function (tokens) {
        if (tokens instanceof Token) {
          return new Token(tokens.type, _.util.encode(tokens.content), tokens.alias);
        } else if (_.util.type(tokens) === "Array") {
          return tokens.map(_.util.encode);
        } else {
          return tokens.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/\u00a0/g, " ");
        }
      },
      type: function (o) {
        return Object.prototype.toString.call(o).match(/\[object (\w+)\]/)[1];
      },
      objId: function (obj) {
        if (!obj["__id"]) {
          Object.defineProperty(obj, "__id", {
            value: ++uniqueId
          });
        }

        return obj["__id"];
      },
      // Deep clone a language definition (e.g. to extend it)
      clone: function (o, visited) {
        var type = _.util.type(o);

        visited = visited || {};

        switch (type) {
          case "Object":
            if (visited[_.util.objId(o)]) {
              return visited[_.util.objId(o)];
            }

            var clone = {};
            visited[_.util.objId(o)] = clone;

            for (var key in o) {
              if (o.hasOwnProperty(key)) {
                clone[key] = _.util.clone(o[key], visited);
              }
            }

            return clone;

          case "Array":
            if (visited[_.util.objId(o)]) {
              return visited[_.util.objId(o)];
            }

            var clone = [];
            visited[_.util.objId(o)] = clone;
            o.forEach(function (v, i) {
              clone[i] = _.util.clone(v, visited);
            });
            return clone;
        }

        return o;
      }
    },
    languages: {
      extend: function (id, redef) {
        var lang = _.util.clone(_.languages[id]);

        for (var key in redef) {
          lang[key] = redef[key];
        }

        return lang;
      },

      /**
       * Insert a token before another token in a language literal
       * As this needs to recreate the object (we cannot actually insert before keys in object literals),
       * we cannot just provide an object, we need anobject and a key.
       * @param inside The key (or language id) of the parent
       * @param before The key to insert before. If not provided, the function appends instead.
       * @param insert Object with the key/value pairs to insert
       * @param root The object that contains `inside`. If equal to Prism.languages, it can be omitted.
       */
      insertBefore: function (inside, before, insert, root) {
        root = root || _.languages;
        var grammar = root[inside];

        if (arguments.length == 2) {
          insert = arguments[1];

          for (var newToken in insert) {
            if (insert.hasOwnProperty(newToken)) {
              grammar[newToken] = insert[newToken];
            }
          }

          return grammar;
        }

        var ret = {};

        for (var token in grammar) {
          if (grammar.hasOwnProperty(token)) {
            if (token == before) {
              for (var newToken in insert) {
                if (insert.hasOwnProperty(newToken)) {
                  ret[newToken] = insert[newToken];
                }
              }
            }

            ret[token] = grammar[token];
          }
        } // Update references in other language definitions


        _.languages.DFS(_.languages, function (key, value) {
          if (value === root[inside] && key != inside) {
            this[key] = ret;
          }
        });

        return root[inside] = ret;
      },
      // Traverse a language definition with Depth First Search
      DFS: function (o, callback, type, visited) {
        visited = visited || {};

        for (var i in o) {
          if (o.hasOwnProperty(i)) {
            callback.call(o, i, o[i], type || i);

            if (_.util.type(o[i]) === "Object" && !visited[_.util.objId(o[i])]) {
              visited[_.util.objId(o[i])] = true;

              _.languages.DFS(o[i], callback, null, visited);
            } else if (_.util.type(o[i]) === "Array" && !visited[_.util.objId(o[i])]) {
              visited[_.util.objId(o[i])] = true;

              _.languages.DFS(o[i], callback, i, visited);
            }
          }
        }
      }
    },
    plugins: {},
    highlight: function (text, grammar, language) {
      var env = {
        code: text,
        grammar: grammar,
        language: language
      };

      _.hooks.run("before-tokenize", env);

      env.tokens = _.tokenize(env.code, env.grammar);

      _.hooks.run("after-tokenize", env);

      return Token.stringify(_.util.encode(env.tokens), env.language);
    },
    matchGrammar: function (text, strarr, grammar, index, startPos, oneshot, target) {
      var Token = _.Token;

      for (var token in grammar) {
        if (!grammar.hasOwnProperty(token) || !grammar[token]) {
          continue;
        }

        if (token == target) {
          return;
        }

        var patterns = grammar[token];
        patterns = _.util.type(patterns) === "Array" ? patterns : [patterns];

        for (var j = 0; j < patterns.length; ++j) {
          var pattern = patterns[j],
              inside = pattern.inside,
              lookbehind = !!pattern.lookbehind,
              greedy = !!pattern.greedy,
              lookbehindLength = 0,
              alias = pattern.alias;

          if (greedy && !pattern.pattern.global) {
            // Without the global flag, lastIndex won't work
            var flags = pattern.pattern.toString().match(/[imuy]*$/)[0];
            pattern.pattern = RegExp(pattern.pattern.source, flags + "g");
          }

          pattern = pattern.pattern || pattern; // Don’t cache length as it changes during the loop

          for (var i = index, pos = startPos; i < strarr.length; pos += strarr[i].length, ++i) {
            var str = strarr[i];

            if (strarr.length > text.length) {
              // Something went terribly wrong, ABORT, ABORT!
              return;
            }

            if (str instanceof Token) {
              continue;
            }

            if (greedy && i != strarr.length - 1) {
              pattern.lastIndex = pos;
              var match = pattern.exec(text);

              if (!match) {
                break;
              }

              var from = match.index + (lookbehind ? match[1].length : 0),
                  to = match.index + match[0].length,
                  k = i,
                  p = pos;

              for (var len = strarr.length; k < len && (p < to || !strarr[k].type && !strarr[k - 1].greedy); ++k) {
                p += strarr[k].length; // Move the index i to the element in strarr that is closest to from

                if (from >= p) {
                  ++i;
                  pos = p;
                }
              } // If strarr[i] is a Token, then the match starts inside another Token, which is invalid


              if (strarr[i] instanceof Token) {
                continue;
              } // Number of tokens to delete and replace with the new match


              delNum = k - i;
              str = text.slice(pos, p);
              match.index -= pos;
            } else {
              pattern.lastIndex = 0;
              var match = pattern.exec(str),
                  delNum = 1;
            }

            if (!match) {
              if (oneshot) {
                break;
              }

              continue;
            }

            if (lookbehind) {
              lookbehindLength = match[1] ? match[1].length : 0;
            }

            var from = match.index + lookbehindLength,
                match = match[0].slice(lookbehindLength),
                to = from + match.length,
                before = str.slice(0, from),
                after = str.slice(to);
            var args = [i, delNum];

            if (before) {
              ++i;
              pos += before.length;
              args.push(before);
            }

            var wrapped = new Token(token, inside ? _.tokenize(match, inside) : match, alias, match, greedy);
            args.push(wrapped);

            if (after) {
              args.push(after);
            }

            Array.prototype.splice.apply(strarr, args);

            if (delNum != 1) {
              _.matchGrammar(text, strarr, grammar, i, pos, true, token);
            }

            if (oneshot) {
              break;
            }
          }
        }
      }
    },
    hooks: {
      add: function () {},
      run: function (name, env) {}
    },
    tokenize: function (text, grammar, language) {
      var strarr = [text];
      var rest = grammar.rest;

      if (rest) {
        for (var token in rest) {
          grammar[token] = rest[token];
        }

        delete grammar.rest;
      }

      _.matchGrammar(text, strarr, grammar, 0, 0, false);

      return strarr;
    }
  };

  var Token = _.Token = function (type, content, alias, matchedStr, greedy) {
    this.type = type;
    this.content = content;
    this.alias = alias; // Copy of the full string this token was created from

    this.length = (matchedStr || "").length | 0;
    this.greedy = !!greedy;
  };

  Token.stringify = function (o, language, parent) {
    if (typeof o == "string") {
      return o;
    }

    if (_.util.type(o) === "Array") {
      return o.map(function (element) {
        return Token.stringify(element, language, o);
      }).join("");
    }

    var env = {
      type: o.type,
      content: Token.stringify(o.content, language, parent),
      tag: "span",
      classes: ["token", o.type],
      attributes: {},
      language: language,
      parent: parent
    };

    if (o.alias) {
      var aliases = _.util.type(o.alias) === "Array" ? o.alias : [o.alias];
      Array.prototype.push.apply(env.classes, aliases);
    }

    var attributes = Object.keys(env.attributes).map(function (name) {
      return name + '="' + (env.attributes[name] || "").replace(/"/g, "&quot;") + '"';
    }).join(" ");
    return "<" + env.tag + ' class="' + env.classes.join(" ") + '"' + (attributes ? " " + attributes : "") + ">" + env.content + "</" + env.tag + ">";
  };

  return _;
}();

/* This content is auto-generated to include some prismjs language components: */

/* "prismjs/components/prism-markup" */

Prism.languages.markup = {
  'comment': /<!--[\s\S]*?-->/,
  'prolog': /<\?[\s\S]+?\?>/,
  'doctype': {
    // https://www.w3.org/TR/xml/#NT-doctypedecl
    pattern: /<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,
    greedy: true,
    inside: {
      'internal-subset': {
        pattern: /(\[)[\s\S]+(?=\]>$)/,
        lookbehind: true,
        greedy: true,
        inside: null // see below

      },
      'string': {
        pattern: /"[^"]*"|'[^']*'/,
        greedy: true
      },
      'punctuation': /^<!|>$|[[\]]/,
      'doctype-tag': /^DOCTYPE/,
      'name': /[^\s<>'"]+/
    }
  },
  'cdata': /<!\[CDATA\[[\s\S]*?]]>/i,
  'tag': {
    pattern: /<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,
    greedy: true,
    inside: {
      'tag': {
        pattern: /^<\/?[^\s>\/]+/,
        inside: {
          'punctuation': /^<\/?/,
          'namespace': /^[^\s>\/:]+:/
        }
      },
      'attr-value': {
        pattern: /=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,
        inside: {
          'punctuation': [{
            pattern: /^=/,
            alias: 'attr-equals'
          }, /"|'/]
        }
      },
      'punctuation': /\/?>/,
      'attr-name': {
        pattern: /[^\s>\/]+/,
        inside: {
          'namespace': /^[^\s>\/:]+:/
        }
      }
    }
  },
  'entity': [{
    pattern: /&[\da-z]{1,8};/i,
    alias: 'named-entity'
  }, /&#x?[\da-f]{1,8};/i]
};
Prism.languages.markup['tag'].inside['attr-value'].inside['entity'] = Prism.languages.markup['entity'];
Prism.languages.markup['doctype'].inside['internal-subset'].inside = Prism.languages.markup; // Plugin to make entity title show the real entity, idea by Roman Komarov

Prism.hooks.add('wrap', function (env) {
  if (env.type === 'entity') {
    env.attributes['title'] = env.content.replace(/&amp;/, '&');
  }
});
Object.defineProperty(Prism.languages.markup.tag, 'addInlined', {
  /**
   * Adds an inlined language to markup.
   *
   * An example of an inlined language is CSS with `<style>` tags.
   *
   * @param {string} tagName The name of the tag that contains the inlined language. This name will be treated as
   * case insensitive.
   * @param {string} lang The language key.
   * @example
   * addInlined('style', 'css');
   */
  value: function addInlined(tagName, lang) {
    var includedCdataInside = {};
    includedCdataInside['language-' + lang] = {
      pattern: /(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,
      lookbehind: true,
      inside: Prism.languages[lang]
    };
    includedCdataInside['cdata'] = /^<!\[CDATA\[|\]\]>$/i;
    var inside = {
      'included-cdata': {
        pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i,
        inside: includedCdataInside
      }
    };
    inside['language-' + lang] = {
      pattern: /[\s\S]+/,
      inside: Prism.languages[lang]
    };
    var def = {};
    def[tagName] = {
      pattern: RegExp(/(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(/__/g, function () {
        return tagName;
      }), 'i'),
      lookbehind: true,
      greedy: true,
      inside: inside
    };
    Prism.languages.insertBefore('markup', 'cdata', def);
  }
});
Prism.languages.html = Prism.languages.markup;
Prism.languages.mathml = Prism.languages.markup;
Prism.languages.svg = Prism.languages.markup;
Prism.languages.xml = Prism.languages.extend('markup', {});
Prism.languages.ssml = Prism.languages.xml;
Prism.languages.atom = Prism.languages.xml;
Prism.languages.rss = Prism.languages.xml;
/* "prismjs/components/prism-bash" */

(function (Prism) {
  // $ set | grep '^[A-Z][^[:space:]]*=' | cut -d= -f1 | tr '\n' '|'
  // + LC_ALL, RANDOM, REPLY, SECONDS.
  // + make sure PS1..4 are here as they are not always set,
  // - some useless things.
  var envVars = '\\b(?:BASH|BASHOPTS|BASH_ALIASES|BASH_ARGC|BASH_ARGV|BASH_CMDS|BASH_COMPLETION_COMPAT_DIR|BASH_LINENO|BASH_REMATCH|BASH_SOURCE|BASH_VERSINFO|BASH_VERSION|COLORTERM|COLUMNS|COMP_WORDBREAKS|DBUS_SESSION_BUS_ADDRESS|DEFAULTS_PATH|DESKTOP_SESSION|DIRSTACK|DISPLAY|EUID|GDMSESSION|GDM_LANG|GNOME_KEYRING_CONTROL|GNOME_KEYRING_PID|GPG_AGENT_INFO|GROUPS|HISTCONTROL|HISTFILE|HISTFILESIZE|HISTSIZE|HOME|HOSTNAME|HOSTTYPE|IFS|INSTANCE|JOB|LANG|LANGUAGE|LC_ADDRESS|LC_ALL|LC_IDENTIFICATION|LC_MEASUREMENT|LC_MONETARY|LC_NAME|LC_NUMERIC|LC_PAPER|LC_TELEPHONE|LC_TIME|LESSCLOSE|LESSOPEN|LINES|LOGNAME|LS_COLORS|MACHTYPE|MAILCHECK|MANDATORY_PATH|NO_AT_BRIDGE|OLDPWD|OPTERR|OPTIND|ORBIT_SOCKETDIR|OSTYPE|PAPERSIZE|PATH|PIPESTATUS|PPID|PS1|PS2|PS3|PS4|PWD|RANDOM|REPLY|SECONDS|SELINUX_INIT|SESSION|SESSIONTYPE|SESSION_MANAGER|SHELL|SHELLOPTS|SHLVL|SSH_AUTH_SOCK|TERM|UID|UPSTART_EVENTS|UPSTART_INSTANCE|UPSTART_JOB|UPSTART_SESSION|USER|WINDOWID|XAUTHORITY|XDG_CONFIG_DIRS|XDG_CURRENT_DESKTOP|XDG_DATA_DIRS|XDG_GREETER_DATA_DIR|XDG_MENU_PREFIX|XDG_RUNTIME_DIR|XDG_SEAT|XDG_SEAT_PATH|XDG_SESSION_DESKTOP|XDG_SESSION_ID|XDG_SESSION_PATH|XDG_SESSION_TYPE|XDG_VTNR|XMODIFIERS)\\b';
  var commandAfterHeredoc = {
    pattern: /(^(["']?)\w+\2)[ \t]+\S.*/,
    lookbehind: true,
    alias: 'punctuation',
    // this looks reasonably well in all themes
    inside: null // see below

  };
  var insideString = {
    'bash': commandAfterHeredoc,
    'environment': {
      pattern: RegExp("\\$" + envVars),
      alias: 'constant'
    },
    'variable': [// [0]: Arithmetic Environment
    {
      pattern: /\$?\(\([\s\S]+?\)\)/,
      greedy: true,
      inside: {
        // If there is a $ sign at the beginning highlight $(( and )) as variable
        'variable': [{
          pattern: /(^\$\(\([\s\S]+)\)\)/,
          lookbehind: true
        }, /^\$\(\(/],
        'number': /\b0x[\dA-Fa-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:[Ee]-?\d+)?/,
        // Operators according to https://www.gnu.org/software/bash/manual/bashref.html#Shell-Arithmetic
        'operator': /--?|-=|\+\+?|\+=|!=?|~|\*\*?|\*=|\/=?|%=?|<<=?|>>=?|<=?|>=?|==?|&&?|&=|\^=?|\|\|?|\|=|\?|:/,
        // If there is no $ sign at the beginning highlight (( and )) as punctuation
        'punctuation': /\(\(?|\)\)?|,|;/
      }
    }, // [1]: Command Substitution
    {
      pattern: /\$\((?:\([^)]+\)|[^()])+\)|`[^`]+`/,
      greedy: true,
      inside: {
        'variable': /^\$\(|^`|\)$|`$/
      }
    }, // [2]: Brace expansion
    {
      pattern: /\$\{[^}]+\}/,
      greedy: true,
      inside: {
        'operator': /:[-=?+]?|[!\/]|##?|%%?|\^\^?|,,?/,
        'punctuation': /[\[\]]/,
        'environment': {
          pattern: RegExp("(\\{)" + envVars),
          lookbehind: true,
          alias: 'constant'
        }
      }
    }, /\$(?:\w+|[#?*!@$])/],
    // Escape sequences from echo and printf's manuals, and escaped quotes.
    'entity': /\\(?:[abceEfnrtv\\"]|O?[0-7]{1,3}|x[0-9a-fA-F]{1,2}|u[0-9a-fA-F]{4}|U[0-9a-fA-F]{8})/
  };
  Prism.languages.bash = {
    'shebang': {
      pattern: /^#!\s*\/.*/,
      alias: 'important'
    },
    'comment': {
      pattern: /(^|[^"{\\$])#.*/,
      lookbehind: true
    },
    'function-name': [// a) function foo {
    // b) foo() {
    // c) function foo() {
    // but not “foo {”
    {
      // a) and c)
      pattern: /(\bfunction\s+)\w+(?=(?:\s*\(?:\s*\))?\s*\{)/,
      lookbehind: true,
      alias: 'function'
    }, {
      // b)
      pattern: /\b\w+(?=\s*\(\s*\)\s*\{)/,
      alias: 'function'
    }],
    // Highlight variable names as variables in for and select beginnings.
    'for-or-select': {
      pattern: /(\b(?:for|select)\s+)\w+(?=\s+in\s)/,
      alias: 'variable',
      lookbehind: true
    },
    // Highlight variable names as variables in the left-hand part
    // of assignments (“=” and “+=”).
    'assign-left': {
      pattern: /(^|[\s;|&]|[<>]\()\w+(?=\+?=)/,
      inside: {
        'environment': {
          pattern: RegExp("(^|[\\s;|&]|[<>]\\()" + envVars),
          lookbehind: true,
          alias: 'constant'
        }
      },
      alias: 'variable',
      lookbehind: true
    },
    'string': [// Support for Here-documents https://en.wikipedia.org/wiki/Here_document
    {
      pattern: /((?:^|[^<])<<-?\s*)(\w+?)\s[\s\S]*?(?:\r?\n|\r)\2/,
      lookbehind: true,
      greedy: true,
      inside: insideString
    }, // Here-document with quotes around the tag
    // → No expansion (so no “inside”).
    {
      pattern: /((?:^|[^<])<<-?\s*)(["'])(\w+)\2\s[\s\S]*?(?:\r?\n|\r)\3/,
      lookbehind: true,
      greedy: true,
      inside: {
        'bash': commandAfterHeredoc
      }
    }, // “Normal” string
    {
      pattern: /(^|[^\\](?:\\\\)*)(["'])(?:\\[\s\S]|\$\([^)]+\)|\$(?!\()|`[^`]+`|(?!\2)[^\\`$])*\2/,
      lookbehind: true,
      greedy: true,
      inside: insideString
    }],
    'environment': {
      pattern: RegExp("\\$?" + envVars),
      alias: 'constant'
    },
    'variable': insideString.variable,
    'function': {
      pattern: /(^|[\s;|&]|[<>]\()(?:add|apropos|apt|aptitude|apt-cache|apt-get|aspell|automysqlbackup|awk|basename|bash|bc|bconsole|bg|bzip2|cal|cat|cfdisk|chgrp|chkconfig|chmod|chown|chroot|cksum|clear|cmp|column|comm|composer|cp|cron|crontab|csplit|curl|cut|date|dc|dd|ddrescue|debootstrap|df|diff|diff3|dig|dir|dircolors|dirname|dirs|dmesg|du|egrep|eject|env|ethtool|expand|expect|expr|fdformat|fdisk|fg|fgrep|file|find|fmt|fold|format|free|fsck|ftp|fuser|gawk|git|gparted|grep|groupadd|groupdel|groupmod|groups|grub-mkconfig|gzip|halt|head|hg|history|host|hostname|htop|iconv|id|ifconfig|ifdown|ifup|import|install|ip|jobs|join|kill|killall|less|link|ln|locate|logname|logrotate|look|lpc|lpr|lprint|lprintd|lprintq|lprm|ls|lsof|lynx|make|man|mc|mdadm|mkconfig|mkdir|mke2fs|mkfifo|mkfs|mkisofs|mknod|mkswap|mmv|more|most|mount|mtools|mtr|mutt|mv|nano|nc|netstat|nice|nl|nohup|notify-send|npm|nslookup|op|open|parted|passwd|paste|pathchk|ping|pkill|pnpm|popd|pr|printcap|printenv|ps|pushd|pv|quota|quotacheck|quotactl|ram|rar|rcp|reboot|remsync|rename|renice|rev|rm|rmdir|rpm|rsync|scp|screen|sdiff|sed|sendmail|seq|service|sftp|sh|shellcheck|shuf|shutdown|sleep|slocate|sort|split|ssh|stat|strace|su|sudo|sum|suspend|swapon|sync|tac|tail|tar|tee|time|timeout|top|touch|tr|traceroute|tsort|tty|umount|uname|unexpand|uniq|units|unrar|unshar|unzip|update-grub|uptime|useradd|userdel|usermod|users|uudecode|uuencode|v|vdir|vi|vim|virsh|vmstat|wait|watch|wc|wget|whereis|which|who|whoami|write|xargs|xdg-open|yarn|yes|zenity|zip|zsh|zypper)(?=$|[)\s;|&])/,
      lookbehind: true
    },
    'keyword': {
      pattern: /(^|[\s;|&]|[<>]\()(?:if|then|else|elif|fi|for|while|in|case|esac|function|select|do|done|until)(?=$|[)\s;|&])/,
      lookbehind: true
    },
    // https://www.gnu.org/software/bash/manual/html_node/Shell-Builtin-Commands.html
    'builtin': {
      pattern: /(^|[\s;|&]|[<>]\()(?:\.|:|break|cd|continue|eval|exec|exit|export|getopts|hash|pwd|readonly|return|shift|test|times|trap|umask|unset|alias|bind|builtin|caller|command|declare|echo|enable|help|let|local|logout|mapfile|printf|read|readarray|source|type|typeset|ulimit|unalias|set|shopt)(?=$|[)\s;|&])/,
      lookbehind: true,
      // Alias added to make those easier to distinguish from strings.
      alias: 'class-name'
    },
    'boolean': {
      pattern: /(^|[\s;|&]|[<>]\()(?:true|false)(?=$|[)\s;|&])/,
      lookbehind: true
    },
    'file-descriptor': {
      pattern: /\B&\d\b/,
      alias: 'important'
    },
    'operator': {
      // Lots of redirections here, but not just that.
      pattern: /\d?<>|>\||\+=|==?|!=?|=~|<<[<-]?|[&\d]?>>|\d?[<>]&?|&[>&]?|\|[&|]?|<=?|>=?/,
      inside: {
        'file-descriptor': {
          pattern: /^\d/,
          alias: 'important'
        }
      }
    },
    'punctuation': /\$?\(\(?|\)\)?|\.\.|[{}[\];\\]/,
    'number': {
      pattern: /(^|\s)(?:[1-9]\d*|0)(?:[.,]\d+)?\b/,
      lookbehind: true
    }
  };
  commandAfterHeredoc.inside = Prism.languages.bash;
  /* Patterns in command substitution. */

  var toBeCopied = ['comment', 'function-name', 'for-or-select', 'assign-left', 'string', 'environment', 'function', 'keyword', 'builtin', 'boolean', 'file-descriptor', 'operator', 'punctuation', 'number'];
  var inside = insideString.variable[1].inside;

  for (var i = 0; i < toBeCopied.length; i++) {
    inside[toBeCopied[i]] = Prism.languages.bash[toBeCopied[i]];
  }

  Prism.languages.shell = Prism.languages.bash;
})(Prism);
/* "prismjs/components/prism-clike" */


Prism.languages.clike = {
  'comment': [{
    pattern: /(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,
    lookbehind: true,
    greedy: true
  }, {
    pattern: /(^|[^\\:])\/\/.*/,
    lookbehind: true,
    greedy: true
  }],
  'string': {
    pattern: /(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
    greedy: true
  },
  'class-name': {
    pattern: /(\b(?:class|interface|extends|implements|trait|instanceof|new)\s+|\bcatch\s+\()[\w.\\]+/i,
    lookbehind: true,
    inside: {
      'punctuation': /[.\\]/
    }
  },
  'keyword': /\b(?:if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/,
  'boolean': /\b(?:true|false)\b/,
  'function': /\w+(?=\()/,
  'number': /\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,
  'operator': /[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,
  'punctuation': /[{}[\];(),.:]/
};
/* "prismjs/components/prism-c" */

Prism.languages.c = Prism.languages.extend('clike', {
  'comment': {
    pattern: /\/\/(?:[^\r\n\\]|\\(?:\r\n?|\n|(?![\r\n])))*|\/\*[\s\S]*?(?:\*\/|$)/,
    greedy: true
  },
  'class-name': {
    pattern: /(\b(?:enum|struct)\s+(?:__attribute__\s*\(\([\s\S]*?\)\)\s*)?)\w+|\b[a-z]\w*_t\b/,
    lookbehind: true
  },
  'keyword': /\b(?:__attribute__|_Alignas|_Alignof|_Atomic|_Bool|_Complex|_Generic|_Imaginary|_Noreturn|_Static_assert|_Thread_local|asm|typeof|inline|auto|break|case|char|const|continue|default|do|double|else|enum|extern|float|for|goto|if|int|long|register|return|short|signed|sizeof|static|struct|switch|typedef|union|unsigned|void|volatile|while)\b/,
  'function': /[a-z_]\w*(?=\s*\()/i,
  'number': /(?:\b0x(?:[\da-f]+(?:\.[\da-f]*)?|\.[\da-f]+)(?:p[+-]?\d+)?|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?)[ful]{0,4}/i,
  'operator': />>=?|<<=?|->|([-+&|:])\1|[?:~]|[-+*/%&|^!=<>]=?/
});
Prism.languages.insertBefore('c', 'string', {
  'macro': {
    // allow for multiline macro definitions
    // spaces after the # character compile fine with gcc
    pattern: /(^\s*)#\s*[a-z](?:[^\r\n\\/]|\/(?!\*)|\/\*(?:[^*]|\*(?!\/))*\*\/|\\(?:\r\n|[\s\S]))*/im,
    lookbehind: true,
    greedy: true,
    alias: 'property',
    inside: {
      'string': [{
        // highlight the path of the include statement as a string
        pattern: /^(#\s*include\s*)<[^>]+>/,
        lookbehind: true
      }, Prism.languages.c['string']],
      'comment': Prism.languages.c['comment'],
      'macro-name': [{
        pattern: /(^#\s*define\s+)\w+\b(?!\()/i,
        lookbehind: true
      }, {
        pattern: /(^#\s*define\s+)\w+\b(?=\()/i,
        lookbehind: true,
        alias: 'function'
      }],
      // highlight macro directives as keywords
      'directive': {
        pattern: /^(#\s*)[a-z]+/,
        lookbehind: true,
        alias: 'keyword'
      },
      'directive-hash': /^#/,
      'punctuation': /##|\\(?=[\r\n])/,
      'expression': {
        pattern: /\S[\s\S]*/,
        inside: Prism.languages.c
      }
    }
  },
  // highlight predefined macros as constants
  'constant': /\b(?:__FILE__|__LINE__|__DATE__|__TIME__|__TIMESTAMP__|__func__|EOF|NULL|SEEK_CUR|SEEK_END|SEEK_SET|stdin|stdout|stderr)\b/
});
delete Prism.languages.c['boolean'];
/* "prismjs/components/prism-cpp" */

(function (Prism) {
  var keyword = /\b(?:alignas|alignof|asm|auto|bool|break|case|catch|char|char8_t|char16_t|char32_t|class|compl|concept|const|consteval|constexpr|constinit|const_cast|continue|co_await|co_return|co_yield|decltype|default|delete|do|double|dynamic_cast|else|enum|explicit|export|extern|float|for|friend|goto|if|inline|int|int8_t|int16_t|int32_t|int64_t|uint8_t|uint16_t|uint32_t|uint64_t|long|mutable|namespace|new|noexcept|nullptr|operator|private|protected|public|register|reinterpret_cast|requires|return|short|signed|sizeof|static|static_assert|static_cast|struct|switch|template|this|thread_local|throw|try|typedef|typeid|typename|union|unsigned|using|virtual|void|volatile|wchar_t|while)\b/;
  Prism.languages.cpp = Prism.languages.extend('c', {
    'class-name': [{
      pattern: RegExp(/(\b(?:class|concept|enum|struct|typename)\s+)(?!<keyword>)\w+/.source.replace(/<keyword>/g, function () {
        return keyword.source;
      })),
      lookbehind: true
    }, // This is intended to capture the class name of method implementations like:
    //   void foo::bar() const {}
    // However! The `foo` in the above example could also be a namespace, so we only capture the class name if
    // it starts with an uppercase letter. This approximation should give decent results.
    /\b[A-Z]\w*(?=\s*::\s*\w+\s*\()/, // This will capture the class name before destructors like:
    //   Foo::~Foo() {}
    /\b[A-Z_]\w*(?=\s*::\s*~\w+\s*\()/i, // This also intends to capture the class name of method implementations but here the class has template
    // parameters, so it can't be a namespace (until C++ adds generic namespaces).
    /\w+(?=\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>\s*::\s*\w+\s*\()/],
    'keyword': keyword,
    'number': {
      pattern: /(?:\b0b[01']+|\b0x(?:[\da-f']+(?:\.[\da-f']*)?|\.[\da-f']+)(?:p[+-]?[\d']+)?|(?:\b[\d']+(?:\.[\d']*)?|\B\.[\d']+)(?:e[+-]?[\d']+)?)[ful]{0,4}/i,
      greedy: true
    },
    'operator': />>=?|<<=?|->|([-+&|:])\1|[?:~]|<=>|[-+*/%&|^!=<>]=?|\b(?:and|and_eq|bitand|bitor|not|not_eq|or|or_eq|xor|xor_eq)\b/,
    'boolean': /\b(?:true|false)\b/
  });
  Prism.languages.insertBefore('cpp', 'string', {
    'raw-string': {
      pattern: /R"([^()\\ ]{0,16})\([\s\S]*?\)\1"/,
      alias: 'string',
      greedy: true
    }
  });
  Prism.languages.insertBefore('cpp', 'class-name', {
    // the base clause is an optional list of parent classes
    // https://en.cppreference.com/w/cpp/language/class
    'base-clause': {
      pattern: /(\b(?:class|struct)\s+\w+\s*:\s*)[^;{}"'\s]+(?:\s+[^;{}"'\s]+)*(?=\s*[;{])/,
      lookbehind: true,
      greedy: true,
      inside: Prism.languages.extend('cpp', {})
    }
  });
  Prism.languages.insertBefore('inside', 'operator', {
    // All untokenized words that are not namespaces should be class names
    'class-name': /\b[a-z_]\w*\b(?!\s*::)/i
  }, Prism.languages.cpp['base-clause']);
})(Prism);
/* "prismjs/components/prism-css" */


(function (Prism) {
  var string = /("|')(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/;
  Prism.languages.css = {
    'comment': /\/\*[\s\S]*?\*\//,
    'atrule': {
      pattern: /@[\w-](?:[^;{\s]|\s+(?![\s{]))*(?:;|(?=\s*\{))/,
      inside: {
        'rule': /^@[\w-]+/,
        'selector-function-argument': {
          pattern: /(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,
          lookbehind: true,
          alias: 'selector'
        },
        'keyword': {
          pattern: /(^|[^\w-])(?:and|not|only|or)(?![\w-])/,
          lookbehind: true
        } // See rest below

      }
    },
    'url': {
      // https://drafts.csswg.org/css-values-3/#urls
      pattern: RegExp('\\burl\\((?:' + string.source + '|' + /(?:[^\\\r\n()"']|\\[\s\S])*/.source + ')\\)', 'i'),
      greedy: true,
      inside: {
        'function': /^url/i,
        'punctuation': /^\(|\)$/,
        'string': {
          pattern: RegExp('^' + string.source + '$'),
          alias: 'url'
        }
      }
    },
    'selector': RegExp('[^{}\\s](?:[^{};"\'\\s]|\\s+(?![\\s{])|' + string.source + ')*(?=\\s*\\{)'),
    'string': {
      pattern: string,
      greedy: true
    },
    'property': /(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,
    'important': /!important\b/i,
    'function': /[-a-z0-9]+(?=\()/i,
    'punctuation': /[(){};:,]/
  };
  Prism.languages.css['atrule'].inside.rest = Prism.languages.css;
  var markup = Prism.languages.markup;

  if (markup) {
    markup.tag.addInlined('style', 'css');
    Prism.languages.insertBefore('inside', 'attr-value', {
      'style-attr': {
        pattern: /(^|["'\s])style\s*=\s*(?:"[^"]*"|'[^']*')/i,
        lookbehind: true,
        inside: {
          'attr-value': {
            pattern: /=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,
            inside: {
              'style': {
                pattern: /(["'])[\s\S]+(?=["']$)/,
                lookbehind: true,
                alias: 'language-css',
                inside: Prism.languages.css
              },
              'punctuation': [{
                pattern: /^=/,
                alias: 'attr-equals'
              }, /"|'/]
            }
          },
          'attr-name': /^style/i
        }
      }
    }, markup.tag);
  }
})(Prism);
/* "prismjs/components/prism-css-extras" */


(function (Prism) {
  var string = /("|')(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/;
  var selectorInside;
  Prism.languages.css.selector = {
    pattern: Prism.languages.css.selector,
    inside: selectorInside = {
      'pseudo-element': /:(?:after|before|first-letter|first-line|selection)|::[-\w]+/,
      'pseudo-class': /:[-\w]+/,
      'class': /\.[-\w]+/,
      'id': /#[-\w]+/,
      'attribute': {
        pattern: RegExp('\\[(?:[^[\\]"\']|' + string.source + ')*\\]'),
        greedy: true,
        inside: {
          'punctuation': /^\[|\]$/,
          'case-sensitivity': {
            pattern: /(\s)[si]$/i,
            lookbehind: true,
            alias: 'keyword'
          },
          'namespace': {
            pattern: /^(\s*)(?:(?!\s)[-*\w\xA0-\uFFFF])*\|(?!=)/,
            lookbehind: true,
            inside: {
              'punctuation': /\|$/
            }
          },
          'attr-name': {
            pattern: /^(\s*)(?:(?!\s)[-\w\xA0-\uFFFF])+/,
            lookbehind: true
          },
          'attr-value': [string, {
            pattern: /(=\s*)(?:(?!\s)[-\w\xA0-\uFFFF])+(?=\s*$)/,
            lookbehind: true
          }],
          'operator': /[|~*^$]?=/
        }
      },
      'n-th': [{
        pattern: /(\(\s*)[+-]?\d*[\dn](?:\s*[+-]\s*\d+)?(?=\s*\))/,
        lookbehind: true,
        inside: {
          'number': /[\dn]+/,
          'operator': /[+-]/
        }
      }, {
        pattern: /(\(\s*)(?:even|odd)(?=\s*\))/i,
        lookbehind: true
      }],
      'combinator': />|\+|~|\|\|/,
      // the `tag` token has been existed and removed.
      // because we can't find a perfect tokenize to match it.
      // if you want to add it, please read https://github.com/PrismJS/prism/pull/2373 first.
      'punctuation': /[(),]/
    }
  };
  Prism.languages.css['atrule'].inside['selector-function-argument'].inside = selectorInside;
  Prism.languages.insertBefore('css', 'property', {
    'variable': {
      pattern: /(^|[^-\w\xA0-\uFFFF])--(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*/i,
      lookbehind: true
    }
  });
  var unit = {
    pattern: /(\b\d+)(?:%|[a-z]+\b)/,
    lookbehind: true
  }; // 123 -123 .123 -.123 12.3 -12.3

  var number = {
    pattern: /(^|[^\w.-])-?(?:\d+(?:\.\d+)?|\.\d+)/,
    lookbehind: true
  };
  Prism.languages.insertBefore('css', 'function', {
    'operator': {
      pattern: /(\s)[+\-*\/](?=\s)/,
      lookbehind: true
    },
    // CAREFUL!
    // Previewers and Inline color use hexcode and color.
    'hexcode': {
      pattern: /\B#(?:[\da-f]{1,2}){3,4}\b/i,
      alias: 'color'
    },
    'color': [/\b(?:AliceBlue|AntiqueWhite|Aqua|Aquamarine|Azure|Beige|Bisque|Black|BlanchedAlmond|Blue|BlueViolet|Brown|BurlyWood|CadetBlue|Chartreuse|Chocolate|Coral|CornflowerBlue|Cornsilk|Crimson|Cyan|DarkBlue|DarkCyan|DarkGoldenRod|DarkGr[ae]y|DarkGreen|DarkKhaki|DarkMagenta|DarkOliveGreen|DarkOrange|DarkOrchid|DarkRed|DarkSalmon|DarkSeaGreen|DarkSlateBlue|DarkSlateGr[ae]y|DarkTurquoise|DarkViolet|DeepPink|DeepSkyBlue|DimGr[ae]y|DodgerBlue|FireBrick|FloralWhite|ForestGreen|Fuchsia|Gainsboro|GhostWhite|Gold|GoldenRod|Gr[ae]y|Green|GreenYellow|HoneyDew|HotPink|IndianRed|Indigo|Ivory|Khaki|Lavender|LavenderBlush|LawnGreen|LemonChiffon|LightBlue|LightCoral|LightCyan|LightGoldenRodYellow|LightGr[ae]y|LightGreen|LightPink|LightSalmon|LightSeaGreen|LightSkyBlue|LightSlateGr[ae]y|LightSteelBlue|LightYellow|Lime|LimeGreen|Linen|Magenta|Maroon|MediumAquaMarine|MediumBlue|MediumOrchid|MediumPurple|MediumSeaGreen|MediumSlateBlue|MediumSpringGreen|MediumTurquoise|MediumVioletRed|MidnightBlue|MintCream|MistyRose|Moccasin|NavajoWhite|Navy|OldLace|Olive|OliveDrab|Orange|OrangeRed|Orchid|PaleGoldenRod|PaleGreen|PaleTurquoise|PaleVioletRed|PapayaWhip|PeachPuff|Peru|Pink|Plum|PowderBlue|Purple|Red|RosyBrown|RoyalBlue|SaddleBrown|Salmon|SandyBrown|SeaGreen|SeaShell|Sienna|Silver|SkyBlue|SlateBlue|SlateGr[ae]y|Snow|SpringGreen|SteelBlue|Tan|Teal|Thistle|Tomato|Transparent|Turquoise|Violet|Wheat|White|WhiteSmoke|Yellow|YellowGreen)\b/i, {
      pattern: /\b(?:rgb|hsl)\(\s*\d{1,3}\s*,\s*\d{1,3}%?\s*,\s*\d{1,3}%?\s*\)\B|\b(?:rgb|hsl)a\(\s*\d{1,3}\s*,\s*\d{1,3}%?\s*,\s*\d{1,3}%?\s*,\s*(?:0|0?\.\d+|1)\s*\)\B/i,
      inside: {
        'unit': unit,
        'number': number,
        'function': /[\w-]+(?=\()/,
        'punctuation': /[(),]/
      }
    }],
    // it's important that there is no boundary assertion after the hex digits
    'entity': /\\[\da-f]{1,8}/i,
    'unit': unit,
    'number': number
  });
})(Prism);
/* "prismjs/components/prism-javascript" */


Prism.languages.javascript = Prism.languages.extend('clike', {
  'class-name': [Prism.languages.clike['class-name'], {
    pattern: /(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:prototype|constructor))/,
    lookbehind: true
  }],
  'keyword': [{
    pattern: /((?:^|})\s*)(?:catch|finally)\b/,
    lookbehind: true
  }, {
    pattern: /(^|[^.]|\.\.\.\s*)\b(?:as|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|for|from|function|(?:get|set)(?=\s*[\[$\w\xA0-\uFFFF])|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,
    lookbehind: true
  }],
  // Allow for all non-ASCII characters (See http://stackoverflow.com/a/2008444)
  'function': /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,
  'number': /\b(?:(?:0[xX](?:[\dA-Fa-f](?:_[\dA-Fa-f])?)+|0[bB](?:[01](?:_[01])?)+|0[oO](?:[0-7](?:_[0-7])?)+)n?|(?:\d(?:_\d)?)+n|NaN|Infinity)\b|(?:\b(?:\d(?:_\d)?)+\.?(?:\d(?:_\d)?)*|\B\.(?:\d(?:_\d)?)+)(?:[Ee][+-]?(?:\d(?:_\d)?)+)?/,
  'operator': /--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/
});
Prism.languages.javascript['class-name'][0].pattern = /(\b(?:class|interface|extends|implements|instanceof|new)\s+)[\w.\\]+/;
Prism.languages.insertBefore('javascript', 'keyword', {
  'regex': {
    pattern: /((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)\/(?:\[(?:[^\]\\\r\n]|\\.)*]|\\.|[^/\\\[\r\n])+\/[gimyus]{0,6}(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/,
    lookbehind: true,
    greedy: true,
    inside: {
      'regex-source': {
        pattern: /^(\/)[\s\S]+(?=\/[a-z]*$)/,
        lookbehind: true,
        alias: 'language-regex',
        inside: Prism.languages.regex
      },
      'regex-flags': /[a-z]+$/,
      'regex-delimiter': /^\/|\/$/
    }
  },
  // This must be declared before keyword because we use "function" inside the look-forward
  'function-variable': {
    pattern: /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,
    alias: 'function'
  },
  'parameter': [{
    pattern: /(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,
    lookbehind: true,
    inside: Prism.languages.javascript
  }, {
    pattern: /(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,
    inside: Prism.languages.javascript
  }, {
    pattern: /(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,
    lookbehind: true,
    inside: Prism.languages.javascript
  }, {
    pattern: /((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,
    lookbehind: true,
    inside: Prism.languages.javascript
  }],
  'constant': /\b[A-Z](?:[A-Z_]|\dx?)*\b/
});
Prism.languages.insertBefore('javascript', 'string', {
  'template-string': {
    pattern: /`(?:\\[\s\S]|\${(?:[^{}]|{(?:[^{}]|{[^}]*})*})+}|(?!\${)[^\\`])*`/,
    greedy: true,
    inside: {
      'template-punctuation': {
        pattern: /^`|`$/,
        alias: 'string'
      },
      'interpolation': {
        pattern: /((?:^|[^\\])(?:\\{2})*)\${(?:[^{}]|{(?:[^{}]|{[^}]*})*})+}/,
        lookbehind: true,
        inside: {
          'interpolation-punctuation': {
            pattern: /^\${|}$/,
            alias: 'punctuation'
          },
          rest: Prism.languages.javascript
        }
      },
      'string': /[\s\S]+/
    }
  }
});

if (Prism.languages.markup) {
  Prism.languages.markup.tag.addInlined('script', 'javascript');
}

Prism.languages.js = Prism.languages.javascript;
/* "prismjs/components/prism-jsx" */

(function (Prism) {
  var javascript = Prism.util.clone(Prism.languages.javascript);
  Prism.languages.jsx = Prism.languages.extend('markup', javascript);
  Prism.languages.jsx.tag.pattern = /<\/?(?:[\w.:-]+(?:\s+(?:[\w.:$-]+(?:=(?:"(?:\\[^]|[^\\"])*"|'(?:\\[^]|[^\\'])*'|[^\s{'">=]+|\{(?:\{(?:\{[^{}]*\}|[^{}])*\}|[^{}])+\}))?|\{\s*\.{3}\s*[a-z_$][\w$]*(?:\.[a-z_$][\w$]*)*\s*\}))*\s*\/?)?>/i;
  Prism.languages.jsx.tag.inside['tag'].pattern = /^<\/?[^\s>\/]*/i;
  Prism.languages.jsx.tag.inside['attr-value'].pattern = /=(?!\{)(?:"(?:\\[^]|[^\\"])*"|'(?:\\[^]|[^\\'])*'|[^\s'">]+)/i;
  Prism.languages.jsx.tag.inside['tag'].inside['class-name'] = /^[A-Z]\w*(?:\.[A-Z]\w*)*$/;
  Prism.languages.insertBefore('inside', 'attr-name', {
    'spread': {
      pattern: /\{\s*\.{3}\s*[a-z_$][\w$]*(?:\.[a-z_$][\w$]*)*\s*\}/,
      inside: {
        'punctuation': /\.{3}|[{}.]/,
        'attr-value': /\w+/
      }
    }
  }, Prism.languages.jsx.tag);
  Prism.languages.insertBefore('inside', 'attr-value', {
    'script': {
      // Allow for two levels of nesting
      pattern: /=(?:\{(?:\{(?:\{[^{}]*\}|[^{}])*\}|[^{}])+\})/i,
      inside: {
        'script-punctuation': {
          pattern: /^=(?={)/,
          alias: 'punctuation'
        },
        rest: Prism.languages.jsx
      },
      'alias': 'language-javascript'
    }
  }, Prism.languages.jsx.tag); // The following will handle plain text inside tags

  var stringifyToken = function (token) {
    if (!token) {
      return '';
    }

    if (typeof token === 'string') {
      return token;
    }

    if (typeof token.content === 'string') {
      return token.content;
    }

    return token.content.map(stringifyToken).join('');
  };

  var walkTokens = function (tokens) {
    var openedTags = [];

    for (var i = 0; i < tokens.length; i++) {
      var token = tokens[i];
      var notTagNorBrace = false;

      if (typeof token !== 'string') {
        if (token.type === 'tag' && token.content[0] && token.content[0].type === 'tag') {
          // We found a tag, now find its kind
          if (token.content[0].content[0].content === '</') {
            // Closing tag
            if (openedTags.length > 0 && openedTags[openedTags.length - 1].tagName === stringifyToken(token.content[0].content[1])) {
              // Pop matching opening tag
              openedTags.pop();
            }
          } else {
            if (token.content[token.content.length - 1].content === '/>') ; else {
              // Opening tag
              openedTags.push({
                tagName: stringifyToken(token.content[0].content[1]),
                openedBraces: 0
              });
            }
          }
        } else if (openedTags.length > 0 && token.type === 'punctuation' && token.content === '{') {
          // Here we might have entered a JSX context inside a tag
          openedTags[openedTags.length - 1].openedBraces++;
        } else if (openedTags.length > 0 && openedTags[openedTags.length - 1].openedBraces > 0 && token.type === 'punctuation' && token.content === '}') {
          // Here we might have left a JSX context inside a tag
          openedTags[openedTags.length - 1].openedBraces--;
        } else {
          notTagNorBrace = true;
        }
      }

      if (notTagNorBrace || typeof token === 'string') {
        if (openedTags.length > 0 && openedTags[openedTags.length - 1].openedBraces === 0) {
          // Here we are inside a tag, and not inside a JSX context.
          // That's plain text: drop any tokens matched.
          var plainText = stringifyToken(token); // And merge text with adjacent text

          if (i < tokens.length - 1 && (typeof tokens[i + 1] === 'string' || tokens[i + 1].type === 'plain-text')) {
            plainText += stringifyToken(tokens[i + 1]);
            tokens.splice(i + 1, 1);
          }

          if (i > 0 && (typeof tokens[i - 1] === 'string' || tokens[i - 1].type === 'plain-text')) {
            plainText = stringifyToken(tokens[i - 1]) + plainText;
            tokens.splice(i - 1, 1);
            i--;
          }

          tokens[i] = new Prism.Token('plain-text', plainText, null, plainText);
        }
      }

      if (token.content && typeof token.content !== 'string') {
        walkTokens(token.content);
      }
    }
  };

  Prism.hooks.add('after-tokenize', function (env) {
    if (env.language !== 'jsx' && env.language !== 'tsx') {
      return;
    }

    walkTokens(env.tokens);
  });
})(Prism);
/* "prismjs/components/prism-js-extras" */


(function (Prism) {
  Prism.languages.insertBefore('javascript', 'function-variable', {
    'method-variable': {
      pattern: RegExp('(\\.\\s*)' + Prism.languages.javascript['function-variable'].pattern.source),
      lookbehind: true,
      alias: ['function-variable', 'method', 'function', 'property-access']
    }
  });
  Prism.languages.insertBefore('javascript', 'function', {
    'method': {
      pattern: RegExp('(\\.\\s*)' + Prism.languages.javascript['function'].source),
      lookbehind: true,
      alias: ['function', 'property-access']
    }
  });
  Prism.languages.insertBefore('javascript', 'constant', {
    'known-class-name': [{
      // standard built-ins
      // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects
      pattern: /\b(?:(?:(?:Uint|Int)(?:8|16|32)|Uint8Clamped|Float(?:32|64))?Array|ArrayBuffer|BigInt|Boolean|DataView|Date|Error|Function|Intl|JSON|Math|Number|Object|Promise|Proxy|Reflect|RegExp|String|Symbol|(?:Weak)?(?:Set|Map)|WebAssembly)\b/,
      alias: 'class-name'
    }, {
      // errors
      pattern: /\b(?:[A-Z]\w*)Error\b/,
      alias: 'class-name'
    }]
  });
  /**
   * Replaces the `<ID>` placeholder in the given pattern with a pattern for general JS identifiers.
   *
   * @param {string} source
   * @param {string} [flags]
   * @returns {RegExp}
   */

  function withId(source, flags) {
    return RegExp(source.replace(/<ID>/g, function () {
      return /(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*/.source;
    }), flags);
  }

  Prism.languages.insertBefore('javascript', 'keyword', {
    'imports': {
      // https://tc39.es/ecma262/#sec-imports
      pattern: withId(/(\bimport\b\s*)(?:<ID>(?:\s*,\s*(?:\*\s*as\s+<ID>|\{[^{}]*\}))?|\*\s*as\s+<ID>|\{[^{}]*\})(?=\s*\bfrom\b)/.source),
      lookbehind: true,
      inside: Prism.languages.javascript
    },
    'exports': {
      // https://tc39.es/ecma262/#sec-exports
      pattern: withId(/(\bexport\b\s*)(?:\*(?:\s*as\s+<ID>)?(?=\s*\bfrom\b)|\{[^{}]*\})/.source),
      lookbehind: true,
      inside: Prism.languages.javascript
    }
  });
  Prism.languages.javascript['keyword'].unshift({
    pattern: /\b(?:as|default|export|from|import)\b/,
    alias: 'module'
  }, {
    pattern: /\b(?:await|break|catch|continue|do|else|for|finally|if|return|switch|throw|try|while|yield)\b/,
    alias: 'control-flow'
  }, {
    pattern: /\bnull\b/,
    alias: ['null', 'nil']
  }, {
    pattern: /\bundefined\b/,
    alias: 'nil'
  });
  Prism.languages.insertBefore('javascript', 'operator', {
    'spread': {
      pattern: /\.{3}/,
      alias: 'operator'
    },
    'arrow': {
      pattern: /=>/,
      alias: 'operator'
    }
  });
  Prism.languages.insertBefore('javascript', 'punctuation', {
    'property-access': {
      pattern: withId(/(\.\s*)#?<ID>/.source),
      lookbehind: true
    },
    'maybe-class-name': {
      pattern: /(^|[^$\w\xA0-\uFFFF])[A-Z][$\w\xA0-\uFFFF]+/,
      lookbehind: true
    },
    'dom': {
      // this contains only a few commonly used DOM variables
      pattern: /\b(?:document|location|navigator|performance|(?:local|session)Storage|window)\b/,
      alias: 'variable'
    },
    'console': {
      pattern: /\bconsole(?=\s*\.)/,
      alias: 'class-name'
    }
  }); // add 'maybe-class-name' to tokens which might be a class name

  var maybeClassNameTokens = ['function', 'function-variable', 'method', 'method-variable', 'property-access'];

  for (var i = 0; i < maybeClassNameTokens.length; i++) {
    var token = maybeClassNameTokens[i];
    var value = Prism.languages.javascript[token]; // convert regex to object

    if (Prism.util.type(value) === 'RegExp') {
      value = Prism.languages.javascript[token] = {
        pattern: value
      };
    } // keep in mind that we don't support arrays


    var inside = value.inside || {};
    value.inside = inside;
    inside['maybe-class-name'] = /^[A-Z][\s\S]*/;
  }
})(Prism);
/* "prismjs/components/prism-coffeescript" */


(function (Prism) {
  // Ignore comments starting with { to privilege string interpolation highlighting
  var comment = /#(?!\{).+/,
      interpolation = {
    pattern: /#\{[^}]+\}/,
    alias: 'variable'
  };
  Prism.languages.coffeescript = Prism.languages.extend('javascript', {
    'comment': comment,
    'string': [// Strings are multiline
    {
      pattern: /'(?:\\[\s\S]|[^\\'])*'/,
      greedy: true
    }, {
      // Strings are multiline
      pattern: /"(?:\\[\s\S]|[^\\"])*"/,
      greedy: true,
      inside: {
        'interpolation': interpolation
      }
    }],
    'keyword': /\b(?:and|break|by|catch|class|continue|debugger|delete|do|each|else|extend|extends|false|finally|for|if|in|instanceof|is|isnt|let|loop|namespace|new|no|not|null|of|off|on|or|own|return|super|switch|then|this|throw|true|try|typeof|undefined|unless|until|when|while|window|with|yes|yield)\b/,
    'class-member': {
      pattern: /@(?!\d)\w+/,
      alias: 'variable'
    }
  });
  Prism.languages.insertBefore('coffeescript', 'comment', {
    'multiline-comment': {
      pattern: /###[\s\S]+?###/,
      alias: 'comment'
    },
    // Block regexp can contain comments and interpolation
    'block-regex': {
      pattern: /\/{3}[\s\S]*?\/{3}/,
      alias: 'regex',
      inside: {
        'comment': comment,
        'interpolation': interpolation
      }
    }
  });
  Prism.languages.insertBefore('coffeescript', 'string', {
    'inline-javascript': {
      pattern: /`(?:\\[\s\S]|[^\\`])*`/,
      inside: {
        'delimiter': {
          pattern: /^`|`$/,
          alias: 'punctuation'
        },
        'script': {
          pattern: /[\s\S]+/,
          alias: 'language-javascript',
          inside: Prism.languages.javascript
        }
      }
    },
    // Block strings
    'multiline-string': [{
      pattern: /'''[\s\S]*?'''/,
      greedy: true,
      alias: 'string'
    }, {
      pattern: /"""[\s\S]*?"""/,
      greedy: true,
      alias: 'string',
      inside: {
        interpolation: interpolation
      }
    }]
  });
  Prism.languages.insertBefore('coffeescript', 'keyword', {
    // Object property
    'property': /(?!\d)\w+(?=\s*:(?!:))/
  });
  delete Prism.languages.coffeescript['template-string'];
  Prism.languages.coffee = Prism.languages.coffeescript;
})(Prism);
/* "prismjs/components/prism-diff" */


(function (Prism) {
  Prism.languages.diff = {
    'coord': [// Match all kinds of coord lines (prefixed by "+++", "---" or "***").
    /^(?:\*{3}|-{3}|\+{3}).*$/m, // Match "@@ ... @@" coord lines in unified diff.
    /^@@.*@@$/m, // Match coord lines in normal diff (starts with a number).
    /^\d.*$/m] // deleted, inserted, unchanged, diff

  };
  /**
   * A map from the name of a block to its line prefix.
   *
   * @type {Object<string, string>}
   */

  var PREFIXES = {
    'deleted-sign': '-',
    'deleted-arrow': '<',
    'inserted-sign': '+',
    'inserted-arrow': '>',
    'unchanged': ' ',
    'diff': '!'
  }; // add a token for each prefix

  Object.keys(PREFIXES).forEach(function (name) {
    var prefix = PREFIXES[name];
    var alias = [];

    if (!/^\w+$/.test(name)) {
      // "deleted-sign" -> "deleted"
      alias.push(/\w+/.exec(name)[0]);
    }

    if (name === "diff") {
      alias.push("bold");
    }

    Prism.languages.diff[name] = {
      pattern: RegExp('^(?:[' + prefix + '].*(?:\r\n?|\n|(?![\\s\\S])))+', 'm'),
      alias: alias,
      inside: {
        'line': {
          pattern: /(.)(?=[\s\S]).*(?:\r\n?|\n)?/,
          lookbehind: true
        },
        'prefix': {
          pattern: /[\s\S]/,
          alias: /\w+/.exec(name)[0]
        }
      }
    };
  }); // make prefixes available to Diff plugin

  Object.defineProperty(Prism.languages.diff, 'PREFIXES', {
    value: PREFIXES
  });
})(Prism);
/* "prismjs/components/prism-git" */


Prism.languages.git = {
  /*
   * A simple one line comment like in a git status command
   * For instance:
   * $ git status
   * # On branch infinite-scroll
   * # Your branch and 'origin/sharedBranches/frontendTeam/infinite-scroll' have diverged,
   * # and have 1 and 2 different commits each, respectively.
   * nothing to commit (working directory clean)
   */
  'comment': /^#.*/m,

  /*
   * Regexp to match the changed lines in a git diff output. Check the example below.
   */
  'deleted': /^[-–].*/m,
  'inserted': /^\+.*/m,

  /*
   * a string (double and simple quote)
   */
  'string': /("|')(?:\\.|(?!\1)[^\\\r\n])*\1/m,

  /*
   * a git command. It starts with a random prompt finishing by a $, then "git" then some other parameters
   * For instance:
   * $ git add file.txt
   */
  'command': {
    pattern: /^.*\$ git .*$/m,
    inside: {
      /*
       * A git command can contain a parameter starting by a single or a double dash followed by a string
       * For instance:
       * $ git diff --cached
       * $ git log -p
       */
      'parameter': /\s--?\w+/m
    }
  },

  /*
   * Coordinates displayed in a git diff command
   * For instance:
   * $ git diff
   * diff --git file.txt file.txt
   * index 6214953..1d54a52 100644
   * --- file.txt
   * +++ file.txt
   * @@ -1 +1,2 @@
   * -Here's my tetx file
   * +Here's my text file
   * +And this is the second line
   */
  'coord': /^@@.*@@$/m,

  /*
   * Match a "commit [SHA1]" line in a git log output.
   * For instance:
   * $ git log
   * commit a11a14ef7e26f2ca62d4b35eac455ce636d0dc09
   * Author: lgiraudel
   * Date:   Mon Feb 17 11:18:34 2014 +0100
   *
   *     Add of a new line
   */
  'commit-sha1': /^commit \w{40}$/m
};
/* "prismjs/components/prism-go" */

Prism.languages.go = Prism.languages.extend('clike', {
  'string': {
    pattern: /(["'`])(?:\\[\s\S]|(?!\1)[^\\])*\1/,
    greedy: true
  },
  'keyword': /\b(?:break|case|chan|const|continue|default|defer|else|fallthrough|for|func|go(?:to)?|if|import|interface|map|package|range|return|select|struct|switch|type|var)\b/,
  'boolean': /\b(?:_|iota|nil|true|false)\b/,
  'number': /(?:\b0x[a-f\d]+|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[-+]?\d+)?)i?/i,
  'operator': /[*\/%^!=]=?|\+[=+]?|-[=-]?|\|[=|]?|&(?:=|&|\^=?)?|>(?:>=?|=)?|<(?:<=?|=|-)?|:=|\.\.\./,
  'builtin': /\b(?:bool|byte|complex(?:64|128)|error|float(?:32|64)|rune|string|u?int(?:8|16|32|64)?|uintptr|append|cap|close|complex|copy|delete|imag|len|make|new|panic|print(?:ln)?|real|recover)\b/
});
delete Prism.languages.go['class-name'];
/* "prismjs/components/prism-graphql" */

Prism.languages.graphql = {
  'comment': /#.*/,
  'description': {
    pattern: /(?:"""(?:[^"]|(?!""")")*"""|"(?:\\.|[^\\"\r\n])*")(?=\s*[a-z_])/i,
    greedy: true,
    alias: 'string',
    inside: {
      'language-markdown': {
        pattern: /(^"(?:"")?)(?!\1)[\s\S]+(?=\1$)/,
        lookbehind: true,
        inside: Prism.languages.markdown
      }
    }
  },
  'string': {
    pattern: /"""(?:[^"]|(?!""")")*"""|"(?:\\.|[^\\"\r\n])*"/,
    greedy: true
  },
  'number': /(?:\B-|\b)\d+(?:\.\d+)?(?:e[+-]?\d+)?\b/i,
  'boolean': /\b(?:true|false)\b/,
  'variable': /\$[a-z_]\w*/i,
  'directive': {
    pattern: /@[a-z_]\w*/i,
    alias: 'function'
  },
  'attr-name': {
    pattern: /[a-z_]\w*(?=\s*(?:\((?:[^()"]|"(?:\\.|[^\\"\r\n])*")*\))?:)/i,
    greedy: true
  },
  'class-name': {
    pattern: /(\b(?:enum|implements|interface|on|scalar|type|union)\s+|&\s*)[a-zA-Z_]\w*/,
    lookbehind: true
  },
  'fragment': {
    pattern: /(\bfragment\s+|\.{3}\s*(?!on\b))[a-zA-Z_]\w*/,
    lookbehind: true,
    alias: 'function'
  },
  'keyword': /\b(?:directive|enum|extend|fragment|implements|input|interface|mutation|on|query|repeatable|scalar|schema|subscription|type|union)\b/,
  'operator': /[!=|&]|\.{3}/,
  'punctuation': /[!(){}\[\]:=,]/,
  'constant': /\b(?!ID\b)[A-Z][A-Z_\d]*\b/
};
/* "prismjs/components/prism-markup-templating" */

(function (Prism) {
  /**
   * Returns the placeholder for the given language id and index.
   *
   * @param {string} language
   * @param {string|number} index
   * @returns {string}
   */
  function getPlaceholder(language, index) {
    return '___' + language.toUpperCase() + index + '___';
  }

  Object.defineProperties(Prism.languages['markup-templating'] = {}, {
    buildPlaceholders: {
      /**
       * Tokenize all inline templating expressions matching `placeholderPattern`.
       *
       * If `replaceFilter` is provided, only matches of `placeholderPattern` for which `replaceFilter` returns
       * `true` will be replaced.
       *
       * @param {object} env The environment of the `before-tokenize` hook.
       * @param {string} language The language id.
       * @param {RegExp} placeholderPattern The matches of this pattern will be replaced by placeholders.
       * @param {(match: string) => boolean} [replaceFilter]
       */
      value: function (env, language, placeholderPattern, replaceFilter) {
        if (env.language !== language) {
          return;
        }

        var tokenStack = env.tokenStack = [];
        env.code = env.code.replace(placeholderPattern, function (match) {
          if (typeof replaceFilter === 'function' && !replaceFilter(match)) {
            return match;
          }

          var i = tokenStack.length;
          var placeholder; // Check for existing strings

          while (env.code.indexOf(placeholder = getPlaceholder(language, i)) !== -1) {
            ++i;
          } // Create a sparse array


          tokenStack[i] = match;
          return placeholder;
        }); // Switch the grammar to markup

        env.grammar = Prism.languages.markup;
      }
    },
    tokenizePlaceholders: {
      /**
       * Replace placeholders with proper tokens after tokenizing.
       *
       * @param {object} env The environment of the `after-tokenize` hook.
       * @param {string} language The language id.
       */
      value: function (env, language) {
        if (env.language !== language || !env.tokenStack) {
          return;
        } // Switch the grammar back


        env.grammar = Prism.languages[language];
        var j = 0;
        var keys = Object.keys(env.tokenStack);

        function walkTokens(tokens) {
          for (var i = 0; i < tokens.length; i++) {
            // all placeholders are replaced already
            if (j >= keys.length) {
              break;
            }

            var token = tokens[i];

            if (typeof token === 'string' || token.content && typeof token.content === 'string') {
              var k = keys[j];
              var t = env.tokenStack[k];
              var s = typeof token === 'string' ? token : token.content;
              var placeholder = getPlaceholder(language, k);
              var index = s.indexOf(placeholder);

              if (index > -1) {
                ++j;
                var before = s.substring(0, index);
                var middle = new Prism.Token(language, Prism.tokenize(t, env.grammar), 'language-' + language, t);
                var after = s.substring(index + placeholder.length);
                var replacement = [];

                if (before) {
                  replacement.push.apply(replacement, walkTokens([before]));
                }

                replacement.push(middle);

                if (after) {
                  replacement.push.apply(replacement, walkTokens([after]));
                }

                if (typeof token === 'string') {
                  tokens.splice.apply(tokens, [i, 1].concat(replacement));
                } else {
                  token.content = replacement;
                }
              }
            } else if (token.content
            /* && typeof token.content !== 'string' */
            ) {
                walkTokens(token.content);
              }
          }

          return tokens;
        }

        walkTokens(env.tokens);
      }
    }
  });
})(Prism);
/* "prismjs/components/prism-handlebars" */


(function (Prism) {
  Prism.languages.handlebars = {
    'comment': /\{\{![\s\S]*?\}\}/,
    'delimiter': {
      pattern: /^\{\{\{?|\}\}\}?$/i,
      alias: 'punctuation'
    },
    'string': /(["'])(?:\\.|(?!\1)[^\\\r\n])*\1/,
    'number': /\b0x[\dA-Fa-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:[Ee][+-]?\d+)?/,
    'boolean': /\b(?:true|false)\b/,
    'block': {
      pattern: /^(\s*(?:~\s*)?)[#\/]\S+?(?=\s*(?:~\s*)?$|\s)/i,
      lookbehind: true,
      alias: 'keyword'
    },
    'brackets': {
      pattern: /\[[^\]]+\]/,
      inside: {
        punctuation: /\[|\]/,
        variable: /[\s\S]+/
      }
    },
    'punctuation': /[!"#%&':()*+,.\/;<=>@\[\\\]^`{|}~]/,
    'variable': /[^!"#%&'()*+,\/;<=>@\[\\\]^`{|}~\s]+/
  };
  Prism.hooks.add('before-tokenize', function (env) {
    var handlebarsPattern = /\{\{\{[\s\S]+?\}\}\}|\{\{[\s\S]+?\}\}/g;
    Prism.languages['markup-templating'].buildPlaceholders(env, 'handlebars', handlebarsPattern);
  });
  Prism.hooks.add('after-tokenize', function (env) {
    Prism.languages['markup-templating'].tokenizePlaceholders(env, 'handlebars');
  });
})(Prism);
/* "prismjs/components/prism-json" */
// https://www.json.org/json-en.html


Prism.languages.json = {
  'property': {
    pattern: /"(?:\\.|[^\\"\r\n])*"(?=\s*:)/,
    greedy: true
  },
  'string': {
    pattern: /"(?:\\.|[^\\"\r\n])*"(?!\s*:)/,
    greedy: true
  },
  'comment': {
    pattern: /\/\/.*|\/\*[\s\S]*?(?:\*\/|$)/,
    greedy: true
  },
  'number': /-?\b\d+(?:\.\d+)?(?:e[+-]?\d+)?\b/i,
  'punctuation': /[{}[\],]/,
  'operator': /:/,
  'boolean': /\b(?:true|false)\b/,
  'null': {
    pattern: /\bnull\b/,
    alias: 'keyword'
  }
};
Prism.languages.webmanifest = Prism.languages.json;
/* "prismjs/components/prism-less" */

/* FIXME :
 :extend() is not handled specifically : its highlighting is buggy.
 Mixin usage must be inside a ruleset to be highlighted.
 At-rules (e.g. import) containing interpolations are buggy.
 Detached rulesets are highlighted as at-rules.
 A comment before a mixin usage prevents the latter to be properly highlighted.
 */

Prism.languages.less = Prism.languages.extend('css', {
  'comment': [/\/\*[\s\S]*?\*\//, {
    pattern: /(^|[^\\])\/\/.*/,
    lookbehind: true
  }],
  'atrule': {
    pattern: /@[\w-](?:\((?:[^(){}]|\([^(){}]*\))*\)|[^(){};\s]|\s+(?!\s))*?(?=\s*\{)/,
    inside: {
      'punctuation': /[:()]/
    }
  },
  // selectors and mixins are considered the same
  'selector': {
    pattern: /(?:@\{[\w-]+\}|[^{};\s@])(?:@\{[\w-]+\}|\((?:[^(){}]|\([^(){}]*\))*\)|[^(){};@\s]|\s+(?!\s))*?(?=\s*\{)/,
    inside: {
      // mixin parameters
      'variable': /@+[\w-]+/
    }
  },
  'property': /(?:@\{[\w-]+\}|[\w-])+(?:\+_?)?(?=\s*:)/i,
  'operator': /[+\-*\/]/
});
Prism.languages.insertBefore('less', 'property', {
  'variable': [// Variable declaration (the colon must be consumed!)
  {
    pattern: /@[\w-]+\s*:/,
    inside: {
      "punctuation": /:/
    }
  }, // Variable usage
  /@@?[\w-]+/],
  'mixin-usage': {
    pattern: /([{;]\s*)[.#](?!\d)[\w-].*?(?=[(;])/,
    lookbehind: true,
    alias: 'function'
  }
});
/* "prismjs/components/prism-makefile" */

Prism.languages.makefile = {
  'comment': {
    pattern: /(^|[^\\])#(?:\\(?:\r\n|[\s\S])|[^\\\r\n])*/,
    lookbehind: true
  },
  'string': {
    pattern: /(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
    greedy: true
  },
  // Built-in target names
  'builtin': /\.[A-Z][^:#=\s]+(?=\s*:(?!=))/,
  // Targets
  'symbol': {
    pattern: /^(?:[^:=\s]|[ \t]+(?![\s:]))+(?=\s*:(?!=))/m,
    inside: {
      'variable': /\$+(?:(?!\$)[^(){}:#=\s]+|(?=[({]))/
    }
  },
  'variable': /\$+(?:(?!\$)[^(){}:#=\s]+|\([@*%<^+?][DF]\)|(?=[({]))/,
  'keyword': [// Directives
  /-include\b|\b(?:define|else|endef|endif|export|ifn?def|ifn?eq|include|override|private|sinclude|undefine|unexport|vpath)\b/, // Functions
  {
    pattern: /(\()(?:addsuffix|abspath|and|basename|call|dir|error|eval|file|filter(?:-out)?|findstring|firstword|flavor|foreach|guile|if|info|join|lastword|load|notdir|or|origin|patsubst|realpath|shell|sort|strip|subst|suffix|value|warning|wildcard|word(?:s|list)?)(?=[ \t])/,
    lookbehind: true
  }],
  'operator': /(?:::|[?:+!])?=|[|@]/,
  'punctuation': /[:;(){}]/
};
/* "prismjs/components/prism-markdown" */

(function (Prism) {
  // Allow only one line break
  var inner = /(?:\\.|[^\\\n\r]|(?:\n|\r\n?)(?!\n|\r\n?))/.source;
  /**
   * This function is intended for the creation of the bold or italic pattern.
   *
   * This also adds a lookbehind group to the given pattern to ensure that the pattern is not backslash-escaped.
   *
   * _Note:_ Keep in mind that this adds a capturing group.
   *
   * @param {string} pattern
   * @returns {RegExp}
   */

  function createInline(pattern) {
    pattern = pattern.replace(/<inner>/g, function () {
      return inner;
    });
    return RegExp(/((?:^|[^\\])(?:\\{2})*)/.source + '(?:' + pattern + ')');
  }

  var tableCell = /(?:\\.|``(?:[^`\r\n]|`(?!`))+``|`[^`\r\n]+`|[^\\|\r\n`])+/.source;
  var tableRow = /\|?__(?:\|__)+\|?(?:(?:\n|\r\n?)|(?![\s\S]))/.source.replace(/__/g, function () {
    return tableCell;
  });
  var tableLine = /\|?[ \t]*:?-{3,}:?[ \t]*(?:\|[ \t]*:?-{3,}:?[ \t]*)+\|?(?:\n|\r\n?)/.source;
  Prism.languages.markdown = Prism.languages.extend('markup', {});
  Prism.languages.insertBefore('markdown', 'prolog', {
    'front-matter-block': {
      pattern: /(^(?:\s*[\r\n])?)---(?!.)[\s\S]*?[\r\n]---(?!.)/,
      lookbehind: true,
      greedy: true,
      inside: {
        'punctuation': /^---|---$/,
        'font-matter': {
          pattern: /\S+(?:\s+\S+)*/,
          alias: ['yaml', 'language-yaml'],
          inside: Prism.languages.yaml
        }
      }
    },
    'blockquote': {
      // > ...
      pattern: /^>(?:[\t ]*>)*/m,
      alias: 'punctuation'
    },
    'table': {
      pattern: RegExp('^' + tableRow + tableLine + '(?:' + tableRow + ')*', 'm'),
      inside: {
        'table-data-rows': {
          pattern: RegExp('^(' + tableRow + tableLine + ')(?:' + tableRow + ')*$'),
          lookbehind: true,
          inside: {
            'table-data': {
              pattern: RegExp(tableCell),
              inside: Prism.languages.markdown
            },
            'punctuation': /\|/
          }
        },
        'table-line': {
          pattern: RegExp('^(' + tableRow + ')' + tableLine + '$'),
          lookbehind: true,
          inside: {
            'punctuation': /\||:?-{3,}:?/
          }
        },
        'table-header-row': {
          pattern: RegExp('^' + tableRow + '$'),
          inside: {
            'table-header': {
              pattern: RegExp(tableCell),
              alias: 'important',
              inside: Prism.languages.markdown
            },
            'punctuation': /\|/
          }
        }
      }
    },
    'code': [{
      // Prefixed by 4 spaces or 1 tab and preceded by an empty line
      pattern: /((?:^|\n)[ \t]*\n|(?:^|\r\n?)[ \t]*\r\n?)(?: {4}|\t).+(?:(?:\n|\r\n?)(?: {4}|\t).+)*/,
      lookbehind: true,
      alias: 'keyword'
    }, {
      // `code`
      // ``code``
      pattern: /``.+?``|`[^`\r\n]+`/,
      alias: 'keyword'
    }, {
      // ```optional language
      // code block
      // ```
      pattern: /^```[\s\S]*?^```$/m,
      greedy: true,
      inside: {
        'code-block': {
          pattern: /^(```.*(?:\n|\r\n?))[\s\S]+?(?=(?:\n|\r\n?)^```$)/m,
          lookbehind: true
        },
        'code-language': {
          pattern: /^(```).+/,
          lookbehind: true
        },
        'punctuation': /```/
      }
    }],
    'title': [{
      // title 1
      // =======
      // title 2
      // -------
      pattern: /\S.*(?:\n|\r\n?)(?:==+|--+)(?=[ \t]*$)/m,
      alias: 'important',
      inside: {
        punctuation: /==+$|--+$/
      }
    }, {
      // # title 1
      // ###### title 6
      pattern: /(^\s*)#.+/m,
      lookbehind: true,
      alias: 'important',
      inside: {
        punctuation: /^#+|#+$/
      }
    }],
    'hr': {
      // ***
      // ---
      // * * *
      // -----------
      pattern: /(^\s*)([*-])(?:[\t ]*\2){2,}(?=\s*$)/m,
      lookbehind: true,
      alias: 'punctuation'
    },
    'list': {
      // * item
      // + item
      // - item
      // 1. item
      pattern: /(^\s*)(?:[*+-]|\d+\.)(?=[\t ].)/m,
      lookbehind: true,
      alias: 'punctuation'
    },
    'url-reference': {
      // [id]: http://example.com "Optional title"
      // [id]: http://example.com 'Optional title'
      // [id]: http://example.com (Optional title)
      // [id]: <http://example.com> "Optional title"
      pattern: /!?\[[^\]]+\]:[\t ]+(?:\S+|<(?:\\.|[^>\\])+>)(?:[\t ]+(?:"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|\((?:\\.|[^)\\])*\)))?/,
      inside: {
        'variable': {
          pattern: /^(!?\[)[^\]]+/,
          lookbehind: true
        },
        'string': /(?:"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|\((?:\\.|[^)\\])*\))$/,
        'punctuation': /^[\[\]!:]|[<>]/
      },
      alias: 'url'
    },
    'bold': {
      // **strong**
      // __strong__
      // allow one nested instance of italic text using the same delimiter
      pattern: createInline(/\b__(?:(?!_)<inner>|_(?:(?!_)<inner>)+_)+__\b|\*\*(?:(?!\*)<inner>|\*(?:(?!\*)<inner>)+\*)+\*\*/.source),
      lookbehind: true,
      greedy: true,
      inside: {
        'content': {
          pattern: /(^..)[\s\S]+(?=..$)/,
          lookbehind: true,
          inside: {} // see below

        },
        'punctuation': /\*\*|__/
      }
    },
    'italic': {
      // *em*
      // _em_
      // allow one nested instance of bold text using the same delimiter
      pattern: createInline(/\b_(?:(?!_)<inner>|__(?:(?!_)<inner>)+__)+_\b|\*(?:(?!\*)<inner>|\*\*(?:(?!\*)<inner>)+\*\*)+\*/.source),
      lookbehind: true,
      greedy: true,
      inside: {
        'content': {
          pattern: /(^.)[\s\S]+(?=.$)/,
          lookbehind: true,
          inside: {} // see below

        },
        'punctuation': /[*_]/
      }
    },
    'strike': {
      // ~~strike through~~
      // ~strike~
      pattern: createInline(/(~~?)(?:(?!~)<inner>)+?\2/.source),
      lookbehind: true,
      greedy: true,
      inside: {
        'content': {
          pattern: /(^~~?)[\s\S]+(?=\1$)/,
          lookbehind: true,
          inside: {} // see below

        },
        'punctuation': /~~?/
      }
    },
    'url': {
      // [example](http://example.com "Optional title")
      // [example][id]
      // [example] [id]
      pattern: createInline(/!?\[(?:(?!\])<inner>)+\](?:\([^\s)]+(?:[\t ]+"(?:\\.|[^"\\])*")?\)|[ \t]?\[(?:(?!\])<inner>)+\])/.source),
      lookbehind: true,
      greedy: true,
      inside: {
        'operator': /^!/,
        'content': {
          pattern: /(^\[)[^\]]+(?=\])/,
          lookbehind: true,
          inside: {} // see below

        },
        'variable': {
          pattern: /(^\][ \t]?\[)[^\]]+(?=\]$)/,
          lookbehind: true
        },
        'url': {
          pattern: /(^\]\()[^\s)]+/,
          lookbehind: true
        },
        'string': {
          pattern: /(^[ \t]+)"(?:\\.|[^"\\])*"(?=\)$)/,
          lookbehind: true
        }
      }
    }
  });
  ['url', 'bold', 'italic', 'strike'].forEach(function (token) {
    ['url', 'bold', 'italic', 'strike'].forEach(function (inside) {
      if (token !== inside) {
        Prism.languages.markdown[token].inside.content.inside[inside] = Prism.languages.markdown[inside];
      }
    });
  });
  Prism.hooks.add('after-tokenize', function (env) {
    if (env.language !== 'markdown' && env.language !== 'md') {
      return;
    }

    function walkTokens(tokens) {
      if (!tokens || typeof tokens === 'string') {
        return;
      }

      for (var i = 0, l = tokens.length; i < l; i++) {
        var token = tokens[i];

        if (token.type !== 'code') {
          walkTokens(token.content);
          continue;
        }
        /*
         * Add the correct `language-xxxx` class to this code block. Keep in mind that the `code-language` token
         * is optional. But the grammar is defined so that there is only one case we have to handle:
         *
         * token.content = [
         *     <span class="punctuation">```</span>,
         *     <span class="code-language">xxxx</span>,
         *     '\n', // exactly one new lines (\r or \n or \r\n)
         *     <span class="code-block">...</span>,
         *     '\n', // exactly one new lines again
         *     <span class="punctuation">```</span>
         * ];
         */


        var codeLang = token.content[1];
        var codeBlock = token.content[3];

        if (codeLang && codeBlock && codeLang.type === 'code-language' && codeBlock.type === 'code-block' && typeof codeLang.content === 'string') {
          // this might be a language that Prism does not support
          // do some replacements to support C++, C#, and F#
          var lang = codeLang.content.replace(/\b#/g, 'sharp').replace(/\b\+\+/g, 'pp'); // only use the first word

          lang = (/[a-z][\w-]*/i.exec(lang) || [''])[0].toLowerCase();
          var alias = 'language-' + lang; // add alias

          if (!codeBlock.alias) {
            codeBlock.alias = [alias];
          } else if (typeof codeBlock.alias === 'string') {
            codeBlock.alias = [codeBlock.alias, alias];
          } else {
            codeBlock.alias.push(alias);
          }
        }
      }
    }

    walkTokens(env.tokens);
  });
  Prism.hooks.add('wrap', function (env) {
    if (env.type !== 'code-block') {
      return;
    }

    var codeLang = '';

    for (var i = 0, l = env.classes.length; i < l; i++) {
      var cls = env.classes[i];
      var match = /language-(.+)/.exec(cls);

      if (match) {
        codeLang = match[1];
        break;
      }
    }

    var grammar = Prism.languages[codeLang];

    if (!grammar) {
      if (codeLang && codeLang !== 'none' && Prism.plugins.autoloader) {
        var id = 'md-' + new Date().valueOf() + '-' + Math.floor(Math.random() * 1e16);
        env.attributes['id'] = id;
        Prism.plugins.autoloader.loadLanguages(codeLang, function () {
          var ele = document.getElementById(id);

          if (ele) {
            ele.innerHTML = Prism.highlight(ele.textContent, Prism.languages[codeLang], codeLang);
          }
        });
      }
    } else {
      // reverse Prism.util.encode
      var code = env.content.replace(/&lt;/g, '<').replace(/&amp;/g, '&');
      env.content = Prism.highlight(code, grammar, codeLang);
    }
  });
  Prism.languages.md = Prism.languages.markdown;
})(Prism);
/* "prismjs/components/prism-objectivec" */


Prism.languages.objectivec = Prism.languages.extend('c', {
  'string': /("|')(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1|@"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"/,
  'keyword': /\b(?:asm|typeof|inline|auto|break|case|char|const|continue|default|do|double|else|enum|extern|float|for|goto|if|int|long|register|return|short|signed|sizeof|static|struct|switch|typedef|union|unsigned|void|volatile|while|in|self|super)\b|(?:@interface|@end|@implementation|@protocol|@class|@public|@protected|@private|@property|@try|@catch|@finally|@throw|@synthesize|@dynamic|@selector)\b/,
  'operator': /-[->]?|\+\+?|!=?|<<?=?|>>?=?|==?|&&?|\|\|?|[~^%?*\/@]/
});
delete Prism.languages.objectivec['class-name'];
Prism.languages.objc = Prism.languages.objectivec;
/* "prismjs/components/prism-ocaml" */

Prism.languages.ocaml = {
  'comment': /\(\*[\s\S]*?\*\)/,
  'string': [{
    pattern: /"(?:\\.|[^\\\r\n"])*"/,
    greedy: true
  }, {
    pattern: /(['`])(?:\\(?:\d+|x[\da-f]+|.)|(?!\1)[^\\\r\n])\1/i,
    greedy: true
  }],
  'number': /\b(?:0x[\da-f][\da-f_]+|(?:0[bo])?\d[\d_]*(?:\.[\d_]*)?(?:e[+-]?[\d_]+)?)/i,
  'directive': {
    pattern: /\B#\w+/,
    alias: 'important'
  },
  'label': {
    pattern: /\B~\w+/,
    alias: 'function'
  },
  'type-variable': {
    pattern: /\B'\w+/,
    alias: 'function'
  },
  'variant': {
    pattern: /`\w+/,
    alias: 'variable'
  },
  'module': {
    pattern: /\b[A-Z]\w+/,
    alias: 'variable'
  },
  // For the list of keywords and operators,
  // see: http://caml.inria.fr/pub/docs/manual-ocaml/lex.html#sec84
  'keyword': /\b(?:as|assert|begin|class|constraint|do|done|downto|else|end|exception|external|for|fun|function|functor|if|in|include|inherit|initializer|lazy|let|match|method|module|mutable|new|nonrec|object|of|open|private|rec|sig|struct|then|to|try|type|val|value|virtual|when|where|while|with)\b/,
  'boolean': /\b(?:false|true)\b/,
  // Custom operators are allowed
  'operator': /:=|[=<>@^|&+\-*\/$%!?~][!$%&*+\-.\/:<=>?@^|~]*|\b(?:and|asr|land|lor|lsl|lsr|lxor|mod|or)\b/,
  'punctuation': /[(){}\[\]|.,:;]|\b_\b/
};
/* "prismjs/components/prism-python" */

Prism.languages.python = {
  'comment': {
    pattern: /(^|[^\\])#.*/,
    lookbehind: true
  },
  'string-interpolation': {
    pattern: /(?:f|rf|fr)(?:("""|''')[\s\S]*?\1|("|')(?:\\.|(?!\2)[^\\\r\n])*\2)/i,
    greedy: true,
    inside: {
      'interpolation': {
        // "{" <expression> <optional "!s", "!r", or "!a"> <optional ":" format specifier> "}"
        pattern: /((?:^|[^{])(?:{{)*){(?!{)(?:[^{}]|{(?!{)(?:[^{}]|{(?!{)(?:[^{}])+})+})+}/,
        lookbehind: true,
        inside: {
          'format-spec': {
            pattern: /(:)[^:(){}]+(?=}$)/,
            lookbehind: true
          },
          'conversion-option': {
            pattern: /![sra](?=[:}]$)/,
            alias: 'punctuation'
          },
          rest: null
        }
      },
      'string': /[\s\S]+/
    }
  },
  'triple-quoted-string': {
    pattern: /(?:[rub]|rb|br)?("""|''')[\s\S]*?\1/i,
    greedy: true,
    alias: 'string'
  },
  'string': {
    pattern: /(?:[rub]|rb|br)?("|')(?:\\.|(?!\1)[^\\\r\n])*\1/i,
    greedy: true
  },
  'function': {
    pattern: /((?:^|\s)def[ \t]+)[a-zA-Z_]\w*(?=\s*\()/g,
    lookbehind: true
  },
  'class-name': {
    pattern: /(\bclass\s+)\w+/i,
    lookbehind: true
  },
  'decorator': {
    pattern: /(^\s*)@\w+(?:\.\w+)*/im,
    lookbehind: true,
    alias: ['annotation', 'punctuation'],
    inside: {
      'punctuation': /\./
    }
  },
  'keyword': /\b(?:and|as|assert|async|await|break|class|continue|def|del|elif|else|except|exec|finally|for|from|global|if|import|in|is|lambda|nonlocal|not|or|pass|print|raise|return|try|while|with|yield)\b/,
  'builtin': /\b(?:__import__|abs|all|any|apply|ascii|basestring|bin|bool|buffer|bytearray|bytes|callable|chr|classmethod|cmp|coerce|compile|complex|delattr|dict|dir|divmod|enumerate|eval|execfile|file|filter|float|format|frozenset|getattr|globals|hasattr|hash|help|hex|id|input|int|intern|isinstance|issubclass|iter|len|list|locals|long|map|max|memoryview|min|next|object|oct|open|ord|pow|property|range|raw_input|reduce|reload|repr|reversed|round|set|setattr|slice|sorted|staticmethod|str|sum|super|tuple|type|unichr|unicode|vars|xrange|zip)\b/,
  'boolean': /\b(?:True|False|None)\b/,
  'number': /(?:\b(?=\d)|\B(?=\.))(?:0[bo])?(?:(?:\d|0x[\da-f])[\da-f]*(?:\.\d*)?|\.\d+)(?:e[+-]?\d+)?j?\b/i,
  'operator': /[-+%=]=?|!=|\*\*?=?|\/\/?=?|<[<=>]?|>[=>]?|[&|^~]/,
  'punctuation': /[{}[\];(),.:]/
};
Prism.languages.python['string-interpolation'].inside['interpolation'].inside.rest = Prism.languages.python;
Prism.languages.py = Prism.languages.python;
/* "prismjs/components/prism-reason" */

Prism.languages.reason = Prism.languages.extend('clike', {
  'string': {
    pattern: /"(?:\\(?:\r\n|[\s\S])|[^\\\r\n"])*"/,
    greedy: true
  },
  // 'class-name' must be matched *after* 'constructor' defined below
  'class-name': /\b[A-Z]\w*/,
  'keyword': /\b(?:and|as|assert|begin|class|constraint|do|done|downto|else|end|exception|external|for|fun|function|functor|if|in|include|inherit|initializer|lazy|let|method|module|mutable|new|nonrec|object|of|open|or|private|rec|sig|struct|switch|then|to|try|type|val|virtual|when|while|with)\b/,
  'operator': /\.{3}|:[:=]|\|>|->|=(?:==?|>)?|<=?|>=?|[|^?'#!~`]|[+\-*\/]\.?|\b(?:mod|land|lor|lxor|lsl|lsr|asr)\b/
});
Prism.languages.insertBefore('reason', 'class-name', {
  'character': {
    pattern: /'(?:\\x[\da-f]{2}|\\o[0-3][0-7][0-7]|\\\d{3}|\\.|[^'\\\r\n])'/,
    alias: 'string'
  },
  'constructor': {
    // Negative look-ahead prevents from matching things like String.capitalize
    pattern: /\b[A-Z]\w*\b(?!\s*\.)/,
    alias: 'variable'
  },
  'label': {
    pattern: /\b[a-z]\w*(?=::)/,
    alias: 'symbol'
  }
}); // We can't match functions property, so let's not even try.

delete Prism.languages.reason.function;
/* "prismjs/components/prism-sass" */

(function (Prism) {
  Prism.languages.sass = Prism.languages.extend('css', {
    // Sass comments don't need to be closed, only indented
    'comment': {
      pattern: /^([ \t]*)\/[\/*].*(?:(?:\r?\n|\r)\1[ \t].+)*/m,
      lookbehind: true
    }
  });
  Prism.languages.insertBefore('sass', 'atrule', {
    // We want to consume the whole line
    'atrule-line': {
      // Includes support for = and + shortcuts
      pattern: /^(?:[ \t]*)[@+=].+/m,
      inside: {
        'atrule': /(?:@[\w-]+|[+=])/m
      }
    }
  });
  delete Prism.languages.sass.atrule;
  var variable = /\$[-\w]+|#\{\$[-\w]+\}/;
  var operator = [/[+*\/%]|[=!]=|<=?|>=?|\b(?:and|or|not)\b/, {
    pattern: /(\s+)-(?=\s)/,
    lookbehind: true
  }];
  Prism.languages.insertBefore('sass', 'property', {
    // We want to consume the whole line
    'variable-line': {
      pattern: /^[ \t]*\$.+/m,
      inside: {
        'punctuation': /:/,
        'variable': variable,
        'operator': operator
      }
    },
    // We want to consume the whole line
    'property-line': {
      pattern: /^[ \t]*(?:[^:\s]+ *:.*|:[^:\s].*)/m,
      inside: {
        'property': [/[^:\s]+(?=\s*:)/, {
          pattern: /(:)[^:\s]+/,
          lookbehind: true
        }],
        'punctuation': /:/,
        'variable': variable,
        'operator': operator,
        'important': Prism.languages.sass.important
      }
    }
  });
  delete Prism.languages.sass.property;
  delete Prism.languages.sass.important; // Now that whole lines for other patterns are consumed,
  // what's left should be selectors

  Prism.languages.insertBefore('sass', 'punctuation', {
    'selector': {
      pattern: /([ \t]*)\S(?:,[^,\r\n]+|[^,\r\n]*)(?:,[^,\r\n]+)*(?:,(?:\r?\n|\r)\1[ \t]+\S(?:,[^,\r\n]+|[^,\r\n]*)(?:,[^,\r\n]+)*)*/,
      lookbehind: true
    }
  });
})(Prism);
/* "prismjs/components/prism-scss" */


Prism.languages.scss = Prism.languages.extend('css', {
  'comment': {
    pattern: /(^|[^\\])(?:\/\*[\s\S]*?\*\/|\/\/.*)/,
    lookbehind: true
  },
  'atrule': {
    pattern: /@[\w-](?:\([^()]+\)|[^()\s]|\s+(?!\s))*?(?=\s+[{;])/,
    inside: {
      'rule': /@[\w-]+/ // See rest below

    }
  },
  // url, compassified
  'url': /(?:[-a-z]+-)?url(?=\()/i,
  // CSS selector regex is not appropriate for Sass
  // since there can be lot more things (var, @ directive, nesting..)
  // a selector must start at the end of a property or after a brace (end of other rules or nesting)
  // it can contain some characters that aren't used for defining rules or end of selector, & (parent selector), or interpolated variable
  // the end of a selector is found when there is no rules in it ( {} or {\s}) or if there is a property (because an interpolated var
  // can "pass" as a selector- e.g: proper#{$erty})
  // this one was hard to do, so please be careful if you edit this one :)
  'selector': {
    // Initial look-ahead is used to prevent matching of blank selectors
    pattern: /(?=\S)[^@;{}()]?(?:[^@;{}()\s]|\s+(?!\s)|#\{\$[-\w]+\})+(?=\s*\{(?:\}|\s|[^}][^:{}]*[:{][^}]+))/m,
    inside: {
      'parent': {
        pattern: /&/,
        alias: 'important'
      },
      'placeholder': /%[-\w]+/,
      'variable': /\$[-\w]+|#\{\$[-\w]+\}/
    }
  },
  'property': {
    pattern: /(?:[-\w]|\$[-\w]|#\{\$[-\w]+\})+(?=\s*:)/,
    inside: {
      'variable': /\$[-\w]+|#\{\$[-\w]+\}/
    }
  }
});
Prism.languages.insertBefore('scss', 'atrule', {
  'keyword': [/@(?:if|else(?: if)?|forward|for|each|while|import|use|extend|debug|warn|mixin|include|function|return|content)\b/i, {
    pattern: /( +)(?:from|through)(?= )/,
    lookbehind: true
  }]
});
Prism.languages.insertBefore('scss', 'important', {
  // var and interpolated vars
  'variable': /\$[-\w]+|#\{\$[-\w]+\}/
});
Prism.languages.insertBefore('scss', 'function', {
  'module-modifier': {
    pattern: /\b(?:as|with|show|hide)\b/i,
    alias: 'keyword'
  },
  'placeholder': {
    pattern: /%[-\w]+/,
    alias: 'selector'
  },
  'statement': {
    pattern: /\B!(?:default|optional)\b/i,
    alias: 'keyword'
  },
  'boolean': /\b(?:true|false)\b/,
  'null': {
    pattern: /\bnull\b/,
    alias: 'keyword'
  },
  'operator': {
    pattern: /(\s)(?:[-+*\/%]|[=!]=|<=?|>=?|and|or|not)(?=\s)/,
    lookbehind: true
  }
});
Prism.languages.scss['atrule'].inside.rest = Prism.languages.scss;
/* "prismjs/components/prism-sql" */

Prism.languages.sql = {
  'comment': {
    pattern: /(^|[^\\])(?:\/\*[\s\S]*?\*\/|(?:--|\/\/|#).*)/,
    lookbehind: true
  },
  'variable': [{
    pattern: /@(["'`])(?:\\[\s\S]|(?!\1)[^\\])+\1/,
    greedy: true
  }, /@[\w.$]+/],
  'string': {
    pattern: /(^|[^@\\])("|')(?:\\[\s\S]|(?!\2)[^\\]|\2\2)*\2/,
    greedy: true,
    lookbehind: true
  },
  'function': /\b(?:AVG|COUNT|FIRST|FORMAT|LAST|LCASE|LEN|MAX|MID|MIN|MOD|NOW|ROUND|SUM|UCASE)(?=\s*\()/i,
  // Should we highlight user defined functions too?
  'keyword': /\b(?:ACTION|ADD|AFTER|ALGORITHM|ALL|ALTER|ANALYZE|ANY|APPLY|AS|ASC|AUTHORIZATION|AUTO_INCREMENT|BACKUP|BDB|BEGIN|BERKELEYDB|BIGINT|BINARY|BIT|BLOB|BOOL|BOOLEAN|BREAK|BROWSE|BTREE|BULK|BY|CALL|CASCADED?|CASE|CHAIN|CHAR(?:ACTER|SET)?|CHECK(?:POINT)?|CLOSE|CLUSTERED|COALESCE|COLLATE|COLUMNS?|COMMENT|COMMIT(?:TED)?|COMPUTE|CONNECT|CONSISTENT|CONSTRAINT|CONTAINS(?:TABLE)?|CONTINUE|CONVERT|CREATE|CROSS|CURRENT(?:_DATE|_TIME|_TIMESTAMP|_USER)?|CURSOR|CYCLE|DATA(?:BASES?)?|DATE(?:TIME)?|DAY|DBCC|DEALLOCATE|DEC|DECIMAL|DECLARE|DEFAULT|DEFINER|DELAYED|DELETE|DELIMITERS?|DENY|DESC|DESCRIBE|DETERMINISTIC|DISABLE|DISCARD|DISK|DISTINCT|DISTINCTROW|DISTRIBUTED|DO|DOUBLE|DROP|DUMMY|DUMP(?:FILE)?|DUPLICATE|ELSE(?:IF)?|ENABLE|ENCLOSED|END|ENGINE|ENUM|ERRLVL|ERRORS|ESCAPED?|EXCEPT|EXEC(?:UTE)?|EXISTS|EXIT|EXPLAIN|EXTENDED|FETCH|FIELDS|FILE|FILLFACTOR|FIRST|FIXED|FLOAT|FOLLOWING|FOR(?: EACH ROW)?|FORCE|FOREIGN|FREETEXT(?:TABLE)?|FROM|FULL|FUNCTION|GEOMETRY(?:COLLECTION)?|GLOBAL|GOTO|GRANT|GROUP|HANDLER|HASH|HAVING|HOLDLOCK|HOUR|IDENTITY(?:_INSERT|COL)?|IF|IGNORE|IMPORT|INDEX|INFILE|INNER|INNODB|INOUT|INSERT|INT|INTEGER|INTERSECT|INTERVAL|INTO|INVOKER|ISOLATION|ITERATE|JOIN|KEYS?|KILL|LANGUAGE|LAST|LEAVE|LEFT|LEVEL|LIMIT|LINENO|LINES|LINESTRING|LOAD|LOCAL|LOCK|LONG(?:BLOB|TEXT)|LOOP|MATCH(?:ED)?|MEDIUM(?:BLOB|INT|TEXT)|MERGE|MIDDLEINT|MINUTE|MODE|MODIFIES|MODIFY|MONTH|MULTI(?:LINESTRING|POINT|POLYGON)|NATIONAL|NATURAL|NCHAR|NEXT|NO|NONCLUSTERED|NULLIF|NUMERIC|OFF?|OFFSETS?|ON|OPEN(?:DATASOURCE|QUERY|ROWSET)?|OPTIMIZE|OPTION(?:ALLY)?|ORDER|OUT(?:ER|FILE)?|OVER|PARTIAL|PARTITION|PERCENT|PIVOT|PLAN|POINT|POLYGON|PRECEDING|PRECISION|PREPARE|PREV|PRIMARY|PRINT|PRIVILEGES|PROC(?:EDURE)?|PUBLIC|PURGE|QUICK|RAISERROR|READS?|REAL|RECONFIGURE|REFERENCES|RELEASE|RENAME|REPEAT(?:ABLE)?|REPLACE|REPLICATION|REQUIRE|RESIGNAL|RESTORE|RESTRICT|RETURN(?:S|ING)?|REVOKE|RIGHT|ROLLBACK|ROUTINE|ROW(?:COUNT|GUIDCOL|S)?|RTREE|RULE|SAVE(?:POINT)?|SCHEMA|SECOND|SELECT|SERIAL(?:IZABLE)?|SESSION(?:_USER)?|SET(?:USER)?|SHARE|SHOW|SHUTDOWN|SIMPLE|SMALLINT|SNAPSHOT|SOME|SONAME|SQL|START(?:ING)?|STATISTICS|STATUS|STRIPED|SYSTEM_USER|TABLES?|TABLESPACE|TEMP(?:ORARY|TABLE)?|TERMINATED|TEXT(?:SIZE)?|THEN|TIME(?:STAMP)?|TINY(?:BLOB|INT|TEXT)|TOP?|TRAN(?:SACTIONS?)?|TRIGGER|TRUNCATE|TSEQUAL|TYPES?|UNBOUNDED|UNCOMMITTED|UNDEFINED|UNION|UNIQUE|UNLOCK|UNPIVOT|UNSIGNED|UPDATE(?:TEXT)?|USAGE|USE|USER|USING|VALUES?|VAR(?:BINARY|CHAR|CHARACTER|YING)|VIEW|WAITFOR|WARNINGS|WHEN|WHERE|WHILE|WITH(?: ROLLUP|IN)?|WORK|WRITE(?:TEXT)?|YEAR)\b/i,
  'boolean': /\b(?:TRUE|FALSE|NULL)\b/i,
  'number': /\b0x[\da-f]+\b|\b\d+(?:\.\d*)?|\B\.\d+\b/i,
  'operator': /[-+*\/=%^~]|&&?|\|\|?|!=?|<(?:=>?|<|>)?|>[>=]?|\b(?:AND|BETWEEN|IN|LIKE|NOT|OR|IS|DIV|REGEXP|RLIKE|SOUNDS LIKE|XOR)\b/i,
  'punctuation': /[;[\]()`,.]/
};
/* "prismjs/components/prism-stylus" */

(function (Prism) {
  var unit = {
    pattern: /(\b\d+)(?:%|[a-z]+)/,
    lookbehind: true
  }; // 123 -123 .123 -.123 12.3 -12.3

  var number = {
    pattern: /(^|[^\w.-])-?(?:\d+(?:\.\d+)?|\.\d+)/,
    lookbehind: true
  };
  var inside = {
    'comment': {
      pattern: /(^|[^\\])(?:\/\*[\s\S]*?\*\/|\/\/.*)/,
      lookbehind: true
    },
    'url': {
      pattern: /url\((["']?).*?\1\)/i,
      greedy: true
    },
    'string': {
      pattern: /("|')(?:(?!\1)[^\\\r\n]|\\(?:\r\n|[\s\S]))*\1/,
      greedy: true
    },
    'interpolation': null,
    // See below
    'func': null,
    // See below
    'important': /\B!(?:important|optional)\b/i,
    'keyword': {
      pattern: /(^|\s+)(?:(?:if|else|for|return|unless)(?=\s+|$)|@[\w-]+)/,
      lookbehind: true
    },
    'hexcode': /#[\da-f]{3,6}/i,
    'color': [/\b(?:AliceBlue|AntiqueWhite|Aqua|Aquamarine|Azure|Beige|Bisque|Black|BlanchedAlmond|Blue|BlueViolet|Brown|BurlyWood|CadetBlue|Chartreuse|Chocolate|Coral|CornflowerBlue|Cornsilk|Crimson|Cyan|DarkBlue|DarkCyan|DarkGoldenRod|DarkGr[ae]y|DarkGreen|DarkKhaki|DarkMagenta|DarkOliveGreen|DarkOrange|DarkOrchid|DarkRed|DarkSalmon|DarkSeaGreen|DarkSlateBlue|DarkSlateGr[ae]y|DarkTurquoise|DarkViolet|DeepPink|DeepSkyBlue|DimGr[ae]y|DodgerBlue|FireBrick|FloralWhite|ForestGreen|Fuchsia|Gainsboro|GhostWhite|Gold|GoldenRod|Gr[ae]y|Green|GreenYellow|HoneyDew|HotPink|IndianRed|Indigo|Ivory|Khaki|Lavender|LavenderBlush|LawnGreen|LemonChiffon|LightBlue|LightCoral|LightCyan|LightGoldenRodYellow|LightGr[ae]y|LightGreen|LightPink|LightSalmon|LightSeaGreen|LightSkyBlue|LightSlateGr[ae]y|LightSteelBlue|LightYellow|Lime|LimeGreen|Linen|Magenta|Maroon|MediumAquaMarine|MediumBlue|MediumOrchid|MediumPurple|MediumSeaGreen|MediumSlateBlue|MediumSpringGreen|MediumTurquoise|MediumVioletRed|MidnightBlue|MintCream|MistyRose|Moccasin|NavajoWhite|Navy|OldLace|Olive|OliveDrab|Orange|OrangeRed|Orchid|PaleGoldenRod|PaleGreen|PaleTurquoise|PaleVioletRed|PapayaWhip|PeachPuff|Peru|Pink|Plum|PowderBlue|Purple|Red|RosyBrown|RoyalBlue|SaddleBrown|Salmon|SandyBrown|SeaGreen|SeaShell|Sienna|Silver|SkyBlue|SlateBlue|SlateGr[ae]y|Snow|SpringGreen|SteelBlue|Tan|Teal|Thistle|Tomato|Transparent|Turquoise|Violet|Wheat|White|WhiteSmoke|Yellow|YellowGreen)\b/i, {
      pattern: /\b(?:rgb|hsl)\(\s*\d{1,3}\s*,\s*\d{1,3}%?\s*,\s*\d{1,3}%?\s*\)\B|\b(?:rgb|hsl)a\(\s*\d{1,3}\s*,\s*\d{1,3}%?\s*,\s*\d{1,3}%?\s*,\s*(?:0|0?\.\d+|1)\s*\)\B/i,
      inside: {
        'unit': unit,
        'number': number,
        'function': /[\w-]+(?=\()/,
        'punctuation': /[(),]/
      }
    }],
    'entity': /\\[\da-f]{1,8}/i,
    'unit': unit,
    'boolean': /\b(?:true|false)\b/,
    'operator': [// We want non-word chars around "-" because it is
    // accepted in property names.
    /~|[+!\/%<>?=]=?|[-:]=|\*[*=]?|\.{2,3}|&&|\|\||\B-\B|\b(?:and|in|is(?: a| defined| not|nt)?|not|or)\b/],
    'number': number,
    'punctuation': /[{}()\[\];:,]/
  };
  inside['interpolation'] = {
    pattern: /\{[^\r\n}:]+\}/,
    alias: 'variable',
    inside: {
      'delimiter': {
        pattern: /^{|}$/,
        alias: 'punctuation'
      },
      rest: inside
    }
  };
  inside['func'] = {
    pattern: /[\w-]+\([^)]*\).*/,
    inside: {
      'function': /^[^(]+/,
      rest: inside
    }
  };
  Prism.languages.stylus = {
    'atrule-declaration': {
      pattern: /(^\s*)@.+/m,
      lookbehind: true,
      inside: {
        'atrule': /^@[\w-]+/,
        rest: inside
      }
    },
    'variable-declaration': {
      pattern: /(^[ \t]*)[\w$-]+\s*.?=[ \t]*(?:\{[^{}]*\}|\S.*|$)/m,
      lookbehind: true,
      inside: {
        'variable': /^\S+/,
        rest: inside
      }
    },
    'statement': {
      pattern: /(^[ \t]*)(?:if|else|for|return|unless)[ \t].+/m,
      lookbehind: true,
      inside: {
        'keyword': /^\S+/,
        rest: inside
      }
    },
    // A property/value pair cannot end with a comma or a brace
    // It cannot have indented content unless it ended with a semicolon
    'property-declaration': {
      pattern: /((?:^|\{)([ \t]*))(?:[\w-]|\{[^}\r\n]+\})+(?:\s*:\s*|[ \t]+)(?!\s)[^{\r\n]*(?:;|[^{\r\n,](?=$)(?!(?:\r?\n|\r)(?:\{|\2[ \t]+)))/m,
      lookbehind: true,
      inside: {
        'property': {
          pattern: /^[^\s:]+/,
          inside: {
            'interpolation': inside.interpolation
          }
        },
        rest: inside
      }
    },
    // A selector can contain parentheses only as part of a pseudo-element
    // It can span multiple lines.
    // It must end with a comma or an accolade or have indented content.
    'selector': {
      pattern: /(^[ \t]*)(?:(?=\S)(?:[^{}\r\n:()]|::?[\w-]+(?:\([^)\r\n]*\)|(?![\w-]))|\{[^}\r\n]+\})+)(?:(?:\r?\n|\r)(?:\1(?:(?=\S)(?:[^{}\r\n:()]|::?[\w-]+(?:\([^)\r\n]*\)|(?![\w-]))|\{[^}\r\n]+\})+)))*(?:,$|\{|(?=(?:\r?\n|\r)(?:\{|\1[ \t]+)))/m,
      lookbehind: true,
      inside: {
        'interpolation': inside.interpolation,
        'comment': inside.comment,
        'punctuation': /[{},]/
      }
    },
    'func': inside.func,
    'string': inside.string,
    'comment': {
      pattern: /(^|[^\\])(?:\/\*[\s\S]*?\*\/|\/\/.*)/,
      lookbehind: true,
      greedy: true
    },
    'interpolation': inside.interpolation,
    'punctuation': /[{}()\[\];:.]/
  };
})(Prism);
/* "prismjs/components/prism-typescript" */


(function (Prism) {
  Prism.languages.typescript = Prism.languages.extend('javascript', {
    'class-name': {
      pattern: /(\b(?:class|extends|implements|instanceof|interface|new|type)\s+)(?!keyof\b)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?:\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>)?/,
      lookbehind: true,
      greedy: true,
      inside: null // see below

    },
    // From JavaScript Prism keyword list and TypeScript language spec: https://github.com/Microsoft/TypeScript/blob/master/doc/spec.md#221-reserved-words
    'keyword': /\b(?:abstract|as|asserts|async|await|break|case|catch|class|const|constructor|continue|debugger|declare|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|is|keyof|let|module|namespace|new|null|of|package|private|protected|public|readonly|return|require|set|static|super|switch|this|throw|try|type|typeof|undefined|var|void|while|with|yield)\b/,
    'builtin': /\b(?:string|Function|any|number|boolean|Array|symbol|console|Promise|unknown|never)\b/
  }); // doesn't work with TS because TS is too complex

  delete Prism.languages.typescript['parameter']; // a version of typescript specifically for highlighting types

  var typeInside = Prism.languages.extend('typescript', {});
  delete typeInside['class-name'];
  Prism.languages.typescript['class-name'].inside = typeInside;
  Prism.languages.insertBefore('typescript', 'function', {
    'generic-function': {
      // e.g. foo<T extends "bar" | "baz">( ...
      pattern: /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>(?=\s*\()/,
      greedy: true,
      inside: {
        'function': /^#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*/,
        'generic': {
          pattern: /<[\s\S]+/,
          // everything after the first <
          alias: 'class-name',
          inside: typeInside
        }
      }
    }
  });
  Prism.languages.ts = Prism.languages.typescript;
})(Prism);
/* "prismjs/components/prism-tsx" */


(function (Prism) {
  var typescript = Prism.util.clone(Prism.languages.typescript);
  Prism.languages.tsx = Prism.languages.extend('jsx', typescript); // This will prevent collisions between TSX tags and TS generic types.
  // Idea by https://github.com/karlhorky
  // Discussion: https://github.com/PrismJS/prism/issues/2594#issuecomment-710666928

  var tag = Prism.languages.tsx.tag;
  tag.pattern = RegExp(/(^|[^\w$]|(?=<\/))/.source + '(?:' + tag.pattern.source + ')', tag.pattern.flags);
  tag.lookbehind = true;
})(Prism);
/* "prismjs/components/prism-wasm" */


Prism.languages.wasm = {
  'comment': [/\(;[\s\S]*?;\)/, {
    pattern: /;;.*/,
    greedy: true
  }],
  'string': {
    pattern: /"(?:\\[\s\S]|[^"\\])*"/,
    greedy: true
  },
  'keyword': [{
    pattern: /\b(?:align|offset)=/,
    inside: {
      'operator': /=/
    }
  }, {
    pattern: /\b(?:(?:f32|f64|i32|i64)(?:\.(?:abs|add|and|ceil|clz|const|convert_[su]\/i(?:32|64)|copysign|ctz|demote\/f64|div(?:_[su])?|eqz?|extend_[su]\/i32|floor|ge(?:_[su])?|gt(?:_[su])?|le(?:_[su])?|load(?:(?:8|16|32)_[su])?|lt(?:_[su])?|max|min|mul|nearest|neg?|or|popcnt|promote\/f32|reinterpret\/[fi](?:32|64)|rem_[su]|rot[lr]|shl|shr_[su]|store(?:8|16|32)?|sqrt|sub|trunc(?:_[su]\/f(?:32|64))?|wrap\/i64|xor))?|memory\.(?:grow|size))\b/,
    inside: {
      'punctuation': /\./
    }
  }, /\b(?:anyfunc|block|br(?:_if|_table)?|call(?:_indirect)?|data|drop|elem|else|end|export|func|get_(?:global|local)|global|if|import|local|loop|memory|module|mut|nop|offset|param|result|return|select|set_(?:global|local)|start|table|tee_local|then|type|unreachable)\b/],
  'variable': /\$[\w!#$%&'*+\-./:<=>?@\\^_`|~]+/i,
  'number': /[+-]?\b(?:\d(?:_?\d)*(?:\.\d(?:_?\d)*)?(?:[eE][+-]?\d(?:_?\d)*)?|0x[\da-fA-F](?:_?[\da-fA-F])*(?:\.[\da-fA-F](?:_?[\da-fA-D])*)?(?:[pP][+-]?\d(?:_?\d)*)?)\b|\binf\b|\bnan(?::0x[\da-fA-F](?:_?[\da-fA-D])*)?\b/,
  'punctuation': /[()]/
};
/* "prismjs/components/prism-yaml" */

(function (Prism) {
  // https://yaml.org/spec/1.2/spec.html#c-ns-anchor-property
  // https://yaml.org/spec/1.2/spec.html#c-ns-alias-node
  var anchorOrAlias = /[*&][^\s[\]{},]+/; // https://yaml.org/spec/1.2/spec.html#c-ns-tag-property

  var tag = /!(?:<[\w\-%#;/?:@&=+$,.!~*'()[\]]+>|(?:[a-zA-Z\d-]*!)?[\w\-%#;/?:@&=+$.~*'()]+)?/; // https://yaml.org/spec/1.2/spec.html#c-ns-properties(n,c)

  var properties = '(?:' + tag.source + '(?:[ \t]+' + anchorOrAlias.source + ')?|' + anchorOrAlias.source + '(?:[ \t]+' + tag.source + ')?)'; // https://yaml.org/spec/1.2/spec.html#ns-plain(n,c)
  // This is a simplified version that doesn't support "#" and multiline keys
  // All these long scarry character classes are simplified versions of YAML's characters

  var plainKey = /(?:[^\s\x00-\x08\x0e-\x1f!"#%&'*,\-:>?@[\]`{|}\x7f-\x84\x86-\x9f\ud800-\udfff\ufffe\uffff]|[?:-]<PLAIN>)(?:[ \t]*(?:(?![#:])<PLAIN>|:<PLAIN>))*/.source.replace(/<PLAIN>/g, function () {
    return /[^\s\x00-\x08\x0e-\x1f,[\]{}\x7f-\x84\x86-\x9f\ud800-\udfff\ufffe\uffff]/.source;
  });
  var string = /"(?:[^"\\\r\n]|\\.)*"|'(?:[^'\\\r\n]|\\.)*'/.source;
  /**
   *
   * @param {string} value
   * @param {string} [flags]
   * @returns {RegExp}
   */

  function createValuePattern(value, flags) {
    flags = (flags || '').replace(/m/g, '') + 'm'; // add m flag

    var pattern = /([:\-,[{]\s*(?:\s<<prop>>[ \t]+)?)(?:<<value>>)(?=[ \t]*(?:$|,|]|}|(?:[\r\n]\s*)?#))/.source.replace(/<<prop>>/g, function () {
      return properties;
    }).replace(/<<value>>/g, function () {
      return value;
    });
    return RegExp(pattern, flags);
  }

  Prism.languages.yaml = {
    'scalar': {
      pattern: RegExp(/([\-:]\s*(?:\s<<prop>>[ \t]+)?[|>])[ \t]*(?:((?:\r?\n|\r)[ \t]+)\S[^\r\n]*(?:\2[^\r\n]+)*)/.source.replace(/<<prop>>/g, function () {
        return properties;
      })),
      lookbehind: true,
      alias: 'string'
    },
    'comment': /#.*/,
    'key': {
      pattern: RegExp(/((?:^|[:\-,[{\r\n?])[ \t]*(?:<<prop>>[ \t]+)?)<<key>>(?=\s*:\s)/.source.replace(/<<prop>>/g, function () {
        return properties;
      }).replace(/<<key>>/g, function () {
        return '(?:' + plainKey + '|' + string + ')';
      })),
      lookbehind: true,
      greedy: true,
      alias: 'atrule'
    },
    'directive': {
      pattern: /(^[ \t]*)%.+/m,
      lookbehind: true,
      alias: 'important'
    },
    'datetime': {
      pattern: createValuePattern(/\d{4}-\d\d?-\d\d?(?:[tT]|[ \t]+)\d\d?:\d{2}:\d{2}(?:\.\d*)?(?:[ \t]*(?:Z|[-+]\d\d?(?::\d{2})?))?|\d{4}-\d{2}-\d{2}|\d\d?:\d{2}(?::\d{2}(?:\.\d*)?)?/.source),
      lookbehind: true,
      alias: 'number'
    },
    'boolean': {
      pattern: createValuePattern(/true|false/.source, 'i'),
      lookbehind: true,
      alias: 'important'
    },
    'null': {
      pattern: createValuePattern(/null|~/.source, 'i'),
      lookbehind: true,
      alias: 'important'
    },
    'string': {
      pattern: createValuePattern(string),
      lookbehind: true,
      greedy: true
    },
    'number': {
      pattern: createValuePattern(/[+-]?(?:0x[\da-f]+|0o[0-7]+|(?:\d+(?:\.\d*)?|\.?\d+)(?:e[+-]?\d+)?|\.inf|\.nan)/.source, 'i'),
      lookbehind: true
    },
    'tag': tag,
    'important': anchorOrAlias,
    'punctuation': /---|[:[\]{}\-,|>?]|\.\.\./
  };
  Prism.languages.yml = Prism.languages.yaml;
})(Prism);

/* harmony default export */ __webpack_exports__["default"] = (Prism);


/***/ }),

/***/ "./node_modules/prism-react-renderer/themes/duotoneDark/index.js":
/*!***********************************************************************!*\
  !*** ./node_modules/prism-react-renderer/themes/duotoneDark/index.js ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// Duotone Dark
// Author: Simurai, adapted from DuoTone themes for Atom (http://simurai.com/projects/2016/01/01/duotone-themes)
// Conversion: Bram de Haan (http://atelierbram.github.io/Base2Tone-prism/output/prism/prism-base2tone-evening-dark.css)
// Generated with Base16 Builder (https://github.com/base16-builder/base16-builder)
var theme = {
  plain: {
    backgroundColor: "#2a2734",
    color: "#9a86fd"
  },
  styles: [{
    types: ["comment", "prolog", "doctype", "cdata", "punctuation"],
    style: {
      color: "#6c6783"
    }
  }, {
    types: ["namespace"],
    style: {
      opacity: 0.7
    }
  }, {
    types: ["tag", "operator", "number"],
    style: {
      color: "#e09142"
    }
  }, {
    types: ["property", "function"],
    style: {
      color: "#9a86fd"
    }
  }, {
    types: ["tag-id", "selector", "atrule-id"],
    style: {
      color: "#eeebff"
    }
  }, {
    types: ["attr-name"],
    style: {
      color: "#c4b9fe"
    }
  }, {
    types: ["boolean", "string", "entity", "url", "attr-value", "keyword", "control", "directive", "unit", "statement", "regex", "at-rule", "placeholder", "variable"],
    style: {
      color: "#ffcc99"
    }
  }, {
    types: ["deleted"],
    style: {
      textDecorationLine: "line-through"
    }
  }, {
    types: ["inserted"],
    style: {
      textDecorationLine: "underline"
    }
  }, {
    types: ["italic"],
    style: {
      fontStyle: "italic"
    }
  }, {
    types: ["important", "bold"],
    style: {
      fontWeight: "bold"
    }
  }, {
    types: ["important"],
    style: {
      color: "#c4b9fe"
    }
  }]
};

/* harmony default export */ __webpack_exports__["default"] = (theme);


/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var D_projects_emranhossen_github_io_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.js");
/* harmony import */ var _mdx_js_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mdx-js/react */ "./node_modules/@mdx-js/react/dist/esm.js");
/* harmony import */ var prism_react_renderer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prism-react-renderer */ "./node_modules/prism-react-renderer/dist/index.js");
/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../styles/globals.css */ "./styles/globals.css");
/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_5__);



var _jsxFileName = "D:\\projects\\emranhossen.github.io\\pages\\_app.js",
    _this = undefined;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(D_projects_emranhossen_github_io_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }





var exampleCode = "\n(function someDemo() {\n  var test = \"Hello World!\";\n  console.log(test);\n})();\n\nreturn () => <App />;\n";
var components = {
  pre: function pre(props) {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(prism_react_renderer__WEBPACK_IMPORTED_MODULE_4__["default"], _objectSpread(_objectSpread({}, prism_react_renderer__WEBPACK_IMPORTED_MODULE_4__["defaultProps"]), {}, {
      code: exampleCode,
      language: "jsx",
      children: function children(_ref) {
        var className = _ref.className,
            style = _ref.style,
            tokens = _ref.tokens,
            getLineProps = _ref.getLineProps,
            getTokenProps = _ref.getTokenProps;
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("pre", {
          className: className,
          style: style,
          children: tokens.map(function (line, i) {
            return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", _objectSpread(_objectSpread({}, getLineProps({
              line: line,
              key: i
            })), {}, {
              children: line.map(function (token, key) {
                return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("span", _objectSpread({}, getTokenProps({
                  token: token,
                  key: key
                })), void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 23,
                  columnNumber: 13
                }, _this);
              })
            }), void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 21,
              columnNumber: 9
            }, _this);
          })
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 19,
          columnNumber: 5
        }, _this);
      }
    }), void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 17
    }, _this);
  },
  code: function code(props) {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("pre", _objectSpread({
      style: {
        color: 'tomato'
      }
    }, props), void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 18
    }, _this);
  }
};

function MyApp(_ref2) {
  var Component = _ref2.Component,
      pageProps = _ref2.pageProps;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_components_Layout__WEBPACK_IMPORTED_MODULE_2__["default"], {
    pageTitle: "Blog",
    description: "My Personal Blog",
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["MDXProvider"], {
      components: components,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(Component, _objectSpread({}, pageProps), void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 5
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 5
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 34,
    columnNumber: 10
  }, this);
}

_c = MyApp;
/* harmony default export */ __webpack_exports__["default"] = (MyApp);

var _c;

$RefreshReg$(_c, "MyApp");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3ByaXNtLXJlYWN0LXJlbmRlcmVyL2Rpc3QvaW5kZXguanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9wcmlzbS1yZWFjdC1yZW5kZXJlci9wcmlzbS9pbmRleC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3ByaXNtLXJlYWN0LXJlbmRlcmVyL3RoZW1lcy9kdW90b25lRGFyay9pbmRleC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvX2FwcC5qcyJdLCJuYW1lcyI6WyJleGFtcGxlQ29kZSIsImNvbXBvbmVudHMiLCJwcmUiLCJwcm9wcyIsImRlZmF1bHRQcm9wcyIsImNsYXNzTmFtZSIsInN0eWxlIiwidG9rZW5zIiwiZ2V0TGluZVByb3BzIiwiZ2V0VG9rZW5Qcm9wcyIsIm1hcCIsImxpbmUiLCJpIiwia2V5IiwidG9rZW4iLCJjb2RlIiwiY29sb3IiLCJNeUFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBc0M7QUFDZTtBQUNYO0FBQ1I7O0FBRWxDO0FBQ0E7QUFDQSxTQUFTLHVEQUFLO0FBQ2QsU0FBUywyREFBSztBQUNkOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLG1CQUFtQixzQkFBc0I7QUFDekM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSw2QkFBNkIsb0VBQW9FOztBQUVqRztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVB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Q0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7OztBQUdBO0FBQ0E7QUFDQTtBQUNBLFlBQVksRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFO0FBQ3pCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJOztBQUVKO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRyxFQUFFOztBQUVMO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsQ0FBQztBQUNEOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkIsR0FBRztBQUNoQztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7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O0FBQUEsMkJBRUwscUVBQUMseURBQUQ7QUFBYSxnQkFBVSxFQUFFbEIsVUFBekI7QUFBQSw2QkFDQSxxRUFBQyxTQUFELG9CQUFla0IsU0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUZLO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFBUDtBQU1EOztLQVBRRixLO0FBU01BLG9FQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL19hcHAuOTgzOWJmZmI4MzAyNmU0MThiNjguaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBQcmlzbSBmcm9tICcuLi9wcmlzbS9pbmRleC5qcyc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIFByaXNtIH0gZnJvbSAnLi4vcHJpc20vaW5kZXguanMnO1xuaW1wb3J0IHRoZW1lIGZyb20gJy4uL3RoZW1lcy9kdW90b25lRGFyayc7XG5pbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5cbnZhciBkZWZhdWx0UHJvcHMgPSB7XG4gIC8vICRGbG93Rml4TWVcbiAgUHJpc206IFByaXNtLFxuICB0aGVtZTogdGhlbWVcbn07XG5cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgdmFsdWUpIHtcbiAgaWYgKGtleSBpbiBvYmopIHtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHtcbiAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICB3cml0YWJsZTogdHJ1ZVxuICAgIH0pO1xuICB9IGVsc2Uge1xuICAgIG9ialtrZXldID0gdmFsdWU7XG4gIH1cblxuICByZXR1cm4gb2JqO1xufVxuXG5mdW5jdGlvbiBfZXh0ZW5kcygpIHtcbiAgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHtcbiAgICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTtcblxuICAgICAgZm9yICh2YXIga2V5IGluIHNvdXJjZSkge1xuICAgICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkge1xuICAgICAgICAgIHRhcmdldFtrZXldID0gc291cmNlW2tleV07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdGFyZ2V0O1xuICB9O1xuXG4gIHJldHVybiBfZXh0ZW5kcy5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xufVxuXG52YXIgbmV3bGluZVJlID0gL1xcclxcbnxcXHJ8XFxuLzsgLy8gRW1wdHkgbGluZXMgbmVlZCB0byBjb250YWluIGEgc2luZ2xlIGVtcHR5IHRva2VuLCBkZW5vdGVkIHdpdGggeyBlbXB0eTogdHJ1ZSB9XG5cbnZhciBub3JtYWxpemVFbXB0eUxpbmVzID0gZnVuY3Rpb24gKGxpbmUpIHtcbiAgaWYgKGxpbmUubGVuZ3RoID09PSAwKSB7XG4gICAgbGluZS5wdXNoKHtcbiAgICAgIHR5cGVzOiBbXCJwbGFpblwiXSxcbiAgICAgIGNvbnRlbnQ6IFwiXFxuXCIsXG4gICAgICBlbXB0eTogdHJ1ZVxuICAgIH0pO1xuICB9IGVsc2UgaWYgKGxpbmUubGVuZ3RoID09PSAxICYmIGxpbmVbMF0uY29udGVudCA9PT0gXCJcIikge1xuICAgIGxpbmVbMF0uY29udGVudCA9IFwiXFxuXCI7XG4gICAgbGluZVswXS5lbXB0eSA9IHRydWU7XG4gIH1cbn07XG5cbnZhciBhcHBlbmRUeXBlcyA9IGZ1bmN0aW9uICh0eXBlcywgYWRkKSB7XG4gIHZhciB0eXBlc1NpemUgPSB0eXBlcy5sZW5ndGg7XG5cbiAgaWYgKHR5cGVzU2l6ZSA+IDAgJiYgdHlwZXNbdHlwZXNTaXplIC0gMV0gPT09IGFkZCkge1xuICAgIHJldHVybiB0eXBlcztcbiAgfVxuXG4gIHJldHVybiB0eXBlcy5jb25jYXQoYWRkKTtcbn07IC8vIFRha2VzIGFuIGFycmF5IG9mIFByaXNtJ3MgdG9rZW5zIGFuZCBncm91cHMgdGhlbSBieSBsaW5lLCB0dXJuaW5nIHBsYWluXG4vLyBzdHJpbmdzIGludG8gdG9rZW5zIGFzIHdlbGwuIFRva2VucyBjYW4gYmVjb21lIHJlY3Vyc2l2ZSBpbiBzb21lIGNhc2VzLFxuLy8gd2hpY2ggbWVhbnMgdGhhdCB0aGVpciB0eXBlcyBhcmUgY29uY2F0ZW5hdGVkLiBQbGFpbi1zdHJpbmcgdG9rZW5zIGhvd2V2ZXJcbi8vIGFyZSBhbHdheXMgb2YgdHlwZSBcInBsYWluXCIuXG4vLyBUaGlzIGlzIG5vdCByZWN1cnNpdmUgdG8gYXZvaWQgZXhjZWVkaW5nIHRoZSBjYWxsLXN0YWNrIGxpbWl0LCBzaW5jZSBpdCdzIHVuY2xlYXJcbi8vIGhvdyBuZXN0ZWQgUHJpc20ncyB0b2tlbnMgY2FuIGJlY29tZVxuXG5cbnZhciBub3JtYWxpemVUb2tlbnMgPSBmdW5jdGlvbiAodG9rZW5zKSB7XG4gIHZhciB0eXBlQXJyU3RhY2sgPSBbW11dO1xuICB2YXIgdG9rZW5BcnJTdGFjayA9IFt0b2tlbnNdO1xuICB2YXIgdG9rZW5BcnJJbmRleFN0YWNrID0gWzBdO1xuICB2YXIgdG9rZW5BcnJTaXplU3RhY2sgPSBbdG9rZW5zLmxlbmd0aF07XG4gIHZhciBpID0gMDtcbiAgdmFyIHN0YWNrSW5kZXggPSAwO1xuICB2YXIgY3VycmVudExpbmUgPSBbXTtcbiAgdmFyIGFjYyA9IFtjdXJyZW50TGluZV07XG5cbiAgd2hpbGUgKHN0YWNrSW5kZXggPiAtMSkge1xuICAgIHdoaWxlICgoaSA9IHRva2VuQXJySW5kZXhTdGFja1tzdGFja0luZGV4XSsrKSA8IHRva2VuQXJyU2l6ZVN0YWNrW3N0YWNrSW5kZXhdKSB7XG4gICAgICB2YXIgY29udGVudCA9IHZvaWQgMDtcbiAgICAgIHZhciB0eXBlcyA9IHR5cGVBcnJTdGFja1tzdGFja0luZGV4XTtcbiAgICAgIHZhciB0b2tlbkFyciA9IHRva2VuQXJyU3RhY2tbc3RhY2tJbmRleF07XG4gICAgICB2YXIgdG9rZW4gPSB0b2tlbkFycltpXTsgLy8gRGV0ZXJtaW5lIGNvbnRlbnQgYW5kIGFwcGVuZCB0eXBlIHRvIHR5cGVzIGlmIG5lY2Vzc2FyeVxuXG4gICAgICBpZiAodHlwZW9mIHRva2VuID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgIHR5cGVzID0gc3RhY2tJbmRleCA+IDAgPyB0eXBlcyA6IFtcInBsYWluXCJdO1xuICAgICAgICBjb250ZW50ID0gdG9rZW47XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0eXBlcyA9IGFwcGVuZFR5cGVzKHR5cGVzLCB0b2tlbi50eXBlKTtcblxuICAgICAgICBpZiAodG9rZW4uYWxpYXMpIHtcbiAgICAgICAgICB0eXBlcyA9IGFwcGVuZFR5cGVzKHR5cGVzLCB0b2tlbi5hbGlhcyk7XG4gICAgICAgIH1cblxuICAgICAgICBjb250ZW50ID0gdG9rZW4uY29udGVudDtcbiAgICAgIH0gLy8gSWYgdG9rZW4uY29udGVudCBpcyBhbiBhcnJheSwgaW5jcmVhc2UgdGhlIHN0YWNrIGRlcHRoIGFuZCByZXBlYXQgdGhpcyB3aGlsZS1sb29wXG5cblxuICAgICAgaWYgKHR5cGVvZiBjb250ZW50ICE9PSBcInN0cmluZ1wiKSB7XG4gICAgICAgIHN0YWNrSW5kZXgrKztcbiAgICAgICAgdHlwZUFyclN0YWNrLnB1c2godHlwZXMpO1xuICAgICAgICB0b2tlbkFyclN0YWNrLnB1c2goY29udGVudCk7XG4gICAgICAgIHRva2VuQXJySW5kZXhTdGFjay5wdXNoKDApO1xuICAgICAgICB0b2tlbkFyclNpemVTdGFjay5wdXNoKGNvbnRlbnQubGVuZ3RoKTtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9IC8vIFNwbGl0IGJ5IG5ld2xpbmVzXG5cblxuICAgICAgdmFyIHNwbGl0QnlOZXdsaW5lcyA9IGNvbnRlbnQuc3BsaXQobmV3bGluZVJlKTtcbiAgICAgIHZhciBuZXdsaW5lQ291bnQgPSBzcGxpdEJ5TmV3bGluZXMubGVuZ3RoO1xuICAgICAgY3VycmVudExpbmUucHVzaCh7XG4gICAgICAgIHR5cGVzOiB0eXBlcyxcbiAgICAgICAgY29udGVudDogc3BsaXRCeU5ld2xpbmVzWzBdXG4gICAgICB9KTsgLy8gQ3JlYXRlIGEgbmV3IGxpbmUgZm9yIGVhY2ggc3RyaW5nIG9uIGEgbmV3IGxpbmVcblxuICAgICAgZm9yICh2YXIgaSQxID0gMTsgaSQxIDwgbmV3bGluZUNvdW50OyBpJDErKykge1xuICAgICAgICBub3JtYWxpemVFbXB0eUxpbmVzKGN1cnJlbnRMaW5lKTtcbiAgICAgICAgYWNjLnB1c2goY3VycmVudExpbmUgPSBbXSk7XG4gICAgICAgIGN1cnJlbnRMaW5lLnB1c2goe1xuICAgICAgICAgIHR5cGVzOiB0eXBlcyxcbiAgICAgICAgICBjb250ZW50OiBzcGxpdEJ5TmV3bGluZXNbaSQxXVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9IC8vIERlY3JlYXRlIHRoZSBzdGFjayBkZXB0aFxuXG5cbiAgICBzdGFja0luZGV4LS07XG4gICAgdHlwZUFyclN0YWNrLnBvcCgpO1xuICAgIHRva2VuQXJyU3RhY2sucG9wKCk7XG4gICAgdG9rZW5BcnJJbmRleFN0YWNrLnBvcCgpO1xuICAgIHRva2VuQXJyU2l6ZVN0YWNrLnBvcCgpO1xuICB9XG5cbiAgbm9ybWFsaXplRW1wdHlMaW5lcyhjdXJyZW50TGluZSk7XG4gIHJldHVybiBhY2M7XG59O1xuXG52YXIgdGhlbWVUb0RpY3QgPSBmdW5jdGlvbiAodGhlbWUsIGxhbmd1YWdlKSB7XG4gIHZhciBwbGFpbiA9IHRoZW1lLnBsYWluOyAvLyAkRmxvd0ZpeE1lXG5cbiAgdmFyIGJhc2UgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICB2YXIgdGhlbWVEaWN0ID0gdGhlbWUuc3R5bGVzLnJlZHVjZShmdW5jdGlvbiAoYWNjLCB0aGVtZUVudHJ5KSB7XG4gICAgdmFyIGxhbmd1YWdlcyA9IHRoZW1lRW50cnkubGFuZ3VhZ2VzO1xuICAgIHZhciBzdHlsZSA9IHRoZW1lRW50cnkuc3R5bGU7XG5cbiAgICBpZiAobGFuZ3VhZ2VzICYmICFsYW5ndWFnZXMuaW5jbHVkZXMobGFuZ3VhZ2UpKSB7XG4gICAgICByZXR1cm4gYWNjO1xuICAgIH1cblxuICAgIHRoZW1lRW50cnkudHlwZXMuZm9yRWFjaChmdW5jdGlvbiAodHlwZSkge1xuICAgICAgLy8gJEZsb3dGaXhNZVxuICAgICAgdmFyIGFjY1N0eWxlID0gX2V4dGVuZHMoe30sIGFjY1t0eXBlXSwgc3R5bGUpO1xuXG4gICAgICBhY2NbdHlwZV0gPSBhY2NTdHlsZTtcbiAgICB9KTtcbiAgICByZXR1cm4gYWNjO1xuICB9LCBiYXNlKTsgLy8gJEZsb3dGaXhNZVxuXG4gIHRoZW1lRGljdC5yb290ID0gcGxhaW47IC8vICRGbG93Rml4TWVcblxuICB0aGVtZURpY3QucGxhaW4gPSBfZXh0ZW5kcyh7fSwgcGxhaW4sIHtcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IG51bGxcbiAgfSk7XG4gIHJldHVybiB0aGVtZURpY3Q7XG59O1xuXG5mdW5jdGlvbiBvYmplY3RXaXRob3V0UHJvcGVydGllcyhvYmosIGV4Y2x1ZGUpIHtcbiAgdmFyIHRhcmdldCA9IHt9O1xuXG4gIGZvciAodmFyIGsgaW4gb2JqKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgaykgJiYgZXhjbHVkZS5pbmRleE9mKGspID09PSAtMSkgdGFyZ2V0W2tdID0gb2JqW2tdO1xuXG4gIHJldHVybiB0YXJnZXQ7XG59XG5cbnZhciBIaWdobGlnaHQgPSAvKkBfX1BVUkVfXyovZnVuY3Rpb24gKENvbXBvbmVudCkge1xuICBmdW5jdGlvbiBIaWdobGlnaHQoKSB7XG4gICAgdmFyIHRoaXMkMSA9IHRoaXM7XG4gICAgdmFyIGFyZ3MgPSBbXSxcbiAgICAgICAgbGVuID0gYXJndW1lbnRzLmxlbmd0aDtcblxuICAgIHdoaWxlIChsZW4tLSkgYXJnc1tsZW5dID0gYXJndW1lbnRzW2xlbl07XG5cbiAgICBDb21wb25lbnQuYXBwbHkodGhpcywgYXJncyk7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkodGhpcywgXCJnZXRUaGVtZURpY3RcIiwgZnVuY3Rpb24gKHByb3BzKSB7XG4gICAgICBpZiAodGhpcyQxLnRoZW1lRGljdCAhPT0gdW5kZWZpbmVkICYmIHByb3BzLnRoZW1lID09PSB0aGlzJDEucHJldlRoZW1lICYmIHByb3BzLmxhbmd1YWdlID09PSB0aGlzJDEucHJldkxhbmd1YWdlKSB7XG4gICAgICAgIHJldHVybiB0aGlzJDEudGhlbWVEaWN0O1xuICAgICAgfVxuXG4gICAgICB0aGlzJDEucHJldlRoZW1lID0gcHJvcHMudGhlbWU7XG4gICAgICB0aGlzJDEucHJldkxhbmd1YWdlID0gcHJvcHMubGFuZ3VhZ2U7XG4gICAgICB2YXIgdGhlbWVEaWN0ID0gcHJvcHMudGhlbWUgPyB0aGVtZVRvRGljdChwcm9wcy50aGVtZSwgcHJvcHMubGFuZ3VhZ2UpIDogdW5kZWZpbmVkO1xuICAgICAgcmV0dXJuIHRoaXMkMS50aGVtZURpY3QgPSB0aGVtZURpY3Q7XG4gICAgfSk7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkodGhpcywgXCJnZXRMaW5lUHJvcHNcIiwgZnVuY3Rpb24gKHJlZikge1xuICAgICAgdmFyIGtleSA9IHJlZi5rZXk7XG4gICAgICB2YXIgY2xhc3NOYW1lID0gcmVmLmNsYXNzTmFtZTtcbiAgICAgIHZhciBzdHlsZSA9IHJlZi5zdHlsZTtcbiAgICAgIHZhciByZXN0JDEgPSBvYmplY3RXaXRob3V0UHJvcGVydGllcyhyZWYsIFtcImtleVwiLCBcImNsYXNzTmFtZVwiLCBcInN0eWxlXCIsIFwibGluZVwiXSk7XG4gICAgICB2YXIgcmVzdCA9IHJlc3QkMTtcblxuICAgICAgdmFyIG91dHB1dCA9IF9leHRlbmRzKHt9LCByZXN0LCB7XG4gICAgICAgIGNsYXNzTmFtZTogXCJ0b2tlbi1saW5lXCIsXG4gICAgICAgIHN0eWxlOiB1bmRlZmluZWQsXG4gICAgICAgIGtleTogdW5kZWZpbmVkXG4gICAgICB9KTtcblxuICAgICAgdmFyIHRoZW1lRGljdCA9IHRoaXMkMS5nZXRUaGVtZURpY3QodGhpcyQxLnByb3BzKTtcblxuICAgICAgaWYgKHRoZW1lRGljdCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIG91dHB1dC5zdHlsZSA9IHRoZW1lRGljdC5wbGFpbjtcbiAgICAgIH1cblxuICAgICAgaWYgKHN0eWxlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgb3V0cHV0LnN0eWxlID0gb3V0cHV0LnN0eWxlICE9PSB1bmRlZmluZWQgPyBfZXh0ZW5kcyh7fSwgb3V0cHV0LnN0eWxlLCBzdHlsZSkgOiBzdHlsZTtcbiAgICAgIH1cblxuICAgICAgaWYgKGtleSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIG91dHB1dC5rZXkgPSBrZXk7XG4gICAgICB9XG5cbiAgICAgIGlmIChjbGFzc05hbWUpIHtcbiAgICAgICAgb3V0cHV0LmNsYXNzTmFtZSArPSBcIiBcIiArIGNsYXNzTmFtZTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIG91dHB1dDtcbiAgICB9KTtcblxuICAgIF9kZWZpbmVQcm9wZXJ0eSh0aGlzLCBcImdldFN0eWxlRm9yVG9rZW5cIiwgZnVuY3Rpb24gKHJlZikge1xuICAgICAgdmFyIHR5cGVzID0gcmVmLnR5cGVzO1xuICAgICAgdmFyIGVtcHR5ID0gcmVmLmVtcHR5O1xuICAgICAgdmFyIHR5cGVzU2l6ZSA9IHR5cGVzLmxlbmd0aDtcbiAgICAgIHZhciB0aGVtZURpY3QgPSB0aGlzJDEuZ2V0VGhlbWVEaWN0KHRoaXMkMS5wcm9wcyk7XG5cbiAgICAgIGlmICh0aGVtZURpY3QgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgICAgfSBlbHNlIGlmICh0eXBlc1NpemUgPT09IDEgJiYgdHlwZXNbMF0gPT09IFwicGxhaW5cIikge1xuICAgICAgICByZXR1cm4gZW1wdHkgPyB7XG4gICAgICAgICAgZGlzcGxheTogXCJpbmxpbmUtYmxvY2tcIlxuICAgICAgICB9IDogdW5kZWZpbmVkO1xuICAgICAgfSBlbHNlIGlmICh0eXBlc1NpemUgPT09IDEgJiYgIWVtcHR5KSB7XG4gICAgICAgIHJldHVybiB0aGVtZURpY3RbdHlwZXNbMF1dO1xuICAgICAgfVxuXG4gICAgICB2YXIgYmFzZVN0eWxlID0gZW1wdHkgPyB7XG4gICAgICAgIGRpc3BsYXk6IFwiaW5saW5lLWJsb2NrXCJcbiAgICAgIH0gOiB7fTsgLy8gJEZsb3dGaXhNZVxuXG4gICAgICB2YXIgdHlwZVN0eWxlcyA9IHR5cGVzLm1hcChmdW5jdGlvbiAodHlwZSkge1xuICAgICAgICByZXR1cm4gdGhlbWVEaWN0W3R5cGVdO1xuICAgICAgfSk7XG4gICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbi5hcHBseShPYmplY3QsIFtiYXNlU3R5bGVdLmNvbmNhdCh0eXBlU3R5bGVzKSk7XG4gICAgfSk7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkodGhpcywgXCJnZXRUb2tlblByb3BzXCIsIGZ1bmN0aW9uIChyZWYpIHtcbiAgICAgIHZhciBrZXkgPSByZWYua2V5O1xuICAgICAgdmFyIGNsYXNzTmFtZSA9IHJlZi5jbGFzc05hbWU7XG4gICAgICB2YXIgc3R5bGUgPSByZWYuc3R5bGU7XG4gICAgICB2YXIgdG9rZW4gPSByZWYudG9rZW47XG4gICAgICB2YXIgcmVzdCQxID0gb2JqZWN0V2l0aG91dFByb3BlcnRpZXMocmVmLCBbXCJrZXlcIiwgXCJjbGFzc05hbWVcIiwgXCJzdHlsZVwiLCBcInRva2VuXCJdKTtcbiAgICAgIHZhciByZXN0ID0gcmVzdCQxO1xuXG4gICAgICB2YXIgb3V0cHV0ID0gX2V4dGVuZHMoe30sIHJlc3QsIHtcbiAgICAgICAgY2xhc3NOYW1lOiBcInRva2VuIFwiICsgdG9rZW4udHlwZXMuam9pbihcIiBcIiksXG4gICAgICAgIGNoaWxkcmVuOiB0b2tlbi5jb250ZW50LFxuICAgICAgICBzdHlsZTogdGhpcyQxLmdldFN0eWxlRm9yVG9rZW4odG9rZW4pLFxuICAgICAgICBrZXk6IHVuZGVmaW5lZFxuICAgICAgfSk7XG5cbiAgICAgIGlmIChzdHlsZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIG91dHB1dC5zdHlsZSA9IG91dHB1dC5zdHlsZSAhPT0gdW5kZWZpbmVkID8gX2V4dGVuZHMoe30sIG91dHB1dC5zdHlsZSwgc3R5bGUpIDogc3R5bGU7XG4gICAgICB9XG5cbiAgICAgIGlmIChrZXkgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBvdXRwdXQua2V5ID0ga2V5O1xuICAgICAgfVxuXG4gICAgICBpZiAoY2xhc3NOYW1lKSB7XG4gICAgICAgIG91dHB1dC5jbGFzc05hbWUgKz0gXCIgXCIgKyBjbGFzc05hbWU7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBvdXRwdXQ7XG4gICAgfSk7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkodGhpcywgXCJ0b2tlbml6ZVwiLCBmdW5jdGlvbiAoUHJpc20sIGNvZGUsIGdyYW1tYXIsIGxhbmd1YWdlKSB7XG4gICAgICB2YXIgZW52ID0ge1xuICAgICAgICBjb2RlOiBjb2RlLFxuICAgICAgICBncmFtbWFyOiBncmFtbWFyLFxuICAgICAgICBsYW5ndWFnZTogbGFuZ3VhZ2UsXG4gICAgICAgIHRva2VuczogW11cbiAgICAgIH07XG4gICAgICBQcmlzbS5ob29rcy5ydW4oXCJiZWZvcmUtdG9rZW5pemVcIiwgZW52KTtcbiAgICAgIHZhciB0b2tlbnMgPSBlbnYudG9rZW5zID0gUHJpc20udG9rZW5pemUoZW52LmNvZGUsIGVudi5ncmFtbWFyLCBlbnYubGFuZ3VhZ2UpO1xuICAgICAgUHJpc20uaG9va3MucnVuKFwiYWZ0ZXItdG9rZW5pemVcIiwgZW52KTtcbiAgICAgIHJldHVybiB0b2tlbnM7XG4gICAgfSk7XG4gIH1cblxuICBpZiAoQ29tcG9uZW50KSBIaWdobGlnaHQuX19wcm90b19fID0gQ29tcG9uZW50O1xuICBIaWdobGlnaHQucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShDb21wb25lbnQgJiYgQ29tcG9uZW50LnByb3RvdHlwZSk7XG4gIEhpZ2hsaWdodC5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBIaWdobGlnaHQ7XG5cbiAgSGlnaGxpZ2h0LnByb3RvdHlwZS5yZW5kZXIgPSBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgdmFyIHJlZiA9IHRoaXMucHJvcHM7XG4gICAgdmFyIFByaXNtID0gcmVmLlByaXNtO1xuICAgIHZhciBsYW5ndWFnZSA9IHJlZi5sYW5ndWFnZTtcbiAgICB2YXIgY29kZSA9IHJlZi5jb2RlO1xuICAgIHZhciBjaGlsZHJlbiA9IHJlZi5jaGlsZHJlbjtcbiAgICB2YXIgdGhlbWVEaWN0ID0gdGhpcy5nZXRUaGVtZURpY3QodGhpcy5wcm9wcyk7XG4gICAgdmFyIGdyYW1tYXIgPSBQcmlzbS5sYW5ndWFnZXNbbGFuZ3VhZ2VdO1xuICAgIHZhciBtaXhlZFRva2VucyA9IGdyYW1tYXIgIT09IHVuZGVmaW5lZCA/IHRoaXMudG9rZW5pemUoUHJpc20sIGNvZGUsIGdyYW1tYXIsIGxhbmd1YWdlKSA6IFtjb2RlXTtcbiAgICB2YXIgdG9rZW5zID0gbm9ybWFsaXplVG9rZW5zKG1peGVkVG9rZW5zKTtcbiAgICByZXR1cm4gY2hpbGRyZW4oe1xuICAgICAgdG9rZW5zOiB0b2tlbnMsXG4gICAgICBjbGFzc05hbWU6IFwicHJpc20tY29kZSBsYW5ndWFnZS1cIiArIGxhbmd1YWdlLFxuICAgICAgc3R5bGU6IHRoZW1lRGljdCAhPT0gdW5kZWZpbmVkID8gdGhlbWVEaWN0LnJvb3QgOiB7fSxcbiAgICAgIGdldExpbmVQcm9wczogdGhpcy5nZXRMaW5lUHJvcHMsXG4gICAgICBnZXRUb2tlblByb3BzOiB0aGlzLmdldFRva2VuUHJvcHNcbiAgICB9KTtcbiAgfTtcblxuICByZXR1cm4gSGlnaGxpZ2h0O1xufShDb21wb25lbnQpO1xuXG5leHBvcnQgZGVmYXVsdCBIaWdobGlnaHQ7XG5leHBvcnQgeyBkZWZhdWx0UHJvcHMgfTtcbiIsIi8qKlxuICogUHJpc206IExpZ2h0d2VpZ2h0LCByb2J1c3QsIGVsZWdhbnQgc3ludGF4IGhpZ2hsaWdodGluZ1xuICogTUlUIGxpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHAvXG4gKiBAYXV0aG9yIExlYSBWZXJvdSBodHRwOi8vbGVhLnZlcm91Lm1lXG4gKi9cblxuLyoqXG4gKiBwcmlzbS1yZWFjdC1yZW5kZXJlcjpcbiAqIFRoaXMgZmlsZSBoYXMgYmVlbiBtb2RpZmllZCB0byByZW1vdmU6XG4gKiAtIGdsb2JhbHMgYW5kIHdpbmRvdyBkZXBlbmRlbmN5XG4gKiAtIHdvcmtlciBzdXBwb3J0XG4gKiAtIGhpZ2hsaWdodEFsbCBhbmQgb3RoZXIgZWxlbWVudCBkZXBlbmRlbnQgbWV0aG9kc1xuICogLSBfLmhvb2tzIGhlbHBlcnNcbiAqIC0gVU1EL25vZGUtc3BlY2lmaWMgaGFja3NcbiAqIEl0IGhhcyBhbHNvIGJlZW4gcnVuIHRocm91Z2ggcHJldHRpZXJcbiAqL1xudmFyIFByaXNtID0gZnVuY3Rpb24gKCkge1xuICB2YXIgdW5pcXVlSWQgPSAwO1xuICB2YXIgXyA9IHtcbiAgICB1dGlsOiB7XG4gICAgICBlbmNvZGU6IGZ1bmN0aW9uICh0b2tlbnMpIHtcbiAgICAgICAgaWYgKHRva2VucyBpbnN0YW5jZW9mIFRva2VuKSB7XG4gICAgICAgICAgcmV0dXJuIG5ldyBUb2tlbih0b2tlbnMudHlwZSwgXy51dGlsLmVuY29kZSh0b2tlbnMuY29udGVudCksIHRva2Vucy5hbGlhcyk7XG4gICAgICAgIH0gZWxzZSBpZiAoXy51dGlsLnR5cGUodG9rZW5zKSA9PT0gXCJBcnJheVwiKSB7XG4gICAgICAgICAgcmV0dXJuIHRva2Vucy5tYXAoXy51dGlsLmVuY29kZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRva2Vucy5yZXBsYWNlKC8mL2csIFwiJmFtcDtcIikucmVwbGFjZSgvPC9nLCBcIiZsdDtcIikucmVwbGFjZSgvXFx1MDBhMC9nLCBcIiBcIik7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICB0eXBlOiBmdW5jdGlvbiAobykge1xuICAgICAgICByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG8pLm1hdGNoKC9cXFtvYmplY3QgKFxcdyspXFxdLylbMV07XG4gICAgICB9LFxuICAgICAgb2JqSWQ6IGZ1bmN0aW9uIChvYmopIHtcbiAgICAgICAgaWYgKCFvYmpbXCJfX2lkXCJdKSB7XG4gICAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwgXCJfX2lkXCIsIHtcbiAgICAgICAgICAgIHZhbHVlOiArK3VuaXF1ZUlkXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gb2JqW1wiX19pZFwiXTtcbiAgICAgIH0sXG4gICAgICAvLyBEZWVwIGNsb25lIGEgbGFuZ3VhZ2UgZGVmaW5pdGlvbiAoZS5nLiB0byBleHRlbmQgaXQpXG4gICAgICBjbG9uZTogZnVuY3Rpb24gKG8sIHZpc2l0ZWQpIHtcbiAgICAgICAgdmFyIHR5cGUgPSBfLnV0aWwudHlwZShvKTtcblxuICAgICAgICB2aXNpdGVkID0gdmlzaXRlZCB8fCB7fTtcblxuICAgICAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgICAgICBjYXNlIFwiT2JqZWN0XCI6XG4gICAgICAgICAgICBpZiAodmlzaXRlZFtfLnV0aWwub2JqSWQobyldKSB7XG4gICAgICAgICAgICAgIHJldHVybiB2aXNpdGVkW18udXRpbC5vYmpJZChvKV07XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHZhciBjbG9uZSA9IHt9O1xuICAgICAgICAgICAgdmlzaXRlZFtfLnV0aWwub2JqSWQobyldID0gY2xvbmU7XG5cbiAgICAgICAgICAgIGZvciAodmFyIGtleSBpbiBvKSB7XG4gICAgICAgICAgICAgIGlmIChvLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgICAgICAgICBjbG9uZVtrZXldID0gXy51dGlsLmNsb25lKG9ba2V5XSwgdmlzaXRlZCk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIGNsb25lO1xuXG4gICAgICAgICAgY2FzZSBcIkFycmF5XCI6XG4gICAgICAgICAgICBpZiAodmlzaXRlZFtfLnV0aWwub2JqSWQobyldKSB7XG4gICAgICAgICAgICAgIHJldHVybiB2aXNpdGVkW18udXRpbC5vYmpJZChvKV07XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHZhciBjbG9uZSA9IFtdO1xuICAgICAgICAgICAgdmlzaXRlZFtfLnV0aWwub2JqSWQobyldID0gY2xvbmU7XG4gICAgICAgICAgICBvLmZvckVhY2goZnVuY3Rpb24gKHYsIGkpIHtcbiAgICAgICAgICAgICAgY2xvbmVbaV0gPSBfLnV0aWwuY2xvbmUodiwgdmlzaXRlZCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJldHVybiBjbG9uZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBvO1xuICAgICAgfVxuICAgIH0sXG4gICAgbGFuZ3VhZ2VzOiB7XG4gICAgICBleHRlbmQ6IGZ1bmN0aW9uIChpZCwgcmVkZWYpIHtcbiAgICAgICAgdmFyIGxhbmcgPSBfLnV0aWwuY2xvbmUoXy5sYW5ndWFnZXNbaWRdKTtcblxuICAgICAgICBmb3IgKHZhciBrZXkgaW4gcmVkZWYpIHtcbiAgICAgICAgICBsYW5nW2tleV0gPSByZWRlZltrZXldO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGxhbmc7XG4gICAgICB9LFxuXG4gICAgICAvKipcbiAgICAgICAqIEluc2VydCBhIHRva2VuIGJlZm9yZSBhbm90aGVyIHRva2VuIGluIGEgbGFuZ3VhZ2UgbGl0ZXJhbFxuICAgICAgICogQXMgdGhpcyBuZWVkcyB0byByZWNyZWF0ZSB0aGUgb2JqZWN0ICh3ZSBjYW5ub3QgYWN0dWFsbHkgaW5zZXJ0IGJlZm9yZSBrZXlzIGluIG9iamVjdCBsaXRlcmFscyksXG4gICAgICAgKiB3ZSBjYW5ub3QganVzdCBwcm92aWRlIGFuIG9iamVjdCwgd2UgbmVlZCBhbm9iamVjdCBhbmQgYSBrZXkuXG4gICAgICAgKiBAcGFyYW0gaW5zaWRlIFRoZSBrZXkgKG9yIGxhbmd1YWdlIGlkKSBvZiB0aGUgcGFyZW50XG4gICAgICAgKiBAcGFyYW0gYmVmb3JlIFRoZSBrZXkgdG8gaW5zZXJ0IGJlZm9yZS4gSWYgbm90IHByb3ZpZGVkLCB0aGUgZnVuY3Rpb24gYXBwZW5kcyBpbnN0ZWFkLlxuICAgICAgICogQHBhcmFtIGluc2VydCBPYmplY3Qgd2l0aCB0aGUga2V5L3ZhbHVlIHBhaXJzIHRvIGluc2VydFxuICAgICAgICogQHBhcmFtIHJvb3QgVGhlIG9iamVjdCB0aGF0IGNvbnRhaW5zIGBpbnNpZGVgLiBJZiBlcXVhbCB0byBQcmlzbS5sYW5ndWFnZXMsIGl0IGNhbiBiZSBvbWl0dGVkLlxuICAgICAgICovXG4gICAgICBpbnNlcnRCZWZvcmU6IGZ1bmN0aW9uIChpbnNpZGUsIGJlZm9yZSwgaW5zZXJ0LCByb290KSB7XG4gICAgICAgIHJvb3QgPSByb290IHx8IF8ubGFuZ3VhZ2VzO1xuICAgICAgICB2YXIgZ3JhbW1hciA9IHJvb3RbaW5zaWRlXTtcblxuICAgICAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PSAyKSB7XG4gICAgICAgICAgaW5zZXJ0ID0gYXJndW1lbnRzWzFdO1xuXG4gICAgICAgICAgZm9yICh2YXIgbmV3VG9rZW4gaW4gaW5zZXJ0KSB7XG4gICAgICAgICAgICBpZiAoaW5zZXJ0Lmhhc093blByb3BlcnR5KG5ld1Rva2VuKSkge1xuICAgICAgICAgICAgICBncmFtbWFyW25ld1Rva2VuXSA9IGluc2VydFtuZXdUb2tlbl07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuIGdyYW1tYXI7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgcmV0ID0ge307XG5cbiAgICAgICAgZm9yICh2YXIgdG9rZW4gaW4gZ3JhbW1hcikge1xuICAgICAgICAgIGlmIChncmFtbWFyLmhhc093blByb3BlcnR5KHRva2VuKSkge1xuICAgICAgICAgICAgaWYgKHRva2VuID09IGJlZm9yZSkge1xuICAgICAgICAgICAgICBmb3IgKHZhciBuZXdUb2tlbiBpbiBpbnNlcnQpIHtcbiAgICAgICAgICAgICAgICBpZiAoaW5zZXJ0Lmhhc093blByb3BlcnR5KG5ld1Rva2VuKSkge1xuICAgICAgICAgICAgICAgICAgcmV0W25ld1Rva2VuXSA9IGluc2VydFtuZXdUb2tlbl07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldFt0b2tlbl0gPSBncmFtbWFyW3Rva2VuXTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gLy8gVXBkYXRlIHJlZmVyZW5jZXMgaW4gb3RoZXIgbGFuZ3VhZ2UgZGVmaW5pdGlvbnNcblxuXG4gICAgICAgIF8ubGFuZ3VhZ2VzLkRGUyhfLmxhbmd1YWdlcywgZnVuY3Rpb24gKGtleSwgdmFsdWUpIHtcbiAgICAgICAgICBpZiAodmFsdWUgPT09IHJvb3RbaW5zaWRlXSAmJiBrZXkgIT0gaW5zaWRlKSB7XG4gICAgICAgICAgICB0aGlzW2tleV0gPSByZXQ7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gcm9vdFtpbnNpZGVdID0gcmV0O1xuICAgICAgfSxcbiAgICAgIC8vIFRyYXZlcnNlIGEgbGFuZ3VhZ2UgZGVmaW5pdGlvbiB3aXRoIERlcHRoIEZpcnN0IFNlYXJjaFxuICAgICAgREZTOiBmdW5jdGlvbiAobywgY2FsbGJhY2ssIHR5cGUsIHZpc2l0ZWQpIHtcbiAgICAgICAgdmlzaXRlZCA9IHZpc2l0ZWQgfHwge307XG5cbiAgICAgICAgZm9yICh2YXIgaSBpbiBvKSB7XG4gICAgICAgICAgaWYgKG8uaGFzT3duUHJvcGVydHkoaSkpIHtcbiAgICAgICAgICAgIGNhbGxiYWNrLmNhbGwobywgaSwgb1tpXSwgdHlwZSB8fCBpKTtcblxuICAgICAgICAgICAgaWYgKF8udXRpbC50eXBlKG9baV0pID09PSBcIk9iamVjdFwiICYmICF2aXNpdGVkW18udXRpbC5vYmpJZChvW2ldKV0pIHtcbiAgICAgICAgICAgICAgdmlzaXRlZFtfLnV0aWwub2JqSWQob1tpXSldID0gdHJ1ZTtcblxuICAgICAgICAgICAgICBfLmxhbmd1YWdlcy5ERlMob1tpXSwgY2FsbGJhY2ssIG51bGwsIHZpc2l0ZWQpO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChfLnV0aWwudHlwZShvW2ldKSA9PT0gXCJBcnJheVwiICYmICF2aXNpdGVkW18udXRpbC5vYmpJZChvW2ldKV0pIHtcbiAgICAgICAgICAgICAgdmlzaXRlZFtfLnV0aWwub2JqSWQob1tpXSldID0gdHJ1ZTtcblxuICAgICAgICAgICAgICBfLmxhbmd1YWdlcy5ERlMob1tpXSwgY2FsbGJhY2ssIGksIHZpc2l0ZWQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG4gICAgcGx1Z2luczoge30sXG4gICAgaGlnaGxpZ2h0OiBmdW5jdGlvbiAodGV4dCwgZ3JhbW1hciwgbGFuZ3VhZ2UpIHtcbiAgICAgIHZhciBlbnYgPSB7XG4gICAgICAgIGNvZGU6IHRleHQsXG4gICAgICAgIGdyYW1tYXI6IGdyYW1tYXIsXG4gICAgICAgIGxhbmd1YWdlOiBsYW5ndWFnZVxuICAgICAgfTtcblxuICAgICAgXy5ob29rcy5ydW4oXCJiZWZvcmUtdG9rZW5pemVcIiwgZW52KTtcblxuICAgICAgZW52LnRva2VucyA9IF8udG9rZW5pemUoZW52LmNvZGUsIGVudi5ncmFtbWFyKTtcblxuICAgICAgXy5ob29rcy5ydW4oXCJhZnRlci10b2tlbml6ZVwiLCBlbnYpO1xuXG4gICAgICByZXR1cm4gVG9rZW4uc3RyaW5naWZ5KF8udXRpbC5lbmNvZGUoZW52LnRva2VucyksIGVudi5sYW5ndWFnZSk7XG4gICAgfSxcbiAgICBtYXRjaEdyYW1tYXI6IGZ1bmN0aW9uICh0ZXh0LCBzdHJhcnIsIGdyYW1tYXIsIGluZGV4LCBzdGFydFBvcywgb25lc2hvdCwgdGFyZ2V0KSB7XG4gICAgICB2YXIgVG9rZW4gPSBfLlRva2VuO1xuXG4gICAgICBmb3IgKHZhciB0b2tlbiBpbiBncmFtbWFyKSB7XG4gICAgICAgIGlmICghZ3JhbW1hci5oYXNPd25Qcm9wZXJ0eSh0b2tlbikgfHwgIWdyYW1tYXJbdG9rZW5dKSB7XG4gICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodG9rZW4gPT0gdGFyZ2V0KSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIHBhdHRlcm5zID0gZ3JhbW1hclt0b2tlbl07XG4gICAgICAgIHBhdHRlcm5zID0gXy51dGlsLnR5cGUocGF0dGVybnMpID09PSBcIkFycmF5XCIgPyBwYXR0ZXJucyA6IFtwYXR0ZXJuc107XG5cbiAgICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCBwYXR0ZXJucy5sZW5ndGg7ICsraikge1xuICAgICAgICAgIHZhciBwYXR0ZXJuID0gcGF0dGVybnNbal0sXG4gICAgICAgICAgICAgIGluc2lkZSA9IHBhdHRlcm4uaW5zaWRlLFxuICAgICAgICAgICAgICBsb29rYmVoaW5kID0gISFwYXR0ZXJuLmxvb2tiZWhpbmQsXG4gICAgICAgICAgICAgIGdyZWVkeSA9ICEhcGF0dGVybi5ncmVlZHksXG4gICAgICAgICAgICAgIGxvb2tiZWhpbmRMZW5ndGggPSAwLFxuICAgICAgICAgICAgICBhbGlhcyA9IHBhdHRlcm4uYWxpYXM7XG5cbiAgICAgICAgICBpZiAoZ3JlZWR5ICYmICFwYXR0ZXJuLnBhdHRlcm4uZ2xvYmFsKSB7XG4gICAgICAgICAgICAvLyBXaXRob3V0IHRoZSBnbG9iYWwgZmxhZywgbGFzdEluZGV4IHdvbid0IHdvcmtcbiAgICAgICAgICAgIHZhciBmbGFncyA9IHBhdHRlcm4ucGF0dGVybi50b1N0cmluZygpLm1hdGNoKC9baW11eV0qJC8pWzBdO1xuICAgICAgICAgICAgcGF0dGVybi5wYXR0ZXJuID0gUmVnRXhwKHBhdHRlcm4ucGF0dGVybi5zb3VyY2UsIGZsYWdzICsgXCJnXCIpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHBhdHRlcm4gPSBwYXR0ZXJuLnBhdHRlcm4gfHwgcGF0dGVybjsgLy8gRG9u4oCZdCBjYWNoZSBsZW5ndGggYXMgaXQgY2hhbmdlcyBkdXJpbmcgdGhlIGxvb3BcblxuICAgICAgICAgIGZvciAodmFyIGkgPSBpbmRleCwgcG9zID0gc3RhcnRQb3M7IGkgPCBzdHJhcnIubGVuZ3RoOyBwb3MgKz0gc3RyYXJyW2ldLmxlbmd0aCwgKytpKSB7XG4gICAgICAgICAgICB2YXIgc3RyID0gc3RyYXJyW2ldO1xuXG4gICAgICAgICAgICBpZiAoc3RyYXJyLmxlbmd0aCA+IHRleHQubGVuZ3RoKSB7XG4gICAgICAgICAgICAgIC8vIFNvbWV0aGluZyB3ZW50IHRlcnJpYmx5IHdyb25nLCBBQk9SVCwgQUJPUlQhXG4gICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHN0ciBpbnN0YW5jZW9mIFRva2VuKSB7XG4gICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoZ3JlZWR5ICYmIGkgIT0gc3RyYXJyLmxlbmd0aCAtIDEpIHtcbiAgICAgICAgICAgICAgcGF0dGVybi5sYXN0SW5kZXggPSBwb3M7XG4gICAgICAgICAgICAgIHZhciBtYXRjaCA9IHBhdHRlcm4uZXhlYyh0ZXh0KTtcblxuICAgICAgICAgICAgICBpZiAoIW1hdGNoKSB7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICB2YXIgZnJvbSA9IG1hdGNoLmluZGV4ICsgKGxvb2tiZWhpbmQgPyBtYXRjaFsxXS5sZW5ndGggOiAwKSxcbiAgICAgICAgICAgICAgICAgIHRvID0gbWF0Y2guaW5kZXggKyBtYXRjaFswXS5sZW5ndGgsXG4gICAgICAgICAgICAgICAgICBrID0gaSxcbiAgICAgICAgICAgICAgICAgIHAgPSBwb3M7XG5cbiAgICAgICAgICAgICAgZm9yICh2YXIgbGVuID0gc3RyYXJyLmxlbmd0aDsgayA8IGxlbiAmJiAocCA8IHRvIHx8ICFzdHJhcnJba10udHlwZSAmJiAhc3RyYXJyW2sgLSAxXS5ncmVlZHkpOyArK2spIHtcbiAgICAgICAgICAgICAgICBwICs9IHN0cmFycltrXS5sZW5ndGg7IC8vIE1vdmUgdGhlIGluZGV4IGkgdG8gdGhlIGVsZW1lbnQgaW4gc3RyYXJyIHRoYXQgaXMgY2xvc2VzdCB0byBmcm9tXG5cbiAgICAgICAgICAgICAgICBpZiAoZnJvbSA+PSBwKSB7XG4gICAgICAgICAgICAgICAgICArK2k7XG4gICAgICAgICAgICAgICAgICBwb3MgPSBwO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSAvLyBJZiBzdHJhcnJbaV0gaXMgYSBUb2tlbiwgdGhlbiB0aGUgbWF0Y2ggc3RhcnRzIGluc2lkZSBhbm90aGVyIFRva2VuLCB3aGljaCBpcyBpbnZhbGlkXG5cblxuICAgICAgICAgICAgICBpZiAoc3RyYXJyW2ldIGluc3RhbmNlb2YgVG9rZW4pIHtcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgfSAvLyBOdW1iZXIgb2YgdG9rZW5zIHRvIGRlbGV0ZSBhbmQgcmVwbGFjZSB3aXRoIHRoZSBuZXcgbWF0Y2hcblxuXG4gICAgICAgICAgICAgIGRlbE51bSA9IGsgLSBpO1xuICAgICAgICAgICAgICBzdHIgPSB0ZXh0LnNsaWNlKHBvcywgcCk7XG4gICAgICAgICAgICAgIG1hdGNoLmluZGV4IC09IHBvcztcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHBhdHRlcm4ubGFzdEluZGV4ID0gMDtcbiAgICAgICAgICAgICAgdmFyIG1hdGNoID0gcGF0dGVybi5leGVjKHN0ciksXG4gICAgICAgICAgICAgICAgICBkZWxOdW0gPSAxO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoIW1hdGNoKSB7XG4gICAgICAgICAgICAgIGlmIChvbmVzaG90KSB7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKGxvb2tiZWhpbmQpIHtcbiAgICAgICAgICAgICAgbG9va2JlaGluZExlbmd0aCA9IG1hdGNoWzFdID8gbWF0Y2hbMV0ubGVuZ3RoIDogMDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdmFyIGZyb20gPSBtYXRjaC5pbmRleCArIGxvb2tiZWhpbmRMZW5ndGgsXG4gICAgICAgICAgICAgICAgbWF0Y2ggPSBtYXRjaFswXS5zbGljZShsb29rYmVoaW5kTGVuZ3RoKSxcbiAgICAgICAgICAgICAgICB0byA9IGZyb20gKyBtYXRjaC5sZW5ndGgsXG4gICAgICAgICAgICAgICAgYmVmb3JlID0gc3RyLnNsaWNlKDAsIGZyb20pLFxuICAgICAgICAgICAgICAgIGFmdGVyID0gc3RyLnNsaWNlKHRvKTtcbiAgICAgICAgICAgIHZhciBhcmdzID0gW2ksIGRlbE51bV07XG5cbiAgICAgICAgICAgIGlmIChiZWZvcmUpIHtcbiAgICAgICAgICAgICAgKytpO1xuICAgICAgICAgICAgICBwb3MgKz0gYmVmb3JlLmxlbmd0aDtcbiAgICAgICAgICAgICAgYXJncy5wdXNoKGJlZm9yZSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHZhciB3cmFwcGVkID0gbmV3IFRva2VuKHRva2VuLCBpbnNpZGUgPyBfLnRva2VuaXplKG1hdGNoLCBpbnNpZGUpIDogbWF0Y2gsIGFsaWFzLCBtYXRjaCwgZ3JlZWR5KTtcbiAgICAgICAgICAgIGFyZ3MucHVzaCh3cmFwcGVkKTtcblxuICAgICAgICAgICAgaWYgKGFmdGVyKSB7XG4gICAgICAgICAgICAgIGFyZ3MucHVzaChhZnRlcik7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIEFycmF5LnByb3RvdHlwZS5zcGxpY2UuYXBwbHkoc3RyYXJyLCBhcmdzKTtcblxuICAgICAgICAgICAgaWYgKGRlbE51bSAhPSAxKSB7XG4gICAgICAgICAgICAgIF8ubWF0Y2hHcmFtbWFyKHRleHQsIHN0cmFyciwgZ3JhbW1hciwgaSwgcG9zLCB0cnVlLCB0b2tlbik7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChvbmVzaG90KSB7XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG4gICAgaG9va3M6IHtcbiAgICAgIGFkZDogZnVuY3Rpb24gKCkge30sXG4gICAgICBydW46IGZ1bmN0aW9uIChuYW1lLCBlbnYpIHt9XG4gICAgfSxcbiAgICB0b2tlbml6ZTogZnVuY3Rpb24gKHRleHQsIGdyYW1tYXIsIGxhbmd1YWdlKSB7XG4gICAgICB2YXIgc3RyYXJyID0gW3RleHRdO1xuICAgICAgdmFyIHJlc3QgPSBncmFtbWFyLnJlc3Q7XG5cbiAgICAgIGlmIChyZXN0KSB7XG4gICAgICAgIGZvciAodmFyIHRva2VuIGluIHJlc3QpIHtcbiAgICAgICAgICBncmFtbWFyW3Rva2VuXSA9IHJlc3RbdG9rZW5dO1xuICAgICAgICB9XG5cbiAgICAgICAgZGVsZXRlIGdyYW1tYXIucmVzdDtcbiAgICAgIH1cblxuICAgICAgXy5tYXRjaEdyYW1tYXIodGV4dCwgc3RyYXJyLCBncmFtbWFyLCAwLCAwLCBmYWxzZSk7XG5cbiAgICAgIHJldHVybiBzdHJhcnI7XG4gICAgfVxuICB9O1xuXG4gIHZhciBUb2tlbiA9IF8uVG9rZW4gPSBmdW5jdGlvbiAodHlwZSwgY29udGVudCwgYWxpYXMsIG1hdGNoZWRTdHIsIGdyZWVkeSkge1xuICAgIHRoaXMudHlwZSA9IHR5cGU7XG4gICAgdGhpcy5jb250ZW50ID0gY29udGVudDtcbiAgICB0aGlzLmFsaWFzID0gYWxpYXM7IC8vIENvcHkgb2YgdGhlIGZ1bGwgc3RyaW5nIHRoaXMgdG9rZW4gd2FzIGNyZWF0ZWQgZnJvbVxuXG4gICAgdGhpcy5sZW5ndGggPSAobWF0Y2hlZFN0ciB8fCBcIlwiKS5sZW5ndGggfCAwO1xuICAgIHRoaXMuZ3JlZWR5ID0gISFncmVlZHk7XG4gIH07XG5cbiAgVG9rZW4uc3RyaW5naWZ5ID0gZnVuY3Rpb24gKG8sIGxhbmd1YWdlLCBwYXJlbnQpIHtcbiAgICBpZiAodHlwZW9mIG8gPT0gXCJzdHJpbmdcIikge1xuICAgICAgcmV0dXJuIG87XG4gICAgfVxuXG4gICAgaWYgKF8udXRpbC50eXBlKG8pID09PSBcIkFycmF5XCIpIHtcbiAgICAgIHJldHVybiBvLm1hcChmdW5jdGlvbiAoZWxlbWVudCkge1xuICAgICAgICByZXR1cm4gVG9rZW4uc3RyaW5naWZ5KGVsZW1lbnQsIGxhbmd1YWdlLCBvKTtcbiAgICAgIH0pLmpvaW4oXCJcIik7XG4gICAgfVxuXG4gICAgdmFyIGVudiA9IHtcbiAgICAgIHR5cGU6IG8udHlwZSxcbiAgICAgIGNvbnRlbnQ6IFRva2VuLnN0cmluZ2lmeShvLmNvbnRlbnQsIGxhbmd1YWdlLCBwYXJlbnQpLFxuICAgICAgdGFnOiBcInNwYW5cIixcbiAgICAgIGNsYXNzZXM6IFtcInRva2VuXCIsIG8udHlwZV0sXG4gICAgICBhdHRyaWJ1dGVzOiB7fSxcbiAgICAgIGxhbmd1YWdlOiBsYW5ndWFnZSxcbiAgICAgIHBhcmVudDogcGFyZW50XG4gICAgfTtcblxuICAgIGlmIChvLmFsaWFzKSB7XG4gICAgICB2YXIgYWxpYXNlcyA9IF8udXRpbC50eXBlKG8uYWxpYXMpID09PSBcIkFycmF5XCIgPyBvLmFsaWFzIDogW28uYWxpYXNdO1xuICAgICAgQXJyYXkucHJvdG90eXBlLnB1c2guYXBwbHkoZW52LmNsYXNzZXMsIGFsaWFzZXMpO1xuICAgIH1cblxuICAgIHZhciBhdHRyaWJ1dGVzID0gT2JqZWN0LmtleXMoZW52LmF0dHJpYnV0ZXMpLm1hcChmdW5jdGlvbiAobmFtZSkge1xuICAgICAgcmV0dXJuIG5hbWUgKyAnPVwiJyArIChlbnYuYXR0cmlidXRlc1tuYW1lXSB8fCBcIlwiKS5yZXBsYWNlKC9cIi9nLCBcIiZxdW90O1wiKSArICdcIic7XG4gICAgfSkuam9pbihcIiBcIik7XG4gICAgcmV0dXJuIFwiPFwiICsgZW52LnRhZyArICcgY2xhc3M9XCInICsgZW52LmNsYXNzZXMuam9pbihcIiBcIikgKyAnXCInICsgKGF0dHJpYnV0ZXMgPyBcIiBcIiArIGF0dHJpYnV0ZXMgOiBcIlwiKSArIFwiPlwiICsgZW52LmNvbnRlbnQgKyBcIjwvXCIgKyBlbnYudGFnICsgXCI+XCI7XG4gIH07XG5cbiAgcmV0dXJuIF87XG59KCk7XG5cbi8qIFRoaXMgY29udGVudCBpcyBhdXRvLWdlbmVyYXRlZCB0byBpbmNsdWRlIHNvbWUgcHJpc21qcyBsYW5ndWFnZSBjb21wb25lbnRzOiAqL1xuXG4vKiBcInByaXNtanMvY29tcG9uZW50cy9wcmlzbS1tYXJrdXBcIiAqL1xuXG5QcmlzbS5sYW5ndWFnZXMubWFya3VwID0ge1xuICAnY29tbWVudCc6IC88IS0tW1xcc1xcU10qPy0tPi8sXG4gICdwcm9sb2cnOiAvPFxcP1tcXHNcXFNdKz9cXD8+LyxcbiAgJ2RvY3R5cGUnOiB7XG4gICAgLy8gaHR0cHM6Ly93d3cudzMub3JnL1RSL3htbC8jTlQtZG9jdHlwZWRlY2xcbiAgICBwYXR0ZXJuOiAvPCFET0NUWVBFKD86W14+XCInW1xcXV18XCJbXlwiXSpcInwnW14nXSonKSsoPzpcXFsoPzpbXjxcIidcXF1dfFwiW15cIl0qXCJ8J1teJ10qJ3w8KD8hIS0tKXw8IS0tKD86W14tXXwtKD8hLT4pKSotLT4pKlxcXVxccyopPz4vaSxcbiAgICBncmVlZHk6IHRydWUsXG4gICAgaW5zaWRlOiB7XG4gICAgICAnaW50ZXJuYWwtc3Vic2V0Jzoge1xuICAgICAgICBwYXR0ZXJuOiAvKFxcWylbXFxzXFxTXSsoPz1cXF0+JCkvLFxuICAgICAgICBsb29rYmVoaW5kOiB0cnVlLFxuICAgICAgICBncmVlZHk6IHRydWUsXG4gICAgICAgIGluc2lkZTogbnVsbCAvLyBzZWUgYmVsb3dcblxuICAgICAgfSxcbiAgICAgICdzdHJpbmcnOiB7XG4gICAgICAgIHBhdHRlcm46IC9cIlteXCJdKlwifCdbXiddKicvLFxuICAgICAgICBncmVlZHk6IHRydWVcbiAgICAgIH0sXG4gICAgICAncHVuY3R1YXRpb24nOiAvXjwhfD4kfFtbXFxdXS8sXG4gICAgICAnZG9jdHlwZS10YWcnOiAvXkRPQ1RZUEUvLFxuICAgICAgJ25hbWUnOiAvW15cXHM8PidcIl0rL1xuICAgIH1cbiAgfSxcbiAgJ2NkYXRhJzogLzwhXFxbQ0RBVEFcXFtbXFxzXFxTXSo/XV0+L2ksXG4gICd0YWcnOiB7XG4gICAgcGF0dGVybjogLzxcXC8/KD8hXFxkKVteXFxzPlxcLz0kPCVdKyg/Olxccyg/OlxccypbXlxccz5cXC89XSsoPzpcXHMqPVxccyooPzpcIlteXCJdKlwifCdbXiddKid8W15cXHMnXCI+PV0rKD89W1xccz5dKSl8KD89W1xccy8+XSkpKSspP1xccypcXC8/Pi8sXG4gICAgZ3JlZWR5OiB0cnVlLFxuICAgIGluc2lkZToge1xuICAgICAgJ3RhZyc6IHtcbiAgICAgICAgcGF0dGVybjogL148XFwvP1teXFxzPlxcL10rLyxcbiAgICAgICAgaW5zaWRlOiB7XG4gICAgICAgICAgJ3B1bmN0dWF0aW9uJzogL148XFwvPy8sXG4gICAgICAgICAgJ25hbWVzcGFjZSc6IC9eW15cXHM+XFwvOl0rOi9cbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgICdhdHRyLXZhbHVlJzoge1xuICAgICAgICBwYXR0ZXJuOiAvPVxccyooPzpcIlteXCJdKlwifCdbXiddKid8W15cXHMnXCI+PV0rKS8sXG4gICAgICAgIGluc2lkZToge1xuICAgICAgICAgICdwdW5jdHVhdGlvbic6IFt7XG4gICAgICAgICAgICBwYXR0ZXJuOiAvXj0vLFxuICAgICAgICAgICAgYWxpYXM6ICdhdHRyLWVxdWFscydcbiAgICAgICAgICB9LCAvXCJ8Jy9dXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICAncHVuY3R1YXRpb24nOiAvXFwvPz4vLFxuICAgICAgJ2F0dHItbmFtZSc6IHtcbiAgICAgICAgcGF0dGVybjogL1teXFxzPlxcL10rLyxcbiAgICAgICAgaW5zaWRlOiB7XG4gICAgICAgICAgJ25hbWVzcGFjZSc6IC9eW15cXHM+XFwvOl0rOi9cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfSxcbiAgJ2VudGl0eSc6IFt7XG4gICAgcGF0dGVybjogLyZbXFxkYS16XXsxLDh9Oy9pLFxuICAgIGFsaWFzOiAnbmFtZWQtZW50aXR5J1xuICB9LCAvJiN4P1tcXGRhLWZdezEsOH07L2ldXG59O1xuUHJpc20ubGFuZ3VhZ2VzLm1hcmt1cFsndGFnJ10uaW5zaWRlWydhdHRyLXZhbHVlJ10uaW5zaWRlWydlbnRpdHknXSA9IFByaXNtLmxhbmd1YWdlcy5tYXJrdXBbJ2VudGl0eSddO1xuUHJpc20ubGFuZ3VhZ2VzLm1hcmt1cFsnZG9jdHlwZSddLmluc2lkZVsnaW50ZXJuYWwtc3Vic2V0J10uaW5zaWRlID0gUHJpc20ubGFuZ3VhZ2VzLm1hcmt1cDsgLy8gUGx1Z2luIHRvIG1ha2UgZW50aXR5IHRpdGxlIHNob3cgdGhlIHJlYWwgZW50aXR5LCBpZGVhIGJ5IFJvbWFuIEtvbWFyb3ZcblxuUHJpc20uaG9va3MuYWRkKCd3cmFwJywgZnVuY3Rpb24gKGVudikge1xuICBpZiAoZW52LnR5cGUgPT09ICdlbnRpdHknKSB7XG4gICAgZW52LmF0dHJpYnV0ZXNbJ3RpdGxlJ10gPSBlbnYuY29udGVudC5yZXBsYWNlKC8mYW1wOy8sICcmJyk7XG4gIH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KFByaXNtLmxhbmd1YWdlcy5tYXJrdXAudGFnLCAnYWRkSW5saW5lZCcsIHtcbiAgLyoqXG4gICAqIEFkZHMgYW4gaW5saW5lZCBsYW5ndWFnZSB0byBtYXJrdXAuXG4gICAqXG4gICAqIEFuIGV4YW1wbGUgb2YgYW4gaW5saW5lZCBsYW5ndWFnZSBpcyBDU1Mgd2l0aCBgPHN0eWxlPmAgdGFncy5cbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IHRhZ05hbWUgVGhlIG5hbWUgb2YgdGhlIHRhZyB0aGF0IGNvbnRhaW5zIHRoZSBpbmxpbmVkIGxhbmd1YWdlLiBUaGlzIG5hbWUgd2lsbCBiZSB0cmVhdGVkIGFzXG4gICAqIGNhc2UgaW5zZW5zaXRpdmUuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBsYW5nIFRoZSBsYW5ndWFnZSBrZXkuXG4gICAqIEBleGFtcGxlXG4gICAqIGFkZElubGluZWQoJ3N0eWxlJywgJ2NzcycpO1xuICAgKi9cbiAgdmFsdWU6IGZ1bmN0aW9uIGFkZElubGluZWQodGFnTmFtZSwgbGFuZykge1xuICAgIHZhciBpbmNsdWRlZENkYXRhSW5zaWRlID0ge307XG4gICAgaW5jbHVkZWRDZGF0YUluc2lkZVsnbGFuZ3VhZ2UtJyArIGxhbmddID0ge1xuICAgICAgcGF0dGVybjogLyhePCFcXFtDREFUQVxcWylbXFxzXFxTXSs/KD89XFxdXFxdPiQpL2ksXG4gICAgICBsb29rYmVoaW5kOiB0cnVlLFxuICAgICAgaW5zaWRlOiBQcmlzbS5sYW5ndWFnZXNbbGFuZ11cbiAgICB9O1xuICAgIGluY2x1ZGVkQ2RhdGFJbnNpZGVbJ2NkYXRhJ10gPSAvXjwhXFxbQ0RBVEFcXFt8XFxdXFxdPiQvaTtcbiAgICB2YXIgaW5zaWRlID0ge1xuICAgICAgJ2luY2x1ZGVkLWNkYXRhJzoge1xuICAgICAgICBwYXR0ZXJuOiAvPCFcXFtDREFUQVxcW1tcXHNcXFNdKj9cXF1cXF0+L2ksXG4gICAgICAgIGluc2lkZTogaW5jbHVkZWRDZGF0YUluc2lkZVxuICAgICAgfVxuICAgIH07XG4gICAgaW5zaWRlWydsYW5ndWFnZS0nICsgbGFuZ10gPSB7XG4gICAgICBwYXR0ZXJuOiAvW1xcc1xcU10rLyxcbiAgICAgIGluc2lkZTogUHJpc20ubGFuZ3VhZ2VzW2xhbmddXG4gICAgfTtcbiAgICB2YXIgZGVmID0ge307XG4gICAgZGVmW3RhZ05hbWVdID0ge1xuICAgICAgcGF0dGVybjogUmVnRXhwKC8oPF9fW14+XSo+KSg/OjwhXFxbQ0RBVEFcXFsoPzpbXlxcXV18XFxdKD8hXFxdPikpKlxcXVxcXT58KD8hPCFcXFtDREFUQVxcWylbXFxzXFxTXSkqPyg/PTxcXC9fXz4pLy5zb3VyY2UucmVwbGFjZSgvX18vZywgZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGFnTmFtZTtcbiAgICAgIH0pLCAnaScpLFxuICAgICAgbG9va2JlaGluZDogdHJ1ZSxcbiAgICAgIGdyZWVkeTogdHJ1ZSxcbiAgICAgIGluc2lkZTogaW5zaWRlXG4gICAgfTtcbiAgICBQcmlzbS5sYW5ndWFnZXMuaW5zZXJ0QmVmb3JlKCdtYXJrdXAnLCAnY2RhdGEnLCBkZWYpO1xuICB9XG59KTtcblByaXNtLmxhbmd1YWdlcy5odG1sID0gUHJpc20ubGFuZ3VhZ2VzLm1hcmt1cDtcblByaXNtLmxhbmd1YWdlcy5tYXRobWwgPSBQcmlzbS5sYW5ndWFnZXMubWFya3VwO1xuUHJpc20ubGFuZ3VhZ2VzLnN2ZyA9IFByaXNtLmxhbmd1YWdlcy5tYXJrdXA7XG5QcmlzbS5sYW5ndWFnZXMueG1sID0gUHJpc20ubGFuZ3VhZ2VzLmV4dGVuZCgnbWFya3VwJywge30pO1xuUHJpc20ubGFuZ3VhZ2VzLnNzbWwgPSBQcmlzbS5sYW5ndWFnZXMueG1sO1xuUHJpc20ubGFuZ3VhZ2VzLmF0b20gPSBQcmlzbS5sYW5ndWFnZXMueG1sO1xuUHJpc20ubGFuZ3VhZ2VzLnJzcyA9IFByaXNtLmxhbmd1YWdlcy54bWw7XG4vKiBcInByaXNtanMvY29tcG9uZW50cy9wcmlzbS1iYXNoXCIgKi9cblxuKGZ1bmN0aW9uIChQcmlzbSkge1xuICAvLyAkIHNldCB8IGdyZXAgJ15bQS1aXVteWzpzcGFjZTpdXSo9JyB8IGN1dCAtZD0gLWYxIHwgdHIgJ1xcbicgJ3wnXG4gIC8vICsgTENfQUxMLCBSQU5ET00sIFJFUExZLCBTRUNPTkRTLlxuICAvLyArIG1ha2Ugc3VyZSBQUzEuLjQgYXJlIGhlcmUgYXMgdGhleSBhcmUgbm90IGFsd2F5cyBzZXQsXG4gIC8vIC0gc29tZSB1c2VsZXNzIHRoaW5ncy5cbiAgdmFyIGVudlZhcnMgPSAnXFxcXGIoPzpCQVNIfEJBU0hPUFRTfEJBU0hfQUxJQVNFU3xCQVNIX0FSR0N8QkFTSF9BUkdWfEJBU0hfQ01EU3xCQVNIX0NPTVBMRVRJT05fQ09NUEFUX0RJUnxCQVNIX0xJTkVOT3xCQVNIX1JFTUFUQ0h8QkFTSF9TT1VSQ0V8QkFTSF9WRVJTSU5GT3xCQVNIX1ZFUlNJT058Q09MT1JURVJNfENPTFVNTlN8Q09NUF9XT1JEQlJFQUtTfERCVVNfU0VTU0lPTl9CVVNfQUREUkVTU3xERUZBVUxUU19QQVRIfERFU0tUT1BfU0VTU0lPTnxESVJTVEFDS3xESVNQTEFZfEVVSUR8R0RNU0VTU0lPTnxHRE1fTEFOR3xHTk9NRV9LRVlSSU5HX0NPTlRST0x8R05PTUVfS0VZUklOR19QSUR8R1BHX0FHRU5UX0lORk98R1JPVVBTfEhJU1RDT05UUk9MfEhJU1RGSUxFfEhJU1RGSUxFU0laRXxISVNUU0laRXxIT01FfEhPU1ROQU1FfEhPU1RUWVBFfElGU3xJTlNUQU5DRXxKT0J8TEFOR3xMQU5HVUFHRXxMQ19BRERSRVNTfExDX0FMTHxMQ19JREVOVElGSUNBVElPTnxMQ19NRUFTVVJFTUVOVHxMQ19NT05FVEFSWXxMQ19OQU1FfExDX05VTUVSSUN8TENfUEFQRVJ8TENfVEVMRVBIT05FfExDX1RJTUV8TEVTU0NMT1NFfExFU1NPUEVOfExJTkVTfExPR05BTUV8TFNfQ09MT1JTfE1BQ0hUWVBFfE1BSUxDSEVDS3xNQU5EQVRPUllfUEFUSHxOT19BVF9CUklER0V8T0xEUFdEfE9QVEVSUnxPUFRJTkR8T1JCSVRfU09DS0VURElSfE9TVFlQRXxQQVBFUlNJWkV8UEFUSHxQSVBFU1RBVFVTfFBQSUR8UFMxfFBTMnxQUzN8UFM0fFBXRHxSQU5ET018UkVQTFl8U0VDT05EU3xTRUxJTlVYX0lOSVR8U0VTU0lPTnxTRVNTSU9OVFlQRXxTRVNTSU9OX01BTkFHRVJ8U0hFTEx8U0hFTExPUFRTfFNITFZMfFNTSF9BVVRIX1NPQ0t8VEVSTXxVSUR8VVBTVEFSVF9FVkVOVFN8VVBTVEFSVF9JTlNUQU5DRXxVUFNUQVJUX0pPQnxVUFNUQVJUX1NFU1NJT058VVNFUnxXSU5ET1dJRHxYQVVUSE9SSVRZfFhER19DT05GSUdfRElSU3xYREdfQ1VSUkVOVF9ERVNLVE9QfFhER19EQVRBX0RJUlN8WERHX0dSRUVURVJfREFUQV9ESVJ8WERHX01FTlVfUFJFRklYfFhER19SVU5USU1FX0RJUnxYREdfU0VBVHxYREdfU0VBVF9QQVRIfFhER19TRVNTSU9OX0RFU0tUT1B8WERHX1NFU1NJT05fSUR8WERHX1NFU1NJT05fUEFUSHxYREdfU0VTU0lPTl9UWVBFfFhER19WVE5SfFhNT0RJRklFUlMpXFxcXGInO1xuICB2YXIgY29tbWFuZEFmdGVySGVyZWRvYyA9IHtcbiAgICBwYXR0ZXJuOiAvKF4oW1wiJ10/KVxcdytcXDIpWyBcXHRdK1xcUy4qLyxcbiAgICBsb29rYmVoaW5kOiB0cnVlLFxuICAgIGFsaWFzOiAncHVuY3R1YXRpb24nLFxuICAgIC8vIHRoaXMgbG9va3MgcmVhc29uYWJseSB3ZWxsIGluIGFsbCB0aGVtZXNcbiAgICBpbnNpZGU6IG51bGwgLy8gc2VlIGJlbG93XG5cbiAgfTtcbiAgdmFyIGluc2lkZVN0cmluZyA9IHtcbiAgICAnYmFzaCc6IGNvbW1hbmRBZnRlckhlcmVkb2MsXG4gICAgJ2Vudmlyb25tZW50Jzoge1xuICAgICAgcGF0dGVybjogUmVnRXhwKFwiXFxcXCRcIiArIGVudlZhcnMpLFxuICAgICAgYWxpYXM6ICdjb25zdGFudCdcbiAgICB9LFxuICAgICd2YXJpYWJsZSc6IFsvLyBbMF06IEFyaXRobWV0aWMgRW52aXJvbm1lbnRcbiAgICB7XG4gICAgICBwYXR0ZXJuOiAvXFwkP1xcKFxcKFtcXHNcXFNdKz9cXClcXCkvLFxuICAgICAgZ3JlZWR5OiB0cnVlLFxuICAgICAgaW5zaWRlOiB7XG4gICAgICAgIC8vIElmIHRoZXJlIGlzIGEgJCBzaWduIGF0IHRoZSBiZWdpbm5pbmcgaGlnaGxpZ2h0ICQoKCBhbmQgKSkgYXMgdmFyaWFibGVcbiAgICAgICAgJ3ZhcmlhYmxlJzogW3tcbiAgICAgICAgICBwYXR0ZXJuOiAvKF5cXCRcXChcXChbXFxzXFxTXSspXFwpXFwpLyxcbiAgICAgICAgICBsb29rYmVoaW5kOiB0cnVlXG4gICAgICAgIH0sIC9eXFwkXFwoXFwoL10sXG4gICAgICAgICdudW1iZXInOiAvXFxiMHhbXFxkQS1GYS1mXStcXGJ8KD86XFxiXFxkKyg/OlxcLlxcZCopP3xcXEJcXC5cXGQrKSg/OltFZV0tP1xcZCspPy8sXG4gICAgICAgIC8vIE9wZXJhdG9ycyBhY2NvcmRpbmcgdG8gaHR0cHM6Ly93d3cuZ251Lm9yZy9zb2Z0d2FyZS9iYXNoL21hbnVhbC9iYXNocmVmLmh0bWwjU2hlbGwtQXJpdGhtZXRpY1xuICAgICAgICAnb3BlcmF0b3InOiAvLS0/fC09fFxcK1xcKz98XFwrPXwhPT98fnxcXCpcXCo/fFxcKj18XFwvPT98JT0/fDw8PT98Pj49P3w8PT98Pj0/fD09P3wmJj98Jj18XFxePT98XFx8XFx8P3xcXHw9fFxcP3w6LyxcbiAgICAgICAgLy8gSWYgdGhlcmUgaXMgbm8gJCBzaWduIGF0IHRoZSBiZWdpbm5pbmcgaGlnaGxpZ2h0ICgoIGFuZCApKSBhcyBwdW5jdHVhdGlvblxuICAgICAgICAncHVuY3R1YXRpb24nOiAvXFwoXFwoP3xcXClcXCk/fCx8Oy9cbiAgICAgIH1cbiAgICB9LCAvLyBbMV06IENvbW1hbmQgU3Vic3RpdHV0aW9uXG4gICAge1xuICAgICAgcGF0dGVybjogL1xcJFxcKCg/OlxcKFteKV0rXFwpfFteKCldKStcXCl8YFteYF0rYC8sXG4gICAgICBncmVlZHk6IHRydWUsXG4gICAgICBpbnNpZGU6IHtcbiAgICAgICAgJ3ZhcmlhYmxlJzogL15cXCRcXCh8XmB8XFwpJHxgJC9cbiAgICAgIH1cbiAgICB9LCAvLyBbMl06IEJyYWNlIGV4cGFuc2lvblxuICAgIHtcbiAgICAgIHBhdHRlcm46IC9cXCRcXHtbXn1dK1xcfS8sXG4gICAgICBncmVlZHk6IHRydWUsXG4gICAgICBpbnNpZGU6IHtcbiAgICAgICAgJ29wZXJhdG9yJzogLzpbLT0/K10/fFshXFwvXXwjIz98JSU/fFxcXlxcXj98LCw/LyxcbiAgICAgICAgJ3B1bmN0dWF0aW9uJzogL1tcXFtcXF1dLyxcbiAgICAgICAgJ2Vudmlyb25tZW50Jzoge1xuICAgICAgICAgIHBhdHRlcm46IFJlZ0V4cChcIihcXFxceylcIiArIGVudlZhcnMpLFxuICAgICAgICAgIGxvb2tiZWhpbmQ6IHRydWUsXG4gICAgICAgICAgYWxpYXM6ICdjb25zdGFudCdcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sIC9cXCQoPzpcXHcrfFsjPyohQCRdKS9dLFxuICAgIC8vIEVzY2FwZSBzZXF1ZW5jZXMgZnJvbSBlY2hvIGFuZCBwcmludGYncyBtYW51YWxzLCBhbmQgZXNjYXBlZCBxdW90ZXMuXG4gICAgJ2VudGl0eSc6IC9cXFxcKD86W2FiY2VFZm5ydHZcXFxcXCJdfE8/WzAtN117MSwzfXx4WzAtOWEtZkEtRl17MSwyfXx1WzAtOWEtZkEtRl17NH18VVswLTlhLWZBLUZdezh9KS9cbiAgfTtcbiAgUHJpc20ubGFuZ3VhZ2VzLmJhc2ggPSB7XG4gICAgJ3NoZWJhbmcnOiB7XG4gICAgICBwYXR0ZXJuOiAvXiMhXFxzKlxcLy4qLyxcbiAgICAgIGFsaWFzOiAnaW1wb3J0YW50J1xuICAgIH0sXG4gICAgJ2NvbW1lbnQnOiB7XG4gICAgICBwYXR0ZXJuOiAvKF58W15cIntcXFxcJF0pIy4qLyxcbiAgICAgIGxvb2tiZWhpbmQ6IHRydWVcbiAgICB9LFxuICAgICdmdW5jdGlvbi1uYW1lJzogWy8vIGEpIGZ1bmN0aW9uIGZvbyB7XG4gICAgLy8gYikgZm9vKCkge1xuICAgIC8vIGMpIGZ1bmN0aW9uIGZvbygpIHtcbiAgICAvLyBidXQgbm90IOKAnGZvbyB74oCdXG4gICAge1xuICAgICAgLy8gYSkgYW5kIGMpXG4gICAgICBwYXR0ZXJuOiAvKFxcYmZ1bmN0aW9uXFxzKylcXHcrKD89KD86XFxzKlxcKD86XFxzKlxcKSk/XFxzKlxceykvLFxuICAgICAgbG9va2JlaGluZDogdHJ1ZSxcbiAgICAgIGFsaWFzOiAnZnVuY3Rpb24nXG4gICAgfSwge1xuICAgICAgLy8gYilcbiAgICAgIHBhdHRlcm46IC9cXGJcXHcrKD89XFxzKlxcKFxccypcXClcXHMqXFx7KS8sXG4gICAgICBhbGlhczogJ2Z1bmN0aW9uJ1xuICAgIH1dLFxuICAgIC8vIEhpZ2hsaWdodCB2YXJpYWJsZSBuYW1lcyBhcyB2YXJpYWJsZXMgaW4gZm9yIGFuZCBzZWxlY3QgYmVnaW5uaW5ncy5cbiAgICAnZm9yLW9yLXNlbGVjdCc6IHtcbiAgICAgIHBhdHRlcm46IC8oXFxiKD86Zm9yfHNlbGVjdClcXHMrKVxcdysoPz1cXHMraW5cXHMpLyxcbiAgICAgIGFsaWFzOiAndmFyaWFibGUnLFxuICAgICAgbG9va2JlaGluZDogdHJ1ZVxuICAgIH0sXG4gICAgLy8gSGlnaGxpZ2h0IHZhcmlhYmxlIG5hbWVzIGFzIHZhcmlhYmxlcyBpbiB0aGUgbGVmdC1oYW5kIHBhcnRcbiAgICAvLyBvZiBhc3NpZ25tZW50cyAo4oCcPeKAnSBhbmQg4oCcKz3igJ0pLlxuICAgICdhc3NpZ24tbGVmdCc6IHtcbiAgICAgIHBhdHRlcm46IC8oXnxbXFxzO3wmXXxbPD5dXFwoKVxcdysoPz1cXCs/PSkvLFxuICAgICAgaW5zaWRlOiB7XG4gICAgICAgICdlbnZpcm9ubWVudCc6IHtcbiAgICAgICAgICBwYXR0ZXJuOiBSZWdFeHAoXCIoXnxbXFxcXHM7fCZdfFs8Pl1cXFxcKClcIiArIGVudlZhcnMpLFxuICAgICAgICAgIGxvb2tiZWhpbmQ6IHRydWUsXG4gICAgICAgICAgYWxpYXM6ICdjb25zdGFudCdcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIGFsaWFzOiAndmFyaWFibGUnLFxuICAgICAgbG9va2JlaGluZDogdHJ1ZVxuICAgIH0sXG4gICAgJ3N0cmluZyc6IFsvLyBTdXBwb3J0IGZvciBIZXJlLWRvY3VtZW50cyBodHRwczovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9IZXJlX2RvY3VtZW50XG4gICAge1xuICAgICAgcGF0dGVybjogLygoPzpefFtePF0pPDwtP1xccyopKFxcdys/KVxcc1tcXHNcXFNdKj8oPzpcXHI/XFxufFxccilcXDIvLFxuICAgICAgbG9va2JlaGluZDogdHJ1ZSxcbiAgICAgIGdyZWVkeTogdHJ1ZSxcbiAgICAgIGluc2lkZTogaW5zaWRlU3RyaW5nXG4gICAgfSwgLy8gSGVyZS1kb2N1bWVudCB3aXRoIHF1b3RlcyBhcm91bmQgdGhlIHRhZ1xuICAgIC8vIOKGkiBObyBleHBhbnNpb24gKHNvIG5vIOKAnGluc2lkZeKAnSkuXG4gICAge1xuICAgICAgcGF0dGVybjogLygoPzpefFtePF0pPDwtP1xccyopKFtcIiddKShcXHcrKVxcMlxcc1tcXHNcXFNdKj8oPzpcXHI/XFxufFxccilcXDMvLFxuICAgICAgbG9va2JlaGluZDogdHJ1ZSxcbiAgICAgIGdyZWVkeTogdHJ1ZSxcbiAgICAgIGluc2lkZToge1xuICAgICAgICAnYmFzaCc6IGNvbW1hbmRBZnRlckhlcmVkb2NcbiAgICAgIH1cbiAgICB9LCAvLyDigJxOb3JtYWzigJ0gc3RyaW5nXG4gICAge1xuICAgICAgcGF0dGVybjogLyhefFteXFxcXF0oPzpcXFxcXFxcXCkqKShbXCInXSkoPzpcXFxcW1xcc1xcU118XFwkXFwoW14pXStcXCl8XFwkKD8hXFwoKXxgW15gXStgfCg/IVxcMilbXlxcXFxgJF0pKlxcMi8sXG4gICAgICBsb29rYmVoaW5kOiB0cnVlLFxuICAgICAgZ3JlZWR5OiB0cnVlLFxuICAgICAgaW5zaWRlOiBpbnNpZGVTdHJpbmdcbiAgICB9XSxcbiAgICAnZW52aXJvbm1lbnQnOiB7XG4gICAgICBwYXR0ZXJuOiBSZWdFeHAoXCJcXFxcJD9cIiArIGVudlZhcnMpLFxuICAgICAgYWxpYXM6ICdjb25zdGFudCdcbiAgICB9LFxuICAgICd2YXJpYWJsZSc6IGluc2lkZVN0cmluZy52YXJpYWJsZSxcbiAgICAnZnVuY3Rpb24nOiB7XG4gICAgICBwYXR0ZXJuOiAvKF58W1xcczt8Jl18Wzw+XVxcKCkoPzphZGR8YXByb3Bvc3xhcHR8YXB0aXR1ZGV8YXB0LWNhY2hlfGFwdC1nZXR8YXNwZWxsfGF1dG9teXNxbGJhY2t1cHxhd2t8YmFzZW5hbWV8YmFzaHxiY3xiY29uc29sZXxiZ3xiemlwMnxjYWx8Y2F0fGNmZGlza3xjaGdycHxjaGtjb25maWd8Y2htb2R8Y2hvd258Y2hyb290fGNrc3VtfGNsZWFyfGNtcHxjb2x1bW58Y29tbXxjb21wb3NlcnxjcHxjcm9ufGNyb250YWJ8Y3NwbGl0fGN1cmx8Y3V0fGRhdGV8ZGN8ZGR8ZGRyZXNjdWV8ZGVib290c3RyYXB8ZGZ8ZGlmZnxkaWZmM3xkaWd8ZGlyfGRpcmNvbG9yc3xkaXJuYW1lfGRpcnN8ZG1lc2d8ZHV8ZWdyZXB8ZWplY3R8ZW52fGV0aHRvb2x8ZXhwYW5kfGV4cGVjdHxleHByfGZkZm9ybWF0fGZkaXNrfGZnfGZncmVwfGZpbGV8ZmluZHxmbXR8Zm9sZHxmb3JtYXR8ZnJlZXxmc2NrfGZ0cHxmdXNlcnxnYXdrfGdpdHxncGFydGVkfGdyZXB8Z3JvdXBhZGR8Z3JvdXBkZWx8Z3JvdXBtb2R8Z3JvdXBzfGdydWItbWtjb25maWd8Z3ppcHxoYWx0fGhlYWR8aGd8aGlzdG9yeXxob3N0fGhvc3RuYW1lfGh0b3B8aWNvbnZ8aWR8aWZjb25maWd8aWZkb3dufGlmdXB8aW1wb3J0fGluc3RhbGx8aXB8am9ic3xqb2lufGtpbGx8a2lsbGFsbHxsZXNzfGxpbmt8bG58bG9jYXRlfGxvZ25hbWV8bG9ncm90YXRlfGxvb2t8bHBjfGxwcnxscHJpbnR8bHByaW50ZHxscHJpbnRxfGxwcm18bHN8bHNvZnxseW54fG1ha2V8bWFufG1jfG1kYWRtfG1rY29uZmlnfG1rZGlyfG1rZTJmc3xta2ZpZm98bWtmc3xta2lzb2ZzfG1rbm9kfG1rc3dhcHxtbXZ8bW9yZXxtb3N0fG1vdW50fG10b29sc3xtdHJ8bXV0dHxtdnxuYW5vfG5jfG5ldHN0YXR8bmljZXxubHxub2h1cHxub3RpZnktc2VuZHxucG18bnNsb29rdXB8b3B8b3BlbnxwYXJ0ZWR8cGFzc3dkfHBhc3RlfHBhdGhjaGt8cGluZ3xwa2lsbHxwbnBtfHBvcGR8cHJ8cHJpbnRjYXB8cHJpbnRlbnZ8cHN8cHVzaGR8cHZ8cXVvdGF8cXVvdGFjaGVja3xxdW90YWN0bHxyYW18cmFyfHJjcHxyZWJvb3R8cmVtc3luY3xyZW5hbWV8cmVuaWNlfHJldnxybXxybWRpcnxycG18cnN5bmN8c2NwfHNjcmVlbnxzZGlmZnxzZWR8c2VuZG1haWx8c2VxfHNlcnZpY2V8c2Z0cHxzaHxzaGVsbGNoZWNrfHNodWZ8c2h1dGRvd258c2xlZXB8c2xvY2F0ZXxzb3J0fHNwbGl0fHNzaHxzdGF0fHN0cmFjZXxzdXxzdWRvfHN1bXxzdXNwZW5kfHN3YXBvbnxzeW5jfHRhY3x0YWlsfHRhcnx0ZWV8dGltZXx0aW1lb3V0fHRvcHx0b3VjaHx0cnx0cmFjZXJvdXRlfHRzb3J0fHR0eXx1bW91bnR8dW5hbWV8dW5leHBhbmR8dW5pcXx1bml0c3x1bnJhcnx1bnNoYXJ8dW56aXB8dXBkYXRlLWdydWJ8dXB0aW1lfHVzZXJhZGR8dXNlcmRlbHx1c2VybW9kfHVzZXJzfHV1ZGVjb2RlfHV1ZW5jb2RlfHZ8dmRpcnx2aXx2aW18dmlyc2h8dm1zdGF0fHdhaXR8d2F0Y2h8d2N8d2dldHx3aGVyZWlzfHdoaWNofHdob3x3aG9hbWl8d3JpdGV8eGFyZ3N8eGRnLW9wZW58eWFybnx5ZXN8emVuaXR5fHppcHx6c2h8enlwcGVyKSg/PSR8WylcXHM7fCZdKS8sXG4gICAgICBsb29rYmVoaW5kOiB0cnVlXG4gICAgfSxcbiAgICAna2V5d29yZCc6IHtcbiAgICAgIHBhdHRlcm46IC8oXnxbXFxzO3wmXXxbPD5dXFwoKSg/OmlmfHRoZW58ZWxzZXxlbGlmfGZpfGZvcnx3aGlsZXxpbnxjYXNlfGVzYWN8ZnVuY3Rpb258c2VsZWN0fGRvfGRvbmV8dW50aWwpKD89JHxbKVxcczt8Jl0pLyxcbiAgICAgIGxvb2tiZWhpbmQ6IHRydWVcbiAgICB9LFxuICAgIC8vIGh0dHBzOi8vd3d3LmdudS5vcmcvc29mdHdhcmUvYmFzaC9tYW51YWwvaHRtbF9ub2RlL1NoZWxsLUJ1aWx0aW4tQ29tbWFuZHMuaHRtbFxuICAgICdidWlsdGluJzoge1xuICAgICAgcGF0dGVybjogLyhefFtcXHM7fCZdfFs8Pl1cXCgpKD86XFwufDp8YnJlYWt8Y2R8Y29udGludWV8ZXZhbHxleGVjfGV4aXR8ZXhwb3J0fGdldG9wdHN8aGFzaHxwd2R8cmVhZG9ubHl8cmV0dXJufHNoaWZ0fHRlc3R8dGltZXN8dHJhcHx1bWFza3x1bnNldHxhbGlhc3xiaW5kfGJ1aWx0aW58Y2FsbGVyfGNvbW1hbmR8ZGVjbGFyZXxlY2hvfGVuYWJsZXxoZWxwfGxldHxsb2NhbHxsb2dvdXR8bWFwZmlsZXxwcmludGZ8cmVhZHxyZWFkYXJyYXl8c291cmNlfHR5cGV8dHlwZXNldHx1bGltaXR8dW5hbGlhc3xzZXR8c2hvcHQpKD89JHxbKVxcczt8Jl0pLyxcbiAgICAgIGxvb2tiZWhpbmQ6IHRydWUsXG4gICAgICAvLyBBbGlhcyBhZGRlZCB0byBtYWtlIHRob3NlIGVhc2llciB0byBkaXN0aW5ndWlzaCBmcm9tIHN0cmluZ3MuXG4gICAgICBhbGlhczogJ2NsYXNzLW5hbWUnXG4gICAgfSxcbiAgICAnYm9vbGVhbic6IHtcbiAgICAgIHBhdHRlcm46IC8oXnxbXFxzO3wmXXxbPD5dXFwoKSg/OnRydWV8ZmFsc2UpKD89JHxbKVxcczt8Jl0pLyxcbiAgICAgIGxvb2tiZWhpbmQ6IHRydWVcbiAgICB9LFxuICAgICdmaWxlLWRlc2NyaXB0b3InOiB7XG4gICAgICBwYXR0ZXJuOiAvXFxCJlxcZFxcYi8sXG4gICAgICBhbGlhczogJ2ltcG9ydGFudCdcbiAgICB9LFxuICAgICdvcGVyYXRvcic6IHtcbiAgICAgIC8vIExvdHMgb2YgcmVkaXJlY3Rpb25zIGhlcmUsIGJ1dCBub3QganVzdCB0aGF0LlxuICAgICAgcGF0dGVybjogL1xcZD88Pnw+XFx8fFxcKz18PT0/fCE9P3w9fnw8PFs8LV0/fFsmXFxkXT8+PnxcXGQ/Wzw+XSY/fCZbPiZdP3xcXHxbJnxdP3w8PT98Pj0/LyxcbiAgICAgIGluc2lkZToge1xuICAgICAgICAnZmlsZS1kZXNjcmlwdG9yJzoge1xuICAgICAgICAgIHBhdHRlcm46IC9eXFxkLyxcbiAgICAgICAgICBhbGlhczogJ2ltcG9ydGFudCdcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG4gICAgJ3B1bmN0dWF0aW9uJzogL1xcJD9cXChcXCg/fFxcKVxcKT98XFwuXFwufFt7fVtcXF07XFxcXF0vLFxuICAgICdudW1iZXInOiB7XG4gICAgICBwYXR0ZXJuOiAvKF58XFxzKSg/OlsxLTldXFxkKnwwKSg/OlsuLF1cXGQrKT9cXGIvLFxuICAgICAgbG9va2JlaGluZDogdHJ1ZVxuICAgIH1cbiAgfTtcbiAgY29tbWFuZEFmdGVySGVyZWRvYy5pbnNpZGUgPSBQcmlzbS5sYW5ndWFnZXMuYmFzaDtcbiAgLyogUGF0dGVybnMgaW4gY29tbWFuZCBzdWJzdGl0dXRpb24uICovXG5cbiAgdmFyIHRvQmVDb3BpZWQgPSBbJ2NvbW1lbnQnLCAnZnVuY3Rpb24tbmFtZScsICdmb3Itb3Itc2VsZWN0JywgJ2Fzc2lnbi1sZWZ0JywgJ3N0cmluZycsICdlbnZpcm9ubWVudCcsICdmdW5jdGlvbicsICdrZXl3b3JkJywgJ2J1aWx0aW4nLCAnYm9vbGVhbicsICdmaWxlLWRlc2NyaXB0b3InLCAnb3BlcmF0b3InLCAncHVuY3R1YXRpb24nLCAnbnVtYmVyJ107XG4gIHZhciBpbnNpZGUgPSBpbnNpZGVTdHJpbmcudmFyaWFibGVbMV0uaW5zaWRlO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgdG9CZUNvcGllZC5sZW5ndGg7IGkrKykge1xuICAgIGluc2lkZVt0b0JlQ29waWVkW2ldXSA9IFByaXNtLmxhbmd1YWdlcy5iYXNoW3RvQmVDb3BpZWRbaV1dO1xuICB9XG5cbiAgUHJpc20ubGFuZ3VhZ2VzLnNoZWxsID0gUHJpc20ubGFuZ3VhZ2VzLmJhc2g7XG59KShQcmlzbSk7XG4vKiBcInByaXNtanMvY29tcG9uZW50cy9wcmlzbS1jbGlrZVwiICovXG5cblxuUHJpc20ubGFuZ3VhZ2VzLmNsaWtlID0ge1xuICAnY29tbWVudCc6IFt7XG4gICAgcGF0dGVybjogLyhefFteXFxcXF0pXFwvXFwqW1xcc1xcU10qPyg/OlxcKlxcL3wkKS8sXG4gICAgbG9va2JlaGluZDogdHJ1ZSxcbiAgICBncmVlZHk6IHRydWVcbiAgfSwge1xuICAgIHBhdHRlcm46IC8oXnxbXlxcXFw6XSlcXC9cXC8uKi8sXG4gICAgbG9va2JlaGluZDogdHJ1ZSxcbiAgICBncmVlZHk6IHRydWVcbiAgfV0sXG4gICdzdHJpbmcnOiB7XG4gICAgcGF0dGVybjogLyhbXCInXSkoPzpcXFxcKD86XFxyXFxufFtcXHNcXFNdKXwoPyFcXDEpW15cXFxcXFxyXFxuXSkqXFwxLyxcbiAgICBncmVlZHk6IHRydWVcbiAgfSxcbiAgJ2NsYXNzLW5hbWUnOiB7XG4gICAgcGF0dGVybjogLyhcXGIoPzpjbGFzc3xpbnRlcmZhY2V8ZXh0ZW5kc3xpbXBsZW1lbnRzfHRyYWl0fGluc3RhbmNlb2Z8bmV3KVxccyt8XFxiY2F0Y2hcXHMrXFwoKVtcXHcuXFxcXF0rL2ksXG4gICAgbG9va2JlaGluZDogdHJ1ZSxcbiAgICBpbnNpZGU6IHtcbiAgICAgICdwdW5jdHVhdGlvbic6IC9bLlxcXFxdL1xuICAgIH1cbiAgfSxcbiAgJ2tleXdvcmQnOiAvXFxiKD86aWZ8ZWxzZXx3aGlsZXxkb3xmb3J8cmV0dXJufGlufGluc3RhbmNlb2Z8ZnVuY3Rpb258bmV3fHRyeXx0aHJvd3xjYXRjaHxmaW5hbGx5fG51bGx8YnJlYWt8Y29udGludWUpXFxiLyxcbiAgJ2Jvb2xlYW4nOiAvXFxiKD86dHJ1ZXxmYWxzZSlcXGIvLFxuICAnZnVuY3Rpb24nOiAvXFx3Kyg/PVxcKCkvLFxuICAnbnVtYmVyJzogL1xcYjB4W1xcZGEtZl0rXFxifCg/OlxcYlxcZCsoPzpcXC5cXGQqKT98XFxCXFwuXFxkKykoPzplWystXT9cXGQrKT8vaSxcbiAgJ29wZXJhdG9yJzogL1s8Pl09P3xbIT1dPT89P3wtLT98XFwrXFwrP3wmJj98XFx8XFx8P3xbPyovfl4lXS8sXG4gICdwdW5jdHVhdGlvbic6IC9be31bXFxdOygpLC46XS9cbn07XG4vKiBcInByaXNtanMvY29tcG9uZW50cy9wcmlzbS1jXCIgKi9cblxuUHJpc20ubGFuZ3VhZ2VzLmMgPSBQcmlzbS5sYW5ndWFnZXMuZXh0ZW5kKCdjbGlrZScsIHtcbiAgJ2NvbW1lbnQnOiB7XG4gICAgcGF0dGVybjogL1xcL1xcLyg/OlteXFxyXFxuXFxcXF18XFxcXCg/Olxcclxcbj98XFxufCg/IVtcXHJcXG5dKSkpKnxcXC9cXCpbXFxzXFxTXSo/KD86XFwqXFwvfCQpLyxcbiAgICBncmVlZHk6IHRydWVcbiAgfSxcbiAgJ2NsYXNzLW5hbWUnOiB7XG4gICAgcGF0dGVybjogLyhcXGIoPzplbnVtfHN0cnVjdClcXHMrKD86X19hdHRyaWJ1dGVfX1xccypcXChcXChbXFxzXFxTXSo/XFwpXFwpXFxzKik/KVxcdyt8XFxiW2Etel1cXHcqX3RcXGIvLFxuICAgIGxvb2tiZWhpbmQ6IHRydWVcbiAgfSxcbiAgJ2tleXdvcmQnOiAvXFxiKD86X19hdHRyaWJ1dGVfX3xfQWxpZ25hc3xfQWxpZ25vZnxfQXRvbWljfF9Cb29sfF9Db21wbGV4fF9HZW5lcmljfF9JbWFnaW5hcnl8X05vcmV0dXJufF9TdGF0aWNfYXNzZXJ0fF9UaHJlYWRfbG9jYWx8YXNtfHR5cGVvZnxpbmxpbmV8YXV0b3xicmVha3xjYXNlfGNoYXJ8Y29uc3R8Y29udGludWV8ZGVmYXVsdHxkb3xkb3VibGV8ZWxzZXxlbnVtfGV4dGVybnxmbG9hdHxmb3J8Z290b3xpZnxpbnR8bG9uZ3xyZWdpc3RlcnxyZXR1cm58c2hvcnR8c2lnbmVkfHNpemVvZnxzdGF0aWN8c3RydWN0fHN3aXRjaHx0eXBlZGVmfHVuaW9ufHVuc2lnbmVkfHZvaWR8dm9sYXRpbGV8d2hpbGUpXFxiLyxcbiAgJ2Z1bmN0aW9uJzogL1thLXpfXVxcdyooPz1cXHMqXFwoKS9pLFxuICAnbnVtYmVyJzogLyg/OlxcYjB4KD86W1xcZGEtZl0rKD86XFwuW1xcZGEtZl0qKT98XFwuW1xcZGEtZl0rKSg/OnBbKy1dP1xcZCspP3woPzpcXGJcXGQrKD86XFwuXFxkKik/fFxcQlxcLlxcZCspKD86ZVsrLV0/XFxkKyk/KVtmdWxdezAsNH0vaSxcbiAgJ29wZXJhdG9yJzogLz4+PT98PDw9P3wtPnwoWy0rJnw6XSlcXDF8Wz86fl18Wy0rKi8lJnxeIT08Pl09Py9cbn0pO1xuUHJpc20ubGFuZ3VhZ2VzLmluc2VydEJlZm9yZSgnYycsICdzdHJpbmcnLCB7XG4gICdtYWNybyc6IHtcbiAgICAvLyBhbGxvdyBmb3IgbXVsdGlsaW5lIG1hY3JvIGRlZmluaXRpb25zXG4gICAgLy8gc3BhY2VzIGFmdGVyIHRoZSAjIGNoYXJhY3RlciBjb21waWxlIGZpbmUgd2l0aCBnY2NcbiAgICBwYXR0ZXJuOiAvKF5cXHMqKSNcXHMqW2Etel0oPzpbXlxcclxcblxcXFwvXXxcXC8oPyFcXCopfFxcL1xcKig/OlteKl18XFwqKD8hXFwvKSkqXFwqXFwvfFxcXFwoPzpcXHJcXG58W1xcc1xcU10pKSovaW0sXG4gICAgbG9va2JlaGluZDogdHJ1ZSxcbiAgICBncmVlZHk6IHRydWUsXG4gICAgYWxpYXM6ICdwcm9wZXJ0eScsXG4gICAgaW5zaWRlOiB7XG4gICAgICAnc3RyaW5nJzogW3tcbiAgICAgICAgLy8gaGlnaGxpZ2h0IHRoZSBwYXRoIG9mIHRoZSBpbmNsdWRlIHN0YXRlbWVudCBhcyBhIHN0cmluZ1xuICAgICAgICBwYXR0ZXJuOiAvXigjXFxzKmluY2x1ZGVcXHMqKTxbXj5dKz4vLFxuICAgICAgICBsb29rYmVoaW5kOiB0cnVlXG4gICAgICB9LCBQcmlzbS5sYW5ndWFnZXMuY1snc3RyaW5nJ11dLFxuICAgICAgJ2NvbW1lbnQnOiBQcmlzbS5sYW5ndWFnZXMuY1snY29tbWVudCddLFxuICAgICAgJ21hY3JvLW5hbWUnOiBbe1xuICAgICAgICBwYXR0ZXJuOiAvKF4jXFxzKmRlZmluZVxccyspXFx3K1xcYig/IVxcKCkvaSxcbiAgICAgICAgbG9va2JlaGluZDogdHJ1ZVxuICAgICAgfSwge1xuICAgICAgICBwYXR0ZXJuOiAvKF4jXFxzKmRlZmluZVxccyspXFx3K1xcYig/PVxcKCkvaSxcbiAgICAgICAgbG9va2JlaGluZDogdHJ1ZSxcbiAgICAgICAgYWxpYXM6ICdmdW5jdGlvbidcbiAgICAgIH1dLFxuICAgICAgLy8gaGlnaGxpZ2h0IG1hY3JvIGRpcmVjdGl2ZXMgYXMga2V5d29yZHNcbiAgICAgICdkaXJlY3RpdmUnOiB7XG4gICAgICAgIHBhdHRlcm46IC9eKCNcXHMqKVthLXpdKy8sXG4gICAgICAgIGxvb2tiZWhpbmQ6IHRydWUsXG4gICAgICAgIGFsaWFzOiAna2V5d29yZCdcbiAgICAgIH0sXG4gICAgICAnZGlyZWN0aXZlLWhhc2gnOiAvXiMvLFxuICAgICAgJ3B1bmN0dWF0aW9uJzogLyMjfFxcXFwoPz1bXFxyXFxuXSkvLFxuICAgICAgJ2V4cHJlc3Npb24nOiB7XG4gICAgICAgIHBhdHRlcm46IC9cXFNbXFxzXFxTXSovLFxuICAgICAgICBpbnNpZGU6IFByaXNtLmxhbmd1YWdlcy5jXG4gICAgICB9XG4gICAgfVxuICB9LFxuICAvLyBoaWdobGlnaHQgcHJlZGVmaW5lZCBtYWNyb3MgYXMgY29uc3RhbnRzXG4gICdjb25zdGFudCc6IC9cXGIoPzpfX0ZJTEVfX3xfX0xJTkVfX3xfX0RBVEVfX3xfX1RJTUVfX3xfX1RJTUVTVEFNUF9ffF9fZnVuY19ffEVPRnxOVUxMfFNFRUtfQ1VSfFNFRUtfRU5EfFNFRUtfU0VUfHN0ZGlufHN0ZG91dHxzdGRlcnIpXFxiL1xufSk7XG5kZWxldGUgUHJpc20ubGFuZ3VhZ2VzLmNbJ2Jvb2xlYW4nXTtcbi8qIFwicHJpc21qcy9jb21wb25lbnRzL3ByaXNtLWNwcFwiICovXG5cbihmdW5jdGlvbiAoUHJpc20pIHtcbiAgdmFyIGtleXdvcmQgPSAvXFxiKD86YWxpZ25hc3xhbGlnbm9mfGFzbXxhdXRvfGJvb2x8YnJlYWt8Y2FzZXxjYXRjaHxjaGFyfGNoYXI4X3R8Y2hhcjE2X3R8Y2hhcjMyX3R8Y2xhc3N8Y29tcGx8Y29uY2VwdHxjb25zdHxjb25zdGV2YWx8Y29uc3RleHByfGNvbnN0aW5pdHxjb25zdF9jYXN0fGNvbnRpbnVlfGNvX2F3YWl0fGNvX3JldHVybnxjb195aWVsZHxkZWNsdHlwZXxkZWZhdWx0fGRlbGV0ZXxkb3xkb3VibGV8ZHluYW1pY19jYXN0fGVsc2V8ZW51bXxleHBsaWNpdHxleHBvcnR8ZXh0ZXJufGZsb2F0fGZvcnxmcmllbmR8Z290b3xpZnxpbmxpbmV8aW50fGludDhfdHxpbnQxNl90fGludDMyX3R8aW50NjRfdHx1aW50OF90fHVpbnQxNl90fHVpbnQzMl90fHVpbnQ2NF90fGxvbmd8bXV0YWJsZXxuYW1lc3BhY2V8bmV3fG5vZXhjZXB0fG51bGxwdHJ8b3BlcmF0b3J8cHJpdmF0ZXxwcm90ZWN0ZWR8cHVibGljfHJlZ2lzdGVyfHJlaW50ZXJwcmV0X2Nhc3R8cmVxdWlyZXN8cmV0dXJufHNob3J0fHNpZ25lZHxzaXplb2Z8c3RhdGljfHN0YXRpY19hc3NlcnR8c3RhdGljX2Nhc3R8c3RydWN0fHN3aXRjaHx0ZW1wbGF0ZXx0aGlzfHRocmVhZF9sb2NhbHx0aHJvd3x0cnl8dHlwZWRlZnx0eXBlaWR8dHlwZW5hbWV8dW5pb258dW5zaWduZWR8dXNpbmd8dmlydHVhbHx2b2lkfHZvbGF0aWxlfHdjaGFyX3R8d2hpbGUpXFxiLztcbiAgUHJpc20ubGFuZ3VhZ2VzLmNwcCA9IFByaXNtLmxhbmd1YWdlcy5leHRlbmQoJ2MnLCB7XG4gICAgJ2NsYXNzLW5hbWUnOiBbe1xuICAgICAgcGF0dGVybjogUmVnRXhwKC8oXFxiKD86Y2xhc3N8Y29uY2VwdHxlbnVtfHN0cnVjdHx0eXBlbmFtZSlcXHMrKSg/ITxrZXl3b3JkPilcXHcrLy5zb3VyY2UucmVwbGFjZSgvPGtleXdvcmQ+L2csIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIGtleXdvcmQuc291cmNlO1xuICAgICAgfSkpLFxuICAgICAgbG9va2JlaGluZDogdHJ1ZVxuICAgIH0sIC8vIFRoaXMgaXMgaW50ZW5kZWQgdG8gY2FwdHVyZSB0aGUgY2xhc3MgbmFtZSBvZiBtZXRob2QgaW1wbGVtZW50YXRpb25zIGxpa2U6XG4gICAgLy8gICB2b2lkIGZvbzo6YmFyKCkgY29uc3Qge31cbiAgICAvLyBIb3dldmVyISBUaGUgYGZvb2AgaW4gdGhlIGFib3ZlIGV4YW1wbGUgY291bGQgYWxzbyBiZSBhIG5hbWVzcGFjZSwgc28gd2Ugb25seSBjYXB0dXJlIHRoZSBjbGFzcyBuYW1lIGlmXG4gICAgLy8gaXQgc3RhcnRzIHdpdGggYW4gdXBwZXJjYXNlIGxldHRlci4gVGhpcyBhcHByb3hpbWF0aW9uIHNob3VsZCBnaXZlIGRlY2VudCByZXN1bHRzLlxuICAgIC9cXGJbQS1aXVxcdyooPz1cXHMqOjpcXHMqXFx3K1xccypcXCgpLywgLy8gVGhpcyB3aWxsIGNhcHR1cmUgdGhlIGNsYXNzIG5hbWUgYmVmb3JlIGRlc3RydWN0b3JzIGxpa2U6XG4gICAgLy8gICBGb286On5Gb28oKSB7fVxuICAgIC9cXGJbQS1aX11cXHcqKD89XFxzKjo6XFxzKn5cXHcrXFxzKlxcKCkvaSwgLy8gVGhpcyBhbHNvIGludGVuZHMgdG8gY2FwdHVyZSB0aGUgY2xhc3MgbmFtZSBvZiBtZXRob2QgaW1wbGVtZW50YXRpb25zIGJ1dCBoZXJlIHRoZSBjbGFzcyBoYXMgdGVtcGxhdGVcbiAgICAvLyBwYXJhbWV0ZXJzLCBzbyBpdCBjYW4ndCBiZSBhIG5hbWVzcGFjZSAodW50aWwgQysrIGFkZHMgZ2VuZXJpYyBuYW1lc3BhY2VzKS5cbiAgICAvXFx3Kyg/PVxccyo8KD86W148Pl18PCg/OltePD5dfDxbXjw+XSo+KSo+KSo+XFxzKjo6XFxzKlxcdytcXHMqXFwoKS9dLFxuICAgICdrZXl3b3JkJzoga2V5d29yZCxcbiAgICAnbnVtYmVyJzoge1xuICAgICAgcGF0dGVybjogLyg/OlxcYjBiWzAxJ10rfFxcYjB4KD86W1xcZGEtZiddKyg/OlxcLltcXGRhLWYnXSopP3xcXC5bXFxkYS1mJ10rKSg/OnBbKy1dP1tcXGQnXSspP3woPzpcXGJbXFxkJ10rKD86XFwuW1xcZCddKik/fFxcQlxcLltcXGQnXSspKD86ZVsrLV0/W1xcZCddKyk/KVtmdWxdezAsNH0vaSxcbiAgICAgIGdyZWVkeTogdHJ1ZVxuICAgIH0sXG4gICAgJ29wZXJhdG9yJzogLz4+PT98PDw9P3wtPnwoWy0rJnw6XSlcXDF8Wz86fl18PD0+fFstKyovJSZ8XiE9PD5dPT98XFxiKD86YW5kfGFuZF9lcXxiaXRhbmR8Yml0b3J8bm90fG5vdF9lcXxvcnxvcl9lcXx4b3J8eG9yX2VxKVxcYi8sXG4gICAgJ2Jvb2xlYW4nOiAvXFxiKD86dHJ1ZXxmYWxzZSlcXGIvXG4gIH0pO1xuICBQcmlzbS5sYW5ndWFnZXMuaW5zZXJ0QmVmb3JlKCdjcHAnLCAnc3RyaW5nJywge1xuICAgICdyYXctc3RyaW5nJzoge1xuICAgICAgcGF0dGVybjogL1JcIihbXigpXFxcXCBdezAsMTZ9KVxcKFtcXHNcXFNdKj9cXClcXDFcIi8sXG4gICAgICBhbGlhczogJ3N0cmluZycsXG4gICAgICBncmVlZHk6IHRydWVcbiAgICB9XG4gIH0pO1xuICBQcmlzbS5sYW5ndWFnZXMuaW5zZXJ0QmVmb3JlKCdjcHAnLCAnY2xhc3MtbmFtZScsIHtcbiAgICAvLyB0aGUgYmFzZSBjbGF1c2UgaXMgYW4gb3B0aW9uYWwgbGlzdCBvZiBwYXJlbnQgY2xhc3Nlc1xuICAgIC8vIGh0dHBzOi8vZW4uY3BwcmVmZXJlbmNlLmNvbS93L2NwcC9sYW5ndWFnZS9jbGFzc1xuICAgICdiYXNlLWNsYXVzZSc6IHtcbiAgICAgIHBhdHRlcm46IC8oXFxiKD86Y2xhc3N8c3RydWN0KVxccytcXHcrXFxzKjpcXHMqKVteO3t9XCInXFxzXSsoPzpcXHMrW147e31cIidcXHNdKykqKD89XFxzKls7e10pLyxcbiAgICAgIGxvb2tiZWhpbmQ6IHRydWUsXG4gICAgICBncmVlZHk6IHRydWUsXG4gICAgICBpbnNpZGU6IFByaXNtLmxhbmd1YWdlcy5leHRlbmQoJ2NwcCcsIHt9KVxuICAgIH1cbiAgfSk7XG4gIFByaXNtLmxhbmd1YWdlcy5pbnNlcnRCZWZvcmUoJ2luc2lkZScsICdvcGVyYXRvcicsIHtcbiAgICAvLyBBbGwgdW50b2tlbml6ZWQgd29yZHMgdGhhdCBhcmUgbm90IG5hbWVzcGFjZXMgc2hvdWxkIGJlIGNsYXNzIG5hbWVzXG4gICAgJ2NsYXNzLW5hbWUnOiAvXFxiW2Etel9dXFx3KlxcYig/IVxccyo6OikvaVxuICB9LCBQcmlzbS5sYW5ndWFnZXMuY3BwWydiYXNlLWNsYXVzZSddKTtcbn0pKFByaXNtKTtcbi8qIFwicHJpc21qcy9jb21wb25lbnRzL3ByaXNtLWNzc1wiICovXG5cblxuKGZ1bmN0aW9uIChQcmlzbSkge1xuICB2YXIgc3RyaW5nID0gLyhcInwnKSg/OlxcXFwoPzpcXHJcXG58W1xcc1xcU10pfCg/IVxcMSlbXlxcXFxcXHJcXG5dKSpcXDEvO1xuICBQcmlzbS5sYW5ndWFnZXMuY3NzID0ge1xuICAgICdjb21tZW50JzogL1xcL1xcKltcXHNcXFNdKj9cXCpcXC8vLFxuICAgICdhdHJ1bGUnOiB7XG4gICAgICBwYXR0ZXJuOiAvQFtcXHctXSg/OlteO3tcXHNdfFxccysoPyFbXFxze10pKSooPzo7fCg/PVxccypcXHspKS8sXG4gICAgICBpbnNpZGU6IHtcbiAgICAgICAgJ3J1bGUnOiAvXkBbXFx3LV0rLyxcbiAgICAgICAgJ3NlbGVjdG9yLWZ1bmN0aW9uLWFyZ3VtZW50Jzoge1xuICAgICAgICAgIHBhdHRlcm46IC8oXFxic2VsZWN0b3JcXHMqXFwoXFxzKig/IVtcXHMpXSkpKD86W14oKVxcc118XFxzKyg/IVtcXHMpXSl8XFwoKD86W14oKV18XFwoW14oKV0qXFwpKSpcXCkpKyg/PVxccypcXCkpLyxcbiAgICAgICAgICBsb29rYmVoaW5kOiB0cnVlLFxuICAgICAgICAgIGFsaWFzOiAnc2VsZWN0b3InXG4gICAgICAgIH0sXG4gICAgICAgICdrZXl3b3JkJzoge1xuICAgICAgICAgIHBhdHRlcm46IC8oXnxbXlxcdy1dKSg/OmFuZHxub3R8b25seXxvcikoPyFbXFx3LV0pLyxcbiAgICAgICAgICBsb29rYmVoaW5kOiB0cnVlXG4gICAgICAgIH0gLy8gU2VlIHJlc3QgYmVsb3dcblxuICAgICAgfVxuICAgIH0sXG4gICAgJ3VybCc6IHtcbiAgICAgIC8vIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcbiAgICAgIHBhdHRlcm46IFJlZ0V4cCgnXFxcXGJ1cmxcXFxcKCg/OicgKyBzdHJpbmcuc291cmNlICsgJ3wnICsgLyg/OlteXFxcXFxcclxcbigpXCInXXxcXFxcW1xcc1xcU10pKi8uc291cmNlICsgJylcXFxcKScsICdpJyksXG4gICAgICBncmVlZHk6IHRydWUsXG4gICAgICBpbnNpZGU6IHtcbiAgICAgICAgJ2Z1bmN0aW9uJzogL151cmwvaSxcbiAgICAgICAgJ3B1bmN0dWF0aW9uJzogL15cXCh8XFwpJC8sXG4gICAgICAgICdzdHJpbmcnOiB7XG4gICAgICAgICAgcGF0dGVybjogUmVnRXhwKCdeJyArIHN0cmluZy5zb3VyY2UgKyAnJCcpLFxuICAgICAgICAgIGFsaWFzOiAndXJsJ1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcbiAgICAnc2VsZWN0b3InOiBSZWdFeHAoJ1tee31cXFxcc10oPzpbXnt9O1wiXFwnXFxcXHNdfFxcXFxzKyg/IVtcXFxcc3tdKXwnICsgc3RyaW5nLnNvdXJjZSArICcpKig/PVxcXFxzKlxcXFx7KScpLFxuICAgICdzdHJpbmcnOiB7XG4gICAgICBwYXR0ZXJuOiBzdHJpbmcsXG4gICAgICBncmVlZHk6IHRydWVcbiAgICB9LFxuICAgICdwcm9wZXJ0eSc6IC8oPyFcXHMpWy1fYS16XFx4QTAtXFx1RkZGRl0oPzooPyFcXHMpWy1cXHdcXHhBMC1cXHVGRkZGXSkqKD89XFxzKjopL2ksXG4gICAgJ2ltcG9ydGFudCc6IC8haW1wb3J0YW50XFxiL2ksXG4gICAgJ2Z1bmN0aW9uJzogL1stYS16MC05XSsoPz1cXCgpL2ksXG4gICAgJ3B1bmN0dWF0aW9uJzogL1soKXt9OzosXS9cbiAgfTtcbiAgUHJpc20ubGFuZ3VhZ2VzLmNzc1snYXRydWxlJ10uaW5zaWRlLnJlc3QgPSBQcmlzbS5sYW5ndWFnZXMuY3NzO1xuICB2YXIgbWFya3VwID0gUHJpc20ubGFuZ3VhZ2VzLm1hcmt1cDtcblxuICBpZiAobWFya3VwKSB7XG4gICAgbWFya3VwLnRhZy5hZGRJbmxpbmVkKCdzdHlsZScsICdjc3MnKTtcbiAgICBQcmlzbS5sYW5ndWFnZXMuaW5zZXJ0QmVmb3JlKCdpbnNpZGUnLCAnYXR0ci12YWx1ZScsIHtcbiAgICAgICdzdHlsZS1hdHRyJzoge1xuICAgICAgICBwYXR0ZXJuOiAvKF58W1wiJ1xcc10pc3R5bGVcXHMqPVxccyooPzpcIlteXCJdKlwifCdbXiddKicpL2ksXG4gICAgICAgIGxvb2tiZWhpbmQ6IHRydWUsXG4gICAgICAgIGluc2lkZToge1xuICAgICAgICAgICdhdHRyLXZhbHVlJzoge1xuICAgICAgICAgICAgcGF0dGVybjogLz1cXHMqKD86XCJbXlwiXSpcInwnW14nXSonfFteXFxzJ1wiPj1dKykvLFxuICAgICAgICAgICAgaW5zaWRlOiB7XG4gICAgICAgICAgICAgICdzdHlsZSc6IHtcbiAgICAgICAgICAgICAgICBwYXR0ZXJuOiAvKFtcIiddKVtcXHNcXFNdKyg/PVtcIiddJCkvLFxuICAgICAgICAgICAgICAgIGxvb2tiZWhpbmQ6IHRydWUsXG4gICAgICAgICAgICAgICAgYWxpYXM6ICdsYW5ndWFnZS1jc3MnLFxuICAgICAgICAgICAgICAgIGluc2lkZTogUHJpc20ubGFuZ3VhZ2VzLmNzc1xuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAncHVuY3R1YXRpb24nOiBbe1xuICAgICAgICAgICAgICAgIHBhdHRlcm46IC9ePS8sXG4gICAgICAgICAgICAgICAgYWxpYXM6ICdhdHRyLWVxdWFscydcbiAgICAgICAgICAgICAgfSwgL1wifCcvXVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0sXG4gICAgICAgICAgJ2F0dHItbmFtZSc6IC9ec3R5bGUvaVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSwgbWFya3VwLnRhZyk7XG4gIH1cbn0pKFByaXNtKTtcbi8qIFwicHJpc21qcy9jb21wb25lbnRzL3ByaXNtLWNzcy1leHRyYXNcIiAqL1xuXG5cbihmdW5jdGlvbiAoUHJpc20pIHtcbiAgdmFyIHN0cmluZyA9IC8oXCJ8JykoPzpcXFxcKD86XFxyXFxufFtcXHNcXFNdKXwoPyFcXDEpW15cXFxcXFxyXFxuXSkqXFwxLztcbiAgdmFyIHNlbGVjdG9ySW5zaWRlO1xuICBQcmlzbS5sYW5ndWFnZXMuY3NzLnNlbGVjdG9yID0ge1xuICAgIHBhdHRlcm46IFByaXNtLmxhbmd1YWdlcy5jc3Muc2VsZWN0b3IsXG4gICAgaW5zaWRlOiBzZWxlY3Rvckluc2lkZSA9IHtcbiAgICAgICdwc2V1ZG8tZWxlbWVudCc6IC86KD86YWZ0ZXJ8YmVmb3JlfGZpcnN0LWxldHRlcnxmaXJzdC1saW5lfHNlbGVjdGlvbil8OjpbLVxcd10rLyxcbiAgICAgICdwc2V1ZG8tY2xhc3MnOiAvOlstXFx3XSsvLFxuICAgICAgJ2NsYXNzJzogL1xcLlstXFx3XSsvLFxuICAgICAgJ2lkJzogLyNbLVxcd10rLyxcbiAgICAgICdhdHRyaWJ1dGUnOiB7XG4gICAgICAgIHBhdHRlcm46IFJlZ0V4cCgnXFxcXFsoPzpbXltcXFxcXVwiXFwnXXwnICsgc3RyaW5nLnNvdXJjZSArICcpKlxcXFxdJyksXG4gICAgICAgIGdyZWVkeTogdHJ1ZSxcbiAgICAgICAgaW5zaWRlOiB7XG4gICAgICAgICAgJ3B1bmN0dWF0aW9uJzogL15cXFt8XFxdJC8sXG4gICAgICAgICAgJ2Nhc2Utc2Vuc2l0aXZpdHknOiB7XG4gICAgICAgICAgICBwYXR0ZXJuOiAvKFxccylbc2ldJC9pLFxuICAgICAgICAgICAgbG9va2JlaGluZDogdHJ1ZSxcbiAgICAgICAgICAgIGFsaWFzOiAna2V5d29yZCdcbiAgICAgICAgICB9LFxuICAgICAgICAgICduYW1lc3BhY2UnOiB7XG4gICAgICAgICAgICBwYXR0ZXJuOiAvXihcXHMqKSg/Oig/IVxccylbLSpcXHdcXHhBMC1cXHVGRkZGXSkqXFx8KD8hPSkvLFxuICAgICAgICAgICAgbG9va2JlaGluZDogdHJ1ZSxcbiAgICAgICAgICAgIGluc2lkZToge1xuICAgICAgICAgICAgICAncHVuY3R1YXRpb24nOiAvXFx8JC9cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LFxuICAgICAgICAgICdhdHRyLW5hbWUnOiB7XG4gICAgICAgICAgICBwYXR0ZXJuOiAvXihcXHMqKSg/Oig/IVxccylbLVxcd1xceEEwLVxcdUZGRkZdKSsvLFxuICAgICAgICAgICAgbG9va2JlaGluZDogdHJ1ZVxuICAgICAgICAgIH0sXG4gICAgICAgICAgJ2F0dHItdmFsdWUnOiBbc3RyaW5nLCB7XG4gICAgICAgICAgICBwYXR0ZXJuOiAvKD1cXHMqKSg/Oig/IVxccylbLVxcd1xceEEwLVxcdUZGRkZdKSsoPz1cXHMqJCkvLFxuICAgICAgICAgICAgbG9va2JlaGluZDogdHJ1ZVxuICAgICAgICAgIH1dLFxuICAgICAgICAgICdvcGVyYXRvcic6IC9bfH4qXiRdPz0vXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICAnbi10aCc6IFt7XG4gICAgICAgIHBhdHRlcm46IC8oXFwoXFxzKilbKy1dP1xcZCpbXFxkbl0oPzpcXHMqWystXVxccypcXGQrKT8oPz1cXHMqXFwpKS8sXG4gICAgICAgIGxvb2tiZWhpbmQ6IHRydWUsXG4gICAgICAgIGluc2lkZToge1xuICAgICAgICAgICdudW1iZXInOiAvW1xcZG5dKy8sXG4gICAgICAgICAgJ29wZXJhdG9yJzogL1srLV0vXG4gICAgICAgIH1cbiAgICAgIH0sIHtcbiAgICAgICAgcGF0dGVybjogLyhcXChcXHMqKSg/OmV2ZW58b2RkKSg/PVxccypcXCkpL2ksXG4gICAgICAgIGxvb2tiZWhpbmQ6IHRydWVcbiAgICAgIH1dLFxuICAgICAgJ2NvbWJpbmF0b3InOiAvPnxcXCt8fnxcXHxcXHwvLFxuICAgICAgLy8gdGhlIGB0YWdgIHRva2VuIGhhcyBiZWVuIGV4aXN0ZWQgYW5kIHJlbW92ZWQuXG4gICAgICAvLyBiZWNhdXNlIHdlIGNhbid0IGZpbmQgYSBwZXJmZWN0IHRva2VuaXplIHRvIG1hdGNoIGl0LlxuICAgICAgLy8gaWYgeW91IHdhbnQgdG8gYWRkIGl0LCBwbGVhc2UgcmVhZCBodHRwczovL2dpdGh1Yi5jb20vUHJpc21KUy9wcmlzbS9wdWxsLzIzNzMgZmlyc3QuXG4gICAgICAncHVuY3R1YXRpb24nOiAvWygpLF0vXG4gICAgfVxuICB9O1xuICBQcmlzbS5sYW5ndWFnZXMuY3NzWydhdHJ1bGUnXS5pbnNpZGVbJ3NlbGVjdG9yLWZ1bmN0aW9uLWFyZ3VtZW50J10uaW5zaWRlID0gc2VsZWN0b3JJbnNpZGU7XG4gIFByaXNtLmxhbmd1YWdlcy5pbnNlcnRCZWZvcmUoJ2NzcycsICdwcm9wZXJ0eScsIHtcbiAgICAndmFyaWFibGUnOiB7XG4gICAgICBwYXR0ZXJuOiAvKF58W14tXFx3XFx4QTAtXFx1RkZGRl0pLS0oPyFcXHMpWy1fYS16XFx4QTAtXFx1RkZGRl0oPzooPyFcXHMpWy1cXHdcXHhBMC1cXHVGRkZGXSkqL2ksXG4gICAgICBsb29rYmVoaW5kOiB0cnVlXG4gICAgfVxuICB9KTtcbiAgdmFyIHVuaXQgPSB7XG4gICAgcGF0dGVybjogLyhcXGJcXGQrKSg/OiV8W2Etel0rXFxiKS8sXG4gICAgbG9va2JlaGluZDogdHJ1ZVxuICB9OyAvLyAxMjMgLTEyMyAuMTIzIC0uMTIzIDEyLjMgLTEyLjNcblxuICB2YXIgbnVtYmVyID0ge1xuICAgIHBhdHRlcm46IC8oXnxbXlxcdy4tXSktPyg/OlxcZCsoPzpcXC5cXGQrKT98XFwuXFxkKykvLFxuICAgIGxvb2tiZWhpbmQ6IHRydWVcbiAgfTtcbiAgUHJpc20ubGFuZ3VhZ2VzLmluc2VydEJlZm9yZSgnY3NzJywgJ2Z1bmN0aW9uJywge1xuICAgICdvcGVyYXRvcic6IHtcbiAgICAgIHBhdHRlcm46IC8oXFxzKVsrXFwtKlxcL10oPz1cXHMpLyxcbiAgICAgIGxvb2tiZWhpbmQ6IHRydWVcbiAgICB9LFxuICAgIC8vIENBUkVGVUwhXG4gICAgLy8gUHJldmlld2VycyBhbmQgSW5saW5lIGNvbG9yIHVzZSBoZXhjb2RlIGFuZCBjb2xvci5cbiAgICAnaGV4Y29kZSc6IHtcbiAgICAgIHBhdHRlcm46IC9cXEIjKD86W1xcZGEtZl17MSwyfSl7Myw0fVxcYi9pLFxuICAgICAgYWxpYXM6ICdjb2xvcidcbiAgICB9LFxuICAgICdjb2xvcic6IFsvXFxiKD86QWxpY2VCbHVlfEFudGlxdWVXaGl0ZXxBcXVhfEFxdWFtYXJpbmV8QXp1cmV8QmVpZ2V8QmlzcXVlfEJsYWNrfEJsYW5jaGVkQWxtb25kfEJsdWV8Qmx1ZVZpb2xldHxCcm93bnxCdXJseVdvb2R8Q2FkZXRCbHVlfENoYXJ0cmV1c2V8Q2hvY29sYXRlfENvcmFsfENvcm5mbG93ZXJCbHVlfENvcm5zaWxrfENyaW1zb258Q3lhbnxEYXJrQmx1ZXxEYXJrQ3lhbnxEYXJrR29sZGVuUm9kfERhcmtHclthZV15fERhcmtHcmVlbnxEYXJrS2hha2l8RGFya01hZ2VudGF8RGFya09saXZlR3JlZW58RGFya09yYW5nZXxEYXJrT3JjaGlkfERhcmtSZWR8RGFya1NhbG1vbnxEYXJrU2VhR3JlZW58RGFya1NsYXRlQmx1ZXxEYXJrU2xhdGVHclthZV15fERhcmtUdXJxdW9pc2V8RGFya1Zpb2xldHxEZWVwUGlua3xEZWVwU2t5Qmx1ZXxEaW1HclthZV15fERvZGdlckJsdWV8RmlyZUJyaWNrfEZsb3JhbFdoaXRlfEZvcmVzdEdyZWVufEZ1Y2hzaWF8R2FpbnNib3JvfEdob3N0V2hpdGV8R29sZHxHb2xkZW5Sb2R8R3JbYWVdeXxHcmVlbnxHcmVlblllbGxvd3xIb25leURld3xIb3RQaW5rfEluZGlhblJlZHxJbmRpZ298SXZvcnl8S2hha2l8TGF2ZW5kZXJ8TGF2ZW5kZXJCbHVzaHxMYXduR3JlZW58TGVtb25DaGlmZm9ufExpZ2h0Qmx1ZXxMaWdodENvcmFsfExpZ2h0Q3lhbnxMaWdodEdvbGRlblJvZFllbGxvd3xMaWdodEdyW2FlXXl8TGlnaHRHcmVlbnxMaWdodFBpbmt8TGlnaHRTYWxtb258TGlnaHRTZWFHcmVlbnxMaWdodFNreUJsdWV8TGlnaHRTbGF0ZUdyW2FlXXl8TGlnaHRTdGVlbEJsdWV8TGlnaHRZZWxsb3d8TGltZXxMaW1lR3JlZW58TGluZW58TWFnZW50YXxNYXJvb258TWVkaXVtQXF1YU1hcmluZXxNZWRpdW1CbHVlfE1lZGl1bU9yY2hpZHxNZWRpdW1QdXJwbGV8TWVkaXVtU2VhR3JlZW58TWVkaXVtU2xhdGVCbHVlfE1lZGl1bVNwcmluZ0dyZWVufE1lZGl1bVR1cnF1b2lzZXxNZWRpdW1WaW9sZXRSZWR8TWlkbmlnaHRCbHVlfE1pbnRDcmVhbXxNaXN0eVJvc2V8TW9jY2FzaW58TmF2YWpvV2hpdGV8TmF2eXxPbGRMYWNlfE9saXZlfE9saXZlRHJhYnxPcmFuZ2V8T3JhbmdlUmVkfE9yY2hpZHxQYWxlR29sZGVuUm9kfFBhbGVHcmVlbnxQYWxlVHVycXVvaXNlfFBhbGVWaW9sZXRSZWR8UGFwYXlhV2hpcHxQZWFjaFB1ZmZ8UGVydXxQaW5rfFBsdW18UG93ZGVyQmx1ZXxQdXJwbGV8UmVkfFJvc3lCcm93bnxSb3lhbEJsdWV8U2FkZGxlQnJvd258U2FsbW9ufFNhbmR5QnJvd258U2VhR3JlZW58U2VhU2hlbGx8U2llbm5hfFNpbHZlcnxTa3lCbHVlfFNsYXRlQmx1ZXxTbGF0ZUdyW2FlXXl8U25vd3xTcHJpbmdHcmVlbnxTdGVlbEJsdWV8VGFufFRlYWx8VGhpc3RsZXxUb21hdG98VHJhbnNwYXJlbnR8VHVycXVvaXNlfFZpb2xldHxXaGVhdHxXaGl0ZXxXaGl0ZVNtb2tlfFllbGxvd3xZZWxsb3dHcmVlbilcXGIvaSwge1xuICAgICAgcGF0dGVybjogL1xcYig/OnJnYnxoc2wpXFwoXFxzKlxcZHsxLDN9XFxzKixcXHMqXFxkezEsM30lP1xccyosXFxzKlxcZHsxLDN9JT9cXHMqXFwpXFxCfFxcYig/OnJnYnxoc2wpYVxcKFxccypcXGR7MSwzfVxccyosXFxzKlxcZHsxLDN9JT9cXHMqLFxccypcXGR7MSwzfSU/XFxzKixcXHMqKD86MHwwP1xcLlxcZCt8MSlcXHMqXFwpXFxCL2ksXG4gICAgICBpbnNpZGU6IHtcbiAgICAgICAgJ3VuaXQnOiB1bml0LFxuICAgICAgICAnbnVtYmVyJzogbnVtYmVyLFxuICAgICAgICAnZnVuY3Rpb24nOiAvW1xcdy1dKyg/PVxcKCkvLFxuICAgICAgICAncHVuY3R1YXRpb24nOiAvWygpLF0vXG4gICAgICB9XG4gICAgfV0sXG4gICAgLy8gaXQncyBpbXBvcnRhbnQgdGhhdCB0aGVyZSBpcyBubyBib3VuZGFyeSBhc3NlcnRpb24gYWZ0ZXIgdGhlIGhleCBkaWdpdHNcbiAgICAnZW50aXR5JzogL1xcXFxbXFxkYS1mXXsxLDh9L2ksXG4gICAgJ3VuaXQnOiB1bml0LFxuICAgICdudW1iZXInOiBudW1iZXJcbiAgfSk7XG59KShQcmlzbSk7XG4vKiBcInByaXNtanMvY29tcG9uZW50cy9wcmlzbS1qYXZhc2NyaXB0XCIgKi9cblxuXG5QcmlzbS5sYW5ndWFnZXMuamF2YXNjcmlwdCA9IFByaXNtLmxhbmd1YWdlcy5leHRlbmQoJ2NsaWtlJywge1xuICAnY2xhc3MtbmFtZSc6IFtQcmlzbS5sYW5ndWFnZXMuY2xpa2VbJ2NsYXNzLW5hbWUnXSwge1xuICAgIHBhdHRlcm46IC8oXnxbXiRcXHdcXHhBMC1cXHVGRkZGXSkoPyFcXHMpW18kQS1aXFx4QTAtXFx1RkZGRl0oPzooPyFcXHMpWyRcXHdcXHhBMC1cXHVGRkZGXSkqKD89XFwuKD86cHJvdG90eXBlfGNvbnN0cnVjdG9yKSkvLFxuICAgIGxvb2tiZWhpbmQ6IHRydWVcbiAgfV0sXG4gICdrZXl3b3JkJzogW3tcbiAgICBwYXR0ZXJuOiAvKCg/Ol58fSlcXHMqKSg/OmNhdGNofGZpbmFsbHkpXFxiLyxcbiAgICBsb29rYmVoaW5kOiB0cnVlXG4gIH0sIHtcbiAgICBwYXR0ZXJuOiAvKF58W14uXXxcXC5cXC5cXC5cXHMqKVxcYig/OmFzfGFzeW5jKD89XFxzKig/OmZ1bmN0aW9uXFxifFxcKHxbJFxcd1xceEEwLVxcdUZGRkZdfCQpKXxhd2FpdHxicmVha3xjYXNlfGNsYXNzfGNvbnN0fGNvbnRpbnVlfGRlYnVnZ2VyfGRlZmF1bHR8ZGVsZXRlfGRvfGVsc2V8ZW51bXxleHBvcnR8ZXh0ZW5kc3xmb3J8ZnJvbXxmdW5jdGlvbnwoPzpnZXR8c2V0KSg/PVxccypbXFxbJFxcd1xceEEwLVxcdUZGRkZdKXxpZnxpbXBsZW1lbnRzfGltcG9ydHxpbnxpbnN0YW5jZW9mfGludGVyZmFjZXxsZXR8bmV3fG51bGx8b2Z8cGFja2FnZXxwcml2YXRlfHByb3RlY3RlZHxwdWJsaWN8cmV0dXJufHN0YXRpY3xzdXBlcnxzd2l0Y2h8dGhpc3x0aHJvd3x0cnl8dHlwZW9mfHVuZGVmaW5lZHx2YXJ8dm9pZHx3aGlsZXx3aXRofHlpZWxkKVxcYi8sXG4gICAgbG9va2JlaGluZDogdHJ1ZVxuICB9XSxcbiAgLy8gQWxsb3cgZm9yIGFsbCBub24tQVNDSUkgY2hhcmFjdGVycyAoU2VlIGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9hLzIwMDg0NDQpXG4gICdmdW5jdGlvbic6IC8jPyg/IVxccylbXyRhLXpBLVpcXHhBMC1cXHVGRkZGXSg/Oig/IVxccylbJFxcd1xceEEwLVxcdUZGRkZdKSooPz1cXHMqKD86XFwuXFxzKig/OmFwcGx5fGJpbmR8Y2FsbClcXHMqKT9cXCgpLyxcbiAgJ251bWJlcic6IC9cXGIoPzooPzowW3hYXSg/OltcXGRBLUZhLWZdKD86X1tcXGRBLUZhLWZdKT8pK3wwW2JCXSg/OlswMV0oPzpfWzAxXSk/KSt8MFtvT10oPzpbMC03XSg/Ol9bMC03XSk/KSspbj98KD86XFxkKD86X1xcZCk/KStufE5hTnxJbmZpbml0eSlcXGJ8KD86XFxiKD86XFxkKD86X1xcZCk/KStcXC4/KD86XFxkKD86X1xcZCk/KSp8XFxCXFwuKD86XFxkKD86X1xcZCk/KSspKD86W0VlXVsrLV0/KD86XFxkKD86X1xcZCk/KSspPy8sXG4gICdvcGVyYXRvcic6IC8tLXxcXCtcXCt8XFwqXFwqPT98PT58JiY9P3xcXHxcXHw9P3xbIT1dPT18PDw9P3w+Pj4/PT98Wy0rKi8lJnxeIT08Pl09P3xcXC57M318XFw/XFw/PT98XFw/XFwuP3xbfjpdL1xufSk7XG5QcmlzbS5sYW5ndWFnZXMuamF2YXNjcmlwdFsnY2xhc3MtbmFtZSddWzBdLnBhdHRlcm4gPSAvKFxcYig/OmNsYXNzfGludGVyZmFjZXxleHRlbmRzfGltcGxlbWVudHN8aW5zdGFuY2VvZnxuZXcpXFxzKylbXFx3LlxcXFxdKy87XG5QcmlzbS5sYW5ndWFnZXMuaW5zZXJ0QmVmb3JlKCdqYXZhc2NyaXB0JywgJ2tleXdvcmQnLCB7XG4gICdyZWdleCc6IHtcbiAgICBwYXR0ZXJuOiAvKCg/Ol58W14kXFx3XFx4QTAtXFx1RkZGRi5cIidcXF0pXFxzXXxcXGIoPzpyZXR1cm58eWllbGQpKVxccyopXFwvKD86XFxbKD86W15cXF1cXFxcXFxyXFxuXXxcXFxcLikqXXxcXFxcLnxbXi9cXFxcXFxbXFxyXFxuXSkrXFwvW2dpbXl1c117MCw2fSg/PSg/Olxcc3xcXC9cXCooPzpbXipdfFxcKig/IVxcLykpKlxcKlxcLykqKD86JHxbXFxyXFxuLC47On0pXFxdXXxcXC9cXC8pKS8sXG4gICAgbG9va2JlaGluZDogdHJ1ZSxcbiAgICBncmVlZHk6IHRydWUsXG4gICAgaW5zaWRlOiB7XG4gICAgICAncmVnZXgtc291cmNlJzoge1xuICAgICAgICBwYXR0ZXJuOiAvXihcXC8pW1xcc1xcU10rKD89XFwvW2Etel0qJCkvLFxuICAgICAgICBsb29rYmVoaW5kOiB0cnVlLFxuICAgICAgICBhbGlhczogJ2xhbmd1YWdlLXJlZ2V4JyxcbiAgICAgICAgaW5zaWRlOiBQcmlzbS5sYW5ndWFnZXMucmVnZXhcbiAgICAgIH0sXG4gICAgICAncmVnZXgtZmxhZ3MnOiAvW2Etel0rJC8sXG4gICAgICAncmVnZXgtZGVsaW1pdGVyJzogL15cXC98XFwvJC9cbiAgICB9XG4gIH0sXG4gIC8vIFRoaXMgbXVzdCBiZSBkZWNsYXJlZCBiZWZvcmUga2V5d29yZCBiZWNhdXNlIHdlIHVzZSBcImZ1bmN0aW9uXCIgaW5zaWRlIHRoZSBsb29rLWZvcndhcmRcbiAgJ2Z1bmN0aW9uLXZhcmlhYmxlJzoge1xuICAgIHBhdHRlcm46IC8jPyg/IVxccylbXyRhLXpBLVpcXHhBMC1cXHVGRkZGXSg/Oig/IVxccylbJFxcd1xceEEwLVxcdUZGRkZdKSooPz1cXHMqWz06XVxccyooPzphc3luY1xccyopPyg/OlxcYmZ1bmN0aW9uXFxifCg/OlxcKCg/OlteKCldfFxcKFteKCldKlxcKSkqXFwpfCg/IVxccylbXyRhLXpBLVpcXHhBMC1cXHVGRkZGXSg/Oig/IVxccylbJFxcd1xceEEwLVxcdUZGRkZdKSopXFxzKj0+KSkvLFxuICAgIGFsaWFzOiAnZnVuY3Rpb24nXG4gIH0sXG4gICdwYXJhbWV0ZXInOiBbe1xuICAgIHBhdHRlcm46IC8oZnVuY3Rpb24oPzpcXHMrKD8hXFxzKVtfJGEtekEtWlxceEEwLVxcdUZGRkZdKD86KD8hXFxzKVskXFx3XFx4QTAtXFx1RkZGRl0pKik/XFxzKlxcKFxccyopKD8hXFxzKSg/OlteKClcXHNdfFxccysoPyFbXFxzKV0pfFxcKFteKCldKlxcKSkrKD89XFxzKlxcKSkvLFxuICAgIGxvb2tiZWhpbmQ6IHRydWUsXG4gICAgaW5zaWRlOiBQcmlzbS5sYW5ndWFnZXMuamF2YXNjcmlwdFxuICB9LCB7XG4gICAgcGF0dGVybjogLyg/IVxccylbXyRhLXpBLVpcXHhBMC1cXHVGRkZGXSg/Oig/IVxccylbJFxcd1xceEEwLVxcdUZGRkZdKSooPz1cXHMqPT4pL2ksXG4gICAgaW5zaWRlOiBQcmlzbS5sYW5ndWFnZXMuamF2YXNjcmlwdFxuICB9LCB7XG4gICAgcGF0dGVybjogLyhcXChcXHMqKSg/IVxccykoPzpbXigpXFxzXXxcXHMrKD8hW1xccyldKXxcXChbXigpXSpcXCkpKyg/PVxccypcXClcXHMqPT4pLyxcbiAgICBsb29rYmVoaW5kOiB0cnVlLFxuICAgIGluc2lkZTogUHJpc20ubGFuZ3VhZ2VzLmphdmFzY3JpcHRcbiAgfSwge1xuICAgIHBhdHRlcm46IC8oKD86XFxifFxcc3xeKSg/ISg/OmFzfGFzeW5jfGF3YWl0fGJyZWFrfGNhc2V8Y2F0Y2h8Y2xhc3N8Y29uc3R8Y29udGludWV8ZGVidWdnZXJ8ZGVmYXVsdHxkZWxldGV8ZG98ZWxzZXxlbnVtfGV4cG9ydHxleHRlbmRzfGZpbmFsbHl8Zm9yfGZyb218ZnVuY3Rpb258Z2V0fGlmfGltcGxlbWVudHN8aW1wb3J0fGlufGluc3RhbmNlb2Z8aW50ZXJmYWNlfGxldHxuZXd8bnVsbHxvZnxwYWNrYWdlfHByaXZhdGV8cHJvdGVjdGVkfHB1YmxpY3xyZXR1cm58c2V0fHN0YXRpY3xzdXBlcnxzd2l0Y2h8dGhpc3x0aHJvd3x0cnl8dHlwZW9mfHVuZGVmaW5lZHx2YXJ8dm9pZHx3aGlsZXx3aXRofHlpZWxkKSg/IVskXFx3XFx4QTAtXFx1RkZGRl0pKSg/Oig/IVxccylbXyRhLXpBLVpcXHhBMC1cXHVGRkZGXSg/Oig/IVxccylbJFxcd1xceEEwLVxcdUZGRkZdKSpcXHMqKVxcKFxccyp8XFxdXFxzKlxcKFxccyopKD8hXFxzKSg/OlteKClcXHNdfFxccysoPyFbXFxzKV0pfFxcKFteKCldKlxcKSkrKD89XFxzKlxcKVxccypcXHspLyxcbiAgICBsb29rYmVoaW5kOiB0cnVlLFxuICAgIGluc2lkZTogUHJpc20ubGFuZ3VhZ2VzLmphdmFzY3JpcHRcbiAgfV0sXG4gICdjb25zdGFudCc6IC9cXGJbQS1aXSg/OltBLVpfXXxcXGR4PykqXFxiL1xufSk7XG5QcmlzbS5sYW5ndWFnZXMuaW5zZXJ0QmVmb3JlKCdqYXZhc2NyaXB0JywgJ3N0cmluZycsIHtcbiAgJ3RlbXBsYXRlLXN0cmluZyc6IHtcbiAgICBwYXR0ZXJuOiAvYCg/OlxcXFxbXFxzXFxTXXxcXCR7KD86W157fV18eyg/Oltee31dfHtbXn1dKn0pKn0pK318KD8hXFwkeylbXlxcXFxgXSkqYC8sXG4gICAgZ3JlZWR5OiB0cnVlLFxuICAgIGluc2lkZToge1xuICAgICAgJ3RlbXBsYXRlLXB1bmN0dWF0aW9uJzoge1xuICAgICAgICBwYXR0ZXJuOiAvXmB8YCQvLFxuICAgICAgICBhbGlhczogJ3N0cmluZydcbiAgICAgIH0sXG4gICAgICAnaW50ZXJwb2xhdGlvbic6IHtcbiAgICAgICAgcGF0dGVybjogLygoPzpefFteXFxcXF0pKD86XFxcXHsyfSkqKVxcJHsoPzpbXnt9XXx7KD86W157fV18e1tefV0qfSkqfSkrfS8sXG4gICAgICAgIGxvb2tiZWhpbmQ6IHRydWUsXG4gICAgICAgIGluc2lkZToge1xuICAgICAgICAgICdpbnRlcnBvbGF0aW9uLXB1bmN0dWF0aW9uJzoge1xuICAgICAgICAgICAgcGF0dGVybjogL15cXCR7fH0kLyxcbiAgICAgICAgICAgIGFsaWFzOiAncHVuY3R1YXRpb24nXG4gICAgICAgICAgfSxcbiAgICAgICAgICByZXN0OiBQcmlzbS5sYW5ndWFnZXMuamF2YXNjcmlwdFxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgJ3N0cmluZyc6IC9bXFxzXFxTXSsvXG4gICAgfVxuICB9XG59KTtcblxuaWYgKFByaXNtLmxhbmd1YWdlcy5tYXJrdXApIHtcbiAgUHJpc20ubGFuZ3VhZ2VzLm1hcmt1cC50YWcuYWRkSW5saW5lZCgnc2NyaXB0JywgJ2phdmFzY3JpcHQnKTtcbn1cblxuUHJpc20ubGFuZ3VhZ2VzLmpzID0gUHJpc20ubGFuZ3VhZ2VzLmphdmFzY3JpcHQ7XG4vKiBcInByaXNtanMvY29tcG9uZW50cy9wcmlzbS1qc3hcIiAqL1xuXG4oZnVuY3Rpb24gKFByaXNtKSB7XG4gIHZhciBqYXZhc2NyaXB0ID0gUHJpc20udXRpbC5jbG9uZShQcmlzbS5sYW5ndWFnZXMuamF2YXNjcmlwdCk7XG4gIFByaXNtLmxhbmd1YWdlcy5qc3ggPSBQcmlzbS5sYW5ndWFnZXMuZXh0ZW5kKCdtYXJrdXAnLCBqYXZhc2NyaXB0KTtcbiAgUHJpc20ubGFuZ3VhZ2VzLmpzeC50YWcucGF0dGVybiA9IC88XFwvPyg/OltcXHcuOi1dKyg/OlxccysoPzpbXFx3LjokLV0rKD86PSg/OlwiKD86XFxcXFteXXxbXlxcXFxcIl0pKlwifCcoPzpcXFxcW15dfFteXFxcXCddKSonfFteXFxzeydcIj49XSt8XFx7KD86XFx7KD86XFx7W157fV0qXFx9fFtee31dKSpcXH18W157fV0pK1xcfSkpP3xcXHtcXHMqXFwuezN9XFxzKlthLXpfJF1bXFx3JF0qKD86XFwuW2Etel8kXVtcXHckXSopKlxccypcXH0pKSpcXHMqXFwvPyk/Pi9pO1xuICBQcmlzbS5sYW5ndWFnZXMuanN4LnRhZy5pbnNpZGVbJ3RhZyddLnBhdHRlcm4gPSAvXjxcXC8/W15cXHM+XFwvXSovaTtcbiAgUHJpc20ubGFuZ3VhZ2VzLmpzeC50YWcuaW5zaWRlWydhdHRyLXZhbHVlJ10ucGF0dGVybiA9IC89KD8hXFx7KSg/OlwiKD86XFxcXFteXXxbXlxcXFxcIl0pKlwifCcoPzpcXFxcW15dfFteXFxcXCddKSonfFteXFxzJ1wiPl0rKS9pO1xuICBQcmlzbS5sYW5ndWFnZXMuanN4LnRhZy5pbnNpZGVbJ3RhZyddLmluc2lkZVsnY2xhc3MtbmFtZSddID0gL15bQS1aXVxcdyooPzpcXC5bQS1aXVxcdyopKiQvO1xuICBQcmlzbS5sYW5ndWFnZXMuaW5zZXJ0QmVmb3JlKCdpbnNpZGUnLCAnYXR0ci1uYW1lJywge1xuICAgICdzcHJlYWQnOiB7XG4gICAgICBwYXR0ZXJuOiAvXFx7XFxzKlxcLnszfVxccypbYS16XyRdW1xcdyRdKig/OlxcLlthLXpfJF1bXFx3JF0qKSpcXHMqXFx9LyxcbiAgICAgIGluc2lkZToge1xuICAgICAgICAncHVuY3R1YXRpb24nOiAvXFwuezN9fFt7fS5dLyxcbiAgICAgICAgJ2F0dHItdmFsdWUnOiAvXFx3Ky9cbiAgICAgIH1cbiAgICB9XG4gIH0sIFByaXNtLmxhbmd1YWdlcy5qc3gudGFnKTtcbiAgUHJpc20ubGFuZ3VhZ2VzLmluc2VydEJlZm9yZSgnaW5zaWRlJywgJ2F0dHItdmFsdWUnLCB7XG4gICAgJ3NjcmlwdCc6IHtcbiAgICAgIC8vIEFsbG93IGZvciB0d28gbGV2ZWxzIG9mIG5lc3RpbmdcbiAgICAgIHBhdHRlcm46IC89KD86XFx7KD86XFx7KD86XFx7W157fV0qXFx9fFtee31dKSpcXH18W157fV0pK1xcfSkvaSxcbiAgICAgIGluc2lkZToge1xuICAgICAgICAnc2NyaXB0LXB1bmN0dWF0aW9uJzoge1xuICAgICAgICAgIHBhdHRlcm46IC9ePSg/PXspLyxcbiAgICAgICAgICBhbGlhczogJ3B1bmN0dWF0aW9uJ1xuICAgICAgICB9LFxuICAgICAgICByZXN0OiBQcmlzbS5sYW5ndWFnZXMuanN4XG4gICAgICB9LFxuICAgICAgJ2FsaWFzJzogJ2xhbmd1YWdlLWphdmFzY3JpcHQnXG4gICAgfVxuICB9LCBQcmlzbS5sYW5ndWFnZXMuanN4LnRhZyk7IC8vIFRoZSBmb2xsb3dpbmcgd2lsbCBoYW5kbGUgcGxhaW4gdGV4dCBpbnNpZGUgdGFnc1xuXG4gIHZhciBzdHJpbmdpZnlUb2tlbiA9IGZ1bmN0aW9uICh0b2tlbikge1xuICAgIGlmICghdG9rZW4pIHtcbiAgICAgIHJldHVybiAnJztcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIHRva2VuID09PSAnc3RyaW5nJykge1xuICAgICAgcmV0dXJuIHRva2VuO1xuICAgIH1cblxuICAgIGlmICh0eXBlb2YgdG9rZW4uY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHJldHVybiB0b2tlbi5jb250ZW50O1xuICAgIH1cblxuICAgIHJldHVybiB0b2tlbi5jb250ZW50Lm1hcChzdHJpbmdpZnlUb2tlbikuam9pbignJyk7XG4gIH07XG5cbiAgdmFyIHdhbGtUb2tlbnMgPSBmdW5jdGlvbiAodG9rZW5zKSB7XG4gICAgdmFyIG9wZW5lZFRhZ3MgPSBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdG9rZW5zLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgdG9rZW4gPSB0b2tlbnNbaV07XG4gICAgICB2YXIgbm90VGFnTm9yQnJhY2UgPSBmYWxzZTtcblxuICAgICAgaWYgKHR5cGVvZiB0b2tlbiAhPT0gJ3N0cmluZycpIHtcbiAgICAgICAgaWYgKHRva2VuLnR5cGUgPT09ICd0YWcnICYmIHRva2VuLmNvbnRlbnRbMF0gJiYgdG9rZW4uY29udGVudFswXS50eXBlID09PSAndGFnJykge1xuICAgICAgICAgIC8vIFdlIGZvdW5kIGEgdGFnLCBub3cgZmluZCBpdHMga2luZFxuICAgICAgICAgIGlmICh0b2tlbi5jb250ZW50WzBdLmNvbnRlbnRbMF0uY29udGVudCA9PT0gJzwvJykge1xuICAgICAgICAgICAgLy8gQ2xvc2luZyB0YWdcbiAgICAgICAgICAgIGlmIChvcGVuZWRUYWdzLmxlbmd0aCA+IDAgJiYgb3BlbmVkVGFnc1tvcGVuZWRUYWdzLmxlbmd0aCAtIDFdLnRhZ05hbWUgPT09IHN0cmluZ2lmeVRva2VuKHRva2VuLmNvbnRlbnRbMF0uY29udGVudFsxXSkpIHtcbiAgICAgICAgICAgICAgLy8gUG9wIG1hdGNoaW5nIG9wZW5pbmcgdGFnXG4gICAgICAgICAgICAgIG9wZW5lZFRhZ3MucG9wKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlmICh0b2tlbi5jb250ZW50W3Rva2VuLmNvbnRlbnQubGVuZ3RoIC0gMV0uY29udGVudCA9PT0gJy8+JykgOyBlbHNlIHtcbiAgICAgICAgICAgICAgLy8gT3BlbmluZyB0YWdcbiAgICAgICAgICAgICAgb3BlbmVkVGFncy5wdXNoKHtcbiAgICAgICAgICAgICAgICB0YWdOYW1lOiBzdHJpbmdpZnlUb2tlbih0b2tlbi5jb250ZW50WzBdLmNvbnRlbnRbMV0pLFxuICAgICAgICAgICAgICAgIG9wZW5lZEJyYWNlczogMFxuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAob3BlbmVkVGFncy5sZW5ndGggPiAwICYmIHRva2VuLnR5cGUgPT09ICdwdW5jdHVhdGlvbicgJiYgdG9rZW4uY29udGVudCA9PT0gJ3snKSB7XG4gICAgICAgICAgLy8gSGVyZSB3ZSBtaWdodCBoYXZlIGVudGVyZWQgYSBKU1ggY29udGV4dCBpbnNpZGUgYSB0YWdcbiAgICAgICAgICBvcGVuZWRUYWdzW29wZW5lZFRhZ3MubGVuZ3RoIC0gMV0ub3BlbmVkQnJhY2VzKys7XG4gICAgICAgIH0gZWxzZSBpZiAob3BlbmVkVGFncy5sZW5ndGggPiAwICYmIG9wZW5lZFRhZ3Nbb3BlbmVkVGFncy5sZW5ndGggLSAxXS5vcGVuZWRCcmFjZXMgPiAwICYmIHRva2VuLnR5cGUgPT09ICdwdW5jdHVhdGlvbicgJiYgdG9rZW4uY29udGVudCA9PT0gJ30nKSB7XG4gICAgICAgICAgLy8gSGVyZSB3ZSBtaWdodCBoYXZlIGxlZnQgYSBKU1ggY29udGV4dCBpbnNpZGUgYSB0YWdcbiAgICAgICAgICBvcGVuZWRUYWdzW29wZW5lZFRhZ3MubGVuZ3RoIC0gMV0ub3BlbmVkQnJhY2VzLS07XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgbm90VGFnTm9yQnJhY2UgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChub3RUYWdOb3JCcmFjZSB8fCB0eXBlb2YgdG9rZW4gPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIGlmIChvcGVuZWRUYWdzLmxlbmd0aCA+IDAgJiYgb3BlbmVkVGFnc1tvcGVuZWRUYWdzLmxlbmd0aCAtIDFdLm9wZW5lZEJyYWNlcyA9PT0gMCkge1xuICAgICAgICAgIC8vIEhlcmUgd2UgYXJlIGluc2lkZSBhIHRhZywgYW5kIG5vdCBpbnNpZGUgYSBKU1ggY29udGV4dC5cbiAgICAgICAgICAvLyBUaGF0J3MgcGxhaW4gdGV4dDogZHJvcCBhbnkgdG9rZW5zIG1hdGNoZWQuXG4gICAgICAgICAgdmFyIHBsYWluVGV4dCA9IHN0cmluZ2lmeVRva2VuKHRva2VuKTsgLy8gQW5kIG1lcmdlIHRleHQgd2l0aCBhZGphY2VudCB0ZXh0XG5cbiAgICAgICAgICBpZiAoaSA8IHRva2Vucy5sZW5ndGggLSAxICYmICh0eXBlb2YgdG9rZW5zW2kgKyAxXSA9PT0gJ3N0cmluZycgfHwgdG9rZW5zW2kgKyAxXS50eXBlID09PSAncGxhaW4tdGV4dCcpKSB7XG4gICAgICAgICAgICBwbGFpblRleHQgKz0gc3RyaW5naWZ5VG9rZW4odG9rZW5zW2kgKyAxXSk7XG4gICAgICAgICAgICB0b2tlbnMuc3BsaWNlKGkgKyAxLCAxKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAoaSA+IDAgJiYgKHR5cGVvZiB0b2tlbnNbaSAtIDFdID09PSAnc3RyaW5nJyB8fCB0b2tlbnNbaSAtIDFdLnR5cGUgPT09ICdwbGFpbi10ZXh0JykpIHtcbiAgICAgICAgICAgIHBsYWluVGV4dCA9IHN0cmluZ2lmeVRva2VuKHRva2Vuc1tpIC0gMV0pICsgcGxhaW5UZXh0O1xuICAgICAgICAgICAgdG9rZW5zLnNwbGljZShpIC0gMSwgMSk7XG4gICAgICAgICAgICBpLS07XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgdG9rZW5zW2ldID0gbmV3IFByaXNtLlRva2VuKCdwbGFpbi10ZXh0JywgcGxhaW5UZXh0LCBudWxsLCBwbGFpblRleHQpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmICh0b2tlbi5jb250ZW50ICYmIHR5cGVvZiB0b2tlbi5jb250ZW50ICE9PSAnc3RyaW5nJykge1xuICAgICAgICB3YWxrVG9rZW5zKHRva2VuLmNvbnRlbnQpO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICBQcmlzbS5ob29rcy5hZGQoJ2FmdGVyLXRva2VuaXplJywgZnVuY3Rpb24gKGVudikge1xuICAgIGlmIChlbnYubGFuZ3VhZ2UgIT09ICdqc3gnICYmIGVudi5sYW5ndWFnZSAhPT0gJ3RzeCcpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB3YWxrVG9rZW5zKGVudi50b2tlbnMpO1xuICB9KTtcbn0pKFByaXNtKTtcbi8qIFwicHJpc21qcy9jb21wb25lbnRzL3ByaXNtLWpzLWV4dHJhc1wiICovXG5cblxuKGZ1bmN0aW9uIChQcmlzbSkge1xuICBQcmlzbS5sYW5ndWFnZXMuaW5zZXJ0QmVmb3JlKCdqYXZhc2NyaXB0JywgJ2Z1bmN0aW9uLXZhcmlhYmxlJywge1xuICAgICdtZXRob2QtdmFyaWFibGUnOiB7XG4gICAgICBwYXR0ZXJuOiBSZWdFeHAoJyhcXFxcLlxcXFxzKiknICsgUHJpc20ubGFuZ3VhZ2VzLmphdmFzY3JpcHRbJ2Z1bmN0aW9uLXZhcmlhYmxlJ10ucGF0dGVybi5zb3VyY2UpLFxuICAgICAgbG9va2JlaGluZDogdHJ1ZSxcbiAgICAgIGFsaWFzOiBbJ2Z1bmN0aW9uLXZhcmlhYmxlJywgJ21ldGhvZCcsICdmdW5jdGlvbicsICdwcm9wZXJ0eS1hY2Nlc3MnXVxuICAgIH1cbiAgfSk7XG4gIFByaXNtLmxhbmd1YWdlcy5pbnNlcnRCZWZvcmUoJ2phdmFzY3JpcHQnLCAnZnVuY3Rpb24nLCB7XG4gICAgJ21ldGhvZCc6IHtcbiAgICAgIHBhdHRlcm46IFJlZ0V4cCgnKFxcXFwuXFxcXHMqKScgKyBQcmlzbS5sYW5ndWFnZXMuamF2YXNjcmlwdFsnZnVuY3Rpb24nXS5zb3VyY2UpLFxuICAgICAgbG9va2JlaGluZDogdHJ1ZSxcbiAgICAgIGFsaWFzOiBbJ2Z1bmN0aW9uJywgJ3Byb3BlcnR5LWFjY2VzcyddXG4gICAgfVxuICB9KTtcbiAgUHJpc20ubGFuZ3VhZ2VzLmluc2VydEJlZm9yZSgnamF2YXNjcmlwdCcsICdjb25zdGFudCcsIHtcbiAgICAna25vd24tY2xhc3MtbmFtZSc6IFt7XG4gICAgICAvLyBzdGFuZGFyZCBidWlsdC1pbnNcbiAgICAgIC8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0phdmFTY3JpcHQvUmVmZXJlbmNlL0dsb2JhbF9PYmplY3RzXG4gICAgICBwYXR0ZXJuOiAvXFxiKD86KD86KD86VWludHxJbnQpKD86OHwxNnwzMil8VWludDhDbGFtcGVkfEZsb2F0KD86MzJ8NjQpKT9BcnJheXxBcnJheUJ1ZmZlcnxCaWdJbnR8Qm9vbGVhbnxEYXRhVmlld3xEYXRlfEVycm9yfEZ1bmN0aW9ufEludGx8SlNPTnxNYXRofE51bWJlcnxPYmplY3R8UHJvbWlzZXxQcm94eXxSZWZsZWN0fFJlZ0V4cHxTdHJpbmd8U3ltYm9sfCg/OldlYWspPyg/OlNldHxNYXApfFdlYkFzc2VtYmx5KVxcYi8sXG4gICAgICBhbGlhczogJ2NsYXNzLW5hbWUnXG4gICAgfSwge1xuICAgICAgLy8gZXJyb3JzXG4gICAgICBwYXR0ZXJuOiAvXFxiKD86W0EtWl1cXHcqKUVycm9yXFxiLyxcbiAgICAgIGFsaWFzOiAnY2xhc3MtbmFtZSdcbiAgICB9XVxuICB9KTtcbiAgLyoqXG4gICAqIFJlcGxhY2VzIHRoZSBgPElEPmAgcGxhY2Vob2xkZXIgaW4gdGhlIGdpdmVuIHBhdHRlcm4gd2l0aCBhIHBhdHRlcm4gZm9yIGdlbmVyYWwgSlMgaWRlbnRpZmllcnMuXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBzb3VyY2VcbiAgICogQHBhcmFtIHtzdHJpbmd9IFtmbGFnc11cbiAgICogQHJldHVybnMge1JlZ0V4cH1cbiAgICovXG5cbiAgZnVuY3Rpb24gd2l0aElkKHNvdXJjZSwgZmxhZ3MpIHtcbiAgICByZXR1cm4gUmVnRXhwKHNvdXJjZS5yZXBsYWNlKC88SUQ+L2csIGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiAvKD8hXFxzKVtfJGEtekEtWlxceEEwLVxcdUZGRkZdKD86KD8hXFxzKVskXFx3XFx4QTAtXFx1RkZGRl0pKi8uc291cmNlO1xuICAgIH0pLCBmbGFncyk7XG4gIH1cblxuICBQcmlzbS5sYW5ndWFnZXMuaW5zZXJ0QmVmb3JlKCdqYXZhc2NyaXB0JywgJ2tleXdvcmQnLCB7XG4gICAgJ2ltcG9ydHMnOiB7XG4gICAgICAvLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLWltcG9ydHNcbiAgICAgIHBhdHRlcm46IHdpdGhJZCgvKFxcYmltcG9ydFxcYlxccyopKD86PElEPig/OlxccyosXFxzKig/OlxcKlxccyphc1xccys8SUQ+fFxce1tee31dKlxcfSkpP3xcXCpcXHMqYXNcXHMrPElEPnxcXHtbXnt9XSpcXH0pKD89XFxzKlxcYmZyb21cXGIpLy5zb3VyY2UpLFxuICAgICAgbG9va2JlaGluZDogdHJ1ZSxcbiAgICAgIGluc2lkZTogUHJpc20ubGFuZ3VhZ2VzLmphdmFzY3JpcHRcbiAgICB9LFxuICAgICdleHBvcnRzJzoge1xuICAgICAgLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1leHBvcnRzXG4gICAgICBwYXR0ZXJuOiB3aXRoSWQoLyhcXGJleHBvcnRcXGJcXHMqKSg/OlxcKig/Olxccyphc1xccys8SUQ+KT8oPz1cXHMqXFxiZnJvbVxcYil8XFx7W157fV0qXFx9KS8uc291cmNlKSxcbiAgICAgIGxvb2tiZWhpbmQ6IHRydWUsXG4gICAgICBpbnNpZGU6IFByaXNtLmxhbmd1YWdlcy5qYXZhc2NyaXB0XG4gICAgfVxuICB9KTtcbiAgUHJpc20ubGFuZ3VhZ2VzLmphdmFzY3JpcHRbJ2tleXdvcmQnXS51bnNoaWZ0KHtcbiAgICBwYXR0ZXJuOiAvXFxiKD86YXN8ZGVmYXVsdHxleHBvcnR8ZnJvbXxpbXBvcnQpXFxiLyxcbiAgICBhbGlhczogJ21vZHVsZSdcbiAgfSwge1xuICAgIHBhdHRlcm46IC9cXGIoPzphd2FpdHxicmVha3xjYXRjaHxjb250aW51ZXxkb3xlbHNlfGZvcnxmaW5hbGx5fGlmfHJldHVybnxzd2l0Y2h8dGhyb3d8dHJ5fHdoaWxlfHlpZWxkKVxcYi8sXG4gICAgYWxpYXM6ICdjb250cm9sLWZsb3cnXG4gIH0sIHtcbiAgICBwYXR0ZXJuOiAvXFxibnVsbFxcYi8sXG4gICAgYWxpYXM6IFsnbnVsbCcsICduaWwnXVxuICB9LCB7XG4gICAgcGF0dGVybjogL1xcYnVuZGVmaW5lZFxcYi8sXG4gICAgYWxpYXM6ICduaWwnXG4gIH0pO1xuICBQcmlzbS5sYW5ndWFnZXMuaW5zZXJ0QmVmb3JlKCdqYXZhc2NyaXB0JywgJ29wZXJhdG9yJywge1xuICAgICdzcHJlYWQnOiB7XG4gICAgICBwYXR0ZXJuOiAvXFwuezN9LyxcbiAgICAgIGFsaWFzOiAnb3BlcmF0b3InXG4gICAgfSxcbiAgICAnYXJyb3cnOiB7XG4gICAgICBwYXR0ZXJuOiAvPT4vLFxuICAgICAgYWxpYXM6ICdvcGVyYXRvcidcbiAgICB9XG4gIH0pO1xuICBQcmlzbS5sYW5ndWFnZXMuaW5zZXJ0QmVmb3JlKCdqYXZhc2NyaXB0JywgJ3B1bmN0dWF0aW9uJywge1xuICAgICdwcm9wZXJ0eS1hY2Nlc3MnOiB7XG4gICAgICBwYXR0ZXJuOiB3aXRoSWQoLyhcXC5cXHMqKSM/PElEPi8uc291cmNlKSxcbiAgICAgIGxvb2tiZWhpbmQ6IHRydWVcbiAgICB9LFxuICAgICdtYXliZS1jbGFzcy1uYW1lJzoge1xuICAgICAgcGF0dGVybjogLyhefFteJFxcd1xceEEwLVxcdUZGRkZdKVtBLVpdWyRcXHdcXHhBMC1cXHVGRkZGXSsvLFxuICAgICAgbG9va2JlaGluZDogdHJ1ZVxuICAgIH0sXG4gICAgJ2RvbSc6IHtcbiAgICAgIC8vIHRoaXMgY29udGFpbnMgb25seSBhIGZldyBjb21tb25seSB1c2VkIERPTSB2YXJpYWJsZXNcbiAgICAgIHBhdHRlcm46IC9cXGIoPzpkb2N1bWVudHxsb2NhdGlvbnxuYXZpZ2F0b3J8cGVyZm9ybWFuY2V8KD86bG9jYWx8c2Vzc2lvbilTdG9yYWdlfHdpbmRvdylcXGIvLFxuICAgICAgYWxpYXM6ICd2YXJpYWJsZSdcbiAgICB9LFxuICAgICdjb25zb2xlJzoge1xuICAgICAgcGF0dGVybjogL1xcYmNvbnNvbGUoPz1cXHMqXFwuKS8sXG4gICAgICBhbGlhczogJ2NsYXNzLW5hbWUnXG4gICAgfVxuICB9KTsgLy8gYWRkICdtYXliZS1jbGFzcy1uYW1lJyB0byB0b2tlbnMgd2hpY2ggbWlnaHQgYmUgYSBjbGFzcyBuYW1lXG5cbiAgdmFyIG1heWJlQ2xhc3NOYW1lVG9rZW5zID0gWydmdW5jdGlvbicsICdmdW5jdGlvbi12YXJpYWJsZScsICdtZXRob2QnLCAnbWV0aG9kLXZhcmlhYmxlJywgJ3Byb3BlcnR5LWFjY2VzcyddO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbWF5YmVDbGFzc05hbWVUb2tlbnMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgdG9rZW4gPSBtYXliZUNsYXNzTmFtZVRva2Vuc1tpXTtcbiAgICB2YXIgdmFsdWUgPSBQcmlzbS5sYW5ndWFnZXMuamF2YXNjcmlwdFt0b2tlbl07IC8vIGNvbnZlcnQgcmVnZXggdG8gb2JqZWN0XG5cbiAgICBpZiAoUHJpc20udXRpbC50eXBlKHZhbHVlKSA9PT0gJ1JlZ0V4cCcpIHtcbiAgICAgIHZhbHVlID0gUHJpc20ubGFuZ3VhZ2VzLmphdmFzY3JpcHRbdG9rZW5dID0ge1xuICAgICAgICBwYXR0ZXJuOiB2YWx1ZVxuICAgICAgfTtcbiAgICB9IC8vIGtlZXAgaW4gbWluZCB0aGF0IHdlIGRvbid0IHN1cHBvcnQgYXJyYXlzXG5cblxuICAgIHZhciBpbnNpZGUgPSB2YWx1ZS5pbnNpZGUgfHwge307XG4gICAgdmFsdWUuaW5zaWRlID0gaW5zaWRlO1xuICAgIGluc2lkZVsnbWF5YmUtY2xhc3MtbmFtZSddID0gL15bQS1aXVtcXHNcXFNdKi87XG4gIH1cbn0pKFByaXNtKTtcbi8qIFwicHJpc21qcy9jb21wb25lbnRzL3ByaXNtLWNvZmZlZXNjcmlwdFwiICovXG5cblxuKGZ1bmN0aW9uIChQcmlzbSkge1xuICAvLyBJZ25vcmUgY29tbWVudHMgc3RhcnRpbmcgd2l0aCB7IHRvIHByaXZpbGVnZSBzdHJpbmcgaW50ZXJwb2xhdGlvbiBoaWdobGlnaHRpbmdcbiAgdmFyIGNvbW1lbnQgPSAvIyg/IVxceykuKy8sXG4gICAgICBpbnRlcnBvbGF0aW9uID0ge1xuICAgIHBhdHRlcm46IC8jXFx7W159XStcXH0vLFxuICAgIGFsaWFzOiAndmFyaWFibGUnXG4gIH07XG4gIFByaXNtLmxhbmd1YWdlcy5jb2ZmZWVzY3JpcHQgPSBQcmlzbS5sYW5ndWFnZXMuZXh0ZW5kKCdqYXZhc2NyaXB0Jywge1xuICAgICdjb21tZW50JzogY29tbWVudCxcbiAgICAnc3RyaW5nJzogWy8vIFN0cmluZ3MgYXJlIG11bHRpbGluZVxuICAgIHtcbiAgICAgIHBhdHRlcm46IC8nKD86XFxcXFtcXHNcXFNdfFteXFxcXCddKSonLyxcbiAgICAgIGdyZWVkeTogdHJ1ZVxuICAgIH0sIHtcbiAgICAgIC8vIFN0cmluZ3MgYXJlIG11bHRpbGluZVxuICAgICAgcGF0dGVybjogL1wiKD86XFxcXFtcXHNcXFNdfFteXFxcXFwiXSkqXCIvLFxuICAgICAgZ3JlZWR5OiB0cnVlLFxuICAgICAgaW5zaWRlOiB7XG4gICAgICAgICdpbnRlcnBvbGF0aW9uJzogaW50ZXJwb2xhdGlvblxuICAgICAgfVxuICAgIH1dLFxuICAgICdrZXl3b3JkJzogL1xcYig/OmFuZHxicmVha3xieXxjYXRjaHxjbGFzc3xjb250aW51ZXxkZWJ1Z2dlcnxkZWxldGV8ZG98ZWFjaHxlbHNlfGV4dGVuZHxleHRlbmRzfGZhbHNlfGZpbmFsbHl8Zm9yfGlmfGlufGluc3RhbmNlb2Z8aXN8aXNudHxsZXR8bG9vcHxuYW1lc3BhY2V8bmV3fG5vfG5vdHxudWxsfG9mfG9mZnxvbnxvcnxvd258cmV0dXJufHN1cGVyfHN3aXRjaHx0aGVufHRoaXN8dGhyb3d8dHJ1ZXx0cnl8dHlwZW9mfHVuZGVmaW5lZHx1bmxlc3N8dW50aWx8d2hlbnx3aGlsZXx3aW5kb3d8d2l0aHx5ZXN8eWllbGQpXFxiLyxcbiAgICAnY2xhc3MtbWVtYmVyJzoge1xuICAgICAgcGF0dGVybjogL0AoPyFcXGQpXFx3Ky8sXG4gICAgICBhbGlhczogJ3ZhcmlhYmxlJ1xuICAgIH1cbiAgfSk7XG4gIFByaXNtLmxhbmd1YWdlcy5pbnNlcnRCZWZvcmUoJ2NvZmZlZXNjcmlwdCcsICdjb21tZW50Jywge1xuICAgICdtdWx0aWxpbmUtY29tbWVudCc6IHtcbiAgICAgIHBhdHRlcm46IC8jIyNbXFxzXFxTXSs/IyMjLyxcbiAgICAgIGFsaWFzOiAnY29tbWVudCdcbiAgICB9LFxuICAgIC8vIEJsb2NrIHJlZ2V4cCBjYW4gY29udGFpbiBjb21tZW50cyBhbmQgaW50ZXJwb2xhdGlvblxuICAgICdibG9jay1yZWdleCc6IHtcbiAgICAgIHBhdHRlcm46IC9cXC97M31bXFxzXFxTXSo/XFwvezN9LyxcbiAgICAgIGFsaWFzOiAncmVnZXgnLFxuICAgICAgaW5zaWRlOiB7XG4gICAgICAgICdjb21tZW50JzogY29tbWVudCxcbiAgICAgICAgJ2ludGVycG9sYXRpb24nOiBpbnRlcnBvbGF0aW9uXG4gICAgICB9XG4gICAgfVxuICB9KTtcbiAgUHJpc20ubGFuZ3VhZ2VzLmluc2VydEJlZm9yZSgnY29mZmVlc2NyaXB0JywgJ3N0cmluZycsIHtcbiAgICAnaW5saW5lLWphdmFzY3JpcHQnOiB7XG4gICAgICBwYXR0ZXJuOiAvYCg/OlxcXFxbXFxzXFxTXXxbXlxcXFxgXSkqYC8sXG4gICAgICBpbnNpZGU6IHtcbiAgICAgICAgJ2RlbGltaXRlcic6IHtcbiAgICAgICAgICBwYXR0ZXJuOiAvXmB8YCQvLFxuICAgICAgICAgIGFsaWFzOiAncHVuY3R1YXRpb24nXG4gICAgICAgIH0sXG4gICAgICAgICdzY3JpcHQnOiB7XG4gICAgICAgICAgcGF0dGVybjogL1tcXHNcXFNdKy8sXG4gICAgICAgICAgYWxpYXM6ICdsYW5ndWFnZS1qYXZhc2NyaXB0JyxcbiAgICAgICAgICBpbnNpZGU6IFByaXNtLmxhbmd1YWdlcy5qYXZhc2NyaXB0XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuICAgIC8vIEJsb2NrIHN0cmluZ3NcbiAgICAnbXVsdGlsaW5lLXN0cmluZyc6IFt7XG4gICAgICBwYXR0ZXJuOiAvJycnW1xcc1xcU10qPycnJy8sXG4gICAgICBncmVlZHk6IHRydWUsXG4gICAgICBhbGlhczogJ3N0cmluZydcbiAgICB9LCB7XG4gICAgICBwYXR0ZXJuOiAvXCJcIlwiW1xcc1xcU10qP1wiXCJcIi8sXG4gICAgICBncmVlZHk6IHRydWUsXG4gICAgICBhbGlhczogJ3N0cmluZycsXG4gICAgICBpbnNpZGU6IHtcbiAgICAgICAgaW50ZXJwb2xhdGlvbjogaW50ZXJwb2xhdGlvblxuICAgICAgfVxuICAgIH1dXG4gIH0pO1xuICBQcmlzbS5sYW5ndWFnZXMuaW5zZXJ0QmVmb3JlKCdjb2ZmZWVzY3JpcHQnLCAna2V5d29yZCcsIHtcbiAgICAvLyBPYmplY3QgcHJvcGVydHlcbiAgICAncHJvcGVydHknOiAvKD8hXFxkKVxcdysoPz1cXHMqOig/ITopKS9cbiAgfSk7XG4gIGRlbGV0ZSBQcmlzbS5sYW5ndWFnZXMuY29mZmVlc2NyaXB0Wyd0ZW1wbGF0ZS1zdHJpbmcnXTtcbiAgUHJpc20ubGFuZ3VhZ2VzLmNvZmZlZSA9IFByaXNtLmxhbmd1YWdlcy5jb2ZmZWVzY3JpcHQ7XG59KShQcmlzbSk7XG4vKiBcInByaXNtanMvY29tcG9uZW50cy9wcmlzbS1kaWZmXCIgKi9cblxuXG4oZnVuY3Rpb24gKFByaXNtKSB7XG4gIFByaXNtLmxhbmd1YWdlcy5kaWZmID0ge1xuICAgICdjb29yZCc6IFsvLyBNYXRjaCBhbGwga2luZHMgb2YgY29vcmQgbGluZXMgKHByZWZpeGVkIGJ5IFwiKysrXCIsIFwiLS0tXCIgb3IgXCIqKipcIikuXG4gICAgL14oPzpcXCp7M318LXszfXxcXCt7M30pLiokL20sIC8vIE1hdGNoIFwiQEAgLi4uIEBAXCIgY29vcmQgbGluZXMgaW4gdW5pZmllZCBkaWZmLlxuICAgIC9eQEAuKkBAJC9tLCAvLyBNYXRjaCBjb29yZCBsaW5lcyBpbiBub3JtYWwgZGlmZiAoc3RhcnRzIHdpdGggYSBudW1iZXIpLlxuICAgIC9eXFxkLiokL21dIC8vIGRlbGV0ZWQsIGluc2VydGVkLCB1bmNoYW5nZWQsIGRpZmZcblxuICB9O1xuICAvKipcbiAgICogQSBtYXAgZnJvbSB0aGUgbmFtZSBvZiBhIGJsb2NrIHRvIGl0cyBsaW5lIHByZWZpeC5cbiAgICpcbiAgICogQHR5cGUge09iamVjdDxzdHJpbmcsIHN0cmluZz59XG4gICAqL1xuXG4gIHZhciBQUkVGSVhFUyA9IHtcbiAgICAnZGVsZXRlZC1zaWduJzogJy0nLFxuICAgICdkZWxldGVkLWFycm93JzogJzwnLFxuICAgICdpbnNlcnRlZC1zaWduJzogJysnLFxuICAgICdpbnNlcnRlZC1hcnJvdyc6ICc+JyxcbiAgICAndW5jaGFuZ2VkJzogJyAnLFxuICAgICdkaWZmJzogJyEnXG4gIH07IC8vIGFkZCBhIHRva2VuIGZvciBlYWNoIHByZWZpeFxuXG4gIE9iamVjdC5rZXlzKFBSRUZJWEVTKS5mb3JFYWNoKGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgdmFyIHByZWZpeCA9IFBSRUZJWEVTW25hbWVdO1xuICAgIHZhciBhbGlhcyA9IFtdO1xuXG4gICAgaWYgKCEvXlxcdyskLy50ZXN0KG5hbWUpKSB7XG4gICAgICAvLyBcImRlbGV0ZWQtc2lnblwiIC0+IFwiZGVsZXRlZFwiXG4gICAgICBhbGlhcy5wdXNoKC9cXHcrLy5leGVjKG5hbWUpWzBdKTtcbiAgICB9XG5cbiAgICBpZiAobmFtZSA9PT0gXCJkaWZmXCIpIHtcbiAgICAgIGFsaWFzLnB1c2goXCJib2xkXCIpO1xuICAgIH1cblxuICAgIFByaXNtLmxhbmd1YWdlcy5kaWZmW25hbWVdID0ge1xuICAgICAgcGF0dGVybjogUmVnRXhwKCdeKD86WycgKyBwcmVmaXggKyAnXS4qKD86XFxyXFxuP3xcXG58KD8hW1xcXFxzXFxcXFNdKSkpKycsICdtJyksXG4gICAgICBhbGlhczogYWxpYXMsXG4gICAgICBpbnNpZGU6IHtcbiAgICAgICAgJ2xpbmUnOiB7XG4gICAgICAgICAgcGF0dGVybjogLyguKSg/PVtcXHNcXFNdKS4qKD86XFxyXFxuP3xcXG4pPy8sXG4gICAgICAgICAgbG9va2JlaGluZDogdHJ1ZVxuICAgICAgICB9LFxuICAgICAgICAncHJlZml4Jzoge1xuICAgICAgICAgIHBhdHRlcm46IC9bXFxzXFxTXS8sXG4gICAgICAgICAgYWxpYXM6IC9cXHcrLy5leGVjKG5hbWUpWzBdXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuICB9KTsgLy8gbWFrZSBwcmVmaXhlcyBhdmFpbGFibGUgdG8gRGlmZiBwbHVnaW5cblxuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoUHJpc20ubGFuZ3VhZ2VzLmRpZmYsICdQUkVGSVhFUycsIHtcbiAgICB2YWx1ZTogUFJFRklYRVNcbiAgfSk7XG59KShQcmlzbSk7XG4vKiBcInByaXNtanMvY29tcG9uZW50cy9wcmlzbS1naXRcIiAqL1xuXG5cblByaXNtLmxhbmd1YWdlcy5naXQgPSB7XG4gIC8qXG4gICAqIEEgc2ltcGxlIG9uZSBsaW5lIGNvbW1lbnQgbGlrZSBpbiBhIGdpdCBzdGF0dXMgY29tbWFuZFxuICAgKiBGb3IgaW5zdGFuY2U6XG4gICAqICQgZ2l0IHN0YXR1c1xuICAgKiAjIE9uIGJyYW5jaCBpbmZpbml0ZS1zY3JvbGxcbiAgICogIyBZb3VyIGJyYW5jaCBhbmQgJ29yaWdpbi9zaGFyZWRCcmFuY2hlcy9mcm9udGVuZFRlYW0vaW5maW5pdGUtc2Nyb2xsJyBoYXZlIGRpdmVyZ2VkLFxuICAgKiAjIGFuZCBoYXZlIDEgYW5kIDIgZGlmZmVyZW50IGNvbW1pdHMgZWFjaCwgcmVzcGVjdGl2ZWx5LlxuICAgKiBub3RoaW5nIHRvIGNvbW1pdCAod29ya2luZyBkaXJlY3RvcnkgY2xlYW4pXG4gICAqL1xuICAnY29tbWVudCc6IC9eIy4qL20sXG5cbiAgLypcbiAgICogUmVnZXhwIHRvIG1hdGNoIHRoZSBjaGFuZ2VkIGxpbmVzIGluIGEgZ2l0IGRpZmYgb3V0cHV0LiBDaGVjayB0aGUgZXhhbXBsZSBiZWxvdy5cbiAgICovXG4gICdkZWxldGVkJzogL15bLeKAk10uKi9tLFxuICAnaW5zZXJ0ZWQnOiAvXlxcKy4qL20sXG5cbiAgLypcbiAgICogYSBzdHJpbmcgKGRvdWJsZSBhbmQgc2ltcGxlIHF1b3RlKVxuICAgKi9cbiAgJ3N0cmluZyc6IC8oXCJ8JykoPzpcXFxcLnwoPyFcXDEpW15cXFxcXFxyXFxuXSkqXFwxL20sXG5cbiAgLypcbiAgICogYSBnaXQgY29tbWFuZC4gSXQgc3RhcnRzIHdpdGggYSByYW5kb20gcHJvbXB0IGZpbmlzaGluZyBieSBhICQsIHRoZW4gXCJnaXRcIiB0aGVuIHNvbWUgb3RoZXIgcGFyYW1ldGVyc1xuICAgKiBGb3IgaW5zdGFuY2U6XG4gICAqICQgZ2l0IGFkZCBmaWxlLnR4dFxuICAgKi9cbiAgJ2NvbW1hbmQnOiB7XG4gICAgcGF0dGVybjogL14uKlxcJCBnaXQgLiokL20sXG4gICAgaW5zaWRlOiB7XG4gICAgICAvKlxuICAgICAgICogQSBnaXQgY29tbWFuZCBjYW4gY29udGFpbiBhIHBhcmFtZXRlciBzdGFydGluZyBieSBhIHNpbmdsZSBvciBhIGRvdWJsZSBkYXNoIGZvbGxvd2VkIGJ5IGEgc3RyaW5nXG4gICAgICAgKiBGb3IgaW5zdGFuY2U6XG4gICAgICAgKiAkIGdpdCBkaWZmIC0tY2FjaGVkXG4gICAgICAgKiAkIGdpdCBsb2cgLXBcbiAgICAgICAqL1xuICAgICAgJ3BhcmFtZXRlcic6IC9cXHMtLT9cXHcrL21cbiAgICB9XG4gIH0sXG5cbiAgLypcbiAgICogQ29vcmRpbmF0ZXMgZGlzcGxheWVkIGluIGEgZ2l0IGRpZmYgY29tbWFuZFxuICAgKiBGb3IgaW5zdGFuY2U6XG4gICAqICQgZ2l0IGRpZmZcbiAgICogZGlmZiAtLWdpdCBmaWxlLnR4dCBmaWxlLnR4dFxuICAgKiBpbmRleCA2MjE0OTUzLi4xZDU0YTUyIDEwMDY0NFxuICAgKiAtLS0gZmlsZS50eHRcbiAgICogKysrIGZpbGUudHh0XG4gICAqIEBAIC0xICsxLDIgQEBcbiAgICogLUhlcmUncyBteSB0ZXR4IGZpbGVcbiAgICogK0hlcmUncyBteSB0ZXh0IGZpbGVcbiAgICogK0FuZCB0aGlzIGlzIHRoZSBzZWNvbmQgbGluZVxuICAgKi9cbiAgJ2Nvb3JkJzogL15AQC4qQEAkL20sXG5cbiAgLypcbiAgICogTWF0Y2ggYSBcImNvbW1pdCBbU0hBMV1cIiBsaW5lIGluIGEgZ2l0IGxvZyBvdXRwdXQuXG4gICAqIEZvciBpbnN0YW5jZTpcbiAgICogJCBnaXQgbG9nXG4gICAqIGNvbW1pdCBhMTFhMTRlZjdlMjZmMmNhNjJkNGIzNWVhYzQ1NWNlNjM2ZDBkYzA5XG4gICAqIEF1dGhvcjogbGdpcmF1ZGVsXG4gICAqIERhdGU6ICAgTW9uIEZlYiAxNyAxMToxODozNCAyMDE0ICswMTAwXG4gICAqXG4gICAqICAgICBBZGQgb2YgYSBuZXcgbGluZVxuICAgKi9cbiAgJ2NvbW1pdC1zaGExJzogL15jb21taXQgXFx3ezQwfSQvbVxufTtcbi8qIFwicHJpc21qcy9jb21wb25lbnRzL3ByaXNtLWdvXCIgKi9cblxuUHJpc20ubGFuZ3VhZ2VzLmdvID0gUHJpc20ubGFuZ3VhZ2VzLmV4dGVuZCgnY2xpa2UnLCB7XG4gICdzdHJpbmcnOiB7XG4gICAgcGF0dGVybjogLyhbXCInYF0pKD86XFxcXFtcXHNcXFNdfCg/IVxcMSlbXlxcXFxdKSpcXDEvLFxuICAgIGdyZWVkeTogdHJ1ZVxuICB9LFxuICAna2V5d29yZCc6IC9cXGIoPzpicmVha3xjYXNlfGNoYW58Y29uc3R8Y29udGludWV8ZGVmYXVsdHxkZWZlcnxlbHNlfGZhbGx0aHJvdWdofGZvcnxmdW5jfGdvKD86dG8pP3xpZnxpbXBvcnR8aW50ZXJmYWNlfG1hcHxwYWNrYWdlfHJhbmdlfHJldHVybnxzZWxlY3R8c3RydWN0fHN3aXRjaHx0eXBlfHZhcilcXGIvLFxuICAnYm9vbGVhbic6IC9cXGIoPzpffGlvdGF8bmlsfHRydWV8ZmFsc2UpXFxiLyxcbiAgJ251bWJlcic6IC8oPzpcXGIweFthLWZcXGRdK3woPzpcXGJcXGQrKD86XFwuXFxkKik/fFxcQlxcLlxcZCspKD86ZVstK10/XFxkKyk/KWk/L2ksXG4gICdvcGVyYXRvcic6IC9bKlxcLyVeIT1dPT98XFwrWz0rXT98LVs9LV0/fFxcfFs9fF0/fCYoPzo9fCZ8XFxePT8pP3w+KD86Pj0/fD0pP3w8KD86PD0/fD18LSk/fDo9fFxcLlxcLlxcLi8sXG4gICdidWlsdGluJzogL1xcYig/OmJvb2x8Ynl0ZXxjb21wbGV4KD86NjR8MTI4KXxlcnJvcnxmbG9hdCg/OjMyfDY0KXxydW5lfHN0cmluZ3x1P2ludCg/Ojh8MTZ8MzJ8NjQpP3x1aW50cHRyfGFwcGVuZHxjYXB8Y2xvc2V8Y29tcGxleHxjb3B5fGRlbGV0ZXxpbWFnfGxlbnxtYWtlfG5ld3xwYW5pY3xwcmludCg/OmxuKT98cmVhbHxyZWNvdmVyKVxcYi9cbn0pO1xuZGVsZXRlIFByaXNtLmxhbmd1YWdlcy5nb1snY2xhc3MtbmFtZSddO1xuLyogXCJwcmlzbWpzL2NvbXBvbmVudHMvcHJpc20tZ3JhcGhxbFwiICovXG5cblByaXNtLmxhbmd1YWdlcy5ncmFwaHFsID0ge1xuICAnY29tbWVudCc6IC8jLiovLFxuICAnZGVzY3JpcHRpb24nOiB7XG4gICAgcGF0dGVybjogLyg/OlwiXCJcIig/OlteXCJdfCg/IVwiXCJcIilcIikqXCJcIlwifFwiKD86XFxcXC58W15cXFxcXCJcXHJcXG5dKSpcIikoPz1cXHMqW2Etel9dKS9pLFxuICAgIGdyZWVkeTogdHJ1ZSxcbiAgICBhbGlhczogJ3N0cmluZycsXG4gICAgaW5zaWRlOiB7XG4gICAgICAnbGFuZ3VhZ2UtbWFya2Rvd24nOiB7XG4gICAgICAgIHBhdHRlcm46IC8oXlwiKD86XCJcIik/KSg/IVxcMSlbXFxzXFxTXSsoPz1cXDEkKS8sXG4gICAgICAgIGxvb2tiZWhpbmQ6IHRydWUsXG4gICAgICAgIGluc2lkZTogUHJpc20ubGFuZ3VhZ2VzLm1hcmtkb3duXG4gICAgICB9XG4gICAgfVxuICB9LFxuICAnc3RyaW5nJzoge1xuICAgIHBhdHRlcm46IC9cIlwiXCIoPzpbXlwiXXwoPyFcIlwiXCIpXCIpKlwiXCJcInxcIig/OlxcXFwufFteXFxcXFwiXFxyXFxuXSkqXCIvLFxuICAgIGdyZWVkeTogdHJ1ZVxuICB9LFxuICAnbnVtYmVyJzogLyg/OlxcQi18XFxiKVxcZCsoPzpcXC5cXGQrKT8oPzplWystXT9cXGQrKT9cXGIvaSxcbiAgJ2Jvb2xlYW4nOiAvXFxiKD86dHJ1ZXxmYWxzZSlcXGIvLFxuICAndmFyaWFibGUnOiAvXFwkW2Etel9dXFx3Ki9pLFxuICAnZGlyZWN0aXZlJzoge1xuICAgIHBhdHRlcm46IC9AW2Etel9dXFx3Ki9pLFxuICAgIGFsaWFzOiAnZnVuY3Rpb24nXG4gIH0sXG4gICdhdHRyLW5hbWUnOiB7XG4gICAgcGF0dGVybjogL1thLXpfXVxcdyooPz1cXHMqKD86XFwoKD86W14oKVwiXXxcIig/OlxcXFwufFteXFxcXFwiXFxyXFxuXSkqXCIpKlxcKSk/OikvaSxcbiAgICBncmVlZHk6IHRydWVcbiAgfSxcbiAgJ2NsYXNzLW5hbWUnOiB7XG4gICAgcGF0dGVybjogLyhcXGIoPzplbnVtfGltcGxlbWVudHN8aW50ZXJmYWNlfG9ufHNjYWxhcnx0eXBlfHVuaW9uKVxccyt8JlxccyopW2EtekEtWl9dXFx3Ki8sXG4gICAgbG9va2JlaGluZDogdHJ1ZVxuICB9LFxuICAnZnJhZ21lbnQnOiB7XG4gICAgcGF0dGVybjogLyhcXGJmcmFnbWVudFxccyt8XFwuezN9XFxzKig/IW9uXFxiKSlbYS16QS1aX11cXHcqLyxcbiAgICBsb29rYmVoaW5kOiB0cnVlLFxuICAgIGFsaWFzOiAnZnVuY3Rpb24nXG4gIH0sXG4gICdrZXl3b3JkJzogL1xcYig/OmRpcmVjdGl2ZXxlbnVtfGV4dGVuZHxmcmFnbWVudHxpbXBsZW1lbnRzfGlucHV0fGludGVyZmFjZXxtdXRhdGlvbnxvbnxxdWVyeXxyZXBlYXRhYmxlfHNjYWxhcnxzY2hlbWF8c3Vic2NyaXB0aW9ufHR5cGV8dW5pb24pXFxiLyxcbiAgJ29wZXJhdG9yJzogL1shPXwmXXxcXC57M30vLFxuICAncHVuY3R1YXRpb24nOiAvWyEoKXt9XFxbXFxdOj0sXS8sXG4gICdjb25zdGFudCc6IC9cXGIoPyFJRFxcYilbQS1aXVtBLVpfXFxkXSpcXGIvXG59O1xuLyogXCJwcmlzbWpzL2NvbXBvbmVudHMvcHJpc20tbWFya3VwLXRlbXBsYXRpbmdcIiAqL1xuXG4oZnVuY3Rpb24gKFByaXNtKSB7XG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBwbGFjZWhvbGRlciBmb3IgdGhlIGdpdmVuIGxhbmd1YWdlIGlkIGFuZCBpbmRleC5cbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IGxhbmd1YWdlXG4gICAqIEBwYXJhbSB7c3RyaW5nfG51bWJlcn0gaW5kZXhcbiAgICogQHJldHVybnMge3N0cmluZ31cbiAgICovXG4gIGZ1bmN0aW9uIGdldFBsYWNlaG9sZGVyKGxhbmd1YWdlLCBpbmRleCkge1xuICAgIHJldHVybiAnX19fJyArIGxhbmd1YWdlLnRvVXBwZXJDYXNlKCkgKyBpbmRleCArICdfX18nO1xuICB9XG5cbiAgT2JqZWN0LmRlZmluZVByb3BlcnRpZXMoUHJpc20ubGFuZ3VhZ2VzWydtYXJrdXAtdGVtcGxhdGluZyddID0ge30sIHtcbiAgICBidWlsZFBsYWNlaG9sZGVyczoge1xuICAgICAgLyoqXG4gICAgICAgKiBUb2tlbml6ZSBhbGwgaW5saW5lIHRlbXBsYXRpbmcgZXhwcmVzc2lvbnMgbWF0Y2hpbmcgYHBsYWNlaG9sZGVyUGF0dGVybmAuXG4gICAgICAgKlxuICAgICAgICogSWYgYHJlcGxhY2VGaWx0ZXJgIGlzIHByb3ZpZGVkLCBvbmx5IG1hdGNoZXMgb2YgYHBsYWNlaG9sZGVyUGF0dGVybmAgZm9yIHdoaWNoIGByZXBsYWNlRmlsdGVyYCByZXR1cm5zXG4gICAgICAgKiBgdHJ1ZWAgd2lsbCBiZSByZXBsYWNlZC5cbiAgICAgICAqXG4gICAgICAgKiBAcGFyYW0ge29iamVjdH0gZW52IFRoZSBlbnZpcm9ubWVudCBvZiB0aGUgYGJlZm9yZS10b2tlbml6ZWAgaG9vay5cbiAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBsYW5ndWFnZSBUaGUgbGFuZ3VhZ2UgaWQuXG4gICAgICAgKiBAcGFyYW0ge1JlZ0V4cH0gcGxhY2Vob2xkZXJQYXR0ZXJuIFRoZSBtYXRjaGVzIG9mIHRoaXMgcGF0dGVybiB3aWxsIGJlIHJlcGxhY2VkIGJ5IHBsYWNlaG9sZGVycy5cbiAgICAgICAqIEBwYXJhbSB7KG1hdGNoOiBzdHJpbmcpID0+IGJvb2xlYW59IFtyZXBsYWNlRmlsdGVyXVxuICAgICAgICovXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gKGVudiwgbGFuZ3VhZ2UsIHBsYWNlaG9sZGVyUGF0dGVybiwgcmVwbGFjZUZpbHRlcikge1xuICAgICAgICBpZiAoZW52Lmxhbmd1YWdlICE9PSBsYW5ndWFnZSkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciB0b2tlblN0YWNrID0gZW52LnRva2VuU3RhY2sgPSBbXTtcbiAgICAgICAgZW52LmNvZGUgPSBlbnYuY29kZS5yZXBsYWNlKHBsYWNlaG9sZGVyUGF0dGVybiwgZnVuY3Rpb24gKG1hdGNoKSB7XG4gICAgICAgICAgaWYgKHR5cGVvZiByZXBsYWNlRmlsdGVyID09PSAnZnVuY3Rpb24nICYmICFyZXBsYWNlRmlsdGVyKG1hdGNoKSkge1xuICAgICAgICAgICAgcmV0dXJuIG1hdGNoO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHZhciBpID0gdG9rZW5TdGFjay5sZW5ndGg7XG4gICAgICAgICAgdmFyIHBsYWNlaG9sZGVyOyAvLyBDaGVjayBmb3IgZXhpc3Rpbmcgc3RyaW5nc1xuXG4gICAgICAgICAgd2hpbGUgKGVudi5jb2RlLmluZGV4T2YocGxhY2Vob2xkZXIgPSBnZXRQbGFjZWhvbGRlcihsYW5ndWFnZSwgaSkpICE9PSAtMSkge1xuICAgICAgICAgICAgKytpO1xuICAgICAgICAgIH0gLy8gQ3JlYXRlIGEgc3BhcnNlIGFycmF5XG5cblxuICAgICAgICAgIHRva2VuU3RhY2tbaV0gPSBtYXRjaDtcbiAgICAgICAgICByZXR1cm4gcGxhY2Vob2xkZXI7XG4gICAgICAgIH0pOyAvLyBTd2l0Y2ggdGhlIGdyYW1tYXIgdG8gbWFya3VwXG5cbiAgICAgICAgZW52LmdyYW1tYXIgPSBQcmlzbS5sYW5ndWFnZXMubWFya3VwO1xuICAgICAgfVxuICAgIH0sXG4gICAgdG9rZW5pemVQbGFjZWhvbGRlcnM6IHtcbiAgICAgIC8qKlxuICAgICAgICogUmVwbGFjZSBwbGFjZWhvbGRlcnMgd2l0aCBwcm9wZXIgdG9rZW5zIGFmdGVyIHRva2VuaXppbmcuXG4gICAgICAgKlxuICAgICAgICogQHBhcmFtIHtvYmplY3R9IGVudiBUaGUgZW52aXJvbm1lbnQgb2YgdGhlIGBhZnRlci10b2tlbml6ZWAgaG9vay5cbiAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBsYW5ndWFnZSBUaGUgbGFuZ3VhZ2UgaWQuXG4gICAgICAgKi9cbiAgICAgIHZhbHVlOiBmdW5jdGlvbiAoZW52LCBsYW5ndWFnZSkge1xuICAgICAgICBpZiAoZW52Lmxhbmd1YWdlICE9PSBsYW5ndWFnZSB8fCAhZW52LnRva2VuU3RhY2spIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH0gLy8gU3dpdGNoIHRoZSBncmFtbWFyIGJhY2tcblxuXG4gICAgICAgIGVudi5ncmFtbWFyID0gUHJpc20ubGFuZ3VhZ2VzW2xhbmd1YWdlXTtcbiAgICAgICAgdmFyIGogPSAwO1xuICAgICAgICB2YXIga2V5cyA9IE9iamVjdC5rZXlzKGVudi50b2tlblN0YWNrKTtcblxuICAgICAgICBmdW5jdGlvbiB3YWxrVG9rZW5zKHRva2Vucykge1xuICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdG9rZW5zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAvLyBhbGwgcGxhY2Vob2xkZXJzIGFyZSByZXBsYWNlZCBhbHJlYWR5XG4gICAgICAgICAgICBpZiAoaiA+PSBrZXlzLmxlbmd0aCkge1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdmFyIHRva2VuID0gdG9rZW5zW2ldO1xuXG4gICAgICAgICAgICBpZiAodHlwZW9mIHRva2VuID09PSAnc3RyaW5nJyB8fCB0b2tlbi5jb250ZW50ICYmIHR5cGVvZiB0b2tlbi5jb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICB2YXIgayA9IGtleXNbal07XG4gICAgICAgICAgICAgIHZhciB0ID0gZW52LnRva2VuU3RhY2tba107XG4gICAgICAgICAgICAgIHZhciBzID0gdHlwZW9mIHRva2VuID09PSAnc3RyaW5nJyA/IHRva2VuIDogdG9rZW4uY29udGVudDtcbiAgICAgICAgICAgICAgdmFyIHBsYWNlaG9sZGVyID0gZ2V0UGxhY2Vob2xkZXIobGFuZ3VhZ2UsIGspO1xuICAgICAgICAgICAgICB2YXIgaW5kZXggPSBzLmluZGV4T2YocGxhY2Vob2xkZXIpO1xuXG4gICAgICAgICAgICAgIGlmIChpbmRleCA+IC0xKSB7XG4gICAgICAgICAgICAgICAgKytqO1xuICAgICAgICAgICAgICAgIHZhciBiZWZvcmUgPSBzLnN1YnN0cmluZygwLCBpbmRleCk7XG4gICAgICAgICAgICAgICAgdmFyIG1pZGRsZSA9IG5ldyBQcmlzbS5Ub2tlbihsYW5ndWFnZSwgUHJpc20udG9rZW5pemUodCwgZW52LmdyYW1tYXIpLCAnbGFuZ3VhZ2UtJyArIGxhbmd1YWdlLCB0KTtcbiAgICAgICAgICAgICAgICB2YXIgYWZ0ZXIgPSBzLnN1YnN0cmluZyhpbmRleCArIHBsYWNlaG9sZGVyLmxlbmd0aCk7XG4gICAgICAgICAgICAgICAgdmFyIHJlcGxhY2VtZW50ID0gW107XG5cbiAgICAgICAgICAgICAgICBpZiAoYmVmb3JlKSB7XG4gICAgICAgICAgICAgICAgICByZXBsYWNlbWVudC5wdXNoLmFwcGx5KHJlcGxhY2VtZW50LCB3YWxrVG9rZW5zKFtiZWZvcmVdKSk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgcmVwbGFjZW1lbnQucHVzaChtaWRkbGUpO1xuXG4gICAgICAgICAgICAgICAgaWYgKGFmdGVyKSB7XG4gICAgICAgICAgICAgICAgICByZXBsYWNlbWVudC5wdXNoLmFwcGx5KHJlcGxhY2VtZW50LCB3YWxrVG9rZW5zKFthZnRlcl0pKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHRva2VuID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICAgICAgdG9rZW5zLnNwbGljZS5hcHBseSh0b2tlbnMsIFtpLCAxXS5jb25jYXQocmVwbGFjZW1lbnQpKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgdG9rZW4uY29udGVudCA9IHJlcGxhY2VtZW50O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIGlmICh0b2tlbi5jb250ZW50XG4gICAgICAgICAgICAvKiAmJiB0eXBlb2YgdG9rZW4uY29udGVudCAhPT0gJ3N0cmluZycgKi9cbiAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgIHdhbGtUb2tlbnModG9rZW4uY29udGVudCk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXR1cm4gdG9rZW5zO1xuICAgICAgICB9XG5cbiAgICAgICAgd2Fsa1Rva2VucyhlbnYudG9rZW5zKTtcbiAgICAgIH1cbiAgICB9XG4gIH0pO1xufSkoUHJpc20pO1xuLyogXCJwcmlzbWpzL2NvbXBvbmVudHMvcHJpc20taGFuZGxlYmFyc1wiICovXG5cblxuKGZ1bmN0aW9uIChQcmlzbSkge1xuICBQcmlzbS5sYW5ndWFnZXMuaGFuZGxlYmFycyA9IHtcbiAgICAnY29tbWVudCc6IC9cXHtcXHshW1xcc1xcU10qP1xcfVxcfS8sXG4gICAgJ2RlbGltaXRlcic6IHtcbiAgICAgIHBhdHRlcm46IC9eXFx7XFx7XFx7P3xcXH1cXH1cXH0/JC9pLFxuICAgICAgYWxpYXM6ICdwdW5jdHVhdGlvbidcbiAgICB9LFxuICAgICdzdHJpbmcnOiAvKFtcIiddKSg/OlxcXFwufCg/IVxcMSlbXlxcXFxcXHJcXG5dKSpcXDEvLFxuICAgICdudW1iZXInOiAvXFxiMHhbXFxkQS1GYS1mXStcXGJ8KD86XFxiXFxkKyg/OlxcLlxcZCopP3xcXEJcXC5cXGQrKSg/OltFZV1bKy1dP1xcZCspPy8sXG4gICAgJ2Jvb2xlYW4nOiAvXFxiKD86dHJ1ZXxmYWxzZSlcXGIvLFxuICAgICdibG9jayc6IHtcbiAgICAgIHBhdHRlcm46IC9eKFxccyooPzp+XFxzKik/KVsjXFwvXVxcUys/KD89XFxzKig/On5cXHMqKT8kfFxccykvaSxcbiAgICAgIGxvb2tiZWhpbmQ6IHRydWUsXG4gICAgICBhbGlhczogJ2tleXdvcmQnXG4gICAgfSxcbiAgICAnYnJhY2tldHMnOiB7XG4gICAgICBwYXR0ZXJuOiAvXFxbW15cXF1dK1xcXS8sXG4gICAgICBpbnNpZGU6IHtcbiAgICAgICAgcHVuY3R1YXRpb246IC9cXFt8XFxdLyxcbiAgICAgICAgdmFyaWFibGU6IC9bXFxzXFxTXSsvXG4gICAgICB9XG4gICAgfSxcbiAgICAncHVuY3R1YXRpb24nOiAvWyFcIiMlJic6KCkqKywuXFwvOzw9PkBcXFtcXFxcXFxdXmB7fH1+XS8sXG4gICAgJ3ZhcmlhYmxlJzogL1teIVwiIyUmJygpKissXFwvOzw9PkBcXFtcXFxcXFxdXmB7fH1+XFxzXSsvXG4gIH07XG4gIFByaXNtLmhvb2tzLmFkZCgnYmVmb3JlLXRva2VuaXplJywgZnVuY3Rpb24gKGVudikge1xuICAgIHZhciBoYW5kbGViYXJzUGF0dGVybiA9IC9cXHtcXHtcXHtbXFxzXFxTXSs/XFx9XFx9XFx9fFxce1xce1tcXHNcXFNdKz9cXH1cXH0vZztcbiAgICBQcmlzbS5sYW5ndWFnZXNbJ21hcmt1cC10ZW1wbGF0aW5nJ10uYnVpbGRQbGFjZWhvbGRlcnMoZW52LCAnaGFuZGxlYmFycycsIGhhbmRsZWJhcnNQYXR0ZXJuKTtcbiAgfSk7XG4gIFByaXNtLmhvb2tzLmFkZCgnYWZ0ZXItdG9rZW5pemUnLCBmdW5jdGlvbiAoZW52KSB7XG4gICAgUHJpc20ubGFuZ3VhZ2VzWydtYXJrdXAtdGVtcGxhdGluZyddLnRva2VuaXplUGxhY2Vob2xkZXJzKGVudiwgJ2hhbmRsZWJhcnMnKTtcbiAgfSk7XG59KShQcmlzbSk7XG4vKiBcInByaXNtanMvY29tcG9uZW50cy9wcmlzbS1qc29uXCIgKi9cbi8vIGh0dHBzOi8vd3d3Lmpzb24ub3JnL2pzb24tZW4uaHRtbFxuXG5cblByaXNtLmxhbmd1YWdlcy5qc29uID0ge1xuICAncHJvcGVydHknOiB7XG4gICAgcGF0dGVybjogL1wiKD86XFxcXC58W15cXFxcXCJcXHJcXG5dKSpcIig/PVxccyo6KS8sXG4gICAgZ3JlZWR5OiB0cnVlXG4gIH0sXG4gICdzdHJpbmcnOiB7XG4gICAgcGF0dGVybjogL1wiKD86XFxcXC58W15cXFxcXCJcXHJcXG5dKSpcIig/IVxccyo6KS8sXG4gICAgZ3JlZWR5OiB0cnVlXG4gIH0sXG4gICdjb21tZW50Jzoge1xuICAgIHBhdHRlcm46IC9cXC9cXC8uKnxcXC9cXCpbXFxzXFxTXSo/KD86XFwqXFwvfCQpLyxcbiAgICBncmVlZHk6IHRydWVcbiAgfSxcbiAgJ251bWJlcic6IC8tP1xcYlxcZCsoPzpcXC5cXGQrKT8oPzplWystXT9cXGQrKT9cXGIvaSxcbiAgJ3B1bmN0dWF0aW9uJzogL1t7fVtcXF0sXS8sXG4gICdvcGVyYXRvcic6IC86LyxcbiAgJ2Jvb2xlYW4nOiAvXFxiKD86dHJ1ZXxmYWxzZSlcXGIvLFxuICAnbnVsbCc6IHtcbiAgICBwYXR0ZXJuOiAvXFxibnVsbFxcYi8sXG4gICAgYWxpYXM6ICdrZXl3b3JkJ1xuICB9XG59O1xuUHJpc20ubGFuZ3VhZ2VzLndlYm1hbmlmZXN0ID0gUHJpc20ubGFuZ3VhZ2VzLmpzb247XG4vKiBcInByaXNtanMvY29tcG9uZW50cy9wcmlzbS1sZXNzXCIgKi9cblxuLyogRklYTUUgOlxuIDpleHRlbmQoKSBpcyBub3QgaGFuZGxlZCBzcGVjaWZpY2FsbHkgOiBpdHMgaGlnaGxpZ2h0aW5nIGlzIGJ1Z2d5LlxuIE1peGluIHVzYWdlIG11c3QgYmUgaW5zaWRlIGEgcnVsZXNldCB0byBiZSBoaWdobGlnaHRlZC5cbiBBdC1ydWxlcyAoZS5nLiBpbXBvcnQpIGNvbnRhaW5pbmcgaW50ZXJwb2xhdGlvbnMgYXJlIGJ1Z2d5LlxuIERldGFjaGVkIHJ1bGVzZXRzIGFyZSBoaWdobGlnaHRlZCBhcyBhdC1ydWxlcy5cbiBBIGNvbW1lbnQgYmVmb3JlIGEgbWl4aW4gdXNhZ2UgcHJldmVudHMgdGhlIGxhdHRlciB0byBiZSBwcm9wZXJseSBoaWdobGlnaHRlZC5cbiAqL1xuXG5QcmlzbS5sYW5ndWFnZXMubGVzcyA9IFByaXNtLmxhbmd1YWdlcy5leHRlbmQoJ2NzcycsIHtcbiAgJ2NvbW1lbnQnOiBbL1xcL1xcKltcXHNcXFNdKj9cXCpcXC8vLCB7XG4gICAgcGF0dGVybjogLyhefFteXFxcXF0pXFwvXFwvLiovLFxuICAgIGxvb2tiZWhpbmQ6IHRydWVcbiAgfV0sXG4gICdhdHJ1bGUnOiB7XG4gICAgcGF0dGVybjogL0BbXFx3LV0oPzpcXCgoPzpbXigpe31dfFxcKFteKCl7fV0qXFwpKSpcXCl8W14oKXt9O1xcc118XFxzKyg/IVxccykpKj8oPz1cXHMqXFx7KS8sXG4gICAgaW5zaWRlOiB7XG4gICAgICAncHVuY3R1YXRpb24nOiAvWzooKV0vXG4gICAgfVxuICB9LFxuICAvLyBzZWxlY3RvcnMgYW5kIG1peGlucyBhcmUgY29uc2lkZXJlZCB0aGUgc2FtZVxuICAnc2VsZWN0b3InOiB7XG4gICAgcGF0dGVybjogLyg/OkBcXHtbXFx3LV0rXFx9fFtee307XFxzQF0pKD86QFxce1tcXHctXStcXH18XFwoKD86W14oKXt9XXxcXChbXigpe31dKlxcKSkqXFwpfFteKCl7fTtAXFxzXXxcXHMrKD8hXFxzKSkqPyg/PVxccypcXHspLyxcbiAgICBpbnNpZGU6IHtcbiAgICAgIC8vIG1peGluIHBhcmFtZXRlcnNcbiAgICAgICd2YXJpYWJsZSc6IC9AK1tcXHctXSsvXG4gICAgfVxuICB9LFxuICAncHJvcGVydHknOiAvKD86QFxce1tcXHctXStcXH18W1xcdy1dKSsoPzpcXCtfPyk/KD89XFxzKjopL2ksXG4gICdvcGVyYXRvcic6IC9bK1xcLSpcXC9dL1xufSk7XG5QcmlzbS5sYW5ndWFnZXMuaW5zZXJ0QmVmb3JlKCdsZXNzJywgJ3Byb3BlcnR5Jywge1xuICAndmFyaWFibGUnOiBbLy8gVmFyaWFibGUgZGVjbGFyYXRpb24gKHRoZSBjb2xvbiBtdXN0IGJlIGNvbnN1bWVkISlcbiAge1xuICAgIHBhdHRlcm46IC9AW1xcdy1dK1xccyo6LyxcbiAgICBpbnNpZGU6IHtcbiAgICAgIFwicHVuY3R1YXRpb25cIjogLzovXG4gICAgfVxuICB9LCAvLyBWYXJpYWJsZSB1c2FnZVxuICAvQEA/W1xcdy1dKy9dLFxuICAnbWl4aW4tdXNhZ2UnOiB7XG4gICAgcGF0dGVybjogLyhbeztdXFxzKilbLiNdKD8hXFxkKVtcXHctXS4qPyg/PVsoO10pLyxcbiAgICBsb29rYmVoaW5kOiB0cnVlLFxuICAgIGFsaWFzOiAnZnVuY3Rpb24nXG4gIH1cbn0pO1xuLyogXCJwcmlzbWpzL2NvbXBvbmVudHMvcHJpc20tbWFrZWZpbGVcIiAqL1xuXG5QcmlzbS5sYW5ndWFnZXMubWFrZWZpbGUgPSB7XG4gICdjb21tZW50Jzoge1xuICAgIHBhdHRlcm46IC8oXnxbXlxcXFxdKSMoPzpcXFxcKD86XFxyXFxufFtcXHNcXFNdKXxbXlxcXFxcXHJcXG5dKSovLFxuICAgIGxvb2tiZWhpbmQ6IHRydWVcbiAgfSxcbiAgJ3N0cmluZyc6IHtcbiAgICBwYXR0ZXJuOiAvKFtcIiddKSg/OlxcXFwoPzpcXHJcXG58W1xcc1xcU10pfCg/IVxcMSlbXlxcXFxcXHJcXG5dKSpcXDEvLFxuICAgIGdyZWVkeTogdHJ1ZVxuICB9LFxuICAvLyBCdWlsdC1pbiB0YXJnZXQgbmFtZXNcbiAgJ2J1aWx0aW4nOiAvXFwuW0EtWl1bXjojPVxcc10rKD89XFxzKjooPyE9KSkvLFxuICAvLyBUYXJnZXRzXG4gICdzeW1ib2wnOiB7XG4gICAgcGF0dGVybjogL14oPzpbXjo9XFxzXXxbIFxcdF0rKD8hW1xcczpdKSkrKD89XFxzKjooPyE9KSkvbSxcbiAgICBpbnNpZGU6IHtcbiAgICAgICd2YXJpYWJsZSc6IC9cXCQrKD86KD8hXFwkKVteKCl7fTojPVxcc10rfCg/PVsoe10pKS9cbiAgICB9XG4gIH0sXG4gICd2YXJpYWJsZSc6IC9cXCQrKD86KD8hXFwkKVteKCl7fTojPVxcc10rfFxcKFtAKiU8Xis/XVtERl1cXCl8KD89Wyh7XSkpLyxcbiAgJ2tleXdvcmQnOiBbLy8gRGlyZWN0aXZlc1xuICAvLWluY2x1ZGVcXGJ8XFxiKD86ZGVmaW5lfGVsc2V8ZW5kZWZ8ZW5kaWZ8ZXhwb3J0fGlmbj9kZWZ8aWZuP2VxfGluY2x1ZGV8b3ZlcnJpZGV8cHJpdmF0ZXxzaW5jbHVkZXx1bmRlZmluZXx1bmV4cG9ydHx2cGF0aClcXGIvLCAvLyBGdW5jdGlvbnNcbiAge1xuICAgIHBhdHRlcm46IC8oXFwoKSg/OmFkZHN1ZmZpeHxhYnNwYXRofGFuZHxiYXNlbmFtZXxjYWxsfGRpcnxlcnJvcnxldmFsfGZpbGV8ZmlsdGVyKD86LW91dCk/fGZpbmRzdHJpbmd8Zmlyc3R3b3JkfGZsYXZvcnxmb3JlYWNofGd1aWxlfGlmfGluZm98am9pbnxsYXN0d29yZHxsb2FkfG5vdGRpcnxvcnxvcmlnaW58cGF0c3Vic3R8cmVhbHBhdGh8c2hlbGx8c29ydHxzdHJpcHxzdWJzdHxzdWZmaXh8dmFsdWV8d2FybmluZ3x3aWxkY2FyZHx3b3JkKD86c3xsaXN0KT8pKD89WyBcXHRdKS8sXG4gICAgbG9va2JlaGluZDogdHJ1ZVxuICB9XSxcbiAgJ29wZXJhdG9yJzogLyg/Ojo6fFs/OishXSk/PXxbfEBdLyxcbiAgJ3B1bmN0dWF0aW9uJzogL1s6Oygpe31dL1xufTtcbi8qIFwicHJpc21qcy9jb21wb25lbnRzL3ByaXNtLW1hcmtkb3duXCIgKi9cblxuKGZ1bmN0aW9uIChQcmlzbSkge1xuICAvLyBBbGxvdyBvbmx5IG9uZSBsaW5lIGJyZWFrXG4gIHZhciBpbm5lciA9IC8oPzpcXFxcLnxbXlxcXFxcXG5cXHJdfCg/OlxcbnxcXHJcXG4/KSg/IVxcbnxcXHJcXG4/KSkvLnNvdXJjZTtcbiAgLyoqXG4gICAqIFRoaXMgZnVuY3Rpb24gaXMgaW50ZW5kZWQgZm9yIHRoZSBjcmVhdGlvbiBvZiB0aGUgYm9sZCBvciBpdGFsaWMgcGF0dGVybi5cbiAgICpcbiAgICogVGhpcyBhbHNvIGFkZHMgYSBsb29rYmVoaW5kIGdyb3VwIHRvIHRoZSBnaXZlbiBwYXR0ZXJuIHRvIGVuc3VyZSB0aGF0IHRoZSBwYXR0ZXJuIGlzIG5vdCBiYWNrc2xhc2gtZXNjYXBlZC5cbiAgICpcbiAgICogX05vdGU6XyBLZWVwIGluIG1pbmQgdGhhdCB0aGlzIGFkZHMgYSBjYXB0dXJpbmcgZ3JvdXAuXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBwYXR0ZXJuXG4gICAqIEByZXR1cm5zIHtSZWdFeHB9XG4gICAqL1xuXG4gIGZ1bmN0aW9uIGNyZWF0ZUlubGluZShwYXR0ZXJuKSB7XG4gICAgcGF0dGVybiA9IHBhdHRlcm4ucmVwbGFjZSgvPGlubmVyPi9nLCBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gaW5uZXI7XG4gICAgfSk7XG4gICAgcmV0dXJuIFJlZ0V4cCgvKCg/Ol58W15cXFxcXSkoPzpcXFxcezJ9KSopLy5zb3VyY2UgKyAnKD86JyArIHBhdHRlcm4gKyAnKScpO1xuICB9XG5cbiAgdmFyIHRhYmxlQ2VsbCA9IC8oPzpcXFxcLnxgYCg/OlteYFxcclxcbl18YCg/IWApKStgYHxgW15gXFxyXFxuXStgfFteXFxcXHxcXHJcXG5gXSkrLy5zb3VyY2U7XG4gIHZhciB0YWJsZVJvdyA9IC9cXHw/X18oPzpcXHxfXykrXFx8Pyg/Oig/OlxcbnxcXHJcXG4/KXwoPyFbXFxzXFxTXSkpLy5zb3VyY2UucmVwbGFjZSgvX18vZywgZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB0YWJsZUNlbGw7XG4gIH0pO1xuICB2YXIgdGFibGVMaW5lID0gL1xcfD9bIFxcdF0qOj8tezMsfTo/WyBcXHRdKig/OlxcfFsgXFx0XSo6Py17Myx9Oj9bIFxcdF0qKStcXHw/KD86XFxufFxcclxcbj8pLy5zb3VyY2U7XG4gIFByaXNtLmxhbmd1YWdlcy5tYXJrZG93biA9IFByaXNtLmxhbmd1YWdlcy5leHRlbmQoJ21hcmt1cCcsIHt9KTtcbiAgUHJpc20ubGFuZ3VhZ2VzLmluc2VydEJlZm9yZSgnbWFya2Rvd24nLCAncHJvbG9nJywge1xuICAgICdmcm9udC1tYXR0ZXItYmxvY2snOiB7XG4gICAgICBwYXR0ZXJuOiAvKF4oPzpcXHMqW1xcclxcbl0pPyktLS0oPyEuKVtcXHNcXFNdKj9bXFxyXFxuXS0tLSg/IS4pLyxcbiAgICAgIGxvb2tiZWhpbmQ6IHRydWUsXG4gICAgICBncmVlZHk6IHRydWUsXG4gICAgICBpbnNpZGU6IHtcbiAgICAgICAgJ3B1bmN0dWF0aW9uJzogL14tLS18LS0tJC8sXG4gICAgICAgICdmb250LW1hdHRlcic6IHtcbiAgICAgICAgICBwYXR0ZXJuOiAvXFxTKyg/OlxccytcXFMrKSovLFxuICAgICAgICAgIGFsaWFzOiBbJ3lhbWwnLCAnbGFuZ3VhZ2UteWFtbCddLFxuICAgICAgICAgIGluc2lkZTogUHJpc20ubGFuZ3VhZ2VzLnlhbWxcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG4gICAgJ2Jsb2NrcXVvdGUnOiB7XG4gICAgICAvLyA+IC4uLlxuICAgICAgcGF0dGVybjogL14+KD86W1xcdCBdKj4pKi9tLFxuICAgICAgYWxpYXM6ICdwdW5jdHVhdGlvbidcbiAgICB9LFxuICAgICd0YWJsZSc6IHtcbiAgICAgIHBhdHRlcm46IFJlZ0V4cCgnXicgKyB0YWJsZVJvdyArIHRhYmxlTGluZSArICcoPzonICsgdGFibGVSb3cgKyAnKSonLCAnbScpLFxuICAgICAgaW5zaWRlOiB7XG4gICAgICAgICd0YWJsZS1kYXRhLXJvd3MnOiB7XG4gICAgICAgICAgcGF0dGVybjogUmVnRXhwKCdeKCcgKyB0YWJsZVJvdyArIHRhYmxlTGluZSArICcpKD86JyArIHRhYmxlUm93ICsgJykqJCcpLFxuICAgICAgICAgIGxvb2tiZWhpbmQ6IHRydWUsXG4gICAgICAgICAgaW5zaWRlOiB7XG4gICAgICAgICAgICAndGFibGUtZGF0YSc6IHtcbiAgICAgICAgICAgICAgcGF0dGVybjogUmVnRXhwKHRhYmxlQ2VsbCksXG4gICAgICAgICAgICAgIGluc2lkZTogUHJpc20ubGFuZ3VhZ2VzLm1hcmtkb3duXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgJ3B1bmN0dWF0aW9uJzogL1xcfC9cbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgICd0YWJsZS1saW5lJzoge1xuICAgICAgICAgIHBhdHRlcm46IFJlZ0V4cCgnXignICsgdGFibGVSb3cgKyAnKScgKyB0YWJsZUxpbmUgKyAnJCcpLFxuICAgICAgICAgIGxvb2tiZWhpbmQ6IHRydWUsXG4gICAgICAgICAgaW5zaWRlOiB7XG4gICAgICAgICAgICAncHVuY3R1YXRpb24nOiAvXFx8fDo/LXszLH06Py9cbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgICd0YWJsZS1oZWFkZXItcm93Jzoge1xuICAgICAgICAgIHBhdHRlcm46IFJlZ0V4cCgnXicgKyB0YWJsZVJvdyArICckJyksXG4gICAgICAgICAgaW5zaWRlOiB7XG4gICAgICAgICAgICAndGFibGUtaGVhZGVyJzoge1xuICAgICAgICAgICAgICBwYXR0ZXJuOiBSZWdFeHAodGFibGVDZWxsKSxcbiAgICAgICAgICAgICAgYWxpYXM6ICdpbXBvcnRhbnQnLFxuICAgICAgICAgICAgICBpbnNpZGU6IFByaXNtLmxhbmd1YWdlcy5tYXJrZG93blxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICdwdW5jdHVhdGlvbic6IC9cXHwvXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcbiAgICAnY29kZSc6IFt7XG4gICAgICAvLyBQcmVmaXhlZCBieSA0IHNwYWNlcyBvciAxIHRhYiBhbmQgcHJlY2VkZWQgYnkgYW4gZW1wdHkgbGluZVxuICAgICAgcGF0dGVybjogLygoPzpefFxcbilbIFxcdF0qXFxufCg/Ol58XFxyXFxuPylbIFxcdF0qXFxyXFxuPykoPzogezR9fFxcdCkuKyg/Oig/OlxcbnxcXHJcXG4/KSg/OiB7NH18XFx0KS4rKSovLFxuICAgICAgbG9va2JlaGluZDogdHJ1ZSxcbiAgICAgIGFsaWFzOiAna2V5d29yZCdcbiAgICB9LCB7XG4gICAgICAvLyBgY29kZWBcbiAgICAgIC8vIGBgY29kZWBgXG4gICAgICBwYXR0ZXJuOiAvYGAuKz9gYHxgW15gXFxyXFxuXStgLyxcbiAgICAgIGFsaWFzOiAna2V5d29yZCdcbiAgICB9LCB7XG4gICAgICAvLyBgYGBvcHRpb25hbCBsYW5ndWFnZVxuICAgICAgLy8gY29kZSBibG9ja1xuICAgICAgLy8gYGBgXG4gICAgICBwYXR0ZXJuOiAvXmBgYFtcXHNcXFNdKj9eYGBgJC9tLFxuICAgICAgZ3JlZWR5OiB0cnVlLFxuICAgICAgaW5zaWRlOiB7XG4gICAgICAgICdjb2RlLWJsb2NrJzoge1xuICAgICAgICAgIHBhdHRlcm46IC9eKGBgYC4qKD86XFxufFxcclxcbj8pKVtcXHNcXFNdKz8oPz0oPzpcXG58XFxyXFxuPyleYGBgJCkvbSxcbiAgICAgICAgICBsb29rYmVoaW5kOiB0cnVlXG4gICAgICAgIH0sXG4gICAgICAgICdjb2RlLWxhbmd1YWdlJzoge1xuICAgICAgICAgIHBhdHRlcm46IC9eKGBgYCkuKy8sXG4gICAgICAgICAgbG9va2JlaGluZDogdHJ1ZVxuICAgICAgICB9LFxuICAgICAgICAncHVuY3R1YXRpb24nOiAvYGBgL1xuICAgICAgfVxuICAgIH1dLFxuICAgICd0aXRsZSc6IFt7XG4gICAgICAvLyB0aXRsZSAxXG4gICAgICAvLyA9PT09PT09XG4gICAgICAvLyB0aXRsZSAyXG4gICAgICAvLyAtLS0tLS0tXG4gICAgICBwYXR0ZXJuOiAvXFxTLiooPzpcXG58XFxyXFxuPykoPzo9PSt8LS0rKSg/PVsgXFx0XSokKS9tLFxuICAgICAgYWxpYXM6ICdpbXBvcnRhbnQnLFxuICAgICAgaW5zaWRlOiB7XG4gICAgICAgIHB1bmN0dWF0aW9uOiAvPT0rJHwtLSskL1xuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIC8vICMgdGl0bGUgMVxuICAgICAgLy8gIyMjIyMjIHRpdGxlIDZcbiAgICAgIHBhdHRlcm46IC8oXlxccyopIy4rL20sXG4gICAgICBsb29rYmVoaW5kOiB0cnVlLFxuICAgICAgYWxpYXM6ICdpbXBvcnRhbnQnLFxuICAgICAgaW5zaWRlOiB7XG4gICAgICAgIHB1bmN0dWF0aW9uOiAvXiMrfCMrJC9cbiAgICAgIH1cbiAgICB9XSxcbiAgICAnaHInOiB7XG4gICAgICAvLyAqKipcbiAgICAgIC8vIC0tLVxuICAgICAgLy8gKiAqICpcbiAgICAgIC8vIC0tLS0tLS0tLS0tXG4gICAgICBwYXR0ZXJuOiAvKF5cXHMqKShbKi1dKSg/OltcXHQgXSpcXDIpezIsfSg/PVxccyokKS9tLFxuICAgICAgbG9va2JlaGluZDogdHJ1ZSxcbiAgICAgIGFsaWFzOiAncHVuY3R1YXRpb24nXG4gICAgfSxcbiAgICAnbGlzdCc6IHtcbiAgICAgIC8vICogaXRlbVxuICAgICAgLy8gKyBpdGVtXG4gICAgICAvLyAtIGl0ZW1cbiAgICAgIC8vIDEuIGl0ZW1cbiAgICAgIHBhdHRlcm46IC8oXlxccyopKD86WyorLV18XFxkK1xcLikoPz1bXFx0IF0uKS9tLFxuICAgICAgbG9va2JlaGluZDogdHJ1ZSxcbiAgICAgIGFsaWFzOiAncHVuY3R1YXRpb24nXG4gICAgfSxcbiAgICAndXJsLXJlZmVyZW5jZSc6IHtcbiAgICAgIC8vIFtpZF06IGh0dHA6Ly9leGFtcGxlLmNvbSBcIk9wdGlvbmFsIHRpdGxlXCJcbiAgICAgIC8vIFtpZF06IGh0dHA6Ly9leGFtcGxlLmNvbSAnT3B0aW9uYWwgdGl0bGUnXG4gICAgICAvLyBbaWRdOiBodHRwOi8vZXhhbXBsZS5jb20gKE9wdGlvbmFsIHRpdGxlKVxuICAgICAgLy8gW2lkXTogPGh0dHA6Ly9leGFtcGxlLmNvbT4gXCJPcHRpb25hbCB0aXRsZVwiXG4gICAgICBwYXR0ZXJuOiAvIT9cXFtbXlxcXV0rXFxdOltcXHQgXSsoPzpcXFMrfDwoPzpcXFxcLnxbXj5cXFxcXSkrPikoPzpbXFx0IF0rKD86XCIoPzpcXFxcLnxbXlwiXFxcXF0pKlwifCcoPzpcXFxcLnxbXidcXFxcXSkqJ3xcXCgoPzpcXFxcLnxbXilcXFxcXSkqXFwpKSk/LyxcbiAgICAgIGluc2lkZToge1xuICAgICAgICAndmFyaWFibGUnOiB7XG4gICAgICAgICAgcGF0dGVybjogL14oIT9cXFspW15cXF1dKy8sXG4gICAgICAgICAgbG9va2JlaGluZDogdHJ1ZVxuICAgICAgICB9LFxuICAgICAgICAnc3RyaW5nJzogLyg/OlwiKD86XFxcXC58W15cIlxcXFxdKSpcInwnKD86XFxcXC58W14nXFxcXF0pKid8XFwoKD86XFxcXC58W14pXFxcXF0pKlxcKSkkLyxcbiAgICAgICAgJ3B1bmN0dWF0aW9uJzogL15bXFxbXFxdITpdfFs8Pl0vXG4gICAgICB9LFxuICAgICAgYWxpYXM6ICd1cmwnXG4gICAgfSxcbiAgICAnYm9sZCc6IHtcbiAgICAgIC8vICoqc3Ryb25nKipcbiAgICAgIC8vIF9fc3Ryb25nX19cbiAgICAgIC8vIGFsbG93IG9uZSBuZXN0ZWQgaW5zdGFuY2Ugb2YgaXRhbGljIHRleHQgdXNpbmcgdGhlIHNhbWUgZGVsaW1pdGVyXG4gICAgICBwYXR0ZXJuOiBjcmVhdGVJbmxpbmUoL1xcYl9fKD86KD8hXyk8aW5uZXI+fF8oPzooPyFfKTxpbm5lcj4pK18pK19fXFxifFxcKlxcKig/Oig/IVxcKik8aW5uZXI+fFxcKig/Oig/IVxcKik8aW5uZXI+KStcXCopK1xcKlxcKi8uc291cmNlKSxcbiAgICAgIGxvb2tiZWhpbmQ6IHRydWUsXG4gICAgICBncmVlZHk6IHRydWUsXG4gICAgICBpbnNpZGU6IHtcbiAgICAgICAgJ2NvbnRlbnQnOiB7XG4gICAgICAgICAgcGF0dGVybjogLyheLi4pW1xcc1xcU10rKD89Li4kKS8sXG4gICAgICAgICAgbG9va2JlaGluZDogdHJ1ZSxcbiAgICAgICAgICBpbnNpZGU6IHt9IC8vIHNlZSBiZWxvd1xuXG4gICAgICAgIH0sXG4gICAgICAgICdwdW5jdHVhdGlvbic6IC9cXCpcXCp8X18vXG4gICAgICB9XG4gICAgfSxcbiAgICAnaXRhbGljJzoge1xuICAgICAgLy8gKmVtKlxuICAgICAgLy8gX2VtX1xuICAgICAgLy8gYWxsb3cgb25lIG5lc3RlZCBpbnN0YW5jZSBvZiBib2xkIHRleHQgdXNpbmcgdGhlIHNhbWUgZGVsaW1pdGVyXG4gICAgICBwYXR0ZXJuOiBjcmVhdGVJbmxpbmUoL1xcYl8oPzooPyFfKTxpbm5lcj58X18oPzooPyFfKTxpbm5lcj4pK19fKStfXFxifFxcKig/Oig/IVxcKik8aW5uZXI+fFxcKlxcKig/Oig/IVxcKik8aW5uZXI+KStcXCpcXCopK1xcKi8uc291cmNlKSxcbiAgICAgIGxvb2tiZWhpbmQ6IHRydWUsXG4gICAgICBncmVlZHk6IHRydWUsXG4gICAgICBpbnNpZGU6IHtcbiAgICAgICAgJ2NvbnRlbnQnOiB7XG4gICAgICAgICAgcGF0dGVybjogLyheLilbXFxzXFxTXSsoPz0uJCkvLFxuICAgICAgICAgIGxvb2tiZWhpbmQ6IHRydWUsXG4gICAgICAgICAgaW5zaWRlOiB7fSAvLyBzZWUgYmVsb3dcblxuICAgICAgICB9LFxuICAgICAgICAncHVuY3R1YXRpb24nOiAvWypfXS9cbiAgICAgIH1cbiAgICB9LFxuICAgICdzdHJpa2UnOiB7XG4gICAgICAvLyB+fnN0cmlrZSB0aHJvdWdofn5cbiAgICAgIC8vIH5zdHJpa2V+XG4gICAgICBwYXR0ZXJuOiBjcmVhdGVJbmxpbmUoLyh+fj8pKD86KD8hfik8aW5uZXI+KSs/XFwyLy5zb3VyY2UpLFxuICAgICAgbG9va2JlaGluZDogdHJ1ZSxcbiAgICAgIGdyZWVkeTogdHJ1ZSxcbiAgICAgIGluc2lkZToge1xuICAgICAgICAnY29udGVudCc6IHtcbiAgICAgICAgICBwYXR0ZXJuOiAvKF5+fj8pW1xcc1xcU10rKD89XFwxJCkvLFxuICAgICAgICAgIGxvb2tiZWhpbmQ6IHRydWUsXG4gICAgICAgICAgaW5zaWRlOiB7fSAvLyBzZWUgYmVsb3dcblxuICAgICAgICB9LFxuICAgICAgICAncHVuY3R1YXRpb24nOiAvfn4/L1xuICAgICAgfVxuICAgIH0sXG4gICAgJ3VybCc6IHtcbiAgICAgIC8vIFtleGFtcGxlXShodHRwOi8vZXhhbXBsZS5jb20gXCJPcHRpb25hbCB0aXRsZVwiKVxuICAgICAgLy8gW2V4YW1wbGVdW2lkXVxuICAgICAgLy8gW2V4YW1wbGVdIFtpZF1cbiAgICAgIHBhdHRlcm46IGNyZWF0ZUlubGluZSgvIT9cXFsoPzooPyFcXF0pPGlubmVyPikrXFxdKD86XFwoW15cXHMpXSsoPzpbXFx0IF0rXCIoPzpcXFxcLnxbXlwiXFxcXF0pKlwiKT9cXCl8WyBcXHRdP1xcWyg/Oig/IVxcXSk8aW5uZXI+KStcXF0pLy5zb3VyY2UpLFxuICAgICAgbG9va2JlaGluZDogdHJ1ZSxcbiAgICAgIGdyZWVkeTogdHJ1ZSxcbiAgICAgIGluc2lkZToge1xuICAgICAgICAnb3BlcmF0b3InOiAvXiEvLFxuICAgICAgICAnY29udGVudCc6IHtcbiAgICAgICAgICBwYXR0ZXJuOiAvKF5cXFspW15cXF1dKyg/PVxcXSkvLFxuICAgICAgICAgIGxvb2tiZWhpbmQ6IHRydWUsXG4gICAgICAgICAgaW5zaWRlOiB7fSAvLyBzZWUgYmVsb3dcblxuICAgICAgICB9LFxuICAgICAgICAndmFyaWFibGUnOiB7XG4gICAgICAgICAgcGF0dGVybjogLyheXFxdWyBcXHRdP1xcWylbXlxcXV0rKD89XFxdJCkvLFxuICAgICAgICAgIGxvb2tiZWhpbmQ6IHRydWVcbiAgICAgICAgfSxcbiAgICAgICAgJ3VybCc6IHtcbiAgICAgICAgICBwYXR0ZXJuOiAvKF5cXF1cXCgpW15cXHMpXSsvLFxuICAgICAgICAgIGxvb2tiZWhpbmQ6IHRydWVcbiAgICAgICAgfSxcbiAgICAgICAgJ3N0cmluZyc6IHtcbiAgICAgICAgICBwYXR0ZXJuOiAvKF5bIFxcdF0rKVwiKD86XFxcXC58W15cIlxcXFxdKSpcIig/PVxcKSQpLyxcbiAgICAgICAgICBsb29rYmVoaW5kOiB0cnVlXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH0pO1xuICBbJ3VybCcsICdib2xkJywgJ2l0YWxpYycsICdzdHJpa2UnXS5mb3JFYWNoKGZ1bmN0aW9uICh0b2tlbikge1xuICAgIFsndXJsJywgJ2JvbGQnLCAnaXRhbGljJywgJ3N0cmlrZSddLmZvckVhY2goZnVuY3Rpb24gKGluc2lkZSkge1xuICAgICAgaWYgKHRva2VuICE9PSBpbnNpZGUpIHtcbiAgICAgICAgUHJpc20ubGFuZ3VhZ2VzLm1hcmtkb3duW3Rva2VuXS5pbnNpZGUuY29udGVudC5pbnNpZGVbaW5zaWRlXSA9IFByaXNtLmxhbmd1YWdlcy5tYXJrZG93bltpbnNpZGVdO1xuICAgICAgfVxuICAgIH0pO1xuICB9KTtcbiAgUHJpc20uaG9va3MuYWRkKCdhZnRlci10b2tlbml6ZScsIGZ1bmN0aW9uIChlbnYpIHtcbiAgICBpZiAoZW52Lmxhbmd1YWdlICE9PSAnbWFya2Rvd24nICYmIGVudi5sYW5ndWFnZSAhPT0gJ21kJykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHdhbGtUb2tlbnModG9rZW5zKSB7XG4gICAgICBpZiAoIXRva2VucyB8fCB0eXBlb2YgdG9rZW5zID09PSAnc3RyaW5nJykge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGZvciAodmFyIGkgPSAwLCBsID0gdG9rZW5zLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgICB2YXIgdG9rZW4gPSB0b2tlbnNbaV07XG5cbiAgICAgICAgaWYgKHRva2VuLnR5cGUgIT09ICdjb2RlJykge1xuICAgICAgICAgIHdhbGtUb2tlbnModG9rZW4uY29udGVudCk7XG4gICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgLypcbiAgICAgICAgICogQWRkIHRoZSBjb3JyZWN0IGBsYW5ndWFnZS14eHh4YCBjbGFzcyB0byB0aGlzIGNvZGUgYmxvY2suIEtlZXAgaW4gbWluZCB0aGF0IHRoZSBgY29kZS1sYW5ndWFnZWAgdG9rZW5cbiAgICAgICAgICogaXMgb3B0aW9uYWwuIEJ1dCB0aGUgZ3JhbW1hciBpcyBkZWZpbmVkIHNvIHRoYXQgdGhlcmUgaXMgb25seSBvbmUgY2FzZSB3ZSBoYXZlIHRvIGhhbmRsZTpcbiAgICAgICAgICpcbiAgICAgICAgICogdG9rZW4uY29udGVudCA9IFtcbiAgICAgICAgICogICAgIDxzcGFuIGNsYXNzPVwicHVuY3R1YXRpb25cIj5gYGA8L3NwYW4+LFxuICAgICAgICAgKiAgICAgPHNwYW4gY2xhc3M9XCJjb2RlLWxhbmd1YWdlXCI+eHh4eDwvc3Bhbj4sXG4gICAgICAgICAqICAgICAnXFxuJywgLy8gZXhhY3RseSBvbmUgbmV3IGxpbmVzIChcXHIgb3IgXFxuIG9yIFxcclxcbilcbiAgICAgICAgICogICAgIDxzcGFuIGNsYXNzPVwiY29kZS1ibG9ja1wiPi4uLjwvc3Bhbj4sXG4gICAgICAgICAqICAgICAnXFxuJywgLy8gZXhhY3RseSBvbmUgbmV3IGxpbmVzIGFnYWluXG4gICAgICAgICAqICAgICA8c3BhbiBjbGFzcz1cInB1bmN0dWF0aW9uXCI+YGBgPC9zcGFuPlxuICAgICAgICAgKiBdO1xuICAgICAgICAgKi9cblxuXG4gICAgICAgIHZhciBjb2RlTGFuZyA9IHRva2VuLmNvbnRlbnRbMV07XG4gICAgICAgIHZhciBjb2RlQmxvY2sgPSB0b2tlbi5jb250ZW50WzNdO1xuXG4gICAgICAgIGlmIChjb2RlTGFuZyAmJiBjb2RlQmxvY2sgJiYgY29kZUxhbmcudHlwZSA9PT0gJ2NvZGUtbGFuZ3VhZ2UnICYmIGNvZGVCbG9jay50eXBlID09PSAnY29kZS1ibG9jaycgJiYgdHlwZW9mIGNvZGVMYW5nLmNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgLy8gdGhpcyBtaWdodCBiZSBhIGxhbmd1YWdlIHRoYXQgUHJpc20gZG9lcyBub3Qgc3VwcG9ydFxuICAgICAgICAgIC8vIGRvIHNvbWUgcmVwbGFjZW1lbnRzIHRvIHN1cHBvcnQgQysrLCBDIywgYW5kIEYjXG4gICAgICAgICAgdmFyIGxhbmcgPSBjb2RlTGFuZy5jb250ZW50LnJlcGxhY2UoL1xcYiMvZywgJ3NoYXJwJykucmVwbGFjZSgvXFxiXFwrXFwrL2csICdwcCcpOyAvLyBvbmx5IHVzZSB0aGUgZmlyc3Qgd29yZFxuXG4gICAgICAgICAgbGFuZyA9ICgvW2Etel1bXFx3LV0qL2kuZXhlYyhsYW5nKSB8fCBbJyddKVswXS50b0xvd2VyQ2FzZSgpO1xuICAgICAgICAgIHZhciBhbGlhcyA9ICdsYW5ndWFnZS0nICsgbGFuZzsgLy8gYWRkIGFsaWFzXG5cbiAgICAgICAgICBpZiAoIWNvZGVCbG9jay5hbGlhcykge1xuICAgICAgICAgICAgY29kZUJsb2NrLmFsaWFzID0gW2FsaWFzXTtcbiAgICAgICAgICB9IGVsc2UgaWYgKHR5cGVvZiBjb2RlQmxvY2suYWxpYXMgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICBjb2RlQmxvY2suYWxpYXMgPSBbY29kZUJsb2NrLmFsaWFzLCBhbGlhc107XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvZGVCbG9jay5hbGlhcy5wdXNoKGFsaWFzKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICB3YWxrVG9rZW5zKGVudi50b2tlbnMpO1xuICB9KTtcbiAgUHJpc20uaG9va3MuYWRkKCd3cmFwJywgZnVuY3Rpb24gKGVudikge1xuICAgIGlmIChlbnYudHlwZSAhPT0gJ2NvZGUtYmxvY2snKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdmFyIGNvZGVMYW5nID0gJyc7XG5cbiAgICBmb3IgKHZhciBpID0gMCwgbCA9IGVudi5jbGFzc2VzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgdmFyIGNscyA9IGVudi5jbGFzc2VzW2ldO1xuICAgICAgdmFyIG1hdGNoID0gL2xhbmd1YWdlLSguKykvLmV4ZWMoY2xzKTtcblxuICAgICAgaWYgKG1hdGNoKSB7XG4gICAgICAgIGNvZGVMYW5nID0gbWF0Y2hbMV07XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cblxuICAgIHZhciBncmFtbWFyID0gUHJpc20ubGFuZ3VhZ2VzW2NvZGVMYW5nXTtcblxuICAgIGlmICghZ3JhbW1hcikge1xuICAgICAgaWYgKGNvZGVMYW5nICYmIGNvZGVMYW5nICE9PSAnbm9uZScgJiYgUHJpc20ucGx1Z2lucy5hdXRvbG9hZGVyKSB7XG4gICAgICAgIHZhciBpZCA9ICdtZC0nICsgbmV3IERhdGUoKS52YWx1ZU9mKCkgKyAnLScgKyBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxZTE2KTtcbiAgICAgICAgZW52LmF0dHJpYnV0ZXNbJ2lkJ10gPSBpZDtcbiAgICAgICAgUHJpc20ucGx1Z2lucy5hdXRvbG9hZGVyLmxvYWRMYW5ndWFnZXMoY29kZUxhbmcsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICB2YXIgZWxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWQpO1xuXG4gICAgICAgICAgaWYgKGVsZSkge1xuICAgICAgICAgICAgZWxlLmlubmVySFRNTCA9IFByaXNtLmhpZ2hsaWdodChlbGUudGV4dENvbnRlbnQsIFByaXNtLmxhbmd1YWdlc1tjb2RlTGFuZ10sIGNvZGVMYW5nKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAvLyByZXZlcnNlIFByaXNtLnV0aWwuZW5jb2RlXG4gICAgICB2YXIgY29kZSA9IGVudi5jb250ZW50LnJlcGxhY2UoLyZsdDsvZywgJzwnKS5yZXBsYWNlKC8mYW1wOy9nLCAnJicpO1xuICAgICAgZW52LmNvbnRlbnQgPSBQcmlzbS5oaWdobGlnaHQoY29kZSwgZ3JhbW1hciwgY29kZUxhbmcpO1xuICAgIH1cbiAgfSk7XG4gIFByaXNtLmxhbmd1YWdlcy5tZCA9IFByaXNtLmxhbmd1YWdlcy5tYXJrZG93bjtcbn0pKFByaXNtKTtcbi8qIFwicHJpc21qcy9jb21wb25lbnRzL3ByaXNtLW9iamVjdGl2ZWNcIiAqL1xuXG5cblByaXNtLmxhbmd1YWdlcy5vYmplY3RpdmVjID0gUHJpc20ubGFuZ3VhZ2VzLmV4dGVuZCgnYycsIHtcbiAgJ3N0cmluZyc6IC8oXCJ8JykoPzpcXFxcKD86XFxyXFxufFtcXHNcXFNdKXwoPyFcXDEpW15cXFxcXFxyXFxuXSkqXFwxfEBcIig/OlxcXFwoPzpcXHJcXG58W1xcc1xcU10pfFteXCJcXFxcXFxyXFxuXSkqXCIvLFxuICAna2V5d29yZCc6IC9cXGIoPzphc218dHlwZW9mfGlubGluZXxhdXRvfGJyZWFrfGNhc2V8Y2hhcnxjb25zdHxjb250aW51ZXxkZWZhdWx0fGRvfGRvdWJsZXxlbHNlfGVudW18ZXh0ZXJufGZsb2F0fGZvcnxnb3RvfGlmfGludHxsb25nfHJlZ2lzdGVyfHJldHVybnxzaG9ydHxzaWduZWR8c2l6ZW9mfHN0YXRpY3xzdHJ1Y3R8c3dpdGNofHR5cGVkZWZ8dW5pb258dW5zaWduZWR8dm9pZHx2b2xhdGlsZXx3aGlsZXxpbnxzZWxmfHN1cGVyKVxcYnwoPzpAaW50ZXJmYWNlfEBlbmR8QGltcGxlbWVudGF0aW9ufEBwcm90b2NvbHxAY2xhc3N8QHB1YmxpY3xAcHJvdGVjdGVkfEBwcml2YXRlfEBwcm9wZXJ0eXxAdHJ5fEBjYXRjaHxAZmluYWxseXxAdGhyb3d8QHN5bnRoZXNpemV8QGR5bmFtaWN8QHNlbGVjdG9yKVxcYi8sXG4gICdvcGVyYXRvcic6IC8tWy0+XT98XFwrXFwrP3whPT98PDw/PT98Pj4/PT98PT0/fCYmP3xcXHxcXHw/fFt+XiU/KlxcL0BdL1xufSk7XG5kZWxldGUgUHJpc20ubGFuZ3VhZ2VzLm9iamVjdGl2ZWNbJ2NsYXNzLW5hbWUnXTtcblByaXNtLmxhbmd1YWdlcy5vYmpjID0gUHJpc20ubGFuZ3VhZ2VzLm9iamVjdGl2ZWM7XG4vKiBcInByaXNtanMvY29tcG9uZW50cy9wcmlzbS1vY2FtbFwiICovXG5cblByaXNtLmxhbmd1YWdlcy5vY2FtbCA9IHtcbiAgJ2NvbW1lbnQnOiAvXFwoXFwqW1xcc1xcU10qP1xcKlxcKS8sXG4gICdzdHJpbmcnOiBbe1xuICAgIHBhdHRlcm46IC9cIig/OlxcXFwufFteXFxcXFxcclxcblwiXSkqXCIvLFxuICAgIGdyZWVkeTogdHJ1ZVxuICB9LCB7XG4gICAgcGF0dGVybjogLyhbJ2BdKSg/OlxcXFwoPzpcXGQrfHhbXFxkYS1mXSt8Lil8KD8hXFwxKVteXFxcXFxcclxcbl0pXFwxL2ksXG4gICAgZ3JlZWR5OiB0cnVlXG4gIH1dLFxuICAnbnVtYmVyJzogL1xcYig/OjB4W1xcZGEtZl1bXFxkYS1mX10rfCg/OjBbYm9dKT9cXGRbXFxkX10qKD86XFwuW1xcZF9dKik/KD86ZVsrLV0/W1xcZF9dKyk/KS9pLFxuICAnZGlyZWN0aXZlJzoge1xuICAgIHBhdHRlcm46IC9cXEIjXFx3Ky8sXG4gICAgYWxpYXM6ICdpbXBvcnRhbnQnXG4gIH0sXG4gICdsYWJlbCc6IHtcbiAgICBwYXR0ZXJuOiAvXFxCflxcdysvLFxuICAgIGFsaWFzOiAnZnVuY3Rpb24nXG4gIH0sXG4gICd0eXBlLXZhcmlhYmxlJzoge1xuICAgIHBhdHRlcm46IC9cXEInXFx3Ky8sXG4gICAgYWxpYXM6ICdmdW5jdGlvbidcbiAgfSxcbiAgJ3ZhcmlhbnQnOiB7XG4gICAgcGF0dGVybjogL2BcXHcrLyxcbiAgICBhbGlhczogJ3ZhcmlhYmxlJ1xuICB9LFxuICAnbW9kdWxlJzoge1xuICAgIHBhdHRlcm46IC9cXGJbQS1aXVxcdysvLFxuICAgIGFsaWFzOiAndmFyaWFibGUnXG4gIH0sXG4gIC8vIEZvciB0aGUgbGlzdCBvZiBrZXl3b3JkcyBhbmQgb3BlcmF0b3JzLFxuICAvLyBzZWU6IGh0dHA6Ly9jYW1sLmlucmlhLmZyL3B1Yi9kb2NzL21hbnVhbC1vY2FtbC9sZXguaHRtbCNzZWM4NFxuICAna2V5d29yZCc6IC9cXGIoPzphc3xhc3NlcnR8YmVnaW58Y2xhc3N8Y29uc3RyYWludHxkb3xkb25lfGRvd250b3xlbHNlfGVuZHxleGNlcHRpb258ZXh0ZXJuYWx8Zm9yfGZ1bnxmdW5jdGlvbnxmdW5jdG9yfGlmfGlufGluY2x1ZGV8aW5oZXJpdHxpbml0aWFsaXplcnxsYXp5fGxldHxtYXRjaHxtZXRob2R8bW9kdWxlfG11dGFibGV8bmV3fG5vbnJlY3xvYmplY3R8b2Z8b3Blbnxwcml2YXRlfHJlY3xzaWd8c3RydWN0fHRoZW58dG98dHJ5fHR5cGV8dmFsfHZhbHVlfHZpcnR1YWx8d2hlbnx3aGVyZXx3aGlsZXx3aXRoKVxcYi8sXG4gICdib29sZWFuJzogL1xcYig/OmZhbHNlfHRydWUpXFxiLyxcbiAgLy8gQ3VzdG9tIG9wZXJhdG9ycyBhcmUgYWxsb3dlZFxuICAnb3BlcmF0b3InOiAvOj18Wz08PkBefCYrXFwtKlxcLyQlIT9+XVshJCUmKitcXC0uXFwvOjw9Pj9AXnx+XSp8XFxiKD86YW5kfGFzcnxsYW5kfGxvcnxsc2x8bHNyfGx4b3J8bW9kfG9yKVxcYi8sXG4gICdwdW5jdHVhdGlvbic6IC9bKCl7fVxcW1xcXXwuLDo7XXxcXGJfXFxiL1xufTtcbi8qIFwicHJpc21qcy9jb21wb25lbnRzL3ByaXNtLXB5dGhvblwiICovXG5cblByaXNtLmxhbmd1YWdlcy5weXRob24gPSB7XG4gICdjb21tZW50Jzoge1xuICAgIHBhdHRlcm46IC8oXnxbXlxcXFxdKSMuKi8sXG4gICAgbG9va2JlaGluZDogdHJ1ZVxuICB9LFxuICAnc3RyaW5nLWludGVycG9sYXRpb24nOiB7XG4gICAgcGF0dGVybjogLyg/OmZ8cmZ8ZnIpKD86KFwiXCJcInwnJycpW1xcc1xcU10qP1xcMXwoXCJ8JykoPzpcXFxcLnwoPyFcXDIpW15cXFxcXFxyXFxuXSkqXFwyKS9pLFxuICAgIGdyZWVkeTogdHJ1ZSxcbiAgICBpbnNpZGU6IHtcbiAgICAgICdpbnRlcnBvbGF0aW9uJzoge1xuICAgICAgICAvLyBcIntcIiA8ZXhwcmVzc2lvbj4gPG9wdGlvbmFsIFwiIXNcIiwgXCIhclwiLCBvciBcIiFhXCI+IDxvcHRpb25hbCBcIjpcIiBmb3JtYXQgc3BlY2lmaWVyPiBcIn1cIlxuICAgICAgICBwYXR0ZXJuOiAvKCg/Ol58W157XSkoPzp7eykqKXsoPyF7KSg/Oltee31dfHsoPyF7KSg/Oltee31dfHsoPyF7KSg/Oltee31dKSt9KSt9KSt9LyxcbiAgICAgICAgbG9va2JlaGluZDogdHJ1ZSxcbiAgICAgICAgaW5zaWRlOiB7XG4gICAgICAgICAgJ2Zvcm1hdC1zcGVjJzoge1xuICAgICAgICAgICAgcGF0dGVybjogLyg6KVteOigpe31dKyg/PX0kKS8sXG4gICAgICAgICAgICBsb29rYmVoaW5kOiB0cnVlXG4gICAgICAgICAgfSxcbiAgICAgICAgICAnY29udmVyc2lvbi1vcHRpb24nOiB7XG4gICAgICAgICAgICBwYXR0ZXJuOiAvIVtzcmFdKD89Wzp9XSQpLyxcbiAgICAgICAgICAgIGFsaWFzOiAncHVuY3R1YXRpb24nXG4gICAgICAgICAgfSxcbiAgICAgICAgICByZXN0OiBudWxsXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICAnc3RyaW5nJzogL1tcXHNcXFNdKy9cbiAgICB9XG4gIH0sXG4gICd0cmlwbGUtcXVvdGVkLXN0cmluZyc6IHtcbiAgICBwYXR0ZXJuOiAvKD86W3J1Yl18cmJ8YnIpPyhcIlwiXCJ8JycnKVtcXHNcXFNdKj9cXDEvaSxcbiAgICBncmVlZHk6IHRydWUsXG4gICAgYWxpYXM6ICdzdHJpbmcnXG4gIH0sXG4gICdzdHJpbmcnOiB7XG4gICAgcGF0dGVybjogLyg/OltydWJdfHJifGJyKT8oXCJ8JykoPzpcXFxcLnwoPyFcXDEpW15cXFxcXFxyXFxuXSkqXFwxL2ksXG4gICAgZ3JlZWR5OiB0cnVlXG4gIH0sXG4gICdmdW5jdGlvbic6IHtcbiAgICBwYXR0ZXJuOiAvKCg/Ol58XFxzKWRlZlsgXFx0XSspW2EtekEtWl9dXFx3Kig/PVxccypcXCgpL2csXG4gICAgbG9va2JlaGluZDogdHJ1ZVxuICB9LFxuICAnY2xhc3MtbmFtZSc6IHtcbiAgICBwYXR0ZXJuOiAvKFxcYmNsYXNzXFxzKylcXHcrL2ksXG4gICAgbG9va2JlaGluZDogdHJ1ZVxuICB9LFxuICAnZGVjb3JhdG9yJzoge1xuICAgIHBhdHRlcm46IC8oXlxccyopQFxcdysoPzpcXC5cXHcrKSovaW0sXG4gICAgbG9va2JlaGluZDogdHJ1ZSxcbiAgICBhbGlhczogWydhbm5vdGF0aW9uJywgJ3B1bmN0dWF0aW9uJ10sXG4gICAgaW5zaWRlOiB7XG4gICAgICAncHVuY3R1YXRpb24nOiAvXFwuL1xuICAgIH1cbiAgfSxcbiAgJ2tleXdvcmQnOiAvXFxiKD86YW5kfGFzfGFzc2VydHxhc3luY3xhd2FpdHxicmVha3xjbGFzc3xjb250aW51ZXxkZWZ8ZGVsfGVsaWZ8ZWxzZXxleGNlcHR8ZXhlY3xmaW5hbGx5fGZvcnxmcm9tfGdsb2JhbHxpZnxpbXBvcnR8aW58aXN8bGFtYmRhfG5vbmxvY2FsfG5vdHxvcnxwYXNzfHByaW50fHJhaXNlfHJldHVybnx0cnl8d2hpbGV8d2l0aHx5aWVsZClcXGIvLFxuICAnYnVpbHRpbic6IC9cXGIoPzpfX2ltcG9ydF9ffGFic3xhbGx8YW55fGFwcGx5fGFzY2lpfGJhc2VzdHJpbmd8YmlufGJvb2x8YnVmZmVyfGJ5dGVhcnJheXxieXRlc3xjYWxsYWJsZXxjaHJ8Y2xhc3NtZXRob2R8Y21wfGNvZXJjZXxjb21waWxlfGNvbXBsZXh8ZGVsYXR0cnxkaWN0fGRpcnxkaXZtb2R8ZW51bWVyYXRlfGV2YWx8ZXhlY2ZpbGV8ZmlsZXxmaWx0ZXJ8ZmxvYXR8Zm9ybWF0fGZyb3plbnNldHxnZXRhdHRyfGdsb2JhbHN8aGFzYXR0cnxoYXNofGhlbHB8aGV4fGlkfGlucHV0fGludHxpbnRlcm58aXNpbnN0YW5jZXxpc3N1YmNsYXNzfGl0ZXJ8bGVufGxpc3R8bG9jYWxzfGxvbmd8bWFwfG1heHxtZW1vcnl2aWV3fG1pbnxuZXh0fG9iamVjdHxvY3R8b3BlbnxvcmR8cG93fHByb3BlcnR5fHJhbmdlfHJhd19pbnB1dHxyZWR1Y2V8cmVsb2FkfHJlcHJ8cmV2ZXJzZWR8cm91bmR8c2V0fHNldGF0dHJ8c2xpY2V8c29ydGVkfHN0YXRpY21ldGhvZHxzdHJ8c3VtfHN1cGVyfHR1cGxlfHR5cGV8dW5pY2hyfHVuaWNvZGV8dmFyc3x4cmFuZ2V8emlwKVxcYi8sXG4gICdib29sZWFuJzogL1xcYig/OlRydWV8RmFsc2V8Tm9uZSlcXGIvLFxuICAnbnVtYmVyJzogLyg/OlxcYig/PVxcZCl8XFxCKD89XFwuKSkoPzowW2JvXSk/KD86KD86XFxkfDB4W1xcZGEtZl0pW1xcZGEtZl0qKD86XFwuXFxkKik/fFxcLlxcZCspKD86ZVsrLV0/XFxkKyk/aj9cXGIvaSxcbiAgJ29wZXJhdG9yJzogL1stKyU9XT0/fCE9fFxcKlxcKj89P3xcXC9cXC8/PT98PFs8PT5dP3w+Wz0+XT98WyZ8Xn5dLyxcbiAgJ3B1bmN0dWF0aW9uJzogL1t7fVtcXF07KCksLjpdL1xufTtcblByaXNtLmxhbmd1YWdlcy5weXRob25bJ3N0cmluZy1pbnRlcnBvbGF0aW9uJ10uaW5zaWRlWydpbnRlcnBvbGF0aW9uJ10uaW5zaWRlLnJlc3QgPSBQcmlzbS5sYW5ndWFnZXMucHl0aG9uO1xuUHJpc20ubGFuZ3VhZ2VzLnB5ID0gUHJpc20ubGFuZ3VhZ2VzLnB5dGhvbjtcbi8qIFwicHJpc21qcy9jb21wb25lbnRzL3ByaXNtLXJlYXNvblwiICovXG5cblByaXNtLmxhbmd1YWdlcy5yZWFzb24gPSBQcmlzbS5sYW5ndWFnZXMuZXh0ZW5kKCdjbGlrZScsIHtcbiAgJ3N0cmluZyc6IHtcbiAgICBwYXR0ZXJuOiAvXCIoPzpcXFxcKD86XFxyXFxufFtcXHNcXFNdKXxbXlxcXFxcXHJcXG5cIl0pKlwiLyxcbiAgICBncmVlZHk6IHRydWVcbiAgfSxcbiAgLy8gJ2NsYXNzLW5hbWUnIG11c3QgYmUgbWF0Y2hlZCAqYWZ0ZXIqICdjb25zdHJ1Y3RvcicgZGVmaW5lZCBiZWxvd1xuICAnY2xhc3MtbmFtZSc6IC9cXGJbQS1aXVxcdyovLFxuICAna2V5d29yZCc6IC9cXGIoPzphbmR8YXN8YXNzZXJ0fGJlZ2lufGNsYXNzfGNvbnN0cmFpbnR8ZG98ZG9uZXxkb3dudG98ZWxzZXxlbmR8ZXhjZXB0aW9ufGV4dGVybmFsfGZvcnxmdW58ZnVuY3Rpb258ZnVuY3RvcnxpZnxpbnxpbmNsdWRlfGluaGVyaXR8aW5pdGlhbGl6ZXJ8bGF6eXxsZXR8bWV0aG9kfG1vZHVsZXxtdXRhYmxlfG5ld3xub25yZWN8b2JqZWN0fG9mfG9wZW58b3J8cHJpdmF0ZXxyZWN8c2lnfHN0cnVjdHxzd2l0Y2h8dGhlbnx0b3x0cnl8dHlwZXx2YWx8dmlydHVhbHx3aGVufHdoaWxlfHdpdGgpXFxiLyxcbiAgJ29wZXJhdG9yJzogL1xcLnszfXw6Wzo9XXxcXHw+fC0+fD0oPzo9PT98Pik/fDw9P3w+PT98W3xePycjIX5gXXxbK1xcLSpcXC9dXFwuP3xcXGIoPzptb2R8bGFuZHxsb3J8bHhvcnxsc2x8bHNyfGFzcilcXGIvXG59KTtcblByaXNtLmxhbmd1YWdlcy5pbnNlcnRCZWZvcmUoJ3JlYXNvbicsICdjbGFzcy1uYW1lJywge1xuICAnY2hhcmFjdGVyJzoge1xuICAgIHBhdHRlcm46IC8nKD86XFxcXHhbXFxkYS1mXXsyfXxcXFxcb1swLTNdWzAtN11bMC03XXxcXFxcXFxkezN9fFxcXFwufFteJ1xcXFxcXHJcXG5dKScvLFxuICAgIGFsaWFzOiAnc3RyaW5nJ1xuICB9LFxuICAnY29uc3RydWN0b3InOiB7XG4gICAgLy8gTmVnYXRpdmUgbG9vay1haGVhZCBwcmV2ZW50cyBmcm9tIG1hdGNoaW5nIHRoaW5ncyBsaWtlIFN0cmluZy5jYXBpdGFsaXplXG4gICAgcGF0dGVybjogL1xcYltBLVpdXFx3KlxcYig/IVxccypcXC4pLyxcbiAgICBhbGlhczogJ3ZhcmlhYmxlJ1xuICB9LFxuICAnbGFiZWwnOiB7XG4gICAgcGF0dGVybjogL1xcYlthLXpdXFx3Kig/PTo6KS8sXG4gICAgYWxpYXM6ICdzeW1ib2wnXG4gIH1cbn0pOyAvLyBXZSBjYW4ndCBtYXRjaCBmdW5jdGlvbnMgcHJvcGVydHksIHNvIGxldCdzIG5vdCBldmVuIHRyeS5cblxuZGVsZXRlIFByaXNtLmxhbmd1YWdlcy5yZWFzb24uZnVuY3Rpb247XG4vKiBcInByaXNtanMvY29tcG9uZW50cy9wcmlzbS1zYXNzXCIgKi9cblxuKGZ1bmN0aW9uIChQcmlzbSkge1xuICBQcmlzbS5sYW5ndWFnZXMuc2FzcyA9IFByaXNtLmxhbmd1YWdlcy5leHRlbmQoJ2NzcycsIHtcbiAgICAvLyBTYXNzIGNvbW1lbnRzIGRvbid0IG5lZWQgdG8gYmUgY2xvc2VkLCBvbmx5IGluZGVudGVkXG4gICAgJ2NvbW1lbnQnOiB7XG4gICAgICBwYXR0ZXJuOiAvXihbIFxcdF0qKVxcL1tcXC8qXS4qKD86KD86XFxyP1xcbnxcXHIpXFwxWyBcXHRdLispKi9tLFxuICAgICAgbG9va2JlaGluZDogdHJ1ZVxuICAgIH1cbiAgfSk7XG4gIFByaXNtLmxhbmd1YWdlcy5pbnNlcnRCZWZvcmUoJ3Nhc3MnLCAnYXRydWxlJywge1xuICAgIC8vIFdlIHdhbnQgdG8gY29uc3VtZSB0aGUgd2hvbGUgbGluZVxuICAgICdhdHJ1bGUtbGluZSc6IHtcbiAgICAgIC8vIEluY2x1ZGVzIHN1cHBvcnQgZm9yID0gYW5kICsgc2hvcnRjdXRzXG4gICAgICBwYXR0ZXJuOiAvXig/OlsgXFx0XSopW0ArPV0uKy9tLFxuICAgICAgaW5zaWRlOiB7XG4gICAgICAgICdhdHJ1bGUnOiAvKD86QFtcXHctXSt8Wys9XSkvbVxuICAgICAgfVxuICAgIH1cbiAgfSk7XG4gIGRlbGV0ZSBQcmlzbS5sYW5ndWFnZXMuc2Fzcy5hdHJ1bGU7XG4gIHZhciB2YXJpYWJsZSA9IC9cXCRbLVxcd10rfCNcXHtcXCRbLVxcd10rXFx9LztcbiAgdmFyIG9wZXJhdG9yID0gWy9bKypcXC8lXXxbPSFdPXw8PT98Pj0/fFxcYig/OmFuZHxvcnxub3QpXFxiLywge1xuICAgIHBhdHRlcm46IC8oXFxzKyktKD89XFxzKS8sXG4gICAgbG9va2JlaGluZDogdHJ1ZVxuICB9XTtcbiAgUHJpc20ubGFuZ3VhZ2VzLmluc2VydEJlZm9yZSgnc2FzcycsICdwcm9wZXJ0eScsIHtcbiAgICAvLyBXZSB3YW50IHRvIGNvbnN1bWUgdGhlIHdob2xlIGxpbmVcbiAgICAndmFyaWFibGUtbGluZSc6IHtcbiAgICAgIHBhdHRlcm46IC9eWyBcXHRdKlxcJC4rL20sXG4gICAgICBpbnNpZGU6IHtcbiAgICAgICAgJ3B1bmN0dWF0aW9uJzogLzovLFxuICAgICAgICAndmFyaWFibGUnOiB2YXJpYWJsZSxcbiAgICAgICAgJ29wZXJhdG9yJzogb3BlcmF0b3JcbiAgICAgIH1cbiAgICB9LFxuICAgIC8vIFdlIHdhbnQgdG8gY29uc3VtZSB0aGUgd2hvbGUgbGluZVxuICAgICdwcm9wZXJ0eS1saW5lJzoge1xuICAgICAgcGF0dGVybjogL15bIFxcdF0qKD86W146XFxzXSsgKjouKnw6W146XFxzXS4qKS9tLFxuICAgICAgaW5zaWRlOiB7XG4gICAgICAgICdwcm9wZXJ0eSc6IFsvW146XFxzXSsoPz1cXHMqOikvLCB7XG4gICAgICAgICAgcGF0dGVybjogLyg6KVteOlxcc10rLyxcbiAgICAgICAgICBsb29rYmVoaW5kOiB0cnVlXG4gICAgICAgIH1dLFxuICAgICAgICAncHVuY3R1YXRpb24nOiAvOi8sXG4gICAgICAgICd2YXJpYWJsZSc6IHZhcmlhYmxlLFxuICAgICAgICAnb3BlcmF0b3InOiBvcGVyYXRvcixcbiAgICAgICAgJ2ltcG9ydGFudCc6IFByaXNtLmxhbmd1YWdlcy5zYXNzLmltcG9ydGFudFxuICAgICAgfVxuICAgIH1cbiAgfSk7XG4gIGRlbGV0ZSBQcmlzbS5sYW5ndWFnZXMuc2Fzcy5wcm9wZXJ0eTtcbiAgZGVsZXRlIFByaXNtLmxhbmd1YWdlcy5zYXNzLmltcG9ydGFudDsgLy8gTm93IHRoYXQgd2hvbGUgbGluZXMgZm9yIG90aGVyIHBhdHRlcm5zIGFyZSBjb25zdW1lZCxcbiAgLy8gd2hhdCdzIGxlZnQgc2hvdWxkIGJlIHNlbGVjdG9yc1xuXG4gIFByaXNtLmxhbmd1YWdlcy5pbnNlcnRCZWZvcmUoJ3Nhc3MnLCAncHVuY3R1YXRpb24nLCB7XG4gICAgJ3NlbGVjdG9yJzoge1xuICAgICAgcGF0dGVybjogLyhbIFxcdF0qKVxcUyg/OixbXixcXHJcXG5dK3xbXixcXHJcXG5dKikoPzosW14sXFxyXFxuXSspKig/OiwoPzpcXHI/XFxufFxccilcXDFbIFxcdF0rXFxTKD86LFteLFxcclxcbl0rfFteLFxcclxcbl0qKSg/OixbXixcXHJcXG5dKykqKSovLFxuICAgICAgbG9va2JlaGluZDogdHJ1ZVxuICAgIH1cbiAgfSk7XG59KShQcmlzbSk7XG4vKiBcInByaXNtanMvY29tcG9uZW50cy9wcmlzbS1zY3NzXCIgKi9cblxuXG5QcmlzbS5sYW5ndWFnZXMuc2NzcyA9IFByaXNtLmxhbmd1YWdlcy5leHRlbmQoJ2NzcycsIHtcbiAgJ2NvbW1lbnQnOiB7XG4gICAgcGF0dGVybjogLyhefFteXFxcXF0pKD86XFwvXFwqW1xcc1xcU10qP1xcKlxcL3xcXC9cXC8uKikvLFxuICAgIGxvb2tiZWhpbmQ6IHRydWVcbiAgfSxcbiAgJ2F0cnVsZSc6IHtcbiAgICBwYXR0ZXJuOiAvQFtcXHctXSg/OlxcKFteKCldK1xcKXxbXigpXFxzXXxcXHMrKD8hXFxzKSkqPyg/PVxccytbeztdKS8sXG4gICAgaW5zaWRlOiB7XG4gICAgICAncnVsZSc6IC9AW1xcdy1dKy8gLy8gU2VlIHJlc3QgYmVsb3dcblxuICAgIH1cbiAgfSxcbiAgLy8gdXJsLCBjb21wYXNzaWZpZWRcbiAgJ3VybCc6IC8oPzpbLWEtel0rLSk/dXJsKD89XFwoKS9pLFxuICAvLyBDU1Mgc2VsZWN0b3IgcmVnZXggaXMgbm90IGFwcHJvcHJpYXRlIGZvciBTYXNzXG4gIC8vIHNpbmNlIHRoZXJlIGNhbiBiZSBsb3QgbW9yZSB0aGluZ3MgKHZhciwgQCBkaXJlY3RpdmUsIG5lc3RpbmcuLilcbiAgLy8gYSBzZWxlY3RvciBtdXN0IHN0YXJ0IGF0IHRoZSBlbmQgb2YgYSBwcm9wZXJ0eSBvciBhZnRlciBhIGJyYWNlIChlbmQgb2Ygb3RoZXIgcnVsZXMgb3IgbmVzdGluZylcbiAgLy8gaXQgY2FuIGNvbnRhaW4gc29tZSBjaGFyYWN0ZXJzIHRoYXQgYXJlbid0IHVzZWQgZm9yIGRlZmluaW5nIHJ1bGVzIG9yIGVuZCBvZiBzZWxlY3RvciwgJiAocGFyZW50IHNlbGVjdG9yKSwgb3IgaW50ZXJwb2xhdGVkIHZhcmlhYmxlXG4gIC8vIHRoZSBlbmQgb2YgYSBzZWxlY3RvciBpcyBmb3VuZCB3aGVuIHRoZXJlIGlzIG5vIHJ1bGVzIGluIGl0ICgge30gb3Ige1xcc30pIG9yIGlmIHRoZXJlIGlzIGEgcHJvcGVydHkgKGJlY2F1c2UgYW4gaW50ZXJwb2xhdGVkIHZhclxuICAvLyBjYW4gXCJwYXNzXCIgYXMgYSBzZWxlY3Rvci0gZS5nOiBwcm9wZXIjeyRlcnR5fSlcbiAgLy8gdGhpcyBvbmUgd2FzIGhhcmQgdG8gZG8sIHNvIHBsZWFzZSBiZSBjYXJlZnVsIGlmIHlvdSBlZGl0IHRoaXMgb25lIDopXG4gICdzZWxlY3Rvcic6IHtcbiAgICAvLyBJbml0aWFsIGxvb2stYWhlYWQgaXMgdXNlZCB0byBwcmV2ZW50IG1hdGNoaW5nIG9mIGJsYW5rIHNlbGVjdG9yc1xuICAgIHBhdHRlcm46IC8oPz1cXFMpW15AO3t9KCldPyg/OlteQDt7fSgpXFxzXXxcXHMrKD8hXFxzKXwjXFx7XFwkWy1cXHddK1xcfSkrKD89XFxzKlxceyg/OlxcfXxcXHN8W159XVteOnt9XSpbOntdW159XSspKS9tLFxuICAgIGluc2lkZToge1xuICAgICAgJ3BhcmVudCc6IHtcbiAgICAgICAgcGF0dGVybjogLyYvLFxuICAgICAgICBhbGlhczogJ2ltcG9ydGFudCdcbiAgICAgIH0sXG4gICAgICAncGxhY2Vob2xkZXInOiAvJVstXFx3XSsvLFxuICAgICAgJ3ZhcmlhYmxlJzogL1xcJFstXFx3XSt8I1xce1xcJFstXFx3XStcXH0vXG4gICAgfVxuICB9LFxuICAncHJvcGVydHknOiB7XG4gICAgcGF0dGVybjogLyg/OlstXFx3XXxcXCRbLVxcd118I1xce1xcJFstXFx3XStcXH0pKyg/PVxccyo6KS8sXG4gICAgaW5zaWRlOiB7XG4gICAgICAndmFyaWFibGUnOiAvXFwkWy1cXHddK3wjXFx7XFwkWy1cXHddK1xcfS9cbiAgICB9XG4gIH1cbn0pO1xuUHJpc20ubGFuZ3VhZ2VzLmluc2VydEJlZm9yZSgnc2NzcycsICdhdHJ1bGUnLCB7XG4gICdrZXl3b3JkJzogWy9AKD86aWZ8ZWxzZSg/OiBpZik/fGZvcndhcmR8Zm9yfGVhY2h8d2hpbGV8aW1wb3J0fHVzZXxleHRlbmR8ZGVidWd8d2FybnxtaXhpbnxpbmNsdWRlfGZ1bmN0aW9ufHJldHVybnxjb250ZW50KVxcYi9pLCB7XG4gICAgcGF0dGVybjogLyggKykoPzpmcm9tfHRocm91Z2gpKD89ICkvLFxuICAgIGxvb2tiZWhpbmQ6IHRydWVcbiAgfV1cbn0pO1xuUHJpc20ubGFuZ3VhZ2VzLmluc2VydEJlZm9yZSgnc2NzcycsICdpbXBvcnRhbnQnLCB7XG4gIC8vIHZhciBhbmQgaW50ZXJwb2xhdGVkIHZhcnNcbiAgJ3ZhcmlhYmxlJzogL1xcJFstXFx3XSt8I1xce1xcJFstXFx3XStcXH0vXG59KTtcblByaXNtLmxhbmd1YWdlcy5pbnNlcnRCZWZvcmUoJ3Njc3MnLCAnZnVuY3Rpb24nLCB7XG4gICdtb2R1bGUtbW9kaWZpZXInOiB7XG4gICAgcGF0dGVybjogL1xcYig/OmFzfHdpdGh8c2hvd3xoaWRlKVxcYi9pLFxuICAgIGFsaWFzOiAna2V5d29yZCdcbiAgfSxcbiAgJ3BsYWNlaG9sZGVyJzoge1xuICAgIHBhdHRlcm46IC8lWy1cXHddKy8sXG4gICAgYWxpYXM6ICdzZWxlY3RvcidcbiAgfSxcbiAgJ3N0YXRlbWVudCc6IHtcbiAgICBwYXR0ZXJuOiAvXFxCISg/OmRlZmF1bHR8b3B0aW9uYWwpXFxiL2ksXG4gICAgYWxpYXM6ICdrZXl3b3JkJ1xuICB9LFxuICAnYm9vbGVhbic6IC9cXGIoPzp0cnVlfGZhbHNlKVxcYi8sXG4gICdudWxsJzoge1xuICAgIHBhdHRlcm46IC9cXGJudWxsXFxiLyxcbiAgICBhbGlhczogJ2tleXdvcmQnXG4gIH0sXG4gICdvcGVyYXRvcic6IHtcbiAgICBwYXR0ZXJuOiAvKFxccykoPzpbLSsqXFwvJV18Wz0hXT18PD0/fD49P3xhbmR8b3J8bm90KSg/PVxccykvLFxuICAgIGxvb2tiZWhpbmQ6IHRydWVcbiAgfVxufSk7XG5QcmlzbS5sYW5ndWFnZXMuc2Nzc1snYXRydWxlJ10uaW5zaWRlLnJlc3QgPSBQcmlzbS5sYW5ndWFnZXMuc2Nzcztcbi8qIFwicHJpc21qcy9jb21wb25lbnRzL3ByaXNtLXNxbFwiICovXG5cblByaXNtLmxhbmd1YWdlcy5zcWwgPSB7XG4gICdjb21tZW50Jzoge1xuICAgIHBhdHRlcm46IC8oXnxbXlxcXFxdKSg/OlxcL1xcKltcXHNcXFNdKj9cXCpcXC98KD86LS18XFwvXFwvfCMpLiopLyxcbiAgICBsb29rYmVoaW5kOiB0cnVlXG4gIH0sXG4gICd2YXJpYWJsZSc6IFt7XG4gICAgcGF0dGVybjogL0AoW1wiJ2BdKSg/OlxcXFxbXFxzXFxTXXwoPyFcXDEpW15cXFxcXSkrXFwxLyxcbiAgICBncmVlZHk6IHRydWVcbiAgfSwgL0BbXFx3LiRdKy9dLFxuICAnc3RyaW5nJzoge1xuICAgIHBhdHRlcm46IC8oXnxbXkBcXFxcXSkoXCJ8JykoPzpcXFxcW1xcc1xcU118KD8hXFwyKVteXFxcXF18XFwyXFwyKSpcXDIvLFxuICAgIGdyZWVkeTogdHJ1ZSxcbiAgICBsb29rYmVoaW5kOiB0cnVlXG4gIH0sXG4gICdmdW5jdGlvbic6IC9cXGIoPzpBVkd8Q09VTlR8RklSU1R8Rk9STUFUfExBU1R8TENBU0V8TEVOfE1BWHxNSUR8TUlOfE1PRHxOT1d8Uk9VTkR8U1VNfFVDQVNFKSg/PVxccypcXCgpL2ksXG4gIC8vIFNob3VsZCB3ZSBoaWdobGlnaHQgdXNlciBkZWZpbmVkIGZ1bmN0aW9ucyB0b28/XG4gICdrZXl3b3JkJzogL1xcYig/OkFDVElPTnxBRER8QUZURVJ8QUxHT1JJVEhNfEFMTHxBTFRFUnxBTkFMWVpFfEFOWXxBUFBMWXxBU3xBU0N8QVVUSE9SSVpBVElPTnxBVVRPX0lOQ1JFTUVOVHxCQUNLVVB8QkRCfEJFR0lOfEJFUktFTEVZREJ8QklHSU5UfEJJTkFSWXxCSVR8QkxPQnxCT09MfEJPT0xFQU58QlJFQUt8QlJPV1NFfEJUUkVFfEJVTEt8Qll8Q0FMTHxDQVNDQURFRD98Q0FTRXxDSEFJTnxDSEFSKD86QUNURVJ8U0VUKT98Q0hFQ0soPzpQT0lOVCk/fENMT1NFfENMVVNURVJFRHxDT0FMRVNDRXxDT0xMQVRFfENPTFVNTlM/fENPTU1FTlR8Q09NTUlUKD86VEVEKT98Q09NUFVURXxDT05ORUNUfENPTlNJU1RFTlR8Q09OU1RSQUlOVHxDT05UQUlOUyg/OlRBQkxFKT98Q09OVElOVUV8Q09OVkVSVHxDUkVBVEV8Q1JPU1N8Q1VSUkVOVCg/Ol9EQVRFfF9USU1FfF9USU1FU1RBTVB8X1VTRVIpP3xDVVJTT1J8Q1lDTEV8REFUQSg/OkJBU0VTPyk/fERBVEUoPzpUSU1FKT98REFZfERCQ0N8REVBTExPQ0FURXxERUN8REVDSU1BTHxERUNMQVJFfERFRkFVTFR8REVGSU5FUnxERUxBWUVEfERFTEVURXxERUxJTUlURVJTP3xERU5ZfERFU0N8REVTQ1JJQkV8REVURVJNSU5JU1RJQ3xESVNBQkxFfERJU0NBUkR8RElTS3xESVNUSU5DVHxESVNUSU5DVFJPV3xESVNUUklCVVRFRHxET3xET1VCTEV8RFJPUHxEVU1NWXxEVU1QKD86RklMRSk/fERVUExJQ0FURXxFTFNFKD86SUYpP3xFTkFCTEV8RU5DTE9TRUR8RU5EfEVOR0lORXxFTlVNfEVSUkxWTHxFUlJPUlN8RVNDQVBFRD98RVhDRVBUfEVYRUMoPzpVVEUpP3xFWElTVFN8RVhJVHxFWFBMQUlOfEVYVEVOREVEfEZFVENIfEZJRUxEU3xGSUxFfEZJTExGQUNUT1J8RklSU1R8RklYRUR8RkxPQVR8Rk9MTE9XSU5HfEZPUig/OiBFQUNIIFJPVyk/fEZPUkNFfEZPUkVJR058RlJFRVRFWFQoPzpUQUJMRSk/fEZST018RlVMTHxGVU5DVElPTnxHRU9NRVRSWSg/OkNPTExFQ1RJT04pP3xHTE9CQUx8R09UT3xHUkFOVHxHUk9VUHxIQU5ETEVSfEhBU0h8SEFWSU5HfEhPTERMT0NLfEhPVVJ8SURFTlRJVFkoPzpfSU5TRVJUfENPTCk/fElGfElHTk9SRXxJTVBPUlR8SU5ERVh8SU5GSUxFfElOTkVSfElOTk9EQnxJTk9VVHxJTlNFUlR8SU5UfElOVEVHRVJ8SU5URVJTRUNUfElOVEVSVkFMfElOVE98SU5WT0tFUnxJU09MQVRJT058SVRFUkFURXxKT0lOfEtFWVM/fEtJTEx8TEFOR1VBR0V8TEFTVHxMRUFWRXxMRUZUfExFVkVMfExJTUlUfExJTkVOT3xMSU5FU3xMSU5FU1RSSU5HfExPQUR8TE9DQUx8TE9DS3xMT05HKD86QkxPQnxURVhUKXxMT09QfE1BVENIKD86RUQpP3xNRURJVU0oPzpCTE9CfElOVHxURVhUKXxNRVJHRXxNSURETEVJTlR8TUlOVVRFfE1PREV8TU9ESUZJRVN8TU9ESUZZfE1PTlRIfE1VTFRJKD86TElORVNUUklOR3xQT0lOVHxQT0xZR09OKXxOQVRJT05BTHxOQVRVUkFMfE5DSEFSfE5FWFR8Tk98Tk9OQ0xVU1RFUkVEfE5VTExJRnxOVU1FUklDfE9GRj98T0ZGU0VUUz98T058T1BFTig/OkRBVEFTT1VSQ0V8UVVFUll8Uk9XU0VUKT98T1BUSU1JWkV8T1BUSU9OKD86QUxMWSk/fE9SREVSfE9VVCg/OkVSfEZJTEUpP3xPVkVSfFBBUlRJQUx8UEFSVElUSU9OfFBFUkNFTlR8UElWT1R8UExBTnxQT0lOVHxQT0xZR09OfFBSRUNFRElOR3xQUkVDSVNJT058UFJFUEFSRXxQUkVWfFBSSU1BUll8UFJJTlR8UFJJVklMRUdFU3xQUk9DKD86RURVUkUpP3xQVUJMSUN8UFVSR0V8UVVJQ0t8UkFJU0VSUk9SfFJFQURTP3xSRUFMfFJFQ09ORklHVVJFfFJFRkVSRU5DRVN8UkVMRUFTRXxSRU5BTUV8UkVQRUFUKD86QUJMRSk/fFJFUExBQ0V8UkVQTElDQVRJT058UkVRVUlSRXxSRVNJR05BTHxSRVNUT1JFfFJFU1RSSUNUfFJFVFVSTig/OlN8SU5HKT98UkVWT0tFfFJJR0hUfFJPTExCQUNLfFJPVVRJTkV8Uk9XKD86Q09VTlR8R1VJRENPTHxTKT98UlRSRUV8UlVMRXxTQVZFKD86UE9JTlQpP3xTQ0hFTUF8U0VDT05EfFNFTEVDVHxTRVJJQUwoPzpJWkFCTEUpP3xTRVNTSU9OKD86X1VTRVIpP3xTRVQoPzpVU0VSKT98U0hBUkV8U0hPV3xTSFVURE9XTnxTSU1QTEV8U01BTExJTlR8U05BUFNIT1R8U09NRXxTT05BTUV8U1FMfFNUQVJUKD86SU5HKT98U1RBVElTVElDU3xTVEFUVVN8U1RSSVBFRHxTWVNURU1fVVNFUnxUQUJMRVM/fFRBQkxFU1BBQ0V8VEVNUCg/Ok9SQVJZfFRBQkxFKT98VEVSTUlOQVRFRHxURVhUKD86U0laRSk/fFRIRU58VElNRSg/OlNUQU1QKT98VElOWSg/OkJMT0J8SU5UfFRFWFQpfFRPUD98VFJBTig/OlNBQ1RJT05TPyk/fFRSSUdHRVJ8VFJVTkNBVEV8VFNFUVVBTHxUWVBFUz98VU5CT1VOREVEfFVOQ09NTUlUVEVEfFVOREVGSU5FRHxVTklPTnxVTklRVUV8VU5MT0NLfFVOUElWT1R8VU5TSUdORUR8VVBEQVRFKD86VEVYVCk/fFVTQUdFfFVTRXxVU0VSfFVTSU5HfFZBTFVFUz98VkFSKD86QklOQVJZfENIQVJ8Q0hBUkFDVEVSfFlJTkcpfFZJRVd8V0FJVEZPUnxXQVJOSU5HU3xXSEVOfFdIRVJFfFdISUxFfFdJVEgoPzogUk9MTFVQfElOKT98V09SS3xXUklURSg/OlRFWFQpP3xZRUFSKVxcYi9pLFxuICAnYm9vbGVhbic6IC9cXGIoPzpUUlVFfEZBTFNFfE5VTEwpXFxiL2ksXG4gICdudW1iZXInOiAvXFxiMHhbXFxkYS1mXStcXGJ8XFxiXFxkKyg/OlxcLlxcZCopP3xcXEJcXC5cXGQrXFxiL2ksXG4gICdvcGVyYXRvcic6IC9bLSsqXFwvPSVefl18JiY/fFxcfFxcfD98IT0/fDwoPzo9Pj98PHw+KT98Pls+PV0/fFxcYig/OkFORHxCRVRXRUVOfElOfExJS0V8Tk9UfE9SfElTfERJVnxSRUdFWFB8UkxJS0V8U09VTkRTIExJS0V8WE9SKVxcYi9pLFxuICAncHVuY3R1YXRpb24nOiAvWztbXFxdKClgLC5dL1xufTtcbi8qIFwicHJpc21qcy9jb21wb25lbnRzL3ByaXNtLXN0eWx1c1wiICovXG5cbihmdW5jdGlvbiAoUHJpc20pIHtcbiAgdmFyIHVuaXQgPSB7XG4gICAgcGF0dGVybjogLyhcXGJcXGQrKSg/OiV8W2Etel0rKS8sXG4gICAgbG9va2JlaGluZDogdHJ1ZVxuICB9OyAvLyAxMjMgLTEyMyAuMTIzIC0uMTIzIDEyLjMgLTEyLjNcblxuICB2YXIgbnVtYmVyID0ge1xuICAgIHBhdHRlcm46IC8oXnxbXlxcdy4tXSktPyg/OlxcZCsoPzpcXC5cXGQrKT98XFwuXFxkKykvLFxuICAgIGxvb2tiZWhpbmQ6IHRydWVcbiAgfTtcbiAgdmFyIGluc2lkZSA9IHtcbiAgICAnY29tbWVudCc6IHtcbiAgICAgIHBhdHRlcm46IC8oXnxbXlxcXFxdKSg/OlxcL1xcKltcXHNcXFNdKj9cXCpcXC98XFwvXFwvLiopLyxcbiAgICAgIGxvb2tiZWhpbmQ6IHRydWVcbiAgICB9LFxuICAgICd1cmwnOiB7XG4gICAgICBwYXR0ZXJuOiAvdXJsXFwoKFtcIiddPykuKj9cXDFcXCkvaSxcbiAgICAgIGdyZWVkeTogdHJ1ZVxuICAgIH0sXG4gICAgJ3N0cmluZyc6IHtcbiAgICAgIHBhdHRlcm46IC8oXCJ8JykoPzooPyFcXDEpW15cXFxcXFxyXFxuXXxcXFxcKD86XFxyXFxufFtcXHNcXFNdKSkqXFwxLyxcbiAgICAgIGdyZWVkeTogdHJ1ZVxuICAgIH0sXG4gICAgJ2ludGVycG9sYXRpb24nOiBudWxsLFxuICAgIC8vIFNlZSBiZWxvd1xuICAgICdmdW5jJzogbnVsbCxcbiAgICAvLyBTZWUgYmVsb3dcbiAgICAnaW1wb3J0YW50JzogL1xcQiEoPzppbXBvcnRhbnR8b3B0aW9uYWwpXFxiL2ksXG4gICAgJ2tleXdvcmQnOiB7XG4gICAgICBwYXR0ZXJuOiAvKF58XFxzKykoPzooPzppZnxlbHNlfGZvcnxyZXR1cm58dW5sZXNzKSg/PVxccyt8JCl8QFtcXHctXSspLyxcbiAgICAgIGxvb2tiZWhpbmQ6IHRydWVcbiAgICB9LFxuICAgICdoZXhjb2RlJzogLyNbXFxkYS1mXXszLDZ9L2ksXG4gICAgJ2NvbG9yJzogWy9cXGIoPzpBbGljZUJsdWV8QW50aXF1ZVdoaXRlfEFxdWF8QXF1YW1hcmluZXxBenVyZXxCZWlnZXxCaXNxdWV8QmxhY2t8QmxhbmNoZWRBbG1vbmR8Qmx1ZXxCbHVlVmlvbGV0fEJyb3dufEJ1cmx5V29vZHxDYWRldEJsdWV8Q2hhcnRyZXVzZXxDaG9jb2xhdGV8Q29yYWx8Q29ybmZsb3dlckJsdWV8Q29ybnNpbGt8Q3JpbXNvbnxDeWFufERhcmtCbHVlfERhcmtDeWFufERhcmtHb2xkZW5Sb2R8RGFya0dyW2FlXXl8RGFya0dyZWVufERhcmtLaGFraXxEYXJrTWFnZW50YXxEYXJrT2xpdmVHcmVlbnxEYXJrT3JhbmdlfERhcmtPcmNoaWR8RGFya1JlZHxEYXJrU2FsbW9ufERhcmtTZWFHcmVlbnxEYXJrU2xhdGVCbHVlfERhcmtTbGF0ZUdyW2FlXXl8RGFya1R1cnF1b2lzZXxEYXJrVmlvbGV0fERlZXBQaW5rfERlZXBTa3lCbHVlfERpbUdyW2FlXXl8RG9kZ2VyQmx1ZXxGaXJlQnJpY2t8RmxvcmFsV2hpdGV8Rm9yZXN0R3JlZW58RnVjaHNpYXxHYWluc2Jvcm98R2hvc3RXaGl0ZXxHb2xkfEdvbGRlblJvZHxHclthZV15fEdyZWVufEdyZWVuWWVsbG93fEhvbmV5RGV3fEhvdFBpbmt8SW5kaWFuUmVkfEluZGlnb3xJdm9yeXxLaGFraXxMYXZlbmRlcnxMYXZlbmRlckJsdXNofExhd25HcmVlbnxMZW1vbkNoaWZmb258TGlnaHRCbHVlfExpZ2h0Q29yYWx8TGlnaHRDeWFufExpZ2h0R29sZGVuUm9kWWVsbG93fExpZ2h0R3JbYWVdeXxMaWdodEdyZWVufExpZ2h0UGlua3xMaWdodFNhbG1vbnxMaWdodFNlYUdyZWVufExpZ2h0U2t5Qmx1ZXxMaWdodFNsYXRlR3JbYWVdeXxMaWdodFN0ZWVsQmx1ZXxMaWdodFllbGxvd3xMaW1lfExpbWVHcmVlbnxMaW5lbnxNYWdlbnRhfE1hcm9vbnxNZWRpdW1BcXVhTWFyaW5lfE1lZGl1bUJsdWV8TWVkaXVtT3JjaGlkfE1lZGl1bVB1cnBsZXxNZWRpdW1TZWFHcmVlbnxNZWRpdW1TbGF0ZUJsdWV8TWVkaXVtU3ByaW5nR3JlZW58TWVkaXVtVHVycXVvaXNlfE1lZGl1bVZpb2xldFJlZHxNaWRuaWdodEJsdWV8TWludENyZWFtfE1pc3R5Um9zZXxNb2NjYXNpbnxOYXZham9XaGl0ZXxOYXZ5fE9sZExhY2V8T2xpdmV8T2xpdmVEcmFifE9yYW5nZXxPcmFuZ2VSZWR8T3JjaGlkfFBhbGVHb2xkZW5Sb2R8UGFsZUdyZWVufFBhbGVUdXJxdW9pc2V8UGFsZVZpb2xldFJlZHxQYXBheWFXaGlwfFBlYWNoUHVmZnxQZXJ1fFBpbmt8UGx1bXxQb3dkZXJCbHVlfFB1cnBsZXxSZWR8Um9zeUJyb3dufFJveWFsQmx1ZXxTYWRkbGVCcm93bnxTYWxtb258U2FuZHlCcm93bnxTZWFHcmVlbnxTZWFTaGVsbHxTaWVubmF8U2lsdmVyfFNreUJsdWV8U2xhdGVCbHVlfFNsYXRlR3JbYWVdeXxTbm93fFNwcmluZ0dyZWVufFN0ZWVsQmx1ZXxUYW58VGVhbHxUaGlzdGxlfFRvbWF0b3xUcmFuc3BhcmVudHxUdXJxdW9pc2V8VmlvbGV0fFdoZWF0fFdoaXRlfFdoaXRlU21va2V8WWVsbG93fFllbGxvd0dyZWVuKVxcYi9pLCB7XG4gICAgICBwYXR0ZXJuOiAvXFxiKD86cmdifGhzbClcXChcXHMqXFxkezEsM31cXHMqLFxccypcXGR7MSwzfSU/XFxzKixcXHMqXFxkezEsM30lP1xccypcXClcXEJ8XFxiKD86cmdifGhzbClhXFwoXFxzKlxcZHsxLDN9XFxzKixcXHMqXFxkezEsM30lP1xccyosXFxzKlxcZHsxLDN9JT9cXHMqLFxccyooPzowfDA/XFwuXFxkK3wxKVxccypcXClcXEIvaSxcbiAgICAgIGluc2lkZToge1xuICAgICAgICAndW5pdCc6IHVuaXQsXG4gICAgICAgICdudW1iZXInOiBudW1iZXIsXG4gICAgICAgICdmdW5jdGlvbic6IC9bXFx3LV0rKD89XFwoKS8sXG4gICAgICAgICdwdW5jdHVhdGlvbic6IC9bKCksXS9cbiAgICAgIH1cbiAgICB9XSxcbiAgICAnZW50aXR5JzogL1xcXFxbXFxkYS1mXXsxLDh9L2ksXG4gICAgJ3VuaXQnOiB1bml0LFxuICAgICdib29sZWFuJzogL1xcYig/OnRydWV8ZmFsc2UpXFxiLyxcbiAgICAnb3BlcmF0b3InOiBbLy8gV2Ugd2FudCBub24td29yZCBjaGFycyBhcm91bmQgXCItXCIgYmVjYXVzZSBpdCBpc1xuICAgIC8vIGFjY2VwdGVkIGluIHByb3BlcnR5IG5hbWVzLlxuICAgIC9+fFsrIVxcLyU8Pj89XT0/fFstOl09fFxcKlsqPV0/fFxcLnsyLDN9fCYmfFxcfFxcfHxcXEItXFxCfFxcYig/OmFuZHxpbnxpcyg/OiBhfCBkZWZpbmVkfCBub3R8bnQpP3xub3R8b3IpXFxiL10sXG4gICAgJ251bWJlcic6IG51bWJlcixcbiAgICAncHVuY3R1YXRpb24nOiAvW3t9KClcXFtcXF07OixdL1xuICB9O1xuICBpbnNpZGVbJ2ludGVycG9sYXRpb24nXSA9IHtcbiAgICBwYXR0ZXJuOiAvXFx7W15cXHJcXG59Ol0rXFx9LyxcbiAgICBhbGlhczogJ3ZhcmlhYmxlJyxcbiAgICBpbnNpZGU6IHtcbiAgICAgICdkZWxpbWl0ZXInOiB7XG4gICAgICAgIHBhdHRlcm46IC9ee3x9JC8sXG4gICAgICAgIGFsaWFzOiAncHVuY3R1YXRpb24nXG4gICAgICB9LFxuICAgICAgcmVzdDogaW5zaWRlXG4gICAgfVxuICB9O1xuICBpbnNpZGVbJ2Z1bmMnXSA9IHtcbiAgICBwYXR0ZXJuOiAvW1xcdy1dK1xcKFteKV0qXFwpLiovLFxuICAgIGluc2lkZToge1xuICAgICAgJ2Z1bmN0aW9uJzogL15bXihdKy8sXG4gICAgICByZXN0OiBpbnNpZGVcbiAgICB9XG4gIH07XG4gIFByaXNtLmxhbmd1YWdlcy5zdHlsdXMgPSB7XG4gICAgJ2F0cnVsZS1kZWNsYXJhdGlvbic6IHtcbiAgICAgIHBhdHRlcm46IC8oXlxccyopQC4rL20sXG4gICAgICBsb29rYmVoaW5kOiB0cnVlLFxuICAgICAgaW5zaWRlOiB7XG4gICAgICAgICdhdHJ1bGUnOiAvXkBbXFx3LV0rLyxcbiAgICAgICAgcmVzdDogaW5zaWRlXG4gICAgICB9XG4gICAgfSxcbiAgICAndmFyaWFibGUtZGVjbGFyYXRpb24nOiB7XG4gICAgICBwYXR0ZXJuOiAvKF5bIFxcdF0qKVtcXHckLV0rXFxzKi4/PVsgXFx0XSooPzpcXHtbXnt9XSpcXH18XFxTLip8JCkvbSxcbiAgICAgIGxvb2tiZWhpbmQ6IHRydWUsXG4gICAgICBpbnNpZGU6IHtcbiAgICAgICAgJ3ZhcmlhYmxlJzogL15cXFMrLyxcbiAgICAgICAgcmVzdDogaW5zaWRlXG4gICAgICB9XG4gICAgfSxcbiAgICAnc3RhdGVtZW50Jzoge1xuICAgICAgcGF0dGVybjogLyheWyBcXHRdKikoPzppZnxlbHNlfGZvcnxyZXR1cm58dW5sZXNzKVsgXFx0XS4rL20sXG4gICAgICBsb29rYmVoaW5kOiB0cnVlLFxuICAgICAgaW5zaWRlOiB7XG4gICAgICAgICdrZXl3b3JkJzogL15cXFMrLyxcbiAgICAgICAgcmVzdDogaW5zaWRlXG4gICAgICB9XG4gICAgfSxcbiAgICAvLyBBIHByb3BlcnR5L3ZhbHVlIHBhaXIgY2Fubm90IGVuZCB3aXRoIGEgY29tbWEgb3IgYSBicmFjZVxuICAgIC8vIEl0IGNhbm5vdCBoYXZlIGluZGVudGVkIGNvbnRlbnQgdW5sZXNzIGl0IGVuZGVkIHdpdGggYSBzZW1pY29sb25cbiAgICAncHJvcGVydHktZGVjbGFyYXRpb24nOiB7XG4gICAgICBwYXR0ZXJuOiAvKCg/Ol58XFx7KShbIFxcdF0qKSkoPzpbXFx3LV18XFx7W159XFxyXFxuXStcXH0pKyg/Olxccyo6XFxzKnxbIFxcdF0rKSg/IVxccylbXntcXHJcXG5dKig/Ojt8W157XFxyXFxuLF0oPz0kKSg/ISg/Olxccj9cXG58XFxyKSg/Olxce3xcXDJbIFxcdF0rKSkpL20sXG4gICAgICBsb29rYmVoaW5kOiB0cnVlLFxuICAgICAgaW5zaWRlOiB7XG4gICAgICAgICdwcm9wZXJ0eSc6IHtcbiAgICAgICAgICBwYXR0ZXJuOiAvXlteXFxzOl0rLyxcbiAgICAgICAgICBpbnNpZGU6IHtcbiAgICAgICAgICAgICdpbnRlcnBvbGF0aW9uJzogaW5zaWRlLmludGVycG9sYXRpb25cbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHJlc3Q6IGluc2lkZVxuICAgICAgfVxuICAgIH0sXG4gICAgLy8gQSBzZWxlY3RvciBjYW4gY29udGFpbiBwYXJlbnRoZXNlcyBvbmx5IGFzIHBhcnQgb2YgYSBwc2V1ZG8tZWxlbWVudFxuICAgIC8vIEl0IGNhbiBzcGFuIG11bHRpcGxlIGxpbmVzLlxuICAgIC8vIEl0IG11c3QgZW5kIHdpdGggYSBjb21tYSBvciBhbiBhY2NvbGFkZSBvciBoYXZlIGluZGVudGVkIGNvbnRlbnQuXG4gICAgJ3NlbGVjdG9yJzoge1xuICAgICAgcGF0dGVybjogLyheWyBcXHRdKikoPzooPz1cXFMpKD86W157fVxcclxcbjooKV18Ojo/W1xcdy1dKyg/OlxcKFteKVxcclxcbl0qXFwpfCg/IVtcXHctXSkpfFxce1tefVxcclxcbl0rXFx9KSspKD86KD86XFxyP1xcbnxcXHIpKD86XFwxKD86KD89XFxTKSg/Oltee31cXHJcXG46KCldfDo6P1tcXHctXSsoPzpcXChbXilcXHJcXG5dKlxcKXwoPyFbXFx3LV0pKXxcXHtbXn1cXHJcXG5dK1xcfSkrKSkpKig/OiwkfFxce3woPz0oPzpcXHI/XFxufFxccikoPzpcXHt8XFwxWyBcXHRdKykpKS9tLFxuICAgICAgbG9va2JlaGluZDogdHJ1ZSxcbiAgICAgIGluc2lkZToge1xuICAgICAgICAnaW50ZXJwb2xhdGlvbic6IGluc2lkZS5pbnRlcnBvbGF0aW9uLFxuICAgICAgICAnY29tbWVudCc6IGluc2lkZS5jb21tZW50LFxuICAgICAgICAncHVuY3R1YXRpb24nOiAvW3t9LF0vXG4gICAgICB9XG4gICAgfSxcbiAgICAnZnVuYyc6IGluc2lkZS5mdW5jLFxuICAgICdzdHJpbmcnOiBpbnNpZGUuc3RyaW5nLFxuICAgICdjb21tZW50Jzoge1xuICAgICAgcGF0dGVybjogLyhefFteXFxcXF0pKD86XFwvXFwqW1xcc1xcU10qP1xcKlxcL3xcXC9cXC8uKikvLFxuICAgICAgbG9va2JlaGluZDogdHJ1ZSxcbiAgICAgIGdyZWVkeTogdHJ1ZVxuICAgIH0sXG4gICAgJ2ludGVycG9sYXRpb24nOiBpbnNpZGUuaW50ZXJwb2xhdGlvbixcbiAgICAncHVuY3R1YXRpb24nOiAvW3t9KClcXFtcXF07Oi5dL1xuICB9O1xufSkoUHJpc20pO1xuLyogXCJwcmlzbWpzL2NvbXBvbmVudHMvcHJpc20tdHlwZXNjcmlwdFwiICovXG5cblxuKGZ1bmN0aW9uIChQcmlzbSkge1xuICBQcmlzbS5sYW5ndWFnZXMudHlwZXNjcmlwdCA9IFByaXNtLmxhbmd1YWdlcy5leHRlbmQoJ2phdmFzY3JpcHQnLCB7XG4gICAgJ2NsYXNzLW5hbWUnOiB7XG4gICAgICBwYXR0ZXJuOiAvKFxcYig/OmNsYXNzfGV4dGVuZHN8aW1wbGVtZW50c3xpbnN0YW5jZW9mfGludGVyZmFjZXxuZXd8dHlwZSlcXHMrKSg/IWtleW9mXFxiKSg/IVxccylbXyRhLXpBLVpcXHhBMC1cXHVGRkZGXSg/Oig/IVxccylbJFxcd1xceEEwLVxcdUZGRkZdKSooPzpcXHMqPCg/OltePD5dfDwoPzpbXjw+XXw8W148Pl0qPikqPikqPik/LyxcbiAgICAgIGxvb2tiZWhpbmQ6IHRydWUsXG4gICAgICBncmVlZHk6IHRydWUsXG4gICAgICBpbnNpZGU6IG51bGwgLy8gc2VlIGJlbG93XG5cbiAgICB9LFxuICAgIC8vIEZyb20gSmF2YVNjcmlwdCBQcmlzbSBrZXl3b3JkIGxpc3QgYW5kIFR5cGVTY3JpcHQgbGFuZ3VhZ2Ugc3BlYzogaHR0cHM6Ly9naXRodWIuY29tL01pY3Jvc29mdC9UeXBlU2NyaXB0L2Jsb2IvbWFzdGVyL2RvYy9zcGVjLm1kIzIyMS1yZXNlcnZlZC13b3Jkc1xuICAgICdrZXl3b3JkJzogL1xcYig/OmFic3RyYWN0fGFzfGFzc2VydHN8YXN5bmN8YXdhaXR8YnJlYWt8Y2FzZXxjYXRjaHxjbGFzc3xjb25zdHxjb25zdHJ1Y3Rvcnxjb250aW51ZXxkZWJ1Z2dlcnxkZWNsYXJlfGRlZmF1bHR8ZGVsZXRlfGRvfGVsc2V8ZW51bXxleHBvcnR8ZXh0ZW5kc3xmaW5hbGx5fGZvcnxmcm9tfGZ1bmN0aW9ufGdldHxpZnxpbXBsZW1lbnRzfGltcG9ydHxpbnxpbnN0YW5jZW9mfGludGVyZmFjZXxpc3xrZXlvZnxsZXR8bW9kdWxlfG5hbWVzcGFjZXxuZXd8bnVsbHxvZnxwYWNrYWdlfHByaXZhdGV8cHJvdGVjdGVkfHB1YmxpY3xyZWFkb25seXxyZXR1cm58cmVxdWlyZXxzZXR8c3RhdGljfHN1cGVyfHN3aXRjaHx0aGlzfHRocm93fHRyeXx0eXBlfHR5cGVvZnx1bmRlZmluZWR8dmFyfHZvaWR8d2hpbGV8d2l0aHx5aWVsZClcXGIvLFxuICAgICdidWlsdGluJzogL1xcYig/OnN0cmluZ3xGdW5jdGlvbnxhbnl8bnVtYmVyfGJvb2xlYW58QXJyYXl8c3ltYm9sfGNvbnNvbGV8UHJvbWlzZXx1bmtub3dufG5ldmVyKVxcYi9cbiAgfSk7IC8vIGRvZXNuJ3Qgd29yayB3aXRoIFRTIGJlY2F1c2UgVFMgaXMgdG9vIGNvbXBsZXhcblxuICBkZWxldGUgUHJpc20ubGFuZ3VhZ2VzLnR5cGVzY3JpcHRbJ3BhcmFtZXRlciddOyAvLyBhIHZlcnNpb24gb2YgdHlwZXNjcmlwdCBzcGVjaWZpY2FsbHkgZm9yIGhpZ2hsaWdodGluZyB0eXBlc1xuXG4gIHZhciB0eXBlSW5zaWRlID0gUHJpc20ubGFuZ3VhZ2VzLmV4dGVuZCgndHlwZXNjcmlwdCcsIHt9KTtcbiAgZGVsZXRlIHR5cGVJbnNpZGVbJ2NsYXNzLW5hbWUnXTtcbiAgUHJpc20ubGFuZ3VhZ2VzLnR5cGVzY3JpcHRbJ2NsYXNzLW5hbWUnXS5pbnNpZGUgPSB0eXBlSW5zaWRlO1xuICBQcmlzbS5sYW5ndWFnZXMuaW5zZXJ0QmVmb3JlKCd0eXBlc2NyaXB0JywgJ2Z1bmN0aW9uJywge1xuICAgICdnZW5lcmljLWZ1bmN0aW9uJzoge1xuICAgICAgLy8gZS5nLiBmb288VCBleHRlbmRzIFwiYmFyXCIgfCBcImJhelwiPiggLi4uXG4gICAgICBwYXR0ZXJuOiAvIz8oPyFcXHMpW18kYS16QS1aXFx4QTAtXFx1RkZGRl0oPzooPyFcXHMpWyRcXHdcXHhBMC1cXHVGRkZGXSkqXFxzKjwoPzpbXjw+XXw8KD86W148Pl18PFtePD5dKj4pKj4pKj4oPz1cXHMqXFwoKS8sXG4gICAgICBncmVlZHk6IHRydWUsXG4gICAgICBpbnNpZGU6IHtcbiAgICAgICAgJ2Z1bmN0aW9uJzogL14jPyg/IVxccylbXyRhLXpBLVpcXHhBMC1cXHVGRkZGXSg/Oig/IVxccylbJFxcd1xceEEwLVxcdUZGRkZdKSovLFxuICAgICAgICAnZ2VuZXJpYyc6IHtcbiAgICAgICAgICBwYXR0ZXJuOiAvPFtcXHNcXFNdKy8sXG4gICAgICAgICAgLy8gZXZlcnl0aGluZyBhZnRlciB0aGUgZmlyc3QgPFxuICAgICAgICAgIGFsaWFzOiAnY2xhc3MtbmFtZScsXG4gICAgICAgICAgaW5zaWRlOiB0eXBlSW5zaWRlXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH0pO1xuICBQcmlzbS5sYW5ndWFnZXMudHMgPSBQcmlzbS5sYW5ndWFnZXMudHlwZXNjcmlwdDtcbn0pKFByaXNtKTtcbi8qIFwicHJpc21qcy9jb21wb25lbnRzL3ByaXNtLXRzeFwiICovXG5cblxuKGZ1bmN0aW9uIChQcmlzbSkge1xuICB2YXIgdHlwZXNjcmlwdCA9IFByaXNtLnV0aWwuY2xvbmUoUHJpc20ubGFuZ3VhZ2VzLnR5cGVzY3JpcHQpO1xuICBQcmlzbS5sYW5ndWFnZXMudHN4ID0gUHJpc20ubGFuZ3VhZ2VzLmV4dGVuZCgnanN4JywgdHlwZXNjcmlwdCk7IC8vIFRoaXMgd2lsbCBwcmV2ZW50IGNvbGxpc2lvbnMgYmV0d2VlbiBUU1ggdGFncyBhbmQgVFMgZ2VuZXJpYyB0eXBlcy5cbiAgLy8gSWRlYSBieSBodHRwczovL2dpdGh1Yi5jb20va2FybGhvcmt5XG4gIC8vIERpc2N1c3Npb246IGh0dHBzOi8vZ2l0aHViLmNvbS9QcmlzbUpTL3ByaXNtL2lzc3Vlcy8yNTk0I2lzc3VlY29tbWVudC03MTA2NjY5MjhcblxuICB2YXIgdGFnID0gUHJpc20ubGFuZ3VhZ2VzLnRzeC50YWc7XG4gIHRhZy5wYXR0ZXJuID0gUmVnRXhwKC8oXnxbXlxcdyRdfCg/PTxcXC8pKS8uc291cmNlICsgJyg/OicgKyB0YWcucGF0dGVybi5zb3VyY2UgKyAnKScsIHRhZy5wYXR0ZXJuLmZsYWdzKTtcbiAgdGFnLmxvb2tiZWhpbmQgPSB0cnVlO1xufSkoUHJpc20pO1xuLyogXCJwcmlzbWpzL2NvbXBvbmVudHMvcHJpc20td2FzbVwiICovXG5cblxuUHJpc20ubGFuZ3VhZ2VzLndhc20gPSB7XG4gICdjb21tZW50JzogWy9cXCg7W1xcc1xcU10qPztcXCkvLCB7XG4gICAgcGF0dGVybjogLzs7LiovLFxuICAgIGdyZWVkeTogdHJ1ZVxuICB9XSxcbiAgJ3N0cmluZyc6IHtcbiAgICBwYXR0ZXJuOiAvXCIoPzpcXFxcW1xcc1xcU118W15cIlxcXFxdKSpcIi8sXG4gICAgZ3JlZWR5OiB0cnVlXG4gIH0sXG4gICdrZXl3b3JkJzogW3tcbiAgICBwYXR0ZXJuOiAvXFxiKD86YWxpZ258b2Zmc2V0KT0vLFxuICAgIGluc2lkZToge1xuICAgICAgJ29wZXJhdG9yJzogLz0vXG4gICAgfVxuICB9LCB7XG4gICAgcGF0dGVybjogL1xcYig/Oig/OmYzMnxmNjR8aTMyfGk2NCkoPzpcXC4oPzphYnN8YWRkfGFuZHxjZWlsfGNsenxjb25zdHxjb252ZXJ0X1tzdV1cXC9pKD86MzJ8NjQpfGNvcHlzaWdufGN0enxkZW1vdGVcXC9mNjR8ZGl2KD86X1tzdV0pP3xlcXo/fGV4dGVuZF9bc3VdXFwvaTMyfGZsb29yfGdlKD86X1tzdV0pP3xndCg/Ol9bc3VdKT98bGUoPzpfW3N1XSk/fGxvYWQoPzooPzo4fDE2fDMyKV9bc3VdKT98bHQoPzpfW3N1XSk/fG1heHxtaW58bXVsfG5lYXJlc3R8bmVnP3xvcnxwb3BjbnR8cHJvbW90ZVxcL2YzMnxyZWludGVycHJldFxcL1tmaV0oPzozMnw2NCl8cmVtX1tzdV18cm90W2xyXXxzaGx8c2hyX1tzdV18c3RvcmUoPzo4fDE2fDMyKT98c3FydHxzdWJ8dHJ1bmMoPzpfW3N1XVxcL2YoPzozMnw2NCkpP3x3cmFwXFwvaTY0fHhvcikpP3xtZW1vcnlcXC4oPzpncm93fHNpemUpKVxcYi8sXG4gICAgaW5zaWRlOiB7XG4gICAgICAncHVuY3R1YXRpb24nOiAvXFwuL1xuICAgIH1cbiAgfSwgL1xcYig/OmFueWZ1bmN8YmxvY2t8YnIoPzpfaWZ8X3RhYmxlKT98Y2FsbCg/Ol9pbmRpcmVjdCk/fGRhdGF8ZHJvcHxlbGVtfGVsc2V8ZW5kfGV4cG9ydHxmdW5jfGdldF8oPzpnbG9iYWx8bG9jYWwpfGdsb2JhbHxpZnxpbXBvcnR8bG9jYWx8bG9vcHxtZW1vcnl8bW9kdWxlfG11dHxub3B8b2Zmc2V0fHBhcmFtfHJlc3VsdHxyZXR1cm58c2VsZWN0fHNldF8oPzpnbG9iYWx8bG9jYWwpfHN0YXJ0fHRhYmxlfHRlZV9sb2NhbHx0aGVufHR5cGV8dW5yZWFjaGFibGUpXFxiL10sXG4gICd2YXJpYWJsZSc6IC9cXCRbXFx3ISMkJSYnKitcXC0uLzo8PT4/QFxcXFxeX2B8fl0rL2ksXG4gICdudW1iZXInOiAvWystXT9cXGIoPzpcXGQoPzpfP1xcZCkqKD86XFwuXFxkKD86Xz9cXGQpKik/KD86W2VFXVsrLV0/XFxkKD86Xz9cXGQpKik/fDB4W1xcZGEtZkEtRl0oPzpfP1tcXGRhLWZBLUZdKSooPzpcXC5bXFxkYS1mQS1GXSg/Ol8/W1xcZGEtZkEtRF0pKik/KD86W3BQXVsrLV0/XFxkKD86Xz9cXGQpKik/KVxcYnxcXGJpbmZcXGJ8XFxibmFuKD86OjB4W1xcZGEtZkEtRl0oPzpfP1tcXGRhLWZBLURdKSopP1xcYi8sXG4gICdwdW5jdHVhdGlvbic6IC9bKCldL1xufTtcbi8qIFwicHJpc21qcy9jb21wb25lbnRzL3ByaXNtLXlhbWxcIiAqL1xuXG4oZnVuY3Rpb24gKFByaXNtKSB7XG4gIC8vIGh0dHBzOi8veWFtbC5vcmcvc3BlYy8xLjIvc3BlYy5odG1sI2MtbnMtYW5jaG9yLXByb3BlcnR5XG4gIC8vIGh0dHBzOi8veWFtbC5vcmcvc3BlYy8xLjIvc3BlYy5odG1sI2MtbnMtYWxpYXMtbm9kZVxuICB2YXIgYW5jaG9yT3JBbGlhcyA9IC9bKiZdW15cXHNbXFxde30sXSsvOyAvLyBodHRwczovL3lhbWwub3JnL3NwZWMvMS4yL3NwZWMuaHRtbCNjLW5zLXRhZy1wcm9wZXJ0eVxuXG4gIHZhciB0YWcgPSAvISg/OjxbXFx3XFwtJSM7Lz86QCY9KyQsLiF+KicoKVtcXF1dKz58KD86W2EtekEtWlxcZC1dKiEpP1tcXHdcXC0lIzsvPzpAJj0rJC5+KicoKV0rKT8vOyAvLyBodHRwczovL3lhbWwub3JnL3NwZWMvMS4yL3NwZWMuaHRtbCNjLW5zLXByb3BlcnRpZXMobixjKVxuXG4gIHZhciBwcm9wZXJ0aWVzID0gJyg/OicgKyB0YWcuc291cmNlICsgJyg/OlsgXFx0XSsnICsgYW5jaG9yT3JBbGlhcy5zb3VyY2UgKyAnKT98JyArIGFuY2hvck9yQWxpYXMuc291cmNlICsgJyg/OlsgXFx0XSsnICsgdGFnLnNvdXJjZSArICcpPyknOyAvLyBodHRwczovL3lhbWwub3JnL3NwZWMvMS4yL3NwZWMuaHRtbCNucy1wbGFpbihuLGMpXG4gIC8vIFRoaXMgaXMgYSBzaW1wbGlmaWVkIHZlcnNpb24gdGhhdCBkb2Vzbid0IHN1cHBvcnQgXCIjXCIgYW5kIG11bHRpbGluZSBrZXlzXG4gIC8vIEFsbCB0aGVzZSBsb25nIHNjYXJyeSBjaGFyYWN0ZXIgY2xhc3NlcyBhcmUgc2ltcGxpZmllZCB2ZXJzaW9ucyBvZiBZQU1MJ3MgY2hhcmFjdGVyc1xuXG4gIHZhciBwbGFpbktleSA9IC8oPzpbXlxcc1xceDAwLVxceDA4XFx4MGUtXFx4MWYhXCIjJSYnKixcXC06Pj9AW1xcXWB7fH1cXHg3Zi1cXHg4NFxceDg2LVxceDlmXFx1ZDgwMC1cXHVkZmZmXFx1ZmZmZVxcdWZmZmZdfFs/Oi1dPFBMQUlOPikoPzpbIFxcdF0qKD86KD8hWyM6XSk8UExBSU4+fDo8UExBSU4+KSkqLy5zb3VyY2UucmVwbGFjZSgvPFBMQUlOPi9nLCBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIC9bXlxcc1xceDAwLVxceDA4XFx4MGUtXFx4MWYsW1xcXXt9XFx4N2YtXFx4ODRcXHg4Ni1cXHg5ZlxcdWQ4MDAtXFx1ZGZmZlxcdWZmZmVcXHVmZmZmXS8uc291cmNlO1xuICB9KTtcbiAgdmFyIHN0cmluZyA9IC9cIig/OlteXCJcXFxcXFxyXFxuXXxcXFxcLikqXCJ8Jyg/OlteJ1xcXFxcXHJcXG5dfFxcXFwuKSonLy5zb3VyY2U7XG4gIC8qKlxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gdmFsdWVcbiAgICogQHBhcmFtIHtzdHJpbmd9IFtmbGFnc11cbiAgICogQHJldHVybnMge1JlZ0V4cH1cbiAgICovXG5cbiAgZnVuY3Rpb24gY3JlYXRlVmFsdWVQYXR0ZXJuKHZhbHVlLCBmbGFncykge1xuICAgIGZsYWdzID0gKGZsYWdzIHx8ICcnKS5yZXBsYWNlKC9tL2csICcnKSArICdtJzsgLy8gYWRkIG0gZmxhZ1xuXG4gICAgdmFyIHBhdHRlcm4gPSAvKFs6XFwtLFt7XVxccyooPzpcXHM8PHByb3A+PlsgXFx0XSspPykoPzo8PHZhbHVlPj4pKD89WyBcXHRdKig/OiR8LHxdfH18KD86W1xcclxcbl1cXHMqKT8jKSkvLnNvdXJjZS5yZXBsYWNlKC88PHByb3A+Pi9nLCBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gcHJvcGVydGllcztcbiAgICB9KS5yZXBsYWNlKC88PHZhbHVlPj4vZywgZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIHZhbHVlO1xuICAgIH0pO1xuICAgIHJldHVybiBSZWdFeHAocGF0dGVybiwgZmxhZ3MpO1xuICB9XG5cbiAgUHJpc20ubGFuZ3VhZ2VzLnlhbWwgPSB7XG4gICAgJ3NjYWxhcic6IHtcbiAgICAgIHBhdHRlcm46IFJlZ0V4cCgvKFtcXC06XVxccyooPzpcXHM8PHByb3A+PlsgXFx0XSspP1t8Pl0pWyBcXHRdKig/OigoPzpcXHI/XFxufFxccilbIFxcdF0rKVxcU1teXFxyXFxuXSooPzpcXDJbXlxcclxcbl0rKSopLy5zb3VyY2UucmVwbGFjZSgvPDxwcm9wPj4vZywgZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gcHJvcGVydGllcztcbiAgICAgIH0pKSxcbiAgICAgIGxvb2tiZWhpbmQ6IHRydWUsXG4gICAgICBhbGlhczogJ3N0cmluZydcbiAgICB9LFxuICAgICdjb21tZW50JzogLyMuKi8sXG4gICAgJ2tleSc6IHtcbiAgICAgIHBhdHRlcm46IFJlZ0V4cCgvKCg/Ol58WzpcXC0sW3tcXHJcXG4/XSlbIFxcdF0qKD86PDxwcm9wPj5bIFxcdF0rKT8pPDxrZXk+Pig/PVxccyo6XFxzKS8uc291cmNlLnJlcGxhY2UoLzw8cHJvcD4+L2csIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHByb3BlcnRpZXM7XG4gICAgICB9KS5yZXBsYWNlKC88PGtleT4+L2csIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuICcoPzonICsgcGxhaW5LZXkgKyAnfCcgKyBzdHJpbmcgKyAnKSc7XG4gICAgICB9KSksXG4gICAgICBsb29rYmVoaW5kOiB0cnVlLFxuICAgICAgZ3JlZWR5OiB0cnVlLFxuICAgICAgYWxpYXM6ICdhdHJ1bGUnXG4gICAgfSxcbiAgICAnZGlyZWN0aXZlJzoge1xuICAgICAgcGF0dGVybjogLyheWyBcXHRdKiklLisvbSxcbiAgICAgIGxvb2tiZWhpbmQ6IHRydWUsXG4gICAgICBhbGlhczogJ2ltcG9ydGFudCdcbiAgICB9LFxuICAgICdkYXRldGltZSc6IHtcbiAgICAgIHBhdHRlcm46IGNyZWF0ZVZhbHVlUGF0dGVybigvXFxkezR9LVxcZFxcZD8tXFxkXFxkPyg/Olt0VF18WyBcXHRdKylcXGRcXGQ/OlxcZHsyfTpcXGR7Mn0oPzpcXC5cXGQqKT8oPzpbIFxcdF0qKD86WnxbLStdXFxkXFxkPyg/OjpcXGR7Mn0pPykpP3xcXGR7NH0tXFxkezJ9LVxcZHsyfXxcXGRcXGQ/OlxcZHsyfSg/OjpcXGR7Mn0oPzpcXC5cXGQqKT8pPy8uc291cmNlKSxcbiAgICAgIGxvb2tiZWhpbmQ6IHRydWUsXG4gICAgICBhbGlhczogJ251bWJlcidcbiAgICB9LFxuICAgICdib29sZWFuJzoge1xuICAgICAgcGF0dGVybjogY3JlYXRlVmFsdWVQYXR0ZXJuKC90cnVlfGZhbHNlLy5zb3VyY2UsICdpJyksXG4gICAgICBsb29rYmVoaW5kOiB0cnVlLFxuICAgICAgYWxpYXM6ICdpbXBvcnRhbnQnXG4gICAgfSxcbiAgICAnbnVsbCc6IHtcbiAgICAgIHBhdHRlcm46IGNyZWF0ZVZhbHVlUGF0dGVybigvbnVsbHx+Ly5zb3VyY2UsICdpJyksXG4gICAgICBsb29rYmVoaW5kOiB0cnVlLFxuICAgICAgYWxpYXM6ICdpbXBvcnRhbnQnXG4gICAgfSxcbiAgICAnc3RyaW5nJzoge1xuICAgICAgcGF0dGVybjogY3JlYXRlVmFsdWVQYXR0ZXJuKHN0cmluZyksXG4gICAgICBsb29rYmVoaW5kOiB0cnVlLFxuICAgICAgZ3JlZWR5OiB0cnVlXG4gICAgfSxcbiAgICAnbnVtYmVyJzoge1xuICAgICAgcGF0dGVybjogY3JlYXRlVmFsdWVQYXR0ZXJuKC9bKy1dPyg/OjB4W1xcZGEtZl0rfDBvWzAtN10rfCg/OlxcZCsoPzpcXC5cXGQqKT98XFwuP1xcZCspKD86ZVsrLV0/XFxkKyk/fFxcLmluZnxcXC5uYW4pLy5zb3VyY2UsICdpJyksXG4gICAgICBsb29rYmVoaW5kOiB0cnVlXG4gICAgfSxcbiAgICAndGFnJzogdGFnLFxuICAgICdpbXBvcnRhbnQnOiBhbmNob3JPckFsaWFzLFxuICAgICdwdW5jdHVhdGlvbic6IC8tLS18WzpbXFxde31cXC0sfD4/XXxcXC5cXC5cXC4vXG4gIH07XG4gIFByaXNtLmxhbmd1YWdlcy55bWwgPSBQcmlzbS5sYW5ndWFnZXMueWFtbDtcbn0pKFByaXNtKTtcblxuZXhwb3J0IGRlZmF1bHQgUHJpc207XG4iLCIvLyBEdW90b25lIERhcmtcbi8vIEF1dGhvcjogU2ltdXJhaSwgYWRhcHRlZCBmcm9tIER1b1RvbmUgdGhlbWVzIGZvciBBdG9tIChodHRwOi8vc2ltdXJhaS5jb20vcHJvamVjdHMvMjAxNi8wMS8wMS9kdW90b25lLXRoZW1lcylcbi8vIENvbnZlcnNpb246IEJyYW0gZGUgSGFhbiAoaHR0cDovL2F0ZWxpZXJicmFtLmdpdGh1Yi5pby9CYXNlMlRvbmUtcHJpc20vb3V0cHV0L3ByaXNtL3ByaXNtLWJhc2UydG9uZS1ldmVuaW5nLWRhcmsuY3NzKVxuLy8gR2VuZXJhdGVkIHdpdGggQmFzZTE2IEJ1aWxkZXIgKGh0dHBzOi8vZ2l0aHViLmNvbS9iYXNlMTYtYnVpbGRlci9iYXNlMTYtYnVpbGRlcilcbnZhciB0aGVtZSA9IHtcbiAgcGxhaW46IHtcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiIzJhMjczNFwiLFxuICAgIGNvbG9yOiBcIiM5YTg2ZmRcIlxuICB9LFxuICBzdHlsZXM6IFt7XG4gICAgdHlwZXM6IFtcImNvbW1lbnRcIiwgXCJwcm9sb2dcIiwgXCJkb2N0eXBlXCIsIFwiY2RhdGFcIiwgXCJwdW5jdHVhdGlvblwiXSxcbiAgICBzdHlsZToge1xuICAgICAgY29sb3I6IFwiIzZjNjc4M1wiXG4gICAgfVxuICB9LCB7XG4gICAgdHlwZXM6IFtcIm5hbWVzcGFjZVwiXSxcbiAgICBzdHlsZToge1xuICAgICAgb3BhY2l0eTogMC43XG4gICAgfVxuICB9LCB7XG4gICAgdHlwZXM6IFtcInRhZ1wiLCBcIm9wZXJhdG9yXCIsIFwibnVtYmVyXCJdLFxuICAgIHN0eWxlOiB7XG4gICAgICBjb2xvcjogXCIjZTA5MTQyXCJcbiAgICB9XG4gIH0sIHtcbiAgICB0eXBlczogW1wicHJvcGVydHlcIiwgXCJmdW5jdGlvblwiXSxcbiAgICBzdHlsZToge1xuICAgICAgY29sb3I6IFwiIzlhODZmZFwiXG4gICAgfVxuICB9LCB7XG4gICAgdHlwZXM6IFtcInRhZy1pZFwiLCBcInNlbGVjdG9yXCIsIFwiYXRydWxlLWlkXCJdLFxuICAgIHN0eWxlOiB7XG4gICAgICBjb2xvcjogXCIjZWVlYmZmXCJcbiAgICB9XG4gIH0sIHtcbiAgICB0eXBlczogW1wiYXR0ci1uYW1lXCJdLFxuICAgIHN0eWxlOiB7XG4gICAgICBjb2xvcjogXCIjYzRiOWZlXCJcbiAgICB9XG4gIH0sIHtcbiAgICB0eXBlczogW1wiYm9vbGVhblwiLCBcInN0cmluZ1wiLCBcImVudGl0eVwiLCBcInVybFwiLCBcImF0dHItdmFsdWVcIiwgXCJrZXl3b3JkXCIsIFwiY29udHJvbFwiLCBcImRpcmVjdGl2ZVwiLCBcInVuaXRcIiwgXCJzdGF0ZW1lbnRcIiwgXCJyZWdleFwiLCBcImF0LXJ1bGVcIiwgXCJwbGFjZWhvbGRlclwiLCBcInZhcmlhYmxlXCJdLFxuICAgIHN0eWxlOiB7XG4gICAgICBjb2xvcjogXCIjZmZjYzk5XCJcbiAgICB9XG4gIH0sIHtcbiAgICB0eXBlczogW1wiZGVsZXRlZFwiXSxcbiAgICBzdHlsZToge1xuICAgICAgdGV4dERlY29yYXRpb25MaW5lOiBcImxpbmUtdGhyb3VnaFwiXG4gICAgfVxuICB9LCB7XG4gICAgdHlwZXM6IFtcImluc2VydGVkXCJdLFxuICAgIHN0eWxlOiB7XG4gICAgICB0ZXh0RGVjb3JhdGlvbkxpbmU6IFwidW5kZXJsaW5lXCJcbiAgICB9XG4gIH0sIHtcbiAgICB0eXBlczogW1wiaXRhbGljXCJdLFxuICAgIHN0eWxlOiB7XG4gICAgICBmb250U3R5bGU6IFwiaXRhbGljXCJcbiAgICB9XG4gIH0sIHtcbiAgICB0eXBlczogW1wiaW1wb3J0YW50XCIsIFwiYm9sZFwiXSxcbiAgICBzdHlsZToge1xuICAgICAgZm9udFdlaWdodDogXCJib2xkXCJcbiAgICB9XG4gIH0sIHtcbiAgICB0eXBlczogW1wiaW1wb3J0YW50XCJdLFxuICAgIHN0eWxlOiB7XG4gICAgICBjb2xvcjogXCIjYzRiOWZlXCJcbiAgICB9XG4gIH1dXG59O1xuXG5leHBvcnQgZGVmYXVsdCB0aGVtZTtcbiIsImltcG9ydCBMYXlvdXQgZnJvbSBcIi4uL2NvbXBvbmVudHMvTGF5b3V0XCJcclxuaW1wb3J0IHtNRFhQcm92aWRlcn0gZnJvbSAnQG1keC1qcy9yZWFjdCdcclxuaW1wb3J0IEhpZ2hsaWdodCwgeyBkZWZhdWx0UHJvcHMgfSBmcm9tIFwicHJpc20tcmVhY3QtcmVuZGVyZXJcIlxyXG5pbXBvcnQgJy4vLi4vc3R5bGVzL2dsb2JhbHMuY3NzJ1xyXG5cclxuY29uc3QgZXhhbXBsZUNvZGUgPSBgXHJcbihmdW5jdGlvbiBzb21lRGVtbygpIHtcclxuICB2YXIgdGVzdCA9IFwiSGVsbG8gV29ybGQhXCI7XHJcbiAgY29uc29sZS5sb2codGVzdCk7XHJcbn0pKCk7XHJcblxyXG5yZXR1cm4gKCkgPT4gPEFwcCAvPjtcclxuYDtcclxuXHJcblxyXG5jb25zdCBjb21wb25lbnRzID0ge1xyXG4gIHByZTogcHJvcHMgPT4gPEhpZ2hsaWdodCB7Li4uZGVmYXVsdFByb3BzfSBjb2RlPXtleGFtcGxlQ29kZX0gbGFuZ3VhZ2U9XCJqc3hcIj5cclxuICB7KHsgY2xhc3NOYW1lLCBzdHlsZSwgdG9rZW5zLCBnZXRMaW5lUHJvcHMsIGdldFRva2VuUHJvcHMgfSkgPT4gKFxyXG4gICAgPHByZSBjbGFzc05hbWU9e2NsYXNzTmFtZX0gc3R5bGU9e3N0eWxlfT5cclxuICAgICAge3Rva2Vucy5tYXAoKGxpbmUsIGkpID0+IChcclxuICAgICAgICA8ZGl2IHsuLi5nZXRMaW5lUHJvcHMoeyBsaW5lLCBrZXk6IGkgfSl9PlxyXG4gICAgICAgICAge2xpbmUubWFwKCh0b2tlbiwga2V5KSA9PiAoXHJcbiAgICAgICAgICAgIDxzcGFuIHsuLi5nZXRUb2tlblByb3BzKHsgdG9rZW4sIGtleSB9KX0gLz5cclxuICAgICAgICAgICkpfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICApKX1cclxuICAgIDwvcHJlPlxyXG4gICl9XHJcbjwvSGlnaGxpZ2h0PixcclxuICBjb2RlOiBwcm9wcyA9PiA8cHJlIHN0eWxlPXt7Y29sb3I6ICd0b21hdG8nfX0gey4uLnByb3BzfSAvPlxyXG59XHJcblxyXG5mdW5jdGlvbiBNeUFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzIH0pIHtcclxuICByZXR1cm4gPExheW91dCBwYWdlVGl0bGU9XCJCbG9nXCIgZGVzY3JpcHRpb249XCJNeSBQZXJzb25hbCBCbG9nXCI+XHJcblxyXG4gICAgPE1EWFByb3ZpZGVyIGNvbXBvbmVudHM9e2NvbXBvbmVudHN9PlxyXG4gICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxyXG4gIDwvTURYUHJvdmlkZXI+XHJcbiAgPC9MYXlvdXQ+XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE15QXBwXHJcbiJdLCJzb3VyY2VSb290IjoiIn0=