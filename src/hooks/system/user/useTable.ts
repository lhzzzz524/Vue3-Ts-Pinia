import { onMounted, ref } from 'vue'
import { getUserTable } from '@/service/main/system/user'
import type { IUserTabelList } from '@/service/type'

export default function useTable() {
  const tableList = ref<IUserTabelList[]>([])

  onMounted(async () => {
    const res = await getUserTable({ offset: 0, size: 10 })
    tableList.value = res.data.list
  })

  return {
    tableList
  }
}
