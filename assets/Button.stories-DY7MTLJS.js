import{B as j}from"./Button-DaeOXJm5.js";import"./iframe-Bw9eQp_X.js";const L={title:"Components/Button",component:j,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:`
A customizable glass-style button component supporting multiple variants, loading state, icon, block/full-width, autofocus, disabled state, and different button types.

**Preview:**  
Use the controls below to change the button's variant, type, loading, icon, block, autofocus, disabled state, and label. The preview updates in real time to show how the button will look and behave with your selected options.
        `}}},argTypes:{variant:{control:{type:"select"},options:["primary","secondary","success","danger","warning","info","light","dark"],description:"Visual style of the button."},disabled:{control:{type:"boolean"},description:"Disables the button."},loading:{control:{type:"boolean"},description:"Shows a loading spinner and disables the button."},icon:{control:{type:"text"},description:"Name of icon component (must be globally registered or imported in preview).",table:{category:"props"}},block:{control:{type:"boolean"},description:"Makes the button take the full width of its container."},autofocus:{control:{type:"boolean"},description:"Autofocus the button on mount."},type:{control:{type:"select"},options:["button","submit","reset"],description:"Button type attribute."},default:{control:{type:"text"},description:"Button label (slot content).",table:{category:"slots"}}}},o=x=>({components:{Button:j},setup(){return{args:x}},template:'<Button v-bind="args">{{ args.default }}</Button>'}),t=o.bind({});t.args={variant:"primary",disabled:!1,loading:!1,icon:"",block:!1,autofocus:!1,type:"button",default:"Primary"};const n=o.bind({});n.args={variant:"primary",icon:"✔️",default:"With Icon"};const e=o.bind({});e.args={...t.args,loading:!0,default:"Loading..."};const s=o.bind({});s.args={...t.args,block:!0,default:"Block Button"};const a=o.bind({});a.args={...t.args,disabled:!0,default:"Disabled"};const r=o.bind({});r.args={...t.args,variant:"success",default:"Success"};var i,c,u;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`args => ({
  components: {
    Button
  },
  setup() {
    // If icon is an emoji, pass as string; if you want to support components, add logic here.
    return {
      args
    };
  },
  template: \`<Button v-bind="args">{{ args.default }}</Button>\`
})`,...(u=(c=t.parameters)==null?void 0:c.docs)==null?void 0:u.source}}};var p,d,l;n.parameters={...n.parameters,docs:{...(p=n.parameters)==null?void 0:p.docs,source:{originalSource:`args => ({
  components: {
    Button
  },
  setup() {
    // If icon is an emoji, pass as string; if you want to support components, add logic here.
    return {
      args
    };
  },
  template: \`<Button v-bind="args">{{ args.default }}</Button>\`
})`,...(l=(d=n.parameters)==null?void 0:d.docs)==null?void 0:l.source}}};var g,m,b;e.parameters={...e.parameters,docs:{...(g=e.parameters)==null?void 0:g.docs,source:{originalSource:`args => ({
  components: {
    Button
  },
  setup() {
    // If icon is an emoji, pass as string; if you want to support components, add logic here.
    return {
      args
    };
  },
  template: \`<Button v-bind="args">{{ args.default }}</Button>\`
})`,...(b=(m=e.parameters)==null?void 0:m.docs)==null?void 0:b.source}}};var f,y,B;s.parameters={...s.parameters,docs:{...(f=s.parameters)==null?void 0:f.docs,source:{originalSource:`args => ({
  components: {
    Button
  },
  setup() {
    // If icon is an emoji, pass as string; if you want to support components, add logic here.
    return {
      args
    };
  },
  template: \`<Button v-bind="args">{{ args.default }}</Button>\`
})`,...(B=(y=s.parameters)==null?void 0:y.docs)==null?void 0:B.source}}};var h,w,v;a.parameters={...a.parameters,docs:{...(h=a.parameters)==null?void 0:h.docs,source:{originalSource:`args => ({
  components: {
    Button
  },
  setup() {
    // If icon is an emoji, pass as string; if you want to support components, add logic here.
    return {
      args
    };
  },
  template: \`<Button v-bind="args">{{ args.default }}</Button>\`
})`,...(v=(w=a.parameters)==null?void 0:w.docs)==null?void 0:v.source}}};var k,S,I;r.parameters={...r.parameters,docs:{...(k=r.parameters)==null?void 0:k.docs,source:{originalSource:`args => ({
  components: {
    Button
  },
  setup() {
    // If icon is an emoji, pass as string; if you want to support components, add logic here.
    return {
      args
    };
  },
  template: \`<Button v-bind="args">{{ args.default }}</Button>\`
})`,...(I=(S=r.parameters)==null?void 0:S.docs)==null?void 0:I.source}}};const T=["Primary","WithIcon","Loading","Block","Disabled","Success"];export{s as Block,a as Disabled,e as Loading,t as Primary,r as Success,n as WithIcon,T as __namedExportsOrder,L as default};
