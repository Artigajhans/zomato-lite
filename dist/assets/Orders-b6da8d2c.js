import{a as h,b as x,r as d,c as j,y as u,j as e}from"./index-3dad0ae1.js";const N=()=>{const[c,{isSuccess:l}]=h(),{data:n}=x(),[i,a]=d.useState({limit:5,skip:0}),[o,{isLoading:m,isError:p,isSuccess:b,error:v,data:t}]=j();return d.useEffect(()=>{l&&u.success("rider assign success")},[l]),d.useEffect(()=>{o(i)},[i]),e.jsxs("div",{className:" container mt-5",children:[e.jsx("div",{className:"row",children:e.jsx("div",{className:"col-sm-4",children:e.jsxs("select",{class:"form-select my-3 ",value:i.limit,onChange:s=>a({limit:+s.target.value,skip:0}),children:[e.jsx("option",{selected:!0,children:"Choose Limit"}),e.jsx("option",{value:"1",children:"1"}),e.jsx("option",{value:"2",children:"2"}),e.jsx("option",{value:"5",children:"5"}),e.jsx("option",{value:"10",children:"10"}),e.jsx("option",{value:"15",children:"15"})]})})}),e.jsxs("div",{className:"table-responsive",children:[t&&e.jsxs("table",{className:"table table-bordered table-striped table-hover",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Customer Name"}),e.jsx("th",{children:"Customer Mobile"}),e.jsx("th",{children:"Resturant Name"}),e.jsx("th",{children:"Resturant Mobile"}),e.jsx("th",{children:"Dish Name"}),e.jsx("th",{children:"Order Status"}),e.jsx("th",{children:"Rider"})]})}),e.jsx("tbody",{children:t.Orders.map(s=>e.jsxs("tr",{children:[e.jsx("td",{children:s.customer.name}),e.jsx("td",{children:s.customer.mobile}),e.jsx("td",{children:s.resturant.name}),e.jsx("td",{children:s.resturant.mobile}),e.jsx("td",{children:s.items.map(r=>e.jsx("div",{children:e.jsxs("div",{className:"d-block",children:[r.qty," x ",r.dish.name," x ",r.dish.price]})},r.id))}),e.jsx("td",{children:s.status}),e.jsx("td",{children:s.rider?e.jsxs(e.Fragment,{children:[e.jsx("div",{children:e.jsx("strong",{children:s.rider.name})}),e.jsx("div",{children:e.jsx("strong",{children:s.rider.mobile})})]}):e.jsxs("select",{onChange:r=>c({_id:s._id,rider:r.target.value}),class:"form-select",children:[e.jsx("option",{selected:!0,children:"Choose Rider"}),n&&n.result.map(r=>e.jsx("option",{value:r._id,children:r.name},r._id))]})})]},s._id))})]}),t&&[...Array(Math.ceil(t.total/i.limit))].map((s,r)=>e.jsx("button",{type:"button",onClick:g=>a({...i,skip:r*i.limit}),className:`btn btn-sm me-1 ${r*i.limit===i.skip?"btn-primary":"btn-outline-primary"}`,children:r}))]})]})};export{N as default};
