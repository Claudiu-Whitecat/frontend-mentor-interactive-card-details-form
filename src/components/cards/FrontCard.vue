<template>
  <aside class="card front-card stacked">
    <div class="card-elements">
      <img
        class="card-logo"
        src="../../assets/card-logo.svg"
        alt="Two circles, one filled with one, one smaller, with a white stroke and no fill."
        loading="eager"
        decoding="async"
      />
      <label class="card-number">0000 0000 0000 0000</label>
      <div class="card-details">
        <label class="card-name">Jane Appleseed</label>
        <label class="card-expiration">00/00</label>
      </div>
    </div>
    <img
      class="card-bg"
      src="../../assets/bg-card-front.png"
      alt="Image for the credit card's front."
      loading="eager"
      decoding="async"
    />
  </aside>
</template>
<script>
export default {
  computed: {},
};
</script>
<style scoped src="./cards.css"></style>
