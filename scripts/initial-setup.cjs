const path = require('path');
const fs = require('fs');

const dbPath = path.resolve(__dirname, '../db.json');

const initialData = {
  tasks: [],
};

if (!fs.existsSync(dbPath)) {
  fs.writeFileSync(dbPath, JSON.stringify(initialData, null, 2), 'utf-8');

  console.log(`✅ Created db.json at ${dbPath}`);
} else {
  console.log(`ℹ️ db.json already exists at ${dbPath}`);
}
