//!function(){
let VERSION=124,displayedAd=!0,ldl=firebase,color_hex=[0x61,0x74,0x6f,0x62],DB,$scl=1,$posX=0,$posY=0,$upldPicCng=!1,$update=!1,$rcvr='',$hdrObj={},$frnd=[],hexa=color_hex,$contact=!1,$gotmsg='',$_=!1,$snap=!1,$callAccepted=true,acceptCall,$chat_id,declineCall,resKey,endCall,isCaller=!1,localStream=null,callTimer=null,calleeTimer=null,remoteStream=null,peerConn=null,servers={iceServers:[{urls:'stun:stun.l.google.com:19302'}]},setTypeIndicator,myTypeListener,$srx=!1,$srx_con=[],$tempHdr=[],$lastUsr,$ix=1,clearPos=0,usf=window[String.fromCharCode(...hexa)],$1stTime=localStorage.fst||'yes',lastElem,oneTime=true,lastKey,adTime=0;

let $key='',$sgn_err_code=-1,$buddy,log_kit,sign_kit,cng_kit,srx_kit,apListData=null,typingEl=null,kaiads=null,adTimer=Date.now(),$ipa=usf('TnpCa01EaGtaamcyT1RKbE9UWXdNV013WW1Jd1pEUmhOV0ZoWmpnNU56VQ'),ccl=-1,db,auth,realDB,storage,xedo=JSON.parse(usf('eyJhcGlLZXkiOiJRVWw2WVZONVEzZHdjWEZuUm1oVVpEZFVTVFJvVUZGbE5tazNWR2hyYVRWVE9WRkJUVVZqIiwiYXV0aERvbWFpbiI6IlkyaGhkSGRoZG1VdFpUVmpOVFl1Wm1seVpXSmhjMlZoY0hBdVkyOXQiLCJwcm9qZWN0SWQiOiJZMmhoZEhkaGRtVXRaVFZqTlRZIiwic3RvcmFnZUJ1Y2tldCI6IlkyaGhkSGRoZG1VdFpUVmpOVFl1Wm1seVpXSmhjMlZ6ZEc5eVlXZGxMbUZ3Y0EiLCJtZXNzYWdpbmdTZW5kZXJJZCI6Ik16STNNakF6TWpJeU1qQTUiLCJhcHBJZCI6Ik1Ub3pNamN5TURNeU1qSXlNRGs2ZDJWaU9qZzVNRGswWXprek0yVXlOMkl3TURjMU1HUmhOREEiLCJtZWFzdXJlbWVudElkIjoiUnkxRVExSkRRemRFVGxFMCJ9'));

let $nonReg=true,allUsr=false;

for(let prop in xedo)xedo[prop]=usf(xedo[prop]);
ldl.initializeApp(xedo),db=ldl.firestore(),storage=ldl.storage(),auth=ldl.auth(),realDB=ldl.database();
usf=function(ssr){return decodeURIComponent(ssr)};
navigator.mozAudioChannelManager&&(navigator.mozAudioChannelManager.volumeControlChannel='content');

function isOnline() {
  const xhr=new XMLHttpRequest({mozSystem:true});
  xhr.open('GET',`https://httpstat.us/204?nocache=${Date.now()}`,true);
  xhr.timeout=5000;
  xhr.onload=(e)=>{
    updatObserv();
    getApps();
  },
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
      if (true||xhr.status===200||xhr.status===204) {
        auth.onAuthStateChanged((user) => {
          if (user) {
            if($key!=='upldPic'){
              buddies.style='display:block;';
              getUsr();
              realDB.ref('.info/connected').on('value',snap=>{
                if(!snap.val())return;
                realDB.ref('/status/'+user.uid).onDisconnect().set({
                  status: "Offline",
                  lastSeen: ldl.database.ServerValue.TIMESTAMP
                }).then(()=>{
                  realDB.ref('/status/'+user.uid).set({
                    status: "Active",
                    lastSeen: ldl.database.ServerValue.TIMESTAMP
                  });
                });
              });
              realDB.ref(`/messages/${user.uid}`).on('child_added',snap=>{
                let uid=snap.val();
                if($rcvr!==uid){
                  if($hdrObj[uid]){
                    buddies_list.insertBefore($hdrObj[uid].buddy,buddies_list.children[0]);
                    if($key==='buddies'){
                      buddies_list.children[0].focus();
                    }
                    buddies_list.children[0].children[2].style='display:block;';
                    buddies_list.children[0].style='font-weight:bold;';
                    msg_notify.innerHTML=`<img src="${$hdrObj[uid].img}" style="width: 45px;height: 45px;position:relative;top: 0px;left: 0px;"><div style="width: 8px;height: 8px;position:relative;top: -20px;left: -3px;background: red;border-radius: 50%;color: #fff;font-family:sans-serif;padding: 0 6px 8px 3px;">1</div>`;
                    msg_notify.style='display:block;';
                    setTimeout(()=>{msg_notify.style='display:block;animation:ltr 0.5s;'},5e3);
                    setTimeout(()=>{msg_notify.style=''},5400);
                  }else{
                    db.collection("users").doc(uid).get().then(usr=>{
                      let user=usr.data();
                      $hdrObj[user.uid]={img:user.photoURL,name:user.name,buddy:elem('div',{innerHTML:`<div class="pro_pic"><img src="${user.photoURL}"></div><div class="pro_name"><span>${user.name}</span><br><span class=""></span></div><div class="got_msg"></div>`},{class:`buddy`,tabindex:$ix++},{click:(e)=>{$_=!0,loadMessages(e.target,user.uid,user.name,user.photoURL);}})};
                      buddies_list.insertBefore($hdrObj[user.uid].buddy,buddies_list.children[0]);
                      realDB.ref('/status/'+user.uid).on('value', snap => {
                        const data=snap.val();
                        if(data){
                          if(data.status==='Active'){
                            let sta=$hdrObj[user.uid].buddy.children[1].children[2];
                            $hdrObj[user.uid]['status']=sta.innerText='Active now',sta.className='Active';
                            $rcvr===user.uid&&(guy_state.innerText='Active now');
                          }else{
                            let sta=$hdrObj[user.uid].buddy.children[1].children[2],sta_str='Last active: '+dateNtime(data.lastSeen);
                            $hdrObj[user.uid]['status']=sta.innerText=sta_str,sta.className='Offline';
                            $rcvr===user.uid&&(guy_state.innerText=sta_str);
                          }
                        }else{
                          let sta=$hdrObj[user.uid].buddy.children[1].children[2],sta_str='Last active: '+formatTimestamp(user.createdAt,!1);
                          $hdrObj[user.uid]['status']=sta.innerText=sta_str,sta.className='Offline';
                          $rcvr===user.uid&&(guy_state.innerText=sta_str);
                        }
                      });
                      buddies_list.children[0].children[2].style='display:block;',buddies_list.children[0].style='font-weight:bold;';
                      msg_notify.innerHTML=`<img src="${$hdrObj[uid].img}" style="width: 45px;height: 45px;position:relative;top: 0px;left: 0px;"><div style="width: 8px;height: 8px;position:relative;top: -20px;left: -3px;background: red;border-radius: 50%;color: #fff;font-family:sans-serif;padding: 0 6px 8px 3px;">1</div>`;
                      msg_notify.style='display:block;';
                      setTimeout(()=>{msg_notify.style='display:block;animation:ltr 0.5s;'},5e3);
                      setTimeout(()=>{msg_notify.style=''},5400);
                    });
                  }
                  msg_odo.play();
                }
              });
              realDB.ref(`calls/${user.uid}`).on('value', snap => {
                const data = snap.val();
                if (data && data.status === 'calling' && oneTime) {
                  isCaller=false;oneTime=false;$callAccepted=true;
                  let {offer, callerId} = data;
                  offer=JSON.parse(offer);
                  realDB.ref(`calls/${user.uid}/status`).onDisconnect().set('ended');
                  showIncomingCallUI(callerId);
                  acceptCall=function(){
                    navigator.mediaDevices.getUserMedia({ audio: true }).then(stream=>{
                      localStream = stream;
                      peerConn = new RTCPeerConnection(servers);
                      localStream.getTracks().forEach(track => peerConn.addTrack(track, localStream));
                      setupICEListeners(user.uid);
                      peerConn.setRemoteDescription(new RTCSessionDescription(offer)).then(()=>{
                        peerConn.markRemoteDescSet();
                        peerConn.createAnswer().then(answer=>{
                          peerConn.setLocalDescription(answer).then(()=>{
                            ring_odo.pause();
                            realDB.ref(`calls/${user.uid}/answer`).set(JSON.stringify(answer)).then(()=>{
                              realDB.ref(`calls/${user.uid}/status`).set('accepted');
                            });
                          });
                        });
                      });
                    }).catch(err=>{console.log(err)});
                  };
                  declineCall=function(){
                    realDB.ref(`calls/${user.uid}/status`).set('declined');
                    realDB.ref(`calls/${user.uid}`).remove();
                    peerConn&&peerConn.close();
                    localStream.getTracks().forEach(track => track.stop());
                    callee.parentElement.style='';
                    ring_odo.pause();
                    $key=resKey;
                  };
                  endCall=function(){
                    realDB.ref(`calls/${user.uid}/status`).set('ended');
                    realDB.ref(`calls/${user.uid}/iceCandidates/caller`).off();
                    oneTime=true;
                  }
                }
                else if(data && data.status === 'ended'){
                  setTimeout(()=>{realDB.ref(`calls/${user.uid}`).remove()},500);
                  calleeTimer&&(clearInterval(calleeTimer),realDB.ref(`calls/${user.uid}/iceCandidates/caller`).off(),calleeTimer=null);
                  peerConn&&peerConn.close();
                  localStream&&localStream.getTracks().forEach(track => track.stop());
                  call_odo.pause();
                  callee.parentElement.style='';oneTime=true;
                  ring_odo.pause();
                  $callAccepted=true;
                  is_accept.style='';
                  resKey&&($key=resKey,resKey='');
                }else if(data && data.status === 'accepted'){
                  ring_odo.pause();
                  $callAccepted=false;
                  let d=Date.now();
                  caller_state.innerHTML='00:00';
                  is_accept.style='display:none;';
                  calleeTimer&&clearInterval(calleeTimer);
                  calleeTimer=setInterval(()=>{
                    if(calleeTimer!==null){
                      let s=Math.floor((Date.now()-d)/1000),m=Math.floor(s/60);
                      s=s%60;
                      caller_state.innerHTML=('0'+m).slice(-2)+':'+('0'+s).slice(-2);
                    }
                  },1e3);
                } else if(data&&data.status==='declined'){
                  callee.parentElement.style='';
                  ring_odo.pause();
                  $key=resKey;
                }
              });
            }
          }
          else{
            if($1stTime==='yes'){
              localStorage.fst='no';
              login_board.style='display:block;',prog_bar.style='display:none;';
              setTimeout(()=>{fstFlow()},1e3);
            }else{
              $key='logink',prog_bar.style='display:none;',login_board.style='display:block;',log_kit[0].focus();
              if($update){
                setTimeout(()=>{
                  update_notice.parentElement.style='display:block;';
                  $key='update';
                  fullAds();
                }, 3e3);
              }
            }
          }
        });
      } else {
        prog_bar.style='display:none;';
        no_internet.parentElement.style='display:block;';
        $key='no_internet';
      }
    }
  },
  xhr.onerror=(err)=>{
    prog_bar.style='display:none;';
    no_internet.parentElement.style='display:block;';
    $key='no_internet';
    if($1stTime==='no'){fullAds();}
  },
  xhr.ontimeout = function () {
    prog_bar.style='display:none;';
    no_internet.parentElement.style='display:block;';
    $key='no_internet';
    if($1stTime==='no'){fullAds();}
  },
  xhr.send();
} isOnline();

function getApps() {
  const xhr=new XMLHttpRequest({mozSystem:true});
  xhr.open('GET','http://popbd.wapgem.com/kaiapps/apps.txt',true);
  xhr.responseType='json';
  xhr.onload=(e)=>{
    apListData=e.currentTarget.response;
  },
  xhr.onerror=(err)=>{
    apListData=null;
  },
  xhr.send();
}

function fstFlow(){
  ['More Apps','Help','Contact Us'].forEach((el,il)=>{
    log_opt.appendChild(elem('div',{innerText:el},{class:'logopt',tabindex:il},{click:(e)=>{opts(el)}}));
  });
  log_opt.appendChild(elem('div',{innerText:'Exit'},{class:'logopt',style:'border:none;',tabindex:3},{click:(e)=>{opts('Exit')}}));
  log_opt.style='display:block;';
  log_opt.children[0].focus();
  setTimeout(()=>{
    log_opt.children[1].focus();
    setTimeout(()=>{
      let strr='Please read the instructions below before using the app.'.split(''),slen=strr.length;
      help_ins.innerHTML='';
      opts('Help');
      $key='';
      setTimeout(()=>{
        let intrr=setInterval(()=>{
          if(strr.length>0){help_ins.innerHTML+=strr.shift()}
          else{
            $key='help',
            fullAds(),
            clearInterval(intrr);
          }
        },70);
      },300);
      setTimeout(()=>{log_opt.style='',log_opt.innerHTML=''},230);
    },1e3);
  },1e3);
}

function listenForGotMsg() {
  prog_bar.style='display:none;';
  $_=!0;
  setTimeout(()=>{
    if($update){
      setTimeout(()=>{
        update_notice.parentElement.style='display:block;z-index:300;';
        $key='update';
        fullAds();
      }, 3e3);
    }else{
      fullAds();
    }
  },50);
}

