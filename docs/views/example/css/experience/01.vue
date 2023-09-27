<template>
  <div class="bg-white">
    <form>
      <div class="segment">Sign up</div>
      <label>
        <input type="text" placeholder="Email Address" />
      </label>
      <label>
        <input type="password" placeholder="Password" />
      </label>
      <button class="red" type="button"><lock-filled /> Log in</button>
      <div class="segment">
        <button class="unit" type="button">
          <arrow-left-outlined />
        </button>
        <button class="unit" type="button">
          <tags-filled />
        </button>
        <button class="unit" type="button">
          <setting-filled />
        </button>
      </div>
      <div class="input-group">
        <label>
          <input type="text" placeholder="Email Address" />
        </label>
        <button class="unit" type="button">
          <search-outlined />
        </button>
      </div>
    </form>
  </div>
</template>

<script setup>
import {
  LockFilled,
  ArrowLeftOutlined,
  TagsFilled,
  SettingFilled,
  SearchOutlined,
} from "@ant-design/icons-vue";
</script>

<style lang="scss" scoped>
$ruler: 16px;
$color-red: #ae1100;
$color-bg: #ebecf0;
$color-shadow: #babecc;
$color-white: #fff;

.bg-white {
  background-color: $color-bg;
  padding: 0 0 20px 0;
}

p,
input,
select,
textarea,
button {
  font-family: "Montserrat", sans-serif;
  letter-spacing: -0.2px;
  font-size: $ruler;
}

div,
p {
  color: $color-shadow;
  text-shadow: 1px 1px 1px $color-white;
}

form {
  width: $ruler * 20;
  margin: 0 auto;
}

.segment {
  font-weight: bold;
  font-size: $ruler * 2;
  padding: $ruler * 1.2 0;
  text-align: center;
}

button,
input {
  border: 0;
  outline: 0;
  font-size: $ruler;
  border-radius: $ruler * 20;
  padding: $ruler;
  background-color: $color-bg;
  text-shadow: 1px 1px 0 $color-white;
}

label {
  display: block;
  margin-bottom: $ruler * 1.5;
  width: 100%;
}

input {
  margin-right: calc($ruler / 2);
  box-shadow: inset 2px 2px 5px $color-shadow, inset -5px -5px 10px $color-white;
  width: 100%;
  box-sizing: border-box;
  transition: all 0.2s ease-in-out;
  appearance: none;
  -webkit-appearance: none;

  &:focus {
    box-shadow: inset 1px 1px 2px $color-shadow,
      inset -1px -1px 2px $color-white;
  }
}

button {
  color: #61677c;
  font-weight: bold;
  box-shadow: -5px -5px 20px $color-white, 5px 5px 20px $color-shadow;
  transition: all 0.2s ease-in-out;
  cursor: pointer;
  font-weight: 600;

  &:hover {
    box-shadow: -2px -2px 5px $color-white, 2px 2px 5px $color-shadow;
  }

  &:active {
    box-shadow: inset 1px 1px 2px $color-shadow,
      inset -1px -1px 2px $color-white;
  }

  .icon {
    margin-right: calc($ruler / 2);
  }

  &.unit {
    border-radius: calc($ruler / 2);
    line-height: 0;
    width: $ruler * 3;
    height: $ruler * 3;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    margin: 0 calc($ruler / 2);
    font-size: $ruler * 1.2;

    .icon {
      margin-right: 0;
    }
  }

  &.red {
    display: block;
    width: 100%;
    color: $color-red;
  }
}

.input-group {
  display: flex;
  align-items: center;
  justify-content: flex-start;

  label {
    margin: 0;
    flex: 1;
  }
}
</style>