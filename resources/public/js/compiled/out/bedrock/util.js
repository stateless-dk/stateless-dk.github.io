// Compiled by ClojureScript 1.9.946 {}
goog.provide('bedrock.util');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('clojure.walk');
goog.require('cljs.pprint');
/**
 * Join a list of elements into a presentation-friendly string
 */
bedrock.util.soft_join = (function bedrock$util$soft_join(delim,xs){
return clojure.string.join.call(null,delim,cljs.core.filter.call(null,cljs.core.seq,cljs.core.map.call(null,cljs.core.str,xs)));
});
/**
 * Guards a value by predicate on said value
 */
bedrock.util.guard = (function bedrock$util$guard(pred,x){
if(cljs.core.truth_(pred.call(null,x))){
return x;
} else {
return null;
}
});
/**
 * As partial, but slices the bound args in AFTER the unbound ones
 */
bedrock.util.partial_GT__GT_ = (function bedrock$util$partial_GT__GT_(var_args){
var args__29230__auto__ = [];
var len__29223__auto___34785 = arguments.length;
var i__29224__auto___34786 = (0);
while(true){
if((i__29224__auto___34786 < len__29223__auto___34785)){
args__29230__auto__.push((arguments[i__29224__auto___34786]));

var G__34787 = (i__29224__auto___34786 + (1));
i__29224__auto___34786 = G__34787;
continue;
} else {
}
break;
}

var argseq__29231__auto__ = ((((1) < args__29230__auto__.length))?(new cljs.core.IndexedSeq(args__29230__auto__.slice((1)),(0),null)):null);
return bedrock.util.partial_GT__GT_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__29231__auto__);
});

bedrock.util.partial_GT__GT_.cljs$core$IFn$_invoke$arity$variadic = (function (f,args){
return (function() { 
var G__34788__delegate = function (xs){
return cljs.core.apply.call(null,f,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,xs,args))));
};
var G__34788 = function (var_args){
var xs = null;
if (arguments.length > 0) {
var G__34789__i = 0, G__34789__a = new Array(arguments.length -  0);
while (G__34789__i < G__34789__a.length) {G__34789__a[G__34789__i] = arguments[G__34789__i + 0]; ++G__34789__i;}
  xs = new cljs.core.IndexedSeq(G__34789__a,0,null);
} 
return G__34788__delegate.call(this,xs);};
G__34788.cljs$lang$maxFixedArity = 0;
G__34788.cljs$lang$applyTo = (function (arglist__34790){
var xs = cljs.core.seq(arglist__34790);
return G__34788__delegate(xs);
});
G__34788.cljs$core$IFn$_invoke$arity$variadic = G__34788__delegate;
return G__34788;
})()
;
});

bedrock.util.partial_GT__GT_.cljs$lang$maxFixedArity = (1);

bedrock.util.partial_GT__GT_.cljs$lang$applyTo = (function (seq34783){
var G__34784 = cljs.core.first.call(null,seq34783);
var seq34783__$1 = cljs.core.next.call(null,seq34783);
return bedrock.util.partial_GT__GT_.cljs$core$IFn$_invoke$arity$variadic(G__34784,seq34783__$1);
});

/**
 * As partial, but slices the bound args in after the first unbound one
 */
bedrock.util.partial_1 = (function bedrock$util$partial_1(var_args){
var args__29230__auto__ = [];
var len__29223__auto___34793 = arguments.length;
var i__29224__auto___34794 = (0);
while(true){
if((i__29224__auto___34794 < len__29223__auto___34793)){
args__29230__auto__.push((arguments[i__29224__auto___34794]));

var G__34795 = (i__29224__auto___34794 + (1));
i__29224__auto___34794 = G__34795;
continue;
} else {
}
break;
}

var argseq__29231__auto__ = ((((1) < args__29230__auto__.length))?(new cljs.core.IndexedSeq(args__29230__auto__.slice((1)),(0),null)):null);
return bedrock.util.partial_1.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__29231__auto__);
});

bedrock.util.partial_1.cljs$core$IFn$_invoke$arity$variadic = (function (f,args){
return (function() { 
var G__34796__delegate = function (x,xs){
return cljs.core.apply.call(null,f,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__28914__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28914__auto__);
})(),args,xs))));
};
var G__34796 = function (x,var_args){
var xs = null;
if (arguments.length > 1) {
var G__34797__i = 0, G__34797__a = new Array(arguments.length -  1);
while (G__34797__i < G__34797__a.length) {G__34797__a[G__34797__i] = arguments[G__34797__i + 1]; ++G__34797__i;}
  xs = new cljs.core.IndexedSeq(G__34797__a,0,null);
} 
return G__34796__delegate.call(this,x,xs);};
G__34796.cljs$lang$maxFixedArity = 1;
G__34796.cljs$lang$applyTo = (function (arglist__34798){
var x = cljs.core.first(arglist__34798);
var xs = cljs.core.rest(arglist__34798);
return G__34796__delegate(x,xs);
});
G__34796.cljs$core$IFn$_invoke$arity$variadic = G__34796__delegate;
return G__34796;
})()
;
});

bedrock.util.partial_1.cljs$lang$maxFixedArity = (1);

bedrock.util.partial_1.cljs$lang$applyTo = (function (seq34791){
var G__34792 = cljs.core.first.call(null,seq34791);
var seq34791__$1 = cljs.core.next.call(null,seq34791);
return bedrock.util.partial_1.cljs$core$IFn$_invoke$arity$variadic(G__34792,seq34791__$1);
});

/**
 * As partial, but slices the bound args in after the second unbound one
 */
bedrock.util.partial_2 = (function bedrock$util$partial_2(var_args){
var args__29230__auto__ = [];
var len__29223__auto___34801 = arguments.length;
var i__29224__auto___34802 = (0);
while(true){
if((i__29224__auto___34802 < len__29223__auto___34801)){
args__29230__auto__.push((arguments[i__29224__auto___34802]));

var G__34803 = (i__29224__auto___34802 + (1));
i__29224__auto___34802 = G__34803;
continue;
} else {
}
break;
}

var argseq__29231__auto__ = ((((1) < args__29230__auto__.length))?(new cljs.core.IndexedSeq(args__29230__auto__.slice((1)),(0),null)):null);
return bedrock.util.partial_2.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__29231__auto__);
});

bedrock.util.partial_2.cljs$core$IFn$_invoke$arity$variadic = (function (f,args){
return (function() { 
var G__34804__delegate = function (x,y,xs){
return cljs.core.apply.call(null,f,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__28914__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28914__auto__);
})(),(function (){var x__28914__auto__ = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28914__auto__);
})(),args,xs))));
};
var G__34804 = function (x,y,var_args){
var xs = null;
if (arguments.length > 2) {
var G__34805__i = 0, G__34805__a = new Array(arguments.length -  2);
while (G__34805__i < G__34805__a.length) {G__34805__a[G__34805__i] = arguments[G__34805__i + 2]; ++G__34805__i;}
  xs = new cljs.core.IndexedSeq(G__34805__a,0,null);
} 
return G__34804__delegate.call(this,x,y,xs);};
G__34804.cljs$lang$maxFixedArity = 2;
G__34804.cljs$lang$applyTo = (function (arglist__34806){
var x = cljs.core.first(arglist__34806);
arglist__34806 = cljs.core.next(arglist__34806);
var y = cljs.core.first(arglist__34806);
var xs = cljs.core.rest(arglist__34806);
return G__34804__delegate(x,y,xs);
});
G__34804.cljs$core$IFn$_invoke$arity$variadic = G__34804__delegate;
return G__34804;
})()
;
});

bedrock.util.partial_2.cljs$lang$maxFixedArity = (1);

bedrock.util.partial_2.cljs$lang$applyTo = (function (seq34799){
var G__34800 = cljs.core.first.call(null,seq34799);
var seq34799__$1 = cljs.core.next.call(null,seq34799);
return bedrock.util.partial_2.cljs$core$IFn$_invoke$arity$variadic(G__34800,seq34799__$1);
});

/**
 * Flattens a seq by 1 level and removes nils
 */
