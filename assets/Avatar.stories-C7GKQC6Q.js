import{_ as d,c as m,i as g,o as v}from"./iframe-8xN6mrgl.js";const h=["src","alt","width","height"],p={__name:"Avatar",props:{src:{type:String,required:!0},alt:{type:String,default:"Avatar"},size:{type:[String,Number],default:48},shape:{type:String,default:"circle",validator:e=>["circle","rounded"].includes(e)}},setup(e){return(f,y)=>(v(),m("img",{class:"glass-avatar",src:e.src,alt:e.alt,width:e.size,height:e.size,style:g({borderRadius:e.shape==="circle"?"50%":"8px",width:e.size+"px",height:e.size+"px"})},null,12,h))}},l=d(p,[["__scopeId","data-v-0c6def60"]]);p.__docgenInfo={exportName:"default",displayName:"Avatar",description:"",tags:{},props:[{name:"src",type:{name:"string"},required:!0},{name:"alt",type:{name:"string"},defaultValue:{func:!1,value:"'Avatar'"}},{name:"size",type:{name:"string|number"},defaultValue:{func:!1,value:"48"}},{name:"shape",type:{name:"string"},defaultValue:{func:!1,value:"'circle'"},values:["circle","rounded"]}],sourceFiles:["/Users/surajbharti/projects/glass-ui/src/components/UI/Avatar.vue"]};const z={title:"Components/Avatar",component:l,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:`
A glass-style avatar component for displaying user or entity images, supporting size and shape options.

**Preview:**  
Use the controls to change the image source, size, and shape.
        `}}},argTypes:{src:{control:{type:"text"},description:"Image source URL."},alt:{control:{type:"text"},description:"Alternative text for the image."},size:{control:{type:"number"},description:"Avatar size in pixels."},shape:{control:{type:"select"},options:["circle","rounded"],description:"Avatar shape."}}},u=e=>({components:{Avatar:l},setup(){return{args:e}},template:'<Avatar v-bind="args" />'}),t=u.bind({});t.args={src:"https://randomuser.me/api/portraits/men/32.jpg",alt:"User avatar",size:48,shape:"circle"};const a=u.bind({});a.args={src:"https://randomuser.me/api/portraits/women/44.jpg",alt:"User avatar",size:64,shape:"rounded"};var r,s,n;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`args => ({
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
})`,...(c=(i=a.parameters)==null?void 0:i.docs)==null?void 0:c.source}}};const x=["Default","Rounded"];export{t as Default,a as Rounded,x as __namedExportsOrder,z as default};
