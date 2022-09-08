function validation(formData) {
  if (formData.username === "") return false;
  if (!formData.emailAddress.includes("@")) return false;
  if (formData.password.length <= 7) return false;
  return true;
}

module.exports = validation;