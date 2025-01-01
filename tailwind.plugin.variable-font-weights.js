import plugin from "tailwindcss/plugin.js";

export default plugin(function ({addUtilities}) {
  const fontWeights = [
    {className: '.font-thin', weight: 100},
    {className: '.font-extralight', weight: 200},
    {className: '.font-light', weight: 300},
    {className: '.font-normal', weight: 400},
    {className: '.font-medium', weight: 500},
    {className: '.font-semibold', weight: 600},
    {className: '.font-bold', weight: 700},
    {className: '.font-extrabold', weight: 800},
    {className: '.font-black', weight: 900},
    {className: '.font-condensed', weight: 400, wdth: 75},
    {className: '.font-condensed-medium', weight: 500, wdth: 75},
  ];

  fontWeights.forEach(({className, weight, wdth}) => {
    addUtilities({
      [className]: {
        fontWeight: weight,
        fontVariationSettings: `"wdth" ${wdth ?? 100},"wght" ${weight}`
      }
    }, ['responsive', 'hover']);
  });
});
