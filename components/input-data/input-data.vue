<script lang="uts">
  export default {
    name: "input-data",
    emits: ['confirm'],
    props: {
      title: {
        type: String,
        required: true
      },
      type: {
        type: String,
        required: true
      },
      defaultValue: {
        type: String,
        required: true,
        default: ''
      }
    },
    data() {
      return {
        inputClearValue: '' as any,
        showClearIcon: false,
        inputType: 'text'
      }
    },
    created() {
      switch (this.type) {
        case 'number':
          this.inputType = 'number'
          break;
      }
      this.inputClearValue = this.getValue(this.defaultValue)
    },
    methods: {
      input: function (event : InputEvent) {
        // @ts-ignore
        this.inputClearValue = event.detail.value
        if ((this.inputClearValue as string).length > 0) {
          this.showClearIcon = true
        } else {
          this.showClearIcon = false
        }

        this.$emit('confirm', this.getValue(this.inputClearValue))
      },
      clearIcon: function () {
        this.inputClearValue = ''
        this.showClearIcon = false
        this.$emit('confirm', this.getValue(this.inputClearValue))
      },
      blur() {
        this.showClearIcon = false
      },
      focus() {
        let inputValue = this.inputClearValue
        if (typeof inputValue !== 'string') {
          inputValue = inputValue.toString()
        }
        if ((inputValue as string).length > 0) {
          this.showClearIcon = true
        } else {
          this.showClearIcon = false
        }
      },
      getValue(value : any) : any {
        switch (this.type) {
          case 'number':
            return parseFloat(value as string)
        }

        return value
      }
    }
  }
</script>

<template>
  <view class="uni-padding-wrap">
    <view class="uni-title uni-common-mt">
      <text class="uni-title-text"> {{title}} </text>
    </view>
  </view>
  <view class="input-wrapper">
    <input class="uni-input" :type="inputType" :value="inputClearValue" :placeholder="title" maxlength="-1" @input="input" @blur="blur"
      @focus="focus" />
    <!-- #ifdef WEB || MP -->
    <image class="input-wrapper_image" src="/static/icons/clear.png" v-if="showClearIcon" @touchstart="clearIcon" @mousedown="clearIcon">
    <!-- #endif -->
    <!-- #ifndef WEB || MP -->
    <image class="input-wrapper_image" src="/static/icons/clear.png" v-if="showClearIcon" @touchstart="clearIcon">
    <!-- #endif -->
    </image>
  </view>
</template>


<style>
  .input-wrapper {
    border: 1px solid rgba(0, 0, 0, .08);
    flex-direction: row;
    justify-content: center;
    padding: 0;
    margin: 0 10px;
    flex-direction: row;
    flex-wrap: nowrap;
    background-color: #ffffff;
  }

  .input-wrapper_image {
    width: 22px;
    height: 22px;
    align-self: center;
    margin-right: 5px;
  }
</style>
