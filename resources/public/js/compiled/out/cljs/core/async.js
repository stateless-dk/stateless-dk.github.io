// Compiled by ClojureScript 1.9.946 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__31819 = arguments.length;
switch (G__31819) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async31820 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31820 = (function (f,blockable,meta31821){
this.f = f;
this.blockable = blockable;
this.meta31821 = meta31821;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async31820.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31822,meta31821__$1){
var self__ = this;
var _31822__$1 = this;
return (new cljs.core.async.t_cljs$core$async31820(self__.f,self__.blockable,meta31821__$1));
});

cljs.core.async.t_cljs$core$async31820.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31822){
var self__ = this;
var _31822__$1 = this;
return self__.meta31821;
});

cljs.core.async.t_cljs$core$async31820.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async31820.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async31820.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async31820.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async31820.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta31821","meta31821",-106973100,null)], null);
});

cljs.core.async.t_cljs$core$async31820.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async31820.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31820";

cljs.core.async.t_cljs$core$async31820.cljs$lang$ctorPrWriter = (function (this__28677__auto__,writer__28678__auto__,opt__28679__auto__){
return cljs.core._write.call(null,writer__28678__auto__,"cljs.core.async/t_cljs$core$async31820");
});

cljs.core.async.__GT_t_cljs$core$async31820 = (function cljs$core$async$__GT_t_cljs$core$async31820(f__$1,blockable__$1,meta31821){
return (new cljs.core.async.t_cljs$core$async31820(f__$1,blockable__$1,meta31821));
});

}

return (new cljs.core.async.t_cljs$core$async31820(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__31826 = arguments.length;
switch (G__31826) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__31829 = arguments.length;
switch (G__31829) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__31832 = arguments.length;
switch (G__31832) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_31834 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_31834);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_31834,ret){
return (function (){
return fn1.call(null,val_31834);
});})(val_31834,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__31836 = arguments.length;
switch (G__31836) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4655__auto__)){
var ret = temp__4655__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4655__auto__)){
var retb = temp__4655__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4655__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__4655__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__28999__auto___31838 = n;
var x_31839 = (0);
while(true){
if((x_31839 < n__28999__auto___31838)){
(a[x_31839] = (0));

var G__31840 = (x_31839 + (1));
x_31839 = G__31840;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__31841 = (i + (1));
i = G__31841;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async31842 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31842 = (function (flag,meta31843){
this.flag = flag;
this.meta31843 = meta31843;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async31842.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_31844,meta31843__$1){
var self__ = this;
var _31844__$1 = this;
return (new cljs.core.async.t_cljs$core$async31842(self__.flag,meta31843__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async31842.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_31844){
var self__ = this;
var _31844__$1 = this;
return self__.meta31843;
});})(flag))
;

cljs.core.async.t_cljs$core$async31842.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async31842.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async31842.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async31842.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async31842.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta31843","meta31843",1381043081,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async31842.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async31842.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31842";

cljs.core.async.t_cljs$core$async31842.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__28677__auto__,writer__28678__auto__,opt__28679__auto__){
return cljs.core._write.call(null,writer__28678__auto__,"cljs.core.async/t_cljs$core$async31842");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async31842 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async31842(flag__$1,meta31843){
return (new cljs.core.async.t_cljs$core$async31842(flag__$1,meta31843));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async31842(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async31845 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31845 = (function (flag,cb,meta31846){
this.flag = flag;
this.cb = cb;
this.meta31846 = meta31846;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async31845.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31847,meta31846__$1){
var self__ = this;
var _31847__$1 = this;
return (new cljs.core.async.t_cljs$core$async31845(self__.flag,self__.cb,meta31846__$1));
});

cljs.core.async.t_cljs$core$async31845.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31847){
var self__ = this;
var _31847__$1 = this;
return self__.meta31846;
});

cljs.core.async.t_cljs$core$async31845.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async31845.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async31845.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async31845.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async31845.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta31846","meta31846",-1517297252,null)], null);
});

cljs.core.async.t_cljs$core$async31845.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async31845.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31845";

cljs.core.async.t_cljs$core$async31845.cljs$lang$ctorPrWriter = (function (this__28677__auto__,writer__28678__auto__,opt__28679__auto__){
return cljs.core._write.call(null,writer__28678__auto__,"cljs.core.async/t_cljs$core$async31845");
});

cljs.core.async.__GT_t_cljs$core$async31845 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async31845(flag__$1,cb__$1,meta31846){
return (new cljs.core.async.t_cljs$core$async31845(flag__$1,cb__$1,meta31846));
});

}

