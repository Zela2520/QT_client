(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8944],{88903:function(e,n,t){"use strict";var r=this&&this.__awaiter||function(e,n,t,r){return new(t||(t=Promise))((function(o,c){function a(e){try{s(r.next(e))}catch(n){c(n)}}function i(e){try{s(r.throw(e))}catch(n){c(n)}}function s(e){var n;e.done?o(e.value):(n=e.value,n instanceof t?n:new t((function(e){e(n)}))).then(a,i)}s((r=r.apply(e,n||[])).next())}))},o=this&&this.__generator||function(e,n){var t,r,o,c,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return c={next:i(0),throw:i(1),return:i(2)},"function"===typeof Symbol&&(c[Symbol.iterator]=function(){return this}),c;function i(c){return function(i){return function(c){if(t)throw new TypeError("Generator is already executing.");for(;a;)try{if(t=1,r&&(o=2&c[0]?r.return:c[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,c[1])).done)return o;switch(r=0,o&&(c=[2&c[0],o.value]),c[0]){case 0:case 1:o=c;break;case 4:return a.label++,{value:c[1],done:!1};case 5:a.label++,r=c[1],c=[0];continue;case 7:c=a.ops.pop(),a.trys.pop();continue;default:if(!(o=(o=a.trys).length>0&&o[o.length-1])&&(6===c[0]||2===c[0])){a=0;continue}if(3===c[0]&&(!o||c[1]>o[0]&&c[1]<o[3])){a.label=c[1];break}if(6===c[0]&&a.label<o[1]){a.label=o[1],o=c;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(c);break}o[2]&&a.ops.pop(),a.trys.pop();continue}c=n.call(e,a)}catch(i){c=[6,i],r=0}finally{t=o=0}if(5&c[0])throw c[1];return{value:c[0]?c[1]:void 0,done:!0}}([c,i])}}};Object.defineProperty(n,"__esModule",{value:!0}),n.Channel=void 0;var c=t(50055),a=function(e){var n=e.id,t=e.name,a=e.service,i=e.send,s=e.onUnrecoverableError,l=this;this.onCommand=function(e){if("closed"===l.status){var n=new Error("Trying to listen to commands on a closed channel");throw l.onUnrecoverableError(n),n}return l.onCommandListeners.push(e),function(){l.onCommandListeners=l.onCommandListeners.filter((function(n){return n!==e}))}},this.send=function(e){if("closed"===l.status){var n=new Error("Calling send on closed channel");throw l.onUnrecoverableError(n),n}if("closing"===l.status)throw n=new Error("Cannot send any more commands after a close request"),l.onUnrecoverableError(n),n;e.channel=l.id,l.sendToContainer(c.api.Command.create(e))},this.request=function(e){return r(l,void 0,void 0,(function(){var n,t=this;return o(this,(function(r){return n=Number(Math.random().toString().split(".")[1]).toString(36),e.ref=n,[2,new Promise((function(r,o){t.requestMap[n]=r;try{t.send(e)}catch(c){delete t.requestMap[n],o(c)}}))]}))}))},this.handleCommand=function(e){l.onCommandListeners.forEach((function(n){return n(e)})),e.ref&&l.requestMap[e.ref]&&(l.requestMap[e.ref](e),delete l.requestMap[e.ref])},this.handleClose=function(e){Object.keys(l.requestMap).forEach((function(n){var t=c.api.Command.fromObject({});t.channelClosed=e,l.requestMap[n](t),delete l.requestMap[n]})),l.status="closed",l.onCommandListeners=[]},this.id=n,this.name=t,this.service=a,this.sendToContainer=i,this.onUnrecoverableError=s,this.status="open",this.requestMap={},this.onCommandListeners=[]};n.Channel=a},8759:function(e,n,t){"use strict";var r=t(25108),o=this&&this.__assign||function(){return o=Object.assign||function(e){for(var n,t=1,r=arguments.length;t<r;t++)for(var o in n=arguments[t])Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o]);return e},o.apply(this,arguments)},c=this&&this.__awaiter||function(e,n,t,r){return new(t||(t=Promise))((function(o,c){function a(e){try{s(r.next(e))}catch(n){c(n)}}function i(e){try{s(r.throw(e))}catch(n){c(n)}}function s(e){var n;e.done?o(e.value):(n=e.value,n instanceof t?n:new t((function(e){e(n)}))).then(a,i)}s((r=r.apply(e,n||[])).next())}))},a=this&&this.__generator||function(e,n){var t,r,o,c,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return c={next:i(0),throw:i(1),return:i(2)},"function"===typeof Symbol&&(c[Symbol.iterator]=function(){return this}),c;function i(c){return function(i){return function(c){if(t)throw new TypeError("Generator is already executing.");for(;a;)try{if(t=1,r&&(o=2&c[0]?r.return:c[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,c[1])).done)return o;switch(r=0,o&&(c=[2&c[0],o.value]),c[0]){case 0:case 1:o=c;break;case 4:return a.label++,{value:c[1],done:!1};case 5:a.label++,r=c[1],c=[0];continue;case 7:c=a.ops.pop(),a.trys.pop();continue;default:if(!(o=(o=a.trys).length>0&&o[o.length-1])&&(6===c[0]||2===c[0])){a=0;continue}if(3===c[0]&&(!o||c[1]>o[0]&&c[1]<o[3])){a.label=c[1];break}if(6===c[0]&&a.label<o[1]){a.label=o[1],o=c;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(c);break}o[2]&&a.ops.pop(),a.trys.pop();continue}c=n.call(e,a)}catch(i){c=[6,i],r=0}finally{t=o=0}if(5&c[0])throw c[1];return{value:c[0]?c[1]:void 0,done:!0}}([c,i])}}};Object.defineProperty(n,"__esModule",{value:!0}),n.Client=void 0;var i,s=t(50055),l=t(88903),u=t(18347),h=t(88524),d=t(69475);!function(e){e.Intentional="Intentional",e.Disconnected="Disconnected",e.Error="Error"}(i||(i={}));var f=function(){var e=this;this.open=function(n,t){if(e.chan0Cb){var r=new Error("You must call `close` before opening the client again");throw e.onUnrecoverableError(r),r}if(e.destroyed)throw r=new Error("Client has been destroyed and cannot be re-used"),e.onUnrecoverableError(r),r;e.connectOptions=o({timeout:1e4,reuseConnectionMetadata:!1,getNextRetryDelayMs:u.defaultGetNextRetryDelay},n),e.debug({type:"breadcrumb",message:"open",data:{polling:!1}}),e.chan0Cb=t,e.connect({tryCount:0,websocketFailureCount:0})},this.openChannel=function(n,t){var r=n.name?e.channelRequests.filter((function(e){return e.options.name===n.name})):[];if(r.some((function(e){return!e.closeRequested}))){var o=new Error("Channel with name ".concat(n.name," already opened"));throw e.onUnrecoverableError(o),o}if(e.destroyed)throw o=new Error("Client has been destroyed and is unusable"),e.onUnrecoverableError(o),o;var c={options:n,openChannelCb:t,isOpen:!1,channelId:null,cleanupCb:null,closeRequested:!1};return e.channelRequests.push(c),e.connectionState!==d.ConnectionState.CONNECTED||r.length||e.requestOpenChannel(c),function(){c.closeRequested||(c.closeRequested=!0,c.isOpen?e.requestCloseChannel(c):e.connectionState!==d.ConnectionState.CONNECTED&&(e.channelRequests=e.channelRequests.filter((function(e){return e!==c})),c.openChannelCb({error:new Error("Channel closed before opening"),channel:null,context:e.connectOptions?e.connectOptions.context:null})))}},this.requestOpenChannel=function(n){var t=n.options,r=n.openChannelCb;if(e.connectOptions){var o=t.skip;if(!o||!o(e.connectOptions.context)){var c=t.action;if(c||(c=null==t.name?s.api.OpenChannel.Action.CREATE:s.api.OpenChannel.Action.ATTACH_OR_CREATE),n.channelId)e.onUnrecoverableError(new Error("Unexpected channelId"));else{var a="string"===typeof t.service?t.service:t.service(e.connectOptions.context);e.debug({type:"breadcrumb",message:"requestOpenChannel",data:{name:t.name,service:a,action:c}});var i=e.getChannel(0),u=Number(Math.random().toString().split(".")[1]).toString(36);i.send({ref:u,openChan:{name:t.name,service:a,action:c}});var h=i.onCommand((function(t){if(u===t.ref)if(h(),null!=t.openChanRes){var o=t.openChanRes,c=o.id,i=o.state,d=o.error;if(e.debug({type:"breadcrumb",message:"openChanres"}),e.connectOptions)if(i!==s.api.OpenChannelRes.State.ERROR)if("number"===typeof c&&"number"===typeof i){var f=new l.Channel({id:c,name:n.options.name,service:a,onUnrecoverableError:e.onUnrecoverableError,send:e.send});e.channels[c]=f,n.channelId=c,n.isOpen=!0,n.closeRequested&&e.requestCloseChannel(n),n.cleanupCb=r({channel:f,error:null,context:e.connectOptions.context})}else e.onUnrecoverableError(new Error("Expected state and channel id"));else e.onUnrecoverableError(new Error("Channel open resulted with an error: ".concat(d||"with no message")));else e.onUnrecoverableError(new Error("Expected connectionOptions"))}else e.onUnrecoverableError(new Error("Expected openChanRes on command"))}))}}}else e.onUnrecoverableError(new Error("Expected connectionOptions"))},this.requestCloseChannel=function(n){return c(e,void 0,void 0,(function(){var e,t,r,o,c,i;return a(this,(function(a){switch(a.label){case 0:return n.isOpen?(e=n.channelId,(t=this.getChannel(n.channelId)).status="closing",(r=this.getChannel(0))?(this.debug({type:"breadcrumb",message:"requestChannelClose",data:{id:e,name:n.options.name,service:n.options.service}}),[4,r.request({closeChan:{action:s.api.CloseChannel.Action.TRY_CLOSE,id:n.channelId}})]):(this.onUnrecoverableError(new Error("Tried to request a channel close but there was no chan0")),[2])):(this.onUnrecoverableError(new Error("Tried to request a channel close before opening")),[2]);case 1:if((o=a.sent()).channelClosed)this.debug({type:"breadcrumb",message:"requestChannelClose:chan0Closed",data:{id:e,name:n.options.name,service:n.options.service}});else{if(null==o.closeChanRes)return this.onUnrecoverableError(new Error("Expected closeChanRes")),[2];if(null==(c=o.closeChanRes.id))return this.onUnrecoverableError(new Error("Expected id, got ".concat(c))),[2];if(c!==e)return this.onUnrecoverableError(new Error("Expected id from closeChanRes to be ".concat(e," got ").concat(c))),[2];this.debug({type:"breadcrumb",message:"requestChannelClose:closeChanRes",data:{id:e,name:n.options.name,service:n.options.service,closeStatus:o.closeChanRes.status}})}return this.channelRequests=this.channelRequests.filter((function(e){return e!==n})),delete this.channels[e],t.handleClose({initiator:"channel",willReconnect:!1}),n.cleanupCb&&n.cleanupCb({initiator:"channel",willReconnect:!1}),n.options.name&&this.connectionState===d.ConnectionState.CONNECTED&&(i=this.channelRequests.find((function(e){return e.options.name===n.options.name})))?(this.requestOpenChannel(i),[2]):[2]}}))}))},this.close=function(){if(e.debug({type:"breadcrumb",message:"user close"}),!e.chan0Cb||!e.connectOptions){var n=new Error("Must call client.open before closing");throw e.onUnrecoverableError(n),n}e.connectionMetadata=null,e.handleClose({closeReason:i.Intentional})},this.destroy=function(){e.destroyed=!0,e.debug({type:"breadcrumb",message:"destroy"}),e.connectionState!==d.ConnectionState.DISCONNECTED&&e.close(),e.debug=function(){},e.userUnrecoverableErrorHandler=null,e.channelRequests=[],e.destroyed=!0},this.getChannel=function(n){var t=e.channels[n];if(!t){var r=new Error("No channel with number ".concat(n));throw e.onUnrecoverableError(r),r}return t},this.debug=function(n){e.debugFuncs.forEach((function(e){return e(n)}))},this.onDebugLog=function(n){return e.debugFuncs.push(n),function(){var t=e.debugFuncs.indexOf(n);t>-1&&e.debugFuncs.splice(t,1)}},this.onBootStatus=function(n){return e.bootStatusFuncs.push(n),function(){var t=e.bootStatusFuncs.indexOf(n);t>-1&&e.bootStatusFuncs.splice(t,1)}},this.onFirewallDenied=function(){e.onUnrecoverableError(new Error("Can't connect to unfirewalled repl from firewall mode"))},this.setUnrecoverableErrorHandler=function(n){e.userUnrecoverableErrorHandler=n},this.getConnectionMetadata=function(){return e.connectionMetadata},this.connect=function(n){var t=n.tryCount,r=n.websocketFailureCount;return c(e,void 0,void 0,(function(){var e,n,o,c,i,f,b,p,C,E,v,y,m,w,g,S,O,R,k,U,T,I=this;return a(this,(function(a){switch(a.label){case 0:if(this.debug({type:"breadcrumb",message:"connecting",data:{connectionState:this.connectionState,connectTries:t,websocketFailureCount:r,readyState:this.ws?this.ws.readyState:void 0,chan0CbExists:Boolean(this.chan0Cb)}}),this.connectionState!==d.ConnectionState.DISCONNECTED)throw e=new Error("Client must be disconnected to connect"),this.onUnrecoverableError(e),e;if(this.ws)throw e=new Error("Unexpected existing websocket instance"),this.onUnrecoverableError(e),e;if(!this.connectOptions)throw e=new Error("Expected connectionOptions"),this.onUnrecoverableError(e),e;if(!this.chan0Cb)return this.onUnrecoverableError(new Error("Expected chan0Cb")),[2];if(this.chan0CleanupCb)return this.onUnrecoverableError(new Error("Unexpected chan0CleanupCb, are you sure you closed")),[2];if(this.channelRequests.some((function(e){return e.isOpen})))return this.onUnrecoverableError(new Error("All channels should be closed when we connect")),[2];if(Object.keys(this.channels).length)return this.onUnrecoverableError(new Error("Found an an unexpected existing channels")),[2];if(this.connectTimeoutId)return this.onUnrecoverableError(new Error("Unexpected connectTimeoutId")),[2];if(this.connectionState=d.ConnectionState.CONNECTING,n=new l.Channel({id:0,name:"chan0",onUnrecoverableError:this.onUnrecoverableError,send:this.send}),this.channels[0]=n,n.onCommand((function(e){var n=e.bootStatus;null!=n&&I.bootStatusFuncs.forEach((function(e){return e(n)}))})),n.onCommand((function(e){var n=e.redirect;if(null!=n)return I.handleRedirect(n.url)})),this.connectOptions.reuseConnectionMetadata&&null!==this.connectionMetadata)return[3,5];if(this.fetchTokenAbortController)return this.onUnrecoverableError(new Error("Expected fetchTokenAbortController to be null")),[2];o=new AbortController,this.fetchTokenAbortController=o,c=void 0,a.label=1;case 1:return a.trys.push([1,3,,4]),[4,this.connectOptions.fetchConnectionMetadata(o.signal)];case 2:return c=a.sent(),[3,4];case 3:return i=a.sent(),f=void 0,f=i instanceof Error?i:i&&"object"===typeof i&&"message"in i&&"string"===typeof i.message?new Error(i.message):"string"===typeof i?new Error(i):new Error("Unknown error when fetching connection metadata"),this.onUnrecoverableError(f),[2];case 4:if(this.fetchTokenAbortController=null,p=(b=c).error===d.FetchConnectionMetadataError.Aborted,o.signal.aborted!==p)return o.signal.aborted?(this.onUnrecoverableError(new Error("Expected abort returned from fetchConnectionMetadata to be truthy when the controller aborts")),[2]):(this.onUnrecoverableError(new Error("Abort should only be truthy returned when the abort signal is triggered")),[2]);if(b.error===d.FetchConnectionMetadataError.Aborted)return[2];if(b.error===d.FetchConnectionMetadataError.Retriable)return this.retryConnect({tryCount:t+1,websocketFailureCount:r,chan0:n,error:new Error("Retriable error")}),[2];if(this.connectionState!==d.ConnectionState.CONNECTING)return this.onUnrecoverableError(new Error("Client was closed before connecting")),[2];if(b.error)return this.onUnrecoverableError(b.error),[2];this.connectionMetadata=b,a.label=5;case 5:return 3===r&&this.connectOptions.pollingHost&&this.debug({type:"breadcrumb",message:"polling fallback"}),C=r>=3&&this.connectOptions.pollingHost,E=C?h.EIOCompat:(0,u.getWebSocketClass)(this.connectOptions.WebSocketClass),v=(0,u.getConnectionStr)(this.connectionMetadata,C?this.connectOptions.pollingHost:void 0),(y=new E(v)).binaryType="arraybuffer",y.onmessage=this.onSocketMessage,this.ws=y,m=!1,w=!1,g=null,y.onerror=function(){g?g(new Error("WebSocket errored")):I.onUnrecoverableError(new Error("Got websocket error but no `onFailed` cb"))},y.onclose=function(e){if(g){var n=!0;if(E===h.EIOCompat)w||(I.connectionMetadata=null);else if("code"in e){var t=e;t.code===d.CloseCode.POLICY_VIOLATION&&(I.connectionMetadata=null),t.code!==d.CloseCode.USER_ERROR&&t.code!==d.CloseCode.FIREWALL_DENIED||(n=!1)}g(new Error("WebSocket closed before we got READY"),n)}else I.onUnrecoverableError(new Error("Got websocket closure but no `onFailed` cb"))},y.onopen=function(){E!==h.EIOCompat&&(m=!0)},S=function(){},O=function(){},null!==(R=this.connectOptions.timeout)&&(O=function(){I.debug({type:"breadcrumb",message:"cancel timeout"}),I.connectTimeoutId&&(clearTimeout(I.connectTimeoutId),I.connectTimeoutId=null)},(S=function(){I.debug({type:"breadcrumb",message:"reset timeout"}),I.connectTimeoutId&&clearTimeout(I.connectTimeoutId),I.connectTimeoutId=setTimeout((function(){I.debug({type:"breadcrumb",message:"connect timeout"}),g?g(new Error("timeout")):I.onUnrecoverableError(new Error("Connecting timed out but there was no `onFailed` cb"))}),R)})()),k=n.onCommand((function(e){if(w=!0,S(),null==e.firewallDenied){if(null!=e.containerState)if(null!=e.containerState.state){var t=e.containerState.state;I.debug({type:"breadcrumb",message:"containerState",data:t});var r=s.api.ContainerState.State;switch(t){case r.READY:if(k(),O(),!I.connectOptions)return void I.onUnrecoverableError(new Error("Expected connectionOptions"));if(!n)return void I.onUnrecoverableError(new Error("Expected chan0 to be truthy"));if(!I.chan0Cb)return void I.onUnrecoverableError(new Error("Expected chan0Cb to be truthy"));I.handleConnect();var o=I.close;I.close=function(){return setTimeout((function(){o()}),0)},I.chan0CleanupCb=I.chan0Cb({channel:n,error:null,context:I.connectOptions.context}),I.close=o;break;case r.SLEEP:if(!g)return void I.onUnrecoverableError(new Error("Got SLEEP but there was no `onFailed` cb"));g(new Error("Got SLEEP as container state"))}}else I.onUnrecoverableError(new Error("Got containterState but state was not defined"))}else I.onFirewallDenied()})),U=this.getChannel(0),T=this.connectOptions,g=function(e,o){void 0===o&&(o=!0),g=null,I.cleanupSocket(),O(),k(),I.connectOptions===T&&I.getChannel(0)===U?o?I.retryConnect({tryCount:t+1,websocketFailureCount:m?0:r+1,chan0:n,error:e}):I.onUnrecoverableError(e):I.onUnrecoverableError(new Error("onFailed got called but client is in a different connecting context"))},[2]}}))}))},this.retryConnect=function(n){var t=n.tryCount,r=n.websocketFailureCount,o=n.chan0,c=n.error;if(e.retryTimeoutId)e.onUnrecoverableError(new Error("Unexpected existing retryTimeoutId"));else if(e.chan0Cb){if(e.connectOptions)return t>=10&&e.redirectInitiatorURL?(e.debug({type:"breadcrumb",message:"redirectInitiatorFallback",data:{connectionState:e.connectionState,connectTries:t,websocketFailureCount:r,error:c,wsReadyState:e.ws?e.ws.readyState:void 0}}),e.redirectInitiatorFallback()):void(e.retryTimeoutId=setTimeout((function(){e.chan0Cb?(e.retryTimeoutId=null,e.debug({type:"breadcrumb",message:"retrying",data:{connectionState:e.connectionState,connectTries:t,websocketFailureCount:r,error:c,wsReadyState:e.ws?e.ws.readyState:void 0}}),o.handleClose({initiator:"client",willReconnect:!0}),delete e.channels[0],e.connectionState=d.ConnectionState.DISCONNECTED,e.connect({tryCount:t,websocketFailureCount:r})):e.onUnrecoverableError(new Error("Scheduled retry is called after we closed?"))}),e.connectOptions.getNextRetryDelayMs(t)));e.onUnrecoverableError(new Error("Expected connectOptions when scheduling a retry"))}else e.onUnrecoverableError(new Error("Expected chan0Cb when scheduling a retry"))},this.send=function(n){var t=e.getChannel(n.channel);e.debug({type:"log",log:{direction:"out",channel:{id:n.channel,name:t.name,service:t.service},cmd:n}});var r=s.api.Command.encode(n).finish(),o=r.buffer.slice(r.byteOffset,r.byteOffset+r.length);null!=e.ws?e.ws.send(o):e.onUnrecoverableError(new Error("Calling send on a closed client"))},this.onSocketMessage=function(n){var t=n.data,r=new Uint8Array(t),o=s.api.Command.decode(r),c=e.getChannel(o.channel);e.debug({type:"log",log:{direction:"in",channel:{id:o.channel,name:c.name,service:c.service},cmd:o}}),c.handleCommand(o)},this.handleConnect=function(){if(e.connectionState=d.ConnectionState.CONNECTED,e.debug({type:"breadcrumb",message:"connected!"}),e.ws){var n=function(n){e.connectionState!==d.ConnectionState.DISCONNECTED?(e.debug({type:"breadcrumb",message:"wsclose",data:{event:n}}),e.handleClose({closeReason:i.Disconnected,wsEvent:n})):e.onUnrecoverableError(new Error("Got a close event on socket but client is in disconnected state"))};e.ws.onclose=n,e.ws.onerror=n,e.channelRequests.forEach((function(n){e.requestOpenChannel(n)}))}else e.onUnrecoverableError(new Error("Expected Websocket instance"))},this.handleClose=function(n){if(n.closeReason!==i.Error){if(e.connectionState===d.ConnectionState.DISCONNECTED)return void e.onUnrecoverableError(new Error("handleClose is called but client already disconnected"));if(e.ws&&e.fetchTokenAbortController)return void e.onUnrecoverableError(new Error("fetchTokenAbortController and websocket exist simultaneously"))}e.cleanupSocket(),e.retryTimeoutId&&(clearTimeout(e.retryTimeoutId),e.retryTimeoutId=null),e.connectTimeoutId&&(clearTimeout(e.connectTimeoutId),e.connectTimeoutId=null),e.fetchTokenAbortController&&(e.fetchTokenAbortController.abort(),e.fetchTokenAbortController=null);var t=n.closeReason===i.Disconnected;if(e.channelRequests.forEach((function(n){var r=t&&!n.closeRequested;n.isOpen?(e.getChannel(n.channelId).handleClose({initiator:"client",willReconnect:r}),delete e.channels[n.channelId]):r||n.openChannelCb({channel:null,error:new Error("Failed to open"),context:e.connectOptions?e.connectOptions.context:null});var o=n.cleanupCb,c=n.closeRequested;n.channelId=null,n.isOpen=!1,n.cleanupCb=null,n.closeRequested=!1,o&&o({initiator:"client",willReconnect:r}),(c||n.closeRequested)&&(e.channelRequests=e.channelRequests.filter((function(e){return e!==n})))})),e.channels[0]&&(e.channels[0].handleClose({initiator:"client",willReconnect:t}),delete e.channels[0]),0===Object.keys(e.channels).length||(e.channels={},n.closeReason===i.Error)){if(e.chan0CleanupCb)e.chan0CleanupCb({initiator:"client",willReconnect:t}),e.chan0CleanupCb=null;else if(!t)if(e.chan0Cb)e.chan0Cb({channel:null,error:new Error("Failed to open"),context:e.connectOptions?e.connectOptions.context:null});else if(n.closeReason!==i.Error)return void e.onUnrecoverableError(new Error("open should have been called before `handleClose`"));if(e.connectionState=d.ConnectionState.DISCONNECTED,!t)return e.chan0Cb=null,void(e.connectOptions=null);e.debug({type:"breadcrumb",message:"reconnecting"}),e.connect({tryCount:0,websocketFailureCount:0})}else e.onUnrecoverableError(new Error("channels object should be empty after channelRequests and chan0 cleanup"))},this.cleanupSocket=function(){var n=e.ws;e.debug({type:"breadcrumb",message:"cleanupSocket",data:{hasWs:Boolean(n),readyState:n?n.readyState:null,connectionState:e.connectionState}}),n&&(e.ws=null,n.onmessage=null,n.onclose=null,n.onopen=null,n.onerror=function(){},0!==n.readyState&&1!==n.readyState||(e.debug({type:"breadcrumb",message:"wsclose"}),n.close()))},this.onUnrecoverableError=function(n){if(e.debug({type:"breadcrumb",message:"unrecoverable error",data:{message:n.message}}),e.redirectInitiatorURL=null,e.connectionState!==d.ConnectionState.DISCONNECTED)try{e.handleClose({closeReason:i.Error,error:n})}catch(t){r.error("handleClose errored during unrecoverable error"),r.error(t)}if(!e.userUnrecoverableErrorHandler)throw r.error("Please supply your own unrecoverable error handling function"),n;e.userUnrecoverableErrorHandler(n)},this.redirectInitiatorFallback=function(){if(!e.connectionMetadata)return e.onUnrecoverableError(new Error("client's connectionMetadata is null when redirecting to initiator"));if(!e.connectOptions)return e.onUnrecoverableError(new Error("client's connectOptions is null when redirecting to initiator"));if(!e.chan0Cb)return e.onUnrecoverableError(new Error("client's chan0Cb is null when redirecting to initiator"));var n=e.connectOptions.context,t=e.chan0Cb,r={token:e.connectionMetadata.token,conmanURL:e.connectionMetadata.conmanURL,gurl:e.connectionMetadata.gurl};e.redirectInitiatorURL=null;var c=o({error:null},r);e.close(),e.open({fetchConnectionMetadata:function(){return Promise.resolve(c)},WebSocketClass:WebSocket,context:n},t)},this.handleRedirect=function(n){if(e.debug({type:"breadcrumb",message:"handling redirect",data:{connectionMetadata:e.connectionMetadata}}),!e.connectionMetadata)return e.onUnrecoverableError(new Error("client's connectionMetadata is null when redirecting"));if(!e.connectOptions)return e.onUnrecoverableError(new Error("client's connectOptions is null when redirecting"));if(!e.chan0Cb)return e.onUnrecoverableError(new Error("client's chan0Cb is null when redirecting"));var t=e.connectOptions.context,r=e.chan0Cb,c={token:e.connectionMetadata.token,conmanURL:e.connectionMetadata.conmanURL,gurl:n};e.redirectInitiatorURL=e.connectionMetadata.gurl;var a=o({error:null},c);e.close(),e.open({fetchConnectionMetadata:function(){return Promise.resolve(a)},WebSocketClass:WebSocket,context:t},r)},this.ws=null,this.channels={},this.connectOptions=null,this.chan0Cb=null,this.chan0CleanupCb=null,this.connectionState=d.ConnectionState.DISCONNECTED,this.debugFuncs=[],this.bootStatusFuncs=[],this.userUnrecoverableErrorHandler=null,this.channelRequests=[],this.retryTimeoutId=null,this.connectTimeoutId=null,this.fetchTokenAbortController=null,this.destroyed=!1,this.connectionMetadata=null,this.redirectInitiatorURL=null,this.debug({type:"breadcrumb",message:"constructor"})};n.Client=f},68944:function(e,n,t){"use strict";n.em=n.gS=n.KU=void 0,t(36486);var r=t(8759);Object.defineProperty(n,"KU",{enumerable:!0,get:function(){return r.Client}});var o=t(88903);var c=t(69475);Object.defineProperty(n,"gS",{enumerable:!0,get:function(){return c.FetchConnectionMetadataError}}),Object.defineProperty(n,"em",{enumerable:!0,get:function(){return c.ConnectionState}})},69475:function(e,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.CloseCode=n.FetchConnectionMetadataError=n.ConnectionState=void 0,function(e){e[e.CONNECTING=0]="CONNECTING",e[e.CONNECTED=1]="CONNECTED",e[e.DISCONNECTED=2]="DISCONNECTED"}(n.ConnectionState||(n.ConnectionState={})),function(e){e.Aborted="Aborted",e.Retriable="Retriable"}(n.FetchConnectionMetadataError||(n.FetchConnectionMetadataError={})),n.CloseCode={INVALID_UPSTREAM_RESPONSE:1014,POLICY_VIOLATION:1008,FIREWALL_DENIED:4e3,TRY_ANOTHER_MACHINE:4001,USER_ERROR:4002}},88524:function(e,n,t){"use strict";var r=this&&this.__assign||function(){return r=Object.assign||function(e){for(var n,t=1,r=arguments.length;t<r;t++)for(var o in n=arguments[t])Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o]);return e},r.apply(this,arguments)};Object.defineProperty(n,"__esModule",{value:!0}),n.EIOCompat=n.createCloseEvent=n.splitHref=void 0;var o=t(45983),c=t(11987);function a(e){var n=c.parse(e),t=n.protocol,r=n.slashes,o=n.auth,a=n.host,i=n.pathname;return{uri:c.format({protocol:t,slashes:r,auth:o,host:a,query:{ordered:"1"}}),path:null!=i?i:"/"}}n.splitHref=a;var i=new Map([["opening",0],["open",1],["closing",2],["closed",3]]);function s(e){return"undefined"!==typeof window?new MessageEvent("message",{data:e}):{type:"message",data:e}}function l(e){return"undefined"!==typeof window?new CloseEvent("close",e):r({type:"close"},e)}function u(e,n){return"undefined"!==typeof window?new Event(e,n):r({type:e},n)}n.createCloseEvent=l;var h=function(){function e(e,n){var t=this;if(this.CLOSED=3,this.CLOSING=2,this.OPEN=1,this.CONNECTING=0,n)throw new Error("Passing protocols is not implemented");var r=a(e),c=r.uri,i=r.path;this.onopen=null,this.onclose=null,this.onmessage=null,this.onerror=null,this.eioSocket=o(c,{path:i,transports:["polling"]}),this.url=e,this.extensions="",this.protocol="",this.bufferedAmount=0,this.readyState=0,this.incomingSequence=0,this.outOfOrderQueue={},this.outgoingSequence=0,this.setReadyState(),this.eioSocket.on("open",(function(){if(t.setReadyState(),null!=t.onopen){var e=u("open");t.onopen.call(t,e)}})),this.eioSocket.on("close",(function(e){if(t.setReadyState(),null!=t.onclose){var n=l({reason:e,code:1001,wasClean:!1});t.onclose.call(t,n)}})),this.eioSocket.on("message",(function(e){if(t.setReadyState(),null!=t.onmessage){if("string"===typeof e)throw new Error("expected data to be ArrayBuffer not string");var n=new DataView(e).getUint32(0),r=e.slice(4);if(t.incomingSequence===n){t.incomingSequence=n+1;var o=s(r),c=t.onmessage.bind(t);c(o);var a=Object.keys(t.outOfOrderQueue);a.length>0&&(a.sort().forEach((function(e){c(s(t.outOfOrderQueue[+e])),t.incomingSequence=+e+1})),t.outOfOrderQueue={})}else t.outOfOrderQueue[n]=r}})),this.eioSocket.on("error",(function(){if(t.setReadyState(),null!=t.onerror){var e=u("error");t.onerror.call(t,e)}}))}return e.prototype.setReadyState=function(){this.readyState=i.get(this.eioSocket.readyState)},e.prototype.send=function(e){var n=new ArrayBuffer(4+e.byteLength);new Uint8Array(n).set(new Uint8Array(e),4),new DataView(n).setUint32(0,this.outgoingSequence),this.outgoingSequence+=1,this.eioSocket.send(n),this.setReadyState()},e.prototype.close=function(){this.onmessage=null,this.eioSocket.close(),this.setReadyState()},e.prototype.addEventListener=function(){throw new Error("Not Implemented, please use onmessage, onopen, onerror, or onclose")},e.prototype.removeEventListener=function(){throw new Error("Not Implemented")},e.prototype.dispatchEvent=function(){throw new Error("Not Implemented")},Object.defineProperty(e.prototype,"binaryType",{get:function(){return this.eioSocket.binaryType||"blob"},set:function(e){this.eioSocket.binaryType=e},enumerable:!1,configurable:!0}),e.CLOSED=3,e.CLOSING=2,e.OPEN=1,e.CONNECTING=0,e}();n.EIOCompat=h},18347:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.getConnectionStr=n.getWebSocketClass=n.defaultGetNextRetryDelay=void 0;var r=t(11987);function o(e){return("object"===typeof e||"function"===typeof e)&&(!!e&&("OPEN"in e&&1===e.OPEN))}n.defaultGetNextRetryDelay=function(e){var n=Math.floor(500*Math.random()),t=1e3*Math.pow(1.7,e);return Math.min(t,15e3)+n},n.getWebSocketClass=function(e){if(e){if(!o(e))throw new Error("Passed in WebSocket does not look like a standard WebSocket");return e}if("undefined"!==typeof WebSocket){if(!o(WebSocket))throw new Error("Global WebSocket does not look like a standard WebSocket");return WebSocket}throw new Error("Please pass in a WebSocket class or add it to global")},n.getConnectionStr=function(e,n){var t=r.parse(e.gurl);return n?(t.hostname=n,t.host=n,t.pathname="/wsv2/".concat(e.token,"/").concat(encodeURIComponent(e.gurl))):t.pathname="/wsv2/".concat(e.token),r.format(t)}},36486:function(e,n,t){var r,o,c=t(25108);r=function(){"use strict";function e(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function n(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function r(e,t,r){return t&&n(e.prototype,t),r&&n(e,r),e}function o(e,n){if("function"!==typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),n&&i(e,n)}function a(e){return a=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},a(e)}function i(e,n){return i=Object.setPrototypeOf||function(e,n){return e.__proto__=n,e},i(e,n)}function s(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}function l(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function u(e,n){return!n||"object"!==typeof n&&"function"!==typeof n?l(e):n}function h(e){var n=s();return function(){var t,r=a(e);if(n){var o=a(this).constructor;t=Reflect.construct(r,arguments,o)}else t=r.apply(this,arguments);return u(this,t)}}function d(e,n){for(;!Object.prototype.hasOwnProperty.call(e,n)&&null!==(e=a(e)););return e}function f(e,n,t){return f="undefined"!==typeof Reflect&&Reflect.get?Reflect.get:function(e,n,t){var r=d(e,n);if(r){var o=Object.getOwnPropertyDescriptor(r,n);return o.get?o.get.call(t):o.value}},f(e,n,t||e)}var b=function(){function n(){e(this,n),Object.defineProperty(this,"listeners",{value:{},writable:!0,configurable:!0})}return r(n,[{key:"addEventListener",value:function(e,n,t){e in this.listeners||(this.listeners[e]=[]),this.listeners[e].push({callback:n,options:t})}},{key:"removeEventListener",value:function(e,n){if(e in this.listeners)for(var t=this.listeners[e],r=0,o=t.length;r<o;r++)if(t[r].callback===n)return void t.splice(r,1)}},{key:"dispatchEvent",value:function(e){if(e.type in this.listeners){for(var n=this.listeners[e.type].slice(),t=0,r=n.length;t<r;t++){var o=n[t];try{o.callback.call(this,e)}catch(c){Promise.resolve().then((function(){throw c}))}o.options&&o.options.once&&this.removeEventListener(e.type,o.callback)}return!e.defaultPrevented}}}]),n}(),p=function(n){o(c,n);var t=h(c);function c(){var n;return e(this,c),(n=t.call(this)).listeners||b.call(l(n)),Object.defineProperty(l(n),"aborted",{value:!1,writable:!0,configurable:!0}),Object.defineProperty(l(n),"onabort",{value:null,writable:!0,configurable:!0}),n}return r(c,[{key:"toString",value:function(){return"[object AbortSignal]"}},{key:"dispatchEvent",value:function(e){"abort"===e.type&&(this.aborted=!0,"function"===typeof this.onabort&&this.onabort.call(this,e)),f(a(c.prototype),"dispatchEvent",this).call(this,e)}}]),c}(b),C=function(){function n(){e(this,n),Object.defineProperty(this,"signal",{value:new p,writable:!0,configurable:!0})}return r(n,[{key:"abort",value:function(){var e;try{e=new Event("abort")}catch(n){"undefined"!==typeof document?document.createEvent?(e=document.createEvent("Event")).initEvent("abort",!1,!1):(e=document.createEventObject()).type="abort":e={type:"abort",bubbles:!1,cancelable:!1}}this.signal.dispatchEvent(e)}},{key:"toString",value:function(){return"[object AbortController]"}}]),n}();function E(e){return e.__FORCE_INSTALL_ABORTCONTROLLER_POLYFILL?(c.log("__FORCE_INSTALL_ABORTCONTROLLER_POLYFILL=true is set, will force install polyfill"),!0):"function"===typeof e.Request&&!e.Request.prototype.hasOwnProperty("signal")||!e.AbortController}"undefined"!==typeof Symbol&&Symbol.toStringTag&&(C.prototype[Symbol.toStringTag]="AbortController",p.prototype[Symbol.toStringTag]="AbortSignal"),function(e){E(e)&&(e.AbortController=C,e.AbortSignal=p)}("undefined"!==typeof self?self:t.g)},void 0===(o="function"===typeof r?r.call(n,t,n,e):r)||(e.exports=o)}}]);
//# sourceMappingURL=8944-6be746d5463d5594.js.map