function _hide(s='Completed!') {
  filler.style.width='100%',
  setTimeout(()=>{filler.innerText=s}, 285),
  setTimeout(()=>{
    navigator.spatialNavigationEnabled=!0,
    loading.style.display='none',
    filler.innerText='',
    filler.style.width='1%'
  }, 2400)
}

function _loading() {
  loading.style.display='block',
  filler.style.width='1%'
}

function elem(name, content, attr, listener) {
  let el=document.createElement(name);
  if(attr)for(let atr in attr)el.setAttribute(atr, attr[atr]);
  if(content)for(let con in content)el[con]=content[con];
  if(listener)for(let lis in listener)el.addEventListener(lis,listener[lis]);
  return el;
}

function move(n){
  let actv=document.activeElement.tabIndex+n;
  log_kit[actv<0?0:actv>4?4:actv].focus();
  if(actv==0)return login_board.scrollTop=0;
  if(actv==4)return login_board.scrollTop=login_board.scrollHeight;
}
function movec(n){
  let actv=document.activeElement.tabIndex+n,el;
  (el=cng_kit[actv<0?0:actv>3?3:actv]).focus();
  if(actv==0)return cng_pass.scrollTop=0;
  if(actv==3)return cng_pass.scrollTop=cng_pass.scrollHeight;
  el.value&&el.select();
}
function movesrx(n){
  let actv=document.activeElement.tabIndex+n,el;
  (el=srx_kit[actv<0?0:actv>1?1:actv]).focus();
  el.value&&el.select();
}
function moveu(n){
  let actv=document.activeElement.tabIndex+n,el;
  (el=sign_kit[actv<0?0:actv>4?4:actv]).focus();
  el.value&&el.select();
  if(actv==0)return signup_board.scrollTop=0;
  if(actv==4)return signup_board.scrollTop=signup_board.scrollHeight;
}
function buddy_move(n){
  if(n>0){
    let actv=document.activeElement.nextElementSibling;
    if(actv)actv.focus();
  } else{
    let actv=document.activeElement.previousElementSibling;
    if(actv)actv.focus();
  }
}
function srx_buddy_move(n){
  if(n>0){
    let actv=document.activeElement.nextElementSibling;
    if(actv)actv.focus();
    else srx_buddies_list.children[0].focus();
  } else{
    let actv=document.activeElement.previousElementSibling;
    if(actv)actv.focus();
    else srx_buddies_list.children[srx_buddies_list.children.length-1].focus();
  }
}

function dateNtime(ms){
  const date=new Date(ms),hours=('0'+date.getHours()).slice(-2),minutes=('0'+date.getMinutes()).slice(-2),day=('0'+date.getDate()).slice(-2),month=('0'+(date.getMonth()+1)).slice(-2),year=date.getFullYear().toString().slice(-2);
  return `${day}/${month}/${year} ${hours}:${minutes}`;
}

function delOldMsg(n){
  const messagesRef = db.collection('chats').doc($chat_id).collection('messages').orderBy('timestamp','desc').get().then(snaps=>{
    const allSnap = snaps.docs,
    lstMsg = allSnap.slice(0, 15),
    delMsg = allSnap.slice(15);
    if(delMsg.length>0){
      let batch = db.batch();
      function delSnap(n=0){
        if(n>=delMsg.length||n===499){
          return batch.commit();
        }
        let data=delMsg[n].data();
        if(data.text.includes('https://firebasestorage.googleapis.com')){
          try{
            storage.refFromURL(data.text).delete().then(()=>{
              batch.delete(delMsg[n++].ref);
              delSnap(n);
            }).catch((error)=>{
              batch.delete(delMsg[n++].ref);
              delSnap(n);
            });
          }catch(e){
            batch.delete(delMsg[n++].ref);
            delSnap(n);
          }
        }
        else{
          batch.delete(delMsg[n++].ref);
          delSnap(n);
        }
      }
      delSnap();
    }
  });
}

function loadMoreUsr(prg) {
  let getUxData=true;
  if (!$lastUsr){
    $key='buddies';
    buddies_list.innerHTML = `<div style="margin:auto;font-size:22px;text-align:center;color:#bb0b63;margin-top:75px;">You've viewed all users in this list. New people may join later!</div>`;
    return;
  }
  const currentUser=auth.currentUser;
  $key='';
  see_more_btn.innerHTML='<img src="img/loadn.png" style="position:relative;top:2px;width:26px;"> <span style="position:relative;top:-3px;">Loading</span>';
  db.collection("users").where("uid", "!=", currentUser.uid).orderBy("uid").startAfter($lastUsr).limit(50).get()
  .then(snapshot => {
    if(!snapshot.empty){
      $lastUsr=snapshot.docs[snapshot.docs.length-1];
      buddies_list.innerHTML = "";
      function recrs(len=0){
        let user = snapshot.docs[len++].data(),dex=user.photoURL.split('#proimg')[1],x=0,y=0,scl=1;
        if(!$hdrObj[user.uid]){
          if(dex){
            dex=dex.split('_');
            x=dex[0],y=dex[1],scl=dex[2];
          }
          $hdrObj[user.uid]={img:user.photoURL,name:user.name,dex:{x:x,y:y,scl:scl},buddy:elem('div',{innerHTML:`<div class="pro_pic"><img src="${user.photoURL}" style="top:${48/120*y}px;left:${48/120*x}px;transform:scale(${scl});"></div><div class="pro_name"><span>${user.name}</span><br><span class=""></span></div><div class="got_msg"></div>`},{class:`buddy`,tabindex:$ix++},{click:(e)=>{$_=!0,loadMessages(e.target,user.uid,user.name,user.photoURL);}})};
          buddies_list.appendChild($hdrObj[user.uid].buddy);
          if(buddies_list.children.length===1){
            prog_bar.style.display='none';
            buddies_list.children[0].focus();
            $key='buddies';
          }
          realDB.ref('/status/'+user.uid).on('value', snap => {
            const data=snap.val();
            $hdrObj[user.uid]['regis']=true;
            if(data){
              if(data.status==='Active'){
                let sta=$hdrObj[user.uid].buddy.children[1].children[2];
                $hdrObj[user.uid]['status']=sta.innerText='Active now',sta.className='Active';
                $rcvr===user.uid&&(guy_state.innerText='Active now');
              }else{
                let sta=$hdrObj[user.uid].buddy.children[1].children[2],sta_str='Last active: '+dateNtime(data.lastSeen);
                $hdrObj[user.uid]['status']=sta.innerText=sta_str,sta.className='Offline';
                $rcvr===user.uid&&(guy_state.innerText=sta_str);
              }
            }else{
              let sta=$hdrObj[user.uid].buddy.children[1].children[2],sta_str='Last active: '+formatTimestamp(user.createdAt,!1);
              $hdrObj[user.uid]['status']=sta.innerText=sta_str,sta.className='Offline';
              $rcvr===user.uid&&(guy_state.innerText=sta_str);
            }
            if(allUsr&&len<snapshot.docs.length){
              getUxData&&recrs(len);
            }
            else{
              if(allUsr&&getUxData&&snapshot.size===50){
                buddies_list.appendChild($hdrObj['see_more']);
              }
              see_more_btn.innerHTML='See More';
              getUxData=false;
            }
          });
        }
        else{
          if(!buddies_list.contains($hdrObj[user.uid].buddy))buddies_list.appendChild($hdrObj[user.uid].buddy);
          if(buddies_list.children.length===1){
            prog_bar.style.display='none';
            buddies_list.children[0].focus();
            $key='buddies';
          }
          if(allUsr&&len<snapshot.docs.length){
            recrs(len);
          }
          else{
            if(allUsr&&snapshot.size===50){
              buddies_list.appendChild($hdrObj['see_more']);
            }
            see_more_btn.innerHTML='See More';
            getUxData=false;
          }
        }
      }
      recrs();
    }else{
      $key='buddies';
      buddies_list.innerHTML = `<div style="margin:auto;font-size:22px;text-align:center;color:#bb0b63;margin-top:75px;">You've viewed all users in this list. New people may join later!</div>`;
    }
  });
}

function getUsr() {
  const currentUser = auth.currentUser;
  db.collection("users").doc(currentUser.uid).get().then(me=>{
    me=me.data();
    $frnd=me.friends;
    $gotmsg=me.gotmsg;
    $frnd[0]||($snap=!0);
    let dex=me.photoURL.split('#proimg')[1],x=0,y=0,scl=1;
    if(dex){
      dex=dex.split('_');
      x=dex[0],y=dex[1],scl=dex[2];
    }
    usr_iden.innerHTML=`<div style="display:inline-block;width:30px;height:30px;border-radius:50%;overflow:hidden;text-align:center;"><img src="${me.photoURL}" style="width:30px;position:relative;top:${30/120*y}px;left:${30/120*x}px;transform:scale(${scl});"></div> <span style="position:relative;top:-8px;">${me.name}</span>`;
    actorall.innerHTML='<span style="position:relative;top:6px;">Active Users</span>';
    my_profile.innerHTML=`<div style="padding:0px;width:120px;height:120px;border-radius:50%;overflow:hidden;margin:auto;text-align:center;"><img src="${me.photoURL}" style="width:120px;position:relative;top:${y}px;left:${x}px;transform:scale(${scl});"></div><div style="font-size:22px;"><b>${me.name}</b></div><div>Email: ${me.email}</div><div>Profile created at ${me.createdAt.toDate()}`;
    cnv_img.src=me.photoURL;
    cnv_img.style=`width:120px;position:relative;top:${y}px;left:${x}px;transform:scale(${scl});`;
  })
  .then(()=>{
    $hdrObj={see_more:elem('div',{innerHTML:`See More`},{id:'see_more_btn',tabindex:0},{click:(e)=>{loadMoreUsr(e.target)}})};
    realDB.ref('/status').orderByChild('status').equalTo('Active').limitToFirst(50)
    .once('value', snap => {
      let data = snap.val()||{}, actUid = Object.keys(data);
      
      if(actUid.includes(auth.currentUser.uid)){
        actUid.splice(actUid.indexOf(auth.currentUser.uid),1);
      }
      
      function renderActUsr(n=0){
        if(!$hdrObj[actUid[n]]){
          db.collection("users").doc(actUid[n++]).get().then(usr=>{
            let user=usr.data(),dex=user.photoURL.split('#proimg')[1];
            let x=0,y=0,scl=1;
            if(dex){
              dex=dex.split('_');
              x=dex[0],y=dex[1],scl=dex[2];
            }
            $hdrObj[user.uid]={img:user.photoURL,name:user.name,dex:{x:x,y:y,scl:scl},status:"Active now",buddy:elem('div',{innerHTML:`<div class="pro_pic"><img src="${user.photoURL}" style="top:${48/120*y}px;left:${48/120*x}px;transform:scale(${scl});"></div><div class="pro_name"><span>${user.name}</span><br><span class="Active">Active now</span></div><div class="got_msg"></div>`},{class:`buddy`,tabindex:$ix++},{click:(e)=>{$_=!0,loadMessages(e.target,user.uid,user.name,user.photoURL);}})};
            buddies_list.appendChild($hdrObj[user.uid].buddy);
            if(buddies_list.children.length===1){
              prog_bar.style.display='none';
              buddies_list.children[0].focus();
              $key='buddies';
            }
            if(n<actUid.length){
              renderActUsr(n);
            }
            else{
              listenForGotMsg();
              actUid = [...new Set($gotmsg.concat(actUid))];
              regisLisen();
            }
          });
        }
        else{
          if(++n<actUid.length){
            renderActUsr(n);
          }
          else{
            listenForGotMsg();
            actUid = [...new Set($gotmsg.concat(actUid))];
            regisLisen();
          }
        }
      }
      
      function frndd(len=0){
        if(actUid.includes($frnd[len])&&!$hdrObj[$frnd[len]]){
          db.collection("users").doc($frnd[len++]).get().then(usr=>{
            let user=usr.data(),dex=user.photoURL.split('#proimg')[1];
            let x=0,y=0,scl=1;
            if(dex){
              dex=dex.split('_');
              x=dex[0],y=dex[1],scl=dex[2];
            }
            $hdrObj[user.uid]={img:user.photoURL,name:user.name,dex:{x:x,y:y,scl:scl},status:"Active now",buddy:elem('div',{innerHTML:`<div class="pro_pic"><img src="${user.photoURL}" style="top:${48/120*y}px;left:${48/120*x}px;transform:scale(${scl});"></div><div class="pro_name"><span>${user.name}</span><br><span class="Active">Active now</span></div><div class="got_msg"></div>`},{class:`buddy`,tabindex:$ix++},{click:(e)=>{$_=!0,loadMessages(e.target,user.uid,user.name,user.photoURL);}})};
            buddies_list.appendChild($hdrObj[user.uid].buddy);
            if(buddies_list.children.length===1){
              prog_bar.style.display='none';
              buddies_list.children[0].focus();
              $key='buddies';
            }
            if(len<$frnd.length){
              frndd(len);
            }
            else{
              renderActUsr();
            }
          });
        }
        else{
          if(++len<$frnd.length){
            frndd(len);
          }
          else{
            renderActUsr();
          }
        }
      }
      
      function msgg(len=0){
        db.collection("users").doc($gotmsg[len++]).get().then(usr=>{
          let user=usr.data(),dex=user.photoURL.split('#proimg')[1];
          let x=0,y=0,scl=1;
          if(dex){
            dex=dex.split('_');
            x=dex[0],y=dex[1],scl=dex[2];
          }
          $hdrObj[user.uid]={img:user.photoURL,name:user.name,dex:{x:x,y:y,scl:scl},status:"Active now",buddy:elem('div',{innerHTML:`<div class="pro_pic"><img src="${user.photoURL}" style="top:${48/120*y}px;left:${48/120*x}px;transform:scale(${scl});"></div><div class="pro_name"><span>${user.name}</span><br><span class="Active">Active now</span></div><div class="got_msg" style="display:block;"></div>`},{class:`buddy`,tabindex:$ix++, style:'font-weight:bold;'},{click:(e)=>{$_=!0,loadMessages(e.target,user.uid,user.name,user.photoURL);}})};
          buddies_list.appendChild($hdrObj[user.uid].buddy);
          if(buddies_list.children.length===1){
            prog_bar.style.display='none';
            buddies_list.children[0].focus();
            $key='buddies';
          }
          if(len<$gotmsg.length){
            msgg(len);
          }
          else{
            frndd();
          }
        });
      }

      function regisLisen(n=0){
        const uid = actUid[n++];
        realDB.ref('/status/'+uid).on('value', snap => {
          const data=snap.val();
          $hdrObj[uid]['regis']=true;
          if(data){
            if(data.status==='Active'){
              let sta=$hdrObj[uid].buddy.children[1].children[2];
              $hdrObj[uid]['status']=sta.innerText='Active now',sta.className='Active';
              $rcvr==uid&&(guy_state.innerText='Active now');
            }else{
              let sta=$hdrObj[uid].buddy.children[1].children[2],sta_str='Last active: '+dateNtime(data.lastSeen);
              $hdrObj[uid]['status']=sta.innerText=sta_str,sta.className='Offline';
              $rcvr===uid&&(guy_state.innerText=sta_str);
            }
          }
          if(n<actUid.length){
            $nonReg&&regisLisen(n);
          }else{
            $nonReg=false;
          }
        });
      }

      if(actUid.length>0||$gotmsg.length>0){
        if($gotmsg.length>0){
          msgg();
        }else if($frnd.length>0){
          frndd();
        }else{
          renderActUsr();
        }
      }else{
        buddies_list.innerHTML='<h3 style="color:#bf0864;">Currently, there are no active users. See <span style="color:darkcyan;"><u>All Users</u></span> Tab</h3>';
        prog_bar.style.display='none';
        $key='buddies';
        listenForGotMsg();
      }
    });
  });
}

