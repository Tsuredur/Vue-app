<template>
    <div>
      <h2>在庫管理</h2>
  
      <!-- 商品在庫一覧 -->
      <el-table v-if="goodsMenu" :data="goodsMenu" style="width: 100%">
        <el-table-column label="商品名" prop="name"></el-table-column>
        <el-table-column label="価格" prop="price"></el-table-column>
        <el-table-column label="在庫数">
          <template slot-scope="scope">
            <el-button @click="decreaseStock(scope.row, 10)" icon="el-icon-minus" type="danger" size="mini">10</el-button>
            <el-button @click="decreaseStock(scope.row, 1)" icon="el-icon-minus" type="danger" size="mini">1</el-button>
            {{ scope.row.stock }}
            <el-button @click="increaseStock(scope.row, 1)" icon="el-icon-plus" type="success" size="mini">1</el-button>
            <el-button @click="increaseStock(scope.row, 10)" icon="el-icon-plus" type="success" size="mini">10</el-button>
          </template>
        </el-table-column>
      </el-table>
  
      <!-- 在庫不足の通知ダイアログ -->
      <el-dialog v-if="showAddStockDialog" title="在庫不足" :visible.sync="showAddStockDialog" width="30%" center>
        <p>商品の在庫が不足しています。在庫を追加してください。</p>
      </el-dialog>
  
      <!-- 在庫履歴ボタン -->
      <el-button @click="showStockHistory" icon="el-icon-document" type="info" style="position: fixed; top: 207px; right: 95px;"></el-button>
  
      <!-- 在庫履歴ダイアログ -->
      <el-dialog v-if="showStockHistoryDialog" title="在庫履歴" :visible.sync="showStockHistoryDialog" width="80%" center >
        <el-table :data="stockHistory" style="width: 100%">
          <el-table-column label="商品名" prop="name"></el-table-column>
          <el-table-column label="変更内容">
            <template slot-scope="scope">
              {{ scope.row.change }}
            </template>
          </el-table-column>
          <el-table-column label="数量変更" prop="amountChange"></el-table-column>
          <el-table-column label="日時" prop="timestamp"></el-table-column>
        </el-table>
      </el-dialog>
    </div>
  </template>
  
  <script>
  import { mapState } from 'vuex';
  
  export default {
    data() {
      return {
        showAddStockDialog: false,
        showStockHistoryDialog: false,
        stockHistory: [], 
      };
    },
    computed: {
      ...mapState({
        goodsMenu: state => state.tab.goodsMenu
      }),
    },
    methods: {
      checkStockAndShowDialog(item) {
        if (item.stock < 3) {
          this.showAddStockDialog = true;
        }
      },
      decreaseStock(item, amount) {
        if (item.stock >= amount) {
          item.stock -= amount;
          this.recordStockChange(item, -amount);
          this.checkStockAndShowDialog(item);
        }
        this.$store.commit('updateGoodsMenu', [...this.goodsMenu]);
      },
      increaseStock(item, amount) {
        item.stock += amount;
        this.recordStockChange(item, amount);
        // Vuex ストアの goodsMenu を更新するために mutation をコミット
        this.$store.commit('updateGoodsMenu', [...this.goodsMenu]);
      },
      showStockHistory() {
        this.showStockHistoryDialog = true;
      },
      recordStockChange(item, amount) {
        const change = {
          name: item.name,
          change: `${amount > 0 ? '増加' : '減少'}`,
          amountChange: amount,
          timestamp: new Date().toLocaleString(),
        };
        this.stockHistory.unshift(change); // 履歴の先頭に追加
      },
    }
  };
  </script>
  