bedrock.util.flatten_1_clean = (function bedrock$util$flatten_1_clean(xs){
return bedrock.util.guard.call(null,cljs.core.seq,cljs.core.apply.call(null,cljs.core.concat,(function (){var iter__28860__auto__ = (function bedrock$util$flatten_1_clean_$_iter__34807(s__34808){
return (new cljs.core.LazySeq(null,(function (){
var s__34808__$1 = s__34808;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__34808__$1);
if(temp__4657__auto__){
var s__34808__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__34808__$2)){
var c__28858__auto__ = cljs.core.chunk_first.call(null,s__34808__$2);
var size__28859__auto__ = cljs.core.count.call(null,c__28858__auto__);
var b__34810 = cljs.core.chunk_buffer.call(null,size__28859__auto__);
if((function (){var i__34809 = (0);
while(true){
if((i__34809 < size__28859__auto__)){
var x = cljs.core._nth.call(null,c__28858__auto__,i__34809);
cljs.core.chunk_append.call(null,b__34810,(cljs.core.truth_(x)?((cljs.core.sequential_QMARK_.call(null,x))?cljs.core.remove.call(null,cljs.core.nil_QMARK_,x):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [x], null)):null));

var G__34811 = (i__34809 + (1));
i__34809 = G__34811;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__34810),bedrock$util$flatten_1_clean_$_iter__34807.call(null,cljs.core.chunk_rest.call(null,s__34808__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__34810),null);
}
} else {
var x = cljs.core.first.call(null,s__34808__$2);
return cljs.core.cons.call(null,(cljs.core.truth_(x)?((cljs.core.sequential_QMARK_.call(null,x))?cljs.core.remove.call(null,cljs.core.nil_QMARK_,x):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [x], null)):null),bedrock$util$flatten_1_clean_$_iter__34807.call(null,cljs.core.rest.call(null,s__34808__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__28860__auto__.call(null,xs);
})()));
});
/**
 * Deep-merges zero or more maps. (Subject to change)
 */
bedrock.util.deep_merge = (function bedrock$util$deep_merge(var_args){
var args__29230__auto__ = [];
var len__29223__auto___34816 = arguments.length;
var i__29224__auto___34817 = (0);
while(true){
if((i__29224__auto___34817 < len__29223__auto___34816)){
args__29230__auto__.push((arguments[i__29224__auto___34817]));

var G__34818 = (i__29224__auto___34817 + (1));
i__29224__auto___34817 = G__34818;
continue;
} else {
}
break;
}

var argseq__29231__auto__ = ((((0) < args__29230__auto__.length))?(new cljs.core.IndexedSeq(args__29230__auto__.slice((0)),(0),null)):null);
return bedrock.util.deep_merge.cljs$core$IFn$_invoke$arity$variadic(argseq__29231__auto__);
});

bedrock.util.deep_merge.cljs$core$IFn$_invoke$arity$variadic = (function (args){
if(cljs.core.truth_(args)){
var vec__34813 = args;
var seq__34814 = cljs.core.seq.call(null,vec__34813);
var first__34815 = cljs.core.first.call(null,seq__34814);
var seq__34814__$1 = cljs.core.next.call(null,seq__34814);
var m = first__34815;
var rest = seq__34814__$1;
if(cljs.core.map_QMARK_.call(null,m)){
return cljs.core.apply.call(null,cljs.core.merge_with,bedrock.util.deep_merge,args);
} else {
if(rest){
return cljs.core.apply.call(null,cljs.core.merge_with,bedrock.util.deep_merge,rest);
} else {
return m;

}
}
} else {
return null;
}
});

bedrock.util.deep_merge.cljs$lang$maxFixedArity = (0);

bedrock.util.deep_merge.cljs$lang$applyTo = (function (seq34812){
return bedrock.util.deep_merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34812));
});

/**
 * As merge, but does not overwrite with values that are nil
 */
bedrock.util.merge_proper = (function bedrock$util$merge_proper(var_args){
var args__29230__auto__ = [];
var len__29223__auto___34821 = arguments.length;
var i__29224__auto___34822 = (0);
while(true){
if((i__29224__auto___34822 < len__29223__auto___34821)){
args__29230__auto__.push((arguments[i__29224__auto___34822]));

var G__34823 = (i__29224__auto___34822 + (1));
i__29224__auto___34822 = G__34823;
continue;
} else {
}
break;
}

var argseq__29231__auto__ = ((((1) < args__29230__auto__.length))?(new cljs.core.IndexedSeq(args__29230__auto__.slice((1)),(0),null)):null);
return bedrock.util.merge_proper.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__29231__auto__);
});

bedrock.util.merge_proper.cljs$core$IFn$_invoke$arity$variadic = (function (m,maps){
return cljs.core.apply.call(null,cljs.core.merge,m,cljs.core.map.call(null,cljs.core.partial.call(null,cljs.core.filter,cljs.core.second),maps));
});

bedrock.util.merge_proper.cljs$lang$maxFixedArity = (1);

bedrock.util.merge_proper.cljs$lang$applyTo = (function (seq34819){
var G__34820 = cljs.core.first.call(null,seq34819);
var seq34819__$1 = cljs.core.next.call(null,seq34819);
return bedrock.util.merge_proper.cljs$core$IFn$_invoke$arity$variadic(G__34820,seq34819__$1);
});

/**
 * As assoc, but overwrites only values where predicate holds
 */
bedrock.util.assoc_where = (function bedrock$util$assoc_where(var_args){
var G__34828 = arguments.length;
switch (G__34828) {
case 1:
return bedrock.util.assoc_where.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return bedrock.util.assoc_where.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__29242__auto__ = [];
var len__29223__auto___34840 = arguments.length;
var i__29224__auto___34841 = (0);
while(true){
if((i__29224__auto___34841 < len__29223__auto___34840)){
args_arr__29242__auto__.push((arguments[i__29224__auto___34841]));

var G__34842 = (i__29224__auto___34841 + (1));
i__29224__auto___34841 = G__34842;
continue;
} else {
}
break;
}

var argseq__29243__auto__ = (new cljs.core.IndexedSeq(args_arr__29242__auto__.slice((2)),(0),null));
return bedrock.util.assoc_where.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__29243__auto__);

}
});

bedrock.util.assoc_where.cljs$core$IFn$_invoke$arity$1 = (function (_){
return null;
});

bedrock.util.assoc_where.cljs$core$IFn$_invoke$arity$2 = (function (_,m){
return m;
});

bedrock.util.assoc_where.cljs$core$IFn$_invoke$arity$variadic = (function (pred,m,next){
var m__$1 = m;
var G__34832 = next;
var vec__34833 = G__34832;
var seq__34834 = cljs.core.seq.call(null,vec__34833);
var first__34835 = cljs.core.first.call(null,seq__34834);
var seq__34834__$1 = cljs.core.next.call(null,seq__34834);
var k = first__34835;
var first__34835__$1 = cljs.core.first.call(null,seq__34834__$1);
var seq__34834__$2 = cljs.core.next.call(null,seq__34834__$1);
var v = first__34835__$1;
var next__$1 = seq__34834__$2;
var m__$2 = m__$1;
var G__34832__$1 = G__34832;
while(true){
var m__$3 = m__$2;
var vec__34836 = G__34832__$1;
var seq__34837 = cljs.core.seq.call(null,vec__34836);
var first__34838 = cljs.core.first.call(null,seq__34837);
var seq__34837__$1 = cljs.core.next.call(null,seq__34837);
var k__$1 = first__34838;
var first__34838__$1 = cljs.core.first.call(null,seq__34837__$1);
var seq__34837__$2 = cljs.core.next.call(null,seq__34837__$1);
var v__$1 = first__34838__$1;
var next__$2 = seq__34837__$2;
var m__$4 = (cljs.core.truth_(pred.call(null,cljs.core.get.call(null,m__$3,k__$1)))?cljs.core.assoc.call(null,m__$3,k__$1,v__$1):m__$3);
if(next__$2){
var G__34843 = m__$4;
var G__34844 = next__$2;
m__$2 = G__34843;
G__34832__$1 = G__34844;
continue;
} else {
return m__$4;
}
break;
}
});

bedrock.util.assoc_where.cljs$lang$applyTo = (function (seq34825){
var G__34826 = cljs.core.first.call(null,seq34825);
var seq34825__$1 = cljs.core.next.call(null,seq34825);
var G__34827 = cljs.core.first.call(null,seq34825__$1);
var seq34825__$2 = cljs.core.next.call(null,seq34825__$1);
return bedrock.util.assoc_where.cljs$core$IFn$_invoke$arity$variadic(G__34826,G__34827,seq34825__$2);
});

bedrock.util.assoc_where.cljs$lang$maxFixedArity = (2);

/**
 * Get current time in milliseconds
 */
bedrock.util.get_time = (function bedrock$util$get_time(){
return (new Date()).getTime();
});
/**
 * Stupid sleep routine that consumes CPU-cycles
 */
bedrock.util.stupid_sleep = (function bedrock$util$stupid_sleep(ms){
var t = (ms + bedrock.util.get_time.call(null));
while(true){
if((bedrock.util.get_time.call(null) < t)){
continue;
} else {
return null;
}
break;
}
});
/**
 * pprint to a string
 */
bedrock.util.pp_str = (function bedrock$util$pp_str(x){
var sb__29081__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_34845_34847 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_34846_34848 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_34845_34847,_STAR_print_fn_STAR_34846_34848,sb__29081__auto__){
return (function (x__29082__auto__){
return sb__29081__auto__.append(x__29082__auto__);
});})(_STAR_print_newline_STAR_34845_34847,_STAR_print_fn_STAR_34846_34848,sb__29081__auto__))
;

try{cljs.pprint.pprint.call(null,x);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_34846_34848;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_34845_34847;
}
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__29081__auto__)].join('');
});
/**
 * pprint to a string, shortening functions. nb! for human consumption only.
 * The optional ns-or-kw argument determines a namespace that is printed as ::.
 * If ns is a string, it's treated as a namespace-name, if it's a keyword, the
 * namespace of the keyword is understood. If it's :short namespaces are shortened
 */
bedrock.util.pp_str_SINGLEQUOTE_ = (function bedrock$util$pp_str_SINGLEQUOTE_(var_args){
var args__29230__auto__ = [];
var len__29223__auto___34856 = arguments.length;
var i__29224__auto___34857 = (0);
while(true){
if((i__29224__auto___34857 < len__29223__auto___34856)){
args__29230__auto__.push((arguments[i__29224__auto___34857]));

var G__34858 = (i__29224__auto___34857 + (1));
i__29224__auto___34857 = G__34858;
continue;
} else {
}
break;
}

var argseq__29231__auto__ = ((((1) < args__29230__auto__.length))?(new cljs.core.IndexedSeq(args__29230__auto__.slice((1)),(0),null)):null);
return bedrock.util.pp_str_SINGLEQUOTE_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__29231__auto__);
});

bedrock.util.pp_str_SINGLEQUOTE_.cljs$core$IFn$_invoke$arity$variadic = (function (x,p__34852){
var vec__34853 = p__34852;
var ns = cljs.core.nth.call(null,vec__34853,(0),null);
var ns__$1 = ((typeof ns === 'string')?ns:((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"short","short",1928760516),ns))?ns:(((ns instanceof cljs.core.Keyword))?cljs.core.namespace.call(null,ns):new cljs.core.Keyword(null,"full","full",436801220)
)));
return bedrock.util.pp_str.call(null,clojure.walk.prewalk.call(null,((function (ns__$1,vec__34853,ns){
return (function (p1__34849_SHARP_){
if(cljs.core.fn_QMARK_.call(null,p1__34849_SHARP_)){
return cljs.core.symbol.call(null,"#(...)");
} else {
if((p1__34849_SHARP_ instanceof cljs.core.Keyword)){
if((cljs.core.namespace.call(null,p1__34849_SHARP_) == null)){
return p1__34849_SHARP_;
} else {
if(cljs.core._EQ_.call(null,ns__$1,new cljs.core.Keyword(null,"short","short",1928760516))){
return cljs.core.symbol.call(null,["::/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,p1__34849_SHARP_))].join(''));
} else {
if(cljs.core._EQ_.call(null,ns__$1,cljs.core.namespace.call(null,p1__34849_SHARP_))){
return cljs.core.symbol.call(null,["::",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,p1__34849_SHARP_))].join(''));
} else {
return p1__34849_SHARP_;

}
}
}
} else {
return p1__34849_SHARP_;

}
}
});})(ns__$1,vec__34853,ns))
,x));
});

bedrock.util.pp_str_SINGLEQUOTE_.cljs$lang$maxFixedArity = (1);

bedrock.util.pp_str_SINGLEQUOTE_.cljs$lang$applyTo = (function (seq34850){
var G__34851 = cljs.core.first.call(null,seq34850);
var seq34850__$1 = cljs.core.next.call(null,seq34850);
return bedrock.util.pp_str_SINGLEQUOTE_.cljs$core$IFn$_invoke$arity$variadic(G__34851,seq34850__$1);
});

/**
 * identity with (println pp-str' % %2) as side effect
 */
bedrock.util.prn_str_SINGLEQUOTE_ = (function bedrock$util$prn_str_SINGLEQUOTE_(var_args){
var args__29230__auto__ = [];
var len__29223__auto___34865 = arguments.length;
var i__29224__auto___34866 = (0);
while(true){
if((i__29224__auto___34866 < len__29223__auto___34865)){
args__29230__auto__.push((arguments[i__29224__auto___34866]));

var G__34867 = (i__29224__auto___34866 + (1));
i__29224__auto___34866 = G__34867;
continue;
} else {
}
break;
}

var argseq__29231__auto__ = ((((1) < args__29230__auto__.length))?(new cljs.core.IndexedSeq(args__29230__auto__.slice((1)),(0),null)):null);
return bedrock.util.prn_str_SINGLEQUOTE_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__29231__auto__);
});

