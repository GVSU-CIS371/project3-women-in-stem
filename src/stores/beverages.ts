import { defineStore } from 'pinia'

export const useBeverageStore = defineStore('beverageStore', {
  state: () => ({
    currentTemp: 'Hot',
    currentCreamer: 'None',
    currentSyrup: 'None',
    currentBaseBeverage: 'Coffee',
    recipes: [] as { name: string; temp: string; creamer: string; syrup: string; baseBeverage: string; }[],
  }),
  actions: {
    setTemperature(temp: string) {
      this.currentTemp = temp;
    },
    setCreamer(creamer: string) {
      this.currentCreamer = creamer;
    },
    setSyrup(syrup: string) {
      this.currentSyrup = syrup;
    },
    setBaseBeverage(baseBeverage: string) {
      this.currentBaseBeverage = baseBeverage;
    },
    saveRecipe(name: string) {
      const recipe = {
        name,
        temp: this.currentTemp,
        creamer: this.currentCreamer,
        syrup: this.currentSyrup,
        baseBeverage: this.currentBaseBeverage,
      };
      this.recipes.push(recipe);
    },
  },
});
