import pluginVue from 'eslint-plugin-vue';
import eslintConfigPrettier from "eslint-config-prettier";

export default [
  ...pluginVue.configs['flat/recommended'],
  eslintConfigPrettier,
  {
    "rules": {
      "vue/no-multiple-template-root": 0,
      'vue/multi-word-component-names': 0,
      'vue/no-v-for-template-key': 0,
      'vue/one-component-per-file': 0,
      "vue/require-default-prop": "off",
      "vue/html-closing-bracket-spacing": "off",
      "vue/v-on-event-hyphenation": "off"
    },
    "languageOptions": {
      "globals": {
        defineProps: 'readonly',
        defineEmits: 'readonly',
        defineExpose: 'readonly'
      },
    },
  }
];
