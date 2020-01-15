


export const routes = [
  { path: '/', redirect:'/A' },
  { path: '/A', name:'A', component: resolve => require(['@/components/A'], resolve),meta:{keepAlive:true} },
  { path: '/B', name:'B',  component: resolve => require(['@/components/B'], resolve),meta:{keepAlive:false} },
  { path: '/C', name:'C',  component: resolve => require(['@/components/C'], resolve),meta:{keepAlive:false} }
]