import{_ as V,j as I,c as S,i as C,o as T}from"./iframe-Cj62cclV.js";const W=["type","placeholder","disabled","value"],g={__name:"Input",props:{modelValue:String,type:{type:String,default:"text",validator:e=>["text","password","email","number"].includes(e)},placeholder:{type:String,default:""},disabled:{type:Boolean,default:!1},borderColor:{type:String,default:"blue"},borderWidth:{type:String,default:"1px"},borderType:{type:String,default:"solid",validator:e=>["solid","dotted","dashed","double","groove","ridge","inset","outset","none","hidden"].includes(e)},borderRadius:{type:String,default:""}},setup(e){const t=e,h=I(()=>({border:t.borderColor?`${t.borderWidth} ${t.borderType} ${t.borderColor}`:void 0,borderRadius:t.borderRadius||void 0}));return(v,n)=>(T(),S("input",{class:"glass-input",type:e.type,placeholder:e.placeholder,disabled:e.disabled,value:e.modelValue,onInput:n[0]||(n[0]=x=>v.$emit("update:modelValue",x.target.value)),style:C(h.value)},null,44,W))}},f=V(g,[["__scopeId","data-v-a700eda9"]]);g.__docgenInfo={exportName:"default",displayName:"Input",description:"",tags:{},props:[{name:"modelValue",type:{name:"string"}},{name:"type",type:{name:"string"},defaultValue:{func:!1,value:"'text'"},values:["text","password","email","number"]},{name:"placeholder",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"disabled",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"borderColor",type:{name:"string"},defaultValue:{func:!1,value:"'blue'"}},{name:"borderWidth",type:{name:"string"},defaultValue:{func:!1,value:"'1px'"}},{name:"borderType",type:{name:"string"},defaultValue:{func:!1,value:"'solid'"},values:["solid","dotted","dashed","double","groove","ridge","inset","outset","none","hidden"]},{name:"borderRadius",type:{name:"string"},defaultValue:{func:!1,value:"''"}}],events:[{name:"update:modelValue"}],sourceFiles:["/Users/surajbharti/projects/glass-ui/src/components/UI/Input.vue"]};const R={title:"Components/Input",component:f,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:`
A glass-style input component supporting different types, placeholder, disabled state, and dynamic border properties.

**Preview:**  
Use the controls to change the input type, placeholder, disabled state, border type, border color, border width, and border radius. Type in the input to see two-way binding in action and adjust the border appearance dynamically.
                `}}},argTypes:{modelValue:{control:{type:"text"},description:"Input value (v-model)."},type:{control:{type:"select"},options:["text","password","email","number"],description:"Input type."},placeholder:{control:{type:"text"},description:"Placeholder text."},disabled:{control:{type:"boolean"},description:"Disables the input."},borderType:{control:{type:"select"},options:["solid","dotted","dashed","double","groove","ridge","inset","outset","none","hidden"],description:"Border style type."},borderColor:{control:{type:"text"},description:'CSS border-color property (e.g., "blue").'},borderWidth:{control:{type:"text"},description:'CSS border-width property (e.g., "2px").'},borderRadius:{control:{type:"text"},description:'CSS border-radius property (e.g., "8px").'}}},d=e=>({components:{Input:f},setup(){return{args:e}},template:'<Input v-bind="args" v-model="args.modelValue" />'}),r=d.bind({});r.args={modelValue:"",type:"text",placeholder:"Enter text...",disabled:!1,borderType:"solid",borderColor:"grey",borderWidth:"1px",borderRadius:""};const o=d.bind({});o.args={modelValue:"",type:"text",placeholder:"With custom border",disabled:!1,borderType:"dashed",borderColor:"grey",borderWidth:"1px",borderRadius:"12px"};const a=d.bind({});a.args={modelValue:"",type:"text",placeholder:"Disabled input",disabled:!0,borderType:"solid",borderColor:"blue",borderWidth:"1px",borderRadius:""};var s,l,p;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`args => ({
  components: {
    Input
  },
  setup() {
    return {
      args
    };
  },
  template: \`<Input v-bind="args" v-model="args.modelValue" />\`
})`,...(p=(l=r.parameters)==null?void 0:l.docs)==null?void 0:p.source}}};var u,i,c;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:`args => ({
  components: {
    Input
  },
  setup() {
    return {
      args
    };
  },
  template: \`<Input v-bind="args" v-model="args.modelValue" />\`
})`,...(c=(i=o.parameters)==null?void 0:i.docs)==null?void 0:c.source}}};var m,b,y;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`args => ({
  components: {
    Input
  },
  setup() {
    return {
      args
    };
  },
  template: \`<Input v-bind="args" v-model="args.modelValue" />\`
})`,...(y=(b=a.parameters)==null?void 0:b.docs)==null?void 0:y.source}}};const _=["Default","WithCustomBorder","Disabled"];export{r as Default,a as Disabled,o as WithCustomBorder,_ as __namedExportsOrder,R as default};
