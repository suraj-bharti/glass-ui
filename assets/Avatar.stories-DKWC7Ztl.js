import{c as u,e as m,d as g}from"./iframe-CbIX5YJi.js";import{_ as v}from"./_plugin-vue_export-helper-DlAUqK2U.js";const h=["src","alt","width","height"],p={__name:"Avatar",props:{src:{type:String,required:!0},alt:{type:String,default:"Avatar"},size:{type:[String,Number],default:48},shape:{type:String,default:"circle",validator:e=>["circle","rounded"].includes(e)}},setup(e){return(f,y)=>(g(),u("img",{class:"glass-avatar",src:e.src,alt:e.alt,width:e.size,height:e.size,style:m({borderRadius:e.shape==="circle"?"50%":"8px",width:e.size+"px",height:e.size+"px"})},null,12,h))}},l=v(p,[["__scopeId","data-v-0c6def60"]]);p.__docgenInfo={exportName:"default",displayName:"Avatar",description:"",tags:{},props:[{name:"src",type:{name:"string"},required:!0},{name:"alt",type:{name:"string"},defaultValue:{func:!1,value:"'Avatar'"}},{name:"size",type:{name:"string|number"},defaultValue:{func:!1,value:"48"}},{name:"shape",type:{name:"string"},defaultValue:{func:!1,value:"'circle'"},values:["circle","rounded"]}],sourceFiles:["/Users/surajbharti/projects/glass-ui/src/components/UI/Avatar.vue"]};const x={title:"Components/Avatar",component:l,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:`
A glass-style avatar component for displaying user or entity images, supporting size and shape options.

**Preview:**  
Use the controls to change the image source, size, and shape.
        `}}},argTypes:{src:{control:{type:"text"},description:"Image source URL."},alt:{control:{type:"text"},description:"Alternative text for the image."},size:{control:{type:"number"},description:"Avatar size in pixels."},shape:{control:{type:"select"},options:["circle","rounded"],description:"Avatar shape."}}},d=e=>({components:{Avatar:l},setup(){return{args:e}},template:'<Avatar v-bind="args" />'}),t=d.bind({});t.args={src:"https://randomuser.me/api/portraits/men/32.jpg",alt:"User avatar",size:48,shape:"circle"};const a=d.bind({});a.args={src:"https://randomuser.me/api/portraits/women/44.jpg",alt:"User avatar",size:64,shape:"rounded"};var r,s,n;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`args => ({
  components: {
    Avatar
  },
  setup() {
    return {
      args
    };
  },
  template: \`<Avatar v-bind="args" />\`
})`,...(n=(s=t.parameters)==null?void 0:s.docs)==null?void 0:n.source}}};var o,i,c;a.parameters={...a.parameters,docs:{...(o=a.parameters)==null?void 0:o.docs,source:{originalSource:`args => ({
  components: {
    Avatar
  },
  setup() {
    return {
      args
    };
  },
  template: \`<Avatar v-bind="args" />\`
})`,...(c=(i=a.parameters)==null?void 0:i.docs)==null?void 0:c.source}}};const b=["Default","Rounded"];export{t as Default,a as Rounded,b as __namedExportsOrder,x as default};