bedrock.util.prn_str_SINGLEQUOTE_.cljs$core$IFn$_invoke$arity$variadic = (function (x,p__34861){
var vec__34862 = p__34861;
var opt = cljs.core.nth.call(null,vec__34862,(0),null);
cljs.core.println.call(null,bedrock.util.pp_str_SINGLEQUOTE_.call(null,x,opt));

return x;
});

bedrock.util.prn_str_SINGLEQUOTE_.cljs$lang$maxFixedArity = (1);

bedrock.util.prn_str_SINGLEQUOTE_.cljs$lang$applyTo = (function (seq34859){
var G__34860 = cljs.core.first.call(null,seq34859);
var seq34859__$1 = cljs.core.next.call(null,seq34859);
return bedrock.util.prn_str_SINGLEQUOTE_.cljs$core$IFn$_invoke$arity$variadic(G__34860,seq34859__$1);
});

/**
 * Turn a keyword into lower-case
 */
bedrock.util.kw_lowercase = (function bedrock$util$kw_lowercase(kw){
return cljs.core.keyword.call(null,clojure.string.lower_case.call(null,cljs.core.apply.call(null,cljs.core.str,cljs.core.rest.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(kw)].join('')))));
});
/**
 * Composes a list functions for application from left to right, treating nil as identity
 */
bedrock.util.comp_GT_ = (function bedrock$util$comp_GT_(var_args){
var args__29230__auto__ = [];
var len__29223__auto___34870 = arguments.length;
var i__29224__auto___34871 = (0);
while(true){
if((i__29224__auto___34871 < len__29223__auto___34870)){
args__29230__auto__.push((arguments[i__29224__auto___34871]));

var G__34872 = (i__29224__auto___34871 + (1));
i__29224__auto___34871 = G__34872;
continue;
} else {
}
break;
}

var argseq__29231__auto__ = ((((0) < args__29230__auto__.length))?(new cljs.core.IndexedSeq(args__29230__auto__.slice((0)),(0),null)):null);
return bedrock.util.comp_GT_.cljs$core$IFn$_invoke$arity$variadic(argseq__29231__auto__);
});

bedrock.util.comp_GT_.cljs$core$IFn$_invoke$arity$variadic = (function (fns){
return cljs.core.apply.call(null,cljs.core.comp,cljs.core.reverse.call(null,cljs.core.map.call(null,(function (p1__34868_SHARP_){
var or__28052__auto__ = p1__34868_SHARP_;
if(cljs.core.truth_(or__28052__auto__)){
return or__28052__auto__;
} else {
return cljs.core.identity;
}
}),fns)));
});

bedrock.util.comp_GT_.cljs$lang$maxFixedArity = (0);

bedrock.util.comp_GT_.cljs$lang$applyTo = (function (seq34869){
return bedrock.util.comp_GT_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34869));
});

bedrock.util.comp_or = (function bedrock$util$comp_or(pred1,pred2){

return (function (pred1__$1,pred2__$1){
if(cljs.core.not.call(null,pred1__$1)){
return pred2__$1;
} else {
if(cljs.core.not.call(null,pred2__$1)){
return pred1__$1;
} else {
return (function (v){
var or__28052__auto__ = pred1__$1.call(null,v);
if(cljs.core.truth_(or__28052__auto__)){
return or__28052__auto__;
} else {
return pred2__$1.call(null,v);
}
});

}
}
});
});
bedrock.util.comp_and = (function bedrock$util$comp_and(pred1,pred2){

return (function (pred1__$1,pred2__$1){
if(cljs.core.not.call(null,pred1__$1)){
return pred2__$1;
} else {
if(cljs.core.not.call(null,pred2__$1)){
return pred1__$1;
} else {
return (function (v){
var and__28040__auto__ = pred1__$1.call(null,v);
if(cljs.core.truth_(and__28040__auto__)){
return pred2__$1.call(null,v);
} else {
return and__28040__auto__;
}
});

}
}
});
});
bedrock.util.replace_template = (function bedrock$util$replace_template(text,seq){
var m = bedrock.util.map_keys.call(null,cljs.core.comp.call(null,cljs.core.keyword,cljs.core.str),cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,cljs.core.vector,cljs.core.range.call(null),seq)));
return clojure.string.replace.call(null,text,/\{\w+}/,cljs.core.comp.call(null,m,cljs.core.keyword,clojure.string.join,cljs.core.butlast,cljs.core.rest));
});
bedrock.util.assoc_some = (function bedrock$util$assoc_some(var_args){
var args__29230__auto__ = [];
var len__29223__auto___34879 = arguments.length;
var i__29224__auto___34880 = (0);
while(true){
if((i__29224__auto___34880 < len__29223__auto___34879)){
args__29230__auto__.push((arguments[i__29224__auto___34880]));

var G__34881 = (i__29224__auto___34880 + (1));
i__29224__auto___34880 = G__34881;
continue;
} else {
}
break;
}

var argseq__29231__auto__ = ((((1) < args__29230__auto__.length))?(new cljs.core.IndexedSeq(args__29230__auto__.slice((1)),(0),null)):null);
return bedrock.util.assoc_some.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__29231__auto__);
});

bedrock.util.assoc_some.cljs$core$IFn$_invoke$arity$variadic = (function (m,kvs){
return cljs.core.apply.call(null,cljs.core.assoc,m,cljs.core.apply.call(null,cljs.core.concat,cljs.core.filter.call(null,(function (p__34875){
var vec__34876 = p__34875;
var _ = cljs.core.nth.call(null,vec__34876,(0),null);
var v = cljs.core.nth.call(null,vec__34876,(1),null);
return !((v == null));
}),cljs.core.partition_all.call(null,(2),kvs))));
});

bedrock.util.assoc_some.cljs$lang$maxFixedArity = (1);

bedrock.util.assoc_some.cljs$lang$applyTo = (function (seq34873){
var G__34874 = cljs.core.first.call(null,seq34873);
var seq34873__$1 = cljs.core.next.call(null,seq34873);
return bedrock.util.assoc_some.cljs$core$IFn$_invoke$arity$variadic(G__34874,seq34873__$1);
});

/**
 * Collects the keys of a tree of nodes starting from start-key and enumerated by child-lister.
 *   Optional flag :pre-order / :post-order
 *   :pre-order is default
 */
bedrock.util.graph_collect_tree = (function bedrock$util$graph_collect_tree(var_args){
var args__29230__auto__ = [];
var len__29223__auto___34886 = arguments.length;
var i__29224__auto___34887 = (0);
while(true){
if((i__29224__auto___34887 < len__29223__auto___34886)){
args__29230__auto__.push((arguments[i__29224__auto___34887]));

var G__34888 = (i__29224__auto___34887 + (1));
i__29224__auto___34887 = G__34888;
continue;
} else {
}
break;
}

var argseq__29231__auto__ = ((((3) < args__29230__auto__.length))?(new cljs.core.IndexedSeq(args__29230__auto__.slice((3)),(0),null)):null);
return bedrock.util.graph_collect_tree.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__29231__auto__);
});

bedrock.util.graph_collect_tree.cljs$core$IFn$_invoke$arity$variadic = (function (map_graph,child_lister,start_key,flags){
var f = (function bedrock$util$f(m,k){
var xs = cljs.core.map.call(null,cljs.core.partial.call(null,bedrock$util$f,cljs.core.dissoc.call(null,m,k)),child_lister.call(null,cljs.core.get.call(null,m,k)));
if(cljs.core.truth_(new cljs.core.Keyword(null,"post-order","post-order",-1882347383).cljs$core$IFn$_invoke$arity$1(cljs.core.set.call(null,flags)))){
return cljs.core.concat.call(null,xs,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [k], null));
} else {
return cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [k], null),xs);
}
});
return cljs.core.distinct.call(null,cljs.core.flatten.call(null,f.call(null,map_graph,start_key)));
});

bedrock.util.graph_collect_tree.cljs$lang$maxFixedArity = (3);

bedrock.util.graph_collect_tree.cljs$lang$applyTo = (function (seq34882){
var G__34883 = cljs.core.first.call(null,seq34882);
var seq34882__$1 = cljs.core.next.call(null,seq34882);
var G__34884 = cljs.core.first.call(null,seq34882__$1);
var seq34882__$2 = cljs.core.next.call(null,seq34882__$1);
var G__34885 = cljs.core.first.call(null,seq34882__$2);
var seq34882__$3 = cljs.core.next.call(null,seq34882__$2);
return bedrock.util.graph_collect_tree.cljs$core$IFn$_invoke$arity$variadic(G__34883,G__34884,G__34885,seq34882__$3);
});

/**
 * Returns a map that consists of the rest of the maps conj-ed onto
 *   the first.  If a key occurs in more than one map, the mapping(s)
 *   from the latter (left-to-right) will be combined with the mapping in
 *   the result by calling (f key val-in-result val-in-latter).
 */
bedrock.util.keyaware_merge_with = (function bedrock$util$keyaware_merge_with(var_args){
var args__29230__auto__ = [];
var len__29223__auto___34891 = arguments.length;
var i__29224__auto___34892 = (0);
while(true){
if((i__29224__auto___34892 < len__29223__auto___34891)){
args__29230__auto__.push((arguments[i__29224__auto___34892]));

var G__34893 = (i__29224__auto___34892 + (1));
i__29224__auto___34892 = G__34893;
continue;
} else {
}
break;
}

var argseq__29231__auto__ = ((((1) < args__29230__auto__.length))?(new cljs.core.IndexedSeq(args__29230__auto__.slice((1)),(0),null)):null);
return bedrock.util.keyaware_merge_with.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__29231__auto__);
});

bedrock.util.keyaware_merge_with.cljs$core$IFn$_invoke$arity$variadic = (function (f,maps){
if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.identity,maps))){
var merge_entry = (function (m,e){
var k = cljs.core.first.call(null,e);
var v = cljs.core.second.call(null,e);
if(cljs.core.contains_QMARK_.call(null,m,k)){
return cljs.core.assoc.call(null,m,k,f.call(null,k,cljs.core.get.call(null,m,k),v));
} else {
return cljs.core.assoc.call(null,m,k,v);
}
});
var merge2 = ((function (merge_entry){
return (function (m1,m2){
return cljs.core.reduce.call(null,merge_entry,(function (){var or__28052__auto__ = m1;
if(cljs.core.truth_(or__28052__auto__)){
return or__28052__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})(),cljs.core.seq.call(null,m2));
});})(merge_entry))
;
return cljs.core.reduce.call(null,merge2,maps);
} else {
return null;
}
});

bedrock.util.keyaware_merge_with.cljs$lang$maxFixedArity = (1);

