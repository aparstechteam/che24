import{r as l,s as d,J as u,j as p,k as _,l as e,z as h,K as m}from"./index.22439ba0.js";const f={class:"grid place-items-center min-h-[70vh]"},g={class:"w-full max-w-md"},v=e("h1",{class:"text-2xl font-semibold text-center title"},"Get Access",-1),I={class:"form-control"},x=e("label",{for:"groupJoiningId",class:"label"},"Group JoiningID",-1),b=e("span",null,"Get Access",-1),y=[b],D={setup(w){const s=l(""),c=d(),a=u(),i=()=>{let r="https://shop.aparsclassroom.com/query/transaction";var o=new URLSearchParams;o.append("tran_id",s.value);var n={method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded"},body:o,redirect:"follow"};fetch(r,n).then(t=>t.json()).then(t=>{t.status==200&&t.tranx.status=="VALID"&&t.tranx.Product.productId?(localStorage.setItem(`chemistry_b_m24_${a.query.cycle}`,s.value),c.go(-1)):alert("Invalid Group Joining ID")}).catch(t=>alert("Invalid Group Joining ID"))};return(r,o)=>(p(),_("div",f,[e("div",g,[v,e("div",I,[x,h(e("input",{type:"text",placeholder:"Group joining ID for specific cycle",class:"input input-bordered",id:"groupJoiningId","onUpdate:modelValue":o[0]||(o[0]=n=>s.value=n)},null,512),[[m,s.value]])]),e("button",{class:"mt-4 btn btn-primary",onClick:i},y)])]))}};export{D as default};
