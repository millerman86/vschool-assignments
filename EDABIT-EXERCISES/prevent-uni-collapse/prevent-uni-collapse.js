function catchZeroDivision(expr) {
  if (isFinite(eval(expr))) return false;
  if (!isFinite(eval(expr))) return true;
}