bedrock.util.keyaware_merge_with.cljs$lang$applyTo = (function (seq34889){
var G__34890 = cljs.core.first.call(null,seq34889);
var seq34889__$1 = cljs.core.next.call(null,seq34889);
return bedrock.util.keyaware_merge_with.cljs$core$IFn$_invoke$arity$variadic(G__34890,seq34889__$1);
});

/**
 * As outer join, but takes a merging function that is applied to combine
 * all 'rows' that result in the same key-value, (from left to right).
 * 
 * Example:
 * 
 *   (outer-join-with vector
 *                 (comp even? :a)
 *                 [{:a 1 :b 10 :c 100}{:a 2 :b 20 :c 200}{:a 2 :b 5 :c 500}]
 *                 [{:a 2 :b 20 :d 200}{:a 2 :b 25 :d 200}{:a 3 :b 30 :d 300}])
 *   ==> ([{:a 1, :b 10, :c 100} {:a 3, :b 30, :d 300}]
 *     [{:a 2, :b 20, :c 200} {:a 2, :b 5, :c 500}
 *      {:a 2, :b 20, :d 200} {:a 2, :b 25, :d 200}])
 * 
 *   (outer-join-with (comp count list)
 *                 :a
 *                 [{:a 1 :b 10 :c 100}{:a 2 :b 20 :c 200}]
 *                 [{:a 2 :b 20 :d 200}{:a 3 :b 30 :d 300}])
 *   ==> (1 2 1)
 * 
 *   (outer-join-with (comp + :c)
 *                 :a
 *                 [{:a 1 :b 10 :c 100}{:a 2 :b 20 :c 200}]
 *                 [{:a 2 :b 20 :d 200}{:a 3 :b 30 :d 300}])
 * ==> (100 200 nil)
 */
bedrock.util.outer_join_with = (function bedrock$util$outer_join_with(var_args){
var args__29230__auto__ = [];
var len__29223__auto___34897 = arguments.length;
var i__29224__auto___34898 = (0);
while(true){
if((i__29224__auto___34898 < len__29223__auto___34897)){
args__29230__auto__.push((arguments[i__29224__auto___34898]));

var G__34899 = (i__29224__auto___34898 + (1));
i__29224__auto___34898 = G__34899;
continue;
} else {
}
break;
}

var argseq__29231__auto__ = ((((2) < args__29230__auto__.length))?(new cljs.core.IndexedSeq(args__29230__auto__.slice((2)),(0),null)):null);
return bedrock.util.outer_join_with.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__29231__auto__);
});

bedrock.util.outer_join_with.cljs$core$IFn$_invoke$arity$variadic = (function (merge_fn,key_fn,colls){
return cljs.core.map.call(null,cljs.core.partial.call(null,cljs.core.apply,merge_fn),cljs.core.vals.call(null,cljs.core.apply.call(null,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.concat),cljs.core.map.call(null,cljs.core.partial.call(null,cljs.core.group_by,key_fn),colls))));
});

bedrock.util.outer_join_with.cljs$lang$maxFixedArity = (2);

bedrock.util.outer_join_with.cljs$lang$applyTo = (function (seq34894){
var G__34895 = cljs.core.first.call(null,seq34894);
var seq34894__$1 = cljs.core.next.call(null,seq34894);
var G__34896 = cljs.core.first.call(null,seq34894__$1);
var seq34894__$2 = cljs.core.next.call(null,seq34894__$1);
return bedrock.util.outer_join_with.cljs$core$IFn$_invoke$arity$variadic(G__34895,G__34896,seq34894__$2);
});

/**
 * Outer join of zero or more collections of maps ('rows' or rather: merge'able values),
 *   by a key-function.
 *   When two or more maps with the same key value (ie. value of applying the
 *   key-function to the map), they are merged in order from left to right.
 * 
 *   Be aware that maps where the key-function returns nil are included.
 *   Duplicates are not removed.
 * 
 *   Examples:
 * 
 *   (outer-join :a [{:a 1 :b 10 :c 100}{:a 2 :b 20 :c 200}]
 *               [{:a 2 :b 20 :d 200}{:a 3 :b 30 :d 300}])
 *   ==> ({:a 1, :b 10, :c 100} {:a 2, :b 20, :c 200, :d 200} {:a 3, :b 30, :d 300})
 * 
 *   (outer-join :a [{:a 1 :b 10 :c 100}{:a 2 :b 20 :c 200}]
 *               [{:a 2 :b 20 :d 200}{:a 2 :b 25 :d 200}{:a 3 :b 30 :d 300}])
 *   ==> ({:a 1, :b 10, :c 100} {:a 2, :b 25, :c 200, :d 200} {:a 3, :b 30, :d 300})
 * 
 *   (outer-join :x [{:a 1 :b 10 :c 100}{:a 2 :b 20 :c 200}]
 *               [{:a 2 :b 20 :d 200}{:a 2 :b 25 :d 200}{:a 3 :b 30 :d 300}])
 *   ==> ({:a 3, :b 30, :c 200, :d 300})
 * 
 *   (outer-join :a [{:a 1 :b 10 :c 100}{:a 2 :b 20 :c 200}{:a 2 :b 5 :c 500}]
 *               [{:a 2 :b 20 :d 200}{:a 2 :b 25 :d 200}{:a 3 :b 30 :d 300}])
 *   ==> ({:a 1, :b 10, :c 100} {:a 2, :b 25, :c 500, :d 200} {:a 3, :b 30, :d 300})
 * 
 *   (outer-join :b [{:a 1 :b 10 :c 100}{:a 2 :b 20 :c 200}{:a 2 :b 5 :c 500}]
 *               [{:a 2 :b 20 :d 200}{:a 2 :b 25 :d 200}{:a 3 :b 30 :d 300}])
 *   ==> ({:a 1, :b 10, :c 100} {:a 2, :b 20, :c 200, :d 200}
 *     {:a 2, :b 5, :c 500} {:a 2, :b 25, :d 200} {:a 3, :b 30, :d 300})
 * 
 *   (outer-join (juxt :a :b)
 *            [{:a 1 :b 10 :c 100}{:a 2 :b 20 :c 200}{:a 2 :b 5 :c 500}]
 *            [{:a 2 :b 20 :d 200}{:a 2 :b 25 :d 200}{:a 3 :b 30 :d 300}])
 *   ==> ({:a 1, :b 10, :c 100} {:a 2, :b 20, :c 200, :d 200} {:a 2, :b 5, :c 500}
 *     {:a 2, :b 25, :d 200} {:a 3, :b 30, :d 300})
 * 
 *   (outer-join (constantly nil)
 *          [{:a 1 :b 10 :c 100}{:a 2 :b 20 :c 200}{:a 2 :b 5 :c 500}]
 *          [{:a 2 :b 20 :d 200}{:a 2 :b 25 :d 200}{:a 3 :b 30 :d 300}])
 *   ==> ({:a 3, :b 30, :c 500, :d 300})
 * 
 *   (outer-join (comp even? :a)
 *            [{:a 1 :b 10 :c 100}{:a 2 :b 20 :c 200}{:a 2 :b 5 :c 500}]
 *            [{:a 2 :b 20 :d 200}{:a 2 :b 25 :d 200}{:a 3 :b 30 :d 300}]
 *   ==> ({:a 3, :b 30, :c 100, :d 300} {:a 2, :b 25, :c 500, :d 200})
 */
bedrock.util.outer_join = (function bedrock$util$outer_join(var_args){
var args__29230__auto__ = [];
var len__29223__auto___34902 = arguments.length;
var i__29224__auto___34903 = (0);
while(true){
if((i__29224__auto___34903 < len__29223__auto___34902)){
args__29230__auto__.push((arguments[i__29224__auto___34903]));

var G__34904 = (i__29224__auto___34903 + (1));
i__29224__auto___34903 = G__34904;
continue;
} else {
}
break;
}

var argseq__29231__auto__ = ((((1) < args__29230__auto__.length))?(new cljs.core.IndexedSeq(args__29230__auto__.slice((1)),(0),null)):null);
return bedrock.util.outer_join.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__29231__auto__);
});

bedrock.util.outer_join.cljs$core$IFn$_invoke$arity$variadic = (function (key_fn,colls){
return cljs.core.apply.call(null,bedrock.util.outer_join_with,cljs.core.merge,key_fn,colls);
});

bedrock.util.outer_join.cljs$lang$maxFixedArity = (1);

bedrock.util.outer_join.cljs$lang$applyTo = (function (seq34900){
var G__34901 = cljs.core.first.call(null,seq34900);
var seq34900__$1 = cljs.core.next.call(null,seq34900);
return bedrock.util.outer_join.cljs$core$IFn$_invoke$arity$variadic(G__34901,seq34900__$1);
});

/**
 * Cross join of over two collections, with optional
 *   predicate (row1,row2 -> bool) and merge-function.
 *   Default merge-function is the standard merge, making the
 *   function suitable for non-relation operations too.
 *   Duplicates are not removed.
 * 
 *   Example:
 * 
 *   (cross-join [{:a 1} {:a 2}] [{:b 1} {:b 2} {:b 3}])
 *   ==> ({:a 1, :b 1} {:a 1, :b 2} {:a 1, :b 3}
 *     {:a 2, :b 1} {:a 2, :b 2} {:a 2, :b 3})
 * 
 *   (cross-join [] [{:b 1} {:b 2} {:b 3}])
 *   ==> nil
 * 
 *   (cross-join [{:a 1 :x 'one} {:a 2 :x 'two}]
 *            [{:b 1} {:b 2 :x 'this :y 'is-it} {:b 3 :x 'that}])
 *   ==> ({:a 1, :x one, :b 1} {:a 1, :x this, :b 2, :y is-it} {:a 1, :x that, :b 3}
 *     {:a 2, :x two, :b 1} {:a 2, :x this, :b 2, :y is-it} {:a 2, :x that, :b 3}
 * 
 *   (cross-join [{:a 1 :x 'one} {:a 2 :x 'two}]
 *            [{:b 1} {:b 2 :x 'this :y 'is-it} {:b 3 :x 'that}]
 *            #(= (:a %) (:b %2)))
 *   ==> ({:a 1, :x one, :b 1} {:a 2, :x this, :b 2, :y is-it})
 * 
 *   (cross-join [{:a 1 :x 'one} {:a 2 :x 'two}]
 *            [{:b 1} {:b 2 :x 'this :y 'is-it} {:b 3 :x 'that}]
 *            #(=(:a %) (:b %2))
 *            #(assoc % :z %2))
 *   ==> ({:a 1, :x one, :z {:b 1}} {:a 2, :x two, :z {:b 2, :x this, :y is-it}})
 * 
 *   (cross-join [3 5 7 8] [100 200 300 401] #(even? %2) +)
 *   ==> (103 203 303 105 205 305 107 207 307 108 208 308)
 */
