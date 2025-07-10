import{_ as $,c as n,a as i,h as B,r as c,i as F,n as A,o as d,t as D}from"./iframe-Cj62cclV.js";const H={key:0,class:"glass-card__header"},I={key:0,class:"glass-card__title"},P={class:"glass-card__body"},T={key:1,class:"glass-card__footer"},k={__name:"Card",props:{title:{type:String,default:""},variant:{type:String,default:"default",validator:e=>["default","primary","secondary","success","danger","warning","info","light","dark"].includes(e)},width:{type:String,default:"auto"},height:{type:String,default:"auto"},hoverable:{type:Boolean,default:!1},shadow:{type:Boolean,default:!0}},emits:["close","click"],setup(e,{emit:x}){const V=x;function N(t){V("click",t)}return(t,j)=>(d(),n("div",{class:A(["glass-card",[`glass-card--${e.variant}`,{"glass-card--hoverable":e.hoverable,"glass-card--shadow":e.shadow}]]),style:F({width:e.width,height:e.height}),onClick:N},[t.$slots.header||e.title?(d(),n("div",H,[c(t.$slots,"header",{},()=>[e.title?(d(),n("span",I,D(e.title),1)):i("",!0)],!0)])):i("",!0),B("div",P,[c(t.$slots,"default",{},void 0,!0)]),t.$slots.footer?(d(),n("div",T,[c(t.$slots,"footer",{},void 0,!0)])):i("",!0)],6))}},_=$(k,[["__scopeId","data-v-e1ab1248"]]);k.__docgenInfo={exportName:"default",displayName:"Card",description:"",tags:{},props:[{name:"title",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"variant",type:{name:"string"},defaultValue:{func:!1,value:"'default'"},values:["default","primary","secondary","success","danger","warning","info","light","dark"]},{name:"width",type:{name:"string"},defaultValue:{func:!1,value:"'auto'"}},{name:"height",type:{name:"string"},defaultValue:{func:!1,value:"'auto'"}},{name:"hoverable",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"shadow",type:{name:"boolean"},defaultValue:{func:!1,value:"true"}}],events:[{name:"close"},{name:"click"}],slots:[{name:"header"},{name:"default"},{name:"footer"}],sourceFiles:["/Users/surajbharti/projects/glass-ui/src/components/UI/Card.vue"]};const E={title:"Components/Card",component:_,argTypes:{title:{control:{type:"text"},description:"Card title text (optional, shown in header if provided)."},variant:{control:{type:"select"},options:["default","primary","secondary","success","danger","warning","info","light","dark"],description:"Visual style of the card."},width:{control:{type:"text"},description:'CSS width of the card (e.g. "350px", "100%").'},height:{control:{type:"text"},description:'CSS height of the card (e.g. "200px", "auto").'},hoverable:{control:{type:"boolean"},description:"Adds a hover effect to the card."},shadow:{control:{type:"boolean"},description:"Show card shadow."},default:{control:{type:"text"},description:"Card body content (slot).",table:{category:"slots"}},header:{control:{type:"text"},description:"Custom header slot content.",table:{category:"slots"}},footer:{control:{type:"text"},description:"Custom footer slot content.",table:{category:"slots"}}}},l=e=>({components:{Card:_},setup(){return{args:e}},template:`
    <Card v-bind="args">
      <template v-if="args.header" #header>{{ args.header }}</template>
      <template v-if="args.default" #default>{{ args.default }}</template>
      <template v-if="args.footer" #footer>{{ args.footer }}</template>
    </Card>
  `}),a=l.bind({});a.args={title:"Glass Card",variant:"default",width:"350px",height:"auto",hoverable:!0,shadow:!0,default:"This is a beautiful glassmorphic card. You can put any content here.",header:"",footer:""};const r=l.bind({});r.args={...a.args,header:"Custom Header",footer:"Custom Footer",default:"Card with custom header and footer slots."};const s=l.bind({});s.args={...a.args,variant:"primary",title:"Primary Card"};const o=l.bind({});o.args={...a.args,shadow:!1,title:"No Shadow Card"};var u,f,p;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`args => ({
  components: {
    Card
  },
  setup() {
    return {
      args
    };
  },
  template: \`
    <Card v-bind="args">
      <template v-if="args.header" #header>{{ args.header }}</template>
      <template v-if="args.default" #default>{{ args.default }}</template>
      <template v-if="args.footer" #footer>{{ args.footer }}</template>
    </Card>
  \`
})`,...(p=(f=a.parameters)==null?void 0:f.docs)==null?void 0:p.source}}};var m,g,h;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`args => ({
  components: {
    Card
  },
  setup() {
    return {
      args
    };
  },
  template: \`
    <Card v-bind="args">
      <template v-if="args.header" #header>{{ args.header }}</template>
      <template v-if="args.default" #default>{{ args.default }}</template>
      <template v-if="args.footer" #footer>{{ args.footer }}</template>
    </Card>
  \`
})`,...(h=(g=r.parameters)==null?void 0:g.docs)==null?void 0:h.source}}};var v,y,C;s.parameters={...s.parameters,docs:{...(v=s.parameters)==null?void 0:v.docs,source:{originalSource:`args => ({
  components: {
    Card
  },
  setup() {
    return {
      args
    };
  },
  template: \`
    <Card v-bind="args">
      <template v-if="args.header" #header>{{ args.header }}</template>
      <template v-if="args.default" #default>{{ args.default }}</template>
      <template v-if="args.footer" #footer>{{ args.footer }}</template>
    </Card>
  \`
})`,...(C=(y=s.parameters)==null?void 0:y.docs)==null?void 0:C.source}}};var b,w,S;o.parameters={...o.parameters,docs:{...(b=o.parameters)==null?void 0:b.docs,source:{originalSource:`args => ({
  components: {
    Card
  },
  setup() {
    return {
      args
    };
  },
  template: \`
    <Card v-bind="args">
      <template v-if="args.header" #header>{{ args.header }}</template>
      <template v-if="args.default" #default>{{ args.default }}</template>
      <template v-if="args.footer" #footer>{{ args.footer }}</template>
    </Card>
  \`
})`,...(S=(w=o.parameters)==null?void 0:w.docs)==null?void 0:S.source}}};const U=["Default","WithHeaderAndFooter","Primary","NoShadow"];export{a as Default,o as NoShadow,s as Primary,r as WithHeaderAndFooter,U as __namedExportsOrder,E as default};