function getActUsr() {
  allUsr=false;
  $nonReg=true;
  realDB.ref('/status').orderByChild('status').equalTo('Active').limitToFirst(100)
  .once('value', snap => {
    let data = snap.val()||{}, actUid = Object.keys(data);
    $nonReg=true;
    buddies_list.innerHTML = "";
    actorall.innerHTML='<span style="position:relative;top:6px;">Active Users</span>';
    if(actUid.includes(auth.currentUser.uid)){
      actUid.splice(actUid.indexOf(auth.currentUser.uid),1);
    }
    
    function renderActUsr(n=0){
      if(!$hdrObj[actUid[n]]){
        db.collection("users").doc(actUid[n++]).get().then(usr=>{
          let user=usr.data(),dex=user.photoURL.split('#proimg')[1];
          let x=0,y=0,scl=1;
          if(dex){
            dex=dex.split('_');
            x=dex[0],y=dex[1],scl=dex[2];
          }
          $hdrObj[user.uid]={img:user.photoURL,name:user.name,dex:{x:x,y:y,scl:scl},status:"Active now",buddy:elem('div',{innerHTML:`<div class="pro_pic"><img src="${user.photoURL}" style="top:${48/120*y}px;left:${48/120*x}px;transform:scale(${scl});"></div><div class="pro_name"><span>${user.name}</span><br><span class="Active">Active now</span></div><div class="got_msg"></div>`},{class:`buddy`,tabindex:$ix++},{click:(e)=>{$_=!0,loadMessages(e.target,user.uid,user.name,user.photoURL);}})};
          buddies_list.appendChild($hdrObj[user.uid].buddy);
          if(buddies_list.children.length===1){
            prog_bar.style.display='none';
            buddies_list.children[0].focus();
            $key='buddies';
          }
          if(!allUsr&&n<actUid.length){
            renderActUsr(n);
          }
          else{
            !allUsr&&regisLisen();
          }
        });
      }
      else{
        buddies_list.appendChild($hdrObj[actUid[n]].buddy);
        if(buddies_list.children.length===1){
          prog_bar.style.display='none';
          buddies_list.children[0].focus();
          $key='buddies';
        }
        if(!allUsr&&++n<actUid.length){
          renderActUsr(n);
        }
        else{
          !allUsr&&regisLisen();
        }
      }
    }
    
    function msgg(len=0){
      if(!$hdrObj[$gotmsg[len]]){
        db.collection("users").doc($gotmsg[len++]).get().then(usr=>{
          let user=usr.data(),dex=user.photoURL.split('#proimg')[1];
          let x=0,y=0,scl=1;
          if(dex){
            dex=dex.split('_');
            x=dex[0],y=dex[1],scl=dex[2];
          }
          $hdrObj[user.uid]={img:user.photoURL,name:user.name,dex:{x:x,y:y,scl:scl},status:"Active now",buddy:elem('div',{innerHTML:`<div class="pro_pic"><img src="${user.photoURL}" style="top:${48/120*y}px;left:${48/120*x}px;transform:scale(${scl});"></div><div class="pro_name"><span>${user.name}</span><br><span class="Active">Active now</span></div><div class="got_msg" style="display:block;"></div>`},{class:`buddy`,tabindex:$ix++, style:'font-weight:bold;'},{click:(e)=>{$_=!0,loadMessages(e.target,user.uid,user.name,user.photoURL);}})};
          buddies_list.appendChild($hdrObj[user.uid].buddy);
          if(buddies_list.children.length===1){
            prog_bar.style.display='none';
            buddies_list.children[0].focus();
            $key='buddies';
          }
          if(!allUsr&&len<$gotmsg.length){
            msgg(len);
          }
          else{
            renderActUsr();
          }
        });
      }
    }
  
    function regisLisen(n=0){
      const uid = actUid[n++];
      if(!$hdrObj[uid]['regis']){
        realDB.ref('/status/'+uid).on('value', snap => {
          const data=snap.val();
          $hdrObj[uid]['regis']=true;
          if(data){
            if(data.status==='Active'){
              let sta=$hdrObj[uid].buddy.children[1].children[2];
              $hdrObj[uid]['status']=sta.innerText='Active now',sta.className='Active';
              $rcvr==uid&&(guy_state.innerText='Active now');
            }else{
              let sta=$hdrObj[uid].buddy.children[1].children[2],sta_str='Last active: '+dateNtime(data.lastSeen);
              $hdrObj[uid]['status']=sta.innerText=sta_str,sta.className='Offline';
              $rcvr===uid&&(guy_state.innerText=sta_str);
            }
          }
          if(n<actUid.length){
            $nonReg&&regisLisen(n);
          }else{
            $nonReg=false;
          }
        });
      }
      else{
        if(n<actUid.length){
          $nonReg&&regisLisen(n);
        }else{
          $nonReg=false;
        }
      }
    }

    if(actUid.length>0||$gotmsg.length>0){
      if($gotmsg.length>0){
        msgg();
      }else{
        renderActUsr();
      }
    }else{
      buddies_list.innerHTML='<h3 style="color:#bf0864;">Currently, there are no active users. See <span style="color:darkcyan;"><u>All Users</u></span> Tab</h3>';
      prog_bar.style.display='none';
      $key='buddies';
    }
  });
}

function getAllUsr() {
  allUsr=true;
  let getUxData=true;
  db.collection("users").where("uid", "!=", auth.currentUser.uid).orderBy("uid").limit(50).get().then(snapshot => {
    $lastUsr=snapshot.docs[snapshot.docs.length-1];
    buddies_list.innerHTML = "";
    actorall.innerHTML='<span style="position:relative;top:6px;">All Users</span>';
    
    function recrs(len=0){
      let user = snapshot.docs[len++].data(),dex=user.photoURL.split('#proimg')[1],x=0,y=0,scl=1;
      if(!$hdrObj[user.uid]){
        if(dex){
          dex=dex.split('_');
          x=dex[0],y=dex[1],scl=dex[2];
        }
        $hdrObj[user.uid]={img:user.photoURL,name:user.name,dex:{x:x,y:y,scl:scl},buddy:elem('div',{innerHTML:`<div class="pro_pic"><img src="${user.photoURL}" style="top:${48/120*y}px;left:${48/120*x}px;transform:scale(${scl});"></div><div class="pro_name"><span>${user.name}</span><br><span class=""></span></div><div class="got_msg"></div>`},{class:`buddy`,tabindex:$ix++},{click:(e)=>{$_=!0,loadMessages(e.target,user.uid,user.name,user.photoURL);}})};
        buddies_list.appendChild($hdrObj[user.uid].buddy);
        if(buddies_list.children.length===1){
          prog_bar.style.display='none';
          buddies_list.children[0].focus();
          $key='buddies';
        }
        realDB.ref('/status/'+user.uid).on('value', snap => {
          const data=snap.val();
          $hdrObj[user.uid]['regis']=true;
          if(data){
            if(data.status==='Active'){
              let sta=$hdrObj[user.uid].buddy.children[1].children[2];
              $hdrObj[user.uid]['status']=sta.innerText='Active now',sta.className='Active';
              $rcvr===user.uid&&(guy_state.innerText='Active now');
            }else{
              let sta=$hdrObj[user.uid].buddy.children[1].children[2],sta_str='Last active: '+dateNtime(data.lastSeen);
              $hdrObj[user.uid]['status']=sta.innerText=sta_str,sta.className='Offline';
              $rcvr===user.uid&&(guy_state.innerText=sta_str);
            }
          }else{
            let sta=$hdrObj[user.uid].buddy.children[1].children[2],sta_str='Last active: '+formatTimestamp(user.createdAt,!1);
            $hdrObj[user.uid]['status']=sta.innerText=sta_str,sta.className='Offline';
            $rcvr===user.uid&&(guy_state.innerText=sta_str);
          }
          if(allUsr&&len<snapshot.docs.length){
            getUxData&&recrs(len);
          }
          else{
            if(allUsr&&getUxData&&snapshot.size===50){
              buddies_list.appendChild($hdrObj['see_more']);
            }
            getUxData=false;
          }
        });
      }
      else{
        if(!buddies_list.contains($hdrObj[user.uid].buddy))buddies_list.appendChild($hdrObj[user.uid].buddy);
        if(buddies_list.children.length===1){
          prog_bar.style.display='none';
          buddies_list.children[0].focus();
          $key='buddies';
        }
        if(allUsr&&len<snapshot.docs.length){
          recrs(len);
        }
        else{
          if(allUsr&&snapshot.size===50){
            buddies_list.appendChild($hdrObj['see_more']);
          }
          getUxData=false;
        }
      }
    }

    function frndd(len=0){
      if(!$hdrObj[$frnd[len]]){
        db.collection("users").doc($frnd[len++]).get().then(usr=>{
          let user=usr.data(),dex=user.photoURL.split('#proimg')[1];
          let x=0,y=0,scl=1;
          if(dex){
            dex=dex.split('_');
            x=dex[0],y=dex[1],scl=dex[2];
          }
          $hdrObj[user.uid]={img:user.photoURL,name:user.name,dex:{x:x,y:y,scl:scl},buddy:elem('div',{innerHTML:`<div class="pro_pic"><img src="${user.photoURL}" style="top:${48/120*y}px;left:${48/120*x}px;transform:scale(${scl});"></div><div class="pro_name"><span>${user.name}</span><br><span class=""></span></div><div class="got_msg"></div>`},{class:`buddy`,tabindex:$ix++},{click:(e)=>{$_=!0,loadMessages(e.target,user.uid,user.name,user.photoURL);}})};
          buddies_list.appendChild($hdrObj[user.uid].buddy);
          if(buddies_list.children.length===1){
            prog_bar.style.display='none';
            buddies_list.children[0].focus();
            $key='buddies';
          }
          realDB.ref('/status/'+user.uid).on('value', snap => {
            const data=snap.val();
            $hdrObj[user.uid]['regis']=true;
            if(data){
              if(data.status==='Active'){
                let sta=$hdrObj[user.uid].buddy.children[1].children[2];
                $hdrObj[user.uid]['status']=sta.innerText='Active now',sta.className='Active';
                $rcvr===user.uid&&(guy_state.innerText='Active now');
              }else{
                let sta=$hdrObj[user.uid].buddy.children[1].children[2],sta_str='Last active: '+dateNtime(data.lastSeen);
                $hdrObj[user.uid]['status']=sta.innerText=sta_str,sta.className='Offline';
                $rcvr===user.uid&&(guy_state.innerText=sta_str);
              }
            }else{
              let sta=$hdrObj[user.uid].buddy.children[1].children[2],sta_str='Last active: '+formatTimestamp(user.createdAt,!1);
              $hdrObj[user.uid]['status']=sta.innerText=sta_str,sta.className='Offline';
              $rcvr===user.uid&&(guy_state.innerText=sta_str);
            }
            if(allUsr&&len<$frnd.length){
              getUxData&&frndd(len);
            }
            else{
              allUsr&&getUxData&&$gotmsg.forEach((uid,i)=>{
                if($hdrObj[uid]){
                  buddies_list.insertBefore($hdrObj[uid].buddy,buddies_list.children[i]);
                  buddies_list.children[i].children[2].style='display:block;';
                  buddies_list.children[1].style='font-weight:bold;';
                }
              });
              allUsr?(getUxData&&recrs()):(getUxData=false);
            }
          });
        });
      }else{
        buddies_list.appendChild($hdrObj[$frnd[len]].buddy);
        if(buddies_list.children.length===1){
          prog_bar.style.display='none';
          buddies_list.children[0].focus();
          $key='buddies';
        }
        if(allUsr&&++len<$frnd.length){
          getUxData&&frndd(len);
        }
        else{
          allUsr&&getUxData&&$gotmsg.forEach((uid,i)=>{
            if($hdrObj[uid]){
              buddies_list.insertBefore($hdrObj[uid].buddy,buddies_list.children[i]);
              buddies_list.children[i].children[2].style='display:block;';
              buddies_list.children[1].style='font-weight:bold;';
            }
          });
          allUsr?(getUxData&&recrs()):(getUxData=false);
        }
      }
    }
  
    if($frnd.length>0){
      frndd();
    }else{
      recrs();
    }
  });
}

