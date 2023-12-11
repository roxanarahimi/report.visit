<template>
  <div class="about ">
    <div  class="d-flex justify-content-around my-5 mx-auto">
      <h3>{{ info?.name }}</h3>
      <h3>{{  info?.shop_name }}</h3>
      <h3>{{ info?.date }}</h3>
    </div>

    <div class="tables_container">
    <div style="min-width: 600px;">
      <div class="t-container container row mx-auto mb-3" >
      <div class="col-4 px-0">
        <table v-if="eliteSoup.length" class="table table-bordered border">
          <tbody>
          <tr><th rowspan="100" class="title" ><p class="p-0 m-0" >سوپ الیت</p></th><th>عنوان</th><th>شلف</th><th>ف/ت</th></tr>
          <tr v-for="item in eliteSoup" :class="{'bg-gray': item.is_main == false}">
            <td>{{ item.name }}</td><td>{{ item.shelf }}</td><td>{{ item.FT }}</td>
          </tr>
          </tbody>
        </table>
        <table v-if="eliteNoodle.length" class="table table-bordered border">
          <tbody>
          <tr><th rowspan="100" class="title" ><p class="p-0 m-0" >نودالیت الیت</p></th><th>عنوان</th><th>شلف</th><th>ف/ت</th></tr>
          <tr v-for="item in eliteNoodle"  :class="{'bg-gray': item.is_main == false}">
            <td>{{ item.name }}</td><td>{{ item.shelf }}</td><td>{{ item.FT }}</td>
          </tr>
          </tbody>
        </table>
        <table v-if="eliteOsareh.length" class="table table-bordered border">
          <tbody>
          <tr><th rowspan="100" class="title" ><p class="p-0 m-0" >عصاره الیت</p></th><th>عنوان</th><th>شلف</th><th>ف/ت</th></tr>
          <tr v-for="item in eliteOsareh"  :class="{'bg-gray': item.is_main == false}">
            <td>{{ item.name }}</td><td>{{ item.shelf }}</td><td>{{ item.FT }}</td>
          </tr>
          </tbody>
        </table>
        <table v-if="eliteAsh.length" class="table table-bordered border">
          <tbody>
          <tr><th rowspan="100" class="title" ><p class="p-0 m-0" >آش الیت</p></th><th>عنوان</th><th>شلف</th><th>ف/ت</th></tr>
          <tr v-for="item in eliteAsh"  :class="{'bg-gray': item.is_main == false}">
            <td>{{ item.name }}</td><td>{{ item.shelf }}</td><td>{{ item.FT }}</td>
          </tr>
          </tbody>
        </table>
        <table v-if="eliteParak.length" class="table table-bordered border">
          <tbody>
          <tr><th rowspan="100" class="title" ><p class="p-0 m-0" >پرک الیت</p></th><th>عنوان</th><th>شلف</th><th>ف/ت</th></tr>
          <tr v-for="item in eliteParak"  :class="{'bg-gray': item.is_main == false}">
            <td>{{ item.name }}</td><td>{{ item.shelf }}</td><td>{{ item.FT }}</td>
          </tr>
          </tbody>
        </table>


      </div>
      <div class="col-4 px-0">

        <table v-if="lazizSoup.length" class="table table-bordered border">
          <tbody>
          <tr><th rowspan="100" class="title" ><p class="p-0 m-0" >سوپ آماده لذیذ</p></th><th>عنوان</th><th>شلف</th><th>ف/ت</th></tr>
          <tr v-for="item in lazizSoup"  :class="{'bg-gray': item.is_main == false}">
            <td>{{ item.name }}</td><td>{{ item.shelf }}</td><td>{{ item.FT }}</td>
          </tr>
          </tbody>
        </table>

        <table v-if="lazizOsareh.length" class="table table-bordered border">
          <tbody>
          <tr><th rowspan="100" class="title" ><p class="p-0 m-0" >عصاره آماده لذیذ</p></th><th>عنوان</th><th>شلف</th><th>ف/ت</th></tr>
          <tr v-for="item in lazizOsareh"  :class="{'bg-gray': item.is_main == false}">
            <td>{{ item.name }}</td><td>{{ item.shelf }}</td><td>{{ item.FT }}</td>
          </tr>
          </tbody>
        </table>

        <table v-if="lazizNoodle.length" class="table table-bordered border">
          <tbody>
          <tr><th rowspan="100" class="title" ><p class="p-0 m-0" >نودل آماده لذیذ</p></th><th>عنوان</th><th>شلف</th><th>ف/ت</th></tr>
          <tr v-for="item in lazizNoodle"  :class="{'bg-gray': item.is_main == false}">
            <td>{{ item.name }}</td><td>{{ item.shelf }}</td><td>{{ item.FT }}</td>
          </tr>
          </tbody>
        </table>

        <table v-if="nodiland.length" class="table table-bordered border">
          <tbody>
          <tr><th rowspan="100" class="title" ><p class="p-0 m-0" >عصاره سوپ نودل نودیلند</p></th><th>عنوان</th><th>شلف</th><th>ف/ت</th></tr>
          <tr v-for="item in nodiland"  :class="{'bg-gray': item.is_main == false}">
            <td>{{ item.type }} {{item.name }}</td><td>{{ item.shelf }}</td><td>{{ item.FT }}</td>
          </tr>
          </tbody>
        </table>

        <table v-if="eliteAdvieh.length" class="table table-bordered border">
          <tbody>
          <tr><th rowspan="100" class="title" ><p class="p-0 m-0" >ادویه طعم دهنده الیت</p></th><th>عنوان</th><th>شلف</th><th>ف/ت</th></tr>
          <tr v-for="item in eliteAdvieh"  :class="{'bg-gray': item.is_main == false}">
            <td> {{item.name }}</td><td>{{ item.shelf }}</td><td>{{ item.FT }}</td>
          </tr>
          </tbody>
        </table>

        <table v-if="elitePasta.length" class="table table-bordered border">
          <tbody>
          <tr><th rowspan="100" class="title" ><p class="p-0 m-0" >پاستا الیت</p></th><th>عنوان</th><th>شلف</th><th>ف/ت</th></tr>
          <tr v-for="item in elitePasta"  :class="{'bg-gray': item.is_main == false}">
            <td>{{item.name }}</td><td>{{ item.shelf }}</td><td>{{ item.FT }}</td>
          </tr>
          </tbody>
        </table>

        <table v-if="elitePiazdaq.length" class="table table-bordered border">
          <tbody>
          <tr><th rowspan="100" class="title" ><p class="p-0 m-0" >پیاز داغ <br> الیت</p></th><th>عنوان</th><th>شلف</th><th>ف/ت</th></tr>
          <tr v-for="item in elitePiazdaq" :class="{'bg-gray': item.is_main == false}">
            <td>{{item.name }}</td><td>{{ item.shelf }}</td><td>{{ item.FT }}</td>
          </tr>
          </tbody>
        </table>

      </div>
      <div class="col-4 px-0">

        <table v-if="copaCofee.length" class="table table-bordered border">
          <tbody>
          <tr><th rowspan="100" class="title" ><p class="p-0 m-0" >قهوه کوپا</p></th><th>عنوان</th><th>شلف</th><th>ف/ت</th></tr>
          <tr v-for="item in copaCofee" :class="{'bg-gray': item.is_main == false}">
            <td>{{item.name }}</td><td>{{ item.shelf }}</td><td>{{ item.FT }}</td>
          </tr>
          </tbody>
        </table>
        <table v-if="fitoFunPouding.length" class="table table-bordered border">
          <tbody>
          <tr><th rowspan="100" class="title" ><p class="p-0 m-0" >پودینگ فیت و فان</p></th><th>عنوان</th><th>شلف</th><th>ف/ت</th></tr>
          <tr v-for="item in fitoFunPouding" :class="{'bg-gray': item.is_main == false}">
            <td>{{item.name }}</td><td>{{ item.shelf }}</td><td>{{ item.FT }}</td>
          </tr>
          </tbody>
        </table>
        <table v-if="copaPouding.length" class="table table-bordered border">
          <tbody>
          <tr><th rowspan="100" class="title" ><p class="p-0 m-0" >پودینگ کوپا</p></th><th>عنوان</th><th>شلف</th><th>ف/ت</th></tr>
          <tr v-for="item in copaPouding" :class="{'bg-gray': item.is_main == false}">
            <td>{{item.name }}</td><td>{{ item.shelf }}</td><td>{{ item.FT }}</td>
          </tr>
          </tbody>
        </table>
        <table v-if="copaJeleh.length" class="table table-bordered border">
          <tbody>
          <tr><th rowspan="100" class="title" ><p class="p-0 m-0" >ژله کوپا</p></th><th>عنوان</th><th>شلف</th><th>ف/ت</th></tr>
          <tr v-for="item in copaJeleh" :class="{'bg-gray': item.is_main == false}">
            <td>{{item.name }}</td><td>{{ item.shelf }}</td><td>{{ item.FT }}</td>
          </tr>
          </tbody>
        </table>
        <table v-if="copaQalatSobhane.length" class="table table-bordered border">
          <tbody>
          <tr><th rowspan="100" class="title" ><p class="p-0 m-0" >غلات صبحانه کوپا</p></th><th>عنوان</th><th>شلف</th><th>ف/ت</th></tr>
          <tr v-for="item in copaQalatSobhane" :class="{'bg-gray': item.is_main == false}">
            <td>{{item.name }}</td><td>{{ item.shelf }}</td><td>{{ item.FT }}</td>
          </tr>
          </tbody>
        </table>
        <table v-if="copaChocolateSobhane.length" class="table table-bordered border">
          <tbody>
          <tr><th rowspan="100" class="title" ><p class="p-0 m-0" >شکلات صبحانه کوپا</p></th><th>عنوان</th><th>شلف</th><th>ف/ت</th></tr>
          <tr v-for="item in copaChocolateSobhane" :class="{'bg-gray': item.is_main == false}">
            <td>{{item.name }}</td><td>{{ item.shelf }}</td><td>{{ item.FT }}</td>
          </tr>
          </tbody>
        </table>


      </div>
    </div>

      <div class="t-container container row mx-auto justify-content-center mb-5" >
        <div class="col-6 px-0">
          <table v-if="kantiWafer.length" class="table table-bordered border">
            <tbody>
            <tr><th rowspan="100" class="title" ><p class="p-0 m-0" >ویفر کانتی</p></th><th>عنوان</th><th>شلف</th><th>ف/ت</th></tr>
            <tr v-for="item in kantiWafer" :class="{'bg-gray': item.is_main == false}">
              <td>{{ item.name }}</td><td>{{ item.shelf }}</td><td>{{ item.FT }}</td>
            </tr>
            </tbody>
          </table>
          <table v-if="copaWafer.length" class="table table-bordered border">
            <tbody>
            <tr><th rowspan="100" class="title" ><p class="p-0 m-0" >ویفر شکلاتی کوپا</p></th><th>عنوان</th><th>شلف</th><th>ف/ت</th></tr>
            <tr v-for="item in copaWafer" :class="{'bg-gray': item.is_main == false}">
              <td>{{ item.name }}</td><td>{{ item.shelf }}</td><td>{{ item.FT }}</td>
            </tr>
            </tbody>
          </table>

          <table v-if="tombiWafer.length" class="table table-bordered border">
            <tbody>
            <tr><th rowspan="100" class="title" ><p class="p-0 m-0" >ویفر تامبی</p></th><th>عنوان</th><th>شلف</th><th>ف/ت</th></tr>
            <tr v-for="item in tombiWafer" :class="{'bg-gray': item.is_main == false}">
              <td>{{ item.name }}</td><td>{{ item.shelf }}</td><td>{{ item.FT }}</td>
            </tr>
            </tbody>
          </table>
          <table v-if="copaDerajeh.length" class="table table-bordered border">
            <tbody>
            <tr><th rowspan="100" class="title" ><p class="p-0 m-0" >دراژه</p></th><th>عنوان</th><th>شلف</th><th>ف/ت</th></tr>
            <tr v-for="item in copaDerajeh" :class="{'bg-gray': item.is_main == false}">
              <td>{{ item.name }}</td><td>{{ item.shelf }}</td><td>{{ item.FT }}</td>
            </tr>
            </tbody>
          </table>
          <table v-if="xfastAdams.length" class="table table-bordered border">
            <tbody>
            <tr><th rowspan="100" class="title" ><p class="p-0 m-0" >آدامس</p></th><th>عنوان</th><th>شلف</th><th>ف/ت</th></tr>
            <tr v-for="item in xfastAdams" :class="{'bg-gray': item.is_main == false}">
              <td>{{ item.name }}</td><td>{{ item.shelf }}</td><td>{{ item.FT }}</td>
            </tr>
            </tbody>
          </table>

          <table v-if="copaPaziraeeGandom.length" class="table table-bordered border">
            <tbody>
            <tr><th rowspan="100" class="title" ><p class="p-0 m-0" >کوپا گندم</p></th><th>عنوان</th><th>شلف</th><th>ف/ت</th></tr>
            <tr v-for="item in copaPaziraeeGandom"  :class="{'bg-gray': item.is_main == false}">
              <td>{{ item.name }}</td><td>{{ item.shelf }}</td><td>{{ item.FT }}</td>
            </tr>
            </tbody>
          </table>


        </div>
        <div class="col-6 px-0">


          <table v-if="ocopa.length" class="table table-bordered border">
            <tbody>
            <tr><th rowspan="100" class="title" ><p class="p-0 m-0" >او کوپا</p></th><th>عنوان</th><th>شلف</th><th>ف/ت</th></tr>
            <tr v-for="item in ocopa"  :class="{'bg-gray': item.is_main == false}">
              <td>{{ item.name }}</td><td>{{ item.shelf }}</td><td>{{ item.FT }}</td>
            </tr>
            </tbody>
          </table>

          <table v-if="copaPaziraeeJo.length" class="table table-bordered border">
            <tbody>
            <tr><th rowspan="100" class="title" ><p class="p-0 m-0" >کوپا جو</p></th><th>عنوان</th><th>شلف</th><th>ف/ت</th></tr>
            <tr v-for="item in copaPaziraeeJo" :class="{'bg-gray': item.is_main == false}">
              <td>{{ item.name }}</td><td>{{ item.shelf }}</td><td>{{ item.FT }}</td>
            </tr>
            </tbody>
          </table>


          <table v-if="copaPaziraee.length" class="table table-bordered border">
            <tbody>
            <tr><th rowspan="100" class="title" ><p class="p-0 m-0" >چند غله</p></th><th>عنوان</th><th>شلف</th><th>ف/ت</th></tr>
            <tr v-for="item in copaPaziraee" :class="{'bg-gray': item.is_main == false}">
              <td>{{ item.name }}</td><td>{{ item.shelf }}</td><td>{{ item.FT }}</td>
            </tr>
            </tbody>
          </table>

          <table v-if="clubWafer.length" class="table table-bordered border">
            <tbody>
            <tr><th rowspan="100" class="title" ><p class="p-0 m-0" >ویفر کلاب</p></th><th>عنوان</th><th>شلف</th><th>ف/ت</th></tr>
            <tr v-for="item in clubWafer" :class="{'bg-gray': item.is_main == false}">
              <td>{{ item.name }}</td><td>{{ item.shelf }}</td><td>{{ item.FT }}</td>
            </tr>
            </tbody>
          </table>
          <table v-if="copaBiscuit.length" class="table table-bordered border">
            <tbody>
            <tr><th rowspan="100" class="title" ><p class="p-0 m-0" >بیسکوئیت مستطیلی کوپا</p></th><th>عنوان</th><th>شلف</th><th>ف/ت</th></tr>
            <tr v-for="item in copaBiscuit" :class="{'bg-gray': item.is_main == false}">
              <td>{{ item.name }}</td><td>{{ item.shelf }}</td><td>{{ item.FT }}</td>
            </tr>
            </tbody>
          </table>



          <div class="p-3">
            <table v-if="form.length" class="table table-bordered border">
              <tbody>
              <tr>
                <td>جمع امتیاز عدم</td><td class="points_td">{{ points.total_absence }}</td>
              </tr>
              <tr>
                <td>جمع امتیاز چیدمان</td><td class="points_td">{{ points.total_points }}</td>
              </tr>
              <tr>
                <td>نودالیت الیت 60% فضا 10 امتیاز</td><td class="points_td"><true-false :value="points.noodelite_60"/></td>
              </tr>
              <tr>
                <td>نودالیت آماده لذیذ و نودیلند 20% فضا 5 امتیاز</td><td class="points_td"><true-false :value="points.noodle_amadeh_noodiland_20"/></td>
              </tr>
              <tr>
                <td>عصاره الیت 80% فضا 10 امتیاز</td><td class="points_td"><true-false :value="points.extract_elite_80"/></td>
              </tr>
              <tr>
                <td>عصاره آماده لذیذ و نودیلند 10% فضا 5 امتیاز</td><td class="points_td"><true-false :value="points.extract_amadeh_noodiland_10"/></td>
              </tr>
              <tr>
                <td>سوپ الیت 50% فضا 10 امتیاز</td><td class="points_td"><true-false :value="points.soup_elite_50"/></td>
              </tr>
              <tr>
                <td>سوپ آماده لذیذ و نودیلند 20% فضا 5 امتیاز</td><td class="points_td"><true-false :value="points.soup_amadeh_noodiland_20_5"/></td>
              </tr>
              <tr>
                <td>ادویه 25% فضا 3 امتیاز</td><td class="points_td"><true-false :value="points.spice_25"/></td>
              </tr>
              <tr>
                <td>ویفر شکلاتی و کانتی 30% فضا 10 امتیاز</td><td class="points_td"><true-false :value="points.chocolate_wafer_kanti_30"/></td>
              </tr>
              <tr>
                <td>تامبی 15% فضا 3 امتیاز</td><td class="points_td"><true-false :value="points.tombi_15"/></td>
              </tr>
              <tr>
                <td>سلکت 15% فضا 2 امتیاز</td><td class="points_td"><true-false :value="points.select_15"/></td>
              </tr>
              <tr>
                <td>شکلات صبحانه 30% فضا 10 امتیاز</td><td class="points_td"><true-false :value="points.breakfast_chocolate_30"/></td>
              </tr>
              <tr>
                <td>قهوه ها کیسه ای و باکسی و شیشه ای  40% فضا 7 امتیاز</td><td class="points_td"><true-false :value="points.glass_box_coffee_40"/></td>
              </tr>
              <tr>
                <td>بیسکوییت او کوپا 30% فضا 3 امتیاز</td><td class="points_td"><true-false :value="points.biscuit_ocopa_30"/></td>
              </tr>
              <tr>
                <td>بیسکوییت های سبوس ساده و کرمدار 15% فضا 2 امتیاز</td><td class="points_td"><true-false :value="points.creamy_bran_biscuit_15"/></td>
              </tr>
              <tr>
                <td>بیسکوییت مستطیلی و تکه شکلات 5% فضا 1 امتیاز</td><td class="points_td"><true-false :value="points.rectangular_biscuit_piece_chocolate_5"/></td>
              </tr>
              <tr>
                <td>پودینگ کوپا و فیت و فان 95% فضا 2 امتیاز</td><td class="points_td"><true-false :value="points.copa_fit_and_fun_pudding_95"/></td>
              </tr>
              <tr>
                <td>ژله 30% فضا 3 امتیاز</td><td class="points_td"><true-false :value="points.jelly_30"/></td>
              </tr>
              <tr>
                <td>غلات صبحانه 30% فضا 3 امتیاز</td><td class="points_td"><true-false :value="points.breakfast_cereal_30"/></td>
              </tr>
              <tr>
                <td>کوپا جو و کوپا گندم 50% از کل فضا بیسکوییت بزرگ 2 امتیاز</td><td class="points_td"><true-false :value="points.copa_barley_and_wheat_50"/></td>
              </tr>
              <tr>
                <td>چند غله 50% از کل فضا 2 امتیاز</td><td class="points_td"><true-false :value="points.multigrain_50"/></td>
              </tr>
              <tr>
                <td>آدامس 30% از کل فضا 2 امتیاز</td><td class="points_td"><true-false :value="points.chewing_gum_50"/></td>
              </tr>
              </tbody>
            </table>

          </div>
        </div>


      </div>



    </div>
    </div>
  </div>
