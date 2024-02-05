<script lang="ts" setup name="Person">
import { ref, defineExpose } from "vue";
// 数据
let name = ref("张三");
let age = ref(18);
// 使用defineExpose将组件中的数据交给外部
defineExpose({ name, age });
</script>