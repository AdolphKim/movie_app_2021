(this.webpackJsonpmovie_app_2021=this.webpackJsonpmovie_app_2021||[]).push([[0],{45:function(e,t,a){},47:function(e,t,a){},48:function(e,t,a){"use strict";a.r(t);var s=a(2),n=a.n(s),r=a(16),i=a.n(r),c=a(3),o=a.n(c),m=a(7),l=a(17),u=a(18),d=a(21),j=a(20),v=a(19),p=a.n(v),h=(a(45),a(0));var b=function(e){e.id;var t=e.year,a=e.title,s=e.summary,n=e.poster,r=e.genres;return Object(h.jsxs)("div",{className:"movie",children:[Object(h.jsx)("img",{src:n,alt:a,title:a}),Object(h.jsxs)("div",{className:"movie__data",children:[Object(h.jsx)("h1",{className:"movie__title",children:a}),Object(h.jsx)("h5",{className:"movie__year",children:t}),Object(h.jsx)("ul",{className:"genres",children:r.map((function(e,t){return Object(h.jsx)("li",{className:"genre",children:e},t)}))}),Object(h.jsxs)("p",{className:"movie__summary",children:[s.slice(0,140),"..."]})]})]})},O=(a(47),function(e){Object(d.a)(a,e);var t=Object(j.a)(a);function a(){var e;Object(l.a)(this,a);for(var s=arguments.length,n=new Array(s),r=0;r<s;r++)n[r]=arguments[r];return(e=t.call.apply(t,[this].concat(n))).state={isLoading:!0,movies:[]},e.getMovies=Object(m.a)(o.a.mark((function t(){var a,s;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,p.a.get("https://yts.mx/api/v2/list_movies.json?sort_by=rating");case 2:a=t.sent,s=a.data.data.movies,e.setState({movies:s,isLoading:!1});case 5:case"end":return t.stop()}}),t)}))),e}return Object(u.a)(a,[{key:"componentDidMount",value:function(){var e=Object(m.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this.getMovies();case 1:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.isLoading,a=e.movies;return Object(h.jsx)("section",{className:"container",children:t?Object(h.jsx)("div",{className:"loader",children:Object(h.jsx)("span",{className:"loader__text",children:"Loading..."})}):Object(h.jsx)("div",{className:"movies",children:a.map((function(e){return Object(h.jsx)(b,{genres:e.genres,id:e.id,year:e.year,title:e.title,summary:e.summary,poster:e.medium_cover_image},e.id)}))})})}}]),a}(n.a.Component)),x=O;i.a.render(Object(h.jsx)(x,{}),document.getElementById("root"))}},[[48,1,2]]]);
//# sourceMappingURL=main.74f8062f.chunk.js.map