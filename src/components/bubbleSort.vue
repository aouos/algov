<template>
  <div class="bubble">
    <div class="anima">
      <div class="item" v-for="(item, index) in items" :key="index">
        <span>{{ item }}</span>
        <span
          :class="[
            'box',
            {
              jactive: j === index,
              iactive: i === index,
              gactive: index < items.length && index > i,
              xactive: x === index,
            },
          ]"
          :style="{
            height: item + 'em',
          }"
        >
        </span>
      </div>
    </div>
    <div class="state">
      <div class="item state_box" v-for="(item, index) in items" :key="index">
        <span>
          {{ index === x ? "☚" : "" }}
          {{ index === i ? "i = " + i : "" }}
          {{ index === j ? "j = " + j : "" }}
        </span>
      </div>
    </div>
    <div class="btn_group">
      <button @click="autoChange">自动演示</button>
      <button @click="nextChange">手动点击</button>
    </div>
  </div>
</template>

<script>
import { bubbleFn } from "../library/bubbleSort.js";

export default {
  name: "bubbleSort",
  data() {
    return {
      genFn: null,
      items: [3, 19, 6, 2, 8, 13, 0],
      i: 0,
      j: 0,
      x: Infinity,
    };
  },
  mounted() {
    this.genFn = bubbleFn(this.items);
    this.nextChange();
  },
  methods: {
    nextChange() {
      const res = this.genFn.next();
      if (!res.done) {
        this.items = res.value.before;
        this.i = res.value.i;
        this.j = res.value.j;
        if (res.value.isChange) {
          this.x = this.j + 1;
        }
        setTimeout(() => {
          this.items = res.value.current;
          this.x = Infinity;
        }, 1000);
      }
    },
    autoChange() {
      let timer = setInterval(() => {
        const res = this.genFn.next();
        if (!res.done) {
          this.items = res.value.before;
          this.i = res.value.i;
          this.j = res.value.j;
          if (res.value.isChange) {
            this.x = this.j + 1;
          }
          setTimeout(() => {
            this.items = res.value.current;
            this.x = Infinity;
          }, 1000);
        } else {
          clearInterval(timer);
        }
      }, 2000);
    },
  },
  watch: {},
};
</script>

<style>
.bubble {
  width: 100%;
  text-align: center;
}

.anima,
.state {
  display: flex;
  justify-content: center;
}

.item {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  overflow: hidden;
  width: 3.6em;
  margin: 0 0.3em;
}

.item span {
  display: block;
  padding: 0.1em;
  width: 3.6em;
}

.box {
  background-color: #eee;
}

.state {
  margin-top: 0.5em;
}

.state_box {
  background-color: #f1f1f1;
  color: #333;
  border-radius: 0.2em;
}

.iactive {
  background-color: yellow;
}

.jactive {
  background-color: pink;
}

.gactive {
  background-color: green;
}

.xactive {
  background-color: red;
}

.iactive,
.jactive,
.gactive {
  color: #fff;
  transition: background 0.5s ease-in-out;
}

.btn_group,
.source {
  margin-top: 1.8em;
}

button {
  background-color: plum;
  padding: 0.8em 1.5em;
  border: 0;
  border-radius: 0.5em;
  outline: none;
  color: #fff;
}
</style>