bedrock.util.cross_join = (function bedrock$util$cross_join(var_args){
var args__29230__auto__ = [];
var len__29223__auto___34918 = arguments.length;
var i__29224__auto___34919 = (0);
while(true){
if((i__29224__auto___34919 < len__29223__auto___34918)){
args__29230__auto__.push((arguments[i__29224__auto___34919]));

var G__34920 = (i__29224__auto___34919 + (1));
i__29224__auto___34919 = G__34920;
continue;
} else {
}
break;
}

var argseq__29231__auto__ = ((((2) < args__29230__auto__.length))?(new cljs.core.IndexedSeq(args__29230__auto__.slice((2)),(0),null)):null);
return bedrock.util.cross_join.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__29231__auto__);
});

bedrock.util.cross_join.cljs$core$IFn$_invoke$arity$variadic = (function (rel1,rel2,p__34908){
var vec__34909 = p__34908;
var where = cljs.core.nth.call(null,vec__34909,(0),null);
var merge_fn = cljs.core.nth.call(null,vec__34909,(1),null);
return cljs.core.seq.call(null,(function (){var iter__28860__auto__ = ((function (vec__34909,where,merge_fn){
return (function bedrock$util$iter__34912(s__34913){
return (new cljs.core.LazySeq(null,((function (vec__34909,where,merge_fn){
return (function (){
var s__34913__$1 = s__34913;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__34913__$1);
if(temp__4657__auto__){
var xs__5205__auto__ = temp__4657__auto__;
var r1 = cljs.core.first.call(null,xs__5205__auto__);
var iterys__28856__auto__ = ((function (s__34913__$1,r1,xs__5205__auto__,temp__4657__auto__,vec__34909,where,merge_fn){
return (function bedrock$util$iter__34912_$_iter__34914(s__34915){
return (new cljs.core.LazySeq(null,((function (s__34913__$1,r1,xs__5205__auto__,temp__4657__auto__,vec__34909,where,merge_fn){
return (function (){
var s__34915__$1 = s__34915;
while(true){
var temp__4657__auto____$1 = cljs.core.seq.call(null,s__34915__$1);
if(temp__4657__auto____$1){
var s__34915__$2 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__34915__$2)){
var c__28858__auto__ = cljs.core.chunk_first.call(null,s__34915__$2);
var size__28859__auto__ = cljs.core.count.call(null,c__28858__auto__);
var b__34917 = cljs.core.chunk_buffer.call(null,size__28859__auto__);
if((function (){var i__34916 = (0);
while(true){
if((i__34916 < size__28859__auto__)){
var r2 = cljs.core._nth.call(null,c__28858__auto__,i__34916);
if(cljs.core.truth_((cljs.core.truth_(where)?where.call(null,r1,r2):true))){
cljs.core.chunk_append.call(null,b__34917,(function (){var or__28052__auto__ = merge_fn;
if(cljs.core.truth_(or__28052__auto__)){
return or__28052__auto__;
} else {
return cljs.core.merge;
}
})().call(null,r1,r2));

var G__34921 = (i__34916 + (1));
i__34916 = G__34921;
continue;
} else {
var G__34922 = (i__34916 + (1));
i__34916 = G__34922;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__34917),bedrock$util$iter__34912_$_iter__34914.call(null,cljs.core.chunk_rest.call(null,s__34915__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__34917),null);
}
} else {
var r2 = cljs.core.first.call(null,s__34915__$2);
if(cljs.core.truth_((cljs.core.truth_(where)?where.call(null,r1,r2):true))){
return cljs.core.cons.call(null,(function (){var or__28052__auto__ = merge_fn;
if(cljs.core.truth_(or__28052__auto__)){
return or__28052__auto__;
} else {
return cljs.core.merge;
}
})().call(null,r1,r2),bedrock$util$iter__34912_$_iter__34914.call(null,cljs.core.rest.call(null,s__34915__$2)));
} else {
var G__34923 = cljs.core.rest.call(null,s__34915__$2);
s__34915__$1 = G__34923;
continue;
}
}
} else {
return null;
}
break;
}
});})(s__34913__$1,r1,xs__5205__auto__,temp__4657__auto__,vec__34909,where,merge_fn))
,null,null));
});})(s__34913__$1,r1,xs__5205__auto__,temp__4657__auto__,vec__34909,where,merge_fn))
;
var fs__28857__auto__ = cljs.core.seq.call(null,iterys__28856__auto__.call(null,rel2));
if(fs__28857__auto__){
return cljs.core.concat.call(null,fs__28857__auto__,bedrock$util$iter__34912.call(null,cljs.core.rest.call(null,s__34913__$1)));
} else {
var G__34924 = cljs.core.rest.call(null,s__34913__$1);
s__34913__$1 = G__34924;
continue;
}
} else {
return null;
}
break;
}
});})(vec__34909,where,merge_fn))
,null,null));
});})(vec__34909,where,merge_fn))
;
return iter__28860__auto__.call(null,rel1);
})());
});

bedrock.util.cross_join.cljs$lang$maxFixedArity = (2);

bedrock.util.cross_join.cljs$lang$applyTo = (function (seq34905){
var G__34906 = cljs.core.first.call(null,seq34905);
var seq34905__$1 = cljs.core.next.call(null,seq34905);
var G__34907 = cljs.core.first.call(null,seq34905__$1);
var seq34905__$2 = cljs.core.next.call(null,seq34905__$1);
return bedrock.util.cross_join.cljs$core$IFn$_invoke$arity$variadic(G__34906,G__34907,seq34905__$2);
});

/**
 * Applies f to args if f is a function, otherwise returns f
 */
bedrock.util._QMARK_call = (function bedrock$util$_QMARK_call(var_args){
var args__29230__auto__ = [];
var len__29223__auto___34927 = arguments.length;
var i__29224__auto___34928 = (0);
while(true){
if((i__29224__auto___34928 < len__29223__auto___34927)){
args__29230__auto__.push((arguments[i__29224__auto___34928]));

var G__34929 = (i__29224__auto___34928 + (1));
i__29224__auto___34928 = G__34929;
continue;
} else {
}
break;
}

var argseq__29231__auto__ = ((((1) < args__29230__auto__.length))?(new cljs.core.IndexedSeq(args__29230__auto__.slice((1)),(0),null)):null);
return bedrock.util._QMARK_call.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__29231__auto__);
});

bedrock.util._QMARK_call.cljs$core$IFn$_invoke$arity$variadic = (function (f,args){
if(cljs.core.fn_QMARK_.call(null,f)){
return cljs.core.apply.call(null,f,args);
} else {
return f;
}
});

bedrock.util._QMARK_call.cljs$lang$maxFixedArity = (1);

bedrock.util._QMARK_call.cljs$lang$applyTo = (function (seq34925){
var G__34926 = cljs.core.first.call(null,seq34925);
var seq34925__$1 = cljs.core.next.call(null,seq34925);
return bedrock.util._QMARK_call.cljs$core$IFn$_invoke$arity$variadic(G__34926,seq34925__$1);
});

/**
 * Applies f to args if f is a function, otherwise returns first arg
 */
bedrock.util._QMARK_transform = (function bedrock$util$_QMARK_transform(var_args){
var args__29230__auto__ = [];
var len__29223__auto___34936 = arguments.length;
var i__29224__auto___34937 = (0);
while(true){
if((i__29224__auto___34937 < len__29223__auto___34936)){
args__29230__auto__.push((arguments[i__29224__auto___34937]));

var G__34938 = (i__29224__auto___34937 + (1));
i__29224__auto___34937 = G__34938;
continue;
} else {
}
break;
}

var argseq__29231__auto__ = ((((1) < args__29230__auto__.length))?(new cljs.core.IndexedSeq(args__29230__auto__.slice((1)),(0),null)):null);
return bedrock.util._QMARK_transform.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__29231__auto__);
});

bedrock.util._QMARK_transform.cljs$core$IFn$_invoke$arity$variadic = (function (f,p__34932){
var vec__34933 = p__34932;
var arg0 = cljs.core.nth.call(null,vec__34933,(0),null);
var args = vec__34933;
if(cljs.core.fn_QMARK_.call(null,f)){
return cljs.core.apply.call(null,f,args);
} else {
return arg0;
}
});

bedrock.util._QMARK_transform.cljs$lang$maxFixedArity = (1);

bedrock.util._QMARK_transform.cljs$lang$applyTo = (function (seq34930){
var G__34931 = cljs.core.first.call(null,seq34930);
var seq34930__$1 = cljs.core.next.call(null,seq34930);
return bedrock.util._QMARK_transform.cljs$core$IFn$_invoke$arity$variadic(G__34931,seq34930__$1);
});

/**
 * Derefs argument if possible, otherwise just returns it unchanged
 */
bedrock.util._QMARK_deref = (function bedrock$util$_QMARK_deref(x){
if(((!((x == null)))?((((x.cljs$lang$protocol_mask$partition0$ & (32768))) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$core$IDeref$)))?true:(((!x.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,x):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,x))){
return cljs.core.deref.call(null,x);
} else {
return x;
}
});
/**
 * If condition holds, transform args by applying f to args, otherwise return first arg
 */
bedrock.util.call_when = (function bedrock$util$call_when(var_args){
var args__29230__auto__ = [];
var len__29223__auto___34944 = arguments.length;
var i__29224__auto___34945 = (0);
while(true){
if((i__29224__auto___34945 < len__29223__auto___34944)){
args__29230__auto__.push((arguments[i__29224__auto___34945]));

var G__34946 = (i__29224__auto___34945 + (1));
i__29224__auto___34945 = G__34946;
continue;
} else {
}
break;
}

var argseq__29231__auto__ = ((((3) < args__29230__auto__.length))?(new cljs.core.IndexedSeq(args__29230__auto__.slice((3)),(0),null)):null);
return bedrock.util.call_when.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__29231__auto__);
});

bedrock.util.call_when.cljs$core$IFn$_invoke$arity$variadic = (function (condition,f,arg0,rest){
if(cljs.core.truth_(condition)){
return cljs.core.apply.call(null,f,arg0,rest);
} else {
return arg0;
}
});

bedrock.util.call_when.cljs$lang$maxFixedArity = (3);

bedrock.util.call_when.cljs$lang$applyTo = (function (seq34940){
var G__34941 = cljs.core.first.call(null,seq34940);
var seq34940__$1 = cljs.core.next.call(null,seq34940);
var G__34942 = cljs.core.first.call(null,seq34940__$1);
var seq34940__$2 = cljs.core.next.call(null,seq34940__$1);
var G__34943 = cljs.core.first.call(null,seq34940__$2);
var seq34940__$3 = cljs.core.next.call(null,seq34940__$2);
return bedrock.util.call_when.cljs$core$IFn$_invoke$arity$variadic(G__34941,G__34942,G__34943,seq34940__$3);
});

/**
 * Promotes a proper non-sequential to a list of one element, and turns non-list sequentials into seq's
 */
