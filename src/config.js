module.exports=function(router){
	router.map({
		"/err":{
			component:function(resolve){
				require(["./components/err"],resolve)
			}
		},
		"login":{
			component:function(resolve){
				require(["./components/login"],resolve)
			}
		},
		"/home":{
			component:function(resolve){
				require(["./components/home"],resolve)
			},
			subRoutes:{
				"/one/:id":{
					name:"one",
					component:function(resolve){
						require(["./components/one"],resolve);
					}
				},
				"/two":{
					component:function(resolve){
						require(["./components/two"],resolve);
					}
				}
			}
		}
	})
	router.redirect({
		"/":"login",
		"*":"/err"
	})
}

/*"/home":{
			component:function(resolve){
				require(["./components/home"],resolve)
			},
			subRoutes:{
				"/one/:id":{
					name:"one",
					component:function(resolve){
						require(["./components/one"],resolve);
					}
				},
				"/two":{
					component:function(resolve){
						require(["./components/two"],resolve);
					}
				}
			}
		}		

ll      ls        vi    :q!  退出vi     
pwd  显示当前文件
git    生成本地仓库
git  init    对文件进行版本管理
git status   查看本地仓储   
git  add    加文件进行管理 
git  commit -m      提交
git reset --hard  加上前四位   恢复文件
git log    生成码 
git diff    查看代码变化  自己改的东西 
$ 表示普通用户    # 管理员
git add .     代表所有文件
$ git add  README.md    添加README.md文件

		*/