# API
Públicas: GET /api/health, /api/lojas, /api/categorias, /api/produtos, POST /api/auth/register, POST /api/auth/login, GET /api/auth/google.
Autenticadas: GET /api/auth/me, POST /api/auth/logout.
ADMIN/OPERADOR: GET /api/admin/dashboard, POST/PATCH /api/admin/produtos, PATCH /api/admin/produtos/:id/status.
ADMIN: GET /api/admin/auditoria, GET /api/admin/usuarios, POST /api/admin/produtos/:id/exclusao-confirmar, POST /api/admin/lojas, POST /api/admin/categorias.
