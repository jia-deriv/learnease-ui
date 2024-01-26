import{c as q,a as ne,j as ie,d as t,b as ce}from"./index-_6_lQ4xg.js";import{r as y}from"./index-4g5l5LRQ.js";import{t as u}from"./bundle-mjs-bUXMz-O3.js";import{a as A}from"./index.esm-R2O5XNOC.js";import"./_commonjsHelpers-4gQjN7DL.js";const F=q("flex items-center transition-all cursor-pointer",{variants:{color:ne("text"),textSize:{xs:"px-2 py-1 text-xs gap-1",sm:"px-2 py-1 text-sm gap-1",md:"px-3 py-1 text-md gap-1",lg:"px-4 py-2 text-lg gap-2",xl:"px-5 py-3 text-xl gap-2"},rounded:{none:"rounded-none",sm:"rounded",md:"rounded-md",lg:"rounded-lg",full:"rounded-full"},iconPosition:{start:"flex-row-reverse",end:"flex-row"},labelPosition:{top:"",bottom:""},fullWidth:{true:"w-full"},borderWidth:{xs:"border font-thin",sm:"border-2 font-normal",md:"border-4 font-medium",lg:"border-6 font-semibold",xl:"border-8 font-black"},width:{sm:"w-60",md:"w-72",lg:"w-96"}},defaultVariants:{borderWidth:"sm",color:"primary",fullWidth:!1,iconPosition:"end",labelPosition:"top",rounded:"md",textSize:"md",width:"md"}}),pe=q("absolute block max-w-[200px] overflow-hidden overflow-ellipsis p-0.5 text-xs",{variants:{disabled:{true:"text-gray-300 bg-gradient-to-t from-gray-50 to-transparent",false:"bg-white"},labelPosition:{top:"left-6 translate-y-[-23px]",bottom:"left-6 translate-y-[21px]"}},defaultVariants:{disabled:!1,labelPosition:"top"}}),G=({borderWidth:H,className:J,color:o="primary",defaultValue:K="",disabled:e,fullWidth:Q,icon:c,iconPosition:b,isInvalid:me,label:x,labelPosition:U="top",maxLength:X,name:f="TextField",onChange:p,onIconClick:Y,placeholder:Z,rounded:g,textSize:ee,width:te,...oe})=>{const[re,ae]=y.useState(K),m=y.useRef(null),le=h=>{const de=h.target.value;ae(de),p==null||p(h)},se=()=>{m.current&&m.current.focus()};return ie("div",{className:u(F({color:o,rounded:g,iconPosition:b,fullWidth:Q,borderWidth:H,width:te}),c?"justify-between":"justify-center",J,`center inline-flex min-w-[60px] ${e?"border-gray-300 bg-gray-50":`border-${o}`}`),children:[t("input",{className:u(F({color:o,textSize:ee,rounded:g,iconPosition:b}),`w-full border-none focus-visible:outline-none ${e?"bg-gray-50 text-gray-300 placeholder:text-gray-300":`border-${o}`}`),disabled:e,id:f,maxLength:X,onChange:le,placeholder:Z,ref:m,type:"text",value:re,...oe}),x&&t("label",{className:u(pe({disabled:e,labelPosition:U})),htmlFor:f,children:x}),c&&t("div",{className:e?"text-gray-300":"",onClick:Y??se,children:c})]})};G.displayName="TextField";const T={icon:t(A,{}),none:null},he={component:G,title:"Input/Input/TextField",tags:["autodocs"],argTypes:{className:{table:{disable:!0}},icon:{description:"`ReactNode`",options:Object.keys(T),mapping:T,control:{type:"radio"},table:{defaultValue:{summary:"none"}}},color:{description:"`ColorVariant`",options:Object.keys(ce),control:{type:"select"},table:{defaultValue:{summary:"primary"}}},size:{description:"`xs` | `sm` | `md` | `lg` | `xl`",options:["xs","sm","md","lg","xl"],control:{type:"radio"},table:{defaultValue:{summary:"md"}}},width:{description:"`sm` | `md` | `lg`",options:["sm","md","lg"],control:{type:"radio"},table:{defaultValue:{summary:"md"}}},borderWidth:{description:"`xs` | `sm` | `md` | `lg` | `xl`",options:["xs","sm","md","lg","xl"],control:{type:"radio"},table:{defaultValue:{summary:"sm"}}},rounded:{description:"`none` | `sm` | `md` | `lg` | `full`",options:["none","sm","md","lg","full"],control:{type:"radio"},table:{defaultValue:{summary:"sm"}}},iconPosition:{description:"`start` | `end`",options:["start","end"],control:{type:"radio"},table:{defaultValue:{summary:"start"}}},labelPosition:{description:"`top` | `bottom`",options:["top","bottom"],control:{type:"radio"},table:{defaultValue:{summary:"top"}}},fullWidth:{description:"`boolean`",control:{type:"boolean",expanded:!0},table:{defaultValue:{summary:"false"}}},disabled:{description:"`boolean`",control:{type:"boolean",expanded:!0},table:{defaultValue:{summary:"false"}}}}},r={args:{placeholder:"Text Field",label:""}},a={args:{placeholder:"Icon Text Field",icon:t(A,{})}},l={args:{placeholder:"Thick Bordered Text Field",borderWidth:"md"}},s={args:{placeholder:"Rounded Text Field",rounded:"full"}},d={args:{placeholder:"Bottom Label Text Field",label:"Label example",labelPosition:"bottom"}},n={args:{placeholder:"Full Width Text Field",fullWidth:!0}},i={args:{placeholder:"Disabled Text Field",disabled:!0}};var w,W,V;r.parameters={...r.parameters,docs:{...(w=r.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    placeholder: 'Text Field',
    label: ''
  }
}`,...(V=(W=r.parameters)==null?void 0:W.docs)==null?void 0:V.source}}};var v,S,k;a.parameters={...a.parameters,docs:{...(v=a.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    placeholder: 'Icon Text Field',
    icon: <FiChevronRight />
  }
}`,...(k=(S=a.parameters)==null?void 0:S.docs)==null?void 0:k.source}}};var P,R,B;l.parameters={...l.parameters,docs:{...(P=l.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    placeholder: 'Thick Bordered Text Field',
    borderWidth: 'md'
  }
}`,...(B=(R=l.parameters)==null?void 0:R.docs)==null?void 0:B.source}}};var I,j,N;s.parameters={...s.parameters,docs:{...(I=s.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    placeholder: 'Rounded Text Field',
    rounded: 'full'
  }
}`,...(N=(j=s.parameters)==null?void 0:j.docs)==null?void 0:N.source}}};var D,L,C;d.parameters={...d.parameters,docs:{...(D=d.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    placeholder: 'Bottom Label Text Field',
    label: 'Label example',
    labelPosition: 'bottom'
  }
}`,...(C=(L=d.parameters)==null?void 0:L.docs)==null?void 0:C.source}}};var $,z,O;n.parameters={...n.parameters,docs:{...($=n.parameters)==null?void 0:$.docs,source:{originalSource:`{
  args: {
    placeholder: 'Full Width Text Field',
    fullWidth: true
  }
}`,...(O=(z=n.parameters)==null?void 0:z.docs)==null?void 0:O.source}}};var E,_,M;i.parameters={...i.parameters,docs:{...(E=i.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    placeholder: 'Disabled Text Field',
    disabled: true
  }
}`,...(M=(_=i.parameters)==null?void 0:_.docs)==null?void 0:M.source}}};const ye=["Default","WithIcon","ThickBordered","Rounded","LabelBottom","FullWidth","Disabled"];export{r as Default,i as Disabled,n as FullWidth,d as LabelBottom,s as Rounded,l as ThickBordered,a as WithIcon,ye as __namedExportsOrder,he as default};
