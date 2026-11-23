// muestra si se entró por IP o por nombre de dominio
document.addEventListener("DOMContentLoaded", () => {
  const host = document.getElementById("host");
  if (host) host.textContent = location.host || "archivo local";
});