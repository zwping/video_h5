// 基础插件 GA + Bootstrap

/////////// GA https://analytics.google.com/analytics/web  ///////////
// http://mta.qq.com
document.write("<script async src='//pingjs.qq.com/h5/stats.js?v2.0.4' name='MTAH5' sid='500732112' cid='500732113'></script>")

/////////// Bootstrap /////////// 
// 核心 CSS 文件
document.write("<link rel='stylesheet' href='https://cdn.jsdelivr.net/npm/bootstrap@3.3.7/dist/css/bootstrap.min.css' integrity='sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u' crossorigin='anonymous'>")
// 主题文件（一般不用引入）
document.write("<link rel='stylesheet' href='https://cdn.jsdelivr.net/npm/bootstrap@3.3.7/dist/css/bootstrap-theme.min.css' integrity='sha384-rHyoN1iRsVXV4nD0JutlnGaslCJuC7uwjduW9SVrLvRYooPp2bWYgmgJQIXwl/Sp' crossorigin='anonymous'>")
// 核心 JavaScript 文件
document.write("<script src='http://libs.baidu.com/jquery/2.0.0/jquery.min.js'></script>")
document.write("<script src='https://cdn.jsdelivr.net/npm/bootstrap@3.3.7/dist/js/bootstrap.min.js' integrity='sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa' crossorigin='anonymous'></script>")


function videojsPlugin() {
    /////////// videojs ///////////
    document.write("<link href='https://vjs.zencdn.net/7.8.4/video-js.css' rel='stylesheet' />")
    document.write("<script src='https://vjs.zencdn.net/7.8.4/video.js'></script>")
}

function cookiePlugin() {
    /////////// js-cookie ///////////
    document.write("<script src='https://cdn.jsdelivr.net/npm/js-cookie@2/src/js.cookie.min.js'></script>")
}