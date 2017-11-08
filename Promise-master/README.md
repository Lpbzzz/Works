### Promise

> 高版本的jQuery本身自带Promise支持

> ajax的返回值就是一个Promise对象

		Promise.all([
			$.ajax(),
			$.ajax()
		]).then(result=>{
			console.log('全都成功了')
		},error=>{
			console.log('至少有一个失败了')
		})
