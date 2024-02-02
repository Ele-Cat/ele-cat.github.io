<template>
  <div class="createTriangle-container">
    <div class="tool-box">
      <section class="tool-flex">
        <div>
          <h4>方向<span>【点击选择】</span></h4>
          <div class="direction-contianer">
            <div class="placeholder"></div>
            <div class="square rotate">
              <label for="top" class="direction-label" :class="setActive('top')">
                <input type="radio" v-model="direction" name="direction" id="top" value="top" />
              </label>
              <label for="right" class="direction-label" :class="setActive('right')">
                <input type="radio" v-model="direction" name="direction" id="right" value="right" />
              </label>
              <label for="left" class="direction-label" :class="setActive('left')">
                <input type="radio" v-model="direction" name="direction" id="left" value="left" />
              </label>
              <label for="bottom" class="direction-label" :class="setActive('bottom')">
                <input type="radio" v-model="direction" name="direction" id="bottom" value="bottom" />
              </label>
            </div>

            <div class="square">
              <label for="topLeft" class="direction-label" :class="setActive('topLeft')">
                <input type="radio" v-model="direction" name="direction" id="topLeft" value="topLeft" />
              </label>
              <label for="topRight" class="direction-label" :class="setActive('topRight')">
                <input type="radio" v-model="direction" name="direction" id="topRight" value="topRight" />
              </label>
              <label for="bottomLeft" class="direction-label" :class="setActive('bottomLeft')">
                <input type="radio" v-model="direction" name="direction" id="bottomLeft" value="bottomLeft" />
              </label>
              <label for="bottomRight" class="direction-label" :class="setActive('bottomRight')">
                <input type="radio" v-model="direction" name="direction" id="bottomRight" value="bottomRight" />
              </label>
            </div>
          </div>
        </div>
        <div>
          <h4>颜色</h4>
          <a-input @change="update" type="color" style="width:42px;" v-model:value="choosenColor"></a-input>
          <h4>类型</h4>
          <a-radio-group v-model:value="type">
            <a-radio v-if="showEqu" value="equ">等边</a-radio>
            <a-radio value="iso">等腰</a-radio>
            <a-radio value="sca">不等边</a-radio>
          </a-radio-group>
        </div>
      </section>
      <section class="size-section">
        <h4>大小</h4>
        <div class="tool-flex">
          <div>
            <p>宽度</p>
            <a-input-number @change="update" v-model:value="width" :disabled="inputDisabled.width" :min="0" :max="300"
              size="mini"></a-input-number>
          </div>
          <div>
            <p>左</p>
            <a-input-number @change="update" v-model:value="left" :disabled="inputDisabled.left" :min="0" :max="150"
              size="mini"></a-input-number>
          </div>
          <div>
            <p>上</p>
            <a-input-number @change="update" v-model:value="top" :disabled="inputDisabled.top" :min="0" :max="150"
              size="mini"></a-input-number>
          </div>
        </div>
        <div class="tool-flex">
          <div>
            <p>高度</p>
            <a-input-number @change="update" v-model:value="height" :disabled="inputDisabled.height" :min="0" :max="300"
              size="mini"></a-input-number>
          </div>
          <div>
            <p>右</p>
            <a-input-number @change="update" v-model:value="right" :disabled="inputDisabled.right" :min="0" :max="150"
              size="mini"></a-input-number>
          </div>
          <div>
            <p>下</p>
            <a-input-number @change="update" v-model:value="bottom" :disabled="inputDisabled.bottom" :min="0" :max="150"
              size="mini"></a-input-number>
          </div>
        </div>
      </section>
    </div>
    <div class="triangle-container">
      <div class="triangle-demo" :style="{ borderWidth: lengths, borderColor: colors }"></div>
    </div>
  </div>
  <div class="language-css extra-class">
    <pre><code ref="codeContainerRef"></code></pre>
  </div>
</template>

<script setup>
import { ref, reactive, watch, nextTick } from "vue";
import Prism from "prismjs";

const colorDirection = {
  top: "bottom",
  right: "left",
  bottom: "top",
  left: "right",
  topRight: "right",
  bottomRight: "bottom",
  bottomLeft: "left",
  topLeft: "top",
  code: ""
};
const lengthDirection = {
  top: {
    top: false,
    right: "width-right",
    bottom: "height",
    left: "width-left"
  },
  right: {
    top: "height-top",
    right: false,
    bottom: "height-bottom",
    left: "width"
  },
  bottom: {
    top: "height",
    right: "width-right",
    bottom: false,
    left: "width-left"
  },
  left: {
    top: "height-top",
    right: "width",
    bottom: "height-bottom",
    left: false
  },
  topRight: {
    top: false,
    right: "width",
    bottom: "height",
    left: false
  },
  bottomRight: {
    top: false,
    right: false,
    bottom: "height",
    left: "width"
  },
  bottomLeft: {
    top: "height",
    right: false,
    bottom: false,
    left: "width"
  },
  topLeft: {
    top: "height",
    right: "width",
    bottom: false,
    left: false
  }
};

