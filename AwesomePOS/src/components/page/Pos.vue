<template>
  <div class="pos">
    <el-row >
      <el-col :span="7" class="pos-order" id="order-list">
        <el-tabs>
          <el-tab-pane label="点餐">
            <el-table :data="tableData" border style="width: 100%;margin-bottom: 10px">
              <el-table-column prop="goodsName" label="商品名称"></el-table-column>
              <el-table-column prop="count" label="数量" width="70"></el-table-column>
              <el-table-column prop="price" label="金额" width="70"></el-table-column>
              <el-table-column  label="操作" width="100" fixed="right">
                <template scope="scope">
                  <el-button type="text" size="small">删除</el-button>
                  <el-button type="text" size="small">增加</el-button>
                </template>
              </el-table-column>
            </el-table>
            <div>
              <el-button type="warning">挂单</el-button>
              <el-button type="danger">删除</el-button>
              <el-button type="success">结账</el-button>
            </div>
          </el-tab-pane>

          <el-tab-pane label="挂单">

          </el-tab-pane>

          <el-tab-pane label="外卖">

          </el-tab-pane>

        </el-tabs>
      </el-col>

      <el-col :span="17">
        <div>
          <div class="title">常用商品</div>

          <div class="often-goods-list">
            <ul>
              <li v-for="item in oftenGoods">
                <span v-text="item.goodsName"></span>
                <span class="o-price"><span v-text="item.price"></span>元</span>
              </li>
            </ul>
          </div>

          <div class="goods-type">
            <el-tabs>
              <el-tab-pane label="汉堡">
                <div>
                  <ul class="cookList">
                    <li >
                      <span class="foodImg"><img/></span>
                      <span class="food">汉堡</span>
                      <span class="foodPrice">8元</span>
                    </li>
                  </ul>
                </div>
              </el-tab-pane>
              <el-tab-pane label="小食">小食</el-tab-pane>
              <el-tab-pane label="饮料">饮料</el-tab-pane>
              <el-tab-pane label="套餐">套餐</el-tab-pane>
            </el-tabs>
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  export default {
    name: 'Pos',
    data(){
      return {
        tableData:[
          {
            goodsName:'汉堡',
            count:1,
            price:8
          },
          {
            goodsName:'汉堡',
            count:1,
            price:8
          },
          {
            goodsName:'汉堡',
            count:1,
            price:8
          }
        ],
      oftenGoods:[] ,
      }
    },
    mounted:function () {
      var orderHeight = document.body.clientHeight;
      console.log(orderHeight)
      document.getElementById('order-list').style.height=orderHeight+'px'
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .pos {

  }
  .pos-order {
    background-color: #f9fafc;
    border-right: 1px solid #C0CCDA;
  }

  .title {
    height: 20px;
    border-bottom: 1px solid #03dce6;
    background-color: #f9fafc;
    text-align: left;
    padding: 10px;
  }

  .often-goods-list ul li {
    list-style: none;
    float: left;
    border: 1px solid #E5E9F2;
    padding: 10px;
    background-color: #FFF;
    margin-left: 20px;
    margin-bottom: 20px;
  }

  .o-price {
    color: #58B7FF;
  }

  .goods-type {
    clear: both;
  }

  .goods-type ul li {
    list-style: none;
    width: 80px;
    border: 1px solid #E5E9F2;
    padding: 10px;
    background-color: #FFF;
    margin-left: 20px;
  }
</style>