function srxUjar(name) {
  let getUxData=true;
  const currentUser = auth.currentUser;
  db.collection("users").orderBy("name").startAt(name).endAt(name+'\uf8ff').limit(50).get().then(snapshot=>{
    if(snapshot.size>0){
      srx_buddies_list.innerHTML="";
      function recrs(len=0){
        let user = snapshot.docs[len++].data(),dex=user.photoURL.split('#proimg')[1],x=0,y=0,scl=1;
        if(user.uid!==currentUser.uid){
          if(!$hdrObj[user.uid]){
            if(dex){
              dex=dex.split('_');
              x=dex[0],y=dex[1],scl=dex[2];
            }
            $hdrObj[user.uid]={img:user.photoURL,name:user.name,dex:{x:x,y:y,scl:scl},buddy:elem('div',{innerHTML:`<div class="pro_pic"><img src="${user.photoURL}" style="top:${48/120*y}px;left:${48/120*x}px;transform:scale(${scl});"></div><div class="pro_name"><span>${user.name}</span><br><span class=""></span></div><div class="got_msg"></div>`},{class:`buddy`,tabindex:$ix++},{click:(e)=>{$_=!0,loadMessages(e.target,user.uid,user.name,user.photoURL);}})}
            srx_buddies_list.appendChild($hdrObj[user.uid].buddy);
            if(srx_buddies_list.children.length===1){
              srx_btn.innerHTML='Search';
              srx_buddies.children[0].innerText=`${name} - search`;
              srx_buddies.style='display:block;';
              $key='srx_buds';
              $srx=!0;
              srx_usr.parentElement.style='';
              srx_buddies_list.children[0].focus();
            }
            realDB.ref('/status/'+user.uid).on('value', snap => {
              const data=snap.val();
              $hdrObj[user.uid]['regis']=true;
              if(data){
                if(data.status==='Active'){
                  let sta=$hdrObj[user.uid].buddy.children[1].children[2];
                  $hdrObj[user.uid]['status']=sta.innerText='Active now',sta.className='Active';
                  $rcvr===user.uid&&(guy_state.innerText='Active now');
                }else{
                  let sta=$hdrObj[user.uid].buddy.children[1].children[2],sta_str='Last active: '+dateNtime(data.lastSeen);
                  $hdrObj[user.uid]['status']=sta.innerText=sta_str,sta.className='Offline';
                  $rcvr===user.uid&&(guy_state.innerText=sta_str);
                }
              }else{
                let sta=$hdrObj[user.uid].buddy.children[1].children[2],sta_str='Last active: '+formatTimestamp(user.createdAt,!1);
                $hdrObj[user.uid]['status']=sta.innerText=sta_str,sta.className='Offline';
                $rcvr===user.uid&&(guy_state.innerText=sta_str);
              }
              if(len<snapshot.docs.length){
                $srx&&getUxData&&recrs(len);
              }else{
                getUxData=false;
              }
            });
          }
          else{
            srx_buddies_list.appendChild($hdrObj[user.uid].buddy);
            if(srx_buddies_list.children.length===1){
              srx_btn.innerHTML='Search';
              srx_buddies.children[0].innerText=`${name} - search`;
              srx_buddies.style='display:block;';
              $key='srx_buds';
              $srx=!0;
              srx_usr.parentElement.style='';
              srx_buddies_list.children[0].focus();
            }
            $tempHdr.push(user.uid);
            if(len<snapshot.docs.length){
              $srx&&getUxData&&recrs(len);
            }else{
              getUxData=false;
            }
          }
          
        }
        else{
          if(len<snapshot.docs.length){
             $srx&&recrs(len);
          }
          else{
            getUxData=false;
          }
        }
      }
      recrs();
    }else{
      $key='srx';
      srx_btn.innerHTML='Search';
      srx_res.innerText=`[${name}] no matches found — please check the spelling and try again.`;
    }
  });
}

function uploadImage(data, callback) {
  const imageRef = storage.ref().child('images/' + auth.currentUser.uid + '_' + Date.now() + '.jpg');
  imageRef.putString(data, 'data_url').then(snapshot => snapshot.ref.getDownloadURL()).then(imgUrl => {
    callback(imgUrl);
  }).catch(error => {
    alert('Something went wrong!');
  });
}

function uploadProPic(data, callback) {
  const imageRef = storage.ref().child('images/' + auth.currentUser.uid + '_propic.jpg');
  imageRef.putString(data, 'data_url').then(snapshot => snapshot.ref.getDownloadURL()).then(imgUrl => {
    callback(imgUrl);
  }).catch(error => {
    alert('Something went wrong!');
  });
}

function formatTimestamp(timestamp, lst=!0) {
  if(timestamp){
    const date=timestamp.toDate();
    if(lst){
      const hours=('0'+date.getHours()).slice(-2),minutes=('0'+date.getMinutes()).slice(-2);
      return `${hours}:${minutes}`;
    }else{
      const hours=('0'+date.getHours()).slice(-2),minutes=('0'+date.getMinutes()).slice(-2),day=('0'+date.getDate()).slice(-2),month=('0'+(date.getMonth()+1)).slice(-2),year=date.getFullYear().toString().slice(-2);
      return `${day}/${month}/${year} ${hours}:${minutes}`;
    }
  }
}

function loadMessages(elm,receiver,name='',img='',lstSeen='',snap=!1) {
  const sender=auth.currentUser.uid,chatId=[sender,receiver].sort().join("_");
  $chat_id=chatId;
  setTypeIndicator=function uidjdk(isTyping) {
    (myTypeListener=realDB.ref(`/typing/${chatId}/${sender}`)).set(isTyping);
    if (isTyping) {
      window._typeTimer&&clearTimeout(window._typeTimer);
      window._typeTimer = setTimeout(()=>setTypeIndicator(false),1500);
    }
  };
  if(!localStorage[chatId]){
    localStorage[chatId]=Date.now();
  }
  realDB.ref(`/typing/${chatId}/${sender}`).onDisconnect().remove();
  (typingListener=realDB.ref(`/typing/${chatId}/${receiver}`)).on('value', snap=>{
    const isTyping=snap.val()||false;
    if(isTyping){
      if(!typingEl){
        messages_board.appendChild(typingEl=elem('div',{innerHTML:`<span class="typing">●</span><span class="typing">●</span><span class="typing">●</span>`},{class:'message received'}));
        messages_board.scrollTop=messages_board.scrollHeight;
      }
    }else{
      if(typingEl){
        typingEl.parentElement===messages_board&&(messages_board.removeChild(typingEl));
        typingEl=null
      }
    }
  });
  elm&&(guy_name.innerText=name,
  guy_pic.src=img,
  guy_pic.style=`top:${42/120*$hdrObj[receiver].dex.y}px;left:${42/120*$hdrObj[receiver].dex.x}px;transform:scale(${$hdrObj[receiver].dex.scl});`,
  guy_state.innerText=$hdrObj[receiver].status,
  $rcvr=receiver,
  elm.children[2].style='',elm.style='');
  db.collection("chats").doc(chatId).collection("messages").orderBy("timestamp","desc").limit(15).onSnapshot(snapshot => {
    if(snapshot.docs[0]){
      let kl=snapshot.docs[0].data(),rcv=kl.sender===sender?kl.receiver:kl.sender;
      if(rcv===$rcvr){
        messages_board.innerHTML = "";
        snapshot.forEach(doc => {
          const msg = doc.data(),
          el=elem('div',{innerHTML:msg.text.includes('#img')?`<img src="${msg.text}" style="max-width:192px;width:auto;">`:escapeHTML(msg.text)},{class:msg.sender===sender?'message sent':'message received'}),
          tel=elem('div',{innerText:formatTimestamp(msg.timestamp)||'sending'},{class:'timestamp'});
          msg.sender===sender&&tel.appendChild(elem('span',{innerText:'✓'},{class:msg.seen?'seen':'unseen'}));
          el.appendChild(tel);
          messages_board.insertBefore(el,messages_board.children[0]);
          if(msg.receiver===sender&&msg.seen===false){doc.ref.update({seen:true})}
        });
        setTimeout(()=>{messages_board.scrollTop=messages_board.scrollHeight},500);
        messages_board.scrollTop=messages_board.scrollHeight;
        msgr_text.focus();
      }
    }
  });
}

function sendMessage(toUid, messageText) {
  const sender = auth.currentUser.uid,chatId = [sender, toUid].sort().join("_");
  return db.collection("chats").doc(chatId).collection("messages").add({
    sender: sender,
    receiver: toUid,
    text: messageText,
    timestamp: ldl.firestore.FieldValue.serverTimestamp(),
    seen: false
  });
}

function drawImg(scl=0,x=0,y=0) {
  $scl=+($scl+scl).toFixed(2)||0.1;
  $posX+=x,$posY+=y;
  cnv_img.style=`transform:scale(${$scl});position:relative;top:${$posY}px;left:${$posX}px;`;
}

function showCallUI(){
  if($hdrObj[$rcvr].img==='img/muser.png'){
    callee_pic.innerHTML=`<img src="img/muser.png" style="position:relative;top:20px;left:0px;transform:scale(1.8);">`;
  }
  else{
    callee_pic.innerHTML=`<img src="${$hdrObj[$rcvr].img}" style="position:relative;top:${$hdrObj[$rcvr].dex.y}px;left:${$hdrObj[$rcvr].dex.x}px;transform:scale(${$hdrObj[$rcvr].dex.scl});">`;
  }
  callee_name.innerText=$hdrObj[$rcvr].name,
  callee_state.innerHTML='Connecting<span>.</span><span>.</span><span>.</span>';
  caller.parentElement.style='display:block;background:#fff;z-index:90;';
  $key='';
}

function showIncomingCallUI(caller){
  if($hdrObj[caller]){
    if($hdrObj[caller].img==='img/muser.png'){
      callee_pic.innerHTML=`<img src="img/muser.png" style="position:relative;top:20px;left:0px;transform:scale(1.8);">`;
    }
    else{
      caller_pic.innerHTML=`<img src="${$hdrObj[caller].img}" style="position:relative;top:${$hdrObj[caller].dex.y}px;left:${$hdrObj[caller].dex.x}px;transform:scale(${$hdrObj[caller].dex.scl});">`;
    }
    caller_name.innerText=$hdrObj[caller].name,
    caller_state.innerHTML='Incomming Call';
    callee.parentElement.style='display:block;background:#fff;z-index:90;';
    ring_odo.play();
  }else{
    db.collection("users").doc(caller).get().then(usr=>{
      let user=usr.data(),dex=user.photoURL.split('#proimg')[1],x=0,y=0,scl=1;
      if(dex){
        dex=dex.split('_');
        x=dex[0],y=dex[1],scl=dex[2];
      }
      $hdrObj[user.uid]={img:user.photoURL,name:user.name,dex:{x:x,y:y,scl:scl},buddy:elem('div',{innerHTML:`<div class="pro_pic"><img src="${user.photoURL}" style="top:${48/120*y}px;left:${48/120*x}px;transform:scale(${scl});"></div><div class="pro_name"><span>${user.name}</span><br><span class=""></span></div><div class="got_msg"></div>`},{class:`buddy`,tabindex:$ix++},{click:(e)=>{$_=!0,loadMessages(e.target,user.uid,user.name,user.photoURL);}})};
      buddies_list.insertBefore($hdrObj[user.uid].buddy,buddies_list.children[i]);
      realDB.ref('/status/'+user.uid).on('value', snap => {
        const data=snap.val();
        if(data){
          if(data.status==='Active'){
            let sta=$hdrObj[user.uid].buddy.children[1].children[2];
            $hdrObj[user.uid]['status']=sta.innerText='Active now',sta.className='Active';
            $rcvr===user.uid&&(guy_state.innerText='Active now');
          }else{
            let sta=$hdrObj[user.uid].buddy.children[1].children[2],sta_str='Last active: '+dateNtime(data.lastSeen);
            $hdrObj[user.uid]['status']=sta.innerText=sta_str,sta.className='Offline';
            $rcvr===user.uid&&(guy_state.innerText=sta_str);
          }
        }else{
          let sta=$hdrObj[user.uid].buddy.children[1].children[2],sta_str='Last active: '+formatTimestamp(user.createdAt,!1);
          $hdrObj[user.uid]['status']=sta.innerText=sta_str,sta.className='Offline';
          $rcvr===user.uid&&(guy_state.innerText=sta_str);
        }
      });
      if($hdrObj[caller].img==='img/muser.png'){
        callee_pic.innerHTML=`<img src="img/muser.png" style="position:relative;top:20px;left:0px;transform:scale(1.8);">`;
      }
      else{
        caller_pic.innerHTML=`<img src="${$hdrObj[caller].img}" style="position:relative;top:${$hdrObj[caller].dex.y}px;left:${$hdrObj[caller].dex.x}px;transform:scale(${$hdrObj[caller].dex.scl});">`;
      }
      caller_name.innerText=$hdrObj[$rcvr].name,
      caller_state.innerHTML='Incomming Call';
      callee.parentElement.style='display:block;background:#fff;z-index:90;';
      ring_odo.play();
    });
  }
  resKey=$key;
  $key='callee';
}

