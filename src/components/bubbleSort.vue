<template>
  <div class="bubble">
    <!-- Tips -->
    <div class="tips">
      <div>
        <span class="tips_block iactive"></span>
        <span>变量 i 指向</span>
      </div>
      <div>
        <span class="tips_block jactive"></span>
        <span>变量 j 指向</span>
      </div>
      <div>
        <span class="tips_block gactive"></span>
        <span>排序完成元素</span>
      </div>
      <div>
        <span class="tips_block ractive"></span>
        <span>满足交换条件</span>
      </div>
    </div>

    <div class="anima">
      <!-- Animation -->
      <div class="item" v-for="(item, index) in items" :key="index">
        <span class="item_top">{{ item }}</span>
        <span
          :class="[
            'box',
            {
              jactive: index === points.j,
              iactive: index === points.i,
              gactive: index < items.length && index > points.i,
              ractive: index === points.x,
            },
          ]"
          :style="{
            height: item + 'em',
          }"
        >
        </span>
      </div>
    </div>

    <!-- Pointer change  -->
    <div class="state">
      <div class="item state_box" v-for="(item, index) in items" :key="index">
        <span>
          {{ index === points.x ? "⇦" : "" }}
          {{ index === points.i ? "i = " + points.i : "" }}
          {{ index === points.j ? "j = " + points.j : "" }}
        </span>
      </div>
    </div>

    <!-- Button group -->
    <div class="btn_group">
      <button @click.once="autoChange">▶</button>
      <button @click="nextChange">☛</button>
    </div>
  </div>
</template>

<script>
import { bubbleFn } from "../library/bubbleSort.js";

let genFn = null;

export default {
  name: "bubbleSort",
  data() {
    return {
      items: [3, 19, 6, 2, 8, 13, 0],
      points: {
        i: 0,
        j: 0,
        x: Infinity,
      },
    };
  },
  mounted() {
    this.initState();
  },
  methods: {
    nextChange() {
      const res = genFn.next();
      if (!res.done) {
        this.change(res);
      }
    },
    autoChange() {
      let timer = setInterval(() => {
        const res = genFn.next();
        if (!res.done) {
          this.change(res);
        } else {
          clearInterval(timer);
        }
      }, 2000);
    },
    change(res) {
      this.items = res.value.before;
      this.points.i = res.value.i;
      this.points.j = res.value.j;
      if (res.value.isChange) {
        this.points.x = this.points.j + 1;
      }
      setTimeout(() => {
        this.items = res.value.current;
        this.points.x = Infinity;
      }, 1000);
    },
    delItems() {
      if (this.items.length > 3) {
        this.items.pop();
      }
      setTimeout(() => {
        this.initState();
      }, 100);
    },
    addItems() {
      if (this.items.length < 15) {
        const temp = Math.floor(Math.random() * 20);
        this.items.push(temp);
      }
      setTimeout(() => {
        this.initState();
      }, 100);
    },
    initState() {
      genFn = bubbleFn(this.items);
      this.nextChange();
    },
  },
  watch: {},
};
</script>

<style scoped>
.bubble {
  width: 100%;
  text-align: center;
  user-select: none;
}

.anima,
.state {
  display: flex;
  justify-content: center;
}

.anima {
  padding-top: 2em;
}

.item {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  overflow: hidden;
  width: 4em;
  margin: 0 0.5em;
}

.item span {
  display: block;
  /* padding: 1px 0; */
  width: 100%;
  border-radius: 0.2em;
}

.box {
  background-color: rgb(246, 248, 250);
}

.state {
  margin-top: 0.5em;
}

.state_box {
  background-color: rgb(246, 248, 250);
  color: #333;
  text-align: center;
  height: 2em;
  line-height: 2em;
  overflow: hidden;
}

.iactive {
  background-color: rgb(121, 184, 255);
}

.jactive {
  background-color: rgb(241, 224, 90);
}

.gactive {
  background-color: rgb(46, 164, 79);
}

.ractive {
  background-color: rgb(227, 76, 38);
}

.iactive,
.jactive,
.gactive {
  transition: background 0.5s ease-out;
}

.btn_group {
  margin-top: 1.8em;
}

button {
  background-color: rgb(36, 41, 46);
  padding: 0.8em 1.5em;
  border: 0;
  border-radius: 0.5em;
  outline: none;
  color: #fff;
  cursor: pointer;
}

button:active {
  transform: scale(0.9);
  transition: all 0.5s ease-out;
}

.tips {
  display: flex;
  justify-content: center;
  border-bottom: 1px solid #f1f1f1;
}

.tips div {
  display: flex;
  align-items: center;
  margin: 1em 1em;
}

.tips_block {
  display: inline-block;
  width: 2em;
  height: 2em;
  margin-right: 0.5em;
  border-radius: 0.2em;
}
</style>