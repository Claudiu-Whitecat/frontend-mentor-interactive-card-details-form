<template>
  <form class="form-cc" action="" enterkeyhint="send" @submit.prevent="submit">
    <div class="field">
      <label class="form-cc--label" for="cc-name">cardholder name</label>
      <input
        class="form-input"
        id="cc-name"
        type="text"
        placeholder="e.g. Jane Appleseed"
        inputmode="text"
        autocomplete="cc-name"
      />
    </div>
    <div class="field">
      <label class="form-cc--label" for="cc-number">card number</label>
      <input
        class="form-input"
        id="cc-number"
        type="text"
        placeholder="e.g. 1234 5678 9123 0000"
        inputmode="numeric"
        autocomplete="cc-number"
      />
    </div>
    <div class="field field-bigger">
      <fieldset class="expiration-date grid-auto-column">
        <legend class="form-cc--label">exp. date (mm/yy)</legend>
        <input
          class="form-input form-input--smaller"
          id="exp-month"
          type="text"
          placeholder="MM"
          inputmode="numeric"
          maxlength="3"
        />

        <input
          class="form-input form-input--smaller"
          id="exp-year"
          type="text"
          maxlength="2"
          inputmode="numeric"
          placeholder="YY"
        />
      </fieldset>
      <div class="field">
        <label class="form-cc--label" for="cc-cvc">cvc</label>
        <input
          class="form-input"
          type="text"
          placeholder="e.g. 123"
          maxlength="3"
          inputmode="numeric"
          autocomplete="cc-csc"
        />
      </div>
    </div>
    <button type="submit">Confirm</button>
  </form>
</template>
<script>
export default {
  computed: {},
};
</script>
<style scoped src="./forms.css"></style>
