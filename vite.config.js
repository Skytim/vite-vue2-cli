import { createVuePlugin } from "vite-plugin-vue2";
import eslint from "vite-plugin-eslint";

export default {
    plugins: [createVuePlugin(), eslint()],
};
