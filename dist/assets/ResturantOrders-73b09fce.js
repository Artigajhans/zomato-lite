import{q as i,t as l,r as a,s as o,y as h,j as s}from"./index-707162a7.js";const g=()=>{const[d,{isSuccess:r,isLoading:u}]=i(),[n,{data:c,isLoading:x}]=l();return console.log("recived"),a.useEffect(()=>{o.on("palce-order",e=>{n(pagi)})},[]),a.useEffect(()=>{n()},[]),a.useEffect(()=>{r&&h.success("status update")},[r]),s.jsx(s.Fragment,{children:s.jsx("div",{className:"conatiner",children:c&&s.jsxs("table",{border:1,class:"table   table-striped table-hover",children:[s.jsx("thead",{children:s.jsxs("tr",{children:[s.jsx("th",{children:"customer name"}),s.jsx("th",{children:"address"}),s.jsx("th",{children:"dish"}),s.jsx("th",{children:"status"}),s.jsx("th",{children:"actions"})]})}),s.jsx("tbody",{children:c.map(e=>s.jsxs("tr",{children:[s.jsx("td",{children:e.customer.name}),s.jsxs("td",{children:[e.customer.address.substring(0,15),"..."]}),s.jsx("td",{children:e.items.map(t=>s.jsxs("div",{children:[t.qty," X ",t.dish.name]},t._id))}),s.jsx("td",{children:e.status}),s.jsx("td",{children:s.jsxs("select",{onChange:t=>d({status:t.target.value,_id:e._id}),className:"form-select",children:[s.jsx("option",{value:"",children:"Change Status"}),s.jsx("option",{value:"cooking",children:"cooking"}),s.jsx("option",{value:"packing",children:"packing"})]})})]},e.id))})]})})})};export{g as default};
