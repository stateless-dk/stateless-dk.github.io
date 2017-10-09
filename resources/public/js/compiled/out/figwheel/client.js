// Compiled by ClojureScript 1.9.946 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('goog.userAgent.product');
goog.require('goog.object');
goog.require('cljs.reader');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.utils');
goog.require('figwheel.client.heads_up');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('cljs.repl');
figwheel.client._figwheel_version_ = "0.5.14";
figwheel.client.js_stringify = (((typeof JSON !== 'undefined') && (!((JSON.stringify == null))))?(function (x){
return ["#js ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(JSON.stringify(x,null," "))].join('');
}):(function (x){
try{return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(x)].join('');
}catch (e36885){if((e36885 instanceof Error)){
var e = e36885;
return "Error: Unable to stringify";
} else {
throw e36885;

}
}}));
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(var_args){
var G__36888 = arguments.length;
switch (G__36888) {
case 2:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2 = (function (stream,args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stream","stream",1534941648),stream,new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.mapv.call(null,(function (p1__36886_SHARP_){
if(typeof p1__36886_SHARP_ === 'string'){
return p1__36886_SHARP_;
} else {
return figwheel.client.js_stringify.call(null,p1__36886_SHARP_);
}
}),args)], null)], null));

return null;
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1 = (function (args){
return figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);
});

figwheel.client.figwheel_repl_print.cljs$lang$maxFixedArity = 2;

figwheel.client.console_out_print = (function figwheel$client$console_out_print(args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.console_err_print = (function figwheel$client$console_err_print(args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.repl_out_print_fn = (function figwheel$client$repl_out_print_fn(var_args){
var args__29230__auto__ = [];
var len__29223__auto___36891 = arguments.length;
var i__29224__auto___36892 = (0);
while(true){
if((i__29224__auto___36892 < len__29223__auto___36891)){
args__29230__auto__.push((arguments[i__29224__auto___36892]));

var G__36893 = (i__29224__auto___36892 + (1));
i__29224__auto___36892 = G__36893;
continue;
} else {
}
break;
}

var argseq__29231__auto__ = ((((0) < args__29230__auto__.length))?(new cljs.core.IndexedSeq(args__29230__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__29231__auto__);
});

figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_out_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);

return null;
});

figwheel.client.repl_out_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq36890){
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36890));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__29230__auto__ = [];
var len__29223__auto___36895 = arguments.length;
var i__29224__auto___36896 = (0);
while(true){
if((i__29224__auto___36896 < len__29223__auto___36895)){
args__29230__auto__.push((arguments[i__29224__auto___36896]));

var G__36897 = (i__29224__auto___36896 + (1));
i__29224__auto___36896 = G__36897;
continue;
} else {
}
break;
}

var argseq__29231__auto__ = ((((0) < args__29230__auto__.length))?(new cljs.core.IndexedSeq(args__29230__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__29231__auto__);
});

figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_err_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"err","err",-2089457205),args);

return null;
});

figwheel.client.repl_err_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq36894){
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36894));
});

figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core.set_print_fn_BANG_.call(null,figwheel.client.repl_out_print_fn);

cljs.core.set_print_err_fn_BANG_.call(null,figwheel.client.repl_err_print_fn);

return null;
});
figwheel.client.autoload_QMARK_ = (function figwheel$client$autoload_QMARK_(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),true);
});
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
var res = figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),cljs.core.not.call(null,figwheel.client.autoload_QMARK_.call(null)));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),["Toggle autoload deprecated! Use (figwheel.client/set-autoload! false)"].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),["Figwheel autoloading ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF"))].join(''));

