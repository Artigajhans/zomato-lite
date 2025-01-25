import{i as I,r as b,y as L,j as e,k as Y,l as D,m as A,n as U,o as _,p as z}from"./index-cb054f78.js";import{u as f,h as o}from"./handleClasses-98121591.js";import{c as g,a as l,b as Q}from"./index.esm-79ad2dd9.js";const G=()=>{const[x,{isSuccess:m}]=I(),t=f({initialValues:{mobile:"",address:"",city:"",certificate:"",type:"",hero:"",startTime:"",endTime:""},validationSchema:g({mobile:l().required("Enter  mobile"),address:l().required("Enter  address"),city:l().required("Enter  city"),certificate:l().required("Enter  certificate"),type:l().required("Enter  type"),hero:l().required("Enter  hero"),startTime:l().required("Enter  startTime"),endTime:l().required("Enter  endTime")}),onSubmit:(c,{resetForm:y})=>{const v=new FormData;for(const p in c)v.append(p,c[p]);x(v),y()}});return b.useEffect(()=>{m&&L.success("info register success")},[m]),e.jsx("form",{onSubmit:t.handleSubmit,children:e.jsx("div",{className:"container",children:e.jsx("div",{className:"row",children:e.jsx("div",{className:"col-sm-6 offset-sm-3",children:e.jsxs("div",{className:"card",children:[e.jsx("div",{className:"card-header",children:"Signup"}),e.jsxs("div",{className:"card-body",children:[e.jsxs("div",{className:"mt-2",children:[e.jsx("label",{for:"mobile",className:"form-label",children:" mobile"}),e.jsx("input",{...t.getFieldProps("mobile"),type:"text",className:o(t,"mobile"),id:"mobile",placeholder:"enter Your mobile"}),e.jsx("div",{className:"valid-feedback",children:"Looks good!"}),e.jsx("div",{className:"invalid-feedback",children:t.errors.mobile})]}),e.jsxs("div",{className:"mt-2",children:[e.jsx("label",{for:"address",className:"form-label",children:" address"}),e.jsx("textarea",{...t.getFieldProps("address"),type:"text",className:o(t,"address"),id:"address",placeholder:"Enter Your address"}),e.jsx("div",{className:"valid-feedback",children:"Looks good!"}),e.jsx("div",{className:"invalid-feedback",children:t.errors.address})]}),e.jsxs("div",{className:"mt-2",children:[e.jsx("label",{for:"city",className:"form-label",children:" city"}),e.jsx("input",{...t.getFieldProps("city"),type:"text",className:o(t,"city"),id:"city",placeholder:"Enter Your city"}),e.jsx("div",{className:"valid-feedback",children:"Looks good!"}),e.jsx("div",{className:"invalid-feedback",children:t.errors.city})]}),e.jsxs("div",{className:"mt-2",children:[e.jsx("label",{for:"certificate",className:"form-label",children:" certificate"}),e.jsx("input",{type:"file",onChange:c=>t.setFieldValue("certificate",c.target.files[0]),className:o(t,"certificate"),id:"certificate",placeholder:"Enter Your certificate"}),e.jsx("div",{className:"valid-feedback",children:"Looks good!"}),e.jsx("div",{className:"invalid-feedback",children:t.errors.certificate})]}),e.jsxs("div",{className:"mt-2",children:[e.jsx("label",{for:"type",className:"form-label",children:" type"}),e.jsxs("select",{...t.getFieldProps("type"),className:o(t,"type"),children:[e.jsx("option",{selected:!0,children:"Choose Type"}),e.jsx("option",{value:"veg",children:"veg"}),e.jsx("option",{value:"non-veg",children:"non-veg"})]}),e.jsx("div",{className:"valid-feedback",children:"Looks good!"}),e.jsx("div",{className:"invalid-feedback",children:t.errors.type})]}),e.jsxs("div",{className:"mt-2",children:[e.jsx("label",{for:"hero",className:"form-label",children:" hero"}),e.jsx("input",{type:"file",onChange:c=>t.setFieldValue("hero",c.target.files[0]),className:o(t,"hero"),id:"hero",placeholder:"Confirm Your hero"}),e.jsx("div",{className:"valid-feedback",children:"Looks good!"}),e.jsx("div",{className:"invalid-feedback",children:t.errors.hero})]}),e.jsxs("div",{className:"mt-2",children:[e.jsx("label",{for:"startTime",className:"form-label",children:" startTime"}),e.jsx("input",{...t.getFieldProps("startTime"),type:"time",className:o(t,"startTime"),id:"startTime",placeholder:"Confirm Your startTime"}),e.jsx("div",{className:"valid-feedback",children:"Looks good!"}),e.jsx("div",{className:"invalid-feedback",children:t.errors.startTime})]}),e.jsxs("div",{className:"mt-2",children:[e.jsx("label",{for:"endTime",className:"form-label",children:" endTime"}),e.jsx("input",{...t.getFieldProps("endTime"),type:"time",className:o(t,"endTime"),id:"endTime",placeholder:"Confirm Your endTime"}),e.jsx("div",{className:"valid-feedback",children:"Looks good!"}),e.jsx("div",{className:"invalid-feedback",children:t.errors.endTime})]}),e.jsx("button",{type:"submit",className:"btn btn-primary w-100 mt-3",children:"Update Info"})]})]})})})})})},H=()=>{const[x,m]=b.useState(!0),[t,{isSuccess:c,isLoading:y}]=Y(),[v,{data:p}]=D(),[P,{isSuccess:J,isLoading:K}]=A(),[r,w]=b.useState(),[R,{isSuccess:O,isError:W,error:X,isLoading:Z}]=U(),a=f({initialValues:{menu:[{type:"",category:"",name:"poha",price:"",desc:"",image:""}]},validationSchema:g({menu:Q().of(g({type:l().required("Enter type"),category:l().required("Enter category"),name:l().required("Enter name"),price:l().required("Enter price"),desc:l().required("Enter desc"),image:l().required("Enter image")}))}),onSubmit:(n,{resetForm:s})=>{console.log(n);const i=new FormData;for(const d of n.menu)for(const j in d)i.append(j,d[j]);R(i),s()}}),u=f({enableReinitialize:!0,initialValues:{type:r?r.type:"",category:r?r.category:"",name:r?r.name:"",price:r?r.price:"",desc:r?r.desc:"",image:r?r.image:""},validationSchema:g({type:l().required("Enter type"),category:l().required("Enter category"),name:l().required("Enter name"),price:l().required("Enter price"),desc:l().required("Enter desc"),image:l()}),onSubmit:(n,{resetForm:s})=>{const i=new FormData;for(const d in n)i.append(d,n[d]);P({fd:i,_id:r._id}),s()}}),B=()=>{a.setFieldValue("menu",[...a.values.menu,{type:"",category:"",name:"",price:"",desc:"",image:""}])},$=n=>{const s=[...a.values.menu];s.splice(n,1),a.setFieldValue("menu",s)},h=(n,s)=>{var i,d,j,N,C,k,E,F,M,S,T,q;return _({"form-control my-2":!0,"is-invalid":((i=a.touched)==null?void 0:i.menu)&&((j=(d=a.touched)==null?void 0:d.menu[n])==null?void 0:j[s])&&((N=a.errors)==null?void 0:N.menu)&&((k=(C=a.errors)==null?void 0:C.menu[n])==null?void 0:k[s]),"is-valid":((E=a.touched)==null?void 0:E.menu)&&((M=(F=a.touched)==null?void 0:F.menu[n])==null?void 0:M[s])&&((S=a.errors)==null?void 0:S.menu)&&!((q=(T=a.errors)==null?void 0:T.menu[n])!=null&&q[s])})},V=(n,s)=>{const{files:i}=s.target;a.setFieldValue(`menu[${n}].image`,i[0])};return b.useEffect(()=>{v()},[]),b.useEffect(()=>{c&&L.success("delete Success")},[c]),e.jsxs(e.Fragment,{children:[e.jsx("form",{onSubmit:a.handleSubmit,children:e.jsxs("div",{className:"container my-2",children:[a.values.menu.map((n,s)=>e.jsxs("div",{className:"card my-3",children:[e.jsxs("div",{class:"card-header d-flex justify-content-between",children:[e.jsxs("span",{children:["Menu",s+1]}),s===0?e.jsx("button",{type:"button",className:"btn btn-sm btn-dark mt-3",onClick:B,children:"add"}):e.jsx("button",{type:"button",className:"btn btn-sm btn-outline-danger ",onClick:i=>$(s),children:"remove"})]}),e.jsx("div",{class:"card-body",children:e.jsxs("div",{className:"row",children:[e.jsx("div",{className:"col-sm-4",children:e.jsxs("select",{class:"form-select",className:h(s,"type"),name:`menu[${s}].type`,onChange:a.handleChange,value:a.values.menu[s].type,onBlur:a.handleBlur,children:[e.jsx("option",{selected:!0,children:"Choose type"}),e.jsx("option",{value:"veg",children:"veg"}),e.jsx("option",{value:"non-veg",children:"non-veg"})]})}),e.jsx("div",{className:"col-sm-4",children:e.jsxs("select",{class:"form-select",className:h(s,"category"),name:`menu[${s}].category`,onChange:a.handleChange,value:a.values.menu[s].category,onBlur:a.handleBlur,children:[e.jsx("option",{selected:!0,children:"Choose category"}),e.jsx("option",{value:"Main",children:"Main Course"}),e.jsx("option",{value:"Chinese",children:"Chinese"}),e.jsx("option",{value:"Punjabi",children:"Punjabi"})]})}),e.jsx("div",{className:"col-sm-4",children:e.jsx("input",{className:h(s,"name"),name:`menu[${s}].name`,onChange:a.handleChange,value:a.values.menu[s].name,placeholder:"Enter dish name",type:"text",onBlur:a.handleBlur})}),e.jsx("div",{className:"col-sm-4",children:e.jsx("input",{className:h(s,"price"),name:`menu[${s}].price`,onChange:a.handleChange,value:a.values.menu[s].price,placeholder:"Enter dish price",type:"text",onBlur:a.handleBlur})}),e.jsx("div",{className:"col-sm-4",children:e.jsx("textarea",{onBlur:a.handleBlur,className:h(s,"desc"),name:`menu[${s}].desc`,onChange:a.handleChange,value:a.values.menu[s].desc})}),e.jsx("div",{className:"col-sm-4",children:e.jsx("input",{type:"file",onChange:i=>V(s,i),className:h(s,"image")})})]})})]},s)),e.jsx("button",{type:"submit",class:"btn btn-primary my-3 w-100 btn-lg",children:"Add Menu"})]})}),p&&e.jsxs("table",{class:"table table-light table-striped table-hover",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"name"}),e.jsx("th",{children:"category"}),e.jsx("th",{children:"price"}),e.jsx("th",{children:"desc"}),e.jsx("th",{children:"image"}),e.jsx("th",{children:"type"}),e.jsx("th",{children:"action"})]})}),e.jsx("tbody",{children:p.result.map(n=>e.jsxs("tr",{className:`${n.type==="veg"?"table-success":"table-danger"}`,children:[e.jsx("td",{children:n.type}),e.jsx("td",{children:n.category}),e.jsx("td",{children:n.name}),e.jsx("td",{children:n.price}),e.jsx("td",{children:n.desc}),e.jsx("td",{children:e.jsx("img",{src:n.image,height:100,alt:""})}),e.jsxs("td",{children:[e.jsx("button",{type:"button",onClick:s=>w(n),"data-bs-toggle":"modal","data-bs-target":"#editMenu",className:"btn btn-outline-success",children:"Edit"}),e.jsx("button",{onClick:s=>t(n._id),type:"button",className:"btn btn-outline-danger",children:"Remove"})]})]},n.id))})]}),e.jsx("div",{class:"modal fade",id:"editMenu",children:e.jsx("div",{class:"modal-dialog",children:e.jsxs("div",{class:"modal-content",children:[e.jsxs("div",{class:"modal-header",children:[e.jsx("h5",{class:"modal-title",id:"exampleModalLabel",children:"Modal title"}),e.jsx("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})]}),e.jsx("div",{class:"modal-body",children:e.jsxs("form",{onSubmit:u.handleSubmit,children:[e.jsxs("div",{className:"row",children:[e.jsx("div",{className:"col-sm-6",children:e.jsxs("select",{className:"form-control my-2",...u.getFieldProps("type"),children:[e.jsx("option",{selected:!0,children:"Choose type"}),e.jsx("option",{value:"veg",children:"veg"}),e.jsx("option",{value:"non-veg",children:"non-veg"})]})}),e.jsx("div",{className:"col-sm-6",children:e.jsxs("select",{...u.getFieldProps("category"),className:"form-control my-2",children:[e.jsx("option",{selected:!0,children:"Choose category"}),e.jsx("option",{value:"Main",children:"Main Course"}),e.jsx("option",{value:"Chinese",children:"Chinese"}),e.jsx("option",{value:"Punjabi",children:"Punjabi"})]})}),e.jsx("div",{className:"col-sm-6",children:e.jsx("input",{...u.getFieldProps("name"),className:"form-control my-2",placeholder:"Enter dish name",type:"text"})}),e.jsx("div",{className:"col-sm-6",children:e.jsx("input",{...u.getFieldProps("price"),className:"form-control my-2",placeholder:"Enter dish price",type:"text"})}),e.jsx("div",{className:"col-sm-6",children:e.jsx("textarea",{...u.getFieldProps("desc"),className:"form-control my-2",placeholder:"desc"})}),e.jsx("div",{className:"col-sm-6",children:x?e.jsxs(e.Fragment,{children:[e.jsx("img",{src:r&&r.image,height:50,alt:""}),e.jsx("button",{onClick:n=>m(!1),type:"button",class:"btn btn-primary btn-sm",children:"Change"})]}):e.jsxs(e.Fragment,{children:[e.jsx("input",{onChange:n=>u.setFieldValue("image",n.target.files[0]),className:"form-control my-2",type:"file"}),e.jsx("button",{onClick:n=>m(!0),type:"button",class:"btn btn-primary btn-sm",children:"Cancel"})]})})]}),e.jsx("button",{type:"submit",className:"btn btn-warning w-100",children:"Update Menu"})]})})]})})})]})},ne=()=>{const{resturant:x}=z(m=>m.auth);return e.jsx(e.Fragment,{children:x.infoComplete?e.jsx(H,{}):e.jsx(G,{})})};export{ne as default};
