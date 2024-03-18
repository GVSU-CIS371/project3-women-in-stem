<template>
  <div class="syrup" :style="{ backgroundColor: syrupColor }"></div>
</template>

<script setup lang="ts">
import { computed } from "vue";

type Prop = {
  name: string;
};

type Syrup = {
  name: string;
  color: string;
};

const Syrups: Syrup[] = [
  {
    name: "Vanilla",
    color: "#FFEFD5",
  },
  {
    name: "Caramel",
    color: "#DAA520",
  },
  {
    name: "Hazelnut",
    color: "#6B4423",
  },
];

const props = withDefaults(defineProps<Prop>(), {
  name: "Vanilla",
});

const syrupColor = computed(() => {
  const selectedSyrup = Syrups.find(syrup => syrup.name === props.name);
  return selectedSyrup ? selectedSyrup.color : '#456'; 

});
</script>
<style lang="scss" scoped>
.syrup {
  transform: translateY(400%);
  position: relative;
  width: 100%;
  height: 20%;
  animation: pour-tea 2s 1s forwards;
  z-index: 2;
}
</style>