bedrock.util.listify = (function bedrock$util$listify(x){
if(cljs.core.list_QMARK_.call(null,x)){
return x;
} else {
if(cljs.core.sequential_QMARK_.call(null,x)){
return cljs.core.seq.call(null,x);
} else {
if((x == null)){
return null;
} else {
var x__28914__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__28914__auto__);

}
}
}
});
/**
 * Cartesian product of ore or more sequences. Threats scalars as lists of one element
 */
bedrock.util.cartesian_product = (function bedrock$util$cartesian_product(var_args){
var G__34950 = arguments.length;
switch (G__34950) {
case 0:
return bedrock.util.cartesian_product.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return bedrock.util.cartesian_product.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
var args_arr__29242__auto__ = [];
var len__29223__auto___34958 = arguments.length;
var i__29224__auto___34959 = (0);
while(true){
if((i__29224__auto___34959 < len__29223__auto___34958)){
args_arr__29242__auto__.push((arguments[i__29224__auto___34959]));

var G__34960 = (i__29224__auto___34959 + (1));
i__29224__auto___34959 = G__34960;
continue;
} else {
}
break;
}

var argseq__29243__auto__ = (new cljs.core.IndexedSeq(args_arr__29242__auto__.slice((1)),(0),null));
return bedrock.util.cartesian_product.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__29243__auto__);

}
});

bedrock.util.cartesian_product.cljs$core$IFn$_invoke$arity$0 = (function (){
return null;
});

bedrock.util.cartesian_product.cljs$core$IFn$_invoke$arity$1 = (function (x){
return cljs.core.map.call(null,cljs.core.list,bedrock.util.listify.call(null,x));
});

bedrock.util.cartesian_product.cljs$core$IFn$_invoke$arity$variadic = (function (x,xs){
var iter__28860__auto__ = (function bedrock$util$iter__34951(s__34952){
return (new cljs.core.LazySeq(null,(function (){
var s__34952__$1 = s__34952;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__34952__$1);
if(temp__4657__auto__){
var xs__5205__auto__ = temp__4657__auto__;
var a = cljs.core.first.call(null,xs__5205__auto__);
var iterys__28856__auto__ = ((function (s__34952__$1,a,xs__5205__auto__,temp__4657__auto__){
return (function bedrock$util$iter__34951_$_iter__34953(s__34954){
return (new cljs.core.LazySeq(null,((function (s__34952__$1,a,xs__5205__auto__,temp__4657__auto__){
return (function (){
var s__34954__$1 = s__34954;
while(true){
var temp__4657__auto____$1 = cljs.core.seq.call(null,s__34954__$1);
if(temp__4657__auto____$1){
var s__34954__$2 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__34954__$2)){
var c__28858__auto__ = cljs.core.chunk_first.call(null,s__34954__$2);
var size__28859__auto__ = cljs.core.count.call(null,c__28858__auto__);
var b__34956 = cljs.core.chunk_buffer.call(null,size__28859__auto__);
if((function (){var i__34955 = (0);
while(true){
if((i__34955 < size__28859__auto__)){
var b = cljs.core._nth.call(null,c__28858__auto__,i__34955);
cljs.core.chunk_append.call(null,b__34956,cljs.core.conj.call(null,b,a));

var G__34961 = (i__34955 + (1));
i__34955 = G__34961;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__34956),bedrock$util$iter__34951_$_iter__34953.call(null,cljs.core.chunk_rest.call(null,s__34954__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__34956),null);
}
} else {
var b = cljs.core.first.call(null,s__34954__$2);
return cljs.core.cons.call(null,cljs.core.conj.call(null,b,a),bedrock$util$iter__34951_$_iter__34953.call(null,cljs.core.rest.call(null,s__34954__$2)));
}
} else {
return null;
}
break;
}
});})(s__34952__$1,a,xs__5205__auto__,temp__4657__auto__))
,null,null));
});})(s__34952__$1,a,xs__5205__auto__,temp__4657__auto__))
;
var fs__28857__auto__ = cljs.core.seq.call(null,iterys__28856__auto__.call(null,cljs.core.apply.call(null,bedrock.util.cartesian_product,xs)));
if(fs__28857__auto__){
return cljs.core.concat.call(null,fs__28857__auto__,bedrock$util$iter__34951.call(null,cljs.core.rest.call(null,s__34952__$1)));
} else {
var G__34962 = cljs.core.rest.call(null,s__34952__$1);
s__34952__$1 = G__34962;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__28860__auto__.call(null,bedrock.util.listify.call(null,x));
});

bedrock.util.cartesian_product.cljs$lang$applyTo = (function (seq34948){
var G__34949 = cljs.core.first.call(null,seq34948);
var seq34948__$1 = cljs.core.next.call(null,seq34948);
return bedrock.util.cartesian_product.cljs$core$IFn$_invoke$arity$variadic(G__34949,seq34948__$1);
});

bedrock.util.cartesian_product.cljs$lang$maxFixedArity = (1);

/**
 * Turn argument into a set, if it isn't one already.
 *   nil is turned into an empty set.
 */
bedrock.util._QMARK_set = (function bedrock$util$_QMARK_set(x){
if(cljs.core.set_QMARK_.call(null,x)){
return x;
} else {
if((x == null)){
return cljs.core.PersistentHashSet.EMPTY;
} else {
return cljs.core.PersistentHashSet.createAsIfByAssoc([x]);

}
}
});
/**
 * Is argument a collection with a plurality of elements?
 */
bedrock.util.plurality_QMARK_ = (function bedrock$util$plurality_QMARK_(x){
return (cljs.core.count.call(null,x) > (1));
});
/**
 * Makes an identity function with optional side-effects and optional extra parameters
 */
bedrock.util._QMARK_side_effector = (function bedrock$util$_QMARK_side_effector(var_args){
var args__29230__auto__ = [];
var len__29223__auto___34970 = arguments.length;
var i__29224__auto___34971 = (0);
while(true){
if((i__29224__auto___34971 < len__29223__auto___34970)){
args__29230__auto__.push((arguments[i__29224__auto___34971]));

var G__34972 = (i__29224__auto___34971 + (1));
i__29224__auto___34971 = G__34972;
continue;
} else {
}
break;
}

var argseq__29231__auto__ = ((((0) < args__29230__auto__.length))?(new cljs.core.IndexedSeq(args__29230__auto__.slice((0)),(0),null)):null);
return bedrock.util._QMARK_side_effector.cljs$core$IFn$_invoke$arity$variadic(argseq__29231__auto__);
});

bedrock.util._QMARK_side_effector.cljs$core$IFn$_invoke$arity$variadic = (function (side_effects){
return (function() { 
var G__34973__delegate = function (a,args){
var seq__34964_34974 = cljs.core.seq.call(null,side_effects);
var chunk__34966_34975 = null;
var count__34967_34976 = (0);
var i__34968_34977 = (0);
while(true){
if((i__34968_34977 < count__34967_34976)){
var f_34978 = cljs.core._nth.call(null,chunk__34966_34975,i__34968_34977);
if(cljs.core.fn_QMARK_.call(null,f_34978)){
cljs.core.apply.call(null,f_34978,a,args);

var G__34979 = seq__34964_34974;
var G__34980 = chunk__34966_34975;
var G__34981 = count__34967_34976;
var G__34982 = (i__34968_34977 + (1));
seq__34964_34974 = G__34979;
chunk__34966_34975 = G__34980;
count__34967_34976 = G__34981;
i__34968_34977 = G__34982;
continue;
} else {
var G__34983 = seq__34964_34974;
var G__34984 = chunk__34966_34975;
var G__34985 = count__34967_34976;
var G__34986 = (i__34968_34977 + (1));
seq__34964_34974 = G__34983;
chunk__34966_34975 = G__34984;
count__34967_34976 = G__34985;
i__34968_34977 = G__34986;
continue;
}
} else {
var temp__4657__auto___34987 = cljs.core.seq.call(null,seq__34964_34974);
if(temp__4657__auto___34987){
var seq__34964_34988__$1 = temp__4657__auto___34987;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34964_34988__$1)){
var c__28891__auto___34989 = cljs.core.chunk_first.call(null,seq__34964_34988__$1);
var G__34990 = cljs.core.chunk_rest.call(null,seq__34964_34988__$1);
var G__34991 = c__28891__auto___34989;
var G__34992 = cljs.core.count.call(null,c__28891__auto___34989);
var G__34993 = (0);
seq__34964_34974 = G__34990;
chunk__34966_34975 = G__34991;
count__34967_34976 = G__34992;
i__34968_34977 = G__34993;
continue;
} else {
var f_34994 = cljs.core.first.call(null,seq__34964_34988__$1);
if(cljs.core.fn_QMARK_.call(null,f_34994)){
cljs.core.apply.call(null,f_34994,a,args);

var G__34995 = cljs.core.next.call(null,seq__34964_34988__$1);
var G__34996 = null;
var G__34997 = (0);
var G__34998 = (0);
seq__34964_34974 = G__34995;
chunk__34966_34975 = G__34996;
count__34967_34976 = G__34997;
i__34968_34977 = G__34998;
continue;
} else {
var G__34999 = cljs.core.next.call(null,seq__34964_34988__$1);
var G__35000 = null;
var G__35001 = (0);
var G__35002 = (0);
seq__34964_34974 = G__34999;
chunk__34966_34975 = G__35000;
count__34967_34976 = G__35001;
i__34968_34977 = G__35002;
continue;
}
}
} else {
}
}
break;
}

return a;
};
var G__34973 = function (a,var_args){
var args = null;
if (arguments.length > 1) {
var G__35003__i = 0, G__35003__a = new Array(arguments.length -  1);
while (G__35003__i < G__35003__a.length) {G__35003__a[G__35003__i] = arguments[G__35003__i + 1]; ++G__35003__i;}
  args = new cljs.core.IndexedSeq(G__35003__a,0,null);
} 
return G__34973__delegate.call(this,a,args);};
G__34973.cljs$lang$maxFixedArity = 1;
G__34973.cljs$lang$applyTo = (function (arglist__35004){
var a = cljs.core.first(arglist__35004);
var args = cljs.core.rest(arglist__35004);
return G__34973__delegate(a,args);
});
G__34973.cljs$core$IFn$_invoke$arity$variadic = G__34973__delegate;
return G__34973;
})()
;
});

bedrock.util._QMARK_side_effector.cljs$lang$maxFixedArity = (0);

bedrock.util._QMARK_side_effector.cljs$lang$applyTo = (function (seq34963){
return bedrock.util._QMARK_side_effector.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34963));
});

/**
 * Performs side-effect f on argument-list, then returns first arg
 */
bedrock.util.side_effect = (function bedrock$util$side_effect(var_args){
var args__29230__auto__ = [];
var len__29223__auto___35008 = arguments.length;
var i__29224__auto___35009 = (0);
while(true){
if((i__29224__auto___35009 < len__29223__auto___35008)){
args__29230__auto__.push((arguments[i__29224__auto___35009]));

var G__35010 = (i__29224__auto___35009 + (1));
i__29224__auto___35009 = G__35010;
continue;
} else {
}
break;
}

var argseq__29231__auto__ = ((((2) < args__29230__auto__.length))?(new cljs.core.IndexedSeq(args__29230__auto__.slice((2)),(0),null)):null);
return bedrock.util.side_effect.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__29231__auto__);
});

bedrock.util.side_effect.cljs$core$IFn$_invoke$arity$variadic = (function (f,a,rest){
cljs.core.apply.call(null,f,a,rest);

return a;
});

bedrock.util.side_effect.cljs$lang$maxFixedArity = (2);

bedrock.util.side_effect.cljs$lang$applyTo = (function (seq35005){
var G__35006 = cljs.core.first.call(null,seq35005);
var seq35005__$1 = cljs.core.next.call(null,seq35005);
var G__35007 = cljs.core.first.call(null,seq35005__$1);
var seq35005__$2 = cljs.core.next.call(null,seq35005__$1);
return bedrock.util.side_effect.cljs$core$IFn$_invoke$arity$variadic(G__35006,G__35007,seq35005__$2);
});

/**
 * As map, but for side-effects instead of result. Returns the last of the collections to map over
 */
bedrock.util.do_map = (function bedrock$util$do_map(var_args){
var args__29230__auto__ = [];
var len__29223__auto___35013 = arguments.length;
var i__29224__auto___35014 = (0);
while(true){
if((i__29224__auto___35014 < len__29223__auto___35013)){
args__29230__auto__.push((arguments[i__29224__auto___35014]));

var G__35015 = (i__29224__auto___35014 + (1));
i__29224__auto___35014 = G__35015;
continue;
} else {
}
break;
}

var argseq__29231__auto__ = ((((1) < args__29230__auto__.length))?(new cljs.core.IndexedSeq(args__29230__auto__.slice((1)),(0),null)):null);
return bedrock.util.do_map.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__29231__auto__);
});

bedrock.util.do_map.cljs$core$IFn$_invoke$arity$variadic = (function (f,args){
cljs.core.doall.call(null,cljs.core.apply.call(null,cljs.core.map,f,args));

return cljs.core.last.call(null,args);
});

bedrock.util.do_map.cljs$lang$maxFixedArity = (1);

bedrock.util.do_map.cljs$lang$applyTo = (function (seq35011){
var G__35012 = cljs.core.first.call(null,seq35011);
var seq35011__$1 = cljs.core.next.call(null,seq35011);
return bedrock.util.do_map.cljs$core$IFn$_invoke$arity$variadic(G__35012,seq35011__$1);
});

/**
 * Adds reagent keys to a sequence. Keys will be added where none exist (as meta-data or [:div {:key xxx}]) , and existing keys will not be reused
 */
bedrock.util.add_reagent_keys = (function bedrock$util$add_reagent_keys(xs){
var x = cljs.core.apply.call(null,cljs.core.max,(1),cljs.core.map.call(null,(function (p1__35016_SHARP_){
var or__28052__auto__ = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,p1__35016_SHARP_));
if(cljs.core.truth_(or__28052__auto__)){
return or__28052__auto__;
} else {
var or__28052__auto____$1 = ((cljs.core.vector_QMARK_.call(null,p1__35016_SHARP_))?new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,p1__35016_SHARP_)):null);
if(cljs.core.truth_(or__28052__auto____$1)){
return or__28052__auto____$1;
} else {
return (1);
}
}
}),xs));
return cljs.core.map_indexed.call(null,((function (x){
return (function (i,h){
if(cljs.core.truth_(new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,h)))){
return h;
} else {
return cljs.core.with_meta.call(null,h,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(i + x)], null));
}
});})(x))
,xs);
});
/**
 * Creates a hiccup table
 */
