<template>
  <div class="ToDoList">    
    <h1 v-html="title"></h1>
    待辦 : <input type="text" v-model="newItem">
    &nbsp;&nbsp;<button @click="addNewItem">新增</button>    
    <ul>
      <li
      v-for="item in items"
      :key="item.id">
        <!-- 待辦事項 -->
        <span v-text="item.title"></span>
        <!-- 完成按鈕 -->
        <button v-on:click="Finish(item)">完成後刪除</button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'ToDoList',
  data () {
    return {
      title: 'ToDoList', //標題名稱      
      items: [], //待辦事項列表
      newItem: ''
    }
  },
  methods: {
    // 點選完成按鈕，刪除對應事項
    Finish (deleteItem) {
      console.log(deleteItem)
      // 使用map遍歷
      this.items.map((item, index) => {
        if (item.title === deleteItem.title) {
          // 刪除對應事項
          this.items.splice(index, 1)
        }
      })
    },
    // 點選新增按鈕，新增新的待辦事項
    addNewItem () {
      // 使用push為陣列新增新元素
      this.items.push({
        id: this.id, // id 唯一且自增
        title: this.newItem // todo 標題
      })
      // id 自增
      this.id++;
      // 清空輸入框
      this.newItem = ''
    }
  }
}
</script>