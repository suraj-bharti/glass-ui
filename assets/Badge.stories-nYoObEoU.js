import{c as y,b as f,n as b,d as h}from"./iframe-BC06G_je.js";import{_}from"./_plugin-vue_export-helper-DlAUqK2U.js";const m={__name:"Badge",props:{variant:{type:String,default:"primary",validator:a=>["primary","secondary","success","danger","warning","info","light","dark"].includes(a)}},setup(a){return(v,S)=>(h(),y("span",{class:b(["glass-badge",`glass-badge--${a.variant}`])},[f(v.$slots,"default",{},void 0,!0)],2))}},s=_(m,[["__scopeId","data-v-03886f9a"]]);m.__docgenInfo={exportName:"default",displayName:"Badge",description:"",tags:{},props:[{name:"variant",type:{name:"string"},defaultValue:{func:!1,value:"'primary'"},values:["primary","secondary","success","danger","warning","info","light","dark"]}],slots:[{name:"default"}],sourceFiles:["/Users/surajbharti/projects/glass-ui/src/components/UI/Badge.vue"]};const x={title:"Components/Badge",component:s,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:`
A glass-style badge component for status or labeling, supporting multiple variants.

**Preview:**  
Use the controls to change the badge variant and label.
                `}}},argTypes:{variant:{control:{type:"select"},options:["primary","secondary","success","danger","warning","info","light","dark"],description:"Visual style of the badge."},default:{control:{type:"text"},description:"Badge label (slot content).",table:{category:"slots"}}}},u=a=>({components:{Badge:s},setup(){return{args:a}},template:'<Badge v-bind="args">{{ args.default }}</Badge>'}),e=u.bind({});e.args={variant:"primary",default:"Primary"};const r=u.bind({});r.args={variant:"success",default:"Success"};const n=()=>({components:{Badge:s},template:`
    <div style="display: flex; gap: 1rem; flex-wrap: wrap;">
      <Badge variant="primary">Primary</Badge>
      <Badge variant="secondary">Secondary</Badge>
      <Badge variant="success">Success</Badge>
      <Badge variant="danger">Danger</Badge>
      <Badge variant="warning">Warning</Badge>
      <Badge variant="info">Info</Badge>
      <Badge variant="light">Light</Badge>
      <Badge variant="dark">Dark</Badge>
    </div>
  `});n.parameters={docs:{source:{code:`
                <div style="display: flex; gap: 1rem; flex-wrap: wrap;">
                <Badge variant="primary">Primary</Badge>
                <Badge variant="secondary">Secondary</Badge>
                <Badge variant="success">Success</Badge>
                <Badge variant="danger">Danger</Badge>
                <Badge variant="warning">Warning</Badge>
                <Badge variant="info">Info</Badge>
                <Badge variant="light">Light</Badge>
                <Badge variant="dark">Dark</Badge>
                </div>
            `.trim(),language:"html"}}};var t,d,g;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`args => ({
  components: {
    Badge
  },
  setup() {
    return {
      args
    };
  },
  template: \`<Badge v-bind="args">{{ args.default }}</Badge>\`
})`,...(g=(d=e.parameters)==null?void 0:d.docs)==null?void 0:g.source}}};var i,o,c;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`args => ({
  components: {
    Badge
  },
  setup() {
    return {
      args
    };
  },
  template: \`<Badge v-bind="args">{{ args.default }}</Badge>\`
})`,...(c=(o=r.parameters)==null?void 0:o.docs)==null?void 0:c.source}}};var l,p,B;n.parameters={...n.parameters,docs:{...(l=n.parameters)==null?void 0:l.docs,source:{originalSource:`() => ({
  components: {
    Badge
  },
  template: \`
    <div style="display: flex; gap: 1rem; flex-wrap: wrap;">
      <Badge variant="primary">Primary</Badge>
      <Badge variant="secondary">Secondary</Badge>
      <Badge variant="success">Success</Badge>
      <Badge variant="danger">Danger</Badge>
      <Badge variant="warning">Warning</Badge>
      <Badge variant="info">Info</Badge>
      <Badge variant="light">Light</Badge>
      <Badge variant="dark">Dark</Badge>
    </div>
  \`
})`,...(B=(p=n.parameters)==null?void 0:p.docs)==null?void 0:B.source}}};const P=["Primary","Success","AllBadges"];export{n as AllBadges,e as Primary,r as Success,P as __namedExportsOrder,x as default};
