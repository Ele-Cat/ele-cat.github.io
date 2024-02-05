import { ref, onMounted } from "vue";
import { useFetch } from '@vueuse/core';

export default function () {
  let dogList = ref<string[]>([]);
  const isLoading = ref(false);

  // 方法
  async function getDog() {
    try {
      // 发请求
      isLoading.value = true;
      const { isFetching, error, data } = await useFetch("https://dog.ceo/api/breed/pembroke/images/random").get().json()
      isLoading.value = isFetching.value;
      // 维护数据
      dogList.value.push(data.value.message);
    } catch (error) {
      // 处理错误
      console.log(error.message);
    }
  }

  function clearDog() {
    dogList.value = [];
  }

  // 挂载钩子
  onMounted(() => {
    getDog();
  });

  //向外部暴露数据
  return { dogList, getDog, isLoading, clearDog };
}
