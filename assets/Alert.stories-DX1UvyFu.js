import{_ as z,b as q,w as G,d as H,c as r,a as s,e as J,r as y,t as f,n as K,o as a,f as M,F as Q,g as R,h as X}from"./iframe-8xN6mrgl.js";const Y={key:0,class:"glass-alert__icon"},Z={class:"glass-alert__content"},ee={key:0,class:"glass-alert__title"},te={key:1,class:"glass-alert__description"},O={__name:"Alert",props:{variant:{type:String,default:"info",validator:e=>["primary","secondary","success","danger","warning","info","light","dark"].includes(e)},dismissible:{type:Boolean,default:!1},timeout:{type:[Number,String],default:null},icon:{type:[String,Object,Function],default:null},title:{type:String,default:""},description:{type:String,default:""}},setup(e){const W=e,g=q(!0);let i=null;function _(){g.value=!1}return G(()=>W.timeout,t=>{i&&clearTimeout(i),t&&Number(t)>0&&(i=setTimeout(()=>{g.value=!1},Number(t)))},{immediate:!0}),H(()=>{i&&clearTimeout(i)}),(t,se)=>g.value?(a(),r("div",{key:0,class:K(["glass-alert",[`glass-alert--${e.variant}`,e.dismissible?"glass-alert--dismissible":""]]),role:"alert"},[e.icon||t.$slots.icon?(a(),r("span",Y,[y(t.$slots,"icon",{},()=>[typeof e.icon=="string"?(a(),r(Q,{key:0},[R(f(e.icon),1)],64)):e.icon?(a(),M(X(e.icon),{key:1})):s("",!0)],!0)])):s("",!0),J("div",Z,[e.title?(a(),r("div",ee,f(e.title),1)):s("",!0),e.description?(a(),r("div",te,f(e.description),1)):s("",!0),!e.title&&!e.description?y(t.$slots,"default",{key:2},void 0,!0):s("",!0)]),e.dismissible?(a(),r("button",{key:1,class:"glass-alert__close",onClick:_,"aria-label":"Dismiss",type:"button"},"×")):s("",!0)],2)):s("",!0)}},P=z(O,[["__scopeId","data-v-7512bc71"]]);O.__docgenInfo={exportName:"default",displayName:"Alert",description:"",tags:{},props:[{name:"variant",type:{name:"string"},defaultValue:{func:!1,value:"'info'"},values:["primary","secondary","success","danger","warning","info","light","dark"]},{name:"dismissible",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"timeout",type:{name:"number|string"},defaultValue:{func:!1,value:"null"}},{name:"icon",type:{name:"string|object|func"},defaultValue:{func:!1,value:"null"}},{name:"title",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"description",type:{name:"string"},defaultValue:{func:!1,value:"''"}}],slots:[{name:"icon"},{name:"default"}],sourceFiles:["/Users/surajbharti/projects/glass-ui/src/components/UI/Alert.vue"]};const ne={title:"Components/Alert",component:P,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:`
A glass-style alert component for displaying important messages, supporting info, success, warning, and danger variants.

**Preview:**  
Use the controls to change the alert variant, message, make it dismissible, and set an optional timeout for auto-dismiss.
                `}}},argTypes:{variant:{control:{type:"select"},options:["primary","secondary","info","success","warning","danger","light","dark"],description:"Alert style variant."},title:{control:{type:"text"},description:"Alert title (bold headline)."},description:{control:{type:"text"},description:"Alert description (secondary text)."},icon:{control:{type:"text"},description:"Icon (emoji or component name)."},dismissible:{control:{type:"boolean"},description:"Show a dismiss (close) button."},timeout:{control:{type:"number"},description:"Auto-dismiss after this many milliseconds (e.g., 3000 for 3s). Set to 0 or null to disable."},default:{control:{type:"text"},description:"Slot content (used only if title and description are empty).",table:{category:"slots"}}}},n=e=>({components:{Alert:P},setup(){return{args:e}},template:'<Alert v-bind="args">{{ args.default }}</Alert>'}),o=n.bind({});o.args={variant:"primary",title:"Primary Alert",description:"This is a primary alert.",dismissible:!1,timeout:null,icon:"",default:""};const l=n.bind({});l.args={variant:"info",title:"Info Alert",description:"This is an info alert.",dismissible:!1,timeout:null,icon:"ℹ️",default:""};const c=n.bind({});c.args={variant:"success",title:"Success!",description:"Operation successful!",dismissible:!0,timeout:null,icon:"✔️",default:""};const u=n.bind({});u.args={variant:"warning",title:"Warning",description:"Please check your input.",dismissible:!0,timeout:4e3,icon:"⚠️",default:""};const d=n.bind({});d.args={variant:"danger",title:"Error",description:"Something went wrong.",dismissible:!0,timeout:3e3,icon:"⛔",default:""};const m=n.bind({});m.args={variant:"light",title:"Light Alert",description:"This is a light alert.",dismissible:!1,timeout:null,icon:"",default:""};const p=n.bind({});p.args={variant:"dark",title:"Dark Alert",description:"This is a dark alert.",dismissible:!1,timeout:null,icon:"",default:""};var b,v,A;o.parameters={...o.parameters,docs:{...(b=o.parameters)==null?void 0:b.docs,source:{originalSource:`args => ({
  components: {
    Alert
  },
  setup() {
    return {
      args
    };
  },
  template: \`<Alert v-bind="args">{{ args.default }}</Alert>\`
})`,...(A=(v=o.parameters)==null?void 0:v.docs)==null?void 0:A.source}}};var h,k,S;l.parameters={...l.parameters,docs:{...(h=l.parameters)==null?void 0:h.docs,source:{originalSource:`args => ({
  components: {
    Alert
  },
  setup() {
    return {
      args
    };
  },
  template: \`<Alert v-bind="args">{{ args.default }}</Alert>\`
})`,...(S=(k=l.parameters)==null?void 0:k.docs)==null?void 0:S.source}}};var w,D,T;c.parameters={...c.parameters,docs:{...(w=c.parameters)==null?void 0:w.docs,source:{originalSource:`args => ({
  components: {
    Alert
  },
  setup() {
    return {
      args
    };
  },
  template: \`<Alert v-bind="args">{{ args.default }}</Alert>\`
})`,...(T=(D=c.parameters)==null?void 0:D.docs)==null?void 0:T.source}}};var V,x,N;u.parameters={...u.parameters,docs:{...(V=u.parameters)==null?void 0:V.docs,source:{originalSource:`args => ({
  components: {
    Alert
  },
  setup() {
    return {
      args
    };
  },
  template: \`<Alert v-bind="args">{{ args.default }}</Alert>\`
})`,...(N=(x=u.parameters)==null?void 0:x.docs)==null?void 0:N.source}}};var I,B,j;d.parameters={...d.parameters,docs:{...(I=d.parameters)==null?void 0:I.docs,source:{originalSource:`args => ({
  components: {
    Alert
  },
  setup() {
    return {
      args
    };
  },
  template: \`<Alert v-bind="args">{{ args.default }}</Alert>\`
})`,...(j=(B=d.parameters)==null?void 0:B.docs)==null?void 0:j.source}}};var C,F,U;m.parameters={...m.parameters,docs:{...(C=m.parameters)==null?void 0:C.docs,source:{originalSource:`args => ({
  components: {
    Alert
  },
  setup() {
    return {
      args
    };
  },
  template: \`<Alert v-bind="args">{{ args.default }}</Alert>\`
})`,...(U=(F=m.parameters)==null?void 0:F.docs)==null?void 0:U.source}}};var $,E,L;p.parameters={...p.parameters,docs:{...($=p.parameters)==null?void 0:$.docs,source:{originalSource:`args => ({
  components: {
    Alert
  },
  setup() {
    return {
      args
    };
  },
  template: \`<Alert v-bind="args">{{ args.default }}</Alert>\`
})`,...(L=(E=p.parameters)==null?void 0:E.docs)==null?void 0:L.source}}};const re=["Default","Info","Success","Warning","Danger","Light","Dark"];export{d as Danger,p as Dark,o as Default,l as Info,m as Light,c as Success,u as Warning,re as __namedExportsOrder,ne as default};
