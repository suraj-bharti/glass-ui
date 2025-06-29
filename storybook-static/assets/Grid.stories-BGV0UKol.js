import{c as l,d as o,i as u,n as c,e as m}from"./iframe-DRmMUMN1.js";import{_ as g}from"./_plugin-vue_export-helper-DlAUqK2U.js";const d={__name:"Grid",props:{cols:{type:[Number,String],default:2,validator:e=>Number(e)>=1&&Number(e)<=12},gap:{type:[String,Number],default:"md"},align:{type:String,default:"",validator:e=>["","start","center","end","stretch"].includes(e)},justify:{type:String,default:"",validator:e=>["","start","center","end","between","around","evenly"].includes(e)},wrap:{type:Boolean,default:!1}},setup(e){return(i,p)=>(m(),l("div",{class:c(["glass-grid",`grid-cols-${e.cols}`,e.gap?`grid-gap-${e.gap}`:"",e.wrap?"grid-wrap":""]),style:u({alignItems:e.align||void 0,justifyItems:e.justify&&["start","center","end","stretch"].includes(e.justify)?e.justify:void 0,justifyContent:e.justify&&["between","around","evenly"].includes(e.justify)?e.justify==="between"?"space-between":e.justify==="around"?"space-around":e.justify==="evenly"?"space-evenly":void 0:void 0,maxWidth:e.justify&&["between","around","evenly"].includes(e.justify)?"600px":void 0,margin:e.justify&&["between","around","evenly"].includes(e.justify)?"2em auto":void 0})},[o(i.$slots,"default",{},void 0,!0)],6))}},s=g(d,[["__scopeId","data-v-738438a8"]]);d.__docgenInfo={exportName:"default",displayName:"Grid",description:"",tags:{},props:[{name:"cols",type:{name:"number|string"},defaultValue:{func:!1,value:"2"}},{name:"gap",type:{name:"string|number"},defaultValue:{func:!1,value:"'md'"}},{name:"align",type:{name:"string"},defaultValue:{func:!1,value:"''"},values:["start","center","end","stretch"]},{name:"justify",type:{name:"string"},defaultValue:{func:!1,value:"''"},values:["start","center","end","between","around","evenly"]},{name:"wrap",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],slots:[{name:"default"}],sourceFiles:["/Users/surajbharti/projects/glass-ui/src/components/UI/Grid.vue"]};const b={title:"Components/Grid",component:s,tags:["autodocs"],argTypes:{cols:{control:{type:"number",min:1,max:12},defaultValue:3,description:"Number of columns (1-12)"},gap:{control:{type:"select"},options:["xs","sm","md","lg","xl"],defaultValue:"md",description:"Gap between grid items"},align:{control:{type:"select"},options:["","start","center","end","stretch"],defaultValue:"",description:"Vertical alignment (align-items)"},justify:{control:{type:"select"},options:["","start","center","end","between","around","evenly"],defaultValue:"",description:"Horizontal alignment (justify-items/justify-content)"},wrap:{control:{type:"boolean"},defaultValue:!1,description:"Enable wrapping (for flex layouts only, ignored for grid)"}},parameters:{docs:{description:{component:"\n**Grid Component Preview**\n\n- `cols`: Number of columns (1-12)\n- `gap`: Gap between grid items (`xs`, `sm`, `md`, `lg`, `xl`)\n- `align`: Vertical alignment (`start`, `center`, `end`, `stretch`)\n- `justify`: Horizontal alignment (`start`, `center`, `end`, `between`, `around`, `evenly`)\n- `wrap`: Enable wrapping (for flex layouts only, ignored for grid)\n\nTry different options using the controls below to see how the grid responds.\n        "}}}},f=e=>({components:{Grid:s},setup(){return{args:e}},template:`
    <Grid v-bind="args" style="background: var(--default-bg); padding: 1em; height: 200px">
      <div style="background: var(--primary-bg); color: var(--primary-text); padding: 1em; border-radius: 8px;">Item 1</div>
      <div style="background: var(--success-bg); color: var(--success-text); padding: 1em; border-radius: 8px;">Item 2</div>
      <div style="background: var(--danger-bg); color: var(--danger-text); padding: 1em; border-radius: 8px;">Item 3</div>
      <div style="background: var(--info-bg); color: var(--info-text); padding: 1em; border-radius: 8px;">Item 4</div>
    </Grid>
  `}),t=f.bind({});t.args={cols:3,gap:"md",align:"",justify:"",wrap:!1};var a,n,r;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`args => ({
  components: {
    Grid
  },
  setup() {
    return {
      args
    };
  },
  template: \`
    <Grid v-bind="args" style="background: var(--default-bg); padding: 1em; height: 200px">
      <div style="background: var(--primary-bg); color: var(--primary-text); padding: 1em; border-radius: 8px;">Item 1</div>
      <div style="background: var(--success-bg); color: var(--success-text); padding: 1em; border-radius: 8px;">Item 2</div>
      <div style="background: var(--danger-bg); color: var(--danger-text); padding: 1em; border-radius: 8px;">Item 3</div>
      <div style="background: var(--info-bg); color: var(--info-text); padding: 1em; border-radius: 8px;">Item 4</div>
    </Grid>
  \`
})`,...(r=(n=t.parameters)==null?void 0:n.docs)==null?void 0:r.source}}};const x=["Default"];export{t as Default,x as __namedExportsOrder,b as default};
