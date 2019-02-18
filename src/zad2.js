// czy litera jest duza czy mala ? 

String.prototype.isUpperCase = function() {
  const zm1 = this;
  let res = true;

  for (let i = 0; i < zm1.length; i++) {
    if (zm1.charCodeAt(i) > 96 && zm1.charCodeAt(i) < 123) {
      res = false;
    }
  }

  return res;
};