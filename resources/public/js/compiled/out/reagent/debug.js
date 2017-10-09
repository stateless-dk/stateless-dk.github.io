// Compiled by ClojureScript 1.9.946 {}
goog.provide('reagent.debug');
goog.require('cljs.core');
reagent.debug.has_console = typeof console !== 'undefined';
reagent.debug.tracking = false;
if(typeof reagent.debug.warnings !== 'undefined'){
} else {
reagent.debug.warnings = cljs.core.atom.call(null,null);
}
if(typeof reagent.debug.track_console !== 'undefined'){
} else {
reagent.debug.track_console = (function (){var o = ({});
o.warn = ((function (o){
return (function() { 
var G__29708__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__29708 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__29709__i = 0, G__29709__a = new Array(arguments.length -  0);
while (G__29709__i < G__29709__a.length) {G__29709__a[G__29709__i] = arguments[G__29709__i + 0]; ++G__29709__i;}
  args = new cljs.core.IndexedSeq(G__29709__a,0,null);
} 
return G__29708__delegate.call(this,args);};
G__29708.cljs$lang$maxFixedArity = 0;
G__29708.cljs$lang$applyTo = (function (arglist__29710){
var args = cljs.core.seq(arglist__29710);
return G__29708__delegate(args);
});
G__29708.cljs$core$IFn$_invoke$arity$variadic = G__29708__delegate;
return G__29708;
})()
;})(o))
;

o.error = ((function (o){
return (function() { 
var G__29711__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__29711 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__29712__i = 0, G__29712__a = new Array(arguments.length -  0);
while (G__29712__i < G__29712__a.length) {G__29712__a[G__29712__i] = arguments[G__29712__i + 0]; ++G__29712__i;}
  args = new cljs.core.IndexedSeq(G__29712__a,0,null);
} 
return G__29711__delegate.call(this,args);};
G__29711.cljs$lang$maxFixedArity = 0;
G__29711.cljs$lang$applyTo = (function (arglist__29713){
var args = cljs.core.seq(arglist__29713);
return G__29711__delegate(args);
});
G__29711.cljs$core$IFn$_invoke$arity$variadic = G__29711__delegate;
return G__29711;
})()
;})(o))
;

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
reagent.debug.tracking = true;

cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

f.call(null);

var warns = cljs.core.deref.call(null,reagent.debug.warnings);
cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

reagent.debug.tracking = false;

return warns;
});

//# sourceMappingURL=debug.js.map?rel=1507552544936