return (new cljs.core.async.t_cljs$core$async31845(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__31848_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__31848_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__31849_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__31849_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__28052__auto__ = wport;
if(cljs.core.truth_(or__28052__auto__)){
return or__28052__auto__;
} else {
return port;
}
})()], null));
} else {
var G__31850 = (i + (1));
i = G__31850;
continue;
}
} else {
return null;
}
break;
}
})();
var or__28052__auto__ = ret;
if(cljs.core.truth_(or__28052__auto__)){
return or__28052__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4657__auto__ = (function (){var and__28040__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__28040__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__28040__auto__;
}
})();
if(cljs.core.truth_(temp__4657__auto__)){
var got = temp__4657__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__29230__auto__ = [];
var len__29223__auto___31856 = arguments.length;
var i__29224__auto___31857 = (0);
while(true){
if((i__29224__auto___31857 < len__29223__auto___31856)){
args__29230__auto__.push((arguments[i__29224__auto___31857]));

var G__31858 = (i__29224__auto___31857 + (1));
i__29224__auto___31857 = G__31858;
continue;
} else {
}
break;
}

var argseq__29231__auto__ = ((((1) < args__29230__auto__.length))?(new cljs.core.IndexedSeq(args__29230__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__29231__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__31853){
var map__31854 = p__31853;
var map__31854__$1 = ((((!((map__31854 == null)))?((((map__31854.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31854.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31854):map__31854);
var opts = map__31854__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq31851){
var G__31852 = cljs.core.first.call(null,seq31851);
var seq31851__$1 = cljs.core.next.call(null,seq31851);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__31852,seq31851__$1);
});

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__31860 = arguments.length;
switch (G__31860) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__31773__auto___31906 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31773__auto___31906){
return (function (){
var f__31774__auto__ = (function (){var switch__31685__auto__ = ((function (c__31773__auto___31906){
return (function (state_31884){
var state_val_31885 = (state_31884[(1)]);
if((state_val_31885 === (7))){
var inst_31880 = (state_31884[(2)]);
var state_31884__$1 = state_31884;
var statearr_31886_31907 = state_31884__$1;
(statearr_31886_31907[(2)] = inst_31880);

(statearr_31886_31907[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31885 === (1))){
var state_31884__$1 = state_31884;
var statearr_31887_31908 = state_31884__$1;
(statearr_31887_31908[(2)] = null);

(statearr_31887_31908[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31885 === (4))){
var inst_31863 = (state_31884[(7)]);
var inst_31863__$1 = (state_31884[(2)]);
var inst_31864 = (inst_31863__$1 == null);
var state_31884__$1 = (function (){var statearr_31888 = state_31884;
(statearr_31888[(7)] = inst_31863__$1);

return statearr_31888;
})();
if(cljs.core.truth_(inst_31864)){
var statearr_31889_31909 = state_31884__$1;
(statearr_31889_31909[(1)] = (5));

} else {
var statearr_31890_31910 = state_31884__$1;
(statearr_31890_31910[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31885 === (13))){
var state_31884__$1 = state_31884;
var statearr_31891_31911 = state_31884__$1;
(statearr_31891_31911[(2)] = null);

(statearr_31891_31911[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31885 === (6))){
var inst_31863 = (state_31884[(7)]);
var state_31884__$1 = state_31884;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31884__$1,(11),to,inst_31863);
} else {
if((state_val_31885 === (3))){
var inst_31882 = (state_31884[(2)]);
var state_31884__$1 = state_31884;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31884__$1,inst_31882);
} else {
if((state_val_31885 === (12))){
var state_31884__$1 = state_31884;
var statearr_31892_31912 = state_31884__$1;
(statearr_31892_31912[(2)] = null);

(statearr_31892_31912[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31885 === (2))){
var state_31884__$1 = state_31884;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31884__$1,(4),from);
} else {
if((state_val_31885 === (11))){
var inst_31873 = (state_31884[(2)]);
var state_31884__$1 = state_31884;
if(cljs.core.truth_(inst_31873)){
var statearr_31893_31913 = state_31884__$1;
(statearr_31893_31913[(1)] = (12));

} else {
var statearr_31894_31914 = state_31884__$1;
(statearr_31894_31914[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31885 === (9))){
var state_31884__$1 = state_31884;
var statearr_31895_31915 = state_31884__$1;
(statearr_31895_31915[(2)] = null);

(statearr_31895_31915[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31885 === (5))){
var state_31884__$1 = state_31884;
if(cljs.core.truth_(close_QMARK_)){
var statearr_31896_31916 = state_31884__$1;
(statearr_31896_31916[(1)] = (8));

} else {
var statearr_31897_31917 = state_31884__$1;
(statearr_31897_31917[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31885 === (14))){
var inst_31878 = (state_31884[(2)]);
var state_31884__$1 = state_31884;
var statearr_31898_31918 = state_31884__$1;
(statearr_31898_31918[(2)] = inst_31878);

(statearr_31898_31918[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31885 === (10))){
var inst_31870 = (state_31884[(2)]);
var state_31884__$1 = state_31884;
var statearr_31899_31919 = state_31884__$1;
(statearr_31899_31919[(2)] = inst_31870);

(statearr_31899_31919[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31885 === (8))){
var inst_31867 = cljs.core.async.close_BANG_.call(null,to);
var state_31884__$1 = state_31884;
var statearr_31900_31920 = state_31884__$1;
(statearr_31900_31920[(2)] = inst_31867);

(statearr_31900_31920[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__31773__auto___31906))
;
return ((function (switch__31685__auto__,c__31773__auto___31906){
return (function() {
var cljs$core$async$state_machine__31686__auto__ = null;
var cljs$core$async$state_machine__31686__auto____0 = (function (){
var statearr_31901 = [null,null,null,null,null,null,null,null];
(statearr_31901[(0)] = cljs$core$async$state_machine__31686__auto__);

(statearr_31901[(1)] = (1));

return statearr_31901;
});
var cljs$core$async$state_machine__31686__auto____1 = (function (state_31884){
while(true){
var ret_value__31687__auto__ = (function (){try{while(true){
var result__31688__auto__ = switch__31685__auto__.call(null,state_31884);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31688__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31688__auto__;
}
break;
}
}catch (e31902){if((e31902 instanceof Object)){
var ex__31689__auto__ = e31902;
var statearr_31903_31921 = state_31884;
(statearr_31903_31921[(5)] = ex__31689__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31884);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31902;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31687__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31922 = state_31884;
state_31884 = G__31922;
continue;
} else {
return ret_value__31687__auto__;
}
break;
}
});
cljs$core$async$state_machine__31686__auto__ = function(state_31884){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31686__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31686__auto____1.call(this,state_31884);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__31686__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31686__auto____0;
cljs$core$async$state_machine__31686__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31686__auto____1;
return cljs$core$async$state_machine__31686__auto__;
})()
;})(switch__31685__auto__,c__31773__auto___31906))
})();
var state__31775__auto__ = (function (){var statearr_31904 = f__31774__auto__.call(null);
(statearr_31904[(6)] = c__31773__auto___31906);

return statearr_31904;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31775__auto__);
});})(c__31773__auto___31906))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__31923){
var vec__31924 = p__31923;
var v = cljs.core.nth.call(null,vec__31924,(0),null);
var p = cljs.core.nth.call(null,vec__31924,(1),null);
var job = vec__31924;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__31773__auto___32095 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31773__auto___32095,res,vec__31924,v,p,job,jobs,results){
return (function (){
var f__31774__auto__ = (function (){var switch__31685__auto__ = ((function (c__31773__auto___32095,res,vec__31924,v,p,job,jobs,results){
return (function (state_31931){
var state_val_31932 = (state_31931[(1)]);
if((state_val_31932 === (1))){
var state_31931__$1 = state_31931;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31931__$1,(2),res,v);
} else {
if((state_val_31932 === (2))){
var inst_31928 = (state_31931[(2)]);
var inst_31929 = cljs.core.async.close_BANG_.call(null,res);
var state_31931__$1 = (function (){var statearr_31933 = state_31931;
(statearr_31933[(7)] = inst_31928);

return statearr_31933;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31931__$1,inst_31929);
} else {
return null;
}
}
});})(c__31773__auto___32095,res,vec__31924,v,p,job,jobs,results))
;
return ((function (switch__31685__auto__,c__31773__auto___32095,res,vec__31924,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__31686__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__31686__auto____0 = (function (){
var statearr_31934 = [null,null,null,null,null,null,null,null];
(statearr_31934[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__31686__auto__);

(statearr_31934[(1)] = (1));

return statearr_31934;
});
var cljs$core$async$pipeline_STAR__$_state_machine__31686__auto____1 = (function (state_31931){
while(true){
var ret_value__31687__auto__ = (function (){try{while(true){
var result__31688__auto__ = switch__31685__auto__.call(null,state_31931);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31688__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31688__auto__;
}
break;
}
}catch (e31935){if((e31935 instanceof Object)){
var ex__31689__auto__ = e31935;
var statearr_31936_32096 = state_31931;
(statearr_31936_32096[(5)] = ex__31689__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31931);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31935;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31687__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32097 = state_31931;
state_31931 = G__32097;
continue;
} else {
return ret_value__31687__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__31686__auto__ = function(state_31931){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__31686__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__31686__auto____1.call(this,state_31931);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__31686__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__31686__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__31686__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__31686__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__31686__auto__;
})()
;})(switch__31685__auto__,c__31773__auto___32095,res,vec__31924,v,p,job,jobs,results))
})();
var state__31775__auto__ = (function (){var statearr_31937 = f__31774__auto__.call(null);
(statearr_31937[(6)] = c__31773__auto___32095);

return statearr_31937;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31775__auto__);
});})(c__31773__auto___32095,res,vec__31924,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__31938){
var vec__31939 = p__31938;
var v = cljs.core.nth.call(null,vec__31939,(0),null);
var p = cljs.core.nth.call(null,vec__31939,(1),null);
var job = vec__31939;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__28999__auto___32098 = n;
var __32099 = (0);
while(true){
if((__32099 < n__28999__auto___32098)){
var G__31942_32100 = type;
var G__31942_32101__$1 = (((G__31942_32100 instanceof cljs.core.Keyword))?G__31942_32100.fqn:null);
switch (G__31942_32101__$1) {
case "compute":
var c__31773__auto___32103 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__32099,c__31773__auto___32103,G__31942_32100,G__31942_32101__$1,n__28999__auto___32098,jobs,results,process,async){
return (function (){
var f__31774__auto__ = (function (){var switch__31685__auto__ = ((function (__32099,c__31773__auto___32103,G__31942_32100,G__31942_32101__$1,n__28999__auto___32098,jobs,results,process,async){
return (function (state_31955){
var state_val_31956 = (state_31955[(1)]);
if((state_val_31956 === (1))){
var state_31955__$1 = state_31955;
var statearr_31957_32104 = state_31955__$1;
(statearr_31957_32104[(2)] = null);

(statearr_31957_32104[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31956 === (2))){
var state_31955__$1 = state_31955;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31955__$1,(4),jobs);
} else {
if((state_val_31956 === (3))){
var inst_31953 = (state_31955[(2)]);
var state_31955__$1 = state_31955;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31955__$1,inst_31953);
} else {
if((state_val_31956 === (4))){
var inst_31945 = (state_31955[(2)]);
var inst_31946 = process.call(null,inst_31945);
var state_31955__$1 = state_31955;
if(cljs.core.truth_(inst_31946)){
var statearr_31958_32105 = state_31955__$1;
(statearr_31958_32105[(1)] = (5));

} else {
var statearr_31959_32106 = state_31955__$1;
(statearr_31959_32106[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31956 === (5))){
var state_31955__$1 = state_31955;
var statearr_31960_32107 = state_31955__$1;
(statearr_31960_32107[(2)] = null);

(statearr_31960_32107[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31956 === (6))){
var state_31955__$1 = state_31955;
var statearr_31961_32108 = state_31955__$1;
(statearr_31961_32108[(2)] = null);

(statearr_31961_32108[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31956 === (7))){
var inst_31951 = (state_31955[(2)]);
var state_31955__$1 = state_31955;
var statearr_31962_32109 = state_31955__$1;
(statearr_31962_32109[(2)] = inst_31951);

(statearr_31962_32109[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__32099,c__31773__auto___32103,G__31942_32100,G__31942_32101__$1,n__28999__auto___32098,jobs,results,process,async))
;
return ((function (__32099,switch__31685__auto__,c__31773__auto___32103,G__31942_32100,G__31942_32101__$1,n__28999__auto___32098,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__31686__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__31686__auto____0 = (function (){
var statearr_31963 = [null,null,null,null,null,null,null];
(statearr_31963[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__31686__auto__);

(statearr_31963[(1)] = (1));

return statearr_31963;
});
var cljs$core$async$pipeline_STAR__$_state_machine__31686__auto____1 = (function (state_31955){
while(true){
var ret_value__31687__auto__ = (function (){try{while(true){
var result__31688__auto__ = switch__31685__auto__.call(null,state_31955);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31688__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31688__auto__;
}
break;
}
}catch (e31964){if((e31964 instanceof Object)){
var ex__31689__auto__ = e31964;
var statearr_31965_32110 = state_31955;
(statearr_31965_32110[(5)] = ex__31689__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31955);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31964;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31687__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32111 = state_31955;
state_31955 = G__32111;
continue;
} else {
return ret_value__31687__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__31686__auto__ = function(state_31955){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__31686__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__31686__auto____1.call(this,state_31955);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__31686__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__31686__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__31686__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__31686__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__31686__auto__;
})()
;})(__32099,switch__31685__auto__,c__31773__auto___32103,G__31942_32100,G__31942_32101__$1,n__28999__auto___32098,jobs,results,process,async))
})();
var state__31775__auto__ = (function (){var statearr_31966 = f__31774__auto__.call(null);
(statearr_31966[(6)] = c__31773__auto___32103);

return statearr_31966;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31775__auto__);
});})(__32099,c__31773__auto___32103,G__31942_32100,G__31942_32101__$1,n__28999__auto___32098,jobs,results,process,async))
);


break;
case "async":
var c__31773__auto___32112 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__32099,c__31773__auto___32112,G__31942_32100,G__31942_32101__$1,n__28999__auto___32098,jobs,results,process,async){
return (function (){
var f__31774__auto__ = (function (){var switch__31685__auto__ = ((function (__32099,c__31773__auto___32112,G__31942_32100,G__31942_32101__$1,n__28999__auto___32098,jobs,results,process,async){
return (function (state_31979){
var state_val_31980 = (state_31979[(1)]);
if((state_val_31980 === (1))){
var state_31979__$1 = state_31979;
var statearr_31981_32113 = state_31979__$1;
(statearr_31981_32113[(2)] = null);

(statearr_31981_32113[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31980 === (2))){
var state_31979__$1 = state_31979;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31979__$1,(4),jobs);
} else {
if((state_val_31980 === (3))){
var inst_31977 = (state_31979[(2)]);
var state_31979__$1 = state_31979;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31979__$1,inst_31977);
} else {
if((state_val_31980 === (4))){
var inst_31969 = (state_31979[(2)]);
var inst_31970 = async.call(null,inst_31969);
var state_31979__$1 = state_31979;
if(cljs.core.truth_(inst_31970)){
var statearr_31982_32114 = state_31979__$1;
(statearr_31982_32114[(1)] = (5));

} else {
var statearr_31983_32115 = state_31979__$1;
(statearr_31983_32115[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31980 === (5))){
var state_31979__$1 = state_31979;
var statearr_31984_32116 = state_31979__$1;
(statearr_31984_32116[(2)] = null);

(statearr_31984_32116[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31980 === (6))){
var state_31979__$1 = state_31979;
var statearr_31985_32117 = state_31979__$1;
(statearr_31985_32117[(2)] = null);

(statearr_31985_32117[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31980 === (7))){
var inst_31975 = (state_31979[(2)]);
var state_31979__$1 = state_31979;
var statearr_31986_32118 = state_31979__$1;
(statearr_31986_32118[(2)] = inst_31975);

(statearr_31986_32118[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__32099,c__31773__auto___32112,G__31942_32100,G__31942_32101__$1,n__28999__auto___32098,jobs,results,process,async))
;
return ((function (__32099,switch__31685__auto__,c__31773__auto___32112,G__31942_32100,G__31942_32101__$1,n__28999__auto___32098,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__31686__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__31686__auto____0 = (function (){
var statearr_31987 = [null,null,null,null,null,null,null];
(statearr_31987[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__31686__auto__);

(statearr_31987[(1)] = (1));

return statearr_31987;
});
var cljs$core$async$pipeline_STAR__$_state_machine__31686__auto____1 = (function (state_31979){
while(true){
var ret_value__31687__auto__ = (function (){try{while(true){
var result__31688__auto__ = switch__31685__auto__.call(null,state_31979);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31688__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31688__auto__;
}
break;
}
}catch (e31988){if((e31988 instanceof Object)){
var ex__31689__auto__ = e31988;
var statearr_31989_32119 = state_31979;
(statearr_31989_32119[(5)] = ex__31689__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31979);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31988;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31687__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32120 = state_31979;
state_31979 = G__32120;
continue;
} else {
return ret_value__31687__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__31686__auto__ = function(state_31979){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__31686__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__31686__auto____1.call(this,state_31979);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__31686__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__31686__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__31686__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__31686__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__31686__auto__;
})()
;})(__32099,switch__31685__auto__,c__31773__auto___32112,G__31942_32100,G__31942_32101__$1,n__28999__auto___32098,jobs,results,process,async))
})();
var state__31775__auto__ = (function (){var statearr_31990 = f__31774__auto__.call(null);
(statearr_31990[(6)] = c__31773__auto___32112);

return statearr_31990;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31775__auto__);
});})(__32099,c__31773__auto___32112,G__31942_32100,G__31942_32101__$1,n__28999__auto___32098,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__31942_32101__$1)].join('')));

}

var G__32121 = (__32099 + (1));
__32099 = G__32121;
continue;
} else {
}
break;
}

var c__31773__auto___32122 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31773__auto___32122,jobs,results,process,async){
return (function (){
var f__31774__auto__ = (function (){var switch__31685__auto__ = ((function (c__31773__auto___32122,jobs,results,process,async){
return (function (state_32012){
var state_val_32013 = (state_32012[(1)]);
if((state_val_32013 === (1))){
var state_32012__$1 = state_32012;
var statearr_32014_32123 = state_32012__$1;
(statearr_32014_32123[(2)] = null);

(statearr_32014_32123[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32013 === (2))){
var state_32012__$1 = state_32012;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32012__$1,(4),from);
} else {
if((state_val_32013 === (3))){
var inst_32010 = (state_32012[(2)]);
var state_32012__$1 = state_32012;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32012__$1,inst_32010);
} else {
if((state_val_32013 === (4))){
var inst_31993 = (state_32012[(7)]);
var inst_31993__$1 = (state_32012[(2)]);
var inst_31994 = (inst_31993__$1 == null);
var state_32012__$1 = (function (){var statearr_32015 = state_32012;
(statearr_32015[(7)] = inst_31993__$1);

return statearr_32015;
})();
if(cljs.core.truth_(inst_31994)){
var statearr_32016_32124 = state_32012__$1;
(statearr_32016_32124[(1)] = (5));

} else {
var statearr_32017_32125 = state_32012__$1;
(statearr_32017_32125[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32013 === (5))){
var inst_31996 = cljs.core.async.close_BANG_.call(null,jobs);
var state_32012__$1 = state_32012;
var statearr_32018_32126 = state_32012__$1;
(statearr_32018_32126[(2)] = inst_31996);

(statearr_32018_32126[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32013 === (6))){
var inst_31993 = (state_32012[(7)]);
var inst_31998 = (state_32012[(8)]);
var inst_31998__$1 = cljs.core.async.chan.call(null,(1));
var inst_31999 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_32000 = [inst_31993,inst_31998__$1];
var inst_32001 = (new cljs.core.PersistentVector(null,2,(5),inst_31999,inst_32000,null));
var state_32012__$1 = (function (){var statearr_32019 = state_32012;
(statearr_32019[(8)] = inst_31998__$1);

return statearr_32019;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32012__$1,(8),jobs,inst_32001);
} else {
if((state_val_32013 === (7))){
var inst_32008 = (state_32012[(2)]);
var state_32012__$1 = state_32012;
var statearr_32020_32127 = state_32012__$1;
(statearr_32020_32127[(2)] = inst_32008);

(statearr_32020_32127[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32013 === (8))){
var inst_31998 = (state_32012[(8)]);
var inst_32003 = (state_32012[(2)]);
var state_32012__$1 = (function (){var statearr_32021 = state_32012;
(statearr_32021[(9)] = inst_32003);

return statearr_32021;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32012__$1,(9),results,inst_31998);
} else {
if((state_val_32013 === (9))){
var inst_32005 = (state_32012[(2)]);
var state_32012__$1 = (function (){var statearr_32022 = state_32012;
(statearr_32022[(10)] = inst_32005);

return statearr_32022;
})();
var statearr_32023_32128 = state_32012__$1;
(statearr_32023_32128[(2)] = null);

(statearr_32023_32128[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
});})(c__31773__auto___32122,jobs,results,process,async))
;
return ((function (switch__31685__auto__,c__31773__auto___32122,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__31686__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__31686__auto____0 = (function (){
var statearr_32024 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_32024[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__31686__auto__);

(statearr_32024[(1)] = (1));

return statearr_32024;
});
var cljs$core$async$pipeline_STAR__$_state_machine__31686__auto____1 = (function (state_32012){
while(true){
var ret_value__31687__auto__ = (function (){try{while(true){
var result__31688__auto__ = switch__31685__auto__.call(null,state_32012);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31688__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31688__auto__;
}
break;
}
}catch (e32025){if((e32025 instanceof Object)){
var ex__31689__auto__ = e32025;
var statearr_32026_32129 = state_32012;
(statearr_32026_32129[(5)] = ex__31689__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32012);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32025;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31687__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32130 = state_32012;
state_32012 = G__32130;
continue;
} else {
return ret_value__31687__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__31686__auto__ = function(state_32012){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__31686__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__31686__auto____1.call(this,state_32012);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__31686__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__31686__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__31686__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__31686__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__31686__auto__;
})()
;})(switch__31685__auto__,c__31773__auto___32122,jobs,results,process,async))
})();
var state__31775__auto__ = (function (){var statearr_32027 = f__31774__auto__.call(null);
(statearr_32027[(6)] = c__31773__auto___32122);

return statearr_32027;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31775__auto__);
});})(c__31773__auto___32122,jobs,results,process,async))
);


var c__31773__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31773__auto__,jobs,results,process,async){
return (function (){
var f__31774__auto__ = (function (){var switch__31685__auto__ = ((function (c__31773__auto__,jobs,results,process,async){
return (function (state_32065){
var state_val_32066 = (state_32065[(1)]);
if((state_val_32066 === (7))){
var inst_32061 = (state_32065[(2)]);
var state_32065__$1 = state_32065;
var statearr_32067_32131 = state_32065__$1;
(statearr_32067_32131[(2)] = inst_32061);

(statearr_32067_32131[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32066 === (20))){
var state_32065__$1 = state_32065;
var statearr_32068_32132 = state_32065__$1;
(statearr_32068_32132[(2)] = null);

(statearr_32068_32132[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32066 === (1))){
var state_32065__$1 = state_32065;
var statearr_32069_32133 = state_32065__$1;
(statearr_32069_32133[(2)] = null);

(statearr_32069_32133[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32066 === (4))){
var inst_32030 = (state_32065[(7)]);
var inst_32030__$1 = (state_32065[(2)]);
var inst_32031 = (inst_32030__$1 == null);
var state_32065__$1 = (function (){var statearr_32070 = state_32065;
(statearr_32070[(7)] = inst_32030__$1);

return statearr_32070;
})();
if(cljs.core.truth_(inst_32031)){
var statearr_32071_32134 = state_32065__$1;
(statearr_32071_32134[(1)] = (5));

} else {
var statearr_32072_32135 = state_32065__$1;
(statearr_32072_32135[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32066 === (15))){
var inst_32043 = (state_32065[(8)]);
var state_32065__$1 = state_32065;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32065__$1,(18),to,inst_32043);
} else {
if((state_val_32066 === (21))){
var inst_32056 = (state_32065[(2)]);
var state_32065__$1 = state_32065;
var statearr_32073_32136 = state_32065__$1;
(statearr_32073_32136[(2)] = inst_32056);

(statearr_32073_32136[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32066 === (13))){
var inst_32058 = (state_32065[(2)]);
var state_32065__$1 = (function (){var statearr_32074 = state_32065;
(statearr_32074[(9)] = inst_32058);

return statearr_32074;
})();
var statearr_32075_32137 = state_32065__$1;
(statearr_32075_32137[(2)] = null);

(statearr_32075_32137[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32066 === (6))){
var inst_32030 = (state_32065[(7)]);
var state_32065__$1 = state_32065;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32065__$1,(11),inst_32030);
} else {
if((state_val_32066 === (17))){
var inst_32051 = (state_32065[(2)]);
var state_32065__$1 = state_32065;
if(cljs.core.truth_(inst_32051)){
var statearr_32076_32138 = state_32065__$1;
(statearr_32076_32138[(1)] = (19));

} else {
var statearr_32077_32139 = state_32065__$1;
(statearr_32077_32139[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32066 === (3))){
var inst_32063 = (state_32065[(2)]);
var state_32065__$1 = state_32065;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32065__$1,inst_32063);
} else {
if((state_val_32066 === (12))){
var inst_32040 = (state_32065[(10)]);
var state_32065__$1 = state_32065;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32065__$1,(14),inst_32040);
} else {
if((state_val_32066 === (2))){
var state_32065__$1 = state_32065;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32065__$1,(4),results);
} else {
if((state_val_32066 === (19))){
var state_32065__$1 = state_32065;
var statearr_32078_32140 = state_32065__$1;
(statearr_32078_32140[(2)] = null);

(statearr_32078_32140[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32066 === (11))){
var inst_32040 = (state_32065[(2)]);
var state_32065__$1 = (function (){var statearr_32079 = state_32065;
(statearr_32079[(10)] = inst_32040);

return statearr_32079;
})();
var statearr_32080_32141 = state_32065__$1;
(statearr_32080_32141[(2)] = null);

(statearr_32080_32141[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32066 === (9))){
var state_32065__$1 = state_32065;
var statearr_32081_32142 = state_32065__$1;
(statearr_32081_32142[(2)] = null);

(statearr_32081_32142[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32066 === (5))){
var state_32065__$1 = state_32065;
if(cljs.core.truth_(close_QMARK_)){
var statearr_32082_32143 = state_32065__$1;
(statearr_32082_32143[(1)] = (8));

} else {
var statearr_32083_32144 = state_32065__$1;
(statearr_32083_32144[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32066 === (14))){
var inst_32043 = (state_32065[(8)]);
var inst_32045 = (state_32065[(11)]);
var inst_32043__$1 = (state_32065[(2)]);
var inst_32044 = (inst_32043__$1 == null);
var inst_32045__$1 = cljs.core.not.call(null,inst_32044);
var state_32065__$1 = (function (){var statearr_32084 = state_32065;
(statearr_32084[(8)] = inst_32043__$1);

(statearr_32084[(11)] = inst_32045__$1);

return statearr_32084;
})();
if(inst_32045__$1){
var statearr_32085_32145 = state_32065__$1;
(statearr_32085_32145[(1)] = (15));

} else {
var statearr_32086_32146 = state_32065__$1;
(statearr_32086_32146[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32066 === (16))){
var inst_32045 = (state_32065[(11)]);
var state_32065__$1 = state_32065;
var statearr_32087_32147 = state_32065__$1;
(statearr_32087_32147[(2)] = inst_32045);

(statearr_32087_32147[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32066 === (10))){
var inst_32037 = (state_32065[(2)]);
var state_32065__$1 = state_32065;
var statearr_32088_32148 = state_32065__$1;
(statearr_32088_32148[(2)] = inst_32037);

(statearr_32088_32148[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32066 === (18))){
var inst_32048 = (state_32065[(2)]);
var state_32065__$1 = state_32065;
var statearr_32089_32149 = state_32065__$1;
(statearr_32089_32149[(2)] = inst_32048);

(statearr_32089_32149[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32066 === (8))){
var inst_32034 = cljs.core.async.close_BANG_.call(null,to);
var state_32065__$1 = state_32065;
var statearr_32090_32150 = state_32065__$1;
(statearr_32090_32150[(2)] = inst_32034);

(statearr_32090_32150[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__31773__auto__,jobs,results,process,async))
;
return ((function (switch__31685__auto__,c__31773__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__31686__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__31686__auto____0 = (function (){
var statearr_32091 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32091[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__31686__auto__);

(statearr_32091[(1)] = (1));

return statearr_32091;
});
var cljs$core$async$pipeline_STAR__$_state_machine__31686__auto____1 = (function (state_32065){
while(true){
var ret_value__31687__auto__ = (function (){try{while(true){
var result__31688__auto__ = switch__31685__auto__.call(null,state_32065);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31688__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31688__auto__;
}
break;
}
}catch (e32092){if((e32092 instanceof Object)){
var ex__31689__auto__ = e32092;
var statearr_32093_32151 = state_32065;
(statearr_32093_32151[(5)] = ex__31689__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32065);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32092;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31687__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32152 = state_32065;
state_32065 = G__32152;
continue;
} else {
return ret_value__31687__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__31686__auto__ = function(state_32065){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__31686__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__31686__auto____1.call(this,state_32065);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__31686__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__31686__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__31686__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__31686__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__31686__auto__;
})()
;})(switch__31685__auto__,c__31773__auto__,jobs,results,process,async))
})();
var state__31775__auto__ = (function (){var statearr_32094 = f__31774__auto__.call(null);
(statearr_32094[(6)] = c__31773__auto__);

return statearr_32094;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31775__auto__);
});})(c__31773__auto__,jobs,results,process,async))
);

return c__31773__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__32154 = arguments.length;
switch (G__32154) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__32157 = arguments.length;
switch (G__32157) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__32160 = arguments.length;
switch (G__32160) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__31773__auto___32209 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31773__auto___32209,tc,fc){
return (function (){
var f__31774__auto__ = (function (){var switch__31685__auto__ = ((function (c__31773__auto___32209,tc,fc){
return (function (state_32186){
var state_val_32187 = (state_32186[(1)]);
if((state_val_32187 === (7))){
var inst_32182 = (state_32186[(2)]);
var state_32186__$1 = state_32186;
var statearr_32188_32210 = state_32186__$1;
(statearr_32188_32210[(2)] = inst_32182);

(statearr_32188_32210[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32187 === (1))){
var state_32186__$1 = state_32186;
var statearr_32189_32211 = state_32186__$1;
(statearr_32189_32211[(2)] = null);

(statearr_32189_32211[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32187 === (4))){
var inst_32163 = (state_32186[(7)]);
var inst_32163__$1 = (state_32186[(2)]);
var inst_32164 = (inst_32163__$1 == null);
var state_32186__$1 = (function (){var statearr_32190 = state_32186;
(statearr_32190[(7)] = inst_32163__$1);

return statearr_32190;
})();
if(cljs.core.truth_(inst_32164)){
var statearr_32191_32212 = state_32186__$1;
(statearr_32191_32212[(1)] = (5));

} else {
var statearr_32192_32213 = state_32186__$1;
(statearr_32192_32213[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32187 === (13))){
var state_32186__$1 = state_32186;
var statearr_32193_32214 = state_32186__$1;
(statearr_32193_32214[(2)] = null);

(statearr_32193_32214[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32187 === (6))){
var inst_32163 = (state_32186[(7)]);
var inst_32169 = p.call(null,inst_32163);
var state_32186__$1 = state_32186;
if(cljs.core.truth_(inst_32169)){
var statearr_32194_32215 = state_32186__$1;
(statearr_32194_32215[(1)] = (9));

} else {
var statearr_32195_32216 = state_32186__$1;
(statearr_32195_32216[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32187 === (3))){
var inst_32184 = (state_32186[(2)]);
var state_32186__$1 = state_32186;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32186__$1,inst_32184);
} else {
if((state_val_32187 === (12))){
var state_32186__$1 = state_32186;
var statearr_32196_32217 = state_32186__$1;
(statearr_32196_32217[(2)] = null);

(statearr_32196_32217[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32187 === (2))){
var state_32186__$1 = state_32186;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32186__$1,(4),ch);
} else {
if((state_val_32187 === (11))){
var inst_32163 = (state_32186[(7)]);
var inst_32173 = (state_32186[(2)]);
var state_32186__$1 = state_32186;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32186__$1,(8),inst_32173,inst_32163);
} else {
if((state_val_32187 === (9))){
var state_32186__$1 = state_32186;
var statearr_32197_32218 = state_32186__$1;
(statearr_32197_32218[(2)] = tc);

(statearr_32197_32218[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32187 === (5))){
var inst_32166 = cljs.core.async.close_BANG_.call(null,tc);
var inst_32167 = cljs.core.async.close_BANG_.call(null,fc);
var state_32186__$1 = (function (){var statearr_32198 = state_32186;
(statearr_32198[(8)] = inst_32166);

return statearr_32198;
})();
var statearr_32199_32219 = state_32186__$1;
(statearr_32199_32219[(2)] = inst_32167);

(statearr_32199_32219[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32187 === (14))){
var inst_32180 = (state_32186[(2)]);
var state_32186__$1 = state_32186;
var statearr_32200_32220 = state_32186__$1;
(statearr_32200_32220[(2)] = inst_32180);

(statearr_32200_32220[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32187 === (10))){
var state_32186__$1 = state_32186;
var statearr_32201_32221 = state_32186__$1;
(statearr_32201_32221[(2)] = fc);

(statearr_32201_32221[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32187 === (8))){
var inst_32175 = (state_32186[(2)]);
var state_32186__$1 = state_32186;
if(cljs.core.truth_(inst_32175)){
var statearr_32202_32222 = state_32186__$1;
(statearr_32202_32222[(1)] = (12));

} else {
var statearr_32203_32223 = state_32186__$1;
(statearr_32203_32223[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__31773__auto___32209,tc,fc))
;
return ((function (switch__31685__auto__,c__31773__auto___32209,tc,fc){
return (function() {
var cljs$core$async$state_machine__31686__auto__ = null;
var cljs$core$async$state_machine__31686__auto____0 = (function (){
var statearr_32204 = [null,null,null,null,null,null,null,null,null];
(statearr_32204[(0)] = cljs$core$async$state_machine__31686__auto__);

(statearr_32204[(1)] = (1));

return statearr_32204;
});
var cljs$core$async$state_machine__31686__auto____1 = (function (state_32186){
while(true){
var ret_value__31687__auto__ = (function (){try{while(true){
var result__31688__auto__ = switch__31685__auto__.call(null,state_32186);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31688__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31688__auto__;
}
break;
}
}catch (e32205){if((e32205 instanceof Object)){
var ex__31689__auto__ = e32205;
var statearr_32206_32224 = state_32186;
(statearr_32206_32224[(5)] = ex__31689__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32186);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32205;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31687__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32225 = state_32186;
state_32186 = G__32225;
continue;
} else {
return ret_value__31687__auto__;
}
break;
}
});
cljs$core$async$state_machine__31686__auto__ = function(state_32186){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31686__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31686__auto____1.call(this,state_32186);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__31686__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31686__auto____0;
cljs$core$async$state_machine__31686__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31686__auto____1;
return cljs$core$async$state_machine__31686__auto__;
})()
;})(switch__31685__auto__,c__31773__auto___32209,tc,fc))
})();
var state__31775__auto__ = (function (){var statearr_32207 = f__31774__auto__.call(null);
(statearr_32207[(6)] = c__31773__auto___32209);

return statearr_32207;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31775__auto__);
});})(c__31773__auto___32209,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__31773__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31773__auto__){
return (function (){
var f__31774__auto__ = (function (){var switch__31685__auto__ = ((function (c__31773__auto__){
return (function (state_32246){
var state_val_32247 = (state_32246[(1)]);
if((state_val_32247 === (7))){
var inst_32242 = (state_32246[(2)]);
var state_32246__$1 = state_32246;
var statearr_32248_32266 = state_32246__$1;
(statearr_32248_32266[(2)] = inst_32242);

(statearr_32248_32266[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32247 === (1))){
var inst_32226 = init;
var state_32246__$1 = (function (){var statearr_32249 = state_32246;
(statearr_32249[(7)] = inst_32226);

return statearr_32249;
})();
var statearr_32250_32267 = state_32246__$1;
(statearr_32250_32267[(2)] = null);

(statearr_32250_32267[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32247 === (4))){
var inst_32229 = (state_32246[(8)]);
var inst_32229__$1 = (state_32246[(2)]);
var inst_32230 = (inst_32229__$1 == null);
var state_32246__$1 = (function (){var statearr_32251 = state_32246;
(statearr_32251[(8)] = inst_32229__$1);

return statearr_32251;
})();
if(cljs.core.truth_(inst_32230)){
var statearr_32252_32268 = state_32246__$1;
(statearr_32252_32268[(1)] = (5));

} else {
var statearr_32253_32269 = state_32246__$1;
(statearr_32253_32269[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32247 === (6))){
var inst_32229 = (state_32246[(8)]);
var inst_32226 = (state_32246[(7)]);
var inst_32233 = (state_32246[(9)]);
var inst_32233__$1 = f.call(null,inst_32226,inst_32229);
var inst_32234 = cljs.core.reduced_QMARK_.call(null,inst_32233__$1);
var state_32246__$1 = (function (){var statearr_32254 = state_32246;
(statearr_32254[(9)] = inst_32233__$1);

return statearr_32254;
})();
if(inst_32234){
var statearr_32255_32270 = state_32246__$1;
(statearr_32255_32270[(1)] = (8));

} else {
var statearr_32256_32271 = state_32246__$1;
(statearr_32256_32271[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32247 === (3))){
var inst_32244 = (state_32246[(2)]);
var state_32246__$1 = state_32246;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32246__$1,inst_32244);
} else {
if((state_val_32247 === (2))){
var state_32246__$1 = state_32246;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32246__$1,(4),ch);
} else {
if((state_val_32247 === (9))){
var inst_32233 = (state_32246[(9)]);
var inst_32226 = inst_32233;
var state_32246__$1 = (function (){var statearr_32257 = state_32246;
(statearr_32257[(7)] = inst_32226);

return statearr_32257;
})();
var statearr_32258_32272 = state_32246__$1;
(statearr_32258_32272[(2)] = null);

(statearr_32258_32272[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32247 === (5))){
var inst_32226 = (state_32246[(7)]);
var state_32246__$1 = state_32246;
var statearr_32259_32273 = state_32246__$1;
(statearr_32259_32273[(2)] = inst_32226);

(statearr_32259_32273[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32247 === (10))){
var inst_32240 = (state_32246[(2)]);
var state_32246__$1 = state_32246;
var statearr_32260_32274 = state_32246__$1;
(statearr_32260_32274[(2)] = inst_32240);

(statearr_32260_32274[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32247 === (8))){
var inst_32233 = (state_32246[(9)]);
var inst_32236 = cljs.core.deref.call(null,inst_32233);
var state_32246__$1 = state_32246;
var statearr_32261_32275 = state_32246__$1;
(statearr_32261_32275[(2)] = inst_32236);

(statearr_32261_32275[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});})(c__31773__auto__))
;
return ((function (switch__31685__auto__,c__31773__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__31686__auto__ = null;
var cljs$core$async$reduce_$_state_machine__31686__auto____0 = (function (){
var statearr_32262 = [null,null,null,null,null,null,null,null,null,null];
(statearr_32262[(0)] = cljs$core$async$reduce_$_state_machine__31686__auto__);

(statearr_32262[(1)] = (1));

return statearr_32262;
});
var cljs$core$async$reduce_$_state_machine__31686__auto____1 = (function (state_32246){
while(true){
var ret_value__31687__auto__ = (function (){try{while(true){
var result__31688__auto__ = switch__31685__auto__.call(null,state_32246);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31688__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31688__auto__;
}
break;
}
}catch (e32263){if((e32263 instanceof Object)){
var ex__31689__auto__ = e32263;
var statearr_32264_32276 = state_32246;
(statearr_32264_32276[(5)] = ex__31689__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32246);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32263;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31687__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32277 = state_32246;
state_32246 = G__32277;
continue;
} else {
return ret_value__31687__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__31686__auto__ = function(state_32246){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__31686__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__31686__auto____1.call(this,state_32246);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$reduce_$_state_machine__31686__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__31686__auto____0;
cljs$core$async$reduce_$_state_machine__31686__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__31686__auto____1;
return cljs$core$async$reduce_$_state_machine__31686__auto__;
})()
;})(switch__31685__auto__,c__31773__auto__))
})();
var state__31775__auto__ = (function (){var statearr_32265 = f__31774__auto__.call(null);
(statearr_32265[(6)] = c__31773__auto__);

return statearr_32265;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31775__auto__);
});})(c__31773__auto__))
);

return c__31773__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__31773__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31773__auto__,f__$1){
return (function (){
var f__31774__auto__ = (function (){var switch__31685__auto__ = ((function (c__31773__auto__,f__$1){
return (function (state_32283){
var state_val_32284 = (state_32283[(1)]);
if((state_val_32284 === (1))){
var inst_32278 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_32283__$1 = state_32283;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32283__$1,(2),inst_32278);
} else {
if((state_val_32284 === (2))){
var inst_32280 = (state_32283[(2)]);
var inst_32281 = f__$1.call(null,inst_32280);
var state_32283__$1 = state_32283;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32283__$1,inst_32281);
} else {
return null;
}
}
});})(c__31773__auto__,f__$1))
;
return ((function (switch__31685__auto__,c__31773__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__31686__auto__ = null;
var cljs$core$async$transduce_$_state_machine__31686__auto____0 = (function (){
var statearr_32285 = [null,null,null,null,null,null,null];
(statearr_32285[(0)] = cljs$core$async$transduce_$_state_machine__31686__auto__);

(statearr_32285[(1)] = (1));

return statearr_32285;
});
var cljs$core$async$transduce_$_state_machine__31686__auto____1 = (function (state_32283){
while(true){
var ret_value__31687__auto__ = (function (){try{while(true){
var result__31688__auto__ = switch__31685__auto__.call(null,state_32283);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31688__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31688__auto__;
}
break;
}
}catch (e32286){if((e32286 instanceof Object)){
var ex__31689__auto__ = e32286;
var statearr_32287_32289 = state_32283;
(statearr_32287_32289[(5)] = ex__31689__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32283);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32286;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31687__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32290 = state_32283;
state_32283 = G__32290;
continue;
} else {
return ret_value__31687__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__31686__auto__ = function(state_32283){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__31686__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__31686__auto____1.call(this,state_32283);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$transduce_$_state_machine__31686__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__31686__auto____0;
cljs$core$async$transduce_$_state_machine__31686__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__31686__auto____1;
return cljs$core$async$transduce_$_state_machine__31686__auto__;
})()
;})(switch__31685__auto__,c__31773__auto__,f__$1))
})();
var state__31775__auto__ = (function (){var statearr_32288 = f__31774__auto__.call(null);
(statearr_32288[(6)] = c__31773__auto__);

return statearr_32288;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31775__auto__);
});})(c__31773__auto__,f__$1))
);

return c__31773__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__32292 = arguments.length;
switch (G__32292) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__31773__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31773__auto__){
return (function (){
var f__31774__auto__ = (function (){var switch__31685__auto__ = ((function (c__31773__auto__){
return (function (state_32317){
var state_val_32318 = (state_32317[(1)]);
if((state_val_32318 === (7))){
var inst_32299 = (state_32317[(2)]);
var state_32317__$1 = state_32317;
var statearr_32319_32340 = state_32317__$1;
(statearr_32319_32340[(2)] = inst_32299);

(statearr_32319_32340[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32318 === (1))){
var inst_32293 = cljs.core.seq.call(null,coll);
var inst_32294 = inst_32293;
var state_32317__$1 = (function (){var statearr_32320 = state_32317;
(statearr_32320[(7)] = inst_32294);

return statearr_32320;
})();
var statearr_32321_32341 = state_32317__$1;
(statearr_32321_32341[(2)] = null);

(statearr_32321_32341[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32318 === (4))){
var inst_32294 = (state_32317[(7)]);
var inst_32297 = cljs.core.first.call(null,inst_32294);
var state_32317__$1 = state_32317;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32317__$1,(7),ch,inst_32297);
} else {
if((state_val_32318 === (13))){
var inst_32311 = (state_32317[(2)]);
var state_32317__$1 = state_32317;
var statearr_32322_32342 = state_32317__$1;
(statearr_32322_32342[(2)] = inst_32311);

(statearr_32322_32342[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32318 === (6))){
var inst_32302 = (state_32317[(2)]);
var state_32317__$1 = state_32317;
if(cljs.core.truth_(inst_32302)){
var statearr_32323_32343 = state_32317__$1;
(statearr_32323_32343[(1)] = (8));

} else {
var statearr_32324_32344 = state_32317__$1;
(statearr_32324_32344[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32318 === (3))){
var inst_32315 = (state_32317[(2)]);
var state_32317__$1 = state_32317;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32317__$1,inst_32315);
} else {
if((state_val_32318 === (12))){
var state_32317__$1 = state_32317;
var statearr_32325_32345 = state_32317__$1;
(statearr_32325_32345[(2)] = null);

(statearr_32325_32345[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32318 === (2))){
var inst_32294 = (state_32317[(7)]);
var state_32317__$1 = state_32317;
if(cljs.core.truth_(inst_32294)){
var statearr_32326_32346 = state_32317__$1;
(statearr_32326_32346[(1)] = (4));

} else {
var statearr_32327_32347 = state_32317__$1;
(statearr_32327_32347[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32318 === (11))){
var inst_32308 = cljs.core.async.close_BANG_.call(null,ch);
var state_32317__$1 = state_32317;
var statearr_32328_32348 = state_32317__$1;
(statearr_32328_32348[(2)] = inst_32308);

(statearr_32328_32348[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32318 === (9))){
var state_32317__$1 = state_32317;
if(cljs.core.truth_(close_QMARK_)){
var statearr_32329_32349 = state_32317__$1;
(statearr_32329_32349[(1)] = (11));

} else {
var statearr_32330_32350 = state_32317__$1;
(statearr_32330_32350[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32318 === (5))){
var inst_32294 = (state_32317[(7)]);
var state_32317__$1 = state_32317;
var statearr_32331_32351 = state_32317__$1;
(statearr_32331_32351[(2)] = inst_32294);

(statearr_32331_32351[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32318 === (10))){
var inst_32313 = (state_32317[(2)]);
var state_32317__$1 = state_32317;
var statearr_32332_32352 = state_32317__$1;
(statearr_32332_32352[(2)] = inst_32313);

(statearr_32332_32352[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32318 === (8))){
var inst_32294 = (state_32317[(7)]);
var inst_32304 = cljs.core.next.call(null,inst_32294);
var inst_32294__$1 = inst_32304;
var state_32317__$1 = (function (){var statearr_32333 = state_32317;
(statearr_32333[(7)] = inst_32294__$1);

return statearr_32333;
})();
var statearr_32334_32353 = state_32317__$1;
(statearr_32334_32353[(2)] = null);

(statearr_32334_32353[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__31773__auto__))
;
return ((function (switch__31685__auto__,c__31773__auto__){
return (function() {
var cljs$core$async$state_machine__31686__auto__ = null;
var cljs$core$async$state_machine__31686__auto____0 = (function (){
var statearr_32335 = [null,null,null,null,null,null,null,null];
(statearr_32335[(0)] = cljs$core$async$state_machine__31686__auto__);

(statearr_32335[(1)] = (1));

return statearr_32335;
});
var cljs$core$async$state_machine__31686__auto____1 = (function (state_32317){
while(true){
var ret_value__31687__auto__ = (function (){try{while(true){
var result__31688__auto__ = switch__31685__auto__.call(null,state_32317);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31688__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31688__auto__;
}
break;
}
}catch (e32336){if((e32336 instanceof Object)){
var ex__31689__auto__ = e32336;
var statearr_32337_32354 = state_32317;
(statearr_32337_32354[(5)] = ex__31689__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32317);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32336;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31687__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32355 = state_32317;
state_32317 = G__32355;
continue;
} else {
return ret_value__31687__auto__;
}
break;
}
});
cljs$core$async$state_machine__31686__auto__ = function(state_32317){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31686__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31686__auto____1.call(this,state_32317);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__31686__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31686__auto____0;
cljs$core$async$state_machine__31686__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31686__auto____1;
return cljs$core$async$state_machine__31686__auto__;
})()
;})(switch__31685__auto__,c__31773__auto__))
})();
var state__31775__auto__ = (function (){var statearr_32338 = f__31774__auto__.call(null);
(statearr_32338[(6)] = c__31773__auto__);

return statearr_32338;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31775__auto__);
});})(c__31773__auto__))
);

return c__31773__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__28735__auto__ = (((_ == null))?null:_);
var m__28736__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__28735__auto__)]);
if(!((m__28736__auto__ == null))){
return m__28736__auto__.call(null,_);
} else {
var m__28736__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__28736__auto____$1 == null))){
return m__28736__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__28735__auto__ = (((m == null))?null:m);
var m__28736__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__28735__auto__)]);
if(!((m__28736__auto__ == null))){
return m__28736__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__28736__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__28736__auto____$1 == null))){
return m__28736__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__28735__auto__ = (((m == null))?null:m);
var m__28736__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__28735__auto__)]);
if(!((m__28736__auto__ == null))){
return m__28736__auto__.call(null,m,ch);
} else {
var m__28736__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__28736__auto____$1 == null))){
return m__28736__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__28735__auto__ = (((m == null))?null:m);
var m__28736__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__28735__auto__)]);
if(!((m__28736__auto__ == null))){
return m__28736__auto__.call(null,m);
} else {
var m__28736__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__28736__auto____$1 == null))){
return m__28736__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async32356 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32356 = (function (ch,cs,meta32357){
this.ch = ch;
this.cs = cs;
this.meta32357 = meta32357;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async32356.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_32358,meta32357__$1){
var self__ = this;
var _32358__$1 = this;
return (new cljs.core.async.t_cljs$core$async32356(self__.ch,self__.cs,meta32357__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async32356.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_32358){
var self__ = this;
var _32358__$1 = this;
return self__.meta32357;
});})(cs))
;

cljs.core.async.t_cljs$core$async32356.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32356.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async32356.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32356.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async32356.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async32356.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async32356.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta32357","meta32357",1573489829,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async32356.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async32356.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32356";

cljs.core.async.t_cljs$core$async32356.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__28677__auto__,writer__28678__auto__,opt__28679__auto__){
return cljs.core._write.call(null,writer__28678__auto__,"cljs.core.async/t_cljs$core$async32356");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async32356 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async32356(ch__$1,cs__$1,meta32357){
return (new cljs.core.async.t_cljs$core$async32356(ch__$1,cs__$1,meta32357));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async32356(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__31773__auto___32578 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31773__auto___32578,cs,m,dchan,dctr,done){
return (function (){
var f__31774__auto__ = (function (){var switch__31685__auto__ = ((function (c__31773__auto___32578,cs,m,dchan,dctr,done){
return (function (state_32493){
var state_val_32494 = (state_32493[(1)]);
if((state_val_32494 === (7))){
var inst_32489 = (state_32493[(2)]);
var state_32493__$1 = state_32493;
var statearr_32495_32579 = state_32493__$1;
(statearr_32495_32579[(2)] = inst_32489);

(statearr_32495_32579[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32494 === (20))){
var inst_32392 = (state_32493[(7)]);
var inst_32404 = cljs.core.first.call(null,inst_32392);
var inst_32405 = cljs.core.nth.call(null,inst_32404,(0),null);
var inst_32406 = cljs.core.nth.call(null,inst_32404,(1),null);
var state_32493__$1 = (function (){var statearr_32496 = state_32493;
(statearr_32496[(8)] = inst_32405);

return statearr_32496;
})();
if(cljs.core.truth_(inst_32406)){
var statearr_32497_32580 = state_32493__$1;
(statearr_32497_32580[(1)] = (22));

} else {
var statearr_32498_32581 = state_32493__$1;
(statearr_32498_32581[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32494 === (27))){
var inst_32436 = (state_32493[(9)]);
var inst_32441 = (state_32493[(10)]);
var inst_32434 = (state_32493[(11)]);
var inst_32361 = (state_32493[(12)]);
var inst_32441__$1 = cljs.core._nth.call(null,inst_32434,inst_32436);
var inst_32442 = cljs.core.async.put_BANG_.call(null,inst_32441__$1,inst_32361,done);
var state_32493__$1 = (function (){var statearr_32499 = state_32493;
(statearr_32499[(10)] = inst_32441__$1);

return statearr_32499;
})();
if(cljs.core.truth_(inst_32442)){
var statearr_32500_32582 = state_32493__$1;
(statearr_32500_32582[(1)] = (30));

} else {
var statearr_32501_32583 = state_32493__$1;
(statearr_32501_32583[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32494 === (1))){
var state_32493__$1 = state_32493;
var statearr_32502_32584 = state_32493__$1;
(statearr_32502_32584[(2)] = null);

(statearr_32502_32584[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32494 === (24))){
var inst_32392 = (state_32493[(7)]);
var inst_32411 = (state_32493[(2)]);
var inst_32412 = cljs.core.next.call(null,inst_32392);
var inst_32370 = inst_32412;
var inst_32371 = null;
var inst_32372 = (0);
var inst_32373 = (0);
var state_32493__$1 = (function (){var statearr_32503 = state_32493;
(statearr_32503[(13)] = inst_32370);

(statearr_32503[(14)] = inst_32411);

(statearr_32503[(15)] = inst_32373);

(statearr_32503[(16)] = inst_32371);

(statearr_32503[(17)] = inst_32372);

return statearr_32503;
})();
var statearr_32504_32585 = state_32493__$1;
(statearr_32504_32585[(2)] = null);

(statearr_32504_32585[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32494 === (39))){
var state_32493__$1 = state_32493;
var statearr_32508_32586 = state_32493__$1;
(statearr_32508_32586[(2)] = null);

(statearr_32508_32586[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32494 === (4))){
var inst_32361 = (state_32493[(12)]);
var inst_32361__$1 = (state_32493[(2)]);
var inst_32362 = (inst_32361__$1 == null);
var state_32493__$1 = (function (){var statearr_32509 = state_32493;
(statearr_32509[(12)] = inst_32361__$1);

return statearr_32509;
})();
if(cljs.core.truth_(inst_32362)){
var statearr_32510_32587 = state_32493__$1;
(statearr_32510_32587[(1)] = (5));

} else {
var statearr_32511_32588 = state_32493__$1;
(statearr_32511_32588[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32494 === (15))){
var inst_32370 = (state_32493[(13)]);
var inst_32373 = (state_32493[(15)]);
var inst_32371 = (state_32493[(16)]);
var inst_32372 = (state_32493[(17)]);
var inst_32388 = (state_32493[(2)]);
var inst_32389 = (inst_32373 + (1));
var tmp32505 = inst_32370;
var tmp32506 = inst_32371;
var tmp32507 = inst_32372;
var inst_32370__$1 = tmp32505;
var inst_32371__$1 = tmp32506;
var inst_32372__$1 = tmp32507;
var inst_32373__$1 = inst_32389;
var state_32493__$1 = (function (){var statearr_32512 = state_32493;
(statearr_32512[(13)] = inst_32370__$1);

(statearr_32512[(15)] = inst_32373__$1);

(statearr_32512[(18)] = inst_32388);

(statearr_32512[(16)] = inst_32371__$1);

(statearr_32512[(17)] = inst_32372__$1);

return statearr_32512;
})();
var statearr_32513_32589 = state_32493__$1;
(statearr_32513_32589[(2)] = null);

(statearr_32513_32589[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32494 === (21))){
var inst_32415 = (state_32493[(2)]);
var state_32493__$1 = state_32493;
var statearr_32517_32590 = state_32493__$1;
(statearr_32517_32590[(2)] = inst_32415);

(statearr_32517_32590[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32494 === (31))){
var inst_32441 = (state_32493[(10)]);
var inst_32445 = done.call(null,null);
var inst_32446 = cljs.core.async.untap_STAR_.call(null,m,inst_32441);
var state_32493__$1 = (function (){var statearr_32518 = state_32493;
(statearr_32518[(19)] = inst_32445);

return statearr_32518;
})();
var statearr_32519_32591 = state_32493__$1;
(statearr_32519_32591[(2)] = inst_32446);

(statearr_32519_32591[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32494 === (32))){
var inst_32436 = (state_32493[(9)]);
var inst_32434 = (state_32493[(11)]);
var inst_32433 = (state_32493[(20)]);
var inst_32435 = (state_32493[(21)]);
var inst_32448 = (state_32493[(2)]);
var inst_32449 = (inst_32436 + (1));
var tmp32514 = inst_32434;
var tmp32515 = inst_32433;
var tmp32516 = inst_32435;
var inst_32433__$1 = tmp32515;
var inst_32434__$1 = tmp32514;
var inst_32435__$1 = tmp32516;
var inst_32436__$1 = inst_32449;
var state_32493__$1 = (function (){var statearr_32520 = state_32493;
(statearr_32520[(9)] = inst_32436__$1);

(statearr_32520[(11)] = inst_32434__$1);

(statearr_32520[(20)] = inst_32433__$1);

(statearr_32520[(22)] = inst_32448);

(statearr_32520[(21)] = inst_32435__$1);

return statearr_32520;
})();
var statearr_32521_32592 = state_32493__$1;
(statearr_32521_32592[(2)] = null);

(statearr_32521_32592[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32494 === (40))){
var inst_32461 = (state_32493[(23)]);
var inst_32465 = done.call(null,null);
var inst_32466 = cljs.core.async.untap_STAR_.call(null,m,inst_32461);
var state_32493__$1 = (function (){var statearr_32522 = state_32493;
(statearr_32522[(24)] = inst_32465);

return statearr_32522;
})();
var statearr_32523_32593 = state_32493__$1;
(statearr_32523_32593[(2)] = inst_32466);

(statearr_32523_32593[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32494 === (33))){
var inst_32452 = (state_32493[(25)]);
var inst_32454 = cljs.core.chunked_seq_QMARK_.call(null,inst_32452);
var state_32493__$1 = state_32493;
if(inst_32454){
var statearr_32524_32594 = state_32493__$1;
(statearr_32524_32594[(1)] = (36));

} else {
var statearr_32525_32595 = state_32493__$1;
(statearr_32525_32595[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32494 === (13))){
var inst_32382 = (state_32493[(26)]);
var inst_32385 = cljs.core.async.close_BANG_.call(null,inst_32382);
var state_32493__$1 = state_32493;
var statearr_32526_32596 = state_32493__$1;
(statearr_32526_32596[(2)] = inst_32385);

(statearr_32526_32596[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32494 === (22))){
var inst_32405 = (state_32493[(8)]);
var inst_32408 = cljs.core.async.close_BANG_.call(null,inst_32405);
var state_32493__$1 = state_32493;
var statearr_32527_32597 = state_32493__$1;
(statearr_32527_32597[(2)] = inst_32408);

(statearr_32527_32597[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32494 === (36))){
var inst_32452 = (state_32493[(25)]);
var inst_32456 = cljs.core.chunk_first.call(null,inst_32452);
var inst_32457 = cljs.core.chunk_rest.call(null,inst_32452);
var inst_32458 = cljs.core.count.call(null,inst_32456);
var inst_32433 = inst_32457;
var inst_32434 = inst_32456;
var inst_32435 = inst_32458;
var inst_32436 = (0);
var state_32493__$1 = (function (){var statearr_32528 = state_32493;
(statearr_32528[(9)] = inst_32436);

(statearr_32528[(11)] = inst_32434);

(statearr_32528[(20)] = inst_32433);

(statearr_32528[(21)] = inst_32435);

return statearr_32528;
})();
var statearr_32529_32598 = state_32493__$1;
(statearr_32529_32598[(2)] = null);

(statearr_32529_32598[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32494 === (41))){
var inst_32452 = (state_32493[(25)]);
var inst_32468 = (state_32493[(2)]);
var inst_32469 = cljs.core.next.call(null,inst_32452);
var inst_32433 = inst_32469;
var inst_32434 = null;
var inst_32435 = (0);
var inst_32436 = (0);
var state_32493__$1 = (function (){var statearr_32530 = state_32493;
(statearr_32530[(9)] = inst_32436);

(statearr_32530[(11)] = inst_32434);

(statearr_32530[(20)] = inst_32433);

(statearr_32530[(27)] = inst_32468);

(statearr_32530[(21)] = inst_32435);

return statearr_32530;
})();
var statearr_32531_32599 = state_32493__$1;
(statearr_32531_32599[(2)] = null);

(statearr_32531_32599[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32494 === (43))){
var state_32493__$1 = state_32493;
var statearr_32532_32600 = state_32493__$1;
(statearr_32532_32600[(2)] = null);

(statearr_32532_32600[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32494 === (29))){
var inst_32477 = (state_32493[(2)]);
var state_32493__$1 = state_32493;
var statearr_32533_32601 = state_32493__$1;
(statearr_32533_32601[(2)] = inst_32477);

(statearr_32533_32601[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32494 === (44))){
var inst_32486 = (state_32493[(2)]);
var state_32493__$1 = (function (){var statearr_32534 = state_32493;
(statearr_32534[(28)] = inst_32486);

return statearr_32534;
})();
var statearr_32535_32602 = state_32493__$1;
(statearr_32535_32602[(2)] = null);

(statearr_32535_32602[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32494 === (6))){
var inst_32425 = (state_32493[(29)]);
var inst_32424 = cljs.core.deref.call(null,cs);
var inst_32425__$1 = cljs.core.keys.call(null,inst_32424);
var inst_32426 = cljs.core.count.call(null,inst_32425__$1);
var inst_32427 = cljs.core.reset_BANG_.call(null,dctr,inst_32426);
var inst_32432 = cljs.core.seq.call(null,inst_32425__$1);
var inst_32433 = inst_32432;
var inst_32434 = null;
var inst_32435 = (0);
var inst_32436 = (0);
var state_32493__$1 = (function (){var statearr_32536 = state_32493;
(statearr_32536[(9)] = inst_32436);

(statearr_32536[(11)] = inst_32434);

(statearr_32536[(20)] = inst_32433);

(statearr_32536[(29)] = inst_32425__$1);

(statearr_32536[(30)] = inst_32427);

(statearr_32536[(21)] = inst_32435);

return statearr_32536;
})();
var statearr_32537_32603 = state_32493__$1;
(statearr_32537_32603[(2)] = null);

(statearr_32537_32603[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32494 === (28))){
var inst_32433 = (state_32493[(20)]);
var inst_32452 = (state_32493[(25)]);
var inst_32452__$1 = cljs.core.seq.call(null,inst_32433);
var state_32493__$1 = (function (){var statearr_32538 = state_32493;
(statearr_32538[(25)] = inst_32452__$1);

return statearr_32538;
})();
if(inst_32452__$1){
var statearr_32539_32604 = state_32493__$1;
(statearr_32539_32604[(1)] = (33));

} else {
var statearr_32540_32605 = state_32493__$1;
(statearr_32540_32605[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32494 === (25))){
var inst_32436 = (state_32493[(9)]);
var inst_32435 = (state_32493[(21)]);
var inst_32438 = (inst_32436 < inst_32435);
var inst_32439 = inst_32438;
var state_32493__$1 = state_32493;
if(cljs.core.truth_(inst_32439)){
var statearr_32541_32606 = state_32493__$1;
(statearr_32541_32606[(1)] = (27));

} else {
var statearr_32542_32607 = state_32493__$1;
(statearr_32542_32607[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32494 === (34))){
var state_32493__$1 = state_32493;
var statearr_32543_32608 = state_32493__$1;
(statearr_32543_32608[(2)] = null);

(statearr_32543_32608[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32494 === (17))){
var state_32493__$1 = state_32493;
var statearr_32544_32609 = state_32493__$1;
(statearr_32544_32609[(2)] = null);

(statearr_32544_32609[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32494 === (3))){
var inst_32491 = (state_32493[(2)]);
var state_32493__$1 = state_32493;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32493__$1,inst_32491);
} else {
if((state_val_32494 === (12))){
var inst_32420 = (state_32493[(2)]);
var state_32493__$1 = state_32493;
var statearr_32545_32610 = state_32493__$1;
(statearr_32545_32610[(2)] = inst_32420);

(statearr_32545_32610[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32494 === (2))){
var state_32493__$1 = state_32493;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32493__$1,(4),ch);
} else {
if((state_val_32494 === (23))){
var state_32493__$1 = state_32493;
var statearr_32546_32611 = state_32493__$1;
(statearr_32546_32611[(2)] = null);

(statearr_32546_32611[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32494 === (35))){
var inst_32475 = (state_32493[(2)]);
var state_32493__$1 = state_32493;
var statearr_32547_32612 = state_32493__$1;
(statearr_32547_32612[(2)] = inst_32475);

(statearr_32547_32612[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32494 === (19))){
var inst_32392 = (state_32493[(7)]);
var inst_32396 = cljs.core.chunk_first.call(null,inst_32392);
var inst_32397 = cljs.core.chunk_rest.call(null,inst_32392);
var inst_32398 = cljs.core.count.call(null,inst_32396);
var inst_32370 = inst_32397;
var inst_32371 = inst_32396;
var inst_32372 = inst_32398;
var inst_32373 = (0);
var state_32493__$1 = (function (){var statearr_32548 = state_32493;
(statearr_32548[(13)] = inst_32370);

(statearr_32548[(15)] = inst_32373);

(statearr_32548[(16)] = inst_32371);

(statearr_32548[(17)] = inst_32372);

return statearr_32548;
})();
var statearr_32549_32613 = state_32493__$1;
(statearr_32549_32613[(2)] = null);

(statearr_32549_32613[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32494 === (11))){
var inst_32370 = (state_32493[(13)]);
var inst_32392 = (state_32493[(7)]);
var inst_32392__$1 = cljs.core.seq.call(null,inst_32370);
var state_32493__$1 = (function (){var statearr_32550 = state_32493;
(statearr_32550[(7)] = inst_32392__$1);

return statearr_32550;
})();
if(inst_32392__$1){
var statearr_32551_32614 = state_32493__$1;
(statearr_32551_32614[(1)] = (16));

} else {
var statearr_32552_32615 = state_32493__$1;
(statearr_32552_32615[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32494 === (9))){
var inst_32422 = (state_32493[(2)]);
var state_32493__$1 = state_32493;
var statearr_32553_32616 = state_32493__$1;
(statearr_32553_32616[(2)] = inst_32422);

(statearr_32553_32616[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32494 === (5))){
var inst_32368 = cljs.core.deref.call(null,cs);
var inst_32369 = cljs.core.seq.call(null,inst_32368);
var inst_32370 = inst_32369;
var inst_32371 = null;
var inst_32372 = (0);
var inst_32373 = (0);
var state_32493__$1 = (function (){var statearr_32554 = state_32493;
(statearr_32554[(13)] = inst_32370);

(statearr_32554[(15)] = inst_32373);

(statearr_32554[(16)] = inst_32371);

(statearr_32554[(17)] = inst_32372);

return statearr_32554;
})();
var statearr_32555_32617 = state_32493__$1;
(statearr_32555_32617[(2)] = null);

(statearr_32555_32617[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32494 === (14))){
var state_32493__$1 = state_32493;
var statearr_32556_32618 = state_32493__$1;
(statearr_32556_32618[(2)] = null);

(statearr_32556_32618[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32494 === (45))){
var inst_32483 = (state_32493[(2)]);
var state_32493__$1 = state_32493;
var statearr_32557_32619 = state_32493__$1;
(statearr_32557_32619[(2)] = inst_32483);

(statearr_32557_32619[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32494 === (26))){
var inst_32425 = (state_32493[(29)]);
var inst_32479 = (state_32493[(2)]);
var inst_32480 = cljs.core.seq.call(null,inst_32425);
var state_32493__$1 = (function (){var statearr_32558 = state_32493;
(statearr_32558[(31)] = inst_32479);

return statearr_32558;
})();
if(inst_32480){
var statearr_32559_32620 = state_32493__$1;
(statearr_32559_32620[(1)] = (42));

} else {
var statearr_32560_32621 = state_32493__$1;
(statearr_32560_32621[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32494 === (16))){
var inst_32392 = (state_32493[(7)]);
var inst_32394 = cljs.core.chunked_seq_QMARK_.call(null,inst_32392);
var state_32493__$1 = state_32493;
if(inst_32394){
var statearr_32561_32622 = state_32493__$1;
(statearr_32561_32622[(1)] = (19));

} else {
var statearr_32562_32623 = state_32493__$1;
(statearr_32562_32623[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32494 === (38))){
var inst_32472 = (state_32493[(2)]);
var state_32493__$1 = state_32493;
var statearr_32563_32624 = state_32493__$1;
(statearr_32563_32624[(2)] = inst_32472);

(statearr_32563_32624[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32494 === (30))){
var state_32493__$1 = state_32493;
var statearr_32564_32625 = state_32493__$1;
(statearr_32564_32625[(2)] = null);

(statearr_32564_32625[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32494 === (10))){
var inst_32373 = (state_32493[(15)]);
var inst_32371 = (state_32493[(16)]);
var inst_32381 = cljs.core._nth.call(null,inst_32371,inst_32373);
var inst_32382 = cljs.core.nth.call(null,inst_32381,(0),null);
var inst_32383 = cljs.core.nth.call(null,inst_32381,(1),null);
var state_32493__$1 = (function (){var statearr_32565 = state_32493;
(statearr_32565[(26)] = inst_32382);

return statearr_32565;
})();
if(cljs.core.truth_(inst_32383)){
var statearr_32566_32626 = state_32493__$1;
(statearr_32566_32626[(1)] = (13));

} else {
var statearr_32567_32627 = state_32493__$1;
(statearr_32567_32627[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32494 === (18))){
var inst_32418 = (state_32493[(2)]);
var state_32493__$1 = state_32493;
var statearr_32568_32628 = state_32493__$1;
(statearr_32568_32628[(2)] = inst_32418);

(statearr_32568_32628[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32494 === (42))){
var state_32493__$1 = state_32493;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32493__$1,(45),dchan);
} else {
if((state_val_32494 === (37))){
var inst_32361 = (state_32493[(12)]);
var inst_32461 = (state_32493[(23)]);
var inst_32452 = (state_32493[(25)]);
var inst_32461__$1 = cljs.core.first.call(null,inst_32452);
var inst_32462 = cljs.core.async.put_BANG_.call(null,inst_32461__$1,inst_32361,done);
var state_32493__$1 = (function (){var statearr_32569 = state_32493;
(statearr_32569[(23)] = inst_32461__$1);

return statearr_32569;
})();
if(cljs.core.truth_(inst_32462)){
var statearr_32570_32629 = state_32493__$1;
(statearr_32570_32629[(1)] = (39));

} else {
var statearr_32571_32630 = state_32493__$1;
(statearr_32571_32630[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32494 === (8))){
var inst_32373 = (state_32493[(15)]);
var inst_32372 = (state_32493[(17)]);
var inst_32375 = (inst_32373 < inst_32372);
var inst_32376 = inst_32375;
var state_32493__$1 = state_32493;
if(cljs.core.truth_(inst_32376)){
var statearr_32572_32631 = state_32493__$1;
(statearr_32572_32631[(1)] = (10));

} else {
var statearr_32573_32632 = state_32493__$1;
(statearr_32573_32632[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__31773__auto___32578,cs,m,dchan,dctr,done))
;
return ((function (switch__31685__auto__,c__31773__auto___32578,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__31686__auto__ = null;
var cljs$core$async$mult_$_state_machine__31686__auto____0 = (function (){
var statearr_32574 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32574[(0)] = cljs$core$async$mult_$_state_machine__31686__auto__);

(statearr_32574[(1)] = (1));

return statearr_32574;
});
var cljs$core$async$mult_$_state_machine__31686__auto____1 = (function (state_32493){
while(true){
var ret_value__31687__auto__ = (function (){try{while(true){
var result__31688__auto__ = switch__31685__auto__.call(null,state_32493);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31688__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31688__auto__;
}
break;
}
}catch (e32575){if((e32575 instanceof Object)){
var ex__31689__auto__ = e32575;
var statearr_32576_32633 = state_32493;
(statearr_32576_32633[(5)] = ex__31689__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32493);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32575;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31687__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32634 = state_32493;
state_32493 = G__32634;
continue;
} else {
return ret_value__31687__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__31686__auto__ = function(state_32493){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__31686__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__31686__auto____1.call(this,state_32493);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mult_$_state_machine__31686__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__31686__auto____0;
cljs$core$async$mult_$_state_machine__31686__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__31686__auto____1;
return cljs$core$async$mult_$_state_machine__31686__auto__;
})()
;})(switch__31685__auto__,c__31773__auto___32578,cs,m,dchan,dctr,done))
})();
var state__31775__auto__ = (function (){var statearr_32577 = f__31774__auto__.call(null);
(statearr_32577[(6)] = c__31773__auto___32578);

return statearr_32577;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31775__auto__);
});})(c__31773__auto___32578,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__32636 = arguments.length;
switch (G__32636) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__28735__auto__ = (((m == null))?null:m);
var m__28736__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__28735__auto__)]);
if(!((m__28736__auto__ == null))){
return m__28736__auto__.call(null,m,ch);
} else {
var m__28736__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__28736__auto____$1 == null))){
return m__28736__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__28735__auto__ = (((m == null))?null:m);
var m__28736__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__28735__auto__)]);
if(!((m__28736__auto__ == null))){
return m__28736__auto__.call(null,m,ch);
} else {
var m__28736__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__28736__auto____$1 == null))){
return m__28736__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__28735__auto__ = (((m == null))?null:m);
var m__28736__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__28735__auto__)]);
if(!((m__28736__auto__ == null))){
return m__28736__auto__.call(null,m);
} else {
var m__28736__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__28736__auto____$1 == null))){
return m__28736__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__28735__auto__ = (((m == null))?null:m);
var m__28736__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__28735__auto__)]);
if(!((m__28736__auto__ == null))){
return m__28736__auto__.call(null,m,state_map);
} else {
var m__28736__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__28736__auto____$1 == null))){
return m__28736__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__28735__auto__ = (((m == null))?null:m);
var m__28736__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__28735__auto__)]);
if(!((m__28736__auto__ == null))){
return m__28736__auto__.call(null,m,mode);
} else {
var m__28736__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__28736__auto____$1 == null))){
return m__28736__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__29230__auto__ = [];
var len__29223__auto___32648 = arguments.length;
var i__29224__auto___32649 = (0);
while(true){
if((i__29224__auto___32649 < len__29223__auto___32648)){
args__29230__auto__.push((arguments[i__29224__auto___32649]));

var G__32650 = (i__29224__auto___32649 + (1));
i__29224__auto___32649 = G__32650;
continue;
} else {
}
break;
}

var argseq__29231__auto__ = ((((3) < args__29230__auto__.length))?(new cljs.core.IndexedSeq(args__29230__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__29231__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__32642){
var map__32643 = p__32642;
var map__32643__$1 = ((((!((map__32643 == null)))?((((map__32643.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32643.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32643):map__32643);
var opts = map__32643__$1;
var statearr_32645_32651 = state;
(statearr_32645_32651[(1)] = cont_block);


var temp__4657__auto__ = cljs.core.async.do_alts.call(null,((function (map__32643,map__32643__$1,opts){
return (function (val){
var statearr_32646_32652 = state;
(statearr_32646_32652[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__32643,map__32643__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4657__auto__)){
var cb = temp__4657__auto__;
var statearr_32647_32653 = state;
(statearr_32647_32653[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq32638){
var G__32639 = cljs.core.first.call(null,seq32638);
var seq32638__$1 = cljs.core.next.call(null,seq32638);
var G__32640 = cljs.core.first.call(null,seq32638__$1);
var seq32638__$2 = cljs.core.next.call(null,seq32638__$1);
var G__32641 = cljs.core.first.call(null,seq32638__$2);
var seq32638__$3 = cljs.core.next.call(null,seq32638__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__32639,G__32640,G__32641,seq32638__$3);
});

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async32654 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32654 = (function (out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,meta32655){
this.out = out;
this.cs = cs;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.solo_mode = solo_mode;
this.change = change;
this.changed = changed;
this.pick = pick;
this.calc_state = calc_state;
this.meta32655 = meta32655;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async32654.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_32656,meta32655__$1){
var self__ = this;
var _32656__$1 = this;
return (new cljs.core.async.t_cljs$core$async32654(self__.out,self__.cs,self__.solo_modes,self__.attrs,self__.solo_mode,self__.change,self__.changed,self__.pick,self__.calc_state,meta32655__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async32654.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_32656){
var self__ = this;
var _32656__$1 = this;
return self__.meta32655;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async32654.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32654.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async32654.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32654.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async32654.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async32654.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async32654.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async32654.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join('')),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async32654.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"meta32655","meta32655",-200648809,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async32654.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async32654.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32654";

cljs.core.async.t_cljs$core$async32654.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__28677__auto__,writer__28678__auto__,opt__28679__auto__){
return cljs.core._write.call(null,writer__28678__auto__,"cljs.core.async/t_cljs$core$async32654");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async32654 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async32654(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta32655){
return (new cljs.core.async.t_cljs$core$async32654(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta32655));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async32654(out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__31773__auto___32818 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31773__auto___32818,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__31774__auto__ = (function (){var switch__31685__auto__ = ((function (c__31773__auto___32818,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_32758){
var state_val_32759 = (state_32758[(1)]);
if((state_val_32759 === (7))){
var inst_32673 = (state_32758[(2)]);
var state_32758__$1 = state_32758;
var statearr_32760_32819 = state_32758__$1;
(statearr_32760_32819[(2)] = inst_32673);

(statearr_32760_32819[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32759 === (20))){
var inst_32685 = (state_32758[(7)]);
var state_32758__$1 = state_32758;
var statearr_32761_32820 = state_32758__$1;
(statearr_32761_32820[(2)] = inst_32685);

(statearr_32761_32820[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32759 === (27))){
var state_32758__$1 = state_32758;
var statearr_32762_32821 = state_32758__$1;
(statearr_32762_32821[(2)] = null);

(statearr_32762_32821[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32759 === (1))){
var inst_32660 = (state_32758[(8)]);
var inst_32660__$1 = calc_state.call(null);
var inst_32662 = (inst_32660__$1 == null);
var inst_32663 = cljs.core.not.call(null,inst_32662);
var state_32758__$1 = (function (){var statearr_32763 = state_32758;
(statearr_32763[(8)] = inst_32660__$1);

return statearr_32763;
})();
if(inst_32663){
var statearr_32764_32822 = state_32758__$1;
(statearr_32764_32822[(1)] = (2));

} else {
var statearr_32765_32823 = state_32758__$1;
(statearr_32765_32823[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32759 === (24))){
var inst_32709 = (state_32758[(9)]);
var inst_32718 = (state_32758[(10)]);
var inst_32732 = (state_32758[(11)]);
var inst_32732__$1 = inst_32709.call(null,inst_32718);
var state_32758__$1 = (function (){var statearr_32766 = state_32758;
(statearr_32766[(11)] = inst_32732__$1);

return statearr_32766;
})();
if(cljs.core.truth_(inst_32732__$1)){
var statearr_32767_32824 = state_32758__$1;
(statearr_32767_32824[(1)] = (29));

} else {
var statearr_32768_32825 = state_32758__$1;
(statearr_32768_32825[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32759 === (4))){
var inst_32676 = (state_32758[(2)]);
var state_32758__$1 = state_32758;
if(cljs.core.truth_(inst_32676)){
var statearr_32769_32826 = state_32758__$1;
(statearr_32769_32826[(1)] = (8));

} else {
var statearr_32770_32827 = state_32758__$1;
(statearr_32770_32827[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32759 === (15))){
var inst_32703 = (state_32758[(2)]);
var state_32758__$1 = state_32758;
if(cljs.core.truth_(inst_32703)){
var statearr_32771_32828 = state_32758__$1;
(statearr_32771_32828[(1)] = (19));

} else {
var statearr_32772_32829 = state_32758__$1;
(statearr_32772_32829[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32759 === (21))){
var inst_32708 = (state_32758[(12)]);
var inst_32708__$1 = (state_32758[(2)]);
var inst_32709 = cljs.core.get.call(null,inst_32708__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_32710 = cljs.core.get.call(null,inst_32708__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_32711 = cljs.core.get.call(null,inst_32708__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_32758__$1 = (function (){var statearr_32773 = state_32758;
(statearr_32773[(12)] = inst_32708__$1);

(statearr_32773[(9)] = inst_32709);

(statearr_32773[(13)] = inst_32710);

return statearr_32773;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_32758__$1,(22),inst_32711);
} else {
if((state_val_32759 === (31))){
var inst_32740 = (state_32758[(2)]);
var state_32758__$1 = state_32758;
if(cljs.core.truth_(inst_32740)){
var statearr_32774_32830 = state_32758__$1;
(statearr_32774_32830[(1)] = (32));

} else {
var statearr_32775_32831 = state_32758__$1;
(statearr_32775_32831[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32759 === (32))){
var inst_32717 = (state_32758[(14)]);
var state_32758__$1 = state_32758;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32758__$1,(35),out,inst_32717);
} else {
if((state_val_32759 === (33))){
var inst_32708 = (state_32758[(12)]);
var inst_32685 = inst_32708;
var state_32758__$1 = (function (){var statearr_32776 = state_32758;
(statearr_32776[(7)] = inst_32685);

return statearr_32776;
})();
var statearr_32777_32832 = state_32758__$1;
(statearr_32777_32832[(2)] = null);

(statearr_32777_32832[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32759 === (13))){
var inst_32685 = (state_32758[(7)]);
var inst_32692 = inst_32685.cljs$lang$protocol_mask$partition0$;
var inst_32693 = (inst_32692 & (64));
var inst_32694 = inst_32685.cljs$core$ISeq$;
var inst_32695 = (cljs.core.PROTOCOL_SENTINEL === inst_32694);
var inst_32696 = (inst_32693) || (inst_32695);
var state_32758__$1 = state_32758;
if(cljs.core.truth_(inst_32696)){
var statearr_32778_32833 = state_32758__$1;
(statearr_32778_32833[(1)] = (16));

} else {
var statearr_32779_32834 = state_32758__$1;
(statearr_32779_32834[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32759 === (22))){
var inst_32718 = (state_32758[(10)]);
var inst_32717 = (state_32758[(14)]);
var inst_32716 = (state_32758[(2)]);
var inst_32717__$1 = cljs.core.nth.call(null,inst_32716,(0),null);
var inst_32718__$1 = cljs.core.nth.call(null,inst_32716,(1),null);
var inst_32719 = (inst_32717__$1 == null);
var inst_32720 = cljs.core._EQ_.call(null,inst_32718__$1,change);
var inst_32721 = (inst_32719) || (inst_32720);
var state_32758__$1 = (function (){var statearr_32780 = state_32758;
(statearr_32780[(10)] = inst_32718__$1);

(statearr_32780[(14)] = inst_32717__$1);

return statearr_32780;
})();
if(cljs.core.truth_(inst_32721)){
var statearr_32781_32835 = state_32758__$1;
(statearr_32781_32835[(1)] = (23));

} else {
var statearr_32782_32836 = state_32758__$1;
(statearr_32782_32836[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32759 === (36))){
var inst_32708 = (state_32758[(12)]);
var inst_32685 = inst_32708;
var state_32758__$1 = (function (){var statearr_32783 = state_32758;
(statearr_32783[(7)] = inst_32685);

return statearr_32783;
})();
var statearr_32784_32837 = state_32758__$1;
(statearr_32784_32837[(2)] = null);

(statearr_32784_32837[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32759 === (29))){
var inst_32732 = (state_32758[(11)]);
var state_32758__$1 = state_32758;
var statearr_32785_32838 = state_32758__$1;
(statearr_32785_32838[(2)] = inst_32732);

(statearr_32785_32838[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32759 === (6))){
var state_32758__$1 = state_32758;
var statearr_32786_32839 = state_32758__$1;
(statearr_32786_32839[(2)] = false);

(statearr_32786_32839[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32759 === (28))){
var inst_32728 = (state_32758[(2)]);
var inst_32729 = calc_state.call(null);
var inst_32685 = inst_32729;
var state_32758__$1 = (function (){var statearr_32787 = state_32758;
(statearr_32787[(15)] = inst_32728);

(statearr_32787[(7)] = inst_32685);

return statearr_32787;
})();
var statearr_32788_32840 = state_32758__$1;
(statearr_32788_32840[(2)] = null);

(statearr_32788_32840[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32759 === (25))){
var inst_32754 = (state_32758[(2)]);
var state_32758__$1 = state_32758;
var statearr_32789_32841 = state_32758__$1;
(statearr_32789_32841[(2)] = inst_32754);

(statearr_32789_32841[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32759 === (34))){
var inst_32752 = (state_32758[(2)]);
var state_32758__$1 = state_32758;
var statearr_32790_32842 = state_32758__$1;
(statearr_32790_32842[(2)] = inst_32752);

(statearr_32790_32842[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32759 === (17))){
var state_32758__$1 = state_32758;
var statearr_32791_32843 = state_32758__$1;
(statearr_32791_32843[(2)] = false);

(statearr_32791_32843[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32759 === (3))){
var state_32758__$1 = state_32758;
var statearr_32792_32844 = state_32758__$1;
(statearr_32792_32844[(2)] = false);

(statearr_32792_32844[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32759 === (12))){
var inst_32756 = (state_32758[(2)]);
var state_32758__$1 = state_32758;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32758__$1,inst_32756);
} else {
if((state_val_32759 === (2))){
var inst_32660 = (state_32758[(8)]);
var inst_32665 = inst_32660.cljs$lang$protocol_mask$partition0$;
var inst_32666 = (inst_32665 & (64));
var inst_32667 = inst_32660.cljs$core$ISeq$;
var inst_32668 = (cljs.core.PROTOCOL_SENTINEL === inst_32667);
var inst_32669 = (inst_32666) || (inst_32668);
var state_32758__$1 = state_32758;
if(cljs.core.truth_(inst_32669)){
var statearr_32793_32845 = state_32758__$1;
(statearr_32793_32845[(1)] = (5));

} else {
var statearr_32794_32846 = state_32758__$1;
(statearr_32794_32846[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32759 === (23))){
var inst_32717 = (state_32758[(14)]);
var inst_32723 = (inst_32717 == null);
var state_32758__$1 = state_32758;
if(cljs.core.truth_(inst_32723)){
var statearr_32795_32847 = state_32758__$1;
(statearr_32795_32847[(1)] = (26));

} else {
var statearr_32796_32848 = state_32758__$1;
(statearr_32796_32848[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32759 === (35))){
var inst_32743 = (state_32758[(2)]);
var state_32758__$1 = state_32758;
if(cljs.core.truth_(inst_32743)){
var statearr_32797_32849 = state_32758__$1;
(statearr_32797_32849[(1)] = (36));

} else {
var statearr_32798_32850 = state_32758__$1;
(statearr_32798_32850[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32759 === (19))){
var inst_32685 = (state_32758[(7)]);
var inst_32705 = cljs.core.apply.call(null,cljs.core.hash_map,inst_32685);
var state_32758__$1 = state_32758;
var statearr_32799_32851 = state_32758__$1;
(statearr_32799_32851[(2)] = inst_32705);

(statearr_32799_32851[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32759 === (11))){
var inst_32685 = (state_32758[(7)]);
var inst_32689 = (inst_32685 == null);
var inst_32690 = cljs.core.not.call(null,inst_32689);
var state_32758__$1 = state_32758;
if(inst_32690){
var statearr_32800_32852 = state_32758__$1;
(statearr_32800_32852[(1)] = (13));

} else {
var statearr_32801_32853 = state_32758__$1;
(statearr_32801_32853[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32759 === (9))){
var inst_32660 = (state_32758[(8)]);
var state_32758__$1 = state_32758;
var statearr_32802_32854 = state_32758__$1;
(statearr_32802_32854[(2)] = inst_32660);

(statearr_32802_32854[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32759 === (5))){
var state_32758__$1 = state_32758;
var statearr_32803_32855 = state_32758__$1;
(statearr_32803_32855[(2)] = true);

(statearr_32803_32855[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32759 === (14))){
var state_32758__$1 = state_32758;
var statearr_32804_32856 = state_32758__$1;
(statearr_32804_32856[(2)] = false);

(statearr_32804_32856[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32759 === (26))){
var inst_32718 = (state_32758[(10)]);
var inst_32725 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_32718);
var state_32758__$1 = state_32758;
var statearr_32805_32857 = state_32758__$1;
(statearr_32805_32857[(2)] = inst_32725);

(statearr_32805_32857[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32759 === (16))){
var state_32758__$1 = state_32758;
var statearr_32806_32858 = state_32758__$1;
(statearr_32806_32858[(2)] = true);

(statearr_32806_32858[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32759 === (38))){
var inst_32748 = (state_32758[(2)]);
var state_32758__$1 = state_32758;
var statearr_32807_32859 = state_32758__$1;
(statearr_32807_32859[(2)] = inst_32748);

(statearr_32807_32859[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32759 === (30))){
var inst_32709 = (state_32758[(9)]);
var inst_32718 = (state_32758[(10)]);
var inst_32710 = (state_32758[(13)]);
var inst_32735 = cljs.core.empty_QMARK_.call(null,inst_32709);
var inst_32736 = inst_32710.call(null,inst_32718);
var inst_32737 = cljs.core.not.call(null,inst_32736);
var inst_32738 = (inst_32735) && (inst_32737);
var state_32758__$1 = state_32758;
var statearr_32808_32860 = state_32758__$1;
(statearr_32808_32860[(2)] = inst_32738);

(statearr_32808_32860[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32759 === (10))){
var inst_32660 = (state_32758[(8)]);
var inst_32681 = (state_32758[(2)]);
var inst_32682 = cljs.core.get.call(null,inst_32681,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_32683 = cljs.core.get.call(null,inst_32681,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_32684 = cljs.core.get.call(null,inst_32681,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_32685 = inst_32660;
var state_32758__$1 = (function (){var statearr_32809 = state_32758;
(statearr_32809[(16)] = inst_32683);

(statearr_32809[(17)] = inst_32682);

(statearr_32809[(18)] = inst_32684);

(statearr_32809[(7)] = inst_32685);

return statearr_32809;
})();
var statearr_32810_32861 = state_32758__$1;
(statearr_32810_32861[(2)] = null);

(statearr_32810_32861[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32759 === (18))){
var inst_32700 = (state_32758[(2)]);
var state_32758__$1 = state_32758;
var statearr_32811_32862 = state_32758__$1;
(statearr_32811_32862[(2)] = inst_32700);

(statearr_32811_32862[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32759 === (37))){
var state_32758__$1 = state_32758;
var statearr_32812_32863 = state_32758__$1;
(statearr_32812_32863[(2)] = null);

(statearr_32812_32863[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32759 === (8))){
var inst_32660 = (state_32758[(8)]);
var inst_32678 = cljs.core.apply.call(null,cljs.core.hash_map,inst_32660);
var state_32758__$1 = state_32758;
var statearr_32813_32864 = state_32758__$1;
(statearr_32813_32864[(2)] = inst_32678);

(statearr_32813_32864[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__31773__auto___32818,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__31685__auto__,c__31773__auto___32818,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__31686__auto__ = null;
var cljs$core$async$mix_$_state_machine__31686__auto____0 = (function (){
var statearr_32814 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32814[(0)] = cljs$core$async$mix_$_state_machine__31686__auto__);

(statearr_32814[(1)] = (1));

return statearr_32814;
});
var cljs$core$async$mix_$_state_machine__31686__auto____1 = (function (state_32758){
while(true){
var ret_value__31687__auto__ = (function (){try{while(true){
var result__31688__auto__ = switch__31685__auto__.call(null,state_32758);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31688__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31688__auto__;
}
break;
}
}catch (e32815){if((e32815 instanceof Object)){
var ex__31689__auto__ = e32815;
var statearr_32816_32865 = state_32758;
(statearr_32816_32865[(5)] = ex__31689__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32758);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32815;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31687__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32866 = state_32758;
state_32758 = G__32866;
continue;
} else {
return ret_value__31687__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__31686__auto__ = function(state_32758){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__31686__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__31686__auto____1.call(this,state_32758);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mix_$_state_machine__31686__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__31686__auto____0;
cljs$core$async$mix_$_state_machine__31686__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__31686__auto____1;
return cljs$core$async$mix_$_state_machine__31686__auto__;
})()
;})(switch__31685__auto__,c__31773__auto___32818,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__31775__auto__ = (function (){var statearr_32817 = f__31774__auto__.call(null);
(statearr_32817[(6)] = c__31773__auto___32818);

return statearr_32817;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31775__auto__);
});})(c__31773__auto___32818,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__28735__auto__ = (((p == null))?null:p);
var m__28736__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__28735__auto__)]);
if(!((m__28736__auto__ == null))){
return m__28736__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__28736__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__28736__auto____$1 == null))){
return m__28736__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__28735__auto__ = (((p == null))?null:p);
var m__28736__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__28735__auto__)]);
if(!((m__28736__auto__ == null))){
return m__28736__auto__.call(null,p,v,ch);
} else {
var m__28736__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__28736__auto____$1 == null))){
return m__28736__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__32868 = arguments.length;
switch (G__32868) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__28735__auto__ = (((p == null))?null:p);
var m__28736__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__28735__auto__)]);
if(!((m__28736__auto__ == null))){
return m__28736__auto__.call(null,p);
} else {
var m__28736__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__28736__auto____$1 == null))){
return m__28736__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__28735__auto__ = (((p == null))?null:p);
var m__28736__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__28735__auto__)]);
if(!((m__28736__auto__ == null))){
return m__28736__auto__.call(null,p,v);
} else {
var m__28736__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__28736__auto____$1 == null))){
return m__28736__auto____$1.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__32872 = arguments.length;
switch (G__32872) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__28052__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__28052__auto__)){
return or__28052__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__28052__auto__,mults){
return (function (p1__32870_SHARP_){
if(cljs.core.truth_(p1__32870_SHARP_.call(null,topic))){
return p1__32870_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__32870_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__28052__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async32873 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32873 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta32874){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta32874 = meta32874;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async32873.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_32875,meta32874__$1){
var self__ = this;
var _32875__$1 = this;
return (new cljs.core.async.t_cljs$core$async32873(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta32874__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async32873.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_32875){
var self__ = this;
var _32875__$1 = this;
return self__.meta32874;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async32873.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32873.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async32873.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32873.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async32873.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4657__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4657__auto__)){
var m = temp__4657__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async32873.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async32873.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async32873.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta32874","meta32874",1473211415,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async32873.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async32873.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32873";

cljs.core.async.t_cljs$core$async32873.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__28677__auto__,writer__28678__auto__,opt__28679__auto__){
return cljs.core._write.call(null,writer__28678__auto__,"cljs.core.async/t_cljs$core$async32873");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async32873 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async32873(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta32874){
return (new cljs.core.async.t_cljs$core$async32873(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta32874));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async32873(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__31773__auto___32993 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31773__auto___32993,mults,ensure_mult,p){
return (function (){
var f__31774__auto__ = (function (){var switch__31685__auto__ = ((function (c__31773__auto___32993,mults,ensure_mult,p){
return (function (state_32947){
var state_val_32948 = (state_32947[(1)]);
if((state_val_32948 === (7))){
var inst_32943 = (state_32947[(2)]);
var state_32947__$1 = state_32947;
var statearr_32949_32994 = state_32947__$1;
(statearr_32949_32994[(2)] = inst_32943);

(statearr_32949_32994[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32948 === (20))){
var state_32947__$1 = state_32947;
var statearr_32950_32995 = state_32947__$1;
(statearr_32950_32995[(2)] = null);

(statearr_32950_32995[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32948 === (1))){
var state_32947__$1 = state_32947;
var statearr_32951_32996 = state_32947__$1;
(statearr_32951_32996[(2)] = null);

(statearr_32951_32996[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32948 === (24))){
var inst_32926 = (state_32947[(7)]);
var inst_32935 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_32926);
var state_32947__$1 = state_32947;
var statearr_32952_32997 = state_32947__$1;
(statearr_32952_32997[(2)] = inst_32935);

(statearr_32952_32997[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32948 === (4))){
var inst_32878 = (state_32947[(8)]);
var inst_32878__$1 = (state_32947[(2)]);
var inst_32879 = (inst_32878__$1 == null);
var state_32947__$1 = (function (){var statearr_32953 = state_32947;
(statearr_32953[(8)] = inst_32878__$1);

return statearr_32953;
})();
if(cljs.core.truth_(inst_32879)){
var statearr_32954_32998 = state_32947__$1;
(statearr_32954_32998[(1)] = (5));

} else {
var statearr_32955_32999 = state_32947__$1;
(statearr_32955_32999[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32948 === (15))){
var inst_32920 = (state_32947[(2)]);
var state_32947__$1 = state_32947;
var statearr_32956_33000 = state_32947__$1;
(statearr_32956_33000[(2)] = inst_32920);

(statearr_32956_33000[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32948 === (21))){
var inst_32940 = (state_32947[(2)]);
var state_32947__$1 = (function (){var statearr_32957 = state_32947;
(statearr_32957[(9)] = inst_32940);

return statearr_32957;
})();
var statearr_32958_33001 = state_32947__$1;
(statearr_32958_33001[(2)] = null);

(statearr_32958_33001[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32948 === (13))){
var inst_32902 = (state_32947[(10)]);
var inst_32904 = cljs.core.chunked_seq_QMARK_.call(null,inst_32902);
var state_32947__$1 = state_32947;
if(inst_32904){
var statearr_32959_33002 = state_32947__$1;
(statearr_32959_33002[(1)] = (16));

} else {
var statearr_32960_33003 = state_32947__$1;
(statearr_32960_33003[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32948 === (22))){
var inst_32932 = (state_32947[(2)]);
var state_32947__$1 = state_32947;
if(cljs.core.truth_(inst_32932)){
var statearr_32961_33004 = state_32947__$1;
(statearr_32961_33004[(1)] = (23));

} else {
var statearr_32962_33005 = state_32947__$1;
(statearr_32962_33005[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32948 === (6))){
var inst_32878 = (state_32947[(8)]);
var inst_32928 = (state_32947[(11)]);
var inst_32926 = (state_32947[(7)]);
var inst_32926__$1 = topic_fn.call(null,inst_32878);
var inst_32927 = cljs.core.deref.call(null,mults);
var inst_32928__$1 = cljs.core.get.call(null,inst_32927,inst_32926__$1);
var state_32947__$1 = (function (){var statearr_32963 = state_32947;
(statearr_32963[(11)] = inst_32928__$1);

(statearr_32963[(7)] = inst_32926__$1);

return statearr_32963;
})();
if(cljs.core.truth_(inst_32928__$1)){
var statearr_32964_33006 = state_32947__$1;
(statearr_32964_33006[(1)] = (19));

} else {
var statearr_32965_33007 = state_32947__$1;
(statearr_32965_33007[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32948 === (25))){
var inst_32937 = (state_32947[(2)]);
var state_32947__$1 = state_32947;
var statearr_32966_33008 = state_32947__$1;
(statearr_32966_33008[(2)] = inst_32937);

(statearr_32966_33008[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32948 === (17))){
var inst_32902 = (state_32947[(10)]);
var inst_32911 = cljs.core.first.call(null,inst_32902);
var inst_32912 = cljs.core.async.muxch_STAR_.call(null,inst_32911);
var inst_32913 = cljs.core.async.close_BANG_.call(null,inst_32912);
var inst_32914 = cljs.core.next.call(null,inst_32902);
var inst_32888 = inst_32914;
var inst_32889 = null;
var inst_32890 = (0);
var inst_32891 = (0);
var state_32947__$1 = (function (){var statearr_32967 = state_32947;
(statearr_32967[(12)] = inst_32890);

(statearr_32967[(13)] = inst_32913);

(statearr_32967[(14)] = inst_32888);

(statearr_32967[(15)] = inst_32889);

(statearr_32967[(16)] = inst_32891);

return statearr_32967;
})();
var statearr_32968_33009 = state_32947__$1;
(statearr_32968_33009[(2)] = null);

(statearr_32968_33009[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32948 === (3))){
var inst_32945 = (state_32947[(2)]);
var state_32947__$1 = state_32947;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32947__$1,inst_32945);
} else {
if((state_val_32948 === (12))){
var inst_32922 = (state_32947[(2)]);
var state_32947__$1 = state_32947;
var statearr_32969_33010 = state_32947__$1;
(statearr_32969_33010[(2)] = inst_32922);

(statearr_32969_33010[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32948 === (2))){
var state_32947__$1 = state_32947;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32947__$1,(4),ch);
} else {
if((state_val_32948 === (23))){
var state_32947__$1 = state_32947;
var statearr_32970_33011 = state_32947__$1;
(statearr_32970_33011[(2)] = null);

(statearr_32970_33011[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32948 === (19))){
var inst_32878 = (state_32947[(8)]);
var inst_32928 = (state_32947[(11)]);
var inst_32930 = cljs.core.async.muxch_STAR_.call(null,inst_32928);
var state_32947__$1 = state_32947;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32947__$1,(22),inst_32930,inst_32878);
} else {
if((state_val_32948 === (11))){
var inst_32902 = (state_32947[(10)]);
var inst_32888 = (state_32947[(14)]);
var inst_32902__$1 = cljs.core.seq.call(null,inst_32888);
var state_32947__$1 = (function (){var statearr_32971 = state_32947;
(statearr_32971[(10)] = inst_32902__$1);

return statearr_32971;
})();
if(inst_32902__$1){
var statearr_32972_33012 = state_32947__$1;
(statearr_32972_33012[(1)] = (13));

} else {
var statearr_32973_33013 = state_32947__$1;
(statearr_32973_33013[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32948 === (9))){
var inst_32924 = (state_32947[(2)]);
var state_32947__$1 = state_32947;
var statearr_32974_33014 = state_32947__$1;
(statearr_32974_33014[(2)] = inst_32924);

(statearr_32974_33014[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32948 === (5))){
var inst_32885 = cljs.core.deref.call(null,mults);
var inst_32886 = cljs.core.vals.call(null,inst_32885);
var inst_32887 = cljs.core.seq.call(null,inst_32886);
var inst_32888 = inst_32887;
var inst_32889 = null;
var inst_32890 = (0);
var inst_32891 = (0);
var state_32947__$1 = (function (){var statearr_32975 = state_32947;
(statearr_32975[(12)] = inst_32890);

(statearr_32975[(14)] = inst_32888);

(statearr_32975[(15)] = inst_32889);

(statearr_32975[(16)] = inst_32891);

return statearr_32975;
})();
var statearr_32976_33015 = state_32947__$1;
(statearr_32976_33015[(2)] = null);

(statearr_32976_33015[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32948 === (14))){
var state_32947__$1 = state_32947;
var statearr_32980_33016 = state_32947__$1;
(statearr_32980_33016[(2)] = null);

(statearr_32980_33016[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32948 === (16))){
var inst_32902 = (state_32947[(10)]);
var inst_32906 = cljs.core.chunk_first.call(null,inst_32902);
var inst_32907 = cljs.core.chunk_rest.call(null,inst_32902);
var inst_32908 = cljs.core.count.call(null,inst_32906);
var inst_32888 = inst_32907;
var inst_32889 = inst_32906;
var inst_32890 = inst_32908;
var inst_32891 = (0);
var state_32947__$1 = (function (){var statearr_32981 = state_32947;
(statearr_32981[(12)] = inst_32890);

(statearr_32981[(14)] = inst_32888);

(statearr_32981[(15)] = inst_32889);

(statearr_32981[(16)] = inst_32891);

return statearr_32981;
})();
var statearr_32982_33017 = state_32947__$1;
(statearr_32982_33017[(2)] = null);

(statearr_32982_33017[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32948 === (10))){
var inst_32890 = (state_32947[(12)]);
var inst_32888 = (state_32947[(14)]);
var inst_32889 = (state_32947[(15)]);
var inst_32891 = (state_32947[(16)]);
var inst_32896 = cljs.core._nth.call(null,inst_32889,inst_32891);
var inst_32897 = cljs.core.async.muxch_STAR_.call(null,inst_32896);
var inst_32898 = cljs.core.async.close_BANG_.call(null,inst_32897);
var inst_32899 = (inst_32891 + (1));
var tmp32977 = inst_32890;
var tmp32978 = inst_32888;
var tmp32979 = inst_32889;
var inst_32888__$1 = tmp32978;
var inst_32889__$1 = tmp32979;
var inst_32890__$1 = tmp32977;
var inst_32891__$1 = inst_32899;
var state_32947__$1 = (function (){var statearr_32983 = state_32947;
(statearr_32983[(12)] = inst_32890__$1);

(statearr_32983[(14)] = inst_32888__$1);

(statearr_32983[(15)] = inst_32889__$1);

(statearr_32983[(17)] = inst_32898);

(statearr_32983[(16)] = inst_32891__$1);

return statearr_32983;
})();
var statearr_32984_33018 = state_32947__$1;
(statearr_32984_33018[(2)] = null);

(statearr_32984_33018[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32948 === (18))){
var inst_32917 = (state_32947[(2)]);
var state_32947__$1 = state_32947;
var statearr_32985_33019 = state_32947__$1;
(statearr_32985_33019[(2)] = inst_32917);

(statearr_32985_33019[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32948 === (8))){
var inst_32890 = (state_32947[(12)]);
var inst_32891 = (state_32947[(16)]);
var inst_32893 = (inst_32891 < inst_32890);
var inst_32894 = inst_32893;
var state_32947__$1 = state_32947;
if(cljs.core.truth_(inst_32894)){
var statearr_32986_33020 = state_32947__$1;
(statearr_32986_33020[(1)] = (10));

} else {
var statearr_32987_33021 = state_32947__$1;
(statearr_32987_33021[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__31773__auto___32993,mults,ensure_mult,p))
;
return ((function (switch__31685__auto__,c__31773__auto___32993,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__31686__auto__ = null;
var cljs$core$async$state_machine__31686__auto____0 = (function (){
var statearr_32988 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32988[(0)] = cljs$core$async$state_machine__31686__auto__);

(statearr_32988[(1)] = (1));

return statearr_32988;
});
var cljs$core$async$state_machine__31686__auto____1 = (function (state_32947){
while(true){
var ret_value__31687__auto__ = (function (){try{while(true){
var result__31688__auto__ = switch__31685__auto__.call(null,state_32947);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31688__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31688__auto__;
}
break;
}
}catch (e32989){if((e32989 instanceof Object)){
var ex__31689__auto__ = e32989;
var statearr_32990_33022 = state_32947;
(statearr_32990_33022[(5)] = ex__31689__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32947);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32989;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31687__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33023 = state_32947;
state_32947 = G__33023;
continue;
} else {
return ret_value__31687__auto__;
}
break;
}
});
cljs$core$async$state_machine__31686__auto__ = function(state_32947){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31686__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31686__auto____1.call(this,state_32947);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__31686__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31686__auto____0;
cljs$core$async$state_machine__31686__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31686__auto____1;
return cljs$core$async$state_machine__31686__auto__;
})()
;})(switch__31685__auto__,c__31773__auto___32993,mults,ensure_mult,p))
})();
var state__31775__auto__ = (function (){var statearr_32991 = f__31774__auto__.call(null);
(statearr_32991[(6)] = c__31773__auto___32993);

return statearr_32991;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31775__auto__);
});})(c__31773__auto___32993,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__33025 = arguments.length;
switch (G__33025) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__33028 = arguments.length;
switch (G__33028) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__33031 = arguments.length;
switch (G__33031) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__31773__auto___33098 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31773__auto___33098,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__31774__auto__ = (function (){var switch__31685__auto__ = ((function (c__31773__auto___33098,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_33070){
var state_val_33071 = (state_33070[(1)]);
if((state_val_33071 === (7))){
var state_33070__$1 = state_33070;
var statearr_33072_33099 = state_33070__$1;
(statearr_33072_33099[(2)] = null);

(statearr_33072_33099[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33071 === (1))){
var state_33070__$1 = state_33070;
var statearr_33073_33100 = state_33070__$1;
(statearr_33073_33100[(2)] = null);

(statearr_33073_33100[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33071 === (4))){
var inst_33034 = (state_33070[(7)]);
var inst_33036 = (inst_33034 < cnt);
var state_33070__$1 = state_33070;
if(cljs.core.truth_(inst_33036)){
var statearr_33074_33101 = state_33070__$1;
(statearr_33074_33101[(1)] = (6));

} else {
var statearr_33075_33102 = state_33070__$1;
(statearr_33075_33102[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33071 === (15))){
var inst_33066 = (state_33070[(2)]);
var state_33070__$1 = state_33070;
var statearr_33076_33103 = state_33070__$1;
(statearr_33076_33103[(2)] = inst_33066);

(statearr_33076_33103[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33071 === (13))){
var inst_33059 = cljs.core.async.close_BANG_.call(null,out);
var state_33070__$1 = state_33070;
var statearr_33077_33104 = state_33070__$1;
(statearr_33077_33104[(2)] = inst_33059);

(statearr_33077_33104[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33071 === (6))){
var state_33070__$1 = state_33070;
var statearr_33078_33105 = state_33070__$1;
(statearr_33078_33105[(2)] = null);

(statearr_33078_33105[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33071 === (3))){
var inst_33068 = (state_33070[(2)]);
var state_33070__$1 = state_33070;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33070__$1,inst_33068);
} else {
if((state_val_33071 === (12))){
var inst_33056 = (state_33070[(8)]);
var inst_33056__$1 = (state_33070[(2)]);
var inst_33057 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_33056__$1);
var state_33070__$1 = (function (){var statearr_33079 = state_33070;
(statearr_33079[(8)] = inst_33056__$1);

return statearr_33079;
})();
if(cljs.core.truth_(inst_33057)){
var statearr_33080_33106 = state_33070__$1;
(statearr_33080_33106[(1)] = (13));

} else {
var statearr_33081_33107 = state_33070__$1;
(statearr_33081_33107[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33071 === (2))){
var inst_33033 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_33034 = (0);
var state_33070__$1 = (function (){var statearr_33082 = state_33070;
(statearr_33082[(9)] = inst_33033);

(statearr_33082[(7)] = inst_33034);

return statearr_33082;
})();
var statearr_33083_33108 = state_33070__$1;
(statearr_33083_33108[(2)] = null);

(statearr_33083_33108[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33071 === (11))){
var inst_33034 = (state_33070[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_33070,(10),Object,null,(9));
var inst_33043 = chs__$1.call(null,inst_33034);
var inst_33044 = done.call(null,inst_33034);
var inst_33045 = cljs.core.async.take_BANG_.call(null,inst_33043,inst_33044);
var state_33070__$1 = state_33070;
var statearr_33084_33109 = state_33070__$1;
(statearr_33084_33109[(2)] = inst_33045);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33070__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33071 === (9))){
var inst_33034 = (state_33070[(7)]);
var inst_33047 = (state_33070[(2)]);
var inst_33048 = (inst_33034 + (1));
var inst_33034__$1 = inst_33048;
var state_33070__$1 = (function (){var statearr_33085 = state_33070;
(statearr_33085[(7)] = inst_33034__$1);

(statearr_33085[(10)] = inst_33047);

return statearr_33085;
})();
var statearr_33086_33110 = state_33070__$1;
(statearr_33086_33110[(2)] = null);

(statearr_33086_33110[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33071 === (5))){
var inst_33054 = (state_33070[(2)]);
var state_33070__$1 = (function (){var statearr_33087 = state_33070;
(statearr_33087[(11)] = inst_33054);

return statearr_33087;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33070__$1,(12),dchan);
} else {
if((state_val_33071 === (14))){
var inst_33056 = (state_33070[(8)]);
var inst_33061 = cljs.core.apply.call(null,f,inst_33056);
var state_33070__$1 = state_33070;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33070__$1,(16),out,inst_33061);
} else {
if((state_val_33071 === (16))){
var inst_33063 = (state_33070[(2)]);
var state_33070__$1 = (function (){var statearr_33088 = state_33070;
(statearr_33088[(12)] = inst_33063);

return statearr_33088;
})();
var statearr_33089_33111 = state_33070__$1;
(statearr_33089_33111[(2)] = null);

(statearr_33089_33111[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33071 === (10))){
var inst_33038 = (state_33070[(2)]);
var inst_33039 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_33070__$1 = (function (){var statearr_33090 = state_33070;
(statearr_33090[(13)] = inst_33038);

return statearr_33090;
})();
var statearr_33091_33112 = state_33070__$1;
(statearr_33091_33112[(2)] = inst_33039);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33070__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33071 === (8))){
var inst_33052 = (state_33070[(2)]);
var state_33070__$1 = state_33070;
var statearr_33092_33113 = state_33070__$1;
(statearr_33092_33113[(2)] = inst_33052);

(statearr_33092_33113[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__31773__auto___33098,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__31685__auto__,c__31773__auto___33098,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__31686__auto__ = null;
var cljs$core$async$state_machine__31686__auto____0 = (function (){
var statearr_33093 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33093[(0)] = cljs$core$async$state_machine__31686__auto__);

(statearr_33093[(1)] = (1));

return statearr_33093;
});
var cljs$core$async$state_machine__31686__auto____1 = (function (state_33070){
while(true){
var ret_value__31687__auto__ = (function (){try{while(true){
var result__31688__auto__ = switch__31685__auto__.call(null,state_33070);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31688__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31688__auto__;
}
break;
}
}catch (e33094){if((e33094 instanceof Object)){
var ex__31689__auto__ = e33094;
var statearr_33095_33114 = state_33070;
(statearr_33095_33114[(5)] = ex__31689__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33070);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33094;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31687__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33115 = state_33070;
state_33070 = G__33115;
continue;
} else {
return ret_value__31687__auto__;
}
break;
}
});
cljs$core$async$state_machine__31686__auto__ = function(state_33070){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31686__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31686__auto____1.call(this,state_33070);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__31686__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31686__auto____0;
cljs$core$async$state_machine__31686__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31686__auto____1;
return cljs$core$async$state_machine__31686__auto__;
})()
;})(switch__31685__auto__,c__31773__auto___33098,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__31775__auto__ = (function (){var statearr_33096 = f__31774__auto__.call(null);
(statearr_33096[(6)] = c__31773__auto___33098);

return statearr_33096;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31775__auto__);
});})(c__31773__auto___33098,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__33118 = arguments.length;
switch (G__33118) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__31773__auto___33172 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31773__auto___33172,out){
return (function (){
var f__31774__auto__ = (function (){var switch__31685__auto__ = ((function (c__31773__auto___33172,out){
return (function (state_33150){
var state_val_33151 = (state_33150[(1)]);
if((state_val_33151 === (7))){
var inst_33130 = (state_33150[(7)]);
var inst_33129 = (state_33150[(8)]);
var inst_33129__$1 = (state_33150[(2)]);
var inst_33130__$1 = cljs.core.nth.call(null,inst_33129__$1,(0),null);
var inst_33131 = cljs.core.nth.call(null,inst_33129__$1,(1),null);
var inst_33132 = (inst_33130__$1 == null);
var state_33150__$1 = (function (){var statearr_33152 = state_33150;
(statearr_33152[(9)] = inst_33131);

(statearr_33152[(7)] = inst_33130__$1);

(statearr_33152[(8)] = inst_33129__$1);

return statearr_33152;
})();
if(cljs.core.truth_(inst_33132)){
var statearr_33153_33173 = state_33150__$1;
(statearr_33153_33173[(1)] = (8));

} else {
var statearr_33154_33174 = state_33150__$1;
(statearr_33154_33174[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33151 === (1))){
var inst_33119 = cljs.core.vec.call(null,chs);
var inst_33120 = inst_33119;
var state_33150__$1 = (function (){var statearr_33155 = state_33150;
(statearr_33155[(10)] = inst_33120);

return statearr_33155;
})();
var statearr_33156_33175 = state_33150__$1;
(statearr_33156_33175[(2)] = null);

(statearr_33156_33175[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33151 === (4))){
var inst_33120 = (state_33150[(10)]);
var state_33150__$1 = state_33150;
return cljs.core.async.ioc_alts_BANG_.call(null,state_33150__$1,(7),inst_33120);
} else {
if((state_val_33151 === (6))){
var inst_33146 = (state_33150[(2)]);
var state_33150__$1 = state_33150;
var statearr_33157_33176 = state_33150__$1;
(statearr_33157_33176[(2)] = inst_33146);

(statearr_33157_33176[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33151 === (3))){
var inst_33148 = (state_33150[(2)]);
var state_33150__$1 = state_33150;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33150__$1,inst_33148);
} else {
if((state_val_33151 === (2))){
var inst_33120 = (state_33150[(10)]);
var inst_33122 = cljs.core.count.call(null,inst_33120);
var inst_33123 = (inst_33122 > (0));
var state_33150__$1 = state_33150;
if(cljs.core.truth_(inst_33123)){
var statearr_33159_33177 = state_33150__$1;
(statearr_33159_33177[(1)] = (4));

} else {
var statearr_33160_33178 = state_33150__$1;
(statearr_33160_33178[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33151 === (11))){
var inst_33120 = (state_33150[(10)]);
var inst_33139 = (state_33150[(2)]);
var tmp33158 = inst_33120;
var inst_33120__$1 = tmp33158;
var state_33150__$1 = (function (){var statearr_33161 = state_33150;
(statearr_33161[(10)] = inst_33120__$1);

(statearr_33161[(11)] = inst_33139);

return statearr_33161;
})();
var statearr_33162_33179 = state_33150__$1;
(statearr_33162_33179[(2)] = null);

(statearr_33162_33179[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33151 === (9))){
var inst_33130 = (state_33150[(7)]);
var state_33150__$1 = state_33150;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33150__$1,(11),out,inst_33130);
} else {
if((state_val_33151 === (5))){
var inst_33144 = cljs.core.async.close_BANG_.call(null,out);
var state_33150__$1 = state_33150;
var statearr_33163_33180 = state_33150__$1;
(statearr_33163_33180[(2)] = inst_33144);

(statearr_33163_33180[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33151 === (10))){
var inst_33142 = (state_33150[(2)]);
var state_33150__$1 = state_33150;
var statearr_33164_33181 = state_33150__$1;
(statearr_33164_33181[(2)] = inst_33142);

(statearr_33164_33181[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33151 === (8))){
var inst_33131 = (state_33150[(9)]);
var inst_33120 = (state_33150[(10)]);
var inst_33130 = (state_33150[(7)]);
var inst_33129 = (state_33150[(8)]);
var inst_33134 = (function (){var cs = inst_33120;
var vec__33125 = inst_33129;
var v = inst_33130;
var c = inst_33131;
return ((function (cs,vec__33125,v,c,inst_33131,inst_33120,inst_33130,inst_33129,state_val_33151,c__31773__auto___33172,out){
return (function (p1__33116_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__33116_SHARP_);
});
;})(cs,vec__33125,v,c,inst_33131,inst_33120,inst_33130,inst_33129,state_val_33151,c__31773__auto___33172,out))
})();
var inst_33135 = cljs.core.filterv.call(null,inst_33134,inst_33120);
var inst_33120__$1 = inst_33135;
var state_33150__$1 = (function (){var statearr_33165 = state_33150;
(statearr_33165[(10)] = inst_33120__$1);

return statearr_33165;
})();
var statearr_33166_33182 = state_33150__$1;
(statearr_33166_33182[(2)] = null);

(statearr_33166_33182[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__31773__auto___33172,out))
;
return ((function (switch__31685__auto__,c__31773__auto___33172,out){
return (function() {
var cljs$core$async$state_machine__31686__auto__ = null;
var cljs$core$async$state_machine__31686__auto____0 = (function (){
var statearr_33167 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33167[(0)] = cljs$core$async$state_machine__31686__auto__);

(statearr_33167[(1)] = (1));

return statearr_33167;
});
var cljs$core$async$state_machine__31686__auto____1 = (function (state_33150){
while(true){
var ret_value__31687__auto__ = (function (){try{while(true){
var result__31688__auto__ = switch__31685__auto__.call(null,state_33150);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31688__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31688__auto__;
}
break;
}
}catch (e33168){if((e33168 instanceof Object)){
var ex__31689__auto__ = e33168;
var statearr_33169_33183 = state_33150;
(statearr_33169_33183[(5)] = ex__31689__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33150);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33168;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31687__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33184 = state_33150;
state_33150 = G__33184;
continue;
} else {
return ret_value__31687__auto__;
}
break;
}
});
cljs$core$async$state_machine__31686__auto__ = function(state_33150){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31686__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31686__auto____1.call(this,state_33150);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__31686__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31686__auto____0;
cljs$core$async$state_machine__31686__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31686__auto____1;
return cljs$core$async$state_machine__31686__auto__;
})()
;})(switch__31685__auto__,c__31773__auto___33172,out))
})();
var state__31775__auto__ = (function (){var statearr_33170 = f__31774__auto__.call(null);
(statearr_33170[(6)] = c__31773__auto___33172);

return statearr_33170;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31775__auto__);
});})(c__31773__auto___33172,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__33186 = arguments.length;
switch (G__33186) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__31773__auto___33231 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31773__auto___33231,out){
return (function (){
var f__31774__auto__ = (function (){var switch__31685__auto__ = ((function (c__31773__auto___33231,out){
return (function (state_33210){
var state_val_33211 = (state_33210[(1)]);
if((state_val_33211 === (7))){
var inst_33192 = (state_33210[(7)]);
var inst_33192__$1 = (state_33210[(2)]);
var inst_33193 = (inst_33192__$1 == null);
var inst_33194 = cljs.core.not.call(null,inst_33193);
var state_33210__$1 = (function (){var statearr_33212 = state_33210;
(statearr_33212[(7)] = inst_33192__$1);

return statearr_33212;
})();
if(inst_33194){
var statearr_33213_33232 = state_33210__$1;
(statearr_33213_33232[(1)] = (8));

} else {
var statearr_33214_33233 = state_33210__$1;
(statearr_33214_33233[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33211 === (1))){
var inst_33187 = (0);
var state_33210__$1 = (function (){var statearr_33215 = state_33210;
(statearr_33215[(8)] = inst_33187);

return statearr_33215;
})();
var statearr_33216_33234 = state_33210__$1;
(statearr_33216_33234[(2)] = null);

(statearr_33216_33234[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33211 === (4))){
var state_33210__$1 = state_33210;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33210__$1,(7),ch);
} else {
if((state_val_33211 === (6))){
var inst_33205 = (state_33210[(2)]);
var state_33210__$1 = state_33210;
var statearr_33217_33235 = state_33210__$1;
(statearr_33217_33235[(2)] = inst_33205);

(statearr_33217_33235[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33211 === (3))){
var inst_33207 = (state_33210[(2)]);
var inst_33208 = cljs.core.async.close_BANG_.call(null,out);
var state_33210__$1 = (function (){var statearr_33218 = state_33210;
(statearr_33218[(9)] = inst_33207);

return statearr_33218;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33210__$1,inst_33208);
} else {
if((state_val_33211 === (2))){
var inst_33187 = (state_33210[(8)]);
var inst_33189 = (inst_33187 < n);
var state_33210__$1 = state_33210;
if(cljs.core.truth_(inst_33189)){
var statearr_33219_33236 = state_33210__$1;
(statearr_33219_33236[(1)] = (4));

} else {
var statearr_33220_33237 = state_33210__$1;
(statearr_33220_33237[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33211 === (11))){
var inst_33187 = (state_33210[(8)]);
var inst_33197 = (state_33210[(2)]);
var inst_33198 = (inst_33187 + (1));
var inst_33187__$1 = inst_33198;
var state_33210__$1 = (function (){var statearr_33221 = state_33210;
(statearr_33221[(10)] = inst_33197);

(statearr_33221[(8)] = inst_33187__$1);

return statearr_33221;
})();
var statearr_33222_33238 = state_33210__$1;
(statearr_33222_33238[(2)] = null);

(statearr_33222_33238[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33211 === (9))){
var state_33210__$1 = state_33210;
var statearr_33223_33239 = state_33210__$1;
(statearr_33223_33239[(2)] = null);

(statearr_33223_33239[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33211 === (5))){
var state_33210__$1 = state_33210;
var statearr_33224_33240 = state_33210__$1;
(statearr_33224_33240[(2)] = null);

(statearr_33224_33240[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33211 === (10))){
var inst_33202 = (state_33210[(2)]);
var state_33210__$1 = state_33210;
var statearr_33225_33241 = state_33210__$1;
(statearr_33225_33241[(2)] = inst_33202);

(statearr_33225_33241[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33211 === (8))){
var inst_33192 = (state_33210[(7)]);
var state_33210__$1 = state_33210;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33210__$1,(11),out,inst_33192);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__31773__auto___33231,out))
;
return ((function (switch__31685__auto__,c__31773__auto___33231,out){
return (function() {
var cljs$core$async$state_machine__31686__auto__ = null;
var cljs$core$async$state_machine__31686__auto____0 = (function (){
var statearr_33226 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_33226[(0)] = cljs$core$async$state_machine__31686__auto__);

(statearr_33226[(1)] = (1));

return statearr_33226;
});
var cljs$core$async$state_machine__31686__auto____1 = (function (state_33210){
while(true){
var ret_value__31687__auto__ = (function (){try{while(true){
var result__31688__auto__ = switch__31685__auto__.call(null,state_33210);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31688__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31688__auto__;
}
break;
}
}catch (e33227){if((e33227 instanceof Object)){
var ex__31689__auto__ = e33227;
var statearr_33228_33242 = state_33210;
(statearr_33228_33242[(5)] = ex__31689__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33210);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33227;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31687__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33243 = state_33210;
state_33210 = G__33243;
continue;
} else {
return ret_value__31687__auto__;
}
break;
}
});
cljs$core$async$state_machine__31686__auto__ = function(state_33210){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31686__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31686__auto____1.call(this,state_33210);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__31686__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31686__auto____0;
cljs$core$async$state_machine__31686__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31686__auto____1;
return cljs$core$async$state_machine__31686__auto__;
})()
;})(switch__31685__auto__,c__31773__auto___33231,out))
})();
var state__31775__auto__ = (function (){var statearr_33229 = f__31774__auto__.call(null);
(statearr_33229[(6)] = c__31773__auto___33231);

return statearr_33229;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31775__auto__);
});})(c__31773__auto___33231,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async33245 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33245 = (function (f,ch,meta33246){
this.f = f;
this.ch = ch;
this.meta33246 = meta33246;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async33245.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33247,meta33246__$1){
var self__ = this;
var _33247__$1 = this;
return (new cljs.core.async.t_cljs$core$async33245(self__.f,self__.ch,meta33246__$1));
});

cljs.core.async.t_cljs$core$async33245.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33247){
var self__ = this;
var _33247__$1 = this;
return self__.meta33246;
});

cljs.core.async.t_cljs$core$async33245.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async33245.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async33245.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async33245.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async33245.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async33248 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33248 = (function (f,ch,meta33246,_,fn1,meta33249){
this.f = f;
this.ch = ch;
this.meta33246 = meta33246;
this._ = _;
this.fn1 = fn1;
this.meta33249 = meta33249;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async33248.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_33250,meta33249__$1){
var self__ = this;
var _33250__$1 = this;
return (new cljs.core.async.t_cljs$core$async33248(self__.f,self__.ch,self__.meta33246,self__._,self__.fn1,meta33249__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async33248.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_33250){
var self__ = this;
var _33250__$1 = this;
return self__.meta33249;
});})(___$1))
;

cljs.core.async.t_cljs$core$async33248.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async33248.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async33248.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async33248.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__33244_SHARP_){
return f1.call(null,(((p1__33244_SHARP_ == null))?null:self__.f.call(null,p1__33244_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async33248.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta33246","meta33246",-1847824854,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async33245","cljs.core.async/t_cljs$core$async33245",-1306732683,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta33249","meta33249",-395469053,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async33248.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async33248.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33248";

cljs.core.async.t_cljs$core$async33248.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__28677__auto__,writer__28678__auto__,opt__28679__auto__){
return cljs.core._write.call(null,writer__28678__auto__,"cljs.core.async/t_cljs$core$async33248");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async33248 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async33248(f__$1,ch__$1,meta33246__$1,___$2,fn1__$1,meta33249){
return (new cljs.core.async.t_cljs$core$async33248(f__$1,ch__$1,meta33246__$1,___$2,fn1__$1,meta33249));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async33248(self__.f,self__.ch,self__.meta33246,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__28040__auto__ = ret;
if(cljs.core.truth_(and__28040__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__28040__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async33245.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async33245.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async33245.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta33246","meta33246",-1847824854,null)], null);
});

cljs.core.async.t_cljs$core$async33245.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async33245.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33245";

cljs.core.async.t_cljs$core$async33245.cljs$lang$ctorPrWriter = (function (this__28677__auto__,writer__28678__auto__,opt__28679__auto__){
return cljs.core._write.call(null,writer__28678__auto__,"cljs.core.async/t_cljs$core$async33245");
});

cljs.core.async.__GT_t_cljs$core$async33245 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async33245(f__$1,ch__$1,meta33246){
return (new cljs.core.async.t_cljs$core$async33245(f__$1,ch__$1,meta33246));
});

}

return (new cljs.core.async.t_cljs$core$async33245(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async33251 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33251 = (function (f,ch,meta33252){
this.f = f;
this.ch = ch;
this.meta33252 = meta33252;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async33251.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33253,meta33252__$1){
var self__ = this;
var _33253__$1 = this;
return (new cljs.core.async.t_cljs$core$async33251(self__.f,self__.ch,meta33252__$1));
});

cljs.core.async.t_cljs$core$async33251.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33253){
var self__ = this;
var _33253__$1 = this;
return self__.meta33252;
});

cljs.core.async.t_cljs$core$async33251.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async33251.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async33251.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async33251.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async33251.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async33251.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async33251.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta33252","meta33252",1030132342,null)], null);
});

cljs.core.async.t_cljs$core$async33251.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async33251.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33251";

cljs.core.async.t_cljs$core$async33251.cljs$lang$ctorPrWriter = (function (this__28677__auto__,writer__28678__auto__,opt__28679__auto__){
return cljs.core._write.call(null,writer__28678__auto__,"cljs.core.async/t_cljs$core$async33251");
});

cljs.core.async.__GT_t_cljs$core$async33251 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async33251(f__$1,ch__$1,meta33252){
return (new cljs.core.async.t_cljs$core$async33251(f__$1,ch__$1,meta33252));
});

}

return (new cljs.core.async.t_cljs$core$async33251(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async33254 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33254 = (function (p,ch,meta33255){
this.p = p;
this.ch = ch;
this.meta33255 = meta33255;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async33254.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33256,meta33255__$1){
var self__ = this;
var _33256__$1 = this;
return (new cljs.core.async.t_cljs$core$async33254(self__.p,self__.ch,meta33255__$1));
});

cljs.core.async.t_cljs$core$async33254.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33256){
var self__ = this;
var _33256__$1 = this;
return self__.meta33255;
});

cljs.core.async.t_cljs$core$async33254.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async33254.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async33254.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async33254.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async33254.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async33254.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async33254.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async33254.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta33255","meta33255",831090135,null)], null);
});

cljs.core.async.t_cljs$core$async33254.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async33254.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33254";

cljs.core.async.t_cljs$core$async33254.cljs$lang$ctorPrWriter = (function (this__28677__auto__,writer__28678__auto__,opt__28679__auto__){
return cljs.core._write.call(null,writer__28678__auto__,"cljs.core.async/t_cljs$core$async33254");
});

cljs.core.async.__GT_t_cljs$core$async33254 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async33254(p__$1,ch__$1,meta33255){
return (new cljs.core.async.t_cljs$core$async33254(p__$1,ch__$1,meta33255));
});

}

return (new cljs.core.async.t_cljs$core$async33254(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__33258 = arguments.length;
switch (G__33258) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__31773__auto___33298 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31773__auto___33298,out){
return (function (){
var f__31774__auto__ = (function (){var switch__31685__auto__ = ((function (c__31773__auto___33298,out){
return (function (state_33279){
var state_val_33280 = (state_33279[(1)]);
if((state_val_33280 === (7))){
var inst_33275 = (state_33279[(2)]);
var state_33279__$1 = state_33279;
var statearr_33281_33299 = state_33279__$1;
(statearr_33281_33299[(2)] = inst_33275);

(statearr_33281_33299[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33280 === (1))){
var state_33279__$1 = state_33279;
var statearr_33282_33300 = state_33279__$1;
(statearr_33282_33300[(2)] = null);

(statearr_33282_33300[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33280 === (4))){
var inst_33261 = (state_33279[(7)]);
var inst_33261__$1 = (state_33279[(2)]);
var inst_33262 = (inst_33261__$1 == null);
var state_33279__$1 = (function (){var statearr_33283 = state_33279;
(statearr_33283[(7)] = inst_33261__$1);

return statearr_33283;
})();
if(cljs.core.truth_(inst_33262)){
var statearr_33284_33301 = state_33279__$1;
(statearr_33284_33301[(1)] = (5));

} else {
var statearr_33285_33302 = state_33279__$1;
(statearr_33285_33302[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33280 === (6))){
var inst_33261 = (state_33279[(7)]);
var inst_33266 = p.call(null,inst_33261);
var state_33279__$1 = state_33279;
if(cljs.core.truth_(inst_33266)){
var statearr_33286_33303 = state_33279__$1;
(statearr_33286_33303[(1)] = (8));

} else {
var statearr_33287_33304 = state_33279__$1;
(statearr_33287_33304[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33280 === (3))){
var inst_33277 = (state_33279[(2)]);
var state_33279__$1 = state_33279;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33279__$1,inst_33277);
} else {
if((state_val_33280 === (2))){
var state_33279__$1 = state_33279;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33279__$1,(4),ch);
} else {
if((state_val_33280 === (11))){
var inst_33269 = (state_33279[(2)]);
var state_33279__$1 = state_33279;
var statearr_33288_33305 = state_33279__$1;
(statearr_33288_33305[(2)] = inst_33269);

(statearr_33288_33305[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33280 === (9))){
var state_33279__$1 = state_33279;
var statearr_33289_33306 = state_33279__$1;
(statearr_33289_33306[(2)] = null);

(statearr_33289_33306[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33280 === (5))){
var inst_33264 = cljs.core.async.close_BANG_.call(null,out);
var state_33279__$1 = state_33279;
var statearr_33290_33307 = state_33279__$1;
(statearr_33290_33307[(2)] = inst_33264);

(statearr_33290_33307[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33280 === (10))){
var inst_33272 = (state_33279[(2)]);
var state_33279__$1 = (function (){var statearr_33291 = state_33279;
(statearr_33291[(8)] = inst_33272);

return statearr_33291;
})();
var statearr_33292_33308 = state_33279__$1;
(statearr_33292_33308[(2)] = null);

(statearr_33292_33308[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33280 === (8))){
var inst_33261 = (state_33279[(7)]);
var state_33279__$1 = state_33279;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33279__$1,(11),out,inst_33261);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__31773__auto___33298,out))
;
return ((function (switch__31685__auto__,c__31773__auto___33298,out){
return (function() {
var cljs$core$async$state_machine__31686__auto__ = null;
var cljs$core$async$state_machine__31686__auto____0 = (function (){
var statearr_33293 = [null,null,null,null,null,null,null,null,null];
(statearr_33293[(0)] = cljs$core$async$state_machine__31686__auto__);

(statearr_33293[(1)] = (1));

return statearr_33293;
});
var cljs$core$async$state_machine__31686__auto____1 = (function (state_33279){
while(true){
var ret_value__31687__auto__ = (function (){try{while(true){
var result__31688__auto__ = switch__31685__auto__.call(null,state_33279);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31688__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31688__auto__;
}
break;
}
}catch (e33294){if((e33294 instanceof Object)){
var ex__31689__auto__ = e33294;
var statearr_33295_33309 = state_33279;
(statearr_33295_33309[(5)] = ex__31689__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33279);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33294;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31687__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33310 = state_33279;
state_33279 = G__33310;
continue;
} else {
return ret_value__31687__auto__;
}
break;
}
});
cljs$core$async$state_machine__31686__auto__ = function(state_33279){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31686__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31686__auto____1.call(this,state_33279);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__31686__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31686__auto____0;
cljs$core$async$state_machine__31686__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31686__auto____1;
return cljs$core$async$state_machine__31686__auto__;
})()
;})(switch__31685__auto__,c__31773__auto___33298,out))
})();
var state__31775__auto__ = (function (){var statearr_33296 = f__31774__auto__.call(null);
(statearr_33296[(6)] = c__31773__auto___33298);

return statearr_33296;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31775__auto__);
});})(c__31773__auto___33298,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__33312 = arguments.length;
switch (G__33312) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__31773__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31773__auto__){
return (function (){
var f__31774__auto__ = (function (){var switch__31685__auto__ = ((function (c__31773__auto__){
return (function (state_33375){
var state_val_33376 = (state_33375[(1)]);
if((state_val_33376 === (7))){
var inst_33371 = (state_33375[(2)]);
var state_33375__$1 = state_33375;
var statearr_33377_33415 = state_33375__$1;
(statearr_33377_33415[(2)] = inst_33371);

(statearr_33377_33415[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33376 === (20))){
var inst_33341 = (state_33375[(7)]);
var inst_33352 = (state_33375[(2)]);
var inst_33353 = cljs.core.next.call(null,inst_33341);
var inst_33327 = inst_33353;
var inst_33328 = null;
var inst_33329 = (0);
var inst_33330 = (0);
var state_33375__$1 = (function (){var statearr_33378 = state_33375;
(statearr_33378[(8)] = inst_33328);

(statearr_33378[(9)] = inst_33327);

(statearr_33378[(10)] = inst_33330);

(statearr_33378[(11)] = inst_33352);

(statearr_33378[(12)] = inst_33329);

return statearr_33378;
})();
var statearr_33379_33416 = state_33375__$1;
(statearr_33379_33416[(2)] = null);

(statearr_33379_33416[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33376 === (1))){
var state_33375__$1 = state_33375;
var statearr_33380_33417 = state_33375__$1;
(statearr_33380_33417[(2)] = null);

(statearr_33380_33417[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33376 === (4))){
var inst_33316 = (state_33375[(13)]);
var inst_33316__$1 = (state_33375[(2)]);
var inst_33317 = (inst_33316__$1 == null);
var state_33375__$1 = (function (){var statearr_33381 = state_33375;
(statearr_33381[(13)] = inst_33316__$1);

return statearr_33381;
})();
if(cljs.core.truth_(inst_33317)){
var statearr_33382_33418 = state_33375__$1;
(statearr_33382_33418[(1)] = (5));

} else {
var statearr_33383_33419 = state_33375__$1;
(statearr_33383_33419[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33376 === (15))){
var state_33375__$1 = state_33375;
var statearr_33387_33420 = state_33375__$1;
(statearr_33387_33420[(2)] = null);

(statearr_33387_33420[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33376 === (21))){
var state_33375__$1 = state_33375;
var statearr_33388_33421 = state_33375__$1;
(statearr_33388_33421[(2)] = null);

(statearr_33388_33421[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33376 === (13))){
var inst_33328 = (state_33375[(8)]);
var inst_33327 = (state_33375[(9)]);
var inst_33330 = (state_33375[(10)]);
var inst_33329 = (state_33375[(12)]);
var inst_33337 = (state_33375[(2)]);
var inst_33338 = (inst_33330 + (1));
var tmp33384 = inst_33328;
var tmp33385 = inst_33327;
var tmp33386 = inst_33329;
var inst_33327__$1 = tmp33385;
var inst_33328__$1 = tmp33384;
var inst_33329__$1 = tmp33386;
var inst_33330__$1 = inst_33338;
var state_33375__$1 = (function (){var statearr_33389 = state_33375;
(statearr_33389[(8)] = inst_33328__$1);

(statearr_33389[(14)] = inst_33337);

(statearr_33389[(9)] = inst_33327__$1);

(statearr_33389[(10)] = inst_33330__$1);

(statearr_33389[(12)] = inst_33329__$1);

return statearr_33389;
})();
var statearr_33390_33422 = state_33375__$1;
(statearr_33390_33422[(2)] = null);

(statearr_33390_33422[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33376 === (22))){
var state_33375__$1 = state_33375;
var statearr_33391_33423 = state_33375__$1;
(statearr_33391_33423[(2)] = null);

(statearr_33391_33423[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33376 === (6))){
var inst_33316 = (state_33375[(13)]);
var inst_33325 = f.call(null,inst_33316);
var inst_33326 = cljs.core.seq.call(null,inst_33325);
var inst_33327 = inst_33326;
var inst_33328 = null;
var inst_33329 = (0);
var inst_33330 = (0);
var state_33375__$1 = (function (){var statearr_33392 = state_33375;
(statearr_33392[(8)] = inst_33328);

(statearr_33392[(9)] = inst_33327);

(statearr_33392[(10)] = inst_33330);

(statearr_33392[(12)] = inst_33329);

return statearr_33392;
})();
var statearr_33393_33424 = state_33375__$1;
(statearr_33393_33424[(2)] = null);

(statearr_33393_33424[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33376 === (17))){
var inst_33341 = (state_33375[(7)]);
var inst_33345 = cljs.core.chunk_first.call(null,inst_33341);
var inst_33346 = cljs.core.chunk_rest.call(null,inst_33341);
var inst_33347 = cljs.core.count.call(null,inst_33345);
var inst_33327 = inst_33346;
var inst_33328 = inst_33345;
var inst_33329 = inst_33347;
var inst_33330 = (0);
var state_33375__$1 = (function (){var statearr_33394 = state_33375;
(statearr_33394[(8)] = inst_33328);

(statearr_33394[(9)] = inst_33327);

(statearr_33394[(10)] = inst_33330);

(statearr_33394[(12)] = inst_33329);

return statearr_33394;
})();
var statearr_33395_33425 = state_33375__$1;
(statearr_33395_33425[(2)] = null);

(statearr_33395_33425[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33376 === (3))){
var inst_33373 = (state_33375[(2)]);
var state_33375__$1 = state_33375;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33375__$1,inst_33373);
} else {
if((state_val_33376 === (12))){
var inst_33361 = (state_33375[(2)]);
var state_33375__$1 = state_33375;
var statearr_33396_33426 = state_33375__$1;
(statearr_33396_33426[(2)] = inst_33361);

(statearr_33396_33426[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33376 === (2))){
var state_33375__$1 = state_33375;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33375__$1,(4),in$);
} else {
if((state_val_33376 === (23))){
var inst_33369 = (state_33375[(2)]);
var state_33375__$1 = state_33375;
var statearr_33397_33427 = state_33375__$1;
(statearr_33397_33427[(2)] = inst_33369);

(statearr_33397_33427[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33376 === (19))){
var inst_33356 = (state_33375[(2)]);
var state_33375__$1 = state_33375;
var statearr_33398_33428 = state_33375__$1;
(statearr_33398_33428[(2)] = inst_33356);

(statearr_33398_33428[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33376 === (11))){
var inst_33327 = (state_33375[(9)]);
var inst_33341 = (state_33375[(7)]);
var inst_33341__$1 = cljs.core.seq.call(null,inst_33327);
var state_33375__$1 = (function (){var statearr_33399 = state_33375;
(statearr_33399[(7)] = inst_33341__$1);

return statearr_33399;
})();
if(inst_33341__$1){
var statearr_33400_33429 = state_33375__$1;
(statearr_33400_33429[(1)] = (14));

} else {
var statearr_33401_33430 = state_33375__$1;
(statearr_33401_33430[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33376 === (9))){
var inst_33363 = (state_33375[(2)]);
var inst_33364 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_33375__$1 = (function (){var statearr_33402 = state_33375;
(statearr_33402[(15)] = inst_33363);

return statearr_33402;
})();
if(cljs.core.truth_(inst_33364)){
var statearr_33403_33431 = state_33375__$1;
(statearr_33403_33431[(1)] = (21));

} else {
var statearr_33404_33432 = state_33375__$1;
(statearr_33404_33432[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33376 === (5))){
var inst_33319 = cljs.core.async.close_BANG_.call(null,out);
var state_33375__$1 = state_33375;
var statearr_33405_33433 = state_33375__$1;
(statearr_33405_33433[(2)] = inst_33319);

(statearr_33405_33433[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33376 === (14))){
var inst_33341 = (state_33375[(7)]);
var inst_33343 = cljs.core.chunked_seq_QMARK_.call(null,inst_33341);
var state_33375__$1 = state_33375;
if(inst_33343){
var statearr_33406_33434 = state_33375__$1;
(statearr_33406_33434[(1)] = (17));

} else {
var statearr_33407_33435 = state_33375__$1;
(statearr_33407_33435[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33376 === (16))){
var inst_33359 = (state_33375[(2)]);
var state_33375__$1 = state_33375;
var statearr_33408_33436 = state_33375__$1;
(statearr_33408_33436[(2)] = inst_33359);

(statearr_33408_33436[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33376 === (10))){
var inst_33328 = (state_33375[(8)]);
var inst_33330 = (state_33375[(10)]);
var inst_33335 = cljs.core._nth.call(null,inst_33328,inst_33330);
var state_33375__$1 = state_33375;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33375__$1,(13),out,inst_33335);
} else {
if((state_val_33376 === (18))){
var inst_33341 = (state_33375[(7)]);
var inst_33350 = cljs.core.first.call(null,inst_33341);
var state_33375__$1 = state_33375;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33375__$1,(20),out,inst_33350);
} else {
if((state_val_33376 === (8))){
var inst_33330 = (state_33375[(10)]);
var inst_33329 = (state_33375[(12)]);
var inst_33332 = (inst_33330 < inst_33329);
var inst_33333 = inst_33332;
var state_33375__$1 = state_33375;
if(cljs.core.truth_(inst_33333)){
var statearr_33409_33437 = state_33375__$1;
(statearr_33409_33437[(1)] = (10));

} else {
var statearr_33410_33438 = state_33375__$1;
(statearr_33410_33438[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__31773__auto__))
;
return ((function (switch__31685__auto__,c__31773__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__31686__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__31686__auto____0 = (function (){
var statearr_33411 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33411[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__31686__auto__);

(statearr_33411[(1)] = (1));

return statearr_33411;
});
var cljs$core$async$mapcat_STAR__$_state_machine__31686__auto____1 = (function (state_33375){
while(true){
var ret_value__31687__auto__ = (function (){try{while(true){
var result__31688__auto__ = switch__31685__auto__.call(null,state_33375);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31688__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31688__auto__;
}
break;
}
}catch (e33412){if((e33412 instanceof Object)){
var ex__31689__auto__ = e33412;
var statearr_33413_33439 = state_33375;
(statearr_33413_33439[(5)] = ex__31689__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33375);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33412;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31687__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33440 = state_33375;
state_33375 = G__33440;
continue;
} else {
return ret_value__31687__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__31686__auto__ = function(state_33375){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__31686__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__31686__auto____1.call(this,state_33375);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mapcat_STAR__$_state_machine__31686__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__31686__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__31686__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__31686__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__31686__auto__;
})()
;})(switch__31685__auto__,c__31773__auto__))
})();
var state__31775__auto__ = (function (){var statearr_33414 = f__31774__auto__.call(null);
(statearr_33414[(6)] = c__31773__auto__);

return statearr_33414;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31775__auto__);
});})(c__31773__auto__))
);

return c__31773__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__33442 = arguments.length;
switch (G__33442) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__33445 = arguments.length;
switch (G__33445) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__33448 = arguments.length;
switch (G__33448) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__31773__auto___33495 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31773__auto___33495,out){
return (function (){
var f__31774__auto__ = (function (){var switch__31685__auto__ = ((function (c__31773__auto___33495,out){
return (function (state_33472){
var state_val_33473 = (state_33472[(1)]);
if((state_val_33473 === (7))){
var inst_33467 = (state_33472[(2)]);
var state_33472__$1 = state_33472;
var statearr_33474_33496 = state_33472__$1;
(statearr_33474_33496[(2)] = inst_33467);

(statearr_33474_33496[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33473 === (1))){
var inst_33449 = null;
var state_33472__$1 = (function (){var statearr_33475 = state_33472;
(statearr_33475[(7)] = inst_33449);

return statearr_33475;
})();
var statearr_33476_33497 = state_33472__$1;
(statearr_33476_33497[(2)] = null);

(statearr_33476_33497[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33473 === (4))){
var inst_33452 = (state_33472[(8)]);
var inst_33452__$1 = (state_33472[(2)]);
var inst_33453 = (inst_33452__$1 == null);
var inst_33454 = cljs.core.not.call(null,inst_33453);
var state_33472__$1 = (function (){var statearr_33477 = state_33472;
(statearr_33477[(8)] = inst_33452__$1);

return statearr_33477;
})();
if(inst_33454){
var statearr_33478_33498 = state_33472__$1;
(statearr_33478_33498[(1)] = (5));

} else {
var statearr_33479_33499 = state_33472__$1;
(statearr_33479_33499[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33473 === (6))){
var state_33472__$1 = state_33472;
var statearr_33480_33500 = state_33472__$1;
(statearr_33480_33500[(2)] = null);

(statearr_33480_33500[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33473 === (3))){
var inst_33469 = (state_33472[(2)]);
var inst_33470 = cljs.core.async.close_BANG_.call(null,out);
var state_33472__$1 = (function (){var statearr_33481 = state_33472;
(statearr_33481[(9)] = inst_33469);

return statearr_33481;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33472__$1,inst_33470);
} else {
if((state_val_33473 === (2))){
var state_33472__$1 = state_33472;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33472__$1,(4),ch);
} else {
if((state_val_33473 === (11))){
var inst_33452 = (state_33472[(8)]);
var inst_33461 = (state_33472[(2)]);
var inst_33449 = inst_33452;
var state_33472__$1 = (function (){var statearr_33482 = state_33472;
(statearr_33482[(7)] = inst_33449);

(statearr_33482[(10)] = inst_33461);

return statearr_33482;
})();
var statearr_33483_33501 = state_33472__$1;
(statearr_33483_33501[(2)] = null);

(statearr_33483_33501[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33473 === (9))){
var inst_33452 = (state_33472[(8)]);
var state_33472__$1 = state_33472;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33472__$1,(11),out,inst_33452);
} else {
if((state_val_33473 === (5))){
var inst_33449 = (state_33472[(7)]);
var inst_33452 = (state_33472[(8)]);
var inst_33456 = cljs.core._EQ_.call(null,inst_33452,inst_33449);
var state_33472__$1 = state_33472;
if(inst_33456){
var statearr_33485_33502 = state_33472__$1;
(statearr_33485_33502[(1)] = (8));

} else {
var statearr_33486_33503 = state_33472__$1;
(statearr_33486_33503[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33473 === (10))){
var inst_33464 = (state_33472[(2)]);
var state_33472__$1 = state_33472;
var statearr_33487_33504 = state_33472__$1;
(statearr_33487_33504[(2)] = inst_33464);

(statearr_33487_33504[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33473 === (8))){
var inst_33449 = (state_33472[(7)]);
var tmp33484 = inst_33449;
var inst_33449__$1 = tmp33484;
var state_33472__$1 = (function (){var statearr_33488 = state_33472;
(statearr_33488[(7)] = inst_33449__$1);

return statearr_33488;
})();
var statearr_33489_33505 = state_33472__$1;
(statearr_33489_33505[(2)] = null);

(statearr_33489_33505[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__31773__auto___33495,out))
;
return ((function (switch__31685__auto__,c__31773__auto___33495,out){
return (function() {
var cljs$core$async$state_machine__31686__auto__ = null;
var cljs$core$async$state_machine__31686__auto____0 = (function (){
var statearr_33490 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_33490[(0)] = cljs$core$async$state_machine__31686__auto__);

(statearr_33490[(1)] = (1));

return statearr_33490;
});
var cljs$core$async$state_machine__31686__auto____1 = (function (state_33472){
while(true){
var ret_value__31687__auto__ = (function (){try{while(true){
var result__31688__auto__ = switch__31685__auto__.call(null,state_33472);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31688__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31688__auto__;
}
break;
}
}catch (e33491){if((e33491 instanceof Object)){
var ex__31689__auto__ = e33491;
var statearr_33492_33506 = state_33472;
(statearr_33492_33506[(5)] = ex__31689__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33472);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33491;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31687__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33507 = state_33472;
state_33472 = G__33507;
continue;
} else {
return ret_value__31687__auto__;
}
break;
}
});
cljs$core$async$state_machine__31686__auto__ = function(state_33472){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31686__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31686__auto____1.call(this,state_33472);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__31686__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31686__auto____0;
cljs$core$async$state_machine__31686__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31686__auto____1;
return cljs$core$async$state_machine__31686__auto__;
})()
;})(switch__31685__auto__,c__31773__auto___33495,out))
})();
var state__31775__auto__ = (function (){var statearr_33493 = f__31774__auto__.call(null);
(statearr_33493[(6)] = c__31773__auto___33495);

return statearr_33493;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31775__auto__);
});})(c__31773__auto___33495,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__33509 = arguments.length;
switch (G__33509) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__31773__auto___33575 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31773__auto___33575,out){
return (function (){
var f__31774__auto__ = (function (){var switch__31685__auto__ = ((function (c__31773__auto___33575,out){
return (function (state_33547){
var state_val_33548 = (state_33547[(1)]);
if((state_val_33548 === (7))){
var inst_33543 = (state_33547[(2)]);
var state_33547__$1 = state_33547;
var statearr_33549_33576 = state_33547__$1;
(statearr_33549_33576[(2)] = inst_33543);

(statearr_33549_33576[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33548 === (1))){
var inst_33510 = (new Array(n));
var inst_33511 = inst_33510;
var inst_33512 = (0);
var state_33547__$1 = (function (){var statearr_33550 = state_33547;
(statearr_33550[(7)] = inst_33512);

(statearr_33550[(8)] = inst_33511);

return statearr_33550;
})();
var statearr_33551_33577 = state_33547__$1;
(statearr_33551_33577[(2)] = null);

(statearr_33551_33577[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33548 === (4))){
var inst_33515 = (state_33547[(9)]);
var inst_33515__$1 = (state_33547[(2)]);
var inst_33516 = (inst_33515__$1 == null);
var inst_33517 = cljs.core.not.call(null,inst_33516);
var state_33547__$1 = (function (){var statearr_33552 = state_33547;
(statearr_33552[(9)] = inst_33515__$1);

return statearr_33552;
})();
if(inst_33517){
var statearr_33553_33578 = state_33547__$1;
(statearr_33553_33578[(1)] = (5));

} else {
var statearr_33554_33579 = state_33547__$1;
(statearr_33554_33579[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33548 === (15))){
var inst_33537 = (state_33547[(2)]);
var state_33547__$1 = state_33547;
var statearr_33555_33580 = state_33547__$1;
(statearr_33555_33580[(2)] = inst_33537);

(statearr_33555_33580[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33548 === (13))){
var state_33547__$1 = state_33547;
var statearr_33556_33581 = state_33547__$1;
(statearr_33556_33581[(2)] = null);

(statearr_33556_33581[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33548 === (6))){
var inst_33512 = (state_33547[(7)]);
var inst_33533 = (inst_33512 > (0));
var state_33547__$1 = state_33547;
if(cljs.core.truth_(inst_33533)){
var statearr_33557_33582 = state_33547__$1;
(statearr_33557_33582[(1)] = (12));

} else {
var statearr_33558_33583 = state_33547__$1;
(statearr_33558_33583[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33548 === (3))){
var inst_33545 = (state_33547[(2)]);
var state_33547__$1 = state_33547;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33547__$1,inst_33545);
} else {
if((state_val_33548 === (12))){
var inst_33511 = (state_33547[(8)]);
var inst_33535 = cljs.core.vec.call(null,inst_33511);
var state_33547__$1 = state_33547;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33547__$1,(15),out,inst_33535);
} else {
if((state_val_33548 === (2))){
var state_33547__$1 = state_33547;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33547__$1,(4),ch);
} else {
if((state_val_33548 === (11))){
var inst_33527 = (state_33547[(2)]);
var inst_33528 = (new Array(n));
var inst_33511 = inst_33528;
var inst_33512 = (0);
var state_33547__$1 = (function (){var statearr_33559 = state_33547;
(statearr_33559[(7)] = inst_33512);

(statearr_33559[(8)] = inst_33511);

(statearr_33559[(10)] = inst_33527);

return statearr_33559;
})();
var statearr_33560_33584 = state_33547__$1;
(statearr_33560_33584[(2)] = null);

(statearr_33560_33584[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33548 === (9))){
var inst_33511 = (state_33547[(8)]);
var inst_33525 = cljs.core.vec.call(null,inst_33511);
var state_33547__$1 = state_33547;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33547__$1,(11),out,inst_33525);
} else {
if((state_val_33548 === (5))){
var inst_33512 = (state_33547[(7)]);
var inst_33511 = (state_33547[(8)]);
var inst_33515 = (state_33547[(9)]);
var inst_33520 = (state_33547[(11)]);
var inst_33519 = (inst_33511[inst_33512] = inst_33515);
var inst_33520__$1 = (inst_33512 + (1));
var inst_33521 = (inst_33520__$1 < n);
var state_33547__$1 = (function (){var statearr_33561 = state_33547;
(statearr_33561[(12)] = inst_33519);

(statearr_33561[(11)] = inst_33520__$1);

return statearr_33561;
})();
if(cljs.core.truth_(inst_33521)){
var statearr_33562_33585 = state_33547__$1;
(statearr_33562_33585[(1)] = (8));

} else {
var statearr_33563_33586 = state_33547__$1;
(statearr_33563_33586[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33548 === (14))){
var inst_33540 = (state_33547[(2)]);
var inst_33541 = cljs.core.async.close_BANG_.call(null,out);
var state_33547__$1 = (function (){var statearr_33565 = state_33547;
(statearr_33565[(13)] = inst_33540);

return statearr_33565;
})();
var statearr_33566_33587 = state_33547__$1;
(statearr_33566_33587[(2)] = inst_33541);

(statearr_33566_33587[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33548 === (10))){
var inst_33531 = (state_33547[(2)]);
var state_33547__$1 = state_33547;
var statearr_33567_33588 = state_33547__$1;
(statearr_33567_33588[(2)] = inst_33531);

(statearr_33567_33588[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33548 === (8))){
var inst_33511 = (state_33547[(8)]);
var inst_33520 = (state_33547[(11)]);
var tmp33564 = inst_33511;
var inst_33511__$1 = tmp33564;
var inst_33512 = inst_33520;
var state_33547__$1 = (function (){var statearr_33568 = state_33547;
(statearr_33568[(7)] = inst_33512);

(statearr_33568[(8)] = inst_33511__$1);

return statearr_33568;
})();
var statearr_33569_33589 = state_33547__$1;
(statearr_33569_33589[(2)] = null);

(statearr_33569_33589[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__31773__auto___33575,out))
;
return ((function (switch__31685__auto__,c__31773__auto___33575,out){
return (function() {
var cljs$core$async$state_machine__31686__auto__ = null;
var cljs$core$async$state_machine__31686__auto____0 = (function (){
var statearr_33570 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33570[(0)] = cljs$core$async$state_machine__31686__auto__);

(statearr_33570[(1)] = (1));

return statearr_33570;
});
var cljs$core$async$state_machine__31686__auto____1 = (function (state_33547){
while(true){
var ret_value__31687__auto__ = (function (){try{while(true){
var result__31688__auto__ = switch__31685__auto__.call(null,state_33547);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31688__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31688__auto__;
}
break;
}
}catch (e33571){if((e33571 instanceof Object)){
var ex__31689__auto__ = e33571;
var statearr_33572_33590 = state_33547;
(statearr_33572_33590[(5)] = ex__31689__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33547);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33571;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31687__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33591 = state_33547;
state_33547 = G__33591;
continue;
} else {
return ret_value__31687__auto__;
}
break;
}
});
cljs$core$async$state_machine__31686__auto__ = function(state_33547){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31686__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31686__auto____1.call(this,state_33547);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__31686__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31686__auto____0;
cljs$core$async$state_machine__31686__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31686__auto____1;
return cljs$core$async$state_machine__31686__auto__;
})()
;})(switch__31685__auto__,c__31773__auto___33575,out))
})();
var state__31775__auto__ = (function (){var statearr_33573 = f__31774__auto__.call(null);
(statearr_33573[(6)] = c__31773__auto___33575);

return statearr_33573;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31775__auto__);
});})(c__31773__auto___33575,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__33593 = arguments.length;
switch (G__33593) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__31773__auto___33663 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31773__auto___33663,out){
return (function (){
var f__31774__auto__ = (function (){var switch__31685__auto__ = ((function (c__31773__auto___33663,out){
return (function (state_33635){
var state_val_33636 = (state_33635[(1)]);
if((state_val_33636 === (7))){
var inst_33631 = (state_33635[(2)]);
var state_33635__$1 = state_33635;
var statearr_33637_33664 = state_33635__$1;
(statearr_33637_33664[(2)] = inst_33631);

(statearr_33637_33664[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33636 === (1))){
var inst_33594 = [];
var inst_33595 = inst_33594;
var inst_33596 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_33635__$1 = (function (){var statearr_33638 = state_33635;
(statearr_33638[(7)] = inst_33596);

(statearr_33638[(8)] = inst_33595);

return statearr_33638;
})();
var statearr_33639_33665 = state_33635__$1;
(statearr_33639_33665[(2)] = null);

(statearr_33639_33665[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33636 === (4))){
var inst_33599 = (state_33635[(9)]);
var inst_33599__$1 = (state_33635[(2)]);
var inst_33600 = (inst_33599__$1 == null);
var inst_33601 = cljs.core.not.call(null,inst_33600);
var state_33635__$1 = (function (){var statearr_33640 = state_33635;
(statearr_33640[(9)] = inst_33599__$1);

return statearr_33640;
})();
if(inst_33601){
var statearr_33641_33666 = state_33635__$1;
(statearr_33641_33666[(1)] = (5));

} else {
var statearr_33642_33667 = state_33635__$1;
(statearr_33642_33667[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33636 === (15))){
var inst_33625 = (state_33635[(2)]);
var state_33635__$1 = state_33635;
var statearr_33643_33668 = state_33635__$1;
(statearr_33643_33668[(2)] = inst_33625);

(statearr_33643_33668[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33636 === (13))){
var state_33635__$1 = state_33635;
var statearr_33644_33669 = state_33635__$1;
(statearr_33644_33669[(2)] = null);

(statearr_33644_33669[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33636 === (6))){
var inst_33595 = (state_33635[(8)]);
var inst_33620 = inst_33595.length;
var inst_33621 = (inst_33620 > (0));
var state_33635__$1 = state_33635;
if(cljs.core.truth_(inst_33621)){
var statearr_33645_33670 = state_33635__$1;
(statearr_33645_33670[(1)] = (12));

} else {
var statearr_33646_33671 = state_33635__$1;
(statearr_33646_33671[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33636 === (3))){
var inst_33633 = (state_33635[(2)]);
var state_33635__$1 = state_33635;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33635__$1,inst_33633);
} else {
if((state_val_33636 === (12))){
var inst_33595 = (state_33635[(8)]);
var inst_33623 = cljs.core.vec.call(null,inst_33595);
var state_33635__$1 = state_33635;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33635__$1,(15),out,inst_33623);
} else {
if((state_val_33636 === (2))){
var state_33635__$1 = state_33635;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33635__$1,(4),ch);
} else {
if((state_val_33636 === (11))){
var inst_33603 = (state_33635[(10)]);
var inst_33599 = (state_33635[(9)]);
var inst_33613 = (state_33635[(2)]);
var inst_33614 = [];
var inst_33615 = inst_33614.push(inst_33599);
var inst_33595 = inst_33614;
var inst_33596 = inst_33603;
var state_33635__$1 = (function (){var statearr_33647 = state_33635;
(statearr_33647[(7)] = inst_33596);

(statearr_33647[(11)] = inst_33615);

(statearr_33647[(8)] = inst_33595);

(statearr_33647[(12)] = inst_33613);

return statearr_33647;
})();
var statearr_33648_33672 = state_33635__$1;
(statearr_33648_33672[(2)] = null);

(statearr_33648_33672[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33636 === (9))){
var inst_33595 = (state_33635[(8)]);
var inst_33611 = cljs.core.vec.call(null,inst_33595);
var state_33635__$1 = state_33635;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33635__$1,(11),out,inst_33611);
} else {
if((state_val_33636 === (5))){
var inst_33596 = (state_33635[(7)]);
var inst_33603 = (state_33635[(10)]);
var inst_33599 = (state_33635[(9)]);
var inst_33603__$1 = f.call(null,inst_33599);
var inst_33604 = cljs.core._EQ_.call(null,inst_33603__$1,inst_33596);
var inst_33605 = cljs.core.keyword_identical_QMARK_.call(null,inst_33596,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_33606 = (inst_33604) || (inst_33605);
var state_33635__$1 = (function (){var statearr_33649 = state_33635;
(statearr_33649[(10)] = inst_33603__$1);

return statearr_33649;
})();
if(cljs.core.truth_(inst_33606)){
var statearr_33650_33673 = state_33635__$1;
(statearr_33650_33673[(1)] = (8));

} else {
var statearr_33651_33674 = state_33635__$1;
(statearr_33651_33674[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33636 === (14))){
var inst_33628 = (state_33635[(2)]);
var inst_33629 = cljs.core.async.close_BANG_.call(null,out);
var state_33635__$1 = (function (){var statearr_33653 = state_33635;
(statearr_33653[(13)] = inst_33628);

return statearr_33653;
})();
var statearr_33654_33675 = state_33635__$1;
(statearr_33654_33675[(2)] = inst_33629);

(statearr_33654_33675[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33636 === (10))){
var inst_33618 = (state_33635[(2)]);
var state_33635__$1 = state_33635;
var statearr_33655_33676 = state_33635__$1;
(statearr_33655_33676[(2)] = inst_33618);

(statearr_33655_33676[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33636 === (8))){
var inst_33603 = (state_33635[(10)]);
var inst_33595 = (state_33635[(8)]);
var inst_33599 = (state_33635[(9)]);
var inst_33608 = inst_33595.push(inst_33599);
var tmp33652 = inst_33595;
var inst_33595__$1 = tmp33652;
var inst_33596 = inst_33603;
var state_33635__$1 = (function (){var statearr_33656 = state_33635;
(statearr_33656[(7)] = inst_33596);

(statearr_33656[(8)] = inst_33595__$1);

(statearr_33656[(14)] = inst_33608);

return statearr_33656;
})();
var statearr_33657_33677 = state_33635__$1;
(statearr_33657_33677[(2)] = null);

(statearr_33657_33677[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__31773__auto___33663,out))
;
return ((function (switch__31685__auto__,c__31773__auto___33663,out){
return (function() {
var cljs$core$async$state_machine__31686__auto__ = null;
var cljs$core$async$state_machine__31686__auto____0 = (function (){
var statearr_33658 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33658[(0)] = cljs$core$async$state_machine__31686__auto__);

(statearr_33658[(1)] = (1));

return statearr_33658;
});
var cljs$core$async$state_machine__31686__auto____1 = (function (state_33635){
while(true){
var ret_value__31687__auto__ = (function (){try{while(true){
var result__31688__auto__ = switch__31685__auto__.call(null,state_33635);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31688__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31688__auto__;
}
break;
}
}catch (e33659){if((e33659 instanceof Object)){
var ex__31689__auto__ = e33659;
var statearr_33660_33678 = state_33635;
(statearr_33660_33678[(5)] = ex__31689__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33635);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33659;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31687__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33679 = state_33635;
state_33635 = G__33679;
continue;
} else {
return ret_value__31687__auto__;
}
break;
}
});
cljs$core$async$state_machine__31686__auto__ = function(state_33635){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31686__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31686__auto____1.call(this,state_33635);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__31686__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31686__auto____0;
cljs$core$async$state_machine__31686__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31686__auto____1;
return cljs$core$async$state_machine__31686__auto__;
})()
;})(switch__31685__auto__,c__31773__auto___33663,out))
})();
var state__31775__auto__ = (function (){var statearr_33661 = f__31774__auto__.call(null);
(statearr_33661[(6)] = c__31773__auto___33663);

return statearr_33661;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31775__auto__);
});})(c__31773__auto___33663,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1507552548845
