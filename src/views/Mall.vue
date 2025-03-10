<!-- MenuManagement.vue -->

<template>
  <div>
    <h1>商品追加</h1>

    <!-- Add Menu Item Form -->
    <el-form :model="newItem" ref="newItemForm" label-width="80px">
      <el-form-item label="商品名" prop="name" >
        <el-input v-model="newItem.name" required ></el-input>
      </el-form-item>

      <el-form-item label="価格" prop="price">
        <el-input type="number" v-model.number="newItem.price" required></el-input>
      </el-form-item>

      <el-form-item label="在庫数" prop="Stock">
        <el-input type="number" v-model.number="newItem.Stock" required></el-input>
      </el-form-item>

      <el-form-item label="分類" prop="category">
        <el-select v-model="newItem.category" placeholder="Select" required>
          <el-option label="麺類" value="麺類"></el-option>
          <el-option label="ご飯" value="ご飯"></el-option>
          <el-option label="おつまみ" value="おつまみ"></el-option>
        </el-select>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="addItem">追加</el-button>
      </el-form-item>
    </el-form>

    <!-- Menu List -->
    <div>
      <h2>メニュー</h2>
      <el-table :data="goodsMenu" style="width: 100%">
        <el-table-column label="商品名" prop="name"></el-table-column>
        <el-table-column label="価格" prop="price"></el-table-column>
        
        <el-table-column label="カテゴリ" prop="category"></el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button @click="showEditDialog(scope.$index)" type="primary" size="mini">編集</el-button>
            <el-button @click="showDeleteConfirm(scope.$index)" type="danger" size="mini">削除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>

    <!-- Edit Dialog -->
    <el-dialog title="編集" :visible.sync="editDialogVisible">
      <el-form :model="editItem" ref="editItemForm" label-width="80px">
        <el-form-item label="商品名" prop="name">
          <el-input v-model="editItem.name" required></el-input>
        </el-form-item>
        <el-form-item label="価格" prop="price">
          <el-input type="number" v-model.number="editItem.price" required></el-input>
        </el-form-item>
        <el-form-item label="カテゴリ" prop="category">
          <el-select v-model="editItem.category" placeholder="Select" required>
            <el-option label="麺類" value="麺類"></el-option>
            <el-option label="ご飯" value="ご飯"></el-option>
            <el-option label="おつまみ" value="おつまみ"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="saveEditItem">保存</el-button>
        </el-form-item>
      </el-form>
    </el-dialog>

    <!-- Delete Confirm Dialog -->
    <el-dialog title="削除" :visible.sync="deleteDialogVisible">
      <p>削除しますか？</p>
      <span slot="footer" class="dialog-footer">
        <el-button @click="deleteDialogVisible = false">キャンセル</el-button>
        <el-button type="primary" @click="deleteItem">削除</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  computed: {
    ...mapState({
      goodsMenu: state => state.tab.goodsMenu
    }),
  },
  data() {
    return {
      newItem: {
        name: '',
        price: '',
        category: '麺類'
      },
      editDialogVisible: false,
      deleteDialogVisible: false,
      editItemIndex: null,
      editItem: {
        name: '',
        price: '',
        category: ''
      }
    };
  },
  methods: {
    addItem() {
      this.$refs.newItemForm.validate((valid) => {
        if (valid) {
          this.$store.commit('updateGoodsMenu', [...this.goodsMenu, {
            name: this.newItem.name,
            price: this.newItem.price,
            category: this.newItem.category,
            stock: this.newItem.Stock
          }]);
          this.$store.commit('updateGoodsMenu', [...this.goodsMenu, newItem]);
          this.resetForm();
        }
      });
    },
    showDeleteConfirm(index) {
      this.editItemIndex = null; // Clear the editItemIndex
      this.deleteItemIndex = index;
      this.deleteDialogVisible = true;
    },
    showEditDialog(index) {
      this.deleteDialogVisible = false; // Close delete dialog if open
      this.editItemIndex = index;
      this.editItem = { ...this.goodsMenu[index] };
      this.editDialogVisible = true;
    },
    saveEditItem() {
  this.$refs.editItemForm.validate((valid) => {
    if (valid) {
      const updatedMenu = [...this.goodsMenu];
      updatedMenu.splice(this.editItemIndex, 1, {
        name: this.editItem.name,
        price: this.editItem.price,
        category: this.editItem.category,
        stock: this.editItem.stock
      });

      this.$store.commit('updateGoodsMenu', updatedMenu);
      this.editDialogVisible = false;
    }
  });
},
    deleteItem() {
      if (this.deleteItemIndex !== null) {
        const updatedMenu = [...this.goodsMenu];
        updatedMenu.splice(this.deleteItemIndex, 1);
        this.$store.commit('updateGoodsMenu', updatedMenu);
        this.deleteDialogVisible = false;
      }
    },
    resetForm() {
      this.$refs.newItemForm.resetFields();
    }
  }
};
</script>

<style scoped lang="less">
.el-input  {
  width: 500px;
}
</style>