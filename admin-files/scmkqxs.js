vbmkqxsn=xppr('mkqxs_0.gif');vbmkqxso=xppr('mkqxs_1.gif');vbmkqxsc=xppr('mkqxs_2.gif');vb5kqxsn=xppr('5kqxs_0.gif');vb5kqxso=xppr('5kqxs_1.gif');vb5kqxsc=xppr('5kqxs_2.gif');vbakqxsn=xppr('akqxs_0.gif');vbakqxso=xppr('akqxs_1.gif');vbakqxsc=xppr('akqxs_2.gif');var arrowChar='&raquo;';var btIdPref='vb';function xppr(im){var i=new Image();i.src='admin-files/bt'+im;return i;};function xpe(id){x=id.substring(0,id.length-1);if(document[btIdPref+x])document[btIdPref+x].src=eval(btIdPref+id+'.src');return false;};
var ulIdPref='vbUL_',imgIdPref='xpi_',hideTimeout=300,menuContId='xpMenuCont';function xpinit(){isDOM=document.getElementById;isOp=isO5=window.opera&&isDOM;isOp7=isOp&&document.readyState;isIE=document.all&&document.all.item&&!isOp;isNS4=document.layers;isMz=isDOM&&navigator.appName=="Netscape";document.write('<div id="'+menuContId+'" ></div>');var ULs=document.getElementsByTagName('UL');for(var i=0,cnt=ULs.length;i<cnt;i++)if(ULs[i].id&&(ULs[i].id.substring(0,ulIdPref.length)==ulIdPref)&&!((ULs[i].parentNode)&&(ULs[i].parentNode.parentNode)&&(ULs[i].parentNode.parentNode.id.substring(0,ulIdPref.length)==ulIdPref))){xpCreateMenu(ULs[i],0,0);};};xpinit();function xpObjectSize(o){var w=(isOp&&!isOp7)?o.style.pixelWidth:isNS4?o.clip.width:o.offsetWidth,h=(isOp&&!isOp7)?o.style.pixelHeight:isNS4?o.clip.height:o.offsetHeight;return{x:w,y:h};};function xpClientSize(){var x=0,y=0,w=0,h=0,doc=document,win=window,cond=(!doc.compatMode||doc.compatMode=='CSS1Compat')&&!win.opera&&doc.documentElement;if(cond&&doc.documentElement.clientHeight)h=doc.documentElement.clientHeight;else if(doc.body&&doc.body.clientHeight)h=doc.body.clientHeight;else if(xpDef(win.innerWidth,win.innerHeight,doc.width)){h=win.innerHeight;if(doc.width>win.innerWidth)h-=16;};if(cond&&doc.documentElement.clientWidth)w=doc.documentElement.clientWidth;else if(doc.body&&doc.body.clientWidth)w=doc.body.clientWidth;else if(xDef(win.innerWidth,win.innerHeight,doc.height)){w=win.innerWidth;if(doc.height>win.innerHeight)w-=16;};if(win.document.documentElement&&win.document.documentElement.scrollLeft)x=win.document.documentElement.scrollLeft;else if(win.document.body&&xpDef(win.document.body.scrollLeft))x=win.document.body.scrollLeft;if(win.document.documentElement&&win.document.documentElement.scrollTop)y=win.document.documentElement.scrollTop;else if(win.document.body&&xpDef(win.document.body.scrollTop))y=win.document.body.scrollTop;return{x:x,y:y,w:w,h:h};};function xpDef(){for(var i=0;i<arguments.length;++i){if(typeof(arguments[i])=='undefined')return false;};return true;};function xppos(obj){var l=0,t=0;while(obj){l+=obj.offsetLeft;t+=obj.offsetTop;obj=obj.offsetParent;};if(document.body)with(document){if(body.leftMargin)l-=body.leftMargin;if(body.topMargin)t-=body.topMargin};return{x:l,y:t};};function xpCreateMenu(ulParent,iParent,level){var menuCont=document.getElementById(menuContId),oMenu=document.createElement('div');menuCont.appendChild(oMenu);var oTable=document.createElement('table');oMenu.appendChild(oTable);oMenu.id=ulParent.id+'tbl';oMenu.className=ulParent.className;oMenu.style.position='absolute';oMenu.iParent=iParent;oMenu.level=level;oMenu.style.zIndex=9+oMenu.level;oTable.cellSpacing=0;oMenu.onmouseover=function(){xpsmover(this)};oMenu.onmouseout=function(){xpsmout(this)};oMenu.ClearMenuMark=function(){for(var j=0;j<this.childNodes[0].rows.length;j++){p=this.childNodes[0].rows[j];if(p.tagName=='TR'){p.className=p.className.replace('over','');if(p.className.indexOf('popup')<0)p.clrOverImg();};};};oMenu.smShown=0;for(var i=0,cntLI=ulParent.childNodes.length;i<cntLI;i++){var oLI=ulParent.childNodes[i];if(oLI.tagName=='LI'){var oItem=oTable.insertRow(-1);oItem.menu=oMenu;oItem.setPopup=function(){this.className+=' popup';};oItem.clrPopup=function(){this.className=this.className.replace('popup','');if(this.className.indexOf('over')<0)this.clrOverImg();};oItem.clrOverImg=function(){if(this.Img)this.Img.style.display='inline';if(this.ImgOver)this.ImgOver.style.display='none';if(this.ImgArrow)this.ImgArrow.style.display='inline';if(this.ImgArrowOver)this.ImgArrowOver.style.display='none'};oItem.className=oLI.className;var InnerAnchor=0;oItem.Img=null;oItem.ImgOver=null;var InnerUl=0;oItem.ImgArrow=null;oItem.ImgArrowOver=null;for(var j=0;j<oLI.childNodes.length;j++)if(oLI.childNodes[j].tagName=='A')InnerAnchor=oLI.childNodes[j];else if(oLI.childNodes[j].tagName=='IMG'){if(!InnerAnchor){if(!oItem.Img)oItem.Img=oLI.childNodes[j];else oItem.ImgOver=oLI.childNodes[j]}else{if(!oItem.ImgArrow)oItem.ImgArrow=oLI.childNodes[j];else oItem.ImgArrowOver=oLI.childNodes[j]};}else if(oLI.childNodes[j].tagName=='UL')InnerUl=oLI.childNodes[j];if(InnerAnchor||InnerUl||oItem.ImgArrow){var oTDIMG=oItem.insertCell(-1),oTDLabel=oItem.insertCell(-1),oTDArrow=oItem.insertCell(-1);oTDIMG.style.borderRightWidth='0px';oTDLabel.style.borderRightWidth='0px';oTDLabel.style.borderLeftWidth='0px';oTDArrow.style.borderLeftWidth='0px';oTDIMG.style.paddingRight='4px';oTDLabel.style.paddingRight='4px';oTDLabel.style.paddingLeft='4px';oTDArrow.style.paddingLeft='4px';if(oItem.Img)oTDIMG.appendChild(oItem.Img);else oTDIMG.innerHTML='&nbsp;';if(oItem.ImgOver){oItem.ImgOver.style.display='none';oTDIMG.appendChild(oItem.ImgOver);};if(InnerAnchor)oTDLabel.appendChild(InnerAnchor);else oTDLabel.innerHTML='&nbsp;';oItem.onmouseover=function(){this.menu.ClearMenuMark();this.className+=' over';if(this.ImgOver){this.Img.style.display='none';this.ImgOver.style.display='inline'};if(this.ImgArrowOver){this.ImgArrow.style.display='none';this.ImgArrowOver.style.display='inline'};if(this.smPopupId)xpshowmenu(this.smPopupId,1,this);else if(this.menu.smShown)xpStartTimeOut(this.menu.smShown);};oItem.onmouseout=function(){this.menu.ClearMenuMark();};if(InnerUl){oTDArrow.className='arrow';if(oItem.ImgArrow){oTDArrow.appendChild(oItem.ImgArrow);if(oItem.ImgArrowOver){oItem.ImgArrowOver.style.display='none';oTDArrow.appendChild(oItem.ImgArrowOver)}}else{if(typeof(arrowChar)!='undefined'&&arrowChar){oTDArrow.appendChild(document.createElement('a'));oTDArrow.lastChild.innerHTML=arrowChar;}else oTDArrow.innerHTML='&nbsp;';};oItem.smPopupId=xpCreateMenu(InnerUl,oItem,level+1);}else oTDArrow.innerHTML='&nbsp;';}else{var oTD=oItem.insertCell(-1);oTD.colSpan=3;oTD.innerHTML='<div></div>';};};};return oMenu.id;};function xpshow(ind,isVertical,iParent){xpshowmenu(ulIdPref+ind+'tbl',isVertical,iParent);};function xpshowmenu(menuID,isVertical,iParent){var menu=document.getElementById(menuID);if(!menu)return;if(menu.style.visibility=='visible'){xpStopTimeOut(menu);return;};if(iParent&&iParent.menu&&iParent.menu.smShown)xphide(iParent.menu.smShown.id);if(!menu.level&&(ShownMenu!=menu))xphide(ShownMenu.id);if(!menu.level)xobtn=menuID.replace(ulIdPref,'').replace('tbl','');var parentObj;if(iParent.tagName=='A'){parentObj=iParent.parentNode;}else parentObj=iParent;var pos=xppos(parentObj),size=xpObjectSize(parentObj);menu.goMenuX=1;menu.goMenuDx=1;if(menu.level>0){menu.goMenuX=menu.iParent.menu.goMenuX;menu.goMenuDx=menu.iParent.menu.goMenuDx;};menu.style.overflow='visible';menu.style.height='auto';menu.style.width='auto';menu.style.left='0px';menu.style.top='0px';var parentAbs=xppos(menu),WinSize=xpClientSize(),menuSize=xpObjectSize(menu),CalcedPos=xp_CalcMenuPos(WinSize.y,WinSize.h,pos.y,size.y,menuSize.y,menu.goMenuDx,isVertical);menu.goMenuDx=CalcedPos.align;if(isOp&&!menu.OrigWidth)menu.OrigWidth=menu.clientWidth;if(CalcedPos.size<menuSize.y){menu.style.overflow='auto';if(isIE)menu.style.overflowX='visible';if(isIE)menu.style.width=menu.offsetWidth+17+'px';else if(isMz)menu.style.magrinRight=20;menu.style.height=CalcedPos.size+'px';menu.scrollTop=0;menu.scrollLeft=0;if(isOp)menu.style.width=menu.OrigWidth+'px';}else{};menu.style.top=CalcedPos.xy-parentAbs.y+'px';menuSize=xpObjectSize(menu);CalcedPos=xp_CalcMenuPos(WinSize.x,WinSize.w,pos.x,size.x,menuSize.x,menu.goMenuX,!isVertical);menu.goMenuX=CalcedPos.align;if(CalcedPos.size<menuSize.x)if(menu.goMenuX>0)CalcedPos.xy-=(menuSize.x-CalcedPos.size);menu.style.left=CalcedPos.xy-parentAbs.x+'px';menu.style.visibility='visible';if(!menu.level)ShownMenu=menu;else{iParent.menu.smShown=menu;iParent.setPopup();};};function xp_CalcMenuPos(screenXY,screenSize,parentXY,parentSize,size,align,oHoriz){var xy=parentXY,newSize=size,newAlign=align,space=5;if((align==0)&&(!oHoriz))align=1;if(!oHoriz){if(((newAlign>=0)&&(parentXY+parentSize+size>screenSize+screenXY-space))||((newAlign<0)&&(parentXY-size<space))){if(parentXY-screenXY>screenSize+screenXY-(parentXY+parentSize))newAlign=-1;else newAlign=1;};if(newAlign>=0){xy=parentXY+parentSize;if(screenSize+screenXY-space-xy<newSize)newSize=screenSize+screenXY-space-xy;}else{xy=parentXY-newSize;if(xy-screenXY<space){xy=space+screenXY;newSize=parentXY-space-screenXY;};};}else{if(newSize>screenSize-2*space){xy=space+screenXY;newSize=screenSize-2*space;}else{xy=parentXY+parentSize/2-newSize/2+newAlign*(newSize/2-parentSize/2);if(xy<space+screenXY){newAlign=1;xy=space+screenXY;};if(xy+size>screenSize+screenXY-space){newAlign=-1;xy-=xy+newSize-(screenSize+screenXY-space);};};};return{xy:xy,size:newSize,align:newAlign};};function xphide(menuId){var menu=document.getElementById(menuId);if(!menu)return;if(menu.style.visibility=='visible'){if(menu.smShown)xphide(menu.smShown.id);menu.ClearMenuMark();menu.style.visibility='hidden';if(menu.level==0){xpe(xobtn+'n');};menu.smShown=0;if(menu.iParent)menu.iParent.clrPopup();if(menu.hideTimer){clearTimeout(menu.hideTimer);menu.hideTimer=null;};};};function xpsmout(sender){if(!sender)return;xpStartTimeOut(ShownMenu)};function xpsmover(menu){if(!menu)return;xpStopTimeOut(menu);};function xpStopTimeOut(menu){for(var o=menu;o;o=o.iParent?o.iParent.menu:0)if(o.hideTimer)o.hideTimer=clearTimeout(o.hideTimer);};function xpStartTimeOut(menu){for(var o=menu;o;o=o.smShown){var code='xphide("'+o.id+'");';if(!o.hideTimer&&o.id)o.hideTimer=setTimeout(code,hideTimeout);};};var ShownMenu=0,xobtn=null;