return res;
});
goog.exportSymbol('figwheel.client.toggle_autoload', figwheel.client.toggle_autoload);
/**
 * Figwheel by default loads code changes as you work. Sometimes you
 *   just want to work on your code without the ramifications of
 *   autoloading and simply load your code piecemeal in the REPL. You can
 *   turn autoloading on and of with this method.
 * 
 *   (figwheel.client/set-autoload false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_autoload = (function figwheel$client$set_autoload(b){
if((b === true) || (b === false)){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),b);
});
goog.exportSymbol('figwheel.client.set_autoload', figwheel.client.set_autoload);
figwheel.client.repl_pprint = (function figwheel$client$repl_pprint(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),true);
});
goog.exportSymbol('figwheel.client.repl_pprint', figwheel.client.repl_pprint);
/**
 * This method gives you the ability to turn the pretty printing of
 *   the REPL's return value on and off.
 * 
 *   (figwheel.client/set-repl-pprint false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_repl_pprint = (function figwheel$client$set_repl_pprint(b){
if((b === true) || (b === false)){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),b);
});
goog.exportSymbol('figwheel.client.set_repl_pprint', figwheel.client.set_repl_pprint);
figwheel.client.repl_result_pr_str = (function figwheel$client$repl_result_pr_str(v){
if(cljs.core.truth_(figwheel.client.repl_pprint.call(null))){
return figwheel.client.utils.pprint_to_string.call(null,v);
} else {
return cljs.core.pr_str.call(null,v);
}
});
goog.exportSymbol('figwheel.client.repl_result_pr_str', figwheel.client.repl_result_pr_str);
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel.client.get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__36898){
var map__36899 = p__36898;
var map__36899__$1 = ((((!((map__36899 == null)))?((((map__36899.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36899.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36899):map__36899);
var message = cljs.core.get.call(null,map__36899__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__36899__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)," : ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__28052__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__28052__auto__)){
return or__28052__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__28040__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__28040__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__28040__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return (cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts)));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__31773__auto___36978 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31773__auto___36978,ch){
return (function (){
var f__31774__auto__ = (function (){var switch__31685__auto__ = ((function (c__31773__auto___36978,ch){
return (function (state_36950){
var state_val_36951 = (state_36950[(1)]);
if((state_val_36951 === (7))){
var inst_36946 = (state_36950[(2)]);
var state_36950__$1 = state_36950;
var statearr_36952_36979 = state_36950__$1;
(statearr_36952_36979[(2)] = inst_36946);

(statearr_36952_36979[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36951 === (1))){
var state_36950__$1 = state_36950;
var statearr_36953_36980 = state_36950__$1;
(statearr_36953_36980[(2)] = null);

(statearr_36953_36980[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36951 === (4))){
var inst_36903 = (state_36950[(7)]);
var inst_36903__$1 = (state_36950[(2)]);
var state_36950__$1 = (function (){var statearr_36954 = state_36950;
(statearr_36954[(7)] = inst_36903__$1);

return statearr_36954;
})();
if(cljs.core.truth_(inst_36903__$1)){
var statearr_36955_36981 = state_36950__$1;
(statearr_36955_36981[(1)] = (5));

} else {
var statearr_36956_36982 = state_36950__$1;
(statearr_36956_36982[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36951 === (15))){
var inst_36910 = (state_36950[(8)]);
var inst_36925 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_36910);
var inst_36926 = cljs.core.first.call(null,inst_36925);
var inst_36927 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_36926);
var inst_36928 = ["Figwheel: Not loading code with warnings - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_36927)].join('');
var inst_36929 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_36928);
var state_36950__$1 = state_36950;
var statearr_36957_36983 = state_36950__$1;
(statearr_36957_36983[(2)] = inst_36929);

(statearr_36957_36983[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36951 === (13))){
var inst_36934 = (state_36950[(2)]);
var state_36950__$1 = state_36950;
var statearr_36958_36984 = state_36950__$1;
(statearr_36958_36984[(2)] = inst_36934);

(statearr_36958_36984[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36951 === (6))){
var state_36950__$1 = state_36950;
var statearr_36959_36985 = state_36950__$1;
(statearr_36959_36985[(2)] = null);

(statearr_36959_36985[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36951 === (17))){
var inst_36932 = (state_36950[(2)]);
var state_36950__$1 = state_36950;
var statearr_36960_36986 = state_36950__$1;
(statearr_36960_36986[(2)] = inst_36932);

(statearr_36960_36986[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36951 === (3))){
var inst_36948 = (state_36950[(2)]);
var state_36950__$1 = state_36950;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36950__$1,inst_36948);
} else {
if((state_val_36951 === (12))){
var inst_36909 = (state_36950[(9)]);
var inst_36923 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_36909,opts);
var state_36950__$1 = state_36950;
if(cljs.core.truth_(inst_36923)){
var statearr_36961_36987 = state_36950__$1;
(statearr_36961_36987[(1)] = (15));

} else {
var statearr_36962_36988 = state_36950__$1;
(statearr_36962_36988[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36951 === (2))){
var state_36950__$1 = state_36950;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36950__$1,(4),ch);
} else {
if((state_val_36951 === (11))){
var inst_36910 = (state_36950[(8)]);
var inst_36915 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_36916 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_36910);
var inst_36917 = cljs.core.async.timeout.call(null,(1000));
var inst_36918 = [inst_36916,inst_36917];
var inst_36919 = (new cljs.core.PersistentVector(null,2,(5),inst_36915,inst_36918,null));
var state_36950__$1 = state_36950;
return cljs.core.async.ioc_alts_BANG_.call(null,state_36950__$1,(14),inst_36919);
} else {
if((state_val_36951 === (9))){
var inst_36910 = (state_36950[(8)]);
var inst_36936 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_36937 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_36910);
var inst_36938 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_36937);
var inst_36939 = ["Not loading: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_36938)].join('');
var inst_36940 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_36939);
var state_36950__$1 = (function (){var statearr_36963 = state_36950;
(statearr_36963[(10)] = inst_36936);

return statearr_36963;
})();
var statearr_36964_36989 = state_36950__$1;
(statearr_36964_36989[(2)] = inst_36940);

(statearr_36964_36989[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36951 === (5))){
var inst_36903 = (state_36950[(7)]);
var inst_36905 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_36906 = (new cljs.core.PersistentArrayMap(null,2,inst_36905,null));
var inst_36907 = (new cljs.core.PersistentHashSet(null,inst_36906,null));
var inst_36908 = figwheel.client.focus_msgs.call(null,inst_36907,inst_36903);
var inst_36909 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_36908);
var inst_36910 = cljs.core.first.call(null,inst_36908);
var inst_36911 = figwheel.client.autoload_QMARK_.call(null);
var state_36950__$1 = (function (){var statearr_36965 = state_36950;
(statearr_36965[(8)] = inst_36910);

(statearr_36965[(9)] = inst_36909);

return statearr_36965;
})();
if(cljs.core.truth_(inst_36911)){
var statearr_36966_36990 = state_36950__$1;
(statearr_36966_36990[(1)] = (8));

} else {
var statearr_36967_36991 = state_36950__$1;
(statearr_36967_36991[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36951 === (14))){
var inst_36921 = (state_36950[(2)]);
var state_36950__$1 = state_36950;
var statearr_36968_36992 = state_36950__$1;
(statearr_36968_36992[(2)] = inst_36921);

(statearr_36968_36992[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36951 === (16))){
var state_36950__$1 = state_36950;
var statearr_36969_36993 = state_36950__$1;
(statearr_36969_36993[(2)] = null);

(statearr_36969_36993[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36951 === (10))){
var inst_36942 = (state_36950[(2)]);
var state_36950__$1 = (function (){var statearr_36970 = state_36950;
(statearr_36970[(11)] = inst_36942);

return statearr_36970;
})();
var statearr_36971_36994 = state_36950__$1;
(statearr_36971_36994[(2)] = null);

(statearr_36971_36994[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36951 === (8))){
var inst_36909 = (state_36950[(9)]);
var inst_36913 = figwheel.client.reload_file_state_QMARK_.call(null,inst_36909,opts);
var state_36950__$1 = state_36950;
if(cljs.core.truth_(inst_36913)){
var statearr_36972_36995 = state_36950__$1;
(statearr_36972_36995[(1)] = (11));

} else {
var statearr_36973_36996 = state_36950__$1;
(statearr_36973_36996[(1)] = (12));

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
});})(c__31773__auto___36978,ch))
;
return ((function (switch__31685__auto__,c__31773__auto___36978,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__31686__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__31686__auto____0 = (function (){
var statearr_36974 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36974[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__31686__auto__);

(statearr_36974[(1)] = (1));

return statearr_36974;
});
var figwheel$client$file_reloader_plugin_$_state_machine__31686__auto____1 = (function (state_36950){
while(true){
var ret_value__31687__auto__ = (function (){try{while(true){
var result__31688__auto__ = switch__31685__auto__.call(null,state_36950);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31688__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31688__auto__;
}
break;
}
}catch (e36975){if((e36975 instanceof Object)){
var ex__31689__auto__ = e36975;
var statearr_36976_36997 = state_36950;
(statearr_36976_36997[(5)] = ex__31689__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36950);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36975;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31687__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36998 = state_36950;
state_36950 = G__36998;
continue;
} else {
return ret_value__31687__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__31686__auto__ = function(state_36950){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__31686__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__31686__auto____1.call(this,state_36950);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloader_plugin_$_state_machine__31686__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__31686__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__31686__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__31686__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__31686__auto__;
})()
;})(switch__31685__auto__,c__31773__auto___36978,ch))
})();
var state__31775__auto__ = (function (){var statearr_36977 = f__31774__auto__.call(null);
(statearr_36977[(6)] = c__31773__auto___36978);

return statearr_36977;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31775__auto__);
});})(c__31773__auto___36978,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__36999_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__36999_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
figwheel.client.get_ua_product = (function figwheel$client$get_ua_product(){
if(cljs.core.truth_(figwheel.client.utils.node_env_QMARK_.call(null))){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
}
});
var base_path_37001 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_37001){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{figwheel.client.enable_repl_print_BANG_.call(null);

var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value], null));
}catch (e37000){if((e37000 instanceof Error)){
var e = e37000;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_37001], null));
} else {
var e = e37000;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}finally {figwheel.client.enable_repl_print_BANG_.call(null);
}});})(base_path_37001))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = ({});
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__37002){
var map__37003 = p__37002;
var map__37003__$1 = ((((!((map__37003 == null)))?((((map__37003.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37003.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37003):map__37003);
var opts = map__37003__$1;
var build_id = cljs.core.get.call(null,map__37003__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__37003,map__37003__$1,opts,build_id){
return (function (p__37005){
var vec__37006 = p__37005;
var seq__37007 = cljs.core.seq.call(null,vec__37006);
var first__37008 = cljs.core.first.call(null,seq__37007);
var seq__37007__$1 = cljs.core.next.call(null,seq__37007);
var map__37009 = first__37008;
var map__37009__$1 = ((((!((map__37009 == null)))?((((map__37009.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37009.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37009):map__37009);
var msg = map__37009__$1;
var msg_name = cljs.core.get.call(null,map__37009__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__37007__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__37006,seq__37007,first__37008,seq__37007__$1,map__37009,map__37009__$1,msg,msg_name,_,map__37003,map__37003__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__37006,seq__37007,first__37008,seq__37007__$1,map__37009,map__37009__$1,msg,msg_name,_,map__37003,map__37003__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__37003,map__37003__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__37011){
var vec__37012 = p__37011;
var seq__37013 = cljs.core.seq.call(null,vec__37012);
var first__37014 = cljs.core.first.call(null,seq__37013);
var seq__37013__$1 = cljs.core.next.call(null,seq__37013);
var map__37015 = first__37014;
var map__37015__$1 = ((((!((map__37015 == null)))?((((map__37015.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37015.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37015):map__37015);
var msg = map__37015__$1;
var msg_name = cljs.core.get.call(null,map__37015__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__37013__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__37017){
var map__37018 = p__37017;
var map__37018__$1 = ((((!((map__37018 == null)))?((((map__37018.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37018.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37018):map__37018);
var on_compile_warning = cljs.core.get.call(null,map__37018__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__37018__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__37018,map__37018__$1,on_compile_warning,on_compile_fail){
return (function (p__37020){
var vec__37021 = p__37020;
var seq__37022 = cljs.core.seq.call(null,vec__37021);
var first__37023 = cljs.core.first.call(null,seq__37022);
var seq__37022__$1 = cljs.core.next.call(null,seq__37022);
var map__37024 = first__37023;
var map__37024__$1 = ((((!((map__37024 == null)))?((((map__37024.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37024.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37024):map__37024);
var msg = map__37024__$1;
var msg_name = cljs.core.get.call(null,map__37024__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__37022__$1;
var pred__37026 = cljs.core._EQ_;
var expr__37027 = msg_name;
if(cljs.core.truth_(pred__37026.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__37027))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__37026.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__37027))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__37018,map__37018__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.auto_jump_to_error = (function figwheel$client$auto_jump_to_error(opts,error){
if(cljs.core.truth_(new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920).cljs$core$IFn$_invoke$arity$1(opts))){
return figwheel.client.heads_up.auto_notify_source_file_line.call(null,error);
} else {
return null;
}
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__31773__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31773__auto__,msg_hist,msg_names,msg){
return (function (){
var f__31774__auto__ = (function (){var switch__31685__auto__ = ((function (c__31773__auto__,msg_hist,msg_names,msg){
return (function (state_37116){
var state_val_37117 = (state_37116[(1)]);
if((state_val_37117 === (7))){
var inst_37036 = (state_37116[(2)]);
var state_37116__$1 = state_37116;
if(cljs.core.truth_(inst_37036)){
var statearr_37118_37165 = state_37116__$1;
(statearr_37118_37165[(1)] = (8));

} else {
var statearr_37119_37166 = state_37116__$1;
(statearr_37119_37166[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37117 === (20))){
var inst_37110 = (state_37116[(2)]);
var state_37116__$1 = state_37116;
var statearr_37120_37167 = state_37116__$1;
(statearr_37120_37167[(2)] = inst_37110);

(statearr_37120_37167[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37117 === (27))){
var inst_37106 = (state_37116[(2)]);
var state_37116__$1 = state_37116;
var statearr_37121_37168 = state_37116__$1;
(statearr_37121_37168[(2)] = inst_37106);

(statearr_37121_37168[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37117 === (1))){
var inst_37029 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_37116__$1 = state_37116;
if(cljs.core.truth_(inst_37029)){
var statearr_37122_37169 = state_37116__$1;
(statearr_37122_37169[(1)] = (2));

} else {
var statearr_37123_37170 = state_37116__$1;
(statearr_37123_37170[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37117 === (24))){
var inst_37108 = (state_37116[(2)]);
var state_37116__$1 = state_37116;
var statearr_37124_37171 = state_37116__$1;
(statearr_37124_37171[(2)] = inst_37108);

(statearr_37124_37171[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37117 === (4))){
var inst_37114 = (state_37116[(2)]);
var state_37116__$1 = state_37116;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37116__$1,inst_37114);
} else {
if((state_val_37117 === (15))){
var inst_37112 = (state_37116[(2)]);
var state_37116__$1 = state_37116;
var statearr_37125_37172 = state_37116__$1;
(statearr_37125_37172[(2)] = inst_37112);

(statearr_37125_37172[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37117 === (21))){
var inst_37065 = (state_37116[(2)]);
var inst_37066 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_37067 = figwheel.client.auto_jump_to_error.call(null,opts,inst_37066);
var state_37116__$1 = (function (){var statearr_37126 = state_37116;
(statearr_37126[(7)] = inst_37065);

return statearr_37126;
})();
var statearr_37127_37173 = state_37116__$1;
(statearr_37127_37173[(2)] = inst_37067);

(statearr_37127_37173[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37117 === (31))){
var inst_37095 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_37116__$1 = state_37116;
if(cljs.core.truth_(inst_37095)){
var statearr_37128_37174 = state_37116__$1;
(statearr_37128_37174[(1)] = (34));

} else {
var statearr_37129_37175 = state_37116__$1;
(statearr_37129_37175[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37117 === (32))){
var inst_37104 = (state_37116[(2)]);
var state_37116__$1 = state_37116;
var statearr_37130_37176 = state_37116__$1;
(statearr_37130_37176[(2)] = inst_37104);

(statearr_37130_37176[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37117 === (33))){
var inst_37091 = (state_37116[(2)]);
var inst_37092 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_37093 = figwheel.client.auto_jump_to_error.call(null,opts,inst_37092);
var state_37116__$1 = (function (){var statearr_37131 = state_37116;
(statearr_37131[(8)] = inst_37091);

return statearr_37131;
})();
var statearr_37132_37177 = state_37116__$1;
(statearr_37132_37177[(2)] = inst_37093);

(statearr_37132_37177[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37117 === (13))){
var inst_37050 = figwheel.client.heads_up.clear.call(null);
var state_37116__$1 = state_37116;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37116__$1,(16),inst_37050);
} else {
if((state_val_37117 === (22))){
var inst_37071 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_37072 = figwheel.client.heads_up.append_warning_message.call(null,inst_37071);
var state_37116__$1 = state_37116;
var statearr_37133_37178 = state_37116__$1;
(statearr_37133_37178[(2)] = inst_37072);

(statearr_37133_37178[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37117 === (36))){
var inst_37102 = (state_37116[(2)]);
var state_37116__$1 = state_37116;
var statearr_37134_37179 = state_37116__$1;
(statearr_37134_37179[(2)] = inst_37102);

(statearr_37134_37179[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37117 === (29))){
var inst_37082 = (state_37116[(2)]);
var inst_37083 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_37084 = figwheel.client.auto_jump_to_error.call(null,opts,inst_37083);
var state_37116__$1 = (function (){var statearr_37135 = state_37116;
(statearr_37135[(9)] = inst_37082);

return statearr_37135;
})();
var statearr_37136_37180 = state_37116__$1;
(statearr_37136_37180[(2)] = inst_37084);

(statearr_37136_37180[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37117 === (6))){
var inst_37031 = (state_37116[(10)]);
var state_37116__$1 = state_37116;
var statearr_37137_37181 = state_37116__$1;
(statearr_37137_37181[(2)] = inst_37031);

(statearr_37137_37181[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37117 === (28))){
var inst_37078 = (state_37116[(2)]);
var inst_37079 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_37080 = figwheel.client.heads_up.display_warning.call(null,inst_37079);
var state_37116__$1 = (function (){var statearr_37138 = state_37116;
(statearr_37138[(11)] = inst_37078);

return statearr_37138;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37116__$1,(29),inst_37080);
} else {
if((state_val_37117 === (25))){
var inst_37076 = figwheel.client.heads_up.clear.call(null);
var state_37116__$1 = state_37116;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37116__$1,(28),inst_37076);
} else {
if((state_val_37117 === (34))){
var inst_37097 = figwheel.client.heads_up.flash_loaded.call(null);
var state_37116__$1 = state_37116;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37116__$1,(37),inst_37097);
} else {
if((state_val_37117 === (17))){
var inst_37056 = (state_37116[(2)]);
var inst_37057 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_37058 = figwheel.client.auto_jump_to_error.call(null,opts,inst_37057);
var state_37116__$1 = (function (){var statearr_37139 = state_37116;
(statearr_37139[(12)] = inst_37056);

return statearr_37139;
})();
var statearr_37140_37182 = state_37116__$1;
(statearr_37140_37182[(2)] = inst_37058);

(statearr_37140_37182[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37117 === (3))){
var inst_37048 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_37116__$1 = state_37116;
if(cljs.core.truth_(inst_37048)){
var statearr_37141_37183 = state_37116__$1;
(statearr_37141_37183[(1)] = (13));

} else {
var statearr_37142_37184 = state_37116__$1;
(statearr_37142_37184[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37117 === (12))){
var inst_37044 = (state_37116[(2)]);
var state_37116__$1 = state_37116;
var statearr_37143_37185 = state_37116__$1;
(statearr_37143_37185[(2)] = inst_37044);

(statearr_37143_37185[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37117 === (2))){
var inst_37031 = (state_37116[(10)]);
var inst_37031__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_37116__$1 = (function (){var statearr_37144 = state_37116;
(statearr_37144[(10)] = inst_37031__$1);

return statearr_37144;
})();
if(cljs.core.truth_(inst_37031__$1)){
var statearr_37145_37186 = state_37116__$1;
(statearr_37145_37186[(1)] = (5));

} else {
var statearr_37146_37187 = state_37116__$1;
(statearr_37146_37187[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37117 === (23))){
var inst_37074 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_37116__$1 = state_37116;
if(cljs.core.truth_(inst_37074)){
var statearr_37147_37188 = state_37116__$1;
(statearr_37147_37188[(1)] = (25));

} else {
var statearr_37148_37189 = state_37116__$1;
(statearr_37148_37189[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37117 === (35))){
var state_37116__$1 = state_37116;
var statearr_37149_37190 = state_37116__$1;
(statearr_37149_37190[(2)] = null);

(statearr_37149_37190[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37117 === (19))){
var inst_37069 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_37116__$1 = state_37116;
if(cljs.core.truth_(inst_37069)){
var statearr_37150_37191 = state_37116__$1;
(statearr_37150_37191[(1)] = (22));

} else {
var statearr_37151_37192 = state_37116__$1;
(statearr_37151_37192[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37117 === (11))){
var inst_37040 = (state_37116[(2)]);
var state_37116__$1 = state_37116;
var statearr_37152_37193 = state_37116__$1;
(statearr_37152_37193[(2)] = inst_37040);

(statearr_37152_37193[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37117 === (9))){
var inst_37042 = figwheel.client.heads_up.clear.call(null);
var state_37116__$1 = state_37116;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37116__$1,(12),inst_37042);
} else {
if((state_val_37117 === (5))){
var inst_37033 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_37116__$1 = state_37116;
var statearr_37153_37194 = state_37116__$1;
(statearr_37153_37194[(2)] = inst_37033);

(statearr_37153_37194[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37117 === (14))){
var inst_37060 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_37116__$1 = state_37116;
if(cljs.core.truth_(inst_37060)){
var statearr_37154_37195 = state_37116__$1;
(statearr_37154_37195[(1)] = (18));

} else {
var statearr_37155_37196 = state_37116__$1;
(statearr_37155_37196[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37117 === (26))){
var inst_37086 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_37116__$1 = state_37116;
if(cljs.core.truth_(inst_37086)){
var statearr_37156_37197 = state_37116__$1;
(statearr_37156_37197[(1)] = (30));

} else {
var statearr_37157_37198 = state_37116__$1;
(statearr_37157_37198[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37117 === (16))){
var inst_37052 = (state_37116[(2)]);
var inst_37053 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_37054 = figwheel.client.heads_up.display_exception.call(null,inst_37053);
var state_37116__$1 = (function (){var statearr_37158 = state_37116;
(statearr_37158[(13)] = inst_37052);

return statearr_37158;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37116__$1,(17),inst_37054);
} else {
if((state_val_37117 === (30))){
var inst_37088 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_37089 = figwheel.client.heads_up.display_warning.call(null,inst_37088);
var state_37116__$1 = state_37116;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37116__$1,(33),inst_37089);
} else {
if((state_val_37117 === (10))){
var inst_37046 = (state_37116[(2)]);
var state_37116__$1 = state_37116;
var statearr_37159_37199 = state_37116__$1;
(statearr_37159_37199[(2)] = inst_37046);

(statearr_37159_37199[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37117 === (18))){
var inst_37062 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_37063 = figwheel.client.heads_up.display_exception.call(null,inst_37062);
var state_37116__$1 = state_37116;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37116__$1,(21),inst_37063);
} else {
if((state_val_37117 === (37))){
var inst_37099 = (state_37116[(2)]);
var state_37116__$1 = state_37116;
var statearr_37160_37200 = state_37116__$1;
(statearr_37160_37200[(2)] = inst_37099);

(statearr_37160_37200[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37117 === (8))){
var inst_37038 = figwheel.client.heads_up.flash_loaded.call(null);
var state_37116__$1 = state_37116;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37116__$1,(11),inst_37038);
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
});})(c__31773__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__31685__auto__,c__31773__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__31686__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__31686__auto____0 = (function (){
var statearr_37161 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37161[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__31686__auto__);

(statearr_37161[(1)] = (1));

return statearr_37161;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__31686__auto____1 = (function (state_37116){
while(true){
var ret_value__31687__auto__ = (function (){try{while(true){
var result__31688__auto__ = switch__31685__auto__.call(null,state_37116);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31688__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31688__auto__;
}
break;
}
}catch (e37162){if((e37162 instanceof Object)){
var ex__31689__auto__ = e37162;
var statearr_37163_37201 = state_37116;
(statearr_37163_37201[(5)] = ex__31689__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37116);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37162;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31687__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37202 = state_37116;
state_37116 = G__37202;
continue;
} else {
return ret_value__31687__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__31686__auto__ = function(state_37116){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__31686__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__31686__auto____1.call(this,state_37116);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__31686__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__31686__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__31686__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__31686__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__31686__auto__;
})()
;})(switch__31685__auto__,c__31773__auto__,msg_hist,msg_names,msg))
})();
var state__31775__auto__ = (function (){var statearr_37164 = f__31774__auto__.call(null);
(statearr_37164[(6)] = c__31773__auto__);

return statearr_37164;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31775__auto__);
});})(c__31773__auto__,msg_hist,msg_names,msg))
);

return c__31773__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__31773__auto___37231 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31773__auto___37231,ch){
return (function (){
var f__31774__auto__ = (function (){var switch__31685__auto__ = ((function (c__31773__auto___37231,ch){
return (function (state_37217){
var state_val_37218 = (state_37217[(1)]);
if((state_val_37218 === (1))){
var state_37217__$1 = state_37217;
var statearr_37219_37232 = state_37217__$1;
(statearr_37219_37232[(2)] = null);

(statearr_37219_37232[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37218 === (2))){
var state_37217__$1 = state_37217;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37217__$1,(4),ch);
} else {
if((state_val_37218 === (3))){
var inst_37215 = (state_37217[(2)]);
var state_37217__$1 = state_37217;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37217__$1,inst_37215);
} else {
if((state_val_37218 === (4))){
var inst_37205 = (state_37217[(7)]);
var inst_37205__$1 = (state_37217[(2)]);
var state_37217__$1 = (function (){var statearr_37220 = state_37217;
(statearr_37220[(7)] = inst_37205__$1);

return statearr_37220;
})();
if(cljs.core.truth_(inst_37205__$1)){
var statearr_37221_37233 = state_37217__$1;
(statearr_37221_37233[(1)] = (5));

} else {
var statearr_37222_37234 = state_37217__$1;
(statearr_37222_37234[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37218 === (5))){
var inst_37205 = (state_37217[(7)]);
var inst_37207 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_37205);
var state_37217__$1 = state_37217;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37217__$1,(8),inst_37207);
} else {
if((state_val_37218 === (6))){
var state_37217__$1 = state_37217;
var statearr_37223_37235 = state_37217__$1;
(statearr_37223_37235[(2)] = null);

(statearr_37223_37235[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37218 === (7))){
var inst_37213 = (state_37217[(2)]);
var state_37217__$1 = state_37217;
var statearr_37224_37236 = state_37217__$1;
(statearr_37224_37236[(2)] = inst_37213);

(statearr_37224_37236[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37218 === (8))){
var inst_37209 = (state_37217[(2)]);
var state_37217__$1 = (function (){var statearr_37225 = state_37217;
(statearr_37225[(8)] = inst_37209);

return statearr_37225;
})();
var statearr_37226_37237 = state_37217__$1;
(statearr_37226_37237[(2)] = null);

(statearr_37226_37237[(1)] = (2));


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
});})(c__31773__auto___37231,ch))
;
return ((function (switch__31685__auto__,c__31773__auto___37231,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__31686__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__31686__auto____0 = (function (){
var statearr_37227 = [null,null,null,null,null,null,null,null,null];
(statearr_37227[(0)] = figwheel$client$heads_up_plugin_$_state_machine__31686__auto__);

(statearr_37227[(1)] = (1));

return statearr_37227;
});
var figwheel$client$heads_up_plugin_$_state_machine__31686__auto____1 = (function (state_37217){
while(true){
var ret_value__31687__auto__ = (function (){try{while(true){
var result__31688__auto__ = switch__31685__auto__.call(null,state_37217);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31688__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31688__auto__;
}
break;
}
}catch (e37228){if((e37228 instanceof Object)){
var ex__31689__auto__ = e37228;
var statearr_37229_37238 = state_37217;
(statearr_37229_37238[(5)] = ex__31689__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37217);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37228;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31687__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37239 = state_37217;
state_37217 = G__37239;
continue;
} else {
return ret_value__31687__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__31686__auto__ = function(state_37217){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__31686__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__31686__auto____1.call(this,state_37217);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up_plugin_$_state_machine__31686__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__31686__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__31686__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__31686__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__31686__auto__;
})()
;})(switch__31685__auto__,c__31773__auto___37231,ch))
})();
var state__31775__auto__ = (function (){var statearr_37230 = f__31774__auto__.call(null);
(statearr_37230[(6)] = c__31773__auto___37231);

return statearr_37230;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31775__auto__);
});})(c__31773__auto___37231,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__31773__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31773__auto__){
return (function (){
var f__31774__auto__ = (function (){var switch__31685__auto__ = ((function (c__31773__auto__){
return (function (state_37245){
var state_val_37246 = (state_37245[(1)]);
if((state_val_37246 === (1))){
var inst_37240 = cljs.core.async.timeout.call(null,(3000));
var state_37245__$1 = state_37245;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37245__$1,(2),inst_37240);
} else {
if((state_val_37246 === (2))){
var inst_37242 = (state_37245[(2)]);
var inst_37243 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_37245__$1 = (function (){var statearr_37247 = state_37245;
(statearr_37247[(7)] = inst_37242);

return statearr_37247;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37245__$1,inst_37243);
} else {
return null;
}
}
});})(c__31773__auto__))
;
return ((function (switch__31685__auto__,c__31773__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__31686__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__31686__auto____0 = (function (){
var statearr_37248 = [null,null,null,null,null,null,null,null];
(statearr_37248[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__31686__auto__);

(statearr_37248[(1)] = (1));

return statearr_37248;
});
var figwheel$client$enforce_project_plugin_$_state_machine__31686__auto____1 = (function (state_37245){
while(true){
var ret_value__31687__auto__ = (function (){try{while(true){
var result__31688__auto__ = switch__31685__auto__.call(null,state_37245);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31688__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31688__auto__;
}
break;
}
}catch (e37249){if((e37249 instanceof Object)){
var ex__31689__auto__ = e37249;
var statearr_37250_37252 = state_37245;
(statearr_37250_37252[(5)] = ex__31689__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37245);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37249;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31687__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37253 = state_37245;
state_37245 = G__37253;
continue;
} else {
return ret_value__31687__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__31686__auto__ = function(state_37245){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__31686__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__31686__auto____1.call(this,state_37245);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$enforce_project_plugin_$_state_machine__31686__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__31686__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__31686__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__31686__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__31686__auto__;
})()
;})(switch__31685__auto__,c__31773__auto__))
})();
var state__31775__auto__ = (function (){var statearr_37251 = f__31774__auto__.call(null);
(statearr_37251[(6)] = c__31773__auto__);

return statearr_37251;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31775__auto__);
});})(c__31773__auto__))
);

return c__31773__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.enforce_figwheel_version_plugin = (function figwheel$client$enforce_figwheel_version_plugin(opts){
return (function (msg_hist){
var temp__4657__auto__ = new cljs.core.Keyword(null,"figwheel-version","figwheel-version",1409553832).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,msg_hist));
if(cljs.core.truth_(temp__4657__auto__)){
var figwheel_version = temp__4657__auto__;
if(cljs.core.not_EQ_.call(null,figwheel_version,figwheel.client._figwheel_version_)){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different version of Figwheel.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__31773__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31773__auto__,figwheel_version,temp__4657__auto__){
return (function (){
var f__31774__auto__ = (function (){var switch__31685__auto__ = ((function (c__31773__auto__,figwheel_version,temp__4657__auto__){
return (function (state_37260){
var state_val_37261 = (state_37260[(1)]);
if((state_val_37261 === (1))){
var inst_37254 = cljs.core.async.timeout.call(null,(2000));
var state_37260__$1 = state_37260;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37260__$1,(2),inst_37254);
} else {
if((state_val_37261 === (2))){
var inst_37256 = (state_37260[(2)]);
var inst_37257 = ["Figwheel Client Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client._figwheel_version_),"</strong> is not equal to ","Figwheel Sidecar Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel_version),"</strong>",".  Shutting down Websocket Connection!","<h4>To fix try:</h4>","<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>","<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>","<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>"].join('');
var inst_37258 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_37257);
var state_37260__$1 = (function (){var statearr_37262 = state_37260;
(statearr_37262[(7)] = inst_37256);

return statearr_37262;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37260__$1,inst_37258);
} else {
return null;
}
}
});})(c__31773__auto__,figwheel_version,temp__4657__auto__))
;
return ((function (switch__31685__auto__,c__31773__auto__,figwheel_version,temp__4657__auto__){
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__31686__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__31686__auto____0 = (function (){
var statearr_37263 = [null,null,null,null,null,null,null,null];
(statearr_37263[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__31686__auto__);

(statearr_37263[(1)] = (1));

return statearr_37263;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__31686__auto____1 = (function (state_37260){
while(true){
var ret_value__31687__auto__ = (function (){try{while(true){
var result__31688__auto__ = switch__31685__auto__.call(null,state_37260);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31688__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31688__auto__;
}
break;
}
}catch (e37264){if((e37264 instanceof Object)){
var ex__31689__auto__ = e37264;
var statearr_37265_37267 = state_37260;
(statearr_37265_37267[(5)] = ex__31689__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37260);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37264;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31687__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37268 = state_37260;
state_37260 = G__37268;
continue;
} else {
return ret_value__31687__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__31686__auto__ = function(state_37260){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__31686__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__31686__auto____1.call(this,state_37260);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__31686__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__31686__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__31686__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__31686__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__31686__auto__;
})()
;})(switch__31685__auto__,c__31773__auto__,figwheel_version,temp__4657__auto__))
})();
var state__31775__auto__ = (function (){var statearr_37266 = f__31774__auto__.call(null);
(statearr_37266[(6)] = c__31773__auto__);

return statearr_37266;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31775__auto__);
});})(c__31773__auto__,figwheel_version,temp__4657__auto__))
);

return c__31773__auto__;
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__37269){
var map__37270 = p__37269;
var map__37270__$1 = ((((!((map__37270 == null)))?((((map__37270.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37270.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37270):map__37270);
var file = cljs.core.get.call(null,map__37270__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__37270__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__37270__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__37272 = "";
var G__37272__$1 = (cljs.core.truth_(file)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__37272),"file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):G__37272);
var G__37272__$2 = (cljs.core.truth_(line)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__37272__$1)," at line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''):G__37272__$1);
if(cljs.core.truth_((function (){var and__28040__auto__ = line;
if(cljs.core.truth_(and__28040__auto__)){
return column;
} else {
return and__28040__auto__;
}
})())){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__37272__$2),", column ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join('');
} else {
return G__37272__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__37273){
var map__37274 = p__37273;
var map__37274__$1 = ((((!((map__37274 == null)))?((((map__37274.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37274.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37274):map__37274);
var ed = map__37274__$1;
var formatted_exception = cljs.core.get.call(null,map__37274__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__37274__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__37274__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__37276_37280 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__37277_37281 = null;
var count__37278_37282 = (0);
var i__37279_37283 = (0);
while(true){
if((i__37279_37283 < count__37278_37282)){
var msg_37284 = cljs.core._nth.call(null,chunk__37277_37281,i__37279_37283);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_37284);

var G__37285 = seq__37276_37280;
var G__37286 = chunk__37277_37281;
var G__37287 = count__37278_37282;
var G__37288 = (i__37279_37283 + (1));
seq__37276_37280 = G__37285;
chunk__37277_37281 = G__37286;
count__37278_37282 = G__37287;
i__37279_37283 = G__37288;
continue;
} else {
var temp__4657__auto___37289 = cljs.core.seq.call(null,seq__37276_37280);
if(temp__4657__auto___37289){
var seq__37276_37290__$1 = temp__4657__auto___37289;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37276_37290__$1)){
var c__28891__auto___37291 = cljs.core.chunk_first.call(null,seq__37276_37290__$1);
var G__37292 = cljs.core.chunk_rest.call(null,seq__37276_37290__$1);
var G__37293 = c__28891__auto___37291;
var G__37294 = cljs.core.count.call(null,c__28891__auto___37291);
var G__37295 = (0);
seq__37276_37280 = G__37292;
chunk__37277_37281 = G__37293;
count__37278_37282 = G__37294;
i__37279_37283 = G__37295;
continue;
} else {
var msg_37296 = cljs.core.first.call(null,seq__37276_37290__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_37296);

var G__37297 = cljs.core.next.call(null,seq__37276_37290__$1);
var G__37298 = null;
var G__37299 = (0);
var G__37300 = (0);
seq__37276_37280 = G__37297;
chunk__37277_37281 = G__37298;
count__37278_37282 = G__37299;
i__37279_37283 = G__37300;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cause)){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),["Error on ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_line_column.call(null,ed))].join(''));
} else {
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__37301){
var map__37302 = p__37301;
var map__37302__$1 = ((((!((map__37302 == null)))?((((map__37302.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37302.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37302):map__37302);
var w = map__37302__$1;
var message = cljs.core.get.call(null,map__37302__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),["Figwheel: Compile Warning - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(message))," in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_line_column.call(null,message))].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if(typeof figwheel.client.config_defaults !== 'undefined'){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[new cljs.core.Var(function(){return figwheel.client.default_on_compile_warning;},new cljs.core.Symbol("figwheel.client","default-on-compile-warning","figwheel.client/default-on-compile-warning",584144208,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-warning","default-on-compile-warning",-18911586,null),"resources/public/js/compiled/out/figwheel/client.cljs",33,1,363,363,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"message","message",1234475525,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"w","w",1994700528,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_warning)?figwheel.client.default_on_compile_warning.cljs$lang$test:null)])),figwheel.client.default_on_jsload,true,new cljs.core.Var(function(){return figwheel.client.default_on_compile_fail;},new cljs.core.Symbol("figwheel.client","default-on-compile-fail","figwheel.client/default-on-compile-fail",1384826337,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-fail","default-on-compile-fail",-158814813,null),"resources/public/js/compiled/out/figwheel/client.cljs",30,1,355,355,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"formatted-exception","formatted-exception",1524042501,null),new cljs.core.Symbol(null,"exception-data","exception-data",1128056641,null),new cljs.core.Symbol(null,"cause","cause",1872432779,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"ed","ed",2076825751,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_fail)?figwheel.client.default_on_compile_fail.cljs$lang$test:null)])),false,true,["ws://",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),"/figwheel-ws"].join(''),false,figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.fill_url_template = (function figwheel$client$fill_url_template(config){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
return cljs.core.update_in.call(null,config,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938)], null),(function (x){
return clojure.string.replace.call(null,clojure.string.replace.call(null,x,"[[client-hostname]]",location.hostname),"[[client-port]]",location.port);
}));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"enforce-figwheel-version-plugin","enforce-figwheel-version-plugin",-1916185220),figwheel.client.enforce_figwheel_version_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = ((cljs.core.not.call(null,figwheel.client.utils.html_env_QMARK_.call(null)))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__28040__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__28040__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__28040__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_message_watch = (function figwheel$client$add_message_watch(key,callback){
return cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,key,(function (_,___$1,___$2,msg_hist){
return callback.call(null,cljs.core.first.call(null,msg_hist));
}));
});
figwheel.client.add_json_message_watch = (function figwheel$client$add_json_message_watch(key,callback){
return figwheel.client.add_message_watch.call(null,key,cljs.core.comp.call(null,callback,cljs.core.clj__GT_js));
});
goog.exportSymbol('figwheel.client.add_json_message_watch', figwheel.client.add_json_message_watch);
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__37304 = cljs.core.seq.call(null,plugins);
var chunk__37305 = null;
var count__37306 = (0);
var i__37307 = (0);
while(true){
if((i__37307 < count__37306)){
var vec__37308 = cljs.core._nth.call(null,chunk__37305,i__37307);
var k = cljs.core.nth.call(null,vec__37308,(0),null);
var plugin = cljs.core.nth.call(null,vec__37308,(1),null);
if(cljs.core.truth_(plugin)){
var pl_37314 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__37304,chunk__37305,count__37306,i__37307,pl_37314,vec__37308,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_37314.call(null,msg_hist);
});})(seq__37304,chunk__37305,count__37306,i__37307,pl_37314,vec__37308,k,plugin))
);
} else {
}

var G__37315 = seq__37304;
var G__37316 = chunk__37305;
var G__37317 = count__37306;
var G__37318 = (i__37307 + (1));
seq__37304 = G__37315;
chunk__37305 = G__37316;
count__37306 = G__37317;
i__37307 = G__37318;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__37304);
if(temp__4657__auto__){
var seq__37304__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37304__$1)){
var c__28891__auto__ = cljs.core.chunk_first.call(null,seq__37304__$1);
var G__37319 = cljs.core.chunk_rest.call(null,seq__37304__$1);
var G__37320 = c__28891__auto__;
var G__37321 = cljs.core.count.call(null,c__28891__auto__);
var G__37322 = (0);
seq__37304 = G__37319;
chunk__37305 = G__37320;
count__37306 = G__37321;
i__37307 = G__37322;
continue;
} else {
var vec__37311 = cljs.core.first.call(null,seq__37304__$1);
var k = cljs.core.nth.call(null,vec__37311,(0),null);
var plugin = cljs.core.nth.call(null,vec__37311,(1),null);
if(cljs.core.truth_(plugin)){
var pl_37323 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__37304,chunk__37305,count__37306,i__37307,pl_37323,vec__37311,k,plugin,seq__37304__$1,temp__4657__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_37323.call(null,msg_hist);
});})(seq__37304,chunk__37305,count__37306,i__37307,pl_37323,vec__37311,k,plugin,seq__37304__$1,temp__4657__auto__))
);
} else {
}

var G__37324 = cljs.core.next.call(null,seq__37304__$1);
var G__37325 = null;
var G__37326 = (0);
var G__37327 = (0);
seq__37304 = G__37324;
chunk__37305 = G__37325;
count__37306 = G__37326;
i__37307 = G__37327;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(var_args){
var G__37329 = arguments.length;
switch (G__37329) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if(typeof figwheel.client.__figwheel_start_once__ !== 'undefined'){
return null;
} else {
return (
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.fill_url_template.call(null,figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370)))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.enable_repl_print_BANG_.call(null);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

var seq__37330_37335 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__37331_37336 = null;
var count__37332_37337 = (0);
var i__37333_37338 = (0);
while(true){
if((i__37333_37338 < count__37332_37337)){
var msg_37339 = cljs.core._nth.call(null,chunk__37331_37336,i__37333_37338);
figwheel.client.socket.handle_incoming_message.call(null,msg_37339);

var G__37340 = seq__37330_37335;
var G__37341 = chunk__37331_37336;
var G__37342 = count__37332_37337;
var G__37343 = (i__37333_37338 + (1));
seq__37330_37335 = G__37340;
chunk__37331_37336 = G__37341;
count__37332_37337 = G__37342;
i__37333_37338 = G__37343;
continue;
} else {
var temp__4657__auto___37344 = cljs.core.seq.call(null,seq__37330_37335);
if(temp__4657__auto___37344){
var seq__37330_37345__$1 = temp__4657__auto___37344;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37330_37345__$1)){
var c__28891__auto___37346 = cljs.core.chunk_first.call(null,seq__37330_37345__$1);
var G__37347 = cljs.core.chunk_rest.call(null,seq__37330_37345__$1);
var G__37348 = c__28891__auto___37346;
var G__37349 = cljs.core.count.call(null,c__28891__auto___37346);
var G__37350 = (0);
seq__37330_37335 = G__37347;
chunk__37331_37336 = G__37348;
count__37332_37337 = G__37349;
i__37333_37338 = G__37350;
continue;
} else {
var msg_37351 = cljs.core.first.call(null,seq__37330_37345__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_37351);

var G__37352 = cljs.core.next.call(null,seq__37330_37345__$1);
var G__37353 = null;
var G__37354 = (0);
var G__37355 = (0);
seq__37330_37335 = G__37352;
chunk__37331_37336 = G__37353;
count__37332_37337 = G__37354;
i__37333_37338 = G__37355;
continue;
}
} else {
}
}
break;
}

return figwheel.client.socket.open.call(null,system_options);
})))
;
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;

figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(var_args){
var args__29230__auto__ = [];
var len__29223__auto___37360 = arguments.length;
var i__29224__auto___37361 = (0);
while(true){
if((i__29224__auto___37361 < len__29223__auto___37360)){
args__29230__auto__.push((arguments[i__29224__auto___37361]));

var G__37362 = (i__29224__auto___37361 + (1));
i__29224__auto___37361 = G__37362;
continue;
} else {
}
break;
}

var argseq__29231__auto__ = ((((0) < args__29230__auto__.length))?(new cljs.core.IndexedSeq(args__29230__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__29231__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__37357){
var map__37358 = p__37357;
var map__37358__$1 = ((((!((map__37358 == null)))?((((map__37358.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37358.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37358):map__37358);
var opts = map__37358__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq37356){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37356));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e37363){if((e37363 instanceof Error)){
var e = e37363;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e37363;

}
}});
figwheel.client.console_intro_message = "Figwheel has compiled a temporary helper application to your :output-file.\n\nThe code currently in your configured output file does not\nrepresent the code that you are trying to compile.\n\nThis temporary application is intended to help you continue to get\nfeedback from Figwheel until the build you are working on compiles\ncorrectly.\n\nWhen your ClojureScript source code compiles correctly this helper\napplication will auto-reload and pick up your freshly compiled\nClojureScript program.";
figwheel.client.bad_compile_helper_app = (function figwheel$client$bad_compile_helper_app(){
cljs.core.enable_console_print_BANG_.call(null);

var config = figwheel.client.fetch_data_from_env.call(null);
cljs.core.println.call(null,figwheel.client.console_intro_message);

figwheel.client.heads_up.bad_compile_screen.call(null);

if(cljs.core.truth_(goog.dependencies_)){
} else {
goog.dependencies_ = true;
}

figwheel.client.start.call(null,config);

return figwheel.client.add_message_watch.call(null,new cljs.core.Keyword(null,"listen-for-successful-compile","listen-for-successful-compile",-995277603),((function (config){
return (function (p__37364){
var map__37365 = p__37364;
var map__37365__$1 = ((((!((map__37365 == null)))?((((map__37365.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37365.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37365):map__37365);
var msg_name = cljs.core.get.call(null,map__37365__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map?rel=1507552551502