function createCall(){
  realDB.ref(`calls/${$rcvr}`).once('value', snap => {
    const existing = snap.val();
    if (existing && existing.status !== 'ended') {
      veri_prompt.innerText="User is busy in another call. Try later!";
      navigator.vibrate(200);
      return;
    }
    showCallUI();
    isCaller = true;
    navigator.mediaDevices.getUserMedia({ audio: true }).then(stream=>{
      localStream = stream;
      localStream.getAudioTracks().forEach(track => track.enabled = true);
      peerConn = new RTCPeerConnection(servers);
      localStream.getTracks().forEach(track => peerConn.addTrack(track, localStream));
      peerConn.oniceconnectionstatechange = function () {
        if(peerConn.iceConnectionState==='disconnected'||peerConn.iceConnectionState==='failed'){callee_state.innerHTML="Call dropped. Please try again later.";}
      };
      console.log(peerConn.getSenders());
      setTimeout(()=>{
        peerConn.createOffer().then(offers=>{
          peerConn.setLocalDescription(offers).then(()=>{
            realDB.ref(`calls/${$rcvr}`).set({
              callerId: auth.currentUser.uid,
              receiverId: $rcvr,
              offer: JSON.stringify(offers),
              status: 'calling'
            });
            realDB.ref(`calls/${$rcvr}/status`).onDisconnect().set('ended');
            setupICEListeners($rcvr);
            $key='caller';
            callee_state.innerHTML='Calling<span>.</span><span>.</span><span>.</span>';
            ringback_odo.play();
            realDB.ref(`calls/${$rcvr}/status`).on('value', snap => {
              const status = snap.val();
              if (status === 'declined') {
                $key='';
                ringback_odo.pause();
                callee_state.innerHTML='Call declined!';
                realDB.ref(`calls/${$rcvr}/status`).off();
                setTimeout(()=>{caller.parentElement.style='',$key='chats'},1200);
              } else if (status === 'accepted') {
                ringback_odo.pause();
                let d=Date.now();
                callee_state.innerHTML='00:00';
                callTimer&&clearInterval(callTimer);
                callTimer=setInterval(()=>{
                  if(callTimer!==null){
                    let s=Math.floor((Date.now()-d)/1000),m=Math.floor(s/60);
                    s=s%60;
                    callee_state.innerHTML=('0'+m).slice(-2)+':'+('0'+s).slice(-2);
                  }
                },1e3);
                
                realDB.ref(`calls/${$rcvr}/answer`).once('value').then(snap => {
                  peerConn.setRemoteDescription(new RTCSessionDescription(JSON.parse(snap.val())));
                });
              } else if (status === 'ended') {
                callTimer&&(clearInterval(callTimer),callTimer=null);
                $key='';
                ringback_odo.pause();
                call_odo.pause();
                peerConn&&peerConn.close();
                localStream.getTracks().forEach(track => track.stop());
                callee_state.innerHTML='Call declined!';
                realDB.ref(`calls/${$rcvr}/status`).off();
                realDB.ref(`calls/${$rcvr}/iceCandidates/receiver`).off();
                setTimeout(()=>{caller.parentElement.style='',$key='chats',msgr_text.focus();},1200);
              }
            });
          });
        });
      },1000);
    }).catch(err=>{console.log(err)});
  });
}

function setupICEListeners(refUid) {
  let remoteDescSet = false, candidateQueue = [];
  peerConn.onicecandidate = event => {
    if (event.candidate) {
      const role = isCaller ? 'caller' : 'receiver';
      realDB.ref(`calls/${refUid}/iceCandidates/${role}`).push(event.candidate.toJSON());
    }
  };
  if ('ontrack' in peerConn) {
    peerConn.ontrack = event=>{
      if(call_odo.srcObject !== event.streams[0]){
        call_odo.srcObject = event.streams[0];
        call_odo.muted = false;
        call_odo.volume = 1.0;
        call_odo.addEventListener('loadedmetadata', () => {
          call_odo.play();
        }, { once: true });
      }
    }
  }
  else{
    peerConn.addEventListener('addstream', event => {
      if(call_odo.srcObject !== event.stream){
        call_odo.srcObject = event.stream;
        call_odo.muted = false;
        call_odo.volume = 1.0;
        call_odo.addEventListener('loadedmetadata', () => {
          call_odo.play();
        }, { once: true });
      }
    });
  }
  const remoteRole = isCaller ? 'receiver' : 'caller';
  realDB.ref(`calls/${refUid}/iceCandidates/${remoteRole}`).on('child_added', snap => {
    if(snap.val()){
      const candidate = new RTCIceCandidate(snap.val());
      if (remoteDescSet) {
        peerConn.addIceCandidate(candidate).catch(console.error);
      } else {
        candidateQueue.push(candidate);
      }
    }
  });
  peerConn.markRemoteDescSet = function () {
    remoteDescSet = true;
    candidateQueue.forEach(c => peerConn.addIceCandidate(c).catch(console.error));
    candidateQueue.length = 0;
  };
}

function escapeHTML(str) {
  return str.replace(/[&<>"']/g, function (match) {
    const escapeMap = {
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      "'": '&#39;',
    };
    return escapeMap[match];
  });
}

