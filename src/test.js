function encodeToRot13(str) {
  let key = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
  let secondKey = 'NOPQRSTUVWXYZABCDEFGHIJKLMnopqrstuvwxyzabcdefghijklm';
  return str
    .split('')
    .map((el) => {
      return key.includes(el) ? secondKey[key.indexOf(el)] : el;
    })
    .join('');
}

console.log(
  encodeToRot13('ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz?')
);
