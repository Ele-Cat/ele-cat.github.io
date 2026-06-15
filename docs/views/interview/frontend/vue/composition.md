# Composition API vs Options API

## 一句话

Composition API 用 `ref/reactive/computed/watch` 等函数按 **逻辑关注点** 组织代码，取代 Options API 按 **类型**（data/methods/computed）划分的方式。

## Options API 的问题

```html
<script>
export default {
  data() { return { count: 0, todos: [] } },
  computed: { filteredTodos() { /* ... */ } },
  methods: { addTodo() { /* ... */ } },
  watch: { todos() { /* ... */ } }
}
</script>
```

一个功能的逻辑分散在 data/computed/methods/watch 四个选项里。功能多了需要上下跳跃。

## Composition API

```html
<script setup lang="ts">
const todos = ref<Todo[]>([])
const filter = ref<Filter>('all')

const filteredTodos = computed(() => { /* ... */ })
const activeCount = computed(() => { /* ... */ })

watch(todos, (v) => localStorage.setItem('key', JSON.stringify(v)), { deep: true })

function addTodo(text: string) { todos.value.push({ id: nextId++, text, completed: false }) }
function toggleTodo(id: number) { const t = todos.value.find(t => t.id === id); if (t) t.completed = !t.completed }
function deleteTodo(id: number) { todos.value = todos.value.filter(t => t.id !== id) }
</script>
```

优点：相关逻辑在一起、TypeScript 类型推导好、逻辑复用（提取到 composable 函数）。

## 面试追问

**Q: Options API 被废弃了吗？**
没有，只是推荐在新项目用 Composition API。Options API 对小组件仍然简单直观。

**Q: composable 和 React hooks 有什么区别？**
Vue composable 不需要遵循调用顺序规则（没有链表依赖），可以在条件语句里用，Vue 的依赖追踪是自动的。
