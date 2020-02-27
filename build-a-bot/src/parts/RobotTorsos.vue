<template>
  <div>
    <h2>Arms</h2>
    The arms are how your robot will interact with the world.
    They come in a variety of shapes and functions.
    <div v-for="(arm, idx) in arms" :key="idx">
      <h4>{{torso.title}}</h4>
      <div>{{torso.description}}</div>
    </div>
  </div>
</template>

<script>
import parts from '../data/parts';

export default {
  name: 'RobotTorsos',
  data() {
    return { torso: parts.torso };
  },
};
</script>
