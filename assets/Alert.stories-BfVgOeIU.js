import{r as $,w as z,o as F,c as d,a as p,b as q,n as G,d as g}from"./iframe-CbIX5YJi.js";import{_ as H}from"./_plugin-vue_export-helper-DlAUqK2U.js";const j={__name:"Alert",props:{variant:{type:String,default:"info",validator:e=>["primary","secondary","success","danger","warning","info","light","dark"].includes(e)},dismissible:{type:Boolean,default:!1},timeout:{type:[Number,String],default:null}},setup(e){const O=e,m=$(!0);let t=null;function P(){m.value=!1}return z(()=>O.timeout,a=>{t&&clearTimeout(t),a&&Number(a)>0&&(t=setTimeout(()=>{m.value=!1},Number(a)))},{immediate:!0}),F(()=>{t&&clearTimeout(t)}),(a,J)=>m.value?(g(),d("div",{key:0,class:G(["glass-alert",[`glass-alert--${e.variant}`,e.dismissible?"glass-alert--dismissible":""]]),role:"alert"},[q(a.$slots,"default",{},void 0,!0),e.dismissible?(g(),d("button",{key:0,class:"glass-alert__close",onClick:P,"aria-label":"Dismiss",type:"button"},"×")):p("",!0)],2)):p("",!0)}},L=H(j,[["__scopeId","data-v-146188a2"]]);j.__docgenInfo={exportName:"default",displayName:"Alert",description:"",tags:{},props:[{name:"variant",type:{name:"string"},defaultValue:{func:!1,value:"'info'"},values:["primary","secondary","success","danger","warning","info","light","dark"]},{name:"dismissible",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"timeout",type:{name:"number|string"},defaultValue:{func:!1,value:"null"}}],slots:[{name:"default"}],sourceFiles:["/Users/surajbharti/projects/glass-ui/src/components/UI/Alert.vue"]};const Q={title:"Components/Alert",component:L,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:`
A glass-style alert component for displaying important messages, supporting info, success, warning, and danger variants.

**Preview:**  
Use the controls to change the alert variant, message, make it dismissible, and set an optional timeout for auto-dismiss.
                `}}},argTypes:{variant:{control:{type:"select"},options:["info","success","warning","danger","light","dark"],description:"Alert style variant."},default:{control:{type:"text"},description:"Alert message (slot content).",table:{category:"slots"}},dismissible:{control:{type:"boolean"},description:"Show a dismiss (close) button."},timeout:{control:{type:"number"},description:"Auto-dismiss after this many milliseconds (e.g., 3000 for 3s). Set to 0 or null to disable."}}},s=e=>({components:{Alert:L},setup(){return{args:e}},template:'<Alert v-bind="args">{{ args.default }}</Alert>'}),r=s.bind({});r.args={variant:"primary",default:"This is an primary alert.",dismissible:!1,timeout:null};const n=s.bind({});n.args={variant:"info",default:"This is an info alert.",dismissible:!1,timeout:null};const o=s.bind({});o.args={variant:"success",default:"Operation successful!",dismissible:!0,timeout:null};const i=s.bind({});i.args={variant:"warning",default:"Warning: Please check your input.",dismissible:!0,timeout:4e3};const l=s.bind({});l.args={variant:"danger",default:"Error: Something went wrong.",dismissible:!0,timeout:3e3};const u=s.bind({});u.args={variant:"light",default:"This is a light alert.",dismissible:!1,timeout:null};const c=s.bind({});c.args={variant:"dark",default:"This is a dark alert.",dismissible:!1,timeout:null};var f,b,A;r.parameters={...r.parameters,docs:{...(f=r.parameters)==null?void 0:f.docs,source:{originalSource:`args => ({
  components: {
    Alert
  },
  setup() {
    return {
      args
    };
  },
  template: \`<Alert v-bind="args">{{ args.default }}</Alert>\`
})`,...(A=(b=r.parameters)==null?void 0:b.docs)==null?void 0:A.source}}};var v,y,h;n.parameters={...n.parameters,docs:{...(v=n.parameters)==null?void 0:v.docs,source:{originalSource:`args => ({
  components: {
    Alert
  },
  setup() {
    return {
      args
    };
  },
  template: \`<Alert v-bind="args">{{ args.default }}</Alert>\`
})`,...(h=(y=n.parameters)==null?void 0:y.docs)==null?void 0:h.source}}};var S,k,w;o.parameters={...o.parameters,docs:{...(S=o.parameters)==null?void 0:S.docs,source:{originalSource:`args => ({
  components: {
    Alert
  },
  setup() {
    return {
      args
    };
  },
  template: \`<Alert v-bind="args">{{ args.default }}</Alert>\`
})`,...(w=(k=o.parameters)==null?void 0:k.docs)==null?void 0:w.source}}};var _,T,D;i.parameters={...i.parameters,docs:{...(_=i.parameters)==null?void 0:_.docs,source:{originalSource:`args => ({
  components: {
    Alert
  },
  setup() {
    return {
      args
    };
  },
  template: \`<Alert v-bind="args">{{ args.default }}</Alert>\`
})`,...(D=(T=i.parameters)==null?void 0:T.docs)==null?void 0:D.source}}};var N,x,I;l.parameters={...l.parameters,docs:{...(N=l.parameters)==null?void 0:N.docs,source:{originalSource:`args => ({
  components: {
    Alert
  },
  setup() {
    return {
      args
    };
  },
  template: \`<Alert v-bind="args">{{ args.default }}</Alert>\`
})`,...(I=(x=l.parameters)==null?void 0:x.docs)==null?void 0:I.source}}};var B,C,U;u.parameters={...u.parameters,docs:{...(B=u.parameters)==null?void 0:B.docs,source:{originalSource:`args => ({
  components: {
    Alert
  },
  setup() {
    return {
      args
    };
  },
  template: \`<Alert v-bind="args">{{ args.default }}</Alert>\`
})`,...(U=(C=u.parameters)==null?void 0:C.docs)==null?void 0:U.source}}};var V,E,W;c.parameters={...c.parameters,docs:{...(V=c.parameters)==null?void 0:V.docs,source:{originalSource:`args => ({
  components: {
    Alert
  },
  setup() {
    return {
      args
    };
  },
  template: \`<Alert v-bind="args">{{ args.default }}</Alert>\`
})`,...(W=(E=c.parameters)==null?void 0:E.docs)==null?void 0:W.source}}};const R=["Default","Info","Success","Warning","Danger","Light","Dark"];export{l as Danger,c as Dark,r as Default,n as Info,u as Light,o as Success,i as Warning,R as __namedExportsOrder,Q as default};