</template>
<script>

import {onMounted, ref} from "vue";
import {useRoute, useRouter} from "vue-router/dist/vue-router";
import trueFalse from "@/components/TrueFalse";


export default {
  components: {trueFalse, },
  setup() {
    const pdfOptions = {
      margin: 2,
      image: {
        type: 'jpeg',
        quality: 1,
      },
      html2canvas: { scale: 1 },
      jsPDF: {
        unit: 'mm',
        format: 'a4',
        orientation: 'p',
      },
    };
     const exportFilename= 'my-custom-file.pdf';


    const route = useRoute()
    const router = useRouter()
    const query = ref({})

    const types = [
      {title: 'سوپ'},
      {title: 'نودل'},
      {title: 'عصاره'},
      {title: 'آش'},
      {title: 'قهوه'},
      {title: 'ادویه'},
      {title: 'پاستا'},
      {title: 'پیاز داغ'},
      {title: 'ژله'},
      {title: 'پودینگ'},
      {title: 'غلات صبحانه'},
      {title: 'شکلات صبحانه'},
      {title: 'پرک'},
      {title: 'ویفر'},
      {title: 'بیسکوئیت پذیرایی'},
      {title: 'بیسکوئیت'},
      {title: 'دراژه'},
      {title: 'آدامس'},

    ];
    const brands = [
      {type: 'سوپ', brands: ['الیت', 'آماده لذیذ', 'نودیلند', 'مهنام', 'هاتی کارا', 'زر', 'سبزان', 'برتر',]},
      {type: 'نودل', brands: ['الیت', 'آماده لذیذ', 'نودیلند', 'مهنام', 'هاتی کارا', 'گلین', 'شف هو', 'هفده',]},
      {type: 'عصاره', brands: ['الیت', 'آماده لذیذ', 'نودیلند', 'مهنام', 'هاتی کارا', 'زر', 'ایپک',]},
      {type: 'آش', brands: ['الیت']},
      {type: 'قهوه', brands: ['کوپا',]},
      {type: 'ادویه', brands: ['الیت']},
      {type: 'پاستا', brands: ['الیت',]},
      {type: 'پیاز داغ', brands: ['الیت',]},
      {type: 'پرک', brands: ['الیت',]},
      {type: 'پودینگ', brands: ['کوپا', 'فیت و فان',]},
      {type: 'غلات صبحانه', brands: ['کوپا',]},
      {type: 'شکلات صبحانه', brands: ['کوپا',]},
      {type: 'ویفر', brands: ['کانتی', 'کوپا', 'تامبی', 'زر', 'چیچک', 'باراکا', 'بایکیت', 'شونیز', 'کلاب']},
      {type: 'بیسکوئیت', brands: ['کوپا', 'او کوپا', 'ستاک', 'جمانه', 'درنا', 'گرجی', 'فرخنده', 'سلامت',]},
      {type: 'بیسکوئیت پذیرایی', brands: ['کوپا', 'کوپا جو', 'کوپا گندم',]},
      {type: 'ژله', brands: ['کوپا',]},
      {type: 'دراژه', brands: ['کوپا',]},
      {type: 'آدامس', brands: ['اکس فست']},
    ]

    const form = ref([]);
    const points = ref([]);

    const eliteSoup = ref([]);
    const eliteNoodle = ref([]);
    const eliteOsareh = ref([]);
    const eliteAsh = ref([]);
    const eliteParak = ref([]);
    const eliteAdvieh = ref([]);
    const elitePasta = ref([]);
    const elitePiazdaq = ref([]);

    const lazizSoup = ref([]);
    const lazizOsareh = ref([]);
    const lazizNoodle = ref([]);

    const nodiland = ref([]);

    const copaCofee = ref([]);
    const copaQalatSobhane = ref([]);
    const copaChocolateSobhane = ref([]);
    const copaJeleh = ref([]);
    const copaPouding = ref([]);
    const copaDerajeh = ref([]);

    const copaPaziraee = ref([]);
    const copaPaziraeeGandom = ref([]);
    const copaPaziraeeJo = ref([]);


    const xfastAdams = ref([]);
    const fitoFunPouding = ref([]);


    const kantiWafer = ref([]);
    const copaWafer = ref([]);
    const tombiWafer = ref([]);
    const ocopa = ref([]);
    const clubWafer = ref([]);
    const copaBiscuit = ref([]);


    const getPoints = () => {
      axios.get('https://api.amadehlaziz.com:446/form/'+route.params.id+'?api_key=mJF2qVIOq22K1LvNBp9gDiOcK8e2p')
          .then((response) => {
            points.value = response.data.points;

          }).catch();
    }
    const getForm = () => {
      axios.get('https://api.amadehlaziz.com:446/panel/products/'+JSON.parse(localStorage.getItem('report_visit_info')).grade+'?api_key=w2fqxjKzdlx345NjQ7D99xz5cPp')
          .then((response) => {
            form.value = response.data

            console.log('form', form.value)

            form.value.forEach((element) => {
              if (element.type === 'سوپ' && element.brand === 'الیت' && element.grade == info.value.grade) {
                eliteSoup.value.push(element);
              }
              if (element.type === 'نودل' && element.brand === 'الیت' && element.grade == info.value.grade) {
                eliteNoodle.value.push(element);
              }
              if (element.type === 'عصاره' && element.brand === 'الیت' && element.grade == info.value.grade) {
                eliteOsareh.value.push(element);
              }
              if (element.type === 'آش' && element.brand === 'الیت' && element.grade == info.value.grade) {
                eliteAsh.value.push(element);
              }
              if (element.type === 'پرک' && element.brand === 'الیت' && element.grade == info.value.grade) {
                eliteParak.value.push(element);
              }
              if (element.type === 'ادویه' && element.brand === 'الیت' && element.grade == info.value.grade) {
                eliteAdvieh.value.push(element);
              }
              if (element.type === 'پاستا' && element.brand === 'الیت' && element.grade == info.value.grade) {
                elitePasta.value.push(element);
              }
              if (element.type === 'پیاز داغ' && element.brand === 'الیت' && element.grade == info.value.grade) {
                elitePiazdaq.value.push(element);
              }


              if (element.type === 'سوپ' && element.brand === 'آماده لذیذ' && element.grade == info.value.grade) {
                lazizSoup.value.push(element);
              }
              if (element.type === 'عصاره' && element.brand === 'آماده لذیذ' && element.grade == info.value.grade) {
                lazizOsareh.value.push(element);
              }
              if (element.type === 'نودل' && element.brand === 'آماده لذیذ' && element.grade == info.value.grade) {
                lazizNoodle.value.push(element);
              }

              if ((element.type === 'عصاره' || element.type === 'سوپ' || element.type === 'نودل') && element.brand === 'نودیلند' && element.grade == info.value.grade) {
                nodiland.value.push(element);
              }

              if (element.type === 'قهوه' && element.brand === 'کوپا' && element.grade == info.value.grade) {
                copaCofee.value.push(element);
              }
              if (element.type === 'ژله' && element.brand === 'کوپا' && element.grade == info.value.grade) {
                copaJeleh.value.push(element);
              }
              if (element.type === 'پودینگ' && element.brand === 'کوپا' && element.grade == info.value.grade) {
                copaPouding.value.push(element);
              }
              if (element.type === 'دراژه' && element.brand === 'کوپا' && element.grade == info.value.grade) {
                copaDerajeh.value.push(element);
              }
              if (element.type === 'غلات صبحانه' && element.brand === 'کوپا' && element.grade == info.value.grade) {
                copaQalatSobhane.value.push(element);
              }
              if (element.type === 'بیسکوئیت پذیرایی' && element.brand === 'کوپا' && element.grade == info.value.grade) {
                copaPaziraee.value.push(element);
              }
              if (element.type === 'بیسکوئیت پذیرایی' && element.brand === 'کوپا گندم' && element.grade == info.value.grade) {
                copaPaziraeeGandom.value.push(element);
              }
              if (element.type === 'بیسکوئیت پذیرایی' && element.brand === 'کوپا جو' && element.grade == info.value.grade) {
                copaPaziraeeJo.value.push(element);
              }

              if (element.type === 'شکلات صبحانه' && element.brand === 'کوپا' && element.grade == info.value.grade) {
                copaChocolateSobhane.value.push(element);
              }

              if (element.type === 'آدامس' && element.brand === 'اکس فست' && element.grade == info.value.grade) {
                xfastAdams.value.push(element);
              }

              if (element.type === 'ویفر' && element.brand === 'کوپا' && element.grade == info.value.grade) {
                copaWafer.value.push(element);
              }


              if (element.type === 'پودینگ' && element.brand === 'فیت و فان' && element.grade == info.value.grade) {
                fitoFunPouding.value.push(element);
              }


              if (element.type === 'ویفر' && element.brand === 'کانتی' && element.grade == info.value.grade) {
                kantiWafer.value.push(element);
              }


              if (element.type === 'ویفر' && element.brand === 'تامبی' && element.grade == info.value.grade) {
                tombiWafer.value.push(element);
              }

              if (element.type === 'ویفر' && element.brand === 'کلاب' && element.grade == info.value.grade) {
                clubWafer.value.push(element);
              }


              if (element.type === 'بیسکوئیت' && element.brand === 'او کوپا' && element.grade == info.value.grade) {
                ocopa.value.push(element);
              }


              if (element.type === 'بیسکوئیت' && element.brand === 'کوپا' && element.grade == info.value.grade) {
                copaBiscuit.value.push(element);
              }


            })
            console.log('aaa', eliteNoodle.value)
          }).catch((error) => {console.error(error)})

      axios.get('https://api.amadehlaziz.com:446/panel/form_products/' + route.params.id + '?api_key=w2fqxjKzdlx345NjQ7D99xz5cPp')
          .then((response) => {
            form.value = response.data

            console.log('form', form.value)

            form.value.forEach((element) => {
              if (element.type === 'سوپ' && element.brand === 'الیت' && element.grade == info.value.grade) {
                let x = eliteSoup.value.filter((item)=>{return item.id != element.product_id });
                eliteSoup.value = x;
                eliteSoup.value.push(element);
              }
              if (element.type === 'نودل' && element.brand === 'الیت' && element.grade == info.value.grade) {
                let x = eliteNoodle.value.filter((item)=>{return item.id != element.product_id });
                eliteNoodle.value = x;
                eliteNoodle.value.push(element);
              }
              if (element.type === 'عصاره' && element.brand === 'الیت' && element.grade == info.value.grade) {
                let x = eliteOsareh.value.filter((item)=>{return item.id != element.product_id });
                eliteOsareh.value = x;
                eliteOsareh.value.push(element);
              }
              if (element.type === 'آش' && element.brand === 'الیت' && element.grade == info.value.grade) {
                let x = eliteAsh.value.filter((item)=>{return item.id != element.product_id });
                eliteAsh.value = x;
                eliteAsh.value.push(element);
              }
              if (element.type === 'پرک' && element.brand === 'الیت' && element.grade == info.value.grade) {
                let x = eliteParak.value.filter((item)=>{return item.id != element.product_id });
                eliteParak.value = x;
                eliteParak.value.push(element);
              }
              if (element.type === 'ادویه' && element.brand === 'الیت' && element.grade == info.value.grade) {
                let x = eliteAdvieh.value.filter((item)=>{return item.id != element.product_id });
                eliteAdvieh.value = x;
                eliteAdvieh.value.push(element);
              }
              if (element.type === 'پاستا' && element.brand === 'الیت' && element.grade == info.value.grade) {
                let x = elitePasta.value.filter((item)=>{return item.id != element.product_id });
                elitePasta.value = x;
                elitePasta.value.push(element);
              }
              if (element.type === 'پیاز داغ' && element.brand === 'الیت' && element.grade == info.value.grade) {
                let x = elitePiazdaq.value.filter((item)=>{return item.id != element.product_id });
                elitePiazdaq.value = x;
                elitePiazdaq.value.push(element);
              }


              if (element.type === 'سوپ' && element.brand === 'آماده لذیذ' && element.grade == info.value.grade) {
                let x = lazizSoup.value.filter((item)=>{return item.id != element.product_id });
                lazizSoup.value = x;
                lazizSoup.value.push(element);
              }
              if (element.type === 'عصاره' && element.brand === 'آماده لذیذ' && element.grade == info.value.grade) {
                let x = lazizOsareh.value.filter((item)=>{return item.id != element.product_id });
                lazizOsareh.value = x;
                lazizOsareh.value.push(element);
              }
              if (element.type === 'نودل' && element.brand === 'آماده لذیذ' && element.grade == info.value.grade) {
                let x = lazizNoodle.value.filter((item)=>{return item.id != element.product_id });
                lazizNoodle.value = x;
                lazizNoodle.value.push(element);
              }

              if ((element.type === 'عصاره' || element.type === 'سوپ' || element.type === 'نودل') && element.brand === 'نودیلند' && element.grade == info.value.grade) {
                let x = nodiland.value.filter((item)=>{return item.id != element.product_id });
                nodiland.value = x;
                nodiland.value.push(element);
              }

              if (element.type === 'قهوه' && element.brand === 'کوپا' && element.grade == info.value.grade) {
                let x = copaCofee.value.filter((item)=>{return item.id != element.product_id });
                copaCofee.value = x;
                copaCofee.value.push(element);
              }
              if (element.type === 'ژله' && element.brand === 'کوپا' && element.grade == info.value.grade) {
                let x = copaJeleh.value.filter((item)=>{return item.id != element.product_id });
                copaJeleh.value = x;
                copaJeleh.value.push(element);
              }
              if (element.type === 'پودینگ' && element.brand === 'کوپا' && element.grade == info.value.grade) {
                let x = copaPouding.value.filter((item)=>{return item.id != element.product_id });
                copaPouding.value = x;
                copaPouding.value.push(element);
              }
              if (element.type === 'دراژه' && element.brand === 'کوپا' && element.grade == info.value.grade) {
                let x = copaDerajeh.value.filter((item)=>{return item.id != element.product_id });
                copaDerajeh.value = x;
                copaDerajeh.value.push(element);
              }
              if (element.type === 'غلات صبحانه' && element.brand === 'کوپا' && element.grade == info.value.grade) {
                let x = copaQalatSobhane.value.filter((item)=>{return item.id != element.product_id });
                copaQalatSobhane.value = x;
                copaQalatSobhane.value.push(element);
              }
              if (element.type === 'بیسکوئیت پذیرایی' && element.brand === 'کوپا' && element.grade == info.value.grade) {
                let x = copaPaziraee.value.filter((item)=>{return item.id != element.product_id });
                copaPaziraee.value = x;
                copaPaziraee.value.push(element);
              }
              if (element.type === 'بیسکوئیت پذیرایی' && element.brand === 'کوپا گندم' && element.grade == info.value.grade) {
                let x = copaPaziraeeGandom.value.filter((item)=>{return item.id != element.product_id });
                copaPaziraeeGandom.value = x;
                copaPaziraeeGandom.value.push(element);
              }
              if (element.type === 'بیسکوئیت پذیرایی' && element.brand === 'کوپا جو' && element.grade == info.value.grade) {
                let x = copaPaziraeeJo.value.filter((item)=>{return item.id != element.product_id });
                copaPaziraeeJo.value = x;
                copaPaziraeeJo.value.push(element);
              }

              if (element.type === 'شکلات صبحانه' && element.brand === 'کوپا' && element.grade == info.value.grade) {
                let x = copaChocolateSobhane.value.filter((item)=>{return item.id != element.product_id });
                copaChocolateSobhane.value = x;
                copaChocolateSobhane.value.push(element);
              }

              if (element.type === 'آدامس' && element.brand === 'اکس فست' && element.grade == info.value.grade) {
                let x = xfastAdams.value.filter((item)=>{return item.id != element.product_id });
                xfastAdams.value = x;
                xfastAdams.value.push(element);
              }

              if (element.type === 'ویفر' && element.brand === 'کوپا' && element.grade == info.value.grade) {
                let x = copaWafer.value.filter((item)=>{return item.id != element.product_id });
                copaWafer.value = x;
                copaWafer.value.push(element);
              }


              if (element.type === 'پودینگ' && element.brand === 'فیت و فان' && element.grade == info.value.grade) {
                let x = fitoFunPouding.value.filter((item)=>{return item.id != element.product_id });
                fitoFunPouding.value = x;
                fitoFunPouding.value.push(element);
              }


              if (element.type === 'ویفر' && element.brand === 'کانتی' && element.grade == info.value.grade) {
                let x = kantiWafer.value.filter((item)=>{return item.id != element.product_id });
                kantiWafer.value = x;
                kantiWafer.value.push(element);
              }


              if (element.type === 'ویفر' && element.brand === 'تامبی' && element.grade == info.value.grade) {
                let x = tombiWafer.value.filter((item)=>{return item.id != element.product_id });
                tombiWafer.value = x;
                tombiWafer.value.push(element);
              }

              if (element.type === 'ویفر' && element.brand === 'کلاب' && element.grade == info.value.grade) {
                let x = clubWafer.value.filter((item)=>{return item.id != element.product_id });
                clubWafer.value = x;
                clubWafer.value.push(element);
              }


              if (element.type === 'بیسکوئیت' && element.brand === 'او کوپا' && element.grade == info.value.grade) {
                let x = ocopa.value.filter((item)=>{return item.id != element.product_id });
                ocopa.value = x;
                ocopa.value.push(element);
              }


              if (element.type === 'بیسکوئیت' && element.brand === 'کوپا' && element.grade == info.value.grade) {
                let x = copaBiscuit.value.filter((item)=>{return item.id != element.product_id });
                copaBiscuit.value = x;
                copaBiscuit.value.push(element);
              }


            })
            console.log('aaa', eliteNoodle.value)
          }).catch((error) => {console.error(error)})
    }
    const info = ref([]);
    onMounted(async () => {
      await router.isReady();
      query.value = route.query;

      info.value = JSON.parse(localStorage.getItem('report_visit_info'));
      getForm();
      getPoints();
    })


    return {
      info, types, brands, getForm, form, route, router, query, points, getPoints,
      eliteSoup, eliteNoodle, eliteOsareh, eliteAsh, eliteParak, eliteAdvieh, elitePasta, elitePiazdaq,
      lazizSoup, lazizOsareh, lazizNoodle,
      nodiland,
      copaCofee, copaQalatSobhane, copaChocolateSobhane, copaJeleh, copaDerajeh, copaPouding, copaBiscuit,
      copaPaziraee, copaPaziraeeGandom, copaPaziraeeJo,
      kantiWafer, copaWafer, tombiWafer,

      xfastAdams,

      fitoFunPouding,
      ocopa,
      clubWafer,
      exportFilename, pdfOptions,
    }
  }
  ,
  mounted() {
    // this.$refs.vue3SimpleHtml2pdf.download();

  }
}
</script>

<style scoped>
th, td {
  width: 65px !important;
  padding-top: 0px !important;
  padding-bottom: 0px !important;
  vertical-align: middle !important;
  background-color: transparent !important;
}
th
 {
  width: 60px !important;
  padding: 0px !important;
  vertical-align: middle !important;
  background-color: transparent !important;
}

table {
  margin-bottom: 0 !important;
  font-size: 10px !important;
}
.t-container{
  max-width: 295mm;
}
.title{
  /*position: relative;*/
  padding: 0 !important;
}
p {
  text-align: center !important;
  transform: rotate(270deg);
  margin: 0 !important;
  /*position: absolute;*/

}

th {
  /*background-color: #e5e5e5 !important;*/
  /*color: white !important;*/
}

.table-bordered {
  border-color: #313131 !important;
}

.points_td {
  width: 5px !important;
  padding: 0px !important;
}

.bg-gray {
  background-color: #b7b7b7;
}
.tables_container{
  overflow-x: hidden;
}
@media(max-width: 650px){
  .tables_container{
    overflow-x: scroll;
  }
}

</style>