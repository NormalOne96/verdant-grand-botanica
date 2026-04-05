# 🌿 VERDANT GRAND BOTANICA — DEPLOY GUIDE
## Go from zero to live in 5 minutes

---

## WHAT YOU'RE DEPLOYING
- **225 plant + mushroom species** with scientific names and real lore
- **75 mushrooms** across 12 subcategories (medicinal, toxic, bioluminescent, psychedelic, parasitic...)
- **500+ creature fusions** with type synergies
- **Civilization hex world map** — explore, build districts, seed planets
- **4 victory paths**: Science, Nature, War, Exodus
- **Mobile-first UI** — works on your iPhone without a computer

---

## STEP 1 — Create the GitHub Repo (2 min)

1. Go to **github.com** and sign in (NormalOne96)
2. Click the **+** button → **New repository**
3. Name it: `verdant-grand-botanica`
4. Set it **Public**
5. **DO NOT** check "Add README" or anything else
6. Click **Create repository**
7. Copy the repo URL: `https://github.com/NormalOne96/verdant-grand-botanica.git`

---

## STEP 2 — Get the Files onto Your Machine

Download all 5 files from Claude's output into one folder on your Desktop called `verdant-grand-botanica`:

```
verdant-grand-botanica/
├── server.js
├── package.json
├── railway.toml
└── public/
    ├── index.html
    └── botanica.js
```

---

## STEP 3 — Push to GitHub (PowerShell)

Open **PowerShell** and run these commands one by one:

```powershell
# Navigate to your folder
cd "C:\Users\astys\OneDrive\Desktop\Claude\verdant-grand-botanica"

# Initialize git
git init
git config user.email "your@email.com"
git config user.name "Alex"

# Add all files
git add .
git commit -m "VERDANT Grand Botanica - live deploy"
git branch -M main
git remote add origin https://github.com/NormalOne96/verdant-grand-botanica.git
git push -u origin main
```

When prompted, sign in with your GitHub credentials.
If it asks for a token instead of password: go to github.com → Settings → Developer Settings → Personal Access Tokens → Generate token with `repo` scope.

---

## STEP 4 — Deploy on Railway (2 min)

1. Go to **railway.app**
2. Sign in with GitHub
3. Click **New Project**
4. Choose **Deploy from GitHub repo**
5. Select **NormalOne96/verdant-grand-botanica**
6. Click **Deploy Now**
7. Wait ~60 seconds for build to complete
8. Go to **Settings → Networking**
9. Click **Generate Domain**
10. Your game is live at something like: `verdant-grand-botanica.up.railway.app`

---

## STEP 5 — Access on iPhone Without a Computer

1. Open Safari on your iPhone
2. Go to your Railway URL (e.g. `verdant-grand-botanica.up.railway.app`)
3. Tap the **Share** button (box with arrow)
4. Tap **Add to Home Screen**
5. Tap **Add**

The game is now an icon on your iPhone home screen. It opens fullscreen like a native app, works anywhere with internet, and stays live 24/7 on Railway.

---

## STEP 6 — Keep It Updated

Every time you want to push a new version:

```powershell
cd "C:\Users\astys\OneDrive\Desktop\Claude\verdant-grand-botanica"
git add .
git commit -m "Update: [description]"
git push
```

Railway auto-detects the push and redeploys in ~60 seconds. Zero downtime.

---

## RAILWAY PRICING NOTE

Railway offers a **Hobby plan at $5/month** which gives you:
- Always-on (never sleeps)
- 8GB RAM, 8 vCPU
- Custom domain support
- Unlimited deploys

The free trial gives you $5 credit to start. For a static game like this, usage will be minimal.

---

## TROUBLESHOOTING

**"git is not recognized"** → Download Git from git-scm.com first

**"push rejected"** → Make sure you created the repo on GitHub first (Step 1) and the repo name matches exactly

**Railway build fails** → Check that `package.json` has `"start": "node server.js"` and `server.js` exists at the root level (not inside `public/`)

**Game loads but plants don't show** → Check that `botanica.js` is in the `public/` folder alongside `index.html`

**White screen on iPhone** → Clear Safari cache, try again. The game is 186KB total — loads in under 1 second on any connection.
