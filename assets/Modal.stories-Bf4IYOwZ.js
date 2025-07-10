import{_,f as M,k as l,T as u,o as r,c as m,a as f,i as w,l as k,m as i,p as I,e as d,r as S,g as p,t as g,v as B,b as N,q as h}from"./iframe-Bw9eQp_X.js";import{B as x}from"./Button-DaeOXJm5.js";const z={class:"glass-modal",role:"dialog","aria-modal":"true"},U={class:"glass-modal__content"},D={class:"glass-modal__actions"},y={__name:"Modal",props:{modelValue:{type:Boolean,required:!0},closable:{type:Boolean,default:!0},zIndex:{type:[Number,String],default:1e3},confirmText:{type:String,default:"Confirm"},cancelText:{type:String,default:"Cancel"}},emits:["update:modelValue","confirm","cancel"],setup(e,{emit:a}){const o=a;function n(){o("update:modelValue",!1)}function s(){o("confirm"),n()}function c(){o("cancel"),n()}return(V,O)=>(r(),M(u,{name:"glass-modal-fade",appear:""},{default:l(()=>[e.modelValue?(r(),m("div",{key:0,class:"glass-modal__backdrop",onClick:k(n,["self"]),style:w({zIndex:e.zIndex})},[i(u,{name:"glass-modal-zoom",appear:""},{default:l(()=>[I(d("div",z,[e.closable?(r(),m("button",{key:0,class:"glass-modal__close",onClick:n,"aria-label":"Close",type:"button"},"×")):f("",!0),d("div",U,[S(V.$slots,"default",{},void 0,!0)]),d("div",D,[i(x,{variant:"danger",onClick:c},{default:l(()=>[p(g(e.cancelText),1)]),_:1}),i(x,{variant:"primary",onClick:s},{default:l(()=>[p(g(e.confirmText),1)]),_:1})])],512),[[B,e.modelValue]])]),_:3})],4)):f("",!0)]),_:3}))}},T=_(y,[["__scopeId","data-v-5c0778c2"]]);y.__docgenInfo={exportName:"default",displayName:"Modal",description:"",tags:{},props:[{name:"modelValue",type:{name:"boolean"},required:!0},{name:"closable",type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"zIndex",type:{name:"number|string"},defaultValue:{func:!1,value:"1000"}},{name:"confirmText",type:{name:"string"},defaultValue:{func:!1,value:"'Confirm'"}},{name:"cancelText",type:{name:"string"},defaultValue:{func:!1,value:"'Cancel'"}}],events:[{name:"update:modelValue"},{name:"confirm"},{name:"cancel"}],slots:[{name:"default"}],sourceFiles:["/Users/surajbharti/projects/glass-ui/src/components/UI/Modal.vue"]};const G={title:"Components/Modal",component:T,argTypes:{modelValue:{control:{type:"boolean"},defaultValue:!1,description:"Show or hide the modal"},confirmText:{control:{type:"text"},defaultValue:"Confirm",description:"Text for the confirm button"},cancelText:{control:{type:"text"},defaultValue:"Cancel",description:"Text for the cancel button"}},parameters:{docs:{description:{component:"\n**Modal Component**\n\nA glassmorphic modal dialog. Use `v-model` or `:modelValue` to control visibility.\n"}}}},q=e=>({components:{Modal:T},setup(){const a=N(e.modelValue);function o(){a.value=!0}function n(){a.value=!1}function s(){h.emit("show",{message:"Confirmed!",variant:"success",duration:3e3}),n()}function c(){h.emit("show",{message:"Cancelled!",variant:"danger",duration:3e3}),n()}return{args:e,show:a,open:o,close:n,onConfirm:s,onCancel:c}},template:`
    <div>
      <button @click="open" style="padding: 0.5em 1.5em; border-radius: 8px; background: #fff3; border: none; cursor: pointer;">
        Open Modal
      </button>
      <Modal
        v-model="show"
        :confirmText="args.confirmText"
        :cancelText="args.cancelText"
        @confirm="onConfirm"
        @cancel="onCancel"
      >
        <h2 style="margin-top:0;">Glass UI Modal</h2>
        <p>This is a beautiful glassmorphic modal dialog. You can put any content here.</p>
      </Modal>
    </div>
  `}),t=q.bind({});t.args={modelValue:!1,confirmText:"Confirm",cancelText:"Cancel"};var C,v,b;t.parameters={...t.parameters,docs:{...(C=t.parameters)==null?void 0:C.docs,source:{originalSource:`args => ({
  components: {
    Modal
  },
  setup() {
    const show = ref(args.modelValue);
    function open() {
      show.value = true;
    }
    function close() {
      show.value = false;
    }
    function onConfirm() {
      toast.emit('show', {
        message: 'Confirmed!',
        variant: 'success',
        duration: 3000
      });
      close();
    }
    function onCancel() {
      toast.emit('show', {
        message: 'Cancelled!',
        variant: 'danger',
        duration: 3000
      });
      close();
    }
    return {
      args,
      show,
      open,
      close,
      onConfirm,
      onCancel
    };
  },
  template: \`
    <div>
      <button @click="open" style="padding: 0.5em 1.5em; border-radius: 8px; background: #fff3; border: none; cursor: pointer;">
        Open Modal
      </button>
      <Modal
        v-model="show"
        :confirmText="args.confirmText"
        :cancelText="args.cancelText"
        @confirm="onConfirm"
        @cancel="onCancel"
      >
        <h2 style="margin-top:0;">Glass UI Modal</h2>
        <p>This is a beautiful glassmorphic modal dialog. You can put any content here.</p>
      </Modal>
    </div>
  \`
})`,...(b=(v=t.parameters)==null?void 0:v.docs)==null?void 0:b.source}}};const Y=["Default"];export{t as Default,Y as __namedExportsOrder,G as default};
