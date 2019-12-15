let KEY;

const encrypt = (plainText, keyString) => {
  const bytes = plainText.split('').map(c => c.charCodeAt(0));
  const key = keyString.split('').map(c => c.charCodeAt(0));
  bytes.forEach((b, i) => {
    const c = b ^ key[i & key.length];
    bytes[i] = c;
  });
  
  return bytes;
};

const decrypt = (cypherText, keyString) => {
  const key = keyString.split('').map(c => c.charCodeAt(0));
  let plainText = '';
  cypherText.forEach((b, i) => {
    const p = b ^ key[i & key.length];
    plainText += String.fromCharCode(p);
  });
  
  return plainText;
};

(() => {
  document.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('address a');
    if (!links) {
      return;
    }

    links.forEach(link => {
      const key = KEY || document.location.host;
      
      if (link.getAttribute('data-plaintext')) {
        const plain = link.getAttribute('data-plaintext');
        const cypher = encrypt(plain, key);
        console.log(`Cyphertext for "${plain}" is "${JSON.stringify(cypher)}"`);
      } else {
        link.addEventListener('mouseover', e => {
          const cypher = JSON.parse(link.getAttribute('data-enchref'));
          const plain = decrypt(cypher, key);
          link.href = plain;
        });
      }
    })
  });
})();
