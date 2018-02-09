import css from './app/index.scss';
var qrCode = require('./app/qrcode.js');

let htmlWidth = document.documentElement.clientWidth || document.body.clientWidth;
let htmlDom = document.getElementsByTagName('html')[0];
htmlDom.style.fontSize = htmlWidth / 10 + 'px';
//利用插件生成二维码,生成的二维码在canvas中
$('#qrDiv').qrcode({
    width: 120,
    height: 120,
    text: "https://www.baidu.com/"
});


//获取网页中的canvas对象
var mycanvas1 = $('canvas')[0];

//将转换后的img标签插入到html中
var img = qrCode(mycanvas1);
$('#imgDiv').append(img); //imgDiv表示你要插入的容器id