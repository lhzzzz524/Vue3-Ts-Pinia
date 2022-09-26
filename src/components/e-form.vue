<template>
  <div class="myForm">
    <el-form style="padding-top: 18px">
      <el-row>
        <template v-for="item in formItem" :key="item.label">
          <el-form-item
            :label="item.label"
            :style="{ width: `${item.width}px` }"
            :label-width="`${item.labelWidth}px`"
          >
            <template v-if="item.type === 'input' || item.type === 'password'">
              <el-input
                v-model="myFormModel[item.field]"
                :placeholder="item.placeholder"
                :show-password="item.type === 'password'"
              />
            </template>
            <template v-else-if="item.type === 'select'">
              <el-select :placeholder="item.placeholder" v-model="myFormModel[item.field]">
                <el-option
                  v-for="options in item.option"
                  :key="options.value"
                  :value="options.value"
                >
                  {{ options.label }}</el-option
                >
              </el-select>
            </template>
            <template v-else-if="item.type === 'dataPicker'">
              <el-date-picker
                v-bind="item.otherOption"
                v-model="myFormModel[item.field]"
              ></el-date-picker>
            </template>
          </el-form-item>
        </template>
      </el-row>
    </el-form>
    <div class="searchButtons">
      <slot name="searchButtons"></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import type { IFormItem } from './type'

interface IProps {
  formItem: IFormItem[]
  formModel: any
}

const props = withDefaults(defineProps<IProps>(), {
  formItem: () => [],
  formModel: {}
})

const emit = defineEmits<{
  (e: 'update:formModel', newValue: any): void
}>()

const myFormModel = computed({
  get() {
    return props.formModel
  },
  set(newValue) {
    emit('update:formModel', newValue)
  }
})
</script>

<style lang="less">
.searchButtons {
  text-align: right;
  margin-right: 30px;
}
</style>
