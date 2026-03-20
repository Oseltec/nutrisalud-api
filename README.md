# NutriSalud API

Backend API para el sistema de nutrición clínica.

## Despliegue en Render.com

1. Ve a [render.com](https://render.com) y crea cuenta
2. Click en **"New +"** → **"Blueprint"**
3. Conecta tu repositorio de GitHub
4. Render detectará el archivo `render.yaml` y configurará todo automáticamente
5. Una vez desplegado, obtén la URL (ejemplo: `https://nutrisalud-api.onrender.com`)

## URLs de producción

- API: `https://nutrisalud-api.onrender.com`
- Health: `https://nutrisalud-api.onrender.com/health`

## Endpoints

### Autenticación
```
POST /api/auth/register
POST /api/auth/login
```

### Pacientes (requiere token)
```
GET    /api/patients
POST   /api/patients
GET    /api/patients/:id
PUT    /api/patients/:id
DELETE /api/patients/:id
PUT    /api/patients/:id/clinical-history
POST   /api/patients/:id/labs
POST   /api/patients/:id/diagnostics
```

### Nutriología
```
POST /api/calories/calculate
POST /api/meal-plans/generate
POST /api/shopping-list/generate
```

## Configuración

Variables de entorno en Render:
- `JWT_SECRET` - Clave secreta para tokens JWT
- `JWT_EXPIRES_IN` - Tiempo de expiración (default: 7d)
- `PORT` - Puerto del servidor (default: 10000)
