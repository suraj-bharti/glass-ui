import{f as r,c as h,b as _,n as S,d as k}from"./iframe-CbIX5YJi.js";import{_ as D}from"./_plugin-vue_export-helper-DlAUqK2U.js";const C=["aria-disabled","tabindex"],b={__name:"Panel",props:{variant:{type:String,default:"default",validator:e=>["default","primary","secondary","success","danger","warning","info","light","dark"].includes(e)},padding:{type:String,default:"md",validator:e=>["xxs","xs","sm","md","lg","xl","2x","3x",""].includes(e)},disabled:{type:Boolean,default:!1}},setup(e){const t=e,x=r(()=>`bg--${t.variant}`),y=r(()=>t.padding?`p--${t.padding}`:"");return(P,z)=>(k(),h("div",{class:S(["panel",[x.value,y.value,{"is-disabled":e.disabled}]]),"aria-disabled":e.disabled?"true":void 0,tabindex:e.disabled?-1:void 0},[_(P.$slots,"default",{},void 0,!0)],10,C))}},v=D(b,[["__scopeId","data-v-59d4fb3d"]]);b.__docgenInfo={exportName:"default",displayName:"Panel",description:"",tags:{},props:[{name:"variant",type:{name:"string"},defaultValue:{func:!1,value:"'default'"},values:["default","primary","secondary","success","danger","warning","info","light","dark"]},{name:"padding",type:{name:"string"},defaultValue:{func:!1,value:"'md'"},values:["xxs","xs","sm","md","lg","xl","2x","3x"]},{name:"disabled",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],slots:[{name:"default"}],sourceFiles:["/Users/surajbharti/projects/glass-ui/src/components/UI/Panel.vue"]};const j={title:"Components/Panel",component:v,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"A customizable panel component supporting variants, padding, and disabled state for accessibility."}}},argTypes:{variant:{control:{type:"select"},options:["default","success","primary","danger","warning"],description:"Background variant of the panel."},padding:{control:{type:"select"},options:["xxs","xs","sm","md","lg","xl","2x","3x",""],description:"Padding size for the panel."},disabled:{control:{type:"boolean"},description:"Disables the panel and applies a disabled style."},default:{control:{type:"text"},description:"Panel content (slot).",table:{category:"slots"}}}},l=e=>({components:{Panel:v},setup(){return{args:e}},template:'<Panel v-bind="args"><span v-html="args.default" /></Panel>'}),a=l.bind({});a.args={variant:"default",padding:"4x",disabled:!1,default:`
    <h3>Welcome to GlassUI Panel</h3>
    <p>
      This panel demonstrates the glassmorphism effect.<br>
      You can use it to group content, highlight information, or create beautiful layouts.
    </p>
    <ul>
      <li>Customizable background variants</li>
      <li>Adjustable padding</li>
      <li>Accessible and responsive</li>
    </ul>
  `};const s=l.bind({});s.args={variant:"success",padding:"4x",disabled:!1,default:"Success Panel"};const n=l.bind({});n.args={variant:"danger",padding:"4x",disabled:!0,default:"Disabled Panel"};var d,o,i;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`args => ({
  components: {
    Panel
  },
  setup() {
    return {
      args
    };
  },
  template: \`<Panel v-bind="args"><span v-html="args.default" /></Panel>\`
})`,...(i=(o=a.parameters)==null?void 0:o.docs)==null?void 0:i.source}}};var c,p,u;s.parameters={...s.parameters,docs:{...(c=s.parameters)==null?void 0:c.docs,source:{originalSource:`args => ({
  components: {
    Panel
  },
  setup() {
    return {
      args
    };
  },
  template: \`<Panel v-bind="args"><span v-html="args.default" /></Panel>\`
})`,...(u=(p=s.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};var m,g,f;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`args => ({
  components: {
    Panel
  },
  setup() {
    return {
      args
    };
  },
  template: \`<Panel v-bind="args"><span v-html="args.default" /></Panel>\`
})`,...(f=(g=n.parameters)==null?void 0:g.docs)==null?void 0:f.source}}};const w=["Default","Success","Disabled"];export{a as Default,n as Disabled,s as Success,w as __namedExportsOrder,j as default};
