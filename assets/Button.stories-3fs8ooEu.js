import{c as k,d as w,n as S,e as _}from"./iframe-ClXyVnPF.js";import{_ as x}from"./_plugin-vue_export-helper-DlAUqK2U.js";const C=["disabled","type","aria-disabled"],g={__name:"Button",props:{variant:{type:String,default:"primary",validator:t=>["primary","secondary","success","danger","warning","info","light","dark"].includes(t)},disabled:{type:Boolean,default:!1},type:{type:String,default:"button",validator:t=>["button","submit","reset"].includes(t)}},emits:["click"],setup(t,{emit:y}){const v=t,B=y;function h(n){v.disabled||B("click",n)}return(n,D)=>(_(),k("button",{class:S(["glass-btn",`glass-btn--${t.variant}`,{"is-disabled":t.disabled}]),disabled:t.disabled,type:t.type,"aria-disabled":t.disabled?"true":void 0,onClick:h},[w(n.$slots,"default",{},void 0,!0)],10,C))}},f=x(g,[["__scopeId","data-v-c480d73d"]]);g.__docgenInfo={exportName:"default",displayName:"Button",description:"",tags:{},props:[{name:"variant",type:{name:"string"},defaultValue:{func:!1,value:"'primary'"},values:["primary","secondary","success","danger","warning","info","light","dark"]},{name:"disabled",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"type",type:{name:"string"},defaultValue:{func:!1,value:"'button'"},values:["button","submit","reset"]}],events:[{name:"click"}],slots:[{name:"default"}],sourceFiles:["/Users/surajbharti/projects/glass-ui/src/components/UI/Button.vue"]};const I={title:"Components/Button",component:f,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:`
A customizable glass-style button component supporting multiple variants, disabled state, and different button types.

**Preview:**  
Use the controls below to change the button's variant, type, disabled state, and label. The preview updates in real time to show how the button will look and behave with your selected options.
        `}}},argTypes:{variant:{control:{type:"select"},options:["primary","secondary","success","danger","warning","info","light","dark"],description:"Visual style of the button."},disabled:{control:{type:"boolean"},description:"Disables the button."},type:{control:{type:"select"},options:["button","submit","reset"],description:"Button type attribute."},default:{control:{type:"text"},description:"Button label (slot content).",table:{category:"slots"}}}},o=t=>({components:{Button:f},setup(){return{args:t}},template:'<Button v-bind="args">{{ args.default }}</Button>'}),e=o.bind({});e.args={variant:"primary",disabled:!1,type:"button",default:"Primary"};const a=o.bind({});a.args={variant:"primary",disabled:!0,type:"button",default:"Disabled"};const s=o.bind({});s.args={variant:"success",disabled:!1,type:"button",default:"Success"};var r,i,l;e.parameters={...e.parameters,docs:{...(r=e.parameters)==null?void 0:r.docs,source:{originalSource:`args => ({
  components: {
    Button
  },
  setup() {
    return {
      args
    };
  },
  template: \`<Button v-bind="args">{{ args.default }}</Button>\`
})`,...(l=(i=e.parameters)==null?void 0:i.docs)==null?void 0:l.source}}};var d,u,c;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`args => ({
  components: {
    Button
  },
  setup() {
    return {
      args
    };
  },
  template: \`<Button v-bind="args">{{ args.default }}</Button>\`
})`,...(c=(u=a.parameters)==null?void 0:u.docs)==null?void 0:c.source}}};var p,m,b;s.parameters={...s.parameters,docs:{...(p=s.parameters)==null?void 0:p.docs,source:{originalSource:`args => ({
  components: {
    Button
  },
  setup() {
    return {
      args
    };
  },
  template: \`<Button v-bind="args">{{ args.default }}</Button>\`
})`,...(b=(m=s.parameters)==null?void 0:m.docs)==null?void 0:b.source}}};const T=["Primary","Disabled","Success"];export{a as Disabled,e as Primary,s as Success,T as __namedExportsOrder,I as default};
