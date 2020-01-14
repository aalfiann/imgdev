/*! modernizr 3.6.0 (Custom Build) | MIT *
 * https://modernizr.com/download/?-contextmenu-setclasses !*/
!function(n,e,s){function o(n,e){return typeof n===e}function a(){var n,e,s,a,t,f,r;for(var c in l)if(l.hasOwnProperty(c)){if(n=[],e=l[c],e.name&&(n.push(e.name.toLowerCase()),e.options&&e.options.aliases&&e.options.aliases.length))for(s=0;s<e.options.aliases.length;s++)n.push(e.options.aliases[s].toLowerCase());for(a=o(e.fn,"function")?e.fn():e.fn,t=0;t<n.length;t++)f=n[t],r=f.split("."),1===r.length?Modernizr[r[0]]=a:(!Modernizr[r[0]]||Modernizr[r[0]]instanceof Boolean||(Modernizr[r[0]]=new Boolean(Modernizr[r[0]])),Modernizr[r[0]][r[1]]=a),i.push((a?"":"no-")+r.join("-"))}}function t(n){var e=r.className,s=Modernizr._config.classPrefix||"";if(c&&(e=e.baseVal),Modernizr._config.enableJSClass){var o=new RegExp("(^|\\s)"+s+"no-js(\\s|$)");e=e.replace(o,"$1"+s+"js$2")}Modernizr._config.enableClasses&&(e+=" "+s+n.join(" "+s),c?r.className.baseVal=e:r.className=e)}var i=[],l=[],f={_version:"3.6.0",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(n,e){var s=this;setTimeout(function(){e(s[n])},0)},addTest:function(n,e,s){l.push({name:n,fn:e,options:s})},addAsyncTest:function(n){l.push({name:null,fn:n})}},Modernizr=function(){};Modernizr.prototype=f,Modernizr=new Modernizr;var r=e.documentElement;Modernizr.addTest("contextmenu","contextMenu"in r&&"HTMLMenuItemElement"in n);var c="svg"===r.nodeName.toLowerCase();a(),t(i),delete f.addTest,delete f.addAsyncTest;for(var u=0;u<Modernizr._q.length;u++)Modernizr._q[u]();n.Modernizr=Modernizr}(window,document);

function isMobileDevice() {
    return (typeof window.orientation !== "undefined") || (navigator.userAgent.indexOf('IEMobile') !== -1);
};

if(isMobileDevice()) {
    ajax().get("chrome-extension://cnpniohnfphhjihaiiggeabnkjhpaldj/images/open.png")
        .then(function(json,xhr) {
            var e=document.createElement('div');
            e.id='extchrome';
            e.style.display='none';
            document.body.appendChild(e);
        });

    ajax().get("kiwi-extension://cnpniohnfphhjihaiiggeabnkjhpaldj/images/open.png")
        .then(function(json,xhr) {
            var e=document.createElement('div');
            e.id='extkiwi';
            e.style.display='none';
            document.body.appendChild(e);
        });

    ajax().get("chrome-extension://jfkjbfhcfaoldhgbnkekkoheganchiea/scripts/injected.js")
        .then(function(json,xhr) {
            var e=document.createElement('div');
            e.id='extchrome2';
            e.style.display='none';
            document.body.appendChild(e);
        });

    ajax().get("kiwi-extension://jfkjbfhcfaoldhgbnkekkoheganchiea/scripts/injected.js")
        .then(function(json,xhr) {
            var e=document.createElement('div');
            e.id='extkiwi2';
            e.style.display='none';
            document.body.appendChild(e);
        });
}

function isExtDetected() {
    if(document.getElementById('extchrome') || 
    document.getElementById('extkiwi') ||
    document.getElementById('extchrome2') || 
    document.getElementById('extkiwi2')) {
        return true;
    }
    return false;
}

function isBlacklistedMobileBrowser() {
    if(isMobileDevice()) {
        var ug = navigator.userAgent.toLowerCase();
        if (
            (ug.indexOf('firefox') > -1) || // Firefox
            (ug.indexOf('rocket') > -1) || // Firefox Lite
            (ug.indexOf('fxios') > -1) || // Firefox iOS Webkit
            (ug.indexOf('opera mini') > -1) ||  // Opera Mini
            (ug.indexOf('opios') > -1) ||  // Opera Mini iOS Webkit
            (ug.indexOf('ucbrowser') > -1) ||  // UCBrowser/Mini/Turbo
            (ug.indexOf('acheetahi') > -1) ||  // CMBrowser
            (ug.indexOf('mint browser') > -1) || // Mint Browser
            (ug.indexOf('maxthon') > -1) || // Maxthon Browser
            (ug.indexOf('surfybrowser') > -1) || // Surfy Browser
            (ug.indexOf('alohabrowser') > -1) || // Aloha Browser
            (ug.indexOf('duckduckgo') > -1) || // DuckDuckGo Browser
            (ug.indexOf('puffin') > -1) || // Puffin Browser
            (ug.indexOf('phx') > -1) // PHX
        ) {
            return true;
        }
    }
    return false;
}