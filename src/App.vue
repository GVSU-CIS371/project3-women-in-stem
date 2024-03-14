<template>
  <div>
    <Beverage :isIced="currentTemp === 'Cold'" :creamer="currentCreamer" :syrup="currentSyrup" :beverage="currentBaseBeverage"/>
    <ul>
      <li>
        <label for="temperature">Temperature:</label>
        <template v-for="temp in temps" :key="temp">
          
          <label>
            <input
              type="radio"
              name="temperature"
              :id="`r${temp}`"
              :value="temp"
              v-model="currentTemp"
            />
            {{ temp }}
          </label>
        </template>
      </li>
      <li>
        <label for="Creamer">Creamer:</label>
        <template v-for="creamer in Creamers" :key="creamer">
          
          <label>
            <input
              type="radio"
              name="Creamer"
              :id="`r${creamer}`"
              :value="creamer"
              v-model="currentCreamer"
            />
            {{ creamer }}
          </label>
        </template>
      </li>
      <li>
        <label for="Syrup">Syrup:</label>
        <template v-for="syrup in Syrups" :key="syrup">
          <label>
            <input
              type="radio"
              name="Syrup"
              :id="`r${syrup}`"
              :value="syrup"
              v-model="currentSyrup"
            />
            {{ syrup }}
          </label>
        </template>
      </li>
      <li>
        <label for="Base Beverage">baseBeverage:</label>
        <template v-for="baseBeverage in baseBeverages" :key="baseBeverage">
          <label>
            <input
              type="radio"
              name="Base Beverage"
              :id="`r${baseBeverage}`"
              :value="baseBeverage"
              v-model="currentBaseBeverage"
            />
            {{ baseBeverage }}
          </label>
        </template>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import Beverage from "./components/Beverage.vue";

const temps = ref(["Hot", "Cold"]);
const currentTemp = ref("Hot");
const Creamers = ref(["None", "Milk", "Cream", "Half & Half"]);
const currentCreamer = ref("None");
const Syrups = ref(["None", "Vanilla","Caramel", "Hazelnut"]);
const currentSyrup = ref("None");
const baseBeverages =ref(["Coffee", "Green Tea", "Back Tea"]);
const currentBaseBeverage= ref("Coffee");
</script>

<style lang="scss">
body,
html {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  background-color: #6e4228;
  background: linear-gradient(to bottom, #6e4228 0%, #956f5a 100%);
}
ul {
  list-style: none;
}
</style>
