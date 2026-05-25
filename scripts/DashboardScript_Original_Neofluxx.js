<script>
  fetch('https://raw.githubusercontent.com/Neofluxx-Tecnologia/chatfluxx/refs/heads/main/scripts/sidebar_principal_prod_neofluxx.js')
    .then(r => r.text())
    .then(code => {
      const s = document.createElement('script');
      s.textContent = code;
      document.head.appendChild(s);
    });
</script>