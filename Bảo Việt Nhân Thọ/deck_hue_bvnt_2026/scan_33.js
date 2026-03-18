"use strict";
const pptxgen=require("pptxgenjs");
const {autoFontSize,imageSizingContain,warnIfSlideHasOverlaps,warnIfSlideElementsOutOfBounds}=require("./pptxgenjs_helpers");
const path=require("path");
const pptx=new pptxgen();
pptx.layout="LAYOUT_WIDE";
pptx.author="OpenAI Codex";
pptx.company="Bảo Việt Nhân Thọ";
pptx.lang="vi-VN";
pptx.subject="BVNT Hue Boat Race Proposal v3";
pptx.title="BVNT Hue Boat Race Proposal 2026 v3";
pptx.theme={headFontFace:"Barlow",bodyFontFace:"Barlow",lang:"vi-VN"};
const W=13.333,H=7.5;
const C={b:"0B6CB8",bd:"114A7A",g:"C99211",gd:"9F720C",t:"203040",s:"5C6C7B",l:"F6F8FB",ln:"D8E0E8",w:"FFFFFF",ltb:"EEF5FB",ltg:"F8F3E8"};
const hero=path.join(__dirname,"master_unzip","ppt","media","image2.jpg");
const base=path.join(__dirname,"master_unzip","ppt","media","image3.png");
const bg=(sl,k="base")=>sl.addImage({path:k==="hero"?hero:base,...imageSizingContain(k==="hero"?hero:base,0,0,W,H)});
const txt=(sl,tx,x,y,w,h,o={})=>sl.addText(tx,{x,y,w,h,fontFace:o.ff||"Barlow",fontSize:o.fs||12,color:o.c||C.t,bold:!!o.b,italic:!!o.i,margin:o.m??0,align:o.a||"left",valign:o.v||"top",breakLine:o.br??true});
const kicker=(sl,tx)=>txt(sl,tx.toUpperCase(),0.9,0.72,4.2,0.2,{fs:10,c:C.gd,b:true});
function title(sl,ttl,sub,w=8.85){sl.addText(ttl,{x:0.9,y:0.98,w,h:0.7,fontFace:"Barlow",bold:true,color:C.bd,margin:0,...autoFontSize(ttl,"Barlow",{x:0.9,y:0.98,w,h:0.7,fontSize:24,minFontSize:21,maxFontSize:29,bold:true,margin:0,mode:"auto"})});if(sub)txt(sl,sub,0.9,1.7,w,0.34,{fs:11,c:C.s});}
const num=(sl,n)=>txt(sl,String(n).padStart(2,"0"),12.45,7.03,0.4,0.18,{fs:9,c:C.gd,b:true,a:"right"});
const pill=(sl,tx,x,y,w,c=C.g,fs=9.2)=>{sl.addShape(pptx.ShapeType.roundRect,{x,y,w,h:0.34,rectRadius:0.08,fill:{color:c,transparency:8},line:{color:c,pt:0}});txt(sl,tx,x+0.06,y+0.08,w-0.12,0.14,{fs,c:C.w,b:true,a:"center"});};
const softCard=(sl,x,y,w,h,fill=C.w)=>sl.addShape(pptx.ShapeType.roundRect,{x,y,w,h,rectRadius:0.05,fill:{color:fill},line:{color:C.ln,pt:1}});
function card(sl,x,y,w,h,label,head,body,accent=C.b,fill=C.w){softCard(sl,x,y,w,h,fill);sl.addShape(pptx.ShapeType.rect,{x:x+0.16,y:y+0.16,w:w-0.32,h:0.05,fill:{color:accent},line:{color:accent,pt:0}});if(label)txt(sl,label,x+0.22,y+0.3,w-0.44,0.15,{fs:9.2,c:accent,b:true});txt(sl,head,x+0.22,y+0.58,w-0.44,0.42,{fs:17,b:true,c:C.bd});if(body)txt(sl,body,x+0.22,y+1.02,w-0.44,h-1.12,{fs:10.8,c:C.t});}
function bulletList(sl,items,x,y,w,fs=11.2,color=C.t,step=0.28){items.forEach((it,i)=>sl.addText([{text:it,options:{bullet:{indent:12}}}],{x,y:y+i*step,w,h:0.22,fontFace:"Barlow",fontSize:fs,color,margin:0}));}
function quoteBand(sl,tx,x,y,w,h,fill=C.bd,color=C.w){sl.addShape(pptx.ShapeType.roundRect,{x,y,w,h,rectRadius:0.05,fill:{color:fill},line:{color:fill,pt:0}});txt(sl,tx,x+0.26,y+0.24,w-0.52,h-0.34,{fs:20,b:true,c:color});}
function imageStatement(sl,label,ttl,sub){bg(sl,"hero");sl.addShape(pptx.ShapeType.rect,{x:0,y:0,w:W,h:H,fill:{color:"0E2438",transparency:44},line:{color:"0E2438",pt:0}});sl.addShape(pptx.ShapeType.rect,{x:0.92,y:1.92,w:0.1,h:2.15,fill:{color:C.g},line:{color:C.g,pt:0}});txt(sl,label.toUpperCase(),1.18,1.98,2.4,0.16,{fs:10,c:C.w,b:true});sl.addText(ttl,{x:1.18,y:2.3,w:8.1,h:1.16,fontFace:"Barlow",bold:true,color:C.w,margin:0,...autoFontSize(ttl,"Barlow",{x:1.18,y:2.3,w:8.1,h:1.16,fontSize:28,minFontSize:24,maxFontSize:34,bold:true,margin:0,mode:"auto"})});if(sub)txt(sl,sub,1.18,3.66,6.7,0.52,{fs:14,c:C.w});}
function finalize(sl,n){num(sl,n);warnIfSlideHasOverlaps(sl,pptx);warnIfSlideElementsOutOfBounds(sl,pptx);} 
function content(n,k,ttl,sub,fn){const sl=pptx.addSlide();bg(sl);kicker(sl,k);title(sl,ttl,sub);fn(sl);finalize(sl,n);} 

