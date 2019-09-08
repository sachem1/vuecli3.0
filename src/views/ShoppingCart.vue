
<template>
	<div id="shoppingCart">
		<div v-if="list.length">
			<table>
				<thead>
					<tr>
						<th><input type="checkbox"
										 name="list"
										 @click="selectAll()"
										 id="checkBox"></th>
						<th>名称</th>
						<th>单价</th>
						<th>数量</th>
						<th>操作</th>
					</tr>
				</thead>
				<tbody>
					<tr v-for="(item,index) in list">
						<td>{{index+1}}</td>
						<td>{{item.name}}</td>
						<td>{{item.price}}</td>
						<td>{{item.num}}</td>
						<td><button @click="handleReduce(index)"
											:disabled="item.count===1"
											class="btn">-</button>
							{{item.count}}
							<button @click="handleAdd(index)"
											class="btn">+</button>
						</td>
						<td><button @click="handleRemove(index)"
											class="btnRemove">移除</button></td>
					</tr>
					<tr>
						<td colspan="5"
								class="totalPrice">{{totalPrice}}</td>
					</tr>
				</tbody>
			</table>
		</div>
		<div v-else>购物车为空!</div>
	</div>
</template>
<script>

var app = new Vue({
  el: '#app',
  data: {
    list: [{
      id: 123,
      name: 'huaweiMeta-20',
      price: '3396.00',
      count: 1
    },
    {
      id: 124,
      name: 'huaweiMeta-30',
      price: '5396.00',
      count: 1
    }, {
      id: 125,
      name: 'xiaomi 9',
      price: '3296.00',
      count: 1
    }],
    totalPrice: 0
  },
  methods: {
    handleReduce (index) {
      if (this.list[index].count === 1) {
        return
      }
      this.list[index].count--
    },
    handleAdd (index) {
      this.list[index].count++
    },
    handleRemove (index) {
      this.list.splice(index, 1)
    },
    checkbox () {

    }

  }
})

</script>

<style>
* {
	margin: 0px;
	padding: 0px;
}
[v-lock] {
	display: none;
}
#app {
	width: 300px;
	height: 200px;
	margin: 10px auto;
	text-align: center;
}
#price {
	border: 1px solid olivedrab;
	border-collapse: collapse;
	border-spacing: 0ch;
	empty-cells: show;
	line-height: 30px;
}
table {
	border: 1px solid #e9e9e9;
	border-collapse: collapse;
	border-spacing: 0;
}
th,
td {
	padding: 8px 16px;
	border: 1px solid #e9e9e9;
	text-align: left;
}
th {
	background: #f7f7f7;
	color: #5c6c77;
	font-weight: 600;
	white-space: nowrap;
}
.btn {
	width: 40px;
	height: 20px;
	border-radius: 5px;
	border: 1px solid #ccc;
	background: #ffffff;
	color: #778899;
}
.btnRemove {
	width: 40px;
	height: 20px;
	border-radius: 5px;
	border: 1px solid #cccccc;
	background: #ffffff;
	color: #778899;
	line-height: 20px;
}
</style>
