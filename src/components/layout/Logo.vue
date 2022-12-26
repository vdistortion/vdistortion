<template>
  <svg viewBox="-1 -1 265 45" class="logo">
    <path d="M0,10L10,0L30,10L20,20L30,30L10,40L0,30" class="logo_0"/>
    <path d="M60,0L70,10L70,30L50,40L40,30L40,10Z" class="logo_1"/>
    <path d="M70,40L80,30L80,10L100,0L100,30" class="logo_2"/>
    <path d="M130,0L140,10L140,30L120,40L110,30L110,10Z" class="logo_3"/>
    <g>
      <path d="M150,10L140,0L180,0" class="logo_4"/>
      <path d="M160,0L160,40L165,35" class="logo_5"/>
    </g>
    <path d="M200,0L210,10L210,30L190,40L180,30L180,10Z" class="logo_6"/>
    <path d="M219,40A1,1 0,1,1 221,40A1,1 0,1,1 219,40" class="logo_7"/>
    <path d="M250,10L240,0L230,10L240,20L230,30L240,40L250,40L260,30L260,0" class="logo_8"/>
  </svg>
</template>

<script>
export default {
  name: 'the-logo',
};
</script>

<style lang="stylus">
@require '../../assets/colors.styl'

svg.logo
  .logo_0
  .logo_1
  .logo_2
  .logo_3
  .logo_4
  .logo_5
  .logo_6
  .logo_8
    stroke $titleColor
    stroke-width 1
    stroke-linecap round
    fill none
  .logo_7
    fill $titleColor

  .logo_0
    stroke-dasharray 102 104
    stroke-dashoffset 103
    animation logo_draw 2000ms linear 0ms forwards

  .logo_1
    stroke-dasharray 114 116
    stroke-dashoffset 115
    animation logo_draw 2000ms linear 125ms forwards

  .logo_2
    stroke-dasharray 87 89
    stroke-dashoffset 88
    animation logo_draw 2000ms linear 250ms forwards

  .logo_3
    stroke-dasharray 114 116
    stroke-dashoffset 115
    animation logo_draw 2000ms linear 375ms forwards

  .logo_4
    stroke-dasharray 55 57
    stroke-dashoffset 56
    animation logo_draw 2000ms linear 500ms forwards

  .logo_5
    stroke-dasharray 48 50
    stroke-dashoffset 49
    animation logo_draw 2000ms linear 625ms forwards

  .logo_6
    stroke-dasharray 114 116
    stroke-dashoffset 115
    animation logo_draw 2000ms linear 750ms forwards

  .logo_7
    stroke-dasharray 7 9
    stroke-dashoffset 8
    animation logo_draw 2000ms linear 875ms forwards

  .logo_8
    stroke-dasharray 125 127
    stroke-dashoffset 126
    animation logo_draw 2000ms linear 1000ms forwards

  @keyframes logo_draw
    100%
      stroke-dashoffset 0
</style>