const type = ref("iso"); // equ等边  iso等腰  sca不等边
const choosenColor = ref("#00adb5"); // 初始颜色
const direction = ref("top"); // 箭头方向
// 默认初始值
const width = ref(100);
const height = ref(100);
const left = ref(50);
const right = ref(50);
const top = ref(50);
const bottom = ref(50);
const showEqu = ref(true); // 是否展示等边选项
const lengths = ref(""); // 三角边框样式
const colors = ref(""); // 三角颜色样式
// 控制input是否可编辑
let inputDisabled = reactive({
  width: false,
  height: false,
  left: false,
  right: false,
  top: false,
  bottom: false
});
const codeContainerRef = ref(null);

// 颜色、大小修改时，更新样式
const update = () => {
  changeSize();
  updateCSS();
}

// 获取方向高亮
const setActive = (dir) => {
  return dir == direction.value ? "active" : "";
}

// 改变大小
const changeSize = () => {
  if (
    direction.value == "top" ||
    direction.value == "bottom" ||
    direction.value == "left" ||
    direction.value == "right"
  ) {
    if (inputDisabled.width) {
      width.value = left.value * 1 + right.value * 1;
    } else {
      left.value = (width.value * 1) / 2;
      right.value = (width.value * 1) / 2;
    }
    if (inputDisabled.height) {
      height.value = top.value * 1 + bottom.value * 1;
    } else {
      top.value = (height.value * 1) / 2;
      bottom.value = (height.value * 1) / 2;
    }
  } else if (type.value == "iso") {
    left.value = (width.value * 1) / 2;
    right.value = (width.value * 1) / 2;
    top.value = (height.value * 1) / 2;
    bottom.value = (height.value * 1) / 2;
  }
}

