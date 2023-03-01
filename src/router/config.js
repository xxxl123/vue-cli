export default{
    // 1.设置路由模式
    mode:"history",
    routes: [
        {
            path: "/register",
            alias: "/1",
            name: "register",
            component: () => import('@/views/AppRegister.vue'),
            meta:{
                title: "今日头条-注册页面",
            }
        },
        {
            path: "/",
            alias:"/2",
            name: "login",
            component: () => import('@/views/AppLogin.vue'),
            meta: {
                title: "今日头条-登录页面",
            },
        },

        {
            path: "/home",
            name:"Home",
            component:()=>import('../components/view/Home')
        },

        {
            path: "/kinds",
            name:"Kinds",
            component:()=>import('../components/view/Classification.vue'),
            children:[
            	{
            		path: "/military",
            		component:()=>import('@/components/view/Military.vue')
            	},
            	{
            		path: "/economic",
            		component:()=>import('@/components/view/Economic.vue')
            	},
            ]
        },

        {
            path: "/search",
            name:"Search",
            component:()=>import('../components/view/Search')
        },

        {
            path:"*",
            name:"404",
            component:()=>import('../components/main/NotFound')
        },



        {
            path: "/us",
            alias:"/1-1",
            name: "us",
            component: () => import('@/views/AppUs.vue'),
            meta: {
                title: "今日头条-关于我们",
            },
        },

        {
            path: "/application",
            alias:"/1-1",
            name: "application",
            component: () => import('@/views/AppApplication.vue'),
            meta: {
                title: "今日头条-下载app",
            },
        },
		//跳转到发布作品
		{
			path:"/workslist",
			name:"WorksList",
			component:()=>import('@/views/WorksList.vue')
		},
		//跳转到添加作品
		{
			path:"/addwork",
			name:"AddWork",
			component:()=>import('@/views/addWork.vue')
		},
		//跳转到查看作品
		{
			path:"/checkwork",
			name:"CheckWork",
			component:()=>import('@/views/checkwork.vue')
		},
		{
			path: "/milinews",
			component:()=>import('../components/view/milinews.vue')
		},
		{
			path: "/econews",
			component:()=>import('../components/view/econews.vue')
		},
		//新闻分类
		{
				path: "/science",
				name:"science",
				component:()=>import('../components/view/science')
			},
		{
				path: "/sciencenews",
				name:"sciencenews",
				component:()=>import('../components/view/sciencenews')
			},
		{
				path: "/sport",
				name:"sport",
				component:()=>import('../components/view/sport')
			},
		{
				path: "/sportnews",
				name:"sportnews",
				component:()=>import('../components/view/sportnews')
			},
		{
			path: "/society",
			name:"society",
			component:()=>import('../components/view/society')
		},
		{
			path: "/rule",
			name:"rule",
			component:()=>import('../components/view/rule')
		},
		{
			path:"/sarticle",
			name:"sarticle",
			component:()=>import('../components/view/SArticle.vue')
		},
		{
			path:"/rarticle",
			name:"rarticle",
			component:()=>import('../components/view/RArticle.vue')
		}
    ]
}