function mainKeys(ev){
  ev.key||(ev.key='');
  switch($key){
    case'logink':{
      switch(ev.key.toLowerCase()){
        case'arrowdown':{
          ev.preventDefault(),ev.stopPropagation();
          move(1);break;
        }
        case'arrowup':{
          ev.preventDefault(),ev.stopPropagation();
          move(-1);break;
        }
        case'softleft':case'alt':{
          ev.preventDefault(),ev.stopPropagation();
          ['More Apps','Help','Contact Us'].forEach((el,il)=>{
            log_opt.appendChild(elem('div',{innerText:el},{class:'logopt',tabindex:il},{click:(e)=>{opts(el)}}));
          });
          log_opt.appendChild(elem('div',{innerText:'Exit'},{class:'logopt',style:'border:none;',tabindex:3},{click:(e)=>{opts('Exit')}}));
          log_opt.style='display:block;';
          log_opt.children[0].focus();
          $key='logopt';
          break;
        }
        case'enter':{
          switch(document.activeElement.id){
            case'login':{
              if(login_email.value.trim()==''){invalid_auth.innerHTML='Please enter a valid email address',invalid_auth.style='display:block;',login_board.scrollTop=0,log_kit[0].focus();return;}
              if(pswd.value==''){invalid_auth.innerHTML='Please enter right password',invalid_auth.style='display:block;',login_board.scrollTop=0,log_kit[1].focus();return;}
              $key='';
              login.innerHTML='<img src="img/loadn.png" style="position:relative;top:-3px;"> <span style="position:relative;top:-10px;">Loading</span>';
              auth.signInWithEmailAndPassword(login_email.value.trim(),pswd.value).then(userCre=>{
                prog_bar.style='';
                login_board.style='display:none;';
                invalid_auth.style='';
                login.innerHTML='Login';
              })
              .catch(error=>{$key='logink',invalid_auth.innerHTML='<strong>Wrong credentials</strong><br>Invalid username or password',invalid_auth.style='display:block;',login.innerHTML='Login',login_board.scrollTop=0,log_kit[0].focus()});
              break;
            }
            case'create_acc':{
              signup_board.style.display='block';
              setTimeout(()=>{login_board.style=''},300);
              $key='signupk';
              sign_kit[0].focus();
              break;
            }
            case'forgot_pass':{
              forgot_board.style='display:block;';
              setTimeout(()=>{login_board.style=''},300);
              $key='forgo',forgot_email.focus();
              break;
            }
            
          }
          break;
        }
        case'softright':{
          kaiads?kaiads.call("click"):opts('Exit');
        }
      }
      return;
    }
    case'signupk':{
      switch(ev.key.toLowerCase()){
        case'arrowdown':{
          ev.preventDefault(),ev.stopPropagation();
          moveu(1);
          break;
        }
        case'arrowup':{
          ev.preventDefault(),ev.stopPropagation();
          moveu(-1);
          break;
        }
        case'enter':{
          switch(document.activeElement.id){
            case'signup_btn':{
              if($sgn_err_code>-1){
                sign_kit[$sgn_err_code].focus();
                setTimeout(()=>{$sgn_err_code==0?(signup_board.scrollTop=0):($sgn_err_code==1&&(signup_board.scrollTop-=50))},5);
                return !1;
              }
              $key='';
              signup_btn.innerHTML='<img src="img/loadn.png" style="position:relative;top:-3px;"> <span style="position:relative;top:-10px;">Signing</span>';
              auth.createUserWithEmailAndPassword(signup_email.value.trim(),signup_pswd.value.trim()).then(userCredential=>{
                signup_board.style='';
                signup_btn.innerHTML='Sign Up';
                upload_pic.style='display:block;';
                $key='upldPic';$_=!1;
                upld_img.focus();
                const user = userCredential.user;
                user.sendEmailVerification().then(() => {
                  console.log(user.email);
                });
                db.collection("users").doc(user.uid).set({
                  uid: user.uid,
                  name: escapeHTML(fulname.value.trim()),
                  email: user.email,
                  photoURL: "img/muser.png",
                  createdAt: ldl.firestore.FieldValue.serverTimestamp(),
                  friends: [],
                  gotmsg:[]
                });
              }).catch(error=>{$key='signupk',signup_btn.innerHTML='Sign Up',signup_error.innerText=error.message;signup_board.scrollTop=signup_board.scrollHeight});
              break;
            }
          }
          break;
        }
        case'softright':{
          kaiads?kaiads.call("click"):location.reload();
          break;
        }
        case'backspace':{
          if(document.activeElement.tagName==='INPUT'){
            if(document.activeElement.value===''){
              ev.preventDefault(),ev.stopPropagation();
            }
          }else{
            ev.preventDefault(),ev.stopPropagation();
          }
          break;
        }
      }
      return;
    }
    case'congr':{
      ev.preventDefault(),ev.stopPropagation();
      setTimeout(()=>{window.close()},150);
      return;
    }
    case'reverify':{
      ev.preventDefault(),ev.stopPropagation();
      setTimeout(()=>{window.close()},150);
      return;
    }
    case'upldPic':{
      switch(ev.key.toLowerCase()){
        case'arrowdown':{
          drawImg(0,0,1);upld_err.scrollBy(0,25);break;
        }
        case'arrowup':{
          drawImg(0,0,-1);upld_err.scrollBy(0,-25);break;
        }
        case'arrowleft':{
          drawImg(0,-1);break;
        }
        case'arrowright':{
          drawImg(0,1);break;
        }
        case'*':{
          drawImg(-0.05);break;
        }
        case'#':{
          drawImg(0.05);break;
        }
        case'softleft':case'o':{
          if($upldPicCng){setTimeout(()=>{
            try{
              upld_err.style.fontSize='14px';
              prog_bar.children[1].innerText='Uploading',prog_bar.style='',$key='';
              upld_state.className='left',$upldPicCng=!1;
              uploadProPic(cnv_img.src,(url)=>{
                url=url+`#proimg${$posX}_${$posY}_${$scl}`;
                db.collection("users").doc(auth.currentUser.uid).update({photoURL: url}).then(()=>{
                  setTimeout(()=>{prog_bar.style='display:none;',$key='upldPic'},1e3);
                  if($_){
                    buddies.children[0].children[0].children[0].src=url;
                    buddies.children[0].children[0].children[0].style=`width:30px;position:relative;top:${$posY}px;left:${$posX}px;transform:scale(${$scl})`;
                    my_profile.children[0].children[0].src=url;
                    my_profile.children[0].children[0].style=`width:120px;position:relative;top:${$posY}px;left:${$posX}px;transform:scale(${$scl})`;
                  }
                  upld_state.style='',upld_scs.innerText='Done',upld_err.innerText='Uploaded Successfully!',upld_err.style.fontSize='22px';
                }).catch((err)=>{$key='upldPic',prog_bar.style='display:none;',upld_err.innerText=err.message});
              });
            }catch(err){
              prog_bar.style='display:none;',$key='upldPic';
              upld_err.innerText=err;
              navigator.vibrate(150);
            };
          },0)}
          break;
        }
        case'enter':{
          pro_pic.click();
          break;
        }
        case'softright':case'backspace':{
          ev.preventDefault(),ev.stopPropagation();
          if(kaiads&&ev.key==='SoftRight'){kaiads.call("click")}
          else{
            upload_pic.style='display:block;animation:srtl 0.3s;';
            setTimeout(()=>{upload_pic.style=''},250);
            $_?(buddies.style='display:block;',buddies_list.children[0].focus(),$key='buddies'):(setTimeout(()=>{auth.currentUser.emailVerified||setTimeout(()=>{verify_box.style="display:block;"},150),congr_box.style="display:block;",$key='congr'},350));
            $posX=0,$posY=0,$scl=1;
          }
          break;
        }
      }
      return;
    }
    case'buddies':{
      switch(ev.key.toLowerCase()){
        case'arrowdown':{
          ev.preventDefault(),ev.stopPropagation();
          buddy_move(1);break;
        }
        case'arrowup':{
          ev.preventDefault(),ev.stopPropagation();
          buddy_move(-1);break;
        }
        case'softright':case'backspace':{
          ev.preventDefault(),ev.stopPropagation();
          if(kaiads&&ev.key==='SoftRight'){kaiads.call("click")}
          else{
            realDB.ref().off();
            setTimeout(()=>{window.close()},200);
          }
          break;
        }
        case'enter':{
          if(document.activeElement.id!=='see_more_btn'){
            document.activeElement.click();
            chat_board.style='display:block;';
            $key='chats';
            msgr_text.focus();
          }else{document.activeElement.click()}
          break;
        }
        case'softleft':case'shift':{
          ['Search','My Profile','Change Picture','Change Password','More Apps','Help'].forEach((el,il)=>{
            buddies_opt.appendChild(elem('div',{innerText:el},{class:'bud_opt',tabindex:il+1},{click:(e)=>{opts(el)}}));
          });
          if(!allUsr){
            buddies_opt.insertBefore(elem('div',{innerText:'All Users'},{class:'bud_opt',tabindex:0},{click:(e)=>{opts('All Users')}}),buddies_opt.firstElementChild);
          }else{
            buddies_opt.insertBefore(elem('div',{innerText:'Active Users'},{class:'bud_opt',tabindex:0},{click:(e)=>{opts('Active Users')}}),buddies_opt.firstElementChild);
          }
          buddies_opt.appendChild(elem('div',{innerText:'Log out'},{class:'bud_opt',tabindex:7,style:'border:none;'},{click:(e)=>{opts('Log out')}}));
          buddies_opt.style='display:block;';
          buddies_opt.children[0].focus();
          $key='bud_opt';
          break;
        }
      }
      return;
    }
    case'chats':{
      switch(ev.key.toLowerCase()){
        case'arrowdown':{
          ev.preventDefault(),ev.stopPropagation();
          messages_board.scrollBy(0,50);break;
        }
        case'arrowup':{
          ev.preventDefault(),ev.stopPropagation();
          messages_board.scrollBy(0,-50);break;
        }
        case'softright':{
          if(kaiads&&ev.key==='SoftRight'){kaiads.call("click")}
          else{
            chat_board.style='display:block;animation:srtl 0.3s;';
            setTimeout(()=>{chat_board.style='',messages_board.innerHTML='',$key='buddies';},250);
            if($srx){
              srx_buddies_list.children[0].focus();
              $key='srx_buds';
            }else{
              buddies_list.children[0].focus();
              $key='buddies';
            }
            typingListener&&(typingListener.off(),typingListener=null);
            myTypeListener&&(myTypeListener.remove(),myTypeListener=null);
            $gotmsg.indexOf($rcvr)>=0&&($gotmsg.splice($gotmsg.indexOf($rcvr),1),
            db.collection("users").doc(auth.currentUser.uid).update({gotmsg:$gotmsg}));
            if($contact){
              $frnd.unshift($rcvr);
              $frnd=[...new Set($frnd)];
              $frnd=$frnd.slice(0,15);
              db.collection("users").doc(auth.currentUser.uid).update({friends: $frnd}).then(()=>{$contact=!1,$rcvr='';});
            }
            if(Date.now()-localStorage[$chat_id]>=864e5){
              localStorage[$chat_id]=Date.now();
              delOldMsg();
            }
          }
          break;
        }
        case'backspace':{
          if(document.activeElement.tagName==='INPUT'){
            if(document.activeElement.value===''){
              ev.preventDefault(),ev.stopPropagation();
              chat_board.style='display:block;animation:srtl 0.3s;';
              setTimeout(()=>{chat_board.style='',messages_board.innerHTML=''},250);
              if($srx){
                srx_buddies_list.children[0].focus();
                $key='srx_buds';
              }else{
                buddies_list.children[0].focus();
                $key='buddies';
              }
              typingListener&&(typingListener.off(),typingListener=null);
              myTypeListener&&(myTypeListener.remove(),myTypeListener=null);
              $gotmsg.indexOf($rcvr)>=0&&($gotmsg.splice($gotmsg.indexOf($rcvr),1),
              db.collection("users").doc(auth.currentUser.uid).update({gotmsg:$gotmsg}));
              if($contact){
                $frnd.unshift($rcvr);
                $frnd=[...new Set($frnd)];
                $frnd=$frnd.slice(0,15);
                db.collection("users").doc(auth.currentUser.uid).update({friends: $frnd}).then(()=>{$contact=!1,$rcvr='';});
              }
              if(Date.now()-localStorage[$chat_id]>=864e5){
                localStorage[$chat_id]=Date.now();
                delOldMsg();
              }
            }
          }else{
            ev.preventDefault(),ev.stopPropagation();
            chat_board.style='display:block;animation:srtl 0.3s;';
            setTimeout(()=>{chat_board.style='',messages_board.innerHTML='',$key='buddies';},250);
            if($srx){
              srx_buddies_list.children[0].focus();
              $key='srx_buds';
            }else{
              buddies_list.children[0].focus();
              $key='buddies';
            }
            typingListener&&(typingListener.off(),typingListener=null);
            myTypeListener&&(myTypeListener.remove(),myTypeListener=null);
            $gotmsg.indexOf($rcvr)>=0&&($gotmsg.splice($gotmsg.indexOf($rcvr),1),
            db.collection("users").doc(auth.currentUser.uid).update({gotmsg:$gotmsg}));
            if($contact){
              $frnd.unshift($rcvr);
              $frnd=[...new Set($frnd)];
              $frnd=$frnd.slice(0,15);
              db.collection("users").doc(auth.currentUser.uid).update({friends: $frnd}).then(()=>{$contact=!1,$rcvr='';});
            }
            if(Date.now()-localStorage[$chat_id]>=864e5){
              localStorage[$chat_id]=Date.now();
              delOldMsg();
            }
          }
          break;
        }
        case'enter':{
          msgr_text.focus();
          msgr_text.value.trim().length>0&&sendMessage($rcvr,msgr_text.value.trim()).then(()=>{
            if($srx){
              $srx_con.unshift($rcvr);
              $srx_con=[...new Set($srx_con)];
            }else{
              buddies_list.insertBefore($hdrObj[$rcvr].buddy,buddies_list.children[0])
            }
            $contact=!0;
            let tempReal=realDB.ref(`/messages/${$rcvr}`).push();
            tempReal.onDisconnect().remove();
            tempReal.set(auth.currentUser.uid);
            setTimeout(()=>{tempReal.remove()},3e3);
            db.collection("users").doc($rcvr).get().then(me=>{
              let eme=me.data().friends,msg=me.data().gotmsg;
              eme.push(auth.currentUser.uid);
              msg.unshift(auth.currentUser.uid);
              eme=[...new Set(eme)];
              msg=[...new Set(msg)];
              db.collection("users").doc($rcvr).update({friends:eme, gotmsg:msg});
            });
            if(!$frnd.includes($rcvr)){
              $frnd.unshift($rcvr);
              $frnd=[...new Set($frnd)];
              $frnd=$frnd.slice(0,15);
              db.collection("users").doc(auth.currentUser.uid).update({friends: $frnd}).then(()=>{});
            }
          }).catch((error) => {
            console.log(error)
          });
          msgr_text.value='',ccl=-1;break;
        }
        case'softleft':case'alt':{
          ev.preventDefault(),ev.stopPropagation();
          pic_msg.click();
          break;
        }
        case'call':case'capslock':{
          if($hdrObj[$rcvr].status==='Active now'){
            createCall();
          } else{
            veri_prompt.innerText="You can't create call to inactive user.";
            veri_prompt.style.display='block';
            navigator.vibrate(100);
            setTimeout(()=>{
              veri_prompt.style='display:block;animation:srtl 0.3s;';
              setTimeout(()=>{veri_prompt.style=''},250);
            },4e3);
          }
          break;
        }
      }
      return;
    }
    case'caller':{
      ev.preventDefault(),ev.stopPropagation();
      switch(ev.key){
        case'Backspace':case'SoftRight':{
          callTimer&&clearInterval(callTimer);
          $key='';
          ringback_odo.pause();
          realDB.ref(`calls/${$rcvr}/status`).set('ended');
          realDB.ref(`calls/${$rcvr}/iceCandidates/receiver`).off();
          callee_state.innerHTML='Call Ended<span>.</span><span>.</span><span>.</span>';
          setTimeout(()=>{caller.parentElement.style='',$key='chats'},1200);
          break;
        }
        case'ArrowUp':{
          navigator.volumeManager.requestUp();
          break;
        }
        case'ArrowDown':{
          navigator.volumeManager.requestDown();
          break;
        }
      }
      return;
    }
    case'callee':{
      ev.preventDefault(),ev.stopPropagation();
      switch(ev.key){
        case'Call':case'SoftLeft':case'CapsLock':{
          $callAccepted&&acceptCall();
          break;
        }
        case'Backspace':case'SoftRight':{
          calleeTimer&&(clearInterval(calleeTimer),calleeTimer=null);
          $key='';
          ring_odo.pause();
          endCall();
          caller_state.innerHTML='Call Ending<span>.</span><span>.</span><span>.</span>';
          setTimeout(()=>{callee.parentElement.style=''},700);
          break;
        }
        case'ArrowUp':{
          navigator.volumeManager.requestUp();
          break;
        }
        case'ArrowDown':{
          navigator.volumeManager.requestDown();
          break;
        }
      }
      return;
    }
    case'bud_opt':{
      ev.preventDefault(),ev.stopPropagation();
      switch(ev.key){
        case'ArrowUp':case'ArrowLeft': {
          document.activeElement.previousElementSibling&&(document.activeElement.previousElementSibling.focus(),!0)||buddies_opt.children[7].focus();
          break;
        }
        case'ArrowDown':case'ArrowRight': {
          document.activeElement.nextElementSibling&&(document.activeElement.nextElementSibling.focus(),!0)||buddies_opt.children[0].focus();
          break;
        }
        case'SoftRight':case'Backspace':case'SoftLeft':case'b': {
          buddies_opt.style='display:block;animation:ttb 0.3s;';
          setTimeout(()=>{buddies_opt.style='',buddies_opt.innerHTML=''},250);
          $key='buddies';buddies_list.children[0].focus();
          break;
        }
        case'Enter':{
          $_=!0;
          document.activeElement.click();
          setTimeout(()=>{buddies_opt.style='',buddies_opt.innerHTML=''},230);
          break;
        }
      }
      return;
    }
    case'srx_buds':{
      switch(ev.key.toLowerCase()){
        case'arrowdown':{
          ev.preventDefault(),ev.stopPropagation();
          srx_buddy_move(1);break;
        }
        case'arrowup':{
          ev.preventDefault(),ev.stopPropagation();
          srx_buddy_move(-1);break;
        }
        case'softright':case'backspace':{
          if(kaiads&&ev.key==='SoftRight'){kaiads.call("click")}
          else{
            $tempHdr.forEach(uid=>{buddies_list.appendChild($hdrObj[uid].buddy)});
            $srx_con.forEach((uid,ix)=>{
              buddies_list.insertBefore($hdrObj[uid].buddy,buddies_list.children[ix])
            });
            $srx=!1;
            srx_buddies.style='display:block;animation:srtl 0.3s;';
            $key='buddies';buddies_list.children[0].focus();
            setTimeout(()=>{srx_buddies.style='',$tempHdr=[],$srx_con=[]},250);
          }
          break;
        }
        case'enter':{
          document.activeElement.click();
          chat_board.style='display:block;';
          $key='chats';
          msgr_text.focus();
          break;
        }
      }
      return;
    }
    case'logopt':{
      ev.preventDefault(),ev.stopPropagation();
      switch(ev.key){
        case'ArrowUp':case'ArrowLeft': {
          document.activeElement.previousElementSibling&&(document.activeElement.previousElementSibling.focus(),!0)||log_opt.children[3].focus();
          break;
        }
        case'ArrowDown':case'ArrowRight': {
          document.activeElement.nextElementSibling&&(document.activeElement.nextElementSibling.focus(),!0)||log_opt.children[0].focus();
          break;
        }
        case'SoftRight':case'Backspace':case'SoftLeft':case'Shift': {
          log_opt.style='display:block;animation:ttb 0.3s;';
          setTimeout(()=>{log_opt.style='',log_opt.innerHTML=''},230);
          $key='logink';log_kit[0].focus();
          break;
        }
        case'Enter':{
          $_=!1;
          document.activeElement.click();
          setTimeout(()=>{log_opt.style='',log_opt.innerHTML=''},230);
          break;
        }
      }
      return;
    }
    case'forgo':{
      switch(ev.key){
        case 'ArrowDown': {
          snd_reset.focus();break;
        }
        case 'ArrowUp': {
          ev.preventDefault(),ev.stopPropagation();
          forgot_email.focus(),forgot_email.select();break;
        }
        case 'SoftRight':{
          if(kaiads&&ev.key==='SoftRight'){kaiads.call("click")}
          else{
            login_board.style.display='block';
            forgot_board.style='display:block;animation:srtl 0.3s';
            setTimeout(()=>{forgot_board.style=''},250);
            $key='logink',log_kit[0].focus();
          }
          break;
        }
        case'Backspace':{
          if(document.activeElement.tagName==='INPUT'){
            if(forgot_email.value===''){
              ev.preventDefault(),ev.stopPropagation();
              login_board.style.display='block';
              forgot_board.style='display:block;animation:srtl 0.3s';
              setTimeout(()=>{forgot_board.style=''},250);
              $key='logink',log_kit[0].focus();
            }
          }else{
            ev.preventDefault(),ev.stopPropagation();
            login_board.style.display='block';
            forgot_board.style='display:block;animation:srtl 0.3s';
            setTimeout(()=>{forgot_board.style=''},250);
            $key='logink',log_kit[0].focus();
          }
          break;
        }
        case'Enter':{
          switch(document.activeElement.id){
            case'snd_reset':{
              if(forgot_email.value.trim()){
                invalid_auth3.style='';
                $key='';
                let restor=forgot_board.innerHTML;
                snd_reset.innerHTML='<img src="img/loadn.png" style="position:relative;top:-3px;"> <span style="position:relative;top:-12px;">Sending</span>';
                auth.sendPasswordResetEmail(forgot_email.value.trim()).then(()=>{
                  setTimeout(()=>{
                   forgot_board.innerHTML=`<div id="reset_box"><strong style="font-size: 18px;">Reset link sent</strong><br>We’ve sent a reset link to your email. Please check your inbox</div>`;
                  },1000);
                  setTimeout(()=>{login_board.style.display='block',forgot_board.style='',$key='logink',forgot_board.innerHTML=restor,log_kit[0].focus();},7000);
                }).catch((err)=>{$key='forgo',snd_reset.innerHTML='Send',invalid_auth3.innerText=JSON.parse(err.message).error.message,invalid_auth3.style='display:block;',forgot_email.focus()});
              }else{invalid_auth3.innerText='Please enter your Email address.',invalid_auth3.style='display:block;',forgot_email.focus()}
            }
          }
        }
      }
      return;
    }
    case'cngPass':{
      switch(ev.key.toLowerCase()){
        case'arrowdown':{
          ev.preventDefault(),ev.stopPropagation();
          movec(1);break;
        }
        case'arrowup':{
          ev.preventDefault(),ev.stopPropagation();
          movec(-1);break;
        }
        case'softright':{
          if(kaiads&&ev.key==='SoftRight'){kaiads.call("click")}
          else{
            cng_pass.parentElement.style='display:block;animation:srtl 0.3s;';
            $key='buddies';
            buddies_list.children[0].focus();
            setTimeout(()=>{cng_pass.parentElement.style=''},250);
          }
          break;
        }
        case'backspace':{
          if(document.activeElement.tagName==='INPUT'){
            if(document.activeElement.value===''){
              ev.preventDefault(),ev.stopPropagation();
              cng_pass.parentElement.style='display:block;animation:srtl 0.3s;';
              $key='buddies';
              setTimeout(()=>{cng_pass.parentElement.style=''},250);
            }
          }else{
            ev.preventDefault(),ev.stopPropagation();
            cng_pass.parentElement.style='display:block;animation:srtl 0.3s;';
            $key='buddies';
            setTimeout(()=>{cng_pass.parentElement.style=''},250);
          }
          break;
        }
        case'enter':{
          switch(document.activeElement.id){
            case'req_pass':{
              if($sgn_err_code>-1){
                cng_kit[$sgn_err_code].focus();
                setTimeout(()=>{$sgn_err_code==0&&(cng_pass.scrollTop=0)},5);
                return !1;
              }
              $key='';
              req_pass.innerHTML='<img src="img/loadn.png" style="position:relative;top:-3px;"> <span style="position:relative;top:-10px;">Updating</span>';
              let user=auth.currentUser,creds=ldl.auth.EmailAuthProvider.credential(user.email,curr_pass.value.trim());
              user.reauthenticateWithCredential(creds).then(()=>{
                user.updatePassword(new_pass.value.trim()).then(()=>{
                  cng_rsk.innerText='Back';
                  req_pass.innerHTML='Update Successful!';
                  $key='cngPass';
                }).catch(err=>{$key='cngPass',req_pass.innerHTML='Update Password',err_stt.innerText=err.message,console.log(err),err_stt.style='display:block;',cng_pass.scrollTop=0})
              }).catch(err=>{$key='cngPass',req_pass.innerHTML='Update Password',err_stt.innerText='Your current password is incorrect. Please try again.',err_stt.style='display:block;',cng_pass.scrollTop=0});
            }
          }
          break;
        }
      }
      return;
    }
    case'srx':{
      switch(ev.key.toLowerCase()){
        case'arrowdown':{
          ev.preventDefault(),ev.stopPropagation();
          movesrx(1);break;
        }
        case'arrowup':{
          ev.preventDefault(),ev.stopPropagation();
          movesrx(-1);break;
        }
        case'softright':{
          if(kaiads&&ev.key==='SoftRight'){kaiads.call("click")}
          else{
            srx_usr.parentElement.style='display:block;animation:srtl 0.3s;';
            $key='buddies';buddies_list.children[0].focus();
            setTimeout(()=>{srx_usr.parentElement.style=''},250);
          }
          break;
        }
        case'backspace':{
          if(document.activeElement.tagName==='INPUT'){
            if(document.activeElement.value===''){
              ev.preventDefault(),ev.stopPropagation();
              srx_usr.parentElement.style='display:block;animation:srtl 0.3s;';
              $key='buddies';buddies_list.children[0].focus();
              setTimeout(()=>{srx_usr.parentElement.style=''},250);
            }
          }else{
            ev.preventDefault(),ev.stopPropagation();
            srx_usr.parentElement.style='display:block;animation:srtl 0.3s;';
            $key='buddies';buddies_list.children[0].focus();
            setTimeout(()=>{srx_usr.parentElement.style=''},250);
          }
          break;
        }
        case'enter':{
          switch(document.activeElement.id){
            case'srx_btn':{
              if(usr_name.value){
                $key='';
                srx_btn.innerHTML='<img src="img/loadn.png" style="position:relative;top:-5px;"> <span style="position:relative;top:-13px;">Searching</span>';
                srxUjar(usr_name.value.trim())
              }else{
                srx_res.innerText='Please Enter a Name';
                usr_name.focus();
              }
            }
          }
          break;
        }
      }
      return;
    }
    case'help':{
      ev.preventDefault(),ev.stopPropagation();
      switch(ev.key){
        case 'ArrowDown': {
          help.scrollBy(0,100);break;
        }
        case 'ArrowUp': {
          help.scrollBy(0,-100);break;
        }
        case 'SoftRight':case'Backspace': {
          if(kaiads&&ev.key==='SoftRight'){kaiads.call("click")}
          else{
            help.parentElement.style='display:block;animation:srtl 0.3s;';
            $_?($key='buddies',buddies_list.children[0].focus()):($key='logink',log_kit[0].focus());
            setTimeout(()=>{help.parentElement.style=''},250);
          }
          break;
        }
        case'SoftLeft':{
          window.location.href = 'mailto:localboss24@gmail.com?subject=Feedback%20for%20[ChatWave]&body=Hi%20Team%2C%0A%0AI%20would%20like%20to%20share%20the%20following%20feedback%20regarding%20the%20app%3A%0A%0A%5BPlease%20describe%20your%20issue%20or%20suggestion%20here%5D%0A%0AApp%20Version%3A%20[Enter%20app%20version]%0ADevice%3A%20[Enter%20device%20model]%0AOperating%20System%3A%20[Enter%20OS%20version]%0A%0AThank%20you!';
          break;
        }
      }
      return;
    }
    case'contact':{
      ev.preventDefault(),ev.stopPropagation();
      switch(ev.key){
        case 'SoftRight':case'Backspace': {
          if(kaiads&&ev.key==='SoftRight'){kaiads.call("click")}
          else{
            contact_page.parentElement.style='display:block;animation:srtl 0.3s;';
            $key='logink';log_kit[0].focus();
            setTimeout(()=>{contact_page.parentElement.style=''},250);
          }
          break;
        }
        case'SoftLeft':{
          window.location.href = 'mailto:localboss24@gmail.com?subject=Feedback%20for%20[ChatWave]&body=Hi%20Team%2C%0A%0AI%20would%20like%20to%20share%20the%20following%20feedback%20regarding%20the%20app%3A%0A%0A%5BPlease%20describe%20your%20issue%20or%20suggestion%20here%5D%0A%0AApp%20Version%3A%20[Enter%20app%20version]%0ADevice%3A%20[Enter%20device%20model]%0AOperating%20System%3A%20[Enter%20OS%20version]%0A%0AThank%20you!';
          break;
        }
      }
      return;
    }
    case'app':{
      ev.preventDefault(),ev.stopPropagation();
      switch(ev.key) {
        case'ArrowUp':case'ArrowLeft': {
          document.activeElement.previousElementSibling&&(document.activeElement.previousElementSibling.focus(),!0)||appxlist.children[appxlist.children.length-1].focus();
          break;
        }
        case'ArrowDown':case'ArrowRight': {
          document.activeElement.nextElementSibling&&(document.activeElement.nextElementSibling.focus(),!0)||appxlist.children[0].focus();
          break;
        }
        case'SoftRight':case'Backspace': {
          if(kaiads&&ev.key==='SoftRight'){kaiads.call("click")}
          else{
            appxlist.parentElement.style='display:block;animation:srtl 0.3s;';
            $_?($key='buddies',buddies_list.children[0].focus()):($key='logink',log_kit[0].focus());
            setTimeout(()=>{appxlist.parentElement.style='',appxlist.innerHTML=''},250);
          }
          break;
        }
        case 'Enter': {
          document.activeElement.click();break;
        }
      }
      return;
    }
    case'profile':{
      ev.preventDefault(),ev.stopPropagation();
      if(ev.key=='Backspace'||ev.key=='SoftRight'){
        if(kaiads&&ev.key==='SoftRight'){kaiads.call("click")}
        else{
          my_profile.parentElement.style='display:block;animation:srtl 0.3s;';
          buddies_list.children[0].focus();
          $key='buddies';
          setTimeout(()=>{my_profile.parentElement.style=''},250);
        }
      }
      return;
    }
    case'update':{
      ev.preventDefault(),ev.stopPropagation();
      switch(ev.key){
        case 'ArrowDown': {
          update_notice.scrollBy(0,100);break;
        }
        case 'ArrowUp': {
          update_notice.scrollBy(0,-100);break;
        }
        case 'SoftRight':case'Backspace': {
          if(kaiads&&ev.key==='SoftRight'){kaiads.call("click")}
          else{
            update_notice.parentElement.style='display:block;animation:srtl 0.3s;';
            $_?($key='buddies',buddies_list.children[0].focus()):($key='logink',log_kit[0].focus());
            setTimeout(()=>{update_notice.parentElement.style=''},250);
          }
          break;
        }
        case'Enter':case'SoftLeft':{
          new MozActivity({
            name: 'open-page',
            data: {
              url: 'https://api.kaiostech.com/apps/manifest/P-UOIUkQoFMaSQAyGx44',
              type: 'url',
              autoDownload: true
            }
          }).onsuccess=function(e){
            window.close();
          };
        break;
        }
      }
      return;
    }
    case'no_internet':{
      if(ev.key=='Backspace'||ev.key=='SoftRight'){window.close()}
      else if(ev.key=='Enter'||ev.key=='SoftLeft'){
        new MozActivity({
          name: "configure",
          data: {
            target: "device",
            section: "wifi"
          }
        });
      }
    }
    default:{
      ev.preventDefault(),ev.stopPropagation();
      return;
    }
  }
}

