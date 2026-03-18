"use strict";
const pptxgen=require("pptxgenjs");
const {autoFontSize,imageSizingContain,warnIfSlideHasOverlaps,warnIfSlideElementsOutOfBounds}=require("./pptxgenjs_helpers");
const path=require("path");
const pptx=new pptxgen();
pptx.layout="LAYOUT_WIDE";
pptx.author="OpenAI Codex";
pptx.company="Bảo Việt Nhân Thọ";
pptx.lang="vi-VN";
pptx.subject="BVNT Hue Boat Race Proposal v4";
pptx.title="BVNT Hue Boat Race Proposal 2026 v4";
pptx.theme={headFontFace:"Barlow",bodyFontFace:"Barlow",lang:"vi-VN"};
const W=13.333,H=7.5;
const C={b:"0B6CB8",bd:"114A7A",g:"C99211",gd:"9F720C",t:"203040",s:"5C6C7B",l:"F6F8FB",ln:"D8E0E8",w:"FFFFFF",ltb:"EEF5FB",ltg:"F8F3E8",dk:"0E2438"};
const hero=path.join(__dirname,"master_unzip","ppt","media","image2.jpg");
const base=path.join(__dirname,"master_unzip","ppt","media","image3.png");
const bg=(sl,k="base")=>sl.addImage({path:k==="hero"?hero:base,...imageSizingContain(k==="hero"?hero:base,0,0,W,H)});
const txt=(sl,tx,x,y,w,h,o={})=>sl.addText(tx,{x,y,w,h,fontFace:o.ff||"Barlow",fontSize:o.fs||12,color:o.c||C.t,bold:!!o.b,italic:!!o.i,margin:o.m??0,align:o.a||"left",valign:o.v||"top",breakLine:o.br??true});
const kicker=(sl,tx)=>txt(sl,tx.toUpperCase(),0.9,0.72,4.3,0.2,{fs:10,c:C.gd,b:true});
function title(sl,ttl,sub,w=8.9){sl.addText(ttl,{x:0.9,y:0.98,w,h:0.74,fontFace:"Barlow",bold:true,color:C.bd,margin:0,...autoFontSize(ttl,"Barlow",{x:0.9,y:0.98,w,h:0.74,fontSize:24,minFontSize:20,maxFontSize:30,bold:true,margin:0,mode:"auto"})});if(sub)txt(sl,sub,0.9,1.72,w,0.34,{fs:11,c:C.s});}
const num=(sl,n)=>txt(sl,String(n).padStart(2,"0"),12.45,7.03,0.4,0.18,{fs:9,c:C.gd,b:true,a:"right"});
const pill=(sl,tx,x,y,w,c=C.g,fs=9.2)=>{sl.addShape(pptx.ShapeType.roundRect,{x,y,w,h:0.34,rectRadius:0.08,fill:{color:c,transparency:8},line:{color:c,pt:0}});txt(sl,tx,x+0.06,y+0.08,w-0.12,0.14,{fs,c:C.w,b:true,a:"center"});};
const softCard=(sl,x,y,w,h,fill=C.w)=>sl.addShape(pptx.ShapeType.roundRect,{x,y,w,h,rectRadius:0.05,fill:{color:fill},line:{color:C.ln,pt:1}});
function card(sl,x,y,w,h,label,head,body,accent=C.b,fill=C.w){const compact=h<1.4;softCard(sl,x,y,w,h,fill);sl.addShape(pptx.ShapeType.rect,{x:x+0.16,y:y+0.16,w:w-0.32,h:0.05,fill:{color:accent},line:{color:accent,pt:0}});if(label)txt(sl,label,x+0.22,y+0.3,w-0.44,0.15,{fs:9.2,c:accent,b:true});txt(sl,head,x+0.22,y+0.58,w-0.44,compact?0.26:0.42,{fs:compact?15.5:17,b:true,c:C.bd});if(body)txt(sl,body,x+0.22,compact?y+0.86:y+1.02,w-0.44,compact?0.2:Math.max(0.24,h-1.12),{fs:compact?9.8:10.8,c:C.t});}
function bulletList(sl,items,x,y,w,fs=11.1,color=C.t,step=0.28){items.forEach((it,i)=>sl.addText([{text:it,options:{bullet:{indent:12}}}],{x,y:y+i*step,w,h:0.22,fontFace:"Barlow",fontSize:fs,color,margin:0}));}
function quoteBand(sl,tx,x,y,w,h,fill=C.bd,color=C.w,fs=20){sl.addShape(pptx.ShapeType.roundRect,{x,y,w,h,rectRadius:0.05,fill:{color:fill},line:{color:fill,pt:0}});txt(sl,tx,x+0.26,y+0.22,w-0.52,h-0.3,{fs,b:true,c:color});}
function finalize(sl,n){num(sl,n);warnIfSlideHasOverlaps(sl,pptx);warnIfSlideElementsOutOfBounds(sl,pptx);} 
function content(n,k,ttl,sub,fn){const sl=pptx.addSlide();bg(sl);kicker(sl,k);title(sl,ttl,sub);fn(sl);finalize(sl,n);} 
function heroOverlay(sl,opacity=46){bg(sl,"hero");sl.addShape(pptx.ShapeType.rect,{x:0,y:0,w:W,h:H,fill:{color:C.dk,transparency:opacity},line:{color:C.dk,pt:0}});} 
function statementSlide(n,label,ttl,sub,badges=[]){const sl=pptx.addSlide();heroOverlay(sl,48);sl.addShape(pptx.ShapeType.rect,{x:0.92,y:1.92,w:0.1,h:2.15,fill:{color:C.g},line:{color:C.g,pt:0}});txt(sl,label.toUpperCase(),1.18,1.98,2.6,0.16,{fs:10,c:C.w,b:true});sl.addText(ttl,{x:1.18,y:2.28,w:8.2,h:1.2,fontFace:"Barlow",bold:true,color:C.w,margin:0,...autoFontSize(ttl,"Barlow",{x:1.18,y:2.28,w:8.2,h:1.2,fontSize:30,minFontSize:24,maxFontSize:36,bold:true,margin:0,mode:"auto"})});if(sub)txt(sl,sub,1.18,3.7,6.7,0.52,{fs:14,c:C.w});badges.forEach((b,i)=>pill(sl,b,1.18+i*1.75,4.84,1.55,i%2?C.b:C.g));finalize(sl,n);} 
function silentSlide(n,label,line,small){const sl=pptx.addSlide();heroOverlay(sl,54);txt(sl,label.toUpperCase(),1.18,2.04,2.4,0.16,{fs:10,c:C.w,b:true});sl.addText(line,{x:1.18,y:2.64,w:8.4,h:1.18,fontFace:"Barlow",bold:true,color:C.w,margin:0,...autoFontSize(line,"Barlow",{x:1.18,y:2.64,w:8.4,h:1.18,fontSize:28,minFontSize:24,maxFontSize:38,bold:true,margin:0,mode:"auto"})});if(small)txt(sl,small,1.18,4.24,4.8,0.3,{fs:12.5,c:C.w});finalize(sl,n);} 
const slides=[
"hero","silent_open","why_now","silent_tension","culture","insight_quote","insight_map","opportunity","role","platform","silent_bridge","idea_reveal","idea_meaning","message","win","section_event","vision","wow1","wow1_reason","wow2","wow3","silent_shift","journey","section_imc","imc","phase1","phase2","phase3","activation","social","film","ecosystem","branding","lead","impact","kpi","annual","silent_close","finale"
];

