document.addEventListener("DOMContentLoaded", function () {
  const footerHTML = `
<footer class="site-footer">

  <div class="footer-container">

    <div class="footer-section footer-brand">
      <img src="logo.png" class="footer-logo">
      <h3>Artsen op Hoogte</h3>
      <p>
        Sinds 2012 structureel uit koers geraakt in de richting van Sölden.
      </p>
    </div>

    <div class="footer-section">
      <h4>Snelle ski-route</h4>
      <ul>
        <li><a href="index.html">Home</a></li>
        <li><a href="agenda.html">Agenda</a></li>
        <li><a href="artsen.html">Artsen</a></li>
        <li><a href="fotos.html">Foto’s</a></li>
      </ul>
    </div>

    <div class="footer-section">
      <h4>Overig</h4>
      <ul>
        <li>⛷️ 2012 – 2026</li>
        <li>🍻 Après-ski: ongecontroleerd</li>
        <li>🏔️ Route: altijd richting Sölden</li>
        <li>❄️ Valpartijen: niet gedocumenteerd</li>
      </ul>
    </div>

  </div>

  <div class="footer-bottom">
    <p>© 2012 – 2026 Artsen op Hoogte. Alle rechten voorbehouden, inclusief twijfelachtige beslissingen na 16:00.</p>
  </div>

</footer>
`;

  document.body.insertAdjacentHTML("beforeend", footerHTML);
});