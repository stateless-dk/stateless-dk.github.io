// Compiled by ClojureScript 1.9.946 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__36597){
var map__36598 = p__36597;
var map__36598__$1 = ((((!((map__36598 == null)))?((((map__36598.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36598.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36598):map__36598);
var m = map__36598__$1;
var n = cljs.core.get.call(null,map__36598__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__36598__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__4657__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4657__auto__)){
var ns = temp__4657__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__36600_36622 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__36601_36623 = null;
var count__36602_36624 = (0);
var i__36603_36625 = (0);
while(true){
if((i__36603_36625 < count__36602_36624)){
var f_36626 = cljs.core._nth.call(null,chunk__36601_36623,i__36603_36625);
cljs.core.println.call(null,"  ",f_36626);

var G__36627 = seq__36600_36622;
var G__36628 = chunk__36601_36623;
var G__36629 = count__36602_36624;
var G__36630 = (i__36603_36625 + (1));
seq__36600_36622 = G__36627;
chunk__36601_36623 = G__36628;
count__36602_36624 = G__36629;
i__36603_36625 = G__36630;
continue;
} else {
var temp__4657__auto___36631 = cljs.core.seq.call(null,seq__36600_36622);
if(temp__4657__auto___36631){
var seq__36600_36632__$1 = temp__4657__auto___36631;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36600_36632__$1)){
var c__28891__auto___36633 = cljs.core.chunk_first.call(null,seq__36600_36632__$1);
var G__36634 = cljs.core.chunk_rest.call(null,seq__36600_36632__$1);
var G__36635 = c__28891__auto___36633;
var G__36636 = cljs.core.count.call(null,c__28891__auto___36633);
var G__36637 = (0);
seq__36600_36622 = G__36634;
chunk__36601_36623 = G__36635;
count__36602_36624 = G__36636;
i__36603_36625 = G__36637;
continue;
} else {
var f_36638 = cljs.core.first.call(null,seq__36600_36632__$1);
cljs.core.println.call(null,"  ",f_36638);

var G__36639 = cljs.core.next.call(null,seq__36600_36632__$1);
var G__36640 = null;
var G__36641 = (0);
var G__36642 = (0);
seq__36600_36622 = G__36639;
chunk__36601_36623 = G__36640;
count__36602_36624 = G__36641;
i__36603_36625 = G__36642;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_36643 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__28052__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__28052__auto__)){
return or__28052__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_36643);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_36643)))?cljs.core.second.call(null,arglists_36643):arglists_36643));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__36604_36644 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__36605_36645 = null;
var count__36606_36646 = (0);
var i__36607_36647 = (0);
while(true){
if((i__36607_36647 < count__36606_36646)){
var vec__36608_36648 = cljs.core._nth.call(null,chunk__36605_36645,i__36607_36647);
var name_36649 = cljs.core.nth.call(null,vec__36608_36648,(0),null);
var map__36611_36650 = cljs.core.nth.call(null,vec__36608_36648,(1),null);
var map__36611_36651__$1 = ((((!((map__36611_36650 == null)))?((((map__36611_36650.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36611_36650.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36611_36650):map__36611_36650);
var doc_36652 = cljs.core.get.call(null,map__36611_36651__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_36653 = cljs.core.get.call(null,map__36611_36651__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_36649);

cljs.core.println.call(null," ",arglists_36653);

if(cljs.core.truth_(doc_36652)){
cljs.core.println.call(null," ",doc_36652);
} else {
}

var G__36654 = seq__36604_36644;
var G__36655 = chunk__36605_36645;
var G__36656 = count__36606_36646;
var G__36657 = (i__36607_36647 + (1));
seq__36604_36644 = G__36654;
chunk__36605_36645 = G__36655;
count__36606_36646 = G__36656;
i__36607_36647 = G__36657;
continue;
} else {
var temp__4657__auto___36658 = cljs.core.seq.call(null,seq__36604_36644);
if(temp__4657__auto___36658){
var seq__36604_36659__$1 = temp__4657__auto___36658;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36604_36659__$1)){
var c__28891__auto___36660 = cljs.core.chunk_first.call(null,seq__36604_36659__$1);
var G__36661 = cljs.core.chunk_rest.call(null,seq__36604_36659__$1);
var G__36662 = c__28891__auto___36660;
var G__36663 = cljs.core.count.call(null,c__28891__auto___36660);
var G__36664 = (0);
seq__36604_36644 = G__36661;
chunk__36605_36645 = G__36662;
count__36606_36646 = G__36663;
i__36607_36647 = G__36664;
continue;
} else {
var vec__36613_36665 = cljs.core.first.call(null,seq__36604_36659__$1);
var name_36666 = cljs.core.nth.call(null,vec__36613_36665,(0),null);
var map__36616_36667 = cljs.core.nth.call(null,vec__36613_36665,(1),null);
var map__36616_36668__$1 = ((((!((map__36616_36667 == null)))?((((map__36616_36667.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36616_36667.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36616_36667):map__36616_36667);
var doc_36669 = cljs.core.get.call(null,map__36616_36668__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_36670 = cljs.core.get.call(null,map__36616_36668__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_36666);

cljs.core.println.call(null," ",arglists_36670);

if(cljs.core.truth_(doc_36669)){
cljs.core.println.call(null," ",doc_36669);
} else {
}

var G__36671 = cljs.core.next.call(null,seq__36604_36659__$1);
var G__36672 = null;
var G__36673 = (0);
var G__36674 = (0);
seq__36604_36644 = G__36671;
chunk__36605_36645 = G__36672;
count__36606_36646 = G__36673;
i__36607_36647 = G__36674;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__4657__auto__ = cljs.spec.alpha.get_spec.call(null,cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name.call(null,n))].join(''),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__4657__auto__)){
var fnspec = temp__4657__auto__;
cljs.core.print.call(null,"Spec");

var seq__36618 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__36619 = null;
var count__36620 = (0);
var i__36621 = (0);
while(true){
if((i__36621 < count__36620)){
var role = cljs.core._nth.call(null,chunk__36619,i__36621);
var temp__4657__auto___36675__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___36675__$1)){
var spec_36676 = temp__4657__auto___36675__$1;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_36676));
} else {
}

var G__36677 = seq__36618;
var G__36678 = chunk__36619;
var G__36679 = count__36620;
var G__36680 = (i__36621 + (1));
seq__36618 = G__36677;
chunk__36619 = G__36678;
count__36620 = G__36679;
i__36621 = G__36680;
continue;
} else {
var temp__4657__auto____$1 = cljs.core.seq.call(null,seq__36618);
if(temp__4657__auto____$1){
var seq__36618__$1 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36618__$1)){
var c__28891__auto__ = cljs.core.chunk_first.call(null,seq__36618__$1);
var G__36681 = cljs.core.chunk_rest.call(null,seq__36618__$1);
var G__36682 = c__28891__auto__;
var G__36683 = cljs.core.count.call(null,c__28891__auto__);
var G__36684 = (0);
seq__36618 = G__36681;
chunk__36619 = G__36682;
count__36620 = G__36683;
i__36621 = G__36684;
continue;
} else {
var role = cljs.core.first.call(null,seq__36618__$1);
var temp__4657__auto___36685__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___36685__$2)){
var spec_36686 = temp__4657__auto___36685__$2;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_36686));
} else {
}

var G__36687 = cljs.core.next.call(null,seq__36618__$1);
var G__36688 = null;
var G__36689 = (0);
var G__36690 = (0);
seq__36618 = G__36687;
chunk__36619 = G__36688;
count__36620 = G__36689;
i__36621 = G__36690;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map?rel=1507552551197
