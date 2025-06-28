import{c as l,b as o,n as u,d as c}from"./iframe-BC06G_je.js";import{_ as g}from"./_plugin-vue_export-helper-DlAUqK2U.js";const d={__name:"Grid",props:{cols:{type:[Number,String],default:2,validator:e=>Number(e)>=1&&Number(e)<=12},gap:{type:[String,Number],default:"md"},align:{type:String,default:"",validator:e=>["","start","center","end","stretch"].includes(e)},justify:{type:String,default:"",validator:e=>["","start","center","end","between","around","evenly"].includes(e)},wrap:{type:Boolean,default:!1}},setup(e){return(i,m)=>(c(),l("div",{class:u(["glass-grid",`grid-cols-${e.cols}`,e.gap?`grid-gap-${e.gap}`:"",e.align?`grid-align-${e.align}`:"",e.justify?`grid-justify-${e.justify}`:"",e.wrap?"grid-wrap":""])},[o(i.$slots,"default",{},void 0,!0)],2))}},s=g(d,[["__scopeId","data-v-73c1d88a"]]);d.__docgenInfo={exportName:"default",displayName:"Grid",description:"",tags:{},props:[{name:"cols",type:{name:"number|string"},defaultValue:{func:!1,value:"2"}},{name:"gap",type:{name:"string|number"},defaultValue:{func:!1,value:"'md'"}},{name:"align",type:{name:"string"},defaultValue:{func:!1,value:"''"},values:["start","center","end","stretch"]},{name:"justify",type:{name:"string"},defaultValue:{func:!1,value:"''"},values:["start","center","end","between","around","evenly"]},{name:"wrap",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],slots:[{name:"default"}],sourceFiles:["/Users/surajbharti/projects/glass-ui/src/components/UI/Grid.vue"]};const b={title:"Components/Grid",component:s,argTypes:{cols:{control:{type:"number",min:1,max:12},defaultValue:3,description:"Number of columns (1-12)"},gap:{control:{type:"select"},options:["xs","sm","md","lg","xl"],defaultValue:"md",description:"Gap between grid items"},align:{control:{type:"select"},options:["","start","center","end","stretch"],defaultValue:"",description:"Vertical alignment"},justify:{control:{type:"select"},options:["","start","center","end","between","around","evenly"],defaultValue:"",description:"Horizontal alignment"},wrap:{control:{type:"boolean"},defaultValue:!1,description:"Enable wrapping"}}},p=e=>({components:{Grid:s},setup(){return{args:e}},template:`
    <Grid v-bind="args" style="background: var(--default-bg); padding: 1em;">
      <div style="background: var(--primary-bg); color: var(--primary-text); padding: 1em; border-radius: 8px;">Item 1</div>
      <div style="background: var(--success-bg); color: var(--success-text); padding: 1em; border-radius: 8px;">Item 2</div>
      <div style="background: var(--danger-bg); color: var(--danger-text); padding: 1em; border-radius: 8px;">Item 3</div>
      <div style="background: var(--info-bg); color: var(--info-text); padding: 1em; border-radius: 8px;">Item 4</div>
    </Grid>
  `}),a=p.bind({});a.args={cols:3,gap:"md",align:"",justify:"",wrap:!1};var r,t,n;a.parameters={...a.parameters,docs:{...(r=a.parameters)==null?void 0:r.docs,source:{originalSource:`args => ({
  components: {
    Grid
  },
  setup() {
    return {
      args
    };
  },
  template: \`
    <Grid v-bind="args" style="background: var(--default-bg); padding: 1em;">
      <div style="background: var(--primary-bg); color: var(--primary-text); padding: 1em; border-radius: 8px;">Item 1</div>
      <div style="background: var(--success-bg); color: var(--success-text); padding: 1em; border-radius: 8px;">Item 2</div>
      <div style="background: var(--danger-bg); color: var(--danger-text); padding: 1em; border-radius: 8px;">Item 3</div>
      <div style="background: var(--info-bg); color: var(--info-text); padding: 1em; border-radius: 8px;">Item 4</div>
    </Grid>
  \`
})`,...(n=(t=a.parameters)==null?void 0:t.docs)==null?void 0:n.source}}};const y=["Default"];export{a as Default,y as __namedExportsOrder,b as default};
