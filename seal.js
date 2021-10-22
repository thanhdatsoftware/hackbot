/*OneSign SSL show Site Seal, show language - vi*/
"use strict";var getOneSignRoot = document.getElementById("OneSignRoot");
var seal = '<div id="OneSignSeal"><?xml version="1.0" encoding="UTF-8" standalone="no"?><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 60 14.5" height="40" width="160"><g id="OneSignSealLogo"><path d="M388.124 197.633h125v156.25h-125z" transform="matrix(-.3521 0 0 .093201 192.31453 -18.43028)" fill="#5aa02c"/><path d="M-.007-.01h11.65v14.563H-.007z" fill="#52b60b" class="color-change-4x"/><path d="M8.11 12.197H3.812l.684-4.426c-1.03-.458-1.75-1.45-1.75-2.577 0-1.565 1.375-2.85 3.07-2.85s3.07 1.26 3.07 2.825c0 1.05-.627 2.016-1.548 2.504z" fill="#fff"/><image href="https://seal.onesign.global/seal.js?type=seal&lang=vi" height="14.552"  width="55.562"/></defs></g></svg></div><style>#OneSignRoot{width:160px!important;height:40px!important;}.color-change-4x{-webkit-animation:color-change-4x 10s linear infinite alternate both;animation:color-change-4x 10s linear infinite alternate both}@-webkit-keyframes color-change-4x{0%{fill:#468c5c}33.3333%{fill:#52b60b}66.666%{fill:#026909}100%{fill:#1e6323}}@keyframes color-change-4x{0%{fill:#468c5c}33.3333%{fill:#52b60b}66.666%{fill:#026909}100%{fill:#1e6323}}#OneSignShow{width:280px!important;height:430px!important;bottom:40px!important;right:20px!important;padding:20px!important;font-family:Arial,sans-serif;font-size:10pt!important;background-color:white;border-radius:4px;position:fixed;z-index:99999999999999;display:none;text-align:justify;overflow:hidden;-webkit-animation-fill-mode:both;animation-fill-mode:both;color:#000000!important;font-size:12px!important;-webkit-box-shadow: 1px 1px 5px 0px rgba(79,79,79,1);-moz-box-shadow: 1px 1px 5px 0px rgba(79,79,79,1);box-shadow: 1px 1px 5px 0px rgba(79,79,79,1);cursor: pointer;}#OneSignShow h3{font-size:15px!important;font-weight:bold;color:#000000!important;padding:0!important;margin:6px auto!important}#OneSignShow img{width:auto!important;max-width:none!important}#OneSignShow p{margin:4px auto!important;display:inline-block!important;color:#000000!important;font-size:12px!important}#OneSignShow p:last-child{margin-bottom:1px!important;}#OneSignShow.Oneshow{display:block;-webkit-animation-duration:0.8s;animation-duration:0.8s;-webkit-animation-name:OneSignbounceIn;animation-name:OneSignbounceIn}#OneSignShow.Onehide{display:block;-webkit-animation-duration:0.5s;animation-duration:0.5s;-webkit-animation-name:OneSignbounceOut;animation-name:OneSignbounceOut}#OneSignShow div{height:160px;display:relative;overflow:hidden}@keyframes OneSignbounceIn{0%{transform:scale(0.6);opacity:0.5}80%{transform:scale(1.1)}100%{transform:scale(1);opacity:1;z-index:999999}}@keyframes OneSignbounceOut{0%{opacity:1;transform:scale(.9)}50%{opacity:0.5;transform:scale(1)}100%{opacity:0;transform:scale(.5);z-index:-1}}</style>';
seal += '<div id="OneSignShow"> <img src="seal/onesign-logo-min.svg" alt="OneSign" height="50px"/><h3>Được đảm bảo bởi OneSignSSL</h3><img src="https://seal.onesign.global/seal.js?type=warranty&lang=vi" alt="OneSign"/><div><p>Website này sử dụng Chứng chỉ bảo mật SSL/HTTPS được cung cấp bởi OneSign Ltd, Singapore.</p><p>Tất cả dữ liệu (ví dụ như tên truy cập và mật khẩu) đều được mã hóa giữa trình duyệt và máy chủ giúp đảm bảo an toàn.</p><p>Nhấp vào để xem các thông tin xác nhận.</p></div><p style="border-top:1px solid #ccc;padding-top:10px;margin-top:20px;text-align:center;width:100%;font-style:italic">Nền tảng được cung cấp bởi Sectigo</p></div>';


if(getOneSignRoot!=null){
	var OneSignOverTime = 0;
	var OneSignisShow = 0;
	getOneSignRoot.innerHTML = seal;
	var sealIcon = document.getElementById("OneSignSealLogo");
	var OneSignShow = document.getElementById("OneSignShow");
	var getOneSignSeal = document.getElementById("OneSignSeal");
	getOneSignSeal.addEventListener('mouseover', OneSignSealshow);
	getOneSignSeal.addEventListener('click', OneSignshowSeal);
	getOneSignSeal.addEventListener('mouseleave', OneSignSealUnHover);
	OneSignShow.addEventListener('mouseleave', OneSignSealhide);
	OneSignShow.addEventListener('click', OneSignshowSeal);
}
function OneSignSealUnHover(){
	OneSignOverTime = 0;
}
function OneSignshowSeal(){
	OneSignisShow=1;
    OneSignSealhide();
	var domain = window.location.host;
	let params = `scrollbars=yes,resizable=no,status=no,location=no,toolbar=no,menubar=no,width=600,height=650,left=100,top=50`;
	open('//seal.onesign.global/verify/'+domain+'&lang=vi', 'OneSign Site Seal', params);
}
function OneSignSealshow(){
	if(OneSignShow.classList.contains("show")==false&&OneSignisShow==0){
		if(OneSignOverTime>=10){
			OneSignShow.className='Oneshow';
			OneSignOverTime=0;
			OneSignisShow=1;
			document.addEventListener('click', function(event){
				var isClickInside = OneSignShow.contains(event.target);
				if(!isClickInside){
					OneSignSealhide();
				}
			});
		} else {
			setTimeout(function(){ OneSignOverTime++;OneSignSealshow(); },100);
		}
	}
}
function OneSignSealhide(){
	OneSignOverTime=0;
	OneSignisShow=0;
	OneSignShow.className='Onehide';
}