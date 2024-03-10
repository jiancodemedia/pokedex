function findTicketPrice(email) {
  let hasNumber = false;

  email.split("").forEach((char) => {
    if (!isNaN(Number(char))) {
      hasNumber = true;
    }
  });

  return hasNumber;
}
