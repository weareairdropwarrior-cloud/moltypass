const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 8080;

const ROOT = path.resolve(__dirname);

app.use(express.static(ROOT, { index: false }));

app.get('/mypage', (req, res) => res.sendFile(path.join(ROOT, 'mypage.html')));
app.get('/agent-wallet', (req, res) => res.sendFile(path.join(ROOT, 'agent-wallet.html')));
app.get('/', (req, res) => res.sendFile(path.join(ROOT, 'index.html')));
app.get('*', (req, res) => res.sendFile(path.join(ROOT, 'index.html')));

app.listen(PORT, () => {
  console.log(`✅ Molty Royale (geo-patched) on port ${PORT}`);
  console.log(`   isRestricted hardcoded → false`);
  console.log(`   /mypage and /agent-wallet accessible`);
});