// 更新样式
const updateCSS = () => {
  let dLengths = {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
  let dColors = {
    top: "transparent",
    right: "transparent",
    bottom: "transparent",
    left: "transparent"
  };
  let lengthDirections = lengthDirection[direction.value];
  dColors[colorDirection[direction.value]] = choosenColor.value;
  for (var key in lengthDirections) {
    if (lengthDirections[key] === false) {
      dLengths[key] = "0";
    } else {
      switch (type.value) {
        case "equ":
          if (direction.value == "top" || direction.value == "bottom") {
            var equHeight = ((Math.sqrt(3) / 2) * width.value).toFixed(1);
            switch (lengthDirections[key]) {
              case "width":
                dLengths[key] = equHeight + "px";
                break;
              case "height":
                dLengths[key] = equHeight + "px";
                break;
              case "width-left":
                dLengths[key] = width.value / 2 + "px";
                break;
              case "width-right":
                dLengths[key] = width.value / 2 + "px";
                break;
            }
          } else if (
            direction.value == "left" ||
            direction.value == "right"
          ) {
            var equHeight = ((Math.sqrt(3) / 2) * height.value).toFixed(1);
            switch (lengthDirections[key]) {
              case "width":
                dLengths[key] = equHeight + "px";
                break;
              case "height":
                dLengths[key] = equHeight + "px";
                break;
              case "height-top":
                dLengths[key] = height.value / 2 + "px";
                break;
              case "height-bottom":
                dLengths[key] = height.value / 2 + "px";
                break;
            }
          }
          break;
        case "iso":
          switch (lengthDirections[key]) {
            case "width":
              dLengths[key] = width.value + "px";
              break;
            case "height":
              dLengths[key] = height.value + "px";
              break;
            case "width-left":
              dLengths[key] = width.value / 2 + "px";
              break;
            case "width-right":
              dLengths[key] = width.value / 2 + "px";
              break;
            case "height-top":
              dLengths[key] = height.value / 2 + "px";
              break;
            case "height-bottom":
              dLengths[key] = height.value / 2 + "px";
              break;
          }
          break;
        case "sca":
          switch (lengthDirections[key]) {
            case "width":
              dLengths[key] = width.value + "px";
              break;
            case "height":
              dLengths[key] = height.value + "px";
              break;
            case "width-left":
              dLengths[key] = left.value + "px";
              break;
            case "width-right":
              dLengths[key] = right.value + "px";
              break;
            case "height-top":
              dLengths[key] = top.value + "px";
              break;
            case "height-bottom":
              dLengths[key] = bottom.value + "px";
              break;
          }
          break;
      }
    }
  }

  lengths.value = toArray(dLengths).join(" ");
  colors.value = toArray(dColors).join(" ");

  let outputCssStr = `.triangle {
  width: 0;
  height: 0;
  border-style: solid;
  border-width: ${lengths.value};
  border-color: ${colors.value};
}`;
  let cssCode = Prism.highlight(outputCssStr, Prism.languages.css);
  nextTick(() => {
    codeContainerRef.value.innerHTML = cssCode;
  })
}

const changeSetup = () => {
  // 改变类型时，是否展示等边选项
  if (
    direction.value == "topRight" ||
    direction.value == "bottomRight" ||
    direction.value == "bottomLeft" ||
    direction.value == "topLeft"
  ) {
    if (type.value == "equ") {
      type.value = "iso";
    }
    showEqu.value = false;
  } else {
    showEqu.value = true;
  }

  // 改变类型时，大小输入框是否允许编辑
  switch (type.value) {
    case "equ":
      if (direction.value == "top" || direction.value == "bottom") {
        inputDisabled = Object.assign(inputDisabled, {
          width: false,
          height: true,
          left: true,
          right: true,
          top: true,
          bottom: true,
        })
      } else if (direction.value == "left" || direction.value == "right") {
        inputDisabled = Object.assign(inputDisabled, {
          width: true,
          height: false,
          left: true,
          right: true,
          top: true,
          bottom: true,
        })
      } else {
        inputDisabled = Object.assign(inputDisabled, {
          width: false,
          height: false,
          left: true,
          right: true,
          top: true,
          bottom: true,
        })
      }
      break;
    case "iso":
      inputDisabled = Object.assign(inputDisabled, {
        width: false,
        height: false,
        left: true,
        right: true,
        top: true,
        bottom: true,
      })
      break;
    case "sca":
      if (direction.value == "top" || direction.value == "bottom") {
        inputDisabled = Object.assign(inputDisabled, {
          width: true,
          height: false,
          left: false,
          right: false,
          top: true,
          bottom: true,
        })
      } else if (direction.value == "left" || direction.value == "right") {
        inputDisabled = Object.assign(inputDisabled, {
          width: false,
          height: false,
          left: true,
          right: true,
          top: false,
          bottom: false,
        })
      } else {
        inputDisabled = Object.assign(inputDisabled, {
          width: false,
          height: false,
          left: true,
          right: true,
          top: true,
          bottom: true,
        })
      }
      break;
  }
}

// 对象的值转数组
const toArray = (obj) => {
  var arr = [];
  for (var key in obj) {
    arr.push(obj[key]);
  }
  return arr;
}

// 监听方向、类型变化时，更新
watch([direction, type], () => {
  changeSetup();
  changeSize();
  updateCSS();
}, {
  immediate: true,
})
</script>

<style scoped lang="scss">
.createTriangle-container {
  display: flex;
  justify-content: space-between;
  align-items: center;

  .triangle-container {
    width: 300px;
    height: 300px;
    margin: 0 auto;
    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAC1JREFUeNpiPHPmDAM2YGxsjFWciYFEMKqBGMD4//9/rBJnz54dDSX6aQAIMABCtQiAsDRF+wAAAABJRU5ErkJggg==);
  }

  h4 {
    margin: 10px 0 4px;

    span {
      font-weight: normal;
      font-size: 12px;
      color: #aaa;
    }
  }

  .direction-contianer {
    width: 140px;
    height: 140px;
    position: relative;

    .placeholder {
      width: 60px;
      height: 60px;
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      margin: auto;
      background-color: #fff;
      z-index: 10;
    }

    .square {
      width: 100px;
      height: 100px;
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      margin: auto;
      z-index: 1;

      .direction-label {
        background: #d1f4fa;

        &:hover {
          background: #53cde2;
        }

        &.active {
          background: #ff1f5a;
        }
      }

      &.rotate {
        width: 85px;
        height: 85px;
        transform: rotate(45deg);
        z-index: 2;
        bottom: 0;
        right: 0;
        margin: auto;

        .direction-label {
          background: #8e98f5;

          &:hover {
            background: #7874f2;
          }

          &.active {
            background: #ff1f5a;
          }
        }
      }
    }

    .direction-label {
      width: 50%;
      height: 50%;
      float: left;
      cursor: pointer;
      transition: all 0.3s;
    }

    input[type="radio"] {
      display: none;
    }
  }

  .triangle-demo {
    width: 0;
    height: 0;
    border-style: solid;
    transition: all 0.3s;
  }

  .size-section {
    p {
      margin: 4px 0 2px 0;
    }
  }

  .tool-flex {
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;

    div {
      margin-right: 15px;
    }
  }
}
</style>