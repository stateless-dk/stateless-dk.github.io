// Compiled by ClojureScript 1.9.946 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('figwheel.client.utils');
goog.require('goog.Uri');
goog.require('goog.string');
goog.require('goog.object');
goog.require('goog.net.jsloader');
goog.require('goog.html.legacyconversions');
goog.require('clojure.string');
goog.require('clojure.set');
goog.require('cljs.core.async');
goog.require('goog.async.Deferred');
if(typeof figwheel.client.file_reloading.figwheel_meta_pragmas !== 'undefined'){
} else {
figwheel.client.file_reloading.figwheel_meta_pragmas = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.on_cssload_custom_event = (function figwheel$client$file_reloading$on_cssload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.css-reload",files);
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__28052__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string')) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__28052__auto__){
return or__28052__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.name__GT_path = (function figwheel$client$file_reloading$name__GT_path(ns){

return goog.object.get(goog.dependencies_.nameToPath,ns);
});
figwheel.client.file_reloading.provided_QMARK_ = (function figwheel$client$file_reloading$provided_QMARK_(ns){
return goog.object.get(goog.dependencies_.written,figwheel.client.file_reloading.name__GT_path.call(null,ns));
});
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(name){
var or__28052__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, ["cljs.nodejs",null,"goog",null,"cljs.core",null], null), null).call(null,name);
if(cljs.core.truth_(or__28052__auto__)){
return or__28052__auto__;
} else {
var or__28052__auto____$1 = goog.string.startsWith("clojure.",name);
if(cljs.core.truth_(or__28052__auto____$1)){
return or__28052__auto____$1;
} else {
return goog.string.startsWith("goog.",name);
}
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__35130_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__35130_SHARP_));
}),goog.object.getKeys(goog.object.get(goog.dependencies_.requires,figwheel.client.file_reloading.name__GT_path.call(null,ns)))));
});
if(typeof figwheel.client.file_reloading.dependency_data !== 'undefined'){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = (function figwheel$client$file_reloading$path_to_name_BANG_(path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.createAsIfByAssoc([name]));
});
/**
 * Setup a path to name dependencies map.
 * That goes from path -> #{ ns-names }
 */
figwheel.client.file_reloading.setup_path__GT_name_BANG_ = (function figwheel$client$file_reloading$setup_path__GT_name_BANG_(){
var nameToPath = goog.object.filter(goog.dependencies_.nameToPath,(function (v,k,o){
return goog.string.startsWith(v,"../");
}));
return goog.object.forEach(nameToPath,((function (nameToPath){
return (function (v,k,o){
return figwheel.client.file_reloading.path_to_name_BANG_.call(null,v,k);
});})(nameToPath))
);
});
/**
 * returns a set of namespaces defined by a path
 */
figwheel.client.file_reloading.path__GT_name = (function figwheel$client$file_reloading$path__GT_name(path){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null));
});
figwheel.client.file_reloading.name_to_parent_BANG_ = (function figwheel$client$file_reloading$name_to_parent_BANG_(ns,parent_ns){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.createAsIfByAssoc([parent_ns]));
});
/**
 * This reverses the goog.dependencies_.requires for looking up ns-dependents.
 */
figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_ = (function figwheel$client$file_reloading$setup_ns__GT_dependents_BANG_(){
var requires = goog.object.filter(goog.dependencies_.requires,(function (v,k,o){
return goog.string.startsWith(k,"../");
}));
return goog.object.forEach(requires,((function (requires){
return (function (v,k,_){
return goog.object.forEach(v,((function (requires){
return (function (v_SINGLEQUOTE_,k_SINGLEQUOTE_,___$1){
var seq__35131 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__35132 = null;
var count__35133 = (0);
var i__35134 = (0);
while(true){
if((i__35134 < count__35133)){
var n = cljs.core._nth.call(null,chunk__35132,i__35134);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__35135 = seq__35131;
var G__35136 = chunk__35132;
var G__35137 = count__35133;
var G__35138 = (i__35134 + (1));
seq__35131 = G__35135;
chunk__35132 = G__35136;
count__35133 = G__35137;
i__35134 = G__35138;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__35131);
if(temp__4657__auto__){
var seq__35131__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35131__$1)){
var c__28891__auto__ = cljs.core.chunk_first.call(null,seq__35131__$1);
var G__35139 = cljs.core.chunk_rest.call(null,seq__35131__$1);
var G__35140 = c__28891__auto__;
var G__35141 = cljs.core.count.call(null,c__28891__auto__);
var G__35142 = (0);
seq__35131 = G__35139;
chunk__35132 = G__35140;
count__35133 = G__35141;
i__35134 = G__35142;
continue;
} else {
var n = cljs.core.first.call(null,seq__35131__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__35143 = cljs.core.next.call(null,seq__35131__$1);
var G__35144 = null;
var G__35145 = (0);
var G__35146 = (0);
seq__35131 = G__35143;
chunk__35132 = G__35144;
count__35133 = G__35145;
i__35134 = G__35146;
continue;
}
} else {
return null;
}
}
break;
}
});})(requires))
);
});})(requires))
);
});
figwheel.client.file_reloading.ns__GT_dependents = (function figwheel$client$file_reloading$ns__GT_dependents(ns){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null));
});
figwheel.client.file_reloading.in_upper_level_QMARK_ = (function figwheel$client$file_reloading$in_upper_level_QMARK_(topo_state,current_depth,dep){
return cljs.core.some.call(null,(function (p__35147){
var vec__35148 = p__35147;
var _ = cljs.core.nth.call(null,vec__35148,(0),null);
var v = cljs.core.nth.call(null,vec__35148,(1),null);
var and__28040__auto__ = v;
if(cljs.core.truth_(and__28040__auto__)){
return v.call(null,dep);
} else {
return and__28040__auto__;
}
}),cljs.core.filter.call(null,(function (p__35151){
var vec__35152 = p__35151;
var k = cljs.core.nth.call(null,vec__35152,(0),null);
var v = cljs.core.nth.call(null,vec__35152,(1),null);
return (k > current_depth);
}),topo_state));
});
figwheel.client.file_reloading.build_topo_sort = (function figwheel$client$file_reloading$build_topo_sort(get_deps){
var get_deps__$1 = cljs.core.memoize.call(null,get_deps);
var topo_sort_helper_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_topo_sort_helper_STAR_(x,depth,state){
var deps = get_deps__$1.call(null,x);
if(cljs.core.empty_QMARK_.call(null,deps)){
return null;
} else {
return topo_sort_STAR_.call(null,deps,depth,state);
}
});})(get_deps__$1))
;
var topo_sort_STAR_ = ((function (get_deps__$1){
return (function() {
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = null;
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1 = (function (deps){
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.call(null,deps,(0),cljs.core.atom.call(null,cljs.core.sorted_map.call(null)));
});
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3 = (function (deps,depth,state){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentHashSet.EMPTY),deps);

var seq__35164_35172 = cljs.core.seq.call(null,deps);
var chunk__35165_35173 = null;
var count__35166_35174 = (0);
var i__35167_35175 = (0);
while(true){
if((i__35167_35175 < count__35166_35174)){
var dep_35176 = cljs.core._nth.call(null,chunk__35165_35173,i__35167_35175);
if(cljs.core.truth_((function (){var and__28040__auto__ = dep_35176;
if(cljs.core.truth_(and__28040__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_35176));
} else {
return and__28040__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_35176,(depth + (1)),state);
} else {
}

var G__35177 = seq__35164_35172;
var G__35178 = chunk__35165_35173;
var G__35179 = count__35166_35174;
var G__35180 = (i__35167_35175 + (1));
seq__35164_35172 = G__35177;
chunk__35165_35173 = G__35178;
count__35166_35174 = G__35179;
i__35167_35175 = G__35180;
continue;
} else {
var temp__4657__auto___35181 = cljs.core.seq.call(null,seq__35164_35172);
if(temp__4657__auto___35181){
var seq__35164_35182__$1 = temp__4657__auto___35181;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35164_35182__$1)){
var c__28891__auto___35183 = cljs.core.chunk_first.call(null,seq__35164_35182__$1);
var G__35184 = cljs.core.chunk_rest.call(null,seq__35164_35182__$1);
var G__35185 = c__28891__auto___35183;
var G__35186 = cljs.core.count.call(null,c__28891__auto___35183);
var G__35187 = (0);
seq__35164_35172 = G__35184;
chunk__35165_35173 = G__35185;
count__35166_35174 = G__35186;
i__35167_35175 = G__35187;
continue;
} else {
var dep_35188 = cljs.core.first.call(null,seq__35164_35182__$1);
if(cljs.core.truth_((function (){var and__28040__auto__ = dep_35188;
if(cljs.core.truth_(and__28040__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_35188));
} else {
return and__28040__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_35188,(depth + (1)),state);
} else {
}

var G__35189 = cljs.core.next.call(null,seq__35164_35182__$1);
var G__35190 = null;
var G__35191 = (0);
var G__35192 = (0);
seq__35164_35172 = G__35189;
chunk__35165_35173 = G__35190;
count__35166_35174 = G__35191;
i__35167_35175 = G__35192;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,depth,(0))){
return elim_dups_STAR_.call(null,cljs.core.reverse.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,state))));
} else {
return null;
}
});
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = function(deps,depth,state){
switch(arguments.length){
case 1:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1.call(this,deps);
case 3:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3.call(this,deps,depth,state);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1;
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$3 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3;
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_;
})()
;})(get_deps__$1))
;
var elim_dups_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__35168){
var vec__35169 = p__35168;
var seq__35170 = cljs.core.seq.call(null,vec__35169);
var first__35171 = cljs.core.first.call(null,seq__35170);
var seq__35170__$1 = cljs.core.next.call(null,seq__35170);
var x = first__35171;
var xs = seq__35170__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__35169,seq__35170,first__35171,seq__35170__$1,x,xs,get_deps__$1){
return (function (p1__35155_SHARP_){
return clojure.set.difference.call(null,p1__35155_SHARP_,x);
});})(vec__35169,seq__35170,first__35171,seq__35170__$1,x,xs,get_deps__$1))
,xs)));
}
});})(get_deps__$1))
;
return topo_sort_STAR_;
});
figwheel.client.file_reloading.get_all_dependencies = (function figwheel$client$file_reloading$get_all_dependencies(ns){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.get_requires);
return cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns], null))));
});
figwheel.client.file_reloading.get_all_dependents = (function figwheel$client$file_reloading$get_all_dependents(nss){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.ns__GT_dependents);
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,figwheel.client.file_reloading.immutable_ns_QMARK_),cljs.core.reverse.call(null,cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,nss)))));
});
figwheel.client.file_reloading.unprovide_BANG_ = (function figwheel$client$file_reloading$unprovide_BANG_(ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.dependencies_.visited,path);

goog.object.remove(goog.dependencies_.written,path);

return goog.object.remove(goog.dependencies_.written,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(path)].join(''));
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_reloading.name__GT_path.call(null,ns))].join('');
});
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__35193 = cljs.core.seq.call(null,provides);
var chunk__35194 = null;
var count__35195 = (0);
var i__35196 = (0);
while(true){
if((i__35196 < count__35195)){
var prov = cljs.core._nth.call(null,chunk__35194,i__35196);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__35197_35205 = cljs.core.seq.call(null,requires);
var chunk__35198_35206 = null;
var count__35199_35207 = (0);
var i__35200_35208 = (0);
while(true){
if((i__35200_35208 < count__35199_35207)){
var req_35209 = cljs.core._nth.call(null,chunk__35198_35206,i__35200_35208);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_35209,prov);

var G__35210 = seq__35197_35205;
var G__35211 = chunk__35198_35206;
var G__35212 = count__35199_35207;
var G__35213 = (i__35200_35208 + (1));
seq__35197_35205 = G__35210;
chunk__35198_35206 = G__35211;
count__35199_35207 = G__35212;
i__35200_35208 = G__35213;
continue;
} else {
var temp__4657__auto___35214 = cljs.core.seq.call(null,seq__35197_35205);
if(temp__4657__auto___35214){
var seq__35197_35215__$1 = temp__4657__auto___35214;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35197_35215__$1)){
var c__28891__auto___35216 = cljs.core.chunk_first.call(null,seq__35197_35215__$1);
var G__35217 = cljs.core.chunk_rest.call(null,seq__35197_35215__$1);
var G__35218 = c__28891__auto___35216;
var G__35219 = cljs.core.count.call(null,c__28891__auto___35216);
var G__35220 = (0);
seq__35197_35205 = G__35217;
chunk__35198_35206 = G__35218;
count__35199_35207 = G__35219;
i__35200_35208 = G__35220;
continue;
} else {
var req_35221 = cljs.core.first.call(null,seq__35197_35215__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_35221,prov);

var G__35222 = cljs.core.next.call(null,seq__35197_35215__$1);
var G__35223 = null;
var G__35224 = (0);
var G__35225 = (0);
seq__35197_35205 = G__35222;
chunk__35198_35206 = G__35223;
count__35199_35207 = G__35224;
i__35200_35208 = G__35225;
continue;
}
} else {
}
}
break;
}

