<template>
  <div class="app">
    <div class="menu" v-if="menuShow">
      <div class="title" @click="switchMenu('anima')">
        <svg
          t="1617094846763"
          class="icon"
          viewBox="0 0 1024 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          p-id="4600"
          width="100"
          height="100"
        >
          <path
            d="M196.45629667 395.00610333a111.16847445 111.16847445 0 1 0 222.33694778 0 111.16847445 111.16847445 0 1 0-222.33694778 0Z"
            fill="#FFDC45"
            p-id="4601"
          ></path>
          <path
            d="M613.94488889 383.35525888a109.22666667 109.22666667 0 1 0 218.45333333 0 109.22666667 109.22666667 0 1 0-218.45333333 0Z"
            fill="#FFDC45"
            p-id="4602"
          ></path>
          <path
            d="M361.50992555 609.09036999a160.19911111 160.19911111 0 1 0 320.39822222 0 160.19911111 160.19911111 0 1 0-320.39822222 0Z"
            fill="#04ADF6"
            p-id="4603"
          ></path>
          <path
            d="M752.7841189 285.29398557l-1.94180779 6.79632554c29.12711111 8.73813333 52.4288 29.61256334 63.59419222 56.31241444l6.79632668-2.91271112c-11.65084445-28.15620779-36.89434112-50.97244445-68.44871111-60.19602886z"
            fill="#0481CF"
            p-id="4604"
          ></path>
          <path
            d="M722.68610333 255.68142222C652.29558557 255.68142222 595.01226667 312.96474112 595.01226667 383.84071111c0 26.2144 7.76723001 50.97244445 21.84533333 71.36142222-27.67075555-19.41807445-61.65238557-31.0689189-98.54672555-31.0689189-38.83614777 0-74.75958557 13.1072-103.40124444 34.46708224 12.13629667-19.41807445 19.41807445-42.71976334 19.41807332-67.47780778C434.32770333 320.2465189 377.04438557 262.9632 306.65386667 262.9632S178.00912555 320.73196999 178.00912555 391.12248889 235.29244445 519.28177778 306.16841443 519.28177778c26.2144 0 50.97244445-7.76723001 71.36142223-21.84533333-19.41807445 28.15620779-31.0689189 61.65238557-31.06891776 98.54672554 0 95.14856334 76.70139221 171.84995555 171.84995555 171.84995556s171.84995555-77.18684445 171.84995556-171.84995556c0-38.83614777-13.1072-74.75958557-34.46708224-103.40124444 19.41807445 12.13629667 42.71976334 19.41807445 67.47780778 19.41807445 70.3905189 0 127.67383666-57.2833189 127.67383666-128.15928889S793.56207445 255.68142222 722.68610333 255.68142222zM306.16841443 512C239.66151111 512 185.77635555 458.11484445 185.77635555 391.12248889S239.66151111 270.73043001 306.16841443 270.73043001c66.50690333 0 120.39205888 53.88515555 120.39206002 120.87751111S372.6753189 512 306.16841443 512z m376.22518557 83.98316999c0 90.77949667-73.7886811 164.56817778-164.56817778 164.56817778S353.74269667 687.2481189 353.74269667 595.98316999c0-90.77949667 73.7886811-164.56817778 164.56817778-164.56817778s164.08272555 73.7886811 164.08272555 164.56817778z m40.29250333-91.26494777c-66.50690333 0-120.39205888-53.88515555-120.39205888-120.87751111 0-66.50690333 53.88515555-120.87751111 120.39205888-120.87751111 66.50690333 0 120.39205888 53.88515555 120.39206001 120.87751111 0 66.99235555-53.88515555 120.87751111-120.39206001 120.87751111z"
            fill="#0481CF"
            p-id="4605"
          ></path>
          <path
            d="M532.87443001 731.42423666v7.28177777c63.10874112 0 116.99389667-44.66156999 127.67383666-105.34305109l-7.28177778-1.45635555C643.072 689.18992555 592.09955555 731.42423666 532.87443001 731.42423666z"
            fill="#0481CF"
            p-id="4606"
          ></path>
        </svg>
      </div>
      <div class="menu_items">
        <span
          class="menu_item"
          v-for="(item, index) in sorts"
          :key="index"
          @click="switchMenu(item)"
          :class="{ active: menuIdx === item }"
        >
          {{ item }}
        </span>
      </div>
    </div>
    <div class="content">
      <button @click="menuShow = !menuShow" class="menu_control">
        <svg
          t="1617096403917"
          class="icon"
          viewBox="0 0 1024 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          p-id="8678"
          width="16"
          height="16"
        >
          <path
            d="M905.2 144.9h-785c-31.3 0-56.7 25.6-56.7 57.3v7.7c0 31.6 25.4 36.4 56.7 36.4h785c31.3 0 56.7-4.7 56.7-36.4v-7.7c0-31.7-25.4-57.3-56.7-57.3zM800.7 459.8H120.2c-31.3 0-56.7 25.6-56.7 57.3v-13.2c0 31.6 25.4 57.3 56.7 57.3h680.5c31.3 0 56.7-25.6 56.7-57.3v13.2c0-31.6-25.4-57.3-56.7-57.3z m-104.4 315h-576c-31.3 0-56.7 25.6-56.7 57.3v7.7c0 31.6 25.4 36.4 56.7 36.4h576c31.3 0 56.7-4.7 56.7-36.4V832c0-31.6-25.4-57.2-56.7-57.2z"
            p-id="8679"
            fill="#2c2c2c"
          ></path>
        </svg>
      </button>
      <welcome-anima v-if="menuIdx === 'anima'"></welcome-anima>
      <bubble-sort v-if="menuIdx === 'bubbleSort'"></bubble-sort>
    </div>
  </div>
</template>

<script>
import welcomeAnima from "./components/welcomeAnima.vue";
import bubbleSort from "./components/bubbleSort.vue";

export default {
  name: "App",
  data() {
    return {
      menuIdx: "anima",
      menuShow: true,
      sorts: [
        "bubbleSort",
        "insertionSort",
        "selectionSort",
        "shellSort",
        "mergeSort",
        "quickSort",
        "heapSort",
        "countingSort",
        "radixSort",
        "bucketSort",
      ],
    };
  },
  components: {
    welcomeAnima,
    bubbleSort,
  },
  methods: {
    switchMenu(val) {
      this.menuIdx = val;
    },
  },
};
</script>

<style>
:root,
body {
  padding: 0;
  margin: 0;
  outline: none;
  border: 0;
  width: 100%;
  height: 100%;
}

.app {
  display: flex;
  flex-direction: row;
  height: 100%;
  font-family: sans-serif;
  user-select: none;
}

.menu_control {
  position: absolute;
  bottom: 0;
  left: -1px;
  border: 0;
  padding-top: 0.4em;
  outline: none;
  background-color: #fff;
  border: 1px solid #f1f1f1;
  border-left: 1px solid #fff;
  border-top-right-radius: 0.4em;
  cursor: pointer;
}

.title {
  text-align: center;
}

.menu {
  border-right: 1px solid #f1f1f1;
  cursor: pointer;
}

.menu_items {
  border-top: 1px solid #f1f1f1;
}

.menu_item {
  display: block;
  padding: 0.8em 2em;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  cursor: pointer;
}

.menu_items .active {
  background-color: rgb(255, 220, 69);
  color: rgb(4, 173, 246);
  transition: background 0.5s ease-out;
}

.menu_item:hover {
  background-color: rgb(255, 224, 90);
  transition: background 0.5s ease-out;
}

.content {
  flex: 1;
  position: relative;
  padding-top: 1em;
}
</style>