"use strict";
const pptxgen=require("pptxgenjs");
const {autoFontSize,imageSizingCrop,warnIfSlideHasOverlaps,warnIfSlideElementsOutOfBounds}=require("./pptxgenjs_helpers");
const path=require("path");
const pptx=new pptxgen();
pptx.layout="LAYOUT_WIDE";
pptx.author="OpenAI Codex";
pptx.company="Bảo Việt Nhân Thọ";
pptx.lang="vi-VN";
pptx.theme={headFontFace:"Barlow",bodyFontFace:"Barlow",lang:"vi-VN"};
const W=13.333,H=7.5;
const C={blue:"113E68",blue2:"0B6CB8",gold:"D8A12A",gold2:"E8C15D",white:"FFFFFF",text:"EAF1F8",muted:"C9D5E3",line:"7AA8D1"};
const imgDir="D:/BRAVO/baoviet-pitch-deck/public/Images";
const I={cover:path.join(imgDir,"ảnh bìa.jpg"),race1:path.join(imgDir,"5-dua-ghe-song-huong.jpg"),race2:path.join(imgDir,"dua_22-1693633071517.jpg"),race3:path.join(imgDir,"wm_8775_h11.jpg"),river:path.join(imgDir,"song-huong-scaled.jpg"),river2:path.join(imgDir,"song_huong_nui_ngu_4597a461db.jpg"),hue:path.join(imgDir,"Phu_Văn_lâu.jpg"),logo:path.join(imgDir,"logo-bao-viet-inkythuatso-01.png")};
function bg(sl,img,ov=30){sl.addImage({path:img,...imageSizingCrop(img,0,0,W,H)});sl.addShape(pptx.ShapeType.rect,{x:0,y:0,w:W,h:H,fill:{color:C.blue,transparency:ov},line:{color:C.blue,pt:0}});}
function topBand(sl,title,sub){sl.addShape(pptx.ShapeType.rect,{x:0,y:0,w:W,h:0.82,fill:{color:C.blue,transparency:8},line:{color:C.blue,pt:0}});sl.addShape(pptx.ShapeType.rect,{x:0,y:6.92,w:W,h:0.58,fill:{color:C.blue,transparency:14},line:{color:C.blue,pt:0}});sl.addText(title,{x:0.62,y:0.2,w:8.5,h:0.26,fontFace:"Barlow",fontSize:22,bold:true,color:C.gold,margin:0});if(sub)sl.addText(sub,{x:0.62,y:0.48,w:8.8,h:0.16,fontFace:"Barlow",fontSize:9.5,color:C.white,margin:0});sl.addImage({path:I.logo,x:10.46,y:0.08,w:2.25,h:0.52});}
function finalize(sl,n){sl.addText(String(n).padStart(2,"0"),{x:12.48,y:7.07,w:0.3,h:0.12,fontFace:"Barlow",fontSize:9,bold:true,color:C.gold,align:"right",margin:0});warnIfSlideHasOverlaps(sl,pptx);warnIfSlideElementsOutOfBounds(sl,pptx);} 
function bulletBlock(sl,items,x,y,w,fs=14,color=C.white,step=0.42){if(typeof color==="number"){step=color;color=C.white;}items.forEach((it,i)=>sl.addText([{text:it,options:{bullet:{indent:12}}}],{x,y:y+i*step,w,h:0.24,fontFace:"Barlow",fontSize:fs,color,margin:0}));}
function statCard(sl,x,y,w,h,k,v,sub){sl.addShape(pptx.ShapeType.roundRect,{x,y,w,h,rectRadius:0.04,fill:{color:"0D2D49",transparency:12},line:{color:C.line,pt:1}});sl.addText(k,{x:x+0.2,y:y+0.16,w:w-0.4,h:0.14,fontFace:"Barlow",fontSize:9.5,bold:true,color:C.gold,margin:0});sl.addText(v,{x:x+0.2,y:y+0.38,w:w-0.4,h:0.3,fontFace:"Barlow",fontSize:18,bold:true,color:C.white,margin:0});if(sub)sl.addText(sub,{x:x+0.2,y:y+0.78,w:w-0.4,h:h-0.9,fontFace:"Barlow",fontSize:10.5,color:C.muted,margin:0});}
function quoteBlock(sl,tx,x,y,w,h){sl.addShape(pptx.ShapeType.roundRect,{x,y,w,h,rectRadius:0.04,fill:{color:"0D2D49",transparency:12},line:{color:C.line,pt:1}});sl.addText(tx,{x:x+0.18,y:y+0.18,w:w-0.36,h:h-0.26,fontFace:"Barlow",fontSize:14,bold:true,color:C.gold2,margin:0,align:"center",valign:"mid"});}
function makeSlide(img,title,sub,body,n){const sl=pptx.addSlide();bg(sl,img,34);topBand(sl,title,sub);body(sl);finalize(sl,n);} 
let n=1;
{
 const sl=pptx.addSlide();
 bg(sl,I.cover,22);
 sl.addShape(pptx.ShapeType.rect,{x:0,y:0,w:W,h:1.02,fill:{color:C.blue,transparency:6},line:{color:C.blue,pt:0}});
 sl.addImage({path:I.logo,x:0.72,y:0.18,w:2.65,h:0.62});
 sl.addText("GIẢI VÔ ĐỊCH ĐUA GHE TRUYỀN THỐNG CỐ ĐÔ HUẾ 2026",{x:0.72,y:1.36,w:9.5,h:0.62,fontFace:"Barlow",fontSize:26,bold:true,color:C.white,margin:0});
 sl.addText("TRANH CÚP BẢO VIỆT NHÂN THỌ",{x:0.72,y:2.0,w:6.8,h:0.3,fontFace:"Barlow",fontSize:18,bold:true,color:C.gold2,margin:0});
 sl.addShape(pptx.ShapeType.roundRect,{x:0.72,y:5.72,w:3.1,h:0.42,rectRadius:0.06,fill:{color:C.gold,transparency:8},line:{color:C.gold,pt:0}});
 sl.addText("KẾ HOẠCH TỔ CHỨC SỰ KIỆN",{x:0.86,y:5.84,w:2.82,h:0.14,fontFace:"Barlow",fontSize:10.5,bold:true,color:C.blue,align:"center",margin:0});
 finalize(sl,n++);
}
makeSlide(I.race1,"I. MỤC TIÊU & Ý NGHĨA","Bám sát nội dung Word",sl=>{
 bulletBlock(sl,["Chào mừng Quốc khánh 2/9.","Nâng tầm lễ hội đua ghe Huế thành sự kiện cấp thành phố có tài trợ lớn.","Gìn giữ văn hóa truyền thống.","Tạo nền tảng truyền thông mạnh cho Bảo Việt Nhân Thọ."],0.92,1.7,6.7,13.8,0.5);
 statCard(sl,8.3,1.74,4.0,1.36,"TRỌNG TÂM","Thể thao - văn hóa - tài trợ","Tổ chức gọn, đẹp, đúng tinh thần sự kiện trên sông Hương.");
},n++);
makeSlide(I.race2,"II. QUY MÔ TỔ CHỨC","Các thông số chính của sự kiện",sl=>{
 statCard(sl,0.88,1.52,2.8,1.42,"SỐ GHE","20 ghe","20 đơn vị tham gia thi đấu.");
 statCard(sl,3.88,1.52,2.8,1.42,"VẬN ĐỘNG VIÊN","~400 - 480","Nam và nữ thi đấu theo nội dung riêng.");
 statCard(sl,6.88,1.52,2.8,1.42,"KHÁN GIẢ","5.000 - 10.000","Khán giả trực tiếp dọc hai bờ sông.");
 statCard(sl,9.88,1.52,2.55,1.42,"ONLINE","Livestream","Tăng độ phủ sự kiện.");
 bulletBlock(sl,["Mỗi ghe có đội nam và đội nữ.","Thi đấu theo từng nội dung riêng.","Tổng thể quy mô phù hợp để tạo hình ảnh đẹp và dễ điều phối."],0.94,3.48,6.8,13.2,0.48);
},n++);
makeSlide(I.river,"III. ĐỊA ĐIỂM & THỜI GIAN","Thông tin tổ chức chính",sl=>{
 statCard(sl,0.92,1.68,5.45,1.42,"ĐỊA ĐIỂM","Sông Hương (Phú Xuân - Phu Văn Lâu)","Trục cảnh quan đẹp, phù hợp tổ chức và ghi hình.");
 bulletBlock(sl,["Xuất phát: Bờ sông phía bắc trước mặt Phu Văn Lâu.","Đích: Công viên Phú Xuân.","Thời gian: 06:30 - 12:00.","Ngày tổ chức: 02/09/2026."],0.96,3.0,5.9,13.4,0.5);
 statCard(sl,7.18,1.92,4.1,1.34,"KHUNG TRIỂN KHAI","Buổi sáng ngày 2/9","Thuận lợi cho khán giả, BTC và truyền thông.");
},n++);
makeSlide(I.race3,"IV. CÁC NỘI DUNG THI ĐẤU","Giữ đúng nội dung thi đấu trong kế hoạch",sl=>{
 bulletBlock(sl,["Độ tiền nam.","Độ tiền nữ.","Độ tiền 1-4 theo điều lệ.","Độ phối hợp nam nữ.","Độ phá.","Giải toàn đoàn."],0.96,1.8,5.2,14,0.5);
 statCard(sl,7.22,2.1,4.0,1.42,"QUY MÔ NỘI DUNG","8 - 10 nội dung","Tổ chức vừa đủ để giữ nhịp chương trình.");
 statCard(sl,7.22,3.82,4.0,1.42,"NGUYÊN TẮC","Thi đấu rõ từng hạng mục","Thuận tiện điều hành và chấm giải.");
},n++);
makeSlide(I.race1,"V. TRANG PHỤC THI ĐẤU","Đồng bộ nhận diện nhưng vẫn đảm bảo thi đấu",sl=>{
 bulletBlock(sl,["Nguyên tắc: đồng bộ, gọn nhẹ, không ảnh hưởng thi đấu.","Áo màu xanh BV, kiểu 1 màu viền vàng.","Logo đặt ở ngực và lưng áo.","Băng đầu in BAOVIET, màu xanh/trắng.","Mái chèo sơn xanh, gắn logo nhỏ."],0.94,1.72,6.7,13.4,0.48);
 statCard(sl,8.28,1.78,4.0,1.28,"MÀU SẮC","Xanh BV + vàng","Đồng bộ nhận diện trên mặt nước.");
 statCard(sl,8.28,3.3,4.0,1.28,"ỨNG DỤNG","Áo - băng đầu - mái chèo","Nhận diện rõ nhưng không phô trương.");
},n++);
makeSlide(I.race2,"VI. TRANG TRÍ & NHẬN DIỆN","Tập trung vào những hạng mục nhìn thấy rõ",sl=>{
 bulletBlock(sl,["Giữ nguyên ghe truyền thống, dán decal logo BVNT và họa tiết sóng nước nhẹ.","Cờ vẫy BVNT dọc bờ sông.","Cờ đầu ghe.","Backdrop check-in.","Sân khấu trung tâm và bục trao giải."],0.94,1.72,6.9,13.2,0.48);
 statCard(sl,8.3,1.9,4.0,1.38,"NHẬN DIỆN CHÍNH","Ghe - sân khấu - check-in","Tạo hình ảnh sự kiện nhất quán.");
 statCard(sl,8.3,3.58,4.0,1.38,"MỤC TIÊU","Đẹp - rõ - dễ nhận biết","Ưu tiên hiệu quả tổng thể toàn event.");
},n++);
makeSlide(I.hue,"VII. HOẠT ĐỘNG ĐỀ XUẤT BÊN NGOÀI GIẢI ĐUA","Chỉ giữ các hoạt động hỗ trợ đúng kế hoạch",sl=>{
 bulletBlock(sl,["Giải phụ 'Ghe ấn tượng nhất'.","Photo check-in bên sông Hương.","MC bình luận live 'Tranh cúp Bảo Việt'.","Chụp ảnh drone: 20 ghe xếp thành logo BVNT và chữ HUE."],0.96,1.84,6.8,13.8,0.54);
 statCard(sl,8.38,1.9,3.88,1.38,"MỤC TIÊU","Tăng điểm nhấn hình ảnh","Biến sự kiện thành một lễ hội trên sông.");
 statCard(sl,8.38,3.58,3.88,1.38,"GIÁ TRỊ","Tạo thêm chất liệu truyền thông","Ảnh đẹp, clip đẹp, khoảnh khắc dễ lan tỏa.");
},n++);
makeSlide(I.race3,"VIII. GIẢI THƯỞNG","Cấu trúc giải thưởng theo kế hoạch",sl=>{
 statCard(sl,1.0,2.06,4.5,1.76,"TIỀN MẶT","~50.000.000 VND","Dành cho các nội dung thi đấu và giải toàn đoàn.");
 statCard(sl,5.8,2.06,4.5,1.76,"HIỆN VẬT","~25.000.000 - 35.000.000 VND","Kết hợp quà tặng và hiện vật tài trợ.");
 quoteBlock(sl,"Giải thưởng cần đủ gọn để kiểm soát chi phí, nhưng đủ rõ để tạo động lực thi đấu.",1.0,4.34,9.3,0.9);
},n++);
makeSlide(I.river2,"IX. CÔNG TÁC TỔ CHỨC","Phân vai rõ để sự kiện vận hành an toàn",sl=>{
 sl.addShape(pptx.ShapeType.roundRect,{x:0.92,y:1.56,w:5.45,h:4.44,rectRadius:0.05,fill:{color:"0D2D49",transparency:14},line:{color:C.line,pt:1}});
 sl.addText("ĐƠN VỊ THAM GIA",{x:1.18,y:1.86,w:2.8,h:0.2,fontFace:"Barlow",fontSize:18,bold:true,color:C.gold,margin:0});
 bulletBlock(sl,["Sở Văn hóa & Thể thao Huế.","BTC Đại hội TDTT.","Nhà tài trợ: Bảo Việt Nhân Thọ.","Đơn vị phối hợp thực hiện: Bravo Group."],1.18,2.38,4.55,13.2,0.46);
 sl.addShape(pptx.ShapeType.roundRect,{x:6.82,y:1.56,w:5.48,h:4.44,rectRadius:0.05,fill:{color:"0D2D49",transparency:14},line:{color:C.line,pt:1}});
 sl.addText("CHUYÊN MÔN & AN TOÀN",{x:7.08,y:1.86,w:4.0,h:0.2,fontFace:"Barlow",fontSize:18,bold:true,color:C.gold,margin:0});
 bulletBlock(sl,["Trọng tài TDTT.","Ban điều hành đường đua.","Ban kỹ thuật ghe.","Công an TP, bảo vệ, y tế - cứu hộ.","Cano hỗ trợ trên sông."],7.08,2.38,4.56,13.2,0.44);
},n++);
makeSlide(I.race1,"X. QUY ĐỊNH ĐỘI THI","Quy định ngắn gọn, rõ ràng",sl=>{
 statCard(sl,0.94,1.8,2.95,1.3,"ĐƠN VỊ","1 đơn vị = 1 ghe","Rõ trách nhiệm tham gia.");
 statCard(sl,4.16,1.8,2.95,1.3,"SỐ VĐV","Tối đa 12 VĐV / lượt","Theo kế hoạch và điều lệ.");
 statCard(sl,7.38,1.8,4.0,1.3,"YÊU CẦU","Đồng phục - sức khỏe - điều lệ","Đảm bảo an toàn và đồng bộ.");
 bulletBlock(sl,["Mỗi ghe phải đảm bảo đủ điều kiện sức khỏe.","Thi đấu đúng đồng phục quy định.","Tuân thủ điều lệ và hướng dẫn của BTC."],0.98,3.7,6.6,13.4,0.52);
},n++);
makeSlide(I.race2,"XI. DỰ TOÁN CHI PHÍ","Bám theo cấu phần trong file Word",sl=>{
 bulletBlock(sl,["Trang phục: khoảng 60.000.000đ.","Hạ nề & di chuyển ghe: khoảng 260.000.000đ.","Hồ sơ - thủ tục: khoảng 10.000.000đ.","Quản lý - an ninh - y tế: khoảng 30.000.000đ.","Giải thưởng: khoảng 80.000.000đ."],0.96,1.84,6.8,13.6,0.52);
 statCard(sl,8.36,2.02,3.92,1.64,"TỔNG NGÂN SÁCH CHUYÊN MÔN","~440.000.000đ","Dự kiến ±10% theo phương án triển khai.");
 statCard(sl,8.36,3.96,3.92,1.26,"LƯU Ý","Tập trung chi phí sự kiện","Chưa đi sâu media buy hay mở rộng ngoài scope Word.");
},n++);
makeSlide(I.race3,"XII. TRUYỀN THÔNG & GIÁ TRỊ CHO NHÀ TÀI TRỢ","Chỉ giữ đúng phạm vi truyền thông sự kiện",sl=>{
 bulletBlock(sl,["Livestream.","TikTok / Reels.","Drone quay toàn cảnh.","PR báo chí.","Logo phủ trên ghe, trang phục, sân khấu và điểm check-in."],0.96,1.82,6.8,13.8,0.52);
 statCard(sl,8.36,1.92,3.92,1.42,"ĐỘ PHỦ TRỰC TIẾP","5.000 - 10.000 người","Khán giả tại chỗ trong ngày diễn ra sự kiện.");
 statCard(sl,8.36,3.64,3.92,1.42,"ĐỘ PHỦ ONLINE","Hàng trăm nghìn view","Từ livestream, clip ngắn và PR sau sự kiện.");
},n++);
makeSlide(I.hue,"XIII. KẾT LUẬN","Chốt lại tinh thần của kế hoạch sự kiện",sl=>{
 sl.addShape(pptx.ShapeType.roundRect,{x:0.92,y:1.74,w:11.35,h:3.82,rectRadius:0.05,fill:{color:"0D2D49",transparency:10},line:{color:C.line,pt:1}});
 sl.addText("Giải đua ghe 2026 không chỉ là một sự kiện thể thao truyền thống, mà còn hướng tới một lễ hội trên sông, nơi mỗi đội đua là một câu chuyện, mỗi chiếc ghe là một điểm nhấn sáng tạo và toàn bộ sự kiện trở thành không gian nhận diện rõ ràng cho Bảo Việt Nhân Thọ.",{x:1.24,y:2.2,w:10.2,h:1.78,fontFace:"Barlow",fontSize:20,bold:true,color:C.white,margin:0,align:"center",valign:"mid"});
 sl.addText("Trọng tâm vẫn là tổ chức tốt, hình ảnh đẹp, vận hành an toàn và bám sát kế hoạch sự kiện.",{x:2.02,y:4.46,w:8.7,h:0.36,fontFace:"Barlow",fontSize:14,bold:true,color:C.gold2,margin:0,align:"center"});
},n++);
(async()=>{const out=path.join(__dirname,"output","BVNT_Hue_EventPlan_WordBased.pptx");await pptx.writeFile({fileName:out});console.log(`Wrote ${out}`);})();

