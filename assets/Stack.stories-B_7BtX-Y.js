import{_ as x,j as r,c as h,r as w,i as j,n as I,o as C}from"./iframe-Cj62cclV.js";const v={__name:"Stack",props:{align:{type:String,default:"",validator:e=>["start","center","end","stretch","baseline",""].includes(e)},justify:{type:String,default:"",validator:e=>["start","center","end","between","around","evenly",""].includes(e)},direction:{type:String,default:"column",validator:e=>["column","row"].includes(e)},gap:{type:[String,Number],default:""},padding:{type:String,default:""}},setup(e){const t=e,k=r(()=>`direction--${t.direction}`),b=r(()=>t.gap?{gap:typeof t.gap=="number"?`${t.gap}px`:t.gap}:{});return(S,z)=>(C(),h("div",{class:I(["stack",[k.value,e.align?`align-${e.align}`:"",e.justify?`justify--${e.justify}`:"",e.padding?`p--${e.padding}`:""]]),style:j(b.value)},[w(S.$slots,"default",{},void 0,!0)],6))}},y=x(v,[["__scopeId","data-v-f02c0da9"]]);v.__docgenInfo={exportName:"default",displayName:"Stack",description:"",tags:{},props:[{name:"align",type:{name:"string"},defaultValue:{func:!1,value:"''"},values:["start","center","end","stretch","baseline"]},{name:"justify",type:{name:"string"},defaultValue:{func:!1,value:"''"},values:["start","center","end","between","around","evenly"]},{name:"direction",type:{name:"string"},defaultValue:{func:!1,value:"'column'"},values:["column","row"]},{name:"gap",type:{name:"string|number"},defaultValue:{func:!1,value:"''"}},{name:"padding",type:{name:"string"},defaultValue:{func:!1,value:"''"}}],slots:[{name:"default"}],sourceFiles:["/Users/surajbharti/projects/glass-ui/src/components/UI/Stack.vue"]};const V={title:"Components/Stack",component:y,tags:["autodocs"],parameters:{docs:{description:{component:"\n**Stack** is a flexible layout component for arranging children in a row or column with optional spacing, alignment, and justification.\n\n- `direction`: Controls the layout direction (`column` for vertical, `row` for horizontal).\n- `gap`: Sets the space between child elements (accepts CSS values like `8px`, `1rem`, or a number for pixels).\n- `padding`: Applies padding to the stack container using your design tokens.\n- `align`: Aligns items vertically (for row) or horizontally (for column).\n- `justify`: Justifies items along the main axis.\n\n**Preview:**  \nUse the controls to change direction, gap, padding, alignment, and justification to see how Stack arranges its children.\n        "}}},argTypes:{direction:{control:{type:"select"},options:["column","row"],description:"Stack direction (vertical or horizontal)."},gap:{control:{type:"text"},description:'Gap between items (e.g., "8px", "1rem", or number for px).'},padding:{control:{type:"select"},options:["xxs","xs","sm","md","lg","xl","2x","3x",""],description:"Padding size for the stack."},align:{control:{type:"select"},options:["start","center","end","stretch","baseline",""],description:"Alignment of items in the stack."},justify:{control:{type:"select"},options:["start","center","end","between","around","evenly",""],description:"Justification of items in the stack."}}},s=e=>({components:{Stack:y},setup(){return{args:e}},template:`
    <Stack v-bind="args">
      <div style="background:#eee;padding:8px;">Item 1</div>
      <div style="background:#ddd;padding:8px;">Item 2</div>
      <div style="background:#ccc;padding:8px;">Item 3</div>
    </Stack>
  `}),n=s.bind({});n.args={align:"",justify:"",direction:"column",gap:"",padding:""};const a=s.bind({});a.args={align:"center",justify:"between",direction:"row",gap:"16px",padding:"md"};const i=s.bind({});i.args={align:"center",justify:"center",direction:"column",gap:"12px",padding:"lg"};var o,d,c;n.parameters={...n.parameters,docs:{...(o=n.parameters)==null?void 0:o.docs,source:{originalSource:`args => ({
  components: {
    Stack
  },
  setup() {
    return {
      args
    };
  },
  template: \`
    <Stack v-bind="args">
      <div style="background:#eee;padding:8px;">Item 1</div>
      <div style="background:#ddd;padding:8px;">Item 2</div>
      <div style="background:#ccc;padding:8px;">Item 3</div>
    </Stack>
  \`
})`,...(c=(d=n.parameters)==null?void 0:d.docs)==null?void 0:c.source}}};var l,p,u;a.parameters={...a.parameters,docs:{...(l=a.parameters)==null?void 0:l.docs,source:{originalSource:`args => ({
  components: {
    Stack
  },
  setup() {
    return {
      args
    };
  },
  template: \`
    <Stack v-bind="args">
      <div style="background:#eee;padding:8px;">Item 1</div>
      <div style="background:#ddd;padding:8px;">Item 2</div>
      <div style="background:#ccc;padding:8px;">Item 3</div>
    </Stack>
  \`
})`,...(u=(p=a.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};var g,m,f;i.parameters={...i.parameters,docs:{...(g=i.parameters)==null?void 0:g.docs,source:{originalSource:`args => ({
  components: {
    Stack
  },
  setup() {
    return {
      args
    };
  },
  template: \`
    <Stack v-bind="args">
      <div style="background:#eee;padding:8px;">Item 1</div>
      <div style="background:#ddd;padding:8px;">Item 2</div>
      <div style="background:#ccc;padding:8px;">Item 3</div>
    </Stack>
  \`
})`,...(f=(m=i.parameters)==null?void 0:m.docs)==null?void 0:f.source}}};const A=["Default","RowWithGap","CenteredColumn"];export{i as CenteredColumn,n as Default,a as RowWithGap,A as __namedExportsOrder,V as default};