bedrock.util.hiccup_table = (function bedrock$util$hiccup_table(p__35017){
var map__35018 = p__35017;
var map__35018__$1 = ((((!((map__35018 == null)))?((((map__35018.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35018.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35018):map__35018);
var rows = cljs.core.get.call(null,map__35018__$1,new cljs.core.Keyword(null,"rows","rows",850049680));
var f_cell = cljs.core.get.call(null,map__35018__$1,new cljs.core.Keyword(null,"f-cell","f-cell",623030045));
var table_attrib = cljs.core.get.call(null,map__35018__$1,new cljs.core.Keyword(null,"table-attrib","table-attrib",1748405218));
var tr_attrib = cljs.core.get.call(null,map__35018__$1,new cljs.core.Keyword(null,"tr-attrib","tr-attrib",-452873065));
var td_attrib = cljs.core.get.call(null,map__35018__$1,new cljs.core.Keyword(null,"td-attrib","td-attrib",117585519));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table","table",-564943036),bedrock.util._QMARK_call.call(null,table_attrib,rows),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tbody","tbody",-80678300),cljs.core.map_indexed.call(null,((function (map__35018,map__35018__$1,rows,f_cell,table_attrib,tr_attrib,td_attrib){
return (function (r,row){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),r], null),bedrock.util._QMARK_call.call(null,tr_attrib,r,row)),cljs.core.map_indexed.call(null,((function (map__35018,map__35018__$1,rows,f_cell,table_attrib,tr_attrib,td_attrib){
return (function (c,cell){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),c], null),bedrock.util._QMARK_call.call(null,td_attrib,r,c,cell)),(function (){var or__28052__auto__ = f_cell;
if(cljs.core.truth_(or__28052__auto__)){
return or__28052__auto__;
} else {
return cljs.core.identity;
}
})().call(null,cell,r,c)], null);
});})(map__35018,map__35018__$1,rows,f_cell,table_attrib,tr_attrib,td_attrib))
,row)], null);
});})(map__35018,map__35018__$1,rows,f_cell,table_attrib,tr_attrib,td_attrib))
,rows)], null)], null);
});
/**
 * Makes a function wrapper with optional pre and post processing
 */
bedrock.util.wrapper = (function bedrock$util$wrapper(var_args){
var args__29230__auto__ = [];
var len__29223__auto___35029 = arguments.length;
var i__29224__auto___35030 = (0);
while(true){
if((i__29224__auto___35030 < len__29223__auto___35029)){
args__29230__auto__.push((arguments[i__29224__auto___35030]));

var G__35031 = (i__29224__auto___35030 + (1));
i__29224__auto___35030 = G__35031;
continue;
} else {
}
break;
}

var argseq__29231__auto__ = ((((0) < args__29230__auto__.length))?(new cljs.core.IndexedSeq(args__29230__auto__.slice((0)),(0),null)):null);
return bedrock.util.wrapper.cljs$core$IFn$_invoke$arity$variadic(argseq__29231__auto__);
});

bedrock.util.wrapper.cljs$core$IFn$_invoke$arity$variadic = (function (p__35021){
var vec__35022 = p__35021;
var f_pre = cljs.core.nth.call(null,vec__35022,(0),null);
var f_post = cljs.core.nth.call(null,vec__35022,(1),null);
return ((function (vec__35022,f_pre,f_post){
return (function() { 
var G__35032__delegate = function (p__35025){
var vec__35026 = p__35025;
var f = cljs.core.nth.call(null,vec__35026,(0),null);
return cljs.core.comp.call(null,(function (){var or__28052__auto__ = f_post;
if(cljs.core.truth_(or__28052__auto__)){
return or__28052__auto__;
} else {
return cljs.core.identity;
}
})(),(function (){var or__28052__auto__ = f;
if(cljs.core.truth_(or__28052__auto__)){
return or__28052__auto__;
} else {
return cljs.core.identity;
}
})(),(function (){var or__28052__auto__ = f_pre;
if(cljs.core.truth_(or__28052__auto__)){
return or__28052__auto__;
} else {
return cljs.core.identity;
}
})());
};
var G__35032 = function (var_args){
var p__35025 = null;
if (arguments.length > 0) {
var G__35033__i = 0, G__35033__a = new Array(arguments.length -  0);
while (G__35033__i < G__35033__a.length) {G__35033__a[G__35033__i] = arguments[G__35033__i + 0]; ++G__35033__i;}
  p__35025 = new cljs.core.IndexedSeq(G__35033__a,0,null);
} 
return G__35032__delegate.call(this,p__35025);};
G__35032.cljs$lang$maxFixedArity = 0;
G__35032.cljs$lang$applyTo = (function (arglist__35034){
var p__35025 = cljs.core.seq(arglist__35034);
return G__35032__delegate(p__35025);
});
G__35032.cljs$core$IFn$_invoke$arity$variadic = G__35032__delegate;
return G__35032;
})()
;
;})(vec__35022,f_pre,f_post))
});

bedrock.util.wrapper.cljs$lang$maxFixedArity = (0);

bedrock.util.wrapper.cljs$lang$applyTo = (function (seq35020){
return bedrock.util.wrapper.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35020));
});

/**
 * Walks a form, collecting all elements where predicate holds
 */
bedrock.util.walk_collect = (function bedrock$util$walk_collect(pred,form){
var a = cljs.core.atom.call(null,null);
clojure.walk.postwalk.call(null,((function (a){
return (function (e){
if(cljs.core.truth_(pred.call(null,e))){
cljs.core.swap_BANG_.call(null,a,cljs.core.conj,e);
} else {
}

return e;
});})(a))
,form);

return cljs.core.deref.call(null,a);
});
/**
 * Makes a walker-function.
 */
bedrock.util.walker = (function bedrock$util$walker(var_args){
var args__29230__auto__ = [];
var len__29223__auto___35041 = arguments.length;
var i__29224__auto___35042 = (0);
while(true){
if((i__29224__auto___35042 < len__29223__auto___35041)){
args__29230__auto__.push((arguments[i__29224__auto___35042]));

var G__35043 = (i__29224__auto___35042 + (1));
i__29224__auto___35042 = G__35043;
continue;
} else {
}
break;
}

var argseq__29231__auto__ = ((((0) < args__29230__auto__.length))?(new cljs.core.IndexedSeq(args__29230__auto__.slice((0)),(0),null)):null);
return bedrock.util.walker.cljs$core$IFn$_invoke$arity$variadic(argseq__29231__auto__);
});