function opts(action){
  switch(action){
    case'All Users':{
      getAllUsr();
      break;
    }
    case'Active Users':{
      getActUsr();
      break;
    }
    case'Help':{
      help.parentElement.style='display:block;',$key='help';
      break;
    }
    case'More Apps':{
      appxlist.parentElement.style='display:block;',$key='app';
      showApps();
      break;
    }
    case'Contact Us':{
      contact_page.parentElement.style='display:block;',$key='contact';
      break;
    }
    case'Exit':{
      window.close();
      break;
    }
    case'Search':{
      srx_usr.parentElement.style='display:block;',$key='srx';
      srx_kit[0].focus();
      break;
    }
    case'My Profile':{
      my_profile.parentElement.style='display:block;';$key='profile';
      break;
    }
    case'Log out':{
      prog_bar.children[1].innerText='Log out';
      prog_bar.style='';
      $key='';
      realDB.ref('/status/' + auth.currentUser.uid).set({
        status: "Offline",
        lastSeen: ldl.database.ServerValue.TIMESTAMP
      }).then(()=>{
        auth.signOut().then(()=>{
          realDB.ref().off();
          buddies.style='',login_board.style='';
          buddies_list.innerHTML = "";
          setTimeout(()=>{prog_bar.style='display:none;',log_kit[0].focus(),$key='logink'},1e3);
        }).catch(err=>{
          prog_bar.style='display:none;',$key='buddies';
          setTimeout(()=>{alert(err)},150);
        });
      });
      break;
    }
    case'Change Password':{
      cng_pass.parentElement.style='display:block;',$key='cngPass';
      cng_kit[0].focus();
      break;
    }
    case'Change Picture':{
      upld_scs.innerText='Back',buddies.style='',upload_pic.style='display:block;',$key='upldPic',$_=!0,upld_img.focus();
      break;
    }  
  }
}

