export default function (elemet, binding) {
  Object.keys(binding.value).forEach((position) => {
    elemet.style[position] = binding.value[position];
  });
  elemet.style.position = 'absolute';
}

// Backup Code Using Directive Lifecycle Hooks code refactored Defined in top
// function applyStyle(elemet, binding) {
//   Object.keys(binding.value).forEach((position) => {
//     elemet.style[position] = binding.value[position];
//   });
//   elemet.style.position = 'absolute';
// }
// export default {
//   bind: (elemet, binding) => {
//     applyStyle(elemet, binding);
//   },
//   update: (elemet, binding) => {
//     applyStyle(elemet, binding);
//   },
//   inserted: (elemet, binding),
// };


// Backup Code Using Directive Lifecycle Hooks
// export default {
//   bind: (elemet, binding) => {
//     //   for option one
//     // if (binding.arg !== 'position') return;

//     // Object.keys(binding.modifiers).forEach((key) => {
//     //   elemet.style[key] = '5px';
//     // });
//     // for option two

//     Object.keys(binding.value).forEach((position) => {
//       elemet.style[position] = 'binding.value[position]';
//     });
//     elemet.style.position = 'absolute';
//   },
//   update: (elemet, binding) => {

//   }
// };
