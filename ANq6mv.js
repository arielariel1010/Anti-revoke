var PROXY_DIRECT = "DIRECT";
var DIRECT = "DIRECT";
var BLACK = "PROXY 127.0.0.1:8021";
var WHITE = PROXY_DIRECT;

function s(u, r) {
    return shExpMatch(u, r);
}

function d(h, r) {
    return dnsDomainIs(h, r);
}

function n(h, r, m) {
    return isInNet(h, r, m);
}

function e(u) {
    var h;
    if (u.indexOf("://") > -1) {
        h = u.split('/')[2];
    } else {
        h = u.split('/')[0];
    }
    h = h.split(':')[0];
    var s = h.split('.').reverse();
    return s;
}

function FindProxyForURL(url, host) {
    var u = url.toLowerCase();
    var h = host.toLowerCase();
    var a = e(u);
    var b = a[0];
    var c = a[1];
    var f = c.length;
    var t = c[f - 1];
    var z = c[f - 2];
    if (d(h, "ANq6mv.configtest.wl.is")) {
        return "PROXY 5.9.40.99:80";
    }
    if (d(h, "wl.is") || d(h, "weblockapp.com") || n(h, "17.0.0.0", "255.0.0.0")) {
        return PROXY_DIRECT;
    }
    if ((s(u, "*.ocsp.int\u002dx3.letsencrypt.org") || s(u, "*ocsp.apple.com") || s(u, "*.world\u002dgen.g.aaplimg.com") || s(u, "*.mesu.apple.com") || s(u, "*.gdmf.apple.com") || s(u, "*.ppq.apple.com") || s(u, "*.iadssdk.apple.com"))) {
        return BLACK;
    }
    if (d(h, "adtechus.com")) return "PROXY 216.58.209.78:80";
    if (d(h, "fwmrm.net")) return "PROXY 216.58.209.78:80";
    return PROXY_DIRECT;
}
