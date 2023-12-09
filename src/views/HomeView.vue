<template>
  <div class="home">
    <div class="container py-5">
      <h3 class="mb-5">گزارش فرم ها</h3>
      
      <div>
        <div class="row my-3 text-end">
          <div class="col-5">
            <label >نام ویزیتور</label>
            <select class="form-select" v-model="visitor">
              <option value="">همه</option>
              <option v-for="item in visitors" :key="item.id" :value="item.id">{{item.username}}</option>
            </select>
          </div>
<!--          <div class="col-3">-->
<!--            <label  >شهر</label>-->
<!--            <select class="form-select">-->
<!--              <option value="">همه</option>-->
<!--              <option v-for="item in cities" :key="item" :value="item">{{item}}</option>-->
<!--            </select>-->
<!--          </div>-->
<!--          <div class="col-3">-->
<!--            <label  >نام فروشگاه</label>-->
<!--            <select class="form-select">-->
<!--              <option value="">همه</option>-->
<!--              <option v-for="item in shops" :key="item.id" :value="item.id">{{item.username}}</option>-->
<!--            </select>-->
<!--          </div>-->
          <div class="col-4">
            <label  >تاریخ</label> <date-picker
               v-model="date"
              :format="options.format"
              :displayFormat="options.displayFormat"
              :editable="options.editable"
              :placeholder="options.placeholder"
              :altFormat="options.altFormat"
              :color="options.color"
              :autoSubmit="options.autoSubmit"></date-picker>
          </div>
          <div class="col-3 pt-4">
            <button @click="filter" class="btn btn-dark">جستوجو</button>
          </div>
        </div>
      </div>
      <div class="table-responsive" >
        <table v-if="forms.length" class="table  table-striped border">
          <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">ویزیتور</th>
            <th scope="col">شهر</th>
            <th scope="col">گرید فروشگاه</th>
            <th scope="col">فروشگاه</th>
            <th scope="col">تاریخ</th>
          </tr>
          </thead>
          <tbody>
          <tr v-for="(item,index) in forms" :key="index">
            <th scope="row">{{ index + 1 }}</th>
            <td><router-link :to="{path:'/form/'+item.form_id, query:{ grade: item.shop_grade  }}">{{ item.visitor_name }} </router-link></td>
            <td>{{ item.shop_city }}</td>
            <td>{{ item.shop_grade }}</td>
            <td>{{ item.shop_name }}</td>
            <td>{{  item.visit_date }}</td>
          </tr>
          </tbody>
        </table>
        <div v-else class=" d-flex justify-content-center mt-5">
          <div class="spinner-grow text-dark" role="status">
            <span class="visually-hidden">Loading...</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

import {onMounted, ref} from "vue";
import DatePicker from 'vue3-persian-datetime-picker'

export default {
  name: "HomeView",
  components: {
    DatePicker
  },
  setup() {


    const forms = ref([]);
    const getForms = () => {
      axios.get('https://api.amadehlaziz.com:446/form/all_forms_metadata?api_key=mJF2qVIOq22K1LvNBp9gDiOcK8e2p')
          .then((response) => {
            forms.value = response.data
            console.log('forms', forms.value)

          }).catch();
    }

    const cities = [
      "تهران",
      "کرمانشاه",
      "آذربایجان شرقی",
      "قزوین",
      "کهگیلویه و بویراحمد",
      "آذربایجان غربی",
      "مرکزی",
      "سمنان",
      "لرستان",
      "گیلان",
      "اردبیل",
      "خراسان رضوی",
      "البرز",
      "خراسان شمالی",
      "مازندران",
      "همدان",
      "گلستان",
      "کرمان",
      "اصفهان",
      "خراسان جنوبی",
      "زنجان",
      "قم",
      "یزد",
      "ایلام",
      "چهارمحال و بختیاری",
      "فارس",
      "کردستان",
      "بوشهر",
      "هرمزگان",
      "سیستان و بلوچستان",
      "خوزستان"
    ];
    const shops = ref([])
    const visitors = ref([])

    const shop = ref('')
    const date = ref('')
    const city = ref('')
    const visitor = ref('')
    const options = {
      format: 'YYYY-MM-DD',
      displayFormat: 'jYYYY-jMM-jDD',
      editable: false,
      inputClass: 'form-control my-custom-class-name',
      placeholder: 'تاریخ:',
      altFormat: 'YYYY-MM-DD',
      color: 'black',
      autoSubmit: false
    }

    const getVisitors = ()=>{

      axios.get('https://api.amadehlaziz.com:446/panel/users?api_key=w2fqxjKzdlx345NjQ7D99xz5cPp')
          .then((response)=>{
            visitors.value = response.data
          })
          .catch((error)=>{ console.log(error)});
    }
    const getShops = ()=>{
      axios.get('https://api.amadehlaziz.com:446/panel/shops?api_key=w2fqxjKzdlx345NjQ7D99xz5cPp&grade=')
          .then((response)=>{
            shops.value = response.data
          })
          .catch((error)=>{ console.log(error)});
    }

    const filter = ()=>{
      forms.value = [];
      getForms();
      setTimeout(()=>{
        if(visitor.value != ''){
          let x = forms.value.filter((item)=>{
            return item.visitor_id == visitor.value });
          forms.value = x;
        }
        if(date.value != ''){
          let y = forms.value.filter((item)=>{
            return item.visit_date == date.value });
          forms.value = y;
        }
      },1000)
    }
    onMounted(async ()=>{


      getForms();
      getVisitors();
      getShops();
    })
    return {
      forms, getForms, getShops, getVisitors, visitors, visitor, date,shop, cities, options,filter,
    }
  }
}
</script>