bedrock.util.walker.cljs$core$IFn$_invoke$arity$variadic = (function (p__35038){
var map__35039 = p__35038;
var map__35039__$1 = ((((!((map__35039 == null)))?((((map__35039.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35039.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35039):map__35039);
var get_children = cljs.core.get.call(null,map__35039__$1,new cljs.core.Keyword(null,"get-children","get-children",777046254));
var update_children = cljs.core.get.call(null,map__35039__$1,new cljs.core.Keyword(null,"update-children","update-children",1871853561));
var pre_children = cljs.core.get.call(null,map__35039__$1,new cljs.core.Keyword(null,"pre-children","pre-children",-2005806566));
var post_children = cljs.core.get.call(null,map__35039__$1,new cljs.core.Keyword(null,"post-children","post-children",-491447836));
var pre_node = cljs.core.get.call(null,map__35039__$1,new cljs.core.Keyword(null,"pre-node","pre-node",1825562715));
var post_node = cljs.core.get.call(null,map__35039__$1,new cljs.core.Keyword(null,"post-node","post-node",110020555));
var pre_root = cljs.core.get.call(null,map__35039__$1,new cljs.core.Keyword(null,"pre-root","pre-root",2066982468));
var post_root = cljs.core.get.call(null,map__35039__$1,new cljs.core.Keyword(null,"post-root","post-root",-304068281));
var root_wrapper = cljs.core.get.call(null,map__35039__$1,new cljs.core.Keyword(null,"root-wrapper","root-wrapper",-1203749997));
var walker = ((function (map__35039,map__35039__$1,get_children,update_children,pre_children,post_children,pre_node,post_node,pre_root,post_root,root_wrapper){
return (function bedrock$util$walker(node){
if(cljs.core.truth_(node)){
return (function (){var or__28052__auto__ = post_node;
if(cljs.core.truth_(or__28052__auto__)){
return or__28052__auto__;
} else {
return cljs.core.identity;
}
})().call(null,walk_children.call(null,(function (){var or__28052__auto__ = pre_node;
if(cljs.core.truth_(or__28052__auto__)){
return or__28052__auto__;
} else {
return cljs.core.identity;
}
})().call(null,node)));
} else {
return null;
}
});})(map__35039,map__35039__$1,get_children,update_children,pre_children,post_children,pre_node,post_node,pre_root,post_root,root_wrapper))
;
var walk_children = ((function (map__35039,map__35039__$1,get_children,update_children,pre_children,post_children,pre_node,post_node,pre_root,post_root,root_wrapper){
return (function bedrock$util$walk_children(node){
var children = (cljs.core.truth_(get_children)?get_children.call(null,node):((cljs.core.sequential_QMARK_.call(null,node))?node:((cljs.core.map_QMARK_.call(null,node))?new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(node):null
)));
var _ = cljs.core.prn.call(null,node,new cljs.core.Keyword(null,"==>","==>",-1505892019),children);
var children_SINGLEQUOTE_ = cljs.core.into.call(null,cljs.core.empty.call(null,children),(((cljs.core.sequential_QMARK_.call(null,children)) && (cljs.core.seq.call(null,children)))?(function (){var or__28052__auto__ = bedrock.util.wrapper.call(null,pre_children,post_children);
if(cljs.core.truth_(or__28052__auto__)){
return or__28052__auto__;
} else {
return cljs.core.identity;
}
})().call(null,cljs.core.partial.call(null,cljs.core.map,walker)).call(null,children):null));
var update_children__$1 = (cljs.core.truth_(update_children)?update_children:((cljs.core.sequential_QMARK_.call(null,node))?cljs.core.comp.call(null,cljs.core.second,cljs.core.list):((cljs.core.map_QMARK_.call(null,node))?((function (children,_,children_SINGLEQUOTE_,map__35039,map__35039__$1,get_children,update_children,pre_children,post_children,pre_node,post_node,pre_root,post_root,root_wrapper){
return (function (p1__35035_SHARP_,p2__35036_SHARP_){
return cljs.core.assoc.call(null,p1__35035_SHARP_,new cljs.core.Keyword(null,"children","children",-940561982),p2__35036_SHARP_);
});})(children,_,children_SINGLEQUOTE_,map__35039,map__35039__$1,get_children,update_children,pre_children,post_children,pre_node,post_node,pre_root,post_root,root_wrapper))
:cljs.core.identity
)));
if(cljs.core.truth_(children)){
return update_children__$1.call(null,node,children_SINGLEQUOTE_);
} else {
return node;
}
});})(map__35039,map__35039__$1,get_children,update_children,pre_children,post_children,pre_node,post_node,pre_root,post_root,root_wrapper))
;
return (function (){var or__28052__auto__ = root_wrapper;
if(cljs.core.truth_(or__28052__auto__)){
return or__28052__auto__;
} else {
return cljs.core.identity;
}
})().call(null,bedrock.util.wrapper.call(null,pre_root,post_root).call(null,walker));
});

bedrock.util.walker.cljs$lang$maxFixedArity = (0);

bedrock.util.walker.cljs$lang$applyTo = (function (seq35037){
return bedrock.util.walker.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35037));
});

/**
 * Flatten a sequence.
 * 
 *   Example:
 * 
 *   (flatten-seq :sub
 *  [{:id 12
 *    :sub [{:id 5 :sub [{:id 67} {:id 99}]}
 *          {:id 50}]}])
 *   ==> ({:id 12, :sub [{:id 5, :sub [{:id 67} {:id 99}]}
 *                  {:id 50}]}
 *     {:id 5, :sub [{:id 67} {:id 99}]}
 *     {:id 67}
 *     {:id 99}
 *     {:id 50})
 */
bedrock.util.flatten_seq = (function bedrock$util$flatten_seq(get_children,xs){
return (function bedrock$util$flatten_seq_$_f(xs__$1){
return cljs.core.mapcat.call(null,(function (x){
return cljs.core.conj.call(null,cljs.core.mapcat.call(null,bedrock$util$flatten_seq_$_f,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [get_children.call(null,x)], null)),x);
}),xs__$1);
}).call(null,xs);
});
/**
 * Walks a sequence of maps, updates children under key k.
 * 
 *   Example:
 * 
 *   (walk-seq
 *     :sub
 *     (fn [this parent] (assoc this :par (:id parent)))
 *     [{:id 12
 *       :sub [{:id 5 :sub [{:id 67} {:id 99}]}
 *      {:id 50}]}])
 *   ==> ({:id 12, :sub ({:id 5
 *                     :sub ({:id 67, :par 5}
 *                           {:id 99, :par 5})
 *                     :par 12}
 *    {:id 50, :par 12})
 *    :par nil})
 */
bedrock.util.walk_seq = (function bedrock$util$walk_seq(k,transform,xs){
return (function bedrock$util$walk_seq_$_f(xs__$1,parent){
var f_SINGLEQUOTE_ = (function (x){
var x__$1 = transform.call(null,x,parent);
if(cljs.core.truth_(k.call(null,x__$1))){
return cljs.core.update.call(null,x__$1,k,bedrock$util$walk_seq_$_f,x__$1);
} else {
return x__$1;
}
});
return cljs.core.map.call(null,f_SINGLEQUOTE_,xs__$1);
}).call(null,xs,null);
});
bedrock.util.provide_BANG_ = (function bedrock$util$provide_BANG_(state,path,id,f){
var map__35044 = cljs.core.get.call(null,cljs.core.deref.call(null,state),path);
var map__35044__$1 = ((((!((map__35044 == null)))?((((map__35044.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35044.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35044):map__35044);
var id_SINGLEQUOTE_ = cljs.core.get.call(null,map__35044__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var v = cljs.core.get.call(null,map__35044__$1,new cljs.core.Keyword(null,"v","v",21465059));
if(cljs.core._EQ_.call(null,id,id_SINGLEQUOTE_)){
return v;
} else {
var v__$1 = f.call(null);
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,path,cljs.core.assoc,new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"v","v",21465059),v__$1);

return v__$1;
}
});
/**
 * Maps a function over the keys of an associative collection.
 */
bedrock.util.map_keys = (function bedrock$util$map_keys(f,coll){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__28860__auto__ = (function bedrock$util$map_keys_$_iter__35046(s__35047){
return (new cljs.core.LazySeq(null,(function (){
var s__35047__$1 = s__35047;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__35047__$1);
if(temp__4657__auto__){
var s__35047__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__35047__$2)){
var c__28858__auto__ = cljs.core.chunk_first.call(null,s__35047__$2);
var size__28859__auto__ = cljs.core.count.call(null,c__28858__auto__);
var b__35049 = cljs.core.chunk_buffer.call(null,size__28859__auto__);
if((function (){var i__35048 = (0);
while(true){
if((i__35048 < size__28859__auto__)){
var vec__35050 = cljs.core._nth.call(null,c__28858__auto__,i__35048);
var k = cljs.core.nth.call(null,vec__35050,(0),null);
var v = cljs.core.nth.call(null,vec__35050,(1),null);
cljs.core.chunk_append.call(null,b__35049,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f.call(null,k),v], null));

var G__35056 = (i__35048 + (1));
i__35048 = G__35056;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__35049),bedrock$util$map_keys_$_iter__35046.call(null,cljs.core.chunk_rest.call(null,s__35047__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__35049),null);
}
} else {
var vec__35053 = cljs.core.first.call(null,s__35047__$2);
var k = cljs.core.nth.call(null,vec__35053,(0),null);
var v = cljs.core.nth.call(null,vec__35053,(1),null);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f.call(null,k),v], null),bedrock$util$map_keys_$_iter__35046.call(null,cljs.core.rest.call(null,s__35047__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__28860__auto__.call(null,coll);
})());
});
/**
 * Maps a function over the values of an associative collection.
 */
bedrock.util.map_vals = (function bedrock$util$map_vals(f,coll){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__28860__auto__ = (function bedrock$util$map_vals_$_iter__35057(s__35058){
return (new cljs.core.LazySeq(null,(function (){
var s__35058__$1 = s__35058;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__35058__$1);
if(temp__4657__auto__){
var s__35058__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__35058__$2)){
var c__28858__auto__ = cljs.core.chunk_first.call(null,s__35058__$2);
var size__28859__auto__ = cljs.core.count.call(null,c__28858__auto__);
var b__35060 = cljs.core.chunk_buffer.call(null,size__28859__auto__);
if((function (){var i__35059 = (0);
while(true){
if((i__35059 < size__28859__auto__)){
var vec__35061 = cljs.core._nth.call(null,c__28858__auto__,i__35059);
var k = cljs.core.nth.call(null,vec__35061,(0),null);
var v = cljs.core.nth.call(null,vec__35061,(1),null);
cljs.core.chunk_append.call(null,b__35060,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,f.call(null,v)], null));

var G__35067 = (i__35059 + (1));
i__35059 = G__35067;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__35060),bedrock$util$map_vals_$_iter__35057.call(null,cljs.core.chunk_rest.call(null,s__35058__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__35060),null);
}
} else {
var vec__35064 = cljs.core.first.call(null,s__35058__$2);
var k = cljs.core.nth.call(null,vec__35064,(0),null);
var v = cljs.core.nth.call(null,vec__35064,(1),null);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,f.call(null,v)], null),bedrock$util$map_vals_$_iter__35057.call(null,cljs.core.rest.call(null,s__35058__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__28860__auto__.call(null,coll);
})());
});

//# sourceMappingURL=util.js.map?rel=1507552550101
