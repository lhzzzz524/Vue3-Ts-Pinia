import { onMounted, Ref, ref } from 'vue'
import { getTable } from '@/service/main/system/user'

export default function useTable(urlStr: string): { tableList: Ref<any[]> } {
  const tableList: Ref<any[]> = ref([])

  onMounted(async () => {
    const res = await getTable({ offset: 0, size: 10 }, urlStr)
    tableList.value = res.data.list
  })

  return {
    tableList
  }
}
