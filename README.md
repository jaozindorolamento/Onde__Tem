# OndeTem — versão completa
## IMPORTANTE
`frontend/index.html` e `frontend/style.css` foram preservados sem alteração. Toda a lógica nova está no `frontend/script.js` e no backend.

### Rodar
Backend:
```powershell
cd backend
npm.cmd install
npm.cmd start
```
Frontend: abra a pasta `frontend` no VS Code e use Live Server.

API: http://localhost:3000/api/health

### Contas
ADMIN: admin@ondetem.local / Admin@123
OPERADOR: operador@ondetem.local / Operador@123
CLIENTE: cliente@ondetem.local / Cliente@123

### O que foi colocado
- 35 produtos reais no SQLite.
- 10 lojas e 10 categorias.
- cadastro e login reais.
- sessão Bearer com expiração e logout.
- painel ADMIN/OPERADOR.
- cadastro/edição/status de produtos pela API.
- exclusão somente ADMIN com confirmação em duas etapas no servidor.
- auditoria.
- rate limit, Helmet, CORS, Zod, prepared statements e scrypt.
- índices e foreign keys.
- Google OAuth preparado: configure `.env` para habilitar.
- migrations, seed, DDL, documentação e diagramas PlantUML.
- sem `better-sqlite3`, usando `sql.js` para maior portabilidade.