slides.forEach((type,idx)=>{
const n=idx+1;
if(type==="hero"){
  const sl=pptx.addSlide();
  bg(sl,"hero");
  txt(sl,"ĐỀ XUẤT NỀN TẢNG TÀI TRỢ VĂN HÓA - THƯƠNG HIỆU",0.9,2.0,4.9,0.2,{fs:10,c:C.bd,b:true});
  sl.addText("GIẢI VÔ ĐỊCH ĐUA GHE TRUYỀN THỐNG CỐ ĐÔ HUẾ 2026\nTRANH CÚP BẢO VIỆT NHÂN THỌ",{x:0.9,y:2.56,w:8.7,h:1.2,fontFace:"Barlow",bold:true,color:C.bd,margin:0,...autoFontSize("GIẢI VÔ ĐỊCH ĐUA GHE TRUYỀN THỐNG CỐ ĐÔ HUẾ 2026\nTRANH CÚP BẢO VIỆT NHÂN THỌ","Barlow",{x:0.9,y:2.56,w:8.7,h:1.2,fontSize:23,minFontSize:20,maxFontSize:26,bold:true,margin:0,mode:"auto"})});
  txt(sl,"Big Idea",0.9,4.02,1.1,0.16,{fs:10,c:C.w,b:true});
  txt(sl,"GIỮ MÁI CHÈO DI SẢN",0.9,4.28,4.8,0.36,{fs:23,c:C.w,b:true});
  txt(sl,"Bảo Việt Nhân Thọ - Giữ mái chèo hôm nay, chở che muôn thế hệ mai sau.",0.9,4.74,6.0,0.28,{fs:12.8,c:C.w});
  pill(sl,"02.09.2026 | SÔNG HƯƠNG - HUẾ",0.9,5.18,2.95,C.b);
  pill(sl,"TITLE SPONSOR / NAMING RIGHTS",3.98,5.18,3.18,C.g);
  finalize(sl,n);return;
}
if(type==="silent_open"){silentSlide(n,"Mở đầu","Không tài trợ một giải đua.\nKhởi sinh một tài sản văn hóa thương hiệu.","Một dự án đủ lớn để tích lũy qua nhiều năm.");return;}
if(type==="why_now"){
  content(n,"Why Now","Bốn lực đẩy đang hội tụ cùng lúc.","Đây là thời điểm hiếm khi event, văn hóa và thương hiệu cùng đứng về một phía.",sl=>{
    card(sl,0.9,2.24,2.68,1.42,"01","Quốc khánh 02/09","Tinh thần cộng đồng.",C.g,C.ltg);
    card(sl,3.82,2.24,2.68,1.42,"02","Huế","Chiều sâu di sản.",C.b,C.ltb);
    card(sl,6.74,2.24,2.68,1.42,"03","Đua ghe","Visual power rất mạnh.",C.g,C.ltg);
    card(sl,9.66,2.24,2.8,1.42,"04","Bảo Việt Nhân Thọ","Right to play tự nhiên.",C.b,C.ltb);
    quoteBand(sl,"Nếu làm đúng, dự án này sẽ sống lâu hơn một mùa truyền thông.",0.9,4.32,11.55,0.92,C.bd,C.w,18);
  });return;
}
if(type==="silent_tension"){silentSlide(n,"Tension","Điều gia đình sợ nhất\nkhông phải sóng gió.\nMà là hành trình bị dừng giữa dòng.","");return;}
if(type==="culture"){
  content(n,"Cultural Context","Huế không chỉ là nơi diễn ra sự kiện.","Huế chính là lớp nghĩa làm cho dự án này trở nên đắt giá.",sl=>{
    softCard(sl,0.9,2.22,5.55,3.86,C.w);txt(sl,"HUẾ",1.16,2.54,0.8,0.14,{fs:10,c:C.gd,b:true});txt(sl,"Thành phố của ký ức và sự kế thừa.",1.16,2.88,4.3,0.48,{fs:22,b:true,c:C.bd});bulletList(sl,["Sông Hương là ký ức sống.","Sự chuẩn mực làm mọi thứ trở nên sang hơn.","Tinh thần gia phong rất gần với câu chuyện bảo vệ."],1.16,3.66,4.6,11.2,C.t,0.44);
    softCard(sl,6.9,2.22,5.55,3.86,C.ltb);txt(sl,"ĐUA GHE",7.16,2.54,1.1,0.14,{fs:10,c:C.b,b:true});txt(sl,"Một nghi lễ cộng đồng, không chỉ một cuộc thi.",7.16,2.88,4.45,0.54,{fs:22,b:true,c:C.bd});bulletList(sl,["Mỗi ghe vận hành như một gia đình.","Người cầm lái là hình tượng trách nhiệm.","Hai bờ sông biến cuộc đua thành ký ức chung."],7.16,3.66,4.55,11.2,C.t,0.44);
  });return;
}
if(type==="insight_quote"){statementSlide(n,"Insight","Khi một nhịp chèo chậm lại,\ncả con ghe đều bị ảnh hưởng.","Đó là cách người Việt cảm nhận rất thật về vai trò của người trụ cột trong gia đình.",["HUMAN","EMOTIONAL"]);return;}
if(type==="insight_map"){
  content(n,"Insight Map","Đua ghe là một ẩn dụ Việt Nam rất đắt cho câu chuyện bảo vệ gia đình.","Chỉ cần giải mã đúng biểu tượng, thương hiệu sẽ có một ngôn ngữ cảm xúc vừa gần gũi vừa sang trọng.",sl=>{
    [["Ghe","Gia đình",C.g,C.ltg],["Mái chèo","Người trụ cột",C.b,C.ltb],["Dòng sông","Cuộc đời",C.g,C.ltg],["Sóng gió","Rủi ro",C.b,C.ltb]].forEach((a,i)=>{const x=0.9+i*2.9;softCard(sl,x,2.24,2.55,0.92,a[3]);txt(sl,a[0].toUpperCase(),x+0.18,2.44,1.0,0.14,{fs:10,b:true,c:a[2]});txt(sl,a[1],x+0.18,2.64,1.95,0.18,{fs:15,b:true,c:C.bd});});
    quoteBand(sl,"Bảo hiểm nhân thọ không chỉ là tài chính. Đó là lời hứa giữ cho hành trình gia đình không ngắt mạch.",0.9,3.54,7.18,1.64,C.bd,C.w,19);
    softCard(sl,8.34,3.54,4.11,1.64,C.w);txt(sl,"Ý nghĩa với thương hiệu",8.6,3.84,2.1,0.16,{fs:9.5,c:C.gd,b:true});bulletList(sl,["Vai trò giữ nhịp được nhìn thấy.","Ngôn ngữ event trở thành ngôn ngữ brand.","Insight đủ lớn để tích lũy nhiều mùa."],8.58,4.18,3.4,10.8,C.t,0.34);
  });return;
}
if(type==="opportunity"){
  content(n,"Problem / Opportunity","Vấn đề không phải thiếu hiện diện. Vấn đề là thiếu một nơi để niềm tin được cảm nhận.","Đó là khoảng trống mà dự án này có thể mở khóa.",sl=>{
    softCard(sl,0.9,2.26,5.45,3.18,C.w);txt(sl,"Nếu chỉ là sponsorship",1.18,2.58,2.8,0.2,{fs:18,b:true,c:C.s});bulletList(sl,["Dễ có reach nhưng khó có ý nghĩa.","Hình ảnh trôi qua sau ngày đua.","Khó tích lũy thành tài sản thương hiệu."],1.18,3.12,4.55,11.2,C.t,0.48);
    softCard(sl,6.98,2.26,5.47,3.18,C.ltb);txt(sl,"Nếu là cultural platform",7.26,2.58,3.0,0.2,{fs:18,b:true,c:C.bd});bulletList(sl,["Sở hữu một biểu tượng cảm xúc.","Tạo nghi lễ và visual signature riêng.","Nối awareness với trust và commercial momentum."],7.26,3.12,4.55,11.2,C.t,0.48);
  });return;
}
if(type==="role"){
  content(n,"Brand Role","Bảo Việt Nhân Thọ phải hiện diện như người giữ cho cuộc đua tiếp tục.","Không chỉ đặt tên giải đấu. Đặt tên cho một chuẩn mực mới.",sl=>{
    card(sl,0.9,2.34,3.62,3.16,"01","Title sponsor of a new standard","Đặt tên cho giải đấu và cúp vô địch.",C.b,C.w);
    card(sl,4.86,2.34,3.62,3.16,"02","Guardian of continuity","Đại diện cho lời hứa giữ cho gia đình đi tiếp.",C.g,C.ltg);
    card(sl,8.82,2.34,3.63,3.16,"03","Curator of cultural pride","Nâng nghi lễ Huế thành trải nghiệm cấp quốc gia.",C.b,C.w);
  });return;
}
if(type==="platform"){
  content(n,"Strategic Platform","BẢO VIỆT GIỮ CHO DÒNG CHẢY GIA ĐÌNH KHÔNG NGỪNG LẠI","Một lãnh thổ đủ rộng cho brand, đủ sâu cho văn hóa, đủ bền cho nhiều mùa.",sl=>{
    quoteBand(sl,"Một platform để kể về bảo vệ, kế thừa và sự tiếp nối của gia đình Việt.",0.9,2.22,11.55,1.16,C.bd,C.w,22);
    card(sl,0.9,3.82,3.62,1.82,"BRAND","Bảo vệ sự tiếp nối","Brand truth.",C.g,C.ltg);
    card(sl,4.86,3.82,3.62,1.82,"HUMAN","Gia đình luôn cần một điểm tựa","Human truth.",C.b,C.ltb);
    card(sl,8.82,3.82,3.63,1.82,"CULTURE","Huế tôn vinh sự gìn giữ","Cultural truth.",C.g,C.ltg);
  });return;
}
if(type==="silent_bridge"){silentSlide(n,"Bridge","Từ brand platform\nđến một ý tưởng có thể làm rung cảm cả boardroom lẫn công chúng.","");return;}
if(type==="idea_reveal"){statementSlide(n,"Big Idea","GIỮ MÁI CHÈO DI SẢN","Một câu nói gói được người trụ cột, gia đình, Huế và vai trò bảo vệ của thương hiệu.",["BIG IDEA"]);return;}
if(type==="idea_meaning"){
  content(n,"Why This Idea","Ý tưởng này mạnh vì nó vừa có hình ảnh, vừa có chiều sâu, vừa có quyền sở hữu.","Không chỉ đẹp để kể. Đủ đúng để tích lũy.",sl=>{
    card(sl,0.9,2.28,3.62,2.08,"01","Emotional","Chạm vào người giữ nhịp của gia đình.",C.g,C.ltg);
    card(sl,4.86,2.28,3.62,2.08,"02","Cultural","Mở từ di sản Huế sang di sản gia đình.",C.b,C.ltb);
    card(sl,8.82,2.28,3.63,2.08,"03","Brand fit","Rất gần với vai trò cốt lõi của BVNT.",C.g,C.ltg);
    quoteBand(sl,"Không chỉ là idea cho năm 2026. Đây là territory có thể sống qua nhiều mùa.",0.9,4.84,11.55,0.92,C.ltb,C.bd,18);
  });return;
}
if(type==="message"){
  content(n,"Message System","Ít hơn. Rõ hơn. Mạnh hơn.","Mọi lớp thông điệp phải dẫn về cùng một vai trò thương hiệu.",sl=>{
    quoteBand(sl,"Bảo Việt giữ cho dòng chảy gia đình không ngừng lại",0.9,2.24,11.55,1.16,C.bd,C.w,23);
    card(sl,0.9,3.8,3.62,1.82,"BIG IDEA","Giữ mái chèo di sản","Headline cho toàn campaign.",C.g,C.ltg);
    card(sl,4.86,3.8,3.62,1.82,"SIGN-OFF","Giữ mái chèo hôm nay, chở che muôn thế hệ mai sau","Lớp cảm xúc cho film và closing.",C.b,C.ltb);
    card(sl,8.82,3.8,3.63,1.82,"SOCIAL","#GiuMaiCheoDiSan","Lớp xã hội hóa để UGC đi tiếp.",C.g,C.ltg);
  });return;
}
if(type==="win"){
  content(n,"Why It Will Win","Một đề xuất thắng lớn phải chạm đúng ba tầng.","Ý nghĩa, hình ảnh và khả năng sở hữu.",sl=>{
    card(sl,0.9,2.34,5.63,1.42,"","Ý nghĩa rõ ràng","Đua ghe, người trụ cột, bảo vệ gia đình.",C.b,C.w);
    card(sl,6.82,2.34,5.63,1.42,"","Hình ảnh đủ mạnh","Mái chèo, ánh sáng, drone, dòng sông.",C.g,C.ltb);
    card(sl,0.9,4.1,5.63,1.42,"","Khả năng sở hữu","Naming rights và nghi lễ riêng của thương hiệu.",C.g,C.ltg);
    card(sl,6.82,4.1,5.63,1.42,"","Khả năng tích lũy","Mỗi mùa giải cộng dồn thêm goodwill và content.",C.b,C.w);
  });return;
}
if(type==="section_event"){statementSlide(n,"Tầm nhìn sự kiện","Từ cuộc đua trên sông\nthành một hiện tượng văn hóa đương đại.","Không tổ chức một race day. Tổ chức một cultural show day trên mặt nước.",["RITUAL","SPECTACLE"]);return;}
if(type==="vision"){silentSlide(n,"Vision","Một ngày trên sông.\nMột ký ức ở lại nhiều năm.","Đó là cách event trở thành brand property.");return;}
if(type==="wow1"){statementSlide(n,"WOW 01","LỄ TÔN VINH NGƯỜI CẦM LÁI","Khoảnh khắc mở màn biến cuộc đua thành một nghi thức của sự dẫn dắt và trách nhiệm.",["RITUAL"]);return;}
if(type==="wow1_reason"){
  content(n,"Why It Matters","WOW moment tốt không chỉ đẹp. Nó phải đặt thương hiệu vào đúng vai trò.","Đây là khoảnh khắc giúp Bảo Việt Nhân Thọ trở thành người tôn vinh 'người giữ nhịp'.",sl=>{
    card(sl,0.9,2.4,3.62,2.52,"01","Đủ đẹp cho báo chí","Khóa hero shot cho TV, báo và social.",C.g,C.ltg);
    card(sl,4.86,2.4,3.62,2.52,"02","Đủ rõ cho brand role","Tôn vinh người cầm lái bằng tên thương hiệu.",C.b,C.ltb);
    card(sl,8.82,2.4,3.63,2.52,"03","Đủ cảm xúc cho short-form","Một khoảnh khắc vừa dignified vừa shareable.",C.g,C.ltg);
  });return;
}
if(type==="wow2"){statementSlide(n,"WOW 02","SÔNG HƯƠNG - DÒNG SÔNG ÁNH SÁNG","Đêm trước ngày đua hoặc thời khắc bế mạc, dòng sông trở thành một installation của ký ức, lời nhắn và niềm tin.",["LIGHT","MEMORY"]);return;}
if(type==="wow3"){statementSlide(n,"WOW 03","DRONE TRIBUTE\nGIỮ MÁI CHÈO DI SẢN","Một biểu tượng trên bầu trời để tuyên bố rằng cuộc đua này đã bước sang một đẳng cấp khác.",["NATIONAL SCALE"]);return;}
if(type==="silent_shift"){silentSlide(n,"Shift","Từ khoảnh khắc đẹp\nthành hiện tượng lan tỏa.","Đó là lúc IMC bắt đầu làm việc.");return;}
if(type==="journey"){
  content(n,"Experience Journey","Ngày sự kiện cần được viết như một đường cong cảm xúc.","Không phải một bảng giờ thi đấu.",sl=>{
    [["06:00","Khởi động cộng đồng","Check-in và warm-up"],["07:00","Lễ tôn vinh","Dựng dignity"],["08:00","Đua vòng loại","Kể chuyện trực tiếp"],["10:30","Activation","Data + emotion"],["14:00","Chung kết","Cao trào"],["18:30","Closing spectacle","Lời hẹn mùa sau"]].forEach((m,i)=>{const y=2.24+i*0.6;softCard(sl,0.9,y,11.55,0.46,i%2===0?C.w:C.l);txt(sl,m[0],1.14,y+0.12,0.72,0.16,{fs:12.4,b:true,c:C.gd});txt(sl,m[1],2.02,y+0.12,2.8,0.16,{fs:12.2,b:true,c:C.bd});txt(sl,m[2],5.2,y+0.12,4.8,0.16,{fs:11,c:C.t});});
  });return;
}
if(type==="section_imc"){statementSlide(n,"IMC","Một ngày trên sông.\nBa tháng lan tỏa.\nNhiều năm tài sản.","Một campaign có nhịp điệu, không phải một checklist truyền thông.",["BUILD","BURST","LAST"]);return;}
if(type==="imc"){
  content(n,"IMC Architecture","Ba phase. Ba vai trò rất rõ.","Build meaning. Create buzz. Accumulate value.",sl=>{
    card(sl,0.9,2.34,3.2,2.3,"PHASE 1","Teasing","Khơi mở hình tượng người giữ nhịp.",C.g,C.ltg);
    card(sl,4.45,2.34,3.2,2.3,"PHASE 2","Explosion","Biến ngày đua thành national spectacle.",C.b,C.ltb);
    card(sl,8.0,2.34,3.2,2.3,"PHASE 3","Legacy","Kéo dài content, trust và nurture.",C.g,C.ltg);
    ["Owned","Earned","Shared","Paid"].forEach((it,i)=>pill(sl,it,1.2+i*2.1,5.2,1.6,i%2?C.b:C.g,10));
  });return;
}
if(type==="phase1"){
  content(n,"Phase 1","Dựng ý nghĩa trước khi dựng sân khấu.","Giai đoạn đầu không cần nhiều. Chỉ cần đúng.",sl=>{
    card(sl,0.9,2.34,3.55,3.14,"CONTENT","Mồi cảm xúc","Video ngắn, poster series, key visual countdown.",C.g,C.ltg);
    card(sl,4.9,2.34,3.55,3.14,"PR","Câu chuyện cộng đồng","Kể về đội ghe, người cầm lái, ký ức Huế.",C.b,C.ltb);
    card(sl,8.9,2.34,3.55,3.14,"SEEDING","Local to national","Mở biên độ thảo luận từ Huế ra cả nước.",C.g,C.ltg);
  });return;
}
if(type==="phase2"){
  content(n,"Phase 2","Ngày sự kiện phải bùng nổ có chủ đích.","Mọi khoảnh khắc đẹp đều phải dẫn về vai trò thương hiệu.",sl=>{
    card(sl,0.9,2.28,2.62,1.26,"LIVE","Livestream","Có MC, graphic, narrative.",C.b,C.ltb);
    card(sl,3.74,2.28,2.62,1.26,"PR","Instant newsroom","Ảnh nhanh, clip nhanh, quote nhanh.",C.g,C.ltg);
    card(sl,6.58,2.28,2.62,1.26,"SHORT-FORM","Reels / TikTok","Cắt ngay từ các WOW moment.",C.b,C.ltb);
    card(sl,9.42,2.28,3.03,1.26,"KOL","Local x national","Travel, culture, family creators.",C.g,C.ltg);
    quoteBand(sl,"Bùng nổ phải có chủ đích.",0.9,4.12,11.55,0.94,C.bd,C.w,20);
  });return;
}
if(type==="phase3"){
  content(n,"Phase 3","Sau cuộc đua, tài sản không được phép dừng lại.","Đây là nơi event chuyển hóa thành ký ức và giá trị dài hạn.",sl=>{
    card(sl,0.9,2.34,3.62,3.06,"AMPLIFY","Kéo dài độ phủ","Aftermovie, recap film, quote cards, PR tổng kết.",C.g,C.ltg);
    card(sl,4.86,2.34,3.62,3.06,"ARCHIVE","Đóng gói tài sản","Recap page, gallery, sổ tay Giữ Mái Chèo.",C.b,C.ltb);
    card(sl,8.82,2.34,3.63,3.06,"NURTURE","Nuôi dưỡng quan tâm","Gửi nội dung ý nghĩa trước khi mở tư vấn mềm.",C.g,C.ltg);
  });return;
}
if(type==="activation"){
  content(n,"On-ground Activation","Ít hơn. Đắt hơn. Nhớ lâu hơn.","Activation phải tạo cảm xúc và hình ảnh trước khi tạo sự ồn ào.",sl=>{
    card(sl,0.9,2.34,4.1,3.52,"HERO","Bến Nhắn Gửi Gia Đình","Lời nhắn cho người giữ nhịp được đưa lên màn hình hoặc social reel.",C.g,C.ltg);
    card(sl,5.25,2.34,3.1,1.68,"PARTICIPATORY","Nhịp Chèo Đồng Tâm","Game mô phỏng chèo theo nhịp đội.",C.b,C.ltb);
    card(sl,5.25,4.18,3.1,1.68,"SPECTACLE","Bức Tường Mái Chèo Di Sản","Installation photo point của giải.",C.g,C.ltg);
    softCard(sl,8.65,2.34,3.8,3.52,C.w);txt(sl,"NGUYÊN TẮC",8.92,2.64,1.5,0.14,{fs:10,c:C.gd,b:true});txt(sl,"Không nhiều booth. Chỉ vài trải nghiệm đủ mạnh để được nhớ.",8.92,3.0,3.2,0.9,{fs:20,b:true,c:C.bd});
  });return;
}
if(type==="social"){
  content(n,"Social / PR","Lan tỏa bằng nhiều lớp người kể chuyện.","Không phụ thuộc vào một viral stunt đơn lẻ.",sl=>{
    card(sl,0.9,2.34,2.72,2.76,"HASHTAG","#GiuMaiCheoDiSan","Tagline xã hội hóa toàn campaign.",C.g,C.ltg);
    card(sl,3.86,2.34,2.72,2.76,"TIKTOK","#GiuNhipGiaDinh","Format kể về người giữ nhịp trong nhà.",C.b,C.ltb);
    card(sl,6.82,2.34,2.72,2.76,"UGC","Lời nhắn cho mái chèo","Một câu dành cho người đang gánh nhịp gia đình.",C.g,C.ltg);
    card(sl,9.78,2.34,2.67,2.76,"KOL / PR","Local + national mix","Nghệ sĩ Huế, creator văn hóa, family voices.",C.b,C.ltb);
  });return;
}
if(type==="film"){
  content(n,"Hero Film","Một phim ngắn không kể về bảo hiểm. Kể về người giữ nhịp.","Để khán giả tự hiểu vì sao gia đình cần được chở che.",sl=>{
    quoteBand(sl,"Mở bằng nhịp chèo trên sông Hương. Đi qua chân dung người trụ cột. Chạm cao trào ở lễ tôn vinh. Khóa lại bằng một lời hứa thương hiệu.",0.9,2.34,7.1,3.36,C.bd,C.w,19);
    card(sl,8.28,2.34,4.18,1.56,"MOOD","Cinematic | dignified | warm","Ít lời. Nhiều khoảng lặng.",C.g,C.ltg);
    card(sl,8.28,4.14,4.18,1.56,"OUTPUT","30s | 60s | documentary cut","Dùng cho opening, social và PR.",C.b,C.ltb);
  });return;
}
if(type==="ecosystem"){
  content(n,"Content Ecosystem","Một idea tốt phải sinh ra nhiều lớp nội dung.","Nhưng mỗi lớp chỉ nên làm đúng một việc.",sl=>{
    softCard(sl,4.18,2.28,5.0,1.08,C.bd);txt(sl,"HERO CONTENT",5.95,2.54,1.5,0.16,{fs:10,c:"BFD5EA",b:true,a:"center"});txt(sl,"Hero film | main teaser | aftermovie",4.48,2.8,4.4,0.22,{fs:18,b:true,c:C.w,a:"center"});
    softCard(sl,2.4,3.66,8.55,1.08,C.ltb);txt(sl,"SOCIAL / LIVE",4.96,3.92,2.5,0.16,{fs:10,c:C.b,b:true,a:"center"});txt(sl,"Reels | TikTok | livestream clip | stills",2.76,4.18,7.8,0.22,{fs:16.5,b:true,c:C.bd,a:"center"});
    softCard(sl,0.9,5.04,11.55,0.82,C.ltg);txt(sl,"PR | PHOTO ESSAY | RECAP PAGE | CRM FOLLOW-UP",1.2,5.34,11.0,0.18,{fs:14,b:true,c:C.bd,a:"center"});
  });return;
}
if(type==="branding"){
  content(n,"Branding Integration","Thương hiệu cần rõ ràng. Nhưng vẫn phải giữ được độ sang.","Hiện diện tốt là khi brand vừa được nhìn thấy, vừa được cảm thấy là có lý do để hiện diện.",sl=>{
    softCard(sl,0.9,2.34,5.45,3.16,C.w);txt(sl,"VISIBLE",1.18,2.64,1.0,0.14,{fs:10,c:C.gd,b:true});["Tên giải đấu và cúp","Backdrop, podium, media wall","Livestream package chọn lọc"].forEach((it,i)=>pill(sl,it,1.18,3.08+i*0.56,3.55,i%2?C.b:C.g,9.2));
    softCard(sl,6.98,2.34,5.47,3.16,C.ltb);txt(sl,"MEANINGFUL",7.26,2.64,1.4,0.14,{fs:10,c:C.b,b:true});["Nghi lễ tôn vinh người cầm lái","Không gian lời nhắn gia đình","Giải phụ cho câu chuyện truyền cảm hứng"].forEach((it,i)=>pill(sl,it,7.26,3.08+i*0.56,3.9,i%2?C.g:C.b,9.2));
  });return;
}
if(type==="lead"){
  content(n,"Lead Logic","Không ép bán tại event.","Dùng giá trị nội dung và cảm xúc để mở ra quan tâm có chất lượng.",sl=>{
    card(sl,0.9,2.4,3.55,2.84,"01","Attract","QR, check-in, activation, microsite.",C.b,C.ltb);
    card(sl,4.65,2.4,3.55,2.84,"02","Capture","Nhóm theo intent, không thu lead thô.",C.g,C.ltg);
    card(sl,8.4,2.4,4.05,2.84,"03","Nurture","Gửi recap và nội dung hữu ích trước khi mở tư vấn.",C.b,C.ltb);
  });return;
}
if(type==="impact"){statementSlide(n,"Impact","Từ thương hiệu lớn\nđến thương hiệu lớn và giàu ý nghĩa.","Đó là loại perception shift mà media buy đơn thuần rất khó tạo ra.",["AWARENESS","TRUST"]);return;}
if(type==="kpi"){
  content(n,"KPI Framework","Đo ít hơn. Nhưng đo đúng hơn.","Ba lớp KPI là đủ cho boardroom: lan tỏa, cảm nhận, kinh doanh.",sl=>{
    card(sl,0.9,2.34,3.62,3.12,"BRAND","Visibility","Reach, PR mentions, livestream views.",C.g,C.ltg);
    card(sl,4.86,2.34,3.62,3.12,"QUALITY","Trust & message fit","Sentiment, association, positive voice.",C.b,C.ltb);
    card(sl,8.82,2.34,3.63,3.12,"BUSINESS","Commercial momentum","Qualified lead, consultation request, return intent.",C.g,C.ltg);
  });return;
}
if(type==="annual"){
  content(n,"Annual Property","Một signature property mạnh càng lặp lại càng có giá trị.","Nếu xây đúng từ năm đầu, đây sẽ là một nghi lễ thương hiệu được chờ đợi mỗi mùa Quốc khánh.",sl=>{
    card(sl,0.9,2.34,3.55,3.08,"YEAR 1","Birth","Sinh ra Big Idea, nghi lễ và visual signature.",C.g,C.ltg);
    card(sl,4.9,2.34,3.55,3.08,"YEAR 2","Scale","Mở rộng thành cultural week và platform gia đình.",C.b,C.ltb);
    card(sl,8.9,2.34,3.55,3.08,"YEAR 3+","Own the ritual","Biến event thành tài sản thương hiệu sống cùng công chúng.",C.g,C.ltg);
  });return;
}
if(type==="silent_close"){silentSlide(n,"Closing","Chúng ta không chỉ tài trợ một cuộc đua.\nChúng ta giữ cho dòng chảy gia đình được tiếp tục.","");return;}
if(type==="finale"){statementSlide(n,"Finale","GIỮ MÁI CHÈO HÔM NAY.\nCHỞ CHE MUÔN THẾ HỆ MAI SAU.","Một lời hứa thương hiệu đủ đẹp để bắt đầu từ Huế, và đủ lớn để sống cùng gia đình Việt trong nhiều năm tiếp theo.",["BẢO VIỆT NHÂN THỌ"]);return;}
});

(async()=>{const out=path.join(__dirname,"output","BVNT_Hue_Boat_Race_Proposal_2026_v4.pptx");await pptx.writeFile({fileName:out});console.log(`Wrote ${out}`);})();