function showApps(end=!1) {
  appxlist.parentElement.style='display:block;';
  if(apListData){
    let ix=0;
    apListData.forEach((apx)=>{
      appxlist.appendChild(elem('li', {innerHTML:`<img src="${apx.img}" style="width:50px;height:50px;">&nbsp;&nbsp;<span>${apx.name}</span>`}, {class:'apxItm',tabindex:ix++}, {click:(e0)=>{
        let activity = new MozActivity({
          name: 'open-page',
          data: {
            url: apx.ur,
            type: 'url',
            autoDownload: true
          }
        });
        activity.onerror = () => {
          console.log("Error in opening the app download.");
        };
        activity.onsuccess = () => {
          console.log("App download started successfully.");
        };
      }}));
    });
    document.querySelectorAll('.apxItm')[0].focus();
  } else {
    appxlist.innerHTML='<br><br><br><br><br><br><h3>Something went wrong!</h3>';
  }
}

function fullAds(){
  false&&getKaiAd({
    publisher: '1ac9816c-2f98-41cf-9237-a757af9b911a',
    app: 'ChatWave',
    slot: 'main',
    test: 0,
    timeout: 10e3,
    onerror: err=>{setTimeout(bannerAds,35e3);},
    onready: ad => {
      ad.call('display');
      ad.on('close', ()=>{
        lastElem&&(lastElem.focus(),lastElem=null);
      }),
      ad.on('display', ()=>{
        lastElem=document.activeElement;
        setTimeout(bannerAds,35e3);
      });
    }
  });
}

function bannerAds(){
  false&&getKaiAd({
    publisher: '1ac9816c-2f98-41cf-9237-a757af9b911a',
    app: 'ChatWave',
    slot: 'main',
    h:55,
    w:230,
    container:filds.children[0].children[0],
    test: 0,
    onerror: err=>{fullAds()},
    onready: ad => {
      ad.call('display',{navClass:'navItem',display:'block'});
      ad.on('display',()=>{
        kaiads=ad;
        if(++adTime>=4){
          adTime=0;
          if($key==='chats'){
            filds.style='z-index:107;bottom:220px;';
            filds.children[2].style='display:none;';
            filds.children[1].style='display:block;';
            setTimeout(()=>{filds.style='display:none;',filds.children[1].style='',filds.children[2].style='',kaiads=null},10e3);
          }else{
            filds.style='z-index:107;';
            setTimeout(()=>{filds.style='display:none;',kaiads=null},10e3);
          }
          setTimeout(fullAds,35e3)
        }else{
          if($key==='chats'){
            filds.style='z-index:107;bottom:220px;';
            filds.children[2].style='display:none;';
            filds.children[1].style='display:block;';
            setTimeout(()=>{filds.style='',filds.children[1].style='',filds.children[2].style='',kaiads=null},10e3);
          }else{
            filds.style='z-index:107;';
            setTimeout(()=>{filds.style='',kaiads=null},10e3);
          }
        }
      });
    }
  });
}

function updatObserv(){
  const xhr = new XMLHttpRequest({mozSystem: true});
  xhr.open('GET', 'https://popbd.wapgem.com/kaiapps/apps_update.txt', true);
  xhr.responseType = 'json';
  xhr.onload = (e) => {
    let obj=e.currentTarget.response;
    if(obj&&obj.chatwave.version>VERSION){
      $update=!0;
      update_notice.innerHTML=obj.chatwave.text;
    }
  },
  xhr.onerror = (err) => {},
  xhr.send();
}

window.onload = () => {
  document.addEventListener('keydown', mainKeys);
  log_kit=document.querySelectorAll('.login_kit');
  sign_kit=document.querySelectorAll('.signup_kit');
  cng_kit=document.querySelectorAll('.cng_kit');
  srx_kit=document.querySelectorAll('.srx_kit');
  log_kit[0].focus();
  
  pswd.addEventListener('focus', (e)=>{
    pswd.select(),pswd_hint.style.visibility='visible'
  });
  pswd.addEventListener('blur', (e)=>{pswd_hint.style=''});
  pswd.addEventListener('keydown', (e)=>{
    if(e.key=='Call'){
      pswd.type=='password'?(pswd.type='text',pswd.select()):(pswd.type='password');
    }
  });
  signup_email.addEventListener('blur', (e)=>{
    if(!/^[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/.test(signup_email.value.trim())){
      email_notify.innerText='Please enter valid email address',
      $sgn_err_code==-1&&($sgn_err_code=1)
    }else{
      email_notify.innerText='';
      $sgn_err_code==1&&($sgn_err_code=-1);
    }
  });
  fulname.addEventListener('blur', (e)=>{
    if(fulname.value.trim()==''){
      name_notify.innerText='Please enter your full name',
      $sgn_err_code==-1&&($sgn_err_code=0)
    }else if(fulname.value.length>20){
      name_notify.innerText='Keep name under 20 chars',
      $sgn_err_code==-1&&($sgn_err_code=0)
    }else{
      name_notify.innerText='';
      $sgn_err_code==0&&($sgn_err_code=-1);
    }
  });
  signup_pswd.addEventListener('blur', (e)=>{
    if(signup_pswd.value.length<8){
      pswd_notify.innerText='Too short! Minimum 8 characters required';
      signup_board.scrollTop=110,$sgn_err_code==-1&&($sgn_err_code=2);
    } else if(signup_pswd.value.length>20){
      pswd_notify.innerText='Too long! Maximum length is 20 characters';
      signup_board.scrollTop=110,$sgn_err_code==-1&&($sgn_err_code=2);
    }else{
      pswd_notify.innerHTML='';
      $sgn_err_code==2&&($sgn_err_code=-1);
    }
  });
  signup_pswd2.addEventListener('blur', (e)=>{
    if(!signup_pswd2.value||signup_pswd.value!==signup_pswd2.value){
      cnfrm_notify.innerHTML=`Passwords do not match.`,signup_board.scrollTop=160,$sgn_err_code==-1&&($sgn_err_code=3)
    }else{
      cnfrm_notify.innerHTML='';
      $sgn_err_code==3&&($sgn_err_code=-1);
    }
  });
  curr_pass.addEventListener('blur', (e)=>{
    if(curr_pass.value.length<8||curr_pass.value.length>20){
      err_stt.innerText='Use correct Password';
      err_stt.style='display:block;',signup_board.scrollTop=110,
      $sgn_err_code==-1&&($sgn_err_code=0)
    }else{
      err_stt.style='';
      $sgn_err_code==0&&($sgn_err_code=-1);
    }
  });
  new_pass.addEventListener('blur', (e)=>{
    if(new_pass.value.length<8){
      new_pass_err.innerText='Too short! Minimum 8 characters required';
      $sgn_err_code==-1&&($sgn_err_code=1);
    } else if(new_pass.value.length>20){
      new_pass_err.innerText='Too long! Maximum length is 20 characters';
      $sgn_err_code==-1&&($sgn_err_code=1);
    }else{
      new_pass_err.innerHTML='';
      $sgn_err_code==1&&($sgn_err_code=-1);
    }
  });
  renew_pass.addEventListener('blur', (e)=>{
    if(!renew_pass.value||new_pass.value!==renew_pass.value){
      renew_pass_err.innerHTML=`Passwords do not match.`,
      cng_pass.scrollTop=cng_pass.scrollHeight,$sgn_err_code==-1&&($sgn_err_code=2)
    }else{
      renew_pass_err.innerHTML='';
      $sgn_err_code==2&&($sgn_err_code=-1);
    }
  });
  signup_pswd.addEventListener('keydown',(e)=>{
    if(e.key=='Call'||e.key=='CapsLock'){
      signup_pswd.type=='password'?(signup_pswd.type='text',signup_pswd.focus()):(signup_pswd.type='password');
    }
  });
  signup_pswd2.addEventListener('keydown',(e)=>{
    if(e.key=='Call'||e.key=='CapsLock'){
      signup_pswd2.type=='password'?(signup_pswd2.type='text',signup_pswd2.focus()):(signup_pswd2.type='password');
    }
  });
  new_pass.addEventListener('keydown',(e)=>{
    if(e.key=='Call'){
      new_pass.type=='password'?(new_pass.type='text',new_pass.focus()):(new_pass.type='password');
    }
  });
  renew_pass.addEventListener('keydown',(e)=>{
    if(e.key=='Call'){
      renew_pass.type=='password'?(renew_pass.type='text',renew_pass.focus()):(renew_pass.type='password');
    }
  });
  is_accept.addEventListener('click',(e)=>{
    acceptCall()
  });
  login.addEventListener('click',(e)=>{
    auth.signInWithEmailAndPassword(login_email.value.trim(),pswd.value).then(userCre=>{
                prog_bar.style='';
                login_board.style='display:none;';
                invalid_auth.style='';
                login.innerHTML='Login';
              })
              .catch(error=>{$key='logink',invalid_auth.innerHTML='<strong>Wrong credentials</strong><br>Invalid username or password',invalid_auth.style='display:block;',login.innerHTML='Login',login_board.scrollTop=0,log_kit[0].focus()});
  });
  curr_pass.addEventListener('keydown',(e)=>{
    if(e.key=='Call'){
      curr_pass.type=='password'?(curr_pass.type='text',curr_pass.focus()):(curr_pass.type='password');
    }
  });
  pro_pic.addEventListener('change',(ev)=>{
    if(pro_pic.files[0]){
      const file = pro_pic.files[0],reader = new FileReader();
      $upldPicCng=!0;
      upld_state.style='display:flex;';
      upld_state.className='left colorWave';
      reader.onload = function(event) {
        muser.src = event.target.result;
        muser.onload = () => {
          const maxW = 120;
          let imgWidth = muser.naturalWidth;
          let imgHeight = muser.naturalHeight;
          if (imgWidth > maxW) {
            imgHeight = imgHeight*(maxW/imgWidth);
            imgWidth = maxW;
          }
          cnv.width=imgWidth,cnv.height=imgHeight;
          const ctx=cnv.getContext('2d');
          ctx.clearRect(0,0,imgWidth,imgHeight);
          ctx.rect(0,0,imgWidth,imgHeight);
          ctx.drawImage(muser,0,0,imgWidth,imgHeight);
          setTimeout(()=>{
            try{
              cnv_img.src=cnv.toDataURL('image/jpeg', 0.7);
            }catch(err){
              cnv_img.src=event.target.result;
            }
            $scl=1,$posX=0,$posY=0;
          },10);
        }
      };
      reader.readAsDataURL(file);
    }
  });
  pic_msg.addEventListener('change',(ev)=>{
    if(pic_msg.files[0]){
      try{const file = pic_msg.files[0],reader = new FileReader();
      $key='none';
      msgr.children[0].style.backgroundImage='url("img/loadn.png")';
      reader.onload = function(event) {
        temp_pic.src = event.target.result;
        temp_pic.onload = ()=>{
          const maxW = 192;
          let imgWidth = temp_pic.naturalWidth;
          let imgHeight = temp_pic.naturalHeight;
          if (imgWidth > maxW) {
            imgHeight = imgHeight*(maxW/imgWidth);
            imgWidth = maxW;
          }
          cnv_pic.width=imgWidth,cnv_pic.height=imgHeight;
          const ctx=cnv_pic.getContext('2d');
          ctx.clearRect(0,0,imgWidth,imgHeight);
          ctx.rect(0,0,imgWidth,imgHeight);
          ctx.drawImage(temp_pic,0,0,imgWidth,imgHeight);
          setTimeout(()=>{
            try{
              uploadImage(cnv_pic.toDataURL('image/jpeg', 0.7),(url)=>{
                sendMessage($rcvr,url+'#img').then(()=>{
                  let tempReal=realDB.ref(`/messages/${$rcvr}`).push();
                  tempRef.onDisconnect().remove();
                  tempRef.set(auth.currentUser.uid);
                  setTimeout(()=>{tempReal.remove()},3e3);
                  msgr.children[0].style.backgroundImage='url("img/cam.png")';
                  $key='chats';
                  buddies_list.insertBefore($hdrObj[$rcvr].buddy,buddies_list.children[0]);$contact=!0;
                }).catch((err)=>{msgr.children[0].style.backgroundImage='url("img/cam.png")',$key='chats';});
              });
            }catch(err){msgr.children[0].style.backgroundImage='url("img/cam.png")',$key='chats',alert(err)}
          },10);
        }
      };
      reader.onerror=function(ev){
        msgr.children[0].style.backgroundImage='url("img/cam.png")',$key='chats',alert('Something went wrong!')
      };
      reader.readAsDataURL(file);
      }catch(err){$key='chats',alert(err)}
    }
  });
  msgr_text.addEventListener('input',(ev)=>{
    setTypeIndicator(true);
    if(ccl<msgr_text.value.length){
      msgr.style.top='-25px';
      clearTimeout(clearPos);
      clearPos=setTimeout(()=>{msgr.style.top='0'},1500);
    }
    ccl=msgr_text.value.length;
  });
};

window.addEventListener('offline', function () {
  no_internet.parentElement.style='display:block;',$key='no_internet';
});
window.addEventListener('online', function () {
  window.location.reload();
});

//}();

