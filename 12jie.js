module.exports = function(str) {
    return java.lang.String(android.util.Base64.decode(java.lang.String(str).getBytes(), 0));
}