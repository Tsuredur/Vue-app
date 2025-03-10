<template>
  <div class="system-info">
    <!-- 左边的内容 -->
    <div class="left-content">

  <iframe  class="frame" width="1000px" height="1100px" src="https://forms.office.com/r/FMu60ZCaGW?embed=true" frameborder="0" marginwidth="0" marginheight="0" style="border: none; max-width:100%; max-height:100vh" allowfullscreen webkitallowfullscreen mozallowfullscreen msallowfullscreen> </iframe>

    </div>

    <!-- 右边的el-table -->
    <div class="right-content">
      <el-table :data="infoData" style="width: 100%" border>
        <el-table-column label="操作説明">
          <el-table-column prop="key2" label="項目"></el-table-column>
          <el-table-column prop="value2" label="詳細"></el-table-column>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      infoData: [
{ key2: 'ホーム', value2: 'ホームページでは、Echartsを用いた売上管理ができている。図表の線や凡例などをクリックすると図表の変化が行われる' },
{ key2: 'メニュー管理', value2: 'メニュー管理ページでは、料理を追加、編集、削除できる。新しい商品の追加や商品の編集・削除などの操作があった場合、在庫管理ページに変化もある' },
{ key2: 'スタッフ管理', value2: 'スタッフ管理ページでは、スタッフの個人データの編集や削除、スタッフの検索ができる' },
{ key2: '在庫管理', value2: '在庫管理ページでは、すべての商品の在庫情報を確認し、在庫を増減させることができる。メニュー管理でデータを変更すると、在庫管理の在庫も同期される。なお、在庫数が３以下の場合、在庫不足の通知ダイアログが出てくる。右上のボタンは、在庫商品の変化を記録している' },
{ key2: '左上のボタン', value2: 'サイドバーの開閉の操作' },
{ key2: 'パンくずリスト', value2: '画面の遷移が記録され、クリックすると指定のページに遷移できる。後ろの✗を押せばページが閉じられる。下のパンくずリストと上のナビゲーションバーが連動している' },
{ key2: 'プロフィール画像', value2: 'ログアウト' },

],
    };
  },
};
</script>

<style scoped>
.system-info {
  display: flex;
  height: 700px;
}

.left-content {
  flex: 1; 
  padding: 20px; 
}

.right-content {
  width: 50%;
}

.el-table th,
.el-table td {
  background-color: #f5f5f5; 
}

.el-table th {
  color: #333; 
  font-weight: bold; 

.el-table-border {
  border: 1px solid #ddd;
}
</style>