var G__35226 = seq__35193;
var G__35227 = chunk__35194;
var G__35228 = count__35195;
var G__35229 = (i__35196 + (1));
seq__35193 = G__35226;
chunk__35194 = G__35227;
count__35195 = G__35228;
i__35196 = G__35229;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__35193);
if(temp__4657__auto__){
var seq__35193__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35193__$1)){
var c__28891__auto__ = cljs.core.chunk_first.call(null,seq__35193__$1);
var G__35230 = cljs.core.chunk_rest.call(null,seq__35193__$1);
var G__35231 = c__28891__auto__;
var G__35232 = cljs.core.count.call(null,c__28891__auto__);
var G__35233 = (0);
seq__35193 = G__35230;
chunk__35194 = G__35231;
count__35195 = G__35232;
i__35196 = G__35233;
continue;
} else {
var prov = cljs.core.first.call(null,seq__35193__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__35201_35234 = cljs.core.seq.call(null,requires);
var chunk__35202_35235 = null;
var count__35203_35236 = (0);
var i__35204_35237 = (0);
while(true){
if((i__35204_35237 < count__35203_35236)){
var req_35238 = cljs.core._nth.call(null,chunk__35202_35235,i__35204_35237);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_35238,prov);

var G__35239 = seq__35201_35234;
var G__35240 = chunk__35202_35235;
var G__35241 = count__35203_35236;
var G__35242 = (i__35204_35237 + (1));
seq__35201_35234 = G__35239;
chunk__35202_35235 = G__35240;
count__35203_35236 = G__35241;
i__35204_35237 = G__35242;
continue;
} else {
var temp__4657__auto___35243__$1 = cljs.core.seq.call(null,seq__35201_35234);
if(temp__4657__auto___35243__$1){
var seq__35201_35244__$1 = temp__4657__auto___35243__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35201_35244__$1)){
var c__28891__auto___35245 = cljs.core.chunk_first.call(null,seq__35201_35244__$1);
var G__35246 = cljs.core.chunk_rest.call(null,seq__35201_35244__$1);
var G__35247 = c__28891__auto___35245;
var G__35248 = cljs.core.count.call(null,c__28891__auto___35245);
var G__35249 = (0);
seq__35201_35234 = G__35246;
chunk__35202_35235 = G__35247;
count__35203_35236 = G__35248;
i__35204_35237 = G__35249;
continue;
} else {
var req_35250 = cljs.core.first.call(null,seq__35201_35244__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_35250,prov);

var G__35251 = cljs.core.next.call(null,seq__35201_35244__$1);
var G__35252 = null;
var G__35253 = (0);
var G__35254 = (0);
seq__35201_35234 = G__35251;
chunk__35202_35235 = G__35252;
count__35203_35236 = G__35253;
i__35204_35237 = G__35254;
continue;
}
} else {
}
}
break;
}

var G__35255 = cljs.core.next.call(null,seq__35193__$1);
var G__35256 = null;
var G__35257 = (0);
var G__35258 = (0);
seq__35193 = G__35255;
chunk__35194 = G__35256;
count__35195 = G__35257;
i__35196 = G__35258;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.file_reloading.figwheel_require = (function figwheel$client$file_reloading$figwheel_require(src,reload){
goog.require = figwheel.client.file_reloading.figwheel_require;

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__35259_35263 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__35260_35264 = null;
var count__35261_35265 = (0);
var i__35262_35266 = (0);
while(true){
if((i__35262_35266 < count__35261_35265)){
var ns_35267 = cljs.core._nth.call(null,chunk__35260_35264,i__35262_35266);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_35267);

var G__35268 = seq__35259_35263;
var G__35269 = chunk__35260_35264;
var G__35270 = count__35261_35265;
var G__35271 = (i__35262_35266 + (1));
seq__35259_35263 = G__35268;
chunk__35260_35264 = G__35269;
count__35261_35265 = G__35270;
i__35262_35266 = G__35271;
continue;
} else {
var temp__4657__auto___35272 = cljs.core.seq.call(null,seq__35259_35263);
if(temp__4657__auto___35272){
var seq__35259_35273__$1 = temp__4657__auto___35272;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35259_35273__$1)){
var c__28891__auto___35274 = cljs.core.chunk_first.call(null,seq__35259_35273__$1);
var G__35275 = cljs.core.chunk_rest.call(null,seq__35259_35273__$1);
var G__35276 = c__28891__auto___35274;
var G__35277 = cljs.core.count.call(null,c__28891__auto___35274);
var G__35278 = (0);
seq__35259_35263 = G__35275;
chunk__35260_35264 = G__35276;
count__35261_35265 = G__35277;
i__35262_35266 = G__35278;
continue;
} else {
var ns_35279 = cljs.core.first.call(null,seq__35259_35273__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_35279);

var G__35280 = cljs.core.next.call(null,seq__35259_35273__$1);
var G__35281 = null;
var G__35282 = (0);
var G__35283 = (0);
seq__35259_35263 = G__35280;
chunk__35260_35264 = G__35281;
count__35261_35265 = G__35282;
i__35262_35266 = G__35283;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(reload)){
figwheel.client.file_reloading.unprovide_BANG_.call(null,src);
} else {
}

return goog.require_figwheel_backup_(src);
});
/**
 * Reusable browser REPL bootstrapping. Patches the essential functions
 *   in goog.base to support re-loading of namespaces after page load.
 */