const slides=[
{type:"hero"},
{type:"statement",label:"Mở đầu",ttl:"Không tài trợ một giải đua. Khởi sinh một tài sản văn hóa thương hiệu.",sub:"Từ một sự kiện địa phương của Huế, nâng tầm thành platform thường niên mà Bảo Việt Nhân Thọ có thể sở hữu, tích lũy và làm lớn lên qua từng năm."},
{type:"whyA"},
{type:"whyB"},
{type:"culture"},
{type:"insightQuote"},
{type:"insightMap"},
{type:"opportunity"},
{type:"role"},
{type:"platform"},
{type:"ideaReveal"},
{type:"ideaWhy"},
{type:"message"},
{type:"win"},
{type:"section",label:"Tầm nhìn sự kiện",ttl:"Từ cuộc đua trên sông thành một hiện tượng văn hóa đương đại.",sub:"Thiết kế lại toàn bộ trải nghiệm như một ritual premium: có nghi thức, có spectacle, có lớp nội dung khiến công chúng muốn xem và muốn kể lại."},
{type:"vision"},
{type:"wow1"},
{type:"wow2"},
{type:"wow3"},
{type:"journey"},
{type:"section",label:"IMC",ttl:"Một ngày trên sông. Ba tháng lan tỏa. Nhiều năm tài sản.",sub:"Kiến trúc IMC được thiết kế để kéo dài ý nghĩa trước sự kiện, bùng nổ đúng ngày đua, rồi tích lũy thành trust, content asset và commercial momentum."},
{type:"imc"},
{type:"phase1"},
{type:"phase2"},
{type:"phase3"},
{type:"activation"},
{type:"social"},
{type:"film"},
{type:"ecosystem"},
{type:"branding"},
{type:"lead"},
{type:"impact"},
{type:"kpi"},
{type:"annual"},
{type:"closing"}
];

