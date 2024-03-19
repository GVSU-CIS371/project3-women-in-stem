<template>
  <Mug>
    <Cold v-if="isIced" />
    <Hot v-else />
    <Contents>
      <template v-slot:top>
        <Creamer v-if="creamer !== 'None'":name="creamer" />
        <Syrup v-if="syrup !== 'None' && creamer === 'None'" :name="syrup"/>
        <Base v-if="syrup === 'None' && creamer === 'None'" :name="beverage"/>
      </template>
      
      <template v-slot:mid>
        <Syrup v-if="syrup !== 'None' && creamer !== 'None'" :name="syrup"/>
        <Base v-else :name="beverage"/>
      </template>

      <template v-slot:bottom>
        <Base :name="beverage"/>
      </template>
    </Contents>
  </Mug>
</template>
<script setup lang="ts">
import Contents from "./Contents.vue";
import Mug from "./Mug.vue";
import Syrup from "./Syrup.vue";
import Base from "./Base.vue";
import Creamer from "./Creamer.vue";
import Hot from "./Hot.vue";
import Cold from "./Cold.vue";

type Props = {
  isIced: boolean;
 creamer: string;
  syrup: string;
  beverage: string;
};
defineProps<Props>();
</script>