figwheel.client.file_reloading.bootstrap_goog_base = (function figwheel$client$file_reloading$bootstrap_goog_base(){
if(cljs.core.truth_(COMPILED)){
return null;
} else {
goog.require_figwheel_backup_ = (function (){var or__28052__auto__ = goog.require__;
if(cljs.core.truth_(or__28052__auto__)){
return or__28052__auto__;
} else {
return goog.require;
}
})();

goog.isProvided_ = (function (name){
return false;
});

figwheel.client.file_reloading.setup_path__GT_name_BANG_.call(null);

figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_.call(null);

goog.addDependency_figwheel_backup_ = goog.addDependency;

goog.addDependency = (function() { 
var G__35284__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__35284 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__35285__i = 0, G__35285__a = new Array(arguments.length -  0);
while (G__35285__i < G__35285__a.length) {G__35285__a[G__35285__i] = arguments[G__35285__i + 0]; ++G__35285__i;}
  args = new cljs.core.IndexedSeq(G__35285__a,0,null);
} 
return G__35284__delegate.call(this,args);};
G__35284.cljs$lang$maxFixedArity = 0;
G__35284.cljs$lang$applyTo = (function (arglist__35286){
var args = cljs.core.seq(arglist__35286);
return G__35284__delegate(args);
});
G__35284.cljs$core$IFn$_invoke$arity$variadic = G__35284__delegate;
return G__35284;
})()
;

goog.constructNamespace_("cljs.user");

goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.queued_file_reload;

return goog.require = figwheel.client.file_reloading.figwheel_require;
}
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
if(typeof figwheel.client.file_reloading.bootstrapped_cljs !== 'undefined'){
return null;
} else {
return (
figwheel.client.file_reloading.bootstrapped_cljs = (function (){
figwheel.client.file_reloading.bootstrap_goog_base.call(null);

return true;
})()
)
;
}
});
figwheel.client.file_reloading.gloader = ((typeof goog.net.jsloader.safeLoad !== 'undefined')?(function (p1__35287_SHARP_,p2__35288_SHARP_){
return goog.net.jsloader.safeLoad(goog.html.legacyconversions.trustedResourceUrlFromString([cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__35287_SHARP_)].join('')),p2__35288_SHARP_);
}):((typeof goog.net.jsloader.load !== 'undefined')?(function (p1__35289_SHARP_,p2__35290_SHARP_){
return goog.net.jsloader.load([cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__35289_SHARP_)].join(''),p2__35290_SHARP_);
}):(function(){throw cljs.core.ex_info.call(null,"No remote script loading function found.",cljs.core.PersistentArrayMap.EMPTY)})()
));
figwheel.client.file_reloading.reload_file_in_html_env = (function figwheel$client$file_reloading$reload_file_in_html_env(request_url,callback){

var G__35291 = figwheel.client.file_reloading.gloader.call(null,figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
G__35291.addCallback(((function (G__35291){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(G__35291))
);

G__35291.addErrback(((function (G__35291){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(G__35291))
);

return G__35291;
});
figwheel.client.file_reloading.write_script_tag_import = figwheel.client.file_reloading.reload_file_in_html_env;
goog.exportSymbol('figwheel.client.file_reloading.write_script_tag_import', figwheel.client.file_reloading.write_script_tag_import);
figwheel.client.file_reloading.worker_import_script = (function figwheel$client$file_reloading$worker_import_script(request_url,callback){

return callback.call(null,(function (){try{self.importScripts(figwheel.client.file_reloading.add_cache_buster.call(null,request_url));

return true;
}catch (e35292){if((e35292 instanceof Error)){
var e = e35292;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e35292;

}
}})());
});
goog.exportSymbol('figwheel.client.file_reloading.worker_import_script', figwheel.client.file_reloading.worker_import_script);
figwheel.client.file_reloading.create_node_script_import_fn = (function figwheel$client$file_reloading$create_node_script_import_fn(){
var node_path_lib = require("path");
var util_pattern = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.sep),cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.join("goog","bootstrap","nodejs.js"))].join('');
var util_path = goog.object.findKey(require.cache,((function (node_path_lib,util_pattern){
return (function (v,k,o){
return goog.string.endsWith(k,util_pattern);
});})(node_path_lib,util_pattern))
);
var parts = cljs.core.pop.call(null,cljs.core.pop.call(null,clojure.string.split.call(null,util_path,/[\/\\]/)));
var root_path = clojure.string.join.call(null,node_path_lib.sep,parts);
return ((function (node_path_lib,util_pattern,util_path,parts,root_path){
return (function (request_url,callback){

var cache_path = node_path_lib.resolve(root_path,request_url);
goog.object.remove(require.cache,cache_path);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e35293){if((e35293 instanceof Error)){
var e = e35293;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e35293;

}
}})());
});
;})(node_path_lib,util_pattern,util_path,parts,root_path))
});
goog.exportSymbol('figwheel.client.file_reloading.create_node_script_import_fn', figwheel.client.file_reloading.create_node_script_import_fn);
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__35294 = cljs.core._EQ_;
var expr__35295 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__35294.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__35295))){
return figwheel.client.file_reloading.create_node_script_import_fn.call(null);
} else {
if(cljs.core.truth_(pred__35294.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__35295))){
return figwheel.client.file_reloading.write_script_tag_import;
} else {
if(cljs.core.truth_(pred__35294.call(null,new cljs.core.Keyword(null,"worker","worker",938239996),expr__35295))){
return figwheel.client.file_reloading.worker_import_script;
} else {
return ((function (pred__35294,expr__35295){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__35294,expr__35295))
}
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__35297,callback){
var map__35298 = p__35297;
var map__35298__$1 = ((((!((map__35298 == null)))?((((map__35298.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35298.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35298):map__35298);
var file_msg = map__35298__$1;
var request_url = cljs.core.get.call(null,map__35298__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,["FigWheel: Attempting to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return (function (){var or__28052__auto__ = goog.object.get(goog.global,"FIGWHEEL_IMPORT_SCRIPT");
if(cljs.core.truth_(or__28052__auto__)){
return or__28052__auto__;
} else {
return figwheel.client.file_reloading.reload_file_STAR_;
}
})().call(null,request_url,((function (map__35298,map__35298__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,["FigWheel: Successfully loaded ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__35298,map__35298__$1,file_msg,request_url))
);
});
if(typeof figwheel.client.file_reloading.reload_chan !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_chan = cljs.core.async.chan.call(null);
}
if(typeof figwheel.client.file_reloading.on_load_callbacks !== 'undefined'){
} else {
figwheel.client.file_reloading.on_load_callbacks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if(typeof figwheel.client.file_reloading.dependencies_loaded !== 'undefined'){
} else {
figwheel.client.file_reloading.dependencies_loaded = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
figwheel.client.file_reloading.blocking_load = (function figwheel$client$file_reloading$blocking_load(url){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.reload_file.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-url","request-url",2100346596),url], null),((function (out){
return (function (file_msg){
cljs.core.async.put_BANG_.call(null,out,file_msg);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
if(typeof figwheel.client.file_reloading.reloader_loop !== 'undefined'){
} else {
figwheel.client.file_reloading.reloader_loop = (function (){var c__31773__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31773__auto__){
return (function (){
var f__31774__auto__ = (function (){var switch__31685__auto__ = ((function (c__31773__auto__){
return (function (state_35338){
var state_val_35339 = (state_35338[(1)]);
if((state_val_35339 === (7))){
var inst_35334 = (state_35338[(2)]);
var state_35338__$1 = state_35338;
var statearr_35340_35367 = state_35338__$1;
(statearr_35340_35367[(2)] = inst_35334);

(statearr_35340_35367[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35339 === (1))){
var state_35338__$1 = state_35338;
var statearr_35341_35368 = state_35338__$1;
(statearr_35341_35368[(2)] = null);

(statearr_35341_35368[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35339 === (4))){
var inst_35302 = (state_35338[(7)]);
var inst_35302__$1 = (state_35338[(2)]);
var state_35338__$1 = (function (){var statearr_35342 = state_35338;
(statearr_35342[(7)] = inst_35302__$1);

return statearr_35342;
})();
if(cljs.core.truth_(inst_35302__$1)){
var statearr_35343_35369 = state_35338__$1;
(statearr_35343_35369[(1)] = (5));

} else {
var statearr_35344_35370 = state_35338__$1;
(statearr_35344_35370[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35339 === (15))){
var inst_35319 = (state_35338[(8)]);
var inst_35316 = (state_35338[(9)]);
var inst_35321 = inst_35319.call(null,inst_35316);
var state_35338__$1 = state_35338;
var statearr_35345_35371 = state_35338__$1;
(statearr_35345_35371[(2)] = inst_35321);

(statearr_35345_35371[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35339 === (13))){
var inst_35328 = (state_35338[(2)]);
var state_35338__$1 = state_35338;
var statearr_35346_35372 = state_35338__$1;
(statearr_35346_35372[(2)] = inst_35328);

(statearr_35346_35372[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35339 === (6))){
var state_35338__$1 = state_35338;
var statearr_35347_35373 = state_35338__$1;
(statearr_35347_35373[(2)] = null);

(statearr_35347_35373[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35339 === (17))){
var inst_35325 = (state_35338[(2)]);
var state_35338__$1 = state_35338;
var statearr_35348_35374 = state_35338__$1;
(statearr_35348_35374[(2)] = inst_35325);

(statearr_35348_35374[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35339 === (3))){
var inst_35336 = (state_35338[(2)]);
var state_35338__$1 = state_35338;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35338__$1,inst_35336);
} else {
if((state_val_35339 === (12))){
var state_35338__$1 = state_35338;
var statearr_35349_35375 = state_35338__$1;
(statearr_35349_35375[(2)] = null);

(statearr_35349_35375[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35339 === (2))){
var state_35338__$1 = state_35338;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35338__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_35339 === (11))){
var inst_35307 = (state_35338[(10)]);
var inst_35314 = figwheel.client.file_reloading.blocking_load.call(null,inst_35307);
var state_35338__$1 = state_35338;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35338__$1,(14),inst_35314);
} else {
if((state_val_35339 === (9))){
var inst_35307 = (state_35338[(10)]);
var state_35338__$1 = state_35338;
if(cljs.core.truth_(inst_35307)){
var statearr_35350_35376 = state_35338__$1;
(statearr_35350_35376[(1)] = (11));

} else {
var statearr_35351_35377 = state_35338__$1;
(statearr_35351_35377[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35339 === (5))){
var inst_35308 = (state_35338[(11)]);
var inst_35302 = (state_35338[(7)]);
var inst_35307 = cljs.core.nth.call(null,inst_35302,(0),null);
var inst_35308__$1 = cljs.core.nth.call(null,inst_35302,(1),null);
var state_35338__$1 = (function (){var statearr_35352 = state_35338;
(statearr_35352[(10)] = inst_35307);

(statearr_35352[(11)] = inst_35308__$1);

return statearr_35352;
})();
if(cljs.core.truth_(inst_35308__$1)){
var statearr_35353_35378 = state_35338__$1;
(statearr_35353_35378[(1)] = (8));

} else {
var statearr_35354_35379 = state_35338__$1;
(statearr_35354_35379[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35339 === (14))){
var inst_35307 = (state_35338[(10)]);
var inst_35319 = (state_35338[(8)]);
var inst_35316 = (state_35338[(2)]);
var inst_35317 = console.log("Loading!",inst_35307);
var inst_35318 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_35319__$1 = cljs.core.get.call(null,inst_35318,inst_35307);
var state_35338__$1 = (function (){var statearr_35355 = state_35338;
(statearr_35355[(12)] = inst_35317);

(statearr_35355[(8)] = inst_35319__$1);

(statearr_35355[(9)] = inst_35316);

return statearr_35355;
})();
if(cljs.core.truth_(inst_35319__$1)){
var statearr_35356_35380 = state_35338__$1;
(statearr_35356_35380[(1)] = (15));

} else {
var statearr_35357_35381 = state_35338__$1;
(statearr_35357_35381[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35339 === (16))){
var inst_35316 = (state_35338[(9)]);
var inst_35323 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_35316);
var state_35338__$1 = state_35338;
var statearr_35358_35382 = state_35338__$1;
(statearr_35358_35382[(2)] = inst_35323);

(statearr_35358_35382[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35339 === (10))){
var inst_35330 = (state_35338[(2)]);
var state_35338__$1 = (function (){var statearr_35359 = state_35338;
(statearr_35359[(13)] = inst_35330);

return statearr_35359;
})();
var statearr_35360_35383 = state_35338__$1;
(statearr_35360_35383[(2)] = null);

(statearr_35360_35383[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35339 === (8))){
var inst_35308 = (state_35338[(11)]);
var inst_35310 = console.log("Evaling!",inst_35308);
var inst_35311 = eval(inst_35308);
var state_35338__$1 = (function (){var statearr_35361 = state_35338;
(statearr_35361[(14)] = inst_35310);

return statearr_35361;
})();
var statearr_35362_35384 = state_35338__$1;
(statearr_35362_35384[(2)] = inst_35311);

(statearr_35362_35384[(1)] = (10));


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
});})(c__31773__auto__))
;
return ((function (switch__31685__auto__,c__31773__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__31686__auto__ = null;
var figwheel$client$file_reloading$state_machine__31686__auto____0 = (function (){
var statearr_35363 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35363[(0)] = figwheel$client$file_reloading$state_machine__31686__auto__);

(statearr_35363[(1)] = (1));

return statearr_35363;
});
var figwheel$client$file_reloading$state_machine__31686__auto____1 = (function (state_35338){
while(true){
var ret_value__31687__auto__ = (function (){try{while(true){
var result__31688__auto__ = switch__31685__auto__.call(null,state_35338);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31688__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31688__auto__;
}
break;
}
}catch (e35364){if((e35364 instanceof Object)){
var ex__31689__auto__ = e35364;
var statearr_35365_35385 = state_35338;
(statearr_35365_35385[(5)] = ex__31689__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35338);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35364;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31687__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35386 = state_35338;
state_35338 = G__35386;
continue;
} else {
return ret_value__31687__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__31686__auto__ = function(state_35338){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__31686__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__31686__auto____1.call(this,state_35338);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$state_machine__31686__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__31686__auto____0;
figwheel$client$file_reloading$state_machine__31686__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__31686__auto____1;
return figwheel$client$file_reloading$state_machine__31686__auto__;
})()
;})(switch__31685__auto__,c__31773__auto__))
})();
var state__31775__auto__ = (function (){var statearr_35366 = f__31774__auto__.call(null);
(statearr_35366[(6)] = c__31773__auto__);

return statearr_35366;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31775__auto__);
});})(c__31773__auto__))
);

return c__31773__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(var_args){
var G__35388 = arguments.length;
switch (G__35388) {
case 1:
return figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$1 = (function (url){
return figwheel.client.file_reloading.queued_file_reload.call(null,url,null);
});

figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$2 = (function (url,opt_source_text){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [url,opt_source_text], null));
});

figwheel.client.file_reloading.queued_file_reload.cljs$lang$maxFixedArity = 2;

figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__35390,callback){
var map__35391 = p__35390;
var map__35391__$1 = ((((!((map__35391 == null)))?((((map__35391.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35391.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35391):map__35391);
var file_msg = map__35391__$1;
var namespace = cljs.core.get.call(null,map__35391__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__35391,map__35391__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__35391,map__35391__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.figwheel_no_load_QMARK_ = (function figwheel$client$file_reloading$figwheel_no_load_QMARK_(p__35393){
var map__35394 = p__35393;
var map__35394__$1 = ((((!((map__35394 == null)))?((((map__35394.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35394.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35394):map__35394);
var file_msg = map__35394__$1;
var namespace = cljs.core.get.call(null,map__35394__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__35396){
var map__35397 = p__35396;
var map__35397__$1 = ((((!((map__35397 == null)))?((((map__35397.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35397.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35397):map__35397);
var file_msg = map__35397__$1;
var namespace = cljs.core.get.call(null,map__35397__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__28040__auto__ = cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,file_msg));
if(and__28040__auto__){
var or__28052__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__28052__auto__)){
return or__28052__auto__;
} else {
var or__28052__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__28052__auto____$1)){
return or__28052__auto____$1;
} else {
return figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
}
}
} else {
return and__28040__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__35399,callback){
var map__35400 = p__35399;
var map__35400__$1 = ((((!((map__35400 == null)))?((((map__35400.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35400.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35400):map__35400);
var file_msg = map__35400__$1;
var request_url = cljs.core.get.call(null,map__35400__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__35400__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,["Figwheel: Not trying to load file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__31773__auto___35450 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31773__auto___35450,out){
return (function (){
var f__31774__auto__ = (function (){var switch__31685__auto__ = ((function (c__31773__auto___35450,out){
return (function (state_35435){
var state_val_35436 = (state_35435[(1)]);
if((state_val_35436 === (1))){
var inst_35409 = cljs.core.seq.call(null,files);
var inst_35410 = cljs.core.first.call(null,inst_35409);
var inst_35411 = cljs.core.next.call(null,inst_35409);
var inst_35412 = files;
var state_35435__$1 = (function (){var statearr_35437 = state_35435;
(statearr_35437[(7)] = inst_35411);

(statearr_35437[(8)] = inst_35412);

(statearr_35437[(9)] = inst_35410);

return statearr_35437;
})();
var statearr_35438_35451 = state_35435__$1;
(statearr_35438_35451[(2)] = null);

(statearr_35438_35451[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35436 === (2))){
var inst_35418 = (state_35435[(10)]);
var inst_35412 = (state_35435[(8)]);
var inst_35417 = cljs.core.seq.call(null,inst_35412);
var inst_35418__$1 = cljs.core.first.call(null,inst_35417);
var inst_35419 = cljs.core.next.call(null,inst_35417);
var inst_35420 = (inst_35418__$1 == null);
var inst_35421 = cljs.core.not.call(null,inst_35420);
var state_35435__$1 = (function (){var statearr_35439 = state_35435;
(statearr_35439[(11)] = inst_35419);

(statearr_35439[(10)] = inst_35418__$1);

return statearr_35439;
})();
if(inst_35421){
var statearr_35440_35452 = state_35435__$1;
(statearr_35440_35452[(1)] = (4));

} else {
var statearr_35441_35453 = state_35435__$1;
(statearr_35441_35453[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35436 === (3))){
var inst_35433 = (state_35435[(2)]);
var state_35435__$1 = state_35435;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35435__$1,inst_35433);
} else {
if((state_val_35436 === (4))){
var inst_35418 = (state_35435[(10)]);
var inst_35423 = figwheel.client.file_reloading.reload_js_file.call(null,inst_35418);
var state_35435__$1 = state_35435;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35435__$1,(7),inst_35423);
} else {
if((state_val_35436 === (5))){
var inst_35429 = cljs.core.async.close_BANG_.call(null,out);
var state_35435__$1 = state_35435;
var statearr_35442_35454 = state_35435__$1;
(statearr_35442_35454[(2)] = inst_35429);

(statearr_35442_35454[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35436 === (6))){
var inst_35431 = (state_35435[(2)]);
var state_35435__$1 = state_35435;
var statearr_35443_35455 = state_35435__$1;
(statearr_35443_35455[(2)] = inst_35431);

(statearr_35443_35455[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35436 === (7))){
var inst_35419 = (state_35435[(11)]);
var inst_35425 = (state_35435[(2)]);
var inst_35426 = cljs.core.async.put_BANG_.call(null,out,inst_35425);
var inst_35412 = inst_35419;
var state_35435__$1 = (function (){var statearr_35444 = state_35435;
(statearr_35444[(12)] = inst_35426);

(statearr_35444[(8)] = inst_35412);

return statearr_35444;
})();
var statearr_35445_35456 = state_35435__$1;
(statearr_35445_35456[(2)] = null);

(statearr_35445_35456[(1)] = (2));


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
});})(c__31773__auto___35450,out))
;
return ((function (switch__31685__auto__,c__31773__auto___35450,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__31686__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__31686__auto____0 = (function (){
var statearr_35446 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35446[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__31686__auto__);

(statearr_35446[(1)] = (1));

return statearr_35446;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__31686__auto____1 = (function (state_35435){
while(true){
var ret_value__31687__auto__ = (function (){try{while(true){
var result__31688__auto__ = switch__31685__auto__.call(null,state_35435);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31688__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31688__auto__;
}
break;
}
}catch (e35447){if((e35447 instanceof Object)){
var ex__31689__auto__ = e35447;
var statearr_35448_35457 = state_35435;
(statearr_35448_35457[(5)] = ex__31689__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35435);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35447;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31687__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35458 = state_35435;
state_35435 = G__35458;
continue;
} else {
return ret_value__31687__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__31686__auto__ = function(state_35435){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__31686__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__31686__auto____1.call(this,state_35435);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__31686__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__31686__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__31686__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__31686__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__31686__auto__;
})()
;})(switch__31685__auto__,c__31773__auto___35450,out))
})();
var state__31775__auto__ = (function (){var statearr_35449 = f__31774__auto__.call(null);
(statearr_35449[(6)] = c__31773__auto___35450);

return statearr_35449;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31775__auto__);
});})(c__31773__auto___35450,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__35459,opts){
var map__35460 = p__35459;
var map__35460__$1 = ((((!((map__35460 == null)))?((((map__35460.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35460.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35460):map__35460);
var eval_body = cljs.core.get.call(null,map__35460__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__35460__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__28040__auto__ = eval_body;
if(cljs.core.truth_(and__28040__auto__)){
return typeof eval_body === 'string';
} else {
return and__28040__auto__;
}
})())){
var code = eval_body;
try{figwheel.client.utils.debug_prn.call(null,["Evaling file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e35462){var e = e35462;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Unable to evaluate ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,cljs.core.partial.call(null,cljs.core.re_matches,/figwheel\.connect.*/),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,((function (deps){
return (function (n){
var temp__4655__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (deps){
return (function (p1__35463_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__35463_SHARP_),n);
});})(deps))
,files));
if(cljs.core.truth_(temp__4655__auto__)){
var file_msg = temp__4655__auto__;
return file_msg;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372),new cljs.core.Keyword(null,"namespace","namespace",-377510372),n], null);
}
});})(deps))
,deps));
});
figwheel.client.file_reloading.sort_files = (function figwheel$client$file_reloading$sort_files(files){
if((cljs.core.count.call(null,files) <= (1))){
return files;
} else {
var keep_files = cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,keep_files,new cljs.core.Keyword(null,"namespace","namespace",-377510372)),figwheel.client.file_reloading.expand_files.call(null,files));
}
});
figwheel.client.file_reloading.get_figwheel_always = (function figwheel$client$file_reloading$get_figwheel_always(){
return cljs.core.map.call(null,(function (p__35464){
var vec__35465 = p__35464;
var k = cljs.core.nth.call(null,vec__35465,(0),null);
var v = cljs.core.nth.call(null,vec__35465,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__35468){
var vec__35469 = p__35468;
var k = cljs.core.nth.call(null,vec__35469,(0),null);
var v = cljs.core.nth.call(null,vec__35469,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__35475,p__35476){
var map__35477 = p__35475;
var map__35477__$1 = ((((!((map__35477 == null)))?((((map__35477.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35477.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35477):map__35477);
var opts = map__35477__$1;
var before_jsload = cljs.core.get.call(null,map__35477__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__35477__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__35477__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__35478 = p__35476;
var map__35478__$1 = ((((!((map__35478 == null)))?((((map__35478.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35478.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35478):map__35478);
var msg = map__35478__$1;
var files = cljs.core.get.call(null,map__35478__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__35478__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__35478__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__31773__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31773__auto__,map__35477,map__35477__$1,opts,before_jsload,on_jsload,reload_dependents,map__35478,map__35478__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__31774__auto__ = (function (){var switch__31685__auto__ = ((function (c__31773__auto__,map__35477,map__35477__$1,opts,before_jsload,on_jsload,reload_dependents,map__35478,map__35478__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_35632){
var state_val_35633 = (state_35632[(1)]);
if((state_val_35633 === (7))){
var inst_35495 = (state_35632[(7)]);
var inst_35492 = (state_35632[(8)]);
var inst_35493 = (state_35632[(9)]);
var inst_35494 = (state_35632[(10)]);
var inst_35500 = cljs.core._nth.call(null,inst_35493,inst_35495);
var inst_35501 = figwheel.client.file_reloading.eval_body.call(null,inst_35500,opts);
var inst_35502 = (inst_35495 + (1));
var tmp35634 = inst_35492;
var tmp35635 = inst_35493;
var tmp35636 = inst_35494;
var inst_35492__$1 = tmp35634;
var inst_35493__$1 = tmp35635;
var inst_35494__$1 = tmp35636;
var inst_35495__$1 = inst_35502;
var state_35632__$1 = (function (){var statearr_35637 = state_35632;
(statearr_35637[(7)] = inst_35495__$1);

(statearr_35637[(8)] = inst_35492__$1);

(statearr_35637[(9)] = inst_35493__$1);

(statearr_35637[(11)] = inst_35501);

(statearr_35637[(10)] = inst_35494__$1);

return statearr_35637;
})();
var statearr_35638_35721 = state_35632__$1;
(statearr_35638_35721[(2)] = null);

(statearr_35638_35721[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35633 === (20))){
var inst_35535 = (state_35632[(12)]);
var inst_35543 = figwheel.client.file_reloading.sort_files.call(null,inst_35535);
var state_35632__$1 = state_35632;
var statearr_35639_35722 = state_35632__$1;
(statearr_35639_35722[(2)] = inst_35543);

(statearr_35639_35722[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35633 === (27))){
var state_35632__$1 = state_35632;
var statearr_35640_35723 = state_35632__$1;
(statearr_35640_35723[(2)] = null);

(statearr_35640_35723[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35633 === (1))){
var inst_35484 = (state_35632[(13)]);
var inst_35481 = before_jsload.call(null,files);
var inst_35482 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_35483 = (function (){return ((function (inst_35484,inst_35481,inst_35482,state_val_35633,c__31773__auto__,map__35477,map__35477__$1,opts,before_jsload,on_jsload,reload_dependents,map__35478,map__35478__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__35472_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__35472_SHARP_);
});
;})(inst_35484,inst_35481,inst_35482,state_val_35633,c__31773__auto__,map__35477,map__35477__$1,opts,before_jsload,on_jsload,reload_dependents,map__35478,map__35478__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_35484__$1 = cljs.core.filter.call(null,inst_35483,files);
var inst_35485 = cljs.core.not_empty.call(null,inst_35484__$1);
var state_35632__$1 = (function (){var statearr_35641 = state_35632;
(statearr_35641[(13)] = inst_35484__$1);

(statearr_35641[(14)] = inst_35481);

(statearr_35641[(15)] = inst_35482);

return statearr_35641;
})();
if(cljs.core.truth_(inst_35485)){
var statearr_35642_35724 = state_35632__$1;
(statearr_35642_35724[(1)] = (2));

} else {
var statearr_35643_35725 = state_35632__$1;
(statearr_35643_35725[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35633 === (24))){
var state_35632__$1 = state_35632;
var statearr_35644_35726 = state_35632__$1;
(statearr_35644_35726[(2)] = null);

(statearr_35644_35726[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35633 === (39))){
var inst_35585 = (state_35632[(16)]);
var state_35632__$1 = state_35632;
var statearr_35645_35727 = state_35632__$1;
(statearr_35645_35727[(2)] = inst_35585);

(statearr_35645_35727[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35633 === (46))){
var inst_35627 = (state_35632[(2)]);
var state_35632__$1 = state_35632;
var statearr_35646_35728 = state_35632__$1;
(statearr_35646_35728[(2)] = inst_35627);

(statearr_35646_35728[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35633 === (4))){
var inst_35529 = (state_35632[(2)]);
var inst_35530 = cljs.core.List.EMPTY;
var inst_35531 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_35530);
var inst_35532 = (function (){return ((function (inst_35529,inst_35530,inst_35531,state_val_35633,c__31773__auto__,map__35477,map__35477__$1,opts,before_jsload,on_jsload,reload_dependents,map__35478,map__35478__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__35473_SHARP_){
var and__28040__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__35473_SHARP_);
if(cljs.core.truth_(and__28040__auto__)){
return (cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__35473_SHARP_))) && (cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,p1__35473_SHARP_)));
} else {
return and__28040__auto__;
}
});
;})(inst_35529,inst_35530,inst_35531,state_val_35633,c__31773__auto__,map__35477,map__35477__$1,opts,before_jsload,on_jsload,reload_dependents,map__35478,map__35478__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_35533 = cljs.core.filter.call(null,inst_35532,files);
var inst_35534 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_35535 = cljs.core.concat.call(null,inst_35533,inst_35534);
var state_35632__$1 = (function (){var statearr_35647 = state_35632;
(statearr_35647[(17)] = inst_35531);

(statearr_35647[(18)] = inst_35529);

(statearr_35647[(12)] = inst_35535);

return statearr_35647;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_35648_35729 = state_35632__$1;
(statearr_35648_35729[(1)] = (16));

} else {
var statearr_35649_35730 = state_35632__$1;
(statearr_35649_35730[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35633 === (15))){
var inst_35519 = (state_35632[(2)]);
var state_35632__$1 = state_35632;
var statearr_35650_35731 = state_35632__$1;
(statearr_35650_35731[(2)] = inst_35519);

(statearr_35650_35731[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35633 === (21))){
var inst_35545 = (state_35632[(19)]);
var inst_35545__$1 = (state_35632[(2)]);
var inst_35546 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_35545__$1);
var state_35632__$1 = (function (){var statearr_35651 = state_35632;
(statearr_35651[(19)] = inst_35545__$1);

return statearr_35651;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35632__$1,(22),inst_35546);
} else {
if((state_val_35633 === (31))){
var inst_35630 = (state_35632[(2)]);
var state_35632__$1 = state_35632;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35632__$1,inst_35630);
} else {
if((state_val_35633 === (32))){
var inst_35585 = (state_35632[(16)]);
var inst_35590 = inst_35585.cljs$lang$protocol_mask$partition0$;
var inst_35591 = (inst_35590 & (64));
var inst_35592 = inst_35585.cljs$core$ISeq$;
var inst_35593 = (cljs.core.PROTOCOL_SENTINEL === inst_35592);
var inst_35594 = (inst_35591) || (inst_35593);
var state_35632__$1 = state_35632;
if(cljs.core.truth_(inst_35594)){
var statearr_35652_35732 = state_35632__$1;
(statearr_35652_35732[(1)] = (35));

} else {
var statearr_35653_35733 = state_35632__$1;
(statearr_35653_35733[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35633 === (40))){
var inst_35607 = (state_35632[(20)]);
var inst_35606 = (state_35632[(2)]);
var inst_35607__$1 = cljs.core.get.call(null,inst_35606,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_35608 = cljs.core.get.call(null,inst_35606,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_35609 = cljs.core.not_empty.call(null,inst_35607__$1);
var state_35632__$1 = (function (){var statearr_35654 = state_35632;
(statearr_35654[(21)] = inst_35608);

(statearr_35654[(20)] = inst_35607__$1);

return statearr_35654;
})();
if(cljs.core.truth_(inst_35609)){
var statearr_35655_35734 = state_35632__$1;
(statearr_35655_35734[(1)] = (41));

} else {
var statearr_35656_35735 = state_35632__$1;
(statearr_35656_35735[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35633 === (33))){
var state_35632__$1 = state_35632;
var statearr_35657_35736 = state_35632__$1;
(statearr_35657_35736[(2)] = false);

(statearr_35657_35736[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35633 === (13))){
var inst_35505 = (state_35632[(22)]);
var inst_35509 = cljs.core.chunk_first.call(null,inst_35505);
var inst_35510 = cljs.core.chunk_rest.call(null,inst_35505);
var inst_35511 = cljs.core.count.call(null,inst_35509);
var inst_35492 = inst_35510;
var inst_35493 = inst_35509;
var inst_35494 = inst_35511;
var inst_35495 = (0);
var state_35632__$1 = (function (){var statearr_35658 = state_35632;
(statearr_35658[(7)] = inst_35495);

(statearr_35658[(8)] = inst_35492);

(statearr_35658[(9)] = inst_35493);

(statearr_35658[(10)] = inst_35494);

return statearr_35658;
})();
var statearr_35659_35737 = state_35632__$1;
(statearr_35659_35737[(2)] = null);

(statearr_35659_35737[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35633 === (22))){
var inst_35548 = (state_35632[(23)]);
var inst_35545 = (state_35632[(19)]);
var inst_35549 = (state_35632[(24)]);
var inst_35553 = (state_35632[(25)]);
var inst_35548__$1 = (state_35632[(2)]);
var inst_35549__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_35548__$1);
var inst_35550 = (function (){var all_files = inst_35545;
var res_SINGLEQUOTE_ = inst_35548__$1;
var res = inst_35549__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_35548,inst_35545,inst_35549,inst_35553,inst_35548__$1,inst_35549__$1,state_val_35633,c__31773__auto__,map__35477,map__35477__$1,opts,before_jsload,on_jsload,reload_dependents,map__35478,map__35478__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__35474_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__35474_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_35548,inst_35545,inst_35549,inst_35553,inst_35548__$1,inst_35549__$1,state_val_35633,c__31773__auto__,map__35477,map__35477__$1,opts,before_jsload,on_jsload,reload_dependents,map__35478,map__35478__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_35551 = cljs.core.filter.call(null,inst_35550,inst_35548__$1);
var inst_35552 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_35553__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_35552);
var inst_35554 = cljs.core.not_empty.call(null,inst_35553__$1);
var state_35632__$1 = (function (){var statearr_35660 = state_35632;
(statearr_35660[(23)] = inst_35548__$1);

(statearr_35660[(24)] = inst_35549__$1);

(statearr_35660[(25)] = inst_35553__$1);

(statearr_35660[(26)] = inst_35551);

return statearr_35660;
})();
if(cljs.core.truth_(inst_35554)){
var statearr_35661_35738 = state_35632__$1;
(statearr_35661_35738[(1)] = (23));

} else {
var statearr_35662_35739 = state_35632__$1;
(statearr_35662_35739[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35633 === (36))){
var state_35632__$1 = state_35632;
var statearr_35663_35740 = state_35632__$1;
(statearr_35663_35740[(2)] = false);

(statearr_35663_35740[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35633 === (41))){
var inst_35607 = (state_35632[(20)]);
var inst_35611 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_35612 = cljs.core.map.call(null,inst_35611,inst_35607);
var inst_35613 = cljs.core.pr_str.call(null,inst_35612);
var inst_35614 = ["figwheel-no-load meta-data: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_35613)].join('');
var inst_35615 = figwheel.client.utils.log.call(null,inst_35614);
var state_35632__$1 = state_35632;
var statearr_35664_35741 = state_35632__$1;
(statearr_35664_35741[(2)] = inst_35615);

(statearr_35664_35741[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35633 === (43))){
var inst_35608 = (state_35632[(21)]);
var inst_35618 = (state_35632[(2)]);
var inst_35619 = cljs.core.not_empty.call(null,inst_35608);
var state_35632__$1 = (function (){var statearr_35665 = state_35632;
(statearr_35665[(27)] = inst_35618);

return statearr_35665;
})();
if(cljs.core.truth_(inst_35619)){
var statearr_35666_35742 = state_35632__$1;
(statearr_35666_35742[(1)] = (44));

} else {
var statearr_35667_35743 = state_35632__$1;
(statearr_35667_35743[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35633 === (29))){
var inst_35548 = (state_35632[(23)]);
var inst_35545 = (state_35632[(19)]);
var inst_35585 = (state_35632[(16)]);
var inst_35549 = (state_35632[(24)]);
var inst_35553 = (state_35632[(25)]);
var inst_35551 = (state_35632[(26)]);
var inst_35581 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_35584 = (function (){var all_files = inst_35545;
var res_SINGLEQUOTE_ = inst_35548;
var res = inst_35549;
var files_not_loaded = inst_35551;
var dependencies_that_loaded = inst_35553;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_35548,inst_35545,inst_35585,inst_35549,inst_35553,inst_35551,inst_35581,state_val_35633,c__31773__auto__,map__35477,map__35477__$1,opts,before_jsload,on_jsload,reload_dependents,map__35478,map__35478__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__35583){
var map__35668 = p__35583;
var map__35668__$1 = ((((!((map__35668 == null)))?((((map__35668.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35668.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35668):map__35668);
var namespace = cljs.core.get.call(null,map__35668__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.truth_(meta_data.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179)))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_35548,inst_35545,inst_35585,inst_35549,inst_35553,inst_35551,inst_35581,state_val_35633,c__31773__auto__,map__35477,map__35477__$1,opts,before_jsload,on_jsload,reload_dependents,map__35478,map__35478__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_35585__$1 = cljs.core.group_by.call(null,inst_35584,inst_35551);
var inst_35587 = (inst_35585__$1 == null);
var inst_35588 = cljs.core.not.call(null,inst_35587);
var state_35632__$1 = (function (){var statearr_35670 = state_35632;
(statearr_35670[(28)] = inst_35581);

(statearr_35670[(16)] = inst_35585__$1);

return statearr_35670;
})();
if(inst_35588){
var statearr_35671_35744 = state_35632__$1;
(statearr_35671_35744[(1)] = (32));

} else {
var statearr_35672_35745 = state_35632__$1;
(statearr_35672_35745[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35633 === (44))){
var inst_35608 = (state_35632[(21)]);
var inst_35621 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_35608);
var inst_35622 = cljs.core.pr_str.call(null,inst_35621);
var inst_35623 = ["not required: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_35622)].join('');
var inst_35624 = figwheel.client.utils.log.call(null,inst_35623);
var state_35632__$1 = state_35632;
var statearr_35673_35746 = state_35632__$1;
(statearr_35673_35746[(2)] = inst_35624);

(statearr_35673_35746[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35633 === (6))){
var inst_35526 = (state_35632[(2)]);
var state_35632__$1 = state_35632;
var statearr_35674_35747 = state_35632__$1;
(statearr_35674_35747[(2)] = inst_35526);

(statearr_35674_35747[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35633 === (28))){
var inst_35551 = (state_35632[(26)]);
var inst_35578 = (state_35632[(2)]);
var inst_35579 = cljs.core.not_empty.call(null,inst_35551);
var state_35632__$1 = (function (){var statearr_35675 = state_35632;
(statearr_35675[(29)] = inst_35578);

return statearr_35675;
})();
if(cljs.core.truth_(inst_35579)){
var statearr_35676_35748 = state_35632__$1;
(statearr_35676_35748[(1)] = (29));

} else {
var statearr_35677_35749 = state_35632__$1;
(statearr_35677_35749[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35633 === (25))){
var inst_35549 = (state_35632[(24)]);
var inst_35565 = (state_35632[(2)]);
var inst_35566 = cljs.core.not_empty.call(null,inst_35549);
var state_35632__$1 = (function (){var statearr_35678 = state_35632;
(statearr_35678[(30)] = inst_35565);

return statearr_35678;
})();
if(cljs.core.truth_(inst_35566)){
var statearr_35679_35750 = state_35632__$1;
(statearr_35679_35750[(1)] = (26));

} else {
var statearr_35680_35751 = state_35632__$1;
(statearr_35680_35751[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35633 === (34))){
var inst_35601 = (state_35632[(2)]);
var state_35632__$1 = state_35632;
if(cljs.core.truth_(inst_35601)){
var statearr_35681_35752 = state_35632__$1;
(statearr_35681_35752[(1)] = (38));

} else {
var statearr_35682_35753 = state_35632__$1;
(statearr_35682_35753[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35633 === (17))){
var state_35632__$1 = state_35632;
var statearr_35683_35754 = state_35632__$1;
(statearr_35683_35754[(2)] = recompile_dependents);

(statearr_35683_35754[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35633 === (3))){
var state_35632__$1 = state_35632;
var statearr_35684_35755 = state_35632__$1;
(statearr_35684_35755[(2)] = null);

(statearr_35684_35755[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35633 === (12))){
var inst_35522 = (state_35632[(2)]);
var state_35632__$1 = state_35632;
var statearr_35685_35756 = state_35632__$1;
(statearr_35685_35756[(2)] = inst_35522);

(statearr_35685_35756[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35633 === (2))){
var inst_35484 = (state_35632[(13)]);
var inst_35491 = cljs.core.seq.call(null,inst_35484);
var inst_35492 = inst_35491;
var inst_35493 = null;
var inst_35494 = (0);
var inst_35495 = (0);
var state_35632__$1 = (function (){var statearr_35686 = state_35632;
(statearr_35686[(7)] = inst_35495);

(statearr_35686[(8)] = inst_35492);

(statearr_35686[(9)] = inst_35493);

(statearr_35686[(10)] = inst_35494);

return statearr_35686;
})();
var statearr_35687_35757 = state_35632__$1;
(statearr_35687_35757[(2)] = null);

(statearr_35687_35757[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35633 === (23))){
var inst_35548 = (state_35632[(23)]);
var inst_35545 = (state_35632[(19)]);
var inst_35549 = (state_35632[(24)]);
var inst_35553 = (state_35632[(25)]);
var inst_35551 = (state_35632[(26)]);
var inst_35556 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_35558 = (function (){var all_files = inst_35545;
var res_SINGLEQUOTE_ = inst_35548;
var res = inst_35549;
var files_not_loaded = inst_35551;
var dependencies_that_loaded = inst_35553;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_35548,inst_35545,inst_35549,inst_35553,inst_35551,inst_35556,state_val_35633,c__31773__auto__,map__35477,map__35477__$1,opts,before_jsload,on_jsload,reload_dependents,map__35478,map__35478__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__35557){
var map__35688 = p__35557;
var map__35688__$1 = ((((!((map__35688 == null)))?((((map__35688.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35688.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35688):map__35688);
var request_url = cljs.core.get.call(null,map__35688__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_35548,inst_35545,inst_35549,inst_35553,inst_35551,inst_35556,state_val_35633,c__31773__auto__,map__35477,map__35477__$1,opts,before_jsload,on_jsload,reload_dependents,map__35478,map__35478__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_35559 = cljs.core.reverse.call(null,inst_35553);
var inst_35560 = cljs.core.map.call(null,inst_35558,inst_35559);
var inst_35561 = cljs.core.pr_str.call(null,inst_35560);
var inst_35562 = figwheel.client.utils.log.call(null,inst_35561);
var state_35632__$1 = (function (){var statearr_35690 = state_35632;
(statearr_35690[(31)] = inst_35556);

return statearr_35690;
})();
var statearr_35691_35758 = state_35632__$1;
(statearr_35691_35758[(2)] = inst_35562);

(statearr_35691_35758[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35633 === (35))){
var state_35632__$1 = state_35632;
var statearr_35692_35759 = state_35632__$1;
(statearr_35692_35759[(2)] = true);

(statearr_35692_35759[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35633 === (19))){
var inst_35535 = (state_35632[(12)]);
var inst_35541 = figwheel.client.file_reloading.expand_files.call(null,inst_35535);
var state_35632__$1 = state_35632;
var statearr_35693_35760 = state_35632__$1;
(statearr_35693_35760[(2)] = inst_35541);

(statearr_35693_35760[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35633 === (11))){
var state_35632__$1 = state_35632;
var statearr_35694_35761 = state_35632__$1;
(statearr_35694_35761[(2)] = null);

(statearr_35694_35761[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35633 === (9))){
var inst_35524 = (state_35632[(2)]);
var state_35632__$1 = state_35632;
var statearr_35695_35762 = state_35632__$1;
(statearr_35695_35762[(2)] = inst_35524);

(statearr_35695_35762[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35633 === (5))){
var inst_35495 = (state_35632[(7)]);
var inst_35494 = (state_35632[(10)]);
var inst_35497 = (inst_35495 < inst_35494);
var inst_35498 = inst_35497;
var state_35632__$1 = state_35632;
if(cljs.core.truth_(inst_35498)){
var statearr_35696_35763 = state_35632__$1;
(statearr_35696_35763[(1)] = (7));

} else {
var statearr_35697_35764 = state_35632__$1;
(statearr_35697_35764[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35633 === (14))){
var inst_35505 = (state_35632[(22)]);
var inst_35514 = cljs.core.first.call(null,inst_35505);
var inst_35515 = figwheel.client.file_reloading.eval_body.call(null,inst_35514,opts);
var inst_35516 = cljs.core.next.call(null,inst_35505);
var inst_35492 = inst_35516;
var inst_35493 = null;
var inst_35494 = (0);
var inst_35495 = (0);
var state_35632__$1 = (function (){var statearr_35698 = state_35632;
(statearr_35698[(7)] = inst_35495);

(statearr_35698[(32)] = inst_35515);

(statearr_35698[(8)] = inst_35492);

(statearr_35698[(9)] = inst_35493);

(statearr_35698[(10)] = inst_35494);

return statearr_35698;
})();
var statearr_35699_35765 = state_35632__$1;
(statearr_35699_35765[(2)] = null);

(statearr_35699_35765[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35633 === (45))){
var state_35632__$1 = state_35632;
var statearr_35700_35766 = state_35632__$1;
(statearr_35700_35766[(2)] = null);

(statearr_35700_35766[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35633 === (26))){
var inst_35548 = (state_35632[(23)]);
var inst_35545 = (state_35632[(19)]);
var inst_35549 = (state_35632[(24)]);
var inst_35553 = (state_35632[(25)]);
var inst_35551 = (state_35632[(26)]);
var inst_35568 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_35570 = (function (){var all_files = inst_35545;
var res_SINGLEQUOTE_ = inst_35548;
var res = inst_35549;
var files_not_loaded = inst_35551;
var dependencies_that_loaded = inst_35553;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_35548,inst_35545,inst_35549,inst_35553,inst_35551,inst_35568,state_val_35633,c__31773__auto__,map__35477,map__35477__$1,opts,before_jsload,on_jsload,reload_dependents,map__35478,map__35478__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__35569){
var map__35701 = p__35569;
var map__35701__$1 = ((((!((map__35701 == null)))?((((map__35701.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35701.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35701):map__35701);
var namespace = cljs.core.get.call(null,map__35701__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__35701__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_35548,inst_35545,inst_35549,inst_35553,inst_35551,inst_35568,state_val_35633,c__31773__auto__,map__35477,map__35477__$1,opts,before_jsload,on_jsload,reload_dependents,map__35478,map__35478__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_35571 = cljs.core.map.call(null,inst_35570,inst_35549);
var inst_35572 = cljs.core.pr_str.call(null,inst_35571);
var inst_35573 = figwheel.client.utils.log.call(null,inst_35572);
var inst_35574 = (function (){var all_files = inst_35545;
var res_SINGLEQUOTE_ = inst_35548;
var res = inst_35549;
var files_not_loaded = inst_35551;
var dependencies_that_loaded = inst_35553;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_35548,inst_35545,inst_35549,inst_35553,inst_35551,inst_35568,inst_35570,inst_35571,inst_35572,inst_35573,state_val_35633,c__31773__auto__,map__35477,map__35477__$1,opts,before_jsload,on_jsload,reload_dependents,map__35478,map__35478__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_35548,inst_35545,inst_35549,inst_35553,inst_35551,inst_35568,inst_35570,inst_35571,inst_35572,inst_35573,state_val_35633,c__31773__auto__,map__35477,map__35477__$1,opts,before_jsload,on_jsload,reload_dependents,map__35478,map__35478__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_35575 = setTimeout(inst_35574,(10));
var state_35632__$1 = (function (){var statearr_35703 = state_35632;
(statearr_35703[(33)] = inst_35568);

(statearr_35703[(34)] = inst_35573);

return statearr_35703;
})();
var statearr_35704_35767 = state_35632__$1;
(statearr_35704_35767[(2)] = inst_35575);

(statearr_35704_35767[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35633 === (16))){
var state_35632__$1 = state_35632;
var statearr_35705_35768 = state_35632__$1;
(statearr_35705_35768[(2)] = reload_dependents);

(statearr_35705_35768[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35633 === (38))){
var inst_35585 = (state_35632[(16)]);
var inst_35603 = cljs.core.apply.call(null,cljs.core.hash_map,inst_35585);
var state_35632__$1 = state_35632;
var statearr_35706_35769 = state_35632__$1;
(statearr_35706_35769[(2)] = inst_35603);

(statearr_35706_35769[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35633 === (30))){
var state_35632__$1 = state_35632;
var statearr_35707_35770 = state_35632__$1;
(statearr_35707_35770[(2)] = null);

(statearr_35707_35770[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35633 === (10))){
var inst_35505 = (state_35632[(22)]);
var inst_35507 = cljs.core.chunked_seq_QMARK_.call(null,inst_35505);
var state_35632__$1 = state_35632;
if(inst_35507){
var statearr_35708_35771 = state_35632__$1;
(statearr_35708_35771[(1)] = (13));

} else {
var statearr_35709_35772 = state_35632__$1;
(statearr_35709_35772[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35633 === (18))){
var inst_35539 = (state_35632[(2)]);
var state_35632__$1 = state_35632;
if(cljs.core.truth_(inst_35539)){
var statearr_35710_35773 = state_35632__$1;
(statearr_35710_35773[(1)] = (19));

} else {
var statearr_35711_35774 = state_35632__$1;
(statearr_35711_35774[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35633 === (42))){
var state_35632__$1 = state_35632;
var statearr_35712_35775 = state_35632__$1;
(statearr_35712_35775[(2)] = null);

(statearr_35712_35775[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35633 === (37))){
var inst_35598 = (state_35632[(2)]);
var state_35632__$1 = state_35632;
var statearr_35713_35776 = state_35632__$1;
(statearr_35713_35776[(2)] = inst_35598);

(statearr_35713_35776[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35633 === (8))){
var inst_35492 = (state_35632[(8)]);
var inst_35505 = (state_35632[(22)]);
var inst_35505__$1 = cljs.core.seq.call(null,inst_35492);
var state_35632__$1 = (function (){var statearr_35714 = state_35632;
(statearr_35714[(22)] = inst_35505__$1);

return statearr_35714;
})();
if(inst_35505__$1){
var statearr_35715_35777 = state_35632__$1;
(statearr_35715_35777[(1)] = (10));

} else {
var statearr_35716_35778 = state_35632__$1;
(statearr_35716_35778[(1)] = (11));

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
}
});})(c__31773__auto__,map__35477,map__35477__$1,opts,before_jsload,on_jsload,reload_dependents,map__35478,map__35478__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__31685__auto__,c__31773__auto__,map__35477,map__35477__$1,opts,before_jsload,on_jsload,reload_dependents,map__35478,map__35478__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__31686__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__31686__auto____0 = (function (){
var statearr_35717 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35717[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__31686__auto__);

(statearr_35717[(1)] = (1));

return statearr_35717;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__31686__auto____1 = (function (state_35632){
while(true){
var ret_value__31687__auto__ = (function (){try{while(true){
var result__31688__auto__ = switch__31685__auto__.call(null,state_35632);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31688__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31688__auto__;
}
break;
}
}catch (e35718){if((e35718 instanceof Object)){
var ex__31689__auto__ = e35718;
var statearr_35719_35779 = state_35632;
(statearr_35719_35779[(5)] = ex__31689__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35632);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35718;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31687__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35780 = state_35632;
state_35632 = G__35780;
continue;
} else {
return ret_value__31687__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__31686__auto__ = function(state_35632){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__31686__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__31686__auto____1.call(this,state_35632);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__31686__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__31686__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__31686__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__31686__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__31686__auto__;
})()
;})(switch__31685__auto__,c__31773__auto__,map__35477,map__35477__$1,opts,before_jsload,on_jsload,reload_dependents,map__35478,map__35478__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__31775__auto__ = (function (){var statearr_35720 = f__31774__auto__.call(null);
(statearr_35720[(6)] = c__31773__auto__);

return statearr_35720;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31775__auto__);
});})(c__31773__auto__,map__35477,map__35477__$1,opts,before_jsload,on_jsload,reload_dependents,map__35478,map__35478__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__31773__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol),"//"].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__35783,link){
var map__35784 = p__35783;
var map__35784__$1 = ((((!((map__35784 == null)))?((((map__35784.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35784.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35784):map__35784);
var file = cljs.core.get.call(null,map__35784__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = link.href;
if(cljs.core.truth_(temp__4657__auto__)){
var link_href = temp__4657__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4657__auto__,map__35784,map__35784__$1,file){
return (function (p1__35781_SHARP_,p2__35782_SHARP_){
if(cljs.core._EQ_.call(null,p1__35781_SHARP_,p2__35782_SHARP_)){
return p1__35781_SHARP_;
} else {
return false;
}
});})(link_href,temp__4657__auto__,map__35784,map__35784__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__4657__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__35787){
var map__35788 = p__35787;
var map__35788__$1 = ((((!((map__35788 == null)))?((((map__35788.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35788.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35788):map__35788);
var match_length = cljs.core.get.call(null,map__35788__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__35788__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__35786_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__35786_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__4657__auto__)){
var res = temp__4657__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.distinctify = (function figwheel$client$file_reloading$distinctify(key,seqq){
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__35790_SHARP_,p2__35791_SHARP_){
return cljs.core.assoc.call(null,p1__35790_SHARP_,cljs.core.get.call(null,p2__35791_SHARP_,key),p2__35791_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.add_link_to_document = (function figwheel$client$file_reloading$add_link_to_document(orig_link,klone,finished_fn){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
parent.removeChild(orig_link);

return finished_fn.call(null);
});})(parent))
,(300));
});
if(typeof figwheel.client.file_reloading.reload_css_deferred_chain !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_css_deferred_chain = cljs.core.atom.call(null,goog.async.Deferred.succeed());
}
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(f_data,fin){
var temp__4655__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4655__auto__)){
var link = temp__4655__auto__;
return figwheel.client.file_reloading.add_link_to_document.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href),((function (link,temp__4655__auto__){
return (function (){
return fin.call(null,cljs.core.assoc.call(null,f_data,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),true));
});})(link,temp__4655__auto__))
);
} else {
return fin.call(null,f_data);
}
});
figwheel.client.file_reloading.reload_css_files_STAR_ = (function figwheel$client$file_reloading$reload_css_files_STAR_(deferred,f_datas,on_cssload){
return figwheel.client.utils.liftContD.call(null,figwheel.client.utils.mapConcatD.call(null,deferred,figwheel.client.file_reloading.reload_css_file,f_datas),(function (f_datas_SINGLEQUOTE_,fin){
var loaded_f_datas_35792 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),f_datas_SINGLEQUOTE_);
figwheel.client.file_reloading.on_cssload_custom_event.call(null,loaded_f_datas_35792);

if(cljs.core.fn_QMARK_.call(null,on_cssload)){
on_cssload.call(null,loaded_f_datas_35792);
} else {
}

return fin.call(null);
}));
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__35793,p__35794){
var map__35795 = p__35793;
var map__35795__$1 = ((((!((map__35795 == null)))?((((map__35795.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35795.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35795):map__35795);
var on_cssload = cljs.core.get.call(null,map__35795__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__35796 = p__35794;
var map__35796__$1 = ((((!((map__35796 == null)))?((((map__35796.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35796.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35796):map__35796);
var files_msg = map__35796__$1;
var files = cljs.core.get.call(null,map__35796__$1,new cljs.core.Keyword(null,"files","files",-472457450));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var temp__4657__auto__ = cljs.core.not_empty.call(null,figwheel.client.file_reloading.distinctify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files));
if(cljs.core.truth_(temp__4657__auto__)){
var f_datas = temp__4657__auto__;
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.reload_css_deferred_chain,figwheel.client.file_reloading.reload_css_files_STAR_,f_datas,on_cssload);
} else {
return null;
}
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1507552550377