slides.slice(0,33).forEach((s,idx)=>{
const n=idx+1;
if(s.type==="hero"){
  const sl=pptx.addSlide();
  bg(sl,"hero");
  txt(sl,"ĐỀ XUẤT NỀN TẢNG TÀI TRỢ VĂN HÓA - THƯƠNG HIỆU",0.9,2.0,4.8,0.2,{fs:10,c:C.bd,b:true});
  sl.addText("GIẢI VÔ ĐỊCH ĐUA GHE TRUYỀN THỐNG CỐ ĐÔ HUẾ 2026\nTRANH CÚP BẢO VIỆT NHÂN THỌ",{x:0.9,y:2.56,w:8.7,h:1.2,fontFace:"Barlow",bold:true,color:C.bd,margin:0,...autoFontSize("GIẢI VÔ ĐỊCH ĐUA GHE TRUYỀN THỐNG CỐ ĐÔ HUẾ 2026\nTRANH CÚP BẢO VIỆT NHÂN THỌ","Barlow",{x:0.9,y:2.56,w:8.7,h:1.2,fontSize:23,minFontSize:20,maxFontSize:26,bold:true,margin:0,mode:"auto"})});
  txt(sl,"Big Idea đề xuất",0.9,4.02,1.6,0.16,{fs:10,c:C.w,b:true});
  txt(sl,"GIỮ MÁI CHÈO DI SẢN",0.9,4.28,4.6,0.34,{fs:22,c:C.w,b:true});
  txt(sl,"Bảo Việt Nhân Thọ - Giữ mái chèo hôm nay, chở che muôn thế hệ mai sau.",0.9,4.72,5.9,0.28,{fs:12.8,c:C.w});
  pill(sl,"02.09.2026 | SÔNG HƯƠNG - HUẾ",0.9,5.14,2.95,C.b);
  pill(sl,"TITLE SPONSOR / NAMING RIGHTS",3.98,5.14,3.2,C.g);
  softCard(sl,0.9,5.72,5.95,0.68,"EEF3F8");
  txt(sl,"Một cơ hội hiếm để Bảo Việt Nhân Thọ biến tinh thần bảo vệ gia đình thành một nghi lễ văn hóa sống, có thể sở hữu lâu dài.",1.14,5.93,5.45,0.28,{fs:11.5,c:C.bd,b:true});
  finalize(sl,n);return;
}
if(s.type==="statement"){const sl=pptx.addSlide();imageStatement(sl,s.label,s.ttl,s.sub);pill(sl,"BOARDROOM AMBITION",1.18,4.62,1.84,C.b);pill(sl,"CULTURAL PROPERTY",3.18,4.62,1.96,C.g);finalize(sl,n);return;}
if(s.type==="section"){const sl=pptx.addSlide();imageStatement(sl,s.label,s.ttl,s.sub);finalize(sl,n);return;}
if(s.type==="whyA"){
  content(n,"Bối cảnh chiến lược","Vì sao dự án này đáng làm ngay lúc này","Bốn động lực đang hội tụ đủ mạnh để biến một giải đua địa phương thành brand property cấp quốc gia.",sl=>{
    card(sl,0.9,2.22,2.68,1.34,"01 | THỜI ĐIỂM","Quốc khánh 02/09","Tinh thần quốc gia giúp sự kiện có chiều sâu cộng đồng thay vì chỉ thể thao.",C.g,C.ltg);
    card(sl,3.82,2.22,2.68,1.34,"02 | BỐI CẢNH","Huế - thành phố của ký ức","Di sản, chuẩn mực và cảm xúc khiến câu chuyện bảo vệ trở nên đắt giá hơn.",C.b,C.ltb);
    card(sl,6.74,2.22,2.68,1.34,"03 | HÌNH ẢNH","Đua ghe có visual power","Dễ tạo spectacle, livestream và short-form có độ lan tỏa tự nhiên.",C.g,C.ltg);
    card(sl,9.66,2.22,2.8,1.34,"04 | THƯƠNG HIỆU","Bảo Việt Nhân Thọ có right to play","Vai trò giữ cho gia đình đi tiếp khớp tự nhiên với tinh thần của cuộc đua.",C.b,C.ltb);
    quoteBand(sl,"Một thời điểm hiếm khi giá trị văn hóa, tinh thần Quốc khánh và nhu cầu thương hiệu cùng đứng về một phía.",0.9,4.18,11.55,1.12,C.bd,C.w);
  });return;
}
if(s.type==="whyB"){
  content(n,"Window Of Opportunity","Nếu chỉ tài trợ logo, giá trị sẽ dừng ở hiện diện. Nếu sở hữu platform, giá trị sẽ tích lũy qua nhiều mùa.","Khoảng chênh lớn nhất của dự án này không nằm ở media. Nó nằm ở cách định nghĩa vai trò thương hiệu.",sl=>{
    softCard(sl,0.9,2.24,5.45,3.36,C.w);
    txt(sl,"Nếu chỉ là sponsorship",1.18,2.54,2.6,0.2,{fs:17,b:true,c:C.s});
    bulletList(sl,["Nhận biết cao trong ngắn hạn nhưng khó sở hữu ý nghĩa.","Hình ảnh sự kiện trôi qua sau ngày đua.","Khó tạo premium thương hiệu hay động lực quay lại năm sau."],1.18,3.02,4.6,11.2,C.t,0.44);
    softCard(sl,6.98,2.24,5.47,3.36,C.ltb);
    txt(sl,"Nếu là cultural brand platform",7.26,2.54,3.2,0.2,{fs:17,b:true,c:C.bd});
    bulletList(sl,["Sở hữu một biểu tượng cảm xúc gắn với gia đình Việt.","Tạo nghi lễ và visual signature có thể lặp lại hàng năm.","Gắn awareness với trust, earned media và commercial momentum."],7.26,3.02,4.55,11.2,C.t,0.44);
    pill(sl,"FROM SPONSOR TO CULTURAL CUSTODIAN",7.26,5.1,3.65,C.g);
  });return;
}
if(s.type==="culture"){
  content(n,"Cultural Context","Huế không chỉ là bối cảnh. Huế chính là linh hồn của đề xuất.","Ở Huế, dòng sông không chỉ để đi qua. Dòng sông là ký ức, là nếp sống và là nơi truyền thống tiếp tục được gìn giữ.",sl=>{
    softCard(sl,0.9,2.18,5.55,3.92,C.w);
    txt(sl,"CHIỀU SÂU VĂN HÓA",1.16,2.5,1.8,0.16,{fs:9.5,c:C.gd,b:true});
    txt(sl,"Huế là thành phố của ký ức và sự kế thừa.",1.16,2.82,4.45,0.5,{fs:21,b:true,c:C.bd});
    bulletList(sl,["Sông Hương, Phu Văn Lâu, Trường Tiền tạo nên một phông nền di sản có thật.","Gia phong, nề nếp và sự gìn giữ giúp ngôn ngữ 'bảo vệ' trở nên tự nhiên.","Mọi thứ ở Huế đều đẹp hơn khi được làm bằng sự chuẩn mực và restraint."],1.16,3.54,4.8,11.1,C.t,0.44);
    softCard(sl,6.9,2.18,5.55,3.92,C.l);
    txt(sl,"NGHI LỄ SỐNG",7.16,2.5,1.5,0.16,{fs:9.5,c:C.b,b:true});
    txt(sl,"Đua ghe là một nghi lễ cộng đồng chứ không chỉ là môn thi.",7.16,2.82,4.55,0.5,{fs:21,b:true,c:C.bd});
    bulletList(sl,["Mỗi ghe vận hành như một gia đình: cùng nhịp, cùng gánh, cùng vượt sóng.","Người cầm lái là hình tượng trách nhiệm và dẫn dắt.","Khán giả dọc hai bờ sông làm cho cuộc đua trở thành ký ức chung của cả cộng đồng."],7.16,3.54,4.7,11.1,C.t,0.44);
  });return;
}
if(s.type==="insightQuote"){const sl=pptx.addSlide();imageStatement(sl,"Insight","Điều gia đình sợ nhất không phải sóng gió. Mà là hành trình bị dừng giữa dòng.","Khi người giữ nhịp gặp biến cố, nỗi lo lớn nhất không nằm ở một khoảnh khắc khó khăn, mà nằm ở việc gia đình có còn đi tiếp được như trước hay không.");pill(sl,"HUMAN TRUTH",1.18,4.72,1.44,C.g);finalize(sl,n);return;}
if(s.type==="insightMap"){
  content(n,"Insight Framework","Đua ghe là một ẩn dụ Việt Nam rất đắt cho câu chuyện bảo vệ gia đình","Chỉ cần giải mã đúng biểu tượng, Bảo Việt Nhân Thọ sẽ có một ngôn ngữ cảm xúc vừa gần gũi, vừa sang trọng.",sl=>{
    [["GHE","Gia đình",C.g,C.ltg],["MÁI CHÈO","Người trụ cột",C.b,C.ltb],["DÒNG SÔNG","Cuộc đời",C.g,C.ltg],["SÓNG GIÓ","Rủi ro",C.b,C.ltb]].forEach((a,i)=>{const x=0.9+i*2.9;softCard(sl,x,2.2,2.55,0.9,a[3]);txt(sl,a[0],x+0.18,2.42,0.9,0.14,{fs:10,b:true,c:a[2]});txt(sl,a[1],x+0.18,2.62,1.8,0.18,{fs:15,b:true,c:C.bd});});
    quoteBand(sl,"Khi một nhịp chèo chậm lại, cả con ghe đều bị ảnh hưởng. Đó chính là lý do bảo hiểm nhân thọ không chỉ là tài chính, mà là lời hứa giữ cho hành trình gia đình không ngắt mạch.",0.9,3.4,7.2,2.0,C.bd,C.w);
    softCard(sl,8.34,3.4,4.11,2.0,C.w);
    txt(sl,"Ý nghĩa với thương hiệu",8.6,3.68,2.2,0.16,{fs:9.5,c:C.gd,b:true});
    bulletList(sl,["Bảo Việt Nhân Thọ là thương hiệu giữ cho hành trình tiếp tục.","Ngôn ngữ event trở thành ngôn ngữ thương hiệu một cách tự nhiên.","Insight này đủ giàu để phát triển thành platform nhiều năm."],8.58,4.04,3.45,11.2,C.t,0.38);
  });return;
}
if(s.type==="opportunity"){
  content(n,"Brand Problem + Opportunity","Bài toán không phải tìm chỗ đặt logo. Bài toán là tạo nơi để niềm tin được cảm nhận.","Thương hiệu bảo hiểm thường đúng về lý lẽ, nhưng thiếu những khoảnh khắc văn hóa đủ mạnh để được nhớ bằng cảm xúc.",sl=>{
    softCard(sl,0.9,2.24,5.45,3.28,C.w);
    txt(sl,"BRAND PROBLEM",1.18,2.54,1.8,0.16,{fs:9.5,c:C.s,b:true});
    txt(sl,"Thông điệp bảo vệ gia đình đúng, nhưng nghe đã quen.",1.18,2.86,4.5,0.48,{fs:20,b:true,c:C.bd});
    bulletList(sl,["Truyền thông ngắn hạn tạo reach nhưng hiếm khi tạo tài sản sở hữu lâu dài.","Khách hàng cần cảm thấy thương hiệu đáng tin, không chỉ thấy thương hiệu xuất hiện.","Cần một không gian để brand truth được trải nghiệm bằng văn hóa."],1.18,3.58,4.7,11.1,C.t,0.42);
    softCard(sl,6.98,2.24,5.47,3.28,C.ltb);
    txt(sl,"BRAND OPPORTUNITY",7.26,2.54,2.0,0.16,{fs:9.5,c:C.b,b:true});
    txt(sl,"Trở thành người giữ nhịp cho một nghi lễ cộng đồng được mong đợi.",7.26,2.86,4.6,0.54,{fs:20,b:true,c:C.bd});
    bulletList(sl,["Đặt tên cho một chuẩn mực tổ chức mới của giải đua ghe Huế.","Biến 'bảo vệ sự tiếp nối' thành trải nghiệm nhìn thấy và chạm được.","Mở ra hệ IMC đủ lớn để kể chuyện thương hiệu ở quy mô quốc gia."],7.26,3.58,4.65,11.1,C.t,0.42);
  });return;
}
if(s.type==="role"){
  content(n,"Brand Role","Vai trò của Bảo Việt Nhân Thọ phải lớn hơn một title sponsor.","Thương hiệu không chỉ hiện diện ở giải đấu. Thương hiệu hiện diện ở chính ý nghĩa làm cho giải đấu đáng nhớ hơn.",sl=>{
    card(sl,0.9,2.3,3.62,3.28,"01 | ROLE","Title sponsor of a new standard","Đặt tên cho giải đấu, cúp vô địch và toàn bộ chuẩn mực tổ chức mới của sự kiện.",C.b,C.w);
    card(sl,4.86,2.3,3.62,3.28,"02 | ROLE","Guardian of continuity","Đại diện cho lời hứa giữ cho hành trình gia đình, cộng đồng và di sản không ngừng lại.",C.g,C.ltg);
    card(sl,8.82,2.3,3.63,3.28,"03 | ROLE","Curator of cultural pride","Tôn vinh Huế bằng cách nâng nghi lễ truyền thống thành một trải nghiệm có sức lan tỏa quốc gia.",C.b,C.w);
  });return;
}
if(s.type==="platform"){
  content(n,"Strategic Platform","Lãnh thổ chiến lược trung tâm","BẢO VIỆT GIỮ CHO DÒNG CHẢY GIA ĐÌNH KHÔNG NGỪNG LẠI",sl=>{
    quoteBand(sl,"Một platform đủ rộng để kể về bảo vệ gia đình, đủ sâu để chạm vào văn hóa Huế, và đủ linh hoạt để trở thành tài sản thương hiệu thường niên.",0.9,2.22,11.55,1.56,C.bd,C.w);
    card(sl,0.9,4.08,3.62,1.72,"BRAND TRUTH","Bảo Việt Nhân Thọ bảo vệ sự tiếp nối","Giữ cho gia đình đi tiếp qua biến động.",C.g,C.ltg);
    card(sl,4.86,4.08,3.62,1.72,"HUMAN TRUTH","Gia đình luôn cần một điểm tựa","Điều được bảo vệ không chỉ là tài chính, mà là nhịp sống.",C.b,C.ltb);
    card(sl,8.82,4.08,3.63,1.72,"CULTURAL TRUTH","Huế tôn vinh sự gìn giữ","Nơi ký ức và truyền đời luôn có giá trị đặc biệt.",C.g,C.ltg);
  });return;
}
if(s.type==="ideaReveal"){const sl=pptx.addSlide();imageStatement(sl,"Big Idea","GIỮ MÁI CHÈO DI SẢN","Một câu nói gói được cả người trụ cột, gia đình, Huế, và vai trò bảo vệ của thương hiệu.");pill(sl,"BIG IDEA REVEAL",1.18,4.7,1.72,C.g);softCard(sl,1.18,5.18,4.6,0.62,"EEF3F8");txt(sl,"Bảo Việt Nhân Thọ - Giữ mái chèo hôm nay, chở che muôn thế hệ mai sau.",1.38,5.39,4.2,0.16,{fs:11.6,c:C.bd,b:true});finalize(sl,n);return;}
if(s.type==="ideaWhy"){
  content(n,"Why This Idea Works","Một Big Idea mạnh phải đúng với thương hiệu, đúng với văn hóa và đủ lớn để tích lũy qua nhiều năm.","'Giữ Mái Chèo Di Sản' chiến thắng vì vừa có hình ảnh mạnh, vừa có chiều sâu ngữ nghĩa và quyền sở hữu thương hiệu.",sl=>{
    card(sl,0.9,2.22,3.62,1.92,"01 | EMOTIONAL","Chạm vào người giữ nhịp","Mái chèo là biểu tượng của trách nhiệm, bền bỉ và dẫn dắt gia đình.",C.g,C.ltg);
    card(sl,4.86,2.22,3.62,1.92,"02 | CULTURAL","Gắn với Huế một cách tự nhiên","Di sản mở từ di sản cố đô sang di sản gia đình, không khiên cưỡng.",C.b,C.ltb);
    card(sl,8.82,2.22,3.63,1.92,"03 | BRAND FIT","Ngôn ngữ sang và đúng chất BVNT","Chữ 'giữ' gần với vai trò cốt lõi của bảo hiểm nhân thọ.",C.g,C.ltg);
    quoteBand(sl,"Không chỉ là idea cho năm 2026. Đây là một territory có thể mở rộng thành signature property nhiều mùa.",0.9,4.62,11.55,1.04,C.ltb,C.bd);
  });return;
}
if(s.type==="message"){
  content(n,"Message System","Hệ thống thông điệp cần rõ tầng, dễ nhớ và dễ triển khai.","Từ boardroom statement đến social hashtag, mọi lớp thông điệp phải dẫn về cùng một vai trò thương hiệu.",sl=>{
    quoteBand(sl,"Bảo Việt giữ cho dòng chảy gia đình không ngừng lại",0.9,2.22,11.55,1.34,C.bd,C.w);
    card(sl,0.9,3.92,3.62,1.86,"BIG IDEA","Giữ mái chèo di sản","Dùng cho event title frame, key visual, teaser và PR headline.",C.g,C.ltg);
    card(sl,4.86,3.92,3.62,1.86,"SIGN-OFF","Giữ mái chèo hôm nay, chở che muôn thế hệ mai sau","Lớp ngôn ngữ giàu cảm xúc cho film, lễ tôn vinh và closing.",C.b,C.ltb);
    card(sl,8.82,3.92,3.63,1.86,"SOCIAL SYSTEM","#GiuMaiCheoDiSan  #DongChayKhongNgungLai","Dùng cho UGC, challenge và realtime conversation.",C.g,C.ltg);
  });return;
}
if(s.type==="win"){
  content(n,"Why It Will Win","Một đề xuất thắng lớn phải chạm đúng ba tầng: ý nghĩa, hình ảnh và khả năng sở hữu.","Đây là loại ý tưởng vừa có thể thuyết phục lãnh đạo, vừa đủ mạnh để báo chí và công chúng tự lan truyền.",sl=>{
    [[0.9,2.24,"Ý nghĩa rõ ràng","Liên kết tự nhiên giữa đua ghe, người trụ cột và bảo vệ gia đình.",C.w,C.b],[6.82,2.24,"Hình ảnh đủ mạnh","Đồng loạt mái chèo, sông ánh sáng, drone tribute, lời nhắn truyền đời.",C.ltb,C.g],[0.9,4.18,"Khả năng sở hữu","Naming rights và các nghi lễ độc quyền giúp thương hiệu giữ tài sản.",C.ltg,C.g],[6.82,4.18,"Khả năng tích lũy","Mỗi mùa giải cộng dồn thêm content, dữ liệu và thiện cảm thương hiệu.",C.w,C.b]].forEach(a=>card(sl,a[0],a[1],5.63,1.52,"",a[2],a[3],a[5],a[4]));
  });return;
}
if(s.type==="vision"){const sl=pptx.addSlide();imageStatement(sl,"Event Vision","Không tổ chức một race day. Tổ chức một cultural show day trên mặt nước.","Từ nghi thức mở màn đến khoảnh khắc trao cúp, mọi phần của ngày đua đều cần được dàn dựng như một trải nghiệm đáng nhớ chứ không chỉ là lịch thi đấu.");pill(sl,"RITUAL",1.18,4.86,1.0,C.g);pill(sl,"SPECTACLE",2.34,4.86,1.24,C.b);pill(sl,"CONTENT",3.74,4.86,1.12,C.g);finalize(sl,n);return;}
if(s.type==="wow1"){
  content(n,"WOW Moment 01","Lễ Tôn Vinh Người Cầm Lái","Một nghi thức mở màn giàu biểu tượng, đủ sang trọng để trở thành visual signature của giải đấu.",sl=>{
    quoteBand(sl,"20 đội ghe đồng loạt dựng mái chèo và hướng về bờ danh dự - khoảnh khắc biến cuộc đua thành một lễ tôn vinh người giữ nhịp.",0.9,2.22,6.95,2.26,C.bd,C.w);
    softCard(sl,8.1,2.22,4.35,2.26,C.w);
    txt(sl,"Vì sao shareable",8.38,2.5,1.8,0.16,{fs:9.5,c:C.gd,b:true});
    bulletList(sl,["Tạo một hình ảnh mở màn đủ đẹp cho TV, báo chí và social.","Đặt Bảo Việt Nhân Thọ vào vai trò tôn vinh người giữ nhịp.","Dễ cắt thành short-form video giàu cảm xúc và niềm tự hào cộng đồng."],8.36,2.86,3.55,11.1,C.t,0.38);
    pill(sl,"RITUAL OF RESPECT",0.9,4.82,1.76,C.g);
  });return;
}
if(s.type==="wow2"){const sl=pptx.addSlide();imageStatement(sl,"WOW Moment 02","SÔNG HƯƠNG - DÒNG SÔNG ÁNH SÁNG","Đêm trước ngày đua hoặc thời khắc bế mạc, dòng sông trở thành một installation phát sáng của ký ức, lời nhắn và niềm tin.");softCard(sl,7.42,4.52,4.78,1.38,C.w);txt(sl,"TRẢI NGHIỆM",7.68,4.8,1.2,0.14,{fs:9.5,c:C.gd,b:true});bulletList(sl,["Dải ánh sáng vàng - xanh tạo signature nhận diện trên mặt sông.","Lời nhắn gia đình hiển thị trên màn hình bờ sông hoặc livestream ticker.","Một visual đủ cinematic để social buzz vượt ra ngoài phạm vi Huế."],7.66,5.12,3.9,10.8,C.t,0.24);finalize(sl,n);return;}
if(s.type==="wow3"){
  content(n,"WOW Moment 03","Drone Tribute - Giữ Mái Chèo Di Sản","Một biểu tượng trên bầu trời để tuyên bố rằng cuộc đua này đã bước sang đẳng cấp mới.",sl=>{
    card(sl,0.9,2.26,3.5,3.14,"SEQUENCE 01","Mái chèo","Biểu tượng người giữ nhịp xuất hiện đầu tiên như lời chào của cả platform.",C.g,C.ltg);
    card(sl,4.92,2.26,3.5,3.14,"SEQUENCE 02","Dòng chảy","Từ con sông Huế mở ra ý niệm gia đình tiếp tục đi tới qua nhiều thế hệ.",C.b,C.ltb);
    card(sl,8.94,2.26,3.51,3.14,"SEQUENCE 03","Cúp và lời hẹn mùa sau","Khóa định vị cho năm đầu và mở lời hẹn cho signature property thường niên.",C.g,C.ltg);
  });return;
}
if(s.type==="journey"){
  content(n,"Experience Journey","Ngày sự kiện cần được viết như một đường cong cảm xúc, không phải một bảng giờ thi đấu.","Mỗi mốc thời gian đều phải có một vai trò rõ ràng: dựng ý nghĩa, tạo cao trào hoặc kéo dài ký ức.",sl=>{
    [["06:00","Khởi động cộng đồng","Check-in bờ sông, media warm-up, activation đầu ngày"],["07:00","Lễ tôn vinh người cầm lái","Mở màn bằng nghi thức và dignity"],["08:00","Đua vòng loại + kể chuyện trực tiếp","Livestream layer thêm narrative thương hiệu"],["10:30","Activation cộng đồng","Lời nhắn gia đình, social challenge, data capture"],["14:00","Chung kết + trao cúp","Cao trào cạnh tranh và vinh danh"],["18:30","Closing spectacle","Ánh sáng, drone, lời hẹn mùa sau"]].forEach((m,i)=>{const y=2.22+i*0.62;softCard(sl,0.9,y,11.55,0.48,i%2===0?C.w:C.l);txt(sl,m[0],1.12,y+0.13,0.75,0.16,{fs:12.4,b:true,c:C.gd});txt(sl,m[1],2.0,y+0.12,3.3,0.16,{fs:12.2,b:true,c:C.bd});txt(sl,m[2],5.38,y+0.12,5.8,0.16,{fs:11,c:C.t});});
  });return;
}
if(s.type==="imc"){
  content(n,"IMC Architecture","Một kiến trúc IMC mạnh phải làm ba việc cùng lúc: build meaning, create buzz, and accumulate value.","Thay vì một campaign ngắn hạn, đây là một system gồm ba phase có vai trò rõ ràng và chạm vào các kênh khác nhau.",sl=>{
    card(sl,0.9,2.32,3.2,2.3,"PHASE 1","Teasing & Meaning Build","Khơi mở hình tượng người giữ nhịp, kể về gia đình, dựng kỳ vọng cho event.",C.g,C.ltg);
    card(sl,4.45,2.32,3.2,2.3,"PHASE 2","Explosion & Event Day","Biến ngày đua thành national spectacle trên social, livestream và PR.",C.b,C.ltb);
    card(sl,8.0,2.32,3.2,2.3,"PHASE 3","Amplification & Legacy","Kéo dài tài sản nội dung, community goodwill và lead nurturing.",C.g,C.ltg);
    txt(sl,"CHANNEL SYSTEM",0.9,5.02,1.6,0.14,{fs:9.5,c:C.gd,b:true});
    ["Owned: social BVNT, landing page, CRM journey","Earned: PR văn hóa - cộng đồng - thương hiệu","Shared: TikTok, reels, livestream clips, UGC","Paid: OOH chọn lọc tại Huế / Đà Nẵng, digital video, boost short-form"].forEach((it,i)=>pill(sl,it,0.9+(i%2)*5.7,5.32+Math.floor(i/2)*0.46,i%2===0?5.25:5.55,i%2===0?C.b:C.g,9));
  });return;
}
if(s.type==="phase1"){
  content(n,"Phase 1 - Teasing","Dựng ý nghĩa trước khi dựng sân khấu.","Giai đoạn mở màn phải khiến công chúng cảm thấy đây không chỉ là một cuộc đua, mà là một biểu tượng đáng chờ đợi.",sl=>{
    card(sl,0.9,2.3,3.55,3.22,"CONTENT","Nội dung mồi cảm xúc","Short video về người giữ nhịp trong gia đình, poster series mái chèo - bàn tay - dòng sông, key visual countdown gắn với Huế và Quốc khánh.",C.g,C.ltg);
    card(sl,4.9,2.3,3.55,3.22,"PR","PR & câu chuyện cộng đồng","Kể chuyện đội ghe, người cầm lái, ký ức đua ghe và tham vọng nâng cấp giải đấu thành platform văn hóa mới.",C.b,C.ltb);
    card(sl,8.9,2.3,3.55,3.22,"SEEDING","Local to national seeding","Seeding tại Huế, Đà Nẵng, cộng đồng yêu văn hóa, travel creator và family voices để mở rộng biên độ thảo luận.",C.g,C.ltg);
  });return;
}
if(s.type==="phase2"){
  content(n,"Phase 2 - Explosion","Ngày sự kiện phải bùng nổ về hình ảnh lẫn khả năng chia sẻ.","Event day là cao trào của campaign, nhưng không được chỉ là phát sóng diễn biến thi đấu.",sl=>{
    card(sl,0.9,2.26,2.62,1.24,"LIVE","Livestream multi-layer","Có MC, visual package và narrative thương hiệu.",C.b,C.ltb);
    card(sl,3.74,2.26,2.62,1.24,"PR NÓNG","Instant newsroom","Ảnh nhanh, clip nhanh, quote nhanh cho báo chí.",C.g,C.ltg);
    card(sl,6.58,2.26,2.62,1.24,"SHORT-FORM","Reels / TikTok","Cắt ngay từ opening ritual, tăng tốc, trao cúp.",C.b,C.ltb);
    card(sl,9.42,2.26,3.03,1.24,"KOL PRESENCE","Local x national","Travel, culture, family, sports creators.",C.g,C.ltg);
    quoteBand(sl,"Bùng nổ phải có chủ đích: mọi khoảnh khắc đẹp đều phải dẫn về vai trò thương hiệu.",0.9,4.1,11.55,1.0,C.bd,C.w);
    bulletList(sl,["Media zone cần vantage point đủ đẹp để khóa hero shot cho báo chí và UGC.","Social team dựng realtime content hub ngay tại event, đăng trong 15-30 phút.","Livestream graphics dùng ngôn ngữ 'giữ nhịp - đi tiếp - chở che' thay vì chỉ scoreboard."],0.95,5.34,10.2,11.1,C.t,0.26);
  });return;
}
if(s.type==="phase3"){
  content(n,"Phase 3 - Amplification & Legacy","Sau cuộc đua, tài sản truyền thông và dữ liệu không được phép dừng lại.","Đây là nơi event chuyển hóa thành brand memory, earned credibility và commercial nurture.",sl=>{
    card(sl,0.9,2.28,3.62,3.06,"AMPLIFY","Kéo dài độ phủ","Aftermovie, recap film, photo essay, quote cards, PR tổng kết chuyển sự kiện thành cultural talking point.",C.g,C.ltg);
    card(sl,4.86,2.28,3.62,3.06,"ARCHIVE","Đóng gói thành tài sản","Xuất bản sổ tay 'Giữ Mái Chèo', landing page recap, gallery và case study cho mùa sau.",C.b,C.ltb);
    card(sl,8.82,2.28,3.63,3.06,"NURTURE","Nuôi dưỡng quan tâm","Nurturing lead theo nhóm đã tương tác, gửi nội dung ý nghĩa trước khi mở lựa chọn tư vấn mềm.",C.g,C.ltg);
  });return;
}
if(s.type==="activation"){
  content(n,"On-ground Activation","Ba lớp activation để chạm cảm xúc, mời tham gia và tạo visual spectacle.","Không nhiều booth. Chỉ vài trải nghiệm đủ mạnh, đủ đẹp và đủ nhớ.",sl=>{
    card(sl,0.9,2.28,4.1,3.68,"HERO ACTIVATION","Bến Nhắn Gửi Gia Đình","Khách tham dự viết lời nhắn cho người giữ nhịp của gia đình; lời nhắn được đưa lên màn hình, landing page hoặc social reel.",C.g,C.ltg);
    card(sl,5.25,2.28,3.1,1.74,"PARTICIPATORY","Nhịp Chèo Đồng Tâm","Game mô phỏng chèo theo nhịp đội để check-in, mini game và data capture.",C.b,C.ltb);
    card(sl,5.25,4.22,3.1,1.74,"SPECTACLE","Bức Tường Mái Chèo Di Sản","Installation mái chèo khổng lồ + ánh sáng, trở thành photo point signature của giải.",C.g,C.ltg);
    softCard(sl,8.65,2.28,3.8,3.68,C.w);
    txt(sl,"THIẾT KẾ NGUYÊN TẮC",8.92,2.58,2.2,0.16,{fs:9.5,c:C.gd,b:true});
    txt(sl,"Activation phải ít nhưng có khí chất; tạo cảm xúc và hình ảnh trước khi tạo sự ồn ào.",8.92,2.94,3.25,1.04,{fs:18,b:true,c:C.bd});
  });return;
}
if(s.type==="social"){
  content(n,"Social / PR / Viral Mechanics","Tạo độ phủ bằng nhiều lớp người kể chuyện, không phụ thuộc vào một viral stunt đơn lẻ.","Cơ chế lan tỏa cần được thiết kế như một hệ sinh thái nhẹ, linh hoạt và dễ tham gia.",sl=>{
    card(sl,0.9,2.28,2.72,2.86,"HASHTAG","#GiuMaiCheoDiSan","Tagline xã hội hóa toàn campaign, đi cùng hashtag phụ #DongChayKhongNgungLai.",C.g,C.ltg);
    card(sl,3.86,2.28,2.72,2.86,"TIKTOK CHALLENGE","#GiuNhipGiaDinh","Format kể về người giữ nhịp trong nhà bằng 1 câu chuyện ngắn hoặc 1 gesture tượng trưng.",C.b,C.ltb);
    card(sl,6.82,2.28,2.72,2.86,"UGC","Lời nhắn cho mái chèo","Khuyến khích người dùng viết một câu dành cho người đang gánh nhịp gia đình mình.",C.g,C.ltg);
    card(sl,9.78,2.28,2.67,2.86,"KOL / PR","Local + national mix","Nghệ sĩ Huế, creator văn hóa, voice về gia đình và MC/lifestyle mang độ tin cậy cao.",C.b,C.ltb);
  });return;
}
if(s.type==="film"){
  content(n,"Hero Film Direction","Một phim ngắn không kể về bảo hiểm, mà kể về người giữ nhịp để khán giả tự hiểu vì sao cần được chở che.","Mood cần cinematic, dignified, warm; không melodrama, không quảng cáo hóa quá sớm.",sl=>{
    quoteBand(sl,"Mở bằng nhịp chèo trên sông Hương. Đi qua chân dung người trụ cột. Chạm cao trào ở lễ tôn vinh. Khóa lại bằng một lời hứa thương hiệu.",0.9,2.24,7.1,3.66,C.bd,C.w);
    card(sl,8.28,2.24,4.18,1.62,"MOOD & TONE","Cinematic | dignified | warm","Hình ảnh tiết chế, cảm xúc sâu, nhịp dựng chậm đầu - nhanh cuối.",C.g,C.ltg);
    card(sl,8.28,4.1,4.18,1.8,"OUTPUT","30s | 60s | documentary cut","Dùng cho TVC online, event opening, recap page và PR assets.",C.b,C.ltb);
  });return;
}
if(s.type==="ecosystem"){
  content(n,"Content Ecosystem","Một idea tốt phải sinh ra nhiều format nội dung với vai trò rõ ràng.","Thay vì liệt kê asset rời rạc, nội dung nên được tổ chức như một kim tự tháp từ big story xuống touchpoint.",sl=>{
    softCard(sl,4.18,2.2,5.0,1.12,C.bd);txt(sl,"HERO CONTENT",5.95,2.48,1.5,0.16,{fs:10,c:"BFD5EA",b:true,a:"center"});txt(sl,"Hero film | main teaser | aftermovie",4.48,2.76,4.4,0.22,{fs:18,b:true,c:C.w,a:"center"});
    softCard(sl,2.4,3.62,8.55,1.12,C.ltb);txt(sl,"SOCIAL STORYTELLING / LIVE CONTENT",4.58,3.9,4.2,0.16,{fs:10,c:C.b,b:true,a:"center"});txt(sl,"Reels | TikTok | livestream clip | stills | crew stories",2.76,4.18,7.8,0.22,{fs:16.5,b:true,c:C.bd,a:"center"});
    softCard(sl,0.9,5.02,11.55,0.88,C.ltg);txt(sl,"PR CONTENT | PHOTO ESSAY | CRM FOLLOW-UP | RECAP PAGE | LEAD NURTURE",1.3,5.34,10.8,0.18,{fs:14,b:true,c:C.bd,a:"center"});
  });return;
}
if(s.type==="branding"){
  content(n,"Branding Integration","Hiện diện thương hiệu cần rõ ràng nhưng phải giữ được độ sang và sự tôn trọng bối cảnh văn hóa.","Tích hợp tốt là khi thương hiệu vừa được nhìn thấy, vừa được cảm thấy là có lý do để hiện diện.",sl=>{
    softCard(sl,0.9,2.3,5.45,3.36,C.w);
    txt(sl,"VISIBLE BRANDING",1.18,2.6,2.0,0.16,{fs:10,c:C.gd,b:true});
    ["Tên giải đấu và cúp vô địch","Backdrop, podium, pontoon, media wall","Livestream package, uniform key crew, banner chọn lọc"].forEach((it,i)=>pill(sl,it,1.18,3.04+i*0.54,3.8,i===1?C.b:C.g,9.2));
    softCard(sl,6.98,2.3,5.47,3.36,C.ltb);
    txt(sl,"MEANINGFUL BRANDING",7.26,2.6,2.2,0.16,{fs:10,c:C.b,b:true});
    ["Nghi lễ tôn vinh người cầm lái mang tên BVNT","Không gian lời nhắn gia đình và cúp di sản","Giải phụ cho đội ghe / câu chuyện truyền cảm hứng"].forEach((it,i)=>pill(sl,it,7.26,3.04+i*0.54,3.95,i===1?C.g:C.b,9.2));
  });return;
}
if(s.type==="lead"){
  content(n,"Lead Generation Logic","Sức nóng văn hóa không nên đứng riêng với mục tiêu kinh doanh; hai lớp này phải được nối thật mượt.","Không ép bán tại event. Dùng giá trị nội dung và cảm xúc để mở ra quan tâm có chất lượng.",sl=>{
    card(sl,0.9,2.32,3.55,2.9,"01 | ATTRACT","Entry points","QR, check-in, lời nhắn gia đình, activation và microsite event để kéo đúng đối tượng quan tâm.",C.b,C.ltb);
    card(sl,4.65,2.32,3.55,2.9,"02 | CAPTURE","Intent-based data","Phân nhóm theo nhu cầu gia đình, tích lũy, giáo dục con, bảo vệ thu nhập thay vì thu lead thô.",C.g,C.ltg);
    card(sl,8.4,2.32,4.05,2.9,"03 | NURTURE","Content-first follow-up","Gửi recap, câu chuyện ý nghĩa, nội dung hữu ích và chỉ mở lựa chọn tư vấn khi đúng thời điểm.",C.b,C.ltb);
  });return;
}
if(s.type==="impact"){
  content(n,"Expected Impact","Một nền tảng tốt phải tạo tác động đồng thời lên awareness, trust, perception và business momentum.","Tác động lớn nhất không chỉ ở reach, mà ở cách thương hiệu được nhìn nhận sau sự kiện.",sl=>{
    card(sl,0.9,2.22,2.7,1.08,"BRAND","Awareness + trust","Độ phủ lớn đi cùng chiều sâu cảm nhận.",C.b,C.ltb);
    card(sl,3.8,2.22,2.7,1.08,"CULTURE","Relevance + pride","Thương hiệu hiện diện như người gìn giữ.",C.g,C.ltg);
    card(sl,6.7,2.22,2.7,1.08,"BUSINESS","Lead + momentum","Tạo quan tâm chất lượng thay vì lead thô.",C.b,C.ltb);
    softCard(sl,0.9,3.56,5.85,2.35,C.ltb);
    txt(sl,"IMPACT ACROSS THE FUNNEL",1.18,3.84,2.2,0.16,{fs:9.5,c:C.b,b:true});
    txt(sl,"Awareness mạnh hơn. Trust sâu hơn. Relevance văn hóa rõ hơn.",1.18,4.2,4.9,0.58,{fs:22,b:true,c:C.bd});
    txt(sl,"Đề xuất này không chỉ tạo độ phủ cho ngày đua, mà còn giúp thương hiệu được nhớ bằng một vai trò có ý nghĩa và có khả năng tích lũy.",1.18,5.02,4.95,0.46,{fs:11.1,c:C.t});
    softCard(sl,7.05,3.56,5.4,2.35,C.w);
    txt(sl,"PERCEPTION SHIFT",7.3,3.82,1.8,0.16,{fs:9.5,c:C.gd,b:true});
    txt(sl,"Từ thương hiệu lớn sang thương hiệu lớn và giàu ý nghĩa.",7.3,4.2,4.5,0.54,{fs:22,b:true,c:C.bd});
    txt(sl,"Một câu chuyện bảo hiểm nhân thọ được kể bằng văn hóa, có quy mô, có chuẩn mực và có khả năng tích lũy dài hạn.",7.3,4.98,4.4,0.42,{fs:11.1,c:C.t});
  });return;
}
if(s.type==="kpi"){
  content(n,"KPI Framework","Đo theo ba lớp: sức lan tỏa, chất lượng cảm nhận và động lực kinh doanh.","KPI cần đủ executive để boardroom đọc nhanh, nhưng vẫn đủ rõ để đội triển khai bám vào.",sl=>{
    softCard(sl,0.9,2.24,5.55,3.64,C.w);
    txt(sl,"BRAND KPI",1.16,2.52,1.2,0.16,{fs:10,c:C.gd,b:true});
    [["Visibility","Reach, impressions, PR mentions, livestream views"],["Trust & message fit","Sentiment, message association, share of positive voice"],["Engagement quality","UGC volume, completion rate, dwell time, participation"]].forEach((r,i)=>{const y=2.9+i*0.92;softCard(sl,1.16,y,5.03,0.68,i===1?C.ltb:C.w);txt(sl,r[0],1.38,y+0.16,1.6,0.16,{fs:13,b:true,c:C.bd});txt(sl,r[1],1.38,y+0.38,3.9,0.16,{fs:10.6,c:C.s});});
    softCard(sl,6.82,2.24,5.63,3.64,C.ltb);
    txt(sl,"BUSINESS & PROPERTY KPI",7.08,2.52,2.0,0.16,{fs:10,c:C.b,b:true});
    [["Commercial momentum","Lead capture, qualified lead, consultation request"],["Property strength","Partner interest, return intent, year-2 sponsorship premium"],["Success definition","Brand được gắn với vai trò giữ nhịp gia đình và tạo quan tâm thực sự"]].forEach((r,i)=>{const y=2.9+i*0.92;softCard(sl,7.08,y,5.11,0.68,i===0?C.w:C.ltg);txt(sl,r[0],7.3,y+0.16,2.0,0.16,{fs:13,b:true,c:C.bd});txt(sl,r[1],7.3,y+0.38,4.2,0.16,{fs:10.6,c:C.s});});
  });return;
}
if(s.type==="annual"){
  content(n,"Annual Signature Property","Một signature property mạnh sẽ làm điều mà media buy không làm được: càng lặp lại càng có giá trị.","Nếu được xây đúng từ năm đầu, giải đua này có thể trở thành tài sản văn hóa thường niên mang tên Bảo Việt Nhân Thọ.",sl=>{
    card(sl,0.9,2.34,3.55,3.06,"YEAR 1","Birth","Khóa naming rights, sinh ra Big Idea và 3 WOW moments, tạo cảm nhận rằng đây là cuộc chơi nghiêm túc và xứng tầm.",C.g,C.ltg);
    card(sl,4.9,2.34,3.55,3.06,"YEAR 2","Scale","Mở rộng thành cultural week, tourism tie-in, family content platform và định giá lại premium tài trợ.",C.b,C.ltb);
    card(sl,8.9,2.34,3.55,3.06,"YEAR 3+","Own the ritual","Biến event thành nghi lễ văn hóa - thương hiệu mà công chúng chờ đợi mỗi mùa Quốc khánh.",C.g,C.ltg);
  });return;
}
if(s.type==="closing"){const sl=pptx.addSlide();imageStatement(sl,"Kết luận","Chúng ta không chỉ tài trợ một cuộc đua. Chúng ta giữ cho dòng chảy gia đình được tiếp tục.","Nếu làm đúng, Bảo Việt Nhân Thọ sẽ không chỉ hiện diện trong ngày đua 2026. Thương hiệu sẽ hiện diện trong một ký ức văn hóa sống cùng nhiều mùa tiếp theo.");softCard(sl,7.16,4.78,5.1,0.72,"EEF3F8");txt(sl,"GIỮ MÁI CHÈO HÔM NAY, CHỞ CHE MUÔN THẾ HỆ MAI SAU.",7.42,5.02,4.6,0.22,{fs:13,b:true,c:C.bd,a:"center"});finalize(sl,n);return;}
});

(async()=>{const out=path.join(__dirname,"output","scan_33.pptx");await pptx.writeFile({fileName:out});console.log(`Wrote ${out}`);})();



