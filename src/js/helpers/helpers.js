// Function to get selected values from checkboxes
export function getSelectedValues(form, fieldName) {
  return Array.from(
    form.querySelectorAll(`input[name="${fieldName}"]:checked`)
  ).map((input) => input.value);
}
