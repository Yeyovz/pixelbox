/**
* Copyright (C) 2016-2019 Cedric Stoquer
*
* This file is part of the Pixelbox SDK.
*
* This file is subject to the terms and conditions defined in
* file "LICENSE.txt", which is part of this source code package.
*/
var __EXPORT__ = null;
!function(){function t(s,i,e){function h(o,r){if(!i[o]){if(!s[o]){var a=null;if(!r&&a)return a(o,!0);if(n)return n(o,!0);var l=new Error("Cannot find module '"+o+"'");throw l.code="MODULE_NOT_FOUND",l}var p=i[o]={exports:{}};s[o][0].call(p.exports,function(t){var i=s[o][1][t];return h(i||t)},p,p.exports,t,s,i,e)}return i[o].exports}for(var n=null,o=0;o<e.length;o++)h(e[o]);return h}return t}()({1:[function(t,s,i){s.exports=function(t,s){t.prototype=Object.create(s.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}})}},{}],2:[function(t,s,i){function e(t){this.color=0,this.steps=[],this.frozen=!1;for(var s=0;s<t;s++){var i=new h(s);this.steps.push(i)}}var h=t("./Step");s.exports=e;var n=e.prototype;n.$16=function(){for(var t=null,s=this.steps.length-1;s>=0;s--){var i=this.steps[s];if(i.$1l){var e=new h(i.index);e.note=-1,e.$1f=i.$1l,e.next=t,i.next=e}else i.next=t;i.$2h||(t=i)}},n.$12=function(t){this.color=t.c||0;for(var s=t.s,i=0,e=0;e<this.steps.length;e++)i=this.steps[e].$12(s,i);this.$16()}},{"./Step":4}],3:[function(t,s,i){function e(t,s){this.album=t,this.index=s,this.name="untitled",this.author="",this.infos="",this.bpm=130,this.$p=32,this.speed=4,this.groove=[],this.highlight=16,this.loop=0,this.length=0,this.tracks=[],this.effects=[],this.$s=null;for(var i=t.trackCount,e=0;e<i;e++){var h=new n(this,e);this.tracks.push(h)}}var h=t("./Pattern"),n=t("./Track");s.exports=e;var o=e.prototype;o.$12=function(t){this.name=t.n||"",this.author=t.a||"",this.infos=t.i||"",this.bpm=t.b,this.$p=t.l,this.speed=t.s,this.groove=t.g,this.highlight=t.h,this.loop=t.o||0,this.$s=new h(this.$p),this.$s.frozen=!0;var s=t.t;this.length=0;for(var i=0;i<s.length;i++){var e=this.tracks[i];e.$12(s[i]),this.length=Math.max(this.length,e.sequence.length)}var n=t.e||[];this.effects=[];for(var i=0;i<4;i++){var o=n[i];o?this.effects.push({id:o.i||0,params:o.p||{}}):this.effects.push(null)}}},{"./Pattern":2,"./Track":5}],4:[function(t,s,i){function e(t,s){return _[t]*p.length+_[s]}function h(t,s,i,h){var n=e(t,s);i["fx"+h]=n%u,i["fv"+h]=~~(n/u)}function n(t,s,i,e){this.id=t,this.value=s,this.x=i,this.y=e}function o(t){this.index=t,this.$2h=!0,this.next=null,this.note=null,this.inst=null,this.vol=null,this.fx1=null,this.fx2=null,this.fv1=0,this.fv2=0,this.$2o=[],this.$2m=[],this.$1f=0,this.$1l=0}var r=t("../constants"),a=r.$22,l=t("./encoding"),p=l.$21,_=l.$2j,u=l.$q;s.exports=o;var c=o.prototype;c.$x=function(t,s){if(t===a.$1d)return void(this.$1f=s/256);if(t===a.$1e)return void(this.$1l=s/256);var i=s>>4,e=15&s,h=new n(t,s,i,e);t===a.$2s?this.$2o.push(h):this.$2m.push(h)},c.$1h=function(){this.$2h=!(null!==this.note||null!==this.inst||null!==this.vol||null!==this.fx1||null!==this.fx2),this.$2o=[],this.$2m=[],this.$1f=0,this.$1l=0,null!==this.fx2&&this.$x(this.fx2,this.fv2),null!==this.fx1&&this.$x(this.fx1,this.fv1)},c.$12=function(t,s){this.note=null,this.inst=null,this.vol=null,this.fx1=null,this.fx2=null;var i=_[t[s++]],n=1&i,o=i>>1&1,r=i>>2&1,a=i>>3&1,l=i>>4&1;if(n){var p=i>>5&1;p?this.note=-1:this.note=e(t[s++],t[s++])}return o&&(this.inst=_[t[s++]]),r&&(this.vol=_[t[s++]]),a&&h(t[s++],t[s++],this,1),l&&h(t[s++],t[s++],this,2),this.$1h(),s}},{"../constants":13,"./encoding":6}],5:[function(t,s,i){function e(t,s){this.index=s,this.song=t,this.synthId=0,this.patterns=[],this.sequence=[]}var h=t("./Pattern");s.exports=e;var n=e.prototype;n.$4=function(t){var s=this.song.length;if(t>=s){var i=this.song.loop;t=(t-i)%(s-i)+i}if(t>this.sequence.length)return this.song.$s;var e=this.sequence[t];return e===-1?this.song.$s:this.patterns[e]},n.$ms=function(){return this.song.album.instruments[this.synthId]},n.$12=function(t){this.synthId=t.y||0,this.sequence=t.s,this.patterns=[];for(var s=t.p,i=this.song.$p,e=0;e<s.length;e++){var n=new h(i);n.$12(s[e]),this.patterns.push(n)}}},{"./Pattern":2}],6:[function(t,s,i){for(var e="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ#$%&'()*+,-~/:;<=>?@[]^_`{|}. !",h={},n=0;n<e.length;n++)h[e[n]]=n;i.$21=e,i.$2j=h,i.$q=32},{}],7:[function(t,s,i){function e(){this.version=0,this.trackCount=8,this.instruments={},this.songs=[],this.samples=[],this.path=""}var h=t("./Song");s.exports=e;var n=e.prototype;n.$12=function(t){var s=t.v||0,i=t.s||[];this.version=s,this.trackCount=t.t,this.songs=[],this.instruments=t.i,this.samples=t.a;for(var e=0;e<i.length;e++){var n=new h(this,e);n.$12(i[e]),this.songs.push(n)}}},{"./Song":3}],8:[function(t,s,i){function e(t,s){this.index=t,this.sequencer=s,this.effector=null,this.params=null,this.buffL=new Float32Array(o),this.buffR=new Float32Array(o)}var h=t("../constants"),n=t("../synths").getEffector,o=h.$i;s.exports=e,e.prototype.loadEffect=function(t){if(!t)return void(this.effector=null);this.effector=n(t.id,this.sequencer);var s=t.params;for(var i in s)this.effector[i]=s[i]},e.prototype.clearBuffer=function(){if(this.effector)for(var t=0;t<o;t++)this.buffL[t]=0,this.buffR[t]=0},e.prototype.process=function(t){this.effector&&this.effector.process(this.buffL,this.buffR,this.sequencer.buffL,this.sequencer.buffR,t)}},{"../constants":13,"../synths":27}],9:[function(t,s,i){function e(t,s){this.index=t,this.sequencer=s,this.synth=null,this.data=null,this.$r=0,this.$20=null,this.$1g=0,this.output=this.sequencer}var h=t("../synths").getSynth,n=t("../constants"),o=n.$22;s.exports=e;var r=e.prototype;r.restart=function(t){this.synth&&(this.synth.$2f(),this.$r=t||0,this.$20=this.data.$4(this.$r).steps[0],this.$3())},r.loadData=function(t){this.data=t,this.synth=h(t.synthId,this.sequencer),this.output=this.sequencer,this.restart()},r.$w=function(t){if(t){null!==t.vol&&this.synth.$1r(t.vol),null!==t.inst&&this.synth.$n(this.sequencer.$m(this.index,t.inst));for(var s=0;s<t.$2o.length;s++){var i=t.$2o[s];this.synth.$2u(i.id,i.value,i.x,i.y)}null!==t.note&&(t.note===-1?this.synth.$2f():this.synth.$2n(t.note));for(var s=0;s<t.$2m.length;s++){var i=t.$2m[s];i.id===o.$13?this.output=this.sequencer.effects[i.value]||this.sequencer:this.synth.$2u(i.id,i.value,i.x,i.y)}}},r.$3=function(){var t=this.sequencer,s=this.$20,i=t.$v[s.index%t.$v.length];this.$1g=this.$r*t.$1w+(s.index+s.$1f)*t.$1t+i},r.$d=function(){this.$20=this.$20.next,this.$20||(this.$r+=1,this.$20=this.data.$4(this.$r).steps[0]),this.$3()},r.$1v=function(t){if(this.synth){var s=this.sequencer.t;this.$1g<=s&&(this.$w(this.$20),this.$d());for(var i=0,e=s+t;this.$1g<e;){var h=~~(this.$1g-s);this.synth.$1v(this.output.buffL,this.output.buffR,i,h),i=h,this.$w(this.$20),this.$d()}this.synth.$1v(this.output.buffL,this.output.buffR,i,t)}}},{"../constants":13,"../synths":27}],10:[function(t,s,i){function e(){this.tracks=[],this.effects=[],this.buffers=[],this.album=null,this.song=null,this.$1t=0,this.$1w=0,this.$v=[0],this.synth=null,this.t=0,this.stopped=!0,this.$1i=null,this.$14=null,this.buffL=null,this.buffR=null,this.effects.push(this);for(var t=0;t<_;t++)this.effects.push(new a(t,this));this.$2=[]}var h=t("./loadAudioBuffer"),n=t("../constants"),o=t("../audioContext"),r=t("./Track"),a=t("./Effect"),l=n.$15,p=n.$i,_=4;s.exports=e;var u=e.prototype;u.$e=function(){if(!this.$14){this.$1i=o.createGain(),this.$1i.connect(o.destination),this.$1i.gain.value=.5;var t=o.createScriptProcessor(p,0,2);t.onaudioprocess=this.onAudioProcess.bind(this),t.connect(this.$1i),this.$14=t}},u.onAudioProcess=function(t){var s,i=t.outputBuffer,e=this.buffL=i.getChannelData(0),h=this.buffR=i.getChannelData(1);for(s=0;s<p;s++)e[s]=0,h[s]=0;for(s=0;s<this.$2.length;s++)this.$2[s].clearBuffer();if(!this.stopped){for(s=0;s<this.tracks.length;s++)this.tracks[s].$1v(p);for(s=0;s<this.$2.length;s++)this.$2[s].process(p);this.t+=p}},u.$17=function(){for(var t=0;t<this.tracks.length;t++){var s=this.tracks[t].synth;s&&s.reset()}},u.play=function(){this.$g(0)},u.$g=function(t){if(this.song){this.t=t*this.$1w;for(var s=0;s<this.tracks.length;s++)this.tracks[s].restart(t);this.stopped=!1}},u.stop=function(){this.stopped=!0,this.$17()},u.$m=function(t,s){var i=this.song.tracks[t].synthId,e=this.album.instruments[i];return e[s%e.length]},u.loadAlbum=function(t,s){this.stop(),this.album=t,this.song=null,this.tracks=[];for(var i=t.trackCount,e=0;e<i;e++){var h=new r(e,this);this.tracks.push(h)}var n=t.samples;this.buffers=[];for(var e=0;e<n.length;e++)this.buffers.push(null),this.loadAudioBufferInIndex(n[e],e)},u.loadAudioBufferInIndex=function(t,s){var i=this.buffers;h(t,function(t,e){return t?void console.error(t):void(i[s]=e.getChannelData(0))})},u.$a=function(t){if(!this.album)return console.error("No album loaded");var s=this.album.songs[t];if(!s)return console.error("No song at index");this.song=s,this.$1a();for(var i=0;i<this.tracks.length;i++){var e=this.tracks[i];e.loadData(s.tracks[i])}for(var i=1;i<this.effects.length;i++){var h=this.effects[i];h.loadEffect(s.effects[i-1])}this.$h(),this.synth=this.tracks[0].synth,this.$17()},u.$h=function(){this.$2=[];for(var t=1;t<this.effects.length;t++){var s=this.effects[t];s.effector&&this.$2.push(s)}},u.$1a=function(){this.$1t=60*l/this.song.bpm/this.song.speed,this.$1w=this.$1t*this.song.$p,this.$u()},u.$u=function(){this.$v=[0];var t=this.song.groove;if(t&&!(t.length<2)){for(var s=0,i=0;i<t.length;i++)s+=t[i];for(var e=s/t.length,h=t[0],i=1;i<t.length;i++){var n=(h-e*i)/e*this.$1t;this.$v.push(n),h+=t[i]}}}},{"../audioContext":12,"../constants":13,"./Effect":8,"./Track":9,"./loadAudioBuffer":11}],11:[function(t,s,i){function e(t){this.uri=t,this.buffer=null,this.error=null,this.loading=!1,this.onLoad=[]}var h=t("../audioContext"),n={};e.prototype.load=function(t){return this.error||this.buffer?t(this.error,this.buffer):(this.onLoad.push(t),void(this.loading||this.initiateLoad()))},e.prototype.initiateLoad=function(){this.loading=!0;var t=new XMLHttpRequest;t.responseType="arraybuffer";var s=this;t.onreadystatechange=function(){if(4===~~t.readyState)return 200!==~~t.status&&0!==~~t.status?s.completeLoad("xhrError:"+t.status):void h.decodeAudioData(t.response,function(t){return s.completeLoad(null,t)},s.completeLoad.bind(s))},t.open("GET",this.uri,!0),t.send()},e.prototype.completeLoad=function(t,s){this.buffer=s,this.error=t;for(var i=0;i<this.onLoad.length;i++)this.onLoad[i](t,s);this.onLoad=[]},s.exports=function(t,s){var i=n[t];i||(i=n[t]=new e(t)),i.load(s)}},{"../audioContext":12}],12:[function(t,s,i){var e=window.AudioContext,h=new e;s.exports=h},{}],13:[function(t,s,i){i.$i=2048,i.$15=44100,i.$10=i.$15/64,i.$22={$1u:0,$2i:1,$2k:2,$2v:3,$2s:4,$8:5,$k:6,$1d:7,$1e:8,$13:9},i.$1s=1,i.$7=2,i.$9=32,i.$6=4,i.TAU=2*Math.PI},{}],14:[function(t,s,i){function e(t){return 440*Math.pow(2,(t-69)/12)}for(var h=[],n=0;n<128;n++)h.push(e(n));i.$b=h,i.$1c=function(t){t<0&&(t=0),t>127&&(t=127);var s=~~t,i=t-s,e=h[s],n=h[s+1];return e+i*(n-e)}},{}],15:[function(t,s,i){var e=t("./audioContext"),h=t("./Album"),n=t("./Sequencer"),o=new h,r=new n;r.$e();var a={};__EXPORT__={context:e,output:r.$1i,loadData:function(t){o.$12(t),r.loadAlbum(o),a={};for(var s=0;s<o.songs.length;s++){var i=o.songs[s];a[i.name]=s}},playSong:function(t){a[t]&&(t=a[t]),r.$a(~~t),r.play()},stop:function(){r.stop()},$1r:function(t){r.$1i.gain.value=Math.max(0,Math.min(t,1))}}},{"./Album":7,"./Sequencer":10,"./audioContext":12}],16:[function(t,s,i){function e(){this._time=11025,this.f=.4,this.c=.6,this.$2g=new Float32Array(h),this.$1y=0,this._filterState=0}var h=44100;s.exports=e;var n=e.prototype;e.getDefaultParams=function(){return{t:.25,f:.4,c:.6}},n.process=function(t,s,i,e,n){for(var o=0;o<n;o++){var r=this.$2g[this.$1y]*this.f;this._filterState=r*this.c+this._filterState*(1-this.c),r=t[o]+this._filterState,this.$2g[(this.$1y+this._time)%h]=r,this.$1y+=1,this.$1y>=h&&(this.$1y=0),i[o]+=r,e[o]+=r}},Object.defineProperty(n,"t",{set:function(t){this._time=Math.max(100,~~(t*h))}})},{}],17:[function(t,s,i){function e(t){this.synth=t,this.$2p=0,this.$27=f.O,this.$24=0,this.out=0}function h(){this.note=0,this.volume=0,this.playing=!1,this.$2q=0,this.$f=0,this.$o=0,this.$2w=0,this.instrument=null,this.$1j=null,this.$1m=0,this.$1o=0,this.$1n=0,this.$28=0,this.$29=0,this.$2a=0,this.$2d=0,this.$2b=0,this.$2l=0,this.$11=!1,this.$2e=0,this.$1p=null,this.$1x=0,this._damping=!1,this._dampVal=0,this._lastOut=0,this.$1k=[new e(this),new e(this),new e(this),new e(this)],this.$n(this.$1())}var n=t("../constants"),o=t("../noteUtils"),r=n.$22,a=n.$15,l=a/60,p=(n.$1s,n.TAU),_=n.$7,u=n.$6,c=n.$9,f={A:4,D:3,S:2,R:1,O:0};e.prototype.$n=function(t){this.instrument=t},e.prototype.$25=function(){this.$24=0,this.$27=f.A},e.prototype.$1v=function(){switch(this.$27){case f.O:return;case f.S:break;case f.A:this.$24+=this.instrument.a/64,this.$24>=1&&(this.$24=1,this.$27=f.D);break;case f.D:this.$24-=this.instrument.d/64,this.$24<=this.instrument.s&&(this.$24=this.instrument.s,1===this.synth.instrument.c?this.$27=f.R:this.$27=f.S);break;case f.R:this.$24-=this.instrument.r/64,this.$24<=0&&(this.$24=0,this.$27=f.O,this.out=0)}var t=this.synth.$1k,s=this.instrument.c,i=0;i+=s[0]*t[0].out,i+=s[1]*t[1].out,i+=s[2]*t[2].out,i+=s[3]*t[3].out,this.$2p+=this.synth.$2q*this.instrument.m,this.$2p>=1&&(this.$2p=this.$2p%1),this.out=this.$24*Math.sin(p*(this.$2p+i))},s.exports=h,h.prototype.$1=function(){return{n:"",l:{},p:0,c:1,o:[{m:1,a:.25,d:.00225,s:.5,r:.00225,c:[0,0,0,0],v:0},{m:1,a:.25,d:.00225,s:.5,r:.00225,c:[0,0,0,0],v:0},{m:1,a:.25,d:.00225,s:.5,r:.00225,c:[0,0,0,0],v:0},{m:1,a:.25,d:.00225,s:.5,r:.00225,c:[0,0,0,0],v:1}]}},h.prototype.$n=function(t){this.instrument=t,this.$1k[0].$n(t.o[0]),this.$1k[1].$n(t.o[1]),this.$1k[2].$n(t.o[2]),this.$1k[3].$n(t.o[3])},h.prototype.reset=function(){this.$2f(),this.$1r(15),this.$11=!1,this.$1p=null,this.$1x=0,this.$2a=0,this.$2l=0,this.$19(),this.$18()},h.prototype.$2n=function(t){null!==this.$1j?(this.note+=this.$1o,this.$1n=0,this.$1o=t-this.note,this.$1m=this.$1o/(this.$1j+1)/_,this.$1j=null):(this.note=t,this.$1o=0,this.$1m=0,this.$1n=0),this.playing=!0,this.$o=0,this.$2e=0,this.$1k[0].$25(),this.$1k[1].$25(),this.$1k[2].$25(),this.$1k[3].$25(),this.$19(),this._damping=!1},h.prototype.$2f=function(){this.playing&&(0===this.instrument.c?(this.releasing=!0,this.$1k[0].$27=f.R,this.$1k[1].$27=f.R,this.$1k[2].$27=f.R,this.$1k[3].$27=f.R):(this.playing=!1,this._damping=!0,this._dampVal=this._lastOut))},h.prototype.$19=function(){var t=0;this.$29>0&&(t=this.$2a*Math.sin(this.$28*p));var s=this.note+this.instrument.p+this.$1x+this.$1n+t;this.$2q=o.$1c(s)/a},h.prototype.$18=function(){var t=1;this.$2b>0&&(t=1-this.$2l*(Math.sin(this.$2d*p)+1)),this.$2w=this.volume*t},h.prototype.$c=function(){var t=!1,s=!1;this.$11&&(this.$2e=(this.$2e+1)%this.$1p.length,this.$1x=this.$1p[this.$2e],s=!0),0!==this.$1m&&(this.$1n+=this.$1m,s=!0,(this.$1m>0&&this.$1n>=this.$1o||this.$1m<0&&this.$1n<=this.$1o)&&(this.$1n=this.$1o,this.$1m=0)),this.$29>0&&(this.$28+=this.$29,this.$28>1&&(this.$28-=1),s=!0),this.$2b>0&&(this.$2d+=this.$2b,this.$2d>1&&(this.$2d-=1),t=!0),s&&this.$19(),t&&this.$18()},h.prototype.$1r=function(t){this.volume=t/40,this.$18()},h.prototype.$2u=function(t,s,i,e){var h=!1,n=!1;switch(t){case r.$1u:this.$1x=0,this.$2e=0,0===s?(this.$11=!1,this.$1p=null,h=!0):(this.$11=!0,this.$1p=0===e?[0,i]:[0,i,e]);break;case r.$2k:this.$29=i/64,this.$2a=e/16,0===e&&(h=!0);break;case r.$2i:this.$2b=i/64,this.$2l=e/c,n=!0;break;case r.$2s:this.$1j=s/u;break;case r.$k:this.note+=this.$1o,this.$1n=0,this.$1o=e,this.$1m=e/(i+1)/_;break;case r.$8:this.note+=this.$1o,this.$1n=0,this.$1o=-e,this.$1m=-e/(i+1)/_}h&&this.$19(),n&&this.$18()},h.prototype.$1v=function(t,s,i,e){if(this._damping){for(var h=i;h<e;h++)if(this._dampVal*=.98,t[h]+=this._dampVal,s[h]+=this._dampVal,this._dampVal>-.01&&this._dampVal<.01)return void(this._damping=!1)}else if(this.playing){for(var h=i;h<e;h++){if(++this.$o>=l){if(this.$o-=l,this.$1k[0].$27===f.O&&this.$1k[1].$27===f.O&&this.$1k[2].$27===f.O&&this.$1k[3].$27===f.O)return void(this.playing=!1);this.$c()}this.$1k[0].$1v(),this.$1k[1].$1v(),this.$1k[2].$1v(),this.$1k[3].$1v();var n=0;n+=this.$1k[0].instrument.v*this.$1k[0].out,n+=this.$1k[1].instrument.v*this.$1k[1].out,n+=this.$1k[2].instrument.v*this.$1k[2].out,n+=this.$1k[3].instrument.v*this.$1k[3].out,n*=this.$2w,t[h]+=n,s[h]+=n}this._lastOut=n}}},{"../constants":13,"../noteUtils":14}],18:[function(t,s,i){function e(t){this.feedback=0,this.$2g=new Float32Array(t),this._bufsize=t,this._index=0,this._filtered=0,this._damp1=0,this._damp2=0}function h(t){this.$2g=new Float32Array(t),this._bufsize=t,this._index=0}function n(){this._roomSize=0,this._roomSize1=0,this._damp=0,this._damp1=0,this._wet=0,this._wet1=0,this._wet2=0,this._dry=0,this._width=0,this.combL=[],this.combR=[],this.allpassL=[],this.allpassR=[];for(var t=0;t<r;t++)this.combL.push(new e(l[t])),this.combR.push(new e(l[t]+o));for(var s=0;s<a;s++)this.allpassL.push(new h(p[s])),this.allpassR.push(new h(p[s]+o))}e.prototype.setDamp=function(t){this._damp1=t,this._damp2=1-t},e.prototype.mute=function(){for(var t=0;t<this._bufsize;t++)this.$2g[t]=0},e.prototype.process=function(t){var s=this.$2g[this._index];return this._filtered=s*this._damp2+this._filtered*this._damp1,this.$2g[this._index]=t+this._filtered*this.feedback,++this._index>=this._bufsize&&(this._index=0),s},h.prototype.mute=function(){for(var t=0;t<this._bufsize;t++)this.$2g[t]=0},h.prototype.process=function(t){var s=this.$2g[this._index];return this.$2g[this._index]=t+.5*s,++this._index>=this._bufsize&&(this._index=0),s-t};var o=23,r=8,a=4,l=[1116,1188,1277,1356,1422,1491,1557,1617],p=[556,441,341,225];s.exports=n;var _=n.prototype;n.getDefaultParams=function(){return{d:.8,w:.3,z:.8,a:.5,i:.8}},_.process=function(t,s,i,e,h){for(var n,o=0;o<h;o++){var l=0,p=0;for(n=0;n<r;n++)l+=this.combL[n].process(t[o]),p+=this.combR[n].process(s[o]);for(n=0;n<a;n++)l=this.allpassL[n].process(l),p=this.allpassR[n].process(p);i[o]+=l*this._wet1+p*this._wet2+t[o]*this._dry,e[o]+=p*this._wet1+l*this._wet2+s[o]*this._dry}},_.mute=function(){for(var t=0;t<r;t++)this.combL[t].mute(),this.combR[t].mute();for(var t=0;t<a;t++)this.allpassL[t].mute(),this.allpassR[t].mute()},_.update=function(){this._wet1=this._wet*(this._width/2+.5),this._wet2=this._wet*((1-this._width)/2),this._roomSize1=this._roomSize,this._damp1=this._damp;for(var t=0;t<r;t++)this.combL[t].feedback=this._roomSize1,this.combR[t].feedback=this._roomSize1,this.combL[t].setDamp(this._damp1),this.combR[t].setDamp(this._damp1)},Object.defineProperty(_,"d",{set:function(t){this._dry=1*t}}),Object.defineProperty(_,"w",{set:function(t){this._wet=.06*t,this.update()}}),Object.defineProperty(_,"z",{set:function(t){this._roomSize=.28*t+.7,this.update()}}),Object.defineProperty(_,"a",{set:function(t){this._damp=.4*t,this.update()}}),Object.defineProperty(_,"i",{set:function(t){this._width=t,this.update()}})},{}],19:[function(t,s,i){function e(){this.note=0,this.volume=0,this.playing=!1,this.$o=0,this.$2w=l,this.$2c=0,this.$26=0,this.$1q=1,this.$23=0,this.$2t=u[0],this.$2d=0,this.$2b=0,this.$2l=0,this.$1b=new n(1,15),this.$j=new n(0,1)}var h=t("../constants"),n=t("./TableEnvelope"),o=h.$22,r=h.$15,a=r/60,l=1.4,p=2*Math.PI,_=[.01,.02,.04,.053,.08,.105,.15,.2,.25,.3,.35,.4,.45,.5,.7,.9],u=[8192,256,6144,4480];s.exports=e,e.prototype.$1=function(){return{n:""}},e.prototype.$n=function(t){this.$1b.set(t.a),this.$j.set(t.p)},e.prototype.reset=function(){this.$2f(),this.$1r(15),this.$2c=0,this.$2l=0,this.$19(),this.$18()},e.prototype.$2n=function(t){this.note=t,this.$o=0,this.$1b.$2r(),this.$j.$2r(),this.$19(),this.$18(),this.playing=!0},e.prototype.$2f=function(){this.playing=!1},e.prototype.$1r=function(t){this.volume=t/30,this.$18()},e.prototype.$2u=function(t,s,i,e){var h=!1;switch(t){case o.$2i:this.$2b=i/64,this.$2l=e/32,h=!0;break;case o.$2v:this.$2t=u[s%u.length]}h&&this.$18()},e.prototype.$18=function(){var t=1;this.$2b>0&&(t=1-this.$2l*(Math.sin(this.$2d*p)+1)),this.$2w=l*this.volume*t,this.$2w*=this.$1b.value},e.prototype.$19=function(){var t=~~(this.note+this.$j.value);this.$26=_[t%16]},e.prototype.$c=function(){var t=!1,s=!1;this.$2b>0&&(this.$2d+=this.$2b,this.$2d>1&&(this.$2d-=1),t=!0),this.$1b.enabled&&this.$1b.clock()&&(t=!0),this.$j.enabled&&this.$j.clock()&&(s=!0),s&&this.$19(),t&&this.$18()},e.prototype.$1v=function(t,s,i,e){if(this.playing)for(var h=i;h<e;h++){if(++this.$o>=a&&(this.$o-=a,this.$c()),this.$2c+=this.$26,this.$2c>1){this.$2c=this.$2c%1;var n=!(16384&this.$1q)^!(this.$1q&this.$2t);this.$1q=32767&(this.$1q<<1|n),this.$23=(16384&this.$1q)>>14}var o=(this.$23-.5)*this.$2w;t[h]+=o,s[h]+=o}}},{"../constants":13,"./TableEnvelope":25}],20:[function(t,s,i){function e(){this.note=0,this.volume=0,this.playing=!1,this.$o=0,this.$2w=.25,this.$2t=.25,this.$2c=0,this.$26=0,this.$1j=null,this.$1m=0,this.$1o=0,this.$1n=0,this.$28=0,this.$29=0,this.$2a=0,this.$2d=0,this.$2b=0,this.$2l=0,this.$1b=new o(1,15),this.$j=new o(0,1),this.$z=new o(0,16),this.$t=new o(0,1),this.$11=!1,this.$2e=0,this.$1p=null,this.$1x=0}for(var h=t("../constants"),n=t("../noteUtils"),o=t("./TableEnvelope"),r=h.$22,a=h.$15,l=a/60,p=h.TAU,_=h.$7,u=h.$6,c=h.$9,f=[1/8,.25,.5,.75],d=1;d<63;d++)f.push(d/64);s.exports=e,e.prototype.$1=function(){return{n:""}},e.prototype.$n=function(t){this.$1b.set(t.a),this.$j.set(t.p),this.$z.set(t.t),this.$t.set(t.d)},e.prototype.reset=function(){this.$2f(),this.$1r(15),this.$2c=0,this.$11=!1,this.$1x=0,this.$1p=null,this.$2a=0,this.$2l=0,this.$19(),this.$18()},e.prototype.$2n=function(t){null!==this.$1j?(this.note+=this.$1o,this.$1n=0,this.$1o=t-this.note,this.$1m=this.$1o/(this.$1j+1)/_,this.$1j=null):(this.note=t,this.$1o=0,this.$1m=0,this.$1n=0),this.$o=0,this.$2e=0,this.$1b.$2r(),this.$j.$2r(),this.$z.$2r(),this.$t.$2r(),this.$19(),this.$18(),this.playing=!0},e.prototype.$2f=function(){this.playing=!1,this.$1j=null},e.prototype.$1r=function(t){this.volume=t/60,this.$18()},e.prototype.$2u=function(t,s,i,e){var h=!1,n=!1;switch(t){case r.$1u:this.$1x=0,this.$2e=0,0===s?(this.$11=!1,this.$1p=null,h=!0):(this.$11=!0,this.$1p=0===e?[0,i]:[0,i,e]);break;case r.$2k:this.$29=i/64,this.$2a=e/16,0===e&&(h=!0);break;case r.$2i:this.$2b=i/64,this.$2l=e/c,n=!0;break;case r.$2s:this.$1j=s/u;break;case r.$k:this.note+=this.$1o,this.$1n=0,this.$1o=e,this.$1m=e/(i+1)/_;break;case r.$8:this.note+=this.$1o,this.$1n=0,this.$1o=-e,this.$1m=-e/(i+1)/_;break;case r.$2v:this.$2t=f[s%f.length]}h&&this.$19(),n&&this.$18()},e.prototype.$18=function(){var t=1;this.$2b>0&&(t=1-this.$2l*(Math.sin(this.$2d*p)+1)),this.$2w=this.volume*t,this.$2w*=this.$1b.value},e.prototype.$19=function(){var t=0;this.$29>0&&(t=this.$2a*Math.sin(this.$28*p));var s=this.note+this.$1x+this.$1n+this.$j.value+this.$z.value+t;this.$26=n.$1c(s)/a},e.prototype.$c=function(){var t=!1,s=!1;this.$11&&(this.$2e=(this.$2e+1)%this.$1p.length,this.$1x=this.$1p[this.$2e],s=!0),0!==this.$1m&&(this.$1n+=this.$1m,s=!0,(this.$1m>0&&this.$1n>=this.$1o||this.$1m<0&&this.$1n<=this.$1o)&&(this.$1n=this.$1o,this.$1m=0)),this.$29>0&&(this.$28+=this.$29,this.$28>1&&(this.$28-=1),s=!0),this.$2b>0&&(this.$2d+=this.$2b,this.$2d>1&&(this.$2d-=1),t=!0),this.$1b.enabled&&this.$1b.clock()&&(t=!0),this.$j.enabled&&this.$j.clock()&&(s=!0),this.$z.enabled&&this.$z.clock()&&(s=!0),this.$t.enabled&&this.$t.clock()&&(this.$2t=f[this.$t.value]),s&&this.$19(),t&&this.$18()},e.prototype.$1v=function(t,s,i,e){if(this.playing)for(var h=i;h<e;h++){++this.$o>=l&&(this.$o-=l,this.$c()),this.$2c+=this.$26,this.$2c>1&&(this.$2c=this.$2c%1);var n=this.$2c>this.$2t?this.$2w:-this.$2w;t[h]+=n,s[h]+=n}}},{"../constants":13,"../noteUtils":14,"./TableEnvelope":25}],21:[function(t,s,i){function e(){h.call(this),this._damping=!1,this._dampVal=0}var h=t("./SimpleOscillator"),n=t("../constants"),o=t("inherits"),r=n.$15,a=r/60,l=[0,.12,.25,.37,.5,.62,.75,.87,.87,.75,.62,.5,.37,.25,.12,0,-.12,-.25,-.37,-.5,-.62,-.75,-.87,-1,-1,-.87,-.75,-.62,-.5,-.37,-.25,-.12];o(e,h),s.exports=e,e.prototype.$2n=function(t){h.prototype.$2n.call(this,t),this._damping=!1},e.prototype.$2f=function(){this.playing&&(this._damping=!0,this._dampVal=l[~~(32*this.$2c)]*this.$2w),this.playing=!1},e.prototype.$1v=function(t,s,i,e){if(this._damping){for(var h=i;h<e;h++)if(this._dampVal*=.98,t[h]+=this._dampVal,s[h]+=this._dampVal,this._dampVal>-.01&&this._dampVal<.01)return this._damping=!1,void(this.$2c=0)}else if(this.playing)for(var h=i;h<e;h++){++this.$o>=a&&(this.$o-=a,this.$c()),this.$2c+=this.$26,this.$2c>1&&(this.$2c=this.$2c%1);var n=l[~~(32*this.$2c)]*this.$2w;t[h]+=n,s[h]+=n}}},{"../constants":13,"./SimpleOscillator":24,inherits:1}],22:[function(t,s,i){function e(t){this._sequencer=t,this.$2g=null,this._instrument=this.$1(),this.note=0,this.volume=0,this.playing=!1,this.$1y=0,this.$1z=0,this.$f=0,this.$o=0,this.$2w=1,this.$1j=null,this.$1m=0,this.$1o=0,this.$1n=0,this.$28=0,this.$29=0,this.$2a=0,this.$2d=0,this.$2b=0,this.$2l=0,this.$27=f.O,this.$24=0}var h=t("../constants"),n=t("../noteUtils"),o=(h.$1s,h.$22),r=h.$15,a=r/60,l=n.$b[60],p=h.TAU,_=h.$7,u=h.$6,c=h.$9,f={A:4,D:3,S:2,R:1,O:0};s.exports=e,e.prototype.$1=function(){return{n:"",a:0,s:0,e:0,l:0,p:0,v:[1,1,1,1,0]}},e.prototype.$n=function(t){this._instrument=t;var s=t.a||0;this.$2g=this._sequencer.buffers[s],this.$1y=t.s},e.prototype.reset=function(){this.playing=!1,this.$1r(15),this.$19(),this.$18()},e.prototype.$2n=function(t){null!==this.$1j?(this.note+=this.$1o,this.$1n=0,this.$1o=t-this.note,this.$1m=this.$1o/(this.$1j+1)/_,this.$1j=null):(this.note=t,this.$1o=0,this.$1m=0,this.$1n=0),this.$o=0,this.$1y=this._instrument.s,this.$19(),this.$18(),this.$24=0,this.$27=f.A,this.$2g&&(this.playing=!0)},e.prototype.$2f=function(){0===this._instrument.v[4]?this.$27=f.R:this.playing=!1},e.prototype.$1r=function(t){this.volume=t/20,this.$18()},e.prototype.$2u=function(t,s,i,e){var h=!1,n=!1;switch(t){case o.$2k:this.$29=i/64,this.$2a=e/16,0===e&&(h=!0);break;case o.$2i:this.$2b=i/64,this.$2l=e/c,n=!0;break;case o.$2s:this.$1j=s/u;break;case o.$k:this.note+=this.$1o,this.$1n=0,this.$1o=e,this.$1m=e/(i+1)/_;break;case o.$8:this.note+=this.$1o,this.$1n=0,this.$1o=-e,this.$1m=-e/(i+1)/_}h&&this.$19(),n&&this.$18()},e.prototype.$18=function(){var t=1;this.$2b>0&&(t=1-this.$2l*(Math.sin(this.$2d*p)+1)),this.$2w=this.volume*t},e.prototype.$19=function(){var t=0;this.$29>0&&(t=this.$2a*Math.sin(this.$28*p));var s=this.note+this._instrument.p+this.$1n+t;this.$1z=n.$1c(s)/l},e.prototype.$c=function(){var t=!1,s=!1;0!==this.$1m&&(this.$1n+=this.$1m,s=!0,(this.$1m>0&&this.$1n>=this.$1o||this.$1m<0&&this.$1n<=this.$1o)&&(this.$1n=this.$1o,this.$1m=0)),this.$29>0&&(this.$28+=this.$29,this.$28>1&&(this.$28-=1),s=!0),this.$2b>0&&(this.$2d+=this.$2b,this.$2d>1&&(this.$2d-=1),t=!0),s&&this.$19(),t&&this.$18()},e.prototype.$5=function(){if(this.$27!==f.O){var t=this._instrument.v;switch(this.$27){case f.S:break;case f.A:this.$24+=t[0],this.$24>=1&&(this.$24=1,
this.$27=f.D);break;case f.D:this.$24-=t[1],this.$24<=t[2]&&(this.$24=t[2],1===t[4]?this.$27=f.R:this.$27=f.S);break;case f.R:this.$24-=t[3],this.$24<=0&&(this.$24=0,this.$27=f.O,this.playing=!1)}}},e.prototype.$1v=function(t,s,i,e){if(this.playing)for(var h=i;h<e;h++){if(++this.$f>=64&&(this.$f=0,this.$5()),++this.$o>=a&&(this.$o-=a,this.$c()),this.$1y+=this.$1z,this.$1y>this._instrument.e){if(0===this._instrument.l)return void(this.playing=!1);this.$1y-=this._instrument.l}var n=this.$2g[~~this.$1y]*this.$24*this.$2w;t[h]+=n,s[h]+=n}}},{"../constants":13,"../noteUtils":14}],23:[function(t,s,i){function e(){h.call(this)}var h=t("./SimpleOscillator"),n=t("../constants"),o=t("inherits"),r=n.$15,a=r/60;o(e,h),s.exports=e,e.prototype.$1v=function(t,s,i,e){if(this.playing)for(var h=i;h<e;h++){++this.$o>=a&&(this.$o-=a,this.$c()),this.$2c+=this.$26,this.$2c>1&&(this.$2c=this.$2c%1);var n=(this.$2c-.5)*this.$2w;t[h]+=n,s[h]+=n}}},{"../constants":13,"./SimpleOscillator":24,inherits:1}],24:[function(t,s,i){function e(){this._instrument=null,this.note=0,this.volume=0,this.playing=!1,this.$o=0,this.$2w=p,this.$2c=0,this.$26=0,this.$1j=null,this.$1m=0,this.$1o=0,this.$1n=0,this.$28=0,this.$29=0,this.$2a=0,this.$2d=0,this.$2b=0,this.$2l=0,this.$11=!1,this.$2e=0,this.$1p=null,this.$1x=0,this.$1b=new o(1,15),this.$j=new o(0,1),this.$z=new o(0,16)}var h=t("../constants"),n=t("../noteUtils"),o=t("./TableEnvelope"),r=h.$22,a=h.$15,l=h.TAU,p=h.$1s,_=h.$7,u=h.$6,c=h.$9;s.exports=e;var f=e.prototype;f.$1=function(){return{n:""}},f.$n=function(t){this._instrument=t,this.$1b.set(t.a),this.$j.set(t.p),this.$z.set(t.t)},f.reset=function(){this.$2f(),this.$1r(15),this.$11=!1,this.$1p=null,this.$1x=0,this.$2a=0,this.$2l=0,this.$19(),this.$18()},f.$2n=function(t){null!==this.$1j?(this.note+=this.$1o,this.$1n=0,this.$1o=t-this.note,this.$1m=this.$1o/(this.$1j+1)/_,this.$1j=null):(this.note=t,this.$1o=0,this.$1m=0,this.$1n=0),this.$o=0,this.$2e=0,this.$1b.$2r(),this.$j.$2r(),this.$z.$2r(),this.$19(),this.$18(),this.playing=!0},f.$2f=function(){this.playing=!1},f.$1r=function(t){this.volume=t/30,this.$18()},f.$2u=function(t,s,i,e){var h=!1,n=!1;switch(t){case r.$1u:this.$1x=0,this.$2e=0,0===s?(this.$11=!1,this.$1p=null,h=!0):(this.$11=!0,this.$1p=0===e?[0,i]:[0,i,e]);break;case r.$2k:this.$29=i/64,this.$2a=e/16,0===e&&(h=!0);break;case r.$2i:this.$2b=i/64,this.$2l=e/c,n=!0;break;case r.$2s:this.$1j=s/u;break;case r.$k:this.note+=this.$1o,this.$1n=0,this.$1o=e,this.$1m=e/(i+1)/_;break;case r.$8:this.note+=this.$1o,this.$1n=0,this.$1o=-e,this.$1m=-e/(i+1)/_}h&&this.$19(),n&&this.$18()},f.$18=function(){var t=1;this.$2b>0&&(t=1-this.$2l*(Math.sin(this.$2d*l)+1)),this.$2w=p*this.volume*t,this.$2w*=this.$1b.value},f.$19=function(){var t=0;this.$29>0&&(t=this.$2a*Math.sin(this.$28*l));var s=this.note+this.$1x+this.$1n+this.$j.value+this.$z.value+t;this.$26=n.$1c(s)/a},f.$c=function(){var t=!1,s=!1;this.$11&&(this.$2e=(this.$2e+1)%this.$1p.length,this.$1x=this.$1p[this.$2e],s=!0),0!==this.$1m&&(this.$1n+=this.$1m,s=!0,(this.$1m>0&&this.$1n>=this.$1o||this.$1m<0&&this.$1n<=this.$1o)&&(this.$1n=this.$1o,this.$1m=0)),this.$29>0&&(this.$28+=this.$29,this.$28>1&&(this.$28-=1),s=!0),this.$2b>0&&(this.$2d+=this.$2b,this.$2d>1&&(this.$2d-=1),t=!0),this.$1b.enabled&&this.$1b.clock()&&(t=!0),this.$j.enabled&&this.$j.clock()&&(s=!0),this.$z.enabled&&this.$z.clock()&&(s=!0),s&&this.$19(),t&&this.$18()},f.$1v=function(t,s,i,e){}},{"../constants":13,"../noteUtils":14,"./TableEnvelope":25}],25:[function(t,s,i){function e(t,s){this._playing=!1,this._pos=0,this.min=t,this.max=s,this.data=null,this.table=null,this.enabled=!1,this.value=this.min}s.exports=e,e.prototype.set=function(t){if(!t)return this.enabled=!1,this.data=null,this.table=null,void(this.value=this.min);var s=t.t||null;this.data=t,this.enabled=s&&s.length&&!0,this.table=s,this.value=s?s[0]/this.max:this.min},e.prototype.clock=function(){return!!this._playing&&(this._pos+=1,this._pos>=this.table.length&&(0===this.data.l?(this._pos=this.table.length-1,this._playing=!1):this._pos-=this.data.l),this.value=this.table[this._pos]/this.max,!0)},e.prototype.$2r=function(){this.enabled&&(this._playing=!0,this._pos=0,this.value=this.table[0]/this.max)}},{}],26:[function(t,s,i){function e(){h.call(this),this._damping=!1,this._dampVal=0,this.$n(this.$1())}var h=t("./SimpleOscillator"),n=t("../constants"),o=t("inherits"),r=n.$15,a=r/60;o(e,h),s.exports=e,e.prototype.$1=function(){return{n:"",w:{t:[0,1,2,3,4,5,6,7,8,7,6,5,4,3,2,1,0,-1,-2,-3,-4,-5,-6,-7,-8,-7,-6,-5,-4,-3,-2,-1]}}},e.prototype.$2n=function(t){h.prototype.$2n.call(this,t),this._damping=!1},e.prototype.$2f=function(){this.playing&&(this._damping=!0,this._dampVal=this._instrument.w.t[~~(32*this.$2c)]*this.$2w),this.playing=!1},e.prototype.$1r=function(t){this.volume=t/256,this.$18()},e.prototype.$1v=function(t,s,i,e){if(this._damping){for(var h=i;h<e;h++)if(this._dampVal*=.98,t[h]+=this._dampVal,s[h]+=this._dampVal,this._dampVal>-.01&&this._dampVal<.01)return this._damping=!1,void(this.$2c=0)}else if(this.playing)for(var h=i;h<e;h++){++this.$o>=a&&(this.$o-=a,this.$c()),this.$2c+=this.$26,this.$2c>1&&(this.$2c=this.$2c%1);var n=this._instrument.w.t[~~(32*this.$2c)]*this.$2w;t[h]+=n,s[h]+=n}}},{"../constants":13,"./SimpleOscillator":24,inherits:1}],27:[function(t,s,i){var e=t("./NesPulse"),h=t("./NesNoise"),n=t("./NesTriangle"),o=t("./Wavetable"),r=t("./Sawtooth"),a=t("./Sampler"),l=t("./FM"),p=t("./FreeVerb"),_=t("./Delay"),u=[null,e,n,h,r,o,a,l,null,null],c=[null,p,_];i.getSynth=function(t,s){if(!t)return null;var i=u[t];if(!i)return null;var e=new i(s);return e},i.getEffector=function(t,s){if(!t)return null;var i=c[t];if(!i)return null;var e=new i;return e},i.$y=c},{"./Delay":16,"./FM":17,"./FreeVerb":18,"./NesNoise":19,"./NesPulse":20,"./NesTriangle":21,"./Sampler":22,"./Sawtooth":23,"./Wavetable":26}]},{},[15]);
module.exports = __EXPORT__;
