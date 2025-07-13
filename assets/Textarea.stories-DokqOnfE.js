import{_ as T,j as V,c as S,i as w,o as C}from"./iframe-CF2apmja.js";const W=["placeholder","disabled","rows","value"],y={__name:"Textarea",props:{modelValue:String,placeholder:{type:String,default:""},disabled:{type:Boolean,default:!1},rows:{type:[String,Number],default:3},borderColor:{type:String,default:"grey"},borderWidth:{type:String,default:"1px"},borderType:{type:String,default:"solid",validator:e=>["solid","dotted","dashed","double","groove","ridge","inset","outset","none","hidden"].includes(e)},borderRadius:{type:String,default:""}},setup(e){const o=e,x=V(()=>({border:`${o.borderWidth} ${o.borderType} ${o.borderColor}`,borderRadius:o.borderRadius||void 0}));return(h,s)=>(C(),S("textarea",{class:"glass-textarea",placeholder:e.placeholder,disabled:e.disabled,rows:e.rows,value:e.modelValue,onInput:s[0]||(s[0]=v=>h.$emit("update:modelValue",v.target.value)),style:w(x.value)},null,44,W))}},f=T(y,[["__scopeId","data-v-7f493733"]]);y.__docgenInfo={exportName:"default",displayName:"Textarea",description:"",tags:{},props:[{name:"modelValue",type:{name:"string"}},{name:"placeholder",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"disabled",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"rows",type:{name:"string|number"},defaultValue:{func:!1,value:"3"}},{name:"borderColor",type:{name:"string"},defaultValue:{func:!1,value:"'grey'"}},{name:"borderWidth",type:{name:"string"},defaultValue:{func:!1,value:"'1px'"}},{name:"borderType",type:{name:"string"},defaultValue:{func:!1,value:"'solid'"},values:["solid","dotted","dashed","double","groove","ridge","inset","outset","none","hidden"]},{name:"borderRadius",type:{name:"string"},defaultValue:{func:!1,value:"''"}}],events:[{name:"update:modelValue"}],sourceFiles:["/Users/surajbharti/projects/glass-ui/src/components/UI/Textarea.vue"]};const _={title:"Components/Textarea",component:f,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:`
A glass-style textarea component supporting placeholder, disabled state, row count, and dynamic border properties.

**Preview:**  
Use the controls to change the placeholder, disabled state, number of rows, border type, border color, border width, and border radius. Type in the textarea to see two-way binding in action.
        `}}},argTypes:{modelValue:{control:{type:"text"},description:"Textarea value (v-model)."},placeholder:{control:{type:"text"},description:"Placeholder text."},disabled:{control:{type:"boolean"},description:"Disables the textarea."},rows:{control:{type:"number"},description:"Number of visible text lines."},borderType:{control:{type:"select"},options:["solid","dotted","dashed","double","groove","ridge","inset","outset","none","hidden"],description:"Border style type."},borderColor:{control:{type:"text"},description:'CSS border-color property (e.g., "grey").'},borderWidth:{control:{type:"text"},description:'CSS border-width property (e.g., "2px").'},borderRadius:{control:{type:"text"},description:'CSS border-radius property (e.g., "8px").'}}},d=e=>({components:{Textarea:f},setup(){return{args:e}},template:'<Textarea v-bind="args" v-model="args.modelValue" />'}),r=d.bind({});r.args={modelValue:"",placeholder:"Enter your message...",disabled:!1,rows:3,borderType:"solid",borderColor:"primary",borderWidth:"1px",borderRadius:""};const a=d.bind({});a.args={modelValue:"",placeholder:"With custom border",disabled:!1,rows:4,borderType:"dashed",borderColor:"grey",borderWidth:"2px",borderRadius:"12px"};const t=d.bind({});t.args={modelValue:"",placeholder:"Disabled textarea",disabled:!0,rows:3,borderType:"solid",borderColor:"grey",borderWidth:"1px",borderRadius:""};var l,n,i;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:`args => ({
  components: {
    Textarea
  },
  setup() {
    return {
      args
    };
  },
  template: \`<Textarea v-bind="args" v-model="args.modelValue" />\`
})`,...(i=(n=r.parameters)==null?void 0:n.docs)==null?void 0:i.source}}};var u,p,c;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`args => ({
  components: {
    Textarea
  },
  setup() {
    return {
      args
    };
  },
  template: \`<Textarea v-bind="args" v-model="args.modelValue" />\`
})`,...(c=(p=a.parameters)==null?void 0:p.docs)==null?void 0:c.source}}};var m,b,g;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`args => ({
  components: {
    Textarea
  },
  setup() {
    return {
      args
    };
  },
  template: \`<Textarea v-bind="args" v-model="args.modelValue" />\`
})`,...(g=(b=t.parameters)==null?void 0:b.docs)==null?void 0:g.source}}};const B=["Default","WithCustomBorder","Disabled"];export{r as Default,t as Disabled,a as WithCustomBorder,B as __namedExportsOrder,_ as default};
