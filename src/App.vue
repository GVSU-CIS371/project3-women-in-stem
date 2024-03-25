<template>
  <div>
    <Beverage
      :isIced="store.currentTemp === 'Cold'"
      :creamer="store.currentCreamer"
      :syrup="store.currentSyrup"
      :beverage="store.currentBaseBeverage"
    />
    <div class="beverage-form">
      <div class="form-item">
        <label for="temperature-select">Temperature:</label>
        <select id="temperature-select" v-model="store.currentTemp">
          <option v-for="temp in temps" :key="temp" :value="temp">{{ temp }}</option>
        </select>
      </div>

      <div class="form-item">
        <label for="creamer-select">Creamer:</label>
        <select id="creamer-select" v-model="store.currentCreamer">
          <option v-for="creamer in Creamers" :key="creamer" :value="creamer">{{ creamer }}</option>
        </select>
      </div>

      <div class="form-item">
        <label for="syrup-select">Syrup:</label>
        <select id="syrup-select" v-model="store.currentSyrup">
          <option v-for="syrup in Syrups" :key="syrup" :value="syrup">{{ syrup }}</option>
        </select>
      </div>

      <div class="form-item">
        <label for="base-select">Base Beverage:</label>
        <select id="base-select" v-model="store.currentBaseBeverage">
          <option v-for="base in baseBeverages" :key="base" :value="base">{{ base }}</option>
        </select>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useBeverageStore } from './stores/beverages';
import Beverage from './components/Beverage.vue';

// Initialize the store
const store = useBeverageStore();

// Static lists for the options. These are constants and do not need to be reactive.
const temps = ['Hot', 'Cold'];
const Creamers = ['None', 'Milk', 'Cream', 'Half & Half'];
const Syrups = ['None', 'Vanilla', 'Caramel', 'Hazelnut'];
const baseBeverages = ['Coffee', 'Green Tea', 'Black Tea'];



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
.dropdown {
    float: left;
    overflow: hidden;
  }

  .dropdown .dropbtn {
    font-size: 16px;  
    border: none;
    outline: none;
    color: white;
    padding: 14px 16px;
    background-color: inherit;
    font-family: inherit;
    margin: 0;
  }


  .dropdown-content {
    display: none;
    position: absolute;
    background-color: #f9f9f9;
    min-width: 160px;
    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
    z-index: 1;
  }

  .dropdown-content a {
    float: none;
    color: black;
    padding: 12px 16px;
    text-decoration: none;
    display: block;
    text-align: left;
  }

</style>
