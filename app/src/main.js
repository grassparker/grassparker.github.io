import './style.css';

const app = document.getElementById('app');
app.textContent = 'Hello Vite — dev server running!';

if (import.meta.hot) {
  import.meta.hot.accept();
}
