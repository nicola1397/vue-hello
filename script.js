const { createApp } = Vue;
const app = createApp({
  data() {
    return {
      saluto: "C'è nessuno?",
      image: "https://i.gifer.com/7VE.gif",
      risposta: "Pare di no...",
    };
  },
});
app.mount("#content");
