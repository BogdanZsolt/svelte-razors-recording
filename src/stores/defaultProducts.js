import { writable, derived } from "svelte/store"
import localProducts from '../localProducts'

// flatten products
const flattenProducts = (data) => {
  return data.map((item) => {
    let image = item.image.url;
    return { ...item, image };
  });
};

const store = writable(flattenProducts([...localProducts]))

// subscribe
// set
// update

// featured store
export const featuredStore = derived(store,($featured)=>{
  return $featured.filter(item => item.featured === true)
})
export default store