export default (phone) => {
  let newPhone = phone;
  newPhone = newPhone.replace(/[^\d+]/g, '');
  newPhone = newPhone.replace(/(?<=.)\+/g, '');
  newPhone = newPhone.replace(/^8(?=\d{10}$)/, '+7');
  return newPhone;